import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  Zap,
  Crown,
  ArrowLeft,
  Video,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "vidiq vs tubebuddy vs pictory";
const canonical = buildCanonical("/tools/compare/vidiq-vs-tubebuddy-vs-pictory");

const brandMeta = {
  vidiq: {
    gradient: "from-sky-500 via-blue-500 to-cyan-500",
    badge: "bg-sky-100 text-sky-900",
    logo: "https://logo.clearbit.com/vidiq.com",
  },
  tubebuddy: {
    gradient: "from-red-500 via-rose-500 to-orange-500",
    badge: "bg-rose-100 text-rose-900",
    logo: "https://logo.clearbit.com/tubebuddy.com",
  },
  pictory: {
    gradient: "from-amber-500 via-purple-500 to-pink-600",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/pictory.ai",
  },
};

const contenders = [
  {
    key: "vidiq",
    name: "VidIQ",
    blurb: "Keyword intelligence, AI ideation, and trend tracking for YouTube.",
    url: "https://vidiq.com",
  },
  {
    key: "tubebuddy",
    name: "TubeBuddy",
    blurb: "Publishing automations, bulk updates, and metadata testing.",
    url: "https://www.tubebuddy.com",
  },
  {
    key: "pictory",
    name: "Pictory",
    blurb: "AI video creation and repurposing from text or long-form content.",
    url: "https://pictory.ai",
  },
];

const comparisonRows = [
  {
    label: "Primary strength",
    vidiq: "Keyword research, trend alerts, AI prompts.",
    tubebuddy: "Bulk processing, A/B tests, upload checklists.",
    pictory: "Script-to-video creation and branded templates.",
  },
  {
    label: "AI assistance",
    vidiq: "Suggests ideas, titles, descriptions, and draft scripts.",
    tubebuddy: "Limited AI for tags/thumbnails and recommendations.",
    pictory: "AI storyboard, voiceover, subtitles, and scene selection.",
  },
  {
    label: "Workflow fit",
    vidiq: "Strategists and creators choosing topics and briefs.",
    tubebuddy: "Channel managers optimizing metadata at scale.",
    pictory: "Marketing teams repurposing webinars, blogs, and scripts.",
  },
  {
    label: "Collaboration",
    vidiq: "Multi-channel workspaces, exports for content calendars.",
    tubebuddy: "Individual seats, preset checklists and templates.",
    pictory: "Team brand kits, shared templates, and review flows.",
  },
  {
    label: "Ideal buyer",
    vidiq: "Creators and agencies needing research and insights.",
    tubebuddy: "Channel operators managing frequent uploads.",
    pictory: "Marketing teams producing explainer and social clips.",
  },
];

const scoreboard = [
  { label: "Keyword intelligence", scores: { vidiq: 9.2, tubebuddy: 8.1, pictory: 6.5 } },
  { label: "Publishing automation", scores: { vidiq: 7.8, tubebuddy: 9.3, pictory: 7.0 } },
  { label: "AI content creation", scores: { vidiq: 8.4, tubebuddy: 6.8, pictory: 9.1 } },
  { label: "Team workflow", scores: { vidiq: 8.5, tubebuddy: 7.2, pictory: 8.2 } },
  { label: "Value for money", scores: { vidiq: 8.6, tubebuddy: 9.0, pictory: 8.0 } },
];

const avg = (key) =>
  (scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0) / scoreboard.length).toFixed(
    1
  );

const averages = {
  vidiq: avg("vidiq"),
  tubebuddy: avg("tubebuddy"),
  pictory: avg("pictory"),
};

const overallWinnerKey = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const winnerLabelMap = {
  vidiq: "VidIQ",
  tubebuddy: "TubeBuddy",
  pictory: "Pictory",
};

const overallWinnerLabel = winnerLabelMap[overallWinnerKey] || overallWinnerKey;

const pricingTable = [
  {
    plan: "VidIQ Boost",
    monthly: "$49",
    annual: "$39/mo annual",
    notes: "Multi-channel keyword research, trend alerts, and advanced analytics.",
  },
  {
    plan: "TubeBuddy Legend",
    monthly: "$23.99",
    annual: "$19.20/mo annual",
    notes: "Bulk updates, A/B testing, retention insights, and advanced tools.",
  },
  {
    plan: "Pictory Pro",
    monthly: "$39",
    annual: "$29/mo annual",
    notes: "Text-to-video, brand kits, long-form uploads, and more exports.",
  },
];

