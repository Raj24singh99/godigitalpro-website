import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  Zap,
  Crown,
  ArrowLeft,
  Video,
  MessageSquare,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "wistia vs vimeo vs loom";
const canonical = buildCanonical("/tools/compare/wistia-vs-vimeo-vs-loom");

const brandMeta = {
  wistia: {
    gradient: "from-emerald-500 via-teal-500 to-indigo-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/wistia.com",
  },
  vimeo: {
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/vimeo.com",
  },
  loom: {
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/loom.com",
  },
};

const contenders = [
  {
    key: "wistia",
    name: "Wistia",
    blurb: "Video hosting for marketers with CTAs, lead capture, and viewer heatmaps.",
    url: "https://wistia.com/",
  },
  {
    key: "vimeo",
    name: "Vimeo",
    blurb: "High-quality hosting/OTT with strong player branding and client delivery.",
    url: "https://vimeo.com/",
  },
  {
    key: "loom",
    name: "Loom",
    blurb: "Fast async screen/camera recording, sharing, and feedback for teams.",
    url: "https://www.loom.com/",
  },
];

const comparisonRows = [
  {
    label: "Primary use case",
    wistia: "Marketing funnel hosting with CTAs, lead capture, podcasts, and analytics.",
    vimeo: "Client delivery, portfolios, OTT, and general-purpose hosting.",
    loom: "Async screen/camera updates and walkthroughs for teams and clients.",
  },
  {
    label: "Marketing features (CTAs, lead capture)",
    wistia: "Built-in CTAs, email gates, annotations, and integrations into CRM/MA tools.",
    vimeo:
      "Brandable player and calls to action; less lead-capture depth and CRM focus than Wistia.",
    loom: "Primarily recording/sharing; limited marketing CTAs or CRM-native lead capture.",
  },
  {
    label: "Async/team updates",
    wistia: "Possible but not the focus—designed for hosted marketing and on-site video.",
    vimeo: "Supports sharing and review, but geared toward hosting and OTT, not async ops.",
    loom: "Excellent for async updates; fastest to record, share, and comment on videos.",
  },
  {
    label: "Player quality & branding control",
    wistia: "Strong player branding, chapters, channels, and domain restrictions.",
    vimeo: "High-quality player with robust branding and embed customization.",
    loom: "Simple player, optimised for quick viewing; branding options are lighter.",
  },
  {
    label: "Analytics depth",
    wistia:
      "Per-viewer tracking, heatmaps, and conversions, feeding into CRM and marketing tools.",
    vimeo: "Solid analytics; less granular for marketing funnels than Wistia.",
    loom: "Basic analytics for views/engagement; focused on communication use cases.",
  },
  {
    label: "Value for purpose",
    wistia: "Great ROI when video is a key marketing/lead channel.",
    vimeo: "Good value for general hosting/OTT and polished client delivery.",
    loom: "Best value for async team/client updates and quick walkthroughs.",
  },
];

const scoreboard = [
  {
    label: "Marketing features (CTAs, lead capture)",
    scores: { wistia: 9.5, vimeo: 8.0, loom: 6.5 },
  },
  { label: "Async/team updates", scores: { wistia: 6.8, vimeo: 7.2, loom: 9.6 } },
  {
    label: "Player quality and branding control",
    scores: { wistia: 9.0, vimeo: 9.2, loom: 7.0 },
  },
  { label: "Analytics depth", scores: { wistia: 9.2, vimeo: 8.0, loom: 7.2 } },
  { label: "Value for purpose", scores: { wistia: 8.2, vimeo: 9.0, loom: 9.4 } },
];

const avg = (key) => {
  const total = scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0);
  return (total / scoreboard.length).toFixed(1);
};

const averages = {
  wistia: avg("wistia"),
  vimeo: avg("vimeo"),
  loom: avg("loom"),
};

const overallWinnerKey = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const overallWinnerLabel =
  overallWinnerKey === "wistia"
    ? "Wistia"
    : overallWinnerKey === "vimeo"
    ? "Vimeo"
    : "Loom";

const pricingTable = [
  {
    plan: "Wistia Plus / Pro / Advanced",
    monthly: "From around ~$24+/mo",
    annual: "Lower effective rate on annual plans",
    limits: "Hosted videos, CTAs/lead capture, channels, analytics",
    notes: "Best when video is a marketing or lead generation channel.",
  },
  {
    plan: "Vimeo Standard / Advanced",
    monthly: "From around ~$20+/mo",
    annual: "Lower on annual billing",
    limits: "Branded player, live/OTT features, collaboration tools",
    notes: "Great for client delivery, portfolios, and OTT-style streaming.",
  },
  {
    plan: "Loom Business / Enterprise",
    monthly: "From around ~$12+/user",
    annual: "Lower per-user price on annual",
    limits: "Async recording, workspaces, engagement analytics",
    notes: "Best for team/client async updates, demos, and walkthroughs.",
  },
];

