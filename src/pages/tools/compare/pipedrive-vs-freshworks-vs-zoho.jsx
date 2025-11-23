import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  Type,
  Crown,
  ArrowLeft,
  ShieldCheck,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "pipedrive vs freshworks vs zoho";
const canonical = buildCanonical("/tools/compare/pipedrive-vs-freshworks-vs-zoho");

const brandMeta = {
  pipedrive: {
    gradient: "from-slate-900 via-slate-800 to-indigo-700",
    badge: "bg-slate-100 text-slate-900",
    logo: "https://logo.clearbit.com/pipedrive.com",
  },
  freshworks: {
    gradient: "from-emerald-500 via-teal-500 to-blue-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/freshworks.com",
  },
  zoho: {
    gradient: "from-red-500 via-orange-500 to-amber-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/zoho.com",
  },
};

const contenders = [
  {
    key: "pipedrive",
    name: "Pipedrive",
    blurb: "Pipeline-first CRM for fast-moving, activity-driven sales teams.",
    url: "https://www.pipedrive.com/",
  },
  {
    key: "freshworks",
    name: "Freshworks",
    blurb: "CRM + CX suite that combines sales, support, and marketing modules.",
    url: "https://www.freshworks.com/",
  },
  {
    key: "zoho",
    name: "Zoho",
    blurb: "Broad business app suite with strong CRM and aggressive value pricing.",
    url: "https://www.zoho.com/crm/",
  },
];

const comparisonRows = [
  {
    label: "Primary focus",
    pipedrive: "Sales pipeline speed and adoption",
    freshworks: "Sales + support + omnichannel CX",
    zoho: "Suite breadth and value across apps",
  },
  {
    label: "Best for",
    pipedrive: "SMB sales teams needing fast adoption",
    freshworks: "Teams wanting CRM + helpdesk + telephony",
    zoho: "Price-sensitive teams needing many apps",
  },
  {
    label: "Automation",
    pipedrive: "Sales automations, sequences, activity triggers",
    freshworks: "Sales/marketing/support automations and journeys",
    zoho: "Workflow builder and blueprints across the suite",
  },
  {
    label: "Reporting",
    pipedrive: "Pipeline, activity, and forecast dashboards",
    freshworks: "Sales + support analytics and SLAs",
    zoho: "Custom reports and analytics across modules",
  },
  {
    label: "Pricing feel",
    pipedrive: "Lower than most enterprise CRMs; sales-first tiers",
    freshworks: "Competitive CX bundles; good for all-in-one",
    zoho: "Strong value; bundles for CRM + broader suite",
  },
];

const scoreboard = [
  {
    label: "Pipeline usability",
    scores: { pipedrive: 9.4, freshworks: 8.4, zoho: 8.2 },
  },
  {
    label: "Automation depth",
    scores: { pipedrive: 8.0, freshworks: 8.6, zoho: 8.4 },
  },
  {
    label: "Reporting & forecasting",
    scores: { pipedrive: 8.3, freshworks: 8.1, zoho: 8.0 },
  },
  {
    label: "Suite breadth",
    scores: { pipedrive: 6.5, freshworks: 8.2, zoho: 9.0 },
  },
  {
    label: "Value for money",
    scores: { pipedrive: 9.0, freshworks: 8.5, zoho: 9.2 },
  },
];

const avg = (key) =>
  (
    scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  pipedrive: avg("pipedrive"),
  freshworks: avg("freshworks"),
  zoho: avg("zoho"),
};

const winnerEntry = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0];

const normalizeName = (key) => {
  if (key === "pipedrive") return "Pipedrive";
  if (key === "freshworks") return "Freshworks";
  if (key === "zoho") return "Zoho";
  return key.charAt(0).toUpperCase() + key.slice(1);
};

const winnerKey = winnerEntry[0];
const overallWinner = normalizeName(winnerKey);
const overallAvg = winnerEntry[1];

