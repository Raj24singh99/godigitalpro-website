import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  Target,
  Crown,
  ArrowLeft,
  BarChart3,
  Wallet,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "serpstat vs se ranking vs ubersuggest";
const canonical = buildCanonical("/tools/compare/serpstat-vs-se-ranking-vs-ubersuggest");

const brandMeta = {
  serpstat: {
    gradient: "from-sky-500 via-blue-500 to-indigo-600",
    badge: "bg-sky-100 text-sky-900",
    logo: "https://logo.clearbit.com/serpstat.com",
  },
  "se ranking": {
    gradient: "from-emerald-500 via-teal-500 to-green-600",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/seranking.com",
  },
  ubersuggest: {
    gradient: "from-amber-400 via-orange-500 to-rose-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/ubersuggest.com",
  },
};

const contenders = [
  {
    key: "serpstat",
    name: "Serpstat",
    blurb: "Affordable all-in-one SEO suite with API access and white-label.",
    url: "https://serpstat.com",
  },
  {
    key: "se ranking",
    name: "SE Ranking",
    blurb: "Local-first rank tracking with strong reporting and client tools.",
    url: "https://seranking.com",
  },
  {
    key: "ubersuggest",
    name: "Ubersuggest",
    blurb: "Freemium keyword research, basic audits, and simple reporting.",
    url: "https://neilpatel.com/ubersuggest/",
  },
];

const comparisonRows = [
  {
    label: "Rank tracking",
    serpstat: "Daily, mobile/desktop, city-level with SERP features.",
    "se ranking": "Excellent local tracking, maps/3-pack visibility reports.",
    ubersuggest: "Limited tracking on lower tiers; fewer SERP details.",
  },
  {
    label: "Keyword research",
    serpstat: "Broad database with clustering and intent hints.",
    "se ranking": "Good breadth; strong regional and language coverage.",
    ubersuggest: "Decent starter data; capped exports on free plan.",
  },
  {
    label: "Site audit",
    serpstat: "Robust crawling, technical flags, CWV indicators.",
    "se ranking": "Clear audits with issue prioritization, local focus.",
    ubersuggest: "Basic audits; lighter than the other two for tech SEO.",
  },
  {
    label: "Reporting",
    serpstat: "White-label PDFs/CSVs + API on higher tiers.",
    "se ranking": "Automated email reports; white-label on Pro/Business.",
    ubersuggest: "Simple exports; fewer white-label options.",
  },
  {
    label: "Price-to-value",
    serpstat: "Strong value for agencies needing API and seats.",
    "se ranking": "Great local SEO value; flexible user/tracking settings.",
    ubersuggest: "Cheapest entry; limited depth for agencies.",
  },
];

const scoreboard = [
  { label: "Local & geo support", scores: { serpstat: 8.7, "se ranking": 9.2, ubersuggest: 7.6 } },
  { label: "Keyword breadth", scores: { serpstat: 8.6, "se ranking": 8.4, ubersuggest: 7.8 } },
  {
    label: "Reporting & white-label",
    scores: { serpstat: 8.5, "se ranking": 8.9, ubersuggest: 7.0 },
  },
  { label: "Value for money", scores: { serpstat: 9.2, "se ranking": 8.8, ubersuggest: 8.4 } },
  { label: "Ease of use", scores: { serpstat: 8.5, "se ranking": 8.7, ubersuggest: 9.0 } },
];

const avg = (key) =>
  (
    scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  serpstat: avg("serpstat"),
  "se ranking": avg("se ranking"),
  ubersuggest: avg("ubersuggest"),
};

const overallWinnerKey = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const prettyName = (key) => {
  if (key === "serpstat") return "Serpstat";
  if (key === "se ranking") return "SE Ranking";
  if (key === "ubersuggest") return "Ubersuggest";
  return key.charAt(0).toUpperCase() + key.slice(1);
};

const pricingTable = [
  {
    plan: "Serpstat Lite",
    monthly: "$59",
    annual: "Discounts on annual billing",
    limits: "Up to modest projects; higher tiers add API rows, users, and reports.",
    notes: "All-in-one toolkit with scaling options for growing agencies.",
  },
  {
    plan: "SE Ranking Essential",
    monthly: "$55 (approx.)",
    annual: "Lower effective price with annual plan",
    limits: "Pricing changes with number of keywords, update frequency, and projects.",
    notes: "Great for local-focused tracking with flexible configuration.",
  },
  {
    plan: "Ubersuggest Individual",
    monthly: "$29",
    annual: "Occasional lifetime/discounted offers",
    limits: "Limited projects, tracked keywords, and exports vs. others.",
    notes: "Best as a low-cost starter or secondary backup tool.",
  },
];

