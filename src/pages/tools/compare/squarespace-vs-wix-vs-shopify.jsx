import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  ClipboardList,
  Crown,
  ArrowLeft,
  Palette,
  ShoppingBag,
  BarChart3,
  Zap,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "squarespace vs wix vs shopify";
const canonical = buildCanonical(
  "/tools/compare/squarespace-vs-wix-vs-shopify"
);

const brandMeta = {
  squarespace: {
    gradient: "from-slate-900 via-slate-700 to-slate-500",
    badge: "bg-slate-100 text-slate-900",
    logo: "https://logo.clearbit.com/squarespace.com",
  },
  wix: {
    gradient: "from-indigo-500 via-blue-500 to-sky-500",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/wix.com",
  },
  shopify: {
    gradient: "from-emerald-500 via-green-600 to-teal-600",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/shopify.com",
  },
};

const contenders = [
  {
    key: "squarespace",
    name: "Squarespace",
    blurb:
      "Design-led sites and boutiques with built-in hosting and simple commerce.",
    url: "https://www.squarespace.com",
  },
  {
    key: "wix",
    name: "Wix",
    blurb:
      "Budget-friendly drag-and-drop builder with apps and templates for quick launches.",
    url: "https://www.wix.com",
  },
  {
    key: "shopify",
    name: "Shopify",
    blurb: "Ecommerce-first platform with deep checkout, apps, and POS.",
    url: "https://www.shopify.com",
  },
];

const comparisonRows = [
  {
    label: "Best for",
    squarespace: "Design-led sites, portfolios, and smaller shops",
    wix: "Budget, fast DIY sites with lots of flexibility",
    shopify: "Serious ecommerce, multi-channel, and retail POS",
  },
  {
    label: "Design & templates",
    squarespace: "Polished, cohesive, typography-led templates",
    wix: "Huge template library, highly free-form editor",
    shopify: "Commerce-focused themes, conversion-oriented layouts",
  },
  {
    label: "Ecommerce depth",
    squarespace: "Solid for small catalogs, subscriptions, basic checkout",
    wix: "Good basics; app store to extend ecommerce features",
    shopify: "Best-in-class checkout, inventory, apps, and POS",
  },
  {
    label: "Ease of use",
    squarespace:
      "Guided editing and curated blocks; harder to break layouts",
    wix: "Very easy drag-and-drop but can get messy over time",
    shopify:
      "Store setup is straightforward; deeper settings for serious ecommerce",
  },
  {
    label: "Blog & content",
    squarespace: "Strong blogging and content pages for creators",
    wix: "Good enough blogging and marketing pages for most small sites",
    shopify:
      "Decent blogging but weaker than pure CMS tools; commerce is the focus",
  },
  {
    label: "SEO & performance",
    squarespace: "Good SEO controls and generally solid performance",
    wix: "Improved SEO tools; performance depends on build discipline",
    shopify: "Strong technical SEO for stores; apps/themes can bloat if unmanaged",
  },
  {
    label: "Pricing & fees",
    squarespace:
      "Mid-tier; commerce plans add transaction/processing fees on some tiers",
    wix: "Budget-friendly; plans and fees vary by region and currency",
    shopify:
      "Higher base cost and app spend, but richest ecommerce stack and lower fees with Shopify Payments",
  },
];

const scoreboard = [
  {
    label: "Design quality",
    squarespace: 9.3,
    wix: 8.2,
    shopify: 8.0,
  },
  {
    label: "Ecommerce power",
    squarespace: 8.0,
    wix: 8.3,
    shopify: 9.5,
  },
  {
    label: "Ease for beginners",
    squarespace: 9.0,
    wix: 9.2,
    shopify: 8.3,
  },
  {
    label: "Value for money",
    squarespace: 8.5,
    wix: 9.0,
    shopify: 8.4,
  },
  {
    label: "Extensibility & apps",
    squarespace: 7.8,
    wix: 8.4,
    shopify: 9.3,
  },
];

