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
const primaryKeyword = "riverside vs loom vs descript";
const canonical = buildCanonical("/tools/compare/riverside-vs-loom-vs-descript");

const brandMeta = {
  riverside: {
    gradient: "from-sky-500 via-indigo-500 to-purple-600",
    badge: "bg-sky-100 text-sky-900",
    logo: "https://logo.clearbit.com/riverside.fm",
  },
  loom: {
    gradient: "from-orange-400 via-pink-500 to-rose-600",
    badge: "bg-orange-100 text-orange-900",
    logo: "https://logo.clearbit.com/loom.com",
  },
  descript: {
    gradient: "from-emerald-500 via-teal-500 to-green-600",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/descript.com",
  },
};

const contenders = [
  {
    key: "riverside",
    name: "Riverside",
    blurb:
      "Local multi-track recording for studio-quality podcasts and interviews, with live streaming options.",
    url: "https://riverside.fm",
  },
  {
    key: "loom",
    name: "Loom",
    blurb:
      "Async video messaging and screen recording for walkthroughs, updates, and quick explanations.",
    url: "https://loom.com",
  },
  {
    key: "descript",
    name: "Descript",
    blurb:
      "Text-based editing, transcription, and screen capture for podcast and video post-production.",
    url: "https://www.descript.com",
  },
];

const comparisonRows = [
  {
    label: "Primary use",
    riverside: "High-quality capture for podcasts, interviews, and shows.",
    loom: "Async walkthroughs, quick screen shares, and updates.",
    descript: "Editing audio/video with transcripts and screen capture.",
  },
  {
    label: "Recording quality",
    riverside: "Local multi-track up to 4K with separate audio tracks.",
    loom: "Good for quick webcam/screen; optimised for speed, not studio.",
    descript: "Good quality; tuned for editing and overdub workflows.",
  },
  {
    label: "Editing",
    riverside: "Basic trimming, clips, and social snippets.",
    loom: "Simple trims and call-to-action options.",
    descript: "Robust text-based and multitrack editing plus overdub.",
  },
  {
    label: "Collaboration",
    riverside: "Producer/host roles, guest links, shared spaces for shows.",
    loom: "Commenting, reactions, and workspaces for teams.",
    descript: "Shared projects, comments, and collaborative edits.",
  },
  {
    label: "Best fit",
    riverside: "Creators who need broadcast-level audio/video quality.",
    loom: "Teams using async video instead of meetings.",
    descript: "Content teams editing podcasts, YouTube videos, and clips.",
  },
];

const scoreboard = [
  { label: "Studio-quality capture", riverside: 9.5, loom: 7.0, descript: 8.4 },
  { label: "Async communication", riverside: 7.0, loom: 9.4, descript: 8.1 },
  { label: "Editing power", riverside: 7.8, loom: 7.5, descript: 9.3 },
  { label: "Ease to share", riverside: 8.0, loom: 9.5, descript: 8.7 },
  { label: "Value for creators", riverside: 8.8, loom: 8.9, descript: 9.0 },
];

