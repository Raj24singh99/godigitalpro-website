import React from "react";
import {
  Sparkles,
  Crown,
  Gauge,
  Layers,
  Zap,
  ArrowLeft,
  Target,
  Compass,
  BarChart3,
  Shield,
} from "lucide-react";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";
import { Link } from "react-router-dom";

const YEAR = new Date().getFullYear();
const primaryKeyword = "semrush vs ahrefs";
const canonical = buildCanonical("/tools/compare/semrush-vs-ahrefs");

const brandMeta = {
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
    key: "semrush",
    name: "SEMrush",
    blurb: "SEO + PPC suite with reporting, content tools, and connectors.",
    slug: "semrush",
    url: "https://www.semrush.com",
  },
  {
    key: "ahrefs",
    name: "Ahrefs",
    blurb: "Backlink-first SEO platform with fast link discovery and clean UX.",
    slug: "ahrefs",
    url: "https://ahrefs.com",
  },
];

const comparisonRows = [
  {
    label: "Coverage & data",
    semrush:
      "Keyword + PPC + PLA intel, Market/Domain Overviews, strong competitor reports.",
    ahrefs:
      "Deep organic data; limited PPC intel but very strong SEO metrics and SERP views.",
  },
  {
    label: "Backlink index",
    semrush: "Strong index with Toxicity scoring and outreach helper workflows.",
    ahrefs: "Very fast link discovery with rich anchor and referring domain views.",
  },
  {
    label: "Technical SEO",
    semrush:
      "Comprehensive audits, CWV trends, log file-style reports, GA4/GSC connectors.",
    ahrefs:
      "Solid Site Audit with Health Score, hreflang, redirect, and canonical checks.",
  },
  {
    label: "Content & keywords",
    semrush:
      "Topic Research, SEO Writing Assistant, SEO/PPC gaps, SERP Features intel.",
    ahrefs:
      "Keywords Explorer with clicks data, parent topics, and content gap reports.",
  },
  {
    label: "Reporting & integrations",
    semrush:
      "Projects, dashboards, Looker Studio connector, basic CRM-style lead tools.",
    ahrefs:
      "Clean exports; third-party connectors or manual CSVs for BI and dashboards.",
  },
  {
    label: "Collaboration & roles",
    semrush:
      "User roles, tasks, and project workspaces for cross-channel marketing teams.",
    ahrefs: "Lean UI; more limited seat/role controls vs SEMrush.",
  },
  {
    label: "Learning curve",
    semrush: "Busy UI but templates, wizards, and dashboards help new users ship.",
    ahrefs: "Cleaner UI; faster ramp for pure SEO practitioners.",
  },
];

const scoreboard = [
  { label: "Keyword breadth & intent", semrush: 9.2, ahrefs: 8.8 },
  { label: "Backlink index & freshness", semrush: 8.7, ahrefs: 9.4 },
  { label: "Technical audits", semrush: 9.0, ahrefs: 8.5 },
  { label: "Reporting & connectors", semrush: 9.1, ahrefs: 8.6 },
  { label: "Value for single-seat", semrush: 8.2, ahrefs: 8.8 },
];

const avgScore = (key) => {
  const total = scoreboard.reduce((sum, row) => sum + (row[key] || 0), 0);
  return (total / scoreboard.length).toFixed(1);
};

const averageScores = { semrush: avgScore("semrush"), ahrefs: avgScore("ahrefs") };
const overallWinner = averageScores.semrush >= averageScores.ahrefs ? "SEMrush" : "Ahrefs";

const pricingTable = [
  {
    plan: "SEMrush Pro",
    monthly: "$129.95",
    annual: "$108.33/mo (billed annually)",
    limits: "5 projects, 500 keywords tracked, 10k results/report",
    notes: "Best for solo marketers needing SEO + PPC research and basic reporting.",
  },
  {
    plan: "SEMrush Guru",
    monthly: "$249.95",
    annual: "$208.33/mo (billed annually)",
    limits: "15 projects, 1500 keywords tracked, content toolkit",
    notes: "For content teams and agencies needing reports, connectors, and content tools.",
  },
  {
    plan: "Ahrefs Lite",
    monthly: "$99",
    annual: "—",
    limits: "5 projects, 750 credits/day",
    notes: "Best single-seat value for backlinks + keyword research.",
  },
  {
    plan: "Ahrefs Standard",
    monthly: "$199",
    annual: "—",
    limits: "20 projects, 2000 credits/day",
    notes: "For growing teams needing bigger crawl/report limits and more projects.",
  },
];

