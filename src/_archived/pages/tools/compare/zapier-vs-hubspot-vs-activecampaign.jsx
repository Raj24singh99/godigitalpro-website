import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  Zap,
  Crown,
  ArrowLeft,
  Workflow,
  PlugZap,
  BarChart3,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "zapier vs hubspot vs activecampaign";
const canonical = buildCanonical(
  "/tools/compare/zapier-vs-hubspot-vs-activecampaign"
);

const brandMeta = {
  zapier: {
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/zapier.com",
  },
  hubspot: {
    gradient: "from-orange-500 via-amber-500 to-rose-500",
    badge: "bg-orange-100 text-orange-900",
    logo: "https://logo.clearbit.com/hubspot.com",
  },
  activecampaign: {
    gradient: "from-blue-600 via-indigo-600 to-violet-600",
    badge: "bg-blue-100 text-blue-900",
    logo: "https://logo.clearbit.com/activecampaign.com",
  },
};

const contenders = [
  {
    key: "zapier",
    name: "Zapier",
    blurb: "Vendor-neutral automation layer with 6,000+ connectors and AI builder.",
    url: "https://zapier.com/",
  },
  {
    key: "hubspot",
    name: "HubSpot",
    blurb: "Unified CRM + marketing + sales + CMS in one GTM platform.",
    url: "https://www.hubspot.com/",
  },
  {
    key: "activecampaign",
    name: "ActiveCampaign",
    blurb: "SMB-focused email, CRM, and customer experience automation.",
    url: "https://www.activecampaign.com/",
  },
];

const comparisonRows = [
  {
    label: "Primary focus",
    zapier: "Vendor-neutral automation + glue for 6,000+ SaaS apps.",
    hubspot: "Unified CRM, marketing, CMS, and sales tools.",
    activecampaign: "Lifecycle email, CRM, and customer experience automation.",
  },
  {
    label: "Best at",
    zapier: "Stitching any stack together quickly with AI builder and templates.",
    hubspot: "Managing marketing/sales/outreach in one data model.",
    activecampaign:
      "Personalized email/SMS journeys tied to deals & pipelines.",
  },
  {
    label: "Automation depth",
    zapier: "Multi-step zaps, branching, loops, Tables, Interfaces.",
    hubspot:
      "Visual workflows tied to CRM objects, scoring, SLAs, attribution.",
    activecampaign:
      "Conditional email paths, lead scoring, native CRM automations.",
  },
  {
    label: "Data ownership",
    zapier: "Lives between tools; keeps each system in sync.",
    hubspot: "Data lives natively in HubSpot CRM.",
    activecampaign: "Contacts/deals live in ActiveCampaign CRM.",
  },
  {
    label: "When to pick",
    zapier: "You use many specialized tools and need flexibility.",
    hubspot: "You want an all-in-one GTM platform.",
    activecampaign: "You’re an SMB prioritizing email-driven revenue.",
  },
];

const scoreboard = [
  {
    label: "Speed to connect apps",
    scores: { zapier: 9.5, hubspot: 7.8, activecampaign: 7.5 },
  },
  {
    label: "All-in-one capabilities",
    scores: { zapier: 7.2, hubspot: 9.4, activecampaign: 8.2 },
  },
  {
    label: "Marketing automation depth",
    scores: { zapier: 8.5, hubspot: 9.2, activecampaign: 9.0 },
  },
  {
    label: "Pricing flexibility",
    scores: { zapier: 8.0, hubspot: 7.1, activecampaign: 8.6 },
  },
  {
    label: "Scalability & governance",
    scores: { zapier: 8.8, hubspot: 9.3, activecampaign: 7.8 },
  },
];

const avg = (key) => {
  const total = scoreboard.reduce(
    (sum, row) => sum + (row.scores[key] || 0),
    0
  );
  return (total / scoreboard.length).toFixed(1);
};

const averages = {
  zapier: avg("zapier"),
  hubspot: avg("hubspot"),
  activecampaign: avg("activecampaign"),
};

const overallWinnerKey = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const winnerLabelMap = {
  zapier: "Zapier",
  hubspot: "HubSpot",
  activecampaign: "ActiveCampaign",
};

