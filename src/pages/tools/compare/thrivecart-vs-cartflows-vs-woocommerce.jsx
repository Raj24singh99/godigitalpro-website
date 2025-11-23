import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  ClipboardList,
  Crown,
  ArrowLeft,
  Workflow,
  ShoppingCart,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "thrivecart vs cartflows vs woocommerce";
const canonical = buildCanonical(
  "/tools/compare/thrivecart-vs-cartflows-vs-woocommerce"
);

const brandMeta = {
  thrivecart: {
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/thrivecart.com",
  },
  cartflows: {
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/cartflows.com",
  },
  woocommerce: {
    gradient: "from-sky-500 via-blue-500 to-indigo-500",
    badge: "bg-sky-100 text-sky-900",
    logo: "https://logo.clearbit.com/woocommerce.com",
  },
};

const contenders = [
  {
    key: "thrivecart",
    name: "ThriveCart",
    blurb: "Hosted checkout built for digital and info products.",
    url: "https://thrivecart.com",
  },
  {
    key: "cartflows",
    name: "CartFlows",
    blurb: "WordPress funnels and checkout flows on WooCommerce.",
    url: "https://cartflows.com",
  },
  {
    key: "woocommerce",
    name: "WooCommerce",
    blurb: "Open-source ecommerce for WordPress with broad extensibility.",
    url: "https://woocommerce.com",
  },
];

const comparisonRows = [
  {
    label: "Best for",
    thrivecart: "Digital/info products and marketers who want speed.",
    cartflows: "Funnel builders on WordPress needing control.",
    woocommerce: "Full stores with catalogs and plugins.",
  },
  {
    label: "Setup & hosting",
    thrivecart: "Hosted SaaS—fastest to launch.",
    cartflows: "WordPress plugin layered on WooCommerce.",
    woocommerce: "Self/managed hosting required; needs setup.",
  },
  {
    label: "Funnels & upsells",
    thrivecart: "Strong bumps/upsells native.",
    cartflows: "Flows, order bumps, A/B tests with plugins.",
    woocommerce: "Requires multiple plugins for funnels/bumps.",
  },
  {
    label: "Customization",
    thrivecart: "Templates with custom fields; code-light.",
    cartflows: "High control via builders and WP stack.",
    woocommerce: "Fully customizable via themes/plugins.",
  },
  {
    label: "Pricing feel",
    thrivecart: "One-time/lifetime style offers common.",
    cartflows: "Subscription; cost tied to licenses.",
    woocommerce: "Core free; plugins/hosting add up.",
  },
];

