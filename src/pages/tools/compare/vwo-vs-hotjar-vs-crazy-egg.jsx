import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  Zap,
  Crown,
  ArrowLeft,
  Thermometer,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "vwo vs hotjar vs crazy egg";
const canonical = buildCanonical("/tools/compare/vwo-vs-hotjar-vs-crazy-egg");

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
  "crazy egg": {
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    badge: "bg-blue-100 text-blue-900",
    logo: "https://logo.clearbit.com/crazyegg.com",
  },
};

const contenders = [
  {
    key: "vwo",
    name: "VWO",
    blurb: "Full-stack CRO with testing, insights, and personalization.",
    url: "https://vwo.com",
  },
  {
    key: "hotjar",
    name: "Hotjar",
    blurb: "Heatmaps, recordings, and surveys for qualitative insights.",
    url: "https://www.hotjar.com",
  },
  {
    key: "crazy egg",
    name: "Crazy Egg",
    blurb: "Budget-friendly heatmaps and A/B testing.",
    url: "https://www.crazyegg.com",
  },
];

const comparisonRows = [
  {
    label: "Primary use case",
    vwo: "Experimentation, personalization, and CRO program management",
    hotjar: "Qualitative research, feedback, and discovery",
    "crazy egg": "Heatmaps and simple A/B tests for landing pages",
  },
  {
    label: "Testing depth",
    vwo: "Client-side A/B, MVT, server-side, feature tests",
    hotjar: "No native testing—insights only",
    "crazy egg": "A/B page-level tests and variants",
  },
  {
    label: "Insights",
    vwo: "Heatmaps, session recordings, surveys, form analytics",
    hotjar: "Best-in-class heatmaps, replays, feedback, interviews (Engage)",
    "crazy egg": "Heatmaps, scroll maps, confetti click maps",
  },
  {
    label: "Pricing model",
    vwo: "Custom/traffic-based, mid-market and enterprise oriented",
    hotjar: "Free tier + clear SMB/scale tiers",
    "crazy egg": "Starts around ~$29/mo with pageview caps",
  },
  {
    label: "Team fit",
    vwo: "Growth, CRO, and experimentation teams",
    hotjar: "Product managers and UX researchers",
    "crazy egg": "Small teams wanting quick visual proof and lightweight tests",
  },
];

const scoreboard = [
  { label: "Experimentation", scores: { vwo: 9.5, hotjar: 5.0, "crazy egg": 6.5 } },
  { label: "Qualitative insights", scores: { vwo: 8.5, hotjar: 9.6, "crazy egg": 7.5 } },
  { label: "Ease of use", scores: { vwo: 7.8, hotjar: 9.2, "crazy egg": 8.8 } },
  { label: "Value for SMB", scores: { vwo: 7.0, hotjar: 9.0, "crazy egg": 8.7 } },
  { label: "Enterprise readiness", scores: { vwo: 9.2, hotjar: 7.0, "crazy egg": 6.2 } },
];

const avg = (key) =>
  (scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0) / scoreboard.length).toFixed(
    1
  );

const averages = { vwo: avg("vwo"), hotjar: avg("hotjar"), "crazy egg": avg("crazy egg") };

const overallWinnerKey = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const winnerLabelMap = {
  vwo: "VWO",
  hotjar: "Hotjar",
  "crazy egg": "Crazy Egg",
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
    notes: "100 daily sessions; good entry point for early-stage products.",
  },
  {
    plan: "Crazy Egg Standard",
    monthly: "$49",
    annual: "$29/mo billed annually",
    notes: "60K pageviews; solid starter for heatmaps and simple testing.",
  },
];

