import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  ClipboardList,
  Crown,
  ArrowLeft,
  Workflow,
  Puzzle,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "trello vs clickup vs notion";
const canonical = buildCanonical("/tools/compare/trello-vs-clickup-vs-notion");

const brandMeta = {
  trello: {
    gradient: "from-sky-500 via-blue-500 to-indigo-500",
    badge: "bg-sky-100 text-sky-900",
    logo: "https://logo.clearbit.com/trello.com",
  },
  clickup: {
    gradient: "from-purple-500 via-indigo-500 to-pink-500",
    badge: "bg-purple-100 text-purple-900",
    logo: "https://logo.clearbit.com/clickup.com",
  },
  notion: {
    gradient: "from-slate-600 via-slate-700 to-gray-800",
    badge: "bg-slate-200 text-slate-900",
    logo: "https://logo.clearbit.com/notion.so",
  },
};

const contenders = [
  {
    key: "trello",
    name: "Trello",
    blurb: "Simple kanban boards with power-ups and automation.",
    url: "https://trello.com",
  },
  {
    key: "clickup",
    name: "ClickUp",
    blurb: "All-in-one work management with docs, tasks, and goals.",
    url: "https://clickup.com",
  },
  {
    key: "notion",
    name: "Notion",
    blurb:
      "Docs, databases, and lightweight project tracking in one workspace.",
    url: "https://www.notion.so",
  },
];

const comparisonRows = [
  {
    label: "Best for",
    trello: "Straightforward kanban and campaign boards.",
    clickup: "Multi-team task/goal tracking with sprints.",
    notion: "Docs + project databases with flexibility.",
  },
  {
    label: "Views",
    trello: "Board-first; calendar/timeline via power-ups.",
    clickup: "List, board, Gantt, workload, dashboards.",
    notion: "Table, board, timeline, calendar views on databases.",
  },
  {
    label: "Docs & knowledge",
    trello: "Card descriptions and attachments.",
    clickup: "Docs with tasks, goals, and relationships.",
    notion: "Rich docs linked to project databases and wikis.",
  },
  {
    label: "Automation",
    trello: "Butler rules and buttons.",
    clickup: "Native automations, dependencies, sprints.",
    notion:
      "Light automation via templates and buttons; deeper via integrations.",
  },
  {
    label: "Complex projects",
    trello: "Best for light projects and content calendars.",
    clickup: "Strong for squads, sprints, and OKRs.",
    notion:
      "Good for blended docs + tasks; limited heavy PM features (complex dependencies, advanced reporting).",
  },
];

const scoreboard = [
  { label: "Ease of use", scores: { trello: 9.4, clickup: 8.0, notion: 8.7 } },
  { label: "Feature depth", scores: { trello: 7.6, clickup: 9.3, notion: 8.2 } },
  {
    label: "Documentation & wikis",
    scores: { trello: 6.9, clickup: 8.6, notion: 9.5 },
  },
  { label: "Automation", scores: { trello: 8.2, clickup: 9.0, notion: 7.8 } },
  { label: "Value", scores: { trello: 9.0, clickup: 8.5, notion: 8.8 } },
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
  clickup: avg("clickup"),
  notion: avg("notion"),
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
    notes: "Great for boards-first teams on a budget.",
  },
  {
    plan: "ClickUp Unlimited",
    monthly: "From ~US$10/user/mo",
    annual: "Lower annually",
    limits: "Dashboards, goals, automations, sprints",
    notes: "Strong value for product/engineering squads needing depth.",
  },
  {
    plan: "Notion Plus",
    monthly: "From ~US$10/user/mo",
    annual: "Lower annually",
    limits: "Unlimited pages, version history, databases",
    notes: "Best for document-heavy teams blending tasks + wiki.",
  },
];

const faqs = [
  {
    q: `Is Trello better than ClickUp or Notion in ${YEAR}?`,
    a: "Trello wins for simplicity and fast adoption. ClickUp wins for deep project management, sprints, and dashboards. Notion wins if you want docs, wiki, and light project management in one flexible workspace.",
  },
  {
    q: "Which is best for software squads?",
    a: "ClickUp. It has sprints, dependencies, dashboards, and advanced automations tailored for product and engineering squads.",
  },
  {
    q: "Which is best for knowledge + tasks together?",
    a: "Notion excels at combining docs, wikis, and tasks in linked databases while staying flexible for different teams.",
  },
  {
    q: "Which is most beginner friendly?",
    a: "Trello. Its kanban-first approach is the quickest to learn for non-PM teammates and creative teams.",
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
      "Intuitive kanban UX",
      "Butler automations",
      "Great starter price",
      "Plenty of templates and power-ups",
    ],
    cons: [
      "Reporting is limited",
      "Dependencies/workload are light",
      "Scaling requires power-ups and admin controls",
    ],
  },
  clickup: {
    pros: [
      "Deep PM features, sprints, dependencies",
      "Automations and dashboards",
      "Docs tied to tasks and goals",
    ],
    cons: [
      "Steeper learning curve",
      "UI can feel busy",
      "Admin setup needed to avoid overload",
    ],
  },
  notion: {
    pros: [
      "Docs + databases in one",
      "Flexible templates and relations",
      "Great for wiki + tasks together",
    ],
    cons: [
      "No native workload/dependency depth",
      "Automations rely on integrations",
      "Views can get complex without standards",
    ],
  },
};

