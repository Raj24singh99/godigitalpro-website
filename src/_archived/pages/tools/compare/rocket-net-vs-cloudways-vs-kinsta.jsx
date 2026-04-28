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
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "rocket.net vs cloudways vs kinsta";
const canonical = buildCanonical("/tools/compare/rocket-net-vs-cloudways-vs-kinsta");

const brandMeta = {
  rocket_net: {
    gradient: "from-indigo-500 via-blue-500 to-emerald-500",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/rocket.net",
  },
  cloudways: {
    gradient: "from-sky-500 via-blue-500 to-indigo-600",
    badge: "bg-sky-100 text-sky-900",
    logo: "https://logo.clearbit.com/cloudways.com",
  },
  kinsta: {
    gradient: "from-emerald-500 via-teal-500 to-green-600",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/kinsta.com",
  },
};

const contenders = [
  {
    key: "rocket_net",
    name: "Rocket.net",
    blurb: "Managed WordPress with Cloudflare Enterprise, edge caching, and performance tuned out of the box.",
    url: "https://rocket.net",
    slug: "rocket-net",
  },
  {
    key: "cloudways",
    name: "Cloudways",
    blurb: "Managed cloud hosting on providers like DigitalOcean, AWS, and GCP with strong control and flexibility.",
    url: "https://www.cloudways.com",
    slug: "cloudways",
  },
  {
    key: "kinsta",
    name: "Kinsta",
    blurb: "Premium managed WordPress on Google Cloud with a polished dashboard and opinionated stack.",
    url: "https://kinsta.com",
    slug: "kinsta",
  },
];

const comparisonRows = [
  {
    label: "Primary positioning",
    rocket_net: "Performance-obsessed managed WordPress with Cloudflare Enterprise bundled.",
    cloudways: "Managed control panel on top of major cloud providers with flexible server choices.",
    kinsta: "Premium, opinionated managed WordPress hosting on Google Cloud.",
  },
  {
    label: "Performance focus",
    rocket_net: "Edge caching, full-page caching, and Cloudflare Enterprise tuned for WordPress.",
    cloudways: "Performance depends on chosen provider, plan, and your own tuning.",
    kinsta: "Google Cloud C2/C3 machines, built-in CDN, and strong caching layers.",
  },
  {
    label: "Control vs turnkey",
    rocket_net: "Highly turnkey; minimal server tweaking and fixed stack.",
    cloudways: "High control: choose provider, region, PHP, and manage services.",
    kinsta: "Managed with guardrails; less server access than Cloudways but more than pure shared hosting.",
  },
  {
    label: "CDN & edge network",
    rocket_net: "Cloudflare Enterprise + edge rules baked in—all-inclusive.",
    cloudways: "Add-on CloudwaysCDN or external CDNs (Cloudflare, Bunny, etc.).",
    kinsta: "Kinsta CDN (Cloudflare-backed) included on plans.",
  },
  {
    label: "Security",
    rocket_net: "Enterprise WAF, DDoS, malware protection, and isolation included.",
    cloudways: "Security varies by provider; firewalls & backups available but more user responsibility.",
    kinsta: "Firewall, malware scanning, automatic backups, and hack-fix guarantees.",
  },
  {
    label: "Scaling & multi-site",
    rocket_net: "Scales via higher resource tiers; strong for high-traffic WordPress and WooCommerce.",
    cloudways: "Vertical and horizontal scaling options depending on provider and architecture.",
    kinsta: "Tiered plans for visits/resources with multi-site options and overage pricing.",
  },
  {
    label: "Best for",
    rocket_net: "Teams wanting maximum performance and security out of the box.",
    cloudways: "Developers/agencies who want control, provider choice, and cost optimisation.",
    kinsta: "Agencies and brands wanting premium managed support and tooling.",
  },
];

const scoreboard = [
  { label: "Speed out of the box", rocket_net: 9.4, cloudways: 8.2, kinsta: 9.0 },
  { label: "Ease of use", rocket_net: 9.2, cloudways: 7.5, kinsta: 8.8 },
  { label: "Control & flexibility", rocket_net: 8.0, cloudways: 9.2, kinsta: 8.3 },
  { label: "Security included", rocket_net: 9.3, cloudways: 7.8, kinsta: 9.0 },
  { label: "Value for agencies", rocket_net: 8.9, cloudways: 8.6, kinsta: 8.7 },
];

