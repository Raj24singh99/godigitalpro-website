import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  Zap,
  Crown,
  ArrowLeft,
  ShoppingCart,
  CreditCard,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "thrivecart vs cartflows vs shopify checkout";
const canonical = buildCanonical(
  "/tools/compare/thrivecart-vs-cartflows-vs-shopify-checkout"
);

const brandMeta = {
  thrivecart: {
    gradient: "from-emerald-500 via-teal-500 to-indigo-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/thrivecart.com",
  },
  cartflows: {
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/cartflows.com",
  },
  shopify: {
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/shopify.com",
  },
};

const contenders = [
  {
    key: "thrivecart",
    name: "ThriveCart",
    blurb: "Hosted high-converting cart suited for info/digital products.",
    url: "https://thrivecart.com/",
  },
  {
    key: "cartflows",
    name: "CartFlows",
    blurb: "WooCommerce funnels with bumps, upsells, and checkout control.",
    url: "https://cartflows.com/",
  },
  {
    key: "shopify",
    name: "Shopify Checkout",
    blurb: "Battle-tested ecommerce checkout with global payments.",
    url: "https://www.shopify.com/",
  },
];

const comparisonRows = [
  {
    label: "Ease of setup",
    thrivecart: "Hosted cart—fastest setup; minimal dev required.",
    cartflows: "Needs WooCommerce/WordPress setup; more steps than hosted.",
    shopify: "Quick to start; templates and payment setup guided.",
  },
  {
    label: "Funnel/upsell capability",
    thrivecart: "Strong bumps/upsells for digital/info products.",
    cartflows: "Deep control of bumps, upsells, and funnel logic within Woo.",
    shopify: "Good native checkout; upsells/bundles via apps or Plus.",
  },
  {
    label: "Payments & currencies",
    thrivecart: "Supports many gateways; solid currency coverage.",
    cartflows: "Follows Woo/Stripe/PayPal options; depends on plugins.",
    shopify: "Excellent global payments, Shop Pay, and multi-currency.",
  },
  {
    label: "Customization / control",
    thrivecart: "Hosted customization; less code-level control.",
    cartflows: "High control via WP/Woo + templates; dev-friendly.",
    shopify: "Customizable via theme/app ecosystem; core checkout stable.",
  },
  {
    label: "Value for purpose",
    thrivecart:
      "Great for solopreneurs and infoproducts; lifetime deals common.",
    cartflows: "Strong value if you already run WooCommerce and want funnels.",
    shopify:
      "Best for ecommerce scale and reliability; app and transaction costs add up.",
  },
];

const scoreboard = [
  { label: "Ease of setup", scores: { thrivecart: 9.2, cartflows: 7.8, shopify: 8.8 } },
  {
    label: "Funnel/upsell capability",
    scores: { thrivecart: 9.0, cartflows: 9.2, shopify: 8.4 },
  },
  {
    label: "Payments & currencies",
    scores: { thrivecart: 8.6, cartflows: 8.0, shopify: 9.5 },
  },
  {
    label: "Customization / control",
    scores: { thrivecart: 8.2, cartflows: 9.0, shopify: 8.0 },
  },
  {
    label: "Value for purpose",
    scores: { thrivecart: 9.4, cartflows: 8.2, shopify: 7.8 },
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
  shopify: avg("shopify"),
};
const overallWinner = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const pricingTable = [
  {
    plan: "ThriveCart (lifetime)",
    monthly: "Lifetime pricing",
    annual: "—",
    limits: "Hosted cart + bumps/upsells",
    notes: "Great for info/digital products; lifetime deals popular.",
  },
  {
    plan: "CartFlows (yearly)",
    monthly: "~US$79/yr+",
    annual: "Annual",
    limits: "Woo funnels, bumps, upsells",
    notes: "Best if you are on WooCommerce already.",
  },
  {
    plan: "Shopify / Shopify Plus",
    monthly: "From ~US$39 / custom",
    annual: "Lower on annual",
    limits: "Full ecommerce platform",
    notes:
      "Global payments and reliability; upsells and bundles via apps or Shopify Plus.",
  },
];

const faqs = [
  {
    q: `Is ThriveCart better than CartFlows or Shopify Checkout in ${YEAR}?`,
    a: "ThriveCart wins for fast, hosted carts with bumps/upsells for digital/info products. CartFlows wins for WooCommerce users needing deep funnel control. Shopify Checkout wins for global ecommerce scale, reliability, and payments.",
  },
  {
    q: "Which is best for WooCommerce funnels?",
    a: "CartFlows. It is native to WooCommerce with strong order bumps, upsells, downsells, and checkout step control.",
  },
  {
    q: "Which is best for global payments and reliability?",
    a: "Shopify Checkout. It is battle-tested at scale, supports multi-currency, offers Shop Pay, and has high trust with buyers.",
  },
  {
    q: "Which is easiest to launch for solopreneurs?",
    a: "ThriveCart. It is hosted, quick to configure, and focuses on digital/info products with proven cart and funnel layouts.",
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
      "Very fast hosted setup",
      "Strong bumps/upsells for digital/info products",
      "Lifetime pricing common",
    ],
    cons: [
      "Less control than self-hosted funnels",
      "Relies on its hosted environment",
      "Physical product workflows limited vs full ecommerce platforms",
    ],
  },
  cartflows: {
    pros: [
      "Deep funnel control on WooCommerce",
      "Developer-friendly customization",
      "Great for bumps/upsells in WordPress ecosystem",
    ],
    cons: [
      "Requires WooCommerce/WordPress management",
      "More setup than hosted carts",
      "Performance depends heavily on your hosting stack",
    ],
  },
  shopify: {
    pros: [
      "Excellent global payments and reliability",
      "Shop Pay and Shop Pay Installments boost conversion",
      "Large app ecosystem for upsells, bundles, and subscriptions",
    ],
    cons: [
      "Upsells often require apps or Shopify Plus",
      "App and transaction fees can add up",
      "Less granular control of the core checkout flow",
    ],
  },
};

