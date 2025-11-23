import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  ClipboardList,
  Crown,
  ArrowLeft,
  Images,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "envira gallery vs elementor vs seedprod";
const canonical = buildCanonical(
  "/tools/compare/envira-gallery-vs-elementor-vs-seedprod"
);

const brandMeta = {
  envira: {
    gradient: "from-emerald-500 via-lime-500 to-teal-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/enviragallery.com",
  },
  elementor: {
    gradient: "from-rose-500 via-pink-500 to-red-500",
    badge: "bg-rose-100 text-rose-900",
    logo: "https://logo.clearbit.com/elementor.com",
  },
  seedprod: {
    gradient: "from-amber-500 via-orange-500 to-red-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/seedprod.com",
  },
};

const contenders = [
  {
    key: "envira",
    name: "Envira Gallery",
    blurb:
      "Dedicated WordPress gallery plugin focused on speed, proofing, and WooCommerce selling.",
    slug: "envira-gallery",
    url: "/tools/envira-gallery",
  },
  {
    key: "elementor",
    name: "Elementor",
    blurb:
      "Full visual page builder with gallery widgets, theme builder, and popups for WordPress sites.",
    url: "/tools/elementor",
  },
  {
    key: "seedprod",
    name: "SeedProd",
    blurb:
      "Landing page and theme builder with gallery blocks for campaigns, coming-soon pages, and funnels.",
    url: "/tools/seedprod",
  },
];

const comparisonRows = [
  {
    label: "Best for",
    envira: "Photographers & marketers needing dedicated galleries",
    elementor: "Teams wanting full-page and theme design control",
    seedprod: "Marketers shipping landing pages and funnels fast",
  },
  {
    label: "Performance",
    envira: "Lightweight galleries with lazy loading and responsive images",
    elementor: "Good with caching/optimization; heavier than gallery-only tools",
    seedprod: "Lightweight blocks; overall speed depends on page design",
  },
  {
    label: "Ecommerce / proofing",
    envira: "Strong WooCommerce & proofing add-ons for selling photos",
    elementor: "Can use Woo widgets or add-ons; not gallery-commerce first",
    seedprod: "Basic store blocks; less depth for photo sales",
  },
  {
    label: "Learning curve",
    envira: "Easy drag-and-drop gallery builder; minimal setup",
    elementor: "Moderate—full visual site builder with many controls",
    seedprod: "Easy for landing pages and simple sites",
  },
  {
    label: "Hosting",
    envira: "Self-hosted WordPress plugin",
    elementor: "Self-hosted WordPress or Elementor Cloud",
    seedprod: "Self-hosted WordPress plugin",
  },
];

const scoreboard = [
  { label: "Gallery depth", scores: { envira: 9.4, elementor: 8.3, seedprod: 7.9 } },
  { label: "Speed", scores: { envira: 9.1, elementor: 8.2, seedprod: 8.5 } },
  {
    label: "Marketing flexibility",
    scores: { envira: 8.4, elementor: 9.2, seedprod: 9.0 },
  },
  {
    label: "Ecommerce readiness",
    scores: { envira: 9.0, elementor: 8.1, seedprod: 7.8 },
  },
];

const quickPicks = [
  {
    label: "Dedicated gallery plugin",
    tool: "Envira Gallery",
    reason:
      "Optimized for image-heavy pages, proofing, and WooCommerce-powered photo sales.",
  },
  {
    label: "Full site & theme builder",
    tool: "Elementor",
    reason:
      "Visual page + theme builder with gallery widgets, popups, and templates.",
  },
  {
    label: "Fast landing page builder",
    tool: "SeedProd",
    reason:
      "Ideal for marketers who need high-converting landing pages and funnels quickly.",
  },
];

const pricingTable = [
  {
    tool: "Envira Gallery",
    tiers: "Basic → Pro tiers",
    bestFor: "Photographers and marketers who live inside galleries.",
    notes:
      "Lower tiers cover core galleries; proofing and deep WooCommerce integrations sit on higher plans.",
  },
  {
    tool: "Elementor",
    tiers: "Free + Pro site licenses",
    bestFor: "Agencies, freelancers, and teams building full WordPress sites.",
    notes:
      "Free version covers basic widgets; Pro adds theme builder, WooCommerce builder, and advanced design tools.",
  },
  {
    tool: "SeedProd",
    tiers: "Basic → Elite plans",
    bestFor: "Marketers running campaigns, coming soon pages, and funnels.",
    notes:
      "Entry tiers focus on landing pages; higher plans add theme building and WooCommerce support.",
  },
];