const prosCons = {
  pipedrive: {
    pros: [
      "Very intuitive, visual pipeline views that sales reps actually use.",
      "Strong focus on activities, sequences, and pipeline hygiene for SMB teams.",
      "Generally faster to roll out and adopt than heavier enterprise CRMs.",
    ],
    cons: [
      "Narrower suite than Freshworks/Zoho; you will rely on integrations for helpdesk/marketing.",
      "Advanced forecasting and RevOps reporting may require add-ons or BI tools.",
      "Less native coverage for non-sales workflows (projects, finance, HR, etc.).",
    ],
  },
  freshworks: {
    pros: [
      "Tight integration between sales CRM, support, and telephony/omnichannel CX.",
      "Good balance of automation across sales, marketing, and support journeys.",
      "Competitive pricing when you want an all-in-one CX stack versus multiple vendors.",
    ],
    cons: [
      "Suite breadth can introduce complexity for smaller teams that only need CRM.",
      "Deep customization and data modelling can require more setup time.",
      "Ecosystem breadth is smaller than Zoho’s full app catalog.",
    ],
  },
  zoho: {
    pros: [
      "Very broad suite (CRM, Desk, Projects, Books, Campaigns, and more) under one umbrella.",
      "Aggressive value pricing, especially with Zoho One bundles.",
      "Flexible workflow builder and Blueprints for process-heavy teams.",
    ],
    cons: [
      "UI and UX can feel less polished than Pipedrive/Freshworks in some modules.",
      "Because the suite is so broad, configuration and governance can be complex.",
      "Adoption may be slower if reps are overwhelmed by options and screens.",
    ],
  },
};

const featureBullets = {
  fit: [
    "Pipedrive fits founder-led and SMB sales teams that want reps to live in the pipeline without heavy training.",
    "Freshworks fits companies that want sales, support, and telephony under one CX umbrella.",
    "Zoho fits organizations that want many business apps in one vendor contract at aggressive pricing.",
  ],
  implementation: [
    "Pipedrive is usually the fastest to implement: import deals, define stages, and go live.",
    "Freshworks implementations often revolve around aligning sales and support workflows, SLAs, and channels.",
    "Zoho implementations benefit from a phased rollout: start with CRM, then add Desk/Books/Campaigns as needed.",
  ],
  migration: [
    "All three support CSV imports and native/third-party migration tools from other CRMs.",
    "Plan data mapping carefully (stages, pipelines, custom fields) before switching to avoid adoption issues.",
    "Use a pilot pipeline or team to validate automations and reports before rolling out across the org.",
  ],
};

const pricingTable = [
  {
    platform: "Pipedrive",
    positioning: "Sales-first CRM with strong pipeline UX.",
    model:
      "Per-user tiers based on features (automation, reporting, permissions).",
    bestFor: "SMBs and agencies that prioritize rep adoption and deal visibility.",
    notes:
      "You may supplement with separate tools for marketing automation and support.",
  },
  {
    platform: "Freshworks",
    positioning: "CRM + CX with sales, support, and telephony.",
    model:
      "Per-agent licensing across CRM and support; bundles available for CX suites.",
    bestFor:
      "Teams wanting a unified view of customer across sales, support, and channels.",
    notes:
      "Pricing scales with number of sales and support agents; can simplify vendor sprawl.",
  },
  {
    platform: "Zoho",
    positioning: "Wide business app suite with aggressive value pricing.",
    model:
      "Per-user CRM tiers or Zoho One bundle covering many apps at once.",
    bestFor:
      "Organizations that want CRM plus finance, projects, support, and more in one ecosystem.",
    notes:
      "Zoho One can be highly cost-effective if you commit to using multiple Zoho apps.",
  },
];

