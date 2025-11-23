import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  Mic,
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
const primaryKeyword = "riverside vs zoom vs whereby";
const canonical = buildCanonical("/tools/compare/riverside-vs-zoom-vs-whereby");

const brandMeta = {
  riverside: {
    gradient: "from-sky-500 via-indigo-500 to-purple-600",
    badge: "bg-sky-100 text-sky-900",
    logo: "https://logo.clearbit.com/riverside.fm",
  },
  zoom: {
    gradient: "from-blue-500 via-sky-500 to-indigo-600",
    badge: "bg-blue-100 text-blue-900",
    logo: "https://logo.clearbit.com/zoom.us",
  },
  whereby: {
    gradient: "from-amber-400 via-orange-500 to-rose-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/whereby.com",
  },
};

const contenders = [
  {
    key: "riverside",
    name: "Riverside",
    blurb:
      "Local multi-track recording for studio-quality podcasts, interviews, and shows.",
    url: "https://riverside.fm",
  },
  {
    key: "zoom",
    name: "Zoom",
    blurb:
      "Video conferencing, webinars, and collaboration for internal and external meetings.",
    url: "https://zoom.us",
  },
  {
    key: "whereby",
    name: "Whereby",
    blurb:
      "Lightweight, browser-based meetings with simple links and no downloads.",
    url: "https://whereby.com",
  },
];

const comparisonRows = [
  {
    label: "Recording quality",
    riverside: "Local multi-track, up to 4K video and separate audio tracks.",
    zoom: "Cloud/local recording; quality varies with guest bandwidth.",
    whereby: "Browser-based recording; fine for meetings, not studio grade.",
  },
  {
    label: "Best use case",
    riverside: "Podcasts, interviews, content where quality is a brand asset.",
    zoom: "Meetings, webinars, and recurring collaboration with many attendees.",
    whereby: "Simple client calls, quick collaboration, and frictionless joining.",
  },
  {
    label: "Streaming",
    riverside: "Stream to social and record locally at the same time.",
    zoom: "Strong webinar/event features with cloud recording and streaming.",
    whereby: "Optimised for meetings; limited streaming/event tooling.",
  },
  {
    label: "Ease for guests",
    riverside: "Works in-browser; best quality with a basic guest setup guide.",
    zoom: "Apps and browser join; extremely familiar to most users.",
    whereby: "No downloads; join in-browser with one link, ideal for non-technical guests.",
  },
  {
    label: "Pricing",
    riverside: "Free and paid tiers based on recording hours and features.",
    zoom: "Free tier plus paid per host; add-ons for webinars and events.",
    whereby: "Free tier plus simple paid plans; cost-effective for light use.",
  },
];

const scoreboard = [
  { label: "Quality for production", scores: { riverside: 9.5, zoom: 8.0, whereby: 7.5 } },
  { label: "Ease for guests", scores: { riverside: 8.3, zoom: 9.0, whereby: 9.4 } },
  { label: "Streaming/webinars", scores: { riverside: 8.8, zoom: 9.2, whereby: 7.2 } },
  { label: "Value for casual calls", scores: { riverside: 7.8, zoom: 8.5, whereby: 9.0 } },
  { label: "Local recording", scores: { riverside: 9.6, zoom: 7.5, whereby: 6.8 } },
];

const avg = (key) =>
  (
    scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  riverside: avg("riverside"),
  zoom: avg("zoom"),
  whereby: avg("whereby"),
};

const overallWinnerKey = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const labelMap = {
  riverside: "Riverside",
  zoom: "Zoom",
  whereby: "Whereby",
};

const overallWinner = labelMap[overallWinnerKey];

const featureBullets = {
  workflows: [
    "Riverside: Capture high-quality episodes and interviews, then export isolated tracks for editing in tools like Descript or Premiere.",
    "Zoom: Use for recurring team meetings, webinars, workshops, and external calls where familiarity and integrations matter most.",
    "Whereby: Spin up quick client calls or low-friction discovery sessions without asking guests to install anything.",
  ],
  recording: [
    "Riverside records each participant locally and uploads in the background, so temporary Wi-Fi glitches are less visible in the final files.",
    "Zoom and Whereby mainly record what is seen on the call, so recording quality depends heavily on each participant’s connection.",
    "If you publish on major platforms (YouTube, Spotify, Apple Podcasts), Riverside’s local capture usually produces the most professional output.",
  ],
  guestExperience: [
    "For podcasts and content, plan a short guest checklist for Riverside (mic, headphones, quiet room) to unlock its full quality.",
    "For internal collaboration, Zoom remains the default because everyone already knows it and it integrates with calendars and SSO.",
    "For clients who resist new tools, Whereby’s ‘open link, you’re in’ experience is among the least intimidating.",
  ],
};

