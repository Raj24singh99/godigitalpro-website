import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  Zap,
  Crown,
  ArrowLeft,
  Users,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "vwo vs hotjar vs lucky orange";
const canonical = buildCanonical("/tools/compare/vwo-vs-hotjar-vs-lucky-orange");

const brandMeta = {
  vwo: {
    gradient: "from-fuchsia-500 via-rose-500 to-orange-500",
    badge: "bg-rose-100 text-rose-900",
    logo: "https://logo.clearbit.com/vwo.com",
  },
  hotjar: {
    gradient: "from-red-500 via-rose-500 to-orange-500",
    badge: "bg-red-100 text-red-900",
    logo: "https://logo.clearbit.com/hotjar.com",
  },
  "lucky orange": {
    gradient: "from-amber-500 via-yellow-500 to-lime-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/luckyorange.com",
  },
};

const contenders = [
  {
    key: "vwo",
    name: "VWO",
    blurb: "Experimentation and personalization platform for CRO programs.",
    url: "https://vwo.com",
  },
  {
    key: "hotjar",
    name: "Hotjar",
    blurb: "Heatmaps, recordings, and feedback for qualitative research.",
    url: "https://www.hotjar.com",
  },
  {
    key: "lucky orange",
    name: "Lucky Orange",
    blurb: "Affordable bundle of heatmaps, live chat, and recordings.",
    url: "https://www.luckyorange.com",
  },
];

const comparisonRows = [
  {
    label: "Primary focus",
    vwo: "Structured experimentation + personalization for CRO teams",
    hotjar: "Qualitative insights to understand user behaviour",
    "lucky orange": "Real-time behaviour, chat, and quick insights for SMBs",
  },
  {
    label: "Testing capabilities",
    vwo: "Robust A/B, split URL, MVT, server-side, and feature tests",
    hotjar: "No testing engine—insights only",
    "lucky orange": "Basic variation tests, more focused on diagnostics",
  },
  {
    label: "Behaviour insights",
    vwo: "Heatmaps, recordings, surveys, form analytics, funnels",
    hotjar: "Best-in-class heatmaps, replays, surveys, and feedback widgets",
    "lucky orange":
      "Heatmaps, recordings, funnels, polls, and real-time dashboards",
  },
  {
    label: "Live chat & engagement",
    vwo: "No live chat; integrates with other tools",
    hotjar: "No live chat; focuses on passive feedback",
    "lucky orange": "Built-in chat, polls, and announcements for quick feedback",
  },
  {
    label: "Pricing posture",
    vwo: "Enterprise / mid-market, traffic-based quotes",
    hotjar: "Freemium with clear SMB and scale tiers",
    "lucky orange": "Starts around $39/mo; strong value bundle for SMBs",
  },
  {
    label: "Ideal team",
    vwo: "CRO programs, experimentation squads, data-driven marketing teams",
    hotjar: "Product and UX teams prioritising discovery and research",
    "lucky orange":
      "SMBs and agencies needing insights + chat without enterprise budgets",
  },
];

const scoreboard = [
  { label: "Testing depth", scores: { vwo: 9.5, hotjar: 5.0, "lucky orange": 6.5 } },
  { label: "Ease of setup", scores: { vwo: 7.8, hotjar: 9.4, "lucky orange": 9.0 } },
  {
    label: "Feature breadth",
    scores: { vwo: 9.2, hotjar: 8.2, "lucky orange": 8.0 },
  },
  { label: "Value", scores: { vwo: 7.3, hotjar: 9.0, "lucky orange": 8.8 } },
  {
    label: "Support & success",
    scores: { vwo: 8.8, hotjar: 8.0, "lucky orange": 7.5 },
  },
];

const avg = (key) =>
  (scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0) / scoreboard.length).toFixed(
    1
  );

const averages = {
  vwo: avg("vwo"),
  hotjar: avg("hotjar"),
  "lucky orange": avg("lucky orange"),
};

const overallWinnerKey = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const winnerLabelMap = {
  vwo: "VWO",
  hotjar: "Hotjar",
  "lucky orange": "Lucky Orange",
};

const overallWinnerLabel = winnerLabelMap[overallWinnerKey] || overallWinnerKey;

const pricingTable = [
  {
    plan: "VWO Testing Essential",
    monthly: "~$308",
    annual: "Annual contracts",
    notes: "Around 50K tested visitors; pricing scales with traffic and modules.",
  },
  {
    plan: "Hotjar Plus",
    monthly: "$39",
    annual: "$32/mo billed annually",
    notes: "100 daily sessions; strong starting point for early-stage teams.",
  },
  {
    plan: "Lucky Orange Build",
    monthly: "$39",
    annual: "$32/mo billed annually",
    notes: "100K pageviews with heatmaps, recordings, and live chat bundled.",
  },
];

