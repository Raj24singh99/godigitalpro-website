import React from "react";
import { Sparkles, Gauge, Layers, Zap, Crown, ArrowLeft, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "voluum vs redtrack vs clickmagick";
const canonical = buildCanonical("/tools/compare/voluum-vs-redtrack-vs-clickmagick");

const brandMeta = {
  voluum: {
    gradient: "from-purple-500 via-blue-500 to-indigo-600",
    badge: "bg-purple-100 text-purple-900",
    logo: "https://logo.clearbit.com/voluum.com",
  },
  redtrack: {
    gradient: "from-rose-500 via-red-500 to-orange-500",
    badge: "bg-rose-100 text-rose-900",
    logo: "https://logo.clearbit.com/redtrack.io",
  },
  clickmagick: {
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/clickmagick.com",
  },
};

const contenders = [
  {
    key: "voluum",
    name: "Voluum",
    blurb: "Enterprise-grade tracker with automation, AI routing, and agency tooling.",
    url: "https://voluum.com",
  },
  {
    key: "redtrack",
    name: "RedTrack",
    blurb: "Affordable, automation-driven tracker with BI exports and ecommerce integrations.",
    url: "https://redtrack.io",
  },
  {
    key: "clickmagick",
    name: "ClickMagick",
    blurb: "Budget-friendly click tracker with funnels, link cloaking, and attribution.",
    url: "https://www.clickmagick.com",
  },
];

const comparisonRows = [
  {
    label: "Primary use case",
    voluum: "High-volume affiliates, agencies, and ad networks",
    redtrack: "Mid-market media buyers needing automation and cost sync",
    clickmagick: "Solo affiliates, info-product funnels, and small teams",
  },
  {
    label: "Automation",
    voluum: "Advanced rule-based automation + traffic distribution AI",
    redtrack: "Automation rules, cost sync, alerts, and budget caps",
    clickmagick: "Basic alerts, link rotators, and split testing",
  },
  {
    label: "Reporting",
    voluum: "Real-time dashboards, multi-touch metrics, and granular drilldowns",
    redtrack: "Customisable widgets, BI-ready exports, and cohort views",
    clickmagick: "Funnel tracking, light attribution reports, and simple views",
  },
  {
    label: "Integrations",
    voluum: "Hundreds of templates, custom tracking domains, and API",
    redtrack: "Ad network cost sync plus Shopify, WooCommerce, and APIs",
    clickmagick: "Simpler webhooks, postbacks, and basic integrations",
  },
  {
    label: "Pricing feel",
    voluum: "Premium; optimised for teams where tracking is mission-critical",
    redtrack: "Mid-priced; strong value for automation at scale",
    clickmagick: "Lowest barrier; ideal for lean funnels and solopreneurs",
  },
];

const scoreboard = [
  { label: "Automation & AI", scores: { voluum: 9.5, redtrack: 8.7, clickmagick: 6.0 } },
  { label: "Ease of use", scores: { voluum: 7.8, redtrack: 8.6, clickmagick: 9.0 } },
  { label: "Reporting depth", scores: { voluum: 9.2, redtrack: 8.4, clickmagick: 7.0 } },
  { label: "Value for money", scores: { voluum: 7.2, redtrack: 8.8, clickmagick: 9.2 } },
  { label: "Agency readiness", scores: { voluum: 9.0, redtrack: 8.5, clickmagick: 6.5 } },
];

const avg = (key) =>
  (scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0) / scoreboard.length).toFixed(
    1
  );

const averages = {
  voluum: avg("voluum"),
  redtrack: avg("redtrack"),
  clickmagick: avg("clickmagick"),
};

const overallWinnerKey = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const winnerLabelMap = {
  voluum: "Voluum",
  redtrack: "RedTrack",
  clickmagick: "ClickMagick",
};

const overallWinnerLabel = winnerLabelMap[overallWinnerKey] || overallWinnerKey;

const pricingTable = [
  {
    plan: "Voluum Profit",
    monthly: "$299",
    annual: "Annual billing",
    notes: "3M events, automation rules, 6 tracking domains, and agency features.",
  },
  {
    plan: "RedTrack Advanced",
    monthly: "$149",
    annual: "$124/mo billed yearly",
    notes: "Up to 10M events, API access, automation rules, and cost sync.",
  },
  {
    plan: "ClickMagick Standard",
    monthly: "$69",
    annual: "$59/mo billed yearly",
    notes: "10 funnels, 100k clicks; ideal for lean funnels and solopreneurs.",
  },
];