const avg = (tool) =>
  (scoreboard.reduce((sum, row) => sum + (row[tool] || 0), 0) / scoreboard.length).toFixed(1);

const averages = {
  rocket_net: avg("rocket_net"),
  cloudways: avg("cloudways"),
  kinsta: avg("kinsta"),
};

const overallWinner =
  Math.max(averages.rocket_net, averages.cloudways, averages.kinsta) ===
  parseFloat(averages.rocket_net)
    ? "Rocket.net"
    : Math.max(averages.cloudways, averages.kinsta) === parseFloat(averages.cloudways)
    ? "Cloudways"
    : "Kinsta";

const pricingTable = [
  {
    plan: "Rocket.net Core Managed Plans",
    monthly: "Typically higher entry price vs shared hosts",
    annual: "Discounts for annual commitments",
    limits: "Visits, disk usage, and bandwidth per plan with Cloudflare Enterprise included",
    notes: "Great if you want enterprise-grade CDN/WAF bundled rather than piecing it together.",
  },
  {
    plan: "Cloudways Standard Plans",
    monthly: "Pay-as-you-go based on cloud provider size",
    annual: "Month-to-month; no strict long-term contracts by default",
    limits: "Server size (RAM/CPU/storage) and bandwidth per cloud instance",
    notes: "Often the cheapest path if you tune your own stack and right-size servers.",
  },
  {
    plan: "Kinsta Managed WordPress",
    monthly: "Tiered pricing by visits and sites",
    annual: "Lower effective rate on annual billing",
    limits: "Monthly visits, disk space, and number of installs per tier",
    notes: "Premium pricing but strong support, tooling, and guardrails for teams.",
  },
];

const featureBullets = {
  stack: [
    "Rocket.net: Full-page caching, edge optimisation, and Cloudflare Enterprise for WordPress and WooCommerce-heavy sites.",
    "Cloudways: Lets you run WordPress, Laravel, headless apps, and more on DigitalOcean, AWS, GCP, and others.",
    "Kinsta: Container-based architecture on Google Cloud with an opinionated stack focused on WordPress performance.",
  ],
  security: [
    "Rocket.net: Enterprise WAF, DDoS mitigation, and malware protection handled at the edge.",
    "Cloudways: Built-in firewalls and backups, but you still own more of the security posture.",
    "Kinsta: Hardened stack, malware scans, and hack-fix guarantees on managed WordPress plans.",
  ],
  operations: [
    "Rocket.net: Simple panel optimised for WordPress; fewer DevOps levers to manage.",
    "Cloudways: Staging, cloning, backups, SSH/SFTP, and service management suited to technical teams.",
    "Kinsta: Intuitive MyKinsta dashboard with staging, analytics, and collaboration features.",
  ],
};

const prosCons = {
  rocket_net: {
    pros: [
      "Cloudflare Enterprise, WAF, and edge caching included—no extra CDN contract required",
      "Extremely fast out of the box for WordPress and WooCommerce projects",
      "Simple, performance-focused panel that non-DevOps teams can manage",
    ],
    cons: [
      "Less server-level customisation compared with Cloudways",
      "Primarily WordPress focused—less ideal for non-WordPress stacks",
      "Premium pricing versus commodity VPS or shared hosting",
    ],
  },
  cloudways: {
    pros: [
      "Choose your underlying cloud provider and region with granular control",
      "Good balance of managed convenience with technical flexibility",
      "Can be cost-effective if you right-size servers and manage tuning",
    ],
    cons: [
      "Performance and reliability depend heavily on your chosen provider and setup",
      "More knobs and switches—steeper learning curve for non-technical teams",
      "Security/CDN often require extra configuration or external tools",
    ],
  },
  kinsta: {
    pros: [
      "Polished dashboard and UX built specifically for WordPress teams",
      "Strong support reputation and clear documentation",
      "Google Cloud infrastructure plus CDN and backups included",
    ],
    cons: [
      "Visit-based pricing and overages can surprise fast-growing sites",
      "Limited server-level access compared with Cloudways",
      "Best suited to WordPress; less flexible for other stacks",
    ],
  },
};

