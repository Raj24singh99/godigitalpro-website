import React from "react";
import {
  Sparkles,
  Crown,
  Layers,
  BarChart3,
  ArrowLeft,
  Gauge,
  Zap,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "woocommerce vs shopify vs wix";
const canonical = buildCanonical("/tools/compare/woocommerce-vs-shopify-vs-wix");

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
  wix: {
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/wix.com",
  },
};

const contenders = [
  {
    key: "woocommerce",
    name: "WooCommerce",
    blurb: "Ownable WordPress storefront with deep customization and plugin ecosystem.",
    url: "https://woocommerce.com/",
    slug: "woocommerce",
  },
  {
    key: "shopify",
    name: "Shopify",
    blurb: "Hosted ecommerce platform with world-class checkout and omnichannel support.",
    url: "https://www.shopify.com/",
    slug: "shopify",
  },
  {
    key: "wix",
    name: "Wix",
    blurb: "All-in-one website builder with fast setup for small and visual-first stores.",
    url: "https://www.wix.com/ecommerce",
    slug: "wix",
  },
];

const comparisonRows = [
  {
    label: "Ownership & control",
    woocommerce:
      "Self-hosted WordPress plugin. You control hosting, database, and code with no platform lock-in.",
    shopify:
      "Fully hosted SaaS. You manage config and Liquid themes but core infrastructure is controlled by Shopify.",
    wix: "Hosted builder. Limited access to backend and database, but simple for non-technical teams.",
  },
  {
    label: "Ease of use",
    woocommerce:
      "Needs WordPress familiarity. Setup wizards help, but plugin and hosting choices add complexity.",
    shopify:
      "Designed for merchants. Clean admin UX, structured settings, and guided onboarding for first-time store owners.",
    wix: "Drag-and-drop builder. Easiest visual editing and page creation for beginners.",
  },
  {
    label: "Design & themes",
    woocommerce:
      "Huge variety via WordPress themes and builders (Elementor, Kadence, etc.). Pixel control if you have dev/design support.",
    shopify:
      "Modern theme store with Online Store 2.0 and sections. Strong balance of aesthetics and performance.",
    wix: "Hundreds of templates and full visual editing; can become inconsistent if design governance is weak.",
  },
  {
    label: "Checkout & funnels",
    woocommerce:
      "Highly customizable checkout using hooks and plugins (CartFlows, FunnelKit). Payment options depend on gateway plugins.",
    shopify:
      "Best-in-class hosted checkout with high trust. Deeper funnel and checkout customization unlocked on Shopify Plus.",
    wix: "Simple guided checkout with built-in coupons and upsells; fewer advanced funnel controls and APIs.",
  },
  {
    label: "Apps & integrations",
    woocommerce:
      "Thousands of WordPress and WooCommerce extensions plus custom code. Strong for SEO, content, and niche use-cases.",
    shopify:
      "Massive app ecosystem for marketing, logistics, subscriptions, B2B, and finance. Most integrations target Shopify first.",
    wix: "Wix App Market covers core SMB needs (bookings, restaurants, memberships); fewer advanced ecommerce apps.",
  },
  {
    label: "Performance & scalability",
    woocommerce:
      "Scales with your hosting stack, caching, and developer investment. Can go headless with REST/GraphQL APIs.",
    shopify:
      "Auto-scaled infra, CDN, and PCI compliance out of the box. Handles large catalogs and flash sales with minimal tuning.",
    wix: "Good performance for small to mid-sized catalogs. Very large or complex operations typically outgrow it.",
  },
  {
    label: "Content & blogging",
    woocommerce:
      "Built on WordPress—the strongest CMS for long-form content, SEO, and multi-author publishing.",
    shopify:
      "Decent blogging for basic needs, but less flexible than WordPress for complex content architectures.",
    wix: "Simple blogging and content features suitable for smaller teams and basic SEO.",
  },
  {
    label: "Best for",
    woocommerce:
      "Teams that want maximum control, strong content + commerce, and are comfortable managing WordPress.",
    shopify:
      "Merchants who want a reliable, hosted engine that can scale and integrate with modern ecommerce tooling.",
    wix: "Small businesses, creators, and local brands wanting a fast, visual, low-ops storefront.",
  },
];

