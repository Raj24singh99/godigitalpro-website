import React from "react";
import { Sparkles, Crown, Layers, BarChart3, ArrowLeft, Gauge, Database } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const canonical = buildCanonical("/tools/compare/airtable-vs-notion-vs-clickup");
const primaryKeyword = "airtable vs notion vs clickup";

const brandMeta = {
  airtable: {
    gradient: "from-sky-500 via-cyan-500 to-indigo-500",
    badge: "bg-sky-100 text-sky-900",
    logo: "https://logo.clearbit.com/airtable.com",
  },
  notion: {
    gradient: "from-slate-800 via-slate-700 to-slate-600",
    badge: "bg-slate-200 text-slate-900",
    logo: "https://logo.clearbit.com/notion.so",
  },
  clickup: {
    gradient: "from-purple-600 via-fuchsia-500 to-pink-500",
    badge: "bg-purple-100 text-purple-900",
    logo: "https://logo.clearbit.com/clickup.com",
  },
};

const contenders = [
  { key: "airtable", name: "Airtable", blurb: "Relational data + sync + automations with modern views.", url: "https://www.airtable.com/" },
  { key: "notion", name: "Notion", blurb: "Docs, wikis, and linked databases with flexible pages.", url: "https://www.notion.so/" },
  { key: "clickup", name: "ClickUp", blurb: "Task-first all-in-one with dashboards, docs, and goals.", url: "https://www.clickup.com/" },
];

const comparisonRows = [
  { label: "Best for", airtable: "Data-first workflows & automations", notion: "Docs, wikis, light databases", clickup: "Task-first, all-in-one work" },
  { label: "Data/modeling", airtable: "Relational tables, sync, interfaces", notion: "Linked databases, doc-first", clickup: "Custom fields in task views" },
  { label: "Automation", airtable: "Built-in automations + scripts", notion: "Basic triggers; relies on integrations", clickup: "Rules, automations for tasks" },
  { label: "Project views", airtable: "Grid, kanban, calendar, timeline", notion: "Table, board, timeline in docs", clickup: "List, board, Gantt, workload" },
  { label: "Pricing feel", airtable: "Per seat, data limits by tier", notion: "Generous free, per seat", clickup: "Value-packed per seat" },
];

const scoreboard = [
  { label: "Ease of use", airtable: 9.0, notion: 9.2, clickup: 8.6 },
  { label: "Data structure", airtable: 9.4, notion: 8.6, clickup: 8.3 },
  { label: "Automation depth", airtable: 9.0, notion: 7.3, clickup: 8.5 },
  { label: "Project/task management", airtable: 8.8, notion: 8.2, clickup: 9.2 },
  { label: "Value for teams", airtable: 8.8, notion: 9.0, clickup: 9.1 },
];

const avg = (tool) => (scoreboard.reduce((sum, row) => sum + (row[tool] || 0), 0) / scoreboard.length).toFixed(1);
const averages = { airtable: avg("airtable"), notion: avg("notion"), clickup: avg("clickup") };
const overallWinner =
  Math.max(averages.airtable, averages.notion, averages.clickup) === parseFloat(averages.airtable)
    ? "Airtable"
    : Math.max(averages.notion, averages.clickup) === parseFloat(averages.notion)
      ? "Notion"
      : "ClickUp";

const pricingTable = [
  { plan: "Airtable Team", monthly: "From ~$24/seat", annual: "Lower on annual", limits: "Higher records, interfaces, automations", notes: "Best for team bases and interfaces." },
  { plan: "Notion Plus/Business", monthly: "From ~$10–$18/seat", annual: "Lower on annual", limits: "Version history, SSO on Business", notes: "Great value for docs/wikis with linked databases." },
  { plan: "ClickUp Unlimited/Business", monthly: "From ~$10–$19/seat", annual: "Lower on annual", limits: "Tasks, docs, dashboards; automation caps by tier", notes: "Most features per dollar; good PM bundle." },
];

const featureBullets = {
  data: [
    "Airtable: True relational tables, linked records, sync, and Interfaces to ship light apps.",
    "Notion: Doc-first with flexible linked databases; great for knowledge bases and lists.",
    "ClickUp: Custom fields on tasks; relational depth is lighter than Airtable/Notion databases.",
  ],
  automation: [
    "Airtable: Strong no-code automations, scripts, and webhooks; ops teams love it.",
    "Notion: Basic reminders/triggers; relies on third-party for deeper automation.",
    "ClickUp: Task automations and rules; good enough for most project workflows.",
  ],
  pm: [
    "Airtable: Excellent when projects hinge on structured data and reporting.",
    "Notion: Good for roadmap docs and lightweight boards inline with content.",
    "ClickUp: Deep task management with statuses, goals, workload, and dashboards.",
  ],
};