const faqs = [
  {
    q: `Which should I pick in ${YEAR}?`,
    a: "Pick Pipedrive if you want a sales-first CRM that reps adopt quickly. Pick Freshworks if you want sales and support in one CX stack. Pick Zoho if you need the most apps per seat and are willing to invest in setup and governance.",
  },
  {
    q: "Can I migrate from Pipedrive to Zoho or Freshworks later?",
    a: "Yes. All three support imports/exports and have migration tools or partner support. Many teams start with Pipedrive to nail pipeline adoption, then move to Zoho or Freshworks when they need broader suite coverage.",
  },
  {
    q: "Do these CRMs include marketing automation?",
    a: "Freshworks and Zoho both have marketing modules for journeys, campaigns, and segmentation. Pipedrive is primarily sales-focused, with lighter email/sequences, so you may pair it with a dedicated marketing automation tool.",
  },
  {
    q: "Which is easiest for reps to adopt?",
    a: "Pipedrive is usually easiest for pure sales teams due to its simple, visual pipeline. Freshworks and Zoho bring more modules and flexibility, which is powerful but can be heavier for new reps.",
  },
  {
    q: "What if I want a single-vendor stack for most business apps?",
    a: "Zoho is typically the strongest single-vendor option if you adopt multiple apps such as CRM, Desk, Books, Projects, and Campaigns. Freshworks can be a solid single vendor for CX, while Pipedrive is best as the CRM core in a composed stack.",
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

export default function PipedriveVsFreshworksVsZohoPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Pipedrive vs Freshworks vs Zoho – which CRM fits? (${YEAR})`}
        description="Compare Pipedrive, Freshworks, and Zoho on pricing, automation, reporting, and suite breadth so you can pick the CRM that fits your sales team and stack."
        canonical={canonical}
        keywords={`${primaryKeyword}, crm comparison, pipedrive vs zoho, freshworks alternative`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Hero */}
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">
          CRM comparison
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Pipedrive vs Freshworks vs Zoho ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Pipedrive is pipeline-first and rep-friendly, Freshworks combines
          sales and support in one CX stack, and Zoho offers the broadest suite
          for the money. Here is how to compare them across usability,
          automation, reporting, and total cost.
        </p>

        {/* Contender cards */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {contenders.map((tool) => (
            <a
              key={tool.key}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative block overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br ${
                brandMeta[tool.key]?.gradient || "from-slate-500 to-slate-700"
              } p-5 shadow-sm`}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-white" />
                <div className="pointer-events-none absolute -left-10 bottom-0 h-24 w-24 rounded-full bg-white" />
              </div>
              <div className="relative flex items-center justify-between gap-2">
                <LogoBadge name={tool.name} />
                <Sparkles className="h-5 w-5 text-white/80" />
              </div>
              <p className="relative mt-3 text-sm font-medium text-white/90">
                {tool.blurb}
              </p>
            </a>
          ))}
        </div>

        {/* Quick verdict + Top pick */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="space-y-3 rounded-3xl bg-indigo-50/90 p-6 ring-1 ring-indigo-100">
            <div className="flex items-center gap-2 text-lg font-semibold text-indigo-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>Pipedrive</strong> if you want a sales-first CRM
              that reps adopt fast. Choose <strong>Freshworks</strong> when you
              want sales, support, and CX under one roof. Choose{" "}
              <strong>Zoho</strong> if you want the most business apps per
              dollar and are comfortable with a broader, more configurable
              suite.
            </p>
            <p className="text-sm text-slate-700">
              In many go-to-market teams, Pipedrive wins on day-to-day rep
              experience, while Zoho and Freshworks win when leadership wants a
              wider platform strategy.
            </p>
          </div>

          <div className="rounded-3xl border border-indigo-100 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-indigo-700">
              <Crown className="h-4 w-4" />
              <p className="text-sm font-semibold uppercase tracking-wide">
                Overall scoreboard winner
              </p>
            </div>
            <h3 className="mt-2 text-xl font-bold text-slate-900">
              {overallWinner}
            </h3>
            <p className="mt-1 text-sm text-slate-700">
              Average score: {overallAvg}/10
            </p>
            <p className="mt-2 text-sm text-slate-700">
              Take the “winner” as directional only. A lean sales team might
              favor Pipedrive even if Zoho leads on value, while a
              CX-first organization might lean toward Freshworks.
            </p>
          </div>
        </div>

        {/* Best for */}
        <div className="mt-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <div className="text-sm font-semibold text-slate-900">Best for</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <Gauge className="mt-0.5 h-4 w-4 text-slate-700" />
              <span>
                <strong>Pipedrive:</strong> pipeline-first sales teams that want
                reps focused on deals and activities, not admin.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <ShieldCheck className="mt-0.5 h-4 w-4 text-emerald-600" />
              <span>
                <strong>Freshworks:</strong> companies that want CRM, support,
                and sometimes telephony in one CX stack.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Layers className="mt-0.5 h-4 w-4 text-amber-600" />
              <span>
                <strong>Zoho:</strong> teams that want many business apps
                (finance, projects, support, marketing) from a single vendor at
                strong value.
              </span>
            </li>
          </ul>
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-900">
            <Layers className="h-6 w-6 text-indigo-600" />
            Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm text-slate-800 md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Pipedrive</th>
                  <th className="px-4 py-3">Freshworks</th>
                  <th className="px-4 py-3">Zoho</th>
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
                    <td className="px-4 py-3">{row.pipedrive}</td>
                    <td className="px-4 py-3">{row.freshworks}</td>
                    <td className="px-4 py-3">{row.zoho}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Scoreboard */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-900">
            <BarChart3 className="h-6 w-6 text-emerald-600" />
            Scoreboard (1–10)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm text-slate-800 md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Pipedrive</th>
                  <th className="px-4 py-3">Freshworks</th>
                  <th className="px-4 py-3">Zoho</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const { pipedrive, freshworks, zoho } = row.scores;
                  const maxScore = Math.max(pipedrive, freshworks, zoho);
                  const winner =
                    maxScore === pipedrive
                      ? "Pipedrive"
                      : maxScore === freshworks
                      ? "Freshworks"
                      : "Zoho";

                  return (
                    <tr
                      key={row.label}
                      className="align-top odd:bg-white even:bg-slate-50/60"
                    >
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-900">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Pipedrive"
                            ? "font-semibold text-slate-900"
                            : "text-slate-800"
                        }`}
                      >
                        {pipedrive}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Freshworks"
                            ? "font-semibold text-emerald-800"
                            : "text-slate-800"
                        }`}
                      >
                        {freshworks}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Zoho"
                            ? "font-semibold text-amber-800"
                            : "text-slate-800"
                        }`}
                      >
                        {zoho}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {winner}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-slate-50 via-emerald-50 to-amber-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-slate-900">
                    {averages.pipedrive}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.freshworks}
                  </td>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages.zoho}
                  </td>
                  <td className="px-4 py-3 font-bold text-slate-900">
                    {overallWinner}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Fit & implementation notes */}
        <section className="mt-12 space-y-8">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-900">
            <Type className="h-6 w-6 text-slate-700" />
            How they fit into your GTM stack
          </h2>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">
              Product–team fit
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {featureBullets.fit.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">
              Implementation and rollout
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {featureBullets.implementation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">
              Migration considerations
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {featureBullets.migration.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">
            Pricing snapshots (directional)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm text-slate-800 md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Platform</th>
                  <th className="px-4 py-3">Positioning</th>
                  <th className="px-4 py-3">Model</th>
                  <th className="px-4 py-3">Best for</th>
                  <th className="px-4 py-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {pricingTable.map((row) => (
                  <tr key={row.platform}>
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-900">
                      {row.platform}
                    </th>
                    <td className="px-4 py-3">{row.positioning}</td>
                    <td className="px-4 py-3">{row.model}</td>
                    <td className="px-4 py-3">{row.bestFor}</td>
                    <td className="px-4 py-3">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-600">
            Pricing tiers, feature limits, and bundles change frequently. Always
            verify current plans and compare against your user counts and
            required modules (sales, support, marketing, telephony, etc.).
          </p>
        </section>

        {/* Use-case winners */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">Who wins for…</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">
                Fast-moving SMB sales teams
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                <strong>Winner: Pipedrive.</strong> Prioritizes simple pipelines,
                activity tracking, and adoption. Good when you are moving away
                from spreadsheets or heavy CRMs that reps resist using.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">
                Unified sales + support
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                <strong>Winner: Freshworks.</strong> Offers CRM, helpdesk, and
                sometimes telephony/omnichannel CX in one family of tools,
                which simplifies handoff between sales and support.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">
                All-in-one business suite
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                <strong>Winner: Zoho.</strong> With Zoho One and related apps,
                you can cover CRM, finance, support, HR, and projects under one
                vendor—ideal if you want to standardize broadly.
              </p>
            </div>
          </div>
        </section>

        {/* Pros & Cons */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        {/* FAQs */}
        <section className="mt-12 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-xl font-bold text-slate-900">
            FAQs: Pipedrive vs Freshworks vs Zoho
          </h2>
          <div className="mt-4 space-y-2">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200"
              >
                <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-slate-900">
                  {item.q}
                  <span className="text-xl leading-none text-slate-500 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-2 text-sm text-slate-700">{item.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-6 text-sm text-slate-700">
            <Link
              className="inline-flex items-center gap-2 font-semibold text-indigo-700 hover:text-indigo-600"
              to="/tools"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
