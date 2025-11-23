import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  ClipboardList,
  Crown,
  ArrowLeft,
  Workflow,
  Kanban,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "trello vs asana vs monday";
const canonical = buildCanonical("/tools/compare/trello-vs-asana-vs-monday");

const brandMeta = {
  trello: {
    gradient: "from-sky-500 via-blue-500 to-indigo-500",
    badge: "bg-sky-100 text-sky-900",
    logo: "https://logo.clearbit.com/trello.com",
  },
  asana: {
    gradient: "from-pink-500 via-rose-500 to-orange-500",
    badge: "bg-rose-100 text-rose-900",
    logo: "https://logo.clearbit.com/asana.com",
  },
  monday: {
    gradient: "from-amber-500 via-yellow-500 to-lime-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/monday.com",
  },
};

const contenders = [
  {
    key: "trello",
    name: "Trello",
    blurb: "Lightweight kanban boards with power-ups and automation.",
    url: "https://trello.com",
  },
  {
    key: "asana",
    name: "Asana",
    blurb: "Project and work management with timelines and dependencies.",
    url: "https://asana.com",
  },
  {
    key: "monday",
    name: "Monday.com",
    blurb: "Highly customizable work OS with automations and views.",
    url: "https://monday.com",
  },
];

const comparisonRows = [
  {
    label: "Best for",
    trello: "Simple boards and personal/team task tracking.",
    asana: "Project workflows, timelines, dependencies.",
    monday: "Customizable workflows across ops, marketing, product.",
  },
  {
    label: "Views",
    trello: "Kanban-first, calendar, timeline via power-ups.",
    asana: "List, board, timeline, workload, goals.",
    monday: "Boards, dashboards, calendars, timelines, Gantt, charts.",
  },
  {
    label: "Automation",
    trello: "Butler rules and button automations.",
    asana: "Rules, triggers, app integrations.",
    monday: "Automations library and custom recipes.",
  },
  {
    label: "Collaboration",
    trello: "Comments, @mentions, checklists, card templates.",
    asana: "Task assignments, approvals, portfolios, goals.",
    monday: "Item owners, updates, dashboards, cross-team boards.",
  },
  {
    label: "Scaling teams",
    trello: "Great for small teams and campaign boards.",
    asana: "Strong for PMOs and cross-functional projects.",
    monday: "Best when you need custom workflows and reporting.",
  },
];

const scoreboard = [
  { label: "Ease of use", scores: { trello: 9.4, asana: 8.6, monday: 8.3 } },
  { label: "Feature depth", scores: { trello: 7.8, asana: 9.1, monday: 9.3 } },
  { label: "Automation", scores: { trello: 8.3, asana: 8.7, monday: 9.0 } },
  { label: "Reporting", scores: { trello: 7.2, asana: 8.8, monday: 9.1 } },
  { label: "Value", scores: { trello: 9.0, asana: 8.4, monday: 8.2 } },
];

const avg = (key) => {
  const total = scoreboard.reduce(
    (sum, row) => sum + (row.scores[key] || 0),
    0
  );
  return (total / scoreboard.length).toFixed(1);
};
const averages = {
  trello: avg("trello"),
  asana: avg("asana"),
  monday: avg("monday"),
};
const overallWinner = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const pricingTable = [
  {
    plan: "Trello Standard",
    monthly: "From ~US$5/user/mo",
    annual: "Lower annually",
    limits: "Unlimited boards, advanced checklists, custom fields",
    notes: "Best value for small teams that love kanban.",
  },
  {
    plan: "Asana Premium",
    monthly: "From ~US$13.49/user/mo",
    annual: "Lower annually",
    limits: "Timeline, workflow builder, forms, reporting",
    notes: "Great for project teams needing dependencies.",
  },
  {
    plan: "Monday Standard",
    monthly: "From ~US$12/seat/mo (min seat counts)",
    annual: "Lower annually",
    limits: "Dashboards, automations, integrations",
    notes: "Best for customizable workflows across functions.",
  },
];