const overallWinnerLabel = winnerLabelMap[overallWinnerKey];

const pricingTable = [
  {
    plan: "Zapier Professional",
    monthly: "From ~$73/mo",
    annual: "~$61/mo billed annually",
    limits: "Unlimited zaps, higher task caps, Webhooks, AI actions",
    notes: "Pay for task volume; seats are effectively free until Team tier.",
  },
  {
    plan: "HubSpot Marketing Pro",
    monthly: "From ~$890/mo",
    annual: "Annual contracts + onboarding fee",
    limits: "2,000 marketing contacts, full CRM + workflows, reporting",
    notes: "Pricing scales quickly with contacts and additional hubs.",
  },
  {
    plan: "ActiveCampaign Marketing + Sales Pro",
    monthly: "From ~$149/mo",
    annual: "Discounted annual contracts",
    limits: "Tiered by contacts; includes CRM, automations, attribution",
    notes: "Strong value for SMBs needing CRM + messaging automation.",
  },
];

const featureBullets = {
  automation: [
    "Zapier: Point-and-click automation builder with multi-step zaps, branching, loops, and AI-assisted zap creation.",
    "HubSpot: Visual workflows on contacts, deals, companies, and tickets with scoring, SLAs, and lifecycle automation.",
    "ActiveCampaign: Rich journey builder for email/SMS with conditional logic, goal tracking, and native CRM triggers.",
  ],
  dataModel: [
    "Zapier: Sits in the middle and syncs data between tools like HubSpot, ActiveCampaign, Slack, Stripe, and more.",
    "HubSpot: Acts as the primary source of truth for contacts, companies, deals, and marketing attribution.",
    "ActiveCampaign: Compact CRM focused on contacts, deals, and engagement events to power targeted campaigns.",
  ],
  governance: [
    "Zapier: Folder-based organisation, shared workspaces, roles, and logs—best when paired with a primary CRM.",
    "HubSpot: Enterprise-grade permissions, audit logs, teams, and approvals across marketing and sales hubs.",
    "ActiveCampaign: Role-based access control and approvals suitable for growing SMBs with lean teams.",
  ],
};

