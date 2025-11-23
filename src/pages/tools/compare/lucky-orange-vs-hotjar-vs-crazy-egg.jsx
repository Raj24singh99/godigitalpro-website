import React from "react";
import { Sparkles, Crown, Layers, BarChart3, ArrowLeft, Gauge, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "lucky orange vs hotjar vs crazy egg";
const canonical = buildCanonical("/tools/compare/lucky-orange-vs-hotjar-vs-crazy-egg");

const brandMeta = {
  lucky_orange: {
    gradient: "from-amber-500 via-orange-500 to-slate-900",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/luckyorange.com",
  },
  hotjar: {
    gradient: "from-red-500 via-rose-500 to-orange-400",
    badge: "bg-red-100 text-red-900",
    logo: "https://logo.clearbit.com/hotjar.com",
  },
  crazy_egg: {
    gradient: "from-sky-500 via-cyan-500 to-emerald-500",
    badge: "bg-sky-100 text-sky-900",
    logo: "https://logo.clearbit.com/crazyegg.com",
  },
};

const contenders = [
  {
    key: "lucky_orange",
    name: "Lucky Orange",
    blurb: "Behavior analytics with session replays, heatmaps, live chat, and surveys.",
    url: "https://www.luckyorange.com/",
    slug: "lucky-orange",
  },
  {
    key: "hotjar",
    name: "Hotjar",
    blurb: "Product experience insights with world-class heatmaps, replays, and feedback.",
    url: "https://www.hotjar.com/",
    slug: "hotjar",
  },
  {
    key: "crazy_egg",
    name: "Crazy Egg",
    blurb: "Budget-friendly heatmaps, scroll maps, and lightweight A/B tests.",
    url: "https://www.crazyegg.com/",
    slug: "crazy-egg",
  },
];

const comparisonRows = [
  {
    label: "Primary use case",
    lucky_orange: "Behavior analytics + live chat for CRO and support teams",
    hotjar: "Product discovery and UX research via replays and surveys",
    crazy_egg: "Quick heatmaps and scroll maps for visualizing clicks",
  },
  {
    label: "Session recordings",
    lucky_orange: "Robust recordings with filters and live view",
    hotjar: "Polished replays with UX-friendly filters and segments",
    crazy_egg: "Core recordings oriented around page views",
  },
  {
    label: "Heatmaps & scroll tracking",
    lucky_orange: "Click, scroll, and movement maps bundled with funnels",
    hotjar: "Best-in-class heatmaps with device segmentation",
    crazy_egg: "Click, scroll, confetti maps focused on simplicity",
  },
  {
    label: "Testing / experiments",
    lucky_orange: "No native A/B testing (pair with an experiment tool)",
    hotjar: "No testing—insights and feedback only",
    crazy_egg: "Built-in page-level A/B tests and simple variants",
  },
  {
    label: "Surveys & feedback",
    lucky_orange: "Surveys, announcements, and live chat together",
    hotjar: "Surveys, feedback widgets, and interviews (Engage)",
    crazy_egg: "Lightweight surveys and notes; chat not included",
  },
  {
    label: "Pricing feel",
    lucky_orange: "Traffic-based with generous inclusions for SMBs",
    hotjar: "Free tier + affordable tiers that scale with sessions",
    crazy_egg: "Lowest entry pricing; strong for small to mid sites",
  },
  {
    label: "Best for",
    lucky_orange: "Teams wanting recordings + chat + surveys in one",
    hotjar: "Product managers and UX researchers prioritizing insight depth",
    crazy_egg: "Owners who want quick visual proof without heavy setup",
  },
];

const scoreboard = [
  { label: "Qual insights", lucky_orange: 8.8, hotjar: 9.6, crazy_egg: 7.5 },
  { label: "Testing & experiments", lucky_orange: 7.2, hotjar: 4.5, crazy_egg: 6.0 },
  { label: "Ease of setup", lucky_orange: 8.7, hotjar: 9.0, crazy_egg: 8.9 },
  { label: "Collaboration & reporting", lucky_orange: 8.0, hotjar: 9.1, crazy_egg: 7.0 },
  { label: "Value for money", lucky_orange: 8.6, hotjar: 8.0, crazy_egg: 9.2 },
];

const avg = (tool) =>
  (scoreboard.reduce((sum, row) => sum + (row[tool] || 0), 0) / scoreboard.length).toFixed(1);

const averages = {
  lucky_orange: avg("lucky_orange"),
  hotjar: avg("hotjar"),
  crazy_egg: avg("crazy_egg"),
};

const overallWinner =
  Math.max(averages.lucky_orange, averages.hotjar, averages.crazy_egg) ===
  parseFloat(averages.lucky_orange)
    ? "Lucky Orange"
    : Math.max(averages.hotjar, averages.crazy_egg) === parseFloat(averages.hotjar)
    ? "Hotjar"
    : "Crazy Egg";

const pricingTable = [
  {
    plan: "Lucky Orange Core (starter tiers)",
    monthly: "From around ~$32/mo",
    annual: "Discounted when billed annually",
    limits: "Traffic/session quotas, recordings, heatmaps, live chat",
    notes: "Great SMB value if you want chat + surveys in one bundle.",
  },
  {
    plan: "Hotjar Plus / Business",
    monthly: "Plus from ~$39/mo; Business scales with traffic",
    annual: "Lower effective rate on annual",
    limits: "Daily session caps per tier across heatmaps and replays",
    notes: "Best for teams that prioritise polished insights and surveys.",
  },
  {
    plan: "Crazy Egg Standard",
    monthly: "From ~$29/mo",
    annual: "~$24/mo with annual billing",
    limits: "Pageview quotas, limited A/B test variants on lower tiers",
    notes: "Budget-friendly entry for heatmaps and simple testing.",
  },
];

const featureBullets = {
  analytics: [
    "Lucky Orange: Session replays, funnels, form analytics, live view, and live chat in a single dashboard.",
    "Hotjar: Industry-leading heatmaps, funnels, replays, surveys, and product-experience feedback tools.",
    "Crazy Egg: Click, scroll, and confetti maps that quickly show what visitors touch, plus basic recordings.",
  ],
  testing: [
    "Lucky Orange: No native experimentation; often paired with VWO/Optimizely/Google Optimize alternatives.",
    "Hotjar: Focused entirely on insight and research—use a testing platform alongside it.",
    "Crazy Egg: Built-in A/B tests for page variants so you can validate changes without another tool.",
  ],
  support: [
    "Lucky Orange: Live chat baked in, useful for uncovering friction in the moment.",
    "Hotjar: Strong onboarding, templates, and interview booking (Engage) for structured research.",
    "Crazy Egg: Lightweight setup with quick installs; fewer enterprise governance needs.",
  ],
};

const prosCons = {
  lucky_orange: {
    pros: [
      "All-in-one bundle with recordings, heatmaps, funnels, surveys, and live chat",
      "Strong value for SMB traffic volumes and CRO support teams",
      "Real-time features (live view/chat) help catch issues quickly",
    ],
    cons: [
      "No native experimentation—needs a testing partner",
      "Data sampling and quotas can require upgrades as traffic grows",
      "UI is improving but less research-polished than Hotjar",
    ],
  },
  hotjar: {
    pros: [
      "Excellent heatmaps and replays with intuitive segmentation",
      "Feedback tools, surveys, and interviews (Engage) in one research workflow",
      "Easy setup with good templates for PMs and UX researchers",
    ],
    cons: [
      "No A/B testing; must integrate with a testing platform",
      "Session caps on lower tiers mean sampling at scale",
      "Enterprise governance (SSO, roles) sits on higher plans",
    ],
  },
  crazy_egg: {
    pros: [
      "Lowest price point of the three with generous trials",
      "Built-in A/B testing for page variants",
      "Simple heatmap visualisations that teams grasp quickly",
    ],
    cons: [
      "Limited targeting and segmentation versus Hotjar/Lucky Orange",
      "Fewer collaboration/reporting features for larger teams",
      "Recordings and tests are basic compared to full CRO suites",
    ],
  },
};

const faqs = [
  {
    q: `Who wins overall in ${YEAR}?`,
    a: "Hotjar wins for polished qualitative insights. Lucky Orange wins if you want recordings, chat, and surveys together. Crazy Egg wins on budget and simple heatmaps with built-in A/B testing.",
  },
  {
    q: "Do any of them include A/B testing?",
    a: "Crazy Egg includes simple page-level A/B testing. Lucky Orange and Hotjar focus on insights and feedback, so you should pair them with a dedicated experimentation tool.",
  },
  {
    q: "Which is best for SaaS or product teams?",
    a: "Hotjar is the most research-friendly with strong surveys and filters. Lucky Orange is close if you want support-style chat alongside recordings.",
  },
  {
    q: "Which is best for ecommerce?",
    a: "Lucky Orange is great for catching funnel drop-off with live view and chat. Crazy Egg is solid if you mainly want quick heatmaps and budget-friendly testing.",
  },
  {
    q: "How do the free/low tiers compare?",
    a: "Hotjar has a generous free tier for light insights. Lucky Orange offers affordable starter quotas with recordings and chat. Crazy Egg has trials and low-cost entry for small sites.",
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

const LogoBadge = ({ name }) => {
  const lowered = name.toLowerCase();
  const key = lowered.includes("lucky")
    ? "lucky_orange"
    : lowered.includes("hotjar")
    ? "hotjar"
    : lowered.includes("crazy")
    ? "crazy_egg"
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
          <span className="text-sm font-bold text-white">{name.slice(0, 2).toUpperCase()}</span>
        )}
      </div>
      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${meta.badge}`}>{name}</span>
    </div>
  );
};

export default function LuckyOrangeVsHotjarVsCrazyEggPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Lucky Orange vs Hotjar vs Crazy Egg (${YEAR}) – Behavior analytics comparison`}
        description="Compare Lucky Orange, Hotjar, and Crazy Egg for heatmaps, session recordings, feedback, pricing, and the right CRO analytics stack."
        canonical={canonical}
        keywords={`${primaryKeyword}, heatmap tools, behavior analytics comparison, session recordings`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">Behavior analytics</p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Lucky Orange vs Hotjar vs Crazy Egg ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Hotjar delivers the most polished qualitative insights. Lucky Orange bundles recordings,
          heatmaps, chat, and surveys in one. Crazy Egg is the budget-friendly heatmap and testing
          pick. Here’s a structured breakdown to choose the right analytics stack.
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
              <p className="relative mt-3 text-sm font-medium text-white/90">{item.blurb}</p>
            </a>
          ))}
        </div>

        {/* Quick verdict + overall winner */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-amber-100 bg-amber-50 px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-amber-900">
              <Sparkles className="h-5 w-5" />
              <p className="text-lg font-semibold">Quick verdict</p>
            </div>
            <p className="mt-2 text-slate-800">
              Choose <strong>Lucky Orange</strong> if you need recordings, chat, and surveys together
              to spot friction in real time. Pick <strong>Hotjar</strong> for the most polished
              research workflows and stakeholder-ready visuals. Go with <strong>Crazy Egg</strong> if
              you want affordable heatmaps and simple built-in A/B tests.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Crown className="h-4 w-4 text-amber-600" /> Overall scoreboard winner: {overallWinner}{" "}
              <span className="text-xs text-slate-600">
                (avg:{" "}
                {overallWinner === "Lucky Orange"
                  ? averages.lucky_orange
                  : overallWinner === "Hotjar"
                  ? averages.hotjar
                  : averages.crazy_egg}
                /10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              Pick based on whether you prioritise research polish, all-in-one coverage, or lowest
              budget with heatmaps and testing.
            </p>
          </div>
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-amber-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Lucky Orange</th>
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
                    <td className="px-4 py-3 text-slate-700">{row.lucky_orange}</td>
                    <td className="px-4 py-3 text-slate-700">{row.hotjar}</td>
                    <td className="px-4 py-3 text-slate-700">{row.crazy_egg}</td>
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
                  <th className="px-4 py-3">Lucky Orange</th>
                  <th className="px-4 py-3">Hotjar</th>
                  <th className="px-4 py-3">Crazy Egg</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const winnerValue = Math.max(row.lucky_orange, row.hotjar, row.crazy_egg);
                  const winner =
                    winnerValue === row.lucky_orange
                      ? "Lucky Orange"
                      : winnerValue === row.hotjar
                      ? "Hotjar"
                      : "Crazy Egg";
                  return (
                    <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Lucky Orange"
                            ? "font-semibold text-amber-800"
                            : "text-slate-700"
                        }`}
                      >
                        {row.lucky_orange}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Hotjar" ? "font-semibold text-rose-700" : "text-slate-700"
                        }`}
                      >
                        {row.hotjar}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Crazy Egg" ? "font-semibold text-sky-800" : "text-slate-700"
                        }`}
                      >
                        {row.crazy_egg}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">{winner}</td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-amber-50 via-rose-50 to-sky-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">Average (winner overall)</th>
                  <td className="px-4 py-3 font-semibold text-amber-800">{averages.lucky_orange}</td>
                  <td className="px-4 py-3 font-semibold text-rose-800">{averages.hotjar}</td>
                  <td className="px-4 py-3 font-semibold text-sky-800">{averages.crazy_egg}</td>
                  <td className="px-4 py-3 font-bold text-slate-900">{overallWinner}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Feature comparison */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-amber-600" /> Feature Comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Zap className="h-5 w-5 text-amber-600" /> Behavior analytics & insights
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.analytics.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Shield className="h-5 w-5 text-sky-600" /> Testing & validation
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.testing.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Layers className="h-5 w-5 text-emerald-600" /> Collaboration & support
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.support.map((item) => (
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
            Pricing changes frequently and depends on traffic, session caps, and promos. Always
            confirm current limits directly on each vendor’s pricing page before committing.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User Experience & Learning Curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Lucky Orange:</strong> Feels like a CRO dashboard—recordings, heatmaps, funnels,
              and chat in one place for fast debugging.
            </li>
            <li>
              <strong>Hotjar:</strong> Very polished UX for research with clear filters, highlights,
              and survey templates that PMs can ship quickly.
            </li>
            <li>
              <strong>Crazy Egg:</strong> Minimal setup; best if you want quick visual validation and
              occasional tests without complex governance.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-World Use-Cases & Winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>SaaS/product teams needing research depth:</strong> Hotjar wins with polished
              replays, surveys, and Engage interviews.
            </li>
            <li>
              <strong>Ecommerce and CRO squads fixing friction fast:</strong> Lucky Orange wins with
              live view, chat, and funnels to triage drop-offs.
            </li>
            <li>
              <strong>Owners on a budget wanting quick visuals + A/B tests:</strong> Crazy Egg wins
              as the lowest-cost option with built-in page testing.
            </li>
            <li>
              <strong>Teams pairing insights with experimentation suites:</strong> Use Hotjar or
              Lucky Orange for insights, then VWO/Optimizely/Convert for tests.
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
              <h3 className="text-lg font-semibold">Lucky Orange</h3>
              <p className="text-sm text-slate-700">
                Best when you need recordings, chat, surveys, and funnels together to spot and fix
                friction quickly.
              </p>
              <p className="mt-2 text-sm font-semibold text-amber-700">
                Ideal for: Ecommerce CRO squads, support-informed product teams, agencies.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Hotjar</h3>
              <p className="text-sm text-slate-700">
                Best for UX research depth with polished recordings, heatmaps, surveys, and
                interviews that PMs can share easily.
              </p>
              <p className="mt-2 text-sm font-semibold text-rose-700">
                Ideal for: SaaS product teams, UX researchers, startups validating new flows.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Crazy Egg</h3>
              <p className="text-sm text-slate-700">
                Best for simple heatmaps and scroll maps with inexpensive A/B tests when budgets are
                tight.
              </p>
              <p className="mt-2 text-sm font-semibold text-sky-700">
                Ideal for: Small businesses, content sites, and teams wanting quick visual proof.
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
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-amber-700 ring-1 ring-amber-100 hover:bg-amber-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
