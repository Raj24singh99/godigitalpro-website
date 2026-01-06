import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  Zap,
  Crown,
  ArrowLeft,
  Search,
  ClipboardList,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "ubersuggest vs semrush vs ahrefs";
const canonical = buildCanonical(
  "/tools/compare/ubersuggest-vs-semrush-vs-ahrefs"
);

const brandMeta = {
  ubersuggest: {
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/neilpatel.com",
  },
  semrush: {
    gradient: "from-orange-500 via-red-500 to-rose-600",
    badge: "bg-orange-100 text-orange-900",
    logo: "https://logo.clearbit.com/semrush.com",
  },
  ahrefs: {
    gradient: "from-blue-600 via-blue-500 to-cyan-500",
    badge: "bg-blue-100 text-blue-900",
    logo: "https://logo.clearbit.com/ahrefs.com",
  },
};

const contenders = [
  {
    key: "ubersuggest",
    name: "Ubersuggest",
    blurb: "Budget-friendly SEO toolkit with AI ideas and simple dashboards.",
    url: "https://neilpatel.com/ubersuggest/",
  },
  {
    key: "semrush",
    name: "Semrush",
    blurb: "Enterprise-grade SEO, PPC, and content marketing suite.",
    url: "https://semrush.com",
  },
  {
    key: "ahrefs",
    name: "Ahrefs",
    blurb: "Deep backlink and keyword data loved by technical SEOs.",
    url: "https://ahrefs.com",
  },
];

const comparisonRows = [
  {
    label: "Keyword depth",
    ubersuggest: "Solid core data + AI keyword clusters for content ideas.",
    semrush: "Huge keyword DB with intent filters and competitive gaps.",
    ahrefs: "Massive keyword DB with click metrics and SERP history.",
  },
  {
    label: "Backlink data",
    ubersuggest: "Smaller index that’s fine for basic audits.",
    semrush: "Strong index plus toxic link audit and disavow workflows.",
    ahrefs: "Industry-leading crawler, fast updates, and rich link data.",
  },
  {
    label: "Content tools",
    ubersuggest: "AI briefs, topic ideas, and basic content audits.",
    semrush:
      "Content Marketing Platform, Topic Research, SEO Writing Assistant.",
    ahrefs: "Content Explorer, SERP comparisons, and content gap reports.",
  },
  {
    label: "Rank tracking",
    ubersuggest: "Daily tracking for core terms with simple visuals.",
    semrush:
      "Position Tracking with local/feature tracking across engines and devices.",
    ahrefs: "Rank Tracker with detailed visibility, share of voice, and alerts.",
  },
  {
    label: "Pricing",
    ubersuggest: "From ~$29/mo or a one-time lifetime option.",
    semrush: "From ~$129.95/mo with add-ons for extra features/users.",
    ahrefs: "From ~$99/mo plus charges for additional users and data rows.",
  },
  {
    label: "Best fit",
    ubersuggest: "SMBs and lean agencies on a budget.",
    semrush: "Full marketing teams needing SEO + PPC + content suite.",
    ahrefs: "SEO specialists, link builders, and technical SEOs.",
  },
];

const scoreboard = [
  {
    label: "Ease of use",
    scores: { ubersuggest: 9.1, semrush: 8.2, ahrefs: 8.5 },
  },
  {
    label: "Data depth",
    scores: { ubersuggest: 7.6, semrush: 9.6, ahrefs: 9.5 },
  },
  {
    label: "Value",
    scores: { ubersuggest: 9.4, semrush: 8.0, ahrefs: 8.2 },
  },
  {
    label: "Reporting",
    scores: { ubersuggest: 7.8, semrush: 9.4, ahrefs: 8.8 },
  },
  {
    label: "AI & automation",
    scores: { ubersuggest: 8.7, semrush: 9.0, ahrefs: 7.6 },
  },
];

const avg = (key) =>
  (
    scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  ubersuggest: avg("ubersuggest"),
  semrush: avg("semrush"),
  ahrefs: avg("ahrefs"),
};

const overallWinner = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const pricingTable = [
  {
    plan: "Ubersuggest Business",
    monthly: "From ~$49/mo",
    annual: "From ~$29/mo annual or ~ $490 lifetime",
    limits: "Around 7 projects, ~300 tracked keywords (plan-dependent)",
    notes: "Great for growing SMBs and smaller agencies wanting predictable cost.",
  },
  {
    plan: "Semrush Pro",
    monthly: "From ~$129.95/mo",
    annual: "From ~$108.33/mo annual",
    limits: "Approx. 5 projects, 500 keywords, basic PPC + social tools",
    notes: "Best for small marketing teams needing SEO + PPC in one place.",
  },
  {
    plan: "Ahrefs Standard",
    monthly: "From ~$199/mo",
    annual: "From ~$166/mo annual",
    limits: "Around 10 projects, 1,500 tracked keywords, higher crawl limits",
    notes: "Ideal for SEO specialists and link-focused agencies.",
  },
];

