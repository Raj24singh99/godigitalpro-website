import React from "react";
import {
  Sparkles,
  Crown,
  Layers,
  BarChart3,
  ArrowLeft,
  Gauge,
  Briefcase,
  Zap,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "freshworks vs hubspot vs zendesk";
const canonical = buildCanonical("/tools/compare/freshworks-vs-hubspot-vs-zendesk");

const brandMeta = {
  freshworks: {
    gradient: "from-emerald-500 via-teal-500 to-blue-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/freshworks.com",
  },
  hubspot: {
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/hubspot.com",
  },
  zendesk: {
    gradient: "from-indigo-500 via-blue-500 to-slate-600",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/zendesk.com",
  },
};

const contenders = [
  {
    key: "freshworks",
    name: "Freshworks",
    blurb: "Value-friendly CRM/CX suite with sales, marketing, and support tools.",
    url: "https://www.freshworks.com/",
  },
  {
    key: "hubspot",
    name: "HubSpot",
    blurb: "Polished CRM + marketing/sales/service ecosystem with a huge app marketplace.",
    url: "https://www.hubspot.com/",
  },
  {
    key: "zendesk",
    name: "Zendesk",
    blurb: "Enterprise-grade customer support platform with deep omnichannel capabilities.",
    url: "https://www.zendesk.com/",
  },
];

const comparisonRows = [
  {
    label: "Best for",
    freshworks: "SMB/mid-market teams needing value-friendly, unified GTM + support",
    hubspot: "Companies that want a polished CRM + marketing/sales/service ecosystem",
    zendesk: "Support-heavy orgs that need enterprise help desk and governance",
  },
  {
    label: "Sales / CRM",
    freshworks: "Freshsales CRM with pipeline, email, telephony, and AI assistance",
    hubspot: "Mature CRM with sequences, deals, ABM tools, and strong integrations",
    zendesk: "Zendesk Sell exists but Zendesk remains support-first overall",
  },
  {
    label: "Marketing & journeys",
    freshworks: "Freshmarketer journeys, email, and funnels—lighter than HubSpot",
    hubspot: "Marketing Hub with powerful automation, ABM, and attribution reporting",
    zendesk: "Relies on external marketing tools and integrations",
  },
  {
    label: "Support & help desk",
    freshworks: "Freshdesk omnichannel support with decent automation and SLAs",
    hubspot: "Service Hub covers tickets, knowledge base, CSAT, and feedback",
    zendesk: "Deep omnichannel support, routing, and marketplace-driven extensions",
  },
  {
    label: "Pricing feel",
    freshworks: "Value-focused with free/entry tiers and bundles",
    hubspot: "Freemium core CRM; higher hubs/tiers can get premium quickly",
    zendesk: "Priced for serious service teams; can climb with channels & seats",
  },
];

const scoreboard = [
  { label: "Ease of deployment", freshworks: 9.0, hubspot: 8.8, zendesk: 8.2 },
  { label: "Ecosystem depth", freshworks: 8.2, hubspot: 9.5, zendesk: 9.2 },
  { label: "Value for SMB", freshworks: 9.2, hubspot: 8.0, zendesk: 7.8 },
  { label: "Support strength", freshworks: 8.6, hubspot: 8.4, zendesk: 9.5 },
  { label: "Marketing automation", freshworks: 8.0, hubspot: 9.3, zendesk: 7.2 },
];

const pricingTable = [
  {
    plan: "Freshworks (Freshsales/Freshdesk bundles)",
    monthly: "Free tier + paid plans from roughly ~$15/agent/month",
    annual: "Lower per month on annual commitments",
    limits: "Modules and capabilities vary by bundle (CRM, support, omnichannel, etc.)",
    notes: "Strong value for SMB and mid-market teams consolidating tools.",
  },
  {
    plan: "HubSpot Starter / Pro",
    monthly: "From roughly ~$45+/month; scales with hubs and contact tiers",
    annual: "Discounts for annual billing and bundles",
    limits: "Contacts, features, and reporting depth scale with hub tier",
    notes: "Premium, but powerful when you fully use CRM + marketing + sales + service.",
  },
  {
    plan: "Zendesk Suite",
    monthly: "From roughly ~$55+/agent/month for Suite plans",
    annual: "Typically discounted annually for larger teams",
    limits: "Seats, channels, and advanced capabilities increase per tier",
    notes: "Best value when support is a core function at scale.",
  },
];

const featureBullets = {
  crmSales: [
    "Freshworks: Freshsales CRM offers pipelines, email sequences, built-in telephony, and AI-assisted routing at value-friendly price points.",
    "HubSpot: Deep CRM objects, deals, tasks, sequences, and ABM features with strong integrations into the rest of the HubSpot ecosystem.",
    "Zendesk: Zendesk Sell is available, but the platform’s DNA and strength remain primarily in service and support operations.",
  ],
  marketing: [
    "Freshworks: Freshmarketer supports email campaigns, basic journeys, and funnels—enough for many SMBs without marketing ops teams.",
    "HubSpot: Marketing Hub leads with powerful workflows, segmentation, ABM, and attribution reporting across multiple channels.",
    "Zendesk: Typically relies on integrating with specialised marketing tools; Zendesk itself does not try to be a primary marketing platform.",
  ],
  support: [
    "Freshworks: Freshdesk delivers omnichannel ticketing (email, chat, phone, social), SLAs, and automations that work well for SMB/mid-market.",
    "HubSpot: Service Hub adds tickets, knowledge base, NPS/CSAT, and simple automation—strong when you want sales/marketing/service in one place.",
    "Zendesk: Best-in-class support stack with advanced routing, views, macros, and a large marketplace for complex service organisations.",
  ],
};

const faqs = [
  {
    q: `Is Freshworks better than HubSpot in ${YEAR}?`,
    a: "Freshworks is usually better if you prioritise value, fast deployment, and solid-enough CRM + support for SMB/mid-market teams. HubSpot wins when you need a polished CRM plus deep marketing automation, ABM, and a large ecosystem—and you are comfortable paying for that breadth.",
  },
  {
    q: "When should I pick Zendesk?",
    a: "Pick Zendesk when customer support is mission-critical and you need enterprise-grade omnichannel, routing, roles/permissions, and a deep marketplace. It is particularly strong for high-volume ticket environments, B2C support, and multi-brand service operations.",
  },
  {
    q: "Which is best for SMB budgets?",
    a: "Freshworks is typically the best fit for SMB and value-conscious mid-market teams. HubSpot and Zendesk can both become more expensive as you add hubs, channels, and seats, but may be worth it if you fully leverage their ecosystems.",
  },
  {
    q: "Who offers the broadest all-in-one suite?",
    a: "HubSpot leads on a unified CRM + marketing + sales + service ecosystem with strong reporting and integrations. Freshworks covers these areas with lighter but value-friendly products. Zendesk is strongest in support and often pairs with separate CRM and marketing stacks.",
  },
  {
    q: "Which is easier to implement?",
    a: "Freshworks and HubSpot are generally faster to deploy than a heavily customised Zendesk stack. However, Zendesk tends to fit neatly when your priority is upgrading an existing support operation with clear ticketing processes.",
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
  freshworks: {
    pros: [
      "Strong value-for-money across CRM, support, and marketing modules",
      "Good enough depth for most SMB and mid-market use cases",
      "Modern UI and relatively quick to get live with small teams",
    ],
    cons: [
      "Ecosystem and marketplace are smaller than HubSpot and Zendesk",
      "Advanced reporting and automation can feel lighter at scale",
      "May require multiple Freshworks products to match full-suite needs",
    ],
  },
  hubspot: {
    pros: [
      "Polished CRM with deep marketing, sales, and service hubs",
      "Huge app marketplace and strong documentation/education",
      "Excellent for inbound marketing, ABM, and lifecycle automation",
    ],
    cons: [
      "Pricing can climb quickly as you add contacts, hubs, and seats",
      "Overkill for very small teams that just need a simple help desk",
      "Complex setups benefit from dedicated ops/RevOps ownership",
    ],
  },
  zendesk: {
    pros: [
      "Best-in-class omnichannel support toolkit for many enterprises",
      "Mature marketplace with apps for complex service workflows",
      "Strong routing, SLAs, macros, and reporting for high-volume teams",
    ],
    cons: [
      "Support-first; you will still need other tools for CRM and marketing",
      "Can feel heavy and complex for small/simple environments",
      "Enterprise-grade pricing as you layer channels, brands, and add-ons",
    ],
  },
};

const avg = (tool) =>
  (
    scoreboard.reduce((sum, row) => sum + (row[tool] || 0), 0) / scoreboard.length
  ).toFixed(1);

const averages = {
  freshworks: avg("freshworks"),
  hubspot: avg("hubspot"),
  zendesk: avg("zendesk"),
};

const overallWinner = (() => {
  const tools = ["freshworks", "hubspot", "zendesk"];
  const values = tools.map((t) => parseFloat(averages[t]));
  const max = Math.max(...values);
  if (max === parseFloat(averages.freshworks)) return "Freshworks";
  if (max === parseFloat(averages.hubspot)) return "HubSpot";
  return "Zendesk";
})();

const LogoBadge = ({ name }) => {
  const key = name.toLowerCase().includes("fresh")
    ? "freshworks"
    : name.toLowerCase().includes("hubspot")
    ? "hubspot"
    : name.toLowerCase().includes("zendesk")
    ? "zendesk"
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
          <img src={meta.logo} alt={`${name} logo`} className="h-full w-full object-cover" />
        ) : (
          <span className="text-sm font-bold text-white">
            {name.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>
      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${meta.badge}`}>{name}</span>
    </div>
  );
};

export default function FreshworksVsHubSpotVsZendeskPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Freshworks vs HubSpot vs Zendesk (${YEAR}) – CRM & support comparison`}
        description="Compare Freshworks, HubSpot, and Zendesk on pricing, ecosystem depth, support strength, and marketing automation to choose the right CRM/CX platform."
        canonical={canonical}
        keywords={`${primaryKeyword}, crm comparison, helpdesk comparison, cx platform comparison`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          CRM & support platforms
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Freshworks vs HubSpot vs Zendesk ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Freshworks is the value-friendly all-rounder. HubSpot is the polished CRM +
          marketing/sales/service ecosystem. Zendesk is the enterprise-grade support
          specialist. Below is a structured breakdown so you can align the right platform
          with your go-to-market and customer experience strategy.
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
                <Briefcase className="h-5 w-5 text-white/80" />
              </div>
              <p className="relative mt-3 text-sm font-medium text-white/90">{item.blurb}</p>
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
              Choose <strong>Freshworks</strong> if you want a value-focused CRM + support stack
              that is quick to roll out across SMB/mid-market teams. Choose{" "}
              <strong>HubSpot</strong> if you are serious about inbound, ABM, and lifecycle
              automation and are ready to invest in a broader ecosystem. Go with{" "}
              <strong>Zendesk</strong> if your number-one priority is enterprise-grade support
              operations and omnichannel service.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Crown className="h-4 w-4 text-amber-600" /> Overall scoreboard winner:{" "}
              {overallWinner}{" "}
              <span className="text-xs text-slate-600">
                (avg:{" "}
                {overallWinner === "Freshworks"
                  ? averages.freshworks
                  : overallWinner === "HubSpot"
                  ? averages.hubspot
                  : averages.zendesk}
                /10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              The “best” choice depends on whether you operate as a{" "}
              <strong>value-conscious SMB/mid-market</strong> (Freshworks), an{" "}
              <strong>inbound-led GTM machine</strong> (HubSpot), or a{" "}
              <strong>support-centric enterprise</strong> (Zendesk).
            </p>
          </div>
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-emerald-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Freshworks</th>
                  <th className="px-4 py-3">HubSpot</th>
                  <th className="px-4 py-3">Zendesk</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.freshworks}</td>
                    <td className="px-4 py-3 text-slate-700">{row.hubspot}</td>
                    <td className="px-4 py-3 text-slate-700">{row.zendesk}</td>
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
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Criterion</th>
                  <th className="px-4 py-3">Freshworks</th>
                  <th className="px-4 py-3">HubSpot</th>
                  <th className="px-4 py-3">Zendesk</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const scores = {
                    freshworks: row.freshworks,
                    hubspot: row.hubspot,
                    zendesk: row.zendesk,
                  };
                  const [winnerKey] =
                    Object.entries(scores).sort((a, b) => Number(b[1]) - Number(a[1]))[0] || [];
                  const winnerName =
                    contenders.find((c) => c.key === winnerKey)?.name || "Tie";

                  return (
                    <tr key={row.label}>
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "freshworks"
                            ? "font-semibold text-emerald-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.freshworks}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "hubspot"
                            ? "font-semibold text-amber-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.hubspot}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "zendesk"
                            ? "font-semibold text-indigo-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.zendesk}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {winnerName}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-emerald-50 via-amber-50 to-indigo-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.freshworks}
                  </td>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages.hubspot}
                  </td>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages.zendesk}
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
            <Gauge className="h-6 w-6 text-emerald-600" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Briefcase className="h-5 w-5 text-emerald-600" /> CRM & sales execution
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.crmSales.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Zap className="h-5 w-5 text-amber-600" /> Marketing & journeys
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.marketing.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Shield className="h-5 w-5 text-indigo-600" /> Support & help desk
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.support.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Pricing snapshots</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
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
            Pricing for Freshworks, HubSpot, and Zendesk changes frequently and depends on seats,
            hubs/modules, and promos. Always confirm current pricing and per-seat/per-contact
            structure on their official pricing pages before committing.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & implementation</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Freshworks:</strong> Typically fast to get up and running for sales and
              support teams. UI is modern and approachable, and bundles help avoid “Frankenstack”
              setups.
            </li>
            <li>
              <strong>HubSpot:</strong> Slick UI with excellent onboarding and education. As you
              add hubs and advanced workflows, a dedicated ops/RevOps owner is helpful to keep it
              clean.
            </li>
            <li>
              <strong>Zendesk:</strong> Very powerful for service teams, but configuration can be
              complex—especially with multiple brands, channels, and custom workflows.
            </li>
          </ul>
        </section>

        {/* Real-world use-cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>SMB and mid-market GTM teams:</strong> Freshworks often wins with solid CRM +
              support at palatable price points, especially when you want to consolidate tools.
            </li>
            <li>
              <strong>Inbound-led B2B SaaS and revenue teams:</strong> HubSpot wins when inbound,
              ABM, and lifecycle automation are central to your GTM model.
            </li>
            <li>
              <strong>High-volume B2C or enterprise support centres:</strong> Zendesk wins with
              omnichannel support, sophisticated routing, and a deep app marketplace.
            </li>
            <li>
              <strong>Agencies and consultants:</strong> HubSpot or Freshworks can both work well,
              depending on whether you lean more into marketing automation (HubSpot) or value and
              support delivery (Freshworks).
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
              <h3 className="text-lg font-semibold">Freshworks</h3>
              <p className="text-sm text-slate-700">
                Best when you want a practical, affordable CRM + support stack that you can roll
                out quickly without a huge ops team.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: Value-conscious SMBs, mid-market sales/support teams, and companies
                consolidating multiple point tools.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">HubSpot</h3>
              <p className="text-sm text-slate-700">
                Best when your growth engine is inbound, content, or ABM and you want CRM,
                marketing, sales, and service in one platform.
              </p>
              <p className="mt-2 text-sm font-semibold text-amber-700">
                Ideal for: B2B SaaS, agencies, and revenue teams that can fully use advanced
                marketing and sales automation.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Zendesk</h3>
              <p className="text-sm text-slate-700">
                Best when support is mission-critical and you need robust ticketing, routing, and
                omnichannel service at scale.
              </p>
              <p className="mt-2 text-sm font-semibold text-indigo-700">
                Ideal for: B2C apps, marketplaces, and enterprises with complex service orgs.
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
            <ArrowLeft className="h-4 w-4" /> Back to Tools hub
          </Link>
        </div>
      </div>
    </main>
  );
}
