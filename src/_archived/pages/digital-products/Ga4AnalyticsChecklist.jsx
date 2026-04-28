import React from "react";
import { Link } from "react-router-dom";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Download,
  LayoutTemplate,
  Map,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import SeoHelmet from "../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../utils/seo.js";

const downloadUrl = "https://drive.google.com/file/d/16YlukZQ0fb44upuSnx8wwDQ3YPJ_p3YY/view?usp=drive_link";

const sections = [
  {
    title: "Account & property foundations",
    summary: "Get ownership, naming, property/stream structure, time zone, and currency right before anything else.",
    points: ["Confirm correct Google account ownership", "Set naming conventions for accounts/properties/streams", "Create/verify primary GA4 property", "Set time zone and currency", "Map business units/sites/apps to properties/streams"],
  },
  {
    title: "Data streams & basic configuration",
    summary: "Create streams, deploy tags, verify traffic, tune enhanced measurement, and exclude internal hits.",
    points: ["Create web streams per domain/subdomain", "Install GA4 via GTM/gtag on all pages", "Verify real-time from test users", "Configure enhanced measurement", "Exclude internal traffic", "Set reporting identity per privacy needs"],
  },
  {
    title: "Events & conversions",
    summary: "Standardize event names, implement custom events, mark conversions, and test in DebugView.",
    points: ["List key business events", "Standardize naming (generate_lead, purchase, etc.)", "Implement custom events via GTM/code", "Mark key events as conversions", "Test events/params in DebugView", "Map parameters to custom dimensions/metrics"],
  },
  {
    title: "Audiences & user properties",
    summary: "Create audiences, user properties, and Ads sync to fuel reporting and remarketing.",
    points: ["Identify key segments (buyers, repeat, abandoners)", "Create GA4 audiences by funnel stage", "Configure user properties (plan_type, region, etc.)", "Sync audiences to Google Ads", "Review audience sizes/eligibility"],
  },
  {
    title: "Ecommerce & monetization",
    summary: "Implement ecommerce events with clean product data, validated revenue, and no duplicates.",
    points: ["Implement view_item/add_to_cart/begin_checkout/purchase", "Send product IDs/names/categories/values", "Validate purchase revenue, tax, shipping, discounts, IDs", "Prevent duplicate purchase events", "Build monetization reports/funnels"],
  },
  {
    title: "Reporting, explorations & funnels",
    summary: "Define KPIs, configure reports, and save key explorations and path/funnel analyses.",
    points: ["Define core KPI set", "Configure standard reports views", "Build Explorations for key funnels", "Save reusable funnel/path analyses", "Set segments for new/returning and channels"],
  },
  {
    title: "Attribution & traffic quality",
    summary: "Pick your attribution model, align UTMs, and watch for bot/spam patterns.",
    points: ["Select/document primary attribution model", "Review traffic acquisition and campaign performance", "Check for bot/spam and filter where possible", "Align UTM naming conventions", "Validate GA4 vs ads platform numbers directionally"],
  },
  {
    title: "Dashboards & stakeholder reporting",
    summary: "Match dashboards to stakeholder needs with trends and drill paths, plus a reporting cadence.",
    points: ["Identify stakeholder metric needs", "Create GA4 collections or Looker Studio dashboards", "Include trend lines for key KPIs", "Document how to interpret and drill deeper", "Schedule weekly/monthly reporting"],
  },
  {
    title: "QA, alerts & maintenance",
    summary: "Alerts, periodic testing, anomaly review, quarterly audits, and a change log.",
    points: ["Set custom alerts for drops/spikes", "Test key events/conversions periodically", "Investigate anomalies quickly", "Quarterly audit events/conversions/audiences", "Keep a change log of config updates"],
  },
  {
    title: "Governance, documentation & handover",
    summary: "Document architecture, roles, SOPs, and KPIs; back up conventions and review alignment.",
    points: ["Document properties/streams/events/conversions/audiences", "Define roles/permissions", "Create onboarding SOPs for GA4 users", "Back up naming conventions and KPI definitions", "Review alignment to business goals twice a year"],
  },
];