const pricingTable = [
  {
    plan: "Squarespace (Business / Commerce)",
    monthly: "~$23–$49+/mo (annual)",
    annual: "Lower on annual billing",
    limits:
      "Built-in templates, basic-to-advanced commerce, scheduling as add-on, transaction fees on some plans.",
    notes:
      "Great for creators and boutiques wanting beautiful design plus manageable commerce.",
  },
  {
    plan: "Wix (Business / Ecommerce plans)",
    monthly: "~$23–$49+/mo (annual)",
    annual: "Lower on annual billing",
    limits:
      "Drag-and-drop builder, app marketplace, core ecommerce and bookings.",
    notes:
      "Strong value when budget is tight and the build stays disciplined.",
  },
  {
    plan: "Shopify (Basic / Shopify / Advanced)",
    monthly: "~$39–$399+/mo",
    annual: "Lower effective rate on annual",
    limits:
      "Robust ecommerce, apps, POS, lower payment fees with Shopify Payments.",
    notes:
      "Best ROI when you are serious about ecommerce growth and multi-channel.",
  },
];

const featureBullets = {
  siteBuilding: [
    "Squarespace: Opinionated, design-led layout system that keeps pages looking consistent without much tweaking.",
    "Wix: True drag-and-drop freedom for pixel-level control, but easy to create inconsistent layouts if you are not careful.",
    "Shopify: Theme- and section-based editor optimised for product, collection, and landing pages rather than brochure sites.",
  ],
  ecommerce: [
    "Squarespace: Great for smaller shops, subscriptions, donations, and selling alongside content or membership sites.",
    "Wix: Good for simple carts and services; app marketplace fills in gaps like bookings, memberships, and payments.",
    "Shopify: Deep inventory, multi-location stock, advanced discounts, abandoned cart flows, and omnichannel selling.",
  ],
  ecosystem: [
    "Squarespace: Smaller but curated extension ecosystem; strong integrations for scheduling, email, and basic marketing.",
    "Wix: Large app marketplace with many third-party add-ons across categories and price points.",
    "Shopify: Massive app and theme ecosystem, plus POS, payments, and a large partner/agency network.",
  ],
};

const prosCons = {
  squarespace: {
    pros: [
      "Best-in-class design templates with strong typography and layout defaults.",
      "Simple, guided editor that makes it hard to create an ugly site.",
      "Good blogging, portfolio, and basic membership features for creators.",
      "Commerce is solid enough for small stores, digital products, and subscriptions.",
    ],
    cons: [
      "Less flexible than Wix for edge-case layouts or custom flows.",
      "Not built for very large or complex ecommerce catalogs.",
      "Extension ecosystem is smaller than Wix or Shopify’s app store.",
    ],
  },
  wix: {
    pros: [
      "Very easy, visual drag-and-drop page building for non-technical users.",
      "Large template and app marketplace with many vertical-specific options.",
      "Competitive pricing for small sites and new businesses.",
      "Good balance of content, simple ecommerce, and marketing features.",
    ],
    cons: [
      "Free-form editing can lead to messy, inconsistent designs if unmanaged.",
      "Performance and maintainability can suffer on heavily customised pages.",
      "Ecommerce and POS are not as deep as Shopify for serious retail operations.",
    ],
  },
  shopify: {
    pros: [
      "Industry-leading ecommerce engine for products, variants, and inventory.",
      "Huge app ecosystem to extend checkout, marketing, shipping, and operations.",
      "Strong multi-channel and POS support for retail and pop-up stores.",
      "Scales well from early growth to high-volume ecommerce.",
    ],
    cons: [
      "Less suited for complex non-commerce sites or heavily editorial brands.",
      "Theme customisation and liquid templates can require developer help.",
      "Total cost can increase quickly once you add paid apps and higher-tier plans.",
    ],
  },
};

