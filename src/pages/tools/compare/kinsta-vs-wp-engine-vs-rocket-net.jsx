import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  Zap,
  Crown,
  ArrowLeft,
  Shield,
  Rocket,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "kinsta vs wp engine vs rocket.net";
const canonical = buildCanonical(
  "/tools/compare/kinsta-vs-wp-engine-vs-rocket-net"
);

const brandMeta = {
  kinsta: {
    gradient: "from-emerald-500 via-teal-500 to-indigo-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/kinsta.com",
  },
  "wp-engine": {
    gradient: "from-indigo-500 via-blue-500 to-slate-700",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/wpengine.com",
  },
  "rocket-net": {
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/rocket.net",
  },
};

const contenders = [
  {
    key: "kinsta",
    name: "Kinsta",
    blurb: "Managed WP on GCP with strong performance and tooling.",
    url: "https://kinsta.com/",
  },
  {
    key: "wp-engine",
    name: "WP Engine",
    blurb: "Enterprise-proven managed WP with deep ecosystem.",
    url: "https://wpengine.com/",
  },
  {
    key: "rocket-net",
    name: "Rocket.net",
    blurb: "Fastest out-of-box WP with bundled CDN/WAF.",
    url: "https://rocket.net/",
  },
];

const comparisonRows = [
  {
    label: "Speed / performance out of box",
    kinsta: "High performance on GCP with built-in caching/CDN options.",
    "wp-engine": "Strong performance with EverCache and optimizations.",
    "rocket-net":
      "Often the fastest TTFB with Cloudflare Enterprise baked in.",
  },
  {
    label: "Scaling & stability",
    kinsta: "Great stability on GCP; auto-scaling containers handle spikes.",
    "wp-engine": "Enterprise references; robust scaling and support SLAs.",
    "rocket-net":
      "Very fast, handles spikes well with its bundled edge network.",
  },
  {
    label: "Developer experience",
    kinsta: "SSH, staging, APM, and analytics; strong dashboard UX.",
    "wp-engine": "Mature DX with staging, local dev, and workflow tools.",
    "rocket-net":
      "Simple UI; less tooling depth but very fast provisioning.",
  },
  {
    label: "Security/CDN baked in",
    kinsta:
      "Good security hardening; CDN optional via Cloudflare/KeyCDN or others.",
    "wp-engine":
      "Security features plus CDN; DDoS and WAF on higher tiers and add-ons.",
    "rocket-net": "Cloudflare Enterprise CDN/WAF bundled for every site.",
  },
  {
    label: "Value for money",
    kinsta: "Fair pricing for performance and support on GCP.",
    "wp-engine":
      "Pricier but proven at enterprise scale with strong ecosystem.",
    "rocket-net":
      "Strong value if speed/CDN/WAF bundled matters most for your stack.",
  },
];

const scoreboard = [
  {
    label: "Speed / performance out of box",
    scores: { kinsta: 9.2, "wp-engine": 8.8, "rocket-net": 9.6 },
  },
  {
    label: "Scaling & stability",
    scores: { kinsta: 9.3, "wp-engine": 9.5, "rocket-net": 9.0 },
  },
  {
    label: "Developer experience",
    scores: { kinsta: 9.0, "wp-engine": 9.2, "rocket-net": 8.6 },
  },
  {
    label: "Security/CDN baked in",
    scores: { kinsta: 9.0, "wp-engine": 8.7, "rocket-net": 9.6 },
  },
  {
    label: "Value for money",
    scores: { kinsta: 8.4, "wp-engine": 8.0, "rocket-net": 8.6 },
  },
];

const avg = (key) => {
  const total = scoreboard.reduce(
    (sum, row) => sum + (row.scores[key] || 0),
    0
  );
  return (total / scoreboard.length).toFixed(1);
};

const averages = {
  kinsta: avg("kinsta"),
  "wp-engine": avg("wp-engine"),
  "rocket-net": avg("rocket-net"),
};

const overallWinnerKey = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const prettyNames = {
  kinsta: "Kinsta",
  "wp-engine": "WP Engine",
  "rocket-net": "Rocket.net",
};

const overallWinnerLabel = prettyNames[overallWinnerKey] || overallWinnerKey;

