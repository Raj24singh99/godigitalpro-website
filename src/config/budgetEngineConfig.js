export const BUDGET_ENGINE_CONFIG = {
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