const faqs = [
  {
    q: `Is VWO better than Hotjar or Crazy Egg in ${YEAR}?`,
    a: "For experimentation and running a structured CRO program, yes. VWO wins on testing depth and enterprise readiness. Hotjar and Crazy Egg win when the priority is qualitative research on a lower budget.",
  },
  {
    q: "Can I run tests in Hotjar?",
    a: "No. Hotjar is focused on insights—heatmaps, recordings, surveys, and interviews. Use VWO or Crazy Egg if you need A/B or multivariate tests.",
  },
  {
    q: "Do teams use both VWO and Hotjar?",
    a: "Very often. A common pattern is to use Hotjar for discovering problems and user friction, then validate the resulting hypotheses with structured VWO experiments.",
  },
  {
    q: "How do the pricing models compare?",
    a: "Hotjar and Crazy Egg are priced accessibly for SMBs and smaller teams. VWO is priced for mid-market and enterprise traffic, with quotes tied to volume and modules.",
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
    "VWO: Full experimentation suite (A/B, split URL, MVT, server-side, feature tests) plus program management.",
    "Hotjar: No experimentation; used alongside testing tools to generate hypotheses.",
    "Crazy Egg: Simple page-level A/B tests suitable for landing pages and campaigns.",
  ],
  insights: [
    "VWO: Combines heatmaps, recordings, and surveys tightly with experiments to close the loop.",
    "Hotjar: Deep qualitative stack with heatmaps, replays, feedback widgets, and user interviews (Engage).",
    "Crazy Egg: Focuses on visual click/scroll/confetti maps to quickly show what users do on key pages.",
  ],
  operations: [
    "VWO: Best fit when you run a formal CRO program with stakeholders, SLAs, and experimentation cadence.",
    "Hotjar: Great for product and UX teams who want to bring user voice into roadmaps without heavy ops.",
    "Crazy Egg: Suited to small marketing teams looking for quick visuals and lightweight tests.",
  ],
};

