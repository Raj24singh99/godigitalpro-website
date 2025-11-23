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
const primaryKeyword = "veed vs descript vs kapwing";
const canonical = buildCanonical("/tools/compare/veed-vs-descript-vs-kapwing");

const brandMeta = {
  veed: {
    gradient: "from-rose-500 via-pink-500 to-purple-600",
    badge: "bg-rose-100 text-rose-900",
    logo: "https://logo.clearbit.com/veed.io",
  },
  descript: {
    gradient: "from-indigo-500 via-blue-500 to-sky-500",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/descript.com",
  },
  kapwing: {
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/kapwing.com",
  },
};

const contenders = [
  {
    key: "veed",
    name: "VEED",
    blurb: "Browser editor with subtitles, templates, and AI clipping.",
    url: "https://www.veed.io",
  },
  {
    key: "descript",
    name: "Descript",
    blurb: "Transcript-based audio/video editing for podcasts and training.",
    url: "https://www.descript.com",
  },
  {
    key: "kapwing",
    name: "Kapwing",
    blurb: "Quick meme/social video creation with a big template library.",
    url: "https://www.kapwing.com",
  },
];

const comparisonRows = [
  {
    label: "Editing approach",
    veed: "Timeline editor with drag-and-drop layers and AI tools.",
    descript: "Edit by editing the transcript, like a doc, with multitrack.",
    kapwing: "Template-first canvas with a simple timeline for quick cuts.",
  },
  {
    label: "Audio features",
    veed: "Noise removal, audio leveling, AI voiceover, basic multitrack.",
    descript: "Studio Sound, overdub, multitrack, podcast-grade tooling.",
    kapwing: "Basic trimming, volume control, stock music, simple effects.",
  },
  {
    label: "Subtitles & captions",
    veed: "Accurate captions with design presets, brand kits, and styling.",
    descript:
      "Auto captions tied to the transcript; edit words to edit the video.",
    kapwing:
      "Great for quick meme captions, timed overlays, and simple translations.",
  },
  {
    label: "Collaboration",
    veed: "Web review links, team workspaces, folders, and SSO on enterprise.",
    descript: "Project sharing with roles, comments, and version history.",
    kapwing:
      "Shared folders, link-based editing, and collaboration for creator teams.",
  },
  {
    label: "Use-case focus",
    veed: "Marketing/social repurposing, shorts, and captioned promos.",
    descript: "Podcasts, narrated explainers, training, and screencasts.",
    kapwing:
      "Memes, GIFs, social moments, creator-first short-form content.",
  },
];

const scoreboard = [
  { label: "Ease of use", scores: { veed: 9.0, descript: 7.8, kapwing: 9.2 } },
  {
    label: "Audio power",
    scores: { veed: 8.3, descript: 9.4, kapwing: 6.8 },
  },
  {
    label: "Template depth",
    scores: { veed: 8.7, descript: 7.2, kapwing: 8.9 },
  },
  {
    label: "Collaboration",
    scores: { veed: 8.5, descript: 8.0, kapwing: 7.5 },
  },
  {
    label: "Value",
    scores: { veed: 8.4, descript: 8.1, kapwing: 8.7 },
  },
];

const avg = (key) =>
  (
    scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  veed: avg("veed"),
  descript: avg("descript"),
  kapwing: avg("kapwing"),
};
const overallWinner = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const pricingTable = [
  {
    plan: "VEED Pro",
    monthly: "From ~$24/mo",
    annual: "From ~$18/mo annual",
    limits: "Higher export quality, AI tools, brand templates, more projects",
    notes: "Good value for marketing/social teams publishing regularly.",
  },
  {
    plan: "Descript Creator/Pro",
    monthly: "From ~$15–$30/mo",
    annual: "From ~$12–$24/mo annual",
    limits: "Transcription hours, multitrack editing, Studio Sound, Overdub",
    notes: "Ideal for podcasters and teams doing narrative content.",
  },
  {
    plan: "Kapwing Pro",
    monthly: "From ~$24/mo",
    annual: "From ~$16/mo annual",
    limits: "Brand kits, unlimited exports, background removal, workspace",
    notes: "Strong fit for creators and social teams making lots of clips.",
  },
];

