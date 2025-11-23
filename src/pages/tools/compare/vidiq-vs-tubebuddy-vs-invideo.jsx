import React from "react";
import { Sparkles, Crown, Layers, BarChart3, ArrowLeft, Gauge, Zap, Video } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "vidiq vs tubebuddy vs invideo";
const canonical = buildCanonical("/tools/compare/vidiq-vs-tubebuddy-vs-invideo");

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
  invideo: {
    gradient: "from-indigo-500 via-violet-500 to-fuchsia-500",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/invideo.io",
  },
};

const contenders = [
  {
    key: "vidiq",
    name: "VidIQ",
    blurb: "Keyword intelligence, AI topic ideation, and competitor insights for YouTube.",
    url: "https://vidiq.com",
    slug: "vidiq",
  },
  {
    key: "tubebuddy",
    name: "TubeBuddy",
    blurb: "Upload workflows, bulk metadata tools, and A/B testing for thumbnails and titles.",
    url: "https://www.tubebuddy.com",
    slug: "tubebuddy",
  },
  {
    key: "invideo",
    name: "InVideo",
    blurb: "Template-driven online video editor with AI scripts, stock, and brand kits.",
    url: "https://invideo.io",
    slug: "invideo",
  },
];

const comparisonRows = [
  {
    label: "Primary role in your stack",
    vidiq: "YouTube research, keyword targeting, and content strategy planning.",
    tubebuddy: "Upload optimization, bulk edits, and metadata experimentation.",
    invideo: "Script-to-video creation, editing, and multi-format publishing.",
  },
  {
    label: "Keyword & topic research",
    vidiq: "Deep keyword scores, search volume, competition, and trend alerts.",
    tubebuddy: "Solid keyword explorer with good basic SEO guidance.",
    invideo: "Light keyword help; mostly focused on content creation, not deep SEO.",
  },
  {
    label: "AI capabilities",
    vidiq: "AI ideas, titles, descriptions, and competitor breakdowns.",
    tubebuddy: "AI-augmented tag suggestions and limited copy assistance.",
    invideo: "AI script writer, auto highlights, and AI voiceover support.",
  },
  {
    label: "Upload & workflow automation",
    vidiq: "Checklists and suggestions at upload, but less bulk automation.",
    tubebuddy: "Strong bulk tools for cards, end screens, and metadata templates.",
    invideo: "Export presets for channels and formats; no YouTube backend automation.",
  },
  {
    label: "Content creation",
    vidiq: "No editor—focuses on ideas and optimization around your existing content.",
    tubebuddy: "No editor—relies on YouTube Studio and external tools.",
    invideo: "Full browser-based editor with templates, stock, and timelines.",
  },
  {
    label: "Collaboration & teams",
    vidiq: "Channel workspaces, permissions, and export to Sheets/Notion for planning.",
    tubebuddy: "Seat-based access; mainly designed around individual creators or small teams.",
    invideo: "Brand kits, shared templates, and comments for team review.",
  },
  {
    label: "Learning curve",
    vidiq: "Low—Chrome/Firefox extension overlays YouTube Studio and analytics.",
    tubebuddy: "Moderate—lives inside YouTube but tools are spread across menus.",
    invideo: "Low—drag-and-drop editor with preset templates and tutorials.",
  },
  {
    label: "Best fit",
    vidiq: "Creators serious about keyword strategy and content planning.",
    tubebuddy: "Channels with heavy upload volume needing repeatable workflows.",
    invideo: "Teams needing fast, branded videos for YouTube, Shorts, and social.",
  },
];

const scoreboard = [
  { label: "Research accuracy & depth", vidiq: 9.3, tubebuddy: 8.2, invideo: 6.5 },
  { label: "Upload workflow automation", vidiq: 8.0, tubebuddy: 9.1, invideo: 7.6 },
  { label: "Creative output quality", vidiq: 6.8, tubebuddy: 6.4, invideo: 9.2 },
  { label: "Team collaboration", vidiq: 8.4, tubebuddy: 7.0, invideo: 8.7 },
  { label: "Value for money", vidiq: 8.6, tubebuddy: 9.0, invideo: 8.4 },
];