const useCases = [
  {
    title: "Photography portfolio with client proofing & print sales",
    winner: "Envira Gallery",
    explanation:
      "Envira’s gallery-focused design, proofing add-ons, and WooCommerce integration make it the natural choice when images and sales are central.",
  },
  {
    title: "Redesigning a full marketing site with custom layouts",
    winner: "Elementor",
    explanation:
      "Elementor’s visual theme builder, templates, and widget ecosystem give designers control over headers, footers, archives, and galleries in one system.",
  },
  {
    title: "Launching campaigns, lead-gen pages, and coming-soon screens",
    winner: "SeedProd",
    explanation:
      "SeedProd’s templates, blocks, and funnel-friendly features are built to ship landing pages fast, with galleries playing a supporting role.",
  },
  {
    title: "Hybrid: full site in Elementor + specialized galleries",
    winner: "Elementor + Envira",
    explanation:
      "You can embed Envira galleries via blocks/shortcodes inside Elementor or SeedProd layouts, mixing a dedicated gallery engine with a flexible page builder.",
  },
];

const faqs = [
  {
    q: `Is Envira better than Elementor for galleries in ${YEAR}?`,
    a: "If galleries are your priority, Envira is lighter and includes proofing, watermarking, and ecommerce add-ons. Elementor is broader but less specialized for galleries and requires more tuning for very large image libraries.",
  },
  {
    q: "Which is fastest to launch?",
    a: "Envira is fastest when you just need galleries on an existing WordPress site. SeedProd is fastest for standalone landing pages. Elementor is quickest when you decide to build the entire site visually in one place.",
  },
  {
    q: "Which is best for selling photos?",
    a: "Envira Pro connects tightly with WooCommerce for selling prints and downloads with proofing flows. Elementor can also power photo stores via Woo widgets, while SeedProd is better for promo pages than deep gallery commerce.",
  },
  {
    q: "Do they work together?",
    a: "Yes. Envira galleries can be embedded via blocks or shortcodes inside Elementor or SeedProd designs, so you can mix a dedicated gallery engine with your preferred page builder.",
  },
  {
    q: "Will these plugins impact Core Web Vitals?",
    a: "Any visual builder adds overhead. Envira is generally light, especially with lazy loading enabled. Elementor and SeedProd perform best when combined with good hosting, caching, and an image optimization stack.",
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
  envira: {
    pros: [
      "Fast, lightweight galleries with lazy loading",
      "Proofing, watermarking, and WooCommerce integration",
      "Builder-friendly blocks and shortcodes for embedding",
      "Good fit for photographers and image-heavy sites",
    ],
    cons: [
      "Ecommerce and proofing features sit on higher tiers",
      "Not a full site or theme builder",
      "Relies on your theme or other builders for non-gallery layouts",
    ],
  },
  elementor: {
    pros: [
      "Full theme and site builder for WordPress",
      "Rich widget ecosystem, including gallery and WooCommerce widgets",
      "Large template and popup library for fast layout work",
    ],
    cons: [
      "Heavier than dedicated gallery plugins; needs optimization for speed",
      "More complex UI and learning curve than Envira/SeedProd",
      "Advanced features require Elementor Pro license",
    ],
  },
  seedprod: {
    pros: [
      "Great for landing pages, opt-in pages, and funnels",
      "Simple drag-and-drop UI with focused block set",
      "Built-in coming soon and maintenance modes",
    ],
    cons: [
      "Gallery depth is basic compared to Envira",
      "Less suited for managing huge photo libraries",
      "Full theme building behind higher-priced tiers",
    ],
  },
};

const avg = (key) => {
  const total = scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0);
  return (total / scoreboard.length).toFixed(1);
};

const averages = {
  envira: avg("envira"),
  elementor: avg("elementor"),
  seedprod: avg("seedprod"),
};

const overallWinnerKey = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const getWinnerNameFromKey = (key) => {
  if (key === "envira") return "Envira Gallery";
  if (key === "elementor") return "Elementor";
  if (key === "seedprod") return "SeedProd";
  return key;
};

const overallWinnerName = getWinnerNameFromKey(overallWinnerKey);

const getRowWinnerName = (row) => {
  const { envira, elementor, seedprod } = row.scores;
  const max = Math.max(envira, elementor, seedprod);
  if (envira === elementor && elementor === seedprod) return "Tie";
  if (max === envira) return "Envira Gallery";
  if (max === elementor) return "Elementor";
  return "SeedProd";
};

