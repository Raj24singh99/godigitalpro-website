import React from "react";
import {
  Sparkles,
  Crown,
  Layers,
  BarChart3,
  ArrowLeft,
  Gauge,
  Zap,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "hubspot vs pipedrive vs zoho";
const canonical = buildCanonical("/tools/compare/hubspot-vs-pipedrive-vs-zoho");

const brandMeta = {
  hubspot: {
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/hubspot.com",
  },
  pipedrive: {
    gradient: "from-emerald-500 via-teal-500 to-indigo-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/pipedrive.com",
  },
  zoho: {
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/zoho.com",
  },
};

const contenders = [
  {
    key: "hubspot",
    name: "HubSpot",
    blurb: "Full marketing + sales + attribution in one platform.",
    url: "https://www.hubspot.com/",
  },
  {
    key: "pipedrive",
    name: "Pipedrive",
    blurb: "Pipeline-first CRM that SDRs love for speed.",
    url: "https://www.pipedrive.com/",
  },
  {
    key: "zoho",
    name: "Zoho",
    blurb: "Broadest suite with strong value across apps.",
    url: "https://www.zoho.com/",
  },
];

const comparisonRows = [
  {
    label: "Best for",
    hubspot: "Lifecycle marketing + CRM + attribution in one stack",
    pipedrive: "Pipeline-centric sales teams focused on speed and simplicity",
    zoho: "Teams wanting broad business apps (CRM, desk, projects, analytics)",
  },
  {
    label: "Pipeline usability",
    hubspot:
      "Strong pipeline views with automation and forecasting; tied into marketing hub.",
    pipedrive:
      "Fast, clean pipeline-focused UI; built for reps to move deals quickly.",
    zoho: "Flexible pipelines, but busier UI; benefits from customization.",
  },
  {
    label: "Marketing automation",
    hubspot:
      "Deepest marketing + sales automation, lead scoring, and attribution.",
    pipedrive: "Email sequences and basic automation; focused on sales motions.",
    zoho:
      "Good automation across the suite; not as deep in marketing as HubSpot.",
  },
  {
    label: "Reporting & attribution",
    hubspot:
      "Excellent multi-touch attribution and lifecycle reporting across hubs.",
    pipedrive:
      "Great sales reporting and forecasting; lighter marketing attribution.",
    zoho: "Solid reports; attribution less advanced than HubSpot.",
  },
  {
    label: "Ecosystem / integrations",
    hubspot:
      "Large app marketplace; strong native integrations across hubs.",
    pipedrive:
      "Good integrations for sales stack; marketplace covers essentials.",
    zoho:
      "Very wide suite; integrations plus native apps for many functions.",
  },
  {
    label: "Value for money",
    hubspot: "Powerful but can be pricey as seats/hubs grow.",
    pipedrive: "Great value for sales teams needing speed without bloat.",
    zoho: "Strong value with broad functionality across apps.",
  },
];

const scoreboard = [
  { label: "Pipeline usability", scores: { hubspot: 8.8, pipedrive: 9.4, zoho: 8.2 } },
  { label: "Marketing automation", scores: { hubspot: 9.5, pipedrive: 7.2, zoho: 8.0 } },
  { label: "Reporting & attribution", scores: { hubspot: 9.0, pipedrive: 8.0, zoho: 8.2 } },
  { label: "Ecosystem / integrations", scores: { hubspot: 9.3, pipedrive: 8.7, zoho: 9.0 } },
  { label: "Value for money", scores: { hubspot: 7.8, pipedrive: 9.0, zoho: 9.2 } },
];

const avg = (key) => {
  const total = scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0);
  return (total / scoreboard.length).toFixed(1);
};

const averages = {
  hubspot: avg("hubspot"),
  pipedrive: avg("pipedrive"),
  zoho: avg("zoho"),
};

const overallWinnerKey = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const prettyNames = {
  hubspot: "HubSpot",
  pipedrive: "Pipedrive",
  zoho: "Zoho",
};

