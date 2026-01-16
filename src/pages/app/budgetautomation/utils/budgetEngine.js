import { BUDGET_ENGINE_CONFIG } from "../config/budgetEngineConfig";

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

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function parseDate(value) {
  if (!value) return null;
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function sum(values) {
  return values.reduce((acc, value) => acc + value, 0);
}

function safeDivide(numerator, denominator) {
  if (!denominator) return 0;
  return numerator / denominator;
}

function daysBetween(a, b) {
  return Math.floor((a - b) / (1000 * 60 * 60 * 24));
}

function normalizeScore(cost, benchmark) {
  if (!cost || !benchmark) return 0;
  const ratio = benchmark / cost;
  const capped = clamp(
    ratio,
    0,
    BUDGET_ENGINE_CONFIG.normalization.maxOutperformance
  );
  const score =
    (capped / BUDGET_ENGINE_CONFIG.normalization.maxOutperformance) *
    BUDGET_ENGINE_CONFIG.normalization.maxScore;
  return clamp(
    Math.round(score),
    BUDGET_ENGINE_CONFIG.normalization.minScore,
    BUDGET_ENGINE_CONFIG.normalization.maxScore
  );
}

function pickLatestRow(rows) {
  if (!rows.length) return null;
  return rows.reduce((latest, row) =>
    row.date > latest.date ? row : latest
  );
}

function buildTimeframe(rows, startDate, endDate) {
  return rows.filter((row) => row.date >= startDate && row.date <= endDate);
}

function aggregateCampaignMetrics(rows) {
  const grouped = new Map();

  rows.forEach((row) => {
    const key = row.campaign;
    if (!grouped.has(key)) {
      grouped.set(key, []);
    }
    grouped.get(key).push(row);
  });

  const result = {};
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
      .filter((value) => typeof value === "number");
    const avgUtilization = utilizationValues.length
      ? sum(utilizationValues) / utilizationValues.length
      : null;
    const currentBudget = latest?.budget ?? budgets[budgets.length - 1] ?? 0;
    const derivedUtilization =
      currentBudget > 0
        ? safeDivide(spend, currentBudget * campaignRows.length)
        : 0;

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
      budgetUtilization:
        avgUtilization !== null ? avgUtilization : derivedUtilization,
    };
  });

  return result;
}

function aggregateTotals(metrics) {
  const totals = Object.values(metrics).reduce(
    (acc, item) => ({
      spend: acc.spend + item.spend,
      demos: acc.demos + item.demos,
      enrollments: acc.enrollments + item.enrollments,
    }),
    { spend: 0, demos: 0, enrollments: 0 }
  );
  return totals;
}

function computeScoreForFocus({
  metricsByTimeframe,
  benchmarks,
  focus,
  variant,
}) {
  const variantWeights = VARIANT_WEIGHTS[variant] || BUDGET_ENGINE_CONFIG.weights;
  const weights =
    focus === "demo"
      ? variantWeights.demo
      : focus === "enrollment"
      ? variantWeights.enrollment
      : null;

  return BUDGET_ENGINE_CONFIG.timeframes.reduce((acc, timeframe) => {
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
      const score =
        focus === "demo" ? demoScore : enrollmentScore;
      weightedScore = score * weights[key];
      weightUsed = weights[key];
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
  }, { totalScore: 0, weightSum: 0, detail: {} });
}

function determineBand(score) {
  const band = BUDGET_ENGINE_CONFIG.scoreBands.find((item) => score >= item.min);
  return band ? band.action : "Hold";
}

function isTcpA(strategy) {
  return String(strategy || "").toLowerCase().includes("tcpa");
}

function formatPercent(value) {
  return `${Math.round(value * 100)}%`;
}

