import React from "react";
import {
  Sparkles,
  Clapperboard,
  Wand2,
  AudioLines,
  Film,
  Crown,
  Gauge,
  Layers,
  Zap,
} from "lucide-react";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "synthesia vs pictory vs descript";
const canonical = buildCanonical("/tools/compare/synthesia-vs-pictory-vs-descript");

const brandMeta = {
  synthesia: {
    gradient: "from-emerald-500 via-teal-500 to-indigo-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/synthesia.io",
  },
  pictory: {
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/pictory.ai",
  },
  descript: {
    gradient: "from-slate-700 via-slate-600 to-slate-800",
    badge: "bg-slate-100 text-slate-900",
    logo: "https://logo.clearbit.com/descript.com",
  },
};

const contenders = [
  {
    key: "synthesia",
    name: "Synthesia",
    blurb: "AI avatar-led training, explainers, and multilingual compliance content.",
    url: "https://www.synthesia.io/",
    slug: "synthesia",
  },
  {
    key: "pictory",
    name: "Pictory",
    blurb: "Turn scripts or blog posts into social-ready video snippets with captions.",
    url: "https://pictory.ai/",
    slug: "pictory",
  },
  {
    key: "descript",
    name: "Descript",
    blurb: "Edit podcasts, tutorials, and screen recordings like a doc with overdub.",
    url: "https://www.descript.com/",
    slug: "descript",
  },
];

const comparisonRows = [
  {
    label: "Best for",
    synthesia: "Avatar/presenter-led explainers and multilingual corporate training",
    pictory: "Blog/script-to-social clips with captions and stock footage",
    descript: "Editing recorded content (podcasts, tutorials, screen recordings)",
  },
  {
    label: "Avatar / presenter quality",
    synthesia: "Studio-grade avatars, 120+ languages, emotion and gesture controls",
    pictory: "Basic avatars; strongest with b-roll + text overlays",
    descript: "No lifelike avatars; relies on overdub + b-roll",
  },
  {
    label: "Script-to-video speed",
    synthesia: "Slides-to-video workflow; 5–10 min for polished explainers",
    pictory: "Very fast script/URL to storyboard with auto captions",
    descript: "Faster for editing existing footage than generating from scratch",
  },
  {
    label: "Editing flexibility",
    synthesia: "Scene-based; limited timeline precision but consistent output",
    pictory: "Scene trims, stock swaps, captions; no full pro-level timeline",
    descript: "Text-based edits + multitrack timeline with strong control",
  },
  {
    label: "Collaboration & revisions",
    synthesia: "Comments, brand kits, template-driven updates for teams",
    pictory: "Basic project sharing and revisions for marketers",
    descript: "Comments, versioning, shared libraries, team workspaces",
  },
  {
    label: "Stock / asset coverage",
    synthesia: "Templates, backgrounds, and media suitable for corporate training",
    pictory: "Large stock/video/music set tuned for social clips",
    descript: "Relies more on your recordings; stock via integrations/b-roll",
  },
  {
    label: "Learning curve",
    synthesia: "Easy — feels like building slides that render to video",
    pictory: "Very easy — storyboard-first; minimal video skill required",
    descript: "Moderate — text + timeline model requires a short ramp-up",
  },
  {
    label: "Integrations",
    synthesia: "LMS/LXP, SCORM workflows, SharePoint, and API for bulk rendering",
    pictory: "Drive, stock libraries, captions; light automation options",
    descript: "Zapier, publishing to YouTube/Drive, exports to Adobe/Final Cut",
  },
];

const scoreboard = [
  { label: "Avatar realism", synthesia: 9.5, pictory: 7.0, descript: 5.5 },
  { label: "Script/import to storyboard", synthesia: 9.0, pictory: 9.2, descript: 7.4 },
  { label: "Editing power", synthesia: 7.2, pictory: 7.8, descript: 9.4 },
  { label: "Collaboration", synthesia: 8.2, pictory: 7.8, descript: 9.0 },
  { label: "Stock/asset coverage", synthesia: 8.0, pictory: 8.8, descript: 7.5 },
  { label: "Audio & voice quality", synthesia: 9.2, pictory: 8.4, descript: 9.0 },
  { label: "Learning curve (ease)", synthesia: 8.8, pictory: 9.0, descript: 7.6 },
  { label: "Price-to-volume", synthesia: 7.6, pictory: 8.6, descript: 8.4 },
];

