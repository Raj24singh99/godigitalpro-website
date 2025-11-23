import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  ClipboardList,
  Crown,
  ArrowLeft,
  Workflow,
  MonitorPlay,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "synthesia vs pictory vs veed";
const canonical = buildCanonical("/tools/compare/synthesia-vs-pictory-vs-veed");

const brandMeta = {
  synthesia: {
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/synthesia.io",
  },
  pictory: {
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/pictory.ai",
  },
  veed: {
    gradient: "from-orange-500 via-amber-500 to-rose-500",
    badge: "bg-orange-100 text-orange-900",
    logo: "https://logo.clearbit.com/veed.io",
  },
};

const contenders = [
  {
    key: "synthesia",
    name: "Synthesia",
    blurb: "AI avatar videos from scripts with realistic presenters and 120+ languages.",
    url: "https://www.synthesia.io",
    slug: "synthesia",
  },
  {
    key: "pictory",
    name: "Pictory",
    blurb: "Script-to-video and article-to-video for social clips and explainers.",
    url: "https://pictory.ai",
    slug: "pictory",
  },
  {
    key: "veed",
    name: "Veed",
    blurb: "Online editor with captions, templates, and AI tools for fast social clips.",
    url: "https://www.veed.io",
    slug: "veed",
  },
];

const comparisonRows = [
  {
    label: "Best for",
    synthesia: "Avatar-led training, onboarding, and explainer videos.",
    pictory: "Turning scripts/blogs into social clips and videos at scale.",
    veed: "Fast editing, captions, and templates for creators and teams.",
  },
  {
    label: "Avatar / presenter quality",
    synthesia: "Most realistic AI presenters with gestures and emotions.",
    pictory: "Basic avatars; stronger for stock b-roll + captions.",
    veed: "No lifelike avatars; focuses on traditional video editing.",
  },
  {
    label: "Script-to-video workflow",
    synthesia: "Slide-like scene builder from script to avatar video.",
    pictory: "URL/script import → auto storyboard with scenes and captions.",
    veed: "Import video and add captions/effects; not script-first.",
  },
  {
    label: "Editing flexibility",
    synthesia: "Scene-based; limited granular timeline control.",
    pictory: "Storyboard edits, trims, and stock swaps; not pro NLE level.",
    veed: "Full online editor with timeline, effects, and multi-layer overlays.",
  },
  {
    label: "Speed to publish",
    synthesia: "Fast for script-to-avatar explainers and training.",
    pictory: "Fast for automated storyboards and captions from text/URL.",
    veed: "Very fast for editing recorded clips with AI captions and templates.",
  },
  {
    label: "Collaboration & workflow",
    synthesia: "Teams, templates, brand kits, and enterprise governance.",
    pictory: "Basic project sharing; good for marketers repurposing content.",
    veed: "Workspaces, brand kits, and templates for collaborative creators.",
  },
  {
    label: "Learning curve",
    synthesia: "Easy — feels like making slides that export to video.",
    pictory: "Very easy — storyboard-first with few advanced controls.",
    veed: "Moderate — full editor but simpler than classic NLEs.",
  },
  {
    label: "Export & formats",
    synthesia: "MP4 up to high resolutions; ideal for LMS, websites, and decks.",
    pictory: "Multiple aspect ratios (16:9, 1:1, 9:16) up to 1080p.",
    veed: "Multiple formats and platforms; strong social export presets.",
  },
  {
    label: "Best channel fit",
    synthesia: "LMS, internal training, website explainers.",
    pictory: "TikTok, Reels, YouTube Shorts, social content.",
    veed: "YouTube, LinkedIn, social + paid creatives.",
  },
];

const scoreboard = [
  { label: "Avatar realism", scores: { synthesia: 9.6, pictory: 7.2, veed: 0.5 } },
  { label: "Script-to-video speed", scores: { synthesia: 9.2, pictory: 9.0, veed: 8.8 } },
  { label: "Editing flexibility", scores: { synthesia: 7.4, pictory: 7.8, veed: 9.1 } },
  { label: "Collaboration / workflow", scores: { synthesia: 8.4, pictory: 7.8, veed: 8.6 } },
  { label: "Value for money", scores: { synthesia: 7.6, pictory: 8.6, veed: 8.9 } },
];