const faqs = [
  {
    q: `Is Squarespace better than Wix or Shopify in ${YEAR}?`,
    a: "Squarespace wins on design polish and simplicity, especially for content and small shops. Wix wins on budget and drag-and-drop flexibility. Shopify wins on ecommerce depth, apps, and POS when you are serious about selling.",
  },
  {
    q: "Who should pick Shopify?",
    a: "Choose Shopify if ecommerce is your main business, you have a growing catalog, need multi-location inventory or POS, or plan to invest in marketing and automation with apps and integrations.",
  },
  {
    q: "Who should pick Squarespace?",
    a: "Squarespace is ideal for creators, boutiques, and service businesses that want a beautiful site, strong content, and straightforward commerce without managing many apps or settings.",
  },
  {
    q: "Who should pick Wix?",
    a: "Wix suits small sites on a budget that want quick drag-and-drop assembly, lots of templates, and the flexibility to add features via the app marketplace.",
  },
  {
    q: "Can I migrate later if I outgrow one platform?",
    a: "Yes, but migrations are never one-click. Content usually exports more easily than product data and SEO setup. If you expect to become a serious store, starting on Shopify can avoid complex migrations later.",
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

const avg = (tool) =>
  (
    scoreboard.reduce((sum, row) => sum + (row[tool] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  squarespace: avg("squarespace"),
  wix: avg("wix"),
  shopify: avg("shopify"),
};

const overallWinner =
  Math.max(
    parseFloat(averages.squarespace),
    parseFloat(averages.wix),
    parseFloat(averages.shopify)
  ) === parseFloat(averages.squarespace)
    ? "Squarespace"
    : Math.max(
        parseFloat(averages.wix),
        parseFloat(averages.shopify)
      ) === parseFloat(averages.wix)
    ? "Wix"
    : "Shopify";

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

export default function SquarespaceVsWixVsShopifyPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Squarespace vs Wix vs Shopify (${YEAR}) – Website & ecommerce builder comparison`}
        description="Compare Squarespace, Wix, and Shopify on design, ecommerce depth, ease of use, pricing, and ecosystem so you can pick the right website and store builder."
        canonical={canonical}
        keywords={`${primaryKeyword}, website builder comparison, ecommerce builders, squarespace vs wix, wix vs shopify`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-700">
          Website &amp; ecommerce builders
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Squarespace vs Wix vs Shopify – Honest Comparison ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          <strong>Squarespace</strong> leads on design and simplicity.{" "}
          <strong>Wix</strong> is budget-friendly and flexible.{" "}
          <strong>Shopify</strong> is the heavyweight for ecommerce, apps, and
          POS. Here is how they compare across design, commerce depth, ease of
          use, pricing, and extensibility so you can pick the right platform for
          your next site or store.
        </p>

        {/* Quick verdict + highlights */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="space-y-3 rounded-3xl bg-slate-50/90 p-6 ring-1 ring-slate-200 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-slate-900">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-sm md:text-base text-slate-800">
              Choose <strong>Squarespace</strong> if brand and aesthetics matter
              most and you are running a content-first site or small shop. Pick{" "}
              <strong>Wix</strong> if you want maximum drag-and-drop freedom and
              are working with a tight budget. Go with <strong>Shopify</strong>{" "}
              if ecommerce is the core of your business and you expect to scale
              product, inventory, and channels.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              <Crown className="h-4 w-4" /> Overall scoreboard winner:{" "}
              {overallWinner}{" "}
              <span className="text-xs font-medium text-slate-700">
                (avg: {averages[overallWinner.toLowerCase()]}/10)
              </span>
            </div>
          </div>
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Palette className="h-5 w-5 text-indigo-700" /> Best for design
              polish
            </div>
            <p className="text-sm text-slate-700">
              Squarespace offers curated, typography-rich templates that look
              premium with minimal tweaks—ideal for visually led brands.
            </p>
          </div>
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <ShoppingBag className="h-5 w-5 text-emerald-700" /> Best for
              serious ecommerce
            </div>
            <p className="text-sm text-slate-700">
              Shopify wins when product, inventory, and multi-channel selling
              are at the centre of your strategy.
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
            <Layers className="h-6 w-6 text-slate-800" /> Side-by-side
            comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Squarespace</th>
                  <th className="px-4 py-3">Wix</th>
                  <th className="px-4 py-3">Shopify</th>
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
                      {row.squarespace}
                    </td>
                    <td className="px-4 py-3 text-slate-700">{row.wix}</td>
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
            <BarChart3 className="h-6 w-6 text-indigo-600" /> Scoreboard (out of
            10)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Squarespace</th>
                  <th className="px-4 py-3">Wix</th>
                  <th className="px-4 py-3">Shopify</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const winnerValue = Math.max(
                    row.squarespace,
                    row.wix,
                    row.shopify
                  );
                  const winner =
                    winnerValue === row.squarespace
                      ? "Squarespace"
                      : winnerValue === row.wix
                      ? "Wix"
                      : "Shopify";
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
                          winner === "Squarespace"
                            ? "font-semibold text-slate-900"
                            : "text-slate-700"
                        }`}
                      >
                        {row.squarespace}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Wix"
                            ? "font-semibold text-indigo-800"
                            : "text-slate-700"
                        }`}
                      >
                        {row.wix}
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
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {winner}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-slate-50 via-indigo-50 to-emerald-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-slate-900">
                    {averages.squarespace}
                  </td>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages.wix}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.shopify}
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
            <Gauge className="h-6 w-6 text-indigo-600" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Palette className="h-5 w-5 text-indigo-700" /> Site building &
              design system
            </h3>
            <ul className="space-y-2 text-sm md:text-base text-slate-700">
              {featureBullets.siteBuilding.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <ShoppingBag className="h-5 w-5 text-emerald-700" /> Ecommerce &
              scaling
            </h3>
            <ul className="space-y-2 text-sm md:text-base text-slate-700">
              {featureBullets.ecommerce.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Shield className="h-5 w-5 text-slate-800" /> Ecosystem, apps &
              integrations
            </h3>
            <ul className="space-y-2 text-sm md:text-base text-slate-700">
              {featureBullets.ecosystem.map((item) => (
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
            <table className="w-full min-w-[700px] text-left text-sm md:text-base">
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
            Pricing varies by region, currency, and promos. Squarespace and Wix
            are usually similar at the low end. Shopify often costs more in base
            plan and apps but can generate more value if ecommerce is your main
            revenue channel.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">
            User experience & learning curve
          </h2>
          <ul className="space-y-2 text-sm md:text-base text-slate-700">
            <li>
              <strong>Squarespace:</strong> Feels like a brand/portfolio
              builder. The editor is opinionated but keeps things elegant, which
              is ideal if you are not a designer.
            </li>
            <li>
              <strong>Wix:</strong> Feels like a blank canvas where you can drag
              anything anywhere. Easy for beginners, but design discipline is
              needed as the site grows.
            </li>
            <li>
              <strong>Shopify:</strong> Optimised around products, collections,
              and checkouts. Non-technical users can handle day-to-day, but
              advanced customisations often need a developer or apps.
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
              <strong>Portfolio, studio, or boutique brand site:</strong>{" "}
              Squarespace wins with premium templates and strong content tools.
            </li>
            <li>
              <strong>Local business or side project on a tight budget:</strong>{" "}
              Wix wins with aggressive pricing, easy drag-and-drop, and plenty
              of templates.
            </li>
            <li>
              <strong>Scaling ecommerce brand with paid traffic:</strong>{" "}
              Shopify wins with deep analytics, apps, and performance-oriented
              storefronts.
            </li>
            <li>
              <strong>
                Content-led brand that will add a modest shop later:
              </strong>{" "}
              Start on Squarespace; if ecommerce outgrows it, consider
              replatforming to Shopify.
            </li>
          </ul>
        </section>

        {/* Pros & cons (shared component) */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        {/* Who wins for… */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">Who wins for…</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Squarespace</h3>
              <p className="text-sm text-slate-700">
                Best when you want a beautiful, content-led site with light
                commerce and minimal configuration.
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-900">
                Ideal for: Designers, photographers, studios, boutiques, and
                hybrid content/commerce brands.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Wix</h3>
              <p className="text-sm text-slate-700">
                Best when flexibility and low cost matter more than strict
                design rules or deep ecommerce features.
              </p>
              <p className="mt-2 text-sm font-semibold text-indigo-800">
                Ideal for: Small local businesses, early-stage ideas, and DIY
                founders testing concepts.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Shopify</h3>
              <p className="text-sm text-slate-700">
                Best when ecommerce is the main business model and you plan to
                scale products, channels, and operations.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-800">
                Ideal for: DTC brands, retailers, and ambitious online stores
                investing in growth and automation.
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
        <div className="mt-10 flex items-center gap-2 text-sm text-slate-600">
          <Link
            to="/tools"
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