const funnelInsights = {
  coreUseCases: [
    "ThriveCart: High-converting carts for courses, ebooks, and digital offers where you send traffic directly to checkout.",
    "CartFlows: Multi-step funnels for WooCommerce stores wanting pre- and post-purchase offers tightly integrated with WordPress.",
    "Shopify Checkout: Stable, scalable checkout for traditional ecommerce stores with multiple SKUs and global buyers.",
  ],
  techStackFit: [
    "ThriveCart: Works well alongside any site builder, course platform, or email tool—simply link or embed the cart.",
    "CartFlows: Fits teams already committed to WordPress + WooCommerce that want to turn product pages into funnels.",
    "Shopify Checkout: Ideal when Shopify is your main storefront and you want to keep catalog, inventory, and checkout unified.",
  ],
  optimization: [
    "ThriveCart: Focus is on proven templates, bumps, and one-click upsells; great for A/B testing offers and pricing.",
    "CartFlows: Lets you experiment with step order, templates, and conditional flows inside WordPress.",
    "Shopify Checkout: Optimization often comes from apps, theme tweaks, and Shopify reports rather than raw checkout layout changes.",
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

export default function ThrivecartVsCartflowsVsShopifyCheckoutPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`ThriveCart vs CartFlows vs Shopify Checkout – Honest Comparison (${YEAR})`}
        description="Compare ThriveCart, CartFlows, and Shopify Checkout on setup speed, funnels/upsells, payments, customization, pricing, and which fits your funnel and ecommerce stack best."
        canonical={canonical}
        keywords={`${primaryKeyword}, checkout comparison, funnel builder, ecommerce checkout tools`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Checkout & carts
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          ThriveCart vs CartFlows vs Shopify Checkout – Honest Comparison (
          {YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          ThriveCart, CartFlows, and Shopify Checkout all help you turn intent
          into orders, but they fit very different stacks. ThriveCart is the
          fastest hosted option with strong bumps and upsells for digital/info
          products. CartFlows is best if you already run WooCommerce and want
          deep funnel control. Shopify Checkout is the most battle-tested option
          for ecommerce scale and global payments. Here is how they compare.
        </p>

        {/* Quick verdict & highlight cards */}
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <div className="md:col-span-2 space-y-3 rounded-3xl bg-emerald-50/90 p-6 ring-1 ring-emerald-100">
            <div className="flex items-center gap-2 text-lg font-semibold text-emerald-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>ThriveCart</strong> for a fast hosted cart with
              bumps and upsells for digital/info products. Choose{" "}
              <strong>CartFlows</strong> to build conversion-focused funnels
              inside WooCommerce with deep control. Choose{" "}
              <strong>Shopify Checkout</strong> for global payments, reliability
              at scale, and an app ecosystem to extend upsells and bundles.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-800">
              <Crown className="h-4 w-4" /> Overall scoreboard winner:{" "}
              {overallWinner.charAt(0).toUpperCase() + overallWinner.slice(1)}{" "}
              <span className="text-xs font-medium text-emerald-700">
                (avg: {averages[overallWinner]}/10)
              </span>
            </div>
          </div>

          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <ShoppingCart className="h-5 w-5 text-emerald-700" />
              Best hosted cart for digital
            </div>
            <p className="text-sm text-slate-700">
              ThriveCart is the fastest to launch for info/digital products with
              proven cart templates, order bumps, and one-click upsells.
            </p>
          </div>

          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <CreditCard className="h-5 w-5 text-indigo-700" />
              Best global checkout
            </div>
            <p className="text-sm text-slate-700">
              Shopify Checkout provides multi-currency support, Shop Pay,
              high-uptime infrastructure, and a trusted brand for buyers
              worldwide.
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
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">ThriveCart</th>
                  <th className="px-4 py-3">CartFlows</th>
                  <th className="px-4 py-3">Shopify Checkout</th>
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
                      {row.shopify}
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
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">ThriveCart</th>
                  <th className="px-4 py-3">CartFlows</th>
                  <th className="px-4 py-3">Shopify Checkout</th>
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
                          winnerKey === "shopify"
                            ? "font-semibold text-amber-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.shopify}
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
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages.shopify}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* How they behave in real funnels */}
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
            <h3 className="text-xl font-semibold">Tech-stack fit</h3>
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

        {/* Pros & cons at a glance */}
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
            <CreditCard className="h-6 w-6 text-emerald-600" />
            Pricing snapshot
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
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
            Pricing is approximate and subject to change. Always verify current
            pricing and inclusions on the official pricing pages.
          </p>
        </section>

        {/* Shared ProsConsSection (global styling) */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        {/* Final verdict */}
        <section className="mt-12 space-y-4 rounded-3xl bg-slate-900 p-6 text-white shadow-sm">
          <h2 className="text-2xl font-bold">Final verdict</h2>
          <ul className="space-y-2 text-sm text-slate-100">
            <li>
              <strong>ThriveCart:</strong> Ideal if you sell digital or info
              products, want a fast hosted cart, and like lifetime pricing. Use
              it when you send traffic from your funnels directly to checkout.
            </li>
            <li>
              <strong>CartFlows:</strong> Best if your business runs on
              WordPress + WooCommerce and you want full control over checkout
              steps, bumps, upsells, and design within that ecosystem.
            </li>
            <li>
              <strong>Shopify Checkout:</strong> The choice for serious ecommerce
              brands that need global payments, proven conversion, and an app
              ecosystem to extend checkout with subscriptions, bundles, and
              post-purchase offers.
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