const prosCons = {
  vwo: {
    pros: [
      "Unified CRO suite with testing, insights, and personalization",
      "Supports server-side, feature tests, and program management",
      "Enterprise-grade governance and reporting for experimentation programs",
    ],
    cons: [
      "Higher cost; better suited to mid-market and enterprise",
      "Steeper learning curve versus lightweight tools",
      "Requires clear experimentation processes to get full value",
    ],
  },
  hotjar: {
    pros: [
      "Best-in-class visual insights with heatmaps and recordings",
      "Easy to deploy with generous templates for surveys and feedback",
      "Affordable and approachable for product and UX teams",
    ],
    cons: [
      "No A/B testing or experimentation engine",
      "Session sampling limits on lower tiers",
      "Less suited to formal CRO programs without a separate testing tool",
    ],
  },
  "crazy egg": {
    pros: [
      "Budget-friendly entry point for heatmaps and simple tests",
      "Straightforward setup and minimal configuration",
      "Confetti and scroll maps are easy for stakeholders to interpret",
    ],
    cons: [
      "Limited targeting and segmentation options versus VWO",
      "Testing capabilities are basic for sophisticated CRO programs",
      "Fewer collaboration and workflow features for larger teams",
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
      : lowered.includes("crazy")
      ? "crazy egg"
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

export default function VwoVsHotjarVsCrazyEggPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`VWO vs Hotjar vs Crazy Egg – Comparison (${YEAR})`}
        description="Compare VWO, Hotjar, and Crazy Egg for experimentation, qualitative research, pricing, and how to build the right CRO stack."
        canonical={canonical}
        keywords={`${primaryKeyword}, cro comparison, vwo vs hotjar, hotjar vs crazy egg`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-fuchsia-700">
          CRO platforms
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          VWO vs Hotjar vs Crazy Egg ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          <strong>VWO</strong> is the experimentation engine, while{" "}
          <strong>Hotjar</strong> and <strong>Crazy Egg</strong> specialise in qualitative insight.
          This guide shows how they fit together so you can build the right CRO stack.
        </p>

        {/* Quick verdict row */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="space-y-3 rounded-3xl bg-fuchsia-50/90 p-6 ring-1 ring-fuchsia-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-fuchsia-800">
              <Sparkles className="h-5 w-5" /> Quick Verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>VWO</strong> when you need a structured experimentation platform across
              web and product. Choose <strong>Hotjar</strong> for qualitative discovery, user
              feedback, and product research. Choose <strong>Crazy Egg</strong> when you want
              inexpensive heatmaps and simple A/B tests for landing pages.
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
              <Thermometer className="h-5 w-5 text-fuchsia-700" /> Best for research
            </div>
            <p className="text-sm text-slate-700">
              <strong>Hotjar</strong> wins when your primary goal is{" "}
              <strong>understanding users and their behaviour</strong> before you scale testing.
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
                  <th className="px-4 py-3">Crazy Egg</th>
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
                    <td className="px-4 py-3 text-slate-700">{row["crazy egg"]}</td>
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
                  <th className="px-4 py-3">Crazy Egg</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const vwoScore = row.scores.vwo;
                  const hotjarScore = row.scores.hotjar;
                  const crazyEggScore = row.scores["crazy egg"];
                  const winnerValue = Math.max(vwoScore, hotjarScore, crazyEggScore);
                  const winner =
                    winnerValue === vwoScore
                      ? "VWO"
                      : winnerValue === hotjarScore
                      ? "Hotjar"
                      : "Crazy Egg";

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
                          winner === "Crazy Egg" ? "font-semibold text-blue-800" : "text-slate-700"
                        }`}
                      >
                        {crazyEggScore}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">{winner}</td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-fuchsia-50 via-red-50 to-blue-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-fuchsia-800">
                    {averages.vwo}
                  </td>
                  <td className="px-4 py-3 font-semibold text-red-800">
                    {averages.hotjar}
                  </td>
                  <td className="px-4 py-3 font-semibold text-blue-800">
                    {averages["crazy egg"]}
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
              <Gauge className="h-5 w-5 text-fuchsia-700" /> Experimentation
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.experimentation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Thermometer className="h-5 w-5 text-red-600" /> Insights & research
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.insights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Layers className="h-5 w-5 text-blue-700" /> Operations & team fit
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
            Pricing for all three tools changes frequently and is often influenced by traffic volume,
            sessions, and contracts. Always confirm current tiers and limits directly on each
            vendor&apos;s pricing page before you commit.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>VWO:</strong> Feels like an{" "}
              <strong>experimentation control centre</strong>. Best when you have owners for CRO,
              dev support, and a roadmap for tests.
            </li>
            <li>
              <strong>Hotjar:</strong> Optimised for{" "}
              <strong>UX research and product discovery</strong>. PMs and designers can use it with
              minimal engineering help.
            </li>
            <li>
              <strong>Crazy Egg:</strong> Lightweight and{" "}
              <strong>marketing-friendly</strong>. Marketers can spin up heatmaps and simple tests
              with little overhead.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use cases & stack patterns</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Formal CRO program (experiments every sprint):</strong> VWO is the primary
              experimentation engine; Hotjar is often layered on for deeper qualitative research.
            </li>
            <li>
              <strong>Early-stage SaaS validating UX:</strong> Hotjar alone is often enough at the
              start; add VWO once you have the traffic and team to run tests.
            </li>
            <li>
              <strong>Landing page and funnel optimisation for campaigns:</strong> Crazy Egg is a
              good low-friction choice; VWO comes in when you want more advanced targeting and
              experiment types.
            </li>
            <li>
              <strong>Budget-conscious teams:</strong> Start with Hotjar or Crazy Egg for insight
              and simple tests, then upgrade into VWO when experimentation becomes a core motion.
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
                Best when you want a <strong>central experimentation platform</strong> across your
                website and product with strong governance.
              </p>
              <p className="mt-2 text-sm font-semibold text-fuchsia-700">
                Ideal for: CRO teams, experimentation squads, and data-driven marketing leaders.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Hotjar</h3>
              <p className="text-sm text-slate-700">
                Best when you need <strong>rich qualitative insight</strong> to understand user
                behaviour and prioritise what to test.
              </p>
              <p className="mt-2 text-sm font-semibold text-red-700">
                Ideal for: Product managers, UX researchers, and discovery-focused teams.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Crazy Egg</h3>
              <p className="text-sm text-slate-700">
                Best for <strong>small teams</strong> that want quick visual proof and basic A/B
                tests without committing to a larger platform.
              </p>
              <p className="mt-2 text-sm font-semibold text-blue-700">
                Ideal for: Marketers and SMBs optimising key landing pages and funnels.
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
