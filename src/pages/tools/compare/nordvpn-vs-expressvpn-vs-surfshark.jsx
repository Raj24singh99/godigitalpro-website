import React from "react";
import {
  Sparkles,
  Crown,
  Layers,
  BarChart3,
  ArrowLeft,
  Gauge,
  Shield,
  WifiOff,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "nordvpn vs expressvpn vs surfshark";
const canonical = buildCanonical(
  "/tools/compare/nordvpn-vs-expressvpn-vs-surfshark"
);

const brandMeta = {
  nordvpn: {
    gradient: "from-sky-500 via-blue-600 to-slate-900",
    badge: "bg-sky-100 text-sky-900",
    logo: "https://logo.clearbit.com/nordvpn.com",
  },
  expressvpn: {
    gradient: "from-rose-500 via-red-500 to-amber-500",
    badge: "bg-rose-100 text-rose-900",
    logo: "https://logo.clearbit.com/expressvpn.com",
  },
  surfshark: {
    gradient: "from-emerald-500 via-teal-500 to-blue-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/surfshark.com",
  },
};

const contenders = [
  {
    key: "nordvpn",
    name: "NordVPN",
    blurb: "Audited no-logs, RAM-only servers, NordLynx speed and security extras.",
    url: "/tools/nordvpn",
  },
  {
    key: "expressvpn",
    name: "ExpressVPN",
    blurb: "Premium VPN known for top-tier streaming performance and simplicity.",
    url: "/tools/expressvpn",
  },
  {
    key: "surfshark",
    name: "Surfshark",
    blurb: "Value-friendly VPN with unlimited devices and strong privacy features.",
    url: "/tools/surfshark",
  },
];

const comparisonRows = [
  {
    label: "Privacy & logging",
    nordvpn: "Audited no-logs; RAM-only servers; based in Panama.",
    expressvpn: "Audited no-logs; RAM-only servers; based in BVI.",
    surfshark: "Audited no-logs; RAM-only servers; based in the Netherlands.",
  },
  {
    label: "Protocols",
    nordvpn: "NordLynx (WireGuard), OpenVPN, IKEv2 on many platforms.",
    expressvpn: "Lightway (proprietary), OpenVPN, IKEv2/L2TP on some devices.",
    surfshark: "WireGuard, OpenVPN, IKEv2, Shadowsocks on some platforms.",
  },
  {
    label: "Speed",
    nordvpn: "NordLynx delivers consistently strong speeds across regions.",
    expressvpn:
      "Very fast with Lightway, especially for streaming and long-distance hops.",
    surfshark:
      "Good speeds on WireGuard; occasional dips on busy or distant servers.",
  },
  {
    label: "Devices & connections",
    nordvpn: "Up to 10 simultaneous connections per account.",
    expressvpn: "Up to 8 simultaneous connections.",
    surfshark: "Unlimited devices on a single subscription.",
  },
  {
    label: "Streaming & geo-unblocking",
    nordvpn:
      "Reliably unblocks major platforms with specialised streaming servers.",
    expressvpn:
      "One of the most reliable for streaming; simple apps and strong unblocking.",
    surfshark:
      "Great streaming support across many libraries at lower price points.",
  },
  {
    label: "Notable extras",
    nordvpn: "Threat Protection, Double VPN, Onion over VPN, Meshnet, Dark Web Monitor.",
    expressvpn: "Easy apps, split tunnelling, MediaStreamer smart DNS.",
    surfshark: "Unlimited devices, CleanWeb ad blocking, Rotating IP, MultiHop.",
  },
  {
    label: "Kill switch & leak protection",
    nordvpn:
      "System-level kill switch on many apps; strong DNS and IPv6 leak protection.",
    expressvpn:
      "Network Lock kill switch; robust leak protections across devices.",
    surfshark:
      "Kill switch on most platforms; good DNS and WebRTC leak protection.",
  },
  {
    label: "Best for",
    nordvpn:
      "Users wanting strong security extras + speed at a mid-market price.",
    expressvpn:
      "Those who prioritise streaming performance and simplicity over raw price.",
    surfshark:
      "Households and teams needing unlimited devices and the best value per user.",
  },
];

const scoreboard = [
  { label: "Privacy & security", nordvpn: 9.6, expressvpn: 9.5, surfshark: 9.2 },
  { label: "Speed & streaming", nordvpn: 9.4, expressvpn: 9.6, surfshark: 9.0 },
  { label: "Device limits & value", nordvpn: 9.0, expressvpn: 8.4, surfshark: 9.7 },
  { label: "Features & extras", nordvpn: 9.3, expressvpn: 8.8, surfshark: 9.0 },
  { label: "Ease of use", nordvpn: 9.1, expressvpn: 9.4, surfshark: 9.0 },
];

const avg = (tool) =>
  (
    scoreboard.reduce((sum, row) => sum + (row[tool] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  nordvpn: avg("nordvpn"),
  expressvpn: avg("expressvpn"),
  surfshark: avg("surfshark"),
};

const overallWinner =
  Math.max(
    parseFloat(averages.nordvpn),
    parseFloat(averages.expressvpn),
    parseFloat(averages.surfshark)
  ) === parseFloat(averages.nordvpn)
    ? "NordVPN"
    : Math.max(
        parseFloat(averages.expressvpn),
        parseFloat(averages.surfshark)
      ) === parseFloat(averages.expressvpn)
    ? "ExpressVPN"
    : "Surfshark";

const pricingTable = [
  {
    plan: "NordVPN 2-year plan (approx.)",
    monthly: "From around ~$3–$5/mo on long-term deals",
    annual: "Effective monthly cost higher on annual vs 2-year",
    limits: "Up to 10 devices, full feature set, global server network",
    notes: "Best balance of speed, security extras and price for most users.",
  },
  {
    plan: "ExpressVPN 1-year plan (approx.)",
    monthly: "From around ~$6–$8/mo on longer terms",
    annual: "Often billed annually for best price",
    limits: "Up to 8 devices; same features across all plans",
    notes: "Premium pricing justified if you care most about streaming and simple apps.",
  },
  {
    plan: "Surfshark 2-year plan (approx.)",
    monthly: "From around ~$2–$3/mo on long-term deals",
    annual: "Slightly higher effective monthly on yearly plans",
    limits: "Unlimited devices, core features, and many extras included",
    notes: "Best value for households and teams needing many connections.",
  },
];

const featureBullets = {
  privacy: [
    "NordVPN: Independent no-logs audits, RAM-only servers, privacy-friendly jurisdiction, and advanced extras like Double VPN and Onion over VPN.",
    "ExpressVPN: Multiple third-party audits, RAM-only TrustedServer tech, and a strong track record on privacy and security.",
    "Surfshark: Audited no-logs, RAM-only infrastructure, and advanced features such as Rotating IP and MultiHop routes.",
  ],
  speed: [
    "NordVPN: NordLynx protocol (WireGuard-based) delivers excellent speeds even on distant servers.",
    "ExpressVPN: Lightway protocol is highly optimised for stable, fast connections and streaming.",
    "Surfshark: WireGuard support means strong performance, especially on nearby servers and modern devices.",
  ],
  devices: [
    "NordVPN: Supports up to 10 devices—enough for most users without being unlimited.",
    "ExpressVPN: 8 devices per account; ideal if you want a premium experience across a reasonable number of devices.",
    "Surfshark: Truly unlimited devices; great for families, households or small teams sharing one plan.",
  ],
};

const prosCons = {
  nordvpn: {
    pros: [
      "Excellent balance of speed, security, and pricing on longer plans",
      "Advanced security extras (Threat Protection, Double VPN, Onion over VPN, Meshnet)",
      "Large global server network with strong streaming and P2P support",
    ],
    cons: [
      "Apps expose many options—can feel more complex than ExpressVPN for casual users",
      "Best pricing requires longer-term commitment",
      "Some advanced features available only on specific platforms or protocols",
    ],
  },
  expressvpn: {
    pros: [
      "Very simple, polished apps that work consistently out of the box",
      "Excellent streaming performance and unblocking reliability",
      "Lightway protocol offers fast, stable connections with quick switching",
    ],
    cons: [
      "Higher pricing than most competitors, especially vs Surfshark",
      "Fewer advanced extras compared with NordVPN and Surfshark",
      "Device limit of 8 can be restrictive for large households",
    ],
  },
  surfshark: {
    pros: [
      "Unlimited devices on a single subscription—great value per user",
      "Strong feature set including CleanWeb ad blocking and Rotating IP",
      "Very competitive long-term pricing with good streaming performance",
    ],
    cons: [
      "Speeds slightly less consistent than NordVPN/ExpressVPN on some routes",
      "Apps surface many features which can overwhelm beginners",
      "Younger brand than the other two, which some users may weigh in trust decisions",
    ],
  },
};

const faqs = [
  {
    q: `Who wins overall in ${YEAR}?`,
    a: "NordVPN wins overall for balancing speed, audited security, and price. ExpressVPN is slightly better for pure streaming reliability and simplicity but costs more. Surfshark wins if you care most about unlimited devices and the lowest effective price per user.",
  },
  {
    q: "Which VPN is best for streaming?",
    a: "ExpressVPN and NordVPN both reliably unlock major streaming libraries. ExpressVPN has the simplest experience and is extremely consistent; NordVPN is close behind with stronger value on longer-term pricing.",
  },
  {
    q: "Which VPN is best if I have many devices?",
    a: "Surfshark is the clear winner for large households and teams because it allows unlimited devices per subscription. NordVPN supports up to 10 devices, and ExpressVPN supports up to 8.",
  },
  {
    q: "Which VPN offers the most security extras?",
    a: "NordVPN offers some of the richest extras with Threat Protection, Double VPN, Onion over VPN, and Meshnet. Surfshark also has advanced tools like Rotating IP and CleanWeb. ExpressVPN focuses on simplicity, relying mainly on its Lightway protocol and strong defaults.",
  },
  {
    q: "Do all three have kill switches and no-logs policies?",
    a: "Yes. NordVPN, ExpressVPN, and Surfshark all provide kill switches on most platforms and have undergone independent audits of their no-logs claims and infrastructure.",
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
    lowered.includes("nord") || lowered === "nordvpn"
      ? "nordvpn"
      : lowered.includes("express")
      ? "expressvpn"
      : lowered.includes("surf")
      ? "surfshark"
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

// Keeping Score helper in case you still want small metric cards elsewhere
const Score = ({ label, value }) => (
  <div className="flex items-center justify-between">
    <span>{label}</span>
    <span className="font-semibold text-slate-900">{value}/10</span>
  </div>
);

export default function NordVPNVsExpressVPNVsSurfsharkPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`NordVPN vs ExpressVPN vs Surfshark (${YEAR}) – Which VPN wins?`}
        description="Compare NordVPN, ExpressVPN, and Surfshark on privacy, speed, device limits, streaming, pricing, and security extras to choose the best VPN for your use case."
        canonical={canonical}
        keywords={`${primaryKeyword}, vpn comparison, streaming vpn, privacy vpn`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
          VPN & Security
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          NordVPN vs ExpressVPN vs Surfshark ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          NordVPN balances speed, security audits, and pricing for most users.
          ExpressVPN is premium-priced but remains a favourite for streaming and
          simplicity. Surfshark is the best value play with unlimited devices.
          Here is the deep-dive comparison before you subscribe.
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
          <div className="rounded-3xl border border-sky-100 bg-sky-50 px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sky-900">
              <Sparkles className="h-5 w-5" />
              <p className="text-lg font-semibold">Quick verdict</p>
            </div>
            <p className="mt-2 text-slate-800">
              Choose <strong>NordVPN</strong> if you want the best overall
              balance of speed, audited security, and value. Pick{" "}
              <strong>ExpressVPN</strong> if you prioritise streaming
              performance and ultra-simple apps and you are comfortable with the
              premium price. Go with <strong>Surfshark</strong> if you need
              unlimited devices and the lowest cost per household or team.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Crown className="h-4 w-4 text-sky-600" /> Overall scoreboard
              winner: {overallWinner}{" "}
              <span className="text-xs text-slate-600">
                (avg:{" "}
                {overallWinner === "NordVPN"
                  ? averages.nordvpn
                  : overallWinner === "ExpressVPN"
                  ? averages.expressvpn
                  : averages.surfshark}
                /10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              All three are strong choices. The right VPN depends on whether you
              optimise for privacy depth, streaming performance, or value across
              many devices.
            </p>
          </div>
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-sky-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">NordVPN</th>
                  <th className="px-4 py-3">ExpressVPN</th>
                  <th className="px-4 py-3">Surfshark</th>
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
                      {row.nordvpn}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.expressvpn}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.surfshark}
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
                  <th className="px-4 py-3">NordVPN</th>
                  <th className="px-4 py-3">ExpressVPN</th>
                  <th className="px-4 py-3">Surfshark</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const { nordvpn, expressvpn, surfshark } = row;
                  const winnerValue = Math.max(
                    nordvpn,
                    expressvpn,
                    surfshark
                  );
                  const winner =
                    winnerValue === nordvpn
                      ? "NordVPN"
                      : winnerValue === expressvpn
                      ? "ExpressVPN"
                      : "Surfshark";
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
                          winner === "NordVPN"
                            ? "font-semibold text-sky-800"
                            : "text-slate-700"
                        }`}
                      >
                        {nordvpn}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "ExpressVPN"
                            ? "font-semibold text-rose-800"
                            : "text-slate-700"
                        }`}
                      >
                        {expressvpn}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Surfshark"
                            ? "font-semibold text-emerald-800"
                            : "text-slate-700"
                        }`}
                      >
                        {surfshark}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">
                        {winner}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-sky-50 via-rose-50 to-emerald-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-sky-800">
                    {averages.nordvpn}
                  </td>
                  <td className="px-4 py-3 font-semibold text-rose-800">
                    {averages.expressvpn}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.surfshark}
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
            <Shield className="h-6 w-6 text-sky-600" /> Feature Comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <WifiOff className="h-5 w-5 text-sky-600" /> Privacy, logging &
              security
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.privacy.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Gauge className="h-5 w-5 text-rose-600" /> Speed & streaming
              performance
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.speed.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Globe className="h-5 w-5 text-emerald-600" /> Devices, value &
              everyday use
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.devices.map((item) => (
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
            VPN pricing changes frequently and varies by region, currency and
            promotions. Treat these as directional snapshots and always confirm
            current pricing, renewal terms and money-back guarantees on each
            provider’s site.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User Experience & Learning Curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>NordVPN:</strong> Offers powerful apps with many options.
              Great once configured, but advanced menus can feel busy to first
              timers who just want to “click and connect”.
            </li>
            <li>
              <strong>ExpressVPN:</strong> The most minimal and polished
              experience. One of the best if you want to tap one button and not
              think about settings at all.
            </li>
            <li>
              <strong>Surfshark:</strong> Modern, friendly apps with lots of
              features visible. Excellent for power users; beginners may need a
              few days to explore all the toggles.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-World Use-Cases & Winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Streaming libraries (Netflix, Hulu, etc.):</strong>{" "}
              ExpressVPN and NordVPN both perform very well. ExpressVPN edges
              ahead on simplicity, NordVPN on value.
            </li>
            <li>
              <strong>Remote work and security while travelling:</strong>{" "}
              NordVPN wins with its balance of speed, security, Meshnet and
              advanced features on public Wi-Fi.
            </li>
            <li>
              <strong>Households with many devices:</strong> Surfshark is the
              obvious pick thanks to unlimited devices on one subscription.
            </li>
            <li>
              <strong>Budget-conscious privacy upgrade:</strong> Surfshark on a
              long-term plan gives most of the premium experience at the lowest
              price per month.
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
              <h3 className="text-lg font-semibold">NordVPN</h3>
              <p className="text-sm text-slate-700">
                Best when you want a long-term VPN you can trust for both speed
                and security, including advanced features for power users.
              </p>
              <p className="mt-2 text-sm font-semibold text-sky-700">
                Ideal for: Power users, frequent travellers, remote workers and
                privacy-conscious households.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">ExpressVPN</h3>
              <p className="text-sm text-slate-700">
                Best for people who value a premium, no-fuss experience and
                streaming reliability more than shaving every dollar off the
                price.
              </p>
              <p className="mt-2 text-sm font-semibold text-rose-700">
                Ideal for: Streamers, less-technical users, and those who want
                an app that “just works”.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Surfshark</h3>
              <p className="text-sm text-slate-700">
                Best if you need to protect many devices with one subscription
                and still want strong privacy and streaming performance.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: Families, shared houses, small teams, and users on a
                strict budget.
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
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-sky-700 ring-1 ring-sky-100 hover:bg-sky-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
