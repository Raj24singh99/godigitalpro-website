import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  ClipboardList,
  Crown,
  ArrowLeft,
  Shield,
  CreditCard,
  Receipt,
  BarChart3,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "stripe vs paddle vs lemon squeezy";
const canonical = buildCanonical(
  "/tools/compare/stripe-vs-paddle-vs-lemon-squeezy"
);

const brandMeta = {
  stripe: {
    gradient: "from-indigo-500 via-purple-500 to-blue-600",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/stripe.com",
  },
  paddle: {
    gradient: "from-emerald-500 via-teal-500 to-blue-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/paddle.com",
  },
  "lemon squeezy": {
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/lemonsqueezy.com",
  },
};

const contenders = [
  {
    key: "stripe",
    name: "Stripe",
    blurb: "API-first payments/billing with global methods, Radar, Tax, and Connect.",
    url: "https://stripe.com",
  },
  {
    key: "paddle",
    name: "Paddle",
    blurb: "Merchant of record (MoR) for SaaS—handles tax, billing, and compliance.",
    url: "https://www.paddle.com",
  },
  {
    key: "lemon squeezy",
    name: "Lemon Squeezy",
    blurb: "MoR for digital products with simple checkout, tax, and licensing.",
    url: "https://www.lemonsqueezy.com",
  },
];

const comparisonRows = [
  {
    label: "Best for",
    stripe: "Flexible, customizable payments & billing",
    paddle: "Offloading tax/chargebacks for SaaS",
    "lemon squeezy": "Fast launch for digital goods with tax handled",
  },
  {
    label: "Tax & compliance",
    stripe: "Stripe Tax calculates; you remain merchant of record",
    paddle: "MoR handles tax, filings, and chargebacks",
    "lemon squeezy": "MoR handles tax and VAT for digital goods",
  },
  {
    label: "Checkout speed to launch",
    stripe: "Fast with Checkout/Links, but more setup if customized",
    paddle: "MoR checkout; faster than custom Stripe builds",
    "lemon squeezy": "Very fast—embed or link for digital sales",
  },
  {
    label: "Customization & APIs",
    stripe: "Deep APIs, webhooks, Connect, Elements",
    paddle: "APIs for subscriptions/billing, less customizable than Stripe",
    "lemon squeezy": "Simpler APIs; lighter than Paddle/Stripe",
  },
  {
    label: "Pricing approach",
    stripe: "Pay-as-you-go + add-ons (Billing, Tax, Radar)",
    paddle: "MoR takes higher fee but bundles tax/chargebacks",
    "lemon squeezy": "MoR % fee with simple tiers for digital goods",
  },
];

const scoreboard = [
  {
    label: "Flexibility & APIs",
    scores: { stripe: 9.6, paddle: 8.2, "lemon squeezy": 7.8 },
  },
  {
    label: "Compliance offload",
    scores: { stripe: 7.5, paddle: 9.5, "lemon squeezy": 9.0 },
  },
  {
    label: "Speed to launch",
    scores: { stripe: 8.5, paddle: 8.9, "lemon squeezy": 9.2 },
  },
  {
    label: "Global methods",
    scores: { stripe: 9.4, paddle: 8.4, "lemon squeezy": 8.0 },
  },
  {
    label: "Value for small teams",
    scores: { stripe: 8.3, paddle: 8.6, "lemon squeezy": 9.0 },
  },
];

const pricingTable = [
  {
    plan: "Stripe Payments + Billing",
    monthly: "Pay-as-you-go",
    annual: "Volume discounts possible",
    limits: "Card/ACH/local methods, Billing, Tax, Radar optional",
    notes:
      "Great when you want fine-grained control and can own tax, invoicing, and chargeback handling.",
  },
  {
    plan: "Paddle (MoR for SaaS)",
    monthly: "Higher % per transaction",
    annual: "Volume deals and enterprise pricing",
    limits:
      "MoR handles tax, compliance, chargebacks, invoicing, and receipts for SaaS subscriptions.",
    notes:
      "Best for SaaS teams that would rather ship product than maintain in-house tax/compliance expertise.",
  },
  {
    plan: "Lemon Squeezy (MoR for digital goods)",
    monthly: "MoR % fee with tiers",
    annual: "Simple, transparent tiers",
    limits:
      "Digital products focus, licensing keys, affiliates, payouts, and tax handled for you.",
    notes:
      "Strong fit for indie devs and product studios selling digital downloads, licenses, and subscriptions.",
  },
];

