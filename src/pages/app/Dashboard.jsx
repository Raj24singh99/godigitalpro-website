import React from "react";
import { Link } from "react-router-dom";
import AppShell from "../../components/app/AppShell";
import { Gauge, Sparkles, Lock, Wand2, Radar, Layers } from "lucide-react";

const tools = [
  {
    name: "Budget Automation",
    description: "Score campaigns, apply guardrails, and ship safe budget actions.",
    status: "active",
    to: "/app/budget-automation",
    icon: Gauge,
    accent: "from-emerald-500/20 via-emerald-500/10 to-transparent",
  },
  {
    name: "Creative Velocity Tracker",
    description: "Monitor creative fatigue, refresh cadence, and win-rate decay.",
    status: "locked",
    icon: Wand2,
    accent: "from-blue-500/20 via-blue-500/10 to-transparent",
  },
  {
    name: "Pipeline Forecasting",
    description: "Predict demo-to-enrollment velocity by cohort and channel.",
    status: "locked",
    icon: Radar,
    accent: "from-orange-500/20 via-orange-500/10 to-transparent",
  },
  {
    name: "Lead Quality Scoring",
    description: "Blend CRM outcomes with ad signals to reweight bidding.",
    status: "locked",
    icon: Layers,
    accent: "from-purple-500/20 via-purple-500/10 to-transparent",
  },
];

export default function Dashboard() {
  return (
    <AppShell
      title="Tools Hub"
      subtitle="Launch automation modules built for long-cycle lead generation."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="relative overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-900/70 p-6 shadow-xl shadow-slate-900/40"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${tool.accent}`}
            />
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-950/60 text-emerald-200">
                  <tool.icon className="h-5 w-5" />
                </span>
                {tool.name}
              </h3>
              {tool.status === "active" ? (
                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-200">
                  Active
                </span>
              ) : (
                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-400">
                  Coming soon
                </span>
              )}
            </div>
            <p className="mt-3 text-sm text-slate-400">{tool.description}</p>
            {tool.status === "active" ? (
              <Link
                to={tool.to}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-400"
              >
                <Sparkles className="h-4 w-4" />
                Open workspace
              </Link>
            ) : (
              <button
                disabled
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-500"
              >
                <Lock className="h-4 w-4" />
                Locked
              </button>
            )}
          </div>
        ))}
      </div>
    </AppShell>
  );
}
