import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  Zap,
  Crown,
  ArrowLeft,
  Globe,
  BarChart3,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "webflow vs wordpress vs squarespace";
const canonical = buildCanonical("/tools/compare/webflow-vs-wordpress-vs-squarespace");

const brandMeta = {
  webflow: {
    gradient: "from-indigo-500 via-purple-500 to-blue-600",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/webflow.com",
  },
  wordpress: {
    gradient: "from-slate-600 via-slate-700 to-black",
    badge: "bg-slate-100 text-slate-900",
    logo: "https://logo.clearbit.com/wordpress.org",
  },
  squarespace: {
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/squarespace.com",
  },
};

const contenders = [
  {
    key: "webflow",
    name: "Webflow",
    blurb: "Visual development + CMS + hosting for marketing and product teams.",
    url: "https://webflow.com",
  },
  {
    key: "wordpress",
    name: "WordPress",
    blurb: "Open-source CMS powering millions of content-heavy and complex sites.",
    url: "https://wordpress.org",
  },
  {
    key: "squarespace",
    name: "Squarespace",
    blurb: "Template-led builder with built-in ecommerce, scheduling, and email.",
    url: "https://www.squarespace.com",
  },
];

const comparisonRows = [
  {
    label: "Control & customization",
    webflow: "Pixel-level layout control, classes, logic, and component libraries.",
    wordpress: "Unlimited via themes, plugins, custom code, and custom fields.",
    squarespace:
      "Template-based control with limited custom CSS/JS; enough for most simple sites.",
  },
  {
    label: "CMS / content",
    webflow: "Structured collections, references, API, and Editor mode for teams.",
    wordpress:
      "Full CMS with custom post types, taxonomies, and a vast plugin ecosystem.",
    squarespace: "Built-in collections for pages, blogs, portfolios, and commerce.",
  },
  {
    label: "Hosting & maintenance",
    webflow: "Managed hosting, CDN, SSL, backups handled by Webflow.",
    wordpress:
      "Self-hosted or managed WP; you (or your host) handle updates, plugins, and security.",
    squarespace: "Fully hosted platform with updates and infra managed for you.",
  },
  {
    label: "Extensibility",
    webflow: "Integrations via API, Zapier, Make, custom scripts, and embeds.",
    wordpress:
      "Largest plugin ecosystem, WooCommerce, membership, headless setups, and REST API.",
    squarespace: "Smaller extension store and limited APIs; strong built-in modules.",
  },
  {
    label: "Performance & SEO",
    webflow:
      "Clean front-end output and strong SEO controls; performant when built well.",
    wordpress:
      "Excellent when tuned with good themes, caching, and hosting; can be slow with heavy plugins.",
    squarespace:
      "Solid defaults, but less control over underlying HTML/CSS and performance tuning.",
  },
  {
    label: "Best fit",
    webflow:
      "Design-forward marketing sites and content hubs needing control and polish.",
    wordpress:
      "Content-heavy projects, complex workflows, or when open-source flexibility matters.",
    squarespace:
      "Solo founders and SMBs wanting simplicity, templates, and bundled commerce.",
  },
];

const scoreboard = [
  { label: "Design fidelity", scores: { webflow: 9.4, wordpress: 8.5, squarespace: 7.5 } },
  { label: "Ease of maintenance", scores: { webflow: 8.8, wordpress: 6.5, squarespace: 9.3 } },
  { label: "Extensibility", scores: { webflow: 8.5, wordpress: 9.6, squarespace: 6.8 } },
  { label: "Performance/SEO", scores: { webflow: 9.0, wordpress: 8.7, squarespace: 7.8 } },
  { label: "Value", scores: { webflow: 8.7, wordpress: 9.0, squarespace: 8.2 } },
];

const avg = (key) =>
  (
    scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  webflow: avg("webflow"),
  wordpress: avg("wordpress"),
  squarespace: avg("squarespace"),
};

const overallWinnerKey = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const overallWinnerLabel =
  overallWinnerKey === "webflow"
    ? "Webflow"
    : overallWinnerKey === "wordpress"
    ? "WordPress"
    : "Squarespace";

const pricingTable = [
  {
    plan: "Webflow CMS Site",
    monthly: "From around ~$23/mo",
    annual: "Approx. ~$276/yr",
    limits: "CMS collections, item caps, form submissions, staging & editor access",
    notes: "Strong for marketing sites, blogs, and content hubs with design demands.",
  },
  {
    plan: "Managed WordPress (e.g. SiteGround GrowBig)",
    monthly: "From around ~$24/mo",
    annual: "Approx. ~$300/yr (varies by host & promos)",
    limits: "Hosting resources, site visits, staging, plugin/theme flexibility",
    notes: "Best for larger or more complex builds where plugins and code freedom matter.",
  },
  {
    plan: "Squarespace Business",
    monthly: "From around ~$23/mo",
    annual: "Approx. ~$276/yr",
    limits: "Unlimited pages, basic ecommerce, templates, email campaigns (add-ons)",
    notes: "Great for SMBs and creators needing an all-in-one stack with minimal overhead.",
  },
];

