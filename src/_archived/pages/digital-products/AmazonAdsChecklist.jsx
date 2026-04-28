import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Download,
  LayoutTemplate,
  Package,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import SeoHelmet from "../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../utils/seo.js";

const downloadUrl = "https://drive.google.com/file/d/1BXNcM0EB6UHASzjLKGG9Bz1nlzwtCS-n/view?usp=drive_link";

const sections = [
  {
    title: "Business, catalog & objectives",
    summary: "Define goals, hero ASINs, economics, inventory runway, and ranking plan.",
    points: ["Set goals (ranking, velocity, profit, launch, clearance)", "List hero products/variations to focus on", "Know unit economics and breakeven/target ACoS", "Confirm inventory for 30–60 days", "Align organic ranking with paid strategy"],
  },
  {
    title: "Listing readiness & conversion assets",
    summary: "Polish titles, bullets, images, A+ content, reviews, pricing, and backend keywords.",
    points: ["Optimize titles for keywords + readability", "Write benefit-led bullets addressing objections", "Use high-quality images and infographics", "Add A+ / EBC where available", "Check reviews/ratings; plan review strategy", "Validate pricing vs competitors", "Fill backend keywords/attributes"],
  },
  {
    title: "Keyword & competitor research",
    summary: "Build themed keyword sets, competitor insights, and starter negatives.",
    points: ["Collect seed and expand via tools/autocomplete", "Identify high-intent buying keywords", "Analyze competitor listings/ads for ideas", "Group into core, long-tail, branded, competitor, defensive", "Create starter negative lists"],
  },
  {
    title: "Account & campaign structure",
    summary: "Choose structure, naming, and auto/manual separation by ASIN and intent.",
    points: ["Structure by product/brand/category", "Set naming conventions", "Plan auto vs manual per ASIN", "Separate branded, generic, competitor", "Limit initial campaigns to hero ASINs"],
  },
  {
    title: "Sponsored Products setup",
    summary: "Launch auto for harvesting and tight manual groups with match types and bids.",
    points: ["Auto campaigns per ASIN/tight group", "Set bids by CPC benchmarks and ACoS targets", "Use auto for harvesting", "Manual campaigns with tight ad groups", "Include exact/phrase/broad carefully", "Map hero keywords to their own ad groups", "Add starter negatives"],
  },
  {
    title: "Sponsored Brands & Sponsored Display",
    summary: "Run branded/category coverage and retargeting/competitor conquesting where useful.",
    points: ["Branded campaigns for brand search", "Generic campaigns for category visibility", "Strong headlines aligned to value prop", "Pick best ASIN mix for cross-sell", "Use custom images/Store spotlight", "Display for competitor/complement targeting and views remarketing"],
  },
  {
    title: "Bidding & budget strategy",
    summary: "Set ACoS/TACoS goals, budgets, dynamic bidding, and top-of-search adjustments.",
    points: ["Define target and breakeven ACoS/TACoS", "Set daily budgets for data without waste", "Choose Down Only vs Up & Down intentionally", "Adjust top-of-search multipliers when profitable", "Watch budget caps to avoid downtime"],
  },
  {
    title: "Measurement, reports & KPIs",
    summary: "Track KPIs, search term and placement reports, and ASIN-level performance.",
    points: ["Monitor impressions, clicks, CPC, CTR, conversions, ACoS/ROAS, TACoS, organic mix", "Use Search Term reports for actual queries", "Review Placement reports (top/product/rest)", "Track ASIN-level heroes/laggards", "Align ads data with P&L and inventory"],
  },
  {
    title: "Optimization routines",
    summary: "Weekly harvesting, negatives, bid moves, budget reallocations, and creative/listing tests.",
    points: ["Move converting terms from auto/broad to exact/phrase", "Add non-converting terms as negatives", "Bid up winners, bid down high-ACoS terms", "Shift budget to strong campaigns/ASINs", "Test creatives/images/listing copy", "Manage reviews/ratings"],
  },
  {
    title: "Scaling, testing & maintenance",
    summary: "Scale budgets gradually, test new keywords/targets/markets, and keep a change log.",
    points: ["Increase budgets gradually on profitable campaigns", "Test new keyword themes and competitor targets", "Expand to other marketplaces when ready", "Audit and consolidate legacy campaigns", "Maintain change log of structural/bid changes"],
  },
];

