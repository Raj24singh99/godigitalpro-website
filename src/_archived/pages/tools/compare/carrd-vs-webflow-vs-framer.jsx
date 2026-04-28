import React from "react";
import {
  Sparkles,
  Crown,
  ArrowLeft,
  MonitorSmartphone,
  PenTool,
  Rocket,
  Layers,
  Gauge,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "carrd vs webflow vs framer";
const canonical = buildCanonical("/tools/compare/carrd-vs-webflow-vs-framer");

const brandMeta = {
  carrd: {
    gradient: "from-amber-500 via-rose-500 to-slate-700",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/carrd.co",
  },
  webflow: {
    gradient: "from-indigo-500 via-purple-500 to-blue-600",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/webflow.com",
  },
  framer: {
    gradient: "from-sky-500 via-cyan-500 to-blue-700",
    badge: "bg-sky-100 text-sky-900",
    logo: "https://logo.clearbit.com/framer.com",
  },
};

const contenders = [
  {
    key: "carrd",
    name: "Carrd",
    blurb: "One-page builder for landing pages, link in bio, and quick launches.",
    url: "https://carrd.co",
  },
  {
    key: "webflow",
    name: "Webflow",
    blurb: "Visual builder with CMS, ecommerce, and advanced interactions.",
    url: "https://webflow.com",
  },
  {
    key: "framer",
    name: "Framer",
    blurb: "Design-forward builder with motion and CMS for marketing sites.",
    url: "https://framer.com",
  },
];

const comparisonRows = [
  {
    label: "Best fit",
    carrd: "One-page sites, link-in-bio, quick launches.",
    webflow: "Multi-page sites, CMS, ecommerce.",
    framer: "Design-heavy marketing pages with motion.",
  },
  {
    label: "Learning curve",
    carrd: "Very low; launch in minutes.",
    webflow: "Moderate; more structure and CMS concepts.",
    framer: "Moderate; design-oriented controls.",
  },
  {
    label: "CMS / multi-page",
    carrd: "No CMS; single-page focus.",
    webflow: "Robust CMS and collections.",
    framer: "Light CMS collections; good for landing variations.",
  },
  {
    label: "Ecommerce",
    carrd: "Via embeds/buttons only.",
    webflow: "Native ecommerce.",
    framer: "Embeds or integrations; no native cart.",
  },
  {
    label: "Motion/animation",
    carrd: "Basic effects.",
    webflow: "Advanced interactions; timelines.",
    framer: "Strong motion presets and components.",
  },
  {
    label: "Pricing feel",
    carrd: "Very low annual per-account.",
    webflow: "Per-site plans; higher with CMS/ecommerce.",
    framer: "Per-site plans; mid-tier for CMS/traffic.",
  },
];

const scoreboard = [
  { label: "Launch speed", scores: { carrd: 9.8, webflow: 7.8, framer: 8.2 } },
  { label: "Design flexibility", scores: { carrd: 7.0, webflow: 9.3, framer: 9.1 } },
  { label: "CMS capability", scores: { carrd: 4.5, webflow: 9.0, framer: 7.8 } },
  { label: "Value for money", scores: { carrd: 9.7, webflow: 8.0, framer: 8.3 } },
  { label: "Motion/animations", scores: { carrd: 6.0, webflow: 8.9, framer: 9.4 } },
];

const avg = (key) =>
  (scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0) / scoreboard.length).toFixed(1);

const averages = {
  carrd: avg("carrd"),
  webflow: avg("webflow"),
  framer: avg("framer"),
};

const overallWinnerKey = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const pricingTable = [
  {
    plan: "Carrd Pro (per account)",
    monthly: "Effective ~$1–$2/mo",
    annual: "Low-cost annual per account",
    limits: "Multiple one-page sites, forms, custom domains on higher tiers.",
    notes: "Best for creators/marketers spinning up many simple landing pages or link hubs.",
  },
  {
    plan: "Webflow CMS Site",
    monthly: "~$23–$29/mo per site",
    annual: "Lower effective price on annual",
    limits: "Includes CMS collections, form submissions, traffic limits per tier.",
    notes: "Ideal for content-heavy sites, blogs, and marketing sites that need structure.",
  },
  {
    plan: "Framer Site (with CMS)",
    monthly: "~$20–$30/mo per site",
    annual: "Discounts available annually",
    limits: "Per-site traffic and CMS collections limits; varies by tier.",
    notes: "Optimized for high-end marketing sites that need motion and light CMS.",
  },
];

