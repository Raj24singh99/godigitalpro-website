import React from "react";
import {
  Sparkles,
  Gauge,
  ShieldCheck,
  Crown,
  ArrowLeft,
  Cloud,
  Rocket as RocketIcon,
  Zap,
  BarChart3,
  Layers,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "bunny.net vs rocket.net vs cloudways";
const canonical = buildCanonical("/tools/compare/bunny-net-vs-rocket-net-vs-cloudways");

const brandMeta = {
  "bunny.net": {
    gradient: "from-orange-500 via-amber-500 to-rose-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/bunny.net",
  },
  "rocket.net": {
    gradient: "from-indigo-500 via-blue-500 to-slate-700",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/rocket.net",
  },
  cloudways: {
    gradient: "from-sky-500 via-blue-500 to-indigo-600",
    badge: "bg-sky-100 text-sky-900",
    logo: "https://logo.clearbit.com/cloudways.com",
  },
};

const contenders = [
  {
    key: "bunny.net",
    name: "Bunny.net",
    blurb: "CDN, edge storage, and video delivery with simple pay-as-you-go pricing.",
    url: "https://bunny.net",
  },
  {
    key: "rocket.net",
    name: "Rocket.net",
    blurb: "Managed WordPress hosting with built-in CDN/WAF tuned for speed.",
    url: "https://rocket.net",
  },
  {
    key: "cloudways",
    name: "Cloudways",
    blurb: "Managed cloud hosting layer on DO/Vultr/AWS/GCP with performance stack.",
    url: "https://www.cloudways.com",
  },
];

const comparisonRows = [
  {
    label: "Best fit",
    "bunny.net": "Standalone CDN/optimizer for any site stack.",
    "rocket.net": "Fully managed WordPress with edge CDN/WAF.",
    cloudways: "Managed hosting with your choice of cloud provider.",
  },
  {
    label: "Hosting included",
    "bunny.net": "No (CDN/edge only).",
    "rocket.net": "Yes – managed WordPress hosting + CDN.",
    cloudways: "Yes – managed servers on selected cloud.",
  },
  {
    label: "Optimization focus",
    "bunny.net": "Global CDN, image optimizer, and video delivery.",
    "rocket.net": "WordPress/Woo performance presets + security.",
    cloudways: "Server stack, PHP tuning, and caching for apps.",
  },
  {
    label: "Pricing style",
    "bunny.net": "Pay-as-you-go per GB and feature.",
    "rocket.net": "Per-site managed plans.",
    cloudways: "Per-server hourly/monthly + platform fee.",
  },
  {
    label: "Security",
    "bunny.net": "SSL, token auth, WAF add-on, geo controls.",
    "rocket.net": "Enterprise CDN/WAF, malware protection, backups.",
    cloudways: "Firewalls, automated backups, bot protection.",
  },
  {
    label: "Who should pick",
    "bunny.net": "Teams needing a fast, low-cost CDN/optimizer.",
    "rocket.net": "WordPress/Woo merchants wanting turnkey speed.",
    cloudways: "Agencies and teams wanting managed hosting + choice.",
  },
];

const scoreboard = [
  { label: "Speed / performance", scores: { "bunny.net": 9.3, "rocket.net": 9.4, cloudways: 9.0 } },
  { label: "Ease of setup", scores: { "bunny.net": 9.2, "rocket.net": 9.5, cloudways: 8.6 } },
  { label: "Value", scores: { "bunny.net": 9.4, "rocket.net": 8.6, cloudways: 8.8 } },
  { label: "Security bundle", scores: { "bunny.net": 8.2, "rocket.net": 9.3, cloudways: 8.7 } },
  { label: "Flexibility", scores: { "bunny.net": 9.0, "rocket.net": 8.4, cloudways: 9.1 } },
];

const avg = (key) =>
  (scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0) / scoreboard.length).toFixed(1);

const averages = {
  "bunny.net": avg("bunny.net"),
  "rocket.net": avg("rocket.net"),
  cloudways: avg("cloudways"),
};

const overallWinnerKey = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const overallWinnerName =
  contenders.find((c) => c.key === overallWinnerKey)?.name || "Rocket.net";

const pricingTable = [
  {
    plan: "Bunny.net CDN / Edge Storage",
    monthly: "Pay-as-you-go",
    annual: "Usage-based; no fixed annual commitment",
    limits: "Per-GB transfer and storage; features like image optimization and video billed separately.",
    notes: "Ideal as a bolt-on CDN/optimizer for existing hosting; very low entry cost.",
  },
  {
    plan: "Rocket.net Managed WordPress",
    monthly: "~$30+ per site",
    annual: "Lower effective price with yearly billing",
    limits: "Site, visit, and storage limits depend on the tier.",
    notes: "Premium choice for WordPress/WooCommerce where performance and security are critical.",
  },
  {
    plan: "Cloudways Managed Cloud Server",
    monthly: "~$11–$36+ per server",
    annual: "Pay monthly; cost tied to chosen cloud provider",
    limits: "RAM, CPU, and bandwidth depend on server size and provider.",
    notes: "Best for agencies and teams that want control over provider/size and can pair their preferred CDN.",
  },
];

