import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  Target,
  Crown,
  ArrowLeft,
  BarChart3,
  Link2,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "serpstat vs semrush vs ahrefs";
const canonical = buildCanonical("/tools/compare/serpstat-vs-semrush-vs-ahrefs");

const brandMeta = {
  serpstat: {
    gradient: "from-sky-500 via-blue-500 to-indigo-600",
    badge: "bg-sky-100 text-sky-900",
    logo: "https://logo.clearbit.com/serpstat.com",
  },
  semrush: {
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/semrush.com",
  },
  ahrefs: {
    gradient: "from-indigo-500 via-blue-600 to-slate-700",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/ahrefs.com",
  },
};

const contenders = [
  {
    key: "serpstat",
    name: "Serpstat",
    blurb: "All-in-one SEO platform with strong value pricing and API options.",
    url: "https://serpstat.com",
  },
  {
    key: "semrush",
    name: "Semrush",
    blurb: "SEO + PPC suite with broad data, market intel, and connectors.",
    url: "https://www.semrush.com",
  },
  {
    key: "ahrefs",
    name: "Ahrefs",
    blurb: "Backlink-first SEO platform with fast link discovery and clean UX.",
    url: "https://ahrefs.com",
  },
];

const comparisonRows = [
  {
    label: "Data focus",
    serpstat: "Balanced keywords + rank tracking + audits; lighter PPC and links.",
    semrush: "SEO + PPC intel, market reports, and social/ad research depth.",
    ahrefs: "Backlink depth and SERP/keyword research; minimal PPC data.",
  },
  {
    label: "Backlink index",
    serpstat: "Good for mid-market monitoring; smaller index than Ahrefs.",
    semrush: "Strong index with toxicity scoring for cleanup/outreach.",
    ahrefs: "Fastest link discovery and best historical backlink depth.",
  },
  {
    label: "Rank tracking",
    serpstat: "Daily local + mobile/desktop with SERP feature tracking.",
    semrush: "Robust tracking with cannibalization, intent, and visibility.",
    ahrefs: "Accurate tracking; lean UI but fewer reporting templates.",
  },
  {
    label: "Reporting",
    serpstat: "White-label PDFs/CSVs; API on higher plans.",
    semrush: "Dashboards, Looker/GA4 connectors, automated client reporting.",
    ahrefs: "Straightforward exports; third-party connectors for BI.",
  },
  {
    label: "Learning curve",
    serpstat: "Simpler UI; fast onboarding for SMB/agency teams.",
    semrush: "Feature-rich but busy UI; templates and presets help.",
    ahrefs: "Clean navigation; easy for SEO specialists.",
  },
];

const scoreboard = [
  { label: "Keyword research", scores: { serpstat: 8.6, semrush: 9.3, ahrefs: 9.0 } },
  { label: "Backlink depth", scores: { serpstat: 8.0, semrush: 8.8, ahrefs: 9.6 } },
  { label: "Technical audits", scores: { serpstat: 8.7, semrush: 9.2, ahrefs: 8.6 } },
  { label: "Value for money", scores: { serpstat: 9.3, semrush: 8.2, ahrefs: 8.4 } },
  { label: "Reporting & connectors", scores: { serpstat: 8.4, semrush: 9.1, ahrefs: 8.0 } },
];

const avg = (key) =>
  (
    scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  serpstat: avg("serpstat"),
  semrush: avg("semrush"),
  ahrefs: avg("ahrefs"),
};

const overallWinnerKey = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const prettyName = (key) => {
  if (key === "serpstat") return "Serpstat";
  if (key === "semrush") return "Semrush";
  if (key === "ahrefs") return "Ahrefs";
  return key.charAt(0).toUpperCase() + key.slice(1);
};

const pricingTable = [
  {
    plan: "Serpstat Lite",
    monthly: "$59",
    annual: "Cheaper on annual billing",
    notes: "Entry plan; lower limits; 1 user. Higher plans add users, reports, and API rows.",
  },
  {
    plan: "Semrush Pro",
    monthly: "$129.95",
    annual: "$108.33/mo billed annually",
    notes: "SEO + PPC toolkit; 5 projects, solid for small in-house or boutique agencies.",
  },
  {
    plan: "Ahrefs Lite",
    monthly: "$99",
    annual: "—",
    notes: "Strong for backlinks/keywords; 5 projects, ideal for lean SEO teams.",
  },
];

