import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  Zap,
  MessageCircle,
  Megaphone,
  Crown,
  ArrowLeft,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "buffer vs hootsuite vs later";
const canonical = buildCanonical("/tools/compare/buffer-vs-hootsuite-vs-later");

const brandMeta = {
  buffer: {
    gradient: "from-emerald-500 via-teal-500 to-indigo-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/buffer.com",
  },
  hootsuite: {
    gradient: "from-slate-700 via-slate-600 to-slate-800",
    badge: "bg-slate-100 text-slate-900",
    logo: "https://logo.clearbit.com/hootsuite.com",
  },
  later: {
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/later.com",
  },
};

const contenders = [
  {
    key: "buffer",
    name: "Buffer",
    blurb: "Lean, affordable social scheduling with great publishing UX.",
    url: "https://buffer.com/",
  },
  {
    key: "hootsuite",
    name: "Hootsuite",
    blurb: "Enterprise-grade monitoring, inbox, and team workflows.",
    url: "https://www.hootsuite.com/",
  },
  {
    key: "later",
    name: "Later",
    blurb: "Instagram/TikTok-first planning with visual calendar and Link in Bio.",
    url: "https://later.com/",
  },
];

const comparisonRows = [
  {
    label: "Scheduling UX & speed",
    buffer: "Simple queues and calendar; browser/mobile friendly for lean teams.",
    hootsuite: "Powerful calendar but heavier UI.",
    later: "Visual drag-and-drop calendar tuned for IG/TikTok.",
  },
  {
    label: "Monitoring & inbox",
    buffer: "Light social inbox with core reply features.",
    hootsuite: "Deep streams, social inbox, and approvals for teams.",
    later: "Basic engagement tools; not a full listening suite.",
  },
  {
    label: "Analytics & reporting",
    buffer: "Good post analytics and lean reports for creators/SMBs.",
    hootsuite: "Rich dashboards and exports for enterprise stakeholders.",
    later: "Channel-specific reports tuned for IG/TikTok performance.",
  },
  {
    label: "Link in bio / landing",
    buffer: "Start Page for simple bio links and lightweight landing pages.",
    hootsuite: "Requires add-ons or integrations for link-in-bio style pages.",
    later: "Strong Link in Bio product with shoppable tags.",
  },
  {
    label: "Collaboration",
    buffer: "Light approvals and drafts for small teams.",
    hootsuite: "Robust roles, approvals, and team workflows at scale.",
    later: "Simple roles; aimed at small IG/TikTok-focused teams.",
  },
  {
    label: "Price/value",
    buffer: "Most affordable per channel/user for small teams.",
    hootsuite: "Pricier; built and priced for enterprise.",
    later: "Fair pricing for visual, IG-first brands.",
  },
];

const scoreboard = [
  { label: "Scheduling UX & speed", scores: { buffer: 9.2, hootsuite: 8.0, later: 8.8 } },
  { label: "Monitoring & inbox", scores: { buffer: 7.5, hootsuite: 9.2, later: 7.8 } },
  { label: "Analytics & reporting", scores: { buffer: 8.0, hootsuite: 8.8, later: 7.9 } },
  { label: "Collaboration & roles", scores: { buffer: 7.8, hootsuite: 9.1, later: 8.2 } },
  { label: "Price/value", scores: { buffer: 9.0, hootsuite: 7.6, later: 8.8 } },
];

const avg = (key) => {
  const total = scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0);
  return (total / scoreboard.length).toFixed(1);
};

const averages = {
  buffer: avg("buffer"),
  hootsuite: avg("hootsuite"),
  later: avg("later"),
};

const overallWinnerKey =
  Math.max(averages.buffer, averages.hootsuite, averages.later) ===
  parseFloat(averages.buffer)
    ? "buffer"
    : Math.max(averages.hootsuite, averages.later) ===
      parseFloat(averages.hootsuite)
    ? "hootsuite"
    : "later";

const overallWinnerName =
  contenders.find((c) => c.key === overallWinnerKey)?.name || "Buffer";

const pricingTable = [
  {
    plan: "Buffer Essentials",
    monthly: "~$6/channel",
    annual: "Discounts on larger bundles",
    limits: "Queues, scheduling, analytics, Start Page",
    notes: "Best value for creators and lean in-house teams.",
  },
  {
    plan: "Hootsuite Team",
    monthly: "~$99",
    annual: "Enterprise contracts available",
    limits: "Streams, inbox, approvals, roles",
    notes: "Best for agencies and enterprise-grade monitoring.",
  },
  {
    plan: "Later Growth",
    monthly: "~$25",
    annual: "Lower effective price on annual",
    limits: "Visual planner, media library, Link in Bio",
    notes: "Best for Instagram/TikTok-first brands.",
  },
];