const pricingTable = [
  {
    plan: "Riverside (Standard/Pro)",
    approx: "≈$15–$29/month (often billed annually)",
    focus: "Recording hours, resolution (HD/4K), and separate tracks",
    bestFor: "Creators and brands publishing podcasts, interviews, and recurring shows.",
  },
  {
    plan: "Zoom (Pro + Webinar add-ons)",
    approx: "≈$15–$50+/month per host depending on add-ons",
    focus: "Meeting duration, host count, webinar/event capacity",
    bestFor: "Teams that rely heavily on video meetings and scheduled live events.",
  },
  {
    plan: "Whereby (Meet/Business)",
    approx: "≈$9–$20/month per user",
    focus: "Room count, branding, and collaboration features",
    bestFor: "Freelancers, agencies, and teams that want very low-friction calls.",
  },
];

const prosCons = {
  riverside: {
    pros: [
      "Studio-quality local multi-track audio and up to 4K video.",
      "Designed for creators who repurpose content across channels.",
      "Built-in tools for clips and social media snippets.",
    ],
    cons: [
      "Overkill for simple day-to-day meetings.",
      "Guests need a basic setup guide for the best results.",
      "You may still want a separate editor for complex post-production.",
    ],
  },
  zoom: {
    pros: [
      "Extremely familiar to most guests and teams.",
      "Strong webinar and event features with screen share and breakout rooms.",
      "Deep integrations with calendars, chat tools, and workplace suites.",
    ],
    cons: [
      "Recording quality is bandwidth-dependent and not local multi-track.",
      "Audio and video are optimised for real-time communication, not studio.",
      "Interface and feature set can feel heavy for simple client calls.",
    ],
  },
  whereby: {
    pros: [
      "No downloads; meetings run entirely in the browser.",
      "Very simple, branded rooms that are easy to reuse.",
      "Great for client calls where you want low friction and a clean experience.",
    ],
    cons: [
      "Not designed for high-end production or multi-track recording.",
      "Fewer enterprise-grade webinar and event features than Zoom.",
      "Less suited to podcast-style content where quality is critical.",
    ],
  },
};

