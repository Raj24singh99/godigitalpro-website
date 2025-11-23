import React from "react";
import {
  Sparkles,
  Crown,
  Gauge,
  Layers,
  ArrowLeft,
  Shield,
  Headphones,
  BarChart3,
} from "lucide-react";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";
import { Link } from "react-router-dom";

const YEAR = new Date().getFullYear();
const primaryKeyword = "zoho desk vs zendesk";
const canonical = buildCanonical("/tools/compare/zoho-desk-vs-zendesk");

const brandMeta = {
  "zoho desk": {
    gradient: "from-amber-500 via-rose-500 to-emerald-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/zoho.com",
  },
  zendesk: {
    gradient: "from-emerald-500 via-teal-500 to-indigo-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/zendesk.com",
  },
};

const contenders = [
  {
    key: "zoho desk",
    name: "Zoho Desk",
    blurb:
      "Helpdesk aligned with the Zoho suite and Zoho One pricing; strong value for suite-first teams.",
    url: "/tools/zoho-desk",
  },
  {
    key: "zendesk",
    name: "Zendesk",
    blurb:
      "Enterprise-grade omnichannel support with deep marketplace and governance controls.",
    url: "/tools/zendesk",
  },
];

const comparisonRows = [
  {
    label: "Omnichannel depth",
    "zoho desk":
      "Email, chat, phone, social; aligns with Zoho Channels. Smaller external marketplace.",
    zendesk:
      "Email, chat, voice, social, apps; strongest marketplace and channel breadth.",
  },
  {
    label: "Automation & workflows",
    "zoho desk":
      "Rules, SLAs, blueprints, guided mode; boosts when paired with Zoho CRM/Flow.",
    zendesk:
      "Triggers, macros, advanced routing, roles; mature for complex queues and multi-brand support.",
  },
  {
    label: "Marketplace & integrations",
    "zoho desk":
      "Deep native Zoho suite alignment; third-party catalog is smaller.",
    zendesk:
      "Largest helpdesk marketplace with rich third-party apps, telephony, and WFM integrations.",
  },
  {
    label: "Reporting & AI",
    "zoho desk":
      "Dashboards plus Zia AI (Enterprise) for sentiment, suggestions, and classification.",
    zendesk:
      "Explore analytics, AI/automation bundles, and strong SLAs/CSAT reporting.",
  },
  {
    label: "Value/pricing",
    "zoho desk":
      "Great value standalone; best pricing via Zoho One bundle across apps.",
    zendesk:
      "Pricier, especially at scale, but delivers breadth and depth for enterprise needs.",
  },
];

const scoreboard = [
  { label: "Omnichannel depth", scores: { "zoho desk": 8.2, zendesk: 9.4 } },
  { label: "Automation & workflows", scores: { "zoho desk": 8.4, zendesk: 9.2 } },
  {
    label: "Marketplace & integrations",
    scores: { "zoho desk": 7.8, zendesk: 9.5 },
  },
  { label: "Reporting & AI", scores: { "zoho desk": 8.3, zendesk: 9.0 } },
  { label: "Value/pricing", scores: { "zoho desk": 9.2, zendesk: 7.6 } },
];

const avg = (key) => {
  const total = scoreboard.reduce(
    (sum, row) => sum + (row.scores[key] || 0),
    0
  );
  return (total / scoreboard.length).toFixed(1);
};

const averages = { "zoho desk": avg("zoho desk"), zendesk: avg("zendesk") };
const overallWinner =
  averages["zoho desk"] > averages.zendesk ? "Zoho Desk" : "Zendesk";

const pricingTable = [
  {
    plan: "Zoho Desk (Standard/Professional)",
    monthly: "From ~US$14–$23+/agent",
    annual: "Lower on annual",
    limits:
      "Omnichannel, SLAs, automations; best value when bundled in Zoho One",
    notes: "Strong entry point for growing teams on Zoho.",
  },
  {
    plan: "Zoho Desk Enterprise",
    monthly: "Higher tier",
    annual: "Lower on annual",
    limits: "Adds Zia AI, guided mode, custom functions, advanced views",
    notes: "Great for teams on Zoho CRM/Books/Projects needing deeper control.",
  },
  {
    plan: "Zendesk Suite (Team/Pro)",
    monthly: "From ~US$55+/agent",
    annual: "Lower on annual",
    limits: "Omnichannel, bots, routing, roles, analytics",
    notes: "Best for enterprise omnichannel and marketplace depth.",
  },
];

