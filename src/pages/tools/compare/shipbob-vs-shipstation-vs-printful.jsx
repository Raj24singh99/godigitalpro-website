import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  Truck,
  Crown,
  ArrowLeft,
  Package,
  Box,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "shipbob vs shipstation vs printful";
const canonical = buildCanonical(
  "/tools/compare/shipbob-vs-shipstation-vs-printful"
);

const brandMeta = {
  shipbob: {
    gradient: "from-emerald-500 via-teal-500 to-blue-600",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/shipbob.com",
  },
  shipstation: {
    gradient: "from-blue-500 via-indigo-500 to-slate-700",
    badge: "bg-blue-100 text-blue-900",
    logo: "https://logo.clearbit.com/shipstation.com",
  },
  printful: {
    gradient: "from-amber-400 via-red-500 to-rose-600",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/printful.com",
  },
};

const contenders = [
  {
    key: "shipbob",
    name: "ShipBob",
    blurb: "Outsourced 3PL with global fulfillment centers and 2-day reach.",
    url: "https://www.shipbob.com",
  },
  {
    key: "shipstation",
    name: "ShipStation",
    blurb: "Shipping software for in-house pick/pack and multi-carrier labels.",
    url: "https://www.shipstation.com",
  },
  {
    key: "printful",
    name: "Printful",
    blurb: "Print-on-demand and dropshipping with on-demand manufacturing.",
    url: "https://www.printful.com",
  },
];

const comparisonRows = [
  {
    label: "Fulfillment model",
    shipbob: "3PL stores your inventory and ships from its network.",
    shipstation: "Software that powers your own warehouse and carriers.",
    printful: "Produces POD items on demand then ships them for you.",
  },
  {
    label: "Best for",
    shipbob: "Brands with owned inventory wanting 2-day delivery reach.",
    shipstation: "Ops teams keeping fulfillment in-house with automation.",
    printful: "Creators validating products without holding stock.",
  },
  {
    label: "Setup speed",
    shipbob: "Onboard once inventory lands in a ShipBob facility.",
    shipstation: "Fast; connect channels and start printing labels.",
    printful: "Fastest; publish POD SKUs and start selling instantly.",
  },
  {
    label: "Inventory approach",
    shipbob: "Requires pre-made inventory stored across FCs.",
    shipstation:
      "You handle storage; software manages routing, batching, and labels.",
    printful: "No inventory required; items produced per order.",
  },
  {
    label: "Costs",
    shipbob:
      "Per pick/pack, storage, and postage; discounts available by volume.",
    shipstation:
      "Subscription plus carrier labels; you carry warehouse costs and staff.",
    printful:
      "Per-item manufacture + shipping; higher COGS but very low upfront risk.",
  },
];

const scoreboard = [
  { label: "Speed to launch", scores: { shipbob: 8.2, shipstation: 8.6, printful: 9.4 } },
  { label: "Control & automation", scores: { shipbob: 8.4, shipstation: 9.1, printful: 7.4 } },
  { label: "Branding & packaging", scores: { shipbob: 8.6, shipstation: 8.0, printful: 7.8 } },
  { label: "Cost efficiency at scale", scores: { shipbob: 8.7, shipstation: 8.2, printful: 6.9 } },
  { label: "Global reach", scores: { shipbob: 8.8, shipstation: 7.5, printful: 8.4 } },
];

const avg = (key) =>
  (
    scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  shipbob: avg("shipbob"),
  shipstation: avg("shipstation"),
  printful: avg("printful"),
};

const overallWinner = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const pricingTable = [
  {
    plan: "ShipBob",
    monthly: "Quote-based",
    annual: "Varies by volume",
    notes:
      "Storage + pick/pack + postage; discounts with multi-node inventory and volume.",
  },
  {
    plan: "ShipStation",
    monthly: "$29–$229",
    annual: "Cheaper annually",
    notes: "Tiered by shipments/users; labels billed separately via carriers.",
  },
  {
    plan: "Printful",
    monthly: "Free plan",
    annual: "Pro add-on monthly",
    notes:
      "Pay per manufactured item + shipping; optional Pro for branded assets and tools.",
  },
];

