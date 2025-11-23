import React from "react";
import {
  Sparkles,
  Crown,
  Layers,
  BarChart3,
  ArrowLeft,
  Film,
  Gauge,
  Zap,
  Shield,
} from "lucide-react";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";
import { Link } from "react-router-dom";

const YEAR = new Date().getFullYear();
const canonical = buildCanonical("/tools/compare/kapwing-vs-canva-vs-invideo");
const primaryKeyword = "kapwing vs canva vs invideo";

const brandMeta = {
  kapwing: {
    gradient: "from-indigo-500 via-purple-500 to-slate-800",
    badge: "bg-indigo-100 text-indigo-900",
  },
  canva: {
    gradient: "from-emerald-500 via-teal-500 to-sky-500",
    badge: "bg-emerald-100 text-emerald-900",
  },
  invideo: {
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    badge: "bg-amber-100 text-amber-900",
  },
};

const contenders = [
  {
    key: "kapwing",
    name: "Kapwing",
    blurb: "Collaborative online video editor with precise timeline control.",
    url: "https://www.kapwing.com/",
  },
  {
    key: "canva",
    name: "Canva",
    blurb: "Template- and brand-kit-first editor with simple video timelines.",
    url: "https://www.canva.com/",
  },
  {
    key: "invideo",
    name: "InVideo",
    blurb: "Template-driven video creation for fast social ads and promos.",
    url: "https://invideo.io/",
  },
];

const comparisonRows = [
  {
    label: "Best for",
    kapwing: "Collaborative, browser-based editing with timeline control.",
    canva: "Template- and brand-kit-heavy marketing teams.",
    invideo: "Template-driven social ads and quick promo videos.",
  },
  {
    label: "Editing depth",
    kapwing: "Multi-track timeline, captions, green screen, resize for channels.",
    canva: "Basic timeline with strong design overlays, text, and animations.",
    invideo: "Template swaps, stock-heavy compositions, basic cuts.",
  },
  {
    label: "Collaboration",
    kapwing: "Real-time collaboration, commenting, shared projects.",
    canva: "Shared folders, brand kits, and comments across designs.",
    invideo: "Light collaboration via shared projects/templates.",
  },
  {
    label: "AI assists",
    kapwing: "Auto subtitles, translation, smart cut, background removal.",
    canva: "Magic Media, text-to-video/image, background remover.",
    invideo: "AI script generation, text-to-video, voiceovers.",
  },
  {
    label: "Stock & assets",
    kapwing: "Good stock, but upload-first for your own footage.",
    canva: "Large stock library (photos, video, audio, graphics).",
    invideo: "Large stock library focused on social ad formats.",
  },
  {
    label: "Pricing style",
    kapwing: "Seats + export/resolution limits.",
    canva: "Per-seat Pro / Teams packages.",
    invideo: "Tiers based on exports, features, and stock access.",
  },
];

const scoreboard = [
  { label: "Collaboration", kapwing: 9.2, canva: 8.7, invideo: 7.8 },
  { label: "Editing flexibility", kapwing: 9.0, canva: 8.2, invideo: 7.9 },
  { label: "Template richness", kapwing: 8.2, canva: 9.4, invideo: 9.0 },
  { label: "Value for social teams", kapwing: 8.6, canva: 8.8, invideo: 8.7 },
  { label: "Learning curve", kapwing: 8.8, canva: 9.1, invideo: 8.5 },
];