const avg = (tool) =>
  (scoreboard.reduce((sum, row) => sum + (row[tool] || 0), 0) / scoreboard.length).toFixed(1);

const averages = {
  vidiq: avg("vidiq"),
  tubebuddy: avg("tubebuddy"),
  invideo: avg("invideo"),
};

const overallWinner =
  Math.max(averages.vidiq, averages.tubebuddy, averages.invideo) === parseFloat(averages.vidiq)
    ? "VidIQ"
    : Math.max(averages.tubebuddy, averages.invideo) === parseFloat(averages.tubebuddy)
    ? "TubeBuddy"
    : "InVideo";

const pricingTable = [
  {
    plan: "VidIQ Pro / Boost",
    monthly: "Roughly ~$10–$49/mo",
    annual: "Discounted to around ~$8–$39/mo",
    limits: "Keyword credits, AI ideas, channel count, and historical data depth.",
    notes: "Great if you want serious YouTube keyword research at solo or small-team scale.",
  },
  {
    plan: "TubeBuddy Star / Legend",
    monthly: "From around ~$9–$23.99/mo (Legend higher)",
    annual: "Lower equivalent monthly rate when billed annually",
    limits: "Bulk tools, A/B testing, and upload automation scale with tier.",
    notes: "Strong value if you manage many uploads and thumbnails across one or more channels.",
  },
  {
    plan: "InVideo Business / Unlimited",
    monthly: "From around ~$30/mo",
    annual: "Approx. ~$20/mo equivalent on annual",
    limits: "Export limits, stock usage, and team seats differ per tier.",
    notes: "Priced like a full editor plus stock library—replaces separate video tools.",
  },
];

const featureBullets = {
  strategy: [
    "VidIQ: Designed as a YouTube strategy co-pilot—topic discovery, keyword research, and competitor tracking.",
    "TubeBuddy: Helps enforce best practices at upload time with checklists, templates, and A/B tests.",
    "InVideo: Focuses on turning scripts and ideas into finished videos across YouTube, Reels, and Shorts.",
  ],
  automation: [
    "VidIQ: Alert-based automation—trend alerts, keyword watchlists, and performance monitoring.",
    "TubeBuddy: Strongest in repetitive upload tasks—bulk cards, end screens, find/replace in descriptions.",
    "InVideo: Speeds production with templates, auto-captioning, and multi-size exports.",
  ],
  creation: [
    "VidIQ: Does not touch the edit; pairs well with editors like Premiere, Final Cut, CapCut, or InVideo.",
    "TubeBuddy: Works alongside YouTube Studio and external editors; focuses on post-production optimization.",
    "InVideo: All-in-one browser editor with stock, transitions, and brand kits for non-technical teams.",
  ],
};

const prosCons = {
  vidiq: {
    pros: [
      "Excellent keyword and topic research tailored to YouTube search and suggested videos.",
      "AI-powered ideas, titles, and descriptions to speed up planning.",
      "Channel-wide and competitor analytics that scale as you grow.",
    ],
    cons: [
      "No built-in editing or publishing—requires a separate editor.",
      "Best features (more channels, historical data) sit on higher tiers.",
      "Focused on YouTube; not a full multi-channel social scheduler.",
    ],
  },
  tubebuddy: {
    pros: [
      "Powerful bulk editing tools for cards, end screens, and metadata.",
      "Thumbnail/title A/B testing to improve CTR over time.",
      "Affordable for creators with a consistent upload schedule.",
    ],
    cons: [
      "Interface can feel dated and spread across different menus.",
      "Less depth than VidIQ on keyword and competitor research.",
      "Still requires you to already know your content strategy.",
    ],
  },
  invideo: {
    pros: [
      "Template-rich editor for YouTube videos, intros, ads, and Shorts.",
      "AI script and voice features speed up production for non-editors.",
      "Brand kits and shared templates make it team-friendly.",
    ],
    cons: [
      "Browser-based editor can feel limiting for advanced editors.",
      "Collaborators often count as seats, increasing cost for larger teams.",
      "SEO and keyword features are light compared with VidIQ or TubeBuddy.",
    ],
  },
};

