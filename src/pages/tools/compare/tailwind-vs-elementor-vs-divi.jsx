import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  ClipboardList,
  Crown,
  ArrowLeft,
  Workflow,
  Palette,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "tailwind vs elementor vs divi";
const canonical = buildCanonical("/tools/compare/tailwind-vs-elementor-vs-divi");

const brandMeta = {
  tailwind: {
    gradient: "from-sky-500 via-cyan-500 to-indigo-500",
    badge: "bg-sky-100 text-sky-900",
    logo: "https://logo.clearbit.com/tailwindcss.com",
  },
  elementor: {
    gradient: "from-rose-500 via-red-500 to-amber-500",
    badge: "bg-rose-100 text-rose-900",
    logo: "https://logo.clearbit.com/elementor.com",
  },
  divi: {
    gradient: "from-purple-500 via-indigo-500 to-blue-500",
    badge: "bg-purple-100 text-purple-900",
    logo: "https://logo.clearbit.com/elegantthemes.com",
  },
};

const contenders = [
  {
    key: "tailwind",
    name: "Tailwind CSS",
    blurb: "Utility-first CSS for developers building custom, high-performance themes.",
    url: "https://tailwindcss.com",
  },
  {
    key: "elementor",
    name: "Elementor",
    blurb: "WordPress visual builder with templates, widgets, and hosted plans.",
    url: "https://elementor.com",
  },
  {
    key: "divi",
    name: "Divi",
    blurb: "WordPress theme + visual builder bundle tuned for agencies and freelancers.",
    url: "https://www.elegantthemes.com/gallery/divi/",
  },
];

const comparisonRows = [
  {
    label: "Best for",
    tailwind: "Developers who want to own code, UX, and performance end-to-end.",
    elementor: "Marketers and non-devs on WordPress needing fast landing pages.",
    divi: "Agencies/freelancers standardising on a WP theme + builder combo.",
  },
  {
    label: "Control & flexibility",
    tailwind: "Full control via code, components, and design tokens.",
    elementor: "Visual control with CSS hooks; some limits of WP + plugin stack.",
    divi: "Visual layouts with strong theme options and global presets.",
  },
  {
    label: "Performance",
    tailwind: "Excellent with JIT + purge/treeshake; tiny CSS bundles.",
    elementor: "Good if you keep plugins lean and use solid hosting/CDN.",
    divi: "Can be heavier; needs optimisation (caching, CDN, minification).",
  },
  {
    label: "Speed to launch",
    tailwind: "Fast for dev teams; slower for non-technical marketers.",
    elementor: "Very fast with templates, blocks, and hosted Elementor Cloud.",
    divi: "Fast once your design system is set; slightly steeper than Elementor.",
  },
  {
    label: "Hosting & stack",
    tailwind: "Works with any stack (Next.js, Laravel, WP custom, static, etc.).",
    elementor: "Requires WordPress (self-hosted or Elementor hosting).",
    divi: "Requires WordPress; you bring your own hosting.",
  },
];

const scoreboard = [
  { label: "Design freedom", scores: { tailwind: 9.6, elementor: 8.6, divi: 8.4 } },
  { label: "Performance", scores: { tailwind: 9.5, elementor: 8.0, divi: 7.8 } },
  { label: "Speed to ship", scores: { tailwind: 8.0, elementor: 9.2, divi: 8.8 } },
  { label: "WordPress friendliness", scores: { tailwind: 7.0, elementor: 9.4, divi: 9.0 } },
  { label: "Value", scores: { tailwind: 9.4, elementor: 8.7, divi: 8.5 } },
];

const avg = (key) => {
  const total = scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0);
  return (total / scoreboard.length).toFixed(1);
};
const averages = {
  tailwind: avg("tailwind"),
  elementor: avg("elementor"),
  divi: avg("divi"),
};
const overallWinnerKey = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];
const overallWinnerLabel =
  overallWinnerKey.charAt(0).toUpperCase() + overallWinnerKey.slice(1);