const faqs = [
  {
    q: "Which tool edits audio the best?",
    a: "Descript leads with Studio Sound, overdub, and multitrack editing. VEED handles light cleanup, leveling, and AI voiceover, while Kapwing is best for quick meme audio tweaks rather than deep mixing.",
  },
  {
    q: "Is VEED replacing Descript?",
    a: "No. VEED focuses on marketing and social repurposing, where speed and captions matter most. Descript is built around transcripts and is better for podcasts, training videos, and narrative content.",
  },
  {
    q: "Does Kapwing support teams?",
    a: "Yes. Kapwing offers shared folders, brand kits, and reviewer links, but VEED and Descript generally have stronger workflows and permissions for larger organizations and internal teams.",
  },
  {
    q: "Which one should agencies pick?",
    a: "Agencies doing a lot of short clips, reels, and captioned ads often prefer VEED. Podcast studios and training teams gravitate towards Descript. Creator agencies and meme pages tend to lean on Kapwing for speed.",
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
      "Fast browser-based editing with minimal learning curve",
      "Strong subtitles, templates, and social-first formats",
      "Enterprise workspaces and collaboration features",
      "Good balance of AI tools and usability for marketers",
    ],
    cons: [
      "Limited heavy-duty multitrack audio mixing",
      "Teams doing long-form narrative may outgrow it",
      "Advanced features require higher tiers",
    ],
  },
  descript: {
    pros: [
      "Transcript-based editing feels like editing a doc",
      "Studio Sound significantly improves audio quality",
      "Overdub voices and AI tools for narration",
      "Excellent for podcasts, explainers, and training content",
    ],
    cons: [
      "Desktop app and workflow can feel heavier at first",
      "Less template-driven than VEED/Kapwing for quick social content",
      "Best value realised if you regularly produce long-form content",
    ],
  },
  kapwing: {
    pros: [
      "Huge template and meme library for social content",
      "Very simple UI, easy for non-editors and creators",
      "Great for GIFs, memes, and short punchy clips",
      "Team-friendly cloud workspace for creator squads",
    ],
    cons: [
      "Less robust audio tooling than Descript",
      "Not ideal for long-form or complex timelines",
      "Brand compliance and governance are lighter than VEED/Descript",
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

export default function VeedVsDescriptVsKapwingPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`VEED vs Descript vs Kapwing – Online Video Editor Comparison (${YEAR})`}
        description="Compare VEED, Descript, and Kapwing on editing style, audio power, captions, templates, collaboration, and pricing to choose the best online video editor for your workflow."
        canonical={canonical}
        keywords={`${primaryKeyword}, online video editor comparison, veed alternative, descript vs kapwing`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Hero */}
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Video editing
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          VEED vs Descript vs Kapwing – Honest Comparison ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Three browser-first editors, three different strengths:{" "}
          <strong>VEED</strong> for marketing and social clips,{" "}
          <strong>Descript</strong> for transcript-based podcasts and training,
          and <strong>Kapwing</strong> for memes and creator-style social
          videos. Here is how they compare on editing approach, audio power,
          captions, collaboration, and pricing.
        </p>

        {/* Quick verdict & highlight cards */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {/* Quick Verdict */}
          <div className="space-y-3 rounded-3xl bg-rose-50/80 p-6 ring-1 ring-rose-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-rose-800">
              <Sparkles className="h-5 w-5" /> Quick Verdict
            </div>
            <p className="text-base text-slate-800">
              <strong>VEED</strong> is best for marketing teams producing
              captioned clips and repurposing content.{" "}
              <strong>Descript</strong> wins for audio-first workflows—podcasts,
              narrated explainers, and training.{" "}
              <strong>Kapwing</strong> serves creator and meme workflows where
              speed and templates matter most.
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
              Kapwing’s free plan is one of the least restrictive for quick
              social posts. VEED and Descript are generous for tests but
              watermark longer exports until you upgrade.
            </p>
          </div>

          {/* Best for audio-first editing */}
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Gauge className="h-5 w-5 text-indigo-700" /> Best for audio-first
            </div>
            <p className="text-sm text-slate-700">
              Descript’s transcript editing, Studio Sound, and overdub make it
              the natural choice for podcasters and teams where sound quality
              drives the experience.
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
            Quickly compare VEED, Descript, and Kapwing on editing approach,
            audio capabilities, captions, collaboration, and primary focus.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">VEED</th>
                  <th className="px-4 py-3">Descript</th>
                  <th className="px-4 py-3">Kapwing</th>
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
                      {row.descript}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.kapwing}
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
            <Gauge className="h-6 w-6 text-indigo-600" /> Scoreboard
          </h2>
          <p className="text-sm text-slate-700">
            These scores are directional and assume common use cases: marketing
            teams, podcast studios, and creator/social teams. Your specific
            needs may push one tool higher.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">VEED</th>
                  <th className="px-4 py-3">Descript</th>
                  <th className="px-4 py-3">Kapwing</th>
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
                          winnerKey === "descript"
                            ? "font-semibold text-indigo-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.descript}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "kapwing"
                            ? "font-semibold text-emerald-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.kapwing}
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
                    {averages.descript}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.kapwing}
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
            Pricing changes frequently, and each tool offers multiple tiers.
            Treat this as a directional comparison and always verify current
            limits and rates on their official sites.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Monthly</th>
                  <th className="px-4 py-3">Annual</th>
                  <th className="px-4 py-3">Limits (approx.)</th>
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

        {/* Shared Pros & Cons component for consistency across site */}
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