const avgScore = (key) => {
  const total = scoreboard.reduce((sum, row) => sum + (row[key] || 0), 0);
  return (total / scoreboard.length).toFixed(1);
};

const averageScores = {
  synthesia: avgScore("synthesia"),
  pictory: avgScore("pictory"),
  descript: avgScore("descript"),
};

const keyToName = {
  synthesia: "Synthesia",
  pictory: "Pictory",
  descript: "Descript",
};

const overallWinnerKey = Object.entries(averageScores).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];
const overallWinnerName = keyToName[overallWinnerKey];

const pricingTable = [
  {
    plan: "Synthesia Starter",
    monthly: "From ~US$29/seat",
    annual: "Lower when billed annually",
    limits: "Approx. 10 minutes/month, 1 seat",
    notes: "Best to test avatar-led explainers; custom avatars and SSO on higher plans.",
  },
  {
    plan: "Pictory Standard / Pro",
    monthly: "From ~US$23 / US$47",
    annual: "Discounted on annual",
    limits: "Credit-based; 30–60 videos/month, 720p–1080p",
    notes: "Great cost-per-video for shorts and social content.",
  },
  {
    plan: "Descript Creator / Pro",
    monthly: "From ~US$15 / US$30",
    annual: "Lower on annual billing",
    limits: "10 / 30 hours monthly transcription & remote recording",
    notes: "Best for ongoing podcasts, webinars, and tutorials.",
  },
];

const featureBullets = {
  workflow: [
    "Synthesia: Storyboard scenes, pick an avatar, choose a voice, and render — ideal for non-editors building training modules.",
    "Pictory: Paste a URL or script to auto-generate scenes, captions, and aspect ratios for reels, shorts, and feed videos.",
    "Descript: Import recordings, get a transcript, and edit by deleting or rewriting text while keeping full timeline access.",
  ],
  editing: [
    "Synthesia: Focuses on scene-level changes (script, avatar, layout) rather than fully granular timeline edits.",
    "Pictory: Lets you trim scenes, swap visuals, tweak captions, and adjust music — no heavy video-edit skills required.",
    "Descript: Combines text-based edits with a multitrack timeline, great for precise audio/video storytelling.",
  ],
  ai: [
    "Synthesia: AI presenters with lip-sync, gestures, and multilingual voices, plus script assist for corporate content.",
    "Pictory: AI summarises long-form text and auto-selects key moments for short clips and highlight reels.",
    "Descript: Overdub voice cloning, automatic filler-word removal, Studio Sound cleanup, and smart transcription.",
  ],
  integrations: [
    "Synthesia: Plays nicely with LMS/LXP platforms and internal portals via export and API.",
    "Pictory: Integrates with stock libraries and cloud storage for ingest and export.",
    "Descript: Connects to YouTube, Drive, podcast hosts, and NLEs like Adobe/Final Cut via exports.",
  ],
};

const prosCons = {
  synthesia: {
    pros: [
      "Best-in-class realistic AI presenters for training and explainers",
      "120+ languages with strong lip-sync and voice options",
      "Slide-like UI enables non-video teams to ship content",
      "Brand kits, templates, and enterprise controls for consistency",
      "API and LMS workflows for large training libraries",
    ],
    cons: [
      "Costs climb with seats and rendered minutes",
      "Limited fine-grain timeline control for advanced editors",
      "Custom avatars and SSO gated to higher tiers",
    ],
  },
  pictory: {
    pros: [
      "Fastest from blog/script to social-ready video",
      "Strong auto-captioning and stock pairing for reels",
      "Credit-based pricing makes high-volume shorts affordable",
      "Multiple aspect ratios for TikTok, Reels, and YouTube Shorts",
      "Very low learning curve for marketers",
    ],
    cons: [
      "Avatar options are basic and less realistic",
      "1080p export cap on typical plans",
      "Collaboration and automation options are limited versus Descript",
    ],
  },
  descript: {
    pros: [
      "Text-based editing plus multitrack timeline provides deep control",
      "Overdub voice cloning and Studio Sound improve production quality",
      "Excellent for podcasts, tutorials, and screen-record-heavy workflows",
      "Team collaboration with comments, versions, and shared libraries",
      "Exports to 4K and to Adobe/Final Cut for further finishing",
    ],
    cons: [
      "No lifelike AI avatars built in",
      "Takes some time to adapt to text + timeline workflow",
      "Transcription/recording hours are capped per plan",
    ],
  },
};

