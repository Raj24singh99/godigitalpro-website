import React from "react";
import { Sparkles, Crown, Layers, BarChart3, ArrowLeft, Gauge, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const canonical = buildCanonical("/tools/compare/airtable-vs-monday-vs-clickup");
const primaryKeyword = "airtable vs monday vs clickup";

const brandMeta = {
  airtable: {
    gradient: "from-sky-500 via-cyan-500 to-indigo-500",
    badge: "bg-sky-100 text-sky-900",
    logo: "https://logo.clearbit.com/airtable.com",
  },
  monday: {
    gradient: "from-amber-500 via-red-500 to-rose-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/monday.com",
  },
  clickup: {
    gradient: "from-purple-600 via-fuchsia-500 to-pink-500",
    badge: "bg-purple-100 text-purple-900",
    logo: "https://logo.clearbit.com/clickup.com",
  },
};

const contenders = [
  { key: "airtable", name: "Airtable", blurb: "Data-first with relational tables, sync, automations, and interfaces.", url: "https://www.airtable.com/" },
  { key: "monday", name: "Monday.com", blurb: "Visual boards and dashboards teams adopt quickly.", url: "https://www.monday.com/" },
  { key: "clickup", name: "ClickUp", blurb: "Task-first all-in-one with docs, dashboards, and goals at a value price.", url: "https://www.clickup.com/" },
];

const comparisonRows = [
  { label: "Best for", airtable: "Data-first workflows & automations", monday: "Visual projects & team collaboration", clickup: "Task-first all-in-one at value pricing" },
  { label: "Views", airtable: "Grid, kanban, calendar, timeline, interfaces", monday: "Boards, timelines, dashboards", clickup: "Lists, boards, Gantt, workload" },
  { label: "Automation", airtable: "No-code + scripts + webhooks", monday: "Rules with wide template library", clickup: "Task automations and rules" },
  { label: "Data modeling", airtable: "Relational tables, sync, linked records", monday: "Boards + items, mirrored data", clickup: "Custom fields per space/folder/list" },
  { label: "Pricing feel", airtable: "Per seat; data limits by tier", monday: "Per seat; feature tiers", clickup: "Aggressive feature-to-price ratio" },
];

const scoreboard = [
  { label: "Ease of use", airtable: 9.0, monday: 9.1, clickup: 8.6 },
  { label: "Data flexibility", airtable: 9.4, monday: 8.4, clickup: 8.2 },
  { label: "Automation depth", airtable: 9.0, monday: 8.5, clickup: 8.4 },
  { label: "Project management", airtable: 8.8, monday: 9.2, clickup: 9.1 },
  { label: "Value for teams", airtable: 8.8, monday: 8.7, clickup: 9.2 },
];

const avg = (tool) => (scoreboard.reduce((sum, row) => sum + (row[tool] || 0), 0) / scoreboard.length).toFixed(1);
const averages = { airtable: avg("airtable"), monday: avg("monday"), clickup: avg("clickup") };
const overallWinner =
  Math.max(averages.airtable, averages.monday, averages.clickup) === parseFloat(averages.airtable)
    ? "Airtable"
    : Math.max(averages.monday, averages.clickup) === parseFloat(averages.monday)
      ? "Monday.com"
      : "ClickUp";

const pricingTable = [
  { plan: "Airtable Team", monthly: "From ~$24/seat", annual: "Lower on annual", limits: "Higher records, interfaces, automations", notes: "Best for team bases and interfaces." },
  { plan: "Airtable Business", monthly: "From ~$45/seat", annual: "Lower on annual", limits: "Advanced sync, SSO, admin controls", notes: "For larger teams needing governance." },
  { plan: "Monday Standard/Pro", monthly: "From ~$12–$19/seat (billed yearly)", annual: "Annual pricing required", limits: "Boards, automations/integrations limits by tier", notes: "Strong PM visibility; seats sold in bundles." },
  { plan: "ClickUp Unlimited/Business", monthly: "From ~$10–$19/seat", annual: "Lower on annual", limits: "Tasks, docs, dashboards, automation caps by tier", notes: "Best value breadth for PM + docs in one." },
];

const featureBullets = {
  data: [
    "Airtable: Relational tables, linked records, sync, and Interfaces for light apps.",
    "Monday: Boards with mirrored data; strong dashboards for exec views.",
    "ClickUp: Custom fields per space/folder/list; less relational depth than Airtable.",
  ],
  automation: [
    "Airtable: No-code rules, scripts, webhooks, and integrations; good for ops.",
    "Monday: Automations and integrations with many templates; simple to launch.",
    "ClickUp: Task automations and rules; good enough for common workflows.",
  ],
  pm: [
    "Airtable: Flexible views; PM works well when data modeling matters.",
    "Monday: Best visual PM adoption with dashboards and workload views.",
    "ClickUp: Deep task features (statuses, goals, docs) at aggressive pricing.",
  ],
};

const faqs = [
  { q: `Who wins overall in ${YEAR}?`, a: "Airtable wins for data-first workflows and automations. Monday wins for visual project management. ClickUp wins for all-in-one value pricing." },
  { q: "When should I choose Airtable?", a: "Choose Airtable if you need structured data, sync, and no-code automations powering campaigns, ops, or product workflows." },
  { q: "When should I choose Monday.com?", a: "Choose Monday if you want visual boards, dashboards, and team adoption for project tracking." },
  { q: "When should I choose ClickUp?", a: "Choose ClickUp if you want broad task/project functionality, docs, and goals at a value price." },
  { q: "Which is easiest for onboarding?", a: "Monday is easiest for PM teams; Airtable has light learning for bases; ClickUp’s depth means a steeper first week." },
  { q: "What about governance and security?", a: "Airtable Business adds SSO/admin controls; Monday Enterprise deepens governance; ClickUp Business/Enterprise adds permissions and SSO." },
  { q: "Do they replace spreadsheets?", a: "Airtable is the best spreadsheet/database hybrid. Monday and ClickUp can replace PM spreadsheets but are less relational." },
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
    pros: ["Relational data with great views and interfaces", "Powerful automations + scripts", "Good connector ecosystem and sync"],
    cons: ["Record/attachment limits by tier", "Seat pricing rises on larger teams", "Interface Builder adds light app complexity"],
  },
  monday: {
    pros: ["Easiest adoption for PM/ops teams", "Great dashboards and workload views", "Automations/templates speed rollout"],
    cons: ["Seat bundles increase cost for small teams", "Relational depth is limited", "Advanced permissions gated on higher tiers"],
  },
  clickup: {
    pros: ["Most features per dollar", "Docs + tasks + dashboards in one", "Goals and workload built-in"],
    cons: ["UX can feel busy with options", "Relational modeling is limited vs Airtable", "Setup/governance needs care at scale"],
  },
};

