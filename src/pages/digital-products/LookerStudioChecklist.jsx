import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, ClipboardList, Download, LayoutTemplate, Sparkles, Timer, Users } from "lucide-react";
import SeoHelmet from "../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../utils/seo.js";

const downloadUrl = "https://drive.google.com/file/d/1VMhd71bOV_-32ctJw6XIqE3FCFCEscbL/view?usp=drive_link";

const sections = [
  {
    title: "Stakeholder & KPI foundations",
    summary: "Map every stakeholder, purpose, cadence, and the exact questions your dashboard must answer.",
    points: ["List stakeholder groups", "Clarify primary purpose", "Define KPIs and reporting cadence"],
  },
  {
    title: "Data sources & connections",
    summary: "Decide connectors vs warehouse, enforce naming, and lock timezone/currency hygiene.",
    points: ["Inventory GA4, Ads, CRM, Sheets", "Choose direct, blended, or warehouse", "Verify access and settings"],
  },
  {
    title: "Data model, fields & blends",
    summary: "Set grain, standardize calculated fields, and validate blends to avoid double counting.",
    points: ["Pick analysis grain", "Create calculated KPI fields", "Validate blend keys and outputs"],
  },
  {
    title: "Page & layout architecture",
    summary: "Wireframe page flow, reserve KPI rows, and keep grids consistent with your brand system.",
    points: ["Plan page sequence", "Lock layout grid", "Keep top-row KPIs + filters"],
  },
  {
    title: "Filters, controls & date ranges",
    summary: "Set sensible defaults, label controls clearly, and test scope for each filter.",
    points: ["Add global date ranges", "Choose page vs report level filters", "Test interactions and scopes"],
  },
  {
    title: "Visualisation best practices",
    summary: "Scorecards, time-series, and tables with consistent colours, benchmarks, and conditional highlights.",
    points: ["Match chart to decision", "Use channel-consistent colours", "Add targets/benchmarks on charts"],
  },
  {
    title: "Performance & technical hygiene",
    summary: "Keep load times fast by trimming heavy charts, removing unused fields, and documenting caveats.",
    points: ["Test load time", "Remove unused fields", "Watch row limits and sampling"],
  },
  {
    title: "QA, validation & reconciliation",
    summary: "Cross-check metrics with source platforms and stress-test filters before stakeholders see the report.",
    points: ["Reconcile with GA4/Ads/CRM", "Align timezones and ranges", "Ask non-builders to test"],
  },
  {
    title: "Sharing, permissions & docs",
    summary: "Control viewer/editor access, add a quick start guide, and document KPI definitions in-line.",
    points: ["Set viewer/editor rules", "Add a how-to-use section", "Document metric definitions"],
  },
  {
    title: "Maintenance, iteration & governance",
    summary: "Assign ownership, keep a changelog, and schedule quarterly reviews to keep dashboards relevant.",
    points: ["Assign an owner", "Maintain a changelog", "Schedule periodic reviews"],
  },
];

