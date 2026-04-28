import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  Zap,
  Crown,
  ArrowLeft,
  Target,
  ClipboardList,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "ubersuggest vs se ranking vs moz pro";
const canonical = buildCanonical(
  "/tools/compare/ubersuggest-vs-se-ranking-vs-moz-pro"
);

const brandMeta = {
  ubersuggest: {
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/neilpatel.com",
  },
  "se ranking": {
    gradient: "from-blue-500 via-cyan-500 to-emerald-500",
    badge: "bg-blue-100 text-blue-900",
    logo: "https://logo.clearbit.com/seranking.com",
  },
  "moz pro": {
    gradient: "from-indigo-500 via-purple-500 to-blue-600",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/moz.com",
  },
};

const contenders = [
  {
    key: "ubersuggest",
    name: "Ubersuggest",
    blurb: "AI-assisted SEO toolkit with lifetime plan and simple UI.",
    url: "https://neilpatel.com/ubersuggest/",
  },
  {
    key: "se ranking",
    name: "SE Ranking",
    blurb: "Cloud SEO platform with flexible limits and agency workflows.",
    url: "https://seranking.com",
  },
  {
    key: "moz pro",
    name: "Moz Pro",
    blurb: "Established SEO suite with proprietary DA/PA metrics.",
    url: "https://moz.com/products/pro",
  },
];

const comparisonRows = [
  {
    label: "Keyword research",
    ubersuggest: "Core metrics, AI keyword ideas, content suggestions.",
    "se ranking": "Depth with SERP analysis, clusters, and suggestions.",
    "moz pro": "Keyword Explorer, SERP overlap, and click potential.",
  },
  {
    label: "Rank tracking",
    ubersuggest: "Daily tracking with basic alerts on key terms.",
    "se ranking":
      "Highly customizable frequency, locations, and search engines.",
    "moz pro": "Weekly rankings, visibility scores, and competitor rolls.",
  },
  {
    label: "Site audits",
    ubersuggest: "Automated health scores with prioritized fixes.",
    "se ranking":
      "Detailed technical audit with issue severity and scheduling.",
    "moz pro": "On-page grader, crawl diagnostics, and issue lists.",
  },
  {
    label: "Backlink data",
    ubersuggest: "Smaller index but easy to understand for beginners.",
    "se ranking":
      "Solid backlink monitoring with disavow and competitor checks.",
    "moz pro": "Link Explorer with DA/PA and spam scoring.",
  },
  {
    label: "Reporting & white-label",
    ubersuggest: "Visual, client-friendly dashboards.",
    "se ranking":
      "Robust scheduled reports and white-label options for agencies.",
    "moz pro": "Custom reports plus exports for BI tools.",
  },
  {
    label: "Pricing",
    ubersuggest: "From ~$29/mo or a one-time lifetime option.",
    "se ranking":
      "From ~$44/mo with pay-for-usage flexibility and add-ons.",
    "moz pro": "From ~$99/mo, optimized for in-house SEO teams.",
  },
  {
    label: "Best fit",
    ubersuggest: "Budget-conscious teams and solo marketers.",
    "se ranking": "Agencies needing flexible limits and white-label.",
    "moz pro": "Brands wanting trusted metrics and community resources.",
  },
];

const scoreboard = [
  {
    label: "Ease of use",
    scores: { ubersuggest: 9.1, "se ranking": 8.8, "moz pro": 8.2 },
  },
  {
    label: "Data depth",
    scores: { ubersuggest: 7.8, "se ranking": 8.7, "moz pro": 8.4 },
  },
  {
    label: "Pricing flexibility",
    scores: { ubersuggest: 9.3, "se ranking": 9.0, "moz pro": 7.2 },
  },
  {
    label: "Reporting",
    scores: { ubersuggest: 7.7, "se ranking": 8.9, "moz pro": 8.0 },
  },
  {
    label: "AI/content tools",
    scores: { ubersuggest: 8.6, "se ranking": 8.0, "moz pro": 7.5 },
  },
];

