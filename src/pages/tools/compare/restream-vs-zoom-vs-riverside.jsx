import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  Cast,
  Crown,
  ArrowLeft,
  Video,
  Mic,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "restream vs zoom vs riverside";
const canonical = buildCanonical("/tools/compare/restream-vs-zoom-vs-riverside");

const brandMeta = {
  restream: {
    gradient: "from-orange-500 via-amber-500 to-rose-500",
    badge: "bg-orange-100 text-orange-900",
    logo: "https://logo.clearbit.com/restream.io",
  },
  zoom: {
    gradient: "from-blue-500 via-sky-500 to-indigo-600",
    badge: "bg-blue-100 text-blue-900",
    logo: "https://logo.clearbit.com/zoom.us",
  },
  riverside: {
    gradient: "from-sky-500 via-indigo-500 to-purple-600",
    badge: "bg-sky-100 text-sky-900",
    logo: "https://logo.clearbit.com/riverside.fm",
  },
};

const contenders = [
  {
    key: "restream",
    name: "Restream",
    blurb:
      "Multistreaming with a browser studio, unified chat, and scheduling to reach multiple platforms at once.",
    url: "https://restream.io",
  },
  {
    key: "zoom",
    name: "Zoom",
    blurb:
      "Meetings and webinars with cloud recording, breakout rooms, and universal familiarity.",
    url: "https://zoom.us",
  },
  {
    key: "riverside",
    name: "Riverside",
    blurb:
      "Local multi-track recording for studio-quality podcasts and video interviews, with live streaming options.",
    url: "https://riverside.fm",
  },
];

const comparisonRows = [
  {
    label: "Primary use",
    restream: "Multistream to many platforms via a simple browser studio.",
    zoom: "Video meetings, webinars, and virtual events.",
    riverside: "High-quality local recording with multi-track capture.",
  },
  {
    label: "Recording quality",
    restream: "Cloud recording; quality tied to stream bitrate and internet.",
    zoom: "Cloud/local recordings; bandwidth-dependent, compressed.",
    riverside: "Local multi-track audio/video with up to 4K quality.",
  },
  {
    label: "Streaming",
    restream: "Stream to several destinations simultaneously (YouTube, LinkedIn, etc.).",
    zoom: "Can stream webinars/meetings to one destination at a time.",
    riverside: "Can stream and record, but multistreaming is more limited.",
  },
  {
    label: "Guest ease",
    restream: "Browser-based joins; simple for most guests.",
    zoom: "Most familiar platform; desktop/mobile apps and browser.",
    riverside:
      "Browser-based, but best results require guidance on mic, camera, and environment.",
  },
  {
    label: "Collaboration",
    restream:
      "Best for hosts and a small guest group; audience interacts via platform chats.",
    zoom: "Large meetings, breakout rooms, chat, reactions, and Q&A.",
    riverside:
      "Focus on host/guest flows; good for small teams and recurring shows.",
  },
  {
    label: "Best for",
    restream: "Max reach across social channels with live shows.",
    zoom: "Internal/external meetings, webinars, and training.",
    riverside: "Podcast/interview capture with studio-level quality.",
  },
];

const scoreboard = [
  { label: "Multistreaming reach", restream: 9.6, zoom: 7.2, riverside: 7.5 },
  { label: "Recording quality", restream: 8.2, zoom: 8.0, riverside: 9.6 },
  { label: "Ease for guests", restream: 9.0, zoom: 9.4, riverside: 8.3 },
  { label: "Webinar/events", restream: 8.4, zoom: 9.2, riverside: 7.8 },
  { label: "Value for marketers", restream: 9.0, zoom: 8.5, riverside: 8.6 },
];