const featureBullets = {
  channels: [
    "Zoho Desk: Solid email, chat, phone, and social; channels strengthen further when combined with Zoho SalesIQ and telephony partners.",
    "Zendesk: Deep omnichannel, including voice, messaging, social, and marketplace-based channel apps for global support.",
  ],
  automation: [
    "Zoho Desk: Workflow rules, blueprints, escalations, and guided mode that compound when connected to Zoho CRM and Zoho Flow.",
    "Zendesk: Advanced triggers, macros, and routing with granular roles and groups for complex, multi-brand queues.",
  ],
  ecosystem: [
    "Zoho Desk: Tightest alignment with Zoho CRM, Books, Projects, and the wider Zoho suite; Zoho One licensing can be very cost-effective.",
    "Zendesk: Huge marketplace and partner ecosystem with many third-party analytics, WFM, and telephony integrations.",
  ],
};

const faqs = [
  {
    q: `Is Zoho Desk better than Zendesk in ${YEAR}?`,
    a: "Zoho Desk wins on value—especially if you already use Zoho apps or Zoho One. Zendesk is deeper on marketplace, omnichannel breadth, and enterprise routing and governance.",
  },
  {
    q: "Which is cheaper for growing teams?",
    a: "Zoho Desk is usually cheaper. Standalone pricing is lower, and Zoho One bundling can make it significantly more cost-effective. Zendesk costs more but brings breadth and integrations suitable for larger teams.",
  },
  {
    q: "Which is easier to roll out?",
    a: "Zoho Desk is straightforward for teams already inside the Zoho ecosystem. Zendesk has more knobs and a bigger marketplace—excellent once configured, but heavier to set up and govern.",
  },
  {
    q: "Which has the better marketplace?",
    a: "Zendesk by far. Zoho Desk’s marketplace is smaller but has deep native Zoho integrations across CRM, finance, and projects.",
  },
  {
    q: "Who should choose Zendesk?",
    a: "Enterprise support teams that need the widest channels, strict governance, and marketplace depth should favor Zendesk despite the higher price.",
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
  "zoho desk": {
    pros: [
      "Great value, especially with Zoho One bundle",
      "Strong alignment with Zoho CRM, Books, Projects, and other Zoho apps",
      "Solid automations, SLAs, blueprints, and guided mode",
      "Zia AI (Enterprise) adds sentiment, suggestions, and classification",
    ],
    cons: [
      "Third-party marketplace smaller than Zendesk’s",
      "Deepest power unlocked when you lean into the wider Zoho ecosystem",
      "Omnichannel breadth not as extensive as Zendesk in some regions",
    ],
  },
  zendesk: {
    pros: [
      "Deep omnichannel coverage (email, chat, voice, messaging, social)",
      "Largest marketplace with rich third-party and telephony integrations",
      "Mature automation, routing, and role-based access for complex queues",
      "Powerful analytics and AI/automation bundles for larger organisations",
    ],
    cons: [
      "Higher cost per agent, especially at scale",
      "Heavier implementation and admin overhead",
      "Can be overkill for smaller teams that do not need enterprise depth",
    ],
  },
};

const LogoBadge = ({ name }) => {
  const lowered = name.toLowerCase();
  const key = lowered.includes("zoho")
    ? "zoho desk"
    : lowered.includes("zendesk")
    ? "zendesk"
    : lowered;

  const meta =
    brandMeta[key] || {
      gradient: "from-slate-400 to-slate-600",
      badge: "bg-slate-100 text-slate-900",
    };

  return (
    <div className="flex items-center gap-2">
      <div
        className={`flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${meta.gradient} text-sm font-semibold text-white shadow-sm`}
      >
        {meta.logo ? (
          <img
            src={meta.logo}
            alt={`${name} logo`}
            className="h-full w-full object-cover"
          />
        ) : (
          <span>{name.slice(0, 2).toUpperCase()}</span>
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

export default function ZohoDeskVsZendeskPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Zoho Desk vs Zendesk – Which Helpdesk Fits Best? (${YEAR})`}
        description="Compare Zoho Desk and Zendesk across omnichannel support, automations, marketplace depth, AI, pricing, and best-fit use cases."
        canonical={canonical}
        keywords={`${primaryKeyword}, helpdesk comparison, zoho desk, zendesk`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
          Helpdesk & Support
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Zoho Desk vs Zendesk – Honest Comparison ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Zoho Desk and Zendesk both deliver strong ticketing and omnichannel
          support, but they are optimised for different realities. Zoho Desk
          wins on suite alignment and pricing, especially with Zoho One.
          Zendesk wins on marketplace depth, omnichannel breadth, and enterprise
          routing and governance.
        </p>

        {/* Top verdict + high-level cards */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {/* Quick verdict */}
          <div className="md:col-span-2 space-y-3 rounded-3xl bg-amber-50/90 p-6 ring-1 ring-amber-100">
            <div className="flex items-center gap-2 text-lg font-semibold text-amber-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>Zoho Desk</strong> if you already use Zoho
              (CRM/Projects/Books) or want strong value via Zoho One. Choose{" "}
              <strong>Zendesk</strong> if you need the deepest marketplace,
              omnichannel breadth, and enterprise-grade routing and roles across
              multiple brands or regions.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-amber-800">
              <Crown className="h-4 w-4" /> Overall scoreboard winner:{" "}
              {overallWinner}{" "}
              <span className="text-xs font-medium text-amber-700">
                (avg: {averages[overallWinner.toLowerCase()]}/10)
              </span>
            </div>
          </div>

          {/* Context card */}
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Shield className="h-5 w-5 text-emerald-700" /> Best for enterprise
              omnichannel
            </div>
            <p className="text-sm text-slate-700">
              Zendesk has the most mature omnichannel toolkit, marketplace, and
              admin controls, making it ideal for complex, multi-brand
              environments.
            </p>
          </div>
        </div>

        {/* Brand cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {contenders.map((item) => (
            <div
              key={item.key}
              className={`relative overflow-x-auto rounded-2xl border border-slate-200 bg-gradient-to-br ${
                brandMeta[item.key]?.gradient || "from-slate-500 to-slate-700"
              } p-5 shadow-md md:overflow-hidden`}
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
              <a
                className="relative mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-amber-50"
                href={item.url}
              >
                View tool <Headphones className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-amber-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[640px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Zoho Desk</th>
                  <th className="px-4 py-3">Zendesk</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {comparisonRows.map((row, idx) => (
                  <tr
                    key={row.label}
                    className={idx % 2 === 1 ? "bg-slate-50/60" : ""}
                  >
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      {row.label}
                    </td>
                    <td className="px-4 py-3 text-slate-800">
                      {row["zoho desk"]}
                    </td>
                    <td className="px-4 py-3 text-slate-800">{row.zendesk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Scoreboard */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <BarChart3 className="h-6 w-6 text-amber-600" /> Scoreboard (1–10)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[640px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Zoho Desk</th>
                  <th className="px-4 py-3">Zendesk</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {scoreboard.map((row, idx) => {
                  const zohoScore = row.scores["zoho desk"];
                  const zendeskScore = row.scores.zendesk;
                  const winner =
                    zohoScore === zendeskScore
                      ? "Tie"
                      : zohoScore > zendeskScore
                      ? "Zoho Desk"
                      : "Zendesk";

                  return (
                    <tr
                      key={row.label}
                      className={idx % 2 === 1 ? "bg-slate-50/60" : ""}
                    >
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {row.label}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Zoho Desk"
                            ? "font-semibold text-amber-800"
                            : "text-slate-800"
                        }`}
                      >
                        {zohoScore}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Zendesk"
                            ? "font-semibold text-emerald-800"
                            : "text-slate-800"
                        }`}
                      >
                        {zendeskScore}
                      </td>
                      <td className="px-4 py-3 text-slate-800">{winner}</td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-amber-50 via-slate-50 to-emerald-50">
                  <td className="px-4 py-3 font-semibold text-slate-900">
                    Average (overall winner)
                  </td>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages["zoho desk"]}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
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
            <Gauge className="h-6 w-6 text-amber-600" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">
              Channels & customer touchpoints
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {featureBullets.channels.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">
              Automation, workflows & SLAs
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {featureBullets.automation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">
              Ecosystem & marketplace
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {featureBullets.ecosystem.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Crown className="h-6 w-6 text-amber-600" /> Pricing snapshots
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-slate-50/50 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[640px] text-left text-sm md:text-base">
              <thead className="bg-slate-100 text-slate-800">
                <tr>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Monthly (approx.)</th>
                  <th className="px-4 py-3">Annual</th>
                  <th className="px-4 py-3">Limits & notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {pricingTable.map((row, idx) => (
                  <tr
                    key={row.plan}
                    className={idx % 2 === 1 ? "bg-slate-50/60" : ""}
                  >
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      {row.plan}
                    </td>
                    <td className="px-4 py-3 text-slate-800">
                      {row.monthly}
                    </td>
                    <td className="px-4 py-3 text-slate-800">
                      {row.annual}
                    </td>
                    <td className="px-4 py-3 text-slate-800">
                      {row.limits || row.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600">
            Pricing changes frequently and depends on regions, bundles, and
            active agents. Always confirm current limits, add-ons, and promos on
            each vendor’s pricing page before committing.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">
            User experience & learning curve
          </h2>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>
              <strong>Zoho Desk:</strong> Familiar and efficient for teams
              already using Zoho products. Setup is straightforward, but some
              advanced capabilities rely on the wider Zoho suite, which can add
              depth and a bit of learning curve.
            </li>
            <li>
              <strong>Zendesk:</strong> Very powerful but requires thoughtful
              configuration of views, groups, and workflows. Excellent for large
              teams once implemented, but heavier for very small teams or first
              helpdesk deployments.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">
            Real-world use-cases & winners
          </h2>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>
              <strong>High-volume, multi-brand enterprise support:</strong>{" "}
              Zendesk wins with its mature omnichannel, routing, and marketplace
              depth.
            </li>
            <li>
              <strong>Zoho-centric SMBs or agencies:</strong> Zoho Desk is the
              natural choice, particularly under Zoho One licensing where cost
              per app drops significantly.
            </li>
            <li>
              <strong>Teams needing deep analytics & governance:</strong>{" "}
              Zendesk + Explore will usually be strongest, with Zoho Desk
              catching up via Zoho Analytics and BI tooling.
            </li>
            <li>
              <strong>Budget-conscious teams standardising on a suite:</strong>{" "}
              Zoho Desk delivers strong value when your CRM, billing, and
              projects are also on Zoho.
            </li>
          </ul>
        </section>

        {/* Pros & Cons */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        {/* Who wins for… */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">Who wins for…</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Zoho Desk</h3>
              <p className="mt-1 text-sm text-slate-700">
                Best when your business already runs on Zoho and you want your
                helpdesk to share the same data fabric, automations, and
                licensing model.
              </p>
              <p className="mt-2 text-sm font-semibold text-amber-700">
                Ideal for: Zoho-centric SMBs, agencies, and operations teams
                looking for suite efficiency and lower TCO.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Zendesk</h3>
              <p className="mt-1 text-sm text-slate-700">
                Best when you need enterprise-grade omnichannel, complex
                routing, and a large app marketplace across multiple brands or
                regions.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: Enterprises, high-volume support teams, and global
                organisations with complex governance needs.
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
                <p className="mt-1 text-sm text-slate-700">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Back link */}
        <div className="mt-10 flex items-center gap-2 text-sm text-slate-600">
          <Link
            to="/tools"
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-amber-700 ring-1 ring-amber-100 hover:bg-amber-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
