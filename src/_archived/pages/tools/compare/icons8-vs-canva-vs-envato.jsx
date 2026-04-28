import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  ArrowLeft,
  Images,
  Crown,
  BarChart3,
  Zap,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "icons8 vs canva vs envato";
const canonical = buildCanonical("/tools/compare/icons8-vs-canva-vs-envato");

const brandMeta = {
  icons8: {
    gradient: "from-emerald-500 via-teal-500 to-indigo-600",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/icons8.com",
  },
  canva: {
    gradient: "from-sky-500 via-blue-500 to-indigo-500",
    badge: "bg-sky-100 text-sky-900",
    logo: "https://logo.clearbit.com/canva.com",
  },
  envato: {
    gradient: "from-emerald-500 via-lime-500 to-amber-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/envato.com",
  },
};

const contenders = [
  {
    key: "icons8",
    name: "Icons8",
    blurb: "Cohesive icons, illustrations, and AI-generated visuals.",
    url: "https://icons8.com/",
  },
  {
    key: "canva",
    name: "Canva",
    blurb: "All-in-one design suite with templates and collaboration.",
    url: "https://www.canva.com/",
  },
  {
    key: "envato",
    name: "Envato Elements",
    blurb: "Huge marketplace of multi-format stock and templates.",
    url: "https://elements.envato.com/",
  },
];

const comparisonRows = [
  {
    label: "Core focus",
    icons8: "Icons, illustrations, photos, and AI visuals in cohesive styles.",
    canva: "Online design editor with templates, layouts, and brand kits.",
    envato: "Massive library of stock, templates, motion, and audio assets.",
  },
  {
    label: "Best for",
    icons8: "Product, marketing, and UI teams wanting on-brand visuals fast.",
    canva: "Teams needing end-to-end creative production in one browser tool.",
    envato: "Teams needing maximum variety across formats and categories.",
  },
  {
    label: "Licensing",
    icons8:
      "Free with attribution; paid tiers unlock commercial use and no attribution.",
    canva:
      "Most Pro assets covered under Pro license; some marketplace items separate.",
    envato:
      "Commercial license that covers downloads while subscription is active.",
  },
  {
    label: "Editing depth",
    icons8:
      "Basic tweaks (size, color, formats) plus AI enhancements; editing done in your design tool.",
    canva:
      "Full browser editor with layouts, text, animations, and team commenting.",
    envato:
      "Assets edited in native tools (Figma, Adobe, etc.) after download.",
  },
  {
    label: "Standout strength",
    icons8: "Cohesive styles + AI upscaling and smart generators.",
    canva: "Templates + brand kits + collaboration in one workspace.",
    envato: "Breadth across motion, 3D, stock photos, fonts, and audio.",
  },
];

const scoreboard = [
  { label: "Speed to publish", scores: { icons8: 9.2, canva: 9.0, envato: 8.2 } },
  { label: "Asset breadth", scores: { icons8: 8.1, canva: 8.7, envato: 9.6 } },
  { label: "Consistency of style", scores: { icons8: 9.4, canva: 8.4, envato: 7.5 } },
  { label: "Value for money", scores: { icons8: 9.0, canva: 8.8, envato: 8.3 } },
  { label: "Team workflows", scores: { icons8: 8.3, canva: 9.2, envato: 8.0 } },
];

const avg = (key) =>
  (
    scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  icons8: avg("icons8"),
  canva: avg("canva"),
  envato: avg("envato"),
};

const overallWinnerKey = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const prettyNames = {
  icons8: "Icons8",
  canva: "Canva",
  envato: "Envato Elements",
};

const overallWinnerLabel = prettyNames[overallWinnerKey] || overallWinnerKey;

const pricingTable = [
  {
    plan: "Icons8 Pro (single user)",
    monthly: "≈ $12–$19 / month",
    annual: "Cheaper on annual",
    limits: "Access to premium icons, photos, and illustrations; commercial use allowed.",
    notes: "Best when you rely heavily on cohesive icon/illustration styles.",
  },
  {
    plan: "Canva Pro",
    monthly: "$14.99 / month (approx.)",
    annual: "Discounted annual pricing",
    limits: "Premium templates, brand kits, stock, and some collaboration features.",
    notes: "Strong value if you design and ship most visuals inside Canva.",
  },
  {
    plan: "Canva for Teams",
    monthly: "Scales with seats",
    annual: "Annual options available",
    limits: "Additional collaboration, workflows, and admin controls.",
    notes: "Best for marketing and content teams collaborating daily.",
  },
  {
    plan: "Envato Elements",
    monthly: "From ≈ $16.50 / month",
    annual: "Lower effective rate on annual",
    limits: "Unlimited downloads while active; license tied to subscription.",
    notes: "Ideal when you need frequent stock across many media formats.",
  },
];