const faqs = [
  {
    q: `Who should I pick in ${YEAR}?`,
    a: "Choose ShipBob when you have owned inventory and want 2-day coverage without running warehouses. Choose ShipStation if you will keep fulfillment in-house and need automation plus carrier rate shopping. Choose Printful when testing new SKUs without carrying stock.",
  },
  {
    q: "Can I use more than one?",
    a: "Yes. Many brands start with Printful to validate demand, switch parts of the catalog to ShipBob once SKUs prove out, and still run ShipStation for legacy in-house SKUs or special projects.",
  },
  {
    q: "Which is cheapest to start?",
    a: "Printful is lowest commitment because you buy only what sells. ShipStation’s lower tiers are inexpensive if you already have space and staff. ShipBob removes warehouse overhead but requires inventory and per-order fees.",
  },
  {
    q: "What about branding?",
    a: "ShipBob and ShipStation can support fully branded packaging if you supply it. Printful supports some branding options; you give up some control compared to owning packaging and inserts yourself.",
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
  shipbob: {
    pros: [
      "Tech-enabled 3PL with multi-node US/EU networks for 2-day delivery.",
      "Removes need to lease and staff your own warehouses.",
      "Good fit once SKUs are validated and you want predictable SLAs.",
      "Supports branded packaging and inserts when supplied.",
    ],
    cons: [
      "Requires upfront inventory and forecasting.",
      "Per-pick, storage, and postage fees add complexity for very small catalogs.",
      "Less suitable for ultra-niche or highly seasonal SKUs that may not move.",
    ],
  },
  shipstation: {
    pros: [
      "Strong automation rules for in-house pick/pack workflows.",
      "Powerful carrier rate shopping across multiple carriers and services.",
      "Works with many ecommerce platforms and marketplaces.",
      "Good when you already have space, staff, and operational control.",
    ],
    cons: [
      "You still manage labor, racks, and warehouse process yourself.",
      "Software subscription plus label costs and warehouse overhead.",
      "No outsourced SLAs; performance depends on your own operations.",
    ],
  },
  printful: {
    pros: [
      "Zero inventory risk: items are printed and shipped on demand.",
      "Fastest way to test designs and micro-niches.",
      "No warehouse, no minimum order quantities.",
      "Solid integrations with major ecommerce platforms.",
    ],
    cons: [
      "Higher COGS versus bulk manufacturing with a 3PL like ShipBob.",
      "Less control over unboxing and packaging experience.",
      "Margins can be tight on lower-priced SKUs once ad spend is included.",
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

const prettyName = (key) =>
  key === "shipbob"
    ? "ShipBob"
    : key === "shipstation"
    ? "ShipStation"
    : key === "printful"
    ? "Printful"
    : key;

export default function ShipBobVsShipStationVsPrintfulPage() {
  const overallAvg = averages[overallWinner];

  const rowWinner = (row) => {
    const entries = Object.entries(row.scores);
    const maxVal = Math.max(...entries.map(([_, v]) => v));
    const winners = entries
      .filter(([_, v]) => v === maxVal)
      .map(([k]) => prettyName(k));
    return winners.length > 1 ? winners.join(" / ") : winners[0];
  };

  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`ShipBob vs ShipStation vs Printful – Which fulfillment path fits best? (${YEAR})`}
        description="Compare ShipBob, ShipStation, and Printful on fulfillment model, setup speed, costs, and best fit so you can design the right ecommerce logistics stack."
        canonical={canonical}
        keywords={`${primaryKeyword}, 3pl comparison, printful alternative, shipbob alternative`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Fulfillment &amp; shipping
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          ShipBob vs ShipStation vs Printful ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          <strong>ShipBob</strong> is a tech-enabled 3PL for brands with owned inventory.{" "}
          <strong>ShipStation</strong> powers teams that keep fulfillment in-house.{" "}
          <strong>Printful</strong> manufactures and ships POD items so you can test SKUs
          without holding stock. This breakdown shows how they differ on speed, cost,
          control, and scalability.
        </p>

        {/* Quick verdict + scenarios */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="space-y-3 rounded-3xl bg-emerald-50/90 p-6 ring-1 ring-emerald-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-emerald-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>ShipBob</strong> if you want outsourced 2-day shipping and clear
              SLAs on owned inventory. Choose <strong>ShipStation</strong> if you are committed
              to running your own warehouse and want automation and rate shopping. Choose{" "}
              <strong>Printful</strong> if you are validating designs or long-tail products and
              want effectively zero inventory risk.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-800">
              <Crown className="h-4 w-4" /> Overall scoreboard winner:{" "}
              {overallWinner.charAt(0).toUpperCase() + overallWinner.slice(1)}{" "}
              <span className="text-xs font-medium text-emerald-700">
                (avg: {overallAvg}/10)
              </span>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="text-sm font-semibold text-slate-900">
              Top picks by scenario
            </div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <Truck className="mt-0.5 h-4 w-4 text-emerald-600" />
                <span>
                  <strong>ShipBob</strong> for outsourced speed and multi-node inventory.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Layers className="mt-0.5 h-4 w-4 text-blue-700" />
                <span>
                  <strong>ShipStation</strong> for in-house automation and carrier shopping.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Package className="mt-0.5 h-4 w-4 text-amber-600" />
                <span>
                  <strong>Printful</strong> for zero-inventory POD and pre-launch experiments.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contender cards */}
        <div className="mt-10 overflow-hidden rounded-2xl bg-slate-50 p-6 shadow-sm ring-1 ring-slate-200">
          <div className="grid gap-4 md:grid-cols-3">
            {contenders.map((tool) => (
              <a
                key={tool.key}
                href={tool.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-white/60 p-4 ring-1 ring-slate-200 transition-shadow hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-2">
                  <LogoBadge name={tool.name} />
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                    Contender
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-700">{tool.blurb}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-emerald-700">
                  Visit site →
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-emerald-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm text-slate-800 md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">ShipBob</th>
                  <th className="px-4 py-3">ShipStation</th>
                  <th className="px-4 py-3">Printful</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/40 align-top">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-900">
                      {row.label}
                    </th>
                    <td className="px-4 py-3">{row.shipbob}</td>
                    <td className="px-4 py-3">{row.shipstation}</td>
                    <td className="px-4 py-3">{row.printful}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Scoreboard table */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-blue-600" /> Scoreboard (1–10)
          </h2>
          <div className="overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Criterion</th>
                  <th className="px-4 py-3">ShipBob</th>
                  <th className="px-4 py-3">ShipStation</th>
                  <th className="px-4 py-3">Printful</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/40">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-900">
                      {row.label}
                    </th>
                    <td
                      className={`px-4 py-3 ${
                        row.scores.shipbob >= row.scores.shipstation &&
                        row.scores.shipbob >= row.scores.printful
                          ? "font-semibold text-emerald-700"
                          : "text-slate-700"
                      }`}
                    >
                      {row.scores.shipbob}
                    </td>
                    <td
                      className={`px-4 py-3 ${
                        row.scores.shipstation >= row.scores.shipbob &&
                        row.scores.shipstation >= row.scores.printful
                          ? "font-semibold text-blue-700"
                          : "text-slate-700"
                      }`}
                    >
                      {row.scores.shipstation}
                    </td>
                    <td
                      className={`px-4 py-3 ${
                        row.scores.printful >= row.scores.shipbob &&
                        row.scores.printful >= row.scores.shipstation
                          ? "font-semibold text-amber-700"
                          : "text-slate-700"
                      }`}
                    >
                      {row.scores.printful}
                    </td>
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      {rowWinner(row)}
                    </td>
                  </tr>
                ))}
                <tr className="bg-gradient-to-r from-emerald-50 via-blue-50 to-amber-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.shipbob}
                  </td>
                  <td className="px-4 py-3 font-semibold text-blue-800">
                    {averages.shipstation}
                  </td>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages.printful}
                  </td>
                  <td className="px-4 py-3 font-bold text-slate-900">
                    {overallWinner.charAt(0).toUpperCase() + overallWinner.slice(1)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Card scoreboard */}
        <section className="mt-10 grid gap-4 md:grid-cols-3">
          {scoreboard.map((row) => (
            <div
              key={row.label}
              className="rounded-2xl bg-slate-50 p-4 shadow-sm ring-1 ring-slate-200"
            >
              <p className="text-sm font-semibold text-slate-900">{row.label}</p>
              <div className="mt-2 space-y-1 text-sm text-slate-700">
                <Score label="ShipBob" value={row.scores.shipbob} />
                <Score label="ShipStation" value={row.scores.shipstation} />
                <Score label="Printful" value={row.scores.printful} />
              </div>
            </div>
          ))}
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <BarChart3 className="h-6 w-6 text-emerald-600" /> Pricing snapshots
          </h2>
          <div className="overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Monthly</th>
                  <th className="px-4 py-3">Annual</th>
                  <th className="px-4 py-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {pricingTable.map((row) => (
                  <tr key={row.plan}>
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      {row.plan}
                    </td>
                    <td className="px-4 py-3 text-slate-700">{row.monthly}</td>
                    <td className="px-4 py-3 text-slate-700">{row.annual}</td>
                    <td className="px-4 py-3 text-slate-700">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-700">
            For most early brands, <strong>Printful</strong> offers the cheapest way to
            validate demand. As volumes grow, <strong>ShipStation</strong> can be the best
            value when you have space and staff. Once you are confident in repeatable
            demand and want 2-day SLAs, <strong>ShipBob</strong> often becomes the most
            efficient long-term option.
          </p>
        </section>

        {/* Best fits / watch-outs / upgrade path */}
        <section className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-emerald-50 p-5 shadow-sm ring-1 ring-emerald-100">
            <div className="flex items-center gap-2 text-emerald-700">
              <Sparkles className="h-5 w-5" />
              <h3 className="text-lg font-semibold text-slate-900">Best fits</h3>
            </div>
            <ul className="mt-3 space-y-2 text-sm text-slate-800">
              <li>ShipBob: fastest path to 2-day promises with owned SKUs.</li>
              <li>ShipStation: strongest choice if you want DIY control and automation.</li>
              <li>Printful: lowest risk for testing designs and long-tail product ideas.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <div className="flex items-center gap-2 text-blue-700">
              <Gauge className="h-5 w-5" />
              <h3 className="text-lg font-semibold text-slate-900">Watch-outs</h3>
            </div>
            <ul className="mt-3 space-y-2 text-sm text-slate-800">
              <li>ShipBob: needs clean demand planning to avoid excess storage spend.</li>
              <li>ShipStation: you still own all warehouse complexity and staffing.</li>
              <li>Printful: higher unit costs and less control over the unboxing moment.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
            <div className="flex items-center gap-2 text-amber-700">
              <Box className="h-5 w-5" />
              <h3 className="text-lg font-semibold text-slate-900">Upgrade path</h3>
            </div>
            <p className="mt-3 text-sm text-slate-800">
              Many teams launch SKUs on <strong>Printful</strong>, migrate best sellers to{" "}
              <strong>ShipStation</strong> for in-house control once volumes justify it, and
              then graduate to <strong>ShipBob</strong> when multi-node fulfillment and
              outsourced SLAs become more efficient than running internal warehouses.
            </p>
          </div>
        </section>

        {/* Pros & Cons section (unified) */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        {/* FAQ */}
        <section className="mt-12 rounded-2xl bg-slate-50 p-6 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-lg font-semibold text-slate-900">FAQs</h3>
          <ul className="mt-3 space-y-3 text-sm text-slate-800">
            {faqs.map((item) => (
              <li key={item.q}>
                <p className="font-semibold text-slate-900">{item.q}</p>
                <p className="text-slate-700">{item.a}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Back link */}
        <div className="mt-10 flex items-center gap-3">
          <Link
            to="/tools"
            className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-emerald-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
