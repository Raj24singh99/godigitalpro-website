import React, { useMemo, useState } from "react";
import AppShell from "../../components/app/AppShell";
import { parseCsv } from "../../utils/csv";
import { buildBudgetRecommendations } from "../../utils/budgetEngine";
import { BUDGET_ENGINE_CONFIG } from "../../config/budgetEngineConfig";
import { useAuth } from "../../context/AuthProvider";
import { supabase } from "../../config/supabase";
import {
  UploadCloud,
  Layers,
  Target,
  ShieldCheck,
  Wand2,
  ClipboardCopy,
  Download,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const REQUIRED_COLUMNS = [
  { key: "date", label: "Date", required: true },
  { key: "campaign", label: "Campaign Name / ID", required: true },
  { key: "spend", label: "Spend", required: true },
  { key: "leads", label: "Leads", required: true },
  { key: "demos", label: "Demos", required: true },
  { key: "enrollments", label: "Enrollments", required: true },
  { key: "budget", label: "Budget", required: true },
  { key: "bidStrategy", label: "Bid Strategy", required: true },
  { key: "tcpa", label: "TCPA", required: false },
  { key: "impressions", label: "Impressions", required: false },
  { key: "clicks", label: "Clicks", required: false },
  { key: "conversions", label: "Conversions", required: false },
  { key: "budgetUtilization", label: "Budget Utilization %", required: false },
  { key: "lastBudgetChangeDate", label: "Last Budget Change Date", required: false },
];

const ALIASES = {
  date: ["date", "day"],
  campaign: ["campaign", "campaign name", "campaign id", "campaign_id"],
  spend: ["spend", "cost"],
  leads: ["leads"],
  demos: ["demos", "demo"],
  enrollments: ["enrollments", "enrollment"],
  budget: ["budget", "daily budget"],
  bidStrategy: ["bid strategy", "bidding strategy"],
  tcpa: ["tcpa", "target cpa"],
  impressions: ["impressions", "impr"],
  clicks: ["clicks"],
  conversions: ["conversions", "conv"],
  budgetUtilization: ["budget utilization %", "budget utilization", "utilization"],
  lastBudgetChangeDate: ["last budget change", "last change date"],
};

const STEP_OPTIONS = [
  { label: "10%", value: 0.1 },
  { label: "12%", value: 0.12 },
  { label: "15%", value: 0.15 },
];

function normalizeHeader(value) {
  return String(value || "").trim().toLowerCase();
}

function guessMapping(headers) {
  const normalized = headers.map(normalizeHeader);
  return REQUIRED_COLUMNS.reduce((acc, column) => {
    const aliases = ALIASES[column.key] || [];
    const index = normalized.findIndex((header) =>
      aliases.includes(header)
    );
    acc[column.key] = index >= 0 ? headers[index] : "";
    return acc;
  }, {});
}

function toNumber(value) {
  if (value === null || value === undefined || value === "") return 0;
  const cleaned = String(value).replace(/[^0-9.-]+/g, "");
  const parsed = Number(cleaned);
  return Number.isNaN(parsed) ? 0 : parsed;
}

function toPercent(value) {
  if (value === null || value === undefined || value === "") return null;
  const raw = toNumber(value);
  return raw > 1 ? raw / 100 : raw;
}

function parseDate(value) {
  if (!value) return null;
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value || 0);
}

function formatPercent(value) {
  if (value === null || value === undefined) return "—";
  return `${Math.round(value * 100)}%`;
}

