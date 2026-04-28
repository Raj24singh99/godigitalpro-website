import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  Workflow,
  Crown,
  ArrowLeft,
  ClipboardList,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "monday vs asana vs clickup";
const canonical = buildCanonical("/tools/compare/monday-vs-asana-vs-clickup");

const brandMeta = {
  monday: {
    gradient: "from-amber-500 via-yellow-500 to-lime-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/monday.com",
  },
  asana: {
    gradient: "from-rose-400 via-pink-500 to-orange-500",
    badge: "bg-rose-100 text-rose-900",
    logo: "https://logo.clearbit.com/asana.com",
  },
  clickup: {
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/clickup.com",
  },
};

const contenders = [
  {
    key: "monday",
    name: "Monday.com",
    blurb: "Customizable work OS with visual boards, automations, and dashboards.",
    url: "/tools/monday",
  },
  {
    key: "asana",
    name: "Asana",
    blurb: "Structured project and portfolio management for cross-functional teams.",
    url: "/tools/asana",
  },
  {
    key: "clickup",
    name: "ClickUp",
    blurb: "Highly configurable work OS with deep views, docs, and dashboards.",
    url: "/tools/clickup",
  },
];

const comparisonRows = [
  {
    label: "Primary strength",
    monday: "Flexible boards and automations for many types of teams.",
    asana: "Structured projects, dependencies, and portfolios.",
    clickup: "Deep customization, dashboards, docs, and many views.",
  },
  {
    label: "Views",
    monday: "Board, list, timeline, Gantt, workload, dashboards.",
    asana: "List, board, timeline, calendar, workload, portfolios.",
    clickup: "List, board, chat, whiteboards, docs, dashboards, mind maps.",
  },
  {
    label: "Automations",
    monday: "Recipe-based automations with many app integrations.",
    asana: "Rules, triggers, and approvals integrated with tasks.",
    clickup: "Powerful automation engine with extensive triggers/actions.",
  },
  {
    label: "Reporting",
    monday: "Dashboards with widgets and cross-board views.",
    asana: "Portfolios, goals, and workload reports.",
    clickup: "Highly configurable dashboards and custom widgets.",
  },
  {
    label: "Best fit",
    monday: "Marketing/ops teams needing adaptable, visual workflows.",
    asana: "PMOs and teams needing clarity, dependencies, and portfolios.",
    clickup: "Teams wanting one hyper-configurable workspace for everything.",
  },
  {
    label: "Ease of use",
    monday: "Friendly UI with guided templates and clear visuals.",
    asana: "Predictable structure with moderate learning curve.",
    clickup: "Most powerful; can feel busy without guardrails and admin.",
  },
];

const scoreboard = [
  { label: "Flexibility", scores: { monday: 9.3, asana: 8.7, clickup: 9.4 } },
  {
    label: "Project governance",
    scores: { monday: 8.7, asana: 9.3, clickup: 9.1 },
  },
  { label: "Automations", scores: { monday: 9.0, asana: 8.8, clickup: 9.2 } },
  {
    label: "Ease of adoption",
    scores: { monday: 8.8, asana: 8.9, clickup: 8.0 },
  },
  {
    label: "Value for money",
    scores: { monday: 8.7, asana: 8.4, clickup: 8.6 },
  },
];

const avg = (key) =>
  (
    scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  monday: avg("monday"),
  asana: avg("asana"),
  clickup: avg("clickup"),
};

const overallWinner = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const pricingTable = [
  {
    plan: "Monday.com Standard / Pro",
    tool: "Monday.com",
    monthly: "Per-seat pricing; discounts on annual",
    seats: "Minimum seat counts on some tiers",
    notes:
      "Strong value if you lean into boards, automations, and dashboards across multiple teams.",
  },
  {
    plan: "Asana Premium / Business",
    tool: "Asana",
    monthly: "Per-seat pricing; annual discounts for teams",
    seats: "Tiered features (dependencies, goals, portfolios) by plan",
    notes:
      "Best when you fully use projects, dependencies, portfolios, and goals for governance.",
  },
  {
    plan: "ClickUp Business / Enterprise",
    tool: "ClickUp",
    monthly: "Per-seat pricing with generous feature sets",
    seats: "Storage, automation, and views scale with plan",
    notes:
      "High ceiling if you consolidate docs, tasks, and dashboards into one workspace.",
  },
];

