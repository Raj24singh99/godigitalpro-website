import React from "react";
import { Link } from "react-router-dom";
import AppShell from "../../components/app/AppShell";
import { Gauge, Sparkles, Lock, Wand2, Radar, Layers, Share2 } from "lucide-react";

const tools = [
  {
    name: "Budget Automation",
    description: "Score campaigns, apply weighted logic, and ship safe budget actions.",
    status: "active",
    to: "/dashboard/budget-automation",
    icon: Gauge,
    accent: "from-amber-200/60 via-amber-100/30 to-transparent",
  },
  {
    name: "Automated Social Media Manager",
    description: "Generate, approve, and publish social content across brands.",
    status: "active",
    to: "/dashboard/automated-social-media-manager",
    icon: Share2,
    accent: "from-emerald-100 via-white to-transparent",
  },
  {
    name: "Creative Velocity Tracker",
    description: "Monitor creative fatigue, refresh cadence, and win-rate decay.",
    status: "locked",
    icon: Wand2,
    accent: "from-slate-100 via-white to-transparent",
  },
  {
    name: "Pipeline Forecasting",
    description: "Predict demo-to-enrollment velocity by cohort and channel.",
    status: "locked",
    icon: Radar,
    accent: "from-slate-100 via-white to-transparent",
  },
  {
    name: "Lead Quality Scoring",
    description: "Blend CRM outcomes with ad signals to reweight bidding.",
    status: "locked",
    icon: Layers,
    accent: "from-slate-100 via-white to-transparent",
  },
];

export default function Dashboard() {
  return (
    <AppShell
      title="App Suite"
      subtitle="Launch modular automation tools across budget ops, pipeline, and analytics."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${tool.accent} pointer-events-none opacity-70`}
            />
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                    <tool.icon className="h-5 w-5" />
                  </span>
                  {tool.name}
                </h3>
                {tool.status === "active" ? (
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900">
                    Active
                  </span>
                ) : (
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                    Coming soon
                  </span>
                )}
              </div>
              <p className="mt-3 text-sm text-slate-700">{tool.description}</p>
              {tool.status === "active" ? (
                <Link
                  to={tool.to}
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-amber-300"
                >
                  <Sparkles className="h-4 w-4" />
                  Open workspace
                </Link>
              ) : (
                <button
                  disabled
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-500"
                >
                  <Lock className="h-4 w-4" />
                  Locked
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

    </AppShell>
  );
}
