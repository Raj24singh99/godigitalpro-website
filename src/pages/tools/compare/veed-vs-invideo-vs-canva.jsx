import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  Zap,
  Crown,
  ArrowLeft,
  Video,
  ClipboardList,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "veed vs invideo vs canva";
const canonical = buildCanonical("/tools/compare/veed-vs-invideo-vs-canva");

const brandMeta = {
  veed: {
    gradient: "from-rose-500 via-pink-500 to-purple-600",
    badge: "bg-rose-100 text-rose-900",
    logo: "https://logo.clearbit.com/veed.io",
  },
  invideo: {
    gradient: "from-indigo-500 via-violet-500 to-fuchsia-500",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/invideo.io",
  },
  canva: {
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/canva.com",
  },
};

const contenders = [
  {
    key: "veed",
    name: "VEED",
    blurb: "Timeline editor with subtitles, templates, and collaboration.",
    url: "https://www.veed.io",
  },
  {
    key: "invideo",
    name: "InVideo",
    blurb: "Template-driven video creator with AI scripts and scenes.",
    url: "https://invideo.io",
  },
  {
    key: "canva",
    name: "Canva",
    blurb: "General design suite with social-ready video templates.",
    url: "https://www.canva.com",
  },
];

const comparisonRows = [
  {
    label: "Editing style",
    veed: "Full timeline editor in the browser with layers and audio tracks.",
    invideo: "Template and scene-based editor—fill prompts, swap media.",
    canva: "Drag-and-drop canvas with a simple timeline and animation controls.",
  },
  {
    label: "AI help",
    veed: "Auto subtitles, clip detection, script assistant, and auto-resize.",
    invideo: "AI video assistant, text-to-video, auto voiceover and scenes.",
    canva:
      "Magic Media for script generation, B-roll suggestions, and quick edits.",
  },
  {
    label: "Best for",
    veed: "Repurposing long-form recordings into shorts, reels, and explainers.",
    invideo: "Creating ads and promos from templates and AI scripts.",
    canva:
      "Quick, brand-safe social videos alongside your existing Canva designs.",
  },
  {
    label: "Collaboration",
    veed: "Review links, comments, and team workspaces with roles.",
    invideo: "Workspace sharing, approvals, and shared media libraries.",
    canva:
      "Organization-wide brand controls, comments, and approvals across all assets.",
  },
  {
    label: "Learning curve",
    veed: "Low for marketers; moderate for complex timelines and layering.",
    invideo: "Very low—guided flows, prompts, and prebuilt scenes.",
    canva:
      "Very low if your team already uses Canva for graphics and social posts.",
  },
];

const scoreboard = [
  { label: "Editing flexibility", scores: { veed: 9.0, invideo: 8.1, canva: 7.5 } },
  { label: "Template breadth", scores: { veed: 8.4, invideo: 9.2, canva: 9.0 } },
  { label: "Brand management", scores: { veed: 8.3, invideo: 8.0, canva: 9.4 } },
  { label: "Repurposing speed", scores: { veed: 9.1, invideo: 8.8, canva: 8.5 } },
  { label: "Value", scores: { veed: 8.4, invideo: 8.7, canva: 9.1 } },
];

const avg = (key) =>
  (
    scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  veed: avg("veed"),
  invideo: avg("invideo"),
  canva: avg("canva"),
};

const overallWinner = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const pricingTable = [
  {
    plan: "VEED Pro",
    monthly: "From ~$24/mo",
    annual: "From ~$18/mo annual",
    limits: "Higher export quality, AI clipper, brand templates, more projects",
    notes: "Best for marketing teams repurposing a steady stream of footage.",
  },
  {
    plan: "InVideo Business",
    monthly: "From ~$30/mo",
    annual: "From ~$20/mo annual",
    limits:
      "Unlimited premium templates, stock assets, background removal, collaboration",
    notes: "Strong fit for ad creatives and social promo teams.",
  },
  {
    plan: "Canva Pro / Teams",
    monthly: "From ~$14.99+/mo",
    annual: "From ~$12.99/mo annual",
    limits:
      "Brand kit, Magic Media, shared folders, template locking, more cloud storage",
    notes: "Great when your whole org already runs on Canva for design.",
  },
];