export function buildBudgetRecommendations({
  rows,
  focus,
  timeframeSelection,
  customRange,
  seasonalityMultiplier,
  enableGuardrails = true,
  guardrailOverrides,
  campaignSettings,
  experimentVariant = "A",
}) {
  const guardrailsActive = enableGuardrails !== false;
  const configGuardrails = {
    ...BUDGET_ENGINE_CONFIG.guardrails,
    ...(guardrailOverrides || {}),
  };

  const dates = rows
    .map((row) => row.date)
    .filter(Boolean)
    .sort((a, b) => a - b);
  const maxDate = dates[dates.length - 1];
  const minDate = dates[0];
  const endDate = customRange?.end ?? maxDate ?? new Date();
  const startDate =
    customRange?.start ??
    new Date(endDate.getTime() - timeframeSelection * 24 * 60 * 60 * 1000);

  const timeframeBuckets = {};
  const benchmarks = {};

  BUDGET_ENGINE_CONFIG.timeframes.forEach((timeframe) => {
    const bucketStart = new Date(
      endDate.getTime() - timeframe.days * 24 * 60 * 60 * 1000
    );
    const timeframeRows = buildTimeframe(rows, bucketStart, endDate);
    const metrics = aggregateCampaignMetrics(timeframeRows);
    const totals = aggregateTotals(metrics);
    benchmarks[timeframe.key] = {
      costPerDemo: safeDivide(totals.spend, totals.demos),
      costPerEnrollment: safeDivide(totals.spend, totals.enrollments),
    };
    timeframeBuckets[timeframe.key] = metrics;
  });

  const selectedRows = buildTimeframe(rows, startDate, endDate);
  const selectedMetrics = aggregateCampaignMetrics(selectedRows);
  const allMetrics = aggregateCampaignMetrics(rows);

  const allCampaigns = Object.keys(allMetrics);

  const recommendations = allCampaigns.map((campaign) => {
    const current = selectedMetrics[campaign] || allMetrics[campaign];
    const perTimeframe = {};

    BUDGET_ENGINE_CONFIG.timeframes.forEach((timeframe) => {
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
    const guardrails = [];
    const campaignConfig = campaignSettings[campaign] || {};
    let stopLoss = false;
    if (guardrailsActive) {
      const lastChange = parseDate(campaignConfig.lastBudgetChangeDate);
      if (lastChange) {
        const daysSince = daysBetween(endDate, lastChange);
        if (daysSince < configGuardrails.minDaysBetweenChanges) {
          guardrails.push(
            `Budget change blocked (changed ${daysSince} days ago).`
          );
          action = "Hold";
        }
      }

      stopLoss =
        perTimeframe.d7?.spend > configGuardrails.stopLossSpend &&
        perTimeframe.d7?.conversions === 0;
      if (stopLoss) {
        guardrails.push("Stop-loss flag: spend with zero conversions.");
      }
    }

    const bidIsTcpa = isTcpA(current.bidStrategy);
    const utilization =
      perTimeframe.d7?.budgetUtilization ??
      current.budgetUtilization ??
      0;

    let adjustmentType = "Budget";
    if (guardrailsActive && bidIsTcpa) {
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

    const minBudget = guardrailsActive ? campaignConfig.minBudget ?? 0 : 0;
    const maxBudget = guardrailsActive ? campaignConfig.maxBudget ?? Infinity : Infinity;
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

    const reasonParts = [];
    if (focus === "demo") {
      reasonParts.push(
        `28-day Cost/Demo is ${Math.round(
          (benchmarks.d28.costPerDemo
            ? (perTimeframe.d28.costPerDemo / benchmarks.d28.costPerDemo - 1) *
              100
            : 0)
        )}% vs account average.`
      );
    } else if (focus === "enrollment") {
      reasonParts.push(
        `28-day Cost/Enrollment is ${Math.round(
          (benchmarks.d28.costPerEnrollment
            ? (perTimeframe.d28.costPerEnrollment /
                benchmarks.d28.costPerEnrollment -
                1) *
              100
            : 0)
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

    if (guardrailsActive && guardrails.length) {
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
      dateRange: { startDate, endDate, minDate, maxDate },
    };
  });

  return recommendations;
}
