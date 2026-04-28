import React from "react";
import {
  Sparkles,
  Package,
  Truck,
  Crown,
  ArrowLeft,
  ShieldCheck,
  Layers,
  BarChart3,
  Gauge,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "printify vs printful vs shipstation";
const canonical = buildCanonical(
  "/tools/compare/printify-vs-printful-vs-shipstation"
);

const brandMeta = {
  printify: {
    gradient: "from-emerald-500 via-green-500 to-teal-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/printify.com",
  },
  printful: {
    gradient: "from-rose-500 via-orange-500 to-amber-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/printful.com",
  },
  shipstation: {
    gradient: "from-indigo-500 via-blue-500 to-sky-500",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/shipstation.com",
  },
};

const contenders = [
  {
    key: "printify",
    name: "Printify",
    blurb: "Marketplace POD with low base costs and many suppliers.",
    url: "https://printify.com",
    slug: "printify",
  },
  {
    key: "printful",
    name: "Printful",
    blurb: "Owned POD fulfillment with stronger QA and branding.",
    url: "https://printful.com",
    slug: "printful",
  },
  {
    key: "shipstation",
    name: "ShipStation",
    blurb:
      "Shipping automation for merchants managing their own inventory and orders.",
    url: "https://www.shipstation.com",
    slug: "shipstation",
  },
];

const comparisonRows = [
  {
    label: "Primary use",
    printify: "Print-on-demand marketplace",
    printful: "Print-on-demand with owned facilities",
    shipstation: "Shipping labels, routing & automation",
  },
  {
    label: "Inventory model",
    printify: "No inventory; provider prints per order",
    printful: "No inventory; controlled POD production",
    shipstation:
      "Requires your own inventory/warehouses (or 3PL partners) to ship from",
  },
  {
    label: "Fulfillment scope",
    printify: "Production + shipping handled by POD suppliers",
    printful: "Production + packing + shipping via Printful’s network",
    shipstation:
      "Connects stores and carriers; you or your 3PL handle picking & packing",
  },
  {
    label: "Branding",
    printify: "Limited; depends on individual provider",
    printful: "Branded packing slips, pack-ins and better unboxing control",
    shipstation:
      "Bring your own packaging, inserts, and carrier branding as you like",
  },
  {
    label: "Best for",
    printify: "Margin-focused POD testing and early scale",
    printful: "Premium POD quality and consistent branding",
    shipstation: "Merchants moving into self-fulfillment or 3PL operations",
  },
  {
    label: "Pricing",
    printify: "Free + Premium (~$29/mo) for product discounts",
    printful: "Higher base product costs; no core subscription",
    shipstation: "Subscription tiers based on shipment volume + labels",
  },
  {
    label: "Integrations",
    printify: "Shopify, Etsy, WooCommerce, eBay, BigCommerce, API",
    printful: "Shopify, Etsy, WooCommerce, Amazon, eBay, more",
    shipstation:
      "Major carts/marketplaces (Shopify, Amazon, eBay, Etsy) + carriers",
  },
];

const scoreboard = [
  { label: "Ease to launch", printify: 9.4, printful: 9.0, shipstation: 7.5 },
  { label: "Margin potential", printify: 9.2, printful: 8.0, shipstation: 8.8 },
  { label: "Quality control", printify: 7.8, printful: 9.1, shipstation: 8.5 },
  {
    label: "Shipping control",
    printify: 7.9,
    printful: 8.5,
    shipstation: 9.4,
  },
  {
    label: "Scaling options",
    printify: 8.6,
    printful: 8.4,
    shipstation: 9.2,
  },
];

const avg = (tool) =>
  (
    scoreboard.reduce((sum, row) => sum + (row[tool] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  printify: avg("printify"),
  printful: avg("printful"),
  shipstation: avg("shipstation"),
};

const overallWinner =
  Math.max(
    parseFloat(averages.printify),
    parseFloat(averages.printful),
    parseFloat(averages.shipstation)
  ) === parseFloat(averages.printify)
    ? "Printify"
    : Math.max(
        parseFloat(averages.printful),
        parseFloat(averages.shipstation)
      ) === parseFloat(averages.printful)
    ? "Printful"
    : "ShipStation";

const pricingTable = [
  {
    plan: "Printify Free / Premium",
    monthly: "Free; Premium from ~$29/mo",
    annual: "Discounts on annual Premium",
    limits:
      "Base product costs per item; Premium adds extra product discounts across catalog",
    notes:
      "Start free to validate designs; upgrade when discounts save more than the subscription fee.",
  },
  {
    plan: "Printful POD",
    monthly: "No subscription; pay per item + shipping",
    annual: "No core annual fee; discounts via sales volume tiers",
    limits:
      "Base prices generally higher than many Printify suppliers, but include owned production and QA",
    notes:
      "Good fit when you want quality and brand control without managing your own warehouse.",
  },
  {
    plan: "ShipStation Subscription",
    monthly: "Tiered plans based on shipment count",
    annual: "Discounts on annual plans at higher tiers",
    limits:
      "Shipment caps per month; extra labels may require higher plans or overages",
    notes:
      "Model total cost including carrier rates, 3PL fees, and staff time—not just the software bill.",
  },
];

const featureBullets = {
  model: [
    "Printify: Pure POD marketplace—suppliers print and ship one order at a time, no inventory risk.",
    "Printful: POD with owned facilities—more consistent output and QC vs a mixed marketplace.",
    "ShipStation: Shipping middleware—you bring inventory, warehouses, and carriers; it orchestrates labels and routing.",
  ],
  logistics: [
    "Printify: Shipping times and options vary per provider and region; you choose who to use.",
    "Printful: More predictable fulfillment since Printful owns more of the stack from print to pack.",
    "ShipStation: Strong control over carriers, services, and rules for domestic vs international orders.",
  ],
  automation: [
    "Printify: Simple order routing to providers; heavier logic typically lives in your store or apps.",
    "Printful: Auto-routing of POD orders plus some merchandising and catalog tools.",
    "ShipStation: Rich rules engine for carriers, service levels, tags, batch printing, and multi-channel routing.",
  ],
};

const prosCons = {
  printify: {
    pros: [
      "Lower base POD costs (especially with Premium) improve margins early on.",
      "Wide marketplace of suppliers and products to test different SKUs and regions.",
      "Easy to start a merch line without touching inventory or logistics.",
    ],
    cons: [
      "Quality and delivery times vary across providers—requires continuous vetting.",
      "Branding options depend heavily on each supplier’s capabilities.",
      "Less granular control over shipping and packaging than owning fulfillment.",
    ],
  },
  printful: {
    pros: [
      "Owned production facilities give more consistent quality and lead times.",
      "Stronger built-in branding options (packing slips, pack-ins, custom packaging).",
      "Solid integrations with major ecommerce platforms for streamlined POD flows.",
    ],
    cons: [
      "Higher base product costs reduce margins compared to many Printify suppliers.",
      "You are tied to one network instead of a marketplace of providers.",
      "Still POD, so unit economics may lag bulk production once you scale heavily.",
    ],
  },
  shipstation: {
    pros: [
      "Powerful shipping automation for multi-channel, multi-carrier operations.",
      "Works with your own warehouses or 3PL partners so you keep fulfillment flexible.",
      "Rules engine and batching save significant time at higher shipping volumes.",
    ],
    cons: [
      "You must manage inventory, picking, packing, and warehouse operations yourself (or via 3PL).",
      "Setup is more complex than a simple POD app if you are new to operations.",
      "Subscription + carrier + 3PL fees require careful modelling to maintain margins.",
    ],
  },
};

const faqs = [
  {
    q: `Which should I pick in ${YEAR}?`,
    a: "Pick Printify for low-cost, flexible print-on-demand while you test what sells. Choose Printful if you want stronger QA and branding with POD. Move to ShipStation when you are holding your own inventory and primarily need powerful shipping automation.",
  },
  {
    q: "Can I migrate from POD to ShipStation later?",
    a: "Yes. A common path is to validate designs with Printify or Printful, then bulk-produce best sellers with a manufacturer or 3PL and connect those warehouses into ShipStation to improve margins and shipping speed.",
  },
  {
    q: "Do I need coding to use any of these?",
    a: "No. Printify and Printful both offer native ecommerce integrations (Shopify, Etsy, WooCommerce, etc.). ShipStation is also no-code, but requires more configuration for carriers, services, and warehouse locations.",
  },
  {
    q: "Can I use ShipStation alongside POD tools?",
    a: "Yes. Some brands keep part of their catalog on POD while also stocking best sellers in their own warehouse or 3PL, with ShipStation managing labels and routing for the stocked items.",
  },
  {
    q: "Which is better for brand-building long term?",
    a: "Printful and ShipStation generally offer better long-term brand control. Printful improves POD unboxing and quality; ShipStation is best when you fully own packaging, inserts, and logistics across channels.",
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
  const lowered = name.toLowerCase(); // "printify", "printful", "shipstation"
  const meta =
    brandMeta[lowered] || {
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

export default function PrintifyVsPrintfulVsShipstationPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Printify vs Printful vs ShipStation (${YEAR}) – POD vs owning fulfillment`}
        description="Compare Printify, Printful, and ShipStation for print-on-demand vs owning fulfillment. See costs, branding, integrations, and when to move beyond POD."
        canonical={canonical}
        keywords={`${primaryKeyword}, print on demand comparison, shipstation vs printify vs printful`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Category + H1 */}
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Print on demand & shipping
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Printify vs Printful vs ShipStation ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Printify and Printful handle the production side of print-on-demand.
          ShipStation steps in when you store inventory yourself (or with a
          3PL) and need serious shipping automation. Here is how to think about
          each tool from launch to scale.
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
          <div className="rounded-3xl border border-emerald-100 bg-emerald-50 px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-emerald-900">
              <Sparkles className="h-5 w-5" />
              <p className="text-lg font-semibold">Quick verdict</p>
            </div>
            <p className="mt-2 text-slate-800">
              Start with <strong>Printify</strong> for flexible, lower-cost POD
              and supplier choice. Upgrade to <strong>Printful</strong> when you
              want tighter QA and better branding for your POD catalog. Move to{" "}
              <strong>ShipStation</strong> once you are holding inventory and
              need a dedicated shipping hub across channels and carriers.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Crown className="h-4 w-4 text-emerald-600" /> Overall scoreboard
              winner: {overallWinner}{" "}
              <span className="text-xs text-slate-600">
                (avg:{" "}
                {overallWinner === "Printify"
                  ? averages.printify
                  : overallWinner === "Printful"
                  ? averages.printful
                  : averages.shipstation}
                /10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              Think in stages: POD tools to validate and cash-flow, then
              ShipStation when shipping operations—not manufacturing—become your
              main bottleneck.
            </p>
          </div>
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
                  <th className="px-4 py-3">Printify</th>
                  <th className="px-4 py-3">Printful</th>
                  <th className="px-4 py-3">ShipStation</th>
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
                      {row.printify}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.printful}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.shipstation}
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
                  <th className="px-4 py-3">Printify</th>
                  <th className="px-4 py-3">Printful</th>
                  <th className="px-4 py-3">ShipStation</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const winnerValue = Math.max(
                    row.printify,
                    row.printful,
                    row.shipstation
                  );
                  const winner =
                    winnerValue === row.printify
                      ? "Printify"
                      : winnerValue === row.printful
                      ? "Printful"
                      : "ShipStation";
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
                          winner === "Printify"
                            ? "font-semibold text-emerald-800"
                            : "text-slate-700"
                        }`}
                      >
                        {row.printify}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Printful"
                            ? "font-semibold text-amber-800"
                            : "text-slate-700"
                        }`}
                      >
                        {row.printful}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "ShipStation"
                            ? "font-semibold text-indigo-800"
                            : "text-slate-700"
                        }`}
                      >
                        {row.shipstation}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">
                        {winner}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-emerald-50 via-amber-50 to-indigo-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.printify}
                  </td>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages.printful}
                  </td>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages.shipstation}
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
            <Gauge className="h-6 w-6 text-emerald-600" /> Feature Comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Zap className="h-5 w-5 text-emerald-600" /> Business model & risk
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.model.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Truck className="h-5 w-5 text-indigo-600" /> Logistics & delivery
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.logistics.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <ShieldCheck className="h-5 w-5 text-amber-600" /> Automation &
              routing
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
          <p className="text-sm text-slate-600">
            Pricing changes often and depends on order volume, shipment counts,
            and negotiated carrier rates. Always confirm current pricing and
            limits on each provider’s site before committing.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User Experience & Learning Curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Printify:</strong> Feels like an app marketplace. The main
              work is testing suppliers and products rather than managing
              logistics.
            </li>
            <li>
              <strong>Printful:</strong> More unified dashboard and workflows.
              Once configured, it is easier to keep quality and branding
              consistent.
            </li>
            <li>
              <strong>ShipStation:</strong> Built for operators. You configure
              carriers, services, and rules—ideal once shipping volume is high
              enough to justify the setup.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-World Use-Cases & Winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>New merch store validating products:</strong> Printify
              wins with low base costs and many suppliers to test designs
              quickly.
            </li>
            <li>
              <strong>Creator brand upgrading quality and branding:</strong>{" "}
              Printful wins with owned facilities, better QC, and unboxing
              options.
            </li>
            <li>
              <strong>Growing DTC brand owning fulfillment:</strong>{" "}
              ShipStation wins when you manage inventory (or work with 3PLs) and
              need strong multi-carrier shipping automation.
            </li>
            <li>
              <strong>Hybrid POD + stocked inventory:</strong> Use Printify or
              Printful for long-tail POD SKUs, and ShipStation for stocked
              best-sellers across Shopify, Amazon, and other marketplaces.
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
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Printify</h3>
              <p className="text-sm text-slate-700">
                Best when you want to launch fast, test many designs, and keep
                margins strong without touching fulfillment.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: New stores, creators, and margin-focused POD sellers.
              </p>
            </div>
            <div className="rounded-2xl border border-amber-100 bg-amber-50/80 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Printful</h3>
              <p className="text-sm text-slate-700">
                Best when brand perception and unboxing quality matter more than
                squeezing every cent of margin.
              </p>
              <p className="mt-2 text-sm font-semibold text-amber-700">
                Ideal for: Premium merch, influencer brands, and design-led
                stores.
              </p>
            </div>
            <div className="rounded-2xl border border-indigo-100 bg-indigo-50/80 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">ShipStation</h3>
              <p className="text-sm text-slate-700">
                Best when you are shipping many orders from your own facilities
                or 3PLs and need robust automation and routing.
              </p>
              <p className="mt-2 text-sm font-semibold text-indigo-700">
                Ideal for: Scaling DTC brands, omnichannel merchants, and
                operations teams.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">
            FAQ: Printify vs Printful vs ShipStation
          </h2>
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

        {/* Internal review links */}
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <a
            className="group flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold text-emerald-700 ring-1 ring-slate-200 hover:bg-emerald-50"
            href="/tools/printify"
          >
            Read the full Printify review
            <ArrowLeft className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-0.5" />
          </a>
          <a
            className="group flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold text-emerald-700 ring-1 ring-slate-200 hover:bg-emerald-50"
            href="/tools/shipstation"
          >
            Read the full ShipStation review
            <ArrowLeft className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-0.5" />
          </a>
        </div>

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
