import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const PROJECT_URL = Deno.env.get("PROJECT_URL") ?? "";
const PROJECT_ANON_KEY = Deno.env.get("PROJECT_ANON_KEY") ?? "";
const SERVICE_ROLE_KEY = Deno.env.get("SERVICE_ROLE_KEY") ?? "";

const LOGIC_VERSION = "v1.1.0";
const CONFIG = {
  timeframes: [
    { label: "Last 7 days", days: 7, key: "d7" },
    { label: "Last 28 days", days: 28, key: "d28" },
    { label: "Last 90 days", days: 90, key: "d90" },
  ],
  weights: {
    demo: { d7: 0.4, d28: 0.5, d90: 0.1 },
    enrollment: { d7: 0.3, d28: 0.5, d90: 0.2 },
  },
  scoreBands: [
    { min: 80, action: "Scale" },
    { min: 60, action: "Hold" },
    { min: 40, action: "Watch" },
    { min: 0, action: "Descale" },
  ],
  guardrails: {
    minDaysBetweenChanges: 7,
    utilizationThreshold: 0.75,
    defaultStepPercent: 0.1,
    maxStepPercent: 0.15,
    stopLossSpend: 1500,
  },
  normalization: {
    maxOutperformance: 2,
    minScore: 0,
    maxScore: 100,
  },
};

const HYBRID_WEIGHTS = { demo: 0.5, enrollment: 0.5 };
const VARIANT_WEIGHTS = {
  A: {
    demo: { d7: 0.4, d28: 0.5, d90: 0.1 },
    enrollment: { d7: 0.3, d28: 0.5, d90: 0.2 },
  },
  B: {
    demo: { d7: 0.55, d28: 0.35, d90: 0.1 },
    enrollment: { d7: 0.45, d28: 0.4, d90: 0.15 },
  },
};

type BudgetRow = {
  date: string | null;
  campaign: string;
  spend: number;
  leads: number;
  demos: number;
  enrollments: number;
  budget: number;
  bidStrategy: string;
  tcpa: number;
  impressions: number;
  clicks: number;
  conversions: number;
  budgetUtilization: number | null;
  lastBudgetChangeDate?: string;
};

