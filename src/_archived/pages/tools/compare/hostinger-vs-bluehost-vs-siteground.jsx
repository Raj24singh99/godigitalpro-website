import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  ArrowLeft,
  Server,
  BarChart3,
  Zap,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "hostinger vs bluehost vs siteground";
const canonical = buildCanonical(
  "/tools/compare/hostinger-vs-bluehost-vs-siteground"
);

const brandMeta = {
  hostinger: {
    gradient: "from-purple-500 via-violet-500 to-indigo-600",
    badge: "bg-purple-100 text-purple-900",
    logo: "https://logo.clearbit.com/hostinger.com",
  },
  bluehost: {
    gradient: "from-blue-500 via-sky-500 to-indigo-500",
    badge: "bg-blue-100 text-blue-900",
    logo: "https://logo.clearbit.com/bluehost.com",
  },
  siteground: {
    gradient: "from-emerald-500 via-teal-500 to-green-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/siteground.com",
  },
};

const contenders = [
  {
    key: "hostinger",
    name: "Hostinger",
    blurb: "Fast LiteSpeed hosting at aggressive pricing for SMBs and creators.",
    url: "https://www.hostinger.com/",
  },
  {
    key: "bluehost",
    name: "Bluehost",
    blurb: "Beginner-friendly WordPress host with guided onboarding and upsells.",
    url: "https://www.bluehost.com/",
  },
  {
    key: "siteground",
    name: "SiteGround",
    blurb: "Premium support and performance on Google Cloud with SG tools.",
    url: "https://www.siteground.com/",
  },
];

const comparisonRows = [
  {
    label: "Performance",
    hostinger: "LiteSpeed servers + caching; strong speed for the price.",
    bluehost: "Decent shared performance; can vary with server load.",
    siteground:
      "Excellent performance with SG Optimizer and Google Cloud infrastructure.",
  },
  {
    label: "Support",
    hostinger: "Good chat/email support; generally responsive for SMB use.",
    bluehost: "Beginner-friendly support; reviews more mixed at scale.",
    siteground: "Known for fast, knowledgeable support and clear guidance.",
  },
  {
    label: "Price focus",
    hostinger: "Lowest intro pricing with strong promos on long terms.",
    bluehost: "Low intro offers; upsells and higher renewals are common.",
    siteground: "Premium pricing with higher renewals vs budget hosts.",
  },
  {
    label: "Best for",
    hostinger: "Value seekers needing speed on a budget (blogs, SMB sites).",
    bluehost: "Beginners wanting guided WordPress setup and onboarding.",
    siteground:
      "Businesses and serious sites prioritising premium support and uptime.",
  },
  {
    label: "Control panel",
    hostinger: "hPanel (custom panel) – simple and streamlined.",
    bluehost: "cPanel + WordPress tools and marketplace.",
    siteground: "Site Tools (custom) – modern, powerful, and well-documented.",
  },
];

const scoreboard = [
  { label: "Speed & value", scores: { hostinger: 9.2, bluehost: 8.2, siteground: 9.0 } },
  { label: "Support quality", scores: { hostinger: 8.4, bluehost: 7.6, siteground: 9.3 } },
  { label: "Ease of use", scores: { hostinger: 8.7, bluehost: 9.0, siteground: 8.6 } },
  { label: "Scalability & plans", scores: { hostinger: 8.8, bluehost: 8.0, siteground: 8.9 } },
  { label: "Overall value", scores: { hostinger: 9.0, bluehost: 8.2, siteground: 8.6 } },
];

const avg = (key) =>
  (
    scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  hostinger: avg("hostinger"),
  bluehost: avg("bluehost"),
  siteground: avg("siteground"),
};

const overallWinnerKey = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const prettyNames = {
  hostinger: "Hostinger",
  bluehost: "Bluehost",
  siteground: "SiteGround",
};

const pricingTable = [
  {
    plan: "Hostinger Business Shared",
    monthly: "Promo ~ $3–$5/month (varies by term)",
    annual: "Cheaper on multi-year commitments",
    limits: "Generous storage, SSL, email; limits by plan and traffic",
    notes: "Great speed-to-price ratio using LiteSpeed, ideal for budget-conscious sites.",
  },
  {
    plan: "Bluehost Choice Plus",
    monthly: "Promo ~ $5–$8/month",
    annual: "Lower effective price on longer terms",
    limits: "Unmetered bandwidth; extra features via bundled add-ons",
    notes: "Beginner-friendly WordPress setup; watch for upsells and renewal jumps.",
  },
  {
    plan: "SiteGround GrowBig",
    monthly: "Promo ~ $9–$15/month",
    annual: "Higher renewals vs intro; annual often required",
    limits: "Resource-based limits; staging and SG Optimizer included",
    notes: "Best when you value performance, tools, and support more than lowest price.",
  },
];

