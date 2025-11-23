import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  ClipboardList,
  Crown,
  ArrowLeft,
  Shield,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "surfshark vs nordvpn vs expressvpn";
const canonical = buildCanonical(
  "/tools/compare/surfshark-vs-nordvpn-vs-expressvpn"
);

const brandMeta = {
  surfshark: {
    gradient: "from-teal-500 via-cyan-500 to-blue-600",
    badge: "bg-teal-100 text-teal-900",
    logo: "https://logo.clearbit.com/surfshark.com",
  },
  nordvpn: {
    gradient: "from-sky-500 via-blue-500 to-indigo-600",
    badge: "bg-sky-100 text-sky-900",
    logo: "https://logo.clearbit.com/nordvpn.com",
  },
  expressvpn: {
    gradient: "from-rose-600 via-red-500 to-orange-500",
    badge: "bg-rose-100 text-rose-900",
    logo: "https://logo.clearbit.com/expressvpn.com",
  },
};

const contenders = [
  {
    key: "surfshark",
    name: "Surfshark",
    blurb: "Affordable VPN with unlimited devices and CleanWeb ad blocking.",
    url: "https://surfshark.com",
  },
  {
    key: "nordvpn",
    name: "NordVPN",
    blurb:
      "Long-time leader with specialty servers, Meshnet, and fast NordLynx protocol.",
    url: "https://nordvpn.com",
  },
  {
    key: "expressvpn",
    name: "ExpressVPN",
    blurb: "Polished apps, consistent speeds, and solid streaming performance.",
    url: "https://www.expressvpn.com",
  },
];

const comparisonRows = [
  {
    label: "Best for",
    surfshark: "Unlimited devices + value pricing",
    nordvpn: "Specialty servers and extra security features",
    expressvpn: "Polished apps and consistent streaming",
  },
  {
    label: "Speed (WireGuard/NordLynx/Lightway)",
    surfshark: "Fast, competitive for HD calls",
    nordvpn: "Generally fastest with NordLynx",
    expressvpn: "Very consistent, slightly pricier",
  },
  {
    label: "Privacy & logs",
    surfshark: "No-logs, RAM-only, audited",
    nordvpn: "No-logs, RAM-only, audited",
    expressvpn: "No-logs, RAM-only, audited",
  },
  {
    label: "Specialty features",
    surfshark: "CleanWeb, MultiHop, static IP (add-on)",
    nordvpn: "Meshnet, Threat Protection, Double VPN, Onion over VPN",
    expressvpn: "TrustedServer, split tunneling, MediaStreamer",
  },
  {
    label: "Value & devices",
    surfshark: "Lowest long-term price, unlimited devices",
    nordvpn: "Mid/high pricing, 6 devices",
    expressvpn: "Higher pricing, 5 devices",
  },
];

const scoreboard = [
  {
    label: "Speed & performance",
    scores: { surfshark: 9.0, nordvpn: 9.5, expressvpn: 9.2 },
  },
  {
    label: "Privacy & security",
    scores: { surfshark: 9.2, nordvpn: 9.3, expressvpn: 9.3 },
  },
  {
    label: "Value for money",
    scores: { surfshark: 9.5, nordvpn: 8.4, expressvpn: 8.0 },
  },
  {
    label: "Features & extras",
    scores: { surfshark: 8.8, nordvpn: 9.4, expressvpn: 8.9 },
  },
  {
    label: "Ease of use",
    scores: { surfshark: 9.0, nordvpn: 9.0, expressvpn: 9.2 },
  },
];

const pricingTable = [
  {
    plan: "Surfshark 2-year",
    monthly: "From ~$2–$3/mo",
    annual: "Lower on multi-year",
    limits: "Unlimited devices, CleanWeb, WireGuard, 30-day guarantee",
  },
  {
    plan: "NordVPN 2-year",
    monthly: "From ~$3–$5/mo",
    annual: "Lower on multi-year",
    limits: "6 devices, specialty servers, NordLynx, Threat Protection",
  },
  {
    plan: "ExpressVPN 12-month",
    monthly: "From ~$8–$13/mo",
    annual: "Lower on annual",
    limits:
      "5 devices, Lightway protocol, MediaStreamer, polished apps",
  },
];