const faqs = [
  {
    q: `Who wins overall in ${YEAR}?`,
    a: "VidIQ wins on research depth and strategy. TubeBuddy wins on upload workflow efficiency and A/B testing. InVideo wins on actual video creation speed and production quality for non-editors.",
  },
  {
    q: "Can InVideo replace VidIQ or TubeBuddy?",
    a: "Not really. InVideo handles scripting, editing, and exports. VidIQ and TubeBuddy live around YouTube search, metadata, and performance. Most serious channels pair a research tool (VidIQ or TubeBuddy) with a separate editor like InVideo.",
  },
  {
    q: "Do I need both VidIQ and TubeBuddy?",
    a: "Many channels start with one. Power users sometimes use both—VidIQ for research depth and TubeBuddy for upload workflows and tests. For most teams, choosing one based on your main bottleneck is enough.",
  },
  {
    q: "Which is best for YouTube Shorts and TikTok-style vertical content?",
    a: "VidIQ and TubeBuddy help you decide topics, titles, and keywords. InVideo then makes it easy to cut vertical versions, add captions, and repurpose into Shorts, Reels, and TikTok.",
  },
  {
    q: "How do the free plans compare?",
    a: "VidIQ and TubeBuddy both have free extensions with limited keyword and optimization features. InVideo’s free tier allows editing and exporting with watermarks—good for testing before upgrading.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const LogoBadge = ({ name }) => {
  const lowered = name.toLowerCase();
  const key = lowered.includes("vid")
    ? "vidiq"
    : lowered.includes("tube")
    ? "tubebuddy"
    : lowered.includes("invideo")
    ? "invideo"
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

export default function VidiqVsTubebuddyVsInvideoPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`VidIQ vs TubeBuddy vs InVideo (${YEAR}) – YouTube workflow comparison`}
        description="Compare VidIQ, TubeBuddy, and InVideo for YouTube research, upload automation, editing, pricing, and the right video workflow stack."
        canonical={canonical}
        keywords={`${primaryKeyword}, youtube tool comparison, youtube seo tools, video editor`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
          YouTube workflow
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          VidIQ vs TubeBuddy vs InVideo ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          VidIQ and TubeBuddy help you{" "}
          <strong>research, optimize, and test</strong> your YouTube uploads. InVideo helps you{" "}
          <strong>actually produce</strong> those videos at scale. Here is how they fit together in
          a modern creator or brand workflow.
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
                <Sparkles className="h-5 w-5 text-white/80" />
              </div>
              <p className="relative mt-3 text-sm font-medium text-white/90">
                {item.blurb}
              </p>
            </a>
          ))}
        </div>

        {/* Quick verdict + overall winner */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-sky-100 bg-sky-50 px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sky-900">
              <Sparkles className="h-5 w-5" />
              <p className="text-lg font-semibold">Quick verdict</p>
            </div>
            <p className="mt-2 text-slate-800">
              Use <strong>VidIQ</strong> if you need{" "}
              <strong>deep keyword and content strategy</strong>. Pick{" "}
              <strong>TubeBuddy</strong> if your bottleneck is{" "}
              <strong>upload workflows, bulk edits, and testing thumbnails/titles</strong>. Add{" "}
              <strong>InVideo</strong> when you want a fast, template-led{" "}
              <strong>editor for YouTube videos, ads, and Shorts</strong>.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Crown className="h-4 w-4 text-sky-600" /> Overall scoreboard winner: {overallWinner}{" "}
              <span className="text-xs text-slate-600">
                (avg:{" "}
                {overallWinner === "VidIQ"
                  ? averages.vidiq
                  : overallWinner === "TubeBuddy"
                  ? averages.tubebuddy
                  : averages.invideo}
                /10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              The real win is stacking them correctly: a research tool (VidIQ or TubeBuddy) +
              a capable editor (InVideo or your NLE). Choose based on whether your main constraint is{" "}
              <strong>strategy, upload time, or video production.</strong>
            </p>
          </div>
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
                  <th className="px-4 py-3">InVideo</th>
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
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">VidIQ</th>
                  <th className="px-4 py-3">TubeBuddy</th>
                  <th className="px-4 py-3">InVideo</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const winnerValue = Math.max(row.vidiq, row.tubebuddy, row.invideo);
                  const winner =
                    winnerValue === row.vidiq
                      ? "VidIQ"
                      : winnerValue === row.tubebuddy
                      ? "TubeBuddy"
                      : "InVideo";
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
                        {row.vidiq}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "TubeBuddy"
                            ? "font-semibold text-rose-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.tubebuddy}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "InVideo"
                            ? "font-semibold text-indigo-800"
                            : "text-slate-700"
                        }`}
                      >
                        {row.invideo}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">{winner}</td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-sky-50 via-rose-50 to-indigo-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-sky-800">{averages.vidiq}</td>
                  <td className="px-4 py-3 font-semibold text-rose-800">{averages.tubebuddy}</td>
                  <td className="px-4 py-3 font-semibold text-indigo-800">{averages.invideo}</td>
                  <td className="px-4 py-3 font-bold text-slate-900">{overallWinner}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Feature comparison */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-sky-600" /> Feature Comparison
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
              <Video className="h-5 w-5 text-rose-600" /> Content creation & editing
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
          <h2 className="text-2xl font-bold">Pricing Snapshots</h2>
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
            Pricing changes frequently and depends on channel size, export limits, and promos. Always
            confirm current offers on each vendor’s pricing page before committing.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User Experience & Learning Curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>VidIQ:</strong> Feels like a{" "}
              <strong> YouTube analyst inside your browser</strong>. Overlays analytics, suggestions,
              and keyword data directly in YouTube Studio and search results.
            </li>
            <li>
              <strong>TubeBuddy:</strong> Feels like a{" "}
              <strong>power-up pack for uploads</strong>. Once you know where everything lives, bulk
              tools save hours for channels that publish frequently.
            </li>
            <li>
              <strong>InVideo:</strong> Feels like a{" "}
              <strong>Canva-style video editor</strong>. Templates, drag-and-drop timelines, and
              built-in stock make it friendly for marketing teams and non-editors.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-World Use-Cases & Winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Solo creators focused on discoverability:</strong> VidIQ wins with deeper
              keyword and competitor data that keeps you on trends and search opportunities.
            </li>
            <li>
              <strong>Agencies or channels managing many uploads:</strong> TubeBuddy wins with bulk
              editing, templates, and A/B testing to keep operations efficient.
            </li>
            <li>
              <strong>Brands producing lots of social and YouTube content:</strong> InVideo wins as a
              fast, brandable editor that non-video teams can actually use.
            </li>
            <li>
              <strong>Serious teams building a full stack:</strong> Pair{" "}
              <strong>VidIQ or TubeBuddy</strong> for research and optimization with{" "}
              <strong>InVideo</strong> or a pro NLE for editing, plus a scheduler for cross-platform
              distribution.
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
                Best when you want to make{" "}
                <strong>data-driven content decisions</strong>—which topics to cover, which keywords
                to rank for, and how competitors perform.
              </p>
              <p className="mt-2 text-sm font-semibold text-sky-700">
                Ideal for: Creators, YouTube-first brands, and strategists planning editorial
                calendars.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">TubeBuddy</h3>
              <p className="text-sm text-slate-700">
                Best when your main pain is{" "}
                <strong>repetitive upload work and testing thumbnails/titles</strong> across many
                videos.
              </p>
              <p className="mt-2 text-sm font-semibold text-rose-700">
                Ideal for: High-output channels, media teams, and agencies managing many uploads.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">InVideo</h3>
              <p className="text-sm text-slate-700">
                Best for <strong>speedy video production</strong>—especially when non-editors need to
                create on-brand content for YouTube, Shorts, and social.
              </p>
              <p className="mt-2 text-sm font-semibold text-indigo-700">
                Ideal for: Marketing teams, startups, and creators repurposing content for multiple
                platforms.
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

        {/* Back link */}
        <div className="mt-10 flex items-center gap-2 text-sm text-slate-600">
          <Link
            to="/tools"
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-sky-700 ring-1 ring-sky-100 hover:bg-sky-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