const avg = (key) => {
  const total = scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0);
  return (total / scoreboard.length).toFixed(1);
};

const averages = {
  synthesia: avg("synthesia"),
  pictory: avg("pictory"),
  veed: avg("veed"),
};

const keyToName = {
  synthesia: "Synthesia",
  pictory: "Pictory",
  veed: "Veed",
};

const overallWinnerKey = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];
const overallWinnerName = keyToName[overallWinnerKey];

const pricingTable = [
  {
    plan: "Synthesia Starter",
    monthly: "From ~US$29/seat",
    annual: "Lower on annual",
    limits: "Avatar videos with monthly minute limits",
    notes: "Best for training/explainers needing avatars; enterprise for custom avatars & SSO.",
  },
  {
    plan: "Pictory Standard / Premium",
    monthly: "From ~US$23–47/mo",
    annual: "Lower when billed annually",
    limits: "Credits for script-to-video, captions, and exports",
    notes: "Great for batch social clips and blog-to-video repurposing.",
  },
  {
    plan: "Veed Pro",
    monthly: "From ~US$18+/mo",
    annual: "Lower on annual",
    limits: "Exports, subtitles, brand kit, higher quality limits",
    notes: "Strong value for creators and small teams focused on editing speed.",
  },
];

const prosCons = {
  synthesia: {
    pros: [
      "Most realistic AI avatars for training and explainers",
      "120+ languages and accents for global audiences",
      "Slide-like storyboard flow that non-editors can use",
      "Brand kits and templates for consistent internal content",
      "Enterprise features (SSO, API, custom avatars) available",
    ],
    cons: [
      "Pricier per render/seat than Pictory or Veed",
      "Limited granular timeline and audio mixing controls",
      "Custom avatars and advanced governance locked to higher tiers",
    ],
  },
  pictory: {
    pros: [
      "Very fast script/blog-to-video and highlight reels",
      "Strong captions and stock footage pairing for social",
      "Credit-based pricing works well for campaign bursts",
      "Multiple aspect ratios for Shorts, Reels, and TikTok",
      "Easy for marketers with minimal editing background",
    ],
    cons: [
      "Avatars are basic and not realistic",
      "Editing depth is limited vs full editors like Veed",
      "Brand control and collaboration are lighter than pro tools",
    ],
  },
  veed: {
    pros: [
      "Full online editor with timeline, effects, and overlays",
      "Fast captions, translations, and templates for creators",
      "Affordable tiers with good limits for frequent posting",
      "Brand kits and project templates for small teams",
      "Good fit as a lightweight alternative to desktop NLEs",
    ],
    cons: [
      "No lifelike avatars or presenter videos",
      "Heavy or complex edits may still require desktop NLEs",
      "Export limits/branding constraints on lower tiers",
    ],
  },
};

