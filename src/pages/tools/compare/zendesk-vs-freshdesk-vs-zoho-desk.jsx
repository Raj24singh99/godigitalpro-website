import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  Zap,
  Crown,
  ArrowLeft,
  MessageSquare,
  Shield,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "zendesk vs freshdesk vs zoho desk";
const canonical = buildCanonical(
  "/tools/compare/zendesk-vs-freshdesk-vs-zoho-desk"
);

const brandMeta = {
  zendesk: {
    gradient: "from-emerald-500 via-teal-500 to-indigo-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/zendesk.com",
  },
  freshdesk: {
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/freshdesk.com",
  },
  "zoho desk": {
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/zoho.com",
  },
};

const contenders = [
  {
    key: "zendesk",
    name: "Zendesk",
    blurb: "Enterprise-grade omnichannel support with deep marketplace.",
    url: "/tools/zendesk",
  },
  {
    key: "freshdesk",
    name: "Freshdesk",
    blurb: "Affordable omnichannel helpdesk for SMB and mid-market.",
    url: "/tools/freshdesk",
  },
  {
    key: "zoho desk",
    name: "Zoho Desk",
    blurb: "Helpdesk aligned with the Zoho suite and Zoho One pricing.",
    url: "/tools/zoho-desk",
  },
];

const comparisonRows = [
  {
    label: "Omnichannel depth",
    zendesk:
      "Email, chat, social, telephony, bots, and a strong marketplace for channels.",
    freshdesk: "Email, chat, phone, WhatsApp; solid coverage for SMB/mid.",
    "zoho desk": "Email, chat, phone; aligns with Zoho Channels and CRM.",
  },
  {
    label: "Automation & workflows",
    zendesk:
      "Robust triggers/macros, routing, SLAs, roles, and workspace configuration.",
    freshdesk: "Good automations and SLAs; strong for the price.",
    "zoho desk":
      "Solid automations; gains power when paired with Zoho Flow/CRM.",
  },
  {
    label: "Marketplace & integrations",
    zendesk: "Large marketplace; mature apps for enterprise stacks.",
    freshdesk: "Good marketplace; strong defaults and popular integrations.",
    "zoho desk":
      "Best alignment with Zoho apps; external marketplace is smaller.",
  },
  {
    label: "Reporting & analytics",
    zendesk:
      "Zendesk Explore offers rich dashboards, custom metrics, and exports.",
    freshdesk: "Good reports for queues/SLAs; customizable dashboards.",
    "zoho desk":
      "Solid reporting; deeper when combined with Zoho Analytics/BI tools.",
  },
  {
    label: "Value/pricing",
    zendesk: "Premium pricing that matches enterprise breadth.",
    freshdesk: "Excellent value for SMB/mid-market omnichannel support.",
    "zoho desk":
      "Great value when bought inside the Zoho suite/Zoho One bundle.",
  },
];