const featureBullets = {
  performance: [
    "Hostinger: LiteSpeed web server plus built-in caching deliver impressive speeds for blogs, landing pages, and small eCommerce stores.",
    "Bluehost: Adequate shared performance for starter WordPress sites; may require tuning or upgrades as traffic grows.",
    "SiteGround: Consistently strong performance on Google Cloud, with SG Optimizer for caching, image optimisation, and more.",
  ],
  supportAndUX: [
    "Hostinger: hPanel is clean and beginner-friendly; support works well for common SMB use cases.",
    "Bluehost: Familiar cPanel plus guided WordPress flows; support is beginner-oriented but feedback varies by queue and issue.",
    "SiteGround: Site Tools is polished and powerful, and support has a strong reputation for going deeper on technical issues.",
  ],
  pricingAndRenewals: [
    "Hostinger: Among the lowest intro prices; renewals rise but still usually competitive if you commit to longer terms.",
    "Bluehost: Aggressive intro discounts; renewals can feel steep and upsells are common during checkout.",
    "SiteGround: Premium initial and renewal pricing; best justified when uptime, performance, and support are revenue-critical.",
  ],
};

const faqs = [
  {
    q: `Is Hostinger better than Bluehost in ${YEAR}?`,
    a: "Hostinger usually wins on raw speed for the price and is an excellent choice for blogs, small business sites, and budget-conscious WordPress installs. Bluehost can be more approachable for complete beginners thanks to guided onboarding, but it comes with more upsells and less consistent performance.",
  },
  {
    q: "When should I pick SiteGround instead?",
    a: "Pick SiteGround when uptime, performance, and responsive support are more important than minimising hosting costs. It is a strong fit for businesses, agencies, and serious sites where a few extra dollars per month is worth better support and tooling.",
  },
  {
    q: "Which is best for WordPress overall?",
    a: "All three support WordPress. Hostinger and SiteGround often provide better performance out of the box, while Bluehost is officially recommended by WordPress.org and offers a very guided setup. For speed and support, many teams lean toward Hostinger or SiteGround; for simple onboarding, Bluehost can be enough.",
  },
  {
    q: "Do renewal prices increase for Hostinger, Bluehost, and SiteGround?",
    a: "Yes. All three use low introductory pricing that increases on renewal. It is best to check renewal rates carefully and lock in longer terms only when you are confident in the provider.",
  },
  {
    q: "Which is best for a tight budget?",
    a: "Hostinger is usually the best choice for a tight budget while still caring about performance. Bluehost can work if you value onboarding and brand familiarity. SiteGround is rarely the cheapest option but can be the best value when performance and support are critical.",
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
  hostinger: {
    pros: [
      "Very strong speed-to-price ratio with LiteSpeed servers",
      "Aggressive introductory pricing for shared and WordPress plans",
      "hPanel interface is simple and approachable for beginners",
    ],
    cons: [
      "Renewal prices jump after promo periods",
      "Support is solid but not as renowned as SiteGround’s",
      "Advanced users who love classic cPanel may prefer other hosts",
    ],
  },
  bluehost: {
    pros: [
      "Beginner-friendly WordPress onboarding and setup wizards",
      "Officially recommended by WordPress.org",
      "Familiar cPanel experience plus WP-specific tools",
    ],
    cons: [
      "More upsells during checkout and inside the dashboard",
      "Performance can be less consistent on busy shared servers",
      "Renewals can feel expensive compared to the intro offers",
    ],
  },
  siteground: {
    pros: [
      "Excellent support reputation with fast, knowledgeable responses",
      "Strong performance on Google Cloud with SG Optimizer tools",
      "Modern Site Tools panel, staging, and advanced WordPress features",
    ],
    cons: [
      "Premium pricing with higher renewals than budget hosts",
      "Resource limits can feel tight on lower tiers for heavy sites",
      "May be overkill for very small or hobby projects",
    ],
  },
};

const LogoBadge = ({ name }) => {
  const key = name.toLowerCase().includes("hostinger")
    ? "hostinger"
    : name.toLowerCase().includes("bluehost")
    ? "bluehost"
    : name.toLowerCase().includes("siteground")
    ? "siteground"
    : name.toLowerCase();

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
      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${meta.badge}`}>
        {name}
      </span>
    </div>
  );
};

export default function HostingerVsBluehostVsSiteGroundPage() {
  const overallWinnerLabel = prettyNames[overallWinnerKey] || overallWinnerKey;

  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Hostinger vs Bluehost vs SiteGround (${YEAR}) – Hosting comparison`}
        description="Compare Hostinger, Bluehost, and SiteGround on speed, support, pricing, control panels, and use-cases to pick the right hosting provider for your site."
        canonical={canonical}
        keywords={`${primaryKeyword}, web hosting comparison, hostinger vs bluehost, hostinger vs siteground, bluehost vs siteground`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-purple-700">
          Web hosting
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Hostinger vs Bluehost vs SiteGround ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Hostinger is the{" "}
          <strong>speed-to-price champion for budget-conscious sites</strong>. Bluehost is the{" "}
          <strong>onboarding-friendly WordPress host</strong> many beginners start with. SiteGround
          is the <strong>premium choice</strong> for teams that value support and performance over
          rock-bottom pricing.
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
              </div>
              <p className="relative mt-3 text-sm font-medium text-white/90">
                {item.blurb}
              </p>
            </a>
          ))}
        </div>

        {/* Quick verdict + overall winner */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-purple-100 bg-purple-50 px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-purple-900">
              <Sparkles className="h-5 w-5" />
              <p className="text-lg font-semibold">Quick verdict</p>
            </div>
            <p className="mt-2 text-slate-800">
              Choose <strong>Hostinger</strong> if you want{" "}
              <strong>fast, affordable hosting with LiteSpeed</strong> for blogs, landing pages, and
              small business sites. Choose <strong>Bluehost</strong> if you value{" "}
              <strong>guided WordPress onboarding</strong> and a familiar brand. Choose{" "}
              <strong>SiteGround</strong> when{" "}
              <strong>support quality, performance, and uptime</strong> are more important than the
              lowest monthly cost.
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-purple-900">
              <Server className="h-4 w-4 text-purple-700" /> Scoreboard leader:{" "}
              {overallWinnerLabel}{" "}
              <span className="text-xs text-slate-700">
                (avg: {averages[overallWinnerKey]}/10)
              </span>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Shield className="h-4 w-4 text-emerald-600" /> Premium pick: SiteGround
            </div>
            <p className="mt-2 text-sm text-slate-700">
              SiteGround is the premium option—strong support and tooling, especially for
              higher-value WordPress and business sites where every minute of uptime matters.
            </p>
          </div>
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-purple-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Hostinger</th>
                  <th className="px-4 py-3">Bluehost</th>
                  <th className="px-4 py-3">SiteGround</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.hostinger}</td>
                    <td className="px-4 py-3 text-slate-700">{row.bluehost}</td>
                    <td className="px-4 py-3 text-slate-700">{row.siteground}</td>
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
                  <th className="px-4 py-3">Hostinger</th>
                  <th className="px-4 py-3">Bluehost</th>
                  <th className="px-4 py-3">SiteGround</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const entries = Object.entries(row.scores);
                  const [winnerKey] =
                    entries.sort((a, b) => Number(b[1]) - Number(a[1]))[0] || [];
                  const winnerName = prettyNames[winnerKey] || "";

                  return (
                    <tr key={row.label}>
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "hostinger"
                            ? "font-semibold text-purple-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.hostinger}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "bluehost"
                            ? "font-semibold text-blue-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.bluehost}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "siteground"
                            ? "font-semibold text-emerald-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.siteground}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {winnerName}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-purple-50 via-blue-50 to-emerald-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-purple-800">
                    {averages.hostinger}
                  </td>
                  <td className="px-4 py-3 font-semibold text-blue-800">
                    {averages.bluehost}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.siteground}
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
            <Gauge className="h-6 w-6 text-purple-600" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Zap className="h-5 w-5 text-purple-600" /> Performance & stack
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.performance.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Server className="h-5 w-5 text-blue-600" /> Support & control panels
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.supportAndUX.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Shield className="h-5 w-5 text-emerald-600" /> Pricing, renewals & value
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.pricingAndRenewals.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Pricing snapshots</h2>
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
            Pricing and promos for Hostinger, Bluehost, and SiteGround change frequently and vary by
            region, term length, and plan tier. Always verify current pricing and renewal rates on
            the official pricing pages before committing to a long-term contract.
          </p>
        </section>

        {/* Pros & Cons */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
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
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-purple-700 ring-1 ring-purple-100 hover:bg-purple-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