const faqs = [
  {
    q: `Which tool wins overall in ${YEAR}?`,
    a: `VidIQ edges out because of its data accuracy and AI ideation, but TubeBuddy is better if you manage metadata at scale. Pictory is the choice for script-to-video creation and repurposing.`,
  },
  {
    q: "Can I use VidIQ and TubeBuddy together?",
    a: "Yes. Many teams run both: VidIQ for keyword research and content ideas, TubeBuddy for upload optimization, bulk changes, and A/B tests.",
  },
  {
    q: "Do any of these edit video?",
    a: "Only Pictory provides editing and generation via AI storyboards. VidIQ and TubeBuddy stay focused on research, metadata, and publishing workflows.",
  },
  {
    q: "Which is best for agencies?",
    a: "Agencies often bundle VidIQ for insights plus TubeBuddy for bulk channel maintenance. Pictory is added when clients expect ongoing video deliverables and repurposed content.",
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

const featureBullets = {
  strategy: [
    "VidIQ: Built for YouTube strategy—keyword scores, trend alerts, and competitor benchmarking.",
    "TubeBuddy: Enforces best practices at upload time with checklists, templates, and bulk settings.",
    "Pictory: Focuses on transforming scripts and existing content into watchable videos.",
  ],
  automation: [
    "VidIQ: Alerts for new keyword opportunities and performance changes across your channel.",
    "TubeBuddy: Strongest automation for repetitive tasks—bulk cards, end screens, and metadata edits.",
    "Pictory: Speeds editing by auto-generating scenes, subtitles, and basic B-roll suggestions.",
  ],
  creation: [
    "VidIQ: Does not edit video; pairs with NLEs or AI editors like Pictory.",
    "TubeBuddy: Works around YouTube Studio and external editors; no in-app editing.",
    "Pictory: Browser-based editor to go from text or long-form recordings to finished videos.",
  ],
};

const prosCons = {
  vidiq: {
    pros: [
      "Accurate keyword and topic data tailored for YouTube search and suggested videos",
      "AI ideas, titles, and descriptions to speed up planning",
      "Channel and competitor insights that scale with growth",
    ],
    cons: [
      "YouTube-first focus; not a full multi-platform social tool",
      "Higher tiers needed for multiple channels and deeper history",
      "No built-in video editing—requires a separate editor",
    ],
  },
  tubebuddy: {
    pros: [
      "Powerful bulk editing for descriptions, tags, cards, and end screens",
      "A/B testing for thumbnails and titles to improve CTR",
      "Affordable tiers for channels with regular upload cadence",
    ],
    cons: [
      "Interface can feel dated and scattered across menus",
      "Less depth in keyword intelligence than VidIQ",
      "Relies on you already having a clear content strategy",
    ],
  },
  pictory: {
    pros: [
      "AI text-to-video and repurposing from blogs, scripts, and webinars",
      "Automatic subtitles, basic voiceovers, and scene generation",
      "Brand kits and templates suitable for marketing teams",
    ],
    cons: [
      "Limited insight into YouTube metadata or keyword performance",
      "Rendering and exports can be slower on heavier projects",
      "Advanced editors may find the timeline less flexible than pro NLEs",
    ],
  },
};

const LogoBadge = ({ name }) => {
  const lowered = name.toLowerCase();
  const key = lowered.includes("vid")
    ? "vidiq"
    : lowered.includes("tube")
    ? "tubebuddy"
    : lowered.includes("pictory")
    ? "pictory"
    : lowered;

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

export default function VidiqVsTubebuddyVsPictoryPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`VidIQ vs TubeBuddy vs Pictory – Creator Stack Comparison (${YEAR})`}
        description="See how VidIQ, TubeBuddy, and Pictory compare across keyword research, publishing automation, AI video creation, pricing, and best-fit use cases."
        canonical={canonical}
        keywords={`${primaryKeyword}, youtube seo comparison, youtube tools, ai video tools`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          YouTube growth stack
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          VidIQ vs TubeBuddy vs Pictory ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Research, optimize, or create? This breakdown shows exactly where each platform wins so you
          can build the right workflow for your channel or brand.
        </p>

        {/* Quick verdict row */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="space-y-3 rounded-3xl bg-sky-50/80 p-6 ring-1 ring-sky-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-sky-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Use <strong>VidIQ</strong> for deep keyword intelligence and AI prompts,{" "}
              <strong>TubeBuddy</strong> for bulk publishing and A/B testing, and{" "}
              <strong>Pictory</strong> when you want AI to{" "}
              <strong>generate and repurpose the actual video assets</strong> from text or long-form
              content.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-sky-800">
              <Crown className="h-4 w-4" /> Overall scoreboard winner: {overallWinnerLabel}{" "}
              <span className="text-xs font-medium text-sky-700">
                (avg: {averages[overallWinnerKey]}/10)
              </span>
            </div>
          </div>
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Video className="h-5 w-5 text-sky-700" /> Best free option
            </div>
            <p className="text-sm text-slate-700">
              VidIQ and TubeBuddy both offer capable browser extensions for free—ideal for early-stage
              creators validating their workflow before upgrading. Pictory’s trials are best for
              testing AI video generation.
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
              className={`relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br ${
                brandMeta[card.key]?.gradient || "from-slate-500 to-slate-700"
              } p-5 shadow-md`}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white" />
                <div className="pointer-events-none absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-white" />
              </div>
              <div className="relative flex items-start justify-between">
                <LogoBadge name={card.name} />
                <Sparkles className="h-5 w-5 text-white/80" />
              </div>
              <p className="relative mt-3 text-sm font-medium text-white/90">
                {card.blurb}
              </p>
            </a>
          ))}
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-sky-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">VidIQ</th>
                  <th className="px-4 py-3">TubeBuddy</th>
                  <th className="px-4 py-3">Pictory</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.vidiq}</td>
                    <td className="px-4 py-3 text-slate-700">{row.tubebuddy}</td>
                    <td className="px-4 py-3 text-slate-700">{row.pictory}</td>
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
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">VidIQ</th>
                  <th className="px-4 py-3">TubeBuddy</th>
                  <th className="px-4 py-3">Pictory</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const { vidiq, tubebuddy, pictory } = row.scores;
                  const winnerValue = Math.max(vidiq, tubebuddy, pictory);
                  const winner =
                    winnerValue === vidiq
                      ? "VidIQ"
                      : winnerValue === tubebuddy
                      ? "TubeBuddy"
                      : "Pictory";
                  return (
                    <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winner === "VidIQ" ? "font-semibold text-sky-800" : "text-slate-700"
                        }`}
                      >
                        {vidiq}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "TubeBuddy"
                            ? "font-semibold text-rose-700"
                            : "text-slate-700"
                        }`}
                      >
                        {tubebuddy}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Pictory"
                            ? "font-semibold text-amber-800"
                            : "text-slate-700"
                        }`}
                      >
                        {pictory}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">{winner}</td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-sky-50 via-rose-50 to-amber-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-sky-800">{averages.vidiq}</td>
                  <td className="px-4 py-3 font-semibold text-rose-800">{averages.tubebuddy}</td>
                  <td className="px-4 py-3 font-semibold text-amber-800">{averages.pictory}</td>
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
            <Gauge className="h-6 w-6 text-sky-600" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Zap className="h-5 w-5 text-sky-600" /> Strategy & planning
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.strategy.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Sparkles className="h-5 w-5 text-indigo-600" /> Automation & optimization
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.automation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Video className="h-5 w-5 text-amber-600" /> Creation & editing
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.creation.map((item) => (
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
                    <td className="px-4 py-3 text-slate-700">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600">
            Pricing changes frequently and can vary by region, promotion, and channel size. Always
            confirm current plans and limits directly on each vendor’s pricing page before
            committing.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>VidIQ:</strong> Feels like a{" "}
              <strong>YouTube analyst inside your browser</strong>, overlaying search and Studio with
              scores, ideas, and competitive benchmarks.
            </li>
            <li>
              <strong>TubeBuddy:</strong> Feels like a{" "}
              <strong>workflow add-on for uploads</strong>. Once the tools are configured, bulk
              operations can save hours each month on busy channels.
            </li>
            <li>
              <strong>Pictory:</strong> Feels like a{" "}
              <strong>Canva-style AI video editor</strong>, where marketers and non-editors can turn
              scripts and long-form content into finished videos quickly.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use cases & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Solo creators focused on ranking and discoverability:</strong>{" "}
              VidIQ wins with keyword data, ideas, and competitor tracking aligned to YouTube SEO.
            </li>
            <li>
              <strong>Agencies managing many channels and uploads:</strong>{" "}
              TubeBuddy wins with bulk edits, checklists, and A/B testing to standardise publishing.
            </li>
            <li>
              <strong>Marketing teams repurposing webinars, blogs, and scripts:</strong>{" "}
              Pictory wins with text-to-video and repurposing flows that do not need a full-time
              editor.
            </li>
            <li>
              <strong>Serious brands building a full stack:</strong> Combine{" "}
              <strong>VidIQ + TubeBuddy</strong> for research and optimization, plus{" "}
              <strong>Pictory</strong> or a pro NLE for video production, and a scheduler for
              cross-platform distribution.
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
              <h3 className="text-lg font-semibold">VidIQ</h3>
              <p className="text-sm text-slate-700">
                Best when you want <strong>data-driven decisions</strong> about which topics, formats,
                and keywords to prioritise before you ever hit record.
              </p>
              <p className="mt-2 text-sm font-semibold text-sky-700">
                Ideal for: Creators, strategists, and agencies planning YouTube editorial calendars.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">TubeBuddy</h3>
              <p className="text-sm text-slate-700">
                Best when your bottleneck is <strong>upload and optimization work</strong> across many
                videos—metadata, cards, end screens, and tests.
              </p>
              <p className="mt-2 text-sm font-semibold text-rose-700">
                Ideal for: Agencies, multi-channel networks, and high-output channels.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Pictory</h3>
              <p className="text-sm text-slate-700">
                Best when you need <strong>AI-assisted production</strong> to convert blogs, scripts,
                or webinars into ready-to-publish videos and clips.
              </p>
              <p className="mt-2 text-sm font-semibold text-amber-700">
                Ideal for: Marketing teams, founders, and content marketers repurposing assets for
                YouTube and social.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold">FAQ</h2>
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