export default function AmazonAdsChecklist() {
  const canonical = buildCanonical("/digital-products/amazon-ads-launch-optimization-checklist");

  return (
    <main className="bg-gradient-to-b from-white via-slate-50 to-amber-50 text-slate-900">
      <SeoHelmet
        title="Amazon Ads Launch & Optimization Checklist | GoDigitalPro"
        description="Free master checklist for Amazon Ads: goals, catalog readiness, keywords, structure, Sponsored Products/Brands/Display, bidding, measurement, optimization, and scaling."
        canonical={canonical}
        breadcrumbs={[
          { name: "Home", url: buildCanonical("/") },
          { name: "Learn", url: buildCanonical("/learn") },
          { name: "Digital products", url: buildCanonical("/learn/digital-products") },
          { name: "Amazon Ads Launch & Optimization Checklist", url: canonical },
        ]}
      />

      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50 via-white to-slate-50" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 py-14">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="max-w-3xl space-y-4">
              <Link
                to="/learn/digital-products"
                className="inline-flex items-center gap-2 text-sm font-semibold text-amber-700 hover:text-amber-900"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to digital products
              </Link>
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-amber-100">
                <Sparkles className="h-4 w-4 text-amber-600" />
                Digital product
              </div>
              <h1 className="text-3xl font-bold leading-tight md:text-4xl">Amazon Ads Launch & Optimization Master Checklist</h1>
              <p className="text-lg text-slate-700">
                Use this checklist for every brand, product line, or marketplace you scale with Amazon Ads. It covers goals, catalog readiness, keyword research, structure,
                Sponsored Products/Brands/Display, bidding, measurement, optimization, and scaling.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-slate-700">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">
                  <ClipboardList className="h-4 w-4 text-amber-600" />
                  10 sections · launch + optimization
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">
                  <Package className="h-4 w-4 text-emerald-600" />
                  Catalog, keywords, Sponsored ads
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
                  className="inline-flex items-center gap-2 rounded-full bg-amber-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-200 transition hover:bg-amber-700"
                >
                  <Download className="h-4 w-4" />
                  Download the checklist (PDF)
                </a>
                <Link
                  to="/onboarding"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-amber-700 hover:text-amber-900"
                >
                  Need done-for-you Amazon Ads?
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <p className="text-sm text-slate-600">Free to use and adapt across teams and client onboarding.</p>
            </div>
            <div className="flex w-full flex-col gap-3 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-amber-100 md:w-80">
              <div className="flex items-center gap-2 text-sm font-semibold text-amber-700">
                <CheckCircle2 className="h-4 w-4" />
                You’ll check for:
              </div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 text-amber-500" />
                  Goals, hero ASINs, unit economics, and inventory runway.
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 text-amber-500" />
                  Listing readiness: titles, bullets, images, A+ content, pricing.
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 text-amber-500" />
                  Structured keyword themes, negatives, and competitor insights.
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 text-amber-500" />
                  Clean Sponsored Products/Brands/Display setup.
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 text-amber-500" />
                  Bidding, measurement, weekly optimization, and scaling.
                </li>
              </ul>
              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-800 ring-1 ring-amber-100 hover:bg-amber-100"
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
              <h2 className="text-2xl font-bold text-slate-900">Every step from catalog to scaling</h2>
              <p className="mt-2 text-slate-700">Follow these 10 sections before launch and during optimization cycles.</p>
            </div>
            <Target className="h-6 w-6 text-amber-600" />
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {sections.map((item) => (
              <div key={item.title} className="flex flex-col gap-2 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                    <p className="text-sm text-slate-700">{item.summary}</p>
                  </div>
                  <CheckCircle2 className="h-4 w-4 text-amber-600" />
                </div>
                <ul className="mt-2 space-y-1 text-sm text-slate-700">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-500" />
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
                <Users className="h-4 w-4 text-amber-600" />
                Use this checklist when…
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-amber-600" />
                  Launching a new brand, product line, or marketplace on Amazon Ads.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-amber-600" />
                  Auditing accounts with structure, keyword, or measurement gaps.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-amber-600" />
                  Onboarding clients or team members into your Amazon PPC playbook.
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
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-50 text-xs font-semibold text-amber-700 ring-1 ring-amber-100">1</span>
                  Start with goals, hero ASINs, economics, and listing readiness to keep conversion high.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-50 text-xs font-semibold text-amber-700 ring-1 ring-amber-100">2</span>
                  Build campaigns using the structure, keyword themes, and Sponsored Products/Brands/Display guidance.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-50 text-xs font-semibold text-amber-700 ring-1 ring-amber-100">3</span>
                  Follow the weekly optimization and scaling sections to keep ACoS/TACoS on target.
                </li>
              </ol>
              <div className="mt-4 inline-flex items-center gap-2 rounded-xl bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-800 ring-1 ring-amber-100">
                <Download className="h-4 w-4" />
                Keep the PDF open during launch to avoid misses.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-amber-600 px-6 py-8 text-white shadow-lg shadow-amber-200 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-100">Download</p>
              <h3 className="mt-1 text-2xl font-semibold">Grab the Amazon Ads checklist and launch with confidence</h3>
              <p className="mt-2 max-w-2xl text-sm text-amber-100">
                Free, ready-to-use, and built for performance teams. Share with stakeholders, adapt to SOPs, and keep it handy for QA and optimization cycles.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-amber-700 shadow-sm ring-1 ring-amber-100 hover:bg-amber-50"
              >
                Download the PDF
                <Download className="h-4 w-4" />
              </a>
              <Link to="/onboarding" className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-amber-100 hover:text-white">
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