const faqs = [
  {
    q: `Who should choose which tool in ${YEAR}?`,
    a: "Pick Ubersuggest if you want budget-friendly SEO with AI content help, Semrush if you need an all-in-one marketing analytics and PPC suite, and Ahrefs when backlink and keyword depth are non-negotiable.",
  },
  {
    q: "Can I stack tools?",
    a: "Yes. Many teams run Ubersuggest alongside Search Console, or pair Semrush or Ahrefs for deep data while using Ubersuggest to generate AI content ideas and client-friendly reports.",
  },
  {
    q: "Do they all have free trials?",
    a: "Ubersuggest has a generous free tier and low-cost entry plans. Semrush and Ahrefs offer limited trials or money-back guarantees, often requiring a credit card.",
  },
  {
    q: "Which is best for agencies?",
    a: "Semrush and Ahrefs provide advanced reporting, API access, and strong multi-project management. Ubersuggest excels for budget-conscious agencies and client self-serve dashboards.",
  },
  {
    q: "Which is best if I only care about backlinks?",
    a: "Ahrefs is typically the top choice when backlink data, link intersect reports, and fast crawling are the main priority. Semrush is also strong, but Ahrefs has the edge in link-focused workflows.",
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
      "Low cost compared with Semrush and Ahrefs",
      "AI briefs and content ideas for blogs and landing pages",
      "Lifetime option available on some tiers",
      "Simple dashboards non-SEOs can understand",
    ],
    cons: [
      "Smaller backlink index vs enterprise tools",
      "Lower limits on free and entry plans",
      "Less granular technical and competitor reporting",
    ],
  },
  semrush: {
    pros: [
      "Massive keyword and domain database",
      "PPC, social, and content tools in one suite",
      "Robust reporting and client-ready dashboards",
      "Great for teams that need SEO + paid acquisition",
    ],
    cons: [
      "Expensive add-ons and higher tiers",
      "Interface can feel overwhelming at first",
      "Some features locked behind separate modules",
    ],
  },
  ahrefs: {
    pros: [
      "One of the best backlink datasets available",
      "Fast crawler and fresh data",
      "Excellent SERP and competitor analysis",
      "Great content gap, link intersect, and explorer tools",
    ],
    cons: [
      "No built-in PPC tools",
      "Charges extra for additional users and large data pulls",
      "Less “all-in-one marketing” than Semrush",
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

export default function UbersuggestVsSemrushVsAhrefsPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Ubersuggest vs Semrush vs Ahrefs – SEO Platform Comparison (${YEAR})`}
        description="Evaluate Ubersuggest, Semrush, and Ahrefs across data depth, pricing, features, and ideal buyers to choose the right SEO platform for your team."
        canonical={canonical}
        keywords={`${primaryKeyword}, seo comparison, ahrefs vs semrush, ubersuggest alternative`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          SEO platforms
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Ubersuggest vs Semrush vs Ahrefs – Honest Comparison ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Ubersuggest is the budget-friendly way into serious SEO. Semrush is
          the full-funnel marketing analytics suite. Ahrefs is the go-to for
          backlink hunters and technical SEOs. Below, we compare them on data
          depth, pricing, reporting, and the types of teams each one suits best.
        </p>

        {/* Hero verdict + highlights */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="space-y-3 rounded-3xl bg-amber-50/90 p-6 ring-1 ring-amber-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-amber-800">
              <Sparkles className="h-5 w-5" /> Quick Verdict
            </div>
            <p className="text-base text-slate-800">
              <strong>Ubersuggest</strong> wins on value and AI assistance,
              <strong> Semrush</strong> delivers the most complete marketing
              suite across SEO, PPC, and content, and <strong>Ahrefs</strong>{" "}
              remains the backlink powerhouse with some of the best link and
              keyword data on the market.
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
              <Search className="h-5 w-5 text-amber-700" /> Best free option
            </div>
            <p className="text-sm text-slate-700">
              Ubersuggest’s free tier covers daily keyword research and basic
              audits—great for early-stage projects and testing before you
              upgrade.
            </p>
          </div>
        </div>

        {/* Brand cards */}
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
            Use this table to see how Ubersuggest, Semrush, and Ahrefs compare
            across keyword depth, backlinks, content tooling, and pricing.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Ubersuggest</th>
                  <th className="px-4 py-3">Semrush</th>
                  <th className="px-4 py-3">Ahrefs</th>
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
                      {row.semrush}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.ahrefs}
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
            These scores are directional and based on typical agency and
            in-house SEO use cases. Your specific stack, budget, and markets
            might shift which tool is “best” for you.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Ubersuggest</th>
                  <th className="px-4 py-3">Semrush</th>
                  <th className="px-4 py-3">Ahrefs</th>
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
                        {row.scores.ubersuggest}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "semrush"
                            ? "font-semibold text-orange-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.semrush}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "ahrefs"
                            ? "font-semibold text-blue-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.ahrefs}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-amber-50/70">
                  <th className="bg-amber-100 px-4 py-3 font-semibold text-slate-900">
                    Average
                  </th>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages.ubersuggest}
                  </td>
                  <td className="px-4 py-3 font-semibold text-orange-800">
                    {averages.semrush}
                  </td>
                  <td className="px-4 py-3 font-semibold text-blue-800">
                    {averages.ahrefs}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Pros & Cons cards */}
        <section className="mt-10 grid gap-4 md:grid-cols-3">
          {Object.entries(prosCons).map(([key, value]) => (
            <div
              key={key}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <LogoBadge
                  name={
                    key.charAt(0).toUpperCase() + key.slice(1)
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
            Pricing and limits change often, but this table gives you a
            directional benchmark. Always confirm current pricing, limits, and
            add-ons before making a final choice.
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

        {/* Shared summary Pros/Cons component */}
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