const avg = (tool) =>
  (
    scoreboard.reduce((sum, row) => sum + (row[tool] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  riverside: avg("riverside"),
  loom: avg("loom"),
  descript: avg("descript"),
};

const overallWinnerKey = Object.entries(averages).sort(
  (a, b) => parseFloat(b[1]) - parseFloat(a[1])
)[0][0];

const overallWinnerLabels = {
  riverside: "Riverside",
  loom: "Loom",
  descript: "Descript",
};

const overallWinner = overallWinnerLabels[overallWinnerKey];

const featureBullets = {
  capture: [
    "Riverside: Local multi-track recording on each participant’s device, then uploads and syncs for studio-quality final files.",
    "Loom: Records your screen, camera, or both in a single track for fast explainers and demos.",
    "Descript: Captures screen, mic, and system audio with the goal of editing and repurposing content afterwards.",
  ],
  editing: [
    "Riverside: Quick trims, simple timelines, and clip generation designed to ship polished content fast.",
    "Loom: Lightweight trimming, thumbnail selection, and simple calls-to-action for internal and external sharing.",
    "Descript: Powerful, transcript-based editing where you cut, move, and clean audio/video by editing text.",
  ],
  sharingWorkflow: [
    "Riverside: Export full-resolution files for editing elsewhere or generate clips for social quickly.",
    "Loom: Share via instant links, embed in tools like Slack/Notion, and track who has watched.",
    "Descript: Export directly to social, publish pages, or hand off final files to platforms like YouTube and podcast hosts.",
  ],
};

const pricingTable = [
  {
    plan: "Riverside (Standard/Pro)",
    monthly: "Roughly ~$19–$29/mo (often billed annually)",
    focus: "Recording hours, quality (HD/4K), and track limits",
    notes:
      "Great if you regularly record podcasts, interviews, or shows where quality translates directly into brand perception.",
  },
  {
    plan: "Loom (Business)",
    monthly: "From around ~$12.50/mo per user",
    focus: "Creators per workspace, video limits, and advanced features",
    notes:
      "Excellent value if video messaging replaces internal calls and speeds up collaboration.",
  },
  {
    plan: "Descript (Creator/Pro)",
    monthly: "Roughly ~$15–$30/mo per editor",
    focus: "Editing hours, export limits, and advanced tools like overdub",
    notes:
      "Best when you have an ongoing editing workflow with multiple shows or channels.",
  },
];

const prosCons = {
  riverside: {
    pros: [
      "Studio-quality local multi-track recording for audio and video.",
      "Ideal for podcasts, interviews, and recurring shows.",
      "Built-in tools for clips and social repurposing.",
    ],
    cons: [
      "Less suited for everyday async communication.",
      "Full benefit requires a basic guest setup checklist.",
      "You will likely still want a separate editor (e.g., Descript or Premiere) for complex edits.",
    ],
  },
  loom: {
    pros: [
      "Fastest way to record and share async videos.",
      "Excellent for product walkthroughs, feedback, and updates.",
      "Simple link-based sharing with comments and reactions.",
    ],
    cons: [
      "Not built for studio-grade capture or multi-track recording.",
      "Limited editing compared to full production tools.",
      "Long-term archives can become hard to manage without process.",
    ],
  },
  descript: {
    pros: [
      "Powerful text-based editing for audio and video.",
      "Great transcripts, overdub, and multitrack timelines.",
      "Strong for content teams that repurpose long-form recordings.",
    ],
    cons: [
      "Not a replacement for Loom-style quick messaging.",
      "Requires a short learning curve to get comfortable with the paradigm.",
      "Works best when paired with a strong capture tool such as Riverside.",
    ],
  },
};

const faqs = [
  {
    q: `Which should I pick in ${YEAR}?`,
    a: "Pick Riverside if you need studio-quality capture for podcasts, interviews, and recurring shows. Pick Loom if your main need is quick async screen and webcam videos to reduce meetings. Pick Descript if you are editing-heavy and want to work from transcripts while producing podcasts and video content.",
  },
  {
    q: "Can they work together?",
    a: "Yes. A common stack is: record primary content in Riverside for quality, edit in Descript for transcripts and fine-grained control, then share final videos internally via Loom-style links or exports to your channels.",
  },
  {
    q: "Which is fastest to learn?",
    a: "Loom is fastest—most people can use it within minutes. Riverside is straightforward for hosts and requires light guidance for guests. Descript has a short learning curve but quickly becomes very efficient once you adopt text-based editing.",
  },
  {
    q: "Is Descript a replacement for Loom?",
    a: "Not really. Descript optimises for editing and production, whereas Loom optimises for quick one-take videos and frictionless sharing. Many teams use Loom for day-to-day comms and Descript for content that will be published externally.",
  },
  {
    q: "Do I still need a traditional editor with these tools?",
    a: "For simple content and clips, Riverside and Descript can be enough. For more complex brand assets with heavy motion graphics, you may still use traditional NLEs (Premiere, Final Cut) alongside these tools.",
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

export default function RiversideVsLoomVsDescriptPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Riverside vs Loom vs Descript – Capture, edit, and share video (${YEAR})`}
        description="Compare Riverside, Loom, and Descript for remote recording quality, async video messaging, and text-based editing so you can design the right creator and team workflow."
        canonical={canonical}
        keywords={`${primaryKeyword}, remote recording comparison, loom alternative, descript vs riverside`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Category + H1 */}
        <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
          Recording, async video & editing
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Riverside vs Loom vs Descript ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Riverside excels at studio-quality capture, Loom is the fastest way to
          share async explainer videos, and Descript is where serious editing
          and transcripts live. Your ideal stack depends on whether you care
          most about capture, communication speed, or editing depth.
        </p>

        {/* Hero contender cards */}
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

        {/* Quick verdict + winner */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-sky-100 bg-sky-50 px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sky-900">
              <Sparkles className="h-5 w-5" />
              <p className="text-lg font-semibold">Quick verdict</p>
            </div>
            <p className="mt-2 text-slate-800">
              Choose <strong>Riverside</strong> if audio/video quality is a
              brand asset and you publish podcasts or interview-style videos.
              Choose <strong>Loom</strong> when your main problem is
              over-scheduled calendars and you want async video instead of
              meetings. Choose <strong>Descript</strong> if you need a powerful
              editing environment with transcripts, overdub, and clip
              generation.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Crown className="h-4 w-4 text-sky-600" /> Overall scoreboard
              winner: {overallWinner}{" "}
              <span className="text-xs text-slate-600">
                (avg: {averages[overallWinnerKey]}/10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              No single tool replaces the others. A strong workflow is often:
              capture long-form content in Riverside, edit and repurpose in
              Descript, and then share outcomes or internal context with Loom.
            </p>
          </div>
        </div>

        {/* Core comparison table */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-emerald-600" /> Side-by-side
            comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Riverside</th>
                  <th className="px-4 py-3">Loom</th>
                  <th className="px-4 py-3">Descript</th>
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
                      {row.riverside}
                    </td>
                    <td className="px-4 py-3 text-slate-700">{row.loom}</td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.descript}
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
                  <th className="px-4 py-3">Riverside</th>
                  <th className="px-4 py-3">Loom</th>
                  <th className="px-4 py-3">Descript</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const winnerValue = Math.max(
                    row.riverside,
                    row.loom,
                    row.descript
                  );
                  const winner =
                    winnerValue === row.riverside
                      ? "Riverside"
                      : winnerValue === row.loom
                      ? "Loom"
                      : "Descript";
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
                          winner === "Riverside"
                            ? "font-semibold text-sky-800"
                            : "text-slate-700"
                        }`}
                      >
                        {row.riverside}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Loom"
                            ? "font-semibold text-orange-800"
                            : "text-slate-700"
                        }`}
                      >
                        {row.loom}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Descript"
                            ? "font-semibold text-emerald-800"
                            : "text-slate-700"
                        }`}
                      >
                        {row.descript}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {winner}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-sky-50 via-orange-50 to-emerald-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-sky-800">
                    {averages.riverside}
                  </td>
                  <td className="px-4 py-3 font-semibold text-orange-800">
                    {averages.loom}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.descript}
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
        <section className="mt-12 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-sky-600" /> Capture, editing, and
            sharing workflows
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Mic className="h-5 w-5 text-sky-600" /> Capture & recording
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {featureBullets.capture.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Layers className="h-5 w-5 text-emerald-600" /> Editing & cleanup
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {featureBullets.editing.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Video className="h-5 w-5 text-orange-600" /> Sharing & delivery
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {featureBullets.sharingWorkflow.map((item) => (
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
            Pricing and bundles change frequently. Use this as a directional
            guide and confirm final numbers on each vendor’s site.
          </p>
        </section>

        {/* Use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Who should choose which?</h2>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>
              <strong>Content creators & podcasters:</strong> Start with
              Riverside as your primary capture tool, then add Descript if your
              edits become more advanced.
            </li>
            <li>
              <strong>B2B SaaS and product teams:</strong> Loom is often the
              first purchase to speed up demos, updates, and internal comms.
              Bring in Descript later for marketing content and case-study
              videos.
            </li>
            <li>
              <strong>Agencies & production teams:</strong> Riverside + Descript
              is a strong combo: high-quality capture plus scalable post
              production. Loom can sit on top as a way to deliver reviews and
              internal updates.
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
            FAQ: Riverside vs Loom vs Descript
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