export default function Ga4AnalyticsChecklist() {
  const canonical = buildCanonical("/digital-products/ga4-analytics-master-checklist");

  return (
    <main className="bg-gradient-to-b from-white via-slate-50 to-cyan-50 text-slate-900">
      <SeoHelmet
        title="GA4 Analytics Master Checklist | GoDigitalPro"
        description="Free GA4 implementation and optimization checklist: properties, streams, events, conversions, audiences, ecommerce, attribution, dashboards, alerts, and governance."
        canonical={canonical}
        breadcrumbs={[
          { name: "Home", url: buildCanonical("/") },
          { name: "Learn", url: buildCanonical("/learn") },
          { name: "Digital products", url: buildCanonical("/learn/digital-products") },
          { name: "GA4 Analytics Master Checklist", url: canonical },
        ]}
      />

      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-50 via-white to-slate-50" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 py-14">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="max-w-3xl space-y-4">
              <Link
                to="/learn/digital-products"
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 hover:text-cyan-900"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to digital products
              </Link>
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-cyan-100">
                <Sparkles className="h-4 w-4 text-cyan-600" />
                Digital product
              </div>
              <h1 className="text-3xl font-bold leading-tight md:text-4xl">GA4 Analytics Implementation & Optimization Master Checklist</h1>
              <p className="text-lg text-slate-700">
                Use this checklist to design, launch, and maintain GA4 across your sites and funnels. It covers property setup, streams, events, conversions, audiences,
                ecommerce, attribution, dashboards, alerts, and governance.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-slate-700">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">
                  <ClipboardList className="h-4 w-4 text-cyan-600" />
                  10 sections · implementation + optimization
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">
                  <Target className="h-4 w-4 text-emerald-600" />
                  Events, conversions, audiences, ecommerce
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">
                  <TrendingUp className="h-4 w-4 text-slate-700" />
                  Dashboards, alerts, governance
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-200 transition hover:bg-cyan-800"
                >
                  <Download className="h-4 w-4" />
                  Download the checklist (PDF)
                </a>
                <Link
                  to="/onboarding"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 hover:text-cyan-900"
                >
                  Need done-for-you analytics?
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <p className="text-sm text-slate-600">Free to use and adapt for teams and client onboarding.</p>
            </div>
            <div className="flex w-full flex-col gap-3 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-cyan-100 md:w-80">
              <div className="flex items-center gap-2 text-sm font-semibold text-cyan-700">
                <CheckCircle2 className="h-4 w-4" />
                You’ll check for:
              </div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 text-amber-500" />
                  Properties, streams, and time zone/currency correctness.
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 text-amber-500" />
                  Clean events, conversions, and DebugView validation.
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 text-amber-500" />
                  Audiences, user properties, and Ads sync readiness.
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 text-amber-500" />
                  Ecommerce data integrity and revenue accuracy.
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 text-amber-500" />
                  Reporting, alerts, and governance to keep data trustworthy.
                </li>
              </ul>
              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-50 px-4 py-3 text-sm font-semibold text-cyan-800 ring-1 ring-cyan-100 hover:bg-cyan-100"
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
              <h2 className="text-2xl font-bold text-slate-900">From property setup to governance</h2>
              <p className="mt-2 text-slate-700">Follow these 10 sections to launch and maintain a reliable GA4 setup.</p>
            </div>
            <Map className="h-6 w-6 text-cyan-600" />
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {sections.map((item) => (
              <div key={item.title} className="flex flex-col gap-2 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                    <p className="text-sm text-slate-700">{item.summary}</p>
                  </div>
                  <CheckCircle2 className="h-4 w-4 text-cyan-600" />
                </div>
                <ul className="mt-2 space-y-1 text-sm text-slate-700">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-500" />
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
                <Users className="h-4 w-4 text-cyan-600" />
                Use this checklist when…
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-600" />
                  Launching GA4 for a new site, app, or brand.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-600" />
                  Auditing a messy setup with missing events or bad attribution.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-600" />
                  Onboarding clients or team members into your analytics playbook.
                </li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">
                <LayoutTemplate className="h-4 w-4 text-amber-600" />
                How to put it to work
              </div>
              <ol className="mt-3 space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-cyan-50 text-xs font-semibold text-cyan-700 ring-1 ring-cyan-100">1</span>
                  Start with property/stream setup, time zone, currency, and ownership to avoid rework.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-cyan-50 text-xs font-semibold text-cyan-700 ring-1 ring-cyan-100">2</span>
                  Implement events/conversions, audiences, and ecommerce with DebugView checks before go-live.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-cyan-50 text-xs font-semibold text-cyan-700 ring-1 ring-cyan-100">3</span>
                  Set dashboards, alerts, and governance so reporting stays accurate over time.
                </li>
              </ol>
              <div className="mt-4 inline-flex items-center gap-2 rounded-xl bg-cyan-50 px-4 py-3 text-sm font-semibold text-cyan-800 ring-1 ring-cyan-100">
                <Download className="h-4 w-4" />
                Keep the PDF open while configuring to avoid misses.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-cyan-700 px-6 py-8 text-white shadow-lg shadow-cyan-200 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">Download</p>
              <h3 className="mt-1 text-2xl font-semibold">Grab the GA4 checklist and launch with confidence</h3>
              <p className="mt-2 max-w-2xl text-sm text-cyan-100">
                Free, ready-to-use, and built for analytics teams. Share with stakeholders, adapt to SOPs, and keep it handy during QA and optimization cycles.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-cyan-700 shadow-sm ring-1 ring-cyan-100 hover:bg-cyan-50"
              >
                Download the PDF
                <Download className="h-4 w-4" />
              </a>
              <Link to="/onboarding" className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-cyan-100 hover:text-white">
                Want experts to build it for you? Apply for onboarding
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
