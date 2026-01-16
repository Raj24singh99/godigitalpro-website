import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  BarChart3,
  Gauge,
  Layers,
  LineChart,
  ShieldCheck,
  Sparkles,
  Target,
  Share2,
  Wand2,
  Workflow,
} from "lucide-react";

import SeoHelmet from "../../components/SeoHelmet";
import {
  buildCanonical,
  organizationJsonLd,
  serviceJsonLd,
  siteNavigationJsonLd,
} from "../../utils/seo";

const MODULES = [
  {
    name: "Budget Automation",
    status: "Live",
    description: "Score campaigns, apply weighted logic, and ship safe budget actions.",
    icon: Gauge,
  },
  {
    name: "Automated Social Media Manager",
    status: "Live",
    description: "Generate and publish social posts with brand-safe automation.",
    icon: Share2,
  },
  {
    name: "Creative Velocity Tracker",
    status: "Coming soon",
    description: "Monitor creative fatigue, refresh cadence, and win-rate decay.",
    icon: Wand2,
  },
  {
    name: "Pipeline Forecasting",
    status: "Coming soon",
    description: "Predict demo-to-enrollment velocity by cohort and channel.",
    icon: LineChart,
  },
  {
    name: "Lead Quality Scoring",
    status: "Coming soon",
    description: "Blend CRM outcomes with ad signals to reweight bidding.",
    icon: Layers,
  },
];

const OUTCOMES = [
  {
    title: "Budget clarity",
    description: "Tie spend to pipeline quality, not just CPC and clicks.",
    icon: BarChart3,
  },
  {
    title: "SOP-ready execution",
    description: "Convert strategy into repeatable checklists and decision rules.",
    icon: Workflow,
  },
  {
    title: "Lead quality lift",
    description: "Feed CRM signals back into optimization for better cohorts.",
    icon: Target,
  },
  {
    title: "Secure control",
    description: "Role-based access, approvals, and audit-friendly exports.",
    icon: ShieldCheck,
  },
];

const SOP_STEPS = [
  {
    title: "Ingest data",
    detail: "Pull ad, CRM, and revenue exports into a single structured view.",
  },
  {
    title: "Map & normalize",
    detail: "Standardize columns, align naming, and resolve source gaps fast.",
  },
  {
    title: "Apply logic",
    detail: "Use weighted scoring, pacing rules, and optional safety checks.",
  },
  {
    title: "Decide & log",
    detail: "Share actions, approvals, and change history with stakeholders.",
  },
];

const META = {
  title: "GoDigitalPro App Suite — Automation Tools for Growth Teams",
  description:
    "Explore the GoDigitalPro app suite: budget automation, creative velocity, pipeline forecasting, and lead quality scoring designed for long-cycle growth teams.",
  keywords:
    "marketing automation app, budget automation, pipeline forecasting, lead quality scoring, growth ops",
};

export default function AppOverview() {
  const canonical = buildCanonical("/app");
  const schemaBlocks = useMemo(
    () => [
      organizationJsonLd(),
      serviceJsonLd({
        name: "GoDigitalPro App Suite",
        description:
          "Automation tools that unify spend, pipeline, and SOP execution for growth teams.",
        url: canonical,
      }),
      siteNavigationJsonLd([
        { name: "App Suite", url: canonical },
        { name: "Login", url: buildCanonical("/login") },
        { name: "Onboarding", url: buildCanonical("/onboarding") },
      ]),
    ],
    [canonical]
  );

  return (
    <>
      <SeoHelmet
        title={META.title}
        description={META.description}
        canonical={canonical}
        keywords={META.keywords}
        robots="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"
        schema={schemaBlocks}
        breadcrumbs={[
          { name: "Home", url: buildCanonical("/") },
          { name: "App Suite", url: canonical },
        ]}
      />

      <main className="bg-slate-50 text-slate-900">
        <section className="relative overflow-hidden bg-white">
          <div className="absolute -top-32 right-10 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
          <div className="absolute bottom-0 left-12 h-64 w-64 rounded-full bg-amber-100/40 blur-3xl" />
          <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-20">
            <p className="text-xs uppercase tracking-[0.35em] text-amber-700">
              App Suite
            </p>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-slate-900">
              GoDigitalPro apps built for long-cycle growth teams
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-600">
              A focused workspace that blends budget automation, creative velocity, and
              pipeline intelligence so your SOPs stay tight and your spend stays accountable.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                to="/login"
                className="inline-flex items-center justify-center rounded-xl bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-amber-300"
              >
                Login to dashboard
              </Link>
              <Link
                to="/onboarding"
                className="inline-flex items-center justify-center rounded-xl border border-amber-300 px-5 py-3 text-sm font-semibold text-amber-900 hover:bg-amber-50"
              >
                Request access
              </Link>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3 text-sm text-slate-600">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-amber-700 font-semibold">Unified control</div>
                <div className="mt-2">One workspace for budget ops, creative, and pipeline pacing.</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-amber-700 font-semibold">SOP-first</div>
                <div className="mt-2">Decision logs and approvals built in.</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-amber-700 font-semibold">Data-ready</div>
                <div className="mt-2">Structured inputs with mapping support for every team.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex items-center gap-2 text-sm font-semibold text-amber-700">
            <Sparkles className="h-4 w-4" />
            Inside the app
          </div>
          <h2 className="mt-3 text-3xl font-semibold">Apps and modules</h2>
          <p className="mt-3 text-slate-600 max-w-2xl">
            Each module is designed to answer one core growth question and plug into your
            SOPs without a long analytics buildout.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {MODULES.map((module) => (
              <div
                key={module.name}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                      <module.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-lg font-semibold text-slate-900">
                        {module.name}
                      </div>
                      <div className="text-xs uppercase tracking-[0.3em] text-slate-400">
                        {module.status}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-slate-600">{module.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-3xl font-semibold">How it helps the business</h2>
            <p className="mt-3 text-slate-600 max-w-2xl">
              Focus on what matters most: revenue quality, pace, and reliable execution.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {OUTCOMES.map((outcome) => (
                <div
                  key={outcome.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                      <outcome.icon className="h-5 w-5" />
                    </span>
                    <div className="text-lg font-semibold text-slate-900">
                      {outcome.title}
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">{outcome.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-semibold">SOP workflow you can run weekly</h2>
          <p className="mt-3 text-slate-600 max-w-2xl">
            Keep the operating rhythm tight. Every step is designed for fast reviews and
            clean handoffs between marketing, sales, and ops.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {SOP_STEPS.map((step, index) => (
              <div
                key={step.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
                  Step {index + 1}
                </div>
                <div className="mt-3 text-lg font-semibold text-slate-900">
                  {step.title}
                </div>
                <p className="mt-3 text-sm text-slate-600">{step.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 pb-20">
          <div className="rounded-3xl border border-amber-200 bg-amber-50 px-6 py-10 text-slate-900 md:px-10">
            <h2 className="text-3xl font-semibold">Ready to explore the dashboard?</h2>
            <p className="mt-3 text-slate-600 max-w-2xl">
              Log in to access the live budget automation workspace or request access
              for upcoming modules.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                to="/login"
                className="inline-flex items-center justify-center rounded-xl bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-amber-300"
              >
                Go to login
              </Link>
              <Link
                to="/onboarding"
                className="inline-flex items-center justify-center rounded-xl border border-amber-300 px-5 py-3 text-sm font-semibold text-amber-900 hover:bg-white"
              >
                Book onboarding
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
