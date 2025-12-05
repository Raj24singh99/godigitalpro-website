import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Download,
  LayoutTemplate,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import SeoHelmet from "../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../utils/seo.js";

const downloadUrl = "https://drive.google.com/file/d/1Pi7fe7vAx5OyYogFUNBxWeu_-MtI94qa/view?usp=drive_link";

const sections = [
  {
    title: "Business & offer foundations",
    summary: "Lock goals, offer, ICP, pain points, benefits, entry offer, USP, pricing, and assets.",
    points: ["Define primary goal (leads, purchases, calls, trials)", "Clarify core offer and lead magnet/entry", "Describe ideal customer avatar and triggers", "List pains and benefits/outcomes", "Decide pricing strategy and confirm assets ready"],
  },
  {
    title: "Tracking, measurement & access",
    summary: "Ensure admin access, GTM/GA4/CRM access, set up conversions, test tags, and align attribution.",
    points: ["Confirm access to Google Ads, GA4, GTM, CMS, CRM", "List and create conversion events in Google Ads", "Install tags via GTM/Ads tag and set triggers", "Test conversions in GTM Preview/Tag Assistant", "Verify conversions in Ads and set attribution", "Define UTM conventions and GA4 linkage"],
  },
  {
    title: "Keyword & audience research",
    summary: "Brainstorm seeds, cluster with Keyword Planner, map intent to pages, and set negatives/match types.",
    points: ["Collect 20–50 seed terms", "Expand and cluster with Keyword Planner", "Identify high-intent and research intents", "Pick initial intent levels (start with BOFU)", "Map clusters to landing pages", "Create starter negative list", "Plan match type strategy"],
  },
  {
    title: "Campaign architecture & settings",
    summary: "Choose campaign types, objectives, geos, language, budgets, and bidding for launch.",
    points: ["Select initial campaign types (Search, PMax, Remarketing, YouTube)", "Define objectives and keep campaigns focused", "Set locations (presence), language, and budgets", "Avoid overlapping geos unless intentional", "Choose launch bidding (Max Conversions, Max Clicks, tCPA/ROAS if data)"],
  },
  {
    title: "Ad group & ad creation",
    summary: "Tightly themed ad groups, RSAs with strong keywords, proof, CTAs, and rich assets.",
    points: ["5–20 tight keywords per ad group mapped to one page", "Create 2+ RSAs per ad group", "Include keywords in headlines; add value props and proof", "Write varied descriptions with clear CTAs", "Use pinning sparingly", "Add sitelinks, callouts, snippets, call/location/image assets"],
  },
  {
    title: "Landing page & funnel readiness",
    summary: "Ensure message match, speed, mobile UX, single CTA, proof, lean forms, and tracking.",
    points: ["Match keyword → ad → headline/offer", "Check speed (<3s) and mobile responsiveness", "Single primary CTA above the fold", "Add credibility (logos, testimonials, case studies)", "Keep forms minimal; thank-you page with tracking", "Test forms/buttons/booking flows end-to-end"],
  },
  {
    title: "Pre-launch QA",
    summary: "Double-check structure, keywords, negatives, copy, URLs, conversions, exclusions, and schedules.",
    points: ["Review campaign names, budgets, geos, bidding", "Check ad groups, keywords, negatives", "QA ads for clarity and compliance", "Verify URLs and extensions", "Confirm conversion actions primary/secondary", "Exclude internal IPs if needed", "Set start/pause state and create KPI tracker"],
  },
  {
    title: "First 7 days optimization",
    summary: "Monitor spend, search terms, device performance, ad CTR, and lead quality without overreacting.",
    points: ["Watch spend vs budget daily", "Use search terms to add negatives", "Pause clear CPC/CTR laggards after data", "Review device splits and adjust if needed", "Keep 1–2 winners live while testing new ads", "Avoid drastic bid changes too early", "Sample lead quality manually"],
  },
  {
    title: "Ongoing weekly & monthly optimization",
    summary: "Review KPIs by level, shift budgets, expand winners, test ads/pages, and refine bids/goals.",
    points: ["Review impressions, clicks, CTR, CPC, conversions, CPL/CPA", "Analyze by campaign/ad group/keyword/device", "Reallocate budget to converters", "Expand winning keywords and negatives", "Test new ad angles and landing variants", "Evaluate lead quality with sales feedback", "Adjust tCPA/tROAS gradually once stable"],
  },
  {
    title: "Reporting & communication",
    summary: "Set cadence, keep an exec dashboard, note optimizations/tests, align with sales, and report the funnel.",
    points: ["Weekly reporting cadence", "Dashboard: spend, conversions, CPL/CPA/ROAS, trends", "Log major optimizations and planned tests", "Align with sales/ops on quality and close rates", "Review full funnel from click to sale", "Share clear, jargon-free updates"],
  },
];