const useCaseInsights = {
  byTeamType: [
    "Solo founders & small creative teams: Trello is usually enough—simple boards for content calendars, pipelines, and to-dos.",
    "Product & engineering squads: ClickUp is better with sprints, backlogs, dependencies, and engineering dashboards.",
    "Knowledge-heavy or consulting teams: Notion fits best when you need client docs, internal wiki, and simple project tracking under one roof.",
  ],
  byWorkStyle: [
    "Visual, low-process workflows: Trello keeps everything as cards on a board, perfect if you resist heavy process but need visibility.",
    "Structured projects with owners & deadlines: ClickUp lets you model epics, tasks, subtasks, and goals with strong reporting.",
    "Document-first collaboration: Notion is ideal if work starts as a document or spec and then becomes tasks linked to that doc.",
  ],
  byExistingStack: [
    "Already using separate tools for docs (e.g., Google Docs): Trello or ClickUp for tasking works well; keep docs where they are.",
    "Want to consolidate tools: Notion or ClickUp can help replace separate doc + project tools, depending on how heavy your PM needs are.",
    "Need to integrate with dev tools: ClickUp’s integrations and structure work better for development pipelines than Trello/Notion alone.",
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

export default function TrelloVsClickUpVsNotionPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Trello vs ClickUp vs Notion – Which is best? (${YEAR})`}
        description="In-depth comparison of Trello, ClickUp, and Notion across simplicity, features, documentation, automation, and pricing so you can choose the right stack for your projects, wiki, and workflows."
        canonical={canonical}
        keywords={`${primaryKeyword}, project management tools, docs and tasks, work management, knowledge management`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
          Work management
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Trello vs ClickUp vs Notion – Honest Comparison ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Trello keeps things simple for kanban boards. ClickUp delivers deep
          project features and reporting for squads. Notion blends docs,
          databases, and tasks for flexible teams. Below is a practical
          comparison to help you decide which stack fits your team’s work style,
          not just a feature checklist.
        </p>

        {/* Quick verdict */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="space-y-3 rounded-3xl bg-sky-50/90 p-6 ring-1 ring-sky-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-sky-800">
              <Sparkles className="h-5 w-5" /> Quick Verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>Trello</strong> for quick, intuitive kanban boards
              and campaign planning. Choose <strong>ClickUp</strong> if you need
              sprints, dependencies, and dashboards across multiple teams.
              Choose <strong>Notion</strong> when you want docs, wiki, and tasks
              in a single flexible workspace.
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
              <Puzzle className="h-5 w-5 text-purple-700" /> Best all-in-one
              depth
            </div>
            <p className="text-sm text-slate-700">
              ClickUp packs tasks, docs, goals, sprints, and dashboards in one
              place—great for PM, product, and engineering squads needing
              control and reporting.
            </p>
          </div>

          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Workflow className="h-5 w-5 text-slate-800" /> Best for docs +
              tasks
            </div>
            <p className="text-sm text-slate-700">
              Notion shines when you need connected docs, wikis, and tasks in
              flexible databases that can adapt to many team use cases.
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
                  <th className="px-4 py-3">ClickUp</th>
                  <th className="px-4 py-3">Notion</th>
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
                    <td className="px-4 py-3 text-slate-700">{row.clickup}</td>
                    <td className="px-4 py-3 text-slate-700">{row.notion}</td>
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
                  <th className="px-4 py-3">ClickUp</th>
                  <th className="px-4 py-3">Notion</th>
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
                          winnerKey === "clickup"
                            ? "font-semibold text-purple-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.clickup}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "notion"
                            ? "font-semibold text-slate-900"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.notion}
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
                  <td className="px-4 py-3 font-semibold text-purple-800">
                    {averages.clickup}
                  </td>
                  <td className="px-4 py-3 font-semibold text-slate-900">
                    {averages.notion}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Pros & cons cards */}
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
                By existing stack
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-700">
                {useCaseInsights.byExistingStack.map((item) => (
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

        {/* Shared ProsConsSection */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
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