const faqs = [
  {
    q: `Is Buffer better than Hootsuite in ${YEAR}?`,
    a: "Buffer is better for simplicity and price. Hootsuite is better when you need monitoring streams, a social inbox, team roles, and reporting for multiple stakeholders.",
  },
  {
    q: "What should Instagram-first brands choose?",
    a: "Later. It offers a visual planner, media library, UGC workflows, and a strong Link in Bio product with shopping tags for IG and TikTok.",
  },
  {
    q: "Which is most affordable for small teams?",
    a: "Buffer is typically the most affordable and easiest to adopt for small teams and creators that primarily need publishing and light analytics.",
  },
  {
    q: "Who should pick Hootsuite?",
    a: "Pick Hootsuite if you need social listening streams, a unified inbox, roles, approvals, and deeper reports for agencies or enterprise teams.",
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

const prosCons = {
  buffer: {
    pros: [
      "Simplest publishing workflow and queues",
      "Great value per channel for small teams and creators",
      "Start Page for quick link-in-bio style pages",
    ],
    cons: [
      "Monitoring and social inbox are relatively light",
      "Reporting is lean vs enterprise tools",
      "Fewer advanced team controls and workflows",
    ],
  },
  hootsuite: {
    pros: [
      "Deep monitoring streams and listening",
      "Team roles, approvals, and robust collaboration",
      "Rich reporting and dashboards for stakeholders",
    ],
    cons: [
      "Higher price point aimed at mid-market and enterprise",
      "Heavier UI for teams that only need simple scheduling",
      "Instagram-/TikTok-first workflows trail Later’s visual planner",
    ],
  },
  later: {
    pros: [
      "Visual planner tuned for Instagram and TikTok",
      "Media library, UGC tools, and creator workflows",
      "Strong Link in Bio with shopping tags and branded layouts",
    ],
    cons: [
      "Limited social listening and monitoring/inbox",
      "Reports are more channel-focused than exec-level",
      "Less suited to complex enterprise team structures",
    ],
  },
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

export default function BufferVsHootsuiteVsLaterPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Buffer vs Hootsuite vs Later (${YEAR}) – Social scheduling comparison`}
        description="Hands-on comparison of Buffer, Hootsuite, and Later for social media scheduling: publishing UX, monitoring/inbox, analytics, pricing, and best-fit use cases."
        canonical={canonical}
        keywords={`${primaryKeyword}, buffer review, hootsuite review, later review, social media scheduler comparison`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Social scheduling tools
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Buffer vs Hootsuite vs Later – Honest Comparison ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          We scheduled campaigns, monitored streams, and shipped link-in-bio pages with Buffer,
          Hootsuite, and Later. Buffer is lean and affordable. Hootsuite is strongest for monitoring,
          inbox, and enterprise reporting. Later is built for Instagram/TikTok-first planning with a
          visual calendar. Here is how they compare side-by-side.
        </p>

        {/* Quick verdict and highlights */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2 space-y-3 rounded-3xl bg-emerald-50/90 p-6 ring-1 ring-emerald-100">
            <div className="flex items-center gap-2 text-lg font-semibold text-emerald-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              <strong>Buffer</strong> wins for lean teams that want fast publishing and strong value
              per channel. <strong>Hootsuite</strong> wins when you need monitoring streams, social
              inbox, roles, and approvals. <strong>Later</strong> wins for Instagram/TikTok-first
              content with a visual calendar and Link in Bio. If you need both deep monitoring and
              IG-first planning, some teams pair Hootsuite with Later.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-800">
              <Crown className="h-4 w-4" /> Overall scoreboard winner:{" "}
              {overallWinnerName}{" "}
              <span className="text-xs font-medium text-emerald-700">
                (avg: {averages[overallWinnerKey]}/10)
              </span>
            </div>
          </div>

          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <MessageCircle className="h-5 w-5 text-emerald-700" /> Best for monitoring & inbox
            </div>
            <p className="text-sm text-slate-700">
              <strong>Hootsuite</strong> has deep listening streams, an engagement inbox, and
              approvals—ideal for teams that treat social as a support and listening channel.
            </p>
          </div>

          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Zap className="h-5 w-5 text-indigo-600" /> Best for IG/TikTok planning
            </div>
            <p className="text-sm text-slate-700">
              <strong>Later</strong> offers a visual calendar, media library, UGC tools, and Link in
              Bio, making it the easiest choice for Instagram- and TikTok-first brands.
            </p>
          </div>
        </div>

        {/* Contender cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {contenders.map((card) => {
            const meta = brandMeta[card.key];
            return (
              <a
                key={card.key}
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative block overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br ${
                  meta?.gradient || "from-slate-500 to-slate-700"
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
            );
          })}
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-emerald-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Buffer</th>
                  <th className="px-4 py-3">Hootsuite</th>
                  <th className="px-4 py-3">Later</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.buffer}</td>
                    <td className="px-4 py-3 text-slate-700">{row.hootsuite}</td>
                    <td className="px-4 py-3 text-slate-700">{row.later}</td>
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
                  <th className="px-4 py-3">Criterion</th>
                  <th className="px-4 py-3">Buffer</th>
                  <th className="px-4 py-3">Hootsuite</th>
                  <th className="px-4 py-3">Later</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const entries = Object.entries(row.scores);
                  const [winnerKey] =
                    entries.sort((a, b) => Number(b[1]) - Number(a[1]))[0] || [];
                  const winnerLabel =
                    winnerKey === "buffer"
                      ? "Buffer"
                      : winnerKey === "hootsuite"
                      ? "Hootsuite"
                      : "Later";

                  return (
                    <tr key={row.label}>
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "buffer"
                            ? "font-semibold text-emerald-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.buffer}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "hootsuite"
                            ? "font-semibold text-slate-800"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.hootsuite}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "later"
                            ? "font-semibold text-indigo-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.later}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">
                        {winnerLabel}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-emerald-50 via-slate-50 to-indigo-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.buffer}
                  </td>
                  <td className="px-4 py-3 font-semibold text-slate-800">
                    {averages.hootsuite}
                  </td>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages.later}
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
        <section className="mt-12 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-emerald-600" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Zap className="h-5 w-5 text-emerald-600" /> Publishing UX & queues
            </h3>
            <ul className="space-y-2 text-slate-700">
              <li>
                <strong>Buffer:</strong> Queue-based scheduling and a clean calendar make everyday
                publishing fast for small teams and creators.
              </li>
              <li>
                <strong>Hootsuite:</strong> Powerful calendar with bulk options, but more complex
                for simple use cases.
              </li>
              <li>
                <strong>Later:</strong> Visual drag-and-drop calendar is ideal for grid planning and
                short-form video scheduling.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <MessageCircle className="h-5 w-5 text-indigo-600" /> Monitoring & engagement
            </h3>
            <ul className="space-y-2 text-slate-700">
              <li>
                <strong>Buffer:</strong> Basic reply tools work for small teams but are not a full
                social support solution.
              </li>
              <li>
                <strong>Hootsuite:</strong> Listening streams, unified inbox, and approvals make it
                suitable for support and community teams.
              </li>
              <li>
                <strong>Later:</strong> Focuses more on planning and publishing; monitoring is
                comparatively light.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Megaphone className="h-5 w-5 text-purple-600" /> Link in Bio & creator tools
            </h3>
            <ul className="space-y-2 text-slate-700">
              <li>
                <strong>Buffer:</strong> Start Page covers basic link-in-bio and quick landing
                pages for creators.
              </li>
              <li>
                <strong>Hootsuite:</strong> Depends more on integrations or separate landing page
                tools.
              </li>
              <li>
                <strong>Later:</strong> Strong Link in Bio with shoppable grids and brand-ready
                designs for social commerce.
              </li>
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
                  <th className="px-4 py-3">Annual</th>
                  <th className="px-4 py-3">Limits</th>
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
            Pricing for Buffer, Hootsuite, and Later shifts over time and depends on channels, users,
            and contracts. Always check each vendor’s latest pricing and trial offers before you
            commit.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Buffer:</strong> Very low learning curve; anyone on the team can schedule
              posts quickly after a short walkthrough.
            </li>
            <li>
              <strong>Hootsuite:</strong> More complex; best when a social or support lead owns
              setup of streams, inbox, and approvals.
            </li>
            <li>
              <strong>Later:</strong> Familiar to visual-first marketers; grid and calendar views
              match the way IG/TikTok content is planned.
            </li>
          </ul>
        </section>

        {/* Real-world use-cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Creators and small brands needing simple scheduling:</strong> Buffer wins with
              queues, affordability, and Start Page.
            </li>
            <li>
              <strong>Agencies and enterprise social teams:</strong> Hootsuite wins with monitoring
              streams, inbox, roles, and detailed reporting.
            </li>
            <li>
              <strong>Instagram/TikTok-first brands and creators:</strong> Later wins with its
              visual planner, media library, UGC tools, and Link in Bio.
            </li>
          </ul>
        </section>

        {/* Pros & Cons */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
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