const faqs = [
  {
    q: `Is Stripe or Paddle better in ${YEAR}?`,
    a: "Stripe is best when you want API flexibility and control over pricing, flows, and data. Paddle is best when you want a merchant-of-record to handle tax, chargebacks, and invoicing for SaaS without building that stack yourself.",
  },
  {
    q: "When to pick Lemon Squeezy?",
    a: "Choose Lemon Squeezy if you sell digital products, licenses, or SaaS and want to launch quickly with MoR coverage, simple checkout, and built-in licensing/affiliate tools.",
  },
  {
    q: "Do Paddle and Lemon Squeezy replace Stripe?",
    a: "They can for many SaaS and digital product businesses because they act as merchant of record. Stripe gives you more flexibility and direct control, but you retain responsibility for tax, compliance, and chargebacks.",
  },
  {
    q: "Which is most developer-friendly?",
    a: "Stripe has the deepest APIs, docs, and ecosystem. Paddle and Lemon Squeezy are more opinionated and simpler to integrate but offer fewer low-level primitives than Stripe.",
  },
  {
    q: "Can I mix these tools together?",
    a: "Yes. Some teams run Stripe for custom enterprise or platform flows while using Paddle or Lemon Squeezy as MoR for self-serve tiers or specific regions.",
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

const avg = (key) => {
  const total = scoreboard.reduce(
    (sum, row) => sum + (row.scores[key] || 0),
    0
  );
  return (total / scoreboard.length).toFixed(1);
};

const averages = {
  stripe: avg("stripe"),
  paddle: avg("paddle"),
  "lemon squeezy": avg("lemon squeezy"),
};

const overallWinnerKey = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const prettyNameFromKey = (key) => {
  if (key === "stripe") return "Stripe";
  if (key === "paddle") return "Paddle";
  if (key === "lemon squeezy") return "Lemon Squeezy";
  return key;
};

const featureBullets = {
  architecture: [
    "Stripe: Payment primitives, objects, and webhooks that let you build highly custom billing and payout flows.",
    "Paddle: Opinionated SaaS billing stack designed around subscriptions, trials, upgrades, and invoices.",
    "Lemon Squeezy: Lightweight MoR stack for digital products, with simple plans, licenses, and checkout links.",
  ],
  compliance: [
    "Stripe: Stripe Tax helps calculate and collect, but you stay merchant of record and own filings and audits.",
    "Paddle: Acts as merchant of record, handling VAT/sales tax, filings, and chargebacks on your behalf.",
    "Lemon Squeezy: Also an MoR, optimised for digital goods tax and compliance with minimal configuration.",
  ],
  monetisation: [
    "Stripe: Rich support for usage-based billing, tiered pricing, coupons, trials, and complex B2B invoicing.",
    "Paddle: Built-in SaaS-friendly pricing models, invoicing, and dunning that work out of the box.",
    "Lemon Squeezy: Focused on digital products, license keys, coupons, and creator-friendly payouts.",
  ],
};

const prosCons = {
  stripe: {
    pros: [
      "Deepest APIs, docs, and SDKs in the market for custom payments and billing flows.",
      "Huge ecosystem: Billing, Tax, Radar, Connect, Issuing, and more on one platform.",
      "Excellent support for global payment methods and multi-currency operations.",
      "Fine-grained control over user experience, data, and monetisation experiments.",
    ],
    cons: [
      "You remain merchant of record, so tax, filings, and chargebacks stay your responsibility.",
      "More integration and maintenance work than MoR options for typical SaaS billing.",
      "Can become complex for small teams if many Stripe products are enabled at once.",
    ],
  },
  paddle: {
    pros: [
      "Merchant-of-record model offloads tax, chargebacks, and compliance overhead.",
      "SaaS-focused billing features, including trials, upgrades, downgrades, and invoicing.",
      "Reduced operational burden for small teams without in-house finance/tax expertise.",
      "Clear revenue reporting for subscriptions across regions and currencies.",
    ],
    cons: [
      "Higher effective fee per transaction than raw Stripe in many cases.",
      "Less low-level flexibility than Stripe for heavily customised pricing or flows.",
      "MoR model may not fit every B2B contract or region-specific requirement.",
    ],
  },
  "lemon squeezy": {
    pros: [
      "Very fast setup for selling digital products, licenses, and SaaS with MoR.",
      "Clean modern UI, simple checkout links, and hosted pages for creators.",
      "Built-in license management, affiliates, and payouts in one dashboard.",
      "Great value for indie hackers and small product studios shipping quickly.",
    ],
    cons: [
      "More limited payment methods and enterprise features than Stripe in some regions.",
      "Smaller ecosystem and fewer high-end enterprise workflows than Stripe/Paddle.",
      "Best fit for digital products; complex B2B or platform use-cases may outgrow it.",
    ],
  },
};

const LogoBadge = ({ name }) => {
  const key = name.toLowerCase();
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

export default function StripeVsPaddleVsLemonSqueezyPage() {
  const overallWinnerName = prettyNameFromKey(overallWinnerKey);
  const overallAvg = averages[overallWinnerKey];

  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Stripe vs Paddle vs Lemon Squeezy (${YEAR}) – Payments & MoR comparison`}
        description="Compare Stripe, Paddle, and Lemon Squeezy on payments flexibility, merchant-of-record coverage, pricing, and speed to launch so you can pick the right billing stack."
        canonical={canonical}
        keywords={`${primaryKeyword}, stripe vs paddle, merchant of record, saas billing tools`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">
          Payments &amp; billing
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Stripe vs Paddle vs Lemon Squeezy – Honest Comparison ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          <strong>Stripe</strong> is the flexible, API-first choice when you
          want full control. <strong>Paddle</strong> and{" "}
          <strong>Lemon Squeezy</strong> act as merchants of record (MoR),
          bundling tax, compliance, and chargebacks so you can focus on product.
          Here is how they compare on speed to launch, control, pricing, and
          global readiness.
        </p>

        {/* Quick verdict & highlight */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="space-y-3 rounded-3xl bg-indigo-50/90 p-6 ring-1 ring-indigo-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-indigo-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-sm md:text-base text-slate-800">
              Choose <strong>Stripe</strong> if you want maximum flexibility,
              own your compliance, and plan complex billing or platform use
              cases. Choose <strong>Paddle</strong> if you are a SaaS company
              that wants to offload tax, invoicing, and chargebacks to an MoR.
              Choose <strong>Lemon Squeezy</strong> if you sell digital products
              or licenses and need a fast, MoR-backed launch with minimal setup.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-indigo-800">
              <Crown className="h-4 w-4" /> Overall scoreboard winner:{" "}
              {overallWinnerName}{" "}
              <span className="text-xs font-medium text-indigo-700">
                (avg: {overallAvg}/10)
              </span>
            </div>
          </div>
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Shield className="h-5 w-5 text-emerald-700" /> Best for
              compliance offload
            </div>
            <p className="text-sm text-slate-700">
              Paddle and Lemon Squeezy act as merchant of record, handling tax,
              filings, and chargebacks so your team does not need in-house
              compliance expertise.
            </p>
          </div>
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <CreditCard className="h-5 w-5 text-indigo-700" /> Best for API
              flexibility
            </div>
            <p className="text-sm text-slate-700">
              Stripe delivers the deepest APIs, webhooks, and payment methods
              for building custom billing, marketplaces, and platforms.
            </p>
          </div>
        </div>

        {/* Top contender cards */}
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
                <Receipt className="h-5 w-5 text-white/80" />
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
            <Layers className="h-6 w-6 text-indigo-600" /> Side-by-side
            comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Stripe</th>
                  <th className="px-4 py-3">Paddle</th>
                  <th className="px-4 py-3">Lemon Squeezy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row, idx) => (
                  <tr
                    key={row.label}
                    className={idx % 2 ? "bg-slate-50/40" : "bg-white"}
                  >
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">
                      {row.stripe}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.paddle}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row["lemon squeezy"]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Scoreboard table */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <BarChart3 className="h-6 w-6 text-indigo-600" /> Scoreboard (1–10)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Stripe</th>
                  <th className="px-4 py-3">Paddle</th>
                  <th className="px-4 py-3">Lemon Squeezy</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const { stripe, paddle, "lemon squeezy": lemon } = row.scores;
                  const maxScore = Math.max(stripe, paddle, lemon);
                  const winner =
                    maxScore === stripe
                      ? "Stripe"
                      : maxScore === paddle
                      ? "Paddle"
                      : "Lemon Squeezy";

                  return (
                    <tr
                      key={row.label}
                      className="odd:bg-white even:bg-slate-50/50"
                    >
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-900">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Stripe"
                            ? "font-semibold text-indigo-800"
                            : "text-slate-700"
                        }`}
                      >
                        {stripe}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Paddle"
                            ? "font-semibold text-emerald-800"
                            : "text-slate-700"
                        }`}
                      >
                        {paddle}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Lemon Squeezy"
                            ? "font-semibold text-amber-800"
                            : "text-slate-700"
                        }`}
                      >
                        {lemon}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {winner}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-indigo-50 via-emerald-50 to-amber-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages.stripe}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.paddle}
                  </td>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages["lemon squeezy"]}
                  </td>
                  <td className="px-4 py-3 font-bold text-slate-900">
                    {overallWinnerName}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Feature comparison */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-indigo-600" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Zap className="h-5 w-5 text-indigo-600" /> Architecture & APIs
            </h3>
            <ul className="space-y-2 text-sm md:text-base text-slate-700">
              {featureBullets.architecture.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Shield className="h-5 w-5 text-emerald-700" /> Compliance & MoR
              responsibilities
            </h3>
            <ul className="space-y-2 text-sm md:text-base text-slate-700">
              {featureBullets.compliance.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Receipt className="h-5 w-5 text-slate-800" /> Billing models &
              monetisation
            </h3>
            <ul className="space-y-2 text-sm md:text-base text-slate-700">
              {featureBullets.monetisation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <ClipboardList className="h-6 w-6 text-emerald-600" /> Pricing
            snapshots
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Monthly (approx.)</th>
                  <th className="px-4 py-3">Annual / volume</th>
                  <th className="px-4 py-3">Key limits</th>
                  <th className="px-4 py-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {pricingTable.map((row, idx) => (
                  <tr
                    key={row.plan}
                    className={idx % 2 ? "bg-slate-50/40" : "bg-white"}
                  >
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-900">
                      {row.plan}
                    </th>
                    <td className="px-4 py-3 text-slate-700">
                      {row.monthly}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.annual}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.limits}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-700">
            Stripe&apos;s effective cost depends on payment methods, Billing,
            Tax, and any discounts you negotiate. Paddle and Lemon Squeezy
            charge higher MoR percentages but remove a lot of internal overhead.
            Model fees alongside the cost of finance, legal, and engineering
            time you would otherwise invest.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">
            Developer experience & learning curve
          </h2>
          <ul className="space-y-2 text-sm md:text-base text-slate-700">
            <li>
              <strong>Stripe:</strong> Excellent DX with great docs, client
              libraries, and dashboards. Complexity grows with how much you
              customise, but you keep maximum control.
            </li>
            <li>
              <strong>Paddle:</strong> Feels like wiring into a ready-made SaaS
              billing machine. Less code than Stripe for typical SaaS scenarios,
              but fewer primitives for exotic flows.
            </li>
            <li>
              <strong>Lemon Squeezy:</strong> Very quick to set up with hosted
              checkout and simple APIs. Ideal for indie products where you want
              billing live in hours, not weeks.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">
            Real-world use-cases & winners
          </h2>
          <ul className="space-y-2 text-sm md:text-base text-slate-700">
            <li>
              <strong>Complex SaaS or platform with custom billing:</strong>{" "}
              Stripe wins with its primitives, Connect, and Billing flexibility.
            </li>
            <li>
              <strong>Lean SaaS team without tax/compliance expertise:</strong>{" "}
              Paddle wins by acting as MoR and bundling the messy parts of
              billing operations.
            </li>
            <li>
              <strong>Indie devs and studios selling digital products:</strong>{" "}
              Lemon Squeezy wins for speed, MoR coverage, and license/affiliate
              features.
            </li>
            <li>
              <strong>Hybrid stack:</strong> Some teams use Stripe for
              enterprise/complex deals while using Paddle or Lemon Squeezy for
              self-serve tiers in many countries.
            </li>
          </ul>
        </section>

        {/* Pros & Cons section */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        {/* Who wins for… */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">Who wins for…</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Stripe</h3>
              <p className="text-sm text-slate-700">
                Best when you want a long-term, flexible payments and billing
                platform you can deeply customise as your product evolves.
              </p>
              <p className="mt-2 text-sm font-semibold text-indigo-800">
                Ideal for: Product-led SaaS, platforms/marketplaces, and teams
                with strong engineering resources.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Paddle</h3>
              <p className="text-sm text-slate-700">
                Best when you want SaaS billing and tax handled under an MoR
                model, with straightforward subscription flows.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-800">
                Ideal for: B2B/B2C SaaS teams that want to spend more time on
                product and less on finance ops.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Lemon Squeezy</h3>
              <p className="text-sm text-slate-700">
                Best when you are shipping digital products, templates, or
                plugins and need MoR-backed checkout in days, not weeks.
              </p>
              <p className="mt-2 text-sm font-semibold text-amber-800">
                Ideal for: Indie hackers, creator businesses, and small studios
                monetising digital assets.
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
                <p className="mt-1 text-sm md:text-base text-slate-700">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Back link */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-600">
          <Link
            to="/tools"
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-indigo-700 ring-1 ring-indigo-100 hover:bg-indigo-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
          <div className="flex flex-wrap gap-2">
            {contenders.map((c) => (
              <a
                key={c.key}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-800 hover:bg-slate-200"
                href={`/tools/${c.key.replace(" ", "-")}`}
              >
                View {c.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
