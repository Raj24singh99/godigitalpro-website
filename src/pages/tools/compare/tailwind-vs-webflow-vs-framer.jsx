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
const primaryKeyword = "tailwind vs webflow vs framer";
const canonical = buildCanonical("/tools/compare/tailwind-vs-webflow-vs-framer");

const brandMeta = {
  tailwind: {
    gradient: "from-sky-500 via-cyan-500 to-indigo-500",
    badge: "bg-sky-100 text-sky-900",
    logo: "https://logo.clearbit.com/tailwindcss.com",
  },
  webflow: {
    gradient: "from-indigo-500 via-slate-700 to-slate-900",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/webflow.com",
  },
  framer: {
    gradient: "from-purple-500 via-violet-500 to-pink-500",
    badge: "bg-purple-100 text-purple-900",
    logo: "https://logo.clearbit.com/framer.com",
  },
};

const contenders = [
  {
    key: "tailwind",
    name: "Tailwind CSS",
    blurb: "Utility-first CSS framework for developers who want full design and code control.",
    url: "https://tailwindcss.com",
  },
  {
    key: "webflow",
    name: "Webflow",
    blurb: "Visual site builder with CMS and hosting for marketers and designers.",
    url: "https://webflow.com",
  },
  {
    key: "framer",
    name: "Framer",
    blurb: "Visual builder with modern animations, components, and hosting for fast marketing sites.",
    url: "https://www.framer.com",
  },
];

const comparisonRows = [
  {
    label: "Best for",
    tailwind: "Developers shipping custom UI and design systems fast.",
    webflow: "Marketers/designers building CMS-backed sites without code.",
    framer: "Teams wanting modern visuals, motion, and landing pages quickly.",
  },
  {
    label: "Customization depth",
    tailwind: "Unlimited—build your own components, tokens, and layouts in code.",
    webflow: "Pixel-level visual design with custom code when needed.",
    framer: "Visual design with component props, variants, and motion baked in.",
  },
  {
    label: "Performance",
    tailwind: "Excellent—lean builds with JIT/tree-shaking and tiny CSS bundles.",
    webflow: "Good—managed CDN/hosting, but depends on how heavy the design is.",
    framer: "Good—CDN + modern builds; heavy motion can add weight if overused.",
  },
  {
    label: "Learning curve",
    tailwind: "Developer-friendly; requires HTML/CSS/JS basics and component thinking.",
    webflow: "Moderate; designers pick it up quickly, devs appreciate the structure.",
    framer: "Easy for product designers; some React-like concepts for advanced use.",
  },
  {
    label: "Hosting/CMS",
    tailwind: "Bring your own stack (Next.js, Laravel, Rails, WP, etc.).",
    webflow: "Built-in hosting, CMS, forms, and collections.",
    framer: "Built-in hosting and CMS-like collections for marketing content.",
  },
];

const scoreboard = [
  { label: "Design freedom", scores: { tailwind: 9.5, webflow: 8.8, framer: 9.1 } },
  { label: "Speed to launch", scores: { tailwind: 8.2, webflow: 9.0, framer: 9.2 } },
  { label: "Performance", scores: { tailwind: 9.6, webflow: 8.6, framer: 8.7 } },
  { label: "Developer fit", scores: { tailwind: 9.7, webflow: 7.8, framer: 8.1 } },
  { label: "Marketing workflow", scores: { tailwind: 7.8, webflow: 9.3, framer: 9.0 } },
];

const avg = (key) => {
  const total = scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0);
  return (total / scoreboard.length).toFixed(1);
};
const averages = {
  tailwind: avg("tailwind"),
  webflow: avg("webflow"),
  framer: avg("framer"),
};
const overallWinnerKey = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const pricingTable = [
  {
    plan: "Tailwind CSS",
    monthly: "Free",
    annual: "Free",
    limits: "Framework only; bring your own stack/hosting",
    notes: "Best for dev teams who own the codebase and deployment pipeline.",
  },
  {
    plan: "Webflow CMS",
    monthly: "From ~US$23/mo",
    annual: "Lower when billed annually",
    limits: "Site & traffic limits, CMS items, editors",
    notes: "All-in-one hosting + CMS; great for marketing and content-heavy sites.",
  },
  {
    plan: "Framer Site",
    monthly: "From ~US$20/mo",
    annual: "Lower on annual plans",
    limits: "Pages & traffic depend on tier",
    notes: "Modern design + hosting for landing pages and campaigns.",
  },
];