const featureBullets = {
  planning: [
    "Monday.com: Visual boards for backlogs, campaigns, and ops pipelines with color-coded statuses.",
    "Asana: Strong project structures with sections, subtasks, and dependencies for predictable plans.",
    "ClickUp: Nested hierarchies (spaces, folders, lists) with templates for many work types.",
  ],
  automation: [
    "Monday.com: Recipe-style 'when this happens, do that' automations and native integrations.",
    "Asana: Rules that trigger on task changes (status, assignee, due dates) plus approvals.",
    "ClickUp: Robust automation library, and power users can build complex multi-step flows.",
  ],
  collaboration: [
    "Monday.com: Easy @mentions, updates, and dashboards that non-PM stakeholders can read quickly.",
    "Asana: Clear ownership with assignees, followers, and task conversations tied to work.",
    "ClickUp: Chat views, docs, whiteboards, and tasks in a single workspace for end-to-end collaboration.",
  ],
};

const prosCons = {
  monday: {
    pros: [
      "Very friendly UI with strong templates for marketing, ops, and cross-functional teams",
      "Recipe-based automations are easy for non-technical admins to configure",
      "Dashboards pull together data from multiple boards for exec and team views",
    ],
    cons: [
      "Complex PMO-style governance requires more configuration and structure",
      "Pricing can climb as you add many seats across the organisation",
      "Deep hierarchies are less rigid than Asana, which some PMOs prefer",
    ],
  },
  asana: {
    pros: [
      "Excellent for structured projects, dependencies, and timelines",
      "Portfolios, goals, and workload give PMOs strong governance tools",
      "Feels familiar to many teams coming from list/board tools",
    ],
    cons: [
      "Less flexible than Monday/ClickUp for free-form workflows",
      "Automation is powerful but less approachable for casual admins",
      "Docs and whiteboards are less central than in ClickUp",
    ],
  },
  clickup: {
    pros: [
      "Deepest configuration options with many views, custom fields, and dashboards",
      "Docs, tasks, whiteboards, and chat in one consolidated workspace",
      "Can consolidate multiple tools if implemented well (docs, PM, notes)",
    ],
    cons: [
      "Can feel overwhelming without strong workspace design and governance",
      "Setup and ongoing admin require more time and opinionated structure",
      "Teams may overcomplicate processes instead of simplifying them",
    ],
  },
};