const faqs = [
  {
    q: `Should I start with VWO, Hotjar, or Lucky Orange in ${YEAR}?`,
    a: "Most teams start with Hotjar or Lucky Orange to gather qualitative and behavioural insight. Once you have traffic and a testing cadence, graduating to VWO for structured experiments makes sense.",
  },
  {
    q: "Do Hotjar or Lucky Orange replace VWO?",
    a: "No. Hotjar and Lucky Orange help you discover problems and opportunities. VWO is the experimentation engine to validate those changes with statistically sound tests.",
  },
  {
    q: "Can Lucky Orange handle enterprise needs?",
    a: "Lucky Orange is strongest in SMB and agency contexts. Enterprises that need strict governance, SSO, and complex workflows tend to standardise on VWO and/or Hotjar plus adjacent tools.",
  },
  {
    q: "Is VWO overkill for small teams?",
    a: "Often yes, if you do not yet have enough traffic or process for experimentation. Focus on qualitative tools first, then move into VWO when you can sustain a steady test pipeline.",
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
  experimentation: [
    "VWO: Full experimentation suite with A/B, split URL, MVT, server-side, and feature tests plus program management.",
    "Hotjar: No experimentation engine—best used with a separate testing platform such as VWO, Optimizely, or Google Optimize alternatives.",
    "Lucky Orange: Basic variation testing suited to simple page-level experiments, with more emphasis on diagnostics.",
  ],
  insights: [
    "VWO: Combines heatmaps, recordings, surveys, and form analytics closely with experiments to close the loop from insight to validation.",
    "Hotjar: Deep qualitative stack—heatmaps, replays, feedback widgets, and user interviews (Engage) for discovery work.",
    "Lucky Orange: Real-time dashboards, heatmaps, recordings, funnels, polls, and live chat to spot friction while it happens.",
  ],
  operations: [
    "VWO: Best for teams running a formal CRO program with owners, governance, and experimentation cadence.",
    "Hotjar: Ideal for product and UX teams who want quick, reliable user signals to influence roadmaps.",
    "Lucky Orange: Great fit for SMBs and agencies who need to combine support-style chat and behavioural insight in one tool.",
  ],
};

const prosCons = {
  vwo: {
    pros: [
      "Comprehensive experimentation and CRO suite",
      "Supports server-side and feature testing for advanced teams",
      "Program management and reporting built for scale",
    ],
    cons: [
      "Higher cost than insight-first tools",
      "Steeper learning curve for non-specialists",
      "Requires traffic and process to get full value",
    ],
  },
  hotjar: {
    pros: [
      "Very intuitive interface for product and UX teams",
      "Excellent heatmaps, recordings, and feedback tools",
      "Freemium model with accessible pricing as you grow",
    ],
    cons: [
      "No native experimentation engine",
      "Session sampling limits on lower tiers",
      "May require a separate testing stack for CRO programs",
    ],
  },
  "lucky orange": {
    pros: [
      "Affordable bundle combining heatmaps, recordings, and live chat",
      "Real-time dashboards that surface issues quickly",
      "Strong value for SMBs and agencies managing multiple sites",
    ],
    cons: [
      "Testing features are limited versus VWO",
      "Less enterprise-grade governance and roles",
      "Reporting and research workflows are lighter than Hotjar’s",
    ],
  },
};

const LogoBadge = ({ name }) => {
  const lowered = name.toLowerCase();
  const key =
    lowered === "vwo"
      ? "vwo"
      : lowered.includes("hotjar")
      ? "hotjar"
      : lowered.includes("lucky")
      ? "lucky orange"
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

export default function VwoVsHotjarVsLuckyOrangePage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`VWO vs Hotjar vs Lucky Orange – Comparison (${YEAR})`}
        description="VWO vs Hotjar vs Lucky Orange compared for experimentation, qualitative research, live chat, pricing, and best-fit teams so you can build the right CRO stack."
        canonical={canonical}
        keywords={`${primaryKeyword}, conversion optimization comparison, vwo vs hotjar, hotjar vs lucky orange`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Hero */}
        <p className="text-sm font-semibold uppercase tracking-wide text-fuchsia-700">
          Conversion optimization
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          VWO vs Hotjar vs Lucky Orange ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Three CRO platforms, three maturity levels.{" "}
          <strong>VWO</strong> is your experimentation engine,{" "}
          <strong>Hotjar</strong> is your qualitative research workhorse, and{" "}
          <strong>Lucky Orange</strong> is your SMB-friendly bundle of insights and chat. Here’s how
          they compare.
        </p>

        {/* Quick verdict + SMB card */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="space-y-3 rounded-3xl bg-fuchsia-50/90 p-6 ring-1 ring-fuchsia-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-fuchsia-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>VWO</strong> when experiments directly drive business outcomes and you
              have the traffic to support them. Choose <strong>Hotjar</strong> when discovery and
              qualitative insights are your first priority. Choose{" "}
              <strong>Lucky Orange</strong> if you want an affordable combination of heatmaps, chat,
              and recordings for SMB clients.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-fuchsia-800">
              <Crown className="h-4 w-4" /> Overall scoreboard winner: {overallWinnerLabel}{" "}
              <span className="text-xs font-medium text-fuchsia-700">
                (avg: {averages[overallWinnerKey]}/10)
              </span>
            </div>
          </div>
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Users className="h-5 w-5 text-fuchsia-700" /> Best for SMBs
            </div>
            <p className="text-sm text-slate-700">
              <strong>Lucky Orange</strong> gives small teams live chat, polls, heatmaps, and
              recordings in one bundle—ideal for agencies and SMBs watching budgets.
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
            <Layers className="h-6 w-6 text-fuchsia-700" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">VWO</th>
                  <th className="px-4 py-3">Hotjar</th>
                  <th className="px-4 py-3">Lucky Orange</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.vwo}</td>
                    <td className="px-4 py-3 text-slate-700">{row.hotjar}</td>
                    <td className="px-4 py-3 text-slate-700">{row["lucky orange"]}</td>
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
                  <th className="px-4 py-3">VWO</th>
                  <th className="px-4 py-3">Hotjar</th>
                  <th className="px-4 py-3">Lucky Orange</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const vwoScore = row.scores.vwo;
                  const hotjarScore = row.scores.hotjar;
                  const luckyScore = row.scores["lucky orange"];
                  const winnerValue = Math.max(vwoScore, hotjarScore, luckyScore);
                  const winner =
                    winnerValue === vwoScore
                      ? "VWO"
                      : winnerValue === hotjarScore
                      ? "Hotjar"
                      : "Lucky Orange";

                  return (
                    <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winner === "VWO" ? "font-semibold text-fuchsia-800" : "text-slate-700"
                        }`}
                      >
                        {vwoScore}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Hotjar" ? "font-semibold text-red-800" : "text-slate-700"
                        }`}
                      >
                        {hotjarScore}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Lucky Orange"
                            ? "font-semibold text-amber-800"
                            : "text-slate-700"
                        }`}
                      >
                        {luckyScore}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">{winner}</td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-fuchsia-50 via-red-50 to-amber-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-fuchsia-800">
                    {averages.vwo}
                  </td>
                  <td className="px-4 py-3 font-semibold text-red-800">
                    {averages.hotjar}
                  </td>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages["lucky orange"]}
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
            <Zap className="h-6 w-6 text-fuchsia-700" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Gauge className="h-5 w-5 text-fuchsia-700" /> Experimentation & testing
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.experimentation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Sparkles className="h-5 w-5 text-red-600" /> Insights & research
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.insights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Users className="h-5 w-5 text-amber-600" /> Operations & team fit
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.operations.map((item) => (
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
                  <th className="px-4 py-3">Annual / billing</th>
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
            Pricing for all three tools changes over time and is often tied to traffic, sessions,
            and required modules. Always confirm current tiers and limits directly on each
            vendor&apos;s pricing page before committing.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>VWO:</strong> Feels like an <strong>experimentation control centre</strong>. It
              shines when you have a CRO owner, analyst support, and stakeholders invested in
              rigorous testing.
            </li>
            <li>
              <strong>Hotjar:</strong> Optimised for{" "}
              <strong>product discovery and UX research</strong>. PMs and designers can ship surveys
              and review recordings without heavy engineering support.
            </li>
            <li>
              <strong>Lucky Orange:</strong> Oriented around{" "}
              <strong>real-time troubleshooting and support-informed insight</strong>. Teams can
              watch sessions and chat with users directly to resolve friction.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use cases & stack patterns</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Formal CRO program:</strong> Use <strong>VWO</strong> as the main testing
              engine, often paired with <strong>Hotjar</strong> to feed qualitative insight into the
              experimentation backlog.
            </li>
            <li>
              <strong>Product-led SaaS discovery:</strong> Start with <strong>Hotjar</strong> to
              understand flows, then add <strong>VWO</strong> as traffic and experimentation
              maturity grow.
            </li>
            <li>
              <strong>Agency managing multiple SMB sites:</strong> <strong>Lucky Orange</strong> for
              quick insights and chat on client sites; upgrade key clients into VWO/Hotjar as CRO
              engagement deepens.
            </li>
            <li>
              <strong>Support + CRO collaboration:</strong> Lucky Orange&apos;s live chat and
              recordings bridge gaps between support teams and CRO/UX owners, while VWO or another
              testing tool validates long-term fixes.
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
              <h3 className="text-lg font-semibold">VWO</h3>
              <p className="text-sm text-slate-700">
                Best when you want a <strong>central experimentation platform</strong> with governance,
                reporting, and deep testing options.
              </p>
              <p className="mt-2 text-sm font-semibold text-fuchsia-700">
                Ideal for: CRO teams, experimentation squads, and data-driven marketers.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Hotjar</h3>
              <p className="text-sm text-slate-700">
                Best when you need <strong>rich qualitative insight</strong> to understand user
                behaviour before scaling tests.
              </p>
              <p className="mt-2 text-sm font-semibold text-red-700">
                Ideal for: Product managers, UX researchers, founders in discovery mode.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Lucky Orange</h3>
              <p className="text-sm text-slate-700">
                Best for <strong>small teams and agencies</strong> that want heatmaps, chat, and
                recordings together without enterprise-level pricing.
              </p>
              <p className="mt-2 text-sm font-semibold text-amber-700">
                Ideal for: SMB site owners, ecommerce stores, and agencies managing many client
                sites.
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
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-fuchsia-700 ring-1 ring-fuchsia-100 hover:bg-fuchsia-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
