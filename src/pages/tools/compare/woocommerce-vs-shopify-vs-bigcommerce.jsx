import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  Zap,
  Crown,
  ArrowLeft,
  ShoppingCart,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "woocommerce vs shopify vs bigcommerce";
const canonical = buildCanonical("/tools/compare/woocommerce-vs-shopify-vs-bigcommerce");

const brandMeta = {
  woocommerce: {
    gradient: "from-purple-500 via-fuchsia-500 to-indigo-600",
    badge: "bg-purple-100 text-purple-900",
    logo: "https://logo.clearbit.com/woocommerce.com",
  },
  shopify: {
    gradient: "from-emerald-500 via-green-500 to-teal-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/shopify.com",
  },
  bigcommerce: {
    gradient: "from-blue-500 via-indigo-500 to-slate-600",
    badge: "bg-blue-100 text-blue-900",
    logo: "https://logo.clearbit.com/bigcommerce.com",
  },
};

const contenders = [
  {
    key: "woocommerce",
    name: "WooCommerce",
    blurb: "Ownable WordPress storefront with deep customization and plugin ecosystem.",
    url: "https://woocommerce.com",
  },
  {
    key: "shopify",
    name: "Shopify",
    blurb: "Hosted ecommerce with best-in-class checkout, POS, and omnichannel tools.",
    url: "https://www.shopify.com",
  },
  {
    key: "bigcommerce",
    name: "BigCommerce",
    blurb: "SaaS commerce for complex catalogs, B2B, and multi-storefront APIs.",
    url: "https://www.bigcommerce.com",
  },
];

const comparisonRows = [
  {
    label: "Store ownership & control",
    woocommerce:
      "Self-hosted inside WordPress. You control hosting, data, templates, and integrations.",
    shopify:
      "Fully hosted. Shopify controls infrastructure and checkout, but you get automatic scaling.",
    bigcommerce:
      "SaaS with hosted control plus multi-store APIs. Less customizable than Woo but more flexible in enterprise structures.",
  },
  {
    label: "Checkout customization",
    woocommerce:
      "Unlimited hooks to customize checkout, upsells, fields, and flows. Very flexible but needs dev support.",
    shopify:
      "Checkout Extensibility + functions/scripts on Shopify Plus; core plans rely on apps and checkout editor.",
    bigcommerce:
      "Stencil themes + APIs and server-side rendering. Flexible but not as open as WooCommerce.",
  },
  {
    label: "Apps & extensions",
    woocommerce:
      "Thousands of plugins including AutomateWoo, Subscriptions, memberships, and bespoke integrations.",
    shopify:
      "Largest app store with high-quality SaaS add-ons, but many carry recurring monthly fees.",
    bigcommerce:
      "Growing marketplace. Deeper native features reduce some app needs but the ecosystem is smaller.",
  },
  {
    label: "Speed to launch",
    woocommerce:
      "Depends on host/theme. Fast with Woo Express or starter kits; slower for custom builds.",
    shopify:
      "Fastest to launch. Templates + onboarding wizard and bundled hosting make DTC stores go live quickly.",
    bigcommerce:
      "Quick to go live with guided onboarding; more setup than Shopify but easier than a fully custom Woo build.",
  },
  {
    label: "B2B & multi-channel",
    woocommerce:
      "Strong with plugins for B2B, marketplaces, and headless builds, but you own the stack complexity.",
    shopify:
      "Excellent DTC, improving B2B in Shopify Plus, strong marketplace and social channel integrations.",
    bigcommerce:
      "Native B2B suite with price lists, quotes, buyer roles, and multi-storefront capabilities.",
  },
];