const faqs = [
  {
    q: `Who wins overall in ${YEAR}?`,
    a: "ClickUp and Monday lead on flexibility; Asana leads on structured projects and governance. Pick Monday for balanced usability + automations, Asana for PMO-style governance, and ClickUp when you want maximum customization and can invest in setup.",
  },
  {
    q: "Which is easiest to roll out?",
    a: "Monday is the most approachable for mixed teams thanks to templates and visual boards. Asana is straightforward for teams used to list/board views. ClickUp may need more admin design before rollout.",
  },
  {
    q: "Which is best for complex projects?",
    a: "Asana and ClickUp both handle dependencies, timelines, and portfolios well. Monday can do it too but may require more deliberate configuration for large programmes.",
  },
  {
    q: "Which has the most views and dashboards?",
    a: "ClickUp has the widest range of views and dashboards. Monday offers strong dashboards and core PM views. Asana focuses on the essentials: list, board, timeline, calendar, portfolios, and workload.",
  },
  {
    q: "Which works best as a single ‘work OS’?",
    a: "ClickUp is positioned as an all-in-one hub with docs, tasks, chat, and dashboards. Monday can also act as a work OS, especially for ops and GTM teams. Asana is strongest as the structured project layer integrated with other tools.",
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

const LogoBadge = ({ name }) => {
  const lowered = name.toLowerCase();
  const key = lowered.includes("monday")
    ? "monday"
    : lowered.includes("asana")
    ? "asana"
    : lowered.includes("clickup")
    ? "clickup"
    : lowered;

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
      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${meta.badge}`}>
        {name}
      </span>
    </div>
  );
};

const ScoreInline = ({ label, value }) => (
  <div className="flex items-center justify-between text-sm">
    <span>{label}</span>
    <span className="font-semibold text-slate-900">{value}/10</span>
  </div>
);

export default function MondayVsAsanaVsClickUpPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Monday vs Asana vs ClickUp – Which work OS wins? (${YEAR})`}
        description="Compare Monday.com, Asana, and ClickUp on flexibility, automations, views, governance, pricing, and best-fit scenarios so you can choose the right work OS for your team."
        canonical={canonical}
        keywords={`${primaryKeyword}, project management comparison, work os`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
          Project management & work OS
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Monday vs Asana vs ClickUp ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          <strong>Monday.com</strong> balances flexibility and ease of use,{" "}
          <strong>Asana</strong> excels at structured projects and governance, and{" "}
          <strong>ClickUp</strong> is the most configurable work OS. Here is how they
          compare on workflows, automations, reporting, and real-world fit.
        </p>

        {/* Quick verdict + best for */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2 space-y-3 rounded-3xl bg-amber-50/90 p-6 ring-1 ring-amber-100">
            <div className="flex items-center gap-2 text-lg font-semibold text-amber-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>Monday</strong> for adaptable cross-team workflows with
              approachable automations and dashboards. Choose <strong>Asana</strong> when
              you need structured projects, dependencies, and portfolios. Choose{" "}
              <strong>ClickUp</strong> if you want one hyper-configurable workspace and
              can invest in strong admin and guardrails.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-amber-800">
              <Crown className="h-4 w-4" /> Overall scoreboard winner:{" "}
              {overallWinner.charAt(0).toUpperCase() + overallWinner.slice(1)}{" "}
              <span className="text-xs font-medium text-amber-700">
                (avg: {averages[overallWinner]}/10)
              </span>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="text-sm font-semibold text-slate-900">Best for</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <Workflow className="mt-0.5 h-4 w-4 text-amber-600" />
                <span>
                  <strong>Monday:</strong> Flexible cross-team workflows and campaign
                  boards.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <ClipboardList className="mt-0.5 h-4 w-4 text-rose-600" />
                <span>
                  <strong>Asana:</strong> Structured projects with dependencies and
                  portfolios.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Gauge className="mt-0.5 h-4 w-4 text-indigo-600" />
                <span>
                  <strong>ClickUp:</strong> Maximum customization, dashboards, and
                  “single workspace” ambitions.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contender cards */}
        <div className="mt-10 overflow-hidden rounded-2xl bg-slate-50 p-6 shadow-sm ring-1 ring-slate-200">
          <div className="grid gap-4 md:grid-cols-3">
            {contenders.map((tool) => (
              <div
                key={tool.key}
                className="rounded-2xl bg-white/60 p-4 ring-1 ring-slate-200"
              >
                <div className="flex items-center justify-between gap-2">
                  <LogoBadge name={tool.name} />
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                    Contender
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-700">{tool.blurb}</p>
                <Link
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-amber-700 hover:text-amber-600"
                  to={tool.url}
                >
                  View tool
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-amber-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[700px] text-left text-sm text-slate-800 md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Monday</th>
                  <th className="px-4 py-3">Asana</th>
                  <th className="px-4 py-3">ClickUp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr
                    key={row.label}
                    className="align-top odd:bg-white even:bg-slate-50/60"
                  >
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-900">
                      {row.label}
                    </th>
                    <td className="px-4 py-3">{row.monday}</td>
                    <td className="px-4 py-3">{row.asana}</td>
                    <td className="px-4 py-3">{row.clickup}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Scoreboard table */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <BarChart3 className="h-6 w-6 text-indigo-600" /> Scoreboard (1–10)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[700px] text-left text-sm text-slate-800 md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Monday</th>
                  <th className="px-4 py-3">Asana</th>
                  <th className="px-4 py-3">ClickUp</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const m = row.scores.monday;
                  const a = row.scores.asana;
                  const c = row.scores.clickup;
                  const maxVal = Math.max(m, a, c);
                  const winner =
                    m === a && a === c
                      ? "Tie"
                      : maxVal === m
                      ? "Monday"
                      : maxVal === a
                      ? "Asana"
                      : "ClickUp";

                  return (
                    <tr
                      key={row.label}
                      className="align-middle odd:bg-white even:bg-slate-50/60"
                    >
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-900">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Monday"
                            ? "font-semibold text-amber-800"
                            : "text-slate-700"
                        }`}
                      >
                        {m}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Asana"
                            ? "font-semibold text-rose-800"
                            : "text-slate-700"
                        }`}
                      >
                        {a}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "ClickUp"
                            ? "font-semibold text-indigo-800"
                            : "text-slate-700"
                        }`}
                      >
                        {c}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {winner}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-amber-50 via-rose-50 to-indigo-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages.monday}
                  </td>
                  <td className="px-4 py-3 font-semibold text-rose-800">
                    {averages.asana}
                  </td>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages.clickup}
                  </td>
                  <td className="px-4 py-3 font-bold text-slate-900">
                    {overallWinner.charAt(0).toUpperCase() + overallWinner.slice(1)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Feature comparison */}
        <section className="mt-12 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-amber-600" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Layers className="h-5 w-5 text-amber-600" /> Planning & structure
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {featureBullets.planning.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Workflow className="h-5 w-5 text-emerald-600" /> Automations & workflow
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {featureBullets.automation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <ClipboardList className="h-5 w-5 text-indigo-600" /> Collaboration &
              adoption
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {featureBullets.collaboration.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Pricing snapshots</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[700px] text-left text-sm text-slate-800 md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Tool</th>
                  <th className="px-4 py-3">Billing</th>
                  <th className="px-4 py-3">Seats / limits (typical)</th>
                  <th className="px-4 py-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {pricingTable.map((row) => (
                  <tr key={row.plan}>
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-900">
                      {row.plan}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.tool}</td>
                    <td className="px-4 py-3 text-slate-700">{row.monthly}</td>
                    <td className="px-4 py-3 text-slate-700">{row.seats}</td>
                    <td className="px-4 py-3 text-slate-700">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-600">
            Pricing, seat minimums, and feature gates change frequently. Always confirm
            current details and enterprise options on each vendor&apos;s pricing page
            before deciding.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>
              <strong>Monday.com:</strong> Feels like a visual operations board. Very
              approachable for marketing, ops, and GTM teams that want quick wins with
              minimal training.
            </li>
            <li>
              <strong>Asana:</strong> Familiar list/board structures with timelines and
              workload. Easy for teams used to Trello-style tools but needing more
              governance and reporting.
            </li>
            <li>
              <strong>ClickUp:</strong> The learning curve is steeper because there are
              more knobs and options. With a strong admin and good workspace design, it
              can replace several tools at once.
            </li>
          </ul>
        </section>

        {/* Real-world use-cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>
              <strong>Marketing & GTM teams:</strong> Monday wins with campaign boards,
              content calendars, and stakeholder-friendly dashboards.
            </li>
            <li>
              <strong>Product & engineering with PMO oversight:</strong> Asana wins when
              you lean on portfolios, dependencies, and goals for visibility and
              governance.
            </li>
            <li>
              <strong>Ops-heavy or “everything in one place” teams:</strong> ClickUp wins
              for teams willing to design a single workspace for docs, tasks, and
              reporting.
            </li>
            <li>
              <strong>Agencies & service teams:</strong> Monday or ClickUp both work
              well; Asana shines when you want traditional project structures and clear
              timelines per client.
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
              <h3 className="text-lg font-semibold">Monday.com</h3>
              <p className="text-sm text-slate-700">
                Best when you want quick adoption across marketing, ops, and GTM teams
                with strong visual boards and approachable automations.
              </p>
              <p className="mt-2 text-sm font-semibold text-amber-700">
                Ideal for: Revenue ops, marketing squads, customer ops, and cross-team
                initiatives.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Asana</h3>
              <p className="text-sm text-slate-700">
                Best when your priority is structured projects, dependencies, and clear
                portfolio oversight.
              </p>
              <p className="mt-2 text-sm font-semibold text-rose-700">
                Ideal for: PMOs, product teams, and orgs that run many projects in
                parallel.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">ClickUp</h3>
              <p className="text-sm text-slate-700">
                Best when you want a single workspace to replace multiple tools, and you
                have an owner to design and maintain it.
              </p>
              <p className="mt-2 text-sm font-semibold text-indigo-700">
                Ideal for: Ops-heavy teams, agencies, and startups consolidating their
                work stack.
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
                <p className="mt-1 text-sm text-slate-700">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Back link */}
        <div className="mt-10 flex items-center gap-3 text-sm text-slate-600">
          <Link
            to="/tools"
            className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-amber-700 shadow-sm ring-1 ring-amber-100 hover:bg-amber-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