const scoreboard = [
  {
    label: "Ease of launch",
    scores: { thrivecart: 9.3, cartflows: 8.0, woocommerce: 7.2 },
  },
  {
    label: "Funnels/upsells",
    scores: { thrivecart: 9.0, cartflows: 9.2, woocommerce: 8.0 },
  },
  {
    label: "Flexibility",
    scores: { thrivecart: 8.1, cartflows: 9.0, woocommerce: 9.5 },
  },
  {
    label: "Total cost of ownership",
    scores: { thrivecart: 9.2, cartflows: 8.2, woocommerce: 7.8 },
  },
  {
    label: "Ecommerce depth",
    scores: { thrivecart: 7.6, cartflows: 8.4, woocommerce: 9.3 },
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
  thrivecart: avg("thrivecart"),
  cartflows: avg("cartflows"),
  woocommerce: avg("woocommerce"),
};
const overallWinner = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const pricingTable = [
  {
    plan: "ThriveCart",
    monthly: "Often lifetime deals",
    annual: "N/A",
    limits: "Hosted checkout, bumps, subscriptions",
    notes: "Best value if you want quick digital funnels and no hosting.",
  },
  {
    plan: "CartFlows Pro",
    monthly: "From ~US$17/mo",
    annual: "Lower annually",
    limits: "Funnels on WooCommerce, A/B tests, order bumps",
    notes: "Great for WordPress funnels with design and flow control.",
  },
  {
    plan: "WooCommerce + plugins",
    monthly: "Hosting + plugins",
    annual: "Varies",
    limits: "Full store capability with extensions",
    notes: "Most flexible; total cost depends on your plugin and hosting stack.",
  },
];

const faqs = [
  {
    q: `Is ThriveCart better than CartFlows or WooCommerce in ${YEAR}?`,
    a: "ThriveCart wins for speed and marketer-friendly funnels. CartFlows wins if you want funnel control on WordPress. WooCommerce wins for full-store flexibility and product catalogs when you can manage hosting and plugins.",
  },
  {
    q: "Which is best for digital/info products?",
    a: "ThriveCart. It ships with native order bumps, upsells, and subscription support tailored to digital and info products with minimal setup.",
  },
  {
    q: "Which offers the most control?",
    a: "WooCommerce with CartFlows is the most flexible stack—because you own the WordPress environment, can pick plugins, and customize funnels and templates deeply.",
  },
  {
    q: "Which is fastest to launch?",
    a: "ThriveCart. You avoid WordPress and hosting management and can launch a functioning funnel in hours instead of days.",
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
  thrivecart: {
    pros: [
      "Fast hosted setup",
      "Strong bumps/upsells",
      "Great for digital/info products",
      "Often lifetime pricing",
    ],
    cons: [
      "Less code-level control",
      "Design customization limited vs WordPress",
      "Heavier ecommerce catalogs not ideal",
    ],
  },
  cartflows: {
    pros: [
      "Full funnel control on WordPress",
      "Order bumps, upsells, A/B testing",
      "Works with builders and WooCommerce plugins",
    ],
    cons: [
      "Requires managing hosting and WordPress",
      "More setup than hosted tools",
      "Plugin stack can add complexity",
    ],
  },
  woocommerce: {
    pros: [
      "Most flexible and open",
      "Huge plugin/theme ecosystem",
      "Supports full stores, subscriptions, memberships",
    ],
    cons: [
      "Requires hosting and security maintenance",
      "Advanced funnels need multiple plugins",
      "Performance depends on your hosting and setup",
    ],
  },
};

const funnelInsights = {
  coreUseCases: [
    "ThriveCart: Direct-response funnels for courses, ebooks, coaching, and one-off offers where you send traffic straight to checkout.",
    "CartFlows: Multi-step funnels on top of WooCommerce (opt-in → product → upsell/downsell) with WordPress builders.",
    "WooCommerce: Traditional ecommerce stores with many SKUs, shipping, taxes, and a catalog-driven experience.",
  ],
  techStackFit: [
    "ThriveCart: Sits alongside any tech stack—link from landing pages, email, or webinars without changing your main site.",
    "CartFlows: Best if your team already uses WordPress + WooCommerce and wants a more funnel-first checkout flow.",
    "WooCommerce: Ideal for merchants committed to WordPress who need deep control over products, shipping, and integrations.",
  ],
  optimization: [
    "ThriveCart: Focus optimization on cart templates, order bumps, upsell offers, and pricing tests.",
    "CartFlows: Optimize page templates, step order, and conditional logic using your favorite WP builder.",
    "WooCommerce: Optimization happens via CRO on product/category pages and by plugging in specialized checkout/funnel plugins.",
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

export default function ThriveCartVsCartFlowsVsWooCommercePage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`ThriveCart vs CartFlows vs WooCommerce – Which to choose? (${YEAR})`}
        description="Compare ThriveCart, CartFlows, and WooCommerce on setup speed, funnels and upsells, customization, pricing, and which stack is best for digital products vs full ecommerce stores."
        canonical={canonical}
        keywords={`${primaryKeyword}, checkout tools, ecommerce funnels, wordpress funnels, digital product checkout`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Checkout & funnels
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          ThriveCart vs CartFlows vs WooCommerce – Honest Comparison ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          ThriveCart is the fastest to launch hosted checkout for digital and
          info products. CartFlows brings proper funnels and optimized checkout
          flows to WordPress and WooCommerce. WooCommerce is the most flexible
          option for full ecommerce stores, but needs more setup and
          maintenance. Here is how they compare across funnels, customization,
          cost, and fit for different businesses.
        </p>

        {/* Quick verdict + highlights */}
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <div className="space-y-3 rounded-3xl bg-emerald-50/90 p-6 ring-1 ring-emerald-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-emerald-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>ThriveCart</strong> if you want a hosted funnel
              with bumps and upsells live quickly. Choose <strong>CartFlows</strong>{" "}
              if you are on WordPress and want deep funnel and checkout control.
              Choose <strong>WooCommerce</strong> for full-store flexibility and
              catalogs when you are comfortable managing hosting, plugins, and
              performance.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-800">
              <Crown className="h-4 w-4" /> Overall scoreboard leader:{" "}
              {overallWinner.charAt(0).toUpperCase() + overallWinner.slice(1)}{" "}
              <span className="text-xs font-medium text-emerald-700">
                (avg: {averages[overallWinner]}/10)
              </span>
            </div>
          </div>

          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <ShoppingCart className="h-5 w-5 text-emerald-700" />
              Best hosted speed
            </div>
            <p className="text-sm text-slate-700">
              ThriveCart launches funnels quickly with minimal configuration and
              no WordPress or hosting overhead—ideal for creators and marketers.
            </p>
          </div>

          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Workflow className="h-5 w-5 text-indigo-700" />
              Best WordPress control
            </div>
            <p className="text-sm text-slate-700">
              CartFlows and WooCommerce give you fine-grained control over
              pages, flows, and templates in the WordPress ecosystem.
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
            <Layers className="h-6 w-6 text-emerald-600" />
            Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[640px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">ThriveCart</th>
                  <th className="px-4 py-3">CartFlows</th>
                  <th className="px-4 py-3">WooCommerce</th>
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
                    <td className="px-4 py-3 text-slate-700">
                      {row.thrivecart}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.cartflows}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.woocommerce}
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
            <Gauge className="h-6 w-6 text-indigo-600" />
            Scoreboard (1–10)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[640px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">ThriveCart</th>
                  <th className="px-4 py-3">CartFlows</th>
                  <th className="px-4 py-3">WooCommerce</th>
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
                          winnerKey === "thrivecart"
                            ? "font-semibold text-emerald-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.thrivecart}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "cartflows"
                            ? "font-semibold text-indigo-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.cartflows}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "woocommerce"
                            ? "font-semibold text-sky-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.woocommerce}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-emerald-50/70">
                  <th className="bg-emerald-100 px-4 py-3 font-semibold text-slate-900">
                    Average
                  </th>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.thrivecart}
                  </td>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages.cartflows}
                  </td>
                  <td className="px-4 py-3 font-semibold text-sky-800">
                    {averages.woocommerce}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Real-world funnel behavior */}
        <section className="mt-12 space-y-8">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Zap className="h-6 w-6 text-amber-500" />
            How they behave in real funnels
          </h2>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Core use-cases</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {funnelInsights.coreUseCases.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Tech stack fit</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {funnelInsights.techStackFit.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">
              Optimization & experimentation
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {funnelInsights.optimization.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pros and cons cards */}
        <section className="mt-12 space-y-6">
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

        {/* Pricing snapshot */}
        <section className="mt-12 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <ClipboardList className="h-6 w-6 text-emerald-600" />
            Pricing snapshot
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
                    <td className="px-4 py-3 text-slate-700">{row.monthly}</td>
                    <td className="px-4 py-3 text-slate-700">{row.annual}</td>
                    <td className="px-4 py-3 text-slate-700">{row.limits}</td>
                    <td className="px-4 py-3 text-slate-700">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500">
            Pricing is approximate and may change. Always confirm current
            packages and offers on the official pricing pages.
          </p>
        </section>

        {/* Shared ProsConsSection */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        {/* Final verdict */}
        <section className="mt-12 space-y-4 rounded-3xl bg-slate-900 p-6 text-white shadow-sm">
          <h2 className="text-2xl font-bold">Final verdict</h2>
          <ul className="space-y-2 text-sm text-slate-100">
            <li>
              <strong>ThriveCart:</strong> Best when you sell a focused set of
              digital or info products and want fast, hosted funnels with bumps,
              upsells, and no WordPress maintenance.
            </li>
            <li>
              <strong>CartFlows:</strong> Ideal if your brand already runs on
              WordPress and WooCommerce and you want to turn standard product
              pages into optimized funnels with order bumps and A/B testing.
            </li>
            <li>
              <strong>WooCommerce:</strong> The flexible, long-term choice for
              full ecommerce stores with catalogs, shipping, taxes, and custom
              flows—provided you are ready to manage hosting, plugins, and
              performance tuning.
            </li>
          </ul>
        </section>

        {/* FAQs */}
        <section className="mt-12 space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">FAQs</h2>
          <div className="space-y-2 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-slate-100 bg-slate-50/60 p-4 open:bg-slate-50"
              >
                <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-slate-900 group-open:text-emerald-800">
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
