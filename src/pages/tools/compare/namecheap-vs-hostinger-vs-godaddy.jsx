import React from "react";
import {
  Sparkles,
  Crown,
  Layers,
  BarChart3,
  ArrowLeft,
  Gauge,
  ShieldCheck,
  Globe,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "namecheap vs hostinger vs godaddy";
const canonical = buildCanonical(
  "/tools/compare/namecheap-vs-hostinger-vs-godaddy"
);

const brandMeta = {
  namecheap: {
    gradient: "from-orange-500 via-amber-500 to-rose-500",
    badge: "bg-orange-100 text-orange-900",
    logo: "https://logo.clearbit.com/namecheap.com",
  },
  hostinger: {
    gradient: "from-purple-500 via-violet-500 to-indigo-600",
    badge: "bg-purple-100 text-purple-900",
    logo: "https://logo.clearbit.com/hostinger.com",
  },
  godaddy: {
    gradient: "from-emerald-500 via-teal-500 to-green-600",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/godaddy.com",
  },
};

const contenders = [
  {
    key: "namecheap",
    name: "Namecheap",
    blurb: "Affordable domains with free privacy and simple hosting.",
    url: "/tools/namecheap",
  },
  {
    key: "hostinger",
    name: "Hostinger",
    blurb: "Value hosting with strong performance for the price.",
    url: "/tools/hostinger",
  },
  {
    key: "godaddy",
    name: "GoDaddy",
    blurb: "Broad registrar/hosting with many add-ons under one roof.",
    url: "/tools/godaddy",
  },
];

const comparisonRows = [
  {
    label: "Primary use case",
    namecheap: "Budget domains, DNS and straightforward shared hosting/EasyWP.",
    hostinger: "Fast shared hosting and WordPress on a tight budget.",
    godaddy: "All-in-one registrar, hosting and business tools bundle.",
  },
  {
    label: "Pricing approach",
    namecheap: "Low domain/hosting pricing with free privacy on most domains.",
    hostinger: "Aggressive promo pricing for fast shared hosting.",
    godaddy: "Higher renewals; many add-ons surfaced during checkout.",
  },
  {
    label: "Domains & renewals",
    namecheap: "Excellent domain pricing and renewals; portfolio friendly.",
    hostinger: "Domains available, but more focused on hosting bundles.",
    godaddy: "Massive TLD catalog; renewal pricing often higher.",
  },
  {
    label: "Privacy & security",
    namecheap: "WHOIS privacy included on most domains; light upsells.",
    hostinger: "Privacy varies by TLD, SSL bundles and security add-ons.",
    godaddy: "Privacy often paid add-on; heavier cross-sells and upsells.",
  },
  {
    label: "Hosting performance",
    namecheap: "Good for light sites; EasyWP for basic managed WordPress.",
    hostinger:
      "Very strong performance for the price with LiteSpeed and caching.",
    godaddy: "Mainstream shared performance suitable for typical small sites.",
  },
  {
    label: "Ease of use & UI",
    namecheap: "Clean UI, fast DNS, simple cart with fewer distractions.",
    hostinger: "Modern hPanel with guided flows and quick deploys.",
    godaddy: "Familiar interface but upsell-heavy and more cluttered.",
  },
  {
    label: "Ecosystem & extras",
    namecheap:
      "Focused catalog: domains, hosting, email and a few security add-ons.",
    hostinger:
      "Hosting-first with email, domain and basic site builder options.",
    godaddy:
      "Huge ecosystem: email, site builder, marketing tools, bookkeeping and more.",
  },
  {
    label: "Best fit",
    namecheap:
      "Best for domain value and DNS with minimal upsells and solid basics.",
    hostinger:
      "Best performance/price mix for starter and budget-conscious sites.",
    godaddy:
      "Best if you want a one-stop shop and do not mind a busier checkout.",
  },
];

const scoreboard = [
  {
    label: "Domain value",
    scores: { namecheap: 9.5, hostinger: 8.6, godaddy: 7.6 },
  },
  {
    label: "Hosting performance/value",
    scores: { namecheap: 8.2, hostinger: 9.1, godaddy: 8.0 },
  },
  {
    label: "Ease of checkout & UI",
    scores: { namecheap: 9.2, hostinger: 8.7, godaddy: 7.2 },
  },
  {
    label: "Security/privacy included",
    scores: { namecheap: 9.3, hostinger: 8.4, godaddy: 7.5 },
  },
  {
    label: "Support experience",
    scores: { namecheap: 8.6, hostinger: 8.5, godaddy: 8.0 },
  },
];

const avg = (key) =>
  (
    scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  namecheap: avg("namecheap"),
  hostinger: avg("hostinger"),
  godaddy: avg("godaddy"),
};

const overallWinner = (() => {
  const entries = Object.entries(averages).sort(
    (a, b) => Number(b[1]) - Number(a[1])
  );
  return entries[0][0]; // "namecheap" | "hostinger" | "godaddy"
})();

const pricingTable = [
  {
    plan: "Namecheap Shared / EasyWP starter",
    monthly: "From around ~$1.98–$3.88/mo (promo)",
    annual: "Cheaper effective rate when prepaid annually",
    limits: "Entry-level storage and traffic; EasyWP tiers for WP resources",
    notes: "Best if you prioritise low-cost domains plus simple hosting or EasyWP for budget WordPress.",
  },
  {
    plan: "Hostinger Premium / Business",
    monthly: "From around ~$2.99–$4.99/mo (promo)",
    annual: "Lowest pricing on multi-year commitments",
    limits: "Storage, visits and email accounts tied to plan level",
    notes: "Excellent speed and features for the price with LiteSpeed and caching on shared plans.",
  },
  {
    plan: "GoDaddy Economy / Deluxe",
    monthly: "From around ~$5.99–$8.99/mo (promo)",
    annual: "Discounts for longer terms; higher renewals",
    limits: "Storage and site count vary by tier; many feature add-ons",
    notes: "Strong if you want domains, email, marketing tools and bookkeeping in one ecosystem.",
  },
];

const featureBullets = {
  hosting: [
    "Namecheap: Shared hosting and EasyWP managed WordPress aimed at affordability, plus VPS and reseller options.",
    "Hostinger: Shared, cloud and WordPress hosting with LiteSpeed server stack and global data centres.",
    "GoDaddy: Shared, WordPress, VPS and dedicated servers with heavy focus on bundled business services.",
  ],
  performance: [
    "Namecheap: Solid for low to moderate traffic sites; high-traffic or resource-heavy apps may need VPS/cloud.",
    "Hostinger: Among the best performance-per-dollar in entry-level tiers thanks to LiteSpeed and caching.",
    "GoDaddy: Performance is fine for typical small business sites; serious performance tuning may require upgrades.",
  ],
  support: [
    "Namecheap: 24/7 chat support with good documentation, especially around domains and DNS.",
    "Hostinger: Chat support with helpful knowledge base and clear guides built into the panel.",
    "GoDaddy: Large support operation; good for generic issues but experiences can vary by region and product.",
  ],
};

const prosCons = {
  namecheap: {
    pros: [
      "Excellent domain pricing and renewals with free WHOIS privacy on many TLDs",
      "Minimal, less aggressive upsells compared to many large competitors",
      "Simple DNS management and clean UI that works well for portfolios",
    ],
    cons: [
      "Shared hosting stack is more basic than Hostinger’s performance-focused setup",
      "EasyWP is good but not as feature-rich as some premium managed WP providers",
      "Fewer peripheral business tools compared with GoDaddy’s ecosystem",
    ],
  },
  hostinger: {
    pros: [
      "Very strong performance for the price thanks to LiteSpeed and built-in caching",
      "Modern hPanel interface with guided flows for beginners",
      "Good value WordPress and cloud plans that scale as sites grow",
    ],
    cons: [
      "Most attractive pricing requires longer-term commitments",
      "Domain offering is fine but not as price-competitive as Namecheap at scale",
      "Some advanced features sit on higher plans or require configuration knowledge",
    ],
  },
  godaddy: {
    pros: [
      "Huge product catalog from domains and hosting to email, marketing and bookkeeping",
      "Familiar brand and interface for many non-technical small business owners",
      "One billing relationship for multiple business tools and services",
    ],
    cons: [
      "Checkout and dashboard are upsell-heavy, which can confuse new buyers",
      "Domain and hosting renewals are usually higher than Namecheap/Hostinger equivalents",
      "Performance focus is less aggressive than performance-first hosts at the same price point",
    ],
  },
};

const faqs = [
  {
    q: `Who wins overall in ${YEAR}?`,
    a: "Namecheap wins overall for domain value and a cleaner checkout. Hostinger wins for shared hosting performance at a low price. GoDaddy wins if you want a very broad product catalog and are comfortable navigating more upsells.",
  },
  {
    q: "Which is best for domains only?",
    a: "Namecheap is the easiest pick for domains: competitive upfront and renewal pricing, free WHOIS privacy on many TLDs, and a straightforward checkout.",
  },
  {
    q: "Which is fastest for hosting?",
    a: "Hostinger typically delivers the best performance/price mix on shared hosting, especially with LiteSpeed servers and built-in caching enabled.",
  },
  {
    q: "Which has the simplest checkout?",
    a: "Namecheap has the cleanest checkout with fewer aggressive upsells. Hostinger is relatively streamlined. GoDaddy is more upsell-heavy and requires more attention during purchase.",
  },
  {
    q: "Which is best if I want everything in one account?",
    a: "GoDaddy is the strongest if you want domains, hosting, email, marketing tools and more on a single provider, but you will usually pay more than with specialist providers.",
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
      : lowered.includes("hostinger")
      ? "hostinger"
      : lowered.includes("godaddy")
      ? "godaddy"
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

const Score = ({ label, value }) => (
  <div className="flex items-center justify-between">
    <span>{label}</span>
    <span className="font-semibold text-slate-900">{value}/10</span>
  </div>
);

export default function NamecheapVsHostingerVsGoDaddyPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Namecheap vs Hostinger vs GoDaddy (${YEAR}) – Domains & hosting compared`}
        description="Compare Namecheap, Hostinger, and GoDaddy on domain pricing, privacy, hosting performance, UI, support, and long-term fit so you can choose the right provider."
        canonical={canonical}
        keywords={`${primaryKeyword}, domain registrar comparison, hosting comparison, WordPress hosting`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-700">
          Domains & Hosting
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Namecheap vs Hostinger vs GoDaddy ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Namecheap wins on domain value and cleaner checkout. Hostinger wins on
          hosting speed for the price. GoDaddy wins on breadth if you want
          domains, email, marketing tools and more in one account. Here is the
          structured breakdown before you commit your next site or domain
          portfolio.
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
              Choose <strong>Namecheap</strong> if you primarily care about
              domain value, clean DNS management, and minimal upsells. Pick{" "}
              <strong>Hostinger</strong> if you want the fastest shared hosting
              you can get on a budget with a modern panel. Go with{" "}
              <strong>GoDaddy</strong> if you want a one-stop shop for domains,
              email, marketing tools and more—even if that means more upsells
              and slightly higher pricing.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Crown className="h-4 w-4 text-orange-600" /> Overall scoreboard
              winner:{" "}
              {overallWinner.charAt(0).toUpperCase() + overallWinner.slice(1)}
              <span className="text-xs text-slate-600">
                {" "}
                (avg: {averages[overallWinner]}/10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              Use this as a starting point, then decide whether domain value,
              hosting performance or ecosystem breadth matters most for your
              stack.
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
                  <th className="px-4 py-3">Hostinger</th>
                  <th className="px-4 py-3">GoDaddy</th>
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
                      {row.hostinger}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.godaddy}
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
                  <th className="px-4 py-3">Hostinger</th>
                  <th className="px-4 py-3">GoDaddy</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const { namecheap, hostinger, godaddy } = row.scores;
                  const winnerValue = Math.max(namecheap, hostinger, godaddy);
                  const winner =
                    winnerValue === namecheap
                      ? "Namecheap"
                      : winnerValue === hostinger
                      ? "Hostinger"
                      : "GoDaddy";
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
                        {namecheap}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Hostinger"
                            ? "font-semibold text-purple-800"
                            : "text-slate-700"
                        }`}
                      >
                        {hostinger}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "GoDaddy"
                            ? "font-semibold text-emerald-800"
                            : "text-slate-700"
                        }`}
                      >
                        {godaddy}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">
                        {winner}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-orange-50 via-purple-50 to-emerald-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-orange-800">
                    {averages.namecheap}
                  </td>
                  <td className="px-4 py-3 font-semibold text-purple-800">
                    {averages.hostinger}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.godaddy}
                  </td>
                  <td className="px-4 py-3 font-bold text-slate-900">
                    {overallWinner.charAt(0).toUpperCase() +
                      overallWinner.slice(1)}
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
              <Globe className="h-5 w-5 text-orange-600" /> Domains, hosting &
              product focus
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.hosting.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Gauge className="h-5 w-5 text-purple-600" /> Performance & scale
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.performance.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Shield className="h-5 w-5 text-emerald-600" /> Support, security
              & reliability
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
            Pricing for domains and hosting changes frequently and depends on
            promos, contract length and region. Always confirm current prices,
            renewal rates and included features directly on each provider’s
            pricing page before committing.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User Experience & Learning Curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Namecheap:</strong> A clean, relatively minimal interface
              that is ideal if you are comfortable managing domains and DNS and
              want to avoid heavy upsells.
            </li>
            <li>
              <strong>Hostinger:</strong> Modern, visually clear hPanel that
              feels friendlier than classic cPanel and is easy for first-time
              hosting users to navigate.
            </li>
            <li>
              <strong>GoDaddy:</strong> Widely known interface but with more
              clutter and upsells, which can slow down checkout for new
              customers if you are not careful.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-World Use-Cases & Winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Managing many domains and DNS records:</strong>{" "}
              Namecheap wins with low domain pricing, free privacy and a clean
              domain/DNS experience.
            </li>
            <li>
              <strong>Launching a fast budget WordPress or small site:</strong>{" "}
              Hostinger wins with strong shared performance, LiteSpeed and easy
              installers.
            </li>
            <li>
              <strong>Small business wanting everything under one provider:</strong>{" "}
              GoDaddy wins with domains, email, marketing, invoicing and more in
              a single ecosystem.
            </li>
            <li>
              <strong>Agencies or freelancers on tight budgets:</strong>{" "}
              Mix-and-match: use Namecheap for domains and DNS, pair with
              Hostinger for fast low-cost hosting, and only use GoDaddy if
              clients are already locked into their ecosystem.
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
                Best when domains and DNS are your primary concern and you want
                low pricing with fewer upsells and distractions.
              </p>
              <p className="mt-2 text-sm font-semibold text-orange-700">
                Ideal for: Domain portfolios, side projects, landing pages, and
                teams separating DNS from hosting.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Hostinger</h3>
              <p className="text-sm text-slate-700">
                Best for fast, budget hosting with a modern interface and great
                performance for blogs and SMB sites.
              </p>
              <p className="mt-2 text-sm font-semibold text-purple-700">
                Ideal for: Creators, startups, and small businesses wanting
                value hosting that still feels quick.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">GoDaddy</h3>
              <p className="text-sm text-slate-700">
                Best when you want “one provider for everything” and are okay
                paying a bit more for that convenience.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: Non-technical business owners who prefer a single
                vendor for domains, email, and business tools.
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
