import React from "react";
import {
  Sparkles,
  Crown,
  Layers,
  BarChart3,
  ArrowLeft,
  Gauge,
  ShieldCheck,
  Server,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "namecheap vs bluehost vs siteground";
const canonical = buildCanonical(
  "/tools/compare/namecheap-vs-bluehost-vs-siteground"
);

const brandMeta = {
  namecheap: {
    gradient: "from-orange-500 via-amber-500 to-rose-500",
    badge: "bg-orange-100 text-orange-900",
    logo: "https://logo.clearbit.com/namecheap.com",
  },
  bluehost: {
    gradient: "from-blue-500 via-sky-500 to-indigo-600",
    badge: "bg-blue-100 text-blue-900",
    logo: "https://logo.clearbit.com/bluehost.com",
  },
  siteground: {
    gradient: "from-emerald-500 via-teal-500 to-green-600",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/siteground.com",
  },
};

const contenders = [
  {
    key: "namecheap",
    name: "Namecheap",
    blurb: "Value-first domains and starter hosting with free WHOIS privacy.",
    url: "/tools/namecheap",
  },
  {
    key: "bluehost",
    name: "Bluehost",
    blurb: "Beginner-friendly WordPress hosting bundles with 1-click install.",
    url: "/tools/bluehost",
  },
  {
    key: "siteground",
    name: "SiteGround",
    blurb: "Premium WordPress performance, support and managed security.",
    url: "/tools/siteground",
  },
];

const comparisonRows = [
  {
    label: "Primary use case",
    namecheap: "Domains + budget shared hosting and EasyWP managed WP",
    bluehost: "Bundled WordPress hosting for beginners and bloggers",
    siteground: "Higher-end managed WordPress with strong support",
  },
  {
    label: "Domains",
    namecheap: "Excellent domain pricing with free privacy on many TLDs",
    bluehost: "Domains available but less competitive than Namecheap",
    siteground: "Domains offered, not the main strength",
  },
  {
    label: "Shared hosting / starter plans",
    namecheap: "Very low entry price; good for light traffic projects",
    bluehost: "Well-packaged shared plans with guided setup",
    siteground: "More expensive but tuned for performance and uptime",
  },
  {
    label: "WordPress hosting",
    namecheap: "EasyWP for budget managed WP; fewer advanced features",
    bluehost: "Tight WordPress integration, staging, auto-installers",
    siteground: "Managed WP stack with caching, staging and dev tools",
  },
  {
    label: "Performance & uptime",
    namecheap: "Good for smaller or less critical sites",
    bluehost: "Solid for typical SMB/creator sites",
    siteground: "Best performance and uptime profile of the three",
  },
  {
    label: "Security & backups",
    namecheap: "Free SSL options, paid add-ons for extras",
    bluehost: "SSL included; security suite available as add-on",
    siteground: "Advanced security, isolation and daily backups standard on many plans",
  },
  {
    label: "Support experience",
    namecheap: "Chat-first, generally responsive for core issues",
    bluehost: "Beginner-friendly reps used to WordPress questions",
    siteground: "Highly rated, fast and knowledgeable support",
  },
  {
    label: "Pricing feel",
    namecheap: "Cheapest upfront and on renewals for domains/hosting",
    bluehost: "Promotional first term pricing; watch renewals",
    siteground: "Premium pricing but aligned with features and support",
  },
  {
    label: "Best for",
    namecheap: "Budget-conscious buyers and domain portfolios",
    bluehost: "First-time WordPress users and simple business sites",
    siteground: "Serious WordPress businesses that want reliability",
  },
];

const scoreboard = [
  { label: "Price & overall value", namecheap: 9.4, bluehost: 8.4, siteground: 7.8 },
  { label: "Performance & uptime", namecheap: 8.0, bluehost: 8.3, siteground: 9.2 },
  { label: "Support quality", namecheap: 8.3, bluehost: 8.5, siteground: 9.4 },
  { label: "Ease for WordPress", namecheap: 8.2, bluehost: 9.1, siteground: 9.0 },
  { label: "Security & reliability", namecheap: 8.6, bluehost: 8.4, siteground: 9.1 },
];

const avg = (tool) =>
  (
    scoreboard.reduce((sum, row) => sum + (row[tool] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  namecheap: avg("namecheap"),
  bluehost: avg("bluehost"),
  siteground: avg("siteground"),
};

const overallWinner =
  Math.max(
    parseFloat(averages.namecheap),
    parseFloat(averages.bluehost),
    parseFloat(averages.siteground)
  ) === parseFloat(averages.namecheap)
    ? "Namecheap"
    : Math.max(parseFloat(averages.bluehost), parseFloat(averages.siteground)) ===
      parseFloat(averages.bluehost)
    ? "Bluehost"
    : "SiteGround";

const pricingTable = [
  {
    plan: "Namecheap Shared / EasyWP starter",
    monthly: "From around ~$1.98–$3.88/mo (promo)",
    annual: "Lower effective rate with annual prepay",
    limits: "Entry-level storage, traffic and fewer premium features",
    notes: "Best if you want lowest-cost domains plus light hosting or EasyWP for budget managed WordPress.",
  },
  {
    plan: "Bluehost Basic / Choice Plus (shared WP)",
    monthly: "From around ~$2.95–$5.45/mo (promo)",
    annual: "Cheapest when paid multi-year upfront",
    limits: "Unmetered bandwidth with fair use; features scale with tier",
    notes: "Well-packaged for first WordPress site with install, SSL and email bundled.",
  },
  {
    plan: "SiteGround StartUp / GrowBig",
    monthly: "From around ~$3.99–$7.99/mo (promo)",
    annual: "Significant jump after promo term",
    limits: "Visits and storage recommendations per plan, built-in caching and daily backups",
    notes: "Best when performance, reliability and support matter more than rock-bottom pricing.",
  },
];

const featureBullets = {
  hosting: [
    "Namecheap: Shared hosting, VPS, reseller and EasyWP managed WordPress built on a budget-first model.",
    "Bluehost: Shared, VPS, dedicated and optimized WordPress plans with strong cPanel and WP integration.",
    "SiteGround: Cloud and managed WordPress hosting focused on speed, security and developer tooling.",
  ],
  performance: [
    "Namecheap: Good enough performance for smaller sites; heavier apps may need higher tiers or VPS.",
    "Bluehost: Reliable for typical SMB and creator sites; caching and CDNs recommended for spikes.",
    "SiteGround: Performance-optimised stack with in-house caching, Google Cloud infrastructure and PHP tuning.",
  ],
  support: [
    "Namecheap: 24/7 chat with solid documentation; best for straightforward issues.",
    "Bluehost: Known for onboarding help and WordPress-focused guidance for beginners.",
    "SiteGround: Some of the strongest support in this tier, with quick, technically detailed responses.",
  ],
};

const prosCons = {
  namecheap: {
    pros: [
      "Among the lowest domain prices with free WHOIS privacy on many TLDs",
      "Very affordable shared hosting and EasyWP managed WordPress options",
      "Simple dashboards for managing large domain portfolios",
    ],
    cons: [
      "Shared hosting stack is basic compared to performance-focused hosts",
      "Interface and onboarding less guided than Bluehost for new WP users",
      "Advanced features often require moving to VPS or external tools",
    ],
  },
  bluehost: {
    pros: [
      "Beginner-friendly WordPress onboarding with 1-click installs and guided flows",
      "Bundled email, SSL and basic staging on many plans",
      "Tight integration with WordPress.org ecosystem and themes",
    ],
    cons: [
      "Renewal pricing jumps noticeably after promo term",
      "Performance is good but not as tuned as SiteGround for high-traffic WP",
      "Upsells for security and backups can add to total cost",
    ],
  },
  siteground: {
    pros: [
      "Excellent performance and uptime with strong caching layer",
      "High-quality support and managed features (backups, security, updates)",
      "Great fit for serious WordPress businesses and agencies",
    ],
    cons: [
      "Higher ongoing cost than Namecheap and Bluehost, especially past promo term",
      "Resource limits (visits/storage) require watching growth and upgrading on time",
      "Overkill for hobby or very small low-traffic projects",
    ],
  },
};

const faqs = [
  {
    q: `Who wins overall in ${YEAR}?`,
    a: "Namecheap wins for domain pricing and budget-friendly hosting. Bluehost wins for beginner WordPress bundles and guided setup. SiteGround wins for performance, reliability, and support if you have a more serious WordPress site.",
  },
  {
    q: "Which is best for WordPress hosting?",
    a: "Choose Bluehost if you want an easy, bundled WordPress setup on a budget. Choose SiteGround if performance, uptime, and support are critical. Namecheap’s EasyWP is solid if you care more about low cost than advanced managed features.",
  },
  {
    q: "Which is cheapest for domains?",
    a: "Namecheap is typically the cheapest for domains and renewals, often including free WHOIS privacy. Bluehost and SiteGround sell domains but are usually chosen mainly for hosting.",
  },
  {
    q: "Which provider has the best support?",
    a: "SiteGround consistently ranks highest for fast, competent support. Bluehost is strong for basic WordPress help. Namecheap support is solid for domains and straightforward hosting issues.",
  },
  {
    q: "What should I watch out for with pricing?",
    a: "All three run introductory promos. Check renewal prices after the first term, and confirm exactly which features (backups, security, email) are included versus billed as add-ons.",
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
  const key =
    lowered.includes("namecheap") || lowered === "namecheap"
      ? "namecheap"
      : lowered.includes("bluehost")
      ? "bluehost"
      : lowered.includes("siteground")
      ? "siteground"
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

export default function NamecheapVsBluehostVsSiteGroundPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Namecheap vs Bluehost vs SiteGround (${YEAR}) – Hosting & domains compared`}
        description="Compare Namecheap, Bluehost, and SiteGround for domains, shared hosting, WordPress performance, support quality, and pricing to choose the right provider."
        canonical={canonical}
        keywords={`${primaryKeyword}, hosting comparison, domain registrar, WordPress hosting`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-700">
          Domains & Hosting
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Namecheap vs Bluehost vs SiteGround ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Namecheap is the go-to for cheap domains and starter hosting. Bluehost
          is ideal for beginners launching WordPress quickly. SiteGround is the
          premium option when you care most about performance, uptime, and
          support. Here is how they compare across pricing, performance,
          WordPress, and long-term fit.
        </p>

        {/* Top contender cards */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {contenders.map((item) => (
            <Link
              key={item.key}
              to={item.url}
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
                <Sparkles className="h-5 w-5 text-white/80" />
              </div>
              <p className="relative mt-3 text-sm font-medium text-white/90">
                {item.blurb}
              </p>
            </Link>
          ))}
        </div>

        {/* Quick verdict + overall winner */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-orange-100 bg-orange-50 px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-orange-900">
              <Sparkles className="h-5 w-5" />
              <p className="text-lg font-semibold">Quick verdict</p>
            </div>
            <p className="mt-2 text-slate-800">
              Choose <strong>Namecheap</strong> if you want the best domain
              pricing and low-cost starter hosting or EasyWP. Pick{" "}
              <strong>Bluehost</strong> if you are launching your first
              WordPress or small business site and want a guided setup. Go with{" "}
              <strong>SiteGround</strong> if performance, uptime, security, and
              responsive support are non-negotiable.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Crown className="h-4 w-4 text-orange-600" /> Overall scoreboard
              winner: {overallWinner}{" "}
              <span className="text-xs text-slate-600">
                (avg:{" "}
                {overallWinner === "Namecheap"
                  ? averages.namecheap
                  : overallWinner === "Bluehost"
                  ? averages.bluehost
                  : averages.siteground}
                /10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              Your choice should be driven by whether you optimise for
              lowest-cost domains, beginner-friendly WordPress, or premium
              managed hosting quality.
            </p>
          </div>
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-orange-600" /> Side-by-side
            comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Namecheap</th>
                  <th className="px-4 py-3">Bluehost</th>
                  <th className="px-4 py-3">SiteGround</th>
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
                      {row.namecheap}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.bluehost}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.siteground}
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
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Namecheap</th>
                  <th className="px-4 py-3">Bluehost</th>
                  <th className="px-4 py-3">SiteGround</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const winnerValue = Math.max(
                    row.namecheap,
                    row.bluehost,
                    row.siteground
                  );
                  const winner =
                    winnerValue === row.namecheap
                      ? "Namecheap"
                      : winnerValue === row.bluehost
                      ? "Bluehost"
                      : "SiteGround";
                  return (
                    <tr
                      key={row.label}
                      className="odd:bg-white even:bg-slate-50/50"
                    >
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Namecheap"
                            ? "font-semibold text-orange-800"
                            : "text-slate-700"
                        }`}
                      >
                        {row.namecheap}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Bluehost"
                            ? "font-semibold text-blue-800"
                            : "text-slate-700"
                        }`}
                      >
                        {row.bluehost}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "SiteGround"
                            ? "font-semibold text-emerald-800"
                            : "text-slate-700"
                        }`}
                      >
                        {row.siteground}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">
                        {winner}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-orange-50 via-blue-50 to-emerald-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-orange-800">
                    {averages.namecheap}
                  </td>
                  <td className="px-4 py-3 font-semibold text-blue-800">
                    {averages.bluehost}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.siteground}
                  </td>
                  <td className="px-4 py-3 font-bold text-slate-900">
                    {overallWinner}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Feature comparison */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-orange-600" /> Feature Comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Server className="h-5 w-5 text-orange-600" /> Hosting products &
              plans
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.hosting.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Gauge className="h-5 w-5 text-blue-600" /> Performance & uptime
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.performance.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <ShieldCheck className="h-5 w-5 text-emerald-600" /> Support,
              security & reliability
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.support.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Pricing Snapshots</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
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
                    <td className="px-4 py-3 text-slate-700">
                      {row.monthly}
                    </td>
                    <td className="px-4 py-3 text-slate-700">{row.annual}</td>
                    <td className="px-4 py-3 text-slate-700">{row.limits}</td>
                    <td className="px-4 py-3 text-slate-700">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600">
            Pricing for hosting changes frequently and depends on contract
            length, introductory promos, and resource limits. Always confirm
            current pricing and inclusions on each provider’s official pricing
            page before committing.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User Experience & Learning Curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Namecheap:</strong> Clean but fairly no-frills control
              panel. Great if you are comfortable managing domains and basic
              hosting yourself and want to keep costs down.
            </li>
            <li>
              <strong>Bluehost:</strong> Designed to walk first-time WordPress
              users through setup with guided flows, recommended plugins and
              simple dashboards.
            </li>
            <li>
              <strong>SiteGround:</strong> More advanced feel with powerful
              tools and detailed settings. Still user-friendly, but best
              appreciated by teams that already know what they are doing or have
              technical help.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-World Use-Cases & Winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Buying multiple domains or managing a portfolio:</strong>{" "}
              Namecheap wins with low domain pricing, free privacy and simple
              bulk management.
            </li>
            <li>
              <strong>Launching your first WordPress or blog quickly:</strong>{" "}
              Bluehost wins with 1-click installs, onboarding and bundled
              features that minimise technical decisions.
            </li>
            <li>
              <strong>Running a serious business or WooCommerce store:</strong>{" "}
              SiteGround wins with performance, uptime, managed security and
              responsive support.
            </li>
            <li>
              <strong>Agencies hosting multiple client WP sites:</strong>{" "}
              SiteGround is often the better long-term partner, with tools and
              support that scale with professional usage.
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
              <h3 className="text-lg font-semibold">Namecheap</h3>
              <p className="text-sm text-slate-700">
                Best when budgets are tight and you care most about low-cost
                domains and simple starter hosting or EasyWP.
              </p>
              <p className="mt-2 text-sm font-semibold text-orange-700">
                Ideal for: Domain portfolios, side projects, landing pages, and
                early-stage ideas.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Bluehost</h3>
              <p className="text-sm text-slate-700">
                Best for first-time WordPress owners who want a guided,
                bundled experience with hosting, email and SSL together.
              </p>
              <p className="mt-2 text-sm font-semibold text-blue-700">
                Ideal for: Creators, solo founders, bloggers, and local
                businesses launching their first site.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">SiteGround</h3>
              <p className="text-sm text-slate-700">
                Best when uptime, speed, and premium support matter more than
                the absolute lowest price.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: Established businesses, WooCommerce stores, and
                agencies hosting client WordPress sites.
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
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.q}
                </h3>
                <p className="mt-1 text-slate-700">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Back link */}
        <div className="mt-10 flex items-center gap-2 text-sm text-slate-600">
          <Link
            to="/tools"
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-orange-700 ring-1 ring-orange-100 hover:bg-orange-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
