import React from "react";
import {
  Sparkles,
  Crown,
  Compass,
  TrendingUp,
  BarChart3,
  ArrowLeft,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const canonical = buildCanonical(
  "/tools/compare/mangools-vs-ubersuggest-vs-se-ranking"
);
const primaryKeyword = "mangools vs ubersuggest vs se ranking";

const brandMeta = {
  mangools: {
    gradient: "from-amber-500 via-orange-500 to-emerald-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/mangools.com",
  },
  ubersuggest: {
    gradient: "from-emerald-500 via-teal-500 to-indigo-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/ubersuggest.com",
  },
  se_ranking: {
    gradient: "from-indigo-600 via-sky-500 to-slate-900",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/seranking.com",
  },
};

const contenders = [
  {
    key: "mangools",
    name: "Mangools",
    blurb:
      "Fast keyword research and SERP validation with one of the cleanest UIs in SEO.",
    url: "https://mangools.com/",
    slug: "mangools",
  },
  {
    key: "ubersuggest",
    name: "Ubersuggest",
    blurb:
      "Budget-friendly all-in-one SEO suite with light audits and content ideas.",
    url: "https://ubersuggest.com/",
    slug: "ubersuggest",
  },
  {
    key: "se_ranking",
    name: "SE Ranking",
    blurb:
      "Deeper rank tracking, site audits, and reporting built for agencies and teams.",
    url: "https://seranking.com/",
    slug: "se-ranking",
  },
];

const comparisonRows = [
  {
    label: "Primary use case",
    mangools: "Fast keyword research, SERP snapshots, and rank tracking",
    ubersuggest: "Budget all-in-one SEO with basic audits and content ideas",
    seRanking:
      "Rank tracking depth, site audits, and reporting for SEO teams and agencies",
  },
  {
    label: "Keyword research",
    mangools:
      "KWFinder with clear difficulty scores and SERP previews for long-tail wins",
    ubersuggest: "Keyword ideas and content suggestions from seed topics",
    seRanking:
      "Solid database with intent and volume trends, plus competitor ideas",
  },
  {
    label: "Rank tracking",
    mangools: "SERPWatcher for daily, locally focused tracking",
    ubersuggest: "Basic rank tracking bundled into most plans",
    seRanking:
      "Robust tracking with local packs, maps results, and competitor views",
  },
  {
    label: "Backlink data",
    mangools: "LinkMiner for quick checks; smaller index overall",
    ubersuggest: "Backlink data with simple disavow export",
    seRanking:
      "Larger index plus link monitoring and new/lost link notifications",
  },
  {
    label: "Technical SEO",
    mangools:
      "No built-in crawler; usually paired with Sitebulb/Screaming Frog",
    ubersuggest: "Light site audit suitable for smaller sites",
    seRanking: "Full crawler with issue prioritisation and progress tracking",
  },
  {
    label: "Reporting & client work",
    mangools: "Simple exports and shareable links; minimal branding controls",
    ubersuggest: "Basic project views and PDFs",
    seRanking:
      "White-label reports, client portals, and API for agency workflows",
  },
  {
    label: "Pricing feel",
    mangools:
      "Affordable entry pricing with usage-based limits on lookups and projects",
    ubersuggest:
      "Low monthly and lifetime deals aimed at budget-conscious users",
    seRanking:
      "Pricing scales by keyword count and update frequency; strong value for pro use",
  },
  {
    label: "Best for",
    mangools:
      "Founders and marketers who want clarity and speed without heavy complexity",
    ubersuggest:
      "Beginners and small businesses wanting simple SEO plus audits on a budget",
    seRanking:
      "Agencies and serious in-house teams focused on tracking, audits, and reporting",
  },
];

const scoreboard = [
  { label: "Ease of use", mangools: 9.3, ubersuggest: 8.6, seRanking: 8.4 },
  {
    label: "Rank tracking depth",
    mangools: 8.4,
    ubersuggest: 7.8,
    seRanking: 9.2,
  },
  {
    label: "Backlink data",
    mangools: 7.5,
    ubersuggest: 7.8,
    seRanking: 8.3,
  },
  {
    label: "Technical coverage",
    mangools: 6.5,
    ubersuggest: 7.0,
    seRanking: 8.6,
  },
  {
    label: "Value for price",
    mangools: 9.0,
    ubersuggest: 9.2,
    seRanking: 8.7,
  },
];

const pricingTable = [
  {
    plan: "Mangools Basic / Premium",
    monthly: "From around ~$19–$49/mo (annual equivalent)",
    annual: "Discounted rates when billed annually",
    limits:
      "Daily keyword lookups, tracked keywords, and simultaneous logins per plan",
    notes:
      "Great entry-level choice for bloggers, solo founders, and small teams who mainly need keywords and SERP snapshots.",
  },
  {
    plan: "Ubersuggest Individual / Business",
    monthly: "From around ~$29/mo, plus lifetime deal options",
    annual: "Lower effective rate with annual or lifetime offers",
    limits:
      "Project caps, keyword reports, and audit credits increase on higher tiers",
    notes:
      "Appeals to budget-conscious users wanting a single tool with keywords, basic audits, and content ideas.",
  },
  {
    plan: "SE Ranking Essential / Pro",
    monthly:
      "From around ~$39/mo, varying by keywords tracked and update frequency",
    annual: "Discounts available on annual commitments",
    limits:
      "Tracked keywords, projects, and crawl limits scale with plan and frequency settings",
    notes:
      "Excellent value for agencies and teams that will actively use rank tracking and site audits.",
  },
];

const featureBullets = {
  research: [
    "Mangools: KWFinder, SERPChecker, and SERPWatcher make it easy to go from keyword idea to SERP snapshot and ranking insight.",
    "Ubersuggest: Combines keyword suggestions, content ideas, and basic competitor data in a simple dashboard.",
    "SE Ranking: Pairs keyword and competitor research with strong rank tracking to keep an eye on movements over time.",
  ],
  technical: [
    "Mangools: No native crawler, so most teams pair it with Screaming Frog, Sitebulb, or other audit tools.",
    "Ubersuggest: Light site audit that catches common issues for small to mid-sized sites.",
    "SE Ranking: Full-featured site audit with prioritised issues, crawl stats, and scheduled scans.",
  ],
  workflow: [
    "Mangools: Very low learning curve, with reports that non-SEOs can understand at a glance.",
    "Ubersuggest: Simplified workflows targeted at beginners and SMEs rather than large SEO teams.",
    "SE Ranking: White-label reports, client portals, and API access designed for agencies and in-house SEO squads.",
  ],
};

const prosCons = {
  mangools: {
    pros: [
      "Clean, beginner-friendly interface across modules",
      "Excellent for long-tail keyword discovery and SERP validation",
      "Strong value for solo users and small teams",
    ],
    cons: [
      "No built-in technical crawler or site audit",
      "Backlink index is smaller than full all-in-one suites",
      "Limited advanced collaboration features for big teams",
    ],
  },
  ubersuggest: {
    pros: [
      "Very budget-friendly with monthly and lifetime options",
      "Simple audits and content ideas in one dashboard",
      "Good starting point for non-technical business owners",
    ],
    cons: [
      "Data depth (keywords and backlinks) is lighter than SE Ranking and specialist tools",
      "Rank tracking and audit features are more basic",
      "Reporting and white-label options are limited for agencies",
    ],
  },
  se_ranking: {
    pros: [
      "Excellent rank tracking with flexible local/geo options",
      "Comprehensive site audit with clear prioritisation",
      "White-label reporting, client portals, and API for agencies",
    ],
    cons: [
      "Interface is denser than Mangools for new users",
      "Pricing can rise as you scale tracked keywords and frequency",
      "Overkill if you only need occasional keyword checks",
    ],
  },
};

const faqs = [
  {
    q: `Which tool is best overall in ${YEAR}?`,
    a: "Mangools wins on UX and quick keyword/SERP validation. SE Ranking wins for rank tracking depth, site audits, and client reporting. Ubersuggest is the budget-friendly all-in-one lite option for beginners.",
  },
  {
    q: "Who should choose Mangools?",
    a: "Choose Mangools if you value clarity and speed for keyword research and rank tracking, and you are comfortable pairing it with a separate crawler for technical audits.",
  },
  {
    q: "Who should choose SE Ranking?",
    a: "Pick SE Ranking when you need stronger rank tracking, site audits, and white-label reporting for clients while staying under enterprise-level pricing.",
  },
  {
    q: "Who should choose Ubersuggest?",
    a: "Choose Ubersuggest if you want entry-level SEO plus simple audits and content ideas on a tight budget, even if the underlying data depth is lighter.",
  },
  {
    q: "Which is better for agencies and freelancers?",
    a: "SE Ranking is usually the best fit for agencies and freelancers thanks to its tracking depth, audits, and white-label/client portal features. Mangools can complement it for fast keyword workflows.",
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

const avg = (tool) => {
  const total = scoreboard.reduce((sum, row) => sum + (row[tool] || 0), 0);
  return (total / scoreboard.length).toFixed(1);
};

const averages = {
  mangools: avg("mangools"),
  ubersuggest: avg("ubersuggest"),
  seRanking: avg("seRanking"),
};

const overallWinner =
  Math.max(averages.mangools, averages.ubersuggest, averages.seRanking) ===
  parseFloat(averages.mangools)
    ? "Mangools"
    : Math.max(averages.ubersuggest, averages.seRanking) ===
      parseFloat(averages.ubersuggest)
    ? "Ubersuggest"
    : "SE Ranking";

const LogoBadge = ({ name }) => {
  const lowered = name.toLowerCase();
  const key = lowered.includes("mangools")
    ? "mangools"
    : lowered.includes("uber")
    ? "ubersuggest"
    : lowered.includes("se ranking")
    ? "se_ranking"
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
          <span className="text-sm font-bold text-white">
            {name.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>
      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${meta.badge}`}>
        {name}
      </span>
    </div>
  );
};

export default function MangoolsVsUbersuggestVsSERankingPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Mangools vs Ubersuggest vs SE Ranking (${YEAR}) – Honest SEO Comparison`}
        description="Compare Mangools, Ubersuggest, and SE Ranking on pricing, rank tracking, backlinks, audits, and usability to pick the right affordable SEO stack."
        canonical={canonical}
        keywords={`${primaryKeyword}, mangools review, ubersuggest review, se ranking review, seo tool comparison`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
          SEO tools
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Mangools vs Ubersuggest vs SE Ranking ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          These three tools compete in the “affordable SEO suite” category. Mangools
          leads on UX and quick keyword wins, SE Ranking brings deeper rank tracking and
          audits, and Ubersuggest keeps costs low with bundled basics. Here is how they
          compare so you can choose the right fit for your SEO roadmap.
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
              <p className="relative mt-3 text-sm font-medium text-white/90">
                {item.blurb}
              </p>
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
              <strong>Mangools</strong> is the best pick for clean UX and quick keyword
              validation. <strong>SE Ranking</strong> wins if you need stronger tracking,
              audits, and reporting. <strong>Ubersuggest</strong> is the cheapest
              all-in-one choice, but with lighter data depth.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Crown className="h-4 w-4 text-indigo-600" /> Overall scoreboard winner:{" "}
              {overallWinner}{" "}
              <span className="text-xs text-slate-600">
                (avg:{" "}
                {overallWinner === "Mangools"
                  ? averages.mangools
                  : overallWinner === "Ubersuggest"
                  ? averages.ubersuggest
                  : averages.seRanking}
                /10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              The winner changes by use case. Use this as a signal of balance between UX,
              data depth, and value—not a hard rule.
            </p>
          </div>
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <TrendingUp className="h-6 w-6 text-amber-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Mangools</th>
                  <th className="px-4 py-3">Ubersuggest</th>
                  <th className="px-4 py-3">SE Ranking</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.mangools}</td>
                    <td className="px-4 py-3 text-slate-700">{row.ubersuggest}</td>
                    <td className="px-4 py-3 text-slate-700">{row.seRanking}</td>
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
                  <th className="px-4 py-3">Ubersuggest</th>
                  <th className="px-4 py-3">SE Ranking</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const winnerValue = Math.max(
                    row.mangools,
                    row.ubersuggest,
                    row.seRanking
                  );
                  const winner =
                    row.mangools === row.ubersuggest &&
                    row.ubersuggest === row.seRanking
                      ? "Tie"
                      : winnerValue === row.mangools
                      ? "Mangools"
                      : winnerValue === row.ubersuggest
                      ? "Ubersuggest"
                      : "SE Ranking";
                  return (
                    <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Mangools"
                            ? "font-semibold text-amber-800"
                            : "text-slate-700"
                        }`}
                      >
                        {row.mangools}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Ubersuggest"
                            ? "font-semibold text-emerald-800"
                            : "text-slate-700"
                        }`}
                      >
                        {row.ubersuggest}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "SE Ranking"
                            ? "font-semibold text-indigo-800"
                            : "text-slate-700"
                        }`}
                      >
                        {row.seRanking}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">
                        {winner}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-amber-50 via-emerald-50 to-indigo-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages.mangools}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.ubersuggest}
                  </td>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages.seRanking}
                  </td>
                  <td className="px-4 py-3 font-bold text-slate-900">
                    {overallWinner}
                  </td>
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
              <TrendingUp className="h-5 w-5 text-amber-600" /> Keyword, SERP & competitor
              research
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
              <BarChart3 className="h-5 w-5 text-emerald-600" /> Reporting & client
              workflow
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
            Pricing changes frequently and depends on number of projects, tracked keywords,
            and crawl limits. Always confirm current details on each vendor&apos;s pricing
            page before committing.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User Experience & Learning Curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Mangools:</strong> Feels like an SEO toolkit built for marketers
              first. Very low friction from signup to insights, with minimal configuration.
            </li>
            <li>
              <strong>Ubersuggest:</strong> Simple, opinionated flows. Great for
              beginners, but power users may quickly hit the ceiling on data and controls.
            </li>
            <li>
              <strong>SE Ranking:</strong> Deeper interface with more levers to pull.
              There is more to set up, but it rewards teams who live in rankings and
              audits every week.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-World Use-Cases & Winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Bloggers, creators, and solo founders:</strong> Mangools wins with
              approachable keyword research and fast SERP validation.
            </li>
            <li>
              <strong>Small businesses on a tight budget:</strong> Ubersuggest wins if
              you want one low-cost tool for basic SEO, audits, and content ideas.
            </li>
            <li>
              <strong>Agencies and consultants with client retainers:</strong> SE Ranking
              wins with deeper tracking, audits, and white-label/client portal options.
            </li>
            <li>
              <strong>Mixed stacks:</strong> Many teams pair Mangools or Ubersuggest for
              quick research with SE Ranking for ongoing rank tracking and audits.
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
                Best when you want clarity and speed for keyword research and SERP checks
                without navigating a heavy enterprise-style platform.
              </p>
              <p className="mt-2 text-sm font-semibold text-amber-700">
                Ideal for: Bloggers, content marketers, solo founders, and small in-house
                teams.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Ubersuggest</h3>
              <p className="text-sm text-slate-700">
                Best for very tight budgets where you still want keyword ideas, audits,
                and simple reports from a single tool.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: Small businesses, early-stage projects, and non-technical
                owners testing SEO.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">SE Ranking</h3>
              <p className="text-sm text-slate-700">
                Best for teams that care deeply about accurate rank tracking, regular
                audits, and client-facing reporting.
              </p>
              <p className="mt-2 text-sm font-semibold text-indigo-700">
                Ideal for: Agencies, SEO consultants, and in-house SEO teams.
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
