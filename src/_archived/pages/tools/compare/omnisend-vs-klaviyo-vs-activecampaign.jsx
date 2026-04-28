import React from "react";
import {
  Sparkles,
  Crown,
  Layers,
  BarChart3,
  ArrowLeft,
  Gauge,
  Mail,
  MessageSquare,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "omnisend vs klaviyo vs activecampaign";
const canonical = buildCanonical(
  "/tools/compare/omnisend-vs-klaviyo-vs-activecampaign"
);

const brandMeta = {
  omnisend: {
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/omnisend.com",
  },
  klaviyo: {
    gradient: "from-emerald-500 via-teal-500 to-indigo-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/klaviyo.com",
  },
  activecampaign: {
    gradient: "from-sky-500 via-blue-500 to-indigo-500",
    badge: "bg-sky-100 text-sky-900",
    logo: "https://logo.clearbit.com/activecampaign.com",
  },
};

const contenders = [
  {
    key: "omnisend",
    name: "Omnisend",
    blurb: "Ecommerce-focused email + SMS with fast, Shopify-friendly setup.",
    url: "/tools/omnisend",
  },
  {
    key: "klaviyo",
    name: "Klaviyo",
    blurb: "Advanced personalization and predictive analytics for ecommerce growth.",
    url: "/tools/klaviyo",
  },
  {
    key: "activecampaign",
    name: "ActiveCampaign",
    blurb: "CRM-style marketing automation and sales pipelines beyond ecommerce.",
    url: "/tools/activecampaign",
  },
];

const comparisonRows = [
  {
    label: "Ecommerce fit",
    omnisend: "Prebuilt Shopify flows, product feeds, SMS + email, quick to launch.",
    klaviyo: "Deeper product/event data, predictive segments, strong revenue reporting.",
    activecampaign: "Good ecommerce support but optimised for broader B2B/B2C journeys.",
  },
  {
    label: "Segmentation",
    omnisend: "Behaviour-based segments and purchase events; solid but lighter AI.",
    klaviyo: "Best-in-class predictive + catalog-based segmentation and CLV modelling.",
    activecampaign:
      "Flexible segments using tags, CRM fields, deals and engagement scoring.",
  },
  {
    label: "Channels",
    omnisend: "Email, SMS, push and some web push in one builder.",
    klaviyo: "Email + SMS + push with advanced triggers and flows.",
    activecampaign:
      "Email, site tracking, site messages and CRM automations; SMS via add-ons/integrations.",
  },
  {
    label: "Automation builder",
    omnisend: "Visual flows for ecommerce journeys, easy for lean teams.",
    klaviyo:
      "Powerful flow builder with branching, splits and deep product/event conditions.",
    activecampaign:
      "Very advanced automation maps spanning marketing, sales and CRM updates.",
  },
  {
    label: "Ease of use",
    omnisend: "Fast onboarding, intuitive for ecommerce marketers.",
    klaviyo: "Powerful but denser UI; needs time to unlock fully.",
    activecampaign:
      "Most complex to master due to CRM + automation depth across lifecycle.",
  },
  {
    label: "Cost at scale",
    omnisend: "Great value for combined email + SMS bundles as you grow.",
    klaviyo:
      "Higher cost; best justified when you actively use predictive and advanced features.",
    activecampaign:
      "Pricing rises with contacts and CRM users; better value if you use it across marketing + sales.",
  },
  {
    label: "Best fit",
    omnisend:
      "Stores wanting quick ROI from email + SMS without heavy setup overhead.",
    klaviyo:
      "Scaling ecommerce brands focused on LTV, segmentation and optimisation.",
    activecampaign:
      "Sales-led or hybrid teams needing CRM-style journeys, lead scoring and deals.",
  },
];

const scoreboard = [
  { label: "Ecommerce readiness", omnisend: 9.1, klaviyo: 9.6, activecampaign: 8.5 },
  { label: "Segmentation depth", omnisend: 8.6, klaviyo: 9.7, activecampaign: 8.9 },
  { label: "SMS + multichannel", omnisend: 9.2, klaviyo: 9.1, activecampaign: 8.0 },
  { label: "Ease of use", omnisend: 9.0, klaviyo: 8.0, activecampaign: 7.8 },
  { label: "Value for money", omnisend: 9.3, klaviyo: 7.8, activecampaign: 8.2 },
];

const avg = (tool) =>
  (
    scoreboard.reduce((sum, row) => sum + (row[tool] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  omnisend: avg("omnisend"),
  klaviyo: avg("klaviyo"),
  activecampaign: avg("activecampaign"),
};

const overallWinner =
  Math.max(
    parseFloat(averages.omnisend),
    parseFloat(averages.klaviyo),
    parseFloat(averages.activecampaign)
  ) === parseFloat(averages.omnisend)
    ? "Omnisend"
    : Math.max(
        parseFloat(averages.klaviyo),
        parseFloat(averages.activecampaign)
      ) === parseFloat(averages.klaviyo)
    ? "Klaviyo"
    : "ActiveCampaign";

const pricingTable = [
  {
    plan: "Omnisend (email + SMS bundles)",
    monthly: "From ~free for small lists; paid from around ~$16+/mo",
    annual: "Discounts on larger plans and SMS bundles",
    limits: "Pricing scales with contacts and SMS usage; ecommerce features included",
    notes: "Strong value if you lean into both email and SMS for ecommerce journeys.",
  },
  {
    plan: "Klaviyo (email / email + SMS)",
    monthly:
      "Free tier for small lists; paid from around ~$20+/mo depending on contacts/SMS",
    annual: "Savings available on annual commitments",
    limits: "Pricing closely tied to contact count and SMS volume",
    notes: "Best ROI when you actively use predictive analytics, flows and advanced segmentation.",
  },
  {
    plan: "ActiveCampaign (marketing + CRM)",
    monthly: "From around ~$29+/mo, scaling by contacts and feature tier",
    annual: "Lower effective rate on annual billing",
    limits:
      "Different tiers for marketing, sales and bundles; more users and features increase cost",
    notes: "Compelling if you consolidate marketing automation and CRM into one stack.",
  },
];

const featureBullets = {
  ecommerce: [
    "Omnisend: Built with ecommerce in mind – prebuilt Shopify/BigCommerce flows (abandoned cart, browse, post-purchase), product feeds and revenue-focused reporting.",
    "Klaviyo: Deep native ecommerce integrations, product and event tracking, and predictive analytics (CLV, churn risk) that power highly targeted campaigns.",
    "ActiveCampaign: Strong ecommerce integrations plus broader use across lead-gen, B2B funnels and non-store journeys.",
  ],
  segmentation: [
    "Omnisend: Behaviour- and purchase-based segments with filters for campaign engagement, order value, product categories and more.",
    "Klaviyo: Industry-leading segmentation with predictive models, product catalogs and event-level conditions on flows.",
    "ActiveCampaign: Segmentation driven by tags, lists, custom fields, deal stages and lead scores across marketing and sales.",
  ],
  automation: [
    "Omnisend: Visual automations for core ecommerce journeys (welcome, cart, browse, win-back) that lean teams can launch quickly.",
    "Klaviyo: Very powerful flow builder supporting splits, tests and multi-channel sequences built on rich data.",
    "ActiveCampaign: One of the most advanced general-purpose automation engines, combining email, CRM, tasks, deals and scoring in the same canvas.",
  ],
};

const prosCons = {
  omnisend: {
    pros: [
      "Fast to launch for ecommerce brands, especially on Shopify and similar platforms",
      "Strong email + SMS combo with sensible pricing bundles for growing stores",
      "Prebuilt flows, templates and reporting make it easy for lean teams to get ROI",
    ],
    cons: [
      "Less predictive and AI-driven segmentation depth than Klaviyo",
      "Automation is focused on ecommerce; less ideal for complex B2B or sales-led journeys",
      "Ecosystem and integrations are narrower than ActiveCampaign’s general marketing/CRM focus",
    ],
  },
  klaviyo: {
    pros: [
      "Best-in-class ecommerce segmentation and predictive analytics",
      "Powerful flows that can react to product, browsing and customer-value signals",
      "Rich ecosystem and community, especially for DTC and ecommerce brands",
    ],
    cons: [
      "More expensive than Omnisend for many contact tiers, especially with SMS added",
      "Interface can feel dense; teams often need onboarding or partner support to use fully",
      "Less focused on CRM-style deal management versus ActiveCampaign",
    ],
  },
  activecampaign: {
    pros: [
      "Combines marketing automation with CRM and deals in one platform",
      "Very powerful automation engine spanning email, site tracking, tasks and pipelines",
      "Good fit for sales-led and hybrid B2B/B2C funnels beyond pure ecommerce",
    ],
    cons: [
      "Most complex to implement and maintain compared with Omnisend or Klaviyo",
      "Ecommerce feature set is strong but not as laser-focused as Klaviyo/Omnisend",
      "Pricing grows with both contacts and user seats for sales/CRM teams",
    ],
  },
};

const faqs = [
  {
    q: `Who wins in ${YEAR}?`,
    a: "Klaviyo wins for advanced personalization and predictive analytics in ecommerce. Omnisend wins for the fastest ecommerce setup and strong email + SMS value. ActiveCampaign wins when you need CRM-style automation, lead scoring and sales pipelines alongside campaigns.",
  },
  {
    q: "Which is best for value and speed to launch?",
    a: "Omnisend is usually best for value and speed: you get ecommerce-ready flows, templates and SMS in one place, with a shallow learning curve for lean teams.",
  },
  {
    q: "Which is best for deep segmentation and personalization?",
    a: "Klaviyo is the clear winner here, with predictive analytics, product catalog feeds, event-based flows and granular segmentation tailored for ecommerce growth.",
  },
  {
    q: "Which is best for sales-led or B2B-style teams?",
    a: "ActiveCampaign is best if your motion is sales-led or hybrid. Its CRM, deals, lead scoring and automation maps make it stronger than Omnisend/Klaviyo for non-store journeys.",
  },
  {
    q: "What should agencies or multi-store brands use?",
    a: "Agencies and multi-store brands often run Klaviyo or Omnisend for pure ecommerce clients, and ActiveCampaign when clients need deeper CRM and lifecycle automation beyond the store.",
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
    lowered.includes("omnisend") || lowered === "omnisend"
      ? "omnisend"
      : lowered.includes("klaviyo")
      ? "klaviyo"
      : lowered.includes("active")
      ? "activecampaign"
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

const Score = ({ label, value }) => (
  <div className="flex items-center justify-between">
    <span>{label}</span>
    <span className="font-semibold text-slate-900">{value}/10</span>
  </div>
);

export default function OmnisendVsKlaviyoVsActiveCampaignPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Omnisend vs Klaviyo vs ActiveCampaign (${YEAR}) – Best for ecommerce?`}
        description="Compare Omnisend, Klaviyo, and ActiveCampaign across ecommerce readiness, segmentation, SMS, automation, pricing, and ease of use to choose the right platform."
        canonical={canonical}
        keywords={`${primaryKeyword}, email marketing comparison, ecommerce sms, omnisend vs klaviyo, omnisend vs activecampaign`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Hero */}
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">
          Email & SMS for ecommerce
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Omnisend vs Klaviyo vs ActiveCampaign ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Omnisend is the quickest way to get ecommerce email + SMS flows live.
          Klaviyo brings the deepest predictive segmentation and revenue
          insights. ActiveCampaign adds CRM-style automation and sales
          pipelines. Here is how to decide which platform should power your
          lifecycle marketing.
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
          <div className="rounded-3xl border border-indigo-100 bg-indigo-50 px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-indigo-900">
              <Sparkles className="h-5 w-5" />
              <p className="text-lg font-semibold">Quick verdict</p>
            </div>
            <p className="mt-2 text-slate-800">
              Choose <strong>Omnisend</strong> if you want ecommerce email + SMS
              live quickly with strong value. Choose <strong>Klaviyo</strong> if
              you are scaling an ecommerce brand and want the most advanced
              segmentation, flows and predictive insights. Choose{" "}
              <strong>ActiveCampaign</strong> if you need CRM-style automation,
              deals and lead scoring alongside campaigns.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Crown className="h-4 w-4 text-indigo-600" /> Overall scoreboard
              winner: {overallWinner}{" "}
              <span className="text-xs text-slate-600">
                (avg:{" "}
                {overallWinner === "Omnisend"
                  ? averages.omnisend
                  : overallWinner === "Klaviyo"
                  ? averages.klaviyo
                  : averages.activecampaign}
                /10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              There is no universal winner. The right tool depends on whether
              your primary constraint is ecommerce depth, multichannel value or
              unifying marketing with CRM and sales automation.
            </p>
          </div>
        </div>

        {/* Best for summary */}
        <div className="mt-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <div className="text-sm font-semibold text-slate-900">Best for</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-indigo-600" />
              <span>
                <strong>Omnisend</strong> when you want ecommerce-ready flows,
                email + SMS and clear reporting with minimal setup.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Gauge className="mt-0.5 h-4 w-4 text-emerald-600" />
              <span>
                <strong>Klaviyo</strong> for brands optimising LTV, segmentation
                and predictive revenue analytics.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <MessageSquare className="mt-0.5 h-4 w-4 text-sky-600" />
              <span>
                <strong>ActiveCampaign</strong> when marketing, sales and CRM
                journeys need to live on one automation stack.
              </span>
            </li>
          </ul>
        </div>

        {/* Contender cards (neutral) */}
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
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-indigo-700 hover:text-indigo-600"
                  to={tool.url}
                >
                  Visit page
                </Link>
              </div>
            ))}
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
                  <th className="px-4 py-3">Omnisend</th>
                  <th className="px-4 py-3">Klaviyo</th>
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
                    <td className="px-4 py-3 text-slate-700">
                      {row.omnisend}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.klaviyo}
                    </td>
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
                  <th className="px-4 py-3">Omnisend</th>
                  <th className="px-4 py-3">Klaviyo</th>
                  <th className="px-4 py-3">ActiveCampaign</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const { omnisend, klaviyo, activecampaign } = row;
                  const winnerValue = Math.max(
                    omnisend,
                    klaviyo,
                    activecampaign
                  );
                  const winner =
                    winnerValue === omnisend
                      ? "Omnisend"
                      : winnerValue === klaviyo
                      ? "Klaviyo"
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
                          winner === "Omnisend"
                            ? "font-semibold text-indigo-800"
                            : "text-slate-700"
                        }`}
                      >
                        {omnisend}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Klaviyo"
                            ? "font-semibold text-emerald-800"
                            : "text-slate-700"
                        }`}
                      >
                        {klaviyo}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "ActiveCampaign"
                            ? "font-semibold text-sky-800"
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
                <tr className="bg-gradient-to-r from-indigo-50 via-emerald-50 to-sky-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages.omnisend}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.klaviyo}
                  </td>
                  <td className="px-4 py-3 font-semibold text-sky-800">
                    {averages.activecampaign}
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
            <Gauge className="h-6 w-6 text-indigo-600" /> Feature Comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Layers className="h-5 w-5 text-indigo-600" /> Ecommerce & store
              fit
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.ecommerce.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <MessageSquare className="h-5 w-5 text-emerald-600" /> Segmentation
              & personalization
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.segmentation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Mail className="h-5 w-5 text-sky-600" /> Automation, CRM & channels
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.automation.map((item) => (
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
            Pricing changes regularly and depends on contacts, SMS volume,
            feature tier and region. Treat these as directional only and confirm
            current pricing, overages and contract terms on each vendor’s site
            before committing.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User Experience & Learning Curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Omnisend:</strong> Designed for ecommerce marketers rather
              than marketing ops. Flows, templates and reporting feel familiar
              if you are already running a Shopify or similar store.
            </li>
            <li>
              <strong>Klaviyo:</strong> More knobs and dials than Omnisend; once
              you learn the model, it is extremely powerful for data-driven
              teams and agencies.
            </li>
            <li>
              <strong>ActiveCampaign:</strong> The steepest learning curve but
              also the broadest capability, especially when you fully adopt its
              CRM, pipelines and automation builder.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-World Use-Cases & Winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Single-brand ecommerce stores:</strong> Omnisend or
              Klaviyo are usually the best fit; Omnisend for quick wins, Klaviyo
              for deeper optimisation and segmentation.
            </li>
            <li>
              <strong>Scaling DTC brands:</strong> Klaviyo tends to win thanks
              to its integrations, predictive analytics and partner ecosystem.
            </li>
            <li>
              <strong>Sales-led funnels and B2B + ecommerce hybrids:</strong>{" "}
              ActiveCampaign is often the best pick, tying marketing touchpoints
              to deals, pipelines and sales tasks.
            </li>
            <li>
              <strong>Agencies managing multiple stores:</strong> Many agencies
              standardise on Klaviyo or Omnisend for ecommerce clients, and
              bring in ActiveCampaign when CRM and sales automation are in
              scope.
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
              <h3 className="text-lg font-semibold">Omnisend</h3>
              <p className="text-sm text-slate-700">
                Best when you want ecommerce-ready email + SMS live quickly with
                strong value, without building heavy data models.
              </p>
              <p className="mt-2 text-sm font-semibold text-indigo-700">
                Ideal for: Lean ecommerce teams, smaller DTC brands, and stores
                wanting fast wins from flows and SMS.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Klaviyo</h3>
              <p className="text-sm text-slate-700">
                Best for data-driven ecommerce brands chasing higher LTV,
                smarter segmentation and deeper lifecycle optimisation.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: Scaling DTC brands, growth teams and agencies
                investing heavily in lifecycle experimentation.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">ActiveCampaign</h3>
              <p className="text-sm text-slate-700">
                Best when you want marketing automation, CRM, lead scoring and
                deals orchestrated on one platform.
              </p>
              <p className="mt-2 text-sm font-semibold text-sky-700">
                Ideal for: Sales-led organisations, B2B/B2C hybrids and teams
                consolidating multiple tools into one automation stack.
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
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-indigo-700 ring-1 ring-slate-200 hover:bg-slate-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
