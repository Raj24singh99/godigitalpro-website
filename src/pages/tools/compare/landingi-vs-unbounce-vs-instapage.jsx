import React from "react";
import {
  Sparkles,
  Crown,
  Layers,
  BarChart3,
  ArrowLeft,
  LayoutTemplate,
  Gauge,
} from "lucide-react";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";
import { Link } from "react-router-dom";

const YEAR = new Date().getFullYear();
const canonical = buildCanonical(
  "/tools/compare/landingi-vs-unbounce-vs-instapage"
);
const primaryKeyword = "landingi vs unbounce vs instapage";

const brandMeta = {
  landingi: {
    gradient: "from-sky-500 via-blue-500 to-indigo-500",
    badge: "bg-sky-100 text-sky-900",
    logo: "https://logo.clearbit.com/landingi.com",
  },
  unbounce: {
    gradient: "from-emerald-500 via-teal-500 to-indigo-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/unbounce.com",
  },
  instapage: {
    gradient: "from-indigo-500 via-slate-600 to-slate-900",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/instapage.com",
  },
};

const contenders = [
  {
    key: "landingi",
    name: "Landingi",
    blurb: "Fast funnels, popups, and value pricing for SMBs and agencies.",
    url: "https://landingi.com/",
  },
  {
    key: "unbounce",
    name: "Unbounce",
    blurb: "Conversion testing and personalisation with Smart Traffic.",
    url: "https://unbounce.com/",
  },
  {
    key: "instapage",
    name: "Instapage",
    blurb: "Enterprise landing pages and ad-to-page collaboration.",
    url: "https://instapage.com/",
  },
];

const comparisonRows = [
  {
    label: "Best for",
    landingi: "Fast funnels and strong value for SMBs and agencies.",
    unbounce: "Conversion testing, Smart Traffic, and personalisation.",
    instapage: "Enterprise landing experiences tied tightly to ads.",
  },
  {
    label: "Builder & templates",
    landingi: "Easy block-based builder with guided funnel flows.",
    unbounce: "Flexible drag-and-drop builder plus Smart Traffic.",
    instapage: "Enterprise-grade builder with collaboration and blocks.",
  },
  {
    label: "Testing & optimisation",
    landingi: "A/B testing on higher tiers with basic reporting.",
    unbounce:
      "A/B testing + Smart Traffic and dynamic text replacement for relevance.",
    instapage: "A/B testing, personalisation, and heatmaps for deeper CX.",
  },
  {
    label: "Integrations",
    landingi: "Connects to ESP/CRM tools, plus Zapier for extras.",
    unbounce: "Broad marketing and analytics integrations.",
    instapage: "Enterprise stacks, ad platforms, and analytics tools.",
  },
  {
    label: "Pricing style",
    landingi: "Feature-based tiers with strong value for smaller teams.",
    unbounce: "Higher pricing tied to conversions/visits and features.",
    instapage: "Premium enterprise pricing aligned to ad spend/scale.",
  },
];

const scoreboard = [
  { label: "Ease of use", landingi: 9.3, unbounce: 8.5, instapage: 8.1 },
  {
    label: "Testing depth",
    landingi: 7.8,
    unbounce: 9.3,
    instapage: 9.0,
  },
  {
    label: "Design flexibility",
    landingi: 8.0,
    unbounce: 8.6,
    instapage: 8.8,
  },
  {
    label: "Value for SMB/agencies",
    landingi: 9.2,
    unbounce: 7.9,
    instapage: 7.6,
  },
  {
    label: "Collaboration",
    landingi: 8.0,
    unbounce: 8.4,
    instapage: 9.0,
  },
];