const featureBullets = {
  structure: [
    "Carrd: Single-page structure is perfect for simple funnels, bios, and MVP validation pages.",
    "Webflow: Full control over pages, collections, and template-based layouts for complex sites.",
    "Framer: CMS is lighter than Webflow but great for landing variations, case studies, and blog-lite setups.",
  ],
  design: [
    "Carrd: Opinionated components and layouts; enough styling for simple, clean landers.",
    "Webflow: Pixel-level layout control, responsive breakpoints, and powerful interactions/timelines.",
    "Framer: Design-first canvas with strong motion presets, components, and smooth scrolling experiences.",
  ],
  pricing: [
    "Carrd: Cheapest option by far; one account can host many small sites.",
    "Webflow: Pricing scales per site and increases with CMS/ecommerce needs.",
    "Framer: Per-site pricing similar to Webflow mid-tiers; strong value for premium marketing sites.",
  ],
};

const prosCons = {
  carrd: {
    pros: [
      "Fastest way to get a clean one-page site live.",
      "Very low annual cost for multiple sites per account.",
      "Solid support for forms, embeds, and basic integrations.",
    ],
    cons: [
      "No native CMS or multi-page support.",
      "Limited design flexibility compared with Webflow/Framer.",
      "Not ideal for larger sites, blogs, or content-heavy projects.",
    ],
  },
  webflow: {
    pros: [
      "Full CMS with collections, dynamic content, and multi-page routing.",
      "Advanced layout and interaction control for sophisticated designs.",
      "Native ecommerce stack, including carts and checkout.",
    ],
    cons: [
      "Steeper learning curve, especially around CMS structure and interactions.",
      "Per-site pricing gets expensive as you add more projects.",
      "Client editing is good but may feel complex for non-technical stakeholders.",
    ],
  },
  framer: {
    pros: [
      "Design-forward interface with excellent motion and animation defaults.",
      "Great fit for landing pages, startups, and modern marketing sites.",
      "Light CMS is simpler than Webflow for many use cases.",
    ],
    cons: [
      "No native ecommerce cart; relies on embeds and integrations.",
      "Less suitable for very large or highly structured content sites.",
      "Design-first workflow can feel unfamiliar if you come from HTML/CSS mindset.",
    ],
  },
};

