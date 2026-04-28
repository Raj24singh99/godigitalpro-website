import React from "react";
import {
  Sparkles,
  Crown,
  Layers,
  BarChart3,
  ArrowLeft,
  Gauge,
  Zap,
  Shield,
  PenTool,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "webflow vs framer vs wix";
const canonical = buildCanonical("/tools/compare/webflow-vs-framer-vs-wix");

const brandMeta = {
  webflow: {
    gradient: "from-emerald-500 via-teal-500 to-indigo-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/webflow.com",
  },
  framer: {
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/framer.com",
  },
  wix: {
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/wix.com",
  },
};

const contenders = [
  {
    key: "webflow",
    name: "Webflow",
    blurb: "Best balance of design control, CMS depth, and production-ready output.",
    url: "https://webflow.com/",
    slug: "webflow",
  },
  {
    key: "framer",
    name: "Framer",
    blurb: "Fastest way to ship modern landing pages with motion and interactions.",
    url: "https://www.framer.com/",
    slug: "framer",
  },
  {
    key: "wix",
    name: "Wix",
    blurb: "Easiest drag-and-drop builder with a huge app market for small businesses.",
    url: "https://www.wix.com/",
    slug: "wix",
  },
];

const comparisonRows = [
  {
    label: "Primary use case",
    webflow: "Design-led, CMS-heavy marketing sites and content hubs.",
    framer: "High-converting landing pages with motion and experiments.",
    wix: "Small business sites, portfolios, and simple stores.",
  },
  {
    label: "Design control",
    webflow:
      "High-fidelity layout control with classes, flex/grid, and responsive breakpoints. Feels closest to front-end dev.",
    framer:
      "Pixel-perfect canvas with built-in animations and components. Excellent for visually rich hero sections and flows.",
    wix: "Template-led editor with good flexibility for simple layouts; less precise than Webflow/Framer.",
  },
  {
    label: "CMS & collections",
    webflow:
      "Mature CMS with references, relationships, and API—strong choice for blogs, directories, and content systems.",
    framer:
      "Light CMS for marketing—great for landing page sections, simple blogs, and components that pull from collections.",
    wix: "Has a database/CMS layer, but more opinionated and less flexible for complex schemas.",
  },
  {
    label: "Performance & SEO",
    webflow:
      "Clean HTML/CSS output, good SEO controls (meta, redirects, sitemap). Excellent when built with good practices.",
    framer:
      "Good performance and SEO options for most marketing sites; fast iteration enables quick CRO and content changes.",
    wix: "Can be performant with tuning, but heavier output and more reliance on apps and built-in scripts.",
  },
  {
    label: "Speed to publish",
    webflow:
      "Fast once you know the class system. Template + component libraries can drastically speed up build times.",
    framer:
      "Fastest to ship modern landing pages—drag, drop, animate, and publish with minimal setup.",
    wix: "Very quick for first-time builders using wizards and templates. Great for non-designers.",
  },
  {
    label: "Apps & ecosystem",
    webflow:
      "Strong ecosystem of templates, component libraries, and third-party integrations (forms, automation, memberships).",
    framer:
      "Smaller ecosystem but growing; strong design system libraries and marketing templates.",
    wix: "Largest app market with many built-in widgets (bookings, chat, store, blog, etc.).",
  },
  {
    label: "Learning curve",
    webflow:
      "Steep at first; easier if you think like a front-end dev. Rewards you with cleaner long-term systems.",
    framer:
      "Moderate for designers used to Figma/sketch tools; easier than Webflow for motion-heavy marketing work.",
    wix: "Shallowest curve. Most non-technical owners can get something live in a weekend.",
  },
  {
    label: "Best for",
    webflow: "Design/dev teams and agencies building scalable marketing systems.",
    framer: "Product marketing teams and growth squads iterating on landing pages.",
    wix: "Solopreneurs, local businesses, and small stores needing a quick web presence.",
  },
];

const scoreboard = [
  { label: "Design control / fidelity", webflow: 9.3, framer: 9.5, wix: 7.8 },
  { label: "CMS & collections", webflow: 9.2, framer: 7.5, wix: 7.0 },
  { label: "Performance / SEO readiness", webflow: 9.0, framer: 8.6, wix: 7.4 },
  { label: "Speed to publish", webflow: 8.4, framer: 9.4, wix: 9.0 },
  { label: "App ecosystem / widgets", webflow: 8.4, framer: 7.8, wix: 9.0 },
  { label: "Ease for non-devs", webflow: 7.8, framer: 8.3, wix: 9.4 },
];

const avg = (tool) =>
  (
    scoreboard.reduce((sum, row) => sum + (row[tool] || 0), 0) / scoreboard.length
  ).toFixed(1);

const averages = {
  webflow: avg("webflow"),
  framer: avg("framer"),
  wix: avg("wix"),
};

const overallWinnerKey = (() => {
  const numeric = {
    webflow: parseFloat(averages.webflow),
    framer: parseFloat(averages.framer),
    wix: parseFloat(averages.wix),
  };
  const maxVal = Math.max(numeric.webflow, numeric.framer, numeric.wix);
  return Object.keys(numeric).find((k) => numeric[k] === maxVal) || "webflow";
})();

const overallWinnerLabel =
  overallWinnerKey === "webflow"
    ? "Webflow"
    : overallWinnerKey === "framer"
    ? "Framer"
    : "Wix";

const pricingTable = [
  {
    plan: "Webflow CMS Site",
    monthly: "From around ~$29/mo",
    annual: "Approx. ~$23/mo when billed annually",
    limits: "CMS collections, items limits, form submissions, staging, editor access",
    notes: "Best for marketing sites, blogs, and content hubs with higher design demands.",
  },
  {
    plan: "Framer Basic / Pro",
    monthly: "From around ~$15–$30/mo",
    annual: "Lower effective rate on annual",
    limits: "CMS items, publishing limits, password protection, basic analytics",
    notes: "Strong value if you ship many landing pages and test variants frequently.",
  },
  {
    plan: "Wix Business Basic",
    monthly: "From around ~$27/mo",
    annual: "Varies with promos and region",
    limits: "Custom domain, storage, bandwidth, basic ecommerce features",
    notes: "Good default for small businesses needing apps (bookings, store, etc.) baked in.",
  },
];

const featureBullets = {
  design: [
    "Webflow: Layouts built with flexbox and CSS grid, reusable classes, and components for fully systemised design.",
    "Framer: Canvas-style editing with animations, page transitions, and interactions that feel close to Figma prototypes.",
    "Wix: Drag-and-drop editor with structured sections and templates—strong enough for typical SMB brochure sites.",
  ],
  content: [
    "Webflow: CMS is a core strength—references, multi-collection relationships, and API access suit serious content operations.",
    "Framer: CMS is lighter but perfect for landing page sections, hero variants, testimonials, and simple blogs.",
    "Wix: Content tools are fine for basic blogs and stores, with many apps that add forms, bookings, and more.",
  ],
  hosting: [
    "Webflow: Global hosting, SSL, backups, and staging built in. Clean output helps performance and Core Web Vitals.",
    "Framer: Fast hosting for marketing sites, with built-in optimisations and simple publishing workflow.",
    "Wix: Fully managed hosting and security, though additional apps/scripts can add weight and impact speed.",
  ],
};

const prosCons = {
  webflow: {
    pros: [
      "High design fidelity with production-grade layouts and clean HTML/CSS output",
      "Robust CMS ideal for blogs, resources, directories, and content systems",
      "Good SEO controls, staging, and editor experience for content teams",
    ],
    cons: [
      "Steeper learning curve for non-devs or casual builders",
      "Can feel slower than Framer for quick landing page experiments",
      "Pricing can stack up once you add multiple CMS sites and workspaces",
    ],
  },
  framer: {
    pros: [
      "Fastest to ship modern, animated landing pages that feel like product UI",
      "Great for product marketing teams that iterate on messaging and layouts often",
      "Designers familiar with Figma adapt quickly to the canvas and interactions",
    ],
    cons: [
      "CMS is more limited for complex, content-heavy architectures",
      "Ecosystem is smaller than Wix and less dev-focused than Webflow",
      "Exported code is not the same as a hand-crafted front-end architecture",
    ],
  },
  wix: {
    pros: [
      "Easiest onboarding and setup for non-technical founders and business owners",
      "Huge app market with ready-made modules for bookings, stores, chat, events, and more",
      "All-in-one approach (domain, hosting, apps) simplifies vendor management",
    ],
    cons: [
      "Heavier output and scripts; performance can lag without optimisation",
      "Less flexible for advanced CMS or highly custom layouts",
      "Harder to enforce design systems across larger, multi-site setups",
    ],
  },
};

const faqs = [
  {
    q: `Who wins overall in ${YEAR}?`,
    a: "Webflow is the best all-rounder for design control, CMS depth, and SEO. Framer wins for shipping modern landing pages fast. Wix wins for simplicity and bundled apps for small businesses.",
  },
  {
    q: "Is Webflow better than Framer?",
    a: "Webflow is better when you need a serious CMS, clean output, and long-term maintainability. Framer is better if your priority is quickly launching and iterating on visually rich marketing pages.",
  },
  {
    q: "Which is easiest for beginners?",
    a: "Wix is the easiest for beginners thanks to templates, wizards, and its app market. Framer comes next for designers. Webflow requires more of a front-end mindset.",
  },
  {
    q: "Which should I pick for content-heavy sites?",
    a: "Choose Webflow. Its CMS is built for blogs, directories, and content hubs with schema flexibility and editor workflows.",
  },
  {
    q: "Which is best for rapid experiments and CRO?",
    a: "Framer is a strong pick for rapid landing page experiments. Pair it with analytics and A/B testing tools to validate what works.",
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
  const key = lowered.includes("webflow")
    ? "webflow"
    : lowered.includes("framer")
    ? "framer"
    : lowered.includes("wix")
    ? "wix"
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
          <span className="text-sm font-bold text-white">
            {name.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>
      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${meta.badge}`}>{name}</span>
    </div>
  );
};

export default function WebflowVsFramerVsWixPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Webflow vs Framer vs Wix (${YEAR}) – Website builder comparison`}
        description="Compare Webflow, Framer, and Wix for design control, CMS, performance, speed-to-publish, ecosystem, pricing, and which website builder to choose for your next project."
        canonical={canonical}
        keywords={`${primaryKeyword}, website builder comparison, no-code web design, marketing site builders`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Website builders
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Webflow vs Framer vs Wix ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Webflow is the best all-round builder for design control, clean output, and CMS-driven
          marketing systems. Framer is the fastest to ship modern, animated landing pages. Wix is the
          simplest way for small businesses to get online with a huge app market. Here is a structured
          breakdown to decide which builder actually fits your use-case.
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
                <ExternalLink className="h-5 w-5 text-white/80" />
              </div>
              <p className="relative mt-3 text-sm font-medium text-white/90">{item.blurb}</p>
            </a>
          ))}
        </div>

        {/* Quick verdict + overall winner */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-emerald-100 bg-emerald-50 px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-emerald-900">
              <Sparkles className="h-5 w-5" />
              <p className="text-lg font-semibold">Quick verdict</p>
            </div>
            <p className="mt-2 text-slate-800">
              Choose <strong>Webflow</strong> if you need a design-led, CMS-driven site with clean,
              production-ready output. Pick <strong>Framer</strong> if your priority is shipping and
              iterating on modern landing pages packed with motion. Go with <strong>Wix</strong> if
              you want the easiest, all-in-one setup for a small business, portfolio, or local brand.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Crown className="h-4 w-4 text-emerald-600" /> Overall scoreboard winner:{" "}
              {overallWinnerLabel}{" "}
              <span className="text-xs text-slate-600">
                (avg: {averages[overallWinnerKey]}/10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              Choose based on whether you prioritise deep CMS and clean output (Webflow), rapid
              marketing experiments with motion (Framer), or ease and bundled apps (Wix).
            </p>
          </div>
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-emerald-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Webflow</th>
                  <th className="px-4 py-3">Framer</th>
                  <th className="px-4 py-3">Wix</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.webflow}</td>
                    <td className="px-4 py-3 text-slate-700">{row.framer}</td>
                    <td className="px-4 py-3 text-slate-700">{row.wix}</td>
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
                  <th className="px-4 py-3">Webflow</th>
                  <th className="px-4 py-3">Framer</th>
                  <th className="px-4 py-3">Wix</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const winnerValue = Math.max(row.webflow, row.framer, row.wix);
                  const winner =
                    winnerValue === row.webflow
                      ? "Webflow"
                      : winnerValue === row.framer
                      ? "Framer"
                      : "Wix";
                  return (
                    <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Webflow"
                            ? "font-semibold text-emerald-800"
                            : "text-slate-700"
                        }`}
                      >
                        {row.webflow}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Framer"
                            ? "font-semibold text-indigo-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.framer}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Wix"
                            ? "font-semibold text-amber-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.wix}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">{winner}</td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-emerald-50 via-indigo-50 to-amber-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.webflow}
                  </td>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages.framer}
                  </td>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages.wix}
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
            <Gauge className="h-6 w-6 text-emerald-600" /> Feature Comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <PenTool className="h-5 w-5 text-emerald-600" /> Design & layout
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.design.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Zap className="h-5 w-5 text-indigo-600" /> CMS & content operations
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
            Pricing changes frequently and depends on traffic, features, and promotions. Always check
            each vendor’s official pricing page for current tiers and limits before committing.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User Experience & Learning Curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Webflow:</strong> Feels like a visual front-end IDE. Once you grasp classes and
              layout, you get a lot of power and consistency, but it is the most demanding to learn.
            </li>
            <li>
              <strong>Framer:</strong> Comfortable for designers coming from Figma. You can design and
              publish in the same canvas, with interactions that feel close to prototype tools.
            </li>
            <li>
              <strong>Wix:</strong> Built for non-technical owners. Most flows are guided, with
              templates and wizards so you can get something live extremely quickly.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-World Use-Cases & Winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Content-heavy marketing sites and resources:</strong> Webflow wins with its CMS,
              design control, and editor experience for content teams.
            </li>
            <li>
              <strong>High-velocity landing page experiments (CRO/growth):</strong> Framer wins thanks
              to fast editing, animations, and a smooth publish loop.
            </li>
            <li>
              <strong>Local businesses, solo brands, and small ecommerce:</strong> Wix wins as an
              all-in-one platform with bookings, contacts, and store modules.
            </li>
            <li>
              <strong>Agencies serving multiple client types:</strong> Use Webflow for more serious
              marketing builds and Framer/Wix for budget and speed-focused engagements.
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
                Best when you want a long-term, scalable marketing site with serious CMS and strong
                SEO foundations, while keeping design and dev tightly aligned.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: Agencies, SaaS marketing teams, content-heavy brands.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Framer</h3>
              <p className="text-sm text-slate-700">
                Best for launching and iterating on visually rich, interactive landing pages at high
                speed without a heavy front-end dev pipeline.
              </p>
              <p className="mt-2 text-sm font-semibold text-indigo-700">
                Ideal for: Product marketing, growth teams, launch campaigns.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Wix</h3>
              <p className="text-sm text-slate-700">
                Best for small businesses that need bookings, contact forms, and simple stores online
                fast, without touching code or complex layout systems.
              </p>
              <p className="mt-2 text-sm font-semibold text-amber-700">
                Ideal for: Local businesses, freelancers, small ecommerce and service brands.
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
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-emerald-700 ring-1 ring-emerald-100 hover:bg-emerald-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