function jsonResponse(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "authorization, x-client-info, apikey, content-type",
    },
  });
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function parseDate(value: string | null) {
  if (!value) return null;
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function sum(values: number[]) {
  return values.reduce((acc, value) => acc + value, 0);
}

function safeDivide(numerator: number, denominator: number) {
  if (!denominator) return 0;
  return numerator / denominator;
}

function daysBetween(a: Date, b: Date) {
  return Math.floor((a.getTime() - b.getTime()) / (1000 * 60 * 60 * 24));
}

function normalizeScore(cost: number, benchmark: number) {
  if (!cost || !benchmark) return 0;
  const ratio = benchmark / cost;
  const capped = clamp(ratio, 0, CONFIG.normalization.maxOutperformance);
  const score =
    (capped / CONFIG.normalization.maxOutperformance) *
    CONFIG.normalization.maxScore;
  return clamp(
    Math.round(score),
    CONFIG.normalization.minScore,
    CONFIG.normalization.maxScore
  );
}

function pickLatestRow(rows: { date: Date }[]) {
  if (!rows.length) return null;
  return rows.reduce((latest, row) => (row.date > latest.date ? row : latest));
}

function buildTimeframe(
  rows: { date: Date }[],
  startDate: Date,
  endDate: Date
) {
  return rows.filter((row) => row.date >= startDate && row.date <= endDate);
}

function aggregateCampaignMetrics(rows: any[]) {
  const grouped = new Map<string, any[]>();
  rows.forEach((row) => {
    const key = row.campaign;
    if (!grouped.has(key)) grouped.set(key, []);
    grouped.get(key)?.push(row);
  });

  const result: Record<string, any> = {};
  grouped.forEach((campaignRows, campaign) => {
    const spend = sum(campaignRows.map((row) => row.spend));
    const leads = sum(campaignRows.map((row) => row.leads));
    const demos = sum(campaignRows.map((row) => row.demos));
    const enrollments = sum(campaignRows.map((row) => row.enrollments));
    const conversions = sum(campaignRows.map((row) => row.conversions));
    const latest = pickLatestRow(campaignRows);
    const budgets = campaignRows.map((row) => row.budget).filter(Boolean);
    const utilizationValues = campaignRows
      .map((row) => row.budgetUtilization)
      .filter((value: number) => typeof value === "number");
    const avgUtilization = utilizationValues.length
      ? sum(utilizationValues) / utilizationValues.length
      : null;
    const currentBudget = latest?.budget ?? budgets[budgets.length - 1] ?? 0;
    const derivedUtilization =
      currentBudget > 0 ? safeDivide(spend, currentBudget * campaignRows.length) : 0;

    result[campaign] = {
      spend,
      leads,
      demos,
      enrollments,
      conversions,
      latest,
      currentBudget,
      bidStrategy: latest?.bidStrategy || "",
      tcpa: latest?.tcpa ?? 0,
      budgetUtilization: avgUtilization !== null ? avgUtilization : derivedUtilization,
    };
  });

  return result;
}

function aggregateTotals(metrics: Record<string, any>) {
  return Object.values(metrics).reduce(
    (acc: any, item: any) => ({
      spend: acc.spend + item.spend,
      demos: acc.demos + item.demos,
      enrollments: acc.enrollments + item.enrollments,
    }),
    { spend: 0, demos: 0, enrollments: 0 }
  );
}

function computeScoreForFocus({
  metricsByTimeframe,
  benchmarks,
  focus,
  variant,
}: {
  metricsByTimeframe: Record<string, any>;
  benchmarks: Record<string, any>;
  focus: string;
  variant: string;
}) {
  const variantWeights =
    VARIANT_WEIGHTS[variant as "A" | "B"] || CONFIG.weights;
  const weights =
    focus === "demo"
      ? variantWeights.demo
      : focus === "enrollment"
      ? variantWeights.enrollment
      : null;

  return CONFIG.timeframes.reduce(
    (acc, timeframe) => {
      const key = timeframe.key;
      const data = metricsByTimeframe[key] || {};
      const demoScore = normalizeScore(
        data.costPerDemo,
        benchmarks[key]?.costPerDemo
      );
      const enrollmentScore = normalizeScore(
        data.costPerEnrollment,
        benchmarks[key]?.costPerEnrollment
      );

      let weightedScore = 0;
      let weightUsed = 0;

      if (focus === "hybrid") {
        const combined =
          demoScore * HYBRID_WEIGHTS.demo +
          enrollmentScore * HYBRID_WEIGHTS.enrollment;
        weightedScore = combined * variantWeights.demo[key];
        weightUsed = variantWeights.demo[key];
      } else {
        const score = focus === "demo" ? demoScore : enrollmentScore;
        weightedScore = score * (weights as any)[key];
        weightUsed = (weights as any)[key];
      }

      return {
        totalScore: acc.totalScore + weightedScore,
        weightSum: acc.weightSum + weightUsed,
        detail: {
          ...acc.detail,
          [key]: {
            demoScore,
            enrollmentScore,
            weightedScore,
            weight: weightUsed,
          },
        },
      };
    },
    { totalScore: 0, weightSum: 0, detail: {} }
  );
}

function determineBand(score: number) {
  const band = CONFIG.scoreBands.find((item) => score >= item.min);
  return band ? band.action : "Hold";
}

function isTcpA(strategy: string) {
  return String(strategy || "").toLowerCase().includes("tcpa");
}

function formatPercent(value: number) {
  return `${Math.round(value * 100)}%`;
}

function buildBudgetRecommendations({
  rows,
  focus,
  timeframeSelection,
  customRange,
  seasonalityMultiplier,
  guardrailOverrides,
  campaignSettings,
  experimentVariant,
}: {
  rows: BudgetRow[];
  focus: string;
  timeframeSelection: number;
  customRange: { start: string; end: string } | null;
  seasonalityMultiplier: number;
  guardrailOverrides: any;
  campaignSettings: Record<string, any>;
  experimentVariant: string;
}) {
  const configGuardrails = {
    ...CONFIG.guardrails,
    ...guardrailOverrides,
  };

  const datedRows = rows
    .map((row) => ({
      ...row,
      date: parseDate(row.date) || new Date(),
    }))
    .filter((row) => row.date);

  const dates = datedRows.map((row) => row.date).sort((a, b) => +a - +b);
  const maxDate = dates[dates.length - 1] || new Date();
  const minDate = dates[0] || new Date();
  const endDate = customRange?.end ? new Date(customRange.end) : maxDate;
  const startDate = customRange?.start
    ? new Date(customRange.start)
    : new Date(endDate.getTime() - timeframeSelection * 24 * 60 * 60 * 1000);

  const timeframeBuckets: Record<string, any> = {};
  const benchmarks: Record<string, any> = {};

  CONFIG.timeframes.forEach((timeframe) => {
    const bucketStart = new Date(
      endDate.getTime() - timeframe.days * 24 * 60 * 60 * 1000
    );
    const timeframeRows = buildTimeframe(datedRows, bucketStart, endDate);
    const metrics = aggregateCampaignMetrics(timeframeRows);
    const totals = aggregateTotals(metrics);
    benchmarks[timeframe.key] = {
      costPerDemo: safeDivide(totals.spend, totals.demos),
      costPerEnrollment: safeDivide(totals.spend, totals.enrollments),
    };
    timeframeBuckets[timeframe.key] = metrics;
  });

  const selectedRows = buildTimeframe(datedRows, startDate, endDate);
  const selectedMetrics = aggregateCampaignMetrics(selectedRows);
  const allMetrics = aggregateCampaignMetrics(datedRows);
  const allCampaigns = Object.keys(allMetrics);

  return allCampaigns.map((campaign) => {
    const current = selectedMetrics[campaign] || allMetrics[campaign];
    const perTimeframe: Record<string, any> = {};

    CONFIG.timeframes.forEach((timeframe) => {
      const metrics = timeframeBuckets[timeframe.key][campaign] || {};
      perTimeframe[timeframe.key] = {
        spend: metrics.spend ?? 0,
        demos: metrics.demos ?? 0,
        enrollments: metrics.enrollments ?? 0,
        conversions: metrics.conversions ?? 0,
        costPerDemo: safeDivide(metrics.spend ?? 0, metrics.demos ?? 0),
        costPerEnrollment: safeDivide(
          metrics.spend ?? 0,
          metrics.enrollments ?? 0
        ),
        budgetUtilization: metrics.budgetUtilization ?? 0,
      };
    });

    const scorePack = computeScoreForFocus({
      metricsByTimeframe: perTimeframe,
      benchmarks,
      focus,
      variant: experimentVariant,
    });
    const baseScore = scorePack.weightSum
      ? scorePack.totalScore / scorePack.weightSum
      : 0;
    const adjustedScore = clamp(
      Math.round(baseScore * (seasonalityMultiplier || 1)),
      0,
      100
    );

    let action = determineBand(adjustedScore);
    const guardrails: string[] = [];
    const campaignConfig = campaignSettings[campaign] || {};
    const lastChange = parseDate(campaignConfig.lastBudgetChangeDate || null);
    if (lastChange) {
      const daysSince = daysBetween(endDate, lastChange);
      if (daysSince < configGuardrails.minDaysBetweenChanges) {
        guardrails.push(
          `Budget change blocked (changed ${daysSince} days ago).`
        );
        action = "Hold";
      }
    }

    const stopLoss =
      perTimeframe.d7?.spend > configGuardrails.stopLossSpend &&
      perTimeframe.d7?.conversions === 0;
    if (stopLoss) {
      guardrails.push("Stop-loss flag: spend with zero conversions.");
    }

    const bidIsTcpa = isTcpA(current.bidStrategy);
    const utilization =
      perTimeframe.d7?.budgetUtilization ?? current.budgetUtilization ?? 0;

    let adjustmentType = "Budget";
    if (bidIsTcpa) {
      adjustmentType =
        utilization < configGuardrails.utilizationThreshold
          ? "TCPA"
          : "Budget";
    }

    const stepPercent = clamp(
      configGuardrails.defaultStepPercent,
      0,
      configGuardrails.maxStepPercent
    );

    const minBudget = campaignConfig.minBudget ?? 0;
    const maxBudget = campaignConfig.maxBudget ?? Infinity;
    let recommendedBudget = current.currentBudget;
    let budgetDelta = 0;
    if (action === "Scale") {
      budgetDelta = current.currentBudget * stepPercent;
      recommendedBudget = clamp(
        current.currentBudget + budgetDelta,
        minBudget,
        maxBudget
      );
    } else if (action === "Descale") {
      budgetDelta = current.currentBudget * -stepPercent;
      recommendedBudget = clamp(
        current.currentBudget + budgetDelta,
        minBudget,
        maxBudget
      );
    }

    const reasonParts: string[] = [];
    if (focus === "demo") {
      reasonParts.push(
        `28-day Cost/Demo is ${Math.round(
          benchmarks.d28.costPerDemo
            ? (perTimeframe.d28.costPerDemo / benchmarks.d28.costPerDemo - 1) *
              100
            : 0
        )}% vs account average.`
      );
    } else if (focus === "enrollment") {
      reasonParts.push(
        `28-day Cost/Enrollment is ${Math.round(
          benchmarks.d28.costPerEnrollment
            ? (perTimeframe.d28.costPerEnrollment /
                benchmarks.d28.costPerEnrollment -
                1) *
              100
            : 0
        )}% vs account average.`
      );
    } else {
      reasonParts.push("Hybrid score blends demo + enrollment efficiency.");
    }

    if (adjustmentType === "TCPA") {
      reasonParts.push(
        `Utilization ${formatPercent(utilization)} suggests TCPA tuning.`
      );
    } else {
      reasonParts.push(
        `Utilization ${formatPercent(utilization)} supports budget action.`
      );
    }

    if (seasonalityMultiplier && seasonalityMultiplier !== 1) {
      reasonParts.push(
        `Seasonality bias applied (${formatPercent(seasonalityMultiplier - 1)}).`
      );
    }

    if (guardrails.length) {
      reasonParts.push(guardrails.join(" "));
    }

    return {
      campaign,
      action,
      adjustmentType,
      confidenceScore: adjustedScore,
      currentBudget: current.currentBudget,
      recommendedBudget,
      budgetDelta,
      bidStrategy: current.bidStrategy,
      tcpa: current.tcpa,
      utilization,
      stopLoss,
      timeframeMetrics: perTimeframe,
      benchmarkMetrics: benchmarks,
      scoreDetail: scorePack.detail,
      reasonSummary: reasonParts.join(" "),
      guardrails,
      logicVersion: LOGIC_VERSION,
      experimentVariant,
      dateRange: { startDate, endDate, minDate, maxDate },
    };
  });
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "authorization, x-client-info, apikey, content-type",
      },
    });
  }

  try {
    const payload = await req.json();
    const {
      rows,
      focus,
      timeframeSelection,
      customRange,
      seasonalityMultiplier,
      guardrailOverrides,
      campaignSettings,
      experimentVariant = "A",
      fileName,
      fileUrl,
    } = payload;

    if (!rows?.length) {
      return jsonResponse({ error: "Missing rows" }, 400);
    }

    const authHeader = req.headers.get("Authorization") || "";
    const supabase = createClient(PROJECT_URL, PROJECT_ANON_KEY, {
      global: {
        headers: {
          Authorization: authHeader,
        },
      },
    });

    const { data: userData } = await supabase.auth.getUser();
    const user = userData?.user || null;

    const recommendations = buildBudgetRecommendations({
      rows,
      focus,
      timeframeSelection,
      customRange,
      seasonalityMultiplier,
      guardrailOverrides,
      campaignSettings,
      experimentVariant,
    });

    if (!SERVICE_ROLE_KEY || !user) {
      return jsonResponse({ recommendations });
    }

    const admin = createClient(PROJECT_URL, SERVICE_ROLE_KEY);
    const dateRange = recommendations?.[0]?.dateRange
      ? {
          start: recommendations[0].dateRange.startDate?.toISOString?.() || null,
          end: recommendations[0].dateRange.endDate?.toISOString?.() || null,
        }
      : null;

    const inputs = {
      focus,
      timeframeSelection,
      customRange,
      seasonalityMultiplier,
      guardrailOverrides,
      campaignSettings,
      experimentVariant,
    };
    const outputs = {
      recommendations,
    };

    const { data: dataset, error: datasetError } = await admin
      .from("datasets")
      .insert([
        {
          user_id: user.id,
          file_name: fileName,
          file_url: fileUrl,
          focus,
          timeframe: timeframeSelection,
          seasonality_multiplier: seasonalityMultiplier,
          guardrails: guardrailOverrides,
          campaign_count: Object.keys(campaignSettings || {}).length,
          row_count: rows.length,
          date_range: dateRange,
          logic_version: LOGIC_VERSION,
          experiment_variant: experimentVariant,
          inputs,
          outputs,
        },
      ])
      .select("id")
      .single();

    if (datasetError) {
      return jsonResponse({ recommendations, datasetError });
    }

    const recPayload = recommendations.map((rec: any) => ({
      dataset_id: dataset.id,
      campaign: rec.campaign,
      action: rec.action,
      adjustment_type: rec.adjustmentType,
      confidence_score: rec.confidenceScore,
      current_budget: rec.currentBudget,
      recommended_budget: rec.recommendedBudget,
      budget_delta: rec.budgetDelta,
      reason_summary: rec.reasonSummary,
      guardrails: rec.guardrails,
      bid_strategy: rec.bidStrategy,
      utilization: rec.utilization,
      stop_loss: rec.stopLoss,
      logic_version: LOGIC_VERSION,
      experiment_variant: experimentVariant,
    }));

    const { error: recError } = await admin
      .from("recommendations")
      .insert(recPayload);

    if (recError) {
      return jsonResponse({ recommendations, recError });
    }

    return jsonResponse({ recommendations, datasetId: dataset.id });
  } catch (err) {
    return jsonResponse({ error: err?.message || "Server error" }, 500);
  }
});