const pricingTable = [
  {
    plan: "Kinsta Starter / Pro",
    monthly: "From ~ $35 / ~ $70",
    annual: "Lower on annual",
    limits: "1–2 WP installs, visit/bandwidth limits",
    notes: "Great performance on GCP; includes staging, backups, APM, and support.",
  },
  {
    plan: "WP Engine Startup / Growth",
    monthly: "From ~ $24 / ~ $96",
    annual: "Lower on annual",
    limits: "1–10 sites, visit caps, CDN/WAF tiers",
    notes: "Enterprise credibility and tooling; pricing scales with sites and traffic.",
  },
  {
    plan: "Rocket.net Starter / Pro",
    monthly: "From ~ $30 / ~ $60",
    annual: "Lower on annual",
    limits: "1–5 sites, generous bandwidth",
    notes: "Cloudflare Enterprise CDN/WAF bundled for max speed and security.",
  },
];

const faqs = [
  {
    q: `Is Kinsta or WP Engine faster than Rocket.net in ${YEAR}?`,
    a: "Rocket.net is often fastest out of the box thanks to Cloudflare Enterprise baked in. Kinsta and WP Engine are also very fast with strong caching and CDN, but may require more tuning and plugin choices to match Rocket.net’s TTFB in some scenarios.",
  },
  {
    q: "Which is best for enterprise references?",
    a: "WP Engine has the strongest enterprise pedigree with many big-brand references, robust SLAs, and a deep partner ecosystem.",
  },
  {
    q: "Which is best for non-technical teams?",
    a: "Kinsta is often the easiest for non-technical teams: the dashboard UX, staging, backups, analytics, and APM make it simple to manage sites without deep DevOps knowledge.",
  },
  {
    q: "Which offers the most value for pure speed?",
    a: "Rocket.net generally offers the most value if pure speed and edge delivery matter most, since Cloudflare Enterprise CDN/WAF and aggressive caching are bundled for every site.",
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
  kinsta: {
    pros: [
      "Fast on GCP with strong caching out of the box",
      "Excellent dashboard UX, staging, and APM tools",
      "Good support and security hardening for WordPress",
    ],
    cons: [
      "Visit/bandwidth caps can add cost as traffic grows",
      "No email hosting included",
      "Cloudflare Enterprise not bundled by default",
    ],
  },
  "wp-engine": {
    pros: [
      "Enterprise pedigree and  robust support options",
      "Mature DX with staging, local dev, and workflow tooling",
      "Strong ecosystem and partner network for agencies and enterprises",
    ],
    cons: [
      "Higher price at scale compared to some alternatives",
      "Some advanced features gated behind higher plans",
      "Performance gains can still require per-site tuning",
    ],
  },
  "rocket-net": {
    pros: [
      "Cloudflare Enterprise CDN/WAF bundled on every plan",
      "Extremely fast TTFB out of the box on most stacks",
      "Simple UI and strong security defaults for WP sites",
    ],
    cons: [
      "Smaller ecosystem and partner network than WP Engine",
      "Less depth in developer tooling and workflow features",
      "No email hosting; very performance-focused set of features",
    ],
  },
};

const LogoBadge = ({ name }) => {
  const key = name.toLowerCase().includes("kinsta")
    ? "kinsta"
    : name.toLowerCase().includes("wp engine")
    ? "wp-engine"
    : name.toLowerCase().includes("rocket")
    ? "rocket-net"
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

export default function KinstaVsWPEngineVsRocketNetPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Kinsta vs WP Engine vs Rocket.net – Honest Comparison (${YEAR})`}
        description="Compare Kinsta, WP Engine, and Rocket.net for managed WordPress hosting: speed, scaling, developer experience, security/CDN, pricing, and best-fit use cases."
        canonical={canonical}
        keywords={`${primaryKeyword}, managed wordpress hosting, performance hosting, kinsta vs wp engine, rocket.net review`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Managed WordPress hosting
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Kinsta vs WP Engine vs Rocket.net – Honest Comparison ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          <strong>Rocket.net</strong> is often the fastest out-of-box thanks to{" "}
          <strong>Cloudflare Enterprise CDN/WAF baked in</strong>.{" "}
          <strong>Kinsta</strong> runs on Google Cloud Platform with an excellent
          dashboard, staging, and APM. <strong>WP Engine</strong> is the{" "}
          <strong>enterprise-proven</strong> option with a deep ecosystem and
          partner network. Here is how they compare on speed, scaling, DX,
          security, and value.
        </p>

        {/* Top verdict & highlights */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2 space-y-3 rounded-3xl bg-emerald-50/90 p-6 ring-1 ring-emerald-100">
            <div className="flex items-center gap-2 text-lg font-semibold text-emerald-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>Rocket.net</strong> if you want{" "}
              <strong>
                maximum speed and security out of the box with minimal tuning
              </strong>
              . Choose <strong>Kinsta</strong> if you value{" "}
              <strong>
                a superb dashboard, staging, APM, and support on GCP
              </strong>
              . Choose <strong>WP Engine</strong> if you need{" "}
              <strong>
                enterprise references, advanced workflows, and ecosystem depth
              </strong>
              .
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-800">
              <Crown className="h-4 w-4" /> Overall scoreboard winner:{" "}
              {overallWinnerLabel}{" "}
              <span className="text-xs font-medium text-emerald-700">
                (avg: {averages[overallWinnerKey]}/10)
              </span>
            </div>
          </div>

          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Rocket className="h-5 w-5 text-emerald-700" /> Best for
              out-of-box speed
            </div>
            <p className="text-sm text-slate-700">
              <strong>Rocket.net</strong> bundles Cloudflare Enterprise CDN/WAF
              and opinionated caching so most sites feel instantly fast and
              secure with minimal tuning.
            </p>
          </div>

          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Shield className="h-5 w-5 text-indigo-700" /> Best enterprise
              pedigree
            </div>
            <p className="text-sm text-slate-700">
              <strong>WP Engine</strong> brings long-running enterprise
              references, robust SLAs, and a partner ecosystem that agencies and
              large organisations can lean on.
            </p>
          </div>
        </div>

        {/* Contender cards */}
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
        <section className="mt-12 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-emerald-600" /> Side-by-side
            comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Kinsta</th>
                  <th className="px-4 py-3">WP Engine</th>
                  <th className="px-4 py-3">Rocket.net</th>
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
                    <td className="px-4 py-3 text-slate-700">{row.kinsta}</td>
                    <td className="px-4 py-3 text-slate-700">
                      {row["wp-engine"]}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row["rocket-net"]}
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
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Criterion</th>
                  <th className="px-4 py-3">Kinsta</th>
                  <th className="px-4 py-3">WP Engine</th>
                  <th className="px-4 py-3">Rocket.net</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const entries = Object.entries(row.scores);
                  const [winnerKey] =
                    entries.sort((a, b) => Number(b[1]) - Number(a[1]))[0] ||
                    [];
                  const winnerName = prettyNames[winnerKey] || "";

                  return (
                    <tr key={row.label}>
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "kinsta"
                            ? "font-semibold text-emerald-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.kinsta}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "wp-engine"
                            ? "font-semibold text-indigo-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores["wp-engine"]}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "rocket-net"
                            ? "font-semibold text-amber-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores["rocket-net"]}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {winnerName}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-emerald-50 via-indigo-50 to-amber-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.kinsta}
                  </td>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages["wp-engine"]}
                  </td>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages["rocket-net"]}
                  </td>
                  <td className="px-4 py-3 font-bold text-slate-900">
                    {overallWinnerLabel}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">
            Pricing snapshots (approximate)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
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
            Pricing for Kinsta, WP Engine, and Rocket.net changes frequently and
            varies by region, traffic, and features. Always confirm on official
            pricing pages and model total cost of ownership (TCO) for your
            traffic, sites, and required add-ons.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">
            User experience & learning curve
          </h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Kinsta:</strong> Feels like a{" "}
              <strong>modern SaaS dashboard</strong> built for marketers, devs,
              and agencies. Staging, backups, APM, and analytics are easy to
              access without deep DevOps.
            </li>
            <li>
              <strong>WP Engine:</strong> Built with{" "}
              <strong>agencies and enterprises</strong> in mind. The UX is more
              complex but powerful once you adopt their workflows and tool
              integrations.
            </li>
            <li>
              <strong>Rocket.net:</strong> Simple,{" "}
              <strong>performance-first UX</strong> focused on getting sites
              running fast with minimal toggles. Less clutter, fewer knobs, very
              opinionated.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">
            Real-world use-cases & winners
          </h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>High-traffic marketing sites and blogs:</strong>{" "}
              Rocket.net wins when out-of-box speed and protection are critical
              and you do not want to manage complex edge/CDN configs.
            </li>
            <li>
              <strong>Agencies and digital studios:</strong>{" "}
              WP Engine often wins with its partner ecosystem, multi-env
              workflows, and enterprise references clients recognise.
            </li>
            <li>
              <strong>Product and marketing teams without DevOps:</strong>{" "}
              Kinsta is very strong with its dashboard UX, staging, and APM
              helping non-DevOps teams diagnose performance issues.
            </li>
            <li>
              <strong>Multi-site portfolios and niche brands:</strong> Any of
              the three can work; your choice should hinge on whether you value
              ecosystem (WP Engine), dashboard simplicity (Kinsta), or pure
              performance (Rocket.net).
            </li>
          </ul>
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
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-emerald-700 ring-1 ring-emerald-100 hover:bg-emerald-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
