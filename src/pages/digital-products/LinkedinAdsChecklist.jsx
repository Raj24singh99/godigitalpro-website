import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Download,
  Flag,
  LayoutTemplate,
  Megaphone,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import SeoHelmet from "../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../utils/seo.js";

const downloadUrl = "https://drive.google.com/file/d/1H2vMiC7UeIsMe76BS96S98XvTmTKTjxE/view?usp=drive_link";

const sections = [
  {
    title: "Business, offer & positioning",
    summary: "Lock goals, offer, ICP, funnel path, and differentiators before you touch Campaign Manager.",
    points: ["Define goal (leads, calls, demos, registrations)", "Clarify offer and funnel entry", "Describe ICP, pain points, and outcomes", "Map ad → page/form → nurture flow"],
  },
  {
    title: "Account, tracking & permissions",
    summary: "Set billing, roles, Insight Tag, conversions, and CRM handoffs so data is trustworthy.",
    points: ["Confirm account + billing", "Add admins/limited-access users", "Install and verify Insight Tag", "Create conversions and map to campaigns", "Confirm CRM/MA integrations or exports"],
  },
  {
    title: "Audience & targeting design",
    summary: "Design ICP and ABM targeting, warm audiences, and exclusions before building campaigns.",
    points: ["Define industries, sizes, geos, seniority", "List job functions/titles", "Create ABM account lists", "Plan layered targeting and warm audiences", "Create exclusion lists", "Decide ABM vs broader campaigns"],
  },
  {
    title: "Campaign structure & objectives",
    summary: "Choose objectives, naming, budgets, and bidding that match funnel stages.",
    points: ["Pick objectives per stage", "Separate by objective/audience/geo", "Set naming conventions", "Limit initial campaigns to key offers", "Set starting budgets and bidding strategy"],
  },
  {
    title: "Ad formats, creative & messaging",
    summary: "Pick formats per objective, craft hooks, proof, CTAs, and feed-native creative variations.",
    points: ["Match formats to objectives", "Plan Lead Gen Forms where useful", "Define angles and concise headlines", "Lead with proof and clear CTAs", "Design mobile-first, feed-native creatives", "Create multiple variations per ad group"],
  },
  {
    title: "Landing page & funnel experience",
    summary: "Ensure message match, speed, clear CTAs, B2B proof, and CRM tagging on every form.",
    points: ["Match ad headline to hero", "Optimize for mobile and desktop", "Make primary CTA obvious", "Add case studies/logos/testimonials", "Connect forms to CRM with tags", "Use confirmation pages with tracking"],
  },
  {
    title: "Pre-launch QA",
    summary: "Double-check structure, audiences, tracking, copy, links, forms, and routing before going live.",
    points: ["Review names/objectives/budgets", "Check audience definitions", "Verify Insight Tag, conversions, UTMs", "Proof ad copy and creatives", "Test links, forms, downloads", "Confirm lead routing/notifications"],
  },
  {
    title: "First 7–14 days optimization",
    summary: "Monitor delivery, CTR, CPL/CPA, segments, lead quality, and roll in new creatives quickly.",
    points: ["Watch spend/impressions/CPM", "Review CTR and pause weak ads", "Check CPL/CPA vs targets", "Analyze by segment (industry, function, seniority)", "Sync with sales on lead quality", "Test new hooks/creatives"],
  },
  {
    title: "Ongoing optimization & scaling",
    summary: "Shift budget to winning audiences, refresh creatives, expand ICP coverage, and scale carefully.",
    points: ["Review weekly KPIs including pipeline", "Shift budget to proven segments", "Add new lookalikes/geos/industries", "Rotate creatives to avoid fatigue", "Refine messaging from sales insights", "Scale budgets in measured steps"],
  },
  {
    title: "Reporting, alignment & documentation",
    summary: "Keep definitions tight, report on pipeline/revenue influence, and document learnings.",
    points: ["Build a LinkedIn Ads dashboard", "Align lead/MQL/SQL/opportunity definitions", "Track beyond CPL to meetings/pipeline/revenue", "Document experiments and winners", "Quarterly strategy reviews with sales/leadership"],
  },
];

