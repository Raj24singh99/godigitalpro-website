import React from "react";
import { Sparkles, Crown, Layers, BarChart3, ArrowLeft, Compass, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "mangools vs serpstat vs ahrefs";
const canonical = buildCanonical("/tools/compare/mangools-vs-serpstat-vs-ahrefs");

const brandMeta = {
  mangools: {
    gradient: "from-amber-500 via-orange-500 to-emerald-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/mangools.com",
  },
  serpstat: {
    gradient: "from-sky-500 via-cyan-500 to-indigo-500",
    badge: "bg-sky-100 text-sky-900",
    logo: "https://logo.clearbit.com/serpstat.com",
  },
  ahrefs: {
    gradient: "from-slate-900 via-sky-800 to-sky-500",
    badge: "bg-slate-100 text-slate-900",
    logo: "https://logo.clearbit.com/ahrefs.com",
  },
};

const contenders = [
  {
    key: "mangools",
    name: "Mangools",
    blurb: "Clean UX, quick keyword wins, and simple rank tracking for marketers and founders.",
    url: "https://mangools.com/",
    slug: "mangools",
  },
  {
    key: "serpstat",
    name: "Serpstat",
    blurb: "All-in-one SEO platform with audits, clusters, and strong value for agencies.",
    url: "https://serpstat.com/",
    slug: "serpstat",
  },
  {
    key: "ahrefs",
    name: "Ahrefs",
    blurb: "Deep backlink data, SERP history, and strong content/competitive research.",
    url: "https://ahrefs.com/",
    slug: "ahrefs",
  },
];

const comparisonRows = [
  {
    label: "Primary use case",
    mangools: "Quick keyword research, SERP previews, and rank tracking",
    serpstat: "All-in-one SEO: keywords, audits, content, PPC, and reporting",
    ahrefs: "Enterprise-grade backlink + content research and site audits",
  },
  {
    label: "Keyword research",
    mangools: "KWFinder for long-tail discovery with clear difficulty scores",
    serpstat: "Keyword clusters, intent labels, PPC data, and batch analysis",
    ahrefs: "Clicks data, SERP history, parent topics, and strong KD",
  },
  {
    label: "Backlink data",
    mangools: "Smaller index; good for quick link checks and basic outreach",
    serpstat: "Solid link index with lost/new links and toxicity indicators",
    ahrefs: "Market-leading freshness and depth for serious link building",
  },
  {
    label: "Technical SEO",
    mangools: "No native crawler; pair with a separate site audit tool",
    serpstat: "Full site audit with issue prioritisation and change tracking",
    ahrefs: "Powerful Site Audit with Health Score and Core Web Vitals",
  },
  {
    label: "Rank tracking",
    mangools: "Daily rank tracking with local focus and simple reports",
    serpstat: "Flexible tracking (desktop/mobile/local) with segments",
    ahrefs: "Rank Tracker with visibility score, segments, and competitors",
  },
  {
    label: "Reporting & dashboards",
    mangools: "Simple exports and easy-to-read project overviews",
    serpstat: "White-label reports, API, and client-friendly dashboards",
    ahrefs: "Good reports with connectors (e.g. Looker Studio) for teams",
  },
  {
    label: "Pricing feel",
    mangools: "Most affordable starter plans; great for solo/SMB",
    serpstat: "Aggressive value for multi-user teams and agencies",
    ahrefs: "Premium pricing that matches depth and data volume",
  },
  {
    label: "Best for",
    mangools: "Marketers who want fast wins without complex UX",
    serpstat: "Agencies and teams needing an all-rounder SEO suite",
    ahrefs: "Advanced SEOs who live in backlink and content data",
  },
];

const scoreboard = [
  { label: "Ease of use", mangools: 9.3, serpstat: 8.2, ahrefs: 8.0 },
  { label: "Backlink depth", mangools: 7.2, serpstat: 8.4, ahrefs: 9.6 },
  { label: "Technical coverage", mangools: 6.5, serpstat: 8.4, ahrefs: 8.7 },
  { label: "Rank tracking", mangools: 8.4, serpstat: 8.6, ahrefs: 8.7 },
  { label: "Keyword research", mangools: 8.9, serpstat: 8.6, ahrefs: 9.0 },
  { label: "Value for money", mangools: 9.0, serpstat: 8.8, ahrefs: 8.0 },
];

const avg = (tool) =>
  (scoreboard.reduce((sum, row) => sum + (row[tool] || 0), 0) / scoreboard.length).toFixed(1);

const averages = {
  mangools: avg("mangools"),
  serpstat: avg("serpstat"),
  ahrefs: avg("ahrefs"),
};

const overallWinner =
  Math.max(averages.mangools, averages.serpstat, averages.ahrefs) ===
  parseFloat(averages.ahrefs)
    ? "Ahrefs"
    : Math.max(averages.serpstat, averages.mangools) === parseFloat(averages.serpstat)
    ? "Serpstat"
    : "Mangools";

const pricingTable = [
  {
    plan: "Mangools Basic / Premium",
    monthly: "From around ~$29–$49/mo",
    annual: "Discounted on annual billing",
    limits: "Keyword lookups, tracked keywords, and simultaneous logins per tier",
    notes: "Great entry-level value for founders, content marketers, and small teams.",
  },
  {
    plan: "Serpstat Lite / Standard / Advanced",
    monthly: "From around ~$59/mo",
    annual: "Lower effective rate with annual plans",
    limits: "Credits for reports, API, audits, and users scale with each plan",
    notes: "Strong pricing for agencies managing multiple projects and clients.",
  },
  {
    plan: "Ahrefs Lite / Standard",
    monthly: "From around ~$99/mo",
    annual: "Often discounted when billed annually",
    limits: "Project limits, crawl credits, and user seats scale up quickly",
    notes: "Best suited for teams that will fully exploit backlink and content data.",
  },
];

const featureBullets = {
  research: [
    "Mangools: KWFinder, SERPChecker, and SERPWatcher make keyword and SERP research very approachable.",
    "Serpstat: Combines keyword, competitor, PPC, and clustering into one research workflow.",
    "Ahrefs: Deep keywords, SERP history, and content gap analysis for serious SEO campaigns.",
  ],
  technical: [
    "Mangools: No built-in crawler; typically paired with Screaming Frog or separate audit tools.",
    "Serpstat: Full site audit, issue prioritisation, and historical comparisons for technical SEO.",
    "Ahrefs: Mature Site Audit with Health Score, CWV insights, and detailed crawl reports.",
  ],
  workflow: [
    "Mangools: Lightweight reports and exports that non-SEO stakeholders can understand quickly.",
    "Serpstat: White-label reporting, API, and team features for agencies and in-house squads.",
    "Ahrefs: Dashboards, alerts, and integrations that fit into advanced SEO and content workflows.",
  ],
};

const prosCons = {
  mangools: {
    pros: [
      "Very clean UX that makes SEO approachable for non-specialists",
      "Excellent for long-tail keyword discovery and quick SERP checks",
      "Strong value at lower price points for solo and small teams",
    ],
    cons: [
      "No built-in technical site audit",
      "Backlink index is smaller than Ahrefs and some all-in-ones",
      "Fewer enterprise collaboration and reporting features",
    ],
  },
  serpstat: {
    pros: [
      "All-in-one toolset: keywords, backlinks, audits, PPC, and clustering",
      "Good value for agencies managing many domains and users",
      "White-label reporting and API access on higher plans",
    ],
    cons: [
      "UX is more complex than Mangools for beginners",
      "Backlink depth trails Ahrefs for heavy link-building programs",
      "Interface can feel dense when you only need a few modules",
    ],
  },
  ahrefs: {
    pros: [
      "One of the best backlink indexes on the market",
      "Excellent for content gap, competitor, and SERP history analysis",
      "Powerful Site Audit and Rank Tracker for advanced teams",
    ],
    cons: [
      "Highest pricing of the three—overkill for some small sites",
      "Learning curve can be steeper for new marketers",
      "Some modules can feel underused if you only need keywords and ranks",
    ],
  },
};

const faqs = [
  {
    q: `Who wins overall in ${YEAR}?`,
    a: "Ahrefs wins on backlink depth, SERP history, and advanced research. Serpstat is the value all-rounder with audits, clustering, and reporting. Mangools is the easiest to use for fast keyword and rank insights.",
  },
  {
    q: "When should I pick Mangools?",
    a: "Pick Mangools if you want a lightweight SEO toolkit for keywords, SERPs, and rank tracking without overwhelming dashboards—ideal for founders, bloggers, and lean marketing teams.",
  },
  {
    q: "When should I pick Serpstat?",
    a: "Choose Serpstat if you need an affordable all-in-one SEO suite with audits, clustering, PPC data, and flexible reporting—especially useful for agencies and in-house SEO teams.",
  },
  {
    q: "When should I pick Ahrefs?",
    a: "Pick Ahrefs when backlink depth, SERP history, and robust content/competitor research are critical. It fits advanced SEOs, content-led teams, and brands ready to pay for depth.",
  },
  {
    q: "Which tool is best for agencies?",
    a: "Serpstat is usually the best value for agencies thanks to its all-in-one scope, white-label reporting, and pricing. Ahrefs can be added for heavyweight link analysis if budget allows.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const LogoBadge = ({ name }) => {
  const lowered = name.toLowerCase();
  const key = lowered.includes("mangools")
    ? "mangools"
    : lowered.includes("serpstat")
    ? "serpstat"
    : lowered.includes("ahrefs")
    ? "ahrefs"
    : lowered;

  const meta =
    brandMeta[key] || {
      gradient: "from-slate-400 to-slate-600",
      badge: "bg-slate-100 text-slate-900",
    };

  return (
    <div className="flex items-center gap-2">
      <div
        className={`flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br ${meta.gradient}`}
      >
        {meta.logo ? (
          <img src={meta.logo} alt={`${name} logo`} className="h-full w-full object-cover" />
        ) : (
          <span className="text-sm font-bold text-white">{name.slice(0, 2).toUpperCase()}</span>
        )}
      </div>
      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${meta.badge}`}>{name}</span>
    </div>
  );
};

export default function MangoolsVsSerpstatVsAhrefsPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Mangools vs Serpstat vs Ahrefs (${YEAR}) – SEO tool comparison`}
        description="Compare Mangools, Serpstat, and Ahrefs across keyword research, backlinks, site audits, rank tracking, pricing, and use-cases to choose the right SEO stack."
        canonical={canonical}
        keywords={`${primaryKeyword}, mangools review, serpstat review, ahrefs review, seo tools comparison`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
          SEO tools
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Mangools vs Serpstat vs Ahrefs ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Mangools is the easiest and most affordable, Ahrefs brings the deepest backlink and SERP
          data, and Serpstat sits in the middle as an all-in-one SEO suite. Here is a structured
          breakdown so you can choose the right tool for your SEO roadmap.
        </p>

        {/* Top contender cards */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {contenders.map((item) => (
            <a
              key={item.key}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative block overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br ${
                brandMeta[item.key]?.gradient || "from-slate-500 to-slate-700"
              } p-5 shadow-md`}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white" />
                <div className="pointer-events-none absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-white" />
              </div>
              <div className="relative flex items-start justify-between">
                <LogoBadge name={item.name} />
                <Sparkles className="h-5 w-5 text-white/80" />
              </div>
              <p className="relative mt-3 text-sm font-medium text-white/90">{item.blurb}</p>
            </a>
          ))}
        </div>

        {/* Quick verdict + overall winner */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-amber-100 bg-amber-50 px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-amber-900">
              <Sparkles className="h-5 w-5" />
              <p className="text-lg font-semibold">Quick verdict</p>
            </div>
            <p className="mt-2 text-slate-800">
              Choose <strong>Mangools</strong> if you want approachable keyword research and rank
              tracking at a friendly price. Pick <strong>Serpstat</strong> when you need an
              all-in-one SEO platform with audits and clustering. Go with <strong>Ahrefs</strong> if
              backlink depth and SERP history are mission-critical for your SEO strategy.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Crown className="h-4 w-4 text-amber-600" /> Overall scoreboard winner:{" "}
              {overallWinner}{" "}
              <span className="text-xs text-slate-600">
                (avg:{" "}
                {overallWinner === "Mangools"
                  ? averages.mangools
                  : overallWinner === "Serpstat"
                  ? averages.serpstat
                  : averages.ahrefs}
                /10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              The right choice depends on whether you value ease-of-use, all-round coverage, or
              maximum data depth for advanced SEO.
            </p>
          </div>
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-amber-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Mangools</th>
                  <th className="px-4 py-3">Serpstat</th>
                  <th className="px-4 py-3">Ahrefs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.mangools}</td>
                    <td className="px-4 py-3 text-slate-700">{row.serpstat}</td>
                    <td className="px-4 py-3 text-slate-700">{row.ahrefs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Scoreboard */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <BarChart3 className="h-6 w-6 text-indigo-600" /> Scoreboard (1–10)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Mangools</th>
                  <th className="px-4 py-3">Serpstat</th>
                  <th className="px-4 py-3">Ahrefs</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const winnerValue = Math.max(row.mangools, row.serpstat, row.ahrefs);
                  const winner =
                    winnerValue === row.mangools
                      ? "Mangools"
                      : winnerValue === row.serpstat
                      ? "Serpstat"
                      : "Ahrefs";
                  return (
                    <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Mangools" ? "font-semibold text-amber-800" : "text-slate-700"
                        }`}
                      >
                        {row.mangools}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Serpstat" ? "font-semibold text-sky-800" : "text-slate-700"
                        }`}
                      >
                        {row.serpstat}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Ahrefs" ? "font-semibold text-slate-900" : "text-slate-700"
                        }`}
                      >
                        {row.ahrefs}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">{winner}</td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-amber-50 via-sky-50 to-slate-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-amber-800">{averages.mangools}</td>
                  <td className="px-4 py-3 font-semibold text-sky-800">{averages.serpstat}</td>
                  <td className="px-4 py-3 font-semibold text-slate-900">{averages.ahrefs}</td>
                  <td className="px-4 py-3 font-bold text-slate-900">{overallWinner}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Feature comparison */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Compass className="h-6 w-6 text-amber-600" /> Feature Comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Compass className="h-5 w-5 text-amber-600" /> Keyword, SERP & competitor research
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.research.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Shield className="h-5 w-5 text-sky-600" /> Technical SEO & audits
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.technical.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Layers className="h-5 w-5 text-emerald-600" /> Reporting, workflow & teams
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.workflow.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Pricing Snapshots</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Monthly (approx.)</th>
                  <th className="px-4 py-3">Annual</th>
                  <th className="px-4 py-3">Key limits</th>
                  <th className="px-4 py-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {pricingTable.map((row) => (
                  <tr key={row.plan}>
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.plan}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.monthly}</td>
                    <td className="px-4 py-3 text-slate-700">{row.annual}</td>
                    <td className="px-4 py-3 text-slate-700">{row.limits}</td>
                    <td className="px-4 py-3 text-slate-700">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600">
            Pricing changes frequently and depends on users, projects, and crawl/keyword limits.
            Always confirm details directly on each vendor&apos;s pricing page before committing.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User Experience & Learning Curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Mangools:</strong> Feels like an SEO toolkit designed for marketers—not just
              SEOs. Very little friction to get from keyword idea to SERP insights and rank reports.
            </li>
            <li>
              <strong>Serpstat:</strong> Deeper interface with more modules; better for teams that
              will live in the tool daily and need audits, PPC data, and reporting.
            </li>
            <li>
              <strong>Ahrefs:</strong> Packed with data and reports. There is a learning curve, but
              advanced users can extract enormous value once workflows are set up.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-World Use-Cases & Winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Solo founders, bloggers & small businesses:</strong> Mangools usually wins with
              its simple UX, value pricing, and fast path to actionable keyword ideas.
            </li>
            <li>
              <strong>Agencies managing many client sites:</strong> Serpstat wins on all-round
              coverage, reporting, and per-user/per-project economics.
            </li>
            <li>
              <strong>Advanced SEOs focused on links & content:</strong> Ahrefs wins with its
              backlink index, SERP history, and content gap analysis.
            </li>
            <li>
              <strong>Teams needing everything under one roof:</strong> Serpstat is often the best
              central hub, with Ahrefs optionally added for heavyweight link research.
            </li>
          </ul>
        </section>

        {/* Pros & Cons */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        {/* Who wins for… */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Who wins for…</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Mangools</h3>
              <p className="text-sm text-slate-700">
                Best when you need clear, fast keyword and SERP insights without a heavy learning
                curve or enterprise price tag.
              </p>
              <p className="mt-2 text-sm font-semibold text-amber-700">
                Ideal for: Bloggers, content marketers, solo founders, and small in-house teams.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Serpstat</h3>
              <p className="text-sm text-slate-700">
                Best when you want an all-in-one SEO suite with audits, keywords, PPC, and reporting
                that scales across many projects.
              </p>
              <p className="mt-2 text-sm font-semibold text-sky-700">
                Ideal for: SEO agencies, in-house SEO teams, and brands centralising their tooling.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Ahrefs</h3>
              <p className="text-sm text-slate-700">
                Best for deep backlink and content intelligence where competitive SEO is a major
                growth lever.
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-900">
                Ideal for: Advanced SEOs, content-heavy brands, and companies competing in tough
                SERPs.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
              >
                <h3 className="text-lg font-semibold text-slate-900">{item.q}</h3>
                <p className="mt-1 text-slate-700">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Back link */}
        <div className="mt-10 flex items-center gap-2 text-sm text-slate-600">
          <Link
            to="/tools"
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-amber-700 ring-1 ring-amber-100 hover:bg-amber-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