const faqs = [
  {
    q: "Which tool makes the most realistic AI presenters?",
    a: "Synthesia. Its studio-grade avatars, emotion controls, and multilingual voices make it the strongest choice for presenter-led explainers and training.",
  },
  {
    q: "What’s best for turning blog posts into social-ready videos fast?",
    a: "Pictory. Paste a URL or script and it builds a storyboard with stock footage, captions, and multiple aspect ratios optimised for shorts and reels.",
  },
  {
    q: "Which is best for editing podcasts and screen recordings?",
    a: "Descript. It turns audio and video into text so you can edit by deleting or rewriting words while keeping multitrack timeline control.",
  },
  {
    q: "Do any of them support LMS or SCORM workflows?",
    a: "Synthesia is the best fit. You export MP4s and SCORM-friendly assets that plug into LMS/LXP platforms for corporate training.",
  },
  {
    q: "Which is cheapest for high-volume social clips?",
    a: "Pictory usually wins on cost-per-video for social shorts thanks to its credit-based pricing and 1080p exports.",
  },
  {
    q: "Can I use my own face or brand voice?",
    a: "Synthesia offers custom avatars and voices on enterprise plans. Descript’s Overdub can clone voices with consent and enough training data. Pictory focuses more on stock visuals and TTS voices.",
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

export default function SynthesiaVsPictoryVsDescriptPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Synthesia vs Pictory vs Descript (${YEAR}) – AI video tools comparison`}
        description="Compare Synthesia, Pictory, and Descript for avatar-led explainers, social shorts, and podcast/screen-record editing. See which AI video tool fits your workflow and budget."
        canonical={canonical}
        keywords={`${primaryKeyword}, ai video tools, synthesia review, pictory review, descript review`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          AI video tools
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Synthesia vs Pictory vs Descript ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Synthesia dominates presenter-led explainer and training videos. Pictory specialises in
          turning scripts and blog posts into social-ready clips. Descript transforms how you edit
          podcasts, tutorials, and screen recordings by letting you edit video like a doc. Below is a
          structured breakdown of how they compare on avatars, workflows, editing power, and price.
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
                {item.key === "synthesia" ? (
                  <Film className="h-6 w-6 text-emerald-100" />
                ) : item.key === "pictory" ? (
                  <Wand2 className="h-6 w-6 text-white/80" />
                ) : (
                  <AudioLines className="h-6 w-6 text-white/80" />
                )}
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
              Choose <strong>Synthesia</strong> for avatar-led explainers, onboarding, and
              multilingual compliance training. Choose <strong>Pictory</strong> if your priority is
              pumping out social clips from scripts and blog posts. Choose <strong>Descript</strong>{" "}
              when you already record content (podcasts, webinars, tutorials) and want the most
              control and collaboration when editing.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Crown className="h-4 w-4 text-emerald-700" /> Overall scoreboard winner:{" "}
              {overallWinnerName}{" "}
              <span className="text-xs text-slate-600">
                (avg: {averageScores[overallWinnerKey]}/10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              Treat <strong>Synthesia</strong> as the training-and-explainers specialist,{" "}
              <strong>Pictory</strong> as the social repurposing specialist, and{" "}
              <strong>Descript</strong> as the post-production specialist for recorded content. Pick
              based on where most of your content originates.
            </p>
          </div>
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-emerald-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="min-w-[720px] w-full text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Synthesia</th>
                  <th className="px-4 py-3">Pictory</th>
                  <th className="px-4 py-3">Descript</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.synthesia}</td>
                    <td className="px-4 py-3 text-slate-700">{row.pictory}</td>
                    <td className="px-4 py-3 text-slate-700">{row.descript}</td>
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
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Synthesia</th>
                  <th className="px-4 py-3">Pictory</th>
                  <th className="px-4 py-3">Descript</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const winnerValue = Math.max(
                    row.synthesia,
                    row.pictory,
                    row.descript
                  );
                  const winner =
                    winnerValue === row.synthesia
                      ? "Synthesia"
                      : winnerValue === row.pictory
                      ? "Pictory"
                      : "Descript";

                  return (
                    <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Synthesia"
                            ? "font-semibold text-emerald-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.synthesia}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Pictory"
                            ? "font-semibold text-indigo-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.pictory}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Descript"
                            ? "font-semibold text-slate-900"
                            : "text-slate-700"
                        }`}
                      >
                        {row.descript}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">
                        {winner}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-emerald-50 via-indigo-50 to-slate-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averageScores.synthesia}
                  </td>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averageScores.pictory}
                  </td>
                  <td className="px-4 py-3 font-semibold text-slate-900">
                    {averageScores.descript}
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
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Clapperboard className="h-5 w-5 text-emerald-600" /> Content creation & workflow
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.workflow.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Film className="h-5 w-5 text-indigo-600" /> Editing capabilities
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.editing.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Wand2 className="h-5 w-5 text-purple-600" /> AI & automation
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.ai.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <AudioLines className="h-5 w-5 text-slate-700" /> Integrations & ecosystem
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.integrations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Pricing snapshots</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
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
            Pricing changes frequently and depends on usage, regions, and promos. Treat these as
            directional. Synthesia tends to be the most expensive per minute but saves on production
            costs. Pictory is usually the cheapest for large volumes of social clips. Descript is most
            cost-effective for teams who publish audio/video regularly.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Synthesia:</strong> Designed for non-editors. If you can build slides, you can
              build training videos. The guardrails help maintain brand consistency.
            </li>
            <li>
              <strong>Pictory:</strong> Very friendly for social teams. The storyboard-first flow is
              minimal and opinionated, so you are unlikely to get stuck.
            </li>
            <li>
              <strong>Descript:</strong> More powerful and therefore more to learn. Once your team
              understands text-based editing plus timeline, it replaces several tools at once.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Multilingual onboarding or compliance training:</strong>{" "}
              <span className="font-semibold">Synthesia</span> wins with avatars, languages, and LMS
              workflows.
            </li>
            <li>
              <strong>Daily social clips from blogs/newsletters:</strong>{" "}
              <span className="font-semibold">Pictory</span> wins with URL/script-to-video pipelines.
            </li>
            <li>
              <strong>Podcast, webinar, and screen-record edits:</strong>{" "}
              <span className="font-semibold">Descript</span> wins with text-based editing and
              overdub.
            </li>
            <li>
              <strong>Hybrid workflow (scripted intro + real conversation):</strong>{" "}
              <span className="font-semibold">Synthesia + Descript</span> together work well — generate
              avatar intros in Synthesia, then finish edit and distribution in Descript.
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
              <h3 className="text-lg font-semibold">Synthesia</h3>
              <p className="text-sm text-slate-700">
                Best if you need on-brand, presenter-led explainers and training in many languages
                without hiring presenters or editors.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: HR, L&D, product marketing, compliance teams.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Pictory</h3>
              <p className="text-sm text-slate-700">
                Best if your strategy is repurposing written content into short, captioned social
                videos.
              </p>
              <p className="mt-2 text-sm font-semibold text-indigo-700">
                Ideal for: Social media teams, content marketers, solo creators.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Descript</h3>
              <p className="text-sm text-slate-700">
                Best when your raw material is audio or video recordings and you care about detailed
                edits, great sound, and team collaboration.
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-800">
                Ideal for: Podcasters, educators, SaaS founders, video-first teams.
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
                <h3 className="text-lg font-semibold text-slate-900">{item.q}</h3>
                <p className="mt-1 text-slate-700">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