const faqs = [
  {
    q: `Is Tailwind better than Webflow or Framer in ${YEAR}?`,
    a: "It depends on your team. Tailwind wins for developer control, performance, and design systems. Webflow wins for visual CMS sites without code. Framer wins for modern, motion-rich marketing pages with a fast builder.",
  },
  {
    q: "Which is fastest to ship marketing pages?",
    a: "Framer and Webflow. Tailwind is fastest for dev teams already in code, but non-devs will ship much faster using Webflow or Framer.",
  },
  {
    q: "Which gives the most design freedom?",
    a: "Tailwind offers the most freedom for code-first teams. Framer offers high freedom for motion and modern visuals. Webflow offers strong visual control plus structured CMS, which is ideal for content-heavy sites.",
  },
  {
    q: "Which handles hosting and CMS?",
    a: "Webflow and Framer both include hosting and CMS-like collections. Tailwind is just the CSS framework—you bring your hosting, build system, and CMS or headless CMS.",
  },
  {
    q: "What should a startup with a small team pick?",
    a: "If you have developers and want long-term control, Tailwind + a framework like Next.js is great. If you are more design/marketing-led, Webflow or Framer lets you own the site without waiting on dev sprints.",
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
      "Maximum control for developers",
      "Excellent performance via JIT and purging",
      "Great for design systems and product UI",
      "Works with any modern framework or stack",
      "No vendor lock-in; you own the code",
    ],
    cons: [
      "Requires coding skills and dev workflow",
      "No built-in hosting, CMS, or editor UI",
      "Non-devs depend on dev handoff for changes",
    ],
  },
  webflow: {
    pros: [
      "Visual builder + CMS + hosting in one",
      "Great for marketing and content teams",
      "Rich interactions and SEO controls baked in",
      "Client-friendly editor for copy and CMS items",
    ],
    cons: [
      "Less flexible than a fully custom codebase",
      "Pricing is per site/traffic and can add up",
      "Complex logic and app-like features require custom code or external services",
    ],
  },
  framer: {
    pros: [
      "Modern components, animations, and motion by default",
      "Very fast for landing pages and campaigns",
      "Built-in hosting, SSL, and analytics",
      "Design-led workflow that feels natural to product designers",
    ],
    cons: [
      "CMS-like collections are newer and less structured than Webflow",
      "More focused on marketing sites than heavy content portals",
      "Advanced custom logic and integrations are more limited than full custom code",
    ],
  },
};