export default function LinkedinAdsChecklist() {
  const canonical = buildCanonical("/digital-products/linkedin-ads-launch-optimization-checklist");

  return (
    <main className="bg-gradient-to-b from-white via-slate-50 to-sky-50 text-slate-900">
      <SeoHelmet
        title="LinkedIn Ads Launch & Optimization Checklist | GoDigitalPro"
        description="Free master checklist for launching and optimizing LinkedIn Ads: goals, tracking, ICP targeting, structure, creative, landing pages, QA, optimization, scaling, and reporting."
        canonical={canonical}
        breadcrumbs={[
          { name: "Home", url: buildCanonical("/") },
          { name: "Learn", url: buildCanonical("/learn") },
          { name: "Digital products", url: buildCanonical("/learn/digital-products") },
          { name: "LinkedIn Ads Launch & Optimization Checklist", url: canonical },
        ]}
      />

      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-50 via-white to-slate-50" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 py-14">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="max-w-3xl space-y-4">
              <Link
                to="/learn/digital-products"
                className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-900"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to digital products
              </Link>
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-sky-100">
                <Sparkles className="h-4 w-4 text-sky-600" />
                Digital product
              </div>
              <h1 className="text-3xl font-bold leading-tight md:text-4xl">LinkedIn Ads Launch & Optimization Master Checklist</h1>
              <p className="text-lg text-slate-700">
                Use this checklist for every new LinkedIn Ads offer, market, or account. It covers positioning, tracking, targeting, structure, creative, landing
                pages, QA, first-14-day optimization, scaling, and reporting so you launch clean and keep improving.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-slate-700">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">
                  <ClipboardList className="h-4 w-4 text-sky-600" />
                  10 sections · launch + optimization
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">
                  <Megaphone className="h-4 w-4 text-amber-600" />
                  Offers, ICP, creative, funnels
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">
                  <TrendingUp className="h-4 w-4 text-slate-700" />
                  Optimization & scaling steps
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200 transition hover:bg-sky-800"
                >
                  <Download className="h-4 w-4" />
                  Download the checklist (PDF)
                </a>
                <Link
                  to="/onboarding"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-900"
                >
                  Want done-for-you LinkedIn Ads?
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <p className="text-sm text-slate-600">Free to use and adapt for internal workflows or client onboarding.</p>
            </div>
            <div className="flex w-full flex-col gap-3 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-sky-100 md:w-80">
              <div className="flex items-center gap-2 text-sm font-semibold text-sky-700">
                <CheckCircle2 className="h-4 w-4" />
                You’ll check for:
              </div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 text-amber-500" />
                  Goals, offers, ICP, and differentiators documented.
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 text-amber-500" />
                  Insight Tag, conversions, and CRM routing verified.
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 text-amber-500" />
                  Clean structure, audiences, and naming for launch.
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 text-amber-500" />
                  Feed-native creatives, proof, and clear CTAs.
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 text-amber-500" />
                  7–14 day and ongoing optimization rhythm.
                </li>
              </ul>
              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-sky-50 px-4 py-3 text-sm font-semibold text-sky-800 ring-1 ring-sky-100 hover:bg-sky-100"
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
              <h2 className="text-2xl font-bold text-slate-900">Every step from positioning to reporting</h2>
              <p className="mt-2 text-slate-700">Run through these 10 sections before launch and during optimizations.</p>
            </div>
            <Target className="h-6 w-6 text-sky-600" />
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {sections.map((item) => (
              <div key={item.title} className="flex flex-col gap-2 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                    <p className="text-sm text-slate-700">{item.summary}</p>
                  </div>
                  <CheckCircle2 className="h-4 w-4 text-sky-600" />
                </div>
                <ul className="mt-2 space-y-1 text-sm text-slate-700">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500" />
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
                <Users className="h-4 w-4 text-sky-600" />
                Use this checklist when…
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-sky-600" />
                  Launching a new LinkedIn Ads offer, geo, or ICP segment.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-sky-600" />
                  Auditing an existing account that’s expensive or unclear.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-sky-600" />
                  Onboarding clients or new team members to your LinkedIn playbook.
                </li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">
                <Flag className="h-4 w-4 text-amber-600" />
                How to put it to work
              </div>
              <ol className="mt-3 space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-50 text-xs font-semibold text-sky-700 ring-1 ring-sky-100">1</span>
                  Start with goals, ICP, offers, and tracking so campaigns launch with clean data.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-50 text-xs font-semibold text-sky-700 ring-1 ring-sky-100">2</span>
                  Build campaigns using the structure, audiences, and creative angles in the checklist.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-50 text-xs font-semibold text-sky-700 ring-1 ring-sky-100">3</span>
                  Follow the 7–14 day optimization and ongoing scaling sections to keep performance improving.
                </li>
              </ol>
              <div className="mt-4 inline-flex items-center gap-2 rounded-xl bg-sky-50 px-4 py-3 text-sm font-semibold text-sky-800 ring-1 ring-sky-100">
                <Download className="h-4 w-4" />
                Keep the PDF open while you launch to avoid misses.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-sky-700 px-6 py-8 text-white shadow-lg shadow-sky-200 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-100">Download</p>
              <h3 className="mt-1 text-2xl font-semibold">Grab the LinkedIn Ads checklist and launch with confidence</h3>
              <p className="mt-2 max-w-2xl text-sm text-sky-100">
                Free, ready-to-use, and built for B2B teams. Share it with stakeholders, adapt it to your SOPs, and keep it handy during pre-launch QA and early optimizations.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-sky-700 shadow-sm ring-1 ring-sky-100 hover:bg-sky-50"
              >
                Download the PDF
                <Download className="h-4 w-4" />
              </a>
              <Link to="/onboarding" className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-sky-100 hover:text-white">
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
