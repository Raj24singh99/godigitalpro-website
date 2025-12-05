import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Download,
  Film,
  LayoutTemplate,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import SeoHelmet from "../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../utils/seo.js";

const downloadUrl = "https://drive.google.com/file/d/1AQ1Z2A9rA4exvRsm0-4h9GJoje5j523h/view?usp=drive_link";

const sections = [
  {
    title: "Business, offer & funnel strategy",
    summary: "Define goals, offer, ICP, pains/desires, funnel map, and TikTok’s role in your media mix.",
    points: ["Set primary goal (sales, leads, installs, traffic, views)", "Clarify offer and entry point", "Describe ICP, pains, and desires", "Map ad → page → checkout/lead → follow-up", "Decide TikTok’s role (awareness, acquisition, retargeting)"],
  },
  {
    title: "Account, pixel & tracking",
    summary: "Set up Ads Manager, Pixel/Events API, standard events, and attribution windows.",
    points: ["Verify account and billing", "Install Pixel via GTM/native/code", "Test events with Pixel Helper/Events Manager", "Configure standard events and Events API", "Set attribution windows and measurement approach"],
  },
  {
    title: "Audience & targeting",
    summary: "Define geos, age, interests/behaviours, custom audiences, lookalikes, and segment cold/warm/hot.",
    points: ["Set geos/age/gender/language", "List interest and behaviour clusters", "Choose broad vs layered based on data", "Create custom audiences and lookalikes", "Separate campaigns/ad groups for cold, warm, hot"],
  },
  {
    title: "Campaign structure & bidding",
    summary: "Pick objectives, keep structure lean, and set budgets/bidding intentionally.",
    points: ["Choose objective per KPI", "Limit campaigns to a testable set", "Use clear naming conventions", "Set budgets and optimization event at ad group", "Choose bid strategy (lowest cost vs cost cap) thoughtfully"],
  },
  {
    title: "Creative strategy & production",
    summary: "Plan angles, hooks, UGC style, pacing, captions, and Spark/creator usage.",
    points: ["Brainstorm 3–5 angles and hooks", "Shoot vertical 9:16, lo-fi/UGC style", "Add captions/text overlays", "Show product/result early; use pattern interrupts", "Keep 15–30s with clear CTA; test Spark vs dark ads"],
  },
  {
    title: "Ad setup & copy in Ads Manager",
    summary: "Select identity, upload creatives, short copy, CTAs, UTMs, and preview placements.",
    points: ["Pick correct account/identity", "Name creatives by angle/script", "Write short outcome-focused text", "Choose CTA button", "Add UTMs and preview across placements"],
  },
  {
    title: "Landing page & offer experience",
    summary: "Match ad promise, optimize for mobile, show proof, reduce friction, and verify tracking.",
    points: ["Ensure message/style match", "Optimize mobile speed and layout", "Clear above-the-fold CTA", "Add social proof (UGC, reviews, testimonials)", "Simplify forms/checkout; verify events fire"],
  },
  {
    title: "Pre-launch QA",
    summary: "Check objectives, targeting, pixel, links, UTMs, schedules, and notifications.",
    points: ["Review names/objectives/budgets", "Double-check targeting and exclusions", "Verify Pixel/events via test traffic", "Test URLs/CTAs/forms on mobile", "Confirm UTMs and notifications/CRM integrations"],
  },
  {
    title: "First 7–14 days optimization",
    summary: "Monitor delivery, CTR/CPM/CPC, creative performance, CPA/CPL, and lead/sales quality.",
    points: ["Watch delivery and spend", "Review CTR/CPM/CPC for weak matches", "Pause underperformers after data", "Keep 2–3 creatives live per ad group", "Check CPA/CPL vs targets and audience breakdowns", "Validate quality via CRM/store metrics"],
  },
  {
    title: "Ongoing optimization & scaling",
    summary: "Shift budgets to winners, scale gradually, refresh creatives, and expand audiences.",
    points: ["Review weekly KPIs and ROAS", "Shift budget to stable winners", "Scale in measured steps", "Continuously test hooks/UGC creators", "Add new audiences and document learnings"],
  },
];