const faqs = [
  {
    q: `Which should I pick in ${YEAR}?`,
    a: "Pick Serpstat for balanced SEO with API and white-label reporting. Pick SE Ranking if local rank tracking is your main use-case. Pick Ubersuggest for the cheapest starter option and side projects, then upgrade as needs grow.",
  },
  {
    q: "Which is best for agencies?",
    a: "Serpstat and SE Ranking both offer white-label reporting and flexible user management. SE Ranking is loved for local clients; Serpstat for bulk reporting and API-driven dashboards.",
  },
  {
    q: "Is Ubersuggest enough for serious SEO?",
    a: "It is fine for early-stage, small sites, and solopreneurs. Agencies and larger projects typically outgrow its limits and move to Serpstat or SE Ranking for deeper data and reporting scale.",
  },
  {
    q: "Can I migrate between these tools easily?",
    a: "Yes. You can export keywords, rankings, and projects as CSV and import them into another tool. The data models differ slightly, so always validate a sample set of keywords and locations after migration.",
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
  serpstat: {
    pros: [
      "All-in-one SEO suite (keywords, audits, backlinks, rank tracking).",
      "API on higher tiers for automated dashboards and internal tools.",
      "White-label reports for agencies managing many clients.",
      "Good price-to-value for growing SEO teams.",
    ],
    cons: [
      "Interface can feel dense to beginners.",
      "Backlink depth trails specialist tools like Ahrefs.",
      "Some limits (API rows, users) require higher plans for large agencies.",
    ],
  },
  "se ranking": {
    pros: [
      "Strong local rank tracking with city/region and map-pack visibility.",
      "Clear, client-ready reports and email automations.",
      "Flexible pricing based on frequency and keyword volume.",
      "Good mix of keyword research, audits, and monitoring for SMBs.",
    ],
    cons: [
      "Costs rise as you increase keywords and update frequency.",
      "Less emphasis on API than Serpstat for custom dashboards.",
      "Keyword database smaller than top-tier enterprise suites.",
    ],
  },
  ubersuggest: {
    pros: [
      "Lowest price point and very approachable UI.",
      "Decent keyword ideas and basic audits for beginners.",
      "Good fit for solo founders, content creators, and small blogs.",
      "Occasional lifetime-style offers can be cost-effective.",
    ],
    cons: [
      "Limited project and export quotas compared with other two.",
      "Reporting and white-label options are light for agencies.",
      "Data depth (keywords/backlinks) less robust than specialist tools.",
    ],
  },
};

const LogoBadge = ({ name }) => {
  const meta =
    brandMeta[name.toLowerCase()] || {
      gradient: "from-slate-400 to-slate-600",
      badge: "bg-slate-100 text-slate-900",
    };
  return (
    <div className="flex items-center gap-2">
      <div
        className={`flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br ${meta.gradient}`}
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

const Score = ({ label, value }) => (
  <div className="flex items-center justify-between">
    <span>{label}</span>
    <span className="font-semibold text-slate-900">{value}/10</span>
  </div>
);

export default function SerpstatVsSERankingVsUbersuggestPage() {
  const overallAvg = averages[overallWinnerKey];

  const rowWinnerPretty = (row) => {
    const entries = Object.entries(row.scores);
    const maxVal = Math.max(...entries.map(([_, v]) => v));
    const winners = entries
      .filter(([_, v]) => v === maxVal)
      .map(([k]) => prettyName(k));
    return winners.length > 1 ? winners.join(" / ") : winners[0];
  };

  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Serpstat vs SE Ranking vs Ubersuggest – Local-friendly SEO tools (${YEAR})`}
        description="Compare Serpstat, SE Ranking, and Ubersuggest on local rank tracking, keyword data, audits, reporting, pricing, and agency readiness."
        canonical={canonical}
        keywords={`${primaryKeyword}, seo comparison, local rank tracking, serpstat review, se ranking review, ubersuggest review`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          SEO tools
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Serpstat vs SE Ranking vs Ubersuggest ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Need rank tracking, keyword research, and audits on a budget? Serpstat and SE
          Ranking serve agencies and local SEO well, while Ubersuggest is a lightweight
          starter. This comparison looks at local coverage, data depth, reporting, and
          pricing so you can match the right tool to your SEO stage.
        </p>

        {/* Quick verdict + best for */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="space-y-3 rounded-3xl bg-emerald-50/90 p-6 ring-1 ring-emerald-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-emerald-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>Serpstat</strong> for balanced SEO features, API access, and
              white-label reporting. Choose <strong>SE Ranking</strong> if you live in local
              SERPs and need flexible tracking frequencies and locations. Choose{" "}
              <strong>Ubersuggest</strong> if you are just starting, have a tight budget,
              and mainly need keyword ideas plus simple audits.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-800">
              <Crown className="h-4 w-4" /> Overall scoreboard winner:{" "}
              {prettyName(overallWinnerKey)}{" "}
              <span className="text-xs font-medium text-emerald-700">
                (avg: {overallAvg}/10)
              </span>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="text-sm font-semibold text-slate-900">Best for</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <Target className="mt-0.5 h-4 w-4 text-sky-600" />
                <span>
                  <strong>Serpstat</strong> for agencies that need API + white-label reports.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Layers className="mt-0.5 h-4 w-4 text-emerald-600" />
                <span>
                  <strong>SE Ranking</strong> for local SEO, map-pack tracking, and client
                  reporting.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Wallet className="mt-0.5 h-4 w-4 text-amber-600" />
                <span>
                  <strong>Ubersuggest</strong> for the cheapest early-stage option and solo
                  projects.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contender cards */}
        <div className="mt-10 overflow-hidden rounded-2xl bg-slate-50 p-6 shadow-sm ring-1 ring-slate-200">
          <div className="grid gap-4 md:grid-cols-3">
            {contenders.map((tool) => (
              <a
                key={tool.key}
                href={tool.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-white/60 p-4 ring-1 ring-slate-200 transition-shadow hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-2">
                  <LogoBadge name={tool.name} />
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                    Contender
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-700">{tool.blurb}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-emerald-700">
                  Visit site →
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-emerald-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Serpstat</th>
                  <th className="px-4 py-3">SE Ranking</th>
                  <th className="px-4 py-3">Ubersuggest</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/40">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.serpstat}</td>
                    <td className="px-4 py-3 text-slate-700">{row["se ranking"]}</td>
                    <td className="px-4 py-3 text-slate-700">{row.ubersuggest}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Scoreboard table */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-indigo-600" /> Scoreboard (1–10)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Criterion</th>
                  <th className="px-4 py-3">Serpstat</th>
                  <th className="px-4 py-3">SE Ranking</th>
                  <th className="px-4 py-3">Ubersuggest</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/40">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td
                      className={`px-4 py-3 ${
                        row.scores.serpstat >= row.scores["se ranking"] &&
                        row.scores.serpstat >= row.scores.ubersuggest
                          ? "font-semibold text-sky-700"
                          : "text-slate-700"
                      }`}
                    >
                      {row.scores.serpstat}
                    </td>
                    <td
                      className={`px-4 py-3 ${
                        row.scores["se ranking"] >= row.scores.serpstat &&
                        row.scores["se ranking"] >= row.scores.ubersuggest
                          ? "font-semibold text-emerald-700"
                          : "text-slate-700"
                      }`}
                    >
                      {row.scores["se ranking"]}
                    </td>
                    <td
                      className={`px-4 py-3 ${
                        row.scores.ubersuggest >= row.scores.serpstat &&
                        row.scores.ubersuggest >= row.scores["se ranking"]
                          ? "font-semibold text-amber-700"
                          : "text-slate-700"
                      }`}
                    >
                      {row.scores.ubersuggest}
                    </td>
                    <td className="px-4 py-3 font-semibold text-slate-800">
                      {rowWinnerPretty(row)}
                    </td>
                  </tr>
                ))}
                <tr className="bg-gradient-to-r from-sky-50 via-emerald-50 to-amber-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-sky-800">
                    {averages.serpstat}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages["se ranking"]}
                  </td>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages.ubersuggest}
                  </td>
                  <td className="px-4 py-3 font-bold text-slate-900">
                    {prettyName(overallWinnerKey)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Card-style scoreboard */}
        <section className="mt-10 grid gap-4 md:grid-cols-3">
          {scoreboard.map((row) => (
            <div
              key={row.label}
              className="rounded-2xl bg-slate-50 p-4 shadow-sm ring-1 ring-slate-200"
            >
              <p className="text-sm font-semibold text-slate-900">{row.label}</p>
              <div className="mt-2 space-y-1 text-sm text-slate-700">
                <Score label="Serpstat" value={row.scores.serpstat} />
                <Score label="SE Ranking" value={row.scores["se ranking"]} />
                <Score label="Ubersuggest" value={row.scores.ubersuggest} />
              </div>
            </div>
          ))}
        </section>

        {/* Feature comparison */}
        <section className="mt-12 space-y-8">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <BarChart3 className="h-6 w-6 text-emerald-600" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Local tracking & SERP visibility</h3>
            <ul className="space-y-2 text-sm md:text-base text-slate-700">
              <li>
                <strong>Serpstat:</strong> Solid daily tracking with desktop/mobile splits and
                local positions; good enough for multi-region projects.
              </li>
              <li>
                <strong>SE Ranking:</strong> Standout local tracking, including maps/3-pack
                visibility, making it ideal for local SEO agencies.
              </li>
              <li>
                <strong>Ubersuggest:</strong> Basic tracking, fine for a few core keywords but not
                built for multi-location reporting.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Keyword research & content ideas</h3>
            <ul className="space-y-2 text-sm md:text-base text-slate-700">
              <li>
                <strong>Serpstat:</strong> Offers clustering, search suggestions, and related
                terms—good for building topic maps and content hubs.
              </li>
              <li>
                <strong>SE Ranking:</strong> Good breadth and especially useful when you care
                about specific locales and languages.
              </li>
              <li>
                <strong>Ubersuggest:</strong> Fast keyword ideas and simple difficulty scores; great
                for ideation but lighter for deep SERP analysis.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Audits, reporting, and scale</h3>
            <ul className="space-y-2 text-sm md:text-base text-slate-700">
              <li>
                <strong>Serpstat:</strong> Robust audits with CWV indicators and white-label
                reporting; API unlocks serious automation.
              </li>
              <li>
                <strong>SE Ranking:</strong> Very client-friendly audits and automated email
                reports; ideal for recurring monthly SEO retainers.
              </li>
              <li>
                <strong>Ubersuggest:</strong> Basic audit scores and quick-win suggestions; enough
                for small sites, not for complex technical SEO.
              </li>
            </ul>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Pricing snapshots</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
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
          <p className="text-sm text-slate-700">
            For most agencies, <strong>SE Ranking</strong> or <strong>Serpstat</strong> are better
            long-term values once you factor in tracking volumes, reporting, and API access.{" "}
            <strong>Ubersuggest</strong> is best when you want something affordable to validate a
            strategy before investing in a heavier platform.
          </p>
        </section>

        {/* Best fits / watch-outs / upgrade path */}
        <section className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-emerald-50 p-5 shadow-sm ring-1 ring-emerald-100">
            <div className="flex items-center gap-2 text-emerald-700">
              <Sparkles className="h-5 w-5" />
              <h3 className="text-lg font-semibold text-slate-900">Best fits</h3>
            </div>
            <ul className="mt-3 space-y-2 text-sm text-slate-800">
              <li>Serpstat for API + white-label across many projects.</li>
              <li>SE Ranking for agencies obsessed with local visibility.</li>
              <li>Ubersuggest for hobby, side projects, or early-stage SEO.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <div className="flex items-center gap-2 text-blue-700">
              <Gauge className="h-5 w-5" />
              <h3 className="text-lg font-semibold text-slate-900">Watch-outs</h3>
            </div>
            <ul className="mt-3 space-y-2 text-sm text-slate-800">
              <li>Serpstat backlink and SERP depth trail premium-only suites.</li>
              <li>SE Ranking costs rise with keyword volume and check frequency.</li>
              <li>Ubersuggest has export caps and light white-label options.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
            <div className="flex items-center gap-2 text-amber-700">
              <Layers className="h-5 w-5" />
              <h3 className="text-lg font-semibold text-slate-900">Upgrade path</h3>
            </div>
            <p className="mt-3 text-sm text-slate-800">
              Start on <strong>Ubersuggest</strong> to validate your basic keyword and content
              strategy. Move to <strong>Serpstat</strong> or <strong>SE Ranking</strong> when you
              need daily local tracking, deeper audits, better reporting, and API/white-label
              scale.
            </p>
          </div>
        </section>

        {/* Pros & Cons via shared component */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        {/* Who wins for… */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Who wins for…</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Local agencies</h3>
              <p className="text-sm text-slate-700">
                <strong>SE Ranking</strong> wins for its local pack visibility, flexible tracking
                frequencies, and client-ready reporting.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">API-driven reporting</h3>
              <p className="text-sm text-slate-700">
                <strong>Serpstat</strong> wins if you want to feed raw data into Looker, Data
                Studio, or custom BI dashboards via API.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Bootstrapped projects</h3>
              <p className="text-sm text-slate-700">
                <strong>Ubersuggest</strong> wins when cash is tight and you mainly need a
                low-friction starting point for keyword and content ideas.
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
        <div className="mt-10 flex items-center gap-3">
          <Link
            to="/tools"
            className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-emerald-700 shadow-sm ring-1 ring-slate-200 hover:bg-emerald-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
