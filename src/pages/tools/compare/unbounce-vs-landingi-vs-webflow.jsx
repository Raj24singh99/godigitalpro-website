import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  Zap,
  Crown,
  ArrowLeft,
  Globe,
  ClipboardList,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "unbounce vs landingi vs webflow";
const canonical = buildCanonical(
  "/tools/compare/unbounce-vs-landingi-vs-webflow"
);

const brandMeta = {
  unbounce: {
    gradient: "from-emerald-500 via-teal-500 to-blue-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/unbounce.com",
  },
  landingi: {
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
    badge: "bg-blue-100 text-blue-900",
    logo: "https://logo.clearbit.com/landingi.com",
  },
  webflow: {
    gradient: "from-slate-700 via-slate-800 to-black",
    badge: "bg-slate-100 text-slate-900",
    logo: "https://logo.clearbit.com/webflow.com",
  },
};

const contenders = [
  {
    key: "unbounce",
    name: "Unbounce",
    blurb: "AI-optimized landing pages for marketers and agencies.",
    url: "https://unbounce.com",
  },
  {
    key: "landingi",
    name: "Landingi",
    blurb: "Budget-friendly funnels, pages, and automations for SMBs.",
    url: "https://landingi.com",
  },
  {
    key: "webflow",
    name: "Webflow",
    blurb: "Full CMS & site builder for design-heavy marketing teams.",
    url: "https://webflow.com",
  },
];

const comparisonRows = [
  {
    label: "Core focus",
    unbounce: "Conversion-focused landing pages and experiments.",
    landingi: "Simple funnels with built-in automations and lead flows.",
    webflow: "Custom websites, CMS, and marketing experiences.",
  },
  {
    label: "Pricing style",
    unbounce: "Traffic and conversions by plan.",
    landingi: "Tiered by features, domains, and leads.",
    webflow: "Workspaces + per-site plans for hosting.",
  },
  {
    label: "Ease of use",
    unbounce: "Marketer-friendly drag-and-drop editor.",
    landingi: "Very easy builder with guided funnel setup.",
    webflow:
      "Designer-level control with a steeper learning curve (closer to no-code dev).",
  },
  {
    label: "Testing & optimization",
    unbounce: "Native A/B tests and Smart Traffic routing.",
    landingi: "A/B testing on higher tiers, basic reporting.",
    webflow: "Requires external tools (e.g., Google Optimize alternatives).",
  },
  {
    label: "Automation & funnels",
    unbounce: "Popups, sticky bars, simple flows via integrations.",
    landingi: "Landing pages + funnels, lead flows, and automations.",
    webflow:
      "Logic and flows available, but more setup and integrations required.",
  },
  {
    label: "Best for",
    unbounce: "GTM teams and agencies optimizing campaigns.",
    landingi: "SMBs needing fast, affordable funnels and pages.",
    webflow: "Brands needing bespoke design, CMS, and full sites.",
  },
];

const scoreboard = [
  {
    label: "Speed to launch",
    scores: { unbounce: 9.1, landingi: 9.3, webflow: 7.4 },
  },
  {
    label: "Design flexibility",
    scores: { unbounce: 8.5, landingi: 7.8, webflow: 9.6 },
  },
  {
    label: "Automation & funnels",
    scores: { unbounce: 8.4, landingi: 8.9, webflow: 8.0 },
  },
  {
    label: "Value",
    scores: { unbounce: 8.3, landingi: 9.0, webflow: 8.2 },
  },
  {
    label: "Scalability",
    scores: { unbounce: 8.7, landingi: 7.5, webflow: 9.2 },
  },
];

const avg = (key) =>
  (
    scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  unbounce: avg("unbounce"),
  landingi: avg("landingi"),
  webflow: avg("webflow"),
};
const overallWinner = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const pricingTable = [
  {
    plan: "Unbounce Optimize",
    monthly: "From ~$145/mo",
    annual: "From ~$109/mo annual",
    limits: "Around 30k visitors, Smart Traffic, multiple domains",
    notes: "Best for teams actively A/B testing and scaling paid campaigns.",
  },
  {
    plan: "Landingi Professional",
    monthly: "From ~$89/mo",
    annual: "From ~$65/mo annual",
    limits: "Approx. 10 funnels, higher leads, A/B tests",
    notes: "Strong value for SMB funnels and agencies with smaller budgets.",
  },
  {
    plan: "Webflow CMS + Workspace",
    monthly: "From ~$29/mo site + ~$28/mo seat",
    annual: "Discounted on annual plans",
    limits: "CMS collections, team collaboration, custom hosting",
    notes: "Ideal when you need a full marketing site + CMS and landing pages.",
  },
];