const featureBullets = {
  performance: [
    "Bunny.net: Focused on fast global delivery, image optimization, and video streaming over a large edge network.",
    "Rocket.net: Combines managed WordPress stack with aggressive edge caching and tuned CDN rules.",
    "Cloudways: Optimized server stack (PHP/MySQL/Redis etc.) that works best when paired with a CDN such as Bunny.net.",
  ],
  hostingControl: [
    "Bunny.net: No origin hosting – you bring your own server/host and point traffic through Bunny’s CDN and optimizer.",
    "Rocket.net: All-in-one managed WordPress host where most low-level performance tuning is handled for you.",
    "Cloudways: Sits between DIY cloud and fully managed hosting, giving you control over provider, size, and applications.",
  ],
  security: [
    "Bunny.net: SSL, token authentication, geo-blocking and optional WAF for edge protection.",
    "Rocket.net: Enterprise CDN/WAF, malware protection, and backups integrated into the managed platform.",
    "Cloudways: Cloud firewalls, automated backups, bot protection, and platform-level security hardening.",
  ],
};

const faqs = [
  {
    q: `Which is best overall in ${YEAR}?`,
    a: "Bunny.net is best for standalone CDN/optimizer value. Rocket.net is best for turnkey WordPress performance and security. Cloudways is best when you want managed hosting on your preferred cloud provider with flexibility to choose your CDN.",
  },
  {
    q: "Do I need hosting with Bunny.net?",
    a: "Yes. Bunny.net is not a traditional web host. It is a CDN and edge platform for accelerating and optimizing content. You still need an origin host (shared, VPS, Cloudways, etc.) behind it.",
  },
  {
    q: "Which is most budget-friendly?",
    a: "Bunny.net typically has the lowest starting cost with pay-as-you-go billing. Cloudways is mid-range depending on server size and provider. Rocket.net is a premium managed WordPress host but includes CDN, WAF, and backups in the price.",
  },
  {
    q: "When should I choose Cloudways over Rocket.net?",
    a: "Choose Cloudways if you want more control over server sizes, providers, and running multiple apps beyond WordPress. Choose Rocket.net if you want hands-off, performance-tuned WordPress/Woo with edge CDN/WAF included.",
  },
  {
    q: "Can I combine these tools?",
    a: "Yes. A common pattern is Cloudways for managed servers plus Bunny.net as the CDN/optimizer. Rocket.net is already bundled with an enterprise-grade CDN/WAF, so you usually do not need a separate CDN there.",
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
  "bunny.net": {
    pros: [
      "Very fast global CDN with strong image and video optimization features.",
      "Simple, transparent pay-as-you-go pricing that scales with actual usage.",
      "Easy to integrate with almost any hosting setup or CMS, including WordPress and custom apps.",
    ],
    cons: [
      "Not a hosting provider – you need an origin server elsewhere.",
      "Advanced security like WAF is an add-on rather than fully bundled.",
      "Requires some configuration to get the best results with complex sites.",
    ],
  },
  "rocket.net": {
    pros: [
      "Managed WordPress hosting with enterprise CDN and WAF included.",
      "Extremely easy onboarding – performance and security tuning are largely done for you.",
      "Excellent for WooCommerce and high-traffic WordPress sites that need low TTFB.",
    ],
    cons: [
      "More expensive than generic shared or basic managed WordPress hosts.",
      "WordPress-only focus – not suitable if you run many non-WP apps.",
      "Less flexibility around infrastructure provider choice compared to Cloudways.",
    ],
  },
  cloudways: {
    pros: [
      "Lets you choose from major cloud providers (DO, Vultr, AWS, GCP, Linode).",
      "Managed stack with backups, firewalls, staging, and performance tuning.",
      "Great fit for agencies needing separate servers per client and freedom to choose CDNs.",
    ],
    cons: [
      "More moving parts than a fully turnkey host like Rocket.net.",
      "Costs include both provider fee and Cloudways platform fee, which can be confusing at first.",
      "Security/CDN are solid but not as “all-inclusive” as Rocket.net’s bundled stack.",
    ],
  },
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

export default function BunnyVsRocketVsCloudwaysPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Bunny.net vs Rocket.net vs Cloudways (${YEAR}) – CDN & hosting comparison`}
        description="Compare Bunny.net CDN, Rocket.net managed WordPress, and Cloudways managed cloud hosting on performance, pricing, security, and real-world architectures."
        canonical={canonical}
        keywords={`${primaryKeyword}, bunny.net review, rocket.net review, cloudways review, cdn comparison, managed wordpress, managed hosting`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
          CDN & managed hosting
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Bunny.net vs Rocket.net vs Cloudways ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          <strong>Bunny.net</strong> is a fast, low-friction CDN with edge storage and optimization.{" "}
          <strong>Rocket.net</strong> is fully managed WordPress hosting with enterprise CDN/WAF
          built in. <strong>Cloudways</strong> sits in between: a managed hosting layer on top of
          your choice of cloud provider. Your ideal pick depends on whether you want CDN-only,
          turnkey WordPress, or flexible managed servers.
        </p>

        {/* Quick verdict + highlight cards */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="space-y-3 rounded-3xl bg-amber-50/90 p-6 ring-1 ring-amber-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-amber-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>Bunny.net</strong> if you want a high-performance CDN/optimizer to
              layer on top of any host. Choose <strong>Rocket.net</strong> if you want fast,
              secure, fully managed WordPress/Woo out of the box. Choose{" "}
              <strong>Cloudways</strong> if you want managed hosting on your preferred cloud with
              the freedom to bring your own CDN (including Bunny.net).
            </p>
            <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-amber-800">
              <Crown className="h-4 w-4" /> Overall scoreboard winner:{" "}
              {overallWinnerName}{" "}
              <span className="text-xs font-medium text-amber-700">
                (avg: {averages[overallWinnerKey]}/10)
              </span>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="text-sm font-semibold text-slate-900">Best for</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <Cloud className="mt-0.5 h-4 w-4 text-amber-600" />
                <span>
                  <strong>Bunny.net:</strong> Add a global CDN and optimizer to any existing
                  hosting stack at low cost.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <RocketIcon className="mt-0.5 h-4 w-4 text-indigo-600" />
                <span>
                  <strong>Rocket.net:</strong> WordPress/Woo merchants who want edge CDN, WAF, and
                  backups handled for them.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="mt-0.5 h-4 w-4 text-sky-600" />
                <span>
                  <strong>Cloudways:</strong> Agencies and teams that want managed hosting with
                  freedom to choose provider, size, and CDN.
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
                  <th className="px-4 py-3">Bunny.net</th>
                  <th className="px-4 py-3">Rocket.net</th>
                  <th className="px-4 py-3">Cloudways</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="align-top">
                    <th className="px-4 py-3 font-semibold text-slate-900">
                      {row.label}
                    </th>
                    <td className="px-4 py-3">{row["bunny.net"]}</td>
                    <td className="px-4 py-3">{row["rocket.net"]}</td>
                    <td className="px-4 py-3">{row.cloudways}</td>
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
          <div className="overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Criterion</th>
                  <th className="px-4 py-3">Bunny.net</th>
                  <th className="px-4 py-3">Rocket.net</th>
                  <th className="px-4 py-3">Cloudways</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const entries = Object.entries(row.scores);
                  const [winnerKey] =
                    entries.sort((a, b) => Number(b[1]) - Number(a[1]))[0] || [];
                  const winnerLabel =
                    winnerKey === "bunny.net"
                      ? "Bunny.net"
                      : winnerKey === "rocket.net"
                      ? "Rocket.net"
                      : "Cloudways";
                  return (
                    <tr key={row.label}>
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "bunny.net"
                            ? "font-semibold text-amber-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores["bunny.net"]}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "rocket.net"
                            ? "font-semibold text-indigo-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores["rocket.net"]}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "cloudways"
                            ? "font-semibold text-sky-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.cloudways}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">
                        {winnerLabel}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-amber-50 via-indigo-50 to-sky-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages["bunny.net"]}
                  </td>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages["rocket.net"]}
                  </td>
                  <td className="px-4 py-3 font-semibold text-sky-800">
                    {averages.cloudways}
                  </td>
                  <td className="px-4 py-3 font-bold text-slate-900">
                    {overallWinnerName}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Feature comparison */}
        <section className="mt-12 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-amber-600" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">
              Performance & edge stack
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.performance.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">
              Hosting model & control
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.hostingControl.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">
              Security & reliability
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.security.map((item) => (
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
            Pricing for Bunny.net, Rocket.net, and Cloudways changes frequently and depends on
            traffic, storage, and server size. Use these as directional benchmarks and confirm
            current pricing on each provider’s site.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Bunny.net:</strong> Fairly straightforward for basic CDN setups; more advanced
              rules and optimization require some familiarity with DNS and caching.
            </li>
            <li>
              <strong>Rocket.net:</strong> Easiest for pure WordPress/Woo – you focus on content and
              campaigns while the platform handles performance and security defaults.
            </li>
            <li>
              <strong>Cloudways:</strong> Slightly steeper curve than Rocket.net; you manage
              servers, sizes, and apps but avoid raw DevOps configuration on the underlying cloud.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world architectures & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Add a CDN to an existing shared/VPS host:</strong>{" "}
              Bunny.net wins with low friction, strong optimization, and pay-as-you-go pricing.
            </li>
            <li>
              <strong>High-traffic WooCommerce or content site on WordPress:</strong>{" "}
              Rocket.net wins with tuned edge caching, WAF, and malware protection baked in.
            </li>
            <li>
              <strong>Agency running many client stacks (WordPress, custom apps, APIs):</strong>{" "}
              Cloudways wins with provider choice, per-client servers, and the ability to pair
              Bunny.net or another CDN for global delivery.
            </li>
            <li>
              <strong>Performance-focused architecture with fine-grained control:</strong>{" "}
              Cloudways + Bunny.net is a strong combo: Cloudways for managed servers, Bunny.net for
              CDN/edge optimization.
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