const featureBullets = {
  assets: [
    "Icons8: Curated libraries of icons, illustrations, photos, and 3D in consistent styles.",
    "Canva: Large library of templates, photos, icons, and videos directly inside the editor.",
    "Envato: Vast stock marketplace with templates for web, video, presentations, fonts, and more.",
  ],
  workflows: [
    "Icons8: Grab assets, then assemble designs in Figma, Canva, or your tool of choice.",
    "Canva: Design, review, and export all in one browser workspace with comments and brand assets.",
    "Envato: Download assets and plug them into your existing design and video tool stack.",
  ],
  licensing: [
    "Icons8: Great for teams that prefer clear commercial rights once on a paid plan.",
    "Canva: Pro license covers most in-editor elements; check for any third-party marketplace items.",
    "Envato: Subscription-based licensing that works well for high-volume asset sourcing.",
  ],
};

const faqs = [
  {
    q: `Is Icons8 better than Canva in ${YEAR}?`,
    a: "Icons8 wins when you care most about cohesive icon and illustration styles that you can drop into any design tool. Canva wins if you need a full editor with templates, layouts, and collaboration built in for everyday content creation.",
  },
  {
    q: "When should I choose Envato instead?",
    a: "Choose Envato Elements when you need maximum variety—motion graphics, video templates, audio, fonts, web templates, and more—rather than a single cohesive design style or in-browser editor.",
  },
  {
    q: "Can I combine these tools?",
    a: "Yes. Many teams source visuals from Icons8 or Envato, then assemble final creatives in Canva, Figma, or Adobe tools for layout, animation, and versioning.",
  },
  {
    q: "Which is best for teams?",
    a: "Canva offers the strongest built-in collaboration with shared templates and brand kits. Icons8 works well as a shared library for product and marketing teams. Envato is best used as a shared stock pool feeding into your existing design tools.",
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

const prosCons = {
  icons8: {
    pros: [
      "Cohesive icon and illustration styles across large libraries.",
      "AI-powered tools for upscaling, generation, and quick variations.",
      "Simple licensing on paid plans for commercial use.",
    ],
    cons: [
      "Not a full design editor; you still need Figma/Canva/Adobe.",
      "Breadth is smaller than Envato for video/audio-heavy teams.",
      "Team workflows are more about shared assets than full projects.",
    ],
  },
  canva: {
    pros: [
      "All-in-one browser editor for social, presentations, and marketing.",
      "Strong templates, brand kits, and collaboration/commenting.",
      "Low learning curve for non-designers and marketing teams.",
    ],
    cons: [
      "Asset styles can feel generic without strong brand discipline.",
      "Less control than pro tools for advanced motion or layout.",
      "Heavier teams may still need Figma/Adobe for product design.",
    ],
  },
  envato: {
    pros: [
      "Huge breadth of assets across video, audio, web, photos, and more.",
      "Great value for high-volume downloaders and agencies.",
      "Works well alongside any existing design/video stack.",
    ],
    cons: [
      "Styles vary widely; requires curation for brand consistency.",
      "No unified online editor; everything happens in external tools.",
      "License model requires process discipline to track usage.",
    ],
  },
};

const LogoBadge = ({ name }) => {
  const key = name.toLowerCase().includes("icons8")
    ? "icons8"
    : name.toLowerCase().includes("canva")
    ? "canva"
    : name.toLowerCase().includes("envato")
    ? "envato"
    : name.toLowerCase();

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

export default function Icons8VsCanvaVsEnvatoPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Icons8 vs Canva vs Envato (${YEAR}) – Which asset platform wins?`}
        description="Compare Icons8, Canva, and Envato Elements across pricing, asset breadth, style consistency, and team workflows to pick the right design asset stack."
        canonical={canonical}
        keywords={`${primaryKeyword}, design assets comparison, icons8 vs canva, icons8 vs envato, envato vs canva`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Page intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Design assets & visual production
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Icons8 vs Canva vs Envato Elements ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          <strong>Icons8</strong> gives you cohesive icons and illustrations you can drop into any
          design stack. <strong>Canva</strong> is the all-in-one editor for shipping everyday
          visuals fast. <strong>Envato Elements</strong> is the broad stock library you tap when you
          need variety across templates, motion, and audio.
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
                <Images className="h-5 w-5 text-white/80" />
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
              Choose <strong>Icons8</strong> if you want{" "}
              <strong>clean, cohesive icons and illustrations</strong> you can plug into any tool.
              Go with <strong>Canva</strong> if you want a{" "}
              <strong>browser-based editor with templates and collaboration</strong> for daily
              design work. Pick <strong>Envato Elements</strong> when you need a{" "}
              <strong>huge stock pool across formats</strong> and already have strong design tools
              in place.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Crown className="h-4 w-4 text-amber-600" /> Overall scoreboard winner:{" "}
              {overallWinnerLabel}{" "}
              <span className="text-xs text-slate-600">
                (avg: {averages[overallWinnerKey]}/10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              The “winner” depends on whether you are optimising for{" "}
              <strong>style consistency (Icons8)</strong>,{" "}
              <strong>production workflows (Canva)</strong>, or{" "}
              <strong>asset variety (Envato Elements)</strong>.
            </p>
          </div>
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-emerald-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Icons8</th>
                  <th className="px-4 py-3">Canva</th>
                  <th className="px-4 py-3">Envato Elements</th>
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
                    <td className="px-4 py-3 text-slate-700">{row.icons8}</td>
                    <td className="px-4 py-3 text-slate-700">{row.canva}</td>
                    <td className="px-4 py-3 text-slate-700">{row.envato}</td>
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
                  <th className="px-4 py-3">Criterion</th>
                  <th className="px-4 py-3">Icons8</th>
                  <th className="px-4 py-3">Canva</th>
                  <th className="px-4 py-3">Envato</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const entries = Object.entries(row.scores);
                  const [winnerKey] =
                    entries.sort((a, b) => Number(b[1]) - Number(a[1]))[0] ||
                    [];
                  const winnerName = prettyNames[winnerKey] || "";

                  return (
                    <tr key={row.label}>
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "icons8"
                            ? "font-semibold text-emerald-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.icons8}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "canva"
                            ? "font-semibold text-sky-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.canva}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "envato"
                            ? "font-semibold text-lime-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.envato}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">
                        {winnerName}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-emerald-50 via-sky-50 to-lime-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.icons8}
                  </td>
                  <td className="px-4 py-3 font-semibold text-sky-800">
                    {averages.canva}
                  </td>
                  <td className="px-4 py-3 font-semibold text-lime-800">
                    {averages.envato}
                  </td>
                  <td className="px-4 py-3 font-bold text-slate-900">
                    {overallWinnerLabel}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Feature comparison */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-emerald-600" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Images className="h-5 w-5 text-emerald-600" /> Asset libraries & variety
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.assets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Zap className="h-5 w-5 text-sky-600" /> Workflows & production
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.workflows.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Shield className="h-5 w-5 text-amber-600" /> Licensing & usage
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.licensing.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Pricing snapshots (approximate)</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Monthly (approx.)</th>
                  <th className="px-4 py-3">Annual / term</th>
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
            Pricing for Icons8, Canva, and Envato Elements changes over time and may vary by region
            and seat count. Always confirm on the official pricing pages and factor in how often you
            will actually download or design each month.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Icons8:</strong> Feels like a{" "}
              <strong>visual asset library with smart tools</strong>. Very fast to grab assets, with
              minimal training required for designers and marketers.
            </li>
            <li>
              <strong>Canva:</strong> Designed for{" "}
              <strong>non-designers and marketing teams</strong>. Drag-and-drop UI, templates, and
              comments make it easy to adopt across the company.
            </li>
            <li>
              <strong>Envato Elements:</strong> Feels like a{" "}
              <strong>professional stock marketplace</strong>. Designers and editors will feel at
              home, but you still need separate tools to actually edit and ship work.
            </li>
          </ul>
        </section>

        {/* Real-world use-cases & winners */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Product and UI teams:</strong> Icons8 often wins for consistent icon sets and
              UI illustrations that match across screens.
            </li>
            <li>
              <strong>Marketing and content teams:</strong> Canva usually wins as the all-in-one
              tool for social posts, decks, PDFs, and campaign assets.
            </li>
            <li>
              <strong>Agencies and video-first teams:</strong> Envato Elements is strong when you
              regularly need motion templates, audio, and diverse stock.
            </li>
            <li>
              <strong>Solo creators and small businesses:</strong> A blend of Icons8 (for assets)
              and Canva (for layouts) is a very efficient stack; Envato becomes more valuable as you
              scale content formats.
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
              <h3 className="text-lg font-semibold">Icons8</h3>
              <p className="text-sm text-slate-700">
                Best when you want <strong>clean, consistent icons and illustrations</strong> feeding
                into Figma, Canva, or other tools.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: Product teams, SaaS dashboards, UI-heavy apps, and tech brands.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Canva</h3>
              <p className="text-sm text-slate-700">
                Best for <strong>day-to-day content production</strong> with a broad team of
                marketers, writers, and ops people.
              </p>
              <p className="mt-2 text-sm font-semibold text-sky-700">
                Ideal for: Marketing teams, founders, agencies, and in-house content studios.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Envato Elements</h3>
              <p className="text-sm text-slate-700">
                Best when you need <strong>maximum variety of stock</strong> across motion, audio,
                web, and print assets.
              </p>
              <p className="mt-2 text-sm font-semibold text-lime-700">
                Ideal for: Creative agencies, video teams, and high-volume content operations.
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
                <p className="mt-1 text-slate-700">{item.a}</p>
              </div>
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