const faqs = [
  {
    q: `Which platform should I pick in ${YEAR}?`,
    a: "Choose VEED if you primarily edit recorded content (webinars, podcasts, screen recordings), InVideo if you want AI-assisted ads and promos from templates, and Canva if you already design everything else in Canva and need simple, on-brand videos too.",
  },
  {
    q: "Is VEED more powerful than Canva for video?",
    a: "Yes—VEED has a fuller timeline editor with subtitles, audio cleanup, keyframing, and review workflows. Canva is stronger for brand systems, graphics, and quick social edits, but its video timeline is more basic.",
  },
  {
    q: "Does InVideo replace VEED?",
    a: "Not really. InVideo is built to transform scripts and prompts into templated scenes quickly. VEED is better when you have real footage to cut down, caption, and polish with layers and audio tools.",
  },
  {
    q: "Can I mix and match tools?",
    a: "Many teams cut and clean footage in VEED, export master files, and then add graphic variations or localized overlays in Canva. InVideo is often used alongside either editor to spin up ad variations and new hooks from scripts.",
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
  veed: {
    pros: [
      "Browser-based timeline control with layers and effects",
      "Strong subtitles, auto captioning, and basic audio cleanup",
      "Enterprise permissions, review links, and team workspaces",
    ],
    cons: [
      "Pricier at scale for large teams and seat counts",
      "Fewer stock design elements compared to Canva’s library",
    ],
  },
  invideo: {
    pros: [
      "Massive template catalog for ads and promos",
      "AI script assistant and text-to-video workflows",
      "Fast exports for performance creatives and tests",
    ],
    cons: [
      "Less manual timeline control than VEED",
      "Seats billed per creator can add up for big teams",
    ],
  },
  canva: {
    pros: [
      "Deep brand kits and organization-wide controls",
      "Magic Media AI for scripts, B-roll, and edits",
      "Used across the org for all design, not just video",
    ],
    cons: [
      "Video timeline is basic vs dedicated editors",
      "Audio tools and fine-grain controls are limited",
    ],
  },
};

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

export default function VeedVsInvideoVsCanvaPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`VEED vs InVideo vs Canva – Template & Editing Comparison (${YEAR})`}
        description="Compare VEED, InVideo, and Canva on editing control, templates, AI helpers, collaboration, pricing, and real-world video workflows for marketing teams and creators."
        canonical={canonical}
        keywords={`${primaryKeyword}, social video editor comparison, veed alternative, invideo vs canva`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Hero */}
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Video creation
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          VEED vs InVideo vs Canva – Honest Comparison ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          All three promise quick marketing videos, but they shine at different
          stages: <strong>VEED</strong> is strongest at editing recordings,{" "}
          <strong>InVideo</strong> excels at generating ads and promos from
          templates and scripts, and <strong>Canva</strong> wins when your whole
          brand already lives inside Canva.
        </p>

        {/* Quick verdict & highlight cards */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {/* Quick Verdict */}
          <div className="space-y-3 rounded-3xl bg-rose-50/80 p-6 ring-1 ring-rose-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-rose-800">
              <Sparkles className="h-5 w-5" /> Quick Verdict
            </div>
            <p className="text-base text-slate-800">
              <strong>VEED</strong> is best when you are editing real footage
              (talking-heads, webinars, screen recordings) and need subtitles
              and feedback loops. <strong>InVideo</strong> is ideal for
              high-volume ads and promos built from AI scripts and templates.{" "}
              <strong>Canva</strong> is perfect if your organization already
              uses Canva for everything and you want simple, brand-safe videos
              too. Many teams combine VEED + Canva in their stack.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-rose-800">
              <Crown className="h-4 w-4" /> Overall scoreboard winner:{" "}
              {overallWinner.charAt(0).toUpperCase() + overallWinner.slice(1)}{" "}
              <span className="text-xs font-medium text-rose-700">
                (avg: {averages[overallWinner]}/10)
              </span>
            </div>
          </div>

          {/* Best free option */}
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Video className="h-5 w-5 text-rose-700" /> Best free option
            </div>
            <p className="text-sm text-slate-700">
              Canva’s free plan offers highly usable video templates and stock
              assets without watermarks. VEED and InVideo are excellent for
              testing on free tiers but reserve watermark-free exports for paid
              plans.
            </p>
          </div>

          {/* Best for templates & ads */}
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Zap className="h-5 w-5 text-indigo-700" /> Best for ads & promos
            </div>
            <p className="text-sm text-slate-700">
              InVideo delivers one of the largest template libraries plus AI
              script-to-video workflows—great for performance marketers and ad
              creative testing.
            </p>
          </div>
        </div>

        {/* Brand cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {contenders.map((card) => (
            <div
              key={card.key}
              className={`relative overflow-x-auto rounded-2xl border border-slate-200 bg-gradient-to-br ${
                brandMeta[card.key]?.gradient || "from-slate-500 to-slate-700"
              } p-5 shadow-md md:overflow-hidden`}
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
              {card.url && (
                <a
                  href={card.url}
                  target="_blank"
                  rel="noreferrer"
                  className="relative mt-3 inline-flex text-xs font-semibold text-white/90 underline underline-offset-2"
                >
                  Visit {card.name}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-rose-600" /> Side-by-Side Comparison
          </h2>
          <p className="text-sm text-slate-700">
            Compare VEED, InVideo, and Canva on editing style, AI helpers,
            collaboration, and where each fits best in a modern content pipeline.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">VEED</th>
                  <th className="px-4 py-3">InVideo</th>
                  <th className="px-4 py-3">Canva</th>
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
                    <td className="px-4 py-3 text-slate-700">{row.veed}</td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.invideo}
                    </td>
                    <td className="px-4 py-3 text-slate-700">{row.canva}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Scoreboard */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-indigo-600" /> Scoreboard
          </h2>
          <p className="text-sm text-slate-700">
            Scores below assume typical marketing and content teams. If your
            workflow is heavily ad-focused, InVideo may rank higher; if brand
            governance dominates, Canva climbs.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">VEED</th>
                  <th className="px-4 py-3">InVideo</th>
                  <th className="px-4 py-3">Canva</th>
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
                          winnerKey === "veed"
                            ? "font-semibold text-rose-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.veed}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "invideo"
                            ? "font-semibold text-indigo-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.invideo}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "canva"
                            ? "font-semibold text-emerald-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.canva}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-rose-50/70">
                  <th className="bg-rose-100 px-4 py-3 font-semibold text-slate-900">
                    Average
                  </th>
                  <td className="px-4 py-3 font-semibold text-rose-800">
                    {averages.veed}
                  </td>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages.invideo}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.canva}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Pros & Cons cards */}
        <section className="mt-10 grid gap-4 md:grid-cols-3">
          {Object.entries(prosCons).map(([key, value]) => (
            <div
              key={key}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <LogoBadge name={key.charAt(0).toUpperCase() + key.slice(1)} />
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
        </section>

        {/* Pricing snapshot */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <ClipboardList className="h-6 w-6 text-rose-600" /> Pricing snapshot
          </h2>
          <p className="text-sm text-slate-700">
            Pricing and limits shift often. Use this as a directional guide and
            always confirm exact tiers, users, and export limits on each tool’s
            pricing page.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Monthly</th>
                  <th className="px-4 py-3">Annual</th>
                  <th className="px-4 py-3">Typical limits</th>
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
        </section>

        {/* Shared Pros/Cons block for consistency */}
        <ProsConsSection contenders={contenders} prosCons={prosCons} />

        {/* FAQs */}
        <section className="mt-10 space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">FAQs</h2>
          <div className="space-y-2 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-slate-100 bg-slate-50/60 p-4 open:bg-slate-50"
              >
                <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-slate-900 group-open:text-rose-800">
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
        <div className="mt-10 flex items-center gap-3 text-sm font-semibold text-emerald-700">
          <ArrowLeft className="h-4 w-4" />
          <Link to="/tools">Back to Tools Hub</Link>
        </div>
      </div>
    </main>
  );
}