const avg = (tool) =>
  (
    scoreboard.reduce((sum, row) => sum + (row[tool] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  restream: avg("restream"),
  zoom: avg("zoom"),
  riverside: avg("riverside"),
};

const overallWinnerKey = Object.entries(averages).sort(
  (a, b) => parseFloat(b[1]) - parseFloat(a[1])
)[0][0];

const overallWinnerLabels = {
  restream: "Restream",
  zoom: "Zoom",
  riverside: "Riverside",
};

const overallWinner = overallWinnerLabels[overallWinnerKey];

const featureBullets = {
  streaming: [
    "Restream: Purpose-built multistreaming studio for going live across YouTube, LinkedIn, Facebook, Twitch, and more simultaneously.",
    "Zoom: Can push a single webinar or meeting to platforms like YouTube Live, but multistreaming is not its core use case.",
    "Riverside: Supports live streaming but shines more as a recording environment than a multistreaming studio.",
  ],
  recording: [
    "Restream: Cloud recordings of your broadcast; great for repurposing but still tied to streaming quality.",
    "Zoom: Reliable for internal training and webinars, but compression and bandwidth limits can make recordings feel 'meeting-grade'.",
    "Riverside: Local multi-track recording on each participant’s device, then uploads and syncs for studio-quality final files.",
  ],
  guestExperience: [
    "Restream: Guests join via a link in the browser; good for creators and marketers inviting one-off guests.",
    "Zoom: The most familiar experience for most guests; low friction for business audiences.",
    "Riverside: Simple invite links, but you will want to send guests a short checklist to hit its quality potential.",
  ],
};

const pricingTable = [
  {
    plan: "Restream Standard/Professional",
    monthly: "Roughly ~$19–$49/mo depending on features",
    focus: "Multistreaming limits, branding, and destinations",
    notes:
      "Ideal for creators, founders, and brands that want recurring live shows across multiple social channels.",
  },
  {
    plan: "Zoom Pro/Webinar",
    monthly: "From around ~$15–$79/mo (seat + webinar add-ons)",
    focus: "Meeting duration, participant limits, webinars, and cloud storage",
    notes:
      "Best when Zoom is already your team’s default and you run regular webinars or training sessions.",
  },
  {
    plan: "Riverside Standard/Pro",
    monthly: "From roughly ~$19–$29/mo (billed annually in many cases)",
    focus: "Recording hours, video quality, and number of tracks",
    notes:
      "Great value if you consistently produce podcasts, interviews, and content that must sound/look premium.",
  },
];

const prosCons = {
  restream: {
    pros: [
      "Excellent multi-platform reach from a single live broadcast.",
      "Browser-based studio with scenes, overlays, and unified chat.",
      "Great fit for recurring live shows, launches, and AMAs.",
    ],
    cons: [
      "Not a meetings or internal collaboration tool.",
      "Recording quality is limited by streaming bitrate and network.",
      "No built-in meeting-like features such as breakout rooms.",
    ],
  },
  zoom: {
    pros: [
      "Universally familiar for guests and internal teams.",
      "Strong for meetings, webinars, and training events.",
      "Built-in cloud recording and basic streaming options.",
    ],
    cons: [
      "Recording quality is often compressed and feels “meeting-grade.”",
      "Not designed for multistreaming to many social platforms at once.",
      "Branding and overlay options are limited compared with live studios.",
    ],
  },
  riverside: {
    pros: [
      "Studio-quality local multi-track recording for audio and video.",
      "Excellent for podcasts, interviews, and content that will be edited.",
      "Clips and repurposing workflows make content reuse easier.",
    ],
    cons: [
      "Less suited to large meetings or complex webinars.",
      "Requires a bit more guest coaching to hit top quality.",
      "Multistreaming and event tools are not as deep as Restream or Zoom.",
    ],
  },
};

const faqs = [
  {
    q: `Which should I pick in ${YEAR}?`,
    a: "Pick Restream if your top goal is to go live on several social platforms at once. Pick Zoom if you primarily run meetings, webinars, and internal/external training. Pick Riverside if you care most about studio-quality recordings for podcasts, interviews, and content repurposing.",
  },
  {
    q: "Can I combine them?",
    a: "Yes. A common stack is: record primary interviews in Riverside for quality, multistream live events via Restream for reach, and keep Zoom for day-to-day meetings and webinars.",
  },
  {
    q: "Which is easiest for guests?",
    a: "Zoom is the easiest because most guests already know it. Restream is simple in-browser and good for creators inviting guests to shows. Riverside is straightforward too, but you should provide a brief setup guide to ensure great audio and video.",
  },
  {
    q: "What should marketers pick for events?",
    a: "If your events look like webinars or demos, Zoom (with webinar add-ons) is often the most practical. If your strategy is live shows and audience building, Restream wins. If your main asset is the recording itself (podcasts, YouTube episodes), Riverside is the best core tool.",
  },
  {
    q: "Can I record in one tool and stream through another?",
    a: "Yes. Some teams capture high-quality audio/video locally in Riverside while pushing a live feed through Restream or Zoom. It adds complexity, but can give you both reach and quality in one workflow.",
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
  const lowered = name.toLowerCase();
  const meta =
    brandMeta[lowered] || {
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

export default function RestreamVsZoomVsRiversidePage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Restream vs Zoom vs Riverside – live streaming, meetings, and recording compared (${YEAR})`}
        description="Compare Restream, Zoom, and Riverside on multistreaming reach, recording quality, guest experience, and best use cases so you can design the right video stack."
        canonical={canonical}
        keywords={`${primaryKeyword}, live streaming comparison, zoom vs riverside, podcast recording tools`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Category + H1 */}
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-700">
          Live streaming & recording
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Restream vs Zoom vs Riverside ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Restream maximises live reach across platforms, Zoom is the default
          for meetings and webinars, and Riverside delivers studio-quality
          recordings. Your ideal stack depends on whether you care most about
          reach, collaboration, or content quality.
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
                <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-white" />
                <div className="pointer-events-none absolute -left-10 bottom-0 h-24 w-24 rounded-full bg-white" />
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

        {/* Quick verdict + Overall winner */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-orange-100 bg-orange-50 px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-orange-900">
              <Sparkles className="h-5 w-5" />
              <p className="text-lg font-semibold">Quick verdict</p>
            </div>
            <p className="mt-2 text-slate-800">
              Choose <strong>Restream</strong> if live reach across multiple
              platforms is your primary KPI. Choose <strong>Zoom</strong> if
              your day revolves around meetings, webinars, and training.
              Choose <strong>Riverside</strong> if you produce podcasts,
              interviews, or YouTube content where recording quality truly
              matters.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Crown className="h-4 w-4 text-orange-600" /> Overall scoreboard
              winner: {overallWinner}{" "}
              <span className="text-xs text-slate-600">
                (avg: {averages[overallWinnerKey]}/10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              In practice, many teams do not pick just one. A common pattern is
              to use Zoom for internal collaboration, Restream for public live
              shows, and Riverside for premium content recording.
            </p>
          </div>
        </div>

        {/* Core comparison table */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-blue-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Restream</th>
                  <th className="px-4 py-3">Zoom</th>
                  <th className="px-4 py-3">Riverside</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr
                    key={row.label}
                    className="odd:bg-white even:bg-slate-50/50 align-top"
                  >
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">
                      {row.restream}
                    </td>
                    <td className="px-4 py-3 text-slate-700">{row.zoom}</td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.riverside}
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
            <BarChart3 className="h-6 w-6 text-indigo-600" /> Scoreboard (1–10)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Restream</th>
                  <th className="px-4 py-3">Zoom</th>
                  <th className="px-4 py-3">Riverside</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const winnerValue = Math.max(
                    row.restream,
                    row.zoom,
                    row.riverside
                  );
                  const winner =
                    winnerValue === row.restream
                      ? "Restream"
                      : winnerValue === row.zoom
                      ? "Zoom"
                      : "Riverside";
                  return (
                    <tr
                      key={row.label}
                      className="odd:bg-white even:bg-slate-50/50"
                    >
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Restream"
                            ? "font-semibold text-orange-800"
                            : "text-slate-700"
                        }`}
                      >
                        {row.restream}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Zoom"
                            ? "font-semibold text-blue-800"
                            : "text-slate-700"
                        }`}
                      >
                        {row.zoom}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Riverside"
                            ? "font-semibold text-sky-800"
                            : "text-slate-700"
                        }`}
                      >
                        {row.riverside}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {winner}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-orange-50 via-blue-50 to-sky-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-orange-800">
                    {averages.restream}
                  </td>
                  <td className="px-4 py-3 font-semibold text-blue-800">
                    {averages.zoom}
                  </td>
                  <td className="px-4 py-3 font-semibold text-sky-800">
                    {averages.riverside}
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
            <Gauge className="h-6 w-6 text-orange-600" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Cast className="h-5 w-5 text-orange-600" /> Streaming & reach
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {featureBullets.streaming.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Video className="h-5 w-5 text-blue-600" /> Recording quality
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {featureBullets.recording.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Mic className="h-5 w-5 text-sky-600" /> Guest experience
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {featureBullets.guestExperience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Pricing snapshots</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Approx. monthly</th>
                  <th className="px-4 py-3">Focus</th>
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
                    <td className="px-4 py-3 text-slate-700">{row.focus}</td>
                    <td className="px-4 py-3 text-slate-700">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-600">
            Pricing, limits, and feature bundles change frequently. Always
            double-check each vendor’s current pricing page before deciding.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>
              <strong>Restream:</strong> Feels like a simplified streaming
              studio. You manage scenes, overlays, and guests from the browser
              without needing OBS-level skills.
            </li>
            <li>
              <strong>Zoom:</strong> Already familiar to most corporate and
              education users. Strong for everyday collaboration and events,
              with the tradeoff of lower production value.
            </li>
            <li>
              <strong>Riverside:</strong> Designed for creators and production
              teams. The interface is straightforward, but you will want a
              repeatable guest onboarding process to fully leverage its quality.
            </li>
          </ul>
        </section>

        {/* Use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Use-cases: who wins where?</h2>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>
              <strong>Audience growth & live shows:</strong> Restream wins. One
              broadcast, many platforms, with unified chat and branding.
            </li>
            <li>
              <strong>Meetings, training & webinars:</strong> Zoom wins. It is
              the standard for interactive, multi-participant sessions.
            </li>
            <li>
              <strong>Podcasts & interview content:</strong> Riverside wins with
              local multi-track recordings that survive bad Wi-Fi.
            </li>
            <li>
              <strong>Hybrid strategy:</strong> Record in Riverside, host
              day-to-day on Zoom, and use Restream for public-facing shows and
              launches.
            </li>
          </ul>
        </section>

        {/* Pros & Cons */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        {/* FAQs */}
        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">
            FAQ: Restream vs Zoom vs Riverside
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
            className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-orange-700 shadow-sm ring-1 ring-orange-100 hover:bg-orange-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
