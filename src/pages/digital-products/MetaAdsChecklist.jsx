import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Download,
  LayoutTemplate,
  Megaphone,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import SeoHelmet from "../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../utils/seo.js";

const downloadUrl = "https://drive.google.com/file/d/1WJqW2swErOGHpkP_uFurpCsh0rGSJjiN/view?usp=drive_link";

const sections = [
  {
    title: "Business & offer foundations",
    summary: "Lock objective, offer, ICP, pricing, funnel map, and compliance stance before building ads.",
    points: ["Define objective (leads, sales, calls, traffic, engagement)", "Clarify offer and entry point", "Describe ICP, pains, and desired outcomes", "Set price/AOV goals and map ad → page → thank-you/upsell → CRM", "Check compliance for claims and sensitive topics"],
  },
  {
    title: "Tracking, pixel & permissions",
    summary: "Ensure Business Manager access, correct assets, and verified Pixel/CAPI events.",
    points: ["Confirm BM admin and correct ad account/page/IG ownership", "Verify billing method", "Create/select Pixel; install via GTM/native", "Test Pixel firing; set up Conversions API where possible", "Define standard events and custom conversions", "Prioritize events in aggregated event measurement"],
  },
  {
    title: "Audiences & targeting",
    summary: "Build warm audiences, lookalikes, and interest stacks with clear exclusions.",
    points: ["Create visitors/leads/customers/video viewers/IG engagers", "Build lookalikes from highest quality segments", "Brainstorm 3–10 interest stacks", "Decide broad vs interests vs lookalikes start", "Set geo/age/gender only as needed", "Add exclusions for customers/employees/low-quality segments"],
  },
  {
    title: "Campaign structure & settings",
    summary: "Choose objectives, budget type, and clean naming for a focused launch.",
    points: ["Pick initial objective (Leads, Sales, etc.)", "Decide CBO vs ABO", "Limit to 1–3 core campaigns per offer", "One primary KPI/conversion per campaign", "Set budgets, locations, placements strategy, and attribution window", "Separate warm vs cold where useful"],
  },
  {
    title: "Creative strategy & ad creation",
    summary: "Plan angles, formats, hooks, proof, CTAs, and feed-native visuals with variations.",
    points: ["Choose angles (pain, aspiration, proof, offer)", "Mix formats: image, carousel, reels/stories", "Write hooks per placement", "Create multiple primary texts + headlines", "Use clear CTAs and show proof early", "Ensure correct page/IG, UTMs, and previews across placements"],
  },
  {
    title: "Landing page & funnel readiness",
    summary: "Ensure message match, mobile speed, clear CTAs, proof, and Pixel events with CRM tagging.",
    points: ["Align ad promise to hero/offer", "Test mobile/desktop thoroughly", "Keep above-the-fold clear with one CTA", "Add proof (testimonials, case studies, logos)", "Keep forms lean; connect to CRM/email with tags", "Confirm Pixel events fire; thank-you page has tracking and next steps"],
  },
  {
    title: "Pre-launch QA",
    summary: "Double-check structure, audiences, tracking, copy, links, UTMs, and schedules.",
    points: ["Review objectives, budgets, bid strategies", "Verify pixel/conversion/attribution at ad set", "Check audiences, exclusions, and geos", "Proof copy/creatives for clarity and policy", "Test URLs/forms from live previews with UTMs", "Confirm schedules and start times"],
  },
  {
    title: "First 7–10 days optimization",
    summary: "Monitor delivery, breakdowns, CPL/ROAS, creative performance, and lead quality without overreacting.",
    points: ["Watch spend and cost per result daily", "Check placement/age/gender/location breakdowns", "Pause clear laggards after enough data", "Spin new creatives from early winners/comments", "Moderate comments; check CRM quality and show-up rates", "Avoid frequent structure changes that reset learning"],
  },
  {
    title: "Ongoing optimization & scaling",
    summary: "Rebalance budgets, test audiences/angles, refresh creatives, and scale gradually.",
    points: ["Review weekly CPL/CPS/ROAS/LTV", "Shift budget to best ad sets gradually", "Test broad/lookalikes/refined interests", "Maintain backlog of angles/hooks/creatives", "Test new offers or funnel steps when plateauing", "Scale in controlled increments (e.g., 20–30%) and retire fatigued ads"],
  },
  {
    title: "Reporting & communication",
    summary: "Keep a cadence, simple dashboard, documented tests, and tight feedback with sales/fulfillment.",
    points: ["Weekly + monthly reporting cadence", "Dashboard for spend, results, CPA/CPL, ROAS, LTV", "Document tests, learnings, decisions", "Share insights with sales/fulfillment for quality feedback", "Review full funnel to inform future creative/offer tests"],
  },
];

