import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  Zap,
  Crown,
  ArrowLeft,
  Layout,
  ClipboardList,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "unbounce vs instapage vs leadpages";
const canonical = buildCanonical(
  "/tools/compare/unbounce-vs-instapage-vs-leadpages"
);

const brandMeta = {
  unbounce: {
    gradient: "from-emerald-500 via-teal-500 to-blue-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/unbounce.com",
  },
  instapage: {
    gradient: "from-indigo-500 via-blue-500 to-purple-500",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/instapage.com",
  },
  leadpages: {
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/leadpages.com",
  },
};

const contenders = [
  {
    key: "unbounce",
    name: "Unbounce",
    blurb: "AI-assisted landing page builder with Smart Traffic and popups.",
    url: "https://unbounce.com",
  },
  {
    key: "instapage",
    name: "Instapage",
    blurb: "Enterprise personalization, AdMap, and high-speed, AMP-ready pages.",
    url: "https://instapage.com",
  },
  {
    key: "leadpages",
    name: "Leadpages",
    blurb:
      "Budget-friendly builder with templates, opt-in forms, and built-in checkout.",
    url: "https://www.leadpages.com",
  },
];

const comparisonRows = [
  {
    label: "Primary strength",
    unbounce: "AI copy + Smart Traffic conversion routing.",
    instapage: "Personalization, AdMap, and post-click optimization.",
    leadpages: "Affordable templates with built-in payments and popups.",
  },
  {
    label: "Collaboration",
    unbounce: "Workspaces, client permissions, and shared blocks.",
    instapage: "Enterprise collaboration, approvals, and detailed roles.",
    leadpages: "Basic multi-user access on higher plans.",
  },
  {
    label: "Optimization tools",
    unbounce: "A/B tests, Smart Traffic, popups, sticky bars.",
    instapage: "Heatmaps, experiments, personalization, AdMap.",
    leadpages: "Split tests on higher tiers, simple opt-in testing.",
  },
  {
    label: "Speed & performance",
    unbounce: "Fast pages with AMP options and CDN.",
    instapage: "Highly optimized infrastructure, AMP, and performance SLAs.",
    leadpages: "Solid performance; optimized templates for SMB use.",
  },
  {
    label: "Pricing focus",
    unbounce: "Traffic-based tiers with AI features baked in.",
    instapage: "Premium, per-workspace pricing aimed at teams.",
    leadpages: "Flat-rate, generous limits on traffic and pages.",
  },
  {
    label: "Best for",
    unbounce: "Agencies and GTM teams needing speed + experiments.",
    instapage: "Enterprise marketing and paid media teams.",
    leadpages: "Creators and SMBs with limited dev/design resources.",
  },
];

const scoreboard = [
  {
    label: "Ease of use",
    scores: { unbounce: 9.0, instapage: 8.2, leadpages: 9.1 },
  },
  {
    label: "Optimization power",
    scores: { unbounce: 9.2, instapage: 9.5, leadpages: 7.2 },
  },
  {
    label: "Value for money",
    scores: { unbounce: 8.5, instapage: 7.0, leadpages: 9.3 },
  },
  {
    label: "Enterprise readiness",
    scores: { unbounce: 8.8, instapage: 9.6, leadpages: 6.5 },
  },
  {
    label: "Agency workflow",
    scores: { unbounce: 9.1, instapage: 8.5, leadpages: 7.4 },
  },
];

const avg = (key) =>
  (
    scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  unbounce: avg("unbounce"),
  instapage: avg("instapage"),
  leadpages: avg("leadpages"),
};

const overallWinner = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const pricingTable = [
  {
    plan: "Unbounce Launch",
    monthly: "From ~$99/mo",
    annual: "From ~$79/mo on annual",
    limits: "Around 20k visitors / 500 conversions (plan-dependent)",
    notes: "Good starting point for serious funnel testing and Smart Traffic.",
  },
  {
    plan: "Instapage Build",
    monthly: "From ~$299/mo",
    annual: "Custom on contracts",
    limits: "Unlimited pages, heatmaps, AdMap, higher traffic caps",
    notes: "Built for teams running large paid media budgets.",
  },
  {
    plan: "Leadpages Pro",
    monthly: "From ~$99/mo",
    annual: "From ~$74/mo on annual",
    limits: "Roughly 3 sites, unlimited traffic and leads, ecommerce checkout",
    notes: "Strong value for creators, coaches, and small businesses.",
  },
];

