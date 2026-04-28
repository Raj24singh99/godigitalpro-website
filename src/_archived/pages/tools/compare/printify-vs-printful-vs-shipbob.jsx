import React from "react";
import {
  Sparkles,
  Truck,
  Package,
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
const primaryKeyword = "printify vs printful vs shipbob";
const canonical = buildCanonical(
  "/tools/compare/printify-vs-printful-vs-shipbob"
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
  shipbob: {
    gradient: "from-blue-500 via-sky-500 to-indigo-600",
    badge: "bg-sky-100 text-sky-900",
    logo: "https://logo.clearbit.com/shipbob.com",
  },
};

const contenders = [
  {
    key: "printify",
    name: "Printify",
    blurb: "Marketplace POD with many suppliers and low base costs.",
    url: "https://printify.com",
    slug: "printify",
  },
  {
    key: "printful",
    name: "Printful",
    blurb: "Owned fulfillment POD with tighter QA and branding options.",
    url: "https://printful.com",
    slug: "printful",
  },
  {
    key: "shipbob",
    name: "ShipBob",
    blurb: "3PL warehousing for brands ready to hold inventory.",
    url: "https://shipbob.com",
    slug: "shipbob",
  },
];

const comparisonRows = [
  {
    label: "Primary use",
    printify: "POD marketplace for flexibility & price",
    printful: "POD with owned production & QA",
    shipbob: "3PL for stocked inventory",
  },
  {
    label: "Catalog / Products",
    printify: "900+ SKUs via many providers",
    printful: "Large catalog, owned facilities",
    shipbob: "Not POD; store and ship your SKUs",
  },
  {
    label: "Quality control",
    printify: "Varies by provider; choose carefully",
    printful: "Higher consistency; in-house QC",
    shipbob: "Seller controls suppliers/QA",
  },
  {
    label: "Branding options",
    printify: "Provider-dependent; some inserts",
    printful: "Branded packing slips/pack-ins",
    shipbob: "Full control if you supply materials",
  },
  {
    label: "Inventory model",
    printify: "No inventory; print-on-demand per order",
    printful: "No inventory; POD with optional warehousing add-ons",
    shipbob: "You pre-buy and store inventory in their network",
  },
  {
    label: "Pricing",
    printify: "Free + Premium (~$29/mo) for additional discounts",
    printful: "No subscription; higher base product costs",
    shipbob: "Custom; storage, pick/pack, and shipping fees",
  },
  {
    label: "Best for",
    printify: "Testing designs and margin-first POD",
    printful: "Premium POD quality and branding",
    shipbob: "Scaling brands with bulk inventory and SLAs",
  },
];

const scoreboard = [
  { label: "Catalog breadth", printify: 9.4, printful: 8.7, shipbob: 6.0 },
  { label: "Unit economics", printify: 9.2, printful: 7.8, shipbob: 8.5 },
  { label: "Quality control", printify: 7.8, printful: 9.1, shipbob: 8.8 },
  { label: "Branding options", printify: 7.9, printful: 9.0, shipbob: 9.2 },
  { label: "Scalability", printify: 8.6, printful: 8.4, shipbob: 9.4 },
];

const avg = (tool) =>
  (
    scoreboard.reduce((sum, row) => sum + (row[tool] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  printify: avg("printify"),
  printful: avg("printful"),
  shipbob: avg("shipbob"),
};

const overallWinner =
  Math.max(
    parseFloat(averages.printify),
    parseFloat(averages.printful),
    parseFloat(averages.shipbob)
  ) === parseFloat(averages.printify)
    ? "Printify"
    : Math.max(
        parseFloat(averages.printful),
        parseFloat(averages.shipbob)
      ) === parseFloat(averages.printful)
    ? "Printful"
    : "ShipBob";

const pricingTable = [
  {
    plan: "Printify Free / Premium",
    monthly: "Free; Premium from ~$29/mo",
    annual: "Discounts on annual Premium",
    limits:
      "Base product costs per item; Premium unlocks extra discounts across catalog",
    notes:
      "Start free to test; upgrade once your volume makes the extra discount pay for itself.",
  },
  {
    plan: "Printful POD",
    monthly: "No subscription; pay per item + shipping",
    annual: "No core annual fee; discounts via volume tiers",
    limits:
      "Base prices are typically higher but include owned production + QA",
    notes:
      "Best if you prioritise quality, branding, and fewer fulfillment variables.",
  },
  {
    plan: "ShipBob 3PL",
    monthly: "Custom; depends on storage + order volume",
    annual: "Rates negotiated based on volume and network usage",
    limits:
      "Storage fees per pallet/bin, pick & pack per order, shipping billed at carrier rates",
    notes:
      "Move here when you are ready to hold inventory and want 3PL-level SLAs and routing.",
  },
];

const featureBullets = {
  model: [
    "Printify: Pure play POD marketplace. You never touch inventory; each supplier prints and ships on demand.",
    "Printful: POD with owned facilities. You still avoid inventory risk while benefiting from centralised QA.",
    "ShipBob: True 3PL. You buy inventory in advance, store it in their network, and they handle fulfillment.",
  ],
  logistics: [
    "Printify: Production and shipping times vary by supplier and region; you can pick providers by location.",
    "Printful: More predictable lead times because manufacturing and logistics are owned / tightly controlled.",
    "ShipBob: SLAs and multi-warehouse routing help reduce delivery times at scale, especially in key markets.",
  ],
  branding: [
    "Printify: Packaging and inserts depend on the individual print provider; options vary widely.",
    "Printful: Strong built-in branding options like custom packing slips, pack-ins, and branded boxes.",
    "ShipBob: You can fully design the unboxing experience if you provide branded packaging and inserts.",
  ],
};

const prosCons = {
  printify: {
    pros: [
      "Large POD marketplace with hundreds of suppliers and SKUs.",
      "Lower base costs, especially with Premium, which improves margins.",
      "Easy to test many designs and suppliers without committing to inventory.",
    ],
    cons: [
      "Quality and shipping times vary by supplier; you must vet partners.",
      "Branding options are inconsistent and provider-dependent.",
      "Less control over logistics and packaging versus owning more of the stack.",
    ],
  },
  printful: {
    pros: [
      "Owned production facilities with tighter quality control and consistent output.",
      "Stronger built-in branding options for packaging and inserts.",
      "Good balance between POD flexibility and brand experience control.",
    ],
    cons: [
      "Higher base product costs than many Printify suppliers.",
      "You are locked into one fulfillment network instead of many providers.",
      "Still POD, so margins may lag bulk production once volume is high.",
    ],
  },
  shipbob: {
    pros: [
      "Full 3PL solution with warehousing, pick/pack, and carrier relationships.",
      "Lets you run bulk production for best-sellers and improve unit economics.",
      "Multi-warehouse routing and SLAs help with delivery speed and reliability.",
    ],
    cons: [
      "Requires upfront investment in inventory and operations forecasting.",
      "More complex to set up than a pure POD app on Shopify or Etsy.",
      "Pricing structure (storage + pick/pack + shipping) needs careful modelling.",
    ],
  },
};

const faqs = [
  {
    q: `Which should I pick in ${YEAR}?`,
    a: "Pick Printify for flexible, low-cost POD and supplier choice, Printful for tighter quality control and branding out of the box, and ShipBob once you are holding inventory and want 3PL-level fulfillment and SLAs.",
  },
  {
    q: "Can I move from Printify/Printful to ShipBob later?",
    a: "Yes. A common path is to validate designs with Printify or Printful, identify best-sellers, then produce those in bulk with a manufacturer and send inventory into ShipBob to improve margins and shipping speed.",
  },
  {
    q: "Is Printify Premium worth it?",
    a: "Printify Premium makes sense when your monthly order volume is high enough that the extra product discounts save more than the $29/month fee. Below that threshold, stay on the free tier while testing designs.",
  },
  {
    q: "Do I ever use both POD and ShipBob together?",
    a: "Yes. Some brands keep long-tail designs on POD for flexibility while moving core best-sellers into bulk production and ShipBob warehouses to optimise margins and shipping speed.",
  },
  {
    q: "Which is better for brand-building?",
    a: "Printful and ShipBob generally offer stronger branding options. Printful is easiest when you are still POD-only; ShipBob wins once you are ready to own packaging, inserts, and inventory at scale.",
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
  const lowered = name.toLowerCase(); // "printify", "printful", "shipbob"
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

export default function PrintifyVsPrintfulVsShipBobPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Printify vs Printful vs ShipBob (${YEAR}) – POD vs 3PL comparison`}
        description="Compare Printify, Printful, and ShipBob for print-on-demand and 3PL needs. Understand cost, quality, branding, and when to move from POD to bulk inventory."
        canonical={canonical}
        keywords={`${primaryKeyword}, print on demand comparison, POD vs 3PL`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Category + H1 */}
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Print on demand & 3PL
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Printify vs Printful vs ShipBob ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Printify offers flexible, low-cost POD via many suppliers. Printful
          owns production for more consistent quality and branding. ShipBob is
          the 3PL you graduate to once best-sellers justify holding inventory.
          Here is how to choose the right mix.
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
              Use <strong>Printify</strong> to test designs and maximise
              margins, <strong>Printful</strong> for premium POD quality and
              branding, and <strong>ShipBob</strong> once your catalog is
              stable, and you are ready to hold inventory for better unit
              economics and faster shipping.
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
                  : averages.shipbob}
                /10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              Think of them as stages, not rivals: POD to learn and cash-flow,
              3PL when you are ready to invest in inventory and brand.
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
                  <th className="px-4 py-3">ShipBob</th>
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
                      {row.shipbob}
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
                  <th className="px-4 py-3">ShipBob</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const winnerValue = Math.max(
                    row.printify,
                    row.printful,
                    row.shipbob
                  );
                  const winner =
                    winnerValue === row.printify
                      ? "Printify"
                      : winnerValue === row.printful
                      ? "Printful"
                      : "ShipBob";
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
                          winner === "ShipBob"
                            ? "font-semibold text-sky-800"
                            : "text-slate-700"
                        }`}
                      >
                        {row.shipbob}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">
                        {winner}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-emerald-50 via-amber-50 to-sky-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.printify}
                  </td>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages.printful}
                  </td>
                  <td className="px-4 py-3 font-semibold text-sky-800">
                    {averages.shipbob}
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
              <Truck className="h-5 w-5 text-sky-600" /> Logistics & delivery
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.logistics.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <ShieldCheck className="h-5 w-5 text-amber-600" /> Branding &
              experience
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.branding.map((item) => (
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
            Pricing changes often and depends on order volume, storage, and
            negotiated rates. Always confirm current pricing and limits on each
            provider’s website before committing.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User Experience & Learning Curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Printify:</strong> Feels like an app marketplace. The main
              learning curve is picking and testing the right suppliers for each
              region and SKU.
            </li>
            <li>
              <strong>Printful:</strong> More unified dashboard with fewer
              moving parts. Easier to keep quality consistent once configured.
            </li>
            <li>
              <strong>ShipBob:</strong> More operational: you model SKUs,
              pallets, and order flows. Strong fit once you think like a
              logistics operation, not just a POD store.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-World Use-Cases & Winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>New merch store validating designs:</strong> Printify wins
              with low base costs and supplier choice while you test what sells.
            </li>
            <li>
              <strong>Creator brand wanting strong POD quality:</strong>{" "}
              Printful wins with owned production, better QA, and built-in
              branding.
            </li>
            <li>
              <strong>Scaling DTC brand with stable best-sellers:</strong>{" "}
              ShipBob wins when you are ready to bulk-produce and need reliable
              3PL fulfillment and delivery SLAs.
            </li>
            <li>
              <strong>Hybrid strategy (POD + 3PL):</strong> Use Printify or
              Printful for long-tail SKUs and low-volume designs, while sending
              core best-sellers into ShipBob for better unit economics and
              faster shipping.
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
                Best when you want catalog breadth, low base costs, and maximum
                flexibility to test designs and suppliers.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: New stores, design-heavy brands, and margin-focused
                POD sellers.
              </p>
            </div>
            <div className="rounded-2xl border border-amber-100 bg-amber-50/80 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Printful</h3>
              <p className="text-sm text-slate-700">
                Best when you care more about consistent quality and brand
                experience than absolute lowest base cost.
              </p>
              <p className="mt-2 text-sm font-semibold text-amber-700">
                Ideal for: Creator brands, premium merch, and stores where
                unboxing matters.
              </p>
            </div>
            <div className="rounded-2xl border border-sky-100 bg-sky-50/80 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">ShipBob</h3>
              <p className="text-sm text-slate-700">
                Best when you are ready to hold inventory and want a proper 3PL
                to support growth and multi-channel fulfillment.
              </p>
              <p className="mt-2 text-sm font-semibold text-sky-700">
                Ideal for: Scaling DTC brands, omnichannel sellers, and teams
                needing SLAs.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">
            FAQ: Printify vs Printful vs ShipBob
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

        {/* Internal review links (optional) */}
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
            href="/tools/printful"
          >
            Read the full Printful review
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