const avg = (tool) =>
  (
    scoreboard.reduce((sum, row) => sum + (row[tool] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  kapwing: avg("kapwing"),
  canva: avg("canva"),
  invideo: avg("invideo"),
};

const overallWinner =
  Math.max(averages.kapwing, averages.canva, averages.invideo) ===
  parseFloat(averages.kapwing)
    ? "Kapwing"
    : Math.max(averages.canva, averages.invideo) ===
      parseFloat(averages.canva)
    ? "Canva"
    : "InVideo";

const prettyNames = {
  kapwing: "Kapwing",
  canva: "Canva",
  invideo: "InVideo",
};

const pricingTable = [
  {
    plan: "Kapwing Pro",
    monthly: "From ≈ $16–$24 / user / month",
    annual: "Lower per user on annual billing",
    limits: "Higher export quality, longer durations, more storage, and brand controls.",
    notes: "Best when multiple collaborators work on social and branded edits.",
  },
  {
    plan: "Canva Pro",
    monthly: "$14.99 / month (approx.)",
    annual: "Discounted annual pricing",
    limits: "Premium templates, brand kits, and basic video tools for 1–5 users.",
    notes: "Good default for marketing teams doing a mix of static and video.",
  },
  {
    plan: "Canva for Teams",
    monthly: "Scales with seats",
    annual: "Annual options available",
    limits: "Advanced collaboration, approvals, and brand management.",
    notes: "Suitable for larger content and design teams.",
  },
  {
    plan: "InVideo Business / Unlimited",
    monthly: "From ≈ $20+ / month",
    annual: "Lower effective rate with annual plans",
    limits: "Export caps, watermark rules, and stock tiers differ by plan.",
    notes: "Makes sense when you lean heavily on template-led social video.",
  },
];

const featureBullets = {
  workflows: [
    "Kapwing: Strong for async + real-time collaboration on timelines and marketing edits.",
    "Canva: Great for campaigns where video is one part of a broader design system.",
    "InVideo: Optimised for “pick template, swap content, export” ad and social workflows.",
  ],
  useCases: [
    "Kapwing: Best when teams cut, caption, and resize content across multiple platforms.",
    "Canva: Best when video, carousels, and static posts all share brand kits and templates.",
    "InVideo: Best for quickly spinning up variations of ads and social promos.",
  ],
  ai: [
    "Kapwing: AI focuses on subtitles, translations, and smart editing time-savers.",
    "Canva: AI spans images, video, and layout suggestions across the Canva suite.",
    "InVideo: AI helps generate scripts and assemble them into social-friendly formats.",
  ],
};

const faqs = [
  {
    q: `Who wins overall in ${YEAR}?`,
    a: "Kapwing wins if you care most about collaborative, browser-based editing with captions and timelines. Canva wins if you want templates and brand kits across all your design work. InVideo wins when you mainly need fast, template-driven social ads built from stock and scripts.",
  },
  {
    q: "When should I choose Kapwing?",
    a: "Pick Kapwing if you need real-time collaboration, browser-based editing, and more precise control over timelines, captions, and aspect ratios across platforms.",
  },
  {
    q: "When should I choose Canva?",
    a: "Choose Canva if your team already lives in Canva for design and you want simple video tools, brand kits, and templates under one roof.",
  },
  {
    q: "When should I choose InVideo?",
    a: "Choose InVideo if your priority is cranking out social ads, promos, and content variations from templates with strong stock support and AI script help.",
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
  kapwing: {
    pros: [
      "Real-time and async collaboration on browser-based timelines.",
      "Good captioning, translation, and resize tools for social content.",
      "No heavy desktop installs; works well for distributed teams.",
    ],
    cons: [
      "Not as template-rich as Canva or InVideo for quick ad formats.",
      "Complex, long-form edits may still suit desktop NLEs better.",
    ],
  },
  canva: {
    pros: [
      "One place for brand kits, templates, and everyday marketing content.",
      "Very low learning curve for non-video specialists.",
      "Video sits alongside decks, social posts, and print assets.",
    ],
    cons: [
      "Timeline and audio controls are simpler than dedicated video tools.",
      "Heavy video teams may still need more advanced editing software.",
    ],
  },
  invideo: {
    pros: [
      "Fast template-led production for ads and social content.",
      "Large library of templates and stock focused on marketing needs.",
      "AI-assisted script and text-to-video options.",
    ],
    cons: [
      "Less flexible for bespoke edits and complex storytelling.",
      "Works best when you embrace its templates rather than custom builds.",
    ],
  },
};

const LogoBadge = ({ name }) => {
  const key = name.toLowerCase().includes("kapwing")
    ? "kapwing"
    : name.toLowerCase().includes("canva")
    ? "canva"
    : name.toLowerCase().includes("invideo")
    ? "invideo"
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
        <span className="text-sm font-bold text-white">
          {name.slice(0, 2).toUpperCase()}
        </span>
      </div>
      <span
        className={`rounded-full px-3 py-1 text-xs font-semibold ${meta.badge}`}
      >
        {name}
      </span>
    </div>
  );
};

export default function KapwingVsCanvaVsInVideoPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Kapwing vs Canva vs InVideo (${YEAR}) – Online video tools compared`}
        description="Compare Kapwing, Canva, and InVideo on editing depth, templates, collaboration, pricing, and AI features to pick the right online video tool for your team."
        canonical={canonical}
        keywords={`${primaryKeyword}, kapwing review, canva review, invideo review, video tool comparison, online video editor`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">
          Online video tools
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Kapwing vs Canva vs InVideo ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          <strong>Kapwing</strong> emphasises collaborative, browser-based editing.{" "}
          <strong>Canva</strong> is template- and brand-kit-first with simple video tools.{" "}
          <strong>InVideo</strong> focuses on fast, template-driven social ads. Below is a
          structured breakdown so you can choose the right stack for your content and team.
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
                <Film className="h-5 w-5 text-white/80" />
              </div>
              <p className="relative mt-3 text-sm font-medium text-white/90">
                {item.blurb}
              </p>
            </a>
          ))}
        </div>

        {/* Quick verdict + overall winner */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-indigo-100 bg-indigo-50 px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-indigo-900">
              <Sparkles className="h-5 w-5" />
              <p className="text-lg font-semibold">Quick verdict</p>
            </div>
            <p className="mt-2 text-slate-800">
              Choose <strong>Kapwing</strong> if collaboration and timeline control matter most.
              Choose <strong>Canva</strong> if video is part of a{" "}
              <strong>brand-led design system</strong> across many asset types. Choose{" "}
              <strong>InVideo</strong> if you mainly need to{" "}
              <strong>ship social ads and promos from templates</strong>.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Crown className="h-4 w-4 text-indigo-600" /> Overall scoreboard winner:{" "}
              {overallWinner}{" "}
              <span className="text-xs text-slate-600">
                (avg:{" "}
                {overallWinner === "Kapwing"
                  ? averages.kapwing
                  : overallWinner === "Canva"
                  ? averages.canva
                  : averages.invideo}
                /10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              The “winner” depends on whether you optimise for{" "}
              <strong>collaboration (Kapwing)</strong>,{" "}
              <strong>brand alignment (Canva)</strong>, or{" "}
              <strong>speed-to-publish for ads (InVideo)</strong>.
            </p>
          </div>
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-indigo-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Kapwing</th>
                  <th className="px-4 py-3">Canva</th>
                  <th className="px-4 py-3">InVideo</th>
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
                    <td className="px-4 py-3 text-slate-700">{row.kapwing}</td>
                    <td className="px-4 py-3 text-slate-700">{row.canva}</td>
                    <td className="px-4 py-3 text-slate-700">{row.invideo}</td>
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
                  <th className="px-4 py-3">Kapwing</th>
                  <th className="px-4 py-3">Canva</th>
                  <th className="px-4 py-3">InVideo</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const winner =
                    row.kapwing === row.canva && row.canva === row.invideo
                      ? "Tie"
                      : Math.max(row.kapwing, row.canva, row.invideo) ===
                        row.kapwing
                      ? "Kapwing"
                      : Math.max(row.canva, row.invideo) === row.canva
                      ? "Canva"
                      : "InVideo";

                  return (
                    <tr key={row.label}>
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Kapwing"
                            ? "font-semibold text-indigo-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.kapwing}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Canva"
                            ? "font-semibold text-emerald-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.canva}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "InVideo"
                            ? "font-semibold text-amber-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.invideo}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">
                        {winner}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-indigo-50 via-emerald-50 to-amber-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages.kapwing}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.canva}
                  </td>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages.invideo}
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
              <Film className="h-5 w-5 text-indigo-600" /> Workflows & collaboration
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.workflows.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Zap className="h-5 w-5 text-emerald-600" /> Use-cases & formats
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.useCases.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Shield className="h-5 w-5 text-amber-600" /> AI assists across the stack
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.ai.map((item) => (
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
                    <td className="px-4 py-3 text-slate-700">
                      {row.annual || "Varies by plan"}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.limits || "Depends on tier and usage."}
                    </td>
                    <td className="px-4 py-3 text-slate-700">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600">
            Pricing for Kapwing, Canva, and InVideo changes regularly and may vary by region and
            seat count. Always confirm on the official pricing pages and model your actual export
            volume, collaborators, and use-cases before committing.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Kapwing:</strong> Feels like a{" "}
              <strong>modern online editor</strong> with timelines and collaboration. Editors and
              marketers can pick it up quickly if they have any video background.
            </li>
            <li>
              <strong>Canva:</strong> Built for{" "}
              <strong>non-video specialists and marketers</strong>. If your team already uses Canva,
              extending into simple video is very natural.
            </li>
            <li>
              <strong>InVideo:</strong> Feels like a{" "}
              <strong>template-led ad builder</strong>. Very approachable for social media
              managers, but less flexible for bespoke editing.
            </li>
          </ul>
        </section>

        {/* Real-world use cases & winners */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Remote marketing/content teams:</strong> Kapwing wins with collaborative
              timelines and browser-based access.
            </li>
            <li>
              <strong>Brand-led marketing teams:</strong> Canva wins when all design work—static and
              video—needs to run through brand kits and templates.
            </li>
            <li>
              <strong>Performance marketing & social ads:</strong> InVideo wins when you need lots of
              ad variations quickly from templates.
            </li>
            <li>
              <strong>Agencies:</strong> Many agencies mix tools—e.g., Kapwing for collab edits,
              Canva for brand designs, and InVideo for ad template experiments.
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
              <h3 className="text-lg font-semibold">Kapwing</h3>
              <p className="text-sm text-slate-700">
                Best when <strong>collaboration, captions, and resizing</strong> across multiple
                platforms are your biggest needs.
              </p>
              <p className="mt-2 text-sm font-semibold text-indigo-700">
                Ideal for: Remote content teams, social teams, and lean in-house video squads.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Canva</h3>
              <p className="text-sm text-slate-700">
                Best when you want <strong>brand-consistent campaigns</strong> across decks, posts,
                and simple videos.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: Marketing teams, founders, and agencies standardising on Canva.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">InVideo</h3>
              <p className="text-sm text-slate-700">
                Best when <strong>speed and template-driven ads</strong> matter more than deep
                editing.
              </p>
              <p className="mt-2 text-sm font-semibold text-amber-700">
                Ideal for: Performance marketers, social media teams, and promo-heavy brands.
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
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-indigo-700 ring-1 ring-indigo-100 hover:bg-indigo-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