const LogoBadge = ({ name }) => {
  const key = name.toLowerCase().includes("envira")
    ? "envira"
    : name.toLowerCase().includes("elementor")
    ? "elementor"
    : "seedprod";
  const meta =
    brandMeta[key] || {
      gradient: "from-slate-500 to-slate-700",
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
      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${meta.badge}`}>
        {name}
      </span>
    </div>
  );
};

export default function EnviraVsElementorVsSeedProdPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Envira Gallery vs Elementor vs SeedProd – WordPress gallery & builder comparison (${YEAR})`}
        description="Compare Envira Gallery, Elementor, and SeedProd for WordPress galleries, landing pages, ecommerce, and performance so you can pick the right stack for your site."
        canonical={canonical}
        keywords={`${primaryKeyword}, wordpress gallery comparison, envira review, elementor review, seedprod review`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          WordPress galleries & builders
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Envira Gallery vs Elementor vs SeedProd ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          <strong>Envira Gallery</strong> is the dedicated gallery plugin built for
          speed, proofing, and WooCommerce sales. <strong>Elementor</strong> is the
          all-in-one visual builder that controls your entire WordPress site.{" "}
          <strong>SeedProd</strong> is the campaign-focused landing page builder
          with simple gallery blocks. This breakdown shows when to pick a gallery
          specialist, a full page builder, or a landing page tool.
        </p>

        {/* Quick verdict + highlights */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="space-y-3 rounded-3xl bg-emerald-50/90 p-6 ring-1 ring-emerald-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-emerald-800">
              <Sparkles className="h-5 w-5" />
              Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>Envira</strong> for gallery-first sites that need
              proofing or WooCommerce photo sales. Choose <strong>Elementor</strong>{" "}
              if you are rebuilding a full site and want gallery widgets inside a
              theme builder. Choose <strong>SeedProd</strong> when you need high
              velocity landing pages and funnels where galleries are secondary.
            </p>
            <ul className="mt-2 space-y-1 text-sm text-slate-700">
              {quickPicks.map((pick) => (
                <li key={pick.label}>
                  <span className="font-semibold">{pick.label}:</span>{" "}
                  <span className="font-semibold text-slate-900">
                    {pick.tool}
                  </span>{" "}
                  – {pick.reason}
                </li>
              ))}
            </ul>
            <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-emerald-800">
              <Crown className="h-4 w-4" />
              Overall scoreboard leader: {overallWinnerName}{" "}
              <span className="text-xs font-medium text-emerald-700">
                (avg: {averages[overallWinnerKey]}/10)
              </span>
            </div>
          </div>

          <div className="space-y-3 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Images className="h-5 w-5 text-emerald-700" />
              Fast gallery pick
            </div>
            <p className="text-sm text-slate-700">
              <strong>Envira</strong> keeps galleries lightweight with lazy
              loading, responsive image handling, and a UI that is simple enough
              for non-technical users.
            </p>
          </div>

          <div className="space-y-3 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Layers className="h-5 w-5 text-rose-600" />
              Full-site control
            </div>
            <p className="text-sm text-slate-700">
              <strong>Elementor</strong> offers complete control of headers,
              footers, archives, single posts, and more—ideal when your gallery is
              just one part of a broader redesign.
            </p>
          </div>
        </div>

        {/* Contender cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {contenders.map((card) => (
            <div
              key={card.key}
              className={`relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br ${
                brandMeta[card.key]?.gradient || "from-slate-500 to-slate-700"
              } p-5 shadow-md md:overflow-hidden`}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white" />
                <div className="pointer-events-none absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-white" />
              </div>
              <div className="relative flex items-start justify-between">
                <LogoBadge name={card.name} />
                <span className="rounded-full bg-black/20 px-2 py-1 text-xs font-semibold text-white/95">
                  WordPress tool
                </span>
              </div>
              <p className="relative mt-3 text-sm font-medium text-white/90">
                {card.blurb}
              </p>
              <div className="relative mt-3 text-sm font-semibold text-white">
                <Link
                  className="underline decoration-white/70 underline-offset-2 hover:text-white/90"
                  to={card.url}
                >
                  Open tool page
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-emerald-600" />
            Side-by-side comparison
          </h2>
          <p className="text-sm text-slate-700">
            Start with your primary goal—galleries, full-site control, or landing
            pages—and scan across the row that matters most. Each tool can
            technically do all three, but their defaults and strengths are
            different.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Envira</th>
                  <th className="px-4 py-3">Elementor</th>
                  <th className="px-4 py-3">SeedProd</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr
                    key={row.label}
                    className="align-top odd:bg-white even:bg-slate-50/40"
                  >
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-900">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.envira}</td>
                    <td className="px-4 py-3 text-slate-700">{row.elementor}</td>
                    <td className="px-4 py-3 text-slate-700">{row.seedprod}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Scoreboard */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-indigo-600" />
            Scoreboard (1–10)
          </h2>
          <p className="text-sm text-slate-700">
            Scores combine gallery capabilities, page-building flexibility, and
            expected performance. Use them as directional guidance when trade-offs
            are not obvious from the feature comparison alone.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Envira</th>
                  <th className="px-4 py-3">Elementor</th>
                  <th className="px-4 py-3">SeedProd</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const winnerName = getRowWinnerName(row);
                  const { envira, elementor, seedprod } = row.scores;
                  const max = Math.max(envira, elementor, seedprod);

                  return (
                    <tr key={row.label}>
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-900">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          max === envira
                            ? "font-semibold text-emerald-700"
                            : "text-slate-700"
                        }`}
                      >
                        {envira}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          max === elementor
                            ? "font-semibold text-rose-700"
                            : "text-slate-700"
                        }`}
                      >
                        {elementor}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          max === seedprod
                            ? "font-semibold text-amber-700"
                            : "text-slate-700"
                        }`}
                      >
                        {seedprod}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {winnerName}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-emerald-50 via-rose-50 to-amber-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (overall winner)
                  </th>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.envira}
                  </td>
                  <td className="px-4 py-3 font-semibold text-rose-800">
                    {averages.elementor}
                  </td>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages.seedprod}
                  </td>
                  <td className="px-4 py-3 font-bold text-slate-900">
                    {overallWinnerName}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <ClipboardList className="h-6 w-6 text-emerald-600" />
            Pricing snapshots & positioning
          </h2>
          <p className="text-sm text-slate-700">
            Exact prices change, but the pricing patterns are consistent: Envira
            prices like a gallery specialist, Elementor like a site builder, and
            SeedProd like a landing page tool. Confirm current details on each
            vendor’s pricing page before committing.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {pricingTable.map((row) => (
              <div
                key={row.tool}
                className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200"
              >
                <h3 className="text-base font-semibold text-slate-900">
                  {row.tool}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {row.tiers}
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-800">
                  Best for: {row.bestFor}
                </p>
                <p className="mt-1 text-sm text-slate-700">{row.notes}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Use-cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200"
              >
                <h3 className="text-base font-semibold text-slate-900">
                  {useCase.title}
                </h3>
                <p className="mt-1 text-sm font-semibold text-emerald-800">
                  Winner: {useCase.winner}
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  {useCase.explanation}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Pros & cons */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        {/* FAQ */}
        <section className="mt-12 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Sparkles className="h-6 w-6 text-emerald-600" />
            FAQ
          </h2>
          <div className="space-y-3">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-slate-900">
                  {item.q}
                  <span className="text-sm text-slate-500 group-open:hidden">
                    +
                  </span>
                  <span className="hidden text-sm text-slate-500 group-open:inline">
                    −
                  </span>
                </summary>
                <p className="mt-2 text-sm text-slate-700">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Bottom line */}
        <section className="mt-12 rounded-3xl bg-slate-50 p-6 text-slate-800 ring-1 ring-slate-200">
          <h2 className="text-xl font-bold text-slate-900">Bottom line</h2>
          <p className="mt-2 text-sm md:text-base">
            <strong>Envira Gallery</strong> wins when image galleries, proofing, and
            photo sales are the core of your site. <strong>Elementor</strong> wins
            when you want a full visual site builder and galleries are only one
            part of a bigger design system. <strong>SeedProd</strong> wins when
            launch speed for campaigns and funnels matters more than deep gallery
            features. You can even mix them—Envira for galleries inside Elementor
            or SeedProd layouts—if your stack calls for it.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-sky-700">
            <Link
              className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200 hover:bg-slate-100"
              to="/tools/envira-gallery"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Envira Gallery review
            </Link>
            <Link
              className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200 hover:bg-slate-100"
              to="/tools/elementor"
            >
              View Elementor review
            </Link>
            <Link
              className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200 hover:bg-slate-100"
              to="/tools/seedprod"
            >
              View SeedProd review
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