const faqs = [
  {
    q: `Is Wistia better than Vimeo or Loom in ${YEAR}?`,
    a: "For marketing and lead capture, Wistia wins—thanks to CTAs, email gates, and CRM-driven analytics. Vimeo is best for branded hosting/OTT and client delivery. Loom is strongest for async communication and fast screen/camera updates.",
  },
  {
    q: "Which is best for lead capture?",
    a: "Wistia. It has built-in CTAs, email gates, and per-viewer tracking that syncs with CRMs and marketing automation tools.",
  },
  {
    q: "Which is best for async team/client updates?",
    a: "Loom. Recording, sharing, and commenting are optimised for fast asynchronous communication and feedback.",
  },
  {
    q: "Which is best for general hosting and OTT?",
    a: "Vimeo. It offers reliable hosting, a highly brandable player, live streaming, and OTT options for creators and studios.",
  },
  {
    q: "Can I use Loom with Wistia or Vimeo?",
    a: "Yes. A common pattern is to record in Loom for internal collaboration and use Wistia or Vimeo for public-facing or marketing videos.",
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
  wistia: {
    pros: [
      "Marketing-first with CTAs, email gates, and lead capture baked into the player",
      "Per-viewer analytics, heatmaps, and CRM/MA integrations",
      "Strong player branding, channels, chapters, and domain restrictions",
    ],
    cons: [
      "Pricier if you only need generic video hosting",
      "Not focused on async recording—needs separate tools for that",
      "Video limits and overages on lower tiers",
    ],
  },
  vimeo: {
    pros: [
      "High-quality player and rich branding/embedding options",
      "Good hosting, live, and OTT features for creators and studios",
      "Solid value for general video delivery and client review",
    ],
    cons: [
      "Lead capture lighter than Wistia for marketing funnels",
      "Async recording is not a core use case",
      "Some marketing features require add-ons or external tools",
    ],
  },
  loom: {
    pros: [
      "Extremely fast async recording and sharing for screen/camera",
      "Great for teams and clients, with comments and reactions",
      "Low per-seat cost for its communication use case",
    ],
    cons: [
      "Limited marketing/lead capture capabilities",
      "Player branding and analytics are more basic",
      "Not built for rich OTT or high-end public hosting",
    ],
  },
};

const featureBullets = {
  workflow: [
    "Wistia: Upload final videos from your editor; manage channels, CTAs, and analytics per asset.",
    "Vimeo: Upload final edits for portfolios, client review, live streams, or OTT distribution.",
    "Loom: Record directly from your browser/desktop, share instantly, and gather comments async.",
  ],
  hosting: [
    "Wistia: Opinionated marketing hosting for websites, hubs, podcasts, and product tours.",
    "Vimeo: Flexible hosting for portfolios, client delivery, live events, and OTT apps.",
    "Loom: Lightweight hosting designed for fast async viewing, not long-term public archives.",
  ],
  analytics: [
    "Wistia: Viewer-level heatmaps tied into CRMs, ideal for MQL/SQL attribution.",
    "Vimeo: Engagement metrics and dashboards that serve creators, studios, and OTT providers.",
    "Loom: Basic view counts, watch time, and engagement for internal communication and training.",
  ],
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

export default function WistiaVsVimeoVsLoomPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Wistia vs Vimeo vs Loom – Honest Comparison (${YEAR})`}
        description="Compare Wistia, Vimeo, and Loom for marketing video, branded hosting, OTT, and async recording: CTAs, analytics, workflows, pricing, and best-fit teams."
        canonical={canonical}
        keywords={`${primaryKeyword}, video hosting comparison, wistia vs vimeo, wistia vs loom, loom vs vimeo`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Video hosting & async
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Wistia vs Vimeo vs Loom – Honest Comparison ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          <strong>Wistia</strong> is built for marketers who need CTAs, lead capture, and CRM-ready
          analytics. <strong>Vimeo</strong> excels at branded hosting, portfolios, and OTT.{" "}
          <strong>Loom</strong> is the go-to for async screen/camera recording and quick updates. Here is a
          structured breakdown so you can decide which platform—or combination—actually fits your
          video strategy.
        </p>

        {/* Quick verdict + async highlight */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2 space-y-3 rounded-3xl bg-emerald-50/90 p-6 ring-1 ring-emerald-100">
            <div className="flex items-center gap-2 text-lg font-semibold text-emerald-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>Wistia</strong> if video is part of your marketing funnel and you care
              about CTAs, lead capture, and attribution. Choose <strong>Vimeo</strong> if you need
              polished hosting/OTT and client delivery. Choose <strong>Loom</strong> when async
              communication, demos, and walkthroughs are your primary use cases.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-800">
              <Crown className="h-4 w-4" /> Overall scoreboard winner: {overallWinnerLabel}{" "}
              <span className="text-xs font-medium text-emerald-700">
                (avg: {averages[overallWinnerKey]}/10)
              </span>
            </div>
          </div>
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <MessageSquare className="h-5 w-5 text-emerald-700" /> Best async explainer
            </div>
            <p className="text-sm text-slate-700">
              <strong>Loom</strong> is the fastest way to record and share screen/camera updates, get
              comments, and keep teams and clients aligned without meetings.
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
            <Layers className="h-6 w-6 text-emerald-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Wistia</th>
                  <th className="px-4 py-3">Vimeo</th>
                  <th className="px-4 py-3">Loom</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.wistia}</td>
                    <td className="px-4 py-3 text-slate-700">{row.vimeo}</td>
                    <td className="px-4 py-3 text-slate-700">{row.loom}</td>
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
                  <th className="px-4 py-3">Wistia</th>
                  <th className="px-4 py-3">Vimeo</th>
                  <th className="px-4 py-3">Loom</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const wistiaScore = row.scores.wistia;
                  const vimeoScore = row.scores.vimeo;
                  const loomScore = row.scores.loom;
                  const winnerValue = Math.max(wistiaScore, vimeoScore, loomScore);
                  const winnerKey =
                    winnerValue === wistiaScore
                      ? "wistia"
                      : winnerValue === vimeoScore
                      ? "vimeo"
                      : "loom";
                  const winnerLabel =
                    winnerKey === "wistia"
                      ? "Wistia"
                      : winnerKey === "vimeo"
                      ? "Vimeo"
                      : "Loom";

                  return (
                    <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "wistia"
                            ? "font-semibold text-emerald-800"
                            : "text-slate-700"
                        }`}
                      >
                        {wistiaScore}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "vimeo"
                            ? "font-semibold text-indigo-800"
                            : "text-slate-700"
                        }`}
                      >
                        {vimeoScore}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "loom"
                            ? "font-semibold text-amber-800"
                            : "text-slate-700"
                        }`}
                      >
                        {loomScore}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">
                        {winnerLabel}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-emerald-50 via-indigo-50 to-amber-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.wistia}
                  </td>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages.vimeo}
                  </td>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages.loom}
                  </td>
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
            <Gauge className="h-6 w-6 text-emerald-600" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Video className="h-5 w-5 text-emerald-600" /> Creation, workflow & use-cases
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.workflow.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Layers className="h-5 w-5 text-indigo-600" /> Hosting, players & distribution
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.hosting.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Zap className="h-5 w-5 text-amber-600" /> Analytics & performance
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.analytics.map((item) => (
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
                  <th className="px-4 py-3">Monthly (approx.)</th>
                  <th className="px-4 py-3">Annual (approx.)</th>
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
            Pricing changes frequently and can vary by region, usage, and promotions. Always confirm
            current tiers, limits, and overage policies on each vendor’s official pricing page
            before committing.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Wistia:</strong> Feels familiar to marketers used to CRMs and marketing
              automation. The main learning curve is around structuring channels, CTAs, and
              analytics to match your funnel.
            </li>
            <li>
              <strong>Vimeo:</strong> Straightforward for creators and agencies. Simple for uploads
              and share links, with more depth as you move into OTT and live streaming.
            </li>
            <li>
              <strong>Loom:</strong> Almost zero learning curve. Hit record, talk through your
              screen, share, and collect comments. Ideal for teams that want to replace short
              meetings and Slack walls of text.
            </li>
          </ul>
        </section>

        {/* Real-world use-cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>B2B and SaaS marketing teams:</strong> Wistia wins for CTAs, lead capture, and
              CRM-based attribution on product tours, webinars, and explainer videos.
            </li>
            <li>
              <strong>Agencies and studios delivering client work:</strong> Vimeo wins for polished
              hosting, review links, and OTT or event streaming.
            </li>
            <li>
              <strong>Async-first teams and client success:</strong> Loom wins for demos,
              walkthroughs, onboarding, and quick troubleshooting videos.
            </li>
            <li>
              <strong>Full-funnel video stack:</strong> Record internally with Loom, edit as needed,
              use Wistia for marketing videos on site, and Vimeo when you need live/OTT or
              high-touch client delivery.
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
              <h3 className="text-lg font-semibold">Wistia</h3>
              <p className="text-sm text-slate-700">
                Best when you treat video as a performance channel, with CTAs, lead capture, and
                CRM-driven reporting.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: B2B SaaS, marketing teams, lead-gen focused agencies.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Vimeo</h3>
              <p className="text-sm text-slate-700">
                Best for portfolios, client deliveries, live events, and OTT where brand control and
                visual polish matter most.
              </p>
              <p className="mt-2 text-sm font-semibold text-indigo-700">
                Ideal for: Studios, creative agencies, educators, and event producers.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Loom</h3>
              <p className="text-sm text-slate-700">
                Best for asynchronous communication and feedback loops that replace unnecessary
                meetings.
              </p>
              <p className="mt-2 text-sm font-semibold text-amber-700">
                Ideal for: Product teams, CS/support, remote-first companies, and agencies
                coordinating with clients.
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
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-emerald-700 ring-1 ring-emerald-100 hover:bg-emerald-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