export default function LookerStudioChecklist() {
  const canonical = buildCanonical("/digital-products/looker-studio-reporting-dashboard-checklist");

  return (
    <main className="bg-gradient-to-b from-white via-slate-50 to-emerald-50 text-slate-900">
      <SeoHelmet
        title="Looker Studio Reporting & Dashboard Checklist | GoDigitalPro"
        description="Free 10-section checklist to plan, build, and QA Looker Studio dashboards—covering stakeholders, data sources, blends, layout, filters, visuals, QA, permissions, and maintenance."
        canonical={canonical}
        breadcrumbs={[
          { name: "Home", url: buildCanonical("/") },
          { name: "Learn", url: buildCanonical("/learn") },
          { name: "Digital products", url: buildCanonical("/learn/digital-products") },
          { name: "Looker Studio Reporting & Dashboard Checklist", url: canonical },
        ]}
      />

      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 via-white to-slate-50" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 py-14">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="max-w-3xl space-y-4">
              <Link
                to="/learn/digital-products"
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-900"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to digital products
              </Link>
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-emerald-100">
                <Sparkles className="h-4 w-4 text-emerald-600" />
                Digital product
              </div>
              <h1 className="text-3xl font-bold leading-tight md:text-4xl">Looker Studio Reporting & Dashboard Master Checklist</h1>
              <p className="text-lg text-slate-700">
                Ship cleaner dashboards faster. Use this checklist when you design, rebuild, or audit any Looker Studio (Data Studio) report—covering stakeholder
                alignment, data hygiene, blends, layouts, filters, QA, and governance.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-slate-700">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">
                  <ClipboardList className="h-4 w-4 text-emerald-600" />
                  10 sections · 50+ checks
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">
                  <LayoutTemplate className="h-4 w-4 text-amber-600" />
                  Layout, blends, QA, permissions
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">
                  <Timer className="h-4 w-4 text-slate-700" />
                  Instant PDF download
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-700"
                >
                  <Download className="h-4 w-4" />
                  Download the checklist (PDF)
                </a>
                <Link
                  to="/onboarding"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-900"
                >
                  Need it built for you?
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <p className="text-sm text-slate-600">
                Made by the GoDigitalPro performance team. Use internally, adapt for client work, and add to your onboarding playbooks.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-emerald-100 md:w-80">
              <div className="flex items-center gap-2 text-sm font-semibold text-emerald-700">
                <CheckCircle2 className="h-4 w-4" />
                You’ll check for:
              </div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 text-amber-500" />
                  Stakeholder-aligned KPIs and business questions.
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 text-amber-500" />
                  Clean sources, naming, timezone/currency discipline.
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 text-amber-500" />
                  Blends that won’t double-count or misjoin.
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 text-amber-500" />
                  Layout, filters, and visuals that non-builders can use.
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 text-amber-500" />
                  QA, permissions, and maintenance cadence.
                </li>
              </ul>
              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800 ring-1 ring-emerald-100 hover:bg-emerald-100"
              >
                Download free PDF
                <Download className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">Inside the PDF</p>
              <h2 className="text-2xl font-bold text-slate-900">10 sections to keep every dashboard clean</h2>
              <p className="mt-2 text-slate-700">Each section includes specific checks you can tick off while building or auditing.</p>
            </div>
            <ClipboardList className="h-6 w-6 text-emerald-600" />
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {sections.map((item) => (
              <div key={item.title} className="flex flex-col gap-2 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                    <p className="text-sm text-slate-700">{item.summary}</p>
                  </div>
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                </div>
                <ul className="mt-2 space-y-1 text-sm text-slate-700">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">
                <Users className="h-4 w-4 text-emerald-600" />
                Use this checklist when…
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                  You are launching a new report and want stakeholder/KPI alignment before building.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                  You are auditing a slow or confusing dashboard and need a structured punch list.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                  You are onboarding a client/internal team and want to document governance and access.
                </li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">
                <Sparkles className="h-4 w-4 text-amber-500" />
                How to put it to work
              </div>
              <ol className="mt-3 space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">1</span>
                  Do a quick pass for stakeholder/KPI alignment and data-source hygiene before building visuals.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">2</span>
                  Tick off layout, filters, and visualization rules while you design pages and add interactions.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">3</span>
                  Finish with QA, permissions, and documentation before sharing the report with stakeholders.
                </li>
              </ol>
              <div className="mt-4 inline-flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800 ring-1 ring-emerald-100">
                <Download className="h-4 w-4" />
                Keep the PDF open as you build to avoid rework.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-emerald-600 px-6 py-8 text-white shadow-lg shadow-emerald-200 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-100">Download</p>
              <h3 className="mt-1 text-2xl font-semibold">Grab the checklist and start your build</h3>
              <p className="mt-2 max-w-2xl text-sm text-emerald-50">
                The PDF is ready-to-use and free. Share it with your team, adapt it to your playbooks, and keep it open while you wireframe and QA your Looker
                Studio dashboards.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-emerald-700 shadow-sm ring-1 ring-emerald-100 hover:bg-emerald-50"
              >
                Download the PDF
                <Download className="h-4 w-4" />
              </a>
              <Link to="/onboarding" className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-emerald-50 hover:text-white">
                Want done-for-you dashboards? Apply for onboarding
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