const faqs = [
  {
    q: `Which builder is best overall in ${YEAR}?`,
    a: "Carrd wins for fastest one-page launches and lowest cost. Webflow wins for CMS-driven, multi-page, and ecommerce sites. Framer wins for design-heavy, motion-rich marketing sites that still need basic CMS.",
  },
  {
    q: "Which is cheapest?",
    a: "Carrd is significantly cheaper because pricing is per account and you can run multiple small sites. Webflow and Framer charge per site, with higher tiers for CMS, traffic, or advanced features.",
  },
  {
    q: "Who should pick Carrd?",
    a: "Choose Carrd if you need simple landing pages, waitlists, link-in-bio hubs, or quick MVP validations with forms and embeds but without CMS complexity.",
  },
  {
    q: "Who should pick Webflow?",
    a: "Choose Webflow if you are building multi-page marketing sites, blogs, or catalogs where CMS collections, reusable templates, and structured content really matter.",
  },
  {
    q: "Who should pick Framer?",
    a: "Choose Framer if you care most about premium visual design, animations, and smooth interactions for your marketing site, and you only need light CMS for pages, case studies, or blog-style content.",
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

const Score = ({ label, value }) => (
  <div className="flex items-center justify-between">
    <span>{label}</span>
    <span className="font-semibold text-slate-900">{value}</span>
  </div>
);

export default function CarrdVsWebflowVsFramerPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Carrd vs Webflow vs Framer (${YEAR}) – landing page & site builder comparison`}
        description="In-depth comparison of Carrd, Webflow, and Framer for landing pages, marketing sites, CMS-driven content, pricing, and motion design."
        canonical={canonical}
        keywords={`${primaryKeyword}, carrd review, webflow review, framer review, landing page builder comparison, no-code website builders`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
          Landing page & site builders
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Carrd vs Webflow vs Framer ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          <strong>Carrd</strong> is unbeatable for fast, one-page sites and link hubs.{" "}
          <strong>Webflow</strong> adds a powerful CMS, multi-page layouts, and ecommerce.{" "}
          <strong>Framer</strong> excels at design-forward marketing sites with motion. Your decision
          comes down to launch speed, content structure, and how far you want to push animation.
        </p>

        {/* Quick verdict + best-for */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="space-y-3 rounded-3xl bg-amber-50/90 p-6 ring-1 ring-amber-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-amber-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>Carrd</strong> for the fastest, cheapest one-page launches and
              link-in-bio hubs. Choose <strong>Webflow</strong> for CMS-driven, multi-page sites
              and ecommerce. Choose <strong>Framer</strong> for bold, animated marketing pages with
              light CMS. For many teams, Carrd is the MVP tool, Webflow the full site, and Framer
              the “flagship” marketing site.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-amber-800">
              <Crown className="h-4 w-4" /> Overall scoreboard winner:{" "}
              {overallWinnerKey.charAt(0).toUpperCase() + overallWinnerKey.slice(1)}{" "}
              <span className="text-xs font-medium text-amber-700">
                (avg: {averages[overallWinnerKey]}/10)
              </span>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="text-sm font-semibold text-slate-900">Best for</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <MonitorSmartphone className="mt-0.5 h-4 w-4 text-amber-600" />
                <span>
                  <strong>Carrd:</strong> Quick landers, bios, waitlists, and simple funnels.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <PenTool className="mt-0.5 h-4 w-4 text-indigo-600" />
                <span>
                  <strong>Webflow:</strong> CMS-powered marketing sites, blogs, and ecommerce.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Rocket className="mt-0.5 h-4 w-4 text-sky-600" />
                <span>
                  <strong>Framer:</strong> Animated, design-heavy marketing pages and startup sites.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Gradient contender cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {contenders.map((card) => {
            const meta = brandMeta[card.key];
            return (
              <a
                key={card.key}
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative block overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br ${
                  meta?.gradient || "from-slate-500 to-slate-700"
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
            );
          })}
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-amber-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 md:overflow-hidden">
            <table className="w-full text-left text-sm text-slate-800 md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Carrd</th>
                  <th className="px-4 py-3">Webflow</th>
                  <th className="px-4 py-3">Framer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="align-top">
                    <th className="px-4 py-3 font-semibold text-slate-900">
                      {row.label}
                    </th>
                    <td className="px-4 py-3">{row.carrd}</td>
                    <td className="px-4 py-3">{row.webflow}</td>
                    <td className="px-4 py-3">{row.framer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Scoreboard cards */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-indigo-600" /> Scoreboard (1–10)
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {scoreboard.map((row) => (
              <div
                key={row.label}
                className="rounded-2xl bg-slate-50 p-4 shadow-sm ring-1 ring-slate-200"
              >
                <p className="text-sm font-semibold text-slate-900">{row.label}</p>
                <div className="mt-2 space-y-1 text-sm text-slate-700">
                  <Score label="Carrd" value={row.scores.carrd} />
                  <Score label="Webflow" value={row.scores.webflow} />
                  <Score label="Framer" value={row.scores.framer} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Feature comparison */}
        <section className="mt-12 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <BarChart3 className="h-6 w-6 text-amber-600" /> Feature comparison
          </h2>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">
              Site structure & CMS
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.structure.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">
              Design flexibility & motion
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.design.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">
              Pricing model & scaling
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.pricing.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Pricing snapshots</h2>
          <div className="overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Monthly (approx.)</th>
                  <th className="px-4 py-3">Annual / terms</th>
                  <th className="px-4 py-3">Limits</th>
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
            Pricing for Carrd, Webflow, and Framer changes frequently and varies by region,
            features, and traffic. Treat these as directional only and confirm exact numbers on
            each provider’s pricing page.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Carrd:</strong> Minimal UI with almost no learning curve. You can go from idea
              to live page in under an hour, even if you have never built a site before.
            </li>
            <li>
              <strong>Webflow:</strong> Powerful but more complex. You will need to learn layout,
              CMS collections, and interactions. Great for designers used to Figma/HTML/CSS mental
              models.
            </li>
            <li>
              <strong>Framer:</strong> Very comfortable for product and brand designers. The design
              canvas and motion controls feel close to modern design tools, with the web output
              handled behind the scenes.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use cases & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Personal site, link in bio, simple lead magnet:</strong> Carrd wins with
              ultra-fast setup and low cost per account.
            </li>
            <li>
              <strong>Content-heavy marketing site, blog, or resource hub:</strong> Webflow wins
              with collections, templates, and robust CMS.
            </li>
            <li>
              <strong>Hero marketing site for a startup or product launch:</strong> Framer wins with
              motion, scroll effects, and high-end visual polish.
            </li>
            <li>
              <strong>Agency running many micro-sites and campaigns:</strong> Mix Carrd for quick
              experiments and Webflow/Framer for flagship or long-term properties.
            </li>
          </ul>
        </section>

        {/* Pros & cons */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
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
        <div className="mt-10 flex items-center gap-3 text-sm text-slate-600">
          <Link
            to="/tools"
            className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-amber-700 shadow-sm ring-1 ring-amber-100 hover:bg-amber-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