const pricingTable = [
  {
    plan: "HubSpot Starter / Pro",
    monthly: "From ~ $45 / ~ $800",
    annual: "Lower effective price on annual",
    limits: "Marketing + sales hubs; pricing scales with contacts and seats",
    notes: "Best for teams needing lifecycle marketing + CRM + attribution in one platform.",
  },
  {
    plan: "Pipedrive Advanced / Professional",
    monthly: "From ~ $27 / ~ $49",
    annual: "Lower on annual plans",
    limits: "Sales pipelines, automations, docs/signatures",
    notes: "Best for sales teams needing fast pipelines and automations without extra bloat.",
  },
  {
    plan: "Zoho CRM Plus",
    monthly: "From ~ $57",
    annual: "Lower on annual plans",
    limits: "CRM + desk + projects + campaigns + analytics",
    notes: "Best for value across many functions if you adopt the broader Zoho suite.",
  },
];

const featureBullets = {
  pipeline: [
    "HubSpot: Strong opportunity views with forecasting and activity timelines tied to marketing context.",
    "Pipedrive: Highly visual kanban-style pipelines built for reps to drag-and-drop deals quickly.",
    "Zoho: Flexible stages and fields; benefits from heavier configuration for complex processes.",
  ],
  automation: [
    "HubSpot: Deep workflows across marketing, sales, and service with scoring and branching logic.",
    "Pipedrive: Focused on sales automations like follow-ups, task creation, and stage-based triggers.",
    "Zoho: Good cross-app automations via Zoho Flow and blueprints when the wider suite is adopted.",
  ],
  ecosystem: [
    "HubSpot: Mature app marketplace plus native hubs (Marketing, Sales, Service, CMS, Operations).",
    "Pipedrive: Integrates well with calling tools, prospecting, and sales engagement add-ons.",
    "Zoho: Very broad native suite (Books, Desk, Projects, Campaigns) under one vendor contract.",
  ],
};