const scoreboard = [
  {
    label: "Ownership & flexibility",
    scores: { woocommerce: 9.5, shopify: 8.5, bigcommerce: 8.8 },
  },
  {
    label: "Speed to launch",
    scores: { woocommerce: 7.6, shopify: 9.3, bigcommerce: 8.4 },
  },
  {
    label: "Apps & ecosystem",
    scores: { woocommerce: 9.1, shopify: 9.6, bigcommerce: 8.2 },
  },
  {
    label: "B2B & expansion",
    scores: { woocommerce: 8.3, shopify: 8.7, bigcommerce: 9.2 },
  },
  {
    label: "Total cost of ownership",
    scores: { woocommerce: 8.9, shopify: 7.9, bigcommerce: 8.1 },
  },
];

const avg = (key) => {
  const total = scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0);
  return (total / scoreboard.length).toFixed(1);
};

const averages = {
  woocommerce: avg("woocommerce"),
  shopify: avg("shopify"),
  bigcommerce: avg("bigcommerce"),
};

const overallWinnerKey = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const labelMap = {
  woocommerce: "WooCommerce",
  shopify: "Shopify",
  bigcommerce: "BigCommerce",
};

const overallWinnerLabel = labelMap[overallWinnerKey] || overallWinnerKey;

const pricingTable = [
  {
    plan: "WooCommerce Core + Hosting",
    monthly: "$0 plugin",
    annual: "$15–$40/mo hosting (typical)",
    limits: "Unlimited products; cost scales with host, traffic, and paid extensions.",
    notes: "Best when you already use WordPress and want tight control over stack and data.",
  },
  {
    plan: "Shopify Basic",
    monthly: "$39",
    annual: "$29/mo billed yearly",
    limits: "2 staff seats, core reports, basic automation, 2.9% + 30¢ card fees (approx.).",
    notes: "Fastest all-in-one launch, especially for DTC brands using Shopify Payments.",
  },
  {
    plan: "BigCommerce Standard",
    monthly: "$39",
    annual: "$29/mo billed yearly",
    limits: "Up to ~$50K GMV before upgrade, multi-channel and coupons included.",
    notes: "Great for catalogs that plan to grow into B2B or multi-store without running WordPress.",
  },
];