const faqs = [
  {
    q: `Is Surfshark better than NordVPN or ExpressVPN in ${YEAR}?`,
    a: "Surfshark wins on price and unlimited devices. NordVPN wins on specialty servers and speed. ExpressVPN wins on polished apps and consistent streaming, but costs more.",
  },
  {
    q: "Which is best for travel?",
    a: "All three are strong. ExpressVPN has great streaming consistency; Surfshark is budget-friendly for many devices; NordVPN adds Meshnet and specialty servers for trickier networks.",
  },
  {
    q: "Are they audited and no-logs?",
    a: "Yes. All three have independent audits and no-logs policies with RAM-only servers in their core infrastructure.",
  },
  {
    q: "Which is most affordable for families or teams?",
    a: "Surfshark—unlimited devices, aggressive multi-year pricing, and solid day-to-day performance make it ideal for households and small teams.",
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

const avg = (key) => {
  const total = scoreboard.reduce(
    (sum, row) => sum + (row.scores[key] || 0),
    0
  );
  return (total / scoreboard.length).toFixed(1);
};

const averages = {
  surfshark: avg("surfshark"),
  nordvpn: avg("nordvpn"),
  expressvpn: avg("expressvpn"),
};

const overallWinner = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const prosCons = {
  surfshark: {
    pros: [
      "Unlimited devices per subscription—ideal for families, small teams, and power users.",
      "Very competitive long-term pricing, especially on 2-year+ plans.",
      "CleanWeb blocks ads, trackers, and some malware at the VPN level.",
      "MultiHop, static IP (add-on), and WireGuard support for better security and speed.",
    ],
    cons: [
      "Interface and app polish are good but a touch behind ExpressVPN.",
      "Network size and specialty server range are slightly smaller than NordVPN.",
      "Best discounts usually require long multi-year commitments.",
    ],
  },
  nordvpn: {
    pros: [
      "NordLynx protocol delivers some of the fastest real-world speeds.",
      "Strong specialty server lineup: Double VPN, Onion over VPN, P2P, and obfuscated servers.",
      "Threat Protection adds tracker/malware blocking even when VPN is off (on some platforms).",
      "Meshnet is useful for secure virtual LANs, remote access, and file sharing.",
    ],
    cons: [
      "Device limit (6) is lower than Surfshark’s unlimited approach.",
      "Pricing is mid/high tier unless you commit to the longest plans.",
      "Feature depth can overwhelm casual users who just want a simple on/off VPN.",
    ],
  },
  expressvpn: {
    pros: [
      "Very polished apps across desktop, mobile, and TV devices.",
      "Lightway protocol provides reliable, consistent performance for streaming and calls.",
      "TrustedServer (RAM-only) architecture by default on all servers.",
      "MediaStreamer helps unblock streaming on devices that do not support VPN apps.",
    ],
    cons: [
      "Noticeably more expensive than Surfshark and NordVPN, especially at renewal.",
      "Lower device limit (5) can be restrictive for bigger households.",
      "Fewer deep specialty features than NordVPN (e.g., no Meshnet-style overlay).",
    ],
  },
};

const LogoBadge = ({ name }) => {
  const key = name.toLowerCase();
  const meta =
    brandMeta[key] || {
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

export default function SurfsharkVsNordvpnVsExpressvpnPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Surfshark vs NordVPN vs ExpressVPN – Which VPN to choose? (${YEAR})`}
        description="Compare Surfshark, NordVPN, and ExpressVPN on speed, security, devices, price, and real-world use cases, so you can pick the right VPN for travel, streaming, and remote work."
        canonical={canonical}
        keywords={`${primaryKeyword}, vpn comparison, surfshark vs nordvpn, surfshark vs expressvpn`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
          VPN &amp; privacy
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Surfshark vs NordVPN vs ExpressVPN – Honest Comparison ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          <strong>Surfshark</strong> wins on value and unlimited devices.{" "}
          <strong>NordVPN</strong> excels with specialty servers, speed, and
          extras like Meshnet. <strong>ExpressVPN</strong> offers polished apps
          and reliable streaming. Here is how they stack up across speed,
          privacy, features, and pricing so you can choose the right VPN for
          daily browsing, travel, and remote work.
        </p>

        {/* Quick verdict & highlights */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="space-y-3 rounded-3xl bg-teal-50/90 p-6 ring-1 ring-teal-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-teal-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>Surfshark</strong> if you want{" "}
              <strong>unlimited devices</strong> and the lowest effective
              long-term price. Choose <strong>NordVPN</strong> if you care most
              about <strong>speed and specialty servers</strong> like Double
              VPN, Meshnet, and Onion over VPN. Choose{" "}
              <strong>ExpressVPN</strong> if you value{" "}
              <strong>polished apps and streaming stability</strong> above
              everything else.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-teal-800">
              <Crown className="h-4 w-4" /> Overall scoreboard leader:{" "}
              {overallWinner.charAt(0).toUpperCase() + overallWinner.slice(1)}{" "}
              <span className="text-xs font-medium text-teal-700">
                (avg: {averages[overallWinner]}/10)
              </span>
            </div>
          </div>
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Shield className="h-5 w-5 text-emerald-700" /> Best for privacy
              depth
            </div>
            <p className="text-sm text-slate-700">
              NordVPN’s specialty servers (Double VPN, Onion over VPN) and
              extras like Meshnet make it the better pick for users prioritising
              layered security.
            </p>
          </div>
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Globe className="h-5 w-5 text-sky-700" /> Best for many devices
            </div>
            <p className="text-sm text-slate-700">
              Surfshark allows <strong>unlimited devices</strong> on one
              subscription, which is perfect for households, content creators,
              and device-heavy setups.
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
              className={`relative block overflow-hidden rounded-2xl border border-slate-200 md:overflow-hidden bg-gradient-to-br ${
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
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-teal-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[640px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Surfshark</th>
                  <th className="px-4 py-3">NordVPN</th>
                  <th className="px-4 py-3">ExpressVPN</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row, idx) => (
                  <tr
                    key={row.label}
                    className={idx % 2 ? "bg-slate-50/40" : "bg-white"}
                  >
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">
                      {row.surfshark}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.nordvpn}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.expressvpn}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Scoreboard (cards) */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-indigo-600" /> Scoreboard (out of 10)
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {scoreboard.map((row) => (
              <div
                key={row.label}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <p className="font-semibold text-slate-900">{row.label}</p>
                <div className="mt-3 grid grid-cols-3 gap-2 text-sm text-slate-800">
                  <div>
                    <p className="font-semibold text-slate-900">Surfshark</p>
                    <p>{row.scores.surfshark}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">NordVPN</p>
                    <p>{row.scores.nordvpn}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      ExpressVPN
                    </p>
                    <p>{row.scores.expressvpn}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing snapshot */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <ClipboardList className="h-6 w-6 text-emerald-600" /> Pricing
            snapshot
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[640px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Monthly (effective)</th>
                  <th className="px-4 py-3">Annual/multi-year</th>
                  <th className="px-4 py-3">Limits</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {pricingTable.map((row, idx) => (
                  <tr
                    key={row.plan}
                    className={idx % 2 ? "bg-slate-50/40" : "bg-white"}
                  >
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      {row.plan}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.monthly}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.annual}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.limits}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-700">
            Surfshark is usually the cheapest on multi-year deals and scales
            best across many devices. NordVPN and ExpressVPN cost more but bring
            specialty servers (Nord) or polished UX and streaming (Express). All
            three typically include 30-day money-back guarantees.
          </p>
        </section>

        {/* Who wins for… */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">Who wins for…</h2>
          <ul className="space-y-2 text-sm md:text-base text-slate-700">
            <li>
              <strong>Households and many devices:</strong> Surfshark wins with
              unlimited connections and strong value pricing.
            </li>
            <li>
              <strong>Privacy enthusiasts:</strong> NordVPN wins thanks to
              Double VPN, Onion over VPN, Meshnet, and Threat Protection.
            </li>
            <li>
              <strong>Streaming while travelling:</strong> ExpressVPN often
              wins on app polish and streaming consistency, with Surfshark and
              NordVPN close behind.
            </li>
            <li>
              <strong>Budget-conscious users:</strong> Surfshark’s long-term
              deals usually deliver the lowest effective monthly cost, followed
              by NordVPN’s promotional bundles.
            </li>
          </ul>
        </section>

        {/* Pros & Cons */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        {/* FAQs */}
        <section className="mt-12 space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">FAQs</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <p className="font-semibold text-slate-900">{item.q}</p>
                <p className="mt-2 text-sm text-slate-700">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3">
          <Link
            to="/tools/surfshark"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-600"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Surfshark review
          </Link>
          <div className="flex flex-wrap gap-2">
            {contenders.map((c) => (
              <a
                key={c.key}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-800 hover:bg-slate-200"
                href={`/tools/${c.key}`}
              >
                View {c.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