export default function GoogleAdsChecklist() {
  const canonical = buildCanonical("/digital-products/google-ads-launch-optimization-checklist");

  return (
    <main className="bg-gradient-to-b from-white via-slate-50 to-blue-50 text-slate-900">
      <SeoHelmet
        title="Google Ads Launch & Optimization Checklist | GoDigitalPro"
        description="Free master checklist for Google Ads launches: goals, tracking, keywords, campaign architecture, RSAs/assets, landing pages, QA, early optimization, and reporting."
        canonical={canonical}
        breadcrumbs={[
          { name: "Home", url: buildCanonical("/") },
          { name: "Learn", url: buildCanonical("/learn") },
          { name: "Digital products", url: buildCanonical("/learn/digital-products") },
          { name: "Google Ads Launch & Optimization Checklist", url: canonical },
        ]}
      />

      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-slate-50" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 py-14">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="max-w-3xl space-y-4">
              <Link
                to="/learn/digital-products"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to digital products
              </Link>
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-blue-100">
                <Sparkles className="h-4 w-4 text-blue-600" />
                Digital product
              </div>
              <h1 className="text-3xl font-bold leading-tight md:text-4xl">Google Ads Launch & Optimization Master Checklist</h1>
              <p className="text-lg text-slate-700">
                Duplicate this checklist for each Google Ads account or offer you launch. It covers goals, tracking, research, architecture, ads, landing pages, QA, early
                optimization, and reporting so you launch clean and keep improving.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-slate-700">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">
                  <ClipboardList className="h-4 w-4 text-blue-600" />
                  10 sections · launch + optimization
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">
                  <Target className="h-4 w-4 text-emerald-600" />
                  Tracking, keywords, RSAs, assets
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">
                  <TrendingUp className="h-4 w-4 text-slate-700" />
                  Optimization & reporting rhythm
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-800"
                >
                  <Download className="h-4 w-4" />
                  Download the checklist (PDF)
                </a>
                <Link
                  to="/onboarding"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900"
                >
                  Need done-for-you Google Ads?
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <p className="text-sm text-slate-600">Free to use and adapt for teams and client onboarding.</p>
            </div>
            <div className="flex w-full flex-col gap-3 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-blue-100 md:w-80">
              <div className="flex items-center gap-2 text-sm font-semibold text-blue-700">
                <CheckCircle2 className="h-4 w-4" />
                You’ll check for:
              </div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 text-amber-500" />
                  Goals, offer, ICP, USP, and pricing clarity.
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 text-amber-500" />
                  Conversions set, tested, and attributed correctly.
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 text-amber-500" />
                  Clean keyword clusters, negatives, and match types.
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 text-amber-500" />
                  RSAs with proof, assets, and strong CTAs.
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 text-amber-500" />
                  QA, early optimization, and reporting cadence.
                </li>
              </ul>
              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-800 ring-1 ring-blue-100 hover:bg-blue-100"
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
              <h2 className="text-2xl font-bold text-slate-900">Every step from tracking to reporting</h2>
              <p className="mt-2 text-slate-700">Use these 10 sections before launch and during optimization cycles.</p>
            </div>
            <Target className="h-6 w-6 text-blue-600" />
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {sections.map((item) => (
              <div key={item.title} className="flex flex-col gap-2 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                    <p className="text-sm text-slate-700">{item.summary}</p>
                  </div>
                  <CheckCircle2 className="h-4 w-4 text-blue-600" />
                </div>
                <ul className="mt-2 space-y-1 text-sm text-slate-700">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500" />
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
                <Users className="h-4 w-4 text-blue-600" />
                Use this checklist when…
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                  Launching a new Google Ads account, offer, or campaign set.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                  Auditing accounts with tracking, structure, or creative gaps.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                  Onboarding clients or team members into your Google Ads playbook.
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
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-xs font-semibold text-blue-700 ring-1 ring-blue-100">1</span>
                  Start with goals, ICP, offer, tracking, and UTMs to keep data clean from day one.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-xs font-semibold text-blue-700 ring-1 ring-blue-100">2</span>
                  Build campaigns, keywords, RSAs, and assets using the structure outlined here.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-xs font-semibold text-blue-700 ring-1 ring-blue-100">3</span>
                  Follow the first-7-day and ongoing optimization sections to guide adjustments and tests.
                </li>
              </ol>
              <div className="mt-4 inline-flex items-center gap-2 rounded-xl bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-800 ring-1 ring-blue-100">
                <Download className="h-4 w-4" />
                Keep the PDF open during launch to avoid misses.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-blue-700 px-6 py-8 text-white shadow-lg shadow-blue-200 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">Download</p>
              <h3 className="mt-1 text-2xl font-semibold">Grab the Google Ads checklist and launch with confidence</h3>
              <p className="mt-2 max-w-2xl text-sm text-blue-100">
                Free, ready-to-use, and built for performance teams. Share with stakeholders, adapt to SOPs, and keep it handy for QA and optimization cycles.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-blue-700 shadow-sm ring-1 ring-blue-100 hover:bg-blue-50"
              >
                Download the PDF
                <Download className="h-4 w-4" />
              </a>
              <Link to="/onboarding" className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-blue-100 hover:text-white">
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