export default function MetaAdsChecklist() {
  const canonical = buildCanonical("/digital-products/meta-ads-launch-optimization-checklist");

  return (
    <main className="bg-gradient-to-b from-white via-slate-50 to-rose-50 text-slate-900">
      <SeoHelmet
        title="Meta Ads Launch & Optimization Checklist | GoDigitalPro"
        description="Free master checklist for launching and optimizing Meta Ads: objectives, pixel/CAPI, audiences, structure, creative, landing pages, QA, early optimization, scaling, and reporting."
        canonical={canonical}
        breadcrumbs={[
          { name: "Home", url: buildCanonical("/") },
          { name: "Learn", url: buildCanonical("/learn") },
          { name: "Digital products", url: buildCanonical("/learn/digital-products") },
          { name: "Meta Ads Launch & Optimization Checklist", url: canonical },
        ]}
      />

      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-50 via-white to-slate-50" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 py-14">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="max-w-3xl space-y-4">
              <Link
                to="/learn/digital-products"
                className="inline-flex items-center gap-2 text-sm font-semibold text-rose-700 hover:text-rose-900"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to digital products
              </Link>
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-rose-100">
                <Sparkles className="h-4 w-4 text-rose-600" />
                Digital product
              </div>
              <h1 className="text-3xl font-bold leading-tight md:text-4xl">Meta Ads Launch & Optimization Master Checklist</h1>
              <p className="text-lg text-slate-700">
                Duplicate this checklist for each Meta Ads account, offer, or funnel you launch. It covers objectives, tracking, audiences, structure, creative, landing
                pages, QA, early optimization, scaling, and reporting so you ship clean and keep improving.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-slate-700">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">
                  <ClipboardList className="h-4 w-4 text-rose-600" />
                  10 sections · launch + optimization
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">
                  <Megaphone className="h-4 w-4 text-amber-600" />
                  Offers, pixel/CAPI, creative, funnels
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">
                  <TrendingUp className="h-4 w-4 text-slate-700" />
                  Optimization & scaling rhythm
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-rose-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-200 transition hover:bg-rose-800"
                >
                  <Download className="h-4 w-4" />
                  Download the checklist (PDF)
                </a>
                <Link
                  to="/onboarding"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-rose-700 hover:text-rose-900"
                >
                  Need done-for-you Meta Ads?
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <p className="text-sm text-slate-600">Free to use and adapt across teams and client onboarding.</p>
            </div>
            <div className="flex w-full flex-col gap-3 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-rose-100 md:w-80">
              <div className="flex items-center gap-2 text-sm font-semibold text-rose-700">
                <CheckCircle2 className="h-4 w-4" />
                You’ll check for:
              </div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 text-amber-500" />
                  Objectives, ICP, offers, and pricing mapped.
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 text-amber-500" />
                  Pixel/CAPI firing with prioritized events.
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 text-amber-500" />
                  Clean campaign structure, audiences, and naming.
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 text-amber-500" />
                  Feed-native creatives with proof and clear CTAs.
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 text-amber-500" />
                  QA, optimization rhythm, and reporting cadence.
                </li>
              </ul>
              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-800 ring-1 ring-rose-100 hover:bg-rose-100"
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
              <h2 className="text-2xl font-bold text-slate-900">Every step from pixel to reporting</h2>
              <p className="mt-2 text-slate-700">Use these 10 sections as your launch and optimization guardrails.</p>
            </div>
            <Target className="h-6 w-6 text-rose-600" />
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {sections.map((item) => (
              <div key={item.title} className="flex flex-col gap-2 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                    <p className="text-sm text-slate-700">{item.summary}</p>
                  </div>
                  <CheckCircle2 className="h-4 w-4 text-rose-600" />
                </div>
                <ul className="mt-2 space-y-1 text-sm text-slate-700">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-500" />
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
                <Users className="h-4 w-4 text-rose-600" />
                Use this checklist when…
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-rose-600" />
                  Launching a new Meta Ads account, offer, or funnel.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-rose-600" />
                  Auditing an account with tracking or structure debt.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-rose-600" />
                  Onboarding clients or new team members into your playbook.
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
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-rose-50 text-xs font-semibold text-rose-700 ring-1 ring-rose-100">1</span>
                  Start with objectives, offer, ICP, and tracking so data is trustworthy from day one.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-rose-50 text-xs font-semibold text-rose-700 ring-1 ring-rose-100">2</span>
                  Build campaigns following the structure, audiences, and creative angles listed.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-rose-50 text-xs font-semibold text-rose-700 ring-1 ring-rose-100">3</span>
                  Use the 7–10 day and ongoing optimization sections to guide budget shifts and tests.
                </li>
              </ol>
              <div className="mt-4 inline-flex items-center gap-2 rounded-xl bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-800 ring-1 ring-rose-100">
                <Download className="h-4 w-4" />
                Keep the PDF open during launch to avoid misses.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-rose-700 px-6 py-8 text-white shadow-lg shadow-rose-200 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-100">Download</p>
              <h3 className="mt-1 text-2xl font-semibold">Grab the Meta Ads checklist and launch with confidence</h3>
              <p className="mt-2 max-w-2xl text-sm text-rose-100">
                Free, ready-to-use, and built for performance teams. Share with stakeholders, adapt to SOPs, and keep it handy for QA and optimization cycles.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-rose-700 shadow-sm ring-1 ring-rose-100 hover:bg-rose-50"
              >
                Download the PDF
                <Download className="h-4 w-4" />
              </a>
              <Link to="/onboarding" className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-rose-100 hover:text-white">
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