const faqs = [
  {
    q: `Is Synthesia better than Pictory or Veed in ${YEAR}?`,
    a: "It depends on your workflow. Synthesia wins for realistic avatars and multilingual training. Pictory wins for quick script/blog-to-social clips. Veed wins for online editing, captions, and templates without avatars.",
  },
  {
    q: "Which is best for training videos and internal explainers?",
    a: "Synthesia. Its avatars, multilingual voices, and slide-like builder make it ideal for onboarding, compliance, and internal product explainers.",
  },
  {
    q: "Which is best for social clips from existing content?",
    a: "Pictory and Veed. Pictory automates storyboards from scripts or URLs. Veed shines when you already have footage and want fast captions, edits, and templates.",
  },
  {
    q: "Which is most affordable for solo creators?",
    a: "Veed is generally the cheapest per month for frequent editing. Pictory’s credit plans are good for campaigns. Synthesia is more expensive but reduces production costs for avatar-led training.",
  },
  {
    q: "Can any of them replace a full desktop editor?",
    a: "Veed comes closest for social and marketing edits. For very complex projects, many teams still pair Veed or Descript/Adobe with these tools.",
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

const featureBullets = {
  workflow: [
    "Synthesia: Start from a script, choose an avatar and template, then adjust scenes like slides that render to video.",
    "Pictory: Paste a script or blog URL and it auto-detects key points, builds a storyboard, and adds captions and stock footage.",
    "Veed: Import your footage, then trim, caption, and enhance with templates and overlays in a familiar editor layout.",
  ],
  editing: [
    "Synthesia: Strong for scene-level updates (scripts, avatars, layouts) but light on frame-level timeline control.",
    "Pictory: Good for trims, caption styling, and swapping b-roll; not built for complex multi-layer timelines.",
    "Veed: Timeline-based editor with layers, transitions, overlays, and brand elements for more creative control.",
  ],
  ai: [
    "Synthesia: AI avatars, voices, and script assist; excels at presenter-style content without filming.",
    "Pictory: AI summarisation, key-moment detection, and captioning to turn long text into concise clips.",
    "Veed: AI captioning, translation, background removal, and effects to speed up editing and localisation.",
  ],
  distribution: [
    "Synthesia: Export MP4s for LMSs, intranets, landing pages, and sales decks.",
    "Pictory: One-click aspect ratio changes and exports tuned for TikTok, Reels, and YouTube Shorts.",
    "Veed: Direct exports for social, embeddable links, and downloadable files for ads or websites.",
  ],
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

export default function SynthesiaVsPictoryVsVeedPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Synthesia vs Pictory vs Veed – Which AI video tool? (${YEAR})`}
        description="Compare Synthesia, Pictory, and Veed on avatars, editing flexibility, speed to publish, pricing, and best-fit use cases to choose the right AI video stack."
        canonical={canonical}
        keywords={`${primaryKeyword}, ai video tools, video generation, video editing`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          AI video tools
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Synthesia vs Pictory vs Veed – Honest Comparison ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Synthesia leads in avatar-led training and explainers. Pictory focuses on turning scripts
          and blog posts into social-ready clips. Veed gives creators a fast, browser-based editor
          with captions and templates. This breakdown compares them on avatars, workflow, editing
          depth, speed, and pricing so you can pick the right stack for your content pipeline.
        </p>

        {/* Top summary cards */}
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <div className="rounded-3xl border border-emerald-100 bg-emerald-50 px-5 py-4 shadow-sm md:col-span-2">
            <div className="flex items-center gap-2 text-emerald-900">
              <Sparkles className="h-5 w-5" />
              <p className="text-lg font-semibold">Quick verdict</p>
            </div>
            <p className="mt-2 text-slate-800">
              Choose <strong>Synthesia</strong> if you want avatar-led training and explainers in
              many languages without filming. Choose <strong>Pictory</strong> if you want to
              repurpose scripts and blogs into social clips at scale. Choose <strong>Veed</strong>{" "}
              if you want a fast online editor with captions, templates, and more timeline control.
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-emerald-800">
              <Crown className="h-4 w-4" />
              Overall scoreboard winner:{" "}
              <span className="font-bold">{overallWinnerName}</span>
              <span className="text-xs font-medium text-emerald-700">
                (avg: {averages[overallWinnerKey]}/10)
              </span>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800">
              <MonitorPlay className="h-4 w-4 text-emerald-700" /> Best for avatars
            </div>
            <p className="text-sm text-slate-700">
              <strong>Synthesia</strong> has the most realistic AI presenters and multilingual
              voices, ideal for corporate training, onboarding, and policy explainers.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Workflow className="h-4 w-4 text-indigo-700" /> Best for script → social
            </div>
            <p className="text-sm text-slate-700">
              <strong>Pictory</strong> converts scripts and URLs into captioned storyboards and
              short-form video, perfect for repurposing content.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Gauge className="h-4 w-4 text-orange-700" /> Best for editing speed
            </div>
            <p className="text-sm text-slate-700">
              <strong>Veed</strong> is a fast, browser-based editor with strong captions, templates,
              and effects, ideal for YouTube and social creators.
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
            <Layers className="h-6 w-6 text-emerald-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Synthesia</th>
                  <th className="px-4 py-3">Pictory</th>
                  <th className="px-4 py-3">Veed</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/40">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.synthesia}</td>
                    <td className="px-4 py-3 text-slate-700">{row.pictory}</td>
                    <td className="px-4 py-3 text-slate-700">{row.veed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Scoreboard */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-indigo-600" /> Scoreboard (1–10)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Synthesia</th>
                  <th className="px-4 py-3">Pictory</th>
                  <th className="px-4 py-3">Veed</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const { scores } = row;
                  const entries = Object.entries(scores);
                  const [winnerKey] = entries.sort((a, b) => b[1] - a[1])[0];
                  const winnerName = keyToName[winnerKey];

                  return (
                    <tr key={row.label} className="odd:bg-white even:bg-slate-50/40">
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "synthesia"
                            ? "font-semibold text-emerald-700"
                            : "text-slate-700"
                        }`}
                      >
                        {scores.synthesia}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "pictory"
                            ? "font-semibold text-indigo-700"
                            : "text-slate-700"
                        }`}
                      >
                        {scores.pictory}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "veed"
                            ? "font-semibold text-orange-700"
                            : "text-slate-700"
                        }`}
                      >
                        {scores.veed}
                      </td>
                      <td className="px-4 py-3 text-sm font-semibold text-slate-900">
                        {winnerName}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-emerald-50 via-indigo-50 to-orange-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (overall winners)
                  </th>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.synthesia}
                  </td>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages.pictory}
                  </td>
                  <td className="px-4 py-3 font-semibold text-orange-800">
                    {averages.veed}
                  </td>
                  <td className="px-4 py-3 font-bold text-slate-900">
                    {overallWinnerName}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Feature comparison */}
        <section className="mt-12 space-y-8">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Zap className="h-6 w-6 text-emerald-600" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Content creation & workflow</h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.workflow.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Editing capabilities</h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.editing.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">AI features</h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.ai.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Export & distribution</h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.distribution.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <ClipboardList className="h-6 w-6 text-emerald-600" /> Pricing snapshots
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
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
                  <tr key={row.plan} className="odd:bg-white even:bg-slate-50/40">
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
            Treat these numbers as directional only — pricing and inclusions change frequently.
            Typically, <strong>Synthesia</strong> is the highest per seat/minute but replaces
            expensive shoots. <strong>Pictory</strong> is the most efficient for batch social clips.
            <strong> Veed</strong> is usually the best recurring value for frequent editors.
          </p>
        </section>

        {/* Pros & Cons by tool (card view) */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Pros & Cons Overview</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {Object.entries(prosCons).map(([key, value]) => (
              <div
                key={key}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <LogoBadge name={keyToName[key]} />
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
          </div>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Synthesia:</strong> Feels like building slides. Most non-technical teams can
              ship polished training videos on day one with templates and guided flows.
            </li>
            <li>
              <strong>Pictory:</strong> The easiest if you live in docs and blogs. The storyboard
              model keeps decisions simple: keep, cut, or change b-roll.
            </li>
            <li>
              <strong>Veed:</strong> Slightly steeper but still beginner-friendly; most YouTube and
              social editors will be comfortable quickly with the timeline interface.
            </li>
          </ul>
        </section>

        {/* Real-world use cases & winners */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Global onboarding or compliance training:</strong>{" "}
              <span className="font-semibold">Synthesia</span> wins with realistic presenters,
              multilingual voices, and outputs optimised for LMSs and internal portals.
            </li>
            <li>
              <strong>Repurposing blogs/newsletters into shorts:</strong>{" "}
              <span className="font-semibold">Pictory</span> wins with URL/script-to-video flows and
              automated captions and b-roll.
            </li>
            <li>
              <strong>Quick talking-head clips for social:</strong>{" "}
              <span className="font-semibold">Veed</span> wins with fast trimming, captioning, and
              template reuse from your existing footage.
            </li>
            <li>
              <strong>Mixed stack (avatars + real footage):</strong> Many teams combine{" "}
              <span className="font-semibold">Synthesia</span> avatar intros with{" "}
              <span className="font-semibold">Veed</span> edits or Pictory recap clips to cover both
              training and social.
            </li>
          </ul>
        </section>

        {/* Deep Pros & Cons via shared component */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        {/* FAQ */}
        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">FAQ</h2>
          <div className="space-y-3">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
              >
                <h3 className="text-sm font-semibold text-slate-900">{item.q}</h3>
                <p className="mt-1 text-sm text-slate-700">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Back link */}
        <div className="mt-10 flex items-center gap-2 text-sm text-slate-700">
          <Link
            to="/tools"
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 font-semibold text-emerald-700 ring-1 ring-emerald-100 hover:bg-emerald-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