const scoreboard = [
  { label: "Customization & control", woocommerce: 9.6, shopify: 8.5, wix: 7.2 },
  { label: "Ease of use", woocommerce: 7.2, shopify: 9.0, wix: 9.3 },
  { label: "Ecommerce depth", woocommerce: 8.9, shopify: 9.5, wix: 7.8 },
  { label: "Ecosystem & apps", woocommerce: 9.2, shopify: 9.7, wix: 7.9 },
  { label: "Content & SEO", woocommerce: 9.5, shopify: 8.2, wix: 7.8 },
  { label: "Value for money", woocommerce: 8.9, shopify: 7.9, wix: 8.4 },
];

const avg = (tool) =>
  (
    scoreboard.reduce((sum, row) => sum + (row[tool] || 0), 0) / scoreboard.length
  ).toFixed(1);

const averages = {
  woocommerce: avg("woocommerce"),
  shopify: avg("shopify"),
  wix: avg("wix"),
};

const overallWinner =
  Math.max(
    parseFloat(averages.woocommerce),
    parseFloat(averages.shopify),
    parseFloat(averages.wix)
  ) === parseFloat(averages.shopify)
    ? "Shopify"
    : Math.max(
        parseFloat(averages.woocommerce),
        parseFloat(averages.wix)
      ) === parseFloat(averages.woocommerce)
    ? "WooCommerce"
    : "Wix";

const pricingTable = [
  {
    plan: "WooCommerce Core + Typical Hosting",
    monthly: "$0 for core plugin",
    annual: "$15–$40+/mo hosting (billed separately)",
    limits: "Extensions add extra cost; you choose gateway fees and infra.",
    notes: "Most flexible cost structure. Great if you already invest in WordPress hosting.",
  },
  {
    plan: "Shopify Basic / Shopify",
    monthly: "From ~$39/mo for Basic",
    annual: "Lower effective rate when billed annually",
    limits: "Transaction fees if not using Shopify Payments; app fees stack as you grow.",
    notes: "Straightforward bundled pricing with hosting, SSL, and core ecommerce features included.",
  },
  {
    plan: "Wix Business Basic / Unlimited",
    monthly: "From ~$27/mo for Business Basic",
    annual: "Discounts on annual plans",
    limits: "Storage, bandwidth, and feature caps per plan.",
    notes: "Good all-in-one value for smaller catalogs and local businesses.",
  },
];

const featureBullets = {
  building: [
    "WooCommerce: Build commerce directly inside WordPress using your existing theme or page builder.",
    "Shopify: Modern Online Store 2.0 editor with sections, blocks, and fast responsive themes.",
    "Wix: Drag-and-drop canvas for visually rich pages without touching code.",
  ],
  growth: [
    "WooCommerce: Pairs naturally with content-led SEO, email marketing plugins, and headless frontends.",
    "Shopify: Deep ecosystem for ads, email, SMS, UGC, subscriptions, and international expansion.",
    "Wix: Built-in email campaigns, social tools, and basic automation for small teams.",
  ],
  operations: [
    "WooCommerce: Flexible order workflows via plugins; you choose shipping, tax, and ERP integrations.",
    "Shopify: Mature ecosystem for 3PLs, inventory apps, and POS—ideal for omnichannel retail.",
    "Wix: Simple inventory, bookings, and appointments features for service + product mixes.",
  ],
};

const prosCons = {
  woocommerce: {
    pros: [
      "Full control over hosting, database, and code with no SaaS lock-in",
      "Best-in-class blogging and content via WordPress",
      "Massive plugin ecosystem and headless-friendly APIs",
    ],
    cons: [
      "You are responsible for hosting, security, and performance tuning",
      "Higher setup and maintenance complexity for non-technical teams",
      "Quality of experience depends heavily on theme, plugins, and host choice",
    ],
  },
  shopify: {
    pros: [
      "Fast, reliable hosted platform with secure, optimised checkout",
      "Huge app ecosystem and integrations for serious ecommerce operations",
      "Strong support for multi-channel selling (online, POS, social, marketplaces)",
    ],
    cons: [
      "Less granular control over backend and database compared to WooCommerce",
      "Transaction fees if not using Shopify Payments in many regions",
      "Content and CMS flexibility weaker than a full WordPress stack",
    ],
  },
  wix: {
    pros: [
      "Simplest drag-and-drop site and store builder for non-technical users",
      "Rich template library and visual editing ideal for small visual brands",
      "All-in-one bundle for hosting, SSL, and basic marketing tools",
    ],
    cons: [
      "Limited backend access and extensibility compared to WooCommerce or Shopify",
      "Less suitable for very large catalogs or complex inventory workflows",
      "Advanced SEO, performance, and integration options are more constrained",
    ],
  },
};