const faqs = [
  {
    q: `Which landing page builder is best in ${YEAR}?`,
    a: "Unbounce is the best mix of power and price for most growth teams. Instapage leads for enterprise personalization and post-click optimization. Leadpages wins when you want an affordable, simple builder with unlimited traffic.",
  },
  {
    q: "Can I switch between these tools?",
    a: "Templates are not directly transferable, but you can export HTML from Unbounce or Instapage and roughly recreate layouts in another builder. Most teams treat a switch as a chance to rebuild core templates.",
  },
  {
    q: "Which tool integrates with my CRM?",
    a: "All three integrate with major CRMs (HubSpot, Salesforce) and automation tools via native connectors or Zapier. Instapage also offers deeper enterprise connectors like Marketo and Eloqua.",
  },
  {
    q: "Do they all support A/B testing?",
    a: "Yes. Unbounce and Instapage put testing and experiments at the center of the product. Leadpages supports split testing on higher-tier plans and keeps it simpler for non-technical users.",
  },
  {
    q: "Which is best for agencies?",
    a: "Unbounce is usually the best fit for agencies thanks to workspaces, Smart Traffic, and fair pricing. Instapage is ideal for agencies serving large paid media clients that need heatmaps and strict SLAs.",
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
  unbounce: {
    pros: [
      "Smart Traffic automatically routes visitors to best-performing variants",
      "AI copy assistant for faster page creation",
      "Agency-friendly workspaces, permissions, and client management",
      "Strong library of conversion-focused templates and popups",
    ],
    cons: [
      "Traffic-based pricing can lead to overage costs on spikes",
      "Advanced features take some time to master",
      "May feel expensive for very small, low-traffic sites",
    ],
  },
  instapage: {
    pros: [
      "Best-in-class personalization and post-click optimization",
      "AdMap connects ads directly to landing pages for better message match",
      "Heatmaps and experiments included for CRO teams",
      "Built to support enterprise collaboration and approvals",
    ],
    cons: [
      "Highest overall cost among the three",
      "Overkill for simple funnels or solopreneurs",
      "Template library is more enterprise-focused than SMB-focused",
    ],
  },
  leadpages: {
    pros: [
      "Low cost with generous traffic and lead limits",
      "Unlimited landing pages and popups on key plans",
      "Built-in ecommerce checkout and Stripe integration",
      "Beginner-friendly with plenty of out-of-the-box templates",
    ],
    cons: [
      "Testing and optimization tools are more limited",
      "Less design flexibility vs fully custom builders",
      "Fewer advanced collaboration and enterprise controls",
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

export default function UnbounceVsInstapageVsLeadpagesPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Unbounce vs Instapage vs Leadpages – Landing Page Comparison (${YEAR})`}
        description="Compare Unbounce, Instapage, and Leadpages on pricing, optimization power, collaboration, and best-fit use cases to choose the right landing page builder."
        canonical={canonical}
        keywords={`${primaryKeyword}, landing page builder comparison, unbounce alternative, instapage vs leadpages`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Landing pages
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Unbounce vs Instapage vs Leadpages – Honest Comparison ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          All three tools help you ship high-converting landing pages without
          engineering. Unbounce leans into AI and Smart Traffic, Instapage is
          built for enterprise personalization and ad-to-page alignment, and
          Leadpages focuses on affordability with unlimited traffic and
          beginner-friendly templates.
        </p>

        {/* Hero verdict + highlight cards */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {/* Quick verdict */}
          <div className="space-y-3 rounded-3xl bg-emerald-50/90 p-6 ring-1 ring-emerald-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-emerald-800">
              <Sparkles className="h-5 w-5" /> Quick Verdict
            </div>
            <p className="text-base text-slate-800">
              <strong>Unbounce</strong> is the best all-rounder for growth teams
              thanks to Smart Traffic, AI copy, and flexible templates. Pick{" "}
              <strong>Instapage</strong> if you are an enterprise or paid media
              team obsessed with post-click optimization. Choose{" "}
              <strong>Leadpages</strong> if budget and simplicity matter most
              and you want unlimited traffic on mid-tier plans.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-800">
              <Crown className="h-4 w-4" /> Overall scoreboard leader:{" "}
              {overallWinner.charAt(0).toUpperCase() + overallWinner.slice(1)}{" "}
              <span className="text-xs font-medium text-emerald-700">
                (avg: {averages[overallWinner]}/10)
              </span>
            </div>
          </div>

          {/* Budget pick */}
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Layout className="h-5 w-5 text-amber-700" /> Best budget pick
            </div>
            <p className="text-sm text-slate-700">
              Leadpages offers unlimited traffic, leads, and sites on key plans,
              making it ideal for creators, coaches, and SMBs that want
              predictable costs.
            </p>
          </div>

          {/* Optimization focus */}
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Zap className="h-5 w-5 text-indigo-700" /> Best for heavy
              experimentation
            </div>
            <p className="text-sm text-slate-700">
              Instapage pairs experiments, heatmaps, and AdMap so paid media
              teams can systematically optimize every click from ad to landing
              page.
            </p>
          </div>
        </div>

        {/* Brand highlight cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {contenders.map((card) => (
            <div
              key={card.key}
              className={`relative overflow-x-auto rounded-2xl border border-slate-200 bg-gradient-to-br ${
                brandMeta[card.key]?.gradient || "from-slate-500 to-slate-700"
              } p-5 shadow-md md:overflow-hidden`}
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
              {card.url && (
                <a
                  href={card.url}
                  target="_blank"
                  rel="noreferrer"
                  className="relative mt-3 inline-flex text-xs font-semibold text-white/90 underline underline-offset-2"
                >
                  Visit {card.name}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-emerald-600" /> Side-by-Side
            Comparison
          </h2>
          <p className="text-sm text-slate-700">
            Use this table to see how Unbounce, Instapage, and Leadpages compare
            across collaboration, optimization, and pricing focus.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Unbounce</th>
                  <th className="px-4 py-3">Instapage</th>
                  <th className="px-4 py-3">Leadpages</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr
                    key={row.label}
                    className="odd:bg-white even:bg-slate-50/40"
                  >
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">
                      {row.unbounce}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.instapage}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.leadpages}
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
            <Gauge className="h-6 w-6 text-indigo-600" /> Scoreboard
          </h2>
          <p className="text-sm text-slate-700">
            Scores are directional and based on typical use across agencies,
            in-house marketing, and creator businesses. Your mileage will vary
            depending on campaign volume and team maturity.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Unbounce</th>
                  <th className="px-4 py-3">Instapage</th>
                  <th className="px-4 py-3">Leadpages</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const entries = Object.entries(row.scores);
                  const winnerKey = entries.sort((a, b) => b[1] - a[1])[0][0];
                  return (
                    <tr
                      key={row.label}
                      className="odd:bg-white even:bg-slate-50/40"
                    >
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "unbounce"
                            ? "font-semibold text-emerald-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.unbounce}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "instapage"
                            ? "font-semibold text-indigo-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.instapage}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "leadpages"
                            ? "font-semibold text-amber-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.leadpages}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-emerald-50/70">
                  <th className="bg-emerald-100 px-4 py-3 font-semibold text-slate-900">
                    Average
                  </th>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.unbounce}
                  </td>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages.instapage}
                  </td>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages.leadpages}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Pros & Cons cards */}
        <section className="mt-10 grid gap-4 md:grid-cols-3">
          {Object.entries(prosCons).map(([key, value]) => (
            <div
              key={key}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <LogoBadge
                  name={key.charAt(0).toUpperCase() + key.slice(1)}
                />
              </div>
              <div className="mt-3">
                <p className="text-sm font-semibold text-emerald-700">Pros</p>
                <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-700">
                  {value.pros.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-3">
                <p className="text-sm font-semibold text-rose-700">Cons</p>
                <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-700">
                  {value.cons.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        {/* Pricing snapshot */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <ClipboardList className="h-6 w-6 text-emerald-600" /> Pricing
            snapshot
          </h2>
          <p className="text-sm text-slate-700">
            Pricing and limits change regularly, but this table gives you a
            directional benchmark across core plans. Always confirm current
            pricing, visitor caps, and features on each vendor’s site.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Monthly</th>
                  <th className="px-4 py-3">Annual</th>
                  <th className="px-4 py-3">Limits (approx.)</th>
                  <th className="px-4 py-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {pricingTable.map((row) => (
                  <tr
                    key={row.plan}
                    className="odd:bg-white even:bg-slate-50/40"
                  >
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
                    <td className="px-4 py-3 text-slate-700">
                      {row.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Global Pros/Cons summary */}
        <ProsConsSection contenders={contenders} prosCons={prosCons} />

        {/* FAQs */}
        <section className="mt-10 space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">
            FAQs – Unbounce vs Instapage vs Leadpages
          </h2>
          <div className="space-y-2 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-slate-100 bg-slate-50/60 p-4 open:bg-slate-50"
              >
                <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-slate-900 group-open:text-emerald-800">
                  {item.q}
                  <span className="text-xs text-slate-500 group-open:hidden">
                    +
                  </span>
                  <span className="hidden text-xs text-slate-500 group-open:inline">
                    –
                  </span>
                </summary>
                <p className="mt-2 text-sm text-slate-700">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Back link */}
        <div className="mt-10 flex items-center gap-3 text-sm font-semibold text-emerald-700">
          <ArrowLeft className="h-4 w-4" />
          <Link to="/tools">Back to Tools Hub</Link>
        </div>
      </div>
    </main>
  );
}