export default function BudgetAutomation() {
  const [fileName, setFileName] = useState("");
  const [fileRef, setFileRef] = useState(null);
  const [headers, setHeaders] = useState([]);
  const [rows, setRows] = useState([]);
  const [mapping, setMapping] = useState({});
  const [mappingReady, setMappingReady] = useState(false);
  const [focus, setFocus] = useState("enrollment");
  const [timeframe, setTimeframe] = useState(28);
  const [customRange, setCustomRange] = useState({
    start: "",
    end: "",
  });
  const [seasonalityMultiplier, setSeasonalityMultiplier] = useState(1);
  const [experimentVariant, setExperimentVariant] = useState("A");
  const [guardrails, setGuardrails] = useState({
    minDaysBetweenChanges: BUDGET_ENGINE_CONFIG.guardrails.minDaysBetweenChanges,
    utilizationThreshold: BUDGET_ENGINE_CONFIG.guardrails.utilizationThreshold,
    defaultStepPercent: BUDGET_ENGINE_CONFIG.guardrails.defaultStepPercent,
    stopLossSpend: BUDGET_ENGINE_CONFIG.guardrails.stopLossSpend,
  });
  const [campaignSettings, setCampaignSettings] = useState({});
  const [recommendations, setRecommendations] = useState([]);
  const [expanded, setExpanded] = useState({});
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const [savedMessage, setSavedMessage] = useState("");
  const { user } = useAuth();

  const requiredMissing = useMemo(() => {
    return REQUIRED_COLUMNS.filter(
      (column) => column.required && !mapping[column.key]
    );
  }, [mapping]);

  const campaigns = useMemo(() => {
    const list = new Set(rows.map((row) => row.campaign));
    return Array.from(list);
  }, [rows]);

  const handleFileUpload = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const text = await file.text();
    const parsed = parseCsv(text);
    setFileName(file.name);
    setFileRef(file);
    setHeaders(parsed.headers);
    setMapping(guessMapping(parsed.headers));
    setRows(parsed.rows);
    setMappingReady(false);
    setRecommendations([]);
    setCampaignSettings({});
    setError("");
    setSavedMessage("");
  };

  const handleMappingConfirm = () => {
    if (requiredMissing.length) {
      setError("Map all required columns before continuing.");
      return;
    }
    const canonicalRows = rows.map((row) => ({
      date: parseDate(row[mapping.date]),
      campaign: row[mapping.campaign] || "Unknown",
      spend: toNumber(row[mapping.spend]),
      leads: toNumber(row[mapping.leads]),
      demos: toNumber(row[mapping.demos]),
      enrollments: toNumber(row[mapping.enrollments]),
      budget: toNumber(row[mapping.budget]),
      bidStrategy: row[mapping.bidStrategy] || "",
      tcpa: toNumber(row[mapping.tcpa]),
      impressions: toNumber(row[mapping.impressions]),
      clicks: toNumber(row[mapping.clicks]),
      conversions: toNumber(row[mapping.conversions]),
      budgetUtilization: toPercent(row[mapping.budgetUtilization]),
      lastBudgetChangeDate: row[mapping.lastBudgetChangeDate] || "",
    }));
    setRows(canonicalRows);
    const nextSettings = canonicalRows.reduce((acc, row) => {
      if (!acc[row.campaign]) {
        acc[row.campaign] = {
          minBudget: Math.round(row.budget * 0.6),
          maxBudget: Math.round(row.budget * 1.6),
          lastBudgetChangeDate: row.lastBudgetChangeDate || "",
        };
      }
      return acc;
    }, {});
    setCampaignSettings(nextSettings);
    setMappingReady(true);
    setError("");
  };

  const handleRun = async () => {
    if (!rows.length) {
      setError("Upload data before running recommendations.");
      return;
    }
    const custom =
      timeframe === "custom"
        ? {
            start: customRange.start ? new Date(customRange.start) : null,
            end: customRange.end ? new Date(customRange.end) : null,
          }
        : null;

    setError("");
    setSavedMessage("");

    if (user?.uid) {
      try {
        setSaving(true);
        const { data: sessionData } = await supabase.auth.getSession();
        const accessToken = sessionData?.session?.access_token;
        const { data, error: invokeError } = await supabase.functions.invoke(
          "budget-automation",
          {
            body: {
              rows,
              focus,
              timeframeSelection: timeframe === "custom" ? 28 : timeframe,
              customRange:
                custom?.start && custom?.end ? custom : null,
              seasonalityMultiplier,
              guardrailOverrides: guardrails,
              campaignSettings,
              fileName,
              fileUrl: null,
              experimentVariant,
            },
            headers: accessToken
              ? { Authorization: `Bearer ${accessToken}` }
              : {},
          }
        );
        if (invokeError) throw invokeError;
        if (data?.recommendations?.length) {
          setRecommendations(data.recommendations);
          setSavedMessage("Saved to your workspace.");
        } else {
          setError("No recommendations returned.");
        }
      } catch (saveError) {
        const recs = buildBudgetRecommendations({
          rows,
          focus,
          timeframeSelection: timeframe === "custom" ? 28 : timeframe,
          customRange:
            custom?.start && custom?.end ? custom : null,
          seasonalityMultiplier,
          guardrailOverrides: guardrails,
          campaignSettings,
          experimentVariant,
        });
        setRecommendations(recs);
        setError(
          saveError?.message ||
            "Server compute failed. Showing local recommendations."
        );
      } finally {
        setSaving(false);
      }
    } else {
      const recs = buildBudgetRecommendations({
        rows,
        focus,
        timeframeSelection: timeframe === "custom" ? 28 : timeframe,
        customRange:
          custom?.start && custom?.end ? custom : null,
        seasonalityMultiplier,
        guardrailOverrides: guardrails,
        campaignSettings,
        experimentVariant,
      });
      setRecommendations(recs);
    }
  };

  const handleExport = () => {
    if (!recommendations.length) return;
    const header = [
      "Campaign",
      "Action",
      "Adjustment Type",
      "Confidence Score",
      "Current Budget",
      "Recommended Budget",
      "Budget Delta",
      "Reason Summary",
    ];
    const lines = recommendations.map((rec) => [
      rec.campaign,
      rec.action,
      rec.adjustmentType,
      rec.confidenceScore,
      rec.currentBudget,
      rec.recommendedBudget,
      rec.budgetDelta,
      `"${rec.reasonSummary.replace(/\"/g, "\"\"")}"`,
    ]);
    const csvContent = [header, ...lines]
      .map((row) => row.join(","))
      .join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "budget-recommendations.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleCopy = async () => {
    if (!recommendations.length) return;
    const text = recommendations
      .map(
        (rec) =>
          `${rec.campaign}: ${rec.action} (${rec.adjustmentType}), Confidence ${rec.confidenceScore}`
      )
      .join("\n");
    await navigator.clipboard.writeText(text);
  };

  return (
    <AppShell
      title="Budget Automation"
      subtitle="Upload performance data, apply weighted logic, and ship guardrail-safe recommendations."
    >
      <div className="rounded-3xl border border-slate-800/60 bg-slate-900/70 p-6 space-y-6 shadow-xl shadow-blue-500/10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-200">
              <UploadCloud className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-xl font-semibold text-white">Step 1 · Data Upload</h2>
              <p className="text-sm text-slate-400">
                Upload a CSV with campaign-level performance and budget data.
              </p>
            </div>
          </div>
          <a
            href="/sample-budget-data.csv"
            className="text-sm font-semibold text-blue-200 hover:text-blue-100"
          >
            Download sample CSV
          </a>
        </div>
        <label className="group flex flex-col items-center justify-center gap-3 rounded-3xl border border-dashed border-slate-700 bg-slate-950/60 px-4 py-8 text-sm text-slate-400 transition hover:border-blue-400 hover:text-blue-200">
          <UploadCloud className="h-6 w-6" />
          <span>Drag & drop your CSV or click to browse</span>
          <input
            type="file"
            accept=".csv"
            onChange={handleFileUpload}
            className="hidden"
          />
        </label>
        {fileName && (
          <div className="text-xs text-slate-400">
            Loaded: <span className="text-slate-200">{fileName}</span>
          </div>
        )}
      </div>

      <div className={`rounded-3xl border border-slate-800/60 bg-slate-900/70 p-6 space-y-6 shadow-xl shadow-emerald-500/10 ${headers.length === 0 ? "opacity-60" : ""}`}>
          <div className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-200">
              <Layers className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-xl font-semibold text-white">Step 1b · Column Mapping</h2>
              <p className="text-sm text-slate-400">
                Confirm or map columns to the required schema.
              </p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {REQUIRED_COLUMNS.map((column) => (
              <label key={column.key} className="text-sm" htmlFor={`map-${column.key}`}>
                <span className="flex items-center gap-2 text-slate-300">
                  {column.label}
                  {column.required && (
                    <span className="text-xs text-rose-300">Required</span>
                  )}
                </span>
                <select
                  id={`map-${column.key}`}
                  name={`map-${column.key}`}
                  value={mapping[column.key] || ""}
                  onChange={(event) =>
                    setMapping((prev) => ({
                      ...prev,
                      [column.key]: event.target.value,
                    }))
                  }
                  disabled={headers.length === 0}
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 disabled:opacity-40"
                >
                  <option value="">Select column</option>
                  {headers.map((header) => (
                    <option key={header} value={header}>
                      {header}
                    </option>
                  ))}
                </select>
              </label>
            ))}
          </div>
          {requiredMissing.length > 0 && (
            <div className="rounded-2xl border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-xs text-amber-200">
              Missing required columns:{" "}
              {requiredMissing.map((col) => col.label).join(", ")}
            </div>
          )}
          <button
            onClick={handleMappingConfirm}
            disabled={headers.length === 0}
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-400"
          >
            <Wand2 className="h-4 w-4" />
            Confirm mapping
          </button>
      </div>

      <div className={`rounded-3xl border border-slate-800/60 bg-slate-900/70 p-6 space-y-6 shadow-xl shadow-blue-500/10 ${!mappingReady ? "opacity-60" : ""}`}>
          <div className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-200">
              <Target className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-xl font-semibold text-white">Step 2 · Timeframe & Funnel Focus</h2>
              <p className="text-sm text-slate-400">
                Select your evaluation window and optimization goal.
              </p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="text-sm text-slate-300" htmlFor="timeframe-select">Timeframe</label>
              <select
                id="timeframe-select"
                name="timeframe"
                value={timeframe}
                onChange={(event) => setTimeframe(event.target.value === "custom" ? "custom" : Number(event.target.value))}
                disabled={!mappingReady}
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100"
              >
                <option value={7}>Last 7 days</option>
                <option value={28}>Last 28 days</option>
                <option value={90}>Last 90 days</option>
                <option value="custom">Custom range</option>
              </select>
              {timeframe === "custom" && (
                <div className="mt-3 grid gap-2">
                  <input
                    type="date"
                    id="custom-start-date"
                    name="customStartDate"
                    value={customRange.start}
                    onChange={(event) =>
                      setCustomRange((prev) => ({
                        ...prev,
                        start: event.target.value,
                      }))
                    }
                    disabled={!mappingReady}
                    className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100"
                  />
                  <input
                    type="date"
                    id="custom-end-date"
                    name="customEndDate"
                    value={customRange.end}
                    onChange={(event) =>
                      setCustomRange((prev) => ({
                        ...prev,
                        end: event.target.value,
                      }))
                    }
                    disabled={!mappingReady}
                    className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100"
                  />
                </div>
              )}
            </div>
            <div>
              <label className="text-sm text-slate-300">Funnel focus</label>
              <div className="mt-2 grid gap-2">
                {[
                  { value: "demo", label: "Optimize for Demo" },
                  { value: "enrollment", label: "Optimize for Enrollment" },
                  { value: "hybrid", label: "Hybrid (Demo + Enrollment)" },
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setFocus(option.value)}
                    disabled={!mappingReady}
                    className={`rounded-xl border px-3 py-2 text-left text-sm font-semibold ${
                      focus === option.value
                        ? "border-blue-400 bg-blue-500/10 text-blue-100"
                        : "border-slate-700 bg-slate-950 text-slate-300"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm text-slate-300" htmlFor="seasonality-multiplier">Seasonality multiplier</label>
              <input
                type="number"
                id="seasonality-multiplier"
                name="seasonalityMultiplier"
                step="0.01"
                min="0.7"
                max="1.5"
                value={seasonalityMultiplier}
                onChange={(event) => setSeasonalityMultiplier(Number(event.target.value))}
                disabled={!mappingReady}
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100"
              />
              <p className="mt-2 text-xs text-slate-500">
                Example: 1.2 adds a +20% scaling bias for enrollment windows.
              </p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm text-slate-300" htmlFor="experiment-variant">
              Experiment variant
              <select
                id="experiment-variant"
                name="experimentVariant"
                value={experimentVariant}
                onChange={(event) => setExperimentVariant(event.target.value)}
                disabled={!mappingReady}
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100"
              >
                <option value="A">Variant A · Baseline weights</option>
                <option value="B">Variant B · Recency-heavy weights</option>
              </select>
              <span className="mt-2 block text-xs text-slate-500">
                Use A/B to compare recommendation impact over time.
              </span>
            </label>
          </div>
      </div>

      <div className={`rounded-3xl border border-slate-800/60 bg-slate-900/70 p-6 space-y-6 shadow-xl shadow-emerald-500/10 ${!mappingReady ? "opacity-60" : ""}`}>
          <div className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-200">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-xl font-semibold text-white">Step 3 · Guardrails & Inputs</h2>
              <p className="text-sm text-slate-400">
                Lock budgets, enforce change frequency, and apply stop-loss rules.
              </p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            <label className="text-sm text-slate-300" htmlFor="min-days-between-changes">
              Min days between changes
              <input
                type="number"
                id="min-days-between-changes"
                name="minDaysBetweenChanges"
                min="1"
                value={guardrails.minDaysBetweenChanges}
                onChange={(event) =>
                  setGuardrails((prev) => ({
                    ...prev,
                    minDaysBetweenChanges: Number(event.target.value),
                  }))
                }
                disabled={!mappingReady}
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100"
              />
            </label>
            <label className="text-sm text-slate-300" htmlFor="utilization-threshold">
              Utilization threshold
              <input
                type="number"
                id="utilization-threshold"
                name="utilizationThreshold"
                step="0.01"
                min="0"
                max="1"
                value={guardrails.utilizationThreshold}
                onChange={(event) =>
                  setGuardrails((prev) => ({
                    ...prev,
                    utilizationThreshold: Number(event.target.value),
                  }))
                }
                disabled={!mappingReady}
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100"
              />
            </label>
            <label className="text-sm text-slate-300" htmlFor="stop-loss-spend">
              Stop-loss spend
              <input
                type="number"
                id="stop-loss-spend"
                name="stopLossSpend"
                min="0"
                value={guardrails.stopLossSpend}
                onChange={(event) =>
                  setGuardrails((prev) => ({
                    ...prev,
                    stopLossSpend: Number(event.target.value),
                  }))
                }
                disabled={!mappingReady}
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100"
              />
            </label>
            <label className="text-sm text-slate-300" htmlFor="change-step">
              Change step
              <select
                id="change-step"
                name="changeStep"
                value={guardrails.defaultStepPercent}
                onChange={(event) =>
                  setGuardrails((prev) => ({
                    ...prev,
                    defaultStepPercent: Number(event.target.value),
                  }))
                }
                disabled={!mappingReady}
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100"
              >
                {STEP_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
            <h3 className="text-sm font-semibold text-slate-200">
              Campaign budget guardrails
            </h3>
            <div className="mt-3 overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="text-slate-400">
                  <tr>
                    <th className="px-2 py-2 text-left">Campaign</th>
                    <th className="px-2 py-2 text-left">Min Budget</th>
                    <th className="px-2 py-2 text-left">Max Budget</th>
                    <th className="px-2 py-2 text-left">Last Change</th>
                  </tr>
                </thead>
                <tbody>
                  {campaigns.map((campaign, index) => (
                    <tr key={`${campaign}-${index}`} className="border-t border-slate-800">
                      <td className="px-2 py-2 text-slate-200">{campaign}</td>
                      <td className="px-2 py-2">
                        <input
                          type="number"
                          id={`min-budget-${index}`}
                          name={`minBudget-${campaign}`}
                          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-2 py-1 text-xs text-slate-100"
                          value={campaignSettings[campaign]?.minBudget ?? ""}
                          onChange={(event) =>
                            setCampaignSettings((prev) => ({
                              ...prev,
                              [campaign]: {
                                ...prev[campaign],
                                minBudget: Number(event.target.value),
                              },
                            }))
                          }
                          disabled={!mappingReady}
                        />
                      </td>
                      <td className="px-2 py-2">
                        <input
                          type="number"
                          id={`max-budget-${index}`}
                          name={`maxBudget-${campaign}`}
                          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-2 py-1 text-xs text-slate-100"
                          value={campaignSettings[campaign]?.maxBudget ?? ""}
                          onChange={(event) =>
                            setCampaignSettings((prev) => ({
                              ...prev,
                              [campaign]: {
                                ...prev[campaign],
                                maxBudget: Number(event.target.value),
                              },
                            }))
                          }
                          disabled={!mappingReady}
                        />
                      </td>
                      <td className="px-2 py-2">
                        <input
                          type="date"
                          id={`last-change-${index}`}
                          name={`lastChange-${campaign}`}
                          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-2 py-1 text-xs text-slate-100"
                          value={campaignSettings[campaign]?.lastBudgetChangeDate ?? ""}
                          onChange={(event) =>
                            setCampaignSettings((prev) => ({
                              ...prev,
                              [campaign]: {
                                ...prev[campaign],
                                lastBudgetChangeDate: event.target.value,
                              },
                            }))
                          }
                          disabled={!mappingReady}
                        />
                      </td>
                    </tr>
                  ))}
                  {campaigns.length === 0 && (
                    <tr>
                      <td colSpan="4" className="px-2 py-3 text-slate-500">
                        Upload and map data to list campaigns.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {error && (
            <div className="rounded-xl border border-rose-500/40 bg-rose-500/10 px-3 py-2 text-xs text-rose-200">
              {error}
            </div>
          )}

          <button
            onClick={handleRun}
            disabled={saving}
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-400"
          >
            <Wand2 className="h-4 w-4" />
            {saving ? "Saving..." : "Generate recommendations"}
          </button>
          {savedMessage && (
            <div className="text-xs text-emerald-200">{savedMessage}</div>
          )}
      </div>

      {recommendations.length > 0 && (
        <div className="rounded-3xl border border-slate-800/60 bg-slate-900/70 p-6 space-y-6 shadow-xl shadow-purple-500/10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-purple-500/20 text-purple-200">
                <Layers className="h-5 w-5" />
              </span>
              <div>
                <h2 className="text-xl font-semibold text-white">Recommendations</h2>
                <p className="text-sm text-slate-400">
                  Campaign-level actions with weighted scoring and guardrails.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleCopy}
                className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-800"
              >
                <span className="flex items-center gap-2">
                  <ClipboardCopy className="h-4 w-4" />
                  Copy summary
                </span>
              </button>
              <button
                onClick={handleExport}
                className="rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-400"
              >
                <span className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Export CSV
                </span>
              </button>
            </div>
          </div>

          <div className="grid gap-4">
            {recommendations.map((rec, index) => (
              <div
                key={`${rec.campaign}-${index}`}
                className="rounded-3xl border border-slate-800/60 bg-slate-950/70 p-5 shadow-lg shadow-slate-950/50"
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {rec.campaign}
                    </h3>
                    <p className="text-sm text-slate-400">
                      Current Budget: {formatCurrency(rec.currentBudget)}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-xs uppercase tracking-[0.3em] text-slate-500">
                      {rec.adjustmentType} Action
                    </div>
                    <div className="mt-1 text-2xl font-semibold text-emerald-200">
                      {rec.action}
                    </div>
                    <div className="text-xs text-slate-400">
                      Confidence {rec.confidenceScore}/100
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-slate-300">
                  {rec.reasonSummary}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-400">
                  <span>
                    Recommended Budget:{" "}
                    <span className="text-slate-100">
                      {formatCurrency(rec.recommendedBudget)}
                    </span>
                  </span>
                  <span>
                    Delta:{" "}
                    <span className="text-slate-100">
                      {formatCurrency(rec.budgetDelta)}
                    </span>
                  </span>
                  {rec.stopLoss && (
                    <span className="rounded-full bg-rose-500/20 px-3 py-1 text-xs font-semibold text-rose-200">
                      Stop-loss flag
                    </span>
                  )}
                </div>

                <button
                  className="mt-4 text-xs font-semibold text-emerald-200 hover:text-emerald-100"
                  onClick={() =>
                    setExpanded((prev) => ({
                      ...prev,
                      [rec.campaign]: !prev[rec.campaign],
                    }))
                  }
                >
                  <span className="flex items-center gap-2">
                    {expanded[rec.campaign] ? (
                      <>
                        <ChevronUp className="h-4 w-4" /> Hide details
                      </>
                    ) : (
                      <>
                        <ChevronDown className="h-4 w-4" /> View details
                      </>
                    )}
                  </span>
                </button>

                {expanded[rec.campaign] && (
                  <div className="mt-4 grid gap-4 md:grid-cols-2 text-sm text-slate-300">
                    <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                      <h4 className="text-sm font-semibold text-slate-200">
                        Timeframe metrics
                      </h4>
                      <div className="mt-3 space-y-2 text-xs text-slate-400">
                        {BUDGET_ENGINE_CONFIG.timeframes.map((timeframeConfig) => {
                          const data = rec.timeframeMetrics[timeframeConfig.key];
                          return (
                            <div key={timeframeConfig.key} className="flex items-center justify-between">
                              <span>{timeframeConfig.label}</span>
                              <span>
                                Spend {formatCurrency(data.spend)} · Demo CPA{" "}
                                {formatCurrency(data.costPerDemo)} · Enroll CPA{" "}
                                {formatCurrency(data.costPerEnrollment)}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                      <h4 className="text-sm font-semibold text-slate-200">
                        Guardrails & scoring
                      </h4>
                      <div className="mt-3 space-y-2 text-xs text-slate-400">
                        <div>
                          Bid strategy:{" "}
                          <span className="text-slate-200">{rec.bidStrategy || "—"}</span>
                        </div>
                        <div>
                          Utilization:{" "}
                          <span className="text-slate-200">
                            {formatPercent(rec.utilization)}
                          </span>
                        </div>
                        <div>
                          Score weights:{" "}
                          <span className="text-slate-200">
                            7d {rec.scoreDetail.d7?.weight ?? 0}, 28d {rec.scoreDetail.d28?.weight ?? 0}, 90d {rec.scoreDetail.d90?.weight ?? 0}
                          </span>
                        </div>
                        {rec.guardrails.length > 0 && (
                          <div className="text-rose-200">
                            {rec.guardrails.join(" ")}
                          </div>
                        )}
                        {rec.guardrails.length === 0 && (
                          <div className="text-emerald-200">
                            Guardrails clear for action.
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </AppShell>
  );
}