const faqs = [
  {
    q: `Who wins overall in ${YEAR}?`,
    a: "Shopify wins overall for most growing ecommerce brands thanks to its hosted reliability, app ecosystem, and proven checkout. WooCommerce wins when you prioritise ownership, content + commerce, and developer-driven customization. Wix wins when ease of use and fast launch for a smaller catalog matter most.",
  },
  {
    q: "Which is best for beginners?",
    a: "Wix is the easiest to start with if you are non-technical and want a good-looking site live quickly. Shopify is nearly as simple but more ecommerce-focused long term. WooCommerce is best if you already understand WordPress.",
  },
  {
    q: "When should I choose WooCommerce over Shopify?",
    a: "Choose WooCommerce if you want full control of hosting and code, rely heavily on content marketing, or need very specific custom flows that WordPress developers can build. It is also attractive when you want to avoid long-term SaaS lock-in.",
  },
  {
    q: "Is WooCommerce harder to maintain?",
    a: "Yes, you or your agency need to manage hosting, backups, updates, and security. Managed WordPress/WooCommerce hosting or Woo Express can reduce this overhead but it is still more hands-on than Shopify or Wix.",
  },
  {
    q: "Can Wix scale for large ecommerce brands?",
    a: "Wix handles small to mid-sized catalogs comfortably. For thousands of SKUs, complex logistics, B2B, or multi-region setups, most teams eventually move to Shopify or a more customizable WooCommerce stack.",
  },
  {
    q: "Which platform is best for content-heavy SEO?",
    a: "WooCommerce on WordPress is the strongest for content-heavy SEO and publishing workflows, with deep control over URLs, taxonomies, and editorial tooling. Shopify and Wix can rank well but are more opinionated and limited for advanced structures.",
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
  const key = lowered.includes("woo")
    ? "woocommerce"
    : lowered.includes("shopify")
    ? "shopify"
    : lowered.includes("wix")
    ? "wix"
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

export default function WooCommerceVsShopifyVsWixPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`WooCommerce vs Shopify vs Wix (${YEAR}) – Ecommerce platform comparison`}
        description="Compare WooCommerce, Shopify, and Wix for ownership, customization, ease of use, pricing, and which ecommerce platform is right for your brand."
        canonical={canonical}
        keywords={`${primaryKeyword}, ecommerce platform comparison, woocommerce vs shopify, woocommerce vs wix, shopify vs wix`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-purple-700">
          Ecommerce platforms
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          WooCommerce vs Shopify vs Wix ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          WooCommerce gives you complete ownership on WordPress, Shopify balances launch speed with
          serious ecommerce depth, and Wix delivers the easiest visual builder for smaller stores.
          Here is a structured breakdown so you can choose the right platform for your next
          storefront.
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
          <div className="rounded-3xl border border-purple-100 bg-purple-50 px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-purple-900">
              <Sparkles className="h-5 w-5" />
              <p className="text-lg font-semibold">Quick verdict</p>
            </div>
            <p className="mt-2 text-slate-800">
              Choose <strong>WooCommerce</strong> if you want full ownership, content-first growth,
              and developer-grade flexibility. Pick <strong>Shopify</strong> if you want a hosted
              engine that scales with serious ecommerce features, apps, and POS. Go with{" "}
              <strong>Wix</strong> if you need to launch a visually rich, smaller store quickly with
              minimal technical overhead.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Crown className="h-4 w-4 text-emerald-600" /> Overall scoreboard winner:{" "}
              {overallWinner}{" "}
              <span className="text-xs text-slate-600">
                (avg:{" "}
                {overallWinner === "WooCommerce"
                  ? averages.woocommerce
                  : overallWinner === "Shopify"
                  ? averages.shopify
                  : averages.wix}
                /10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              Pick based on whether you prioritise ownership and content, hosted scalability, or the
              fastest visual launch with low complexity.
            </p>
          </div>
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-purple-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">WooCommerce</th>
                  <th className="px-4 py-3">Shopify</th>
                  <th className="px-4 py-3">Wix</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.woocommerce}</td>
                    <td className="px-4 py-3 text-slate-700">{row.shopify}</td>
                    <td className="px-4 py-3 text-slate-700">{row.wix}</td>
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
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">WooCommerce</th>
                  <th className="px-4 py-3">Shopify</th>
                  <th className="px-4 py-3">Wix</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const winnerValue = Math.max(row.woocommerce, row.shopify, row.wix);
                  const winner =
                    winnerValue === row.woocommerce
                      ? "WooCommerce"
                      : winnerValue === row.shopify
                      ? "Shopify"
                      : "Wix";
                  return (
                    <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winner === "WooCommerce"
                            ? "font-semibold text-purple-800"
                            : "text-slate-700"
                        }`}
                      >
                        {row.woocommerce}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Shopify"
                            ? "font-semibold text-emerald-800"
                            : "text-slate-700"
                        }`}
                      >
                        {row.shopify}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Wix" ? "font-semibold text-amber-800" : "text-slate-700"
                        }`}
                      >
                        {row.wix}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">{winner}</td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-purple-50 via-emerald-50 to-amber-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-purple-800">
                    {averages.woocommerce}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.shopify}
                  </td>
                  <td className="px-4 py-3 font-semibold text-amber-800">{averages.wix}</td>
                  <td className="px-4 py-3 font-bold text-slate-900">{overallWinner}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Feature comparison */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-purple-600" /> Feature Comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Zap className="h-5 w-5 text-emerald-600" /> Store building & customization
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.building.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Shield className="h-5 w-5 text-indigo-600" /> Growth, marketing & funnels
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.growth.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Layers className="h-5 w-5 text-amber-600" /> Operations & ecosystem
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.operations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Pricing Snapshots</h2>
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
            Pricing changes frequently and depends on region, payment gateway choices, traffic
            levels, and promos. Always confirm current plans and transaction fees directly on each
            vendor’s pricing page before committing.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User Experience & Learning Curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>WooCommerce:</strong> Feels like extending a WordPress site into a store.
              Familiar for teams already on WordPress, but plugin and hosting choices mean more
              decisions and maintenance.
            </li>
            <li>
              <strong>Shopify:</strong> Clean admin built specifically for merchants. Most teams can
              manage catalog, orders, and basic marketing without developers after initial setup.
            </li>
            <li>
              <strong>Wix:</strong> Visual-first. Best if you think in pages and layouts rather than
              in data models or themes. Minimal training, but less structure for complex catalogs.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-World Use-Cases & Winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Content-led DTC and niche brands:</strong> WooCommerce wins when blog, SEO,
              and storytelling are central to acquisition and you already run on WordPress.
            </li>
            <li>
              <strong>High-growth ecommerce and omnichannel retail:</strong> Shopify wins with its
              ecosystem, POS, and operational tooling for serious inventory and logistics.
            </li>
            <li>
              <strong>Local businesses, creators, and service + product mixes:</strong> Wix wins
              with its simple builder, bookings, and lightweight ecommerce stack.
            </li>
            <li>
              <strong>Headless and custom frontends:</strong> WooCommerce or Shopify (with Storefront
              API) work well; pick based on whether you want hosted infra (Shopify) or full control
              (WooCommerce).
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
              <h3 className="text-lg font-semibold">WooCommerce</h3>
              <p className="text-sm text-slate-700">
                Best when you want content + commerce on WordPress with complete control over
                hosting, plugins, and custom flows.
              </p>
              <p className="mt-2 text-sm font-semibold text-purple-700">
                Ideal for: Content-heavy brands, SEO-first DTC, teams with WordPress developers or
                agencies.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Shopify</h3>
              <p className="text-sm text-slate-700">
                Best for serious ecommerce operations that need reliable infra, powerful apps, and
                omnichannel (online + POS).
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: Scaling DTC brands, retail stores, and teams wanting to move fast without
                managing servers.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Wix</h3>
              <p className="text-sm text-slate-700">
                Best for simple catalogs and visually-led sites where speed to launch and ease of
                editing are more important than deep customization.
              </p>
              <p className="mt-2 text-sm font-semibold text-amber-700">
                Ideal for: Solo founders, local businesses, and creators selling a small range of
                products or services.
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
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-purple-700 ring-1 ring-purple-100 hover:bg-purple-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