const faqs = [
  {
    q: `Which is best overall in ${YEAR}?`,
    a: "Unbounce hits the best balance for pure landing page performance and testing. Landingi is great when you want affordable funnels with light automations. Webflow wins when you need a full marketing site, CMS, and brand-level design, not just standalone pages.",
  },
  {
    q: "When should I choose Landingi over Unbounce?",
    a: "Pick Landingi when budgets are tighter, you want funnels and pages in one place, and you are comfortable with lighter testing/reporting. It is especially attractive for small agencies or SMBs focused on quick deployments.",
  },
  {
    q: "Why pick Webflow instead of a dedicated landing page tool?",
    a: "Webflow is best when your landing pages are part of a broader site and content strategy. If you care about CMS-driven content, animations, and pixel-perfect layouts across your whole site, Webflow gives you far more control than typical landing page builders.",
  },
  {
    q: "Can I integrate these tools with my existing stack?",
    a: "Yes. All three support webhooks, Zapier, and native integrations with major CRMs and email tools. Webflow tends to require more developer or no-code builder effort to wire advanced workflows compared to Unbounce or Landingi.",
  },
  {
    q: "Do they all support responsive design?",
    a: "All three support responsive design. Webflow gives the most granular control over breakpoints, while Unbounce and Landingi offer more guided, preset-based responsive editing that is easier for non-designers.",
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
      "Smart Traffic automatically routes traffic to the best variant",
      "AI copy tools for faster page creation",
      "Robust integrations with popular CRMs and marketing tools",
      "Purpose-built for landing pages and conversions",
    ],
    cons: [
      "Traffic and conversion caps on plans",
      "Less suitable as a full website or CMS replacement",
      "Can feel pricey for very small, low-traffic projects",
    ],
  },
  landingi: {
    pros: [
      "Affordable pricing with strong value for SMBs",
      "Guided funnels, campaign templates, and automations",
      "White-label and agency-friendly options",
      "Easy-to-use editor for non-designers",
    ],
    cons: [
      "Less design freedom than Webflow",
      "A/B testing and some features locked to higher tiers",
      "Ecosystem and community smaller than Webflow’s",
    ],
  },
  webflow: {
    pros: [
      "Pixel-level design control and rich animations",
      "Full CMS for blogs, resources, and content hubs",
      "Can power your entire marketing site plus landing pages",
      "Good for teams wanting design and dev in a single no-code platform",
    ],
    cons: [
      "Steep learning curve for marketers without design background",
      "Advanced forms, logic, and integrations often need extra setup",
      "Overkill if you only need a few simple campaign pages",
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

export default function UnbounceVsLandingiVsWebflowPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Unbounce vs Landingi vs Webflow – Builder Comparison (${YEAR})`}
        description="Compare Unbounce, Landingi, and Webflow across landing page speed, funnels, design flexibility, pricing, and scalability to pick the right builder for your stack."
        canonical={canonical}
        keywords={`${primaryKeyword}, landing page comparison, unbounce alternative, webflow vs unbounce`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Hero */}
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Landing page builders
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Unbounce vs Landingi vs Webflow – Honest Comparison ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Three different ways to ship conversion-focused experiences:{" "}
          <strong>Unbounce</strong> for AI optimization and experiments,{" "}
          <strong>Landingi</strong> for budget-friendly funnels, and{" "}
          <strong>Webflow</strong> for full websites and CMS-driven marketing.
        </p>

        {/* Quick verdict & highlight cards */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {/* Quick Verdict */}
          <div className="space-y-3 rounded-3xl bg-emerald-50/90 p-6 ring-1 ring-emerald-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-emerald-800">
              <Sparkles className="h-5 w-5" /> Quick Verdict
            </div>
            <p className="text-base text-slate-800">
              <strong>Unbounce</strong> is the best all-round choice if your
              priority is landing page performance and testing.{" "}
              <strong>Landingi</strong> is a smart pick when you want affordable
              funnels and simple automations.{" "}
              <strong>Webflow</strong> should be your choice when you care about
              design, CMS, and consolidating site + pages under one roof.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-800">
              <Crown className="h-4 w-4" /> Overall scoreboard leader:{" "}
              {overallWinner.charAt(0).toUpperCase() + overallWinner.slice(1)}{" "}
              <span className="text-xs font-medium text-emerald-700">
                (avg: {averages[overallWinner]}/10)
              </span>
            </div>
          </div>

          {/* Custom sites highlight */}
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Globe className="h-5 w-5 text-slate-800" /> Best for custom sites
            </div>
            <p className="text-sm text-slate-700">
              Webflow is unmatched when you want a full marketing site, blog,
              and landing pages running on the same CMS with rich animations and
              brand-level control.
            </p>
          </div>

          {/* Speed to launch highlight */}
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Zap className="h-5 w-5 text-emerald-700" /> Fastest to launch
            </div>
            <p className="text-sm text-slate-700">
              Unbounce and Landingi both excel at getting campaigns live in
              hours, not weeks—ideal for performance marketing and quick tests.
            </p>
          </div>
        </div>

        {/* Brand cards */}
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
            Quickly see how Unbounce, Landingi, and Webflow compare on focus,
            pricing model, testing tools, and who each platform is best for.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Unbounce</th>
                  <th className="px-4 py-3">Landingi</th>
                  <th className="px-4 py-3">Webflow</th>
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
                      {row.landingi}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.webflow}
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
            These scores are directional based on common agency, SMB, and
            in-house marketing use cases. Your exact needs may shift which tool
            is “best.”
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Unbounce</th>
                  <th className="px-4 py-3">Landingi</th>
                  <th className="px-4 py-3">Webflow</th>
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
                          winnerKey === "landingi"
                            ? "font-semibold text-blue-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.landingi}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "webflow"
                            ? "font-semibold text-slate-800"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.webflow}
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
                  <td className="px-4 py-3 font-semibold text-blue-800">
                    {averages.landingi}
                  </td>
                  <td className="px-4 py-3 font-semibold text-slate-900">
                    {averages.webflow}
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
                <LogoBadge name={key.charAt(0).toUpperCase() + key.slice(1)} />
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
            Pricing and limits change frequently, but this table offers a
            directional comparison of commonly chosen plans. Always confirm
            current pricing, visitor caps, and features on each vendor’s site.
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

        {/* Shared Pros & Cons component */}
        <ProsConsSection contenders={contenders} prosCons={prosCons} />

        {/* FAQs */}
        <section className="mt-10 space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">
            FAQs – Unbounce vs Landingi vs Webflow
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