const featureBullets = {
  design: [
    "Webflow: Visual designer closely mirrors front-end concepts (flex, grid, classes), ideal for systematic design.",
    "WordPress: Visual control depends on your theme/builder (e.g., block editor, Elementor, Divi) plus custom code.",
    "Squarespace: High-quality templates that look good out of the box, with lighter control over detailed layouts.",
  ],
  content: [
    "Webflow: CMS collections with references allow building blogs, resource hubs, directories, and more.",
    "WordPress: Gold standard for content-heavy sites, with custom post types, taxonomies, and editorial plugins.",
    "Squarespace: Simple collections and blogging are more than enough for most portfolios and small businesses.",
  ],
  hosting: [
    "Webflow: Global CDN, SSL, backups, and performance optimizations handled by the platform.",
    "WordPress: Hosting choice matters—managed WordPress hosting simplifies caching, security, and updates.",
    "Squarespace: Fully managed hosting with SSL and security built in; less control but minimal maintenance.",
  ],
};

const prosCons = {
  webflow: {
    pros: [
      "Visual development that produces clean, semantic front-end output",
      "Strong CMS with structured content and an editor UX that marketers love",
      "Managed hosting, CDN, SSL, and backups handled for you",
    ],
    cons: [
      "Steeper learning curve for non-designers or non-devs",
      "Collection/item limits on some plans can be restrictive for very large sites",
      "Less plugin-style extensibility than WordPress; custom integrations may need dev help",
    ],
  },
  wordpress: {
    pros: [
      "Open-source with full code access and control over tech stack",
      "Largest ecosystem of plugins, themes, and integrations on the market",
      "Excellent for complex or unusual requirements, including headless setups",
    ],
    cons: [
      "Requires ongoing maintenance (updates, security, backups, performance tuning)",
      "Plugin sprawl can hurt performance and reliability if unmanaged",
      "Quality varies across themes/plugins; you must curate your stack carefully",
    ],
  },
  squarespace: {
    pros: [
      "Very simple setup with opinionated, beautiful templates out of the box",
      "All-in-one approach (hosting, templates, ecommerce, scheduling, email)",
      "Minimal maintenance—no plugin updates or server management required",
    ],
    cons: [
      "Limited customisation for advanced layouts or complex UX",
      "Less flexible for custom integrations and unique business logic",
      "Harder to scale into complex content or application-style experiences",
    ],
  },
};