const pricingTable = [
  {
    plan: "Tailwind CSS",
    monthly: "Free",
    annual: "Free",
    limits: "CSS framework only",
    notes: "Ideal for dev teams building custom sites or design systems.",
  },
  {
    plan: "Elementor Hosting + Pro",
    monthly: "From ~US$9.99/mo",
    annual: "Lower when billed annually",
    limits: "WP hosting + builder + templates",
    notes: "Great for WP marketers needing speed to launch and fewer moving parts.",
  },
  {
    plan: "Divi Annual / Lifetime",
    monthly: "From ~US$10/mo (annual)",
    annual: "Lifetime one-time licence also offered",
    limits: "Theme + builder for unlimited sites",
    notes: "Strong value for WP agencies handling many installs.",
  },
];

const faqs = [
  {
    q: `Is Tailwind better than Elementor or Divi in ${YEAR}?`,
    a: "It depends on your team. Tailwind wins for code-level control, performance, and design systems. Elementor wins for fastest WordPress page launches with templates and widgets. Divi wins for agencies that want a reusable WP theme + builder licence across many sites.",
  },
  {
    q: "Which is best for performance and Core Web Vitals?",
    a: "Tailwind. It ships a very small CSS bundle and plays nicely with modern frameworks. Elementor and Divi can be fast, but performance depends heavily on your hosting, caching, and plugin choices.",
  },
  {
    q: "Which is fastest for marketers without developers?",
    a: "Elementor. It is very marketer-friendly with drag-and-drop, templates, and integrated hosting options. Divi is also visual but has a slightly steeper learning curve.",
  },
  {
    q: "Do I need WordPress to use these?",
    a: "Tailwind works with any tech stack (Next.js, Laravel, Rails, static sites, headless WP, etc.). Elementor and Divi are strictly WordPress builders and require WP hosting.",
  },
  {
    q: "What should an agency pick for many small business sites?",
    a: "If you are a dev-led agency, Tailwind plus a component library scales very well. If you are a WP-focused agency with non-dev implementers, Divi’s unlimited-site licence or Elementor’s Pro licences can be more practical.",
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
  tailwind: {
    pros: [
      "Maximum design and code control",
      "Excellent performance with small CSS bundle",
      "Reusable design tokens and components",
      "Works with any modern frontend stack",
      "Great for design systems and product teams",
    ],
    cons: [
      "Requires developer skills and workflow",
      "No visual builder or drag-and-drop editor",
      "Non-devs depend on dev handoff for changes",
    ],
  },
  elementor: {
    pros: [
      "Very fast WordPress page building",
      "Large template and widget ecosystem",
      "Marketing-friendly A/B tests and landing pages",
      "Can bundle hosting + builder in one plan",
      "Active community and third-party addons",
    ],
    cons: [
      "Performance depends on hosting and plugin stack",
      "Code-level control is more limited vs custom theme",
      "Vendor lock-in if you ever want to move away",
      "WordPress-only solution",
    ],
  },
  divi: {
    pros: [
      "Unlimited site licensing on most plans",
      "Theme + builder bundle in one subscription",
      "Good for agencies standardising design across many WP sites",
      "Visual layouts, global modules, and presets",
      "Strong ecosystem of Divi-specific layouts and child themes",
    ],
    cons: [
      "Heavier footprint than Tailwind and many custom themes",
      "Requires good optimisation (caching, CDN) for speed",
      "WordPress-only and opinionated structure",
      "Migration away can be painful if heavily used",
    ],
  },
};

const featureBullets = {
  philosophy: [
    "Tailwind CSS: Utility-first classes keep you in your editor and encourage component-driven design, ideal for teams that treat the website like a product.",
    "Elementor: Visual-first philosophy. Blocks, widgets, and templates help marketers ship fast without touching code.",
    "Divi: Theme + visual builder. You standardise on Divi and roll out similar patterns across many WordPress sites.",
  ],
  performance: [
    "Tailwind CSS: JIT/Tree-shaking generates only the classes you use, which keeps CSS payload very small and Core Web Vitals healthy.",
    "Elementor: Pages can be fast on good hosting with careful plugin choices and caching, but bloat is easy if you overuse widgets/addons.",
    "Divi: Offers performance improvements, but can still feel heavier than a custom Tailwind build; needs optimisation to stay snappy.",
  ],
  workflow: [
    "Tailwind CSS: Best when you have a Git-based workflow, components, code review, and design tokens shared across apps.",
    "Elementor: Great for marketing teams doing landing pages, lead-gen funnels, and quick tests on WordPress.",
    "Divi: Well-suited to agencies creating similar site structures for many clients, leveraging Divi layouts and global modules.",
  ],
  ecosystem: [
    "Tailwind CSS: Works with Next.js, Remix, Laravel, Astro, headless WP, and more; huge plugin ecosystem (forms, typography, etc.).",
    "Elementor: Massive ecosystem of third-party addons, templates, and integrations built specifically for WP + Elementor.",
    "Divi: Mature Divi marketplace with layouts, child themes, and addons for agencies who standardise on Divi.",
  ],
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

export default function TailwindVsElementorVsDiviPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Tailwind vs Elementor vs Divi – Which to pick? (${YEAR})`}
        description="Deep comparison of Tailwind CSS, Elementor, and Divi on performance, design control, speed to launch, pricing, and best-fit use cases for dev teams, marketers, and agencies."
        canonical={canonical}
        keywords={`${primaryKeyword}, wordpress builders, css frameworks, page builders comparison`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
          Frontend & WordPress
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Tailwind vs Elementor vs Divi – Honest Comparison ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Tailwind CSS is the code-first choice for high-performance design systems. Elementor
          gives marketers a fast, visual WordPress builder with templates and hosting. Divi bundles
          a theme + builder licence that agencies can reuse across many client sites. This guide
          compares them on performance, design control, speed to launch, WordPress friendliness,
          and long-term cost.
        </p>

        {/* Top summary cards */}
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <div className="rounded-3xl bg-sky-50/90 p-6 ring-1 ring-sky-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-sky-800">
              <Sparkles className="h-5 w-5" />
              <span>Quick verdict</span>
            </div>
            <p className="mt-2 text-base text-slate-800">
              Choose <strong>Tailwind CSS</strong> if you want code-level control, design systems,
              and Core Web Vitals performance. Choose <strong>Elementor</strong> if you want to
              launch and iterate WordPress landing pages quickly with templates and widgets. Choose{" "}
              <strong>Divi</strong> if you are a WordPress agency or freelancer who wants a
              reusable theme + builder licence across many sites.
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-sky-800">
              <Crown className="h-4 w-4" />
              Overall scoreboard leader: {overallWinnerLabel}{" "}
              <span className="text-xs font-medium text-sky-700">
                (avg: {averages[overallWinnerKey]}/10)
              </span>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Palette className="h-5 w-5 text-sky-700" /> Best for dev control
            </div>
            <p className="mt-1 text-sm text-slate-700">
              Tailwind gives developers granular control over layout, tokens, and performance across
              all frameworks.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Workflow className="h-5 w-5 text-rose-700" /> Best for WP speed
            </div>
            <p className="mt-1 text-sm text-slate-700">
              Elementor lets marketers ship and update WordPress landing pages without waiting on
              developers.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Workflow className="h-5 w-5 text-purple-700" /> Best for WP agencies
            </div>
            <p className="mt-1 text-sm text-slate-700">
              Divi’s theme + builder + unlimited site licensing makes it attractive for WordPress
              agencies and freelancers.
            </p>
          </div>
        </div>

        {/* Brand cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {contenders.map((card) => (
            <a
              key={card.key}
              href={card.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative block overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br ${
                brandMeta[card.key]?.gradient || "from-slate-500 to-slate-700"
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
          ))}
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-sky-600" />
            Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Tailwind</th>
                  <th className="px-4 py-3">Elementor</th>
                  <th className="px-4 py-3">Divi</th>
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
                    <td className="px-4 py-3 text-slate-700">{row.tailwind}</td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.elementor}
                    </td>
                    <td className="px-4 py-3 text-slate-700">{row.divi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Scoreboard */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-indigo-600" />
            Scoreboard (1–10)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[640px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Tailwind</th>
                  <th className="px-4 py-3">Elementor</th>
                  <th className="px-4 py-3">Divi</th>
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
                          winnerKey === "tailwind"
                            ? "font-semibold text-sky-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.tailwind}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "elementor"
                            ? "font-semibold text-rose-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.elementor}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "divi"
                            ? "font-semibold text-purple-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.divi}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-sky-50/70">
                  <th className="bg-sky-100 px-4 py-3 font-semibold text-slate-900">
                    Average
                  </th>
                  <td className="px-4 py-3 font-semibold text-sky-800">
                    {averages.tailwind}
                  </td>
                  <td className="px-4 py-3 font-semibold text-rose-800">
                    {averages.elementor}
                  </td>
                  <td className="px-4 py-3 font-semibold text-purple-800">
                    {averages.divi}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Feature comparison sections */}
        <section className="mt-12 space-y-8">
          <h2 className="text-2xl font-bold">
            How Tailwind, Elementor, and Divi actually feel to use
          </h2>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Design philosophy</h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.philosophy.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Performance & Core Web Vitals</h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.performance.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Workflow & collaboration</h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.workflow.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Ecosystem & addons</h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.ecosystem.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing snapshot */}
        <section className="mt-12 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <ClipboardList className="h-6 w-6 text-sky-600" />
            Pricing snapshot
          </h2>
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
                  <tr
                    key={row.plan}
                    className="odd:bg-white even:bg-slate-50/40"
                  >
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
          <p className="text-sm text-slate-700">
            Pricing changes frequently and varies by region. Treat these as ballpark figures.{" "}
            <strong>Tailwind</strong> itself is free but you pay for your dev team and hosting.{" "}
            <strong>Elementor</strong> often has the lowest time-to-value for a single marketing
            site. <strong>Divi</strong> can be the best long-term value if you run many WordPress
            sites under one licence.
          </p>
        </section>

        {/* Pros & Cons cards */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Pros & cons at a glance</h2>
          <div className="grid gap-4 md:grid-cols-3">
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
          </div>
        </section>

        {/* Deeper ProsConsSection */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">UX & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Tailwind CSS:</strong> Best for teams already comfortable with HTML/JSX and
              component libraries. There is an initial mental shift to utility classes, but once the
              team aligns, velocity and consistency are high.
            </li>
            <li>
              <strong>Elementor:</strong> Low learning curve for marketers and content editors.
              Anyone familiar with WordPress can drag-and-drop blocks and adjust layouts visually.
            </li>
            <li>
              <strong>Divi:</strong> Slightly more opinionated than Elementor but powerful once
              mastered. Agencies can standardise patterns and hand off to junior implementers.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use cases & best choices</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>SaaS or product company with dev team:</strong>{" "}
              <span className="font-semibold">Tailwind CSS</span> wins. You get performance,
              design-system consistency, and full control across marketing site, app UI, and docs.
            </li>
            <li>
              <strong>Single WordPress marketing site that must move fast:</strong>{" "}
              <span className="font-semibold">Elementor</span> wins. Templates, hosted plans, and a
              visual canvas help non-devs ship quickly.
            </li>
            <li>
              <strong>Agency building many WordPress sites per year:</strong>{" "}
              <span className="font-semibold">Divi</span> often wins on economics and workflow.
              Unlimited sites and reusable layouts make sense at scale.
            </li>
            <li>
              <strong>Hybrid stack (headless WP + frontend framework):</strong>{" "}
              <span className="font-semibold">Tailwind CSS</span> combined with a headless CMS can
              give you both performance and marketer-friendly content editing.
            </li>
          </ul>
        </section>

        {/* Final verdict */}
        <section className="mt-12 space-y-4 rounded-3xl bg-slate-900 p-6 text-white shadow-sm">
          <h2 className="text-2xl font-bold">Final verdict</h2>
          <ul className="space-y-2 text-sm text-slate-100">
            <li>
              <strong>Tailwind CSS:</strong> Pick this if you have developer capacity and care
              about long-term performance, design systems, and owning your stack. It is the most
              future-proof choice for product companies and serious marketing sites.
            </li>
            <li>
              <strong>Elementor:</strong> Pick this if your world is WordPress and you want
              marketers to ship landing pages, funnels, and tests without engineering help. It is
              the fastest way to launch WP pages.
            </li>
            <li>
              <strong>Divi:</strong> Pick this if you are an agency or freelancer managing many WP
              sites with similar patterns. The theme + builder + unlimited sites model can be very
              cost-effective over time.
            </li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12 space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">FAQs</h2>
          <div className="space-y-2 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-slate-100 bg-slate-50/60 p-4 open:bg-slate-50"
              >
                <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-slate-900 group-open:text-sky-800">
                  {item.q}
                  <span className="text-xs text-slate-500 group-open:hidden">+</span>
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
        <div className="mt-10 flex items-center gap-3 text-sm font-semibold text-sky-700">
          <ArrowLeft className="h-4 w-4" />
          <Link to="/tools">Back to Tools Hub</Link>
        </div>
      </div>
    </main>
  );
}
