import React from "react";
import {
  Sparkles,
  Crown,
  Layers,
  BarChart3,
  ArrowLeft,
  Gauge,
  Zap,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "hootsuite vs buffer vs socialpilot";
const canonical = buildCanonical(
  "/tools/compare/hootsuite-vs-buffer-vs-socialpilot"
);

const brandMeta = {
  hootsuite: {
    gradient: "from-indigo-500 via-blue-500 to-slate-600",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/hootsuite.com",
  },
  buffer: {
    gradient: "from-sky-500 via-cyan-500 to-blue-500",
    badge: "bg-sky-100 text-sky-900",
    logo: "https://logo.clearbit.com/buffer.com",
  },
  socialpilot: {
    gradient: "from-emerald-500 via-teal-500 to-blue-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/socialpilot.co",
  },
};

const contenders = [
  {
    key: "hootsuite",
    name: "Hootsuite",
    blurb: "Monitoring-heavy suite with approvals, inbox, and analytics.",
    url: "https://www.hootsuite.com/",
  },
  {
    key: "buffer",
    name: "Buffer",
    blurb: "Simple, affordable scheduling and analytics for lean teams.",
    url: "https://buffer.com/",
  },
  {
    key: "socialpilot",
    name: "SocialPilot",
    blurb: "Budget-friendly scheduler with client workflows and reporting.",
    url: "https://www.socialpilot.co/",
  },
];

const comparisonRows = [
  {
    label: "Core focus",
    hootsuite: "Monitoring streams + approvals + reporting + inbox",
    buffer: "Fast scheduling, queues, and essential analytics",
    socialpilot: "Scheduling at scale + client workflows + reporting",
  },
  {
    label: "Best for",
    hootsuite: "Larger teams needing governance, monitoring, and approvals",
    buffer: "Creators, solo marketers, and lean in-house teams",
    socialpilot: "Agencies and small teams managing multiple clients",
  },
  {
    label: "Monitoring & inbox",
    hootsuite: "Advanced streams, social listening, unified inbox",
    buffer: "Basic engagement and replies in the inbox",
    socialpilot: "Social inbox with streams and basic monitoring",
  },
  {
    label: "Collaboration",
    hootsuite: "Roles, approvals, workspaces, and enterprise controls",
    buffer: "Light drafts/approvals and team collaboration",
    socialpilot: "Client approvals, roles, and white-label reports",
  },
  {
    label: "Price/value",
    hootsuite: "Premium; priced for teams with complex needs",
    buffer: "Most affordable for basic scheduling + analytics",
    socialpilot: "Strong value for multi-brand/client setups",
  },
];

const scoreboard = [
  { label: "Ease of use", hootsuite: 8.0, buffer: 9.3, socialpilot: 8.7 },
  { label: "Monitoring depth", hootsuite: 9.4, buffer: 6.8, socialpilot: 8.2 },
  {
    label: "Collaboration & approvals",
    hootsuite: 9.2,
    buffer: 7.5,
    socialpilot: 8.8,
  },
  {
    label: "Analytics & reporting",
    hootsuite: 9.0,
    buffer: 7.8,
    socialpilot: 8.4,
  },
  {
    label: "Value for money",
    hootsuite: 7.2,
    buffer: 9.2,
    socialpilot: 8.9,
  },
];

const pricingTable = [
  {
    plan: "Hootsuite Professional",
    monthly: "Around ~$99/month (billed annually)",
    annual: "Lower effective rate on annual billing",
    limits: "1 user, multiple social accounts, core inbox and scheduling",
    notes: "Best fit when you also need streams, approvals, and deeper analytics.",
  },
  {
    plan: "Buffer Essentials",
    monthly: "From around ~$6 per channel/month",
    annual: "Discounted on annual plans",
    limits: "Channels and scheduled posts scale with plan",
    notes: "Excellent value for simple scheduling, queues, and basic analytics.",
  },
  {
    plan: "SocialPilot Professional/Small Team",
    monthly: "From roughly ~$30–$50/month",
    annual: "Cheaper when billed annually",
    limits: "Number of accounts, team members, and clients scale with tier",
    notes: "Designed for agencies and teams needing approvals and client workflows.",
  },
];

const featureBullets = {
  publishing: [
    "Hootsuite: Powerful scheduling across many platforms with calendar views, bulk scheduling, and approval workflows.",
    "Buffer: Queue-based scheduling that’s fast and intuitive, ideal for creators and lean teams posting consistently.",
    "SocialPilot: Robust scheduling for many profiles at once, with bulk upload and client-specific calendars.",
  ],
  monitoring: [
    "Hootsuite: Deep monitoring streams and social listening, ideal for support, PR, and brand tracking.",
    "Buffer: Primarily focused on publishing; limited monitoring beyond basic engagement.",
    "SocialPilot: Offers inbox and monitoring for mentions and messages, sufficient for most SMBs and agencies.",
  ],
  collaboration: [
    "Hootsuite: Strongest collaboration with roles, approvals, workspaces, and enterprise governance.",
    "Buffer: Simple collaboration around drafts and approvals; suitable for smaller teams.",
    "SocialPilot: Collaboration built around client accounts, approvals, and white-label reporting for agencies.",
  ],
};

const faqs = [
  {
    q: `Is Hootsuite better than Buffer in ${YEAR}?`,
    a: "Hootsuite is better if you need social monitoring streams, a unified inbox, advanced approvals, and rich reporting. Buffer is better if you want simple, affordable scheduling and analytics without the overhead of a large suite.",
  },
  {
    q: "When should I choose SocialPilot?",
    a: "Choose SocialPilot if you manage multiple brands or clients and want more features than Buffer (inbox, approvals, white-label reports) but at a lower price point than Hootsuite.",
  },
  {
    q: "Which tool has the best reporting?",
    a: "Hootsuite has the most advanced analytics and reporting for larger teams. Buffer covers essential performance metrics for creators and SMBs, while SocialPilot offers strong, client-friendly and white-label reporting for agencies.",
  },
  {
    q: "Which is best for agencies?",
    a: "Hootsuite is ideal for large or enterprise agencies that need streams, advanced approvals, and governance. SocialPilot is excellent for budget-conscious agencies managing many clients. Buffer suits lean content agencies focused mostly on publishing and performance basics.",
  },
  {
    q: "Which is easiest for a solo creator or small team?",
    a: "Buffer is usually the easiest and most intuitive for solo creators and small teams. SocialPilot is also approachable if you already manage several profiles or clients. Hootsuite has a steeper learning curve but pays off for teams that need monitoring and approvals.",
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

const prosCons = {
  hootsuite: {
    pros: [
      "Deep monitoring streams, social listening, and unified inbox",
      "Strong collaboration features with roles, approvals, and workspaces",
      "Rich analytics and reporting for larger teams and enterprise clients",
    ],
    cons: [
      "Pricing is significantly higher than leaner tools",
      "Can feel heavy and complex if you only need scheduling",
      "Overkill for solo creators or very small teams",
    ],
  },
  buffer: {
    pros: [
      "Very simple and intuitive scheduling experience",
      "Affordable pricing for solo creators and small teams",
      "Solid core analytics without overwhelming the user",
    ],
    cons: [
      "Limited monitoring and listening capabilities",
      "Collaboration and approvals are relatively light",
      "Not designed for heavy multi-client agency governance",
    ],
  },
  socialpilot: {
    pros: [
      "Strong value for agencies managing multiple clients and profiles",
      "Client workflows, approvals, and white-label reporting",
      "More features than Buffer while staying cheaper than Hootsuite",
    ],
    cons: [
      "Monitoring and reporting are not as deep as Hootsuite’s enterprise stack",
      "Interface can feel more utilitarian than polished",
      "May still be more than a solo creator truly needs",
    ],
  },
};

const avg = (tool) =>
  (
    scoreboard.reduce((sum, row) => sum + (row[tool] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  hootsuite: avg("hootsuite"),
  buffer: avg("buffer"),
  socialpilot: avg("socialpilot"),
};

const overallWinner = (() => {
  const values = {
    hootsuite: parseFloat(averages.hootsuite),
    buffer: parseFloat(averages.buffer),
    socialpilot: parseFloat(averages.socialpilot),
  };
  const max = Math.max(values.hootsuite, values.buffer, values.socialpilot);
  if (max === values.hootsuite) return "Hootsuite";
  if (max === values.buffer) return "Buffer";
  return "SocialPilot";
})();

const LogoBadge = ({ name }) => {
  const key = name.toLowerCase().includes("hootsuite")
    ? "hootsuite"
    : name.toLowerCase().includes("buffer")
    ? "buffer"
    : name.toLowerCase().includes("socialpilot")
    ? "socialpilot"
    : name.toLowerCase();

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

export default function HootsuiteVsBufferVsSocialPilotPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Hootsuite vs Buffer vs SocialPilot (${YEAR}) – Social media tool comparison`}
        description="Compare Hootsuite, Buffer, and SocialPilot on pricing, monitoring, collaboration, reporting, and agency workflows to choose the right social media management platform."
        canonical={canonical}
        keywords={`${primaryKeyword}, social media management comparison, social scheduler tools, hootsuite alternative, buffer alternative, socialpilot review`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">
          Social media management
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Hootsuite vs Buffer vs SocialPilot ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Hootsuite is the monitoring and governance heavyweight. Buffer is the
          simplicity-and-value pick for creators and lean teams. SocialPilot is the
          budget-friendly agency workhorse. Below is a structured breakdown so you can match
          the platform to your publishing volume, collaboration needs, and budget.
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
              </div>
              <p className="relative mt-3 text-sm font-medium text-white/90">
                {item.blurb}
              </p>
            </a>
          ))}
        </div>

        {/* Quick verdict + overall winner */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-indigo-100 bg-indigo-50 px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-indigo-900">
              <Sparkles className="h-5 w-5" />
              <p className="text-lg font-semibold">Quick verdict</p>
            </div>
            <p className="mt-2 text-slate-800">
              Choose <strong>Hootsuite</strong> if you need{" "}
              <strong>monitoring streams, a unified inbox, approvals, and deep analytics</strong>.{" "}
              Choose <strong>Buffer</strong> if you want{" "}
              <strong>fast, affordable scheduling and simple analytics</strong> for a lean team.{" "}
              Choose <strong>SocialPilot</strong> if you manage{" "}
              <strong>multiple clients or brands</strong> and want{" "}
              <strong>agency-friendly workflows and reporting</strong> without enterprise pricing.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Crown className="h-4 w-4 text-indigo-600" /> Overall scoreboard winner:{" "}
              {overallWinner}{" "}
              <span className="text-xs text-slate-600">
                (avg:{" "}
                {overallWinner === "Hootsuite"
                  ? averages.hootsuite
                  : overallWinner === "Buffer"
                  ? averages.buffer
                  : averages.socialpilot}
                /10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              The best choice depends on whether you operate like a{" "}
              <strong>social command center</strong> (Hootsuite), a{" "}
              <strong>lean content team or creator</strong> (Buffer), or an{" "}
              <strong>agency with many clients</strong> (SocialPilot).
            </p>
          </div>
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-indigo-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Hootsuite</th>
                  <th className="px-4 py-3">Buffer</th>
                  <th className="px-4 py-3">SocialPilot</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.hootsuite}</td>
                    <td className="px-4 py-3 text-slate-700">{row.buffer}</td>
                    <td className="px-4 py-3 text-slate-700">{row.socialpilot}</td>
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
                  <th className="px-4 py-3">Criterion</th>
                  <th className="px-4 py-3">Hootsuite</th>
                  <th className="px-4 py-3">Buffer</th>
                  <th className="px-4 py-3">SocialPilot</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const maxScore = Math.max(
                    row.hootsuite,
                    row.buffer,
                    row.socialpilot
                  );
                  const winner =
                    row.hootsuite === row.buffer &&
                    row.buffer === row.socialpilot
                      ? "Tie"
                      : maxScore === row.hootsuite
                      ? "Hootsuite"
                      : maxScore === row.buffer
                      ? "Buffer"
                      : "SocialPilot";

                  return (
                    <tr key={row.label}>
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Hootsuite"
                            ? "font-semibold text-indigo-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.hootsuite}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Buffer"
                            ? "font-semibold text-sky-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.buffer}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "SocialPilot"
                            ? "font-semibold text-emerald-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.socialpilot}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {winner}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-indigo-50 via-sky-50 to-emerald-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages.hootsuite}
                  </td>
                  <td className="px-4 py-3 font-semibold text-sky-800">
                    {averages.buffer}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.socialpilot}
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
            <Gauge className="h-6 w-6 text-indigo-600" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Zap className="h-5 w-5 text-indigo-600" /> Publishing & scheduling
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.publishing.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Shield className="h-5 w-5 text-sky-600" /> Monitoring, inbox & listening
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.monitoring.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Layers className="h-5 w-5 text-emerald-600" /> Collaboration & approvals
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.collaboration.map((item) => (
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
            Pricing for Hootsuite, Buffer, and SocialPilot changes frequently and depends on
            channels, seats, and promotions. Always confirm live pricing and plan limits on
            their official pricing pages before committing.
          </p>
        </section>

        {/* Pros & Cons */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
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
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-indigo-700 ring-1 ring-indigo-100 hover:bg-indigo-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