const faqs = [
  {
    q: `Is WooCommerce cheaper than Shopify or BigCommerce in ${YEAR}?`,
    a: "WooCommerce core is free, so you pay for hosting, extensions, and development. It can be cheaper long term, especially if you already run WordPress—but quality hosting plus paid plugins often land in a similar range to Shopify or BigCommerce subscriptions.",
  },
  {
    q: "Which platform lets me customize checkout the most?",
    a: "WooCommerce. You own the PHP templates, hooks, and fields. Shopify’s checkout is heavily controlled unless you are on Shopify Plus. BigCommerce is flexible via themes and APIs but not as open as WooCommerce.",
  },
  {
    q: "Who should choose Shopify over WooCommerce?",
    a: "Choose Shopify if your priority is launch speed, bundled hosting, and a tightly managed SaaS experience with native POS, built-in fraud checks, and omnichannel integrations—without managing servers.",
  },
  {
    q: "When does BigCommerce beat Shopify or WooCommerce?",
    a: "Use BigCommerce when you need SaaS reliability plus native B2B features (buyer roles, price lists, quotes) and multi-storefront APIs—without maintaining WordPress or hitting Shopify’s app sprawl.",
  },
  {
    q: "Can I go headless with these platforms?",
    a: "Yes. WooCommerce, Shopify, and BigCommerce all support headless builds via APIs. BigCommerce and Shopify Plus lean in strongly; WooCommerce requires more dev work but offers full backend ownership.",
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
  woocommerce: {
    pros: [
      "Ownable codebase and database under your hosting",
      "Unlimited checkout and theme customization via hooks/templates",
      "Massive plugin ecosystem for nearly every ecommerce use case",
      "Headless-ready with REST and GraphQL APIs via plugins",
    ],
    cons: [
      "Requires solid hosting, updates, and security hardening",
      "More developer time to launch and maintain at scale",
      "Premium extensions can increase cost over time",
    ],
  },
  shopify: {
    pros: [
      "Fastest to launch with templates and built-in hosting",
      "High-converting checkout and robust payment/fulfillment ecosystem",
      "Huge app store, POS, and omnichannel integrations",
      "24/7 support and managed infrastructure",
    ],
    cons: [
      "Less control over checkout and backend logic unless on Shopify Plus",
      "Transaction fees when using external payment gateways",
      "App reliance can create complex and costly stacks",
    ],
  },
  bigcommerce: {
    pros: [
      "Strong native B2B features (price lists, quotes, buyer roles)",
      "Multiple storefronts from a single backend for brands/regions",
      "No additional transaction fees from the platform",
      "Robust API coverage for headless or composable architectures",
    ],
    cons: [
      "Smaller app marketplace than Shopify or WooCommerce",
      "Stencil theme system and configuration have a learning curve",
      "Annual revenue caps trigger required plan upgrades",
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
        className={`flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br ${meta.gradient}`}
      >
        {meta.logo ? (
          <img src={meta.logo} alt={`${name} logo`} className="h-full w-full object-cover" />
        ) : (
          <span className="text-sm font-bold text-white">
            {name.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>
      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${meta.badge}`}>
        {name}
      </span>
    </div>
  );
};

export default function WooCommerceVsShopifyVsBigCommercePage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`WooCommerce vs Shopify vs BigCommerce – Honest Comparison (${YEAR})`}
        description="Compare WooCommerce, Shopify, and BigCommerce across pricing, ownership, checkout customization, B2B features, and which platform fits your 2025 ecommerce roadmap."
        canonical={canonical}
        keywords={`${primaryKeyword}, ecommerce platform comparison, woocommerce, shopify, bigcommerce`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-purple-700">
          Ecommerce platforms
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          WooCommerce vs Shopify vs BigCommerce ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          <strong>WooCommerce</strong> gives WordPress teams full ownership and extreme
          customization. <strong>Shopify</strong> offers the fastest hosted launch with a proven
          checkout and POS. <strong>BigCommerce</strong> provides SaaS reliability, native B2B, and
          multi-storefront APIs. Here is how they stack up when you are planning a serious ecommerce
          roadmap.
        </p>

        {/* Quick verdict card */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="space-y-3 rounded-3xl bg-purple-50/90 p-6 ring-1 ring-purple-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-purple-800">
              <Sparkles className="h-5 w-5" /> Quick Verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>WooCommerce</strong> when you want ownable WordPress commerce with
              unlimited customization and control. Choose <strong>Shopify</strong> for the fastest
              go-live, proven checkout, and native POS/omnichannel. Choose{" "}
              <strong>BigCommerce</strong> when you need SaaS reliability plus B2B and
              multi-storefront features without maintaining WordPress.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-purple-800">
              <Crown className="h-4 w-4" /> Overall scoreboard winner: {overallWinnerLabel}{" "}
              <span className="text-xs font-medium text-purple-700">
                (avg: {averages[overallWinnerKey]}/10)
              </span>
            </div>
          </div>
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <ShoppingCart className="h-5 w-5 text-purple-700" /> Best for hosted speed
            </div>
            <p className="text-sm text-slate-700">
              <strong>Shopify</strong> wins when you need to launch fast with bundled hosting,
              payment processing, and POS—before you worry about deep customization.
            </p>
          </div>
        </div>

        {/* Contender cards */}
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
                <Sparkles className="h-5 w-5 text-white/80" />
              </div>
              <p className="relative mt-3 text-sm font-medium text-white/90">{card.blurb}</p>
            </a>
          ))}
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-purple-700" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">WooCommerce</th>
                  <th className="px-4 py-3">Shopify</th>
                  <th className="px-4 py-3">BigCommerce</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/60">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-900">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.woocommerce}</td>
                    <td className="px-4 py-3 text-slate-700">{row.shopify}</td>
                    <td className="px-4 py-3 text-slate-700">{row.bigcommerce}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Scoreboard */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <BarChart3 className="h-6 w-6 text-emerald-600" /> Scoreboard (1–10)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">WooCommerce</th>
                  <th className="px-4 py-3">Shopify</th>
                  <th className="px-4 py-3">BigCommerce</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const { woocommerce, shopify, bigcommerce } = row.scores;
                  const winnerVal = Math.max(woocommerce, shopify, bigcommerce);
                  const winnerKey =
                    winnerVal === woocommerce
                      ? "woocommerce"
                      : winnerVal === shopify
                      ? "shopify"
                      : "bigcommerce";
                  const winnerLabel = labelMap[winnerKey];

                  return (
                    <tr key={row.label} className="odd:bg-white even:bg-slate-50/60">
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-900">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "woocommerce"
                            ? "font-semibold text-purple-800"
                            : "text-slate-700"
                        }`}
                      >
                        {woocommerce}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "shopify"
                            ? "font-semibold text-emerald-800"
                            : "text-slate-700"
                        }`}
                      >
                        {shopify}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "bigcommerce"
                            ? "font-semibold text-blue-800"
                            : "text-slate-700"
                        }`}
                      >
                        {bigcommerce}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-900">{winnerLabel}</td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-purple-50 via-emerald-50 to-blue-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (overall winner)
                  </th>
                  <td className="px-4 py-3 font-semibold text-purple-800">
                    {averages.woocommerce}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.shopify}
                  </td>
                  <td className="px-4 py-3 font-semibold text-blue-800">
                    {averages.bigcommerce}
                  </td>
                  <td className="px-4 py-3 font-bold text-slate-900">{overallWinnerLabel}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Architecture & scaling */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-emerald-600" /> Architecture, scaling & operations
          </h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>WooCommerce:</strong> Runs on your WordPress stack. Ideal if you already have
              in-house or agency devs and want to control performance, caching (e.g., Cloudflare,
              LiteSpeed), and deployment workflows.
            </li>
            <li>
              <strong>Shopify:</strong> Fully managed SaaS. Scaling, security patches, and checkout
              uptime are handled by Shopify, which is why many brands tolerate less backend
              flexibility.
            </li>
            <li>
              <strong>BigCommerce:</strong> Also SaaS, but with a strong headless and
              multi-storefront focus for brands that want a composable architecture without running
              their own commerce engine.
            </li>
          </ul>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Pricing snapshots (high level)</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Monthly (approx.)</th>
                  <th className="px-4 py-3">Annual (approx.)</th>
                  <th className="px-4 py-3">Key limits</th>
                  <th className="px-4 py-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {pricingTable.map((row) => (
                  <tr key={row.plan}>
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-900">
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
            Real-world costs include apps, themes, payment processing, developer time, and
            integrations. Always model total cost of ownership (TCO), not just subscription price.
          </p>
        </section>

        {/* Pros & Cons */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        {/* Who should choose what */}
        <section className="mt-12 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Zap className="h-6 w-6 text-amber-600" /> Who should choose what?
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">WooCommerce</h3>
              <p className="text-sm text-slate-700">
                Best for teams already on WordPress who want to own the full stack and are happy to
                invest in dev/ops to get exactly the store they want.
              </p>
              <p className="mt-2 text-sm font-semibold text-purple-700">
                Ideal for: Content-heavy sites, SEO-first stores, and brands needing custom checkout
                or edge-case workflows.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Shopify</h3>
              <p className="text-sm text-slate-700">
                Best when you want a reliable, opinionated ecommerce engine with fast launch, strong
                checkout, and a mature ecosystem.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: DTC brands, first-time founders, and teams that prefer SaaS over managing
                hosting and infrastructure.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">BigCommerce</h3>
              <p className="text-sm text-slate-700">
                Best when you need serious B2B features, multiple storefronts, and a strong API
                layer without running your own commerce server.
              </p>
              <p className="mt-2 text-sm font-semibold text-blue-700">
                Ideal for: Growing brands, wholesalers, and multi-brand groups planning a
                composable/enterprise architecture.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold">FAQ</h2>
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
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-purple-700 ring-1 ring-purple-100 hover:bg-purple-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
