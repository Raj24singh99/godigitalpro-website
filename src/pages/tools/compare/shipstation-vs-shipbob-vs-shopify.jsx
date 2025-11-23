import React from "react";
import {
  Sparkles,
  Crown,
  Layers,
  BarChart3,
  ArrowLeft,
  Gauge,
  Truck,
  Package,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "shipstation vs shipbob vs shopify";
const canonical = buildCanonical(
  "/tools/compare/shipstation-vs-shipbob-vs-shopify"
);

const brandMeta = {
  shipstation: {
    gradient: "from-blue-500 via-indigo-500 to-slate-700",
    badge: "bg-blue-100 text-blue-900",
    logo: "https://logo.clearbit.com/shipstation.com",
  },
  shipbob: {
    gradient: "from-emerald-500 via-teal-500 to-green-600",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/shipbob.com",
  },
  shopify: {
    gradient: "from-emerald-500 via-green-500 to-teal-500",
    badge: "bg-emerald-50 text-emerald-900",
    logo: "https://logo.clearbit.com/shopify.com",
  },
};

const contenders = [
  {
    key: "shipstation",
    name: "ShipStation",
    blurb: "Shipping automation and labels for in-house fulfillment teams.",
    url: "https://www.shipstation.com",
    slug: "shipstation",
  },
  {
    key: "shipbob",
    name: "ShipBob",
    blurb: "3PL that stores, picks, packs, and ships for you from its network.",
    url: "https://www.shipbob.com",
    slug: "shipbob",
  },
  {
    key: "shopify",
    name: "Shopify Shipping",
    blurb: "Hosted ecommerce with native labels and carrier discounts.",
    url: "https://www.shopify.com",
    slug: "shopify-shipping",
  },
];

const comparisonRows = [
  {
    label: "Primary use case",
    shipstation:
      "In-house fulfillment teams that want automation and multi-carrier control.",
    shipbob:
      "Brands outsourcing warehousing, pick/pack, and last-mile to a 3PL.",
    shopify:
      "Shopify-native brands needing simple labels and discounts without extra tools.",
  },
  {
    label: "Fulfillment model",
    shipstation:
      "You own the warehouse, staff, and processes; ShipStation powers labels, docs, and routing.",
    shipbob:
      "ShipBob owns warehouses, labor, and packing; you send inventory and orders.",
    shopify:
      "DIY fulfillment or separate 3PL; Shopify handles order management and label purchase.",
  },
  {
    label: "Automation depth",
    shipstation:
      "Rules by SKU, weight, tags, channel, and destination to pick carrier, service, and packaging.",
    shipbob:
      "Automation mainly at inventory-routing and SLA level; less granular per-order rule building.",
    shopify:
      "Basic rules and bulk printing; deeper automation usually added via apps.",
  },
  {
    label: "Multi-channel support",
    shipstation:
      "Connects to marketplaces (Amazon, eBay, Walmart, Etsy), carts, and custom stores.",
    shipbob:
      "Integrates with major carts and marketplaces; strong for DTC + marketplace mix.",
    shopify:
      "Best if Shopify is your core; other channels supported via apps and connectors.",
  },
  {
    label: "International & returns",
    shipstation:
      "Supports customs docs, HS codes, and branded return labels/portals.",
    shipbob:
      "Global warehouse footprint, DDP/DAP support, and 3PL-managed returns workflows.",
    shopify:
      "Core labels and simple returns; advanced flows typically need apps or logistics partners.",
  },
  {
    label: "Inventory & storage",
    shipstation:
      "No storage; you manage inventory and locations in your systems/WMS.",
    shipbob:
      "Owns storage and inventory placement across nodes; analytics for split inventory.",
    shopify:
      "Basic inventory across locations; storage handled by you or partners.",
  },
  {
    label: "Best for",
    shipstation:
      "Ops-heavy brands shipping in-house across many channels who want fine-grained control.",
    shipbob:
      "Teams ready to offload warehousing and last-mile while scaling aggressively.",
    shopify:
      "Shopify sellers with low–mid volume and simpler catalogs who want low-friction shipping.",
  },
  {
    label: "Pricing feel",
    shipstation:
      "Subscription tiers by shipment volume and number of users, predictable for in-house ops.",
    shipbob:
      "Per-unit pick/pack, storage, and projects; pricing improves with volume and multi-node use.",
    shopify:
      "Pay for Shopify plan plus label costs; good discounts from carriers at higher plans.",
  },
];

const scoreboard = [
  {
    label: "Automation & control",
    shipstation: 9.1,
    shipbob: 7.8,
    shopify: 7.4,
  },
  {
    label: "Ease of launch",
    shipstation: 8.4,
    shipbob: 8.0,
    shopify: 9.2,
  },
  {
    label: "Scalability",
    shipstation: 8.7,
    shipbob: 9.2,
    shopify: 8.4,
  },
  {
    label: "Cost transparency",
    shipstation: 8.5,
    shipbob: 7.6,
    shopify: 8.3,
  },
  {
    label: "Multi-channel strength",
    shipstation: 9.0,
    shipbob: 8.1,
    shopify: 8.2,
  },
  {
    label: "Returns & international",
    shipstation: 8.7,
    shipbob: 9.0,
    shopify: 7.8,
  },
];

const avg = (tool) =>
  (
    scoreboard.reduce((sum, row) => sum + (row[tool] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  shipstation: avg("shipstation"),
  shipbob: avg("shipbob"),
  shopify: avg("shopify"),
};

const overallWinner =
  Math.max(
    parseFloat(averages.shipstation),
    parseFloat(averages.shipbob),
    parseFloat(averages.shopify)
  ) === parseFloat(averages.shipstation)
    ? "ShipStation"
    : Math.max(
        parseFloat(averages.shipbob),
        parseFloat(averages.shopify)
      ) === parseFloat(averages.shipbob)
    ? "ShipBob"
    : "Shopify Shipping";

const pricingTable = [
  {
    plan: "ShipStation Gold (example mid-tier)",
    monthly: "Around ~$99.99/mo",
    annual: "Lower effective rate when billed annually",
    limits:
      "Up to ~3,000 shipments/month, multiple selling channels, automation rules, and branded docs.",
    notes:
      "Great once you have steady volume and want serious automation without a 3PL.",
  },
  {
    plan: "ShipBob Growth / Core",
    monthly: "Custom based on volume",
    annual: "Volume-based with potential discounts",
    limits:
      "Per-unit pick/pack fees, storage by pallet/bin, project fees for special handling.",
    notes:
      "Best value when you commit volume and use multiple fulfillment centers.",
  },
  {
    plan: "Shopify Shipping (via Shopify plans)",
    monthly: "From ~$39–$399/mo + label costs",
    annual: "Cheaper per month on annual plans",
    limits:
      "Tied to Shopify plan (Basic to Advanced) and carrier label usage; discounts improve on higher tiers.",
    notes:
      "Cheapest to start for Shopify-only brands, especially at low–moderate volumes.",
  },
];

const featureBullets = {
  fulfillment: [
    "ShipStation: Ideal when you already run or plan to run your own warehouse and want software to orchestrate picking, packing, and labeling.",
    "ShipBob: Best when you prefer to send inventory into a 3PL network and let them handle storage, SLAs, and staffing.",
    "Shopify Shipping: Good when you fulfil from a back room, store, or small warehouse and want labels directly inside Shopify.",
  ],
  automation: [
    "ShipStation: Mature rules engine for service selection, packaging, tags, insurance, and batching across channels.",
    "ShipBob: Automates inventory routing and SLA adherence more than per-order tweaks; think network logic vs. label logic.",
    "Shopify Shipping: Basic automation via order workflows and apps; serious routing often requires additional apps or WMS.",
  ],
  ecosystem: [
    "ShipStation: Deep ecosystem of carrier, cart, and marketplace integrations for complex multi-channel stacks.",
    "ShipBob: Tight integrations with major carts (Shopify, BigCommerce, Woo, etc.) and marketplaces plus analytics around fulfillment.",
    "Shopify Shipping: Strong if Shopify is your hub; for non-Shopify flows you will rely on apps or separate shipping tools.",
  ],
};

const prosCons = {
  shipstation: {
    pros: [
      "Deep automation rules for services, packaging, documentation, and routing.",
      "Multi-carrier rate shopping with support for many domestic and international carriers.",
      "Branded packing slips, notifications, and return labels for cohesive CX.",
      "Excellent fit for teams already running in-house pick/pack operations.",
    ],
    cons: [
      "You still own labor, storage, and warehouse management complexity.",
      "UI can feel busy for beginners managing lots of channels and rules.",
      "Requires separate WMS or tight processes for inventory and location control.",
    ],
  },
  shipbob: {
    pros: [
      "Full 3PL network with multi-node fulfillment closer to customers.",
      "Scales without hiring warehouse staff or signing leases.",
      "Improves 2-day coverage and transit times once inventory is split well.",
      "Returns, international shipping, and SLAs are handled by the 3PL.",
    ],
    cons: [
      "Less tactical control per order compared with in-house fulfillment.",
      "Fees can feel high for low or volatile volume brands.",
      "Onboarding and operational fit matter a lot—requires committed processes.",
    ],
  },
  shopify: {
    pros: [
      "Native shipping workflow tightly integrated with Shopify orders and inventory.",
      "Lowest friction to get started for new Shopify merchants.",
      "Built-in carrier discounts without separate shipping software.",
      "Strong app ecosystem to extend capabilities as you grow.",
    ],
    cons: [
      "Limited automation compared with ShipStation’s rules engine.",
      "Tightly coupled to the Shopify ecosystem and data model.",
      "Less suited for heavy multi-channel, multi-warehouse routing without extra tools.",
    ],
  },
};

const faqs = [
  {
    q: `Who wins overall in ${YEAR}?`,
    a: "ShipStation wins for brands keeping fulfillment in-house and needing serious automation and multi-carrier control. ShipBob wins when you are ready to outsource warehousing and last-mile logistics. Shopify Shipping is best when you are primarily a Shopify seller with lower–mid volume and you value simplicity over control.",
  },
  {
    q: "Can I combine ShipStation, ShipBob, and Shopify together?",
    a: "Yes. A common pattern is to run Shopify as your storefront, use ShipStation for in-house orders and certain SKUs, and route overflow, heavy items, or international regions to ShipBob as a 3PL. Your final stack often blends native Shopify Shipping, a 3PL, and shipping software.",
  },
  {
    q: "Which option is cheapest to start?",
    a: "For very low volume, Shopify Shipping with discounted labels is usually the cheapest because you already pay for your Shopify plan. Once you ship enough orders that manual work hurts, ShipStation’s lower tiers can be cost-effective. ShipBob removes the need for leases and staff but usually makes sense only when you have consistent volume.",
  },
  {
    q: "When does it make sense to move to a 3PL like ShipBob?",
    a: "It makes sense when your team is spending too much time on picking and packing, you are outgrowing your space, or you want 2-day delivery coverage across regions without building your own network. At that point, the time saved and SLA gains often outweigh 3PL fees.",
  },
  {
    q: "Do these tools replace an ERP or WMS?",
    a: "No. ShipStation is focused on shipping orchestration, not full warehouse management or financials. ShipBob acts as an external WMS for the inventory you store with them but does not replace your ERP. Shopify focuses on ecommerce operations. Larger brands typically pair these with an ERP/WMS as they scale.",
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
  const key = lowered.includes("shipstation")
    ? "shipstation"
    : lowered.includes("shipbob")
    ? "shipbob"
    : lowered.includes("shopify")
    ? "shopify"
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

export default function ShipStationVsShipBobVsShopifyPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`ShipStation vs ShipBob vs Shopify Shipping (${YEAR}) – Shipping & 3PL comparison`}
        description="Compare ShipStation, ShipBob, and Shopify Shipping for in-house fulfillment, 3PL outsourcing, automation, pricing, and the right ecommerce ops stack."
        canonical={canonical}
        keywords={`${primaryKeyword}, shipping software, 3PL comparison, ecommerce fulfillment tools`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Category + H1 */}
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
          Shipping &amp; fulfillment
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          ShipStation vs ShipBob vs Shopify Shipping ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          <strong>ShipStation</strong> powers in-house shipping with deep
          automation and multi-carrier control. <strong>ShipBob</strong> is a
          3PL that stores, picks, packs, and ships your orders from its own
          warehouses. <strong>Shopify Shipping</strong> keeps things simple with
          native labels and carrier discounts for Shopify merchants. Here is a
          structured breakdown to design the right fulfillment stack.
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
                <Truck className="h-5 w-5 text-white/80" />
              </div>
              <p className="relative mt-3 text-sm font-medium text-white/90">
                {item.blurb}
              </p>
            </a>
          ))}
        </div>

        {/* Quick verdict + overall winner */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-blue-100 bg-blue-50 px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-blue-900">
              <Sparkles className="h-5 w-5" />
              <p className="text-lg font-semibold">Quick verdict</p>
            </div>
            <p className="mt-2 text-slate-800 text-sm md:text-base">
              Choose <strong>ShipStation</strong> if you will keep fulfillment
              in-house and want serious automation plus multi-carrier rate
              shopping. Pick <strong>ShipBob</strong> if you are ready to
              outsource warehousing and last-mile so your team can focus on
              growth. Go with <strong>Shopify Shipping</strong> if you sell
              mostly via Shopify, have simpler needs, and want the lowest
              friction way to ship.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Crown className="h-4 w-4 text-blue-700" /> Overall scoreboard
              winner: {overallWinner}{" "}
              <span className="text-xs text-slate-600">
                (avg:{" "}
                {overallWinner === "ShipStation"
                  ? averages.shipstation
                  : overallWinner === "ShipBob"
                  ? averages.shipbob
                  : averages.shopify}
                /10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              The right choice depends on whether you want more{" "}
              <strong>control and automation</strong> (ShipStation),{" "}
              <strong>outsourced logistics and reach</strong> (ShipBob), or{" "}
              <strong>native simplicity</strong> inside Shopify (Shopify
              Shipping).
            </p>
          </div>
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-blue-700" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">ShipStation</th>
                  <th className="px-4 py-3">ShipBob</th>
                  <th className="px-4 py-3">Shopify Shipping</th>
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
                      {row.shipstation}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.shipbob}
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
            <BarChart3 className="h-6 w-6 text-indigo-600" /> Scoreboard (1–10)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">ShipStation</th>
                  <th className="px-4 py-3">ShipBob</th>
                  <th className="px-4 py-3">Shopify Shipping</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const winnerValue = Math.max(
                    row.shipstation,
                    row.shipbob,
                    row.shopify
                  );
                  const winner =
                    winnerValue === row.shipstation
                      ? "ShipStation"
                      : winnerValue === row.shipbob
                      ? "ShipBob"
                      : "Shopify Shipping";
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
                          winner === "ShipStation"
                            ? "font-semibold text-blue-800"
                            : "text-slate-700"
                        }`}
                      >
                        {row.shipstation}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "ShipBob"
                            ? "font-semibold text-emerald-800"
                            : "text-slate-700"
                        }`}
                      >
                        {row.shipbob}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Shopify Shipping"
                            ? "font-semibold text-emerald-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.shopify}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">
                        {winner}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-blue-50 via-emerald-50 to-slate-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-blue-800">
                    {averages.shipstation}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.shipbob}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-700">
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
            <Gauge className="h-6 w-6 text-blue-700" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Truck className="h-5 w-5 text-blue-700" /> Fulfillment &amp;
              operations
            </h3>
            <ul className="space-y-2 text-slate-700 text-sm md:text-base">
              {featureBullets.fulfillment.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Package className="h-5 w-5 text-emerald-600" /> Automation &amp;
              routing
            </h3>
            <ul className="space-y-2 text-slate-700 text-sm md:text-base">
              {featureBullets.automation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Shield className="h-5 w-5 text-slate-700" /> Channels, returns &amp;
              ecosystem
            </h3>
            <ul className="space-y-2 text-slate-700 text-sm md:text-base">
              {featureBullets.ecosystem.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Pricing snapshots</h2>
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
            Pricing changes frequently and depends on shipment volume, carrier
            deals, storage needs, and promos. Always confirm current tiers,
            minimums, and any volume pricing directly on each provider&apos;s
            pricing page before committing.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-slate-700 text-sm md:text-base">
            <li>
              <strong>ShipStation:</strong> Feels like a shipping control tower
              for in-house ops. There is a learning curve around rules and
              batching, but once configured it saves a lot of manual work.
            </li>
            <li>
              <strong>ShipBob:</strong> Onboarding focuses on mapping SKUs,
              setting SLAs, and configuring integrations. Day-to-day is mostly
              monitoring inventory and performance dashboards rather than label
              clicks.
            </li>
            <li>
              <strong>Shopify Shipping:</strong> Easiest initial experience.
              Small merchants can go from order to label quickly without
              separate tools, then add apps as workflows get more complex.
            </li>
          </ul>
        </section>

        {/* Real-world use cases & winners */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">
            Real-world use-cases &amp; winners
          </h2>
          <ul className="space-y-2 text-slate-700 text-sm md:text-base">
            <li>
              <strong>
                DTC brand with existing warehouse and ops managers:
              </strong>{" "}
              ShipStation wins—you keep control, layer automation, and shop
              carrier rates.
            </li>
            <li>
              <strong>High-growth brand outgrowing its own space:</strong>{" "}
              ShipBob wins—offload storage, hiring, and SLAs to a 3PL network.
            </li>
            <li>
              <strong>New Shopify store testing product–market fit:</strong>{" "}
              Shopify Shipping wins—start cheap and simple, then graduate to
              ShipStation or a 3PL later.
            </li>
            <li>
              <strong>
                Multi-channel brand wanting both in-house and outsourced flows:
              </strong>{" "}
              Use Shopify as the storefront, ShipStation for in-house orders,
              and ShipBob for remote regions or heavy/bulky SKUs.
            </li>
          </ul>
        </section>

        {/* Pros & Cons (global) */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        {/* Who wins for… */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Who wins for…</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">ShipStation</h3>
              <p className="text-sm text-slate-700">
                Best when you own the warehouse and want to squeeze efficiency
                out of every pick, pack, and label with strong automation.
              </p>
              <p className="mt-2 text-sm font-semibold text-blue-700">
                Ideal for: Multi-channel DTC brands, marketplace sellers, and
                in-house ops teams.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">ShipBob</h3>
              <p className="text-sm text-slate-700">
                Best for brands that would rather focus on acquisition and
                product while a 3PL handles storage, pick/pack, and delivery
                SLAs.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: Scaling ecommerce brands, global shipping, and teams
                without warehouse expertise.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Shopify Shipping</h3>
              <p className="text-sm text-slate-700">
                Best as the simplest starting point for Shopify merchants
                shipping from a back room, store, or small warehouse.
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-700">
                Ideal for: Early-stage stores, small brands, and teams who want
                minimal tooling overhead.
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
                <p className="mt-1 text-slate-700 text-sm md:text-base">
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
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-blue-700 ring-1 ring-blue-100 hover:bg-blue-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