const faqs = [
  {
    q: `Is Zapier better than HubSpot or ActiveCampaign in ${YEAR}?`,
    a: "Zapier wins when you need to connect dozens of tools and orchestrate data between them. HubSpot wins when you want CRM, marketing, CMS, and reporting under one login. ActiveCampaign wins if lifecycle email and messaging are your main growth levers.",
  },
  {
    q: "Can Zapier replace HubSpot?",
    a: "No. Zapier is an automation/integration layer, not a CRM or marketing suite. It complements HubSpot by syncing data, triggering workflows externally, and connecting HubSpot to tools it does not natively integrate with.",
  },
  {
    q: "When should I choose HubSpot or ActiveCampaign instead of Zapier?",
    a: "Choose HubSpot or ActiveCampaign when you want a built-in CRM plus marketing engine where most workflows run natively. Zapier still fits on top to push/pull data, but the heavy lifting happens inside the suite.",
  },
  {
    q: "Do HubSpot and ActiveCampaign integrate with Zapier?",
    a: "Yes. Both tools offer native Zapier connectors and robust APIs. Many teams run HubSpot or ActiveCampaign + Zapier for the best of both worlds: a central CRM plus flexible automation across the rest of the stack.",
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
  zapier: {
    pros: [
      "Fastest way to connect disparate SaaS tools",
      "AI builder, templates, and thousands of ready-made zaps",
      "Neutral glue that scales with your existing stack",
    ],
    cons: [
      "Task-based pricing can get expensive at very high volumes",
      "No built-in CRM, reporting, or engagement analytics",
    ],
  },
  hubspot: {
    pros: [
      "Single source of truth for GTM teams (CRM, marketing, sales, CMS)",
      "Best-in-class marketing automation UX and reporting",
      "Deep ecosystem of apps, templates, and solutions partners",
    ],
    cons: [
      "Pricing scales quickly with contacts and extra hubs/modules",
      "May feel heavy if you only need email and basic CRM",
    ],
  },
  activecampaign: {
    pros: [
      "Affordable SMB CRM + email/SMS automation",
      "Deep personalisation with tags, segments, and conditional paths",
      "Native site tracking, lead scoring, and attribution",
    ],
    cons: [
      "Smaller ecosystem and brand gravity than HubSpot",
      "Less suited as a cross-stack integration hub compared to Zapier",
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

export default function ZapierVsHubspotVsActivecampaignPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Zapier vs HubSpot vs ActiveCampaign (${YEAR}) – Automation & CRM comparison`}
        description="Compare Zapier, HubSpot, and ActiveCampaign for automation, CRM, marketing workflows, pricing, and governance. See which stack fits your GTM team best."
        canonical={canonical}
        keywords={`${primaryKeyword}, automation tools comparison, CRM automation`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Automation & CRM platforms
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Zapier vs HubSpot vs ActiveCampaign ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Zapier is the neutral automation layer that connects almost anything.
          HubSpot is the all-in-one CRM + marketing + sales + CMS suite.
          ActiveCampaign gives SMBs powerful lifecycle campaigns and CRM at a
          friendlier price point. This breakdown compares them on automation
          depth, data model, pricing, and which combinations work best in the
          real world.
        </p>

        {/* Top contender cards */}
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
                <Sparkles className="h-5 w-5 text-white/80" />
              </div>
              <p className="relative mt-3 text-sm font-medium text-white/90">
                {item.blurb}
              </p>
            </a>
          ))}
        </div>

        {/* Quick verdict + overall winner */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-emerald-100 bg-emerald-50 px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-emerald-900">
              <Sparkles className="h-5 w-5" />
              <p className="text-lg font-semibold">Quick verdict</p>
            </div>
            <p className="mt-2 text-slate-800">
              Choose <strong>Zapier</strong> when your stack spans many
              best-of-breed tools and you need neutral glue. Choose{" "}
              <strong>HubSpot</strong> when you want CRM, marketing,
              conversations, and reporting under one login. Choose{" "}
              <strong>ActiveCampaign</strong> when lifecycle email/SMS and
              leaner CRM are the core of your go-to-market.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Crown className="h-4 w-4 text-amber-600" /> Overall scoreboard
              winner: {overallWinnerLabel}{" "}
              <span className="text-xs text-slate-600">
                (avg: {averages[overallWinnerKey]}/10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              In practice, teams often run{" "}
              <strong>HubSpot or ActiveCampaign as the core CRM</strong> and
              add <strong>Zapier on top</strong> to integrate everything else.
              The “winner” is usually the right combination, not a single tool.
            </p>
          </div>
        </div>

        {/* Context cards */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:col-span-1">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Workflow className="h-5 w-5 text-indigo-700" /> When to go
              Zapier-first
            </div>
            <p className="text-sm text-slate-700">
              If your GTM stack spans dozens of niche tools (forms, billing,
              CS, product analytics), Zapier keeps data flowing without forcing
              a rip-and-replace to a monolithic suite.
            </p>
          </div>
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <PlugZap className="h-5 w-5 text-amber-700" /> When suites win
            </div>
            <p className="text-sm text-slate-700">
              If you want to onboard sales, marketing, and leadership into the
              same UI with shared reports and SLAs, HubSpot or ActiveCampaign
              provide a native, less-fragile experience.
            </p>
          </div>
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Gauge className="h-5 w-5 text-sky-700" /> Common hybrid stack
            </div>
            <p className="text-sm text-slate-700">
              A popular pattern: HubSpot or ActiveCampaign as system of record
              + Zapier as the integration/automation fabric for finance, ops,
              and product data.
            </p>
          </div>
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-emerald-600" /> Side-by-side
            comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Zapier</th>
                  <th className="px-4 py-3">HubSpot</th>
                  <th className="px-4 py-3">ActiveCampaign</th>
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
                    <td className="px-4 py-3 text-slate-700">{row.zapier}</td>
                    <td className="px-4 py-3 text-slate-700">{row.hubspot}</td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.activecampaign}
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
            <BarChart3 className="h-6 w-6 text-indigo-600" /> Scoreboard (1–10)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Zapier</th>
                  <th className="px-4 py-3">HubSpot</th>
                  <th className="px-4 py-3">ActiveCampaign</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const { zapier, hubspot, activecampaign } = row.scores;
                  const maxScore = Math.max(zapier, hubspot, activecampaign);
                  const winner =
                    maxScore === zapier
                      ? "Zapier"
                      : maxScore === hubspot
                      ? "HubSpot"
                      : "ActiveCampaign";

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
                          winner === "Zapier"
                            ? "font-semibold text-amber-800"
                            : "text-slate-700"
                        }`}
                      >
                        {zapier}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "HubSpot"
                            ? "font-semibold text-orange-800"
                            : "text-slate-700"
                        }`}
                      >
                        {hubspot}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "ActiveCampaign"
                            ? "font-semibold text-blue-800"
                            : "text-slate-700"
                        }`}
                      >
                        {activecampaign}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">
                        {winner}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-amber-50 via-orange-50 to-blue-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages.zapier}
                  </td>
                  <td className="px-4 py-3 font-semibold text-orange-800">
                    {averages.hubspot}
                  </td>
                  <td className="px-4 py-3 font-semibold text-blue-800">
                    {averages.activecampaign}
                  </td>
                  <td className="px-4 py-3 font-bold text-slate-900">
                    {overallWinnerLabel}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Feature comparison */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-emerald-600" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Zap className="h-5 w-5 text-amber-600" /> Automation & workflows
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.automation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Layers className="h-5 w-5 text-indigo-600" /> Data model & source
              of truth
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.dataModel.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Shield className="h-5 w-5 text-sky-600" /> Governance & scale
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.governance.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Pricing snapshots</h2>
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
            Pricing changes frequently and may vary by region, contact volume,
            and promos. Always confirm latest pricing on each vendor’s website
            before committing to a long-term contract.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Zapier:</strong> Very approachable builder; most users can
              ship useful automations in a day. Complexity appears at scale
              (governance, naming conventions, and error handling).
            </li>
            <li>
              <strong>HubSpot:</strong> Polished UX for marketers and sales
              reps. Feels natural once your objects and pipelines are set up,
              but initial implementation requires more planning.
            </li>
            <li>
              <strong>ActiveCampaign:</strong> Campaign builder is visual and
              approachable; CRM is lighter-weight, which appeals to SMB teams
              used to email first, CRM second.
            </li>
          </ul>
        </section>

        {/* Real-world use-cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Product-led SaaS with lots of tools:</strong> Run HubSpot
              or ActiveCampaign as CRM and use Zapier to sync in-product
              events, billing, and support data for rich automation.
            </li>
            <li>
              <strong>Agency managing many SMB clients:</strong> Zapier helps
              standardise common automations across clients, while each client
              uses HubSpot or ActiveCampaign for daily operations.
            </li>
            <li>
              <strong>Lean ecommerce or DTC brand:</strong> ActiveCampaign often
              wins for strong email/SMS automation plus CRM at SMB-friendly
              pricing; Zapier connects it to your store, reviews, and CS tools.
            </li>
            <li>
              <strong>Scale-up with larger sales team:</strong> HubSpot becomes
              more compelling as a unified GTM platform; Zapier is layered on
              for edge cases and long-tail integrations.
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
              <h3 className="text-lg font-semibold">Zapier</h3>
              <p className="text-sm text-slate-700">
                Best when your core tools are already chosen and you need a
                neutral, flexible automation fabric between them.
              </p>
              <p className="mt-2 text-sm font-semibold text-amber-700">
                Ideal for: Ops-focused teams, agencies, and product-led SaaS
                with a long tail of tools.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">HubSpot</h3>
              <p className="text-sm text-slate-700">
                Best when you want marketing, sales, and service teams working
                from a single CRM with shared reporting and automation.
              </p>
              <p className="mt-2 text-sm font-semibold text-orange-700">
                Ideal for: B2B scale-ups, revenue teams, and organisations
                standardising GTM on one platform.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">ActiveCampaign</h3>
              <p className="text-sm text-slate-700">
                Best when lifecycle email/SMS plus a lean CRM are the main
                growth engine and budgets are tighter than HubSpot.
              </p>
              <p className="mt-2 text-sm font-semibold text-blue-700">
                Ideal for: SMBs, ecommerce, and content-driven businesses that
                live inside campaigns.
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