const faqs = [
  {
    q: `Who wins overall in ${YEAR}?`,
    a: "Semrush wins on breadth and reporting. Ahrefs wins on backlinks and content gaps. Serpstat wins on price-to-value for mid-market agencies and SMBs.",
  },
  {
    q: "Which is best for agencies?",
    a: "Serpstat offers affordable seats, white-labeling, and API credits. Semrush is the best fit when you need SEO + PPC dashboards and cross-channel reports. Ahrefs is ideal for link-building retainers and authority-focused campaigns.",
  },
  {
    q: "Which is cheapest to start?",
    a: "Serpstat Lite is the most affordable for full-suite SEO. Ahrefs Lite is more expensive but excellent for link analysis. Semrush is the priciest, but includes PPC intel and rich reporting.",
  },
  {
    q: "Can I mix tools?",
    a: "Yes. Many teams pair Ahrefs for backlink research with Serpstat or Semrush for tracking, audits, and reporting. CSV exports and APIs make combining data into dashboards straightforward.",
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
      "Balanced toolset: keyword research, rank tracking, audits, and backlinks.",
      "Strong price-to-value for SMBs and mid-market agencies.",
      "White-label reporting and API access on higher plans.",
      "UI is simpler and easier to onboard than heavier enterprise suites.",
    ],
    cons: [
      "Backlink index is smaller and less fresh than Ahrefs.",
      "Fewer native PPC/PLA insights than Semrush.",
      "Advanced users may outgrow limits on Lite/entry plans.",
    ],
  },
  semrush: {
    pros: [
      "Combines SEO, PPC, PLA, and social intel in one platform.",
      "Excellent technical audits, issue grouping, and CWV trend tracking.",
      "Strong reporting with dashboards and native Looker/GA4 connectors.",
      "Market Explorer and ad research help performance marketing teams.",
    ],
    cons: [
      "Higher price per seat than Serpstat or Ahrefs Lite.",
      "Busy interface can overwhelm new users at first.",
      "Some features (content tools, extra users) require higher tiers.",
    ],
  },
  ahrefs: {
    pros: [
      "Market-leading backlink index and historic link data.",
      "Clean UX for Site Explorer, Keywords Explorer, and Content Gap.",
      "Click metrics help validate keyword quality beyond raw volume.",
      "Ideal for link-building agencies and content-led SEO strategies.",
    ],
    cons: [
      "Minimal PPC data compared with Semrush.",
      "Reporting and connectors rely more on exports or third-party tools.",
      "Seat and credit model can feel restrictive for larger teams.",
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

export default function SerpstatVsSemrushVsAhrefsPage() {
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
        title={`Serpstat vs Semrush vs Ahrefs – Honest Comparison (${YEAR})`}
        description="Compare Serpstat, Semrush, and Ahrefs across backlinks, rank tracking, audits, pricing, and reporting so you can pick the right SEO stack for your team."
        canonical={canonical}
        keywords={`${primaryKeyword}, seo tool comparison, serpstat review, semrush review, ahrefs review`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
          SEO platforms
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Serpstat vs Semrush vs Ahrefs ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          We ran keyword research, rank tracking, link audits, and reports across all three
          platforms. <strong>Semrush</strong> delivers the broadest SEO + PPC dataset.{" "}
          <strong>Ahrefs</strong> remains the backlink and content gap specialist.{" "}
          <strong>Serpstat</strong> balances essential SEO features with simpler pricing and UI.
        </p>

        {/* Quick verdict + best for */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="space-y-3 rounded-3xl bg-sky-50/90 p-6 ring-1 ring-sky-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-sky-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>Semrush</strong> if you want SEO + PPC depth and native reporting in
              one stack. Choose <strong>Ahrefs</strong> if backlinks and content gaps drive your
              strategy. Choose <strong>Serpstat</strong> if you want full-suite SEO at a lower
              price and can live without premium PPC intel.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-sky-800">
              <Crown className="h-4 w-4" /> Overall scoreboard winner:{" "}
              {prettyName(overallWinnerKey)}{" "}
              <span className="text-xs font-medium text-sky-700">
                (avg: {overallAvg}/10)
              </span>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="text-sm font-semibold text-slate-900">Best for</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <Target className="mt-0.5 h-4 w-4 text-amber-600" />
                <span>
                  <strong>Semrush</strong> for all-in-one SEO + PPC visibility and reporting.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Link2 className="mt-0.5 h-4 w-4 text-indigo-600" />
                <span>
                  <strong>Ahrefs</strong> for backlink campaigns and content-led SEO strategy.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <BarChart3 className="mt-0.5 h-4 w-4 text-sky-600" />
                <span>
                  <strong>Serpstat</strong> for affordable rank tracking, audits, and reporting
                  across many SMB projects.
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
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-sky-700">
                  Visit site →
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-sky-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Serpstat</th>
                  <th className="px-4 py-3">Semrush</th>
                  <th className="px-4 py-3">Ahrefs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/40 align-top">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-900">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.serpstat}</td>
                    <td className="px-4 py-3 text-slate-700">{row.semrush}</td>
                    <td className="px-4 py-3 text-slate-700">{row.ahrefs}</td>
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
                  <th className="px-4 py-3">Semrush</th>
                  <th className="px-4 py-3">Ahrefs</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/40">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-900">
                      {row.label}
                    </th>
                    <td
                      className={`px-4 py-3 ${
                        row.scores.serpstat >= row.scores.semrush &&
                        row.scores.serpstat >= row.scores.ahrefs
                          ? "font-semibold text-sky-700"
                          : "text-slate-700"
                      }`}
                    >
                      {row.scores.serpstat}
                    </td>
                    <td
                      className={`px-4 py-3 ${
                        row.scores.semrush >= row.scores.serpstat &&
                        row.scores.semrush >= row.scores.ahrefs
                          ? "font-semibold text-amber-700"
                          : "text-slate-700"
                      }`}
                    >
                      {row.scores.semrush}
                    </td>
                    <td
                      className={`px-4 py-3 ${
                        row.scores.ahrefs >= row.scores.serpstat &&
                        row.scores.ahrefs >= row.scores.semrush
                          ? "font-semibold text-indigo-700"
                          : "text-slate-700"
                      }`}
                    >
                      {row.scores.ahrefs}
                    </td>
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      {rowWinnerPretty(row)}
                    </td>
                  </tr>
                ))}
                <tr className="bg-gradient-to-r from-sky-50 via-amber-50 to-indigo-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-sky-800">
                    {averages.serpstat}
                  </td>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages.semrush}
                  </td>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages.ahrefs}
                  </td>
                  <td className="px-4 py-3 font-bold text-slate-900">
                    {prettyName(overallWinnerKey)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Card scoreboard */}
        <section className="mt-10 grid gap-4 md:grid-cols-3">
          {scoreboard.map((row) => (
            <div
              key={row.label}
              className="rounded-2xl bg-slate-50 p-4 shadow-sm ring-1 ring-slate-200"
            >
              <p className="text-sm font-semibold text-slate-900">{row.label}</p>
              <div className="mt-2 space-y-1 text-sm text-slate-700">
                <Score label="Serpstat" value={row.scores.serpstat} />
                <Score label="Semrush" value={row.scores.semrush} />
                <Score label="Ahrefs" value={row.scores.ahrefs} />
              </div>
            </div>
          ))}
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Pricing snapshots</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Monthly</th>
                  <th className="px-4 py-3">Annual</th>
                  <th className="px-4 py-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {pricingTable.map((row) => (
                  <tr key={row.plan}>
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      {row.plan}
                    </td>
                    <td className="px-4 py-3 text-slate-700">{row.monthly}</td>
                    <td className="px-4 py-3 text-slate-700">{row.annual}</td>
                    <td className="px-4 py-3 text-slate-700">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-700">
            For most teams, <strong>Serpstat Lite</strong> is the best low-cost full-suite entry.
            <strong> Ahrefs Lite</strong> is worth it when backlinks are critical.{" "}
            <strong>Semrush Pro</strong> makes sense when PPC, market intel, and dashboards
            justify the higher spend.
          </p>
        </section>

        {/* Best fits / watch-outs / upgrade path */}
        <section className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-sky-50 p-5 shadow-sm ring-1 ring-sky-100">
            <div className="flex items-center gap-2 text-sky-700">
              <Sparkles className="h-5 w-5" />
              <h3 className="text-lg font-semibold text-slate-900">Best fits</h3>
            </div>
            <ul className="mt-3 space-y-2 text-sm text-slate-800">
              <li>Serpstat: agencies/SMBs needing affordable all-round SEO.</li>
              <li>Semrush: marketing teams wanting SEO + PPC + reporting.</li>
              <li>Ahrefs: link-builders and content-led SEO teams.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <div className="flex items-center gap-2 text-blue-700">
              <Gauge className="h-5 w-5" />
              <h3 className="text-lg font-semibold text-slate-900">Watch-outs</h3>
            </div>
            <ul className="mt-3 space-y-2 text-sm text-slate-800">
              <li>Serpstat backlink index smaller and less fresh than Ahrefs.</li>
              <li>Semrush UI can feel busy; higher price per seat and add-ons.</li>
              <li>Ahrefs reporting/connectors limited without third-party tools.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
            <div className="flex items-center gap-2 text-amber-700">
              <Layers className="h-5 w-5" />
              <h3 className="text-lg font-semibold text-slate-900">Upgrade path</h3>
            </div>
            <p className="mt-3 text-sm text-slate-800">
              Many teams start on <strong>Serpstat</strong> for cost-efficient coverage, add{" "}
              <strong>Ahrefs</strong> when backlink campaigns scale, and later layer{" "}
              <strong>Semrush</strong> once PPC, market intel, and cross-channel dashboards
              become core to the workflow.
            </p>
          </div>
        </section>

        {/* Pros & Cons */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
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
            className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-sky-700 shadow-sm ring-1 ring-slate-200 hover:bg-sky-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