const avg = (key) =>
  (
    scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  ubersuggest: avg("ubersuggest"),
  "se ranking": avg("se ranking"),
  "moz pro": avg("moz pro"),
};

const overallWinner = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const pricingTable = [
  {
    plan: "Ubersuggest Individual",
    monthly: "From ~$29/mo",
    annual: "Lifetime option (~$290 one-time)",
    limits: "Approx. 3 sites, 150 tracked keywords (plan-dependent)",
    notes: "Best for solo marketers or very small teams wanting predictable cost.",
  },
  {
    plan: "SE Ranking Essential",
    monthly: "From ~$44/mo",
    annual: "From ~$26/mo on annual (daily tracking)",
    limits: "Around 10 projects, 750 keywords (configurable limits)",
    notes: "Sweet spot for agencies needing flexible rank-tracking and white-label.",
  },
  {
    plan: "Moz Pro Standard",
    monthly: "From ~$99/mo",
    annual: "From ~$79/mo on annual",
    limits: "3 campaigns, 300 keyword queries, crawl/month caps",
    notes: "Best fit for teams that rely heavily on DA/PA and link metrics.",
  },
];

const faqs = [
  {
    q: "Which tool balances cost and power?",
    a: "SE Ranking often lands in the middle with flexible limits, solid data, and strong rank tracking. Ubersuggest is cheapest overall (especially with lifetime), while Moz Pro bundles trusted metrics and brand credibility.",
  },
  {
    q: "Is there a lifetime plan?",
    a: "Currently, Ubersuggest is the only one of the three that offers a lifetime access option. SE Ranking and Moz Pro are standard subscription tools with monthly or annual billing.",
  },
  {
    q: "Do they integrate with GA and GSC?",
    a: "Yes. Ubersuggest, SE Ranking, and Moz Pro all connect to Google Analytics and Google Search Console, but the way they surface that data in dashboards and reports differs by platform.",
  },
  {
    q: `Who should pick what in ${YEAR}?`,
    a: "Choose Ubersuggest if you have a tight budget and want easy AI-assisted workflows. Choose SE Ranking if you manage multiple clients and care about flexible tracking and white-label reporting. Choose Moz Pro if you value DA/PA metrics, a strong community, and a mature SEO ecosystem.",
  },
  {
    q: "Which is best for agencies?",
    a: "SE Ranking is generally the strongest option for agencies thanks to flexible keyword limits, white-label reporting, and multi-project management. Moz Pro can work well for agencies too, particularly when clients already know and trust Moz metrics.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const prosCons = {
  ubersuggest: {
    pros: [
      "AI briefs and content ideas for blogs and landing pages",
      "Lifetime pricing option keeps long-term costs low",
      "Client-friendly dashboards and simple UX for beginners",
      "Good starting point for small businesses and creators",
    ],
    cons: [
      "Smaller link index compared with legacy tools",
      "Free plan limits are tight for active SEO teams",
      "Less granular technical reporting vs specialist tools",
    ],
  },
  "se ranking": {
    pros: [
      "Very flexible pricing and limits (keywords, frequency, locations)",
      "White-label reports and client portals for agencies",
      "Accurate rank tracking with multiple search engines",
      "Strong site audit and on-page tools relative to price",
    ],
    cons: [
      "UI slightly less polished than some newer competitors",
      "Add-ons and higher keyword volumes can increase cost",
      "Brand name is less known than Moz for non-SEOs",
    ],
  },
  "moz pro": {
    pros: [
      "DA/PA and Spam Score are widely recognized metrics",
      "Strong Keyword Explorer and link analysis features",
      "Active community, educational content, and ecosystem",
      "Good fit for in-house SEO teams and brands",
    ],
    cons: [
      "Weekly ranking updates can feel slow for fast-moving campaigns",
      "Higher starting price than Ubersuggest and SE Ranking",
      "Less flexible pricing structure for very small teams",
    ],
  },
};

const LogoBadge = ({ name }) => {
  const key = name.toLowerCase();
  const meta =
    brandMeta[key] || {
      gradient: "from-slate-400 to-slate-600",
      badge: "bg-slate-100 text-slate-900",
    };

  return (
    <div className="flex items-center gap-2">
      <div
        className={`flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br ${meta.gradient}`}
      >
        {meta.logo ? (
          <img
            src={meta.logo}
            alt={`${name} logo`}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-sm font-bold text-white">
            {name.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>
      <span
        className={`rounded-full px-3 py-1 text-xs font-semibold ${meta.badge}`}
      >
        {name}
      </span>
    </div>
  );
};

export default function UbersuggestVsSERankingVsMozProPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Ubersuggest vs SE Ranking vs Moz Pro – Affordable SEO Comparison (${YEAR})`}
        description="Deep comparison of Ubersuggest, SE Ranking, and Moz Pro across pricing, keyword data, audits, reporting, and fit for agencies or in-house SEO teams."
        canonical={canonical}
        keywords={`${primaryKeyword}, seo tool comparison, rank tracking tools, keyword research tools`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          SEO tooling
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Ubersuggest vs SE Ranking vs Moz Pro – Honest Comparison ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          All three tools can cover keyword research, rank tracking, and site
          audits—but they differ on data depth, pricing model, and reporting.
          Ubersuggest shines on affordability (especially with lifetime),
          SE Ranking excels for agencies needing flexible limits, and Moz Pro
          wins on trusted metrics and community.
        </p>

        {/* Hero verdict & highlights */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="space-y-3 rounded-3xl bg-amber-50/90 p-6 ring-1 ring-amber-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-amber-800">
              <Sparkles className="h-5 w-5" /> Quick Verdict
            </div>
            <p className="text-base text-slate-800">
              <strong>Ubersuggest</strong> is the easiest on the wallet with AI
              perks and simple dashboards. <strong>SE Ranking</strong> is the
              most configurable choice for agencies thanks to flexible keyword
              limits and white-label reporting. <strong>Moz Pro</strong> brings
              long-standing authority with DA/PA metrics and a mature SEO
              ecosystem.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-amber-800">
              <Crown className="h-4 w-4" /> Overall scoreboard leader:{" "}
              {overallWinner.charAt(0).toUpperCase() + overallWinner.slice(1)}{" "}
              <span className="text-xs font-medium text-amber-700">
                (avg: {averages[overallWinner]}/10)
              </span>
            </div>
          </div>

          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Target className="h-5 w-5 text-emerald-700" /> Most flexible
              tracking
            </div>
            <p className="text-sm text-slate-700">
              SE Ranking lets you tune rank-tracking frequency, locations, and
              keyword volumes so you are not overpaying for data you do not
              actually use.
            </p>
          </div>

          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Zap className="h-5 w-5 text-amber-600" /> Best budget / lifetime
            </div>
            <p className="text-sm text-slate-700">
              Ubersuggest is one of the few SEO suites with a lifetime option,
              making it appealing if you want predictable, low long-term cost.
            </p>
          </div>
        </div>

        {/* Brand highlight cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {contenders.map((card) => (
            <div
              key={card.key}
              className={`relative overflow-x-auto rounded-2xl border border-slate-200 bg-gradient-to-br ${
                brandMeta[card.key]?.gradient || "from-slate-500 to-slate-700"
              } p-5 shadow-md md:overflow-hidden`}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white" />
                <div className="pointer-events-none absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-white" />
              </div>
              <div className="relative flex items-start justify-between">
                <LogoBadge name={card.name} />
              </div>
              <p className="relative mt-3 text-sm font-medium text-white/90">
                {card.blurb}
              </p>
              {card.url && (
                <a
                  href={card.url}
                  target="_blank"
                  rel="noreferrer"
                  className="relative mt-3 inline-flex text-xs font-semibold text-white/90 underline underline-offset-2"
                >
                  Visit {card.name}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-emerald-600" /> Side-by-Side
            Comparison
          </h2>
          <p className="text-sm text-slate-700">
            Use this table to quickly understand where each tool is strongest
            across keyword research, rank tracking, audits, and pricing.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Ubersuggest</th>
                  <th className="px-4 py-3">SE Ranking</th>
                  <th className="px-4 py-3">Moz Pro</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr
                    key={row.label}
                    className="odd:bg-white even:bg-slate-50/40"
                  >
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">
                      {row.ubersuggest}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row["se ranking"]}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row["moz pro"]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Scoreboard */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-indigo-600" /> Scoreboard
          </h2>
          <p className="text-sm text-slate-700">
            Scores are directional and based on typical agency and in-house SEO
            use cases. Your actual experience will depend on market, volume, and
            how heavily you lean on each feature.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Ubersuggest</th>
                  <th className="px-4 py-3">SE Ranking</th>
                  <th className="px-4 py-3">Moz Pro</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const entries = Object.entries(row.scores);
                  const winnerKey = entries.sort((a, b) => b[1] - a[1])[0][0];
                  return (
                    <tr
                      key={row.label}
                      className="odd:bg-white even:bg-slate-50/40"
                    >
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "ubersuggest"
                            ? "font-semibold text-amber-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores["ubersuggest"]}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "se ranking"
                            ? "font-semibold text-emerald-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores["se ranking"]}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "moz pro"
                            ? "font-semibold text-indigo-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores["moz pro"]}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-amber-50/70">
                  <th className="bg-amber-100 px-4 py-3 font-semibold text-slate-900">
                    Average
                  </th>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages["ubersuggest"]}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages["se ranking"]}
                  </td>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages["moz pro"]}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Pros & cons cards */}
        <section className="mt-10 grid gap-4 md:grid-cols-3">
          {Object.entries(prosCons).map(([key, value]) => (
            <div
              key={key}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <LogoBadge
                  name={
                    key === "se ranking" || key === "moz pro"
                      ? key
                          .split(" ")
                          .map(
                            (p) => p.charAt(0).toUpperCase() + p.slice(1)
                          )
                          .join(" ")
                      : key.charAt(0).toUpperCase() + key.slice(1)
                  }
                />
              </div>
              <div className="mt-3">
                <p className="text-sm font-semibold text-emerald-700">Pros</p>
                <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-700">
                  {value.pros.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-3">
                <p className="text-sm font-semibold text-rose-700">Cons</p>
                <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-700">
                  {value.cons.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        {/* Pricing snapshot */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <ClipboardList className="h-6 w-6 text-emerald-600" /> Pricing
            snapshot
          </h2>
          <p className="text-sm text-slate-700">
            Pricing changes fairly often, but this should give you a directional
            benchmark. Always confirm current limits, add-ons, and discounts on
            each tool’s pricing page before committing.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Monthly</th>
                  <th className="px-4 py-3">Annual / Lifetime</th>
                  <th className="px-4 py-3">Limits (approx.)</th>
                  <th className="px-4 py-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {pricingTable.map((row) => (
                  <tr
                    key={row.plan}
                    className="odd:bg-white even:bg-slate-50/40"
                  >
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.plan}
                    </th>
                    <td className="px-4 py-3 text-slate-700">
                      {row.monthly}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.annual}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.limits}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Shared summary pros/cons */}
        <ProsConsSection contenders={contenders} prosCons={prosCons} />

        {/* FAQs */}
        <section className="mt-10 space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">FAQs</h2>
          <div className="space-y-2 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-slate-100 bg-slate-50/60 p-4 open:bg-slate-50"
              >
                <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-slate-900 group-open:text-emerald-800">
                  {item.q}
                  <span className="text-xs text-slate-500 group-open:hidden">
                    +
                  </span>
                  <span className="hidden text-xs text-slate-500 group-open:inline">
                    –
                  </span>
                </summary>
                <p className="mt-2 text-sm text-slate-700">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Back link */}
        <div className="mt-10 flex items-center gap-3 text-sm font-semibold text-emerald-700">
          <ArrowLeft className="h-4 w-4" />
          <Link to="/tools">Back to Tools Hub</Link>
        </div>
      </div>
    </main>
  );
}