const faqs = [
  {
    q: `Is Trello better than Asana or Monday in ${YEAR}?`,
    a: "Trello wins for simplicity and fast adoption. Asana wins for project structure and timelines. Monday wins for customizable workflows and dashboards across teams.",
  },
  {
    q: "Which is best for simple task boards?",
    a: "Trello. It is kanban-first, clean, and fast to onboard non-PM teammates.",
  },
  {
    q: "Which is best for timelines and dependencies?",
    a: "Asana. Its timeline, dependencies, resource views, and goals are stronger out of the box.",
  },
  {
    q: "Which is most customizable?",
    a: "Monday.com. Its item types, dashboards, and automation recipes make it easy to model many workflows beyond tasks.",
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
  trello: {
    pros: [
      "Fast, intuitive kanban",
      "Power-ups and Butler automation",
      "Great for campaign boards and personal to-dos",
    ],
    cons: [
      "Reporting is limited",
      "Dependencies and workload views are light",
      "Power-ups can add cost as you scale",
    ],
  },
  asana: {
    pros: [
      "Timelines, dependencies, workload",
      "Goals and reporting for PMOs",
      "Robust templates and approvals",
    ],
    cons: [
      "Priced higher than Trello",
      "Can feel heavier for small teams",
      "Automation library smaller than Monday",
    ],
  },
  monday: {
    pros: [
      "Highly customizable boards",
      "Automations and integrations library",
      "Dashboards across teams and data sources",
    ],
    cons: [
      "Seat minimums increase cost",
      "Can feel overwhelming initially",
      "Some advanced views gated to higher tiers",
    ],
  },
};

const useCaseInsights = {
  byTeamType: [
    "Solo founders & very small teams: Trello is easiest to ship with quickly and works well as a shared to-do list plus campaign board.",
    "Marketing & growth teams: Monday.com and Asana both work; Monday wins when you need cross-team dashboards, Asana when you want project-style roadmaps.",
    "Product & engineering: Asana is strong for backlogs, sprints, and roadmaps; Monday can work well when you also need non-engineering workflows in the same tool.",
  ],
  byWorkStyle: [
    "Visual/kanban-first and low process: Trello is perfect for teams that want to see work flowing left-to-right with minimal setup.",
    "Project-structured with milestones and owners: Asana shines when work is grouped into projects, with deadlines, dependencies, and clear reporting.",
    "Ops-style and multi-department workflows: Monday.com is built for operations, requests, handoffs, and cross-team pipelines.",
  ],
  byMaturity: [
    "Early-stage and low tooling budget: Start with Trello, then add power-ups/Butler as needed.",
    "Growing teams with multiple stakeholders: Asana gives you the project hygiene (goals, portfolios, workloads) that leadership expects.",
    "Mature orgs standardizing on one work OS: Monday.com can become the central place to model request flows, projects, and data dashboards.",
  ],
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

export default function TrelloVsAsanaVsMondayPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Trello vs Asana vs Monday – Which to pick? (${YEAR})`}
        description="In-depth comparison of Trello, Asana, and Monday.com across ease of use, features, automation, reporting, pricing, and which teams each project management tool fits best."
        canonical={canonical}
        keywords={`${primaryKeyword}, project management tools, kanban software, task management, work management`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
          Project management
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Trello vs Asana vs Monday – Honest Comparison ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Trello is the fastest to onboard for simple task boards. Asana is
          stronger for structured projects with timelines and dependencies.
          Monday.com is best when you want a customizable work OS that can
          support operations, marketing, product, and more. Below is a practical
          comparison to help you choose the right tool for how your team
          actually works.
        </p>

        {/* Quick verdict */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="space-y-3 rounded-3xl bg-sky-50/90 p-6 ring-1 ring-sky-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-sky-800">
              <Sparkles className="h-5 w-5" /> Quick Verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>Trello</strong> for lightweight kanban and campaign
              boards. Choose <strong>Asana</strong> for timelines,
              dependencies, and projects with stakeholders. Choose{" "}
              <strong>Monday.com</strong> when you need customizable boards,
              automations, and dashboards across multiple functions.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-sky-800">
              <Crown className="h-4 w-4" /> Overall scoreboard leader:{" "}
              {overallWinner.charAt(0).toUpperCase() + overallWinner.slice(1)}{" "}
              <span className="text-xs font-medium text-sky-700">
                (avg: {averages[overallWinner]}/10)
              </span>
            </div>
          </div>

          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Kanban className="h-5 w-5 text-sky-700" /> Best for kanban
              simplicity
            </div>
            <p className="text-sm text-slate-700">
              Trello’s drag-and-drop boards and Butler automation make it ideal
              for fast-moving teams, side projects, and visual backlogs.
            </p>
          </div>

          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Workflow className="h-5 w-5 text-amber-700" /> Best for
              customizable workflows
            </div>
            <p className="text-sm text-slate-700">
              Monday.com’s flexible boards, item types, and automations fit
              marketing ops, product operations, CS pipelines, and more.
            </p>
          </div>
        </div>

        {/* Contenders */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {contenders.map((card) => (
            <a
              key={card.key}
              href={card.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative block overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br ${
                brandMeta[card.key]?.gradient || "from-slate-500 to-slate-700"
              } p-5 shadow-md`}
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
            </a>
          ))}
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-sky-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[640px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Trello</th>
                  <th className="px-4 py-3">Asana</th>
                  <th className="px-4 py-3">Monday</th>
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
                    <td className="px-4 py-3 text-slate-700">{row.trello}</td>
                    <td className="px-4 py-3 text-slate-700">{row.asana}</td>
                    <td className="px-4 py-3 text-slate-700">{row.monday}</td>
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
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[640px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Trello</th>
                  <th className="px-4 py-3">Asana</th>
                  <th className="px-4 py-3">Monday</th>
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
                          winnerKey === "trello"
                            ? "font-semibold text-sky-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.trello}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "asana"
                            ? "font-semibold text-rose-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.asana}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "monday"
                            ? "font-semibold text-amber-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.monday}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-sky-50/70">
                  <th className="bg-sky-100 px-4 py-3 font-semibold text-slate-900">
                    Average
                  </th>
                  <td className="px-4 py-3 font-semibold text-sky-800">
                    {averages.trello}
                  </td>
                  <td className="px-4 py-3 font-semibold text-rose-800">
                    {averages.asana}
                  </td>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages.monday}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Pros & Cons Cards */}
        <section className="mt-10 space-y-6">
          <h2 className="text-2xl font-bold">Pros & cons at a glance</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {Object.entries(prosCons).map(([key, value]) => (
              <div
                key={key}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <LogoBadge
                    name={key.charAt(0).toUpperCase() + key.slice(1)}
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
          </div>
        </section>

        {/* How to choose section */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Zap className="h-6 w-6 text-amber-500" /> Which tool fits your team
            best?
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">
                By team type
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-700">
                {useCaseInsights.byTeamType.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">
                By work style
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-700">
                {useCaseInsights.byWorkStyle.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">
                By maturity & scale
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-700">
                {useCaseInsights.byMaturity.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Pricing snapshot */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <ClipboardList className="h-6 w-6 text-sky-600" /> Pricing snapshot
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
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
                    <td className="px-4 py-3 text-slate-700">{row.annual}</td>
                    <td className="px-4 py-3 text-slate-700">{row.limits}</td>
                    <td className="px-4 py-3 text-slate-700">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500">
            Pricing is indicative and may change. Always confirm current pricing
            and feature limits on each vendor’s official pricing page before
            committing.
          </p>
        </section>

        {/* Shared pros/cons component */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        {/* Final verdict */}
        <section className="mt-12 space-y-4 rounded-3xl bg-slate-900 p-6 text-white shadow-sm">
          <h2 className="text-2xl font-bold">Final verdict</h2>
          <ul className="space-y-2 text-sm text-slate-100">
            <li>
              <strong>Trello</strong> is ideal if you want simple kanban boards,
              minimal process, and a tool that anyone can understand in minutes.
            </li>
            <li>
              <strong>Asana</strong> makes the most sense when your work is
              project-based with dependencies, owners, and leadership reporting
              needs.
            </li>
            <li>
              <strong>Monday.com</strong> is the best fit when you are looking
              for a flexible work OS to standardize workflows across operations,
              marketing, product, and customer teams.
            </li>
          </ul>
        </section>

        {/* FAQs */}
        <section className="mt-10 space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">FAQs</h2>
          <div className="space-y-2 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-slate-100 bg-slate-50/60 p-4 open:bg-slate-50"
              >
                <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-slate-900 group-open:text-sky-800">
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
        <div className="mt-10 flex items-center gap-3 text-sm font-semibold text-sky-700">
          <ArrowLeft className="h-4 w-4" />
          <Link to="/tools">Back to Tools Hub</Link>
        </div>
      </div>
    </main>
  );
}