const featureBullets = {
  philosophy: [
    "Tailwind CSS: Utility-first classes keep you in code and encourage component-driven design. Ideal for teams that treat the website as part of the product UI.",
    "Webflow: Visual-first builder that mirrors how front-end layout/CSS works, but in a no-code canvas. Content editors work directly in the CMS.",
    "Framer: Design-led builder with a strong focus on motion, components, and rapid testing of landing pages and marketing experiments.",
  ],
  performance: [
    "Tailwind CSS: Generates only the CSS you use, keeping payloads tiny and helping sites pass Core Web Vitals more easily.",
    "Webflow: Ships from their global CDN with optimised assets, but performance still depends on how heavy your layouts, animations, and embeds are.",
    "Framer: Uses a modern stack and CDN; motion-heavy pages look great but should be optimised to avoid over-animating.",
  ],
  workflow: [
    "Tailwind CSS: Works best in Git-based workflows with code review, CI/CD, and shared component libraries.",
    "Webflow: Lets marketers and designers own the marketing site; engineers can jump in for advanced custom code or integrations.",
    "Framer: Great for design and growth teams running experiments on hero sections, pricing pages, and campaign microsites.",
  ],
  cmsSeo: [
    "Tailwind CSS: CMS and SEO depend on the stack you pair it with (headless CMS, WordPress, Sanity, Contentful, etc.).",
    "Webflow: Mature CMS with collections, references, and SEO controls (meta tags, Open Graph, redirects) built in.",
    "Framer: Simpler CMS-like collections and SEO controls that are enough for most marketing and startup sites.",
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

export default function TailwindVsWebflowVsFramerPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Tailwind vs Webflow vs Framer – Which to choose? (${YEAR})`}
        description="Deep comparison of Tailwind CSS, Webflow, and Framer on speed, design freedom, CMS, hosting, and pricing so dev, design, and marketing teams can pick the right stack."
        canonical={canonical}
        keywords={`${primaryKeyword}, frontend tools, css frameworks, webflow vs framer, no-code vs code`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
          Frontend & Sites
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Tailwind vs Webflow vs Framer – Honest Comparison ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Tailwind is best for developers who want full control, performance, and reusable design
          systems. Webflow is best for marketers and designers who need visual CMS + hosting without
          code. Framer is best for teams who want modern, animated landing pages and experiments
          live quickly. Here is how they compare on speed, control, content, and long-term
          scalability.
        </p>

        {/* Quick verdict / highlight cards */}
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <div className="rounded-3xl bg-sky-50/90 p-6 ring-1 ring-sky-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-sky-800">
              <Sparkles className="h-5 w-5" />
              <span>Quick verdict</span>
            </div>
            <p className="mt-2 text-base text-slate-800">
              Choose <strong>Tailwind CSS</strong> if you have developers and want a custom,
              high-performance codebase. Choose <strong>Webflow</strong> if you want an all-in-one
              visual CMS + hosting stack that marketing can own. Choose{" "}
              <strong>Framer</strong> if you are design-led and need high-converting, motion-rich
              landing pages and experiments online fast.
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-sky-800">
              <Crown className="h-4 w-4" />
              Overall scoreboard leader:{" "}
              {overallWinnerKey.charAt(0).toUpperCase() + overallWinnerKey.slice(1)}{" "}
              <span className="text-xs font-medium text-sky-700">
                (avg: {averages[overallWinnerKey]}/10)
              </span>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Palette className="h-5 w-5 text-sky-700" />
              Best for dev control
            </div>
            <p className="mt-1 text-sm text-slate-700">
              Tailwind gives developers total control to build brand systems and components without
              CSS bloat or visual builder limitations.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Workflow className="h-5 w-5 text-indigo-700" />
              Best for no-code CMS
            </div>
            <p className="mt-1 text-sm text-slate-700">
              Webflow lets designers and marketers build CMS-backed sites, manage content, and
              handle SEO without engineering sprints.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Workflow className="h-5 w-5 text-purple-700" />
              Best for landing pages
            </div>
            <p className="mt-1 text-sm text-slate-700">
              Framer is perfect for high-impact, animated marketing pages, launches, and A/B tests
              that need to move fast.
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

        {/* Side-by-Side Comparison */}
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
                  <th className="px-4 py-3">Webflow</th>
                  <th className="px-4 py-3">Framer</th>
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
                    <td className="px-4 py-3 text-slate-700">{row.webflow}</td>
                    <td className="px-4 py-3 text-slate-700">{row.framer}</td>
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
                  <th className="px-4 py-3">Webflow</th>
                  <th className="px-4 py-3">Framer</th>
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
                          winnerKey === "webflow"
                            ? "font-semibold text-indigo-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.webflow}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "framer"
                            ? "font-semibold text-purple-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.framer}
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
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages.webflow}
                  </td>
                  <td className="px-4 py-3 font-semibold text-purple-800">
                    {averages.framer}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Feature comparison sections */}
        <section className="mt-12 space-y-8">
          <h2 className="text-2xl font-bold">
            How Tailwind, Webflow, and Framer actually feel to use
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
            <h3 className="text-xl font-semibold">CMS & SEO handling</h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.cmsSeo.map((item) => (
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
            Pricing changes frequently and varies by region.{" "}
            <strong>Tailwind</strong> itself is free, but you pay for developers and hosting.{" "}
            <strong>Webflow</strong> and <strong>Framer</strong> bundle hosting, CMS, and visual
            editing into monthly plans—great for reducing stack complexity but something to model
            into your long-term costs.
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

        {/* Deep pros/cons block section */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">UX & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Tailwind CSS:</strong> Best for teams already comfortable with HTML/JSX and
              component libraries. There is an initial shift to utility classes, but once aligned,
              velocity and consistency improve significantly.
            </li>
            <li>
              <strong>Webflow:</strong> Designers and marketers learn it quickly. The Webflow
              University content helps teams ramp up in days and manage the site without engineering
              for most changes.
            </li>
            <li>
              <strong>Framer:</strong> Feels natural to product and brand designers who already work
              in tools like Figma. Components and variants feel familiar; more advanced logic may
              require some technical comfort.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use cases & best choices</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>SaaS product with in-house dev team:</strong>{" "}
              <span className="font-semibold">Tailwind CSS</span> is the strongest long-term bet.
              It powers marketing, app UI, and docs with one design system and great performance.
            </li>
            <li>
              <strong>Marketing-led startup without full-time devs:</strong>{" "}
              <span className="font-semibold">Webflow</span> or{" "}
              <span className="font-semibold">Framer</span> are better. They let marketing ship
              campaigns and iterate copy/design without opening a sprint.
            </li>
            <li>
              <strong>Content-heavy site or blog with complex taxonomy:</strong>{" "}
              <span className="font-semibold">Webflow</span> wins thanks to its more mature CMS,
              collection relationships, and editorial workflows.
            </li>
            <li>
              <strong>High-converting landing pages, launches, and experiments:</strong>{" "}
              <span className="font-semibold">Framer</span> is excellent for quickly testing new
              hero sections, pricing variations, and story-driven layouts.
            </li>
            <li>
              <strong>Hybrid stack (headless CMS + custom frontend):</strong>{" "}
              <span className="font-semibold">Tailwind CSS</span> plus Next.js, Remix, or similar
              gives you both performance and flexibility, with content managed in a headless CMS.
            </li>
          </ul>
        </section>

        {/* Final verdict */}
        <section className="mt-12 space-y-4 rounded-3xl bg-slate-900 p-6 text-white shadow-sm">
          <h2 className="text-2xl font-bold">Final verdict</h2>
          <ul className="space-y-2 text-sm text-slate-100">
            <li>
              <strong>Tailwind CSS:</strong> Pick Tailwind if you want a durable, high-performance
              codebase and have access to developers. It is ideal for SaaS products and companies
              that want a single design system across app and marketing.
            </li>
            <li>
              <strong>Webflow:</strong> Pick Webflow if you want an all-in-one visual CMS + hosting
              stack where marketing and content can move independently from engineering. It is
              excellent for content-heavy marketing sites and blogs.
            </li>
            <li>
              <strong>Framer:</strong> Pick Framer if you are design-led and care about modern
              motion, visuals, and experimentation for landing pages and launch sites. It is a great
              complement to a separate product UI stack.
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