const LogoBadge = ({ name }) => {
  const key = name.toLowerCase().includes("monday") ? "monday" : name.toLowerCase();
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

export default function AirtableVsMondayVsClickupPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Airtable vs Monday vs ClickUp (${YEAR}) – Work OS comparison`}
        description="Compare Airtable, Monday.com, and ClickUp on data modeling, automation, views, pricing, UX, and real-world use cases."
        canonical={canonical}
        keywords={`${primaryKeyword}, airtable review, monday.com review, clickup review, work management comparison`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Work management</p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">Airtable vs Monday vs ClickUp ({YEAR})</h1>
        <p className="mt-4 text-lg text-slate-700">
          Airtable is data-first, Monday is visual-project-first, and ClickUp is task-first all-in-one. Here’s how they compare on structure, automation, pricing, UX, and real workflows.
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
                <Workflow className="h-5 w-5 text-white/80" />
              </div>
              <p className="relative mt-3 text-sm font-medium text-white/90">{item.blurb}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-emerald-100 bg-emerald-50 px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-emerald-900">
              <Sparkles className="h-5 w-5" />
              <p className="text-lg font-semibold">Quick verdict</p>
            </div>
            <p className="mt-2 text-slate-800">
              Choose <strong>Airtable</strong> for data-first workflows and automations, <strong>Monday</strong> for visual project tracking and dashboards, and <strong>ClickUp</strong> for task-first breadth and pricing.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Crown className="h-4 w-4 text-emerald-600" /> Overall scoreboard winner: {overallWinner}{" "}
              <span className="text-xs text-slate-600">
                (avg: {overallWinner === "Airtable" ? averages.airtable : overallWinner === "Monday.com" ? averages.monday : averages.clickup}/10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">Pick by data depth vs dashboards vs value: Airtable for data, Monday for PM adoption, ClickUp for price-to-feature.</p>
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
                  <th className="px-4 py-3">Monday</th>
                  <th className="px-4 py-3">ClickUp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">{row.label}</th>
                    <td className="px-4 py-3 text-slate-700">{row.airtable}</td>
                    <td className="px-4 py-3 text-slate-700">{row.monday}</td>
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
                  <th className="px-4 py-3">Monday</th>
                  <th className="px-4 py-3">ClickUp</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const winner =
                    row.airtable === row.monday && row.monday === row.clickup
                      ? "Tie"
                      : Math.max(row.airtable, row.monday, row.clickup) === row.airtable
                        ? "Airtable"
                        : Math.max(row.monday, row.clickup) === row.monday
                          ? "Monday.com"
                          : "ClickUp";
                  return (
                    <tr key={row.label}>
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">{row.label}</th>
                      <td className={`px-4 py-3 ${winner === "Airtable" ? "font-semibold text-sky-700" : "text-slate-700"}`}>{row.airtable}</td>
                      <td className={`px-4 py-3 ${winner === "Monday.com" ? "font-semibold text-amber-700" : "text-slate-700"}`}>{row.monday}</td>
                      <td className={`px-4 py-3 ${winner === "ClickUp" ? "font-semibold text-purple-700" : "text-slate-700"}`}>{row.clickup}</td>
                      <td className="px-4 py-3 font-semibold text-slate-800">{winner}</td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-sky-50 via-amber-50 to-purple-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">Average (winner overall)</th>
                  <td className="px-4 py-3 font-semibold text-sky-800">{averages.airtable}</td>
                  <td className="px-4 py-3 font-semibold text-amber-800">{averages.monday}</td>
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
            <h3 className="text-xl font-semibold">Project management & collaboration</h3>
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
          <p className="text-slate-700">Seat counts and record limits matter: Airtable gate records/automation runs; Monday sells seats in bundles; ClickUp packs most features into Unlimited/Business.</p>
        </section>

        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User Experience & Learning Curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Monday:</strong> Fastest team adoption with templates and dashboards.
            </li>
            <li>
              <strong>Airtable:</strong> Light learning curve for bases; relational thinking needed for best results.
            </li>
            <li>
              <strong>ClickUp:</strong> Deep feature set; initial setup needs governance to avoid clutter.
            </li>
          </ul>
        </section>

        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-World Use-Cases & Winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Marketing/ops with structured data:</strong> Airtable wins for relational modeling, sync, and automations.
            </li>
            <li>
              <strong>PM visibility for stakeholders:</strong> Monday wins with dashboards, workload, and easy sharing.
            </li>
            <li>
              <strong>All-in-one tasks/docs on budget:</strong> ClickUp wins for breadth (tasks, docs, goals) at a low price.
            </li>
            <li>
              <strong>Agencies needing client dashboards:</strong> Monday or Airtable interfaces; ClickUp if price is primary.
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
              <p className="text-sm text-slate-700">Best for data-first workflows, reporting, and automations that mimic apps.</p>
              <p className="text-sm font-semibold text-emerald-700">Pricing: Per-seat with record/automation limits</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Monday.com</h3>
              <p className="text-sm text-slate-700">Best for visual PM and cross-team dashboards that stakeholders adopt quickly.</p>
              <p className="text-sm font-semibold text-emerald-700">Pricing: Seat bundles on yearly billing</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">ClickUp</h3>
              <p className="text-sm text-slate-700">Best for teams wanting tasks, docs, and goals in one tool at low cost.</p>
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
