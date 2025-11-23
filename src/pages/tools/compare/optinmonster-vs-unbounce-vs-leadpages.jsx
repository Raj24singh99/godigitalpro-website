import React from "react";
import {
  Sparkles,
  ShieldCheck,
  Layers,
  Crown,
  ArrowLeft,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "optinmonster vs unbounce vs leadpages";
const canonical = buildCanonical(
  "/tools/compare/optinmonster-vs-unbounce-vs-leadpages"
);

const brandMeta = {
  optinmonster: {
    gradient: "from-lime-500 via-emerald-500 to-sky-500",
    badge: "bg-lime-100 text-lime-900",
    logo: "https://logo.clearbit.com/optinmonster.com",
  },
  unbounce: {
    gradient: "from-indigo-500 via-blue-500 to-violet-500",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/unbounce.com",
  },
  leadpages: {
    gradient: "from-sky-500 via-blue-500 to-cyan-500",
    badge: "bg-sky-100 text-sky-900",
    logo: "https://logo.clearbit.com/leadpages.com",
  },
};

const contenders = [
  {
    key: "optinmonster",
    name: "OptinMonster",
    blurb: "Onsite overlays, exit-intent popups, and advanced targeting.",
    url: "https://optinmonster.com",
  },
  {
    key: "unbounce",
    name: "Unbounce",
    blurb: "Landing page builder with testing and Smart Traffic routing.",
    url: "https://unbounce.com",
  },
  {
    key: "leadpages",
    name: "Leadpages",
    blurb: "Affordable landing pages and simple sites for lead gen.",
    url: "https://www.leadpages.com",
  },
];

const comparisonRows = [
  {
    label: "Best for",
    optinmonster: "Onsite overlays and popups layered on existing pages.",
    unbounce: "High-converting landing pages, especially for paid traffic.",
    leadpages: "Budget-friendly landing pages and simple marketing sites.",
  },
  {
    label: "Core focus",
    optinmonster: "Behavioral popups, slide-ins, and targeting rules.",
    unbounce: "Landing pages, Smart Traffic, and conversion testing.",
    leadpages: "Landing pages, basic sites, and simple opt-in forms.",
  },
  {
    label: "Testing",
    optinmonster: "A/B testing on overlays and offers.",
    unbounce: "A/B testing plus Smart Traffic auto-routing to winners.",
    leadpages: "A/B testing on pages; lighter than Unbounce.",
  },
  {
    label: "Integrations",
    optinmonster: "Wide ESP/CRM support and webhooks for lead sync.",
    unbounce: "Major ESP/CRMs, scripts, and custom integrations.",
    leadpages: "Integrates with most mainstream ESP/CRMs.",
  },
  {
    label: "Pricing (directional)",
    optinmonster: "From ~US$9/mo (annual) for basic plans.",
    unbounce: "From ~US$99/mo with limits on traffic and domains.",
    leadpages: "From ~US$37/mo; solid value vs Unbounce.",
  },
];

const scoreboard = [
  {
    label: "Onsite targeting",
    scores: { optinmonster: 9.3, unbounce: 7.7, leadpages: 7.5 },
  },
  {
    label: "Landing page depth",
    scores: { optinmonster: 6.5, unbounce: 9.4, leadpages: 8.2 },
  },
  {
    label: "Ease of use",
    scores: { optinmonster: 8.6, unbounce: 8.0, leadpages: 8.5 },
  },
  {
    label: "Value for money",
    scores: { optinmonster: 8.9, unbounce: 7.2, leadpages: 8.7 },
  },
  {
    label: "Ecommerce fit",
    scores: { optinmonster: 9.0, unbounce: 8.4, leadpages: 8.0 },
  },
];

const avg = (key) =>
  (
    scoreboard.reduce(
      (sum, row) => sum + (row.scores[key] || 0),
      0
    ) / scoreboard.length
  ).toFixed(1);

const averages = {
  optinmonster: avg("optinmonster"),
  unbounce: avg("unbounce"),
  leadpages: avg("leadpages"),
};

const winnerKey = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const formatToolName = (key) => {
  if (key === "optinmonster") return "OptinMonster";
  if (key === "unbounce") return "Unbounce";
  if (key === "leadpages") return "Leadpages";
  return key.charAt(0).toUpperCase() + key.slice(1);
};

const overallWinner = formatToolName(winnerKey);

const pricingTable = [
  {
    plan: "OptinMonster",
    monthly: "From around ~US$9/mo (billed annually)",
    annual: "Higher tiers increase sites, pageviews, and campaign types",
    limits:
      "Pageview limits, number of sites, campaign types, and features vary by plan",
    notes: "Treat as an overlay/CRO layer on top of your existing site or landing pages.",
  },
  {
    plan: "Unbounce",
    monthly: "From around ~US$99/mo",
    annual: "Discounts for annual billing and higher-tier plans",
    limits:
      "Traffic, conversions, and domain limits; more features on higher tiers",
    notes: "Best fit if paid traffic performance is critical and you need robust testing.",
  },
  {
    plan: "Leadpages",
    monthly: "From around ~US$37/mo",
    annual: "Lower effective monthly price on annual plans",
    limits:
      "Number of sites, pages, and features depend on plan tier",
    notes: "Strong value when you need solid pages and sites without Unbounce-level cost.",
  },
];

const featureBullets = {
  stack: [
    "OptinMonster: Adds high-intent overlays on top of any existing site or page builder.",
    "Unbounce: Often used as the dedicated landing page layer for paid search and paid social.",
    "Leadpages: Can act as both landing page builder and simple marketing site for small teams.",
  ],
  testing: [
    "OptinMonster: A/B tests different popups, triggers, and offers to improve conversions.",
    "Unbounce: Full A/B tests plus Smart Traffic that automatically routes visitors to the best-performing variant.",
    "Leadpages: Page-level A/B testing, simpler than Unbounce but enough for many small businesses.",
  ],
  ecommerce: [
    "OptinMonster: Strong fit for exit-intent cart recovery, discount overlays, and list growth on stores.",
    "Unbounce: Great for campaign-specific product or category landing pages with experiments.",
    "Leadpages: Works well for lead gen and pre-sale pages; ecommerce features rely on your cart/payment stack.",
  ],
};

const prosCons = {
  optinmonster: {
    pros: [
      "Best-in-class overlay and popup targeting for blogs, content sites, and ecommerce stores",
      "Works alongside any page builder or CMS; easy to add to existing sites",
      "Robust triggers including exit-intent, scroll depth, and device-level rules",
    ],
    cons: [
      "Does not build full landing pages; you still need a site or page builder",
      "Another subscription in your stack if you only need basic popups",
      "Requires a clear popup strategy to avoid harming user experience",
    ],
  },
  unbounce: {
    pros: [
      "Very flexible landing page builder with advanced layout control",
      "Smart Traffic and testing tools tuned for performance marketers",
      "Strong fit with paid media teams that iterate quickly on pages",
    ],
    cons: [
      "Higher base pricing than many SMB-oriented page tools",
      "Overkill if you just need a few simple pages without heavy testing",
      "Still benefits from an additional overlay tool if you want deep onsite popups",
    ],
  },
  leadpages: {
    pros: [
      "More affordable than Unbounce while still offering solid templates",
      "Can host simple websites and landing pages under one subscription",
      "Easy for non-technical teams and solo marketers to get pages live quickly",
    ],
    cons: [
      "Less advanced testing and optimization compared to Unbounce",
      "Design and customization depth are slightly more constrained",
      "You may still want a separate popup/overlay tool for advanced targeting",
    ],
  },
};

const faqs = [
  {
    q: `Which should I pick in ${YEAR}?`,
    a: "Choose OptinMonster if onsite popups and overlays are your primary lever, Unbounce if you need premium landing pages and serious testing, and Leadpages if you want budget-friendly landing pages and simple sites.",
  },
  {
    q: "Can I use OptinMonster with Unbounce or Leadpages?",
    a: "Yes. A common stack is Unbounce or Leadpages for landing pages plus OptinMonster for overlays and exit-intent campaigns layered on top.",
  },
  {
    q: "Which is best for ecommerce?",
    a: "OptinMonster is usually the best first choice for ecommerce because it handles exit-intent, cart recovery offers, and list capture on existing product and cart pages.",
  },
  {
    q: "Do Unbounce or Leadpages replace OptinMonster?",
    a: "Not exactly. They can host pages and basic popups, but OptinMonster’s strength is deeper targeting, triggers, and overlay testing across your entire site.",
  },
  {
    q: "Is Unbounce worth the higher price over Leadpages?",
    a: "If you run meaningful paid traffic and rely on testing and Smart Traffic to squeeze out extra performance, Unbounce can justify its cost. For lighter use and smaller budgets, Leadpages is often sufficient.",
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

export default function OptinMonsterVsUnbounceVsLeadpagesPage() {
  const overallAvg = averages[winnerKey];

  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`OptinMonster vs Unbounce vs Leadpages – conversion toolkit compared (${YEAR})`}
        description="Compare OptinMonster, Unbounce, and Leadpages on overlays, landing pages, testing, pricing, and ecommerce fit to pick the right conversion stack."
        canonical={canonical}
        keywords={`${primaryKeyword}, conversion rate optimization comparison, landing page vs popup`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Hero */}
        <p className="text-sm font-semibold uppercase tracking-wide text-lime-700">
          Conversion tools
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          OptinMonster vs Unbounce vs Leadpages ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          OptinMonster owns overlays and popups, Unbounce specializes in premium
          landing pages and Smart Traffic, and Leadpages offers budget-friendly
          pages and simple sites. Here is how they compare when you are
          building a conversion stack.
        </p>

        {/* Contender cards */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {contenders.map((tool) => (
            <a
              key={tool.key}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative block overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br ${
                brandMeta[tool.key]?.gradient || "from-slate-500 to-slate-700"
              } p-5 shadow-sm`}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white" />
                <div className="pointer-events-none absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-white" />
              </div>
              <div className="relative flex items-center justify-between gap-2">
                <LogoBadge name={tool.name} />
                <Sparkles className="h-5 w-5 text-white/80" />
              </div>
              <p className="relative mt-3 text-sm font-medium text-white/90">
                {tool.blurb}
              </p>
            </a>
          ))}
        </div>

        {/* Quick verdict + top pick */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="space-y-3 rounded-3xl bg-lime-50/90 p-6 ring-1 ring-lime-100">
            <div className="flex items-center gap-2 text-lg font-semibold text-lime-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Use <strong>OptinMonster</strong> when your big lever is onsite
              overlays and exit-intent. Choose <strong>Unbounce</strong> if you
              run serious paid campaigns and need high-velocity landing page
              testing. Choose <strong>Leadpages</strong> when you want solid
              landing pages and simple sites at a friendlier price point.
            </p>
            <p className="text-sm text-slate-700">
              In many stacks, OptinMonster sits on top of either Unbounce- or
              Leadpages-built pages to maximize conversions.
            </p>
          </div>
          <div className="rounded-3xl border border-lime-100 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-lime-700">
              <Crown className="h-4 w-4" />
              <p className="text-sm font-semibold uppercase tracking-wide">
                Overall scoreboard winner
              </p>
            </div>
            <h3 className="mt-2 text-xl font-bold text-slate-900">
              {overallWinner}
            </h3>
            <p className="mt-1 text-sm text-slate-700">
              Average score: {overallAvg}/10
            </p>
            <p className="mt-2 text-sm text-slate-700">
              The “winner” depends on your primary conversion surface: overlays
              (OptinMonster), landing page experimentation (Unbounce), or
              cost-effective pages and sites (Leadpages).
            </p>
          </div>
        </div>

        {/* Best for panel */}
        <div className="mt-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <div className="text-sm font-semibold text-slate-900">Best for</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <ShieldCheck className="mt-0.5 h-4 w-4 text-lime-600" />
              <span>
                <strong>OptinMonster:</strong> blogs, content sites, and
                ecommerce brands optimizing overlays and exit-intent campaigns
                on existing pages.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Layers className="mt-0.5 h-4 w-4 text-indigo-600" />
              <span>
                <strong>Unbounce:</strong> performance-driven landing pages for
                paid search, paid social, and high-velocity A/B tests.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <ShieldCheck className="mt-0.5 h-4 w-4 text-sky-600" />
              <span>
                <strong>Leadpages:</strong> small businesses and solo marketers
                who need reliable landing pages and simple sites on a budget.
              </span>
            </li>
          </ul>
        </div>

        {/* Side-by-side comparison table */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-lime-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm text-slate-800 md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">OptinMonster</th>
                  <th className="px-4 py-3">Unbounce</th>
                  <th className="px-4 py-3">Leadpages</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr
                    key={row.label}
                    className="align-top odd:bg-white even:bg-slate-50/60"
                  >
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-900">
                      {row.label}
                    </th>
                    <td className="px-4 py-3">{row.optinmonster}</td>
                    <td className="px-4 py-3">{row.unbounce}</td>
                    <td className="px-4 py-3">{row.leadpages}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Scoreboard with per-dimension winner */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <BarChart3 className="h-6 w-6 text-indigo-600" /> Scoreboard (1–10)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm text-slate-800 md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">OptinMonster</th>
                  <th className="px-4 py-3">Unbounce</th>
                  <th className="px-4 py-3">Leadpages</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const { optinmonster, unbounce, leadpages } = row.scores;
                  const maxScore = Math.max(
                    optinmonster,
                    unbounce,
                    leadpages
                  );
                  const winner =
                    maxScore === optinmonster
                      ? "OptinMonster"
                      : maxScore === unbounce
                      ? "Unbounce"
                      : "Leadpages";

                  return (
                    <tr
                      key={row.label}
                      className="align-top odd:bg-white even:bg-slate-50/60"
                    >
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-900">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winner === "OptinMonster"
                            ? "font-semibold text-lime-800"
                            : "text-slate-800"
                        }`}
                      >
                        {optinmonster}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Unbounce"
                            ? "font-semibold text-indigo-800"
                            : "text-slate-800"
                        }`}
                      >
                        {unbounce}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Leadpages"
                            ? "font-semibold text-sky-800"
                            : "text-slate-800"
                        }`}
                      >
                        {leadpages}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {winner}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-lime-50 via-indigo-50 to-sky-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-lime-800">
                    {averages.optinmonster}
                  </td>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages.unbounce}
                  </td>
                  <td className="px-4 py-3 font-semibold text-sky-800">
                    {averages.leadpages}
                  </td>
                  <td className="px-4 py-3 font-bold text-slate-900">
                    {overallWinner}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Feature & use-case comparison */}
        <section className="mt-12 space-y-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Feature and use-case comparison
          </h2>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">
              Where each tool sits in your stack
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {featureBullets.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">
              Testing, experimentation, and CRO
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {featureBullets.testing.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">
              Ecommerce and funnel fit
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {featureBullets.ecommerce.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">
            Pricing snapshots (directional)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm text-slate-800 md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Tool</th>
                  <th className="px-4 py-3">Approx. monthly from</th>
                  <th className="px-4 py-3">Annual / tiers</th>
                  <th className="px-4 py-3">Key limits</th>
                  <th className="px-4 py-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {pricingTable.map((row) => (
                  <tr key={row.plan}>
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-900">
                      {row.plan}
                    </th>
                    <td className="px-4 py-3">{row.monthly}</td>
                    <td className="px-4 py-3">{row.annual}</td>
                    <td className="px-4 py-3">{row.limits}</td>
                    <td className="px-4 py-3">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-600">
            Pricing changes regularly and varies by traffic, domains, and
            contacts. Always confirm current plans and limits on the official
            sites.
          </p>
        </section>

        {/* Who wins for… */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">Who wins for…</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">
                Onsite overlays and exit-intent
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                <strong>Winner: OptinMonster.</strong> Best for turning existing
                traffic into subscribers and customers using overlays on your
                current pages.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">
                Paid campaign landing pages
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                <strong>Winner: Unbounce.</strong> Designed for marketers who
                constantly test and refine landing pages across channels.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">
                Budget-friendly pages and sites
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                <strong>Winner: Leadpages.</strong> Solid functionality and
                templates at a lower price point than most enterprise-style
                builders.
              </p>
            </div>
          </div>
        </section>

        {/* Pros & Cons */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        {/* FAQ */}
        <section className="mt-12 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-xl font-bold text-slate-900">
            FAQs: OptinMonster vs Unbounce vs Leadpages
          </h2>
          <div className="mt-4 space-y-2">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200"
              >
                <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-slate-900">
                  {item.q}
                  <span className="text-xl leading-none text-slate-500 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-2 text-sm text-slate-700">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Back link */}
        <div className="mt-8">
          <Link
            to="/tools/optinmonster"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-slate-800 hover:bg-slate-800"
          >
            <ArrowLeft className="h-4 w-4" /> Back to OptinMonster review
          </Link>
        </div>
      </div>
    </main>
  );
}
