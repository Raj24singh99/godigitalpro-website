import React from "react";
import {
  Sparkles,
  Crown,
  Layers,
  BarChart3,
  ArrowLeft,
  Gauge,
  ClipboardList,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "notion vs asana vs clickup";
const canonical = buildCanonical("/tools/compare/notion-vs-asana-vs-clickup");

const brandMeta = {
  notion: {
    gradient: "from-slate-800 via-slate-700 to-black",
    badge: "bg-slate-200 text-slate-900",
    logo: "https://logo.clearbit.com/notion.so",
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
    key: "notion",
    name: "Notion",
    blurb: "Docs + databases for flexible project, client and knowledge hubs.",
    url: "/tools/notion",
  },
  {
    key: "asana",
    name: "Asana",
    blurb: "Structured project and portfolio management with strong timelines.",
    url: "/tools/asana",
  },
  {
    key: "clickup",
    name: "ClickUp",
    blurb: "Highly customizable work OS combining tasks, docs and dashboards.",
    url: "/tools/clickup",
  },
];

const comparisonRows = [
  {
    label: "Primary style",
    notion: "Docs + databases; you design the structure and workflows.",
    asana: "Structured projects, tasks, dependencies and portfolios.",
    clickup: "Configurable workspaces with tasks, docs, goals and dashboards.",
  },
  {
    label: "Best for",
    notion: "Knowledge hubs, client portals, product wikis and flexible projects.",
    asana: "PMOs and teams needing clear timelines, owners and status at scale.",
    clickup: "Teams that want deep customization and many views in one tool.",
  },
  {
    label: "Planning & views",
    notion: "Boards, lists, calendars, timelines via databases; build your own.",
    asana: "Strong list, board, timeline and workload views out of the box.",
    clickup: "List, board, Gantt, workload, mind maps and custom dashboards.",
  },
  {
    label: "Docs & knowledge",
    notion: "World-class docs with databases; everything is a page you can link.",
    asana: "Task descriptions, project briefs and basic documentation.",
    clickup: "Docs built-in, but not as central as in Notion.",
  },
  {
    label: "Automation",
    notion: "Relational databases, formulas and basic automations via integrations.",
    asana: "Rules-based automation (if/then) for tasks, fields and workflows.",
    clickup: "Advanced automation library across lists, spaces and statuses.",
  },
  {
    label: "Reporting & portfolios",
    notion: "Custom dashboards via databases and rollups; requires design effort.",
    asana: "Portfolio, goals and workload reporting tuned for PMOs and leaders.",
    clickup: "Highly configurable dashboards with widgets and cross-team views.",
  },
  {
    label: "Ease of setup",
    notion: "Very fast for small teams and wikis; needs structure for scale.",
    asana: "Guided templates and clear project structures; predictable rollout.",
    clickup: "Powerful but can feel busy without opinionated admin guardrails.",
  },
  {
    label: "Pricing value",
    notion: "Generous free tier; Plus/Business are affordable for most teams.",
    asana: "Higher price at scale, but strong governance and enterprise features.",
    clickup: "Good value for breadth, though time investment needed to tame complexity.",
  },
];

const scoreboard = [
  { label: "Flexibility", notion: 9.6, asana: 8.2, clickup: 9.1 },
  { label: "Project governance", notion: 8.0, asana: 9.4, clickup: 9.0 },
  { label: "Collaboration", notion: 9.0, asana: 8.8, clickup: 9.0 },
  { label: "Ease of adoption", notion: 8.8, asana: 8.9, clickup: 8.2 },
  { label: "Value for money", notion: 9.2, asana: 8.0, clickup: 8.6 },
];

const avg = (tool) =>
  (
    scoreboard.reduce((sum, row) => sum + (row[tool] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  notion: avg("notion"),
  asana: avg("asana"),
  clickup: avg("clickup"),
};

const overallWinner =
  Math.max(
    parseFloat(averages.notion),
    parseFloat(averages.asana),
    parseFloat(averages.clickup)
  ) === parseFloat(averages.notion)
    ? "Notion"
    : Math.max(
        parseFloat(averages.asana),
        parseFloat(averages.clickup)
      ) === parseFloat(averages.asana)
    ? "Asana"
    : "ClickUp";

const pricingTable = [
  {
    plan: "Notion Plus / Business (per user)",
    monthly: "Plus from around ~$8–$10/user/mo",
    annual: "Discounted when billed annually",
    limits: "Unlimited pages and blocks; advanced permissions on Business",
    notes: "Great value when you want documentation, databases and light project tracking together.",
  },
  {
    plan: "Asana Starter / Advanced (per user)",
    monthly: "From around ~$11–$25/user/mo depending on tier",
    annual: "Cheaper per month on annual contracts",
    limits: "Advanced fields, rules, portfolios and reporting on higher tiers",
    notes: "Best when you need robust project governance, reporting and enterprise admin.",
  },
  {
    plan: "ClickUp Unlimited / Business (per user)",
    monthly: "From around ~$7–$12/user/mo",
    annual: "Lower effective rate on annual",
    limits: "Storage, dashboard widgets and advanced features vary by tier",
    notes: "Strong value if you actually use the breadth of views, automation and dashboards.",
  },
];

const featureBullets = {
  workspace: [
    "Notion: Everything is a page – combine docs, databases and wikis into flexible workspaces that double as knowledge hubs.",
    "Asana: Hierarchy of teams, portfolios, projects and tasks gives PMOs clarity on who owns what and when.",
    "ClickUp: Spaces, folders and lists with heavy customization; can mirror almost any hierarchy if you invest time.",
  ],
  governance: [
    "Notion: Governance comes from how you design databases, properties and templates; powerful but DIY.",
    "Asana: Strong native support for dependencies, workload, approvals and portfolio health for leadership.",
    "ClickUp: Rich statuses, custom fields and automation enable deep governance if you configure carefully.",
  ],
  collaboration: [
    "Notion: Inline comments, mentions and shared docs make it ideal for async, documentation-heavy teams.",
    "Asana: Task comments, approvals and status updates keep project communication close to the work.",
    "ClickUp: Real-time docs, chat, whiteboards and dashboards centralise collaboration across functions.",
  ],
};

const prosCons = {
  notion: {
    pros: [
      "Highly flexible mix of docs, databases and wikis for knowledge-first teams",
      "Excellent for client portals, product specs, roadmaps and internal documentation",
      "Strong value on paid plans with generous free tier for small teams",
    ],
    cons: [
      "Requires thoughtful architecture to scale beyond a few teams",
      "Project governance (dependencies, capacity) is more manual than in Asana/ClickUp",
      "Too much freedom can lead to inconsistent setups across teams",
    ],
  },
  asana: {
    pros: [
      "Best-in-class for structured projects, timelines and portfolio management",
      "Clear ownership, due dates and dependencies for PMO-style governance",
      "Strong enterprise features: roles, permissions, goals and reporting",
    ],
    cons: [
      "Less flexible for deep documentation and knowledge hubs than Notion",
      "Pricing climbs quickly at scale compared with Notion/ClickUp",
      "Customization is more constrained; harder to turn into a full “work OS”",
    ],
  },
  clickup: {
    pros: [
      "Extremely customizable with many views, dashboards and automation options",
      "Brings tasks, docs, goals, chat and whiteboards into a single platform",
      "Good price-to-feature ratio when heavily adopted across teams",
    ],
    cons: [
      "Interface can feel busy and overwhelming without strong admin guardrails",
      "Complexity can slow adoption for non-technical or smaller teams",
      "Requires ongoing ownership to keep spaces, statuses and fields clean",
    ],
  },
};

const faqs = [
  {
    q: `Who wins overall in ${YEAR}?`,
    a: "Notion wins overall for flexibility and for combining docs, databases and light project tracking in one place. Asana wins for structured project governance, timelines and portfolio reporting. ClickUp wins when you want a highly customizable work OS with many views and dashboards.",
  },
  {
    q: "Which is easiest to launch quickly?",
    a: "Notion is easiest for wikis, docs and simple project boards. Asana is straightforward for classic projects using templates. ClickUp is powerful out of the box but benefits from an admin designing your spaces and workflows.",
  },
  {
    q: "Which fits PMOs and scaled delivery best?",
    a: "Asana fits PMOs best thanks to portfolios, dependencies, workload and goals. ClickUp can also work well for PMOs if you invest in configuration. Notion can support this, but you will be building more of the structure yourself.",
  },
  {
    q: "Which is best for documentation + delivery in one place?",
    a: "Notion is the strongest for documentation + delivery in a single workspace because docs and databases live side by side. ClickUp also combines docs and tasks, but docs are not as central as in Notion. Asana is more task- and project-centric.",
  },
  {
    q: "Which should small teams or agencies start with?",
    a: "Small teams and agencies often start with Notion for client hubs, docs and simple projects. If you run many predictable projects with fixed phases, Asana or ClickUp templates may give you more structure from day one.",
  },
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

const LogoBadge = ({ name }) => {
  const lowered = name.toLowerCase();
  const key =
    lowered.includes("notion") || lowered === "notion"
      ? "notion"
      : lowered.includes("asana")
      ? "asana"
      : lowered.includes("click")
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
        className={`flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br ${meta.gradient}`}
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

export default function NotionVsAsanaVsClickUpPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Notion vs Asana vs ClickUp (${YEAR}) – Which should you choose?`}
        description="Compare Notion, Asana, and ClickUp across flexibility, project governance, collaboration, pricing, and best use cases so you can pick the right work hub for your team."
        canonical={canonical}
        keywords={`${primaryKeyword}, project management comparison, work os, notion vs asana, notion vs clickup`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-700">
          Work management
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Notion vs Asana vs ClickUp ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Notion is the most flexible for combining docs, knowledge and
          lightweight projects. Asana is the most structured for timelines,
          dependencies and portfolio clarity. ClickUp is the most customizable
          when you need many views and dashboards under one roof. Here is the
          full breakdown.
        </p>

        {/* Top contender cards */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {contenders.map((item) => (
            <Link
              key={item.key}
              to={item.url}
              className={`relative block overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br ${
                brandMeta[item.key]?.gradient || "from-slate-500 to-slate-700"
              } p-5 shadow-md`}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white" />
                <div className="pointer-events-none absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-white" />
              </div>
              <div className="relative flex items-start justify-between">
                <LogoBadge name={item.name} />
                <Sparkles className="h-5 w-5 text-white/80" />
              </div>
              <p className="relative mt-3 text-sm font-medium text-white/90">
                {item.blurb}
              </p>
            </Link>
          ))}
        </div>

        {/* Quick verdict + overall winner */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-slate-900">
              <Sparkles className="h-5 w-5" />
              <p className="text-lg font-semibold">Quick verdict</p>
            </div>
            <p className="mt-2 text-slate-800">
              Choose <strong>Notion</strong> for flexible docs + tasks, client
              hubs and knowledge-first teams. Choose <strong>Asana</strong> for
              structured projects, dependencies and portfolio clarity. Choose{" "}
              <strong>ClickUp</strong> if you want deep customization, rich
              dashboards and a work OS that can replace several tools.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Crown className="h-4 w-4 text-indigo-600" /> Overall scoreboard
              winner: {overallWinner}{" "}
              <span className="text-xs text-slate-600">
                (avg:{" "}
                {overallWinner === "Notion"
                  ? averages.notion
                  : overallWinner === "Asana"
                  ? averages.asana
                  : averages.clickup}
                /10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              All three tools are strong. Your choice should reflect whether you
              care most about flexible knowledge management, strict project
              governance, or building a fully customized work OS.
            </p>
          </div>
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-indigo-600" /> Side-by-side
            comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Notion</th>
                  <th className="px-4 py-3">Asana</th>
                  <th className="px-4 py-3">ClickUp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr
                    key={row.label}
                    className="odd:bg-white even:bg-slate-50/50"
                  >
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">
                      {row.notion}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.asana}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.clickup}
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
            <BarChart3 className="h-6 w-6 text-purple-600" /> Scoreboard (1–10)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Notion</th>
                  <th className="px-4 py-3">Asana</th>
                  <th className="px-4 py-3">ClickUp</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const { notion, asana, clickup } = row;
                  const winnerValue = Math.max(notion, asana, clickup);
                  const winner =
                    winnerValue === notion
                      ? "Notion"
                      : winnerValue === asana
                      ? "Asana"
                      : "ClickUp";
                  return (
                    <tr
                      key={row.label}
                      className="odd:bg-white even:bg-slate-50/50"
                    >
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Notion"
                            ? "font-semibold text-slate-900"
                            : "text-slate-700"
                        }`}
                      >
                        {notion}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Asana"
                            ? "font-semibold text-rose-700"
                            : "text-slate-700"
                        }`}
                      >
                        {asana}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "ClickUp"
                            ? "font-semibold text-indigo-700"
                            : "text-slate-700"
                        }`}
                      >
                        {clickup}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">
                        {winner}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-slate-50 via-rose-50 to-indigo-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-slate-900">
                    {averages.notion}
                  </td>
                  <td className="px-4 py-3 font-semibold text-rose-800">
                    {averages.asana}
                  </td>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages.clickup}
                  </td>
                  <td className="px-4 py-3 font-bold text-slate-900">
                    {overallWinner}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Feature comparison */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-slate-800" /> Feature Comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Workflow className="h-5 w-5 text-slate-800" /> Workspace model &
              structure
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.workspace.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Gauge className="h-5 w-5 text-rose-600" /> Project governance &
              reporting
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.governance.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <ClipboardList className="h-5 w-5 text-indigo-600" /> Collaboration
              & knowledge
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.collaboration.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Pricing Snapshots</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
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
          <p className="text-sm text-slate-600">
            SaaS pricing changes often and varies by region, contract length and
            promotions. Use these figures as directional only and confirm
            current pricing and feature limits on each vendor’s website before
            committing.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User Experience & Learning Curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Notion:</strong> Intuitive for docs and simple task
              boards. As your workspace grows, you will need design patterns
              (templates, naming, properties) to keep it scalable.
            </li>
            <li>
              <strong>Asana:</strong> Familiar for anyone used to classic
              project tools. Easy for teams to understand with clear owners,
              dates and timelines.
            </li>
            <li>
              <strong>ClickUp:</strong> Extremely powerful but can feel dense.
              Works best when there is a clear internal “admin” owning the
              configuration and educating the team.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-World Use-Cases & Winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Product and documentation-heavy teams:</strong> Notion
              wins, letting you keep specs, decisions, roadmaps and tasks in one
              interconnected system.
            </li>
            <li>
              <strong>PMOs and delivery organisations:</strong> Asana wins for
              clear project plans, dependencies, portfolios and executive
              reporting. ClickUp is close with the right setup.
            </li>
            <li>
              <strong>Agencies and service teams:</strong> Many agencies pair{" "}
              <strong>Notion</strong> for client hubs and docs with{" "}
              <strong>Asana</strong> or <strong>ClickUp</strong> for execution,
              or choose ClickUp alone as a highly-configured work OS.
            </li>
            <li>
              <strong>Founding teams and small businesses:</strong> Notion or
              ClickUp can both act as an all-in-one OS. Choose Notion if you are
              doc-first, ClickUp if you are operations- and dashboard-first.
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
              <h3 className="text-lg font-semibold">Notion</h3>
              <p className="text-sm text-slate-700">
                Best for teams that want knowledge, docs and projects tightly
                linked, with flexible databases and client or product hubs.
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-900">
                Ideal for: Product teams, agencies, startups, and companies
                building an internal wiki + light project layer.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Asana</h3>
              <p className="text-sm text-slate-700">
                Best for operations and PMO teams managing many structured
                projects with clear timelines, status and owners.
              </p>
              <p className="mt-2 text-sm font-semibold text-rose-700">
                Ideal for: Marketing, operations, program management and
                cross-functional delivery teams.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">ClickUp</h3>
              <p className="text-sm text-slate-700">
                Best for teams that want a customizable work OS with tasks,
                docs, goals, chat and dashboards in one platform.
              </p>
              <p className="mt-2 text-sm font-semibold text-indigo-700">
                Ideal for: Operations-heavy teams, agencies and tech companies
                willing to invest in configuration.
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
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.q}
                </h3>
                <p className="mt-1 text-slate-700">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Back link */}
        <div className="mt-10 flex items-center gap-2 text-sm text-slate-600">
          <Link
            to="/tools"
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-slate-800 ring-1 ring-slate-200 hover:bg-slate-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