const faqs = [
  {
    q: `Which should I pick in ${YEAR}?`,
    a: "Pick Riverside if you are recording podcasts, interviews, or recurring shows where audio/video quality is part of your brand. Pick Zoom for general meetings, webinars, and collaboration at scale. Pick Whereby when you care most about the simplest possible guest experience and your quality needs are similar to a standard video call.",
  },
  {
    q: "Can I stream and record?",
    a: "Yes. Riverside can stream to destinations (like YouTube or LinkedIn) while recording locally in higher quality. Zoom can stream webinars and meetings while recording to the cloud or locally. Whereby is lighter and is best treated as an easy meeting room rather than a streaming studio.",
  },
  {
    q: "Which is easiest for guests?",
    a: "Whereby is typically the easiest because it runs fully in the browser and feels like joining a simple web page. Zoom is very familiar, though it may require app installs or permissions in some environments. Riverside also works in-browser but benefits from a short tech check and microphone/headphone setup for the best quality.",
  },
  {
    q: "Do I still need editing tools with Riverside?",
    a: "For simple episodes, Riverside’s exports may be enough. However, if you want to remove filler words, tighten pacing, or build mixed-media content (B-roll, overlays), you will likely pair Riverside with a dedicated editor such as Descript, Premiere Pro, or Final Cut.",
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

const LogoBadge = ({ name }) => {
  const meta =
    brandMeta[name.toLowerCase()] || {
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

const Score = ({ label, value }) => (
  <div className="flex items-center justify-between">
    <span>{label}</span>
    <span className="font-semibold text-slate-900">{value}/10</span>
  </div>
);

export default function RiversideVsZoomVsWherebyPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Riverside vs Zoom vs Whereby – Best for remote recording or meetings? (${YEAR})`}
        description="Compare Riverside, Zoom, and Whereby on recording quality, streaming, guest experience, and pricing so you can pick the right stack for podcasts, meetings, and client calls."
        canonical={canonical}
        keywords={`${primaryKeyword}, remote recording comparison, zoom alternative, whereby vs zoom`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Category & H1 */}
        <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
          Remote recording & video calls
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Riverside vs Zoom vs Whereby ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Riverside focuses on studio-quality local recording, Zoom is the
          default choice for meetings and webinars, and Whereby offers the
          simplest in-browser join flow. Your choice depends on whether you care
          most about{" "}
          <strong>production quality, collaboration scale, or guest ease</strong>.
        </p>

        {/* Hero cards */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {contenders.map((tool) => (
            <a
              key={tool.key}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative block overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br ${
                brandMeta[tool.key]?.gradient || "from-slate-500 to-slate-700"
              } p-5 shadow-md`}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-white" />
                <div className="pointer-events-none absolute -left-10 bottom-0 h-24 w-24 rounded-full bg-white" />
              </div>
              <div className="relative flex items-start justify-between">
                <LogoBadge name={tool.name} />
                <Sparkles className="h-5 w-5 text-white/80" />
              </div>
              <p className="relative mt-3 text-sm font-medium text-white/90">
                {tool.blurb}
              </p>
            </a>
          ))}
        </div>

        {/* Quick verdict & winner */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-sky-100 bg-sky-50 px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sky-900">
              <Sparkles className="h-5 w-5" />
              <p className="text-lg font-semibold">Quick verdict</p>
            </div>
            <p className="mt-2 text-sm text-slate-800">
              Choose <strong>Riverside</strong> when you are publishing
              content—podcasts, interviews, or thought-leadership videos—and
              need local multi-track quality. Choose <strong>Zoom</strong> if
              your main need is predictable meetings and webinars with lots of
              participants. Choose <strong>Whereby</strong> when your priority
              is making it completely painless for guests to join your calls.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-sky-900">
              <Crown className="h-4 w-4" /> Overall scoreboard winner:{" "}
              {overallWinner}{" "}
              <span className="text-xs font-medium text-sky-700">
                (avg: {averages[overallWinnerKey]}/10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              There is no universal winner. A common stack is:
              <strong> Zoom</strong> for internal and client meetings,{" "}
              <strong>Riverside</strong> for content capture, and{" "}
              <strong>Whereby</strong> as a low-friction option for specific
              clients or projects.
            </p>
          </div>
        </div>

        {/* Comparison table */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-emerald-600" />
            Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Riverside</th>
                  <th className="px-4 py-3">Zoom</th>
                  <th className="px-4 py-3">Whereby</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr
                    key={row.label}
                    className="odd:bg-white even:bg-slate-50/60 align-top"
                  >
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-900">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">
                      {row.riverside}
                    </td>
                    <td className="px-4 py-3 text-slate-700">{row.zoom}</td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.whereby}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Scoreboard table */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-indigo-600" />
            Scoreboard (1–10)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Riverside</th>
                  <th className="px-4 py-3">Zoom</th>
                  <th className="px-4 py-3">Whereby</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const { riverside, zoom, whereby } = row.scores;
                  const maxVal = Math.max(riverside, zoom, whereby);
                  const winner =
                    maxVal === riverside
                      ? "Riverside"
                      : maxVal === zoom
                      ? "Zoom"
                      : "Whereby";
                  return (
                    <tr
                      key={row.label}
                      className="odd:bg-white even:bg-slate-50/60"
                    >
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-900">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Riverside"
                            ? "font-semibold text-sky-800"
                            : "text-slate-700"
                        }`}
                      >
                        {riverside}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Zoom"
                            ? "font-semibold text-indigo-800"
                            : "text-slate-700"
                        }`}
                      >
                        {zoom}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Whereby"
                            ? "font-semibold text-amber-800"
                            : "text-slate-700"
                        }`}
                      >
                        {whereby}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {winner}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-sky-50 via-indigo-50 to-amber-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-sky-800">
                    {averages.riverside}
                  </td>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages.zoom}
                  </td>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages.whereby}
                  </td>
                  <td className="px-4 py-3 font-bold text-slate-900">
                    {overallWinner}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Score cards (mobile-friendly summary) */}
        <section className="mt-10 grid gap-4 md:grid-cols-3">
          {scoreboard.map((row) => (
            <div
              key={row.label}
              className="rounded-2xl bg-slate-50 p-4 shadow-sm ring-1 ring-slate-200"
            >
              <p className="text-sm font-semibold text-slate-900">
                {row.label}
              </p>
              <div className="mt-2 space-y-1 text-sm text-slate-700">
                <Score label="Riverside" value={row.scores.riverside} />
                <Score label="Zoom" value={row.scores.zoom} />
                <Score label="Whereby" value={row.scores.whereby} />
              </div>
            </div>
          ))}
        </section>

        {/* Workflows & use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Mic className="h-6 w-6 text-sky-600" />
            Capture, meetings, and guest experience
          </h2>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-slate-900">
              Where each tool fits in your workflow
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {featureBullets.workflows.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-slate-900">
              Recording quality and reliability
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {featureBullets.recording.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-slate-900">
              Guest onboarding experience
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {featureBullets.guestExperience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <BarChart3 className="h-6 w-6 text-emerald-600" />
            Pricing snapshots (directional)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Approx. monthly</th>
                  <th className="px-4 py-3">What scales</th>
                  <th className="px-4 py-3">Best for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {pricingTable.map((row) => (
                  <tr key={row.plan}>
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-900">
                      {row.plan}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.approx}</td>
                    <td className="px-4 py-3 text-slate-700">{row.focus}</td>
                    <td className="px-4 py-3 text-slate-700">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-600">
            Pricing changes frequently. Treat these figures as directional and
            confirm live pricing and feature limits on each vendor’s site.
          </p>
        </section>

        {/* Pros & Cons (shared component) */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        {/* FAQs */}
        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">
            FAQ: Riverside vs Zoom vs Whereby
          </h2>
          <div className="space-y-4">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
              >
                <h3 className="text-base font-semibold text-slate-900">
                  {item.q}
                </h3>
                <p className="mt-1 text-sm text-slate-700">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Back link */}
        <div className="mt-10 flex items-center gap-3">
          <Link
            to="/tools"
            className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-sky-700 shadow-sm ring-1 ring-sky-100 hover:bg-sky-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