const faqs = [
  {
    q: `Which is best for marketers in ${YEAR}?`,
    a: "Webflow is usually best for marketers who want design control, CMS, and hosting in one platform without dealing with plugins or servers.",
  },
  {
    q: "Why still choose WordPress?",
    a: "Choose WordPress when you need open-source flexibility, a huge plugin ecosystem, advanced ecommerce, memberships, or headless architectures.",
  },
  {
    q: "Who should pick Squarespace?",
    a: "Squarespace is ideal for creators and SMBs who want quick launches, beautiful templates, built-in commerce, and minimal maintenance.",
  },
  {
    q: "Can I migrate between them?",
    a: "Yes, but migration is rarely 1-click. Expect manual work exporting/importing content, mapping fields, and redesigning layouts or components.",
  },
  {
    q: "Which platform is best for SEO?",
    a: "All three can rank well if implemented correctly. Webflow and WordPress give the most control; Squarespace focuses on good defaults with less low-level tuning.",
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

export default function WebflowVsWordPressVsSquarespacePage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Webflow vs WordPress vs Squarespace – Honest Comparison (${YEAR})`}
        description="Compare Webflow, WordPress, and Squarespace for design control, CMS, hosting, SEO, extensibility, pricing, and which platform fits your site in this year."
        canonical={canonical}
        keywords={`${primaryKeyword}, website builder comparison, CMS comparison, no-code vs WordPress`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">
          Website platforms
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Webflow vs WordPress vs Squarespace ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Three dominant ways to launch modern sites: Webflow’s visual development, WordPress’s
          open-source CMS, and Squarespace’s opinionated templates. Webflow shines for design-led,
          CMS-driven marketing sites. WordPress wins on raw flexibility. Squarespace wins on simplicity
          and speed. Here is how they compare, side by side.
        </p>

        {/* Quick verdict + scale card */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="space-y-3 rounded-3xl bg-indigo-50/90 p-6 ring-1 ring-indigo-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-indigo-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>Webflow</strong> when design control, CMS structure, and managed hosting
              matter more than plugins. Choose <strong>WordPress</strong> when you need maximum
              flexibility, deep integrations, or enterprise-grade content workflows. Choose{" "}
              <strong>Squarespace</strong> when you want a polished, all-in-one website with minimal
              maintenance.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-indigo-800">
              <Crown className="h-4 w-4" /> Overall scoreboard winner: {overallWinnerLabel}{" "}
              <span className="text-xs font-medium text-indigo-700">
                (avg: {averages[overallWinnerKey]}/10)
              </span>
            </div>
          </div>
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Globe className="h-5 w-5 text-indigo-700" /> Best for long-term scale
            </div>
            <p className="text-sm text-slate-700">
              <strong>WordPress</strong> remains unmatched for large, complex, or unusual needs where
              open-source control, plugins, and custom architectures are critical.
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
                <Sparkles className="h-5 w-5 text-white/80" />
              </div>
              <p className="relative mt-3 text-sm font-medium text-white/90">{card.blurb}</p>
            </a>
          ))}
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-indigo-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Webflow</th>
                  <th className="px-4 py-3">WordPress</th>
                  <th className="px-4 py-3">Squarespace</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.webflow}</td>
                    <td className="px-4 py-3 text-slate-700">{row.wordpress}</td>
                    <td className="px-4 py-3 text-slate-700">{row.squarespace}</td>
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
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Webflow</th>
                  <th className="px-4 py-3">WordPress</th>
                  <th className="px-4 py-3">Squarespace</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const { webflow, wordpress, squarespace } = row.scores;
                  const winnerValue = Math.max(webflow, wordpress, squarespace);
                  const winnerKey =
                    winnerValue === webflow
                      ? "webflow"
                      : winnerValue === wordpress
                      ? "wordpress"
                      : "squarespace";
                  const winnerLabel =
                    winnerKey === "webflow"
                      ? "Webflow"
                      : winnerKey === "wordpress"
                      ? "WordPress"
                      : "Squarespace";

                  return (
                    <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "webflow"
                            ? "font-semibold text-indigo-800"
                            : "text-slate-700"
                        }`}
                      >
                        {webflow}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "wordpress"
                            ? "font-semibold text-slate-900"
                            : "text-slate-700"
                        }`}
                      >
                        {wordpress}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "squarespace"
                            ? "font-semibold text-amber-700"
                            : "text-slate-700"
                        }`}
                      >
                        {squarespace}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">
                        {winnerLabel}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-indigo-50 via-slate-50 to-amber-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages.webflow}
                  </td>
                  <td className="px-4 py-3 font-semibold text-slate-900">
                    {averages.wordpress}
                  </td>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages.squarespace}
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
            <Gauge className="h-6 w-6 text-indigo-600" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Zap className="h-5 w-5 text-indigo-600" /> Design & visual control
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.design.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Layers className="h-5 w-5 text-slate-700" /> CMS & content operations
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.content.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Shield className="h-5 w-5 text-amber-600" /> Hosting, performance & SEO
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.hosting.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Pricing snapshots</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Monthly (approx.)</th>
                  <th className="px-4 py-3">Annual (approx.)</th>
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
            Pricing changes frequently and varies by region, promos, and traffic tiers. Always confirm
            current pricing and limits on each platform’s official pricing page before committing.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Webflow:</strong> Feels like a visual front-end IDE. Once you understand
              classes, flexbox, and grid, you get a powerful, systemised design workflow—but it takes
              time to learn.
            </li>
            <li>
              <strong>WordPress:</strong> Familiar to many teams, but UX depends heavily on your
              theme, block editor, and plugin choices. Managed hosts and good curation help a lot.
            </li>
            <li>
              <strong>Squarespace:</strong> The smoothest UX for non-technical users. You trade some
              flexibility for a much simpler, guided experience.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Design-led marketing sites and content hubs:</strong> Webflow wins for clean,
              systemised front-end and a CMS that marketing teams can control.
            </li>
            <li>
              <strong>Complex content, membership, or custom workflows:</strong> WordPress wins with
              plugins, custom code, and the ability to run headless or hybrid architectures.
            </li>
            <li>
              <strong>Portfolio sites, local businesses, and simple ecommerce:</strong> Squarespace
              wins with templates, scheduling, and built-in commerce that just work.
            </li>
            <li>
              <strong>Agencies serving multiple client types:</strong> Use Webflow for design-driven
              marketing work, WordPress for complex or enterprise needs, and Squarespace for
              budget-sensitive, speed-first projects.
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
              <h3 className="text-lg font-semibold">Webflow</h3>
              <p className="text-sm text-slate-700">
                Best when you want a long-term marketing site or content hub with strong visual
                control, a structured CMS, and managed hosting under one roof.
              </p>
              <p className="mt-2 text-sm font-semibold text-indigo-700">
                Ideal for: SaaS and product marketing teams, design-led brands, agencies.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">WordPress</h3>
              <p className="text-sm text-slate-700">
                Best for complex requirements, heavy content, or when you need maximum plugin and
                integration flexibility with full code access.
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-800">
                Ideal for: Publishers, large blogs, membership sites, custom applications.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Squarespace</h3>
              <p className="text-sm text-slate-700">
                Best for small businesses and creators who want a good-looking site, basic ecommerce,
                and email without managing plugins or servers.
              </p>
              <p className="mt-2 text-sm font-semibold text-amber-700">
                Ideal for: Local services, photographers, coaches, and solo brands.
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
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-indigo-700 ring-1 ring-indigo-100 hover:bg-indigo-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