const faqs = [
  {
    q: `Is HubSpot better than Pipedrive or Zoho in ${YEAR}?`,
    a: "HubSpot wins when you need marketing automation, CRM, and attribution tightly integrated. Pipedrive is better for pure sales teams that want a fast pipeline tool. Zoho is strongest on breadth and value if you will adopt multiple apps across sales, support, and operations.",
  },
  {
    q: "Which is best for pure sales teams?",
    a: "Pipedrive. Its pipeline-first UI, automations, and reporting are tuned for sales reps and managers who live in the pipeline daily.",
  },
  {
    q: "Which is most affordable for broad capabilities?",
    a: "Zoho CRM Plus. It bundles CRM, help desk, projects, campaigns, and analytics at strong value, especially when multiple teams (sales, support, ops) use the suite.",
  },
  {
    q: "Which is best for lifecycle marketing + CRM?",
    a: "HubSpot. It has deep marketing automation, lead scoring, and multi-touch attribution with a native CRM, making it ideal for lifecycle-driven GTM teams.",
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

const prosCons = {
  hubspot: {
    pros: [
      "Deep marketing + sales automation and attribution",
      "Large app marketplace and strong native hubs",
      "Great for lifecycle marketing and revenue teams",
    ],
    cons: [
      "Can get expensive as contacts and seats grow",
      "More to configure than pipeline-only CRMs",
    ],
  },
  pipedrive: {
    pros: [
      "Fast, rep-friendly pipeline UI built for speed",
      "Solid automations for sales motions and follow-ups",
      "Good value for teams focused on pipeline execution",
    ],
    cons: [
      "Lighter on marketing automation and attribution",
      "Broader CX capabilities require add-ons or integrations",
    ],
  },
  zoho: {
    pros: [
      "Broad suite (CRM, desk, projects, campaigns, analytics)",
      "Strong value when multiple teams adopt Zoho apps",
      "Good customization and extensibility",
    ],
    cons: [
      "UI can feel busy and less polished than HubSpot or Pipedrive",
      "Attribution and marketing depth below HubSpot",
      "Suite cohesion varies by app; rollout needs ownership",
    ],
  },
};

const LogoBadge = ({ name }) => {
  const key = name.toLowerCase().includes("hubspot")
    ? "hubspot"
    : name.toLowerCase().includes("pipedrive")
    ? "pipedrive"
    : name.toLowerCase().includes("zoho")
    ? "zoho"
    : name.toLowerCase();

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

export default function HubSpotVsPipedriveVsZohoPage() {
  const overallWinnerLabel = prettyNames[overallWinnerKey] || overallWinnerKey;

  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`HubSpot vs Pipedrive vs Zoho (${YEAR}) – CRM platform comparison`}
        description="Compare HubSpot, Pipedrive, and Zoho on pipelines, marketing automation, reporting, integrations, pricing, and best-fit use-cases to choose the right CRM platform."
        canonical={canonical}
        keywords={`${primaryKeyword}, crm comparison, marketing automation, hubspot vs pipedrive, hubspot vs zoho, sales crm tools`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          CRM & marketing platforms
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          HubSpot vs Pipedrive vs Zoho ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          HubSpot leads on <strong>marketing + sales + attribution in one stack</strong>. Pipedrive
          is the <strong>pipeline-first CRM</strong> loved by sales teams for speed. Zoho offers the{" "}
          <strong>broadest suite and strongest value</strong> if you adopt multiple apps across
          sales, support, and operations. Below is a structured breakdown to help you pick the right
          CRM for your motion.
        </p>

        {/* Top contender cards – very similar layout */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {contenders.map((item) => (
            <a
              key={item.key}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
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
              </div>
              <p className="relative mt-3 text-sm font-medium text-white/90">
                {item.blurb}
              </p>
            </a>
          ))}
        </div>

        {/* Quick verdict + overall winner – mirrored structure */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-emerald-100 bg-emerald-50 px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-emerald-900">
              <Sparkles className="h-5 w-5" />
              <p className="text-lg font-semibold">Quick verdict</p>
            </div>
            <p className="mt-2 text-slate-800">
              Choose <strong>HubSpot</strong> if you want{" "}
              <strong>lifecycle marketing, CRM, and attribution</strong> in one platform. Pick{" "}
              <strong>Pipedrive</strong> when your priority is a{" "}
              <strong>fast, rep-friendly pipeline CRM</strong>. Go with <strong>Zoho</strong> if you
              want a <strong>wide suite (CRM, desk, projects, analytics)</strong> at strong value and
              are ready to lean into the ecosystem.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Crown className="h-4 w-4 text-amber-600" /> Overall scoreboard winner:{" "}
              {overallWinnerLabel}{" "}
              <span className="text-xs text-slate-600">
                (avg: {averages[overallWinnerKey]}/10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              The “best” choice depends on whether you are optimising for{" "}
              <strong>marketing-led revenue (HubSpot)</strong>,{" "}
              <strong>pure sales execution (Pipedrive)</strong>, or{" "}
              <strong>suite value across teams (Zoho)</strong>.
            </p>
          </div>
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-emerald-700" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">HubSpot</th>
                  <th className="px-4 py-3">Pipedrive</th>
                  <th className="px-4 py-3">Zoho</th>
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
                    <td className="px-4 py-3 text-slate-700">{row.hubspot}</td>
                    <td className="px-4 py-3 text-slate-700">{row.pipedrive}</td>
                    <td className="px-4 py-3 text-slate-700">{row.zoho}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Scoreboard */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <BarChart3 className="h-6 w-6 text-indigo-700" /> Scoreboard (1–10)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Criterion</th>
                  <th className="px-4 py-3">HubSpot</th>
                  <th className="px-4 py-3">Pipedrive</th>
                  <th className="px-4 py-3">Zoho</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const entries = Object.entries(row.scores);
                  const [winnerKey] =
                    entries.sort((a, b) => Number(b[1]) - Number(a[1]))[0] || [];
                  const winnerName = prettyNames[winnerKey] || "";

                  return (
                    <tr key={row.label}>
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "hubspot"
                            ? "font-semibold text-amber-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.hubspot}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "pipedrive"
                            ? "font-semibold text-emerald-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.pipedrive}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "zoho"
                            ? "font-semibold text-indigo-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.zoho}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">
                        {winnerName}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-amber-50 via-emerald-50 to-indigo-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages.hubspot}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.pipedrive}
                  </td>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages.zoho}
                  </td>
                  <td className="px-4 py-3 font-bold text-slate-900">
                    {overallWinnerLabel}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Feature comparison – mirrors “Feature Comparison” section */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-emerald-700" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Zap className="h-5 w-5 text-emerald-700" /> Pipelines & deal management
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.pipeline.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Workflow className="h-5 w-5 text-indigo-700" /> Automations & journeys
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.automation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Layers className="h-5 w-5 text-amber-700" /> Ecosystem & suite play
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.ecosystem.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing snapshots – same pattern */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Pricing snapshots (approximate)</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Monthly (approx.)</th>
                  <th className="px-4 py-3">Annual / term</th>
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
                    <td className="px-4 py-3 text-slate-700">{row.monthly}</td>
                    <td className="px-4 py-3 text-slate-700">{row.annual}</td>
                    <td className="px-4 py-3 text-slate-700">{row.limits}</td>
                    <td className="px-4 py-3 text-slate-700">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600">
            Pricing for HubSpot, Pipedrive, and Zoho changes frequently and varies by region,
            contacts, seats, and bundles. Always check the official pricing pages and model total
            cost of ownership (TCO) before committing.
          </p>
        </section>

        {/* UX & learning curve – mirrored from newsletter page */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>HubSpot:</strong> Feels like a{" "}
              <strong>marketing + sales platform</strong>. There is more surface area, but marketing
              and revenue teams get a unified workspace across campaigns, contacts, and deals.
            </li>
            <li>
              <strong>Pipedrive:</strong> Very <strong>rep-friendly</strong>. Most users live in the
              pipeline board and activities views, making adoption easier for outbound and closing
              teams.
            </li>
            <li>
              <strong>Zoho:</strong> UX can feel denser, but offers{" "}
              <strong>lots of capability under one login</strong>. Best when you have an ops owner
              who will structure the suite.
            </li>
          </ul>
        </section>

        {/* Real-world use-cases & winners */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Marketing-led B2B SaaS or services:</strong> HubSpot wins with lifecycle
              journeys, content + CRM, and attribution.
            </li>
            <li>
              <strong>Outbound-heavy SDR/AE teams:</strong> Pipedrive wins with fast pipelines, call
              notes, and simple automations.
            </li>
            <li>
              <strong>SMBs wanting one vendor for many tools:</strong> Zoho wins with CRM, desk,
              projects, and analytics under one roof.
            </li>
            <li>
              <strong>Agencies managing multiple client CRMs:</strong> Depends on client type – many
              agencies run HubSpot for marketing-led clients and Pipedrive for sales-heavy ones;
              Zoho can make sense when clients also adopt Zoho Desk/Books/Projects.
            </li>
          </ul>
        </section>

        {/* Pros & Cons */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        {/* Who wins for… – mirrored structure */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Who wins for…</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">HubSpot</h3>
              <p className="text-sm text-slate-700">
                Best when marketing, sales, and sometimes support need{" "}
                <strong>one shared revenue stack</strong> with strong automation and attribution.
              </p>
              <p className="mt-2 text-sm font-semibold text-amber-700">
                Ideal for: B2B SaaS, inbound-heavy services, and teams investing in content +
                lifecycle marketing.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Pipedrive</h3>
              <p className="text-sm text-slate-700">
                Best for sales teams that want a <strong>clean, fast pipeline tool</strong> without
                deploying a full marketing cloud.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: Outbound teams, agencies running pure sales motions, and founders who
                want simplicity.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Zoho</h3>
              <p className="text-sm text-slate-700">
                Best for businesses that want <strong>lots of apps from one vendor</strong> and are
                willing to invest in configuration.
              </p>
              <p className="mt-2 text-sm font-semibold text-indigo-700">
                Ideal for: Price-sensitive SMBs, operationally-minded companies, and teams wanting
                CRM + desk + projects + finance in one ecosystem.
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
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-emerald-700 ring-1 ring-emerald-100 hover:bg-emerald-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