const faqs = [
  {
    q: `Is SEMrush better than Ahrefs in ${YEAR}?`,
    a: "SEMrush wins if you need PPC + SEO data, dashboards, and connectors. Ahrefs wins if you care most about backlinks, content gaps, and a clean SEO-first workflow.",
  },
  {
    q: "Which tool has the better backlink index?",
    a: "Ahrefs generally surfaces links faster with deeper historic context and strong anchor/referring domain views. SEMrush is strong and adds Toxicity scoring for cleanup and outreach.",
  },
  {
    q: "Which is cheaper for one seat?",
    a: "Ahrefs Lite is typically cheaper than SEMrush Pro. SEMrush may be worth the extra spend if you also need PPC intel, technical audits, and reporting in one place.",
  },
  {
    q: "Can I use both together?",
    a: "Yes—many teams use Ahrefs for links and content gaps, and SEMrush for PPC intel, audits, and dashboards, exporting CSVs between them as needed.",
  },
  {
    q: "Do they integrate with Looker Studio?",
    a: "SEMrush has a native Looker Studio connector. Ahrefs usually relies on third-party connectors or manual exports into your BI stack.",
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
  semrush: {
    pros: [
      "Combines SEO, PPC, and PLA intel in one platform.",
      "Strong technical audit with CWV tracking and clear issue grouping.",
      "Native Looker Studio connector and project dashboards for reporting.",
      "Topic Research and SEO Writing Assistant support content teams.",
    ],
    cons: [
      "Busy interface; new users may feel overwhelmed by the number of modules.",
      "Higher price per seat than Ahrefs Lite for single-seat setups.",
      "Backlink freshness can trail Ahrefs in some niches.",
    ],
  },
  ahrefs: {
    pros: [
      "Fast backlink discovery with strong anchor/referring domain analytics.",
      "Clean, focused UI that SEOs can pick up quickly.",
      "Clicks data and parent topic insights in Keywords Explorer.",
      "Lite tier is strong value for solo SEOs focused on organic.",
    ],
    cons: [
      "No native PPC or PLA intel—organic only.",
      "Dashboards and reporting typically rely on exports or third-party connectors.",
      "Seat/role management and collaboration features are lighter than SEMrush.",
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

export default function SemrushVsAhrefsPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`SEMrush vs Ahrefs – Honest Comparison (${YEAR})`}
        description="Hands-on breakdown of SEMrush vs Ahrefs: backlinks, keywords, PPC data, reporting, pricing, UX, and the real-world winner."
        canonical={canonical}
        keywords={`${primaryKeyword}, semrush review, ahrefs review, seo tool comparison`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          SEO & research tools
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          SEMrush vs Ahrefs – Honest Comparison ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          We ran PPC and SEO research, backlink cleanup, and technical audits through both
          platforms. SEMrush shines when you want PPC + SEO data in one place with dashboards;
          Ahrefs is still the backlink and content gap specialist. Here is how they stack up across
          data quality, audits, pricing, and real workflows.
        </p>

        {/* Quick verdict + best-for cards */}
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 shadow-sm md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-emerald-900">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="mt-2 text-slate-800">
              <strong>SEMrush</strong> wins for teams needing SEO + PPC intel, reporting, and audits
              in one stack. <strong>Ahrefs</strong> wins when backlinks and content-led SEO are the
              priority. Many teams keep both: Ahrefs for link research and content gaps, SEMrush for
              PPC, audits, and dashboards.
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-emerald-800">
              <Crown className="h-4 w-4" /> Overall scoreboard winner: {overallWinner}{" "}
              <span className="text-xs font-medium text-emerald-700">
                (avg:{" "}
                {overallWinner === "SEMrush"
                  ? averageScores.semrush
                  : averageScores.ahrefs}
                /10)
              </span>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800">
              <BarChart3 className="h-4 w-4 text-amber-600" /> Best for PPC + SEO combo
            </div>
            <p className="text-sm text-slate-700">
              <strong>SEMrush</strong> bundles PPC, PLA, and SEO intel with reporting and connectors
              —ideal for teams that own both paid and organic channels.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Shield className="h-4 w-4 text-indigo-600" /> Best for backlinks
            </div>
            <p className="text-sm text-slate-700">
              <strong>Ahrefs</strong> continues to lead on link freshness, anchor/referring domain
              insights, and content gap analysis for authority building.
            </p>
          </div>
        </div>

        {/* Brand highlight cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            {
              name: "SEMrush",
              blurb: "SEO + PPC intel, dashboards, and technical audits.",
              icon: <Target className="h-10 w-10 text-emerald-100" />,
            },
            {
              name: "Ahrefs",
              blurb: "Backlink depth, content gap, and clean UX for SEOs.",
              icon: <Compass className="h-10 w-10 text-white/80" />,
            },
          ].map((card) => {
            const meta = brandMeta[card.name.toLowerCase()];
            return (
              <div
                key={card.name}
                className={`relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br ${
                  meta?.gradient || "from-slate-500 to-slate-700"
                } p-5 shadow-md`}
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white" />
                  <div className="pointer-events-none absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-white" />
                </div>
                <div className="relative flex items-start justify-between">
                  <LogoBadge name={card.name} />
                  {card.icon}
                </div>
                <p className="relative mt-3 text-sm font-medium text-white/90">
                  {card.blurb}
                </p>
              </div>
            );
          })}
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-emerald-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[640px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">SEMrush</th>
                  <th className="px-4 py-3">Ahrefs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/40">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.semrush}</td>
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
            <Gauge className="h-6 w-6 text-indigo-600" /> Scoreboard (1–10)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[640px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Criterion</th>
                  <th className="px-4 py-3">SEMrush</th>
                  <th className="px-4 py-3">Ahrefs</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const winner =
                    row.semrush === row.ahrefs
                      ? "Tie"
                      : row.semrush > row.ahrefs
                      ? "SEMrush"
                      : "Ahrefs";
                  return (
                    <tr key={row.label}>
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winner === "SEMrush"
                            ? "font-semibold text-emerald-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.semrush}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Ahrefs"
                            ? "font-semibold text-indigo-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.ahrefs}
                      </td>
                      <td className="px-4 py-3 font-semibold text-emerald-700">{winner}</td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-emerald-50 via-indigo-50 to-slate-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averageScores.semrush}
                  </td>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averageScores.ahrefs}
                  </td>
                  <td className="px-4 py-3 font-bold text-emerald-800 capitalize">
                    {overallWinner}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Feature comparison */}
        <section className="mt-12 space-y-8">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Zap className="h-6 w-6 text-emerald-600" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Research & market intel</h3>
            <ul className="space-y-2 text-slate-700">
              <li>
                <strong>SEMrush:</strong> Excellent for blending PPC, PLA, and SEO data for
                competitive domain/keyword views. Position Tracking and Market Explorer help
                multi-channel teams.
              </li>
              <li>
                <strong>Ahrefs:</strong> Best for organic-first teams. Site Explorer + Content Gap
                make it easy to spot competitor pages and link opportunities.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Backlinks & authority</h3>
            <ul className="space-y-2 text-slate-700">
              <li>
                <strong>SEMrush:</strong> Good backlink index with Toxicity scoring and outreach
                lists; slightly slower freshness than Ahrefs but solid for cleanup and prospecting.
              </li>
              <li>
                <strong>Ahrefs:</strong> Market-leading link freshness, anchors, and ref domains.
                Great for link intersect and prospecting.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Audits & reporting</h3>
            <ul className="space-y-2 text-slate-700">
              <li>
                <strong>SEMrush:</strong> Deep technical audits, CWV trends, and native Looker
                Studio connector. Strong for clients and executive dashboards.
              </li>
              <li>
                <strong>Ahrefs:</strong> Health Score with clear issues; exports are fast but you
                will usually rely on third-party connectors for dashboards.
              </li>
            </ul>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Pricing snapshots</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[640px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Monthly</th>
                  <th className="px-4 py-3">Annual</th>
                  <th className="px-4 py-3">Limits</th>
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
          <p className="text-slate-700">
            “Good enough” tiers: <strong>SEMrush Pro</strong> if you need PPC + SEO in one stack,{" "}
            <strong>SEMrush Guru</strong> if you ship content and need reports/connectors.{" "}
            <strong>Ahrefs Lite</strong> is ideal for solo SEOs focused on backlinks and keywords;{" "}
            <strong>Standard</strong> fits growing teams needing more crawl and credits.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>SEMrush:</strong> Lots of modules and menus, but templates and dashboards help
              onboard new marketers. Excellent when one team handles paid + organic and needs a
              single view.
            </li>
            <li>
              <strong>Ahrefs:</strong> Clean, focused UI. SEOs can jump into Site Explorer and
              Keywords Explorer quickly with minimal setup.
            </li>
          </ul>
        </section>

        {/* Data quality & performance */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Data quality & performance</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Link freshness:</strong> Ahrefs typically finds new links faster and surfaces
              them clearly. SEMrush is reliable and enriches links with Toxicity scoring and
              cleanup-focused workflows.
            </li>
            <li>
              <strong>Keyword/PPC depth:</strong> SEMrush wins on PPC/PLA data and ad copies; both
              tools are strong for SEO volumes, difficulty, and SERP features.
            </li>
            <li>
              <strong>Speed to insight:</strong> Ahrefs is quicker to run for pure SEO use-cases;
              SEMrush’s dashboards consolidate more channels in one view.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>SEO + PPC competitive analysis:</strong> SEMrush wins with PLA/PPC ads plus
              SEO gaps in one interface.
            </li>
            <li>
              <strong>Link building & cleanup:</strong> Ahrefs wins for discovery and anchor
              insights; SEMrush is strong for toxicity scoring and cleanup reports.
            </li>
            <li>
              <strong>Technical audits for stakeholders:</strong> SEMrush wins on issue grouping,
              CWV trends, and dashboards.
            </li>
            <li>
              <strong>Content gap and SERP analysis:</strong> Ahrefs wins with clean SERP overviews
              and click data in Keywords Explorer.
            </li>
          </ul>
        </section>

        {/* Pros & Cons via shared component */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        {/* Who wins for… */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Who wins for…</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">SEMrush</h3>
              <p className="text-sm text-slate-700">Category: SEO + PPC intelligence</p>
              <p className="text-sm text-slate-700">
                Value: One platform for organic and paid research, audits, and reports.
              </p>
              <p className="text-sm font-semibold text-emerald-700">Pricing: Paid</p>
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Tags: seo, ppc, reporting, audits
              </p>
              <div className="mt-2 flex gap-2 text-sm">
                <a
                  className="rounded-full bg-emerald-600 px-3 py-1 font-semibold text-white"
                  href="https://www.semrush.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit tool
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Ahrefs</h3>
              <p className="text-sm text-slate-700">Category: SEO & backlinks</p>
              <p className="text-sm text-slate-700">
                Value: Fresh backlinks, content gap analysis, and clean UX for SEOs.
              </p>
              <p className="text-sm font-semibold text-emerald-700">Pricing: Paid</p>
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Tags: backlinks, seo, content gap
              </p>
              <div className="mt-2 flex gap-2 text-sm">
                <a
                  className="rounded-full bg-emerald-600 px-3 py-1 font-semibold text-white"
                  href="https://ahrefs.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit tool
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold">FAQ</h2>
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
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-emerald-700 ring-1 ring-emerald-100 hover:bg-emerald-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