export default function TiktokAdsChecklist() {
  const canonical = buildCanonical("/digital-products/tiktok-ads-launch-optimization-checklist");

  return (
    <main className="bg-gradient-to-b from-white via-slate-50 to-indigo-50 text-slate-900">
      <SeoHelmet
        title="TikTok Ads Launch & Optimization Checklist | GoDigitalPro"
        description="Free master checklist for TikTok Ads: goals, pixel/events, targeting, structure, UGC creative, landing pages, QA, early optimization, scaling, and reporting cadence."
        canonical={canonical}
        breadcrumbs={[
          { name: "Home", url: buildCanonical("/") },
          { name: "Learn", url: buildCanonical("/learn") },
          { name: "Digital products", url: buildCanonical("/learn/digital-products") },
          { name: "TikTok Ads Launch & Optimization Checklist", url: canonical },
        ]}
      />

      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 via-white to-slate-50" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 py-14">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="max-w-3xl space-y-4">
              <Link
                to="/learn/digital-products"
                className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-700 hover:text-indigo-900"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to digital products
              </Link>
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-indigo-100">
                <Sparkles className="h-4 w-4 text-indigo-600" />
                Digital product
              </div>
              <h1 className="text-3xl font-bold leading-tight md:text-4xl">TikTok Ads Launch & Optimization Master Checklist</h1>
              <p className="text-lg text-slate-700">
                Use this checklist for every TikTok Ads offer, product, or funnel you scale. It covers goals, pixel/events, targeting, structure, UGC-style creative,
                landing pages, QA, first-14-day optimization, scaling, and reporting.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-slate-700">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">
                  <ClipboardList className="h-4 w-4 text-indigo-600" />
                  10 sections · launch + optimization
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">
                  <Film className="h-4 w-4 text-amber-600" />
                  UGC, hooks, pacing, Spark/dark ads
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
                  className="inline-flex items-center gap-2 rounded-full bg-indigo-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-800"
                >
                  <Download className="h-4 w-4" />
                  Download the checklist (PDF)
                </a>
                <Link
                  to="/onboarding"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-700 hover:text-indigo-900"
                >
                  Need done-for-you TikTok Ads?
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <p className="text-sm text-slate-600">Free to use and adapt for teams and client onboarding.</p>
            </div>
            <div className="flex w-full flex-col gap-3 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-indigo-100 md:w-80">
              <div className="flex items-center gap-2 text-sm font-semibold text-indigo-700">
                <CheckCircle2 className="h-4 w-4" />
                You’ll check for:
              </div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 text-amber-500" />
                  Goals, offer, ICP, pains/desires mapped to funnel.
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 text-amber-500" />
                  Pixel/Events API firing with correct attribution windows.
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 text-amber-500" />
                  Lean structure, intentional bidding, and clear naming.
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 text-amber-500" />
                  UGC-style creative with strong hooks and proof.
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 text-amber-500" />
                  QA, early optimization, and scaling checkpoints.
                </li>
              </ul>
              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-50 px-4 py-3 text-sm font-semibold text-indigo-800 ring-1 ring-indigo-100 hover:bg-indigo-100"
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
              <h2 className="text-2xl font-bold text-slate-900">10 sections from pixel to scaling</h2>
              <p className="mt-2 text-slate-700">Follow these before launch and during optimization cycles.</p>
            </div>
            <Target className="h-6 w-6 text-indigo-600" />
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {sections.map((item) => (
              <div key={item.title} className="flex flex-col gap-2 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                    <p className="text-sm text-slate-700">{item.summary}</p>
                  </div>
                  <CheckCircle2 className="h-4 w-4 text-indigo-600" />
                </div>
                <ul className="mt-2 space-y-1 text-sm text-slate-700">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500" />
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
                <Users className="h-4 w-4 text-indigo-600" />
                Use this checklist when…
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-indigo-600" />
                  Launching new TikTok offers, products, or funnels.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-indigo-600" />
                  Auditing accounts with tracking or creative gaps.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-indigo-600" />
                  Onboarding clients or team members into your TikTok playbook.
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
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-50 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-100">1</span>
                  Start with goals, offer, ICP, and tracking so data is clean from day one.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-50 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-100">2</span>
                  Build campaigns using the structure, targeting, and creative angles listed.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-50 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-100">3</span>
                  Follow the 7–14 day and ongoing optimization sections to guide budget shifts and tests.
                </li>
              </ol>
              <div className="mt-4 inline-flex items-center gap-2 rounded-xl bg-indigo-50 px-4 py-3 text-sm font-semibold text-indigo-800 ring-1 ring-indigo-100">
                <Download className="h-4 w-4" />
                Keep the PDF open during launch to avoid misses.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-indigo-700 px-6 py-8 text-white shadow-lg shadow-indigo-200 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-100">Download</p>
              <h3 className="mt-1 text-2xl font-semibold">Grab the TikTok Ads checklist and launch with confidence</h3>
              <p className="mt-2 max-w-2xl text-sm text-indigo-100">
                Free, ready-to-use, and built for performance teams. Share it with stakeholders, adapt it to your SOPs, and keep it handy during QA and optimization cycles.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-indigo-700 shadow-sm ring-1 ring-indigo-100 hover:bg-indigo-50"
              >
                Download the PDF
                <Download className="h-4 w-4" />
              </a>
              <Link to="/onboarding" className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-indigo-100 hover:text-white">
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