const avg = (tool) =>
  (
    scoreboard.reduce((sum, row) => sum + (row[tool] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  landingi: avg("landingi"),
  unbounce: avg("unbounce"),
  instapage: avg("instapage"),
};

const prettyNames = {
  landingi: "Landingi",
  unbounce: "Unbounce",
  instapage: "Instapage",
};

const overallWinnerKey = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];
const overallWinnerLabel = prettyNames[overallWinnerKey] || overallWinnerKey;

const pricingTable = [
  {
    plan: "Landingi Core / Automate",
    monthly: "From ~ $35–$79",
    annual: "Lower effective price on annual",
    limits: "Landing pages, funnels, popups; limits on traffic and domains by tier.",
    notes: "Best for SMBs and agencies wanting fast-launch funnels with value pricing.",
  },
  {
    plan: "Unbounce Launch / Optimize",
    monthly: "From ~ $99–$145",
    annual: "Discounts on annual commitments",
    limits: "Page views, conversions, and connected domains scale by tier.",
    notes: "Makes sense when Smart Traffic, testing, and personalisation directly impact ROAS.",
  },
  {
    plan: "Instapage Building / Converting",
    monthly: "Premium / custom",
    annual: "Usually sold on annual contracts",
    limits: "Seats, workspaces, and traffic tailored to enterprise needs.",
    notes: "Best fit when you have meaningful ad spend and teams collaborating on landing CX.",
  },
];

const faqs = [
  {
    q: `Who wins overall in ${YEAR}?`,
    a: "Landingi wins on value and speed for SMBs and agencies. Unbounce wins on testing and personalisation depth. Instapage wins for enterprise ad-to-page workflows, collaboration, and premium support.",
  },
  {
    q: "When should I choose Landingi?",
    a: "Pick Landingi if you want fast funnels, popups, and A/B testing at a lower price, with hosting and domains included and a simple builder your team can adopt quickly.",
  },
  {
    q: "When should I choose Unbounce?",
    a: "Choose Unbounce if conversion testing, dynamic text replacement, and Smart Traffic are core to how you optimise campaigns and squeeze more out of each visit.",
  },
  {
    q: "When should I choose Instapage?",
    a: "Choose Instapage if you need enterprise collaboration, ad-to-page mapping, personalisation, and stronger analytics/heatmaps with premium account management.",
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
  landingi: {
    pros: [
      "Very easy to use for SMBs and agencies building funnels quickly",
      "Good value pricing with hosting, domains, and funnels bundled",
      "Includes popups, light A/B testing, and lead capture tools",
    ],
    cons: [
      "Testing and personalisation depth below Unbounce/Instapage",
      "Fewer enterprise collaboration and workflow controls",
      "Template ecosystem is growing but smaller than some rivals",
    ],
  },
  unbounce: {
    pros: [
      "Strong A/B testing plus Smart Traffic for conversion optimisation",
      "Dynamic text replacement to align pages to ad/search copy",
      "Flexible builder and broad marketing/analytics integrations",
    ],
    cons: [
      "Higher pricing tied to traffic and conversions",
      "Less out-of-the-box collaboration depth than Instapage",
      "Overkill if you only need simple pages with minimal testing",
    ],
  },
  instapage: {
    pros: [
      "Enterprise collaboration with workspaces, comments, and approvals",
      "Ad-to-page mapping and personalisation improve paid media ROI",
      "Support for design systems, blocks, and advanced analytics/heatmaps",
    ],
    cons: [
      "Premium pricing vs Landingi and Unbounce",
      "Best fit for teams with dedicated paid media and CRO functions",
      "More complex onboarding than lightweight builders",
    ],
  },
};

const LogoBadge = ({ name }) => {
  const key = name.toLowerCase();
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

export default function LandingiVsUnbounceVsInstapagePage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Landingi vs Unbounce vs Instapage (${YEAR}) – Landing page comparison`}
        description="Compare Landingi, Unbounce, and Instapage on pricing, testing depth, design flexibility, collaboration, and best-fit use cases to pick the right landing page builder."
        canonical={canonical}
        keywords={`${primaryKeyword}, landingi review, unbounce review, instapage review, landing page comparison, landing page builders`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
          Landing page builders
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Landingi vs Unbounce vs Instapage ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          <strong>Landingi</strong> is the value pick with funnels and A/B
          testing for SMBs and agencies. <strong>Unbounce</strong> is the
          testing and personalisation leader with Smart Traffic and dynamic
          text. <strong>Instapage</strong> is the premium choice for enterprise
          ad-to-page workflows and collaboration. Below is a structured
          comparison so you can align the tool to your funnel, traffic, and
          testing strategy.
        </p>

        {/* Quick verdict + winner */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2 space-y-3 rounded-3xl bg-blue-50/90 p-6 ring-1 ring-blue-100">
            <div className="flex items-center gap-2 text-lg font-semibold text-blue-900">
              <Sparkles className="h-5 w-5" />
              <span>Quick verdict</span>
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>Landingi</strong> when you need{" "}
              <strong>fast funnels, popups, and good value pricing</strong>.
              Choose <strong>Unbounce</strong> when{" "}
              <strong>conversion testing, Smart Traffic, and personalisation</strong>{" "}
              are key to your ROAS. Choose <strong>Instapage</strong> when{" "}
              <strong>
                multiple stakeholders collaborate on landing CX and ad mapping
              </strong>{" "}
              at scale.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-blue-900">
              <Crown className="h-4 w-4" /> Overall scoreboard winner:{" "}
              {overallWinnerLabel}{" "}
              <span className="text-xs font-medium text-blue-800">
                (avg: {averages[overallWinnerKey]}/10)
              </span>
            </div>
          </div>

          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Gauge className="h-5 w-5 text-emerald-700" /> Best for testing
              depth
            </div>
            <p className="text-sm text-slate-700">
              <strong>Unbounce</strong> and <strong>Instapage</strong> both
              offer deep testing and optimisation. Unbounce shines with Smart
              Traffic, while Instapage layers in personalisation and heatmaps.
            </p>
          </div>
        </div>

        {/* Contender cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
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
                <Layers className="h-5 w-5 text-white/80" />
              </div>
              <p className="relative mt-3 text-sm font-medium text-white/90">
                {item.blurb}
              </p>
            </a>
          ))}
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <LayoutTemplate className="h-6 w-6 text-blue-600" /> Side-by-side
            comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Landingi</th>
                  <th className="px-4 py-3">Unbounce</th>
                  <th className="px-4 py-3">Instapage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr
                    key={row.label}
                    className="odd:bg-white even:bg-slate-50/50"
                  >
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">
                      {row.landingi}
                    </td>
                    <td className="px-4 py-3 text-slate-700">{row.unbounce}</td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.instapage}
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
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Criterion</th>
                  <th className="px-4 py-3">Landingi</th>
                  <th className="px-4 py-3">Unbounce</th>
                  <th className="px-4 py-3">Instapage</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const winner =
                    row.landingi === row.unbounce &&
                    row.unbounce === row.instapage
                      ? "Tie"
                      : Math.max(
                          row.landingi,
                          row.unbounce,
                          row.instapage
                        ) === row.landingi
                      ? "Landingi"
                      : Math.max(row.unbounce, row.instapage) === row.unbounce
                      ? "Unbounce"
                      : "Instapage";

                  return (
                    <tr key={row.label}>
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Landingi"
                            ? "font-semibold text-sky-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.landingi}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Unbounce"
                            ? "font-semibold text-emerald-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.unbounce}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Instapage"
                            ? "font-semibold text-indigo-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.instapage}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">
                        {winner}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-sky-50 via-emerald-50 to-indigo-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-sky-800">
                    {averages.landingi}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.unbounce}
                  </td>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages.instapage}
                  </td>
                  <td className="px-4 py-3 font-bold text-slate-900">
                    {overallWinnerLabel}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">
            Pricing snapshots (approximate)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Monthly (approx.)</th>
                  <th className="px-4 py-3">Annual / term</th>
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
                    <td className="px-4 py-3 text-slate-700">
                      {row.monthly}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.annual}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.limits}
                    </td>
                    <td className="px-4 py-3 text-slate-700">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600">
            Pricing for Landingi, Unbounce, and Instapage changes frequently
            and depends on traffic, conversions, and collaboration needs. Always
            confirm the latest pricing and model it against your ad spend and
            expected test volume.
          </p>
        </section>

        {/* Pros & Cons */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        {/* Bottom line */}
        <section className="mt-12 space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">Bottom line</h2>
          <p className="text-slate-700">
            Use <strong>Landingi</strong> when you want{" "}
            <strong>fast-launch funnels, popups, and landing pages</strong> at
            strong value, especially as an SMB or agency running many smaller
            campaigns. Choose <strong>Unbounce</strong> when{" "}
            <strong>testing, Smart Traffic, and dynamic personalisation</strong>{" "}
            are central to your CRO strategy. Opt for <strong>Instapage</strong>{" "}
            when <strong>enterprise collaboration, ad mapping, and CX</strong>{" "}
            matter as much as the page itself.
          </p>
          <div className="pt-2">
            <Link
              to="/tools/landingi"
              className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-600"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Landingi review
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">FAQs</h2>
          <div className="space-y-3">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <summary className="cursor-pointer text-sm font-semibold text-slate-900">
                  {item.q}
                </summary>
                <p className="mt-2 text-sm text-slate-700">{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