const faqs = [
  { q: `Who wins overall in ${YEAR}?`, a: "Airtable wins for data-first workflows and automations. ClickUp wins for task/project breadth. Notion wins for docs and wikis with light databases." },
  { q: "When should I choose Airtable?", a: "Pick Airtable for relational data, sync, and no-code automations powering marketing, ops, or product workflows." },
  { q: "When should I choose Notion?", a: "Choose Notion for wikis, docs, and database-backed pages in one workspace." },
  { q: "When should I choose ClickUp?", a: "Choose ClickUp for task-first teams wanting dashboards, goals, docs, and automations at a value price." },
  { q: "Which is easiest to learn?", a: "Notion is easiest for doc-oriented teams. Airtable needs light relational thinking. ClickUp’s breadth requires setup/governance." },
  { q: "Do they handle docs well?", a: "Notion leads for docs/wikis. ClickUp docs are solid for tasks + docs together. Airtable is data-first; docs are lighter." },
  { q: "What about permissions and governance?", a: "Airtable Business/Enterprise adds admin/SSO. Notion Business/Enterprise adds SSO/SCIM. ClickUp Business/Enterprise adds granular permissions and SSO." },
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

const prosCons = {
  airtable: {
    pros: ["Relational data with great views and interfaces", "Built-in automations and scripts", "Strong connectors and sync options"],
    cons: ["Record/automation limits by tier", "Seat pricing climbs for large teams", "Interfaces add light app complexity"],
  },
  notion: {
    pros: ["Best-in-class docs/wikis with linked databases", "Great templates and sharing", "Generous free plan for individuals"],
    cons: ["Automation is light without third-party tools", "PM views are basic vs dedicated PM tools", "Large workspaces need governance to avoid clutter"],
  },
  clickup: {
    pros: ["Most features per seat (tasks/docs/goals)", "Dashboards and workload built-in", "Automations cover common PM flows"],
    cons: ["UX can feel busy", "Relational modeling is limited", "Setup/governance needed to prevent sprawl"],
  },
};

const LogoBadge = ({ name }) => {
  const key = name.toLowerCase().includes("notion") ? "notion" : name.toLowerCase();
  const meta = brandMeta[key] || { gradient: "from-slate-400 to-slate-600", badge: "bg-slate-100 text-slate-900" };
  return (
    <div className="flex items-center gap-2">
      <div className={`flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br ${meta.gradient}`}>
        {meta.logo ? <img src={meta.logo} alt={`${name} logo`} className="h-full w-full object-cover" /> : <span className="text-sm font-bold text-white">{name.slice(0, 2).toUpperCase()}</span>}
      </div>
      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${meta.badge}`}>{name}</span>
    </div>
  );
};

export default function AirtableVsNotionVsClickupPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Airtable vs Notion vs ClickUp (${YEAR}) – Workspace comparison`}
        description="Compare Airtable, Notion, and ClickUp on data modeling, automation, project management, pricing, UX, and real-world use cases."
        canonical={canonical}
        keywords={`${primaryKeyword}, airtable review, notion review, clickup review, workspace comparison`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">Work management</p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">Airtable vs Notion vs ClickUp ({YEAR})</h1>
        <p className="mt-4 text-lg text-slate-700">
          Airtable is data-first with automations. Notion is doc-first with flexible databases. ClickUp is task-first with dashboards and goals. Here’s how they compare on structure, automation, pricing, UX, and real
          workflows.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {contenders.map((item) => (
            <div
              key={item.key}
              className={`relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br ${brandMeta[item.key]?.gradient || "from-slate-500 to-slate-700"} p-5 shadow-md`}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white" />
                <div className="pointer-events-none absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-white" />
              </div>
              <div className="relative flex items-start justify-between">
                <LogoBadge name={item.name} />
                <Database className="h-5 w-5 text-white/80" />
              </div>
              <p className="relative mt-3 text-sm font-medium text-white/90">{item.blurb}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-sky-100 bg-sky-50 px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sky-900">
              <Sparkles className="h-5 w-5" />
              <p className="text-lg font-semibold">Quick verdict</p>
            </div>
            <p className="mt-2 text-slate-800">
              Choose <strong>Airtable</strong> for structured data and automations, <strong>Notion</strong> for docs/wikis with flexible databases, and <strong>ClickUp</strong> for task-first teams wanting dashboards and
              goals in one.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Crown className="h-4 w-4 text-sky-600" /> Overall scoreboard winner: {overallWinner}{" "}
              <span className="text-xs text-slate-600">
                (avg: {overallWinner === "Airtable" ? averages.airtable : overallWinner === "Notion" ? averages.notion : averages.clickup}/10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">Pick by priority: Airtable for data/automation, Notion for docs/wikis, ClickUp for PM breadth and price.</p>
          </div>
        </div>

        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-sky-600" /> Side-by-Side Comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Airtable</th>
                  <th className="px-4 py-3">Notion</th>
                  <th className="px-4 py-3">ClickUp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">{row.label}</th>
                    <td className="px-4 py-3 text-slate-700">{row.airtable}</td>
                    <td className="px-4 py-3 text-slate-700">{row.notion}</td>
                    <td className="px-4 py-3 text-slate-700">{row.clickup}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <BarChart3 className="h-6 w-6 text-indigo-600" /> Scoreboard (1–10)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Criterion</th>
                  <th className="px-4 py-3">Airtable</th>
                  <th className="px-4 py-3">Notion</th>
                  <th className="px-4 py-3">ClickUp</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const winner =
                    row.airtable === row.notion && row.notion === row.clickup
                      ? "Tie"
                      : Math.max(row.airtable, row.notion, row.clickup) === row.airtable
                        ? "Airtable"
                        : Math.max(row.notion, row.clickup) === row.notion
                          ? "Notion"
                          : "ClickUp";
                  return (
                    <tr key={row.label}>
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">{row.label}</th>
                      <td className={`px-4 py-3 ${winner === "Airtable" ? "font-semibold text-sky-700" : "text-slate-700"}`}>{row.airtable}</td>
                      <td className={`px-4 py-3 ${winner === "Notion" ? "font-semibold text-slate-800" : "text-slate-700"}`}>{row.notion}</td>
                      <td className={`px-4 py-3 ${winner === "ClickUp" ? "font-semibold text-purple-700" : "text-slate-700"}`}>{row.clickup}</td>
                      <td className="px-4 py-3 font-semibold text-slate-800">{winner}</td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-sky-50 via-slate-100 to-purple-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">Average (winner overall)</th>
                  <td className="px-4 py-3 font-semibold text-sky-800">{averages.airtable}</td>
                  <td className="px-4 py-3 font-semibold text-slate-900">{averages.notion}</td>
                  <td className="px-4 py-3 font-semibold text-purple-800">{averages.clickup}</td>
                  <td className="px-4 py-3 font-bold text-emerald-800 capitalize">{overallWinner}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-emerald-600" /> Feature Comparison
          </h2>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Data modeling & views</h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.data.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Automation & integrations</h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.automation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Tasks/projects & collaboration</h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.pm.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Pricing Snapshots</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
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
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">{row.plan}</th>
                    <td className="px-4 py-3 text-slate-700">{row.monthly}</td>
                    <td className="px-4 py-3 text-slate-700">{row.annual}</td>
                    <td className="px-4 py-3 text-slate-700">{row.limits}</td>
                    <td className="px-4 py-3 text-slate-700">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-700">Watch records/run limits on Airtable, seat bundles on Notion (annual), and automation caps on ClickUp Unlimited vs Business.</p>
        </section>

        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User Experience & Learning Curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Notion:</strong> Easiest for doc-centric teams; inline databases feel natural for wikis/roadmaps.
            </li>
            <li>
              <strong>Airtable:</strong> Light learning curve, but best results require relational structure planning.
            </li>
            <li>
              <strong>ClickUp:</strong> Powerful but busy; needs workspace governance for clarity as you scale.
            </li>
          </ul>
        </section>

        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-World Use-Cases & Winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Ops/marketing data + automations:</strong> Airtable wins for relational data and triggers.
            </li>
            <li>
              <strong>Team wiki + docs with light PM:</strong> Notion wins with linked databases inside documents.
            </li>
            <li>
              <strong>Project/task management on budget:</strong> ClickUp wins for dashboards, workload, docs, and goals in one.
            </li>
            <li>
              <strong>Product roadmaps with context:</strong> Notion or Airtable interfaces; ClickUp if tasks and goals dominate.
            </li>
          </ul>
        </section>

        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Who wins for…</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Airtable</h3>
              <p className="text-sm text-slate-700">Best for structured data, reporting, and automations that mimic light apps.</p>
              <p className="text-sm font-semibold text-emerald-700">Pricing: Per-seat with record/automation limits</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Notion</h3>
              <p className="text-sm text-slate-700">Best for docs, wikis, and linked databases in a single workspace.</p>
              <p className="text-sm font-semibold text-emerald-700">Pricing: Generous free; Plus/Business for teams</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">ClickUp</h3>
              <p className="text-sm text-slate-700">Best for task-first teams needing dashboards, goals, and docs at low cost.</p>
              <p className="text-sm font-semibold text-emerald-700">Pricing: Most features on Unlimited/Business</p>
            </div>
          </div>
        </section>

        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                <h3 className="text-lg font-semibold text-slate-900">{item.q}</h3>
                <p className="mt-1 text-slate-700">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-10 flex items-center gap-2 text-sm text-slate-600">
          <Link to="/tools" className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-emerald-700 ring-1 ring-emerald-100 hover:bg-emerald-50">
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