const faqs = [
  {
    q: `Is Voluum better than RedTrack or ClickMagick in ${YEAR}?`,
    a: "Voluum wins for scale, automation, and agencies. RedTrack balances price with strong automation. ClickMagick is ideal for budget-conscious affiliates and smaller funnels.",
  },
  {
    q: "Does RedTrack replace Voluum?",
    a: "For many mid-market buyers, yes. It covers automation, cost sync, and ecommerce well. But agencies needing SLAs, strict governance, and maximum scale may still choose Voluum.",
  },
  {
    q: "When is ClickMagick enough?",
    a: "If you run a handful of funnels and just need reliable tracking, basic split tests, and attribution—without complex automation—ClickMagick is usually enough.",
  },
  {
    q: "Can I migrate between them?",
    a: "All three support postbacks, custom parameters, and APIs, so migrating is possible. It is still a manual project to rebuild funnels, links, and reporting.",
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
  automation: [
    "Voluum: Rule-based automation and AI traffic distribution to pause, redirect, or scale campaigns based on performance.",
    "RedTrack: Automation rules, budget caps, cost sync, and alerts tuned for busy media buyers.",
    "ClickMagick: Simple link rotators and basic alerts to keep split tests and redirects under control.",
  ],
  reporting: [
    "Voluum: Fast, granular reporting with multi-dimensional breakdowns, device/geo views, and LTV-friendly metrics.",
    "RedTrack: Custom dashboards, widgets, and BI-ready exports for agencies and performance teams.",
    "ClickMagick: Funnel and link-level reports that help validate if traffic and funnels are working.",
  ],
  operations: [
    "Voluum: Multi-user support, workspaces, and features suited to agencies and large media teams.",
    "RedTrack: Team-friendly plans with API access and ecommerce integrations for performance marketers.",
    "ClickMagick: Lightweight operations for solo buyers and small teams who want simple setup and low overhead.",
  ],
};

const prosCons = {
  voluum: {
    pros: [
      "Top-tier automation and traffic distribution AI for serious media buyers",
      "Strong agency tooling with workspaces, permissions, and SLAs on higher tiers",
      "Fast, granular reporting built for high-volume campaigns",
    ],
    cons: [
      "Higher price compared with alternatives",
      "Steeper learning curve for new buyers",
      "Overkill for small, low-budget funnels",
    ],
  },
  redtrack: {
    pros: [
      "Affordable automation and cost sync compared with Voluum",
      "Good ecommerce integrations (Shopify, WooCommerce) and APIs",
      "Balanced feature set for mid-market buyers and agencies",
    ],
    cons: [
      "UI is improving but still less polished than some enterprise tools",
      "Support and onboarding depth vary by plan",
      "Fewer AI-style routing features than Voluum",
    ],
  },
  clickmagick: {
    pros: [
      "Very affordable entry price for solo affiliates and small teams",
      "Easy-to-understand funnels, split tests, and link cloaking",
      "Simple setup with minimal technical overhead",
    ],
    cons: [
      "Limited automation and optimisation features",
      "No native multi-client workspaces for larger agencies",
      "Reporting depth is lighter than Voluum or RedTrack",
    ],
  },
};

const LogoBadge = ({ name }) => {
  const lowered = name.toLowerCase();
  const key =
    lowered.includes("voluum") || lowered === "voluum"
      ? "voluum"
      : lowered.includes("redtrack")
      ? "redtrack"
      : lowered.includes("clickmagick")
      ? "clickmagick"
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

export default function VoluumVsRedTrackVsClickMagickPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Voluum vs RedTrack vs ClickMagick – Comparison (${YEAR})`}
        description="Compare Voluum, RedTrack, and ClickMagick for performance marketing tracking across automation, reporting depth, pricing, and best-fit teams."
        canonical={canonical}
        keywords={`${primaryKeyword}, affiliate tracker comparison, performance marketing tracking tools`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-purple-700">
          Performance marketing
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Voluum vs RedTrack vs ClickMagick ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Three tracking platforms, three price points. Voluum focuses on{" "}
          <strong>enterprise-scale automation</strong>, RedTrack on{" "}
          <strong>mid-market automation and ecommerce</strong>, and ClickMagick on{" "}
          <strong>simple, affordable funnel tracking</strong>. Here is how to pick the right one for
          your stack.
        </p>

        {/* Quick verdict row */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="space-y-3 rounded-3xl bg-purple-50/90 p-6 ring-1 ring-purple-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-purple-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>Voluum</strong> if automation, routing, and agency features are
              must-haves. Choose <strong>RedTrack</strong> when you want most of that power at a
              lower price and stronger ecommerce support. Choose <strong>ClickMagick</strong> if you
              just need simple tracking and attribution for a few key funnels.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-purple-800">
              <Crown className="h-4 w-4" /> Overall scoreboard winner: {overallWinnerLabel}{" "}
              <span className="text-xs font-medium text-purple-700">
                (avg: {averages[overallWinnerKey]}/10)
              </span>
            </div>
          </div>
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Workflow className="h-5 w-5 text-purple-700" /> Automation focus
            </div>
            <p className="text-sm text-slate-700">
              <strong>Voluum</strong> and <strong>RedTrack</strong> both automate optimisation and
              routing. <strong>ClickMagick</strong> keeps things manual but very simple, which is
              often enough for lean funnels.
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
            <Layers className="h-6 w-6 text-purple-700" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Voluum</th>
                  <th className="px-4 py-3">RedTrack</th>
                  <th className="px-4 py-3">ClickMagick</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.voluum}</td>
                    <td className="px-4 py-3 text-slate-700">{row.redtrack}</td>
                    <td className="px-4 py-3 text-slate-700">{row.clickmagick}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Scoreboard */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-indigo-600" /> Scoreboard (1–10)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Voluum</th>
                  <th className="px-4 py-3">RedTrack</th>
                  <th className="px-4 py-3">ClickMagick</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const { voluum, redtrack, clickmagick } = row.scores;
                  const winnerValue = Math.max(voluum, redtrack, clickmagick);
                  const winner =
                    winnerValue === voluum
                      ? "Voluum"
                      : winnerValue === redtrack
                      ? "RedTrack"
                      : "ClickMagick";
                  return (
                    <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Voluum" ? "font-semibold text-purple-800" : "text-slate-700"
                        }`}
                      >
                        {voluum}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "RedTrack"
                            ? "font-semibold text-rose-800"
                            : "text-slate-700"
                        }`}
                      >
                        {redtrack}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "ClickMagick"
                            ? "font-semibold text-emerald-800"
                            : "text-slate-700"
                        }`}
                      >
                        {clickmagick}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">{winner}</td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-purple-50 via-rose-50 to-emerald-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-purple-800">
                    {averages.voluum}
                  </td>
                  <td className="px-4 py-3 font-semibold text-rose-800">
                    {averages.redtrack}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.clickmagick}
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
            <Zap className="h-6 w-6 text-purple-700" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Workflow className="h-5 w-5 text-purple-700" /> Automation & optimisation
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.automation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Gauge className="h-5 w-5 text-indigo-700" /> Reporting & visibility
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.reporting.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Layers className="h-5 w-5 text-emerald-700" /> Operations & team fit
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
                  <th className="px-4 py-3">Annual</th>
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
            Pricing changes frequently and depends on volume, domains, and support level. Always
            confirm current tiers, overage costs, and SLAs directly on each vendor’s pricing page
            before committing.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Voluum:</strong> Feels like an{" "}
              <strong>enterprise analytics console</strong>. Powerful but dense—best for teams
              willing to invest in setup, documentation, and standardised processes.
            </li>
            <li>
              <strong>RedTrack:</strong> Feels like a{" "}
              <strong>performance marketer&apos;s control panel</strong>. More approachable than
              Voluum, with UI focused on day-to-day buying and ecommerce tracking.
            </li>
            <li>
              <strong>ClickMagick:</strong> Feels like a{" "}
              <strong>lightweight funnel tracker</strong>. Easy to learn and deploy, ideal when you
              do not have a full-time tracking specialist.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use cases & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Large affiliates and agencies buying at scale:</strong>{" "}
              Voluum wins with automation, AI routing, and agency-ready features.
            </li>
            <li>
              <strong>Mid-market performance teams with ecommerce:</strong>{" "}
              RedTrack wins with automation, cost sync, and store integrations at a sensible price.
            </li>
            <li>
              <strong>Solo affiliates and lean funnels:</strong>{" "}
              ClickMagick wins as the lowest-friction option that still gives solid tracking and
              attribution.
            </li>
            <li>
              <strong>Teams planning to grow from solo to small agency:</strong>{" "}
              Start with ClickMagick or RedTrack, then consider Voluum once automation and
              governance become bottlenecks.
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
              <h3 className="text-lg font-semibold">Voluum</h3>
              <p className="text-sm text-slate-700">
                Best when you need <strong>serious automation and routing</strong> across many
                campaigns, offers, and traffic sources with agency-level oversight.
              </p>
              <p className="mt-2 text-sm font-semibold text-purple-700">
                Ideal for: Agencies, large affiliates, and networks where tracking uptime and
                automation directly influence revenue.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">RedTrack</h3>
              <p className="text-sm text-slate-700">
                Best for <strong>performance teams that want automation and ecommerce support</strong>{" "}
                without Voluum&apos;s price tag.
              </p>
              <p className="mt-2 text-sm font-semibold text-rose-700">
                Ideal for: Media buyers, DTC brands, and small agencies tracking multiple stores and
                offers.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">ClickMagick</h3>
              <p className="text-sm text-slate-700">
                Best when you need <strong>simple, reliable tracking</strong> for a few funnels and
                want to keep costs and complexity low.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: Solo affiliates, coaches, and info-product sellers with lean setups.
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
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-purple-700 ring-1 ring-purple-100 hover:bg-purple-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