const scoreboard = [
  {
    label: "Omnichannel depth",
    scores: { zendesk: 9.4, freshdesk: 8.6, "zoho desk": 8.2 },
  },
  {
    label: "Automation & workflows",
    scores: { zendesk: 9.2, freshdesk: 8.5, "zoho desk": 8.0 },
  },
  {
    label: "Marketplace & integrations",
    scores: { zendesk: 9.3, freshdesk: 8.4, "zoho desk": 7.8 },
  },
  {
    label: "Reporting & analytics",
    scores: { zendesk: 9.0, freshdesk: 8.3, "zoho desk": 8.0 },
  },
  {
    label: "Value/pricing",
    scores: { zendesk: 7.6, freshdesk: 9.0, "zoho desk": 9.2 },
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
  zendesk: avg("zendesk"),
  freshdesk: avg("freshdesk"),
  "zoho desk": avg("zoho desk"),
};

const overallWinnerKey = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const winnerLabelMap = {
  zendesk: "Zendesk",
  freshdesk: "Freshdesk",
  "zoho desk": "Zoho Desk",
};

const overallWinnerLabel = winnerLabelMap[overallWinnerKey];

const pricingTable = [
  {
    plan: "Zendesk Suite",
    monthly: "From ~US$55+/agent",
    annual: "Lower effective rate on annual",
    limits: "Omnichannel, bots, advanced routing, roles, and analytics",
    notes: "Best for enterprise breadth, governance, and marketplace depth.",
  },
  {
    plan: "Freshdesk Pro/Enterprise",
    monthly: "From ~US$18+/agent",
    annual: "Lower effective rate on annual",
    limits: "Omnichannel, automations, SLAs, and basic bots",
    notes: "Great value for SMB/mid with strong channel coverage.",
  },
  {
    plan: "Zoho Desk Professional/Enterprise",
    monthly: "From ~US$20+/agent",
    annual: "Lower on annual; even better in Zoho One",
    limits: "Helpdesk with Zoho suite alignment and integrations",
    notes: "Best if you already use Zoho apps or Zoho One licensing.",
  },
];

const featureBullets = {
  channels: [
    "Zendesk: Deep omnichannel with voice, chat, messaging, social, and app marketplace connectors.",
    "Freshdesk: Omnichannel coverage (email, chat, phone, WhatsApp, social) tuned for SMB/mid-market.",
    "Zoho Desk: Channels are solid and become stronger when paired with Zoho CRM, SalesIQ, and telephony.",
  ],
  automation: [
    "Zendesk: Advanced triggers, macros, workflows, and routing with strong role-based access controls.",
    "Freshdesk: Powerful enough automations and SLAs for most SMB/mid teams at a lower price point.",
    "Zoho Desk: Workflow rules, blueprints, and escalations that compound when linked to Zoho Flow/CRM.",
  ],
  ecosystem: [
    "Zendesk: Large marketplace, strong partner ecosystem, and wide enterprise adoption.",
    "Freshdesk: Good marketplace and native integrations within the Freshworks stack.",
    "Zoho Desk: Tightest alignment with Zoho CRM, Books, Projects, and the wider Zoho suite.",
  ],
};

const faqs = [
  {
    q: `Is Zendesk better than Freshdesk or Zoho Desk in ${YEAR}?`,
    a: "Zendesk leads on omnichannel depth, marketplace, and enterprise controls. Freshdesk wins on value for SMB/mid-market. Zoho Desk is best if you want tight alignment with the Zoho suite and Zoho One pricing.",
  },
  {
    q: "Which is most affordable?",
    a: "Freshdesk and Zoho Desk are more affordable for most SMB/mid teams. Zendesk tends to be pricier but offers deeper enterprise capabilities and integrations.",
  },
  {
    q: "Which fits enterprise needs?",
    a: "Zendesk. It has the strongest admin controls, routing, analytics, and marketplace for complex support environments.",
  },
  {
    q: "Which fits if we use Zoho apps?",
    a: "Zoho Desk. It integrates natively with Zoho CRM, Books, Projects, and other Zoho tools, and Zoho One licensing can be very cost-effective.",
  },
  {
    q: "Which is easiest to roll out for SMB?",
    a: "Freshdesk, thanks to friendly UI, good defaults, and strong channel coverage at a lower price.",
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
  zendesk: {
    pros: [
      "Deep omnichannel and extensive marketplace",
      "Strong automation, routing, and SLAs",
      "Enterprise-grade admin and security controls",
      "Robust analytics and dashboards (Zendesk Explore)",
    ],
    cons: [
      "Higher cost at scale",
      "Requires thoughtful setup to unlock full value",
      "Can feel heavy for very small teams",
    ],
  },
  freshdesk: {
    pros: [
      "Excellent value for SMB/mid-market teams",
      "Good omnichannel coverage (email, chat, phone, WhatsApp)",
      "Solid automations, SLAs, and canned responses",
      "Friendly UI and faster rollout",
    ],
    cons: [
      "Less enterprise depth vs Zendesk",
      "Marketplace smaller than Zendesk’s",
      "Advanced analytics not as rich as Zendesk Explore",
    ],
  },
  "zoho desk": {
    pros: [
      "Aligned with Zoho suite and Zoho One pricing",
      "Solid helpdesk + automations for growing teams",
      "Great value when you adopt multiple Zoho apps",
    ],
    cons: [
      "Smaller external marketplace",
      "Some advanced setups need broader Zoho ecosystem know-how",
      "Omnichannel depth still behind Zendesk in many regions",
    ],
  },
};

const LogoBadge = ({ name }) => {
  const lowered = name.toLowerCase();
  const key = lowered.includes("zendesk")
    ? "zendesk"
    : lowered.includes("freshdesk")
    ? "freshdesk"
    : lowered.includes("zoho")
    ? "zoho desk"
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
      <span
        className={`rounded-full px-3 py-1 text-xs font-semibold ${meta.badge}`}
      >
        {name}
      </span>
    </div>
  );
};

export default function ZendeskVsFreshdeskVsZohoDeskPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Zendesk vs Freshdesk vs Zoho Desk – Honest Comparison (${YEAR})`}
        description="Compare Zendesk, Freshdesk, and Zoho Desk on omnichannel support, automation, pricing, ecosystem fit, analytics, and best use cases."
        canonical={canonical}
        keywords={`${primaryKeyword}, helpdesk comparison, zendesk, freshdesk, zoho desk`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Support & helpdesk
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Zendesk vs Freshdesk vs Zoho Desk – Honest Comparison ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Zendesk, Freshdesk, and Zoho Desk all offer strong ticketing and
          omnichannel support, but they suit very different organisations.
          Zendesk leads for enterprise omnichannel. Freshdesk offers strong
          value for SMB and mid-market. Zoho Desk aligns best with businesses
          standardising on the Zoho suite.
        </p>

        {/* Top verdict + high-level cards */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {/* Quick verdict */}
          <div className="md:col-span-2 space-y-3 rounded-3xl bg-emerald-50/90 p-6 ring-1 ring-emerald-100">
            <div className="flex items-center gap-2 text-lg font-semibold text-emerald-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>Zendesk</strong> if you need enterprise-grade
              omnichannel, a huge marketplace, and robust admin controls.
              Choose <strong>Freshdesk</strong> if you want a modern,
              omnichannel helpdesk with excellent value for SMB/mid-market.
              Choose <strong>Zoho Desk</strong> if you want your helpdesk
              tightly aligned with Zoho CRM, billing, and Zoho One.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-800">
              <Crown className="h-4 w-4" /> Overall scoreboard winner:{" "}
              {overallWinnerLabel}{" "}
              <span className="text-xs font-medium text-emerald-700">
                (avg: {averages[overallWinnerKey]}/10)
              </span>
            </div>
          </div>

          {/* Context cards */}
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Shield className="h-5 w-5 text-emerald-700" /> Best for
              enterprise omnichannel
            </div>
            <p className="text-sm text-slate-700">
              Zendesk has the most mature omnichannel toolkit, marketplace, and
              admin controls, making it ideal for complex, multi-brand
              environments.
            </p>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Gauge className="h-5 w-5 text-indigo-700" /> Best for SMB/mid
              value
            </div>
            <p className="text-sm text-slate-700">
              Freshdesk delivers strong channels, automations, and SLAs at a
              more accessible price point—especially for growing SMB support
              teams.
            </p>
          </div>
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Zap className="h-5 w-5 text-amber-600" /> Best for Zoho-centric
              stacks
            </div>
            <p className="text-sm text-slate-700">
              Zoho Desk is a natural fit if you already run Zoho CRM, Books,
              Projects, or Zoho One and want shared data and unified billing.
            </p>
          </div>
        </div>

        {/* Contender cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {contenders.map((card) => (
            <div
              key={card.key}
              className={`relative overflow-x-auto rounded-2xl border border-slate-200 bg-gradient-to-br ${
                brandMeta[card.key]?.gradient || "from-slate-500 to-slate-700"
              } p-5 shadow-md md:overflow-hidden`}
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
              <a
                className="relative mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-emerald-50"
                href={card.url}
              >
                View tool <MessageSquare className="h-4 w-4" />
              </a>
            </div>
          ))}
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
                  <th className="px-4 py-3">Zendesk</th>
                  <th className="px-4 py-3">Freshdesk</th>
                  <th className="px-4 py-3">Zoho Desk</th>
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
                    <td className="px-4 py-3 text-slate-700">{row.zendesk}</td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.freshdesk}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row["zoho desk"]}
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
                  <th className="px-4 py-3">Zendesk</th>
                  <th className="px-4 py-3">Freshdesk</th>
                  <th className="px-4 py-3">Zoho Desk</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const zendeskScore = row.scores.zendesk;
                  const freshdeskScore = row.scores.freshdesk;
                  const zohoDeskScore = row.scores["zoho desk"];
                  const maxScore = Math.max(
                    zendeskScore,
                    freshdeskScore,
                    zohoDeskScore
                  );
                  const winner =
                    maxScore === zendeskScore
                      ? "Zendesk"
                      : maxScore === freshdeskScore
                      ? "Freshdesk"
                      : "Zoho Desk";

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
                          winner === "Zendesk"
                            ? "font-semibold text-emerald-800"
                            : "text-slate-700"
                        }`}
                      >
                        {zendeskScore}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Freshdesk"
                            ? "font-semibold text-indigo-800"
                            : "text-slate-700"
                        }`}
                      >
                        {freshdeskScore}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Zoho Desk"
                            ? "font-semibold text-amber-800"
                            : "text-slate-700"
                        }`}
                      >
                        {zohoDeskScore}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">
                        {winner}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-emerald-50 via-indigo-50 to-amber-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.zendesk}
                  </td>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages.freshdesk}
                  </td>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages["zoho desk"]}
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
              <Zap className="h-5 w-5 text-emerald-600" /> Channels & customer
              touchpoints
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.channels.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Shield className="h-5 w-5 text-indigo-600" /> Automation,
              workflows & SLAs
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.automation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Layers className="h-5 w-5 text-amber-600" /> Ecosystem &
              marketplace
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.ecosystem.map((item) => (
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
            Pricing changes frequently and depends on regions, add-ons, and
            active agents. Always confirm current limits and bundles on each
            vendor’s pricing page before committing.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Zendesk:</strong> Very powerful but requires thoughtful
              configuration of views, groups, and workflows. Excellent for large
              teams once implemented, but heavier for very small teams.
            </li>
            <li>
              <strong>Freshdesk:</strong> Friendly UI and sensible defaults make
              it easy for SMB teams to get value quickly. Admin UX is simpler
              than Zendesk but still robust enough for most use cases.
            </li>
            <li>
              <strong>Zoho Desk:</strong> Familiar to teams already using Zoho
              products. Some deeper capabilities rely on the wider Zoho suite,
              which can be an advantage or a learning curve depending on your
              stack.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>High-volume, multi-brand enterprise support:</strong>{" "}
              Zendesk wins with its mature omnichannel, routing, and
              marketplace.
            </li>
            <li>
              <strong>Fast-growing SaaS or ecommerce SMB:</strong> Freshdesk
              offers excellent channel coverage, SLAs, and automations at a
              friendlier price.
            </li>
            <li>
              <strong>Businesses standardising on Zoho:</strong> Zoho Desk is
              the natural choice, especially under Zoho One licensing where cost
              per app drops significantly.
            </li>
            <li>
              <strong>Teams needing deep analytics and governance:</strong>{" "}
              Zendesk + Explore will usually be strongest, with Freshdesk and
              Zoho Desk catching up via exports and BI tools.
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
              <h3 className="text-lg font-semibold">Zendesk</h3>
              <p className="text-sm text-slate-700">
                Best when you need enterprise-grade omnichannel, complex
                routing, and a large app marketplace.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: Enterprises, multi-brand organisations, and global
                support teams.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Freshdesk</h3>
              <p className="text-sm text-slate-700">
                Best when you want modern omnichannel support, SLAs, and
                automations with very strong value for money.
              </p>
              <p className="mt-2 text-sm font-semibold text-indigo-700">
                Ideal for: SaaS/startups, SMBs, and mid-market support teams.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Zoho Desk</h3>
              <p className="text-sm text-slate-700">
                Best when your business already runs on Zoho and you want your
                helpdesk to share the same data fabric and licensing.
              </p>
              <p className="mt-2 text-sm font-semibold text-amber-700">
                Ideal for: Zoho-centric SMBs, agencies, and ops teams looking
                for suite efficiency.
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