const faqs = [
  {
    q: `Who wins overall in ${YEAR}?`,
    a: "Rocket.net wins for bundled performance and security, especially for serious WordPress and WooCommerce stores. Kinsta is a close second for premium managed experience. Cloudways wins if you value control, provider choice, and potentially lower infrastructure cost.",
  },
  {
    q: "Which is cheapest to start with?",
    a: "Cloudways can be the cheapest at low to medium scale because you can pick small cloud instances and pay-as-you-go. Rocket.net and Kinsta typically cost more up front but include CDN, security, and more proactive managed support.",
  },
  {
    q: "Which is best for WooCommerce or high-traffic WordPress?",
    a: "Rocket.net is often favoured for WooCommerce and high-traffic WordPress due to Cloudflare Enterprise and edge performance. Kinsta is also strong with its Google Cloud stack and tooling. Cloudways can work well if you tune caching and infrastructure.",
  },
  {
    q: "Which is better for agencies managing many client sites?",
    a: "Agencies that want performance and simplicity lean to Rocket.net or Kinsta. Agencies with in-house technical talent and cost sensitivity often prefer Cloudways for its provider choice and scaling flexibility.",
  },
  {
    q: "Can I run non-WordPress apps on these platforms?",
    a: "Cloudways is the most flexible for non-WordPress stacks (Laravel, custom apps, APIs). Rocket.net and Kinsta are primarily optimised around WordPress, with limited support for other workloads.",
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
  const key = lowered.includes("rocket")
    ? "rocket_net"
    : lowered.includes("cloudways")
    ? "cloudways"
    : lowered.includes("kinsta")
    ? "kinsta"
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
          <span className="text-sm font-bold text-white">{name.slice(0, 2).toUpperCase()}</span>
        )}
      </div>
      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${meta.badge}`}>{name}</span>
    </div>
  );
};

export default function RocketNetVsCloudwaysVsKinstaPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Rocket.net vs Cloudways vs Kinsta (${YEAR}) – Managed WordPress hosting comparison`}
        description="Compare Rocket.net, Cloudways, and Kinsta for performance, security, control, pricing, and the right managed WordPress hosting for your sites."
        canonical={canonical}
        keywords={`${primaryKeyword}, managed wordpress hosting comparison, rocket.net vs cloudways, rocket.net vs kinsta, cloudways vs kinsta`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">
          Managed WordPress hosting
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Rocket.net vs Cloudways vs Kinsta ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Rocket.net bundles Cloudflare Enterprise and edge caching for performance out of the box.
          Cloudways gives you provider choice and deep control over your stack. Kinsta offers a
          premium managed experience on Google Cloud. Here’s a structured breakdown to pick the right
          hosting partner.
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
                <Sparkles className="h-5 w-5 text-white/80" />
              </div>
              <p className="relative mt-3 text-sm font-medium text-white/90">{item.blurb}</p>
            </a>
          ))}
        </div>

        {/* Quick verdict + overall winner */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-indigo-100 bg-indigo-50 px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-indigo-900">
              <Sparkles className="h-5 w-5" />
              <p className="text-lg font-semibold">Quick verdict</p>
            </div>
            <p className="mt-2 text-slate-800">
              Choose <strong>Rocket.net</strong> if you want the fastest out-of-the-box WordPress
              performance with security handled at the edge. Pick <strong>Cloudways</strong> if you
              want control over provider, resources, and cost. Go with <strong>Kinsta</strong> if you
              want a polished managed experience with strong support and tooling.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Crown className="h-4 w-4 text-indigo-600" /> Overall scoreboard winner: {overallWinner}{" "}
              <span className="text-xs text-slate-600">
                (avg:{" "}
                {overallWinner === "Rocket.net"
                  ? averages.rocket_net
                  : overallWinner === "Cloudways"
                  ? averages.cloudways
                  : averages.kinsta}
                /10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              Your best choice depends on whether you optimise for pure speed and security,
              infrastructure flexibility, or premium managed support and tooling.
            </p>
          </div>
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-indigo-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Rocket.net</th>
                  <th className="px-4 py-3">Cloudways</th>
                  <th className="px-4 py-3">Kinsta</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.rocket_net}</td>
                    <td className="px-4 py-3 text-slate-700">{row.cloudways}</td>
                    <td className="px-4 py-3 text-slate-700">{row.kinsta}</td>
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
                  <th className="px-4 py-3">Rocket.net</th>
                  <th className="px-4 py-3">Cloudways</th>
                  <th className="px-4 py-3">Kinsta</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const winnerValue = Math.max(row.rocket_net, row.cloudways, row.kinsta);
                  const winner =
                    winnerValue === row.rocket_net
                      ? "Rocket.net"
                      : winnerValue === row.cloudways
                      ? "Cloudways"
                      : "Kinsta";
                  return (
                    <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Rocket.net"
                            ? "font-semibold text-indigo-800"
                            : "text-slate-700"
                        }`}
                      >
                        {row.rocket_net}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Cloudways"
                            ? "font-semibold text-sky-800"
                            : "text-slate-700"
                        }`}
                      >
                        {row.cloudways}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Kinsta"
                            ? "font-semibold text-emerald-800"
                            : "text-slate-700"
                        }`}
                      >
                        {row.kinsta}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">{winner}</td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-indigo-50 via-sky-50 to-emerald-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages.rocket_net}
                  </td>
                  <td className="px-4 py-3 font-semibold text-sky-800">
                    {averages.cloudways}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.kinsta}
                  </td>
                  <td className="px-4 py-3 font-bold text-slate-900">{overallWinner}</td>
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
              <Zap className="h-5 w-5 text-indigo-600" /> Performance, stack & use cases
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Shield className="h-5 w-5 text-emerald-600" /> Security & reliability
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.security.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Layers className="h-5 w-5 text-sky-600" /> Operations, tooling & DevOps
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.operations.map((item) => (
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
            Pricing changes frequently based on promotions, provider choices, and resource tiers.
            Always confirm current pricing and limits directly on each host’s pricing page before
            committing.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Rocket.net:</strong> Very focused on WordPress with a simple,
              performance-centric panel. Non-technical marketers and founders can handle most
              day-to-day tasks without DevOps support.
            </li>
            <li>
              <strong>Cloudways:</strong> More technical dashboard with service controls, provider
              selection, and resource tuning. Ideal for teams comfortable with infrastructure and
              wanting more control.
            </li>
            <li>
              <strong>Kinsta:</strong> Polished MyKinsta experience with clear analytics, staging, and
              collaboration features. Feels opinionated but friendly for agencies and product teams.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>High-traffic blogs, WooCommerce, and performance-first sites:</strong>{" "}
              Rocket.net often wins thanks to Cloudflare Enterprise, edge caching, and managed
              security.
            </li>
            <li>
              <strong>Agencies and dev shops managing many different stacks:</strong>{" "}
              Cloudways wins if you want multiple providers, frameworks, and environments in one
              place.
            </li>
            <li>
              <strong>Brands and teams wanting white-glove managed WordPress:</strong>{" "}
              Kinsta wins with strong support, a polished dashboard, and opinionated best practices.
            </li>
            <li>
              <strong>Teams pairing hosting with their own CDN/security tools:</strong> Cloudways is
              flexible; Rocket.net and Kinsta make more sense if you want everything bundled.
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
              <h3 className="text-lg font-semibold">Rocket.net</h3>
              <p className="text-sm text-slate-700">
                Best when you want maximum WordPress and WooCommerce performance with Cloudflare
                Enterprise and security handled for you.
              </p>
              <p className="mt-2 text-sm font-semibold text-indigo-700">
                Ideal for: Ecommerce stores, publishers, and performance-sensitive marketing sites.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Cloudways</h3>
              <p className="text-sm text-slate-700">
                Best if you need infrastructure flexibility, provider choice, and the ability to tune
                performance and cost.
              </p>
              <p className="mt-2 text-sm font-semibold text-sky-700">
                Ideal for: Agencies, dev shops, and technical founders running multiple workloads.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Kinsta</h3>
              <p className="text-sm text-slate-700">
                Best for teams that want a premium managed WordPress experience with strong support
                and sensible guardrails.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: Agencies, SaaS marketing sites, and brands that value reliability and
                support over raw control.
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
