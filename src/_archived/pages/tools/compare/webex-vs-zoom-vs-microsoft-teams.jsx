import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  Zap,
  Crown,
  ArrowLeft,
  Shield,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "webex vs zoom vs microsoft teams";
const canonical = buildCanonical("/tools/compare/webex-vs-zoom-vs-microsoft-teams");

const brandMeta = {
  webex: {
    gradient: "from-emerald-500 via-cyan-500 to-blue-600",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/webex.com",
  },
  zoom: {
    gradient: "from-sky-500 via-blue-500 to-indigo-500",
    badge: "bg-sky-100 text-sky-900",
    logo: "https://logo.clearbit.com/zoom.us",
  },
  "microsoft teams": {
    gradient: "from-indigo-500 via-purple-500 to-blue-700",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/teams.microsoft.com",
  },
};

const contenders = [
  {
    key: "webex",
    name: "Webex",
    blurb: "Security-first collaboration with Cisco devices and enterprise calling.",
    url: "https://www.webex.com",
  },
  {
    key: "zoom",
    name: "Zoom",
    blurb: "Ubiquitous meetings and webinars with a rich app ecosystem.",
    url: "https://zoom.us",
  },
  {
    key: "microsoft teams",
    name: "Microsoft Teams",
    blurb: "Chat, meetings, and files tightly embedded into Microsoft 365.",
    url: "https://www.microsoft.com/microsoft-teams",
  },
];

const comparisonRows = [
  {
    label: "Deployment model",
    webex: "Browser, desktop, and mobile apps plus deep Cisco hardware support.",
    zoom: "Desktop/mobile apps preferred with browser fallback join links.",
    "microsoft teams":
      "Desktop and mobile apps alongside Microsoft 365, with browser support.",
  },
  {
    label: "Security & compliance",
    webex: "FedRAMP, HIPAA, EU data centers, and strong enterprise governance.",
    zoom: "Advanced compliance, encryption, and granular security controls.",
    "microsoft teams":
      "Inherits Microsoft 365 compliance, eDiscovery, DLP, retention, and audit.",
  },
  {
    label: "Webinars & events",
    webex:
      "Large-scale webinars and events with translations and registration options.",
    zoom: "Zoom Webinars/Events up to large attendee counts with strong engagement tools.",
    "microsoft teams":
      "Teams Live Events geared to internal town halls and Microsoft-centric orgs.",
  },
  {
    label: "Hardware ecosystem",
    webex: "Cisco Desk, Board, and Room Kits managed via Control Hub.",
    zoom: "Zoom Rooms with certified hardware partners across vendors.",
    "microsoft teams":
      "Microsoft Teams Rooms with certified devices from multiple manufacturers.",
  },
  {
    label: "Best use case",
    webex: "Regulated industries, telephony, and hybrid offices with Cisco gear.",
    zoom: "Sales, marketing, agencies, and cross-company meetings/webinars.",
    "microsoft teams":
      "Internal collaboration, chat, and meetings inside Microsoft 365 tenants.",
  },
];

const scoreboard = [
  {
    label: "Security & compliance",
    scores: { webex: 9.5, zoom: 8.9, "microsoft teams": 9.4 },
  },
  {
    label: "Ease of use",
    scores: { webex: 7.8, zoom: 9.2, "microsoft teams": 7.9 },
  },
  {
    label: "Webinar capability",
    scores: { webex: 9.0, zoom: 9.5, "microsoft teams": 8.3 },
  },
  {
    label: "Hardware ecosystem",
    scores: { webex: 9.4, zoom: 8.7, "microsoft teams": 9.0 },
  },
  {
    label: "Value",
    scores: { webex: 8.2, zoom: 8.9, "microsoft teams": 9.3 },
  },
];

const avg = (key) =>
  (scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0) / scoreboard.length).toFixed(
    1
  );

const averages = {
  webex: avg("webex"),
  zoom: avg("zoom"),
  "microsoft teams": avg("microsoft teams"),
};

const overallWinnerKey = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const winnerLabelMap = {
  webex: "Webex",
  zoom: "Zoom",
  "microsoft teams": "Microsoft Teams",
};

const overallWinnerLabel = winnerLabelMap[overallWinnerKey] || overallWinnerKey;

const pricingTable = [
  {
    plan: "Webex Starter",
    monthly: "$14.50/host",
    annual: "Annual billing",
    notes: "Up to 150 attendees with recording and basic admin.",
  },
  {
    plan: "Zoom Pro",
    monthly: "$15.99",
    annual: "$12.49/mo billed annually",
    notes: "Up to 30h meetings, 100+ participants, and app integrations.",
  },
  {
    plan: "Microsoft 365 Business Standard",
    monthly: "$12.50",
    annual: "Annual commitment",
    notes: "Includes Teams plus desktop Office apps and OneDrive storage.",
  },
];

const faqs = [
  {
    q: `Which platform is best in ${YEAR}?`,
    a: "Zoom still leads for day-to-day external meetings and webinars. Webex wins when compliance, telephony, and Cisco hardware matter most. Microsoft Teams wins for internal collaboration when your organisation is already standardised on Microsoft 365.",
  },
  {
    q: "Should I use Webex if we already own Cisco hardware?",
    a: "Yes. Webex tightly integrates with Cisco Desk, Board, and Room devices, unlocking central management, analytics, and a smoother in-room experience.",
  },
  {
    q: "Does Teams replace Zoom or Webex?",
    a: "Teams can replace them for internal use in Microsoft 365 organisations. For external prospects and events, many teams still prefer to keep Zoom or Webex in addition to Teams.",
  },
  {
    q: "Can I mix platforms?",
    a: "Many enterprises standardise on Teams for internal chat and meetings while keeping Zoom or Webex for webinars, large external events, and specific hardware environments.",
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
  webex: {
    pros: ["Security & compliance", "Cisco hardware ecosystem", "Large webinars & calling"],
    cons: ["Heavier UI for SMBs", "Can be costlier for smaller teams"],
  },
  zoom: {
    pros: ["Very easy to use", "Huge adoption with external guests", "Rich app ecosystem"],
    cons: ["Requires app for best experience", "Add-ons needed for full webinar/event stack"],
  },
  "microsoft teams": {
    pros: ["Deep Microsoft 365 integration", "Channels, files, and meetings in one place"],
    cons: ["Guest experience can be clunky", "Requires Microsoft 365 licensing model"],
  },
};

const featureBullets = {
  collaboration: [
    "Webex: Meetings, messaging, and calling in one Cisco-led suite with Control Hub.",
    "Zoom: Meetings, chat, phone, and whiteboards built around a ‘meet-first’ workflow.",
    "Teams: Channels, chats, files, and meetings bound tightly to SharePoint and 365 apps.",
  ],
  events: [
    "Webex: Robust event workflows for large town halls with translation and Q&A.",
    "Zoom: Zoom Webinars and Zoom Events for marketing, community, and training sessions.",
    "Teams: Live Events best suited for all-hands and internal broadcasts in 365 orgs.",
  ],
  security: [
    "Webex: Strong in regulated industries with advanced compliance and data controls.",
    "Zoom: Mature security configuration, SSO options, and data residency choices.",
    "Teams: Inherits Microsoft 365 stance with DLP, retention, eDiscovery, and Intune.",
  ],
};

const LogoBadge = ({ name }) => {
  const lowered = name.toLowerCase();
  const key =
    lowered === "webex"
      ? "webex"
      : lowered === "zoom"
      ? "zoom"
      : lowered.includes("microsoft")
      ? "microsoft teams"
      : lowered;

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

export default function WebexVsZoomVsMicrosoftTeamsPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Webex vs Zoom vs Microsoft Teams – Comparison (${YEAR})`}
        description="Compare Webex, Zoom, and Microsoft Teams for security, webinars, hardware, pricing, and best-fit scenarios so you can pick the right collaboration stack."
        canonical={canonical}
        keywords={`${primaryKeyword}, collaboration comparison, webex vs zoom, zoom vs microsoft teams`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Hero */}
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Enterprise meetings
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Webex vs Zoom vs Microsoft Teams ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Webex, Zoom, and Microsoft Teams dominate enterprise collaboration. Each shines in
          different deployment models, security postures, and ecosystems. Here is how to choose the
          right one for your stack.
        </p>

        {/* Quick verdict + security pick */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="space-y-3 rounded-3xl bg-emerald-50/90 p-6 ring-1 ring-emerald-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-emerald-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>Webex</strong> if compliance, Cisco hardware, and telephony are core.
              Choose <strong>Zoom</strong> for frictionless client meetings and webinars. Choose{" "}
              <strong>Microsoft Teams</strong> if your organisation is all-in on Microsoft 365 and
              you want chat, files, and meetings in one hub.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-800">
              <Crown className="h-4 w-4" /> Overall scoreboard winner: {overallWinnerLabel}{" "}
              <span className="text-xs font-medium text-emerald-700">
                (avg: {averages[overallWinnerKey]}/10)
              </span>
            </div>
          </div>
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Shield className="h-5 w-5 text-emerald-700" /> Security & compliance
            </div>
            <p className="text-sm text-slate-700">
              <strong>Webex</strong> and <strong>Teams</strong> are typically favoured in heavily
              regulated environments. <strong>Zoom</strong> has caught up significantly but is often
              chosen more for usability than for its compliance story alone.
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
              className={`relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br ${
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
              <p className="relative mt-3 text-sm font-medium text-white/90">
                {card.blurb}
              </p>
            </a>
          ))}
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-emerald-700" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Webex</th>
                  <th className="px-4 py-3">Zoom</th>
                  <th className="px-4 py-3">Microsoft Teams</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.webex}</td>
                    <td className="px-4 py-3 text-slate-700">{row.zoom}</td>
                    <td className="px-4 py-3 text-slate-700">{row["microsoft teams"]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Scoreboard */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <BarChart3 className="h-6 w-6 text-sky-700" /> Scoreboard (1–10)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Webex</th>
                  <th className="px-4 py-3">Zoom</th>
                  <th className="px-4 py-3">Microsoft Teams</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const w = row.scores.webex;
                  const z = row.scores.zoom;
                  const t = row.scores["microsoft teams"];
                  const max = Math.max(w, z, t);
                  const winner =
                    max === w ? "Webex" : max === z ? "Zoom" : "Microsoft Teams";

                  return (
                    <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Webex"
                            ? "font-semibold text-emerald-800"
                            : "text-slate-700"
                        }`}
                      >
                        {w}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Zoom" ? "font-semibold text-sky-800" : "text-slate-700"
                        }`}
                      >
                        {z}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Microsoft Teams"
                            ? "font-semibold text-indigo-800"
                            : "text-slate-700"
                        }`}
                      >
                        {t}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">{winner}</td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-emerald-50 via-sky-50 to-indigo-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.webex}
                  </td>
                  <td className="px-4 py-3 font-semibold text-sky-800">
                    {averages.zoom}
                  </td>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages["microsoft teams"]}
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
            <Gauge className="h-6 w-6 text-emerald-700" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Zap className="h-5 w-5 text-sky-700" /> Collaboration & chat
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.collaboration.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Sparkles className="h-5 w-5 text-emerald-700" /> Webinars & events
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.events.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Shield className="h-5 w-5 text-indigo-700" /> Security & admin
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
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Monthly (approx.)</th>
                  <th className="px-4 py-3">Billing</th>
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
                    <td className="px-4 py-3 text-slate-700">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600">
            Pricing shifts frequently and depends on add-ons like phone, webinars, storage, and
            long-term contracts. Always verify current pricing on each vendor&apos;s site before
            standardising on a platform.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Webex:</strong> Feels like an{" "}
              <strong>enterprise collaboration suite</strong> that shines when IT manages devices,
              telephony, and policies centrally.
            </li>
            <li>
              <strong>Zoom:</strong> Optimised for <strong>fast, simple meetings</strong> with
              external parties—most customers already know how to join a Zoom call.
            </li>
            <li>
              <strong>Microsoft Teams:</strong> Best when staff live in{" "}
              <strong>Outlook, SharePoint, and Office</strong>, with Teams acting as the hub for
              chats, files, and meetings.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use cases & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Regulated enterprises with Cisco deployments:</strong>{" "}
              <strong>Webex</strong> wins with compliance features, PSTN, and room hardware.
            </li>
            <li>
              <strong>Agencies, sales, and customer-facing teams:</strong>{" "}
              <strong>Zoom</strong> wins for demos, onboarding calls, and public webinars.
            </li>
            <li>
              <strong>Organisations standardised on Microsoft 365:</strong>{" "}
              <strong>Teams</strong> wins by keeping chat, meetings, and files in one environment.
            </li>
            <li>
              <strong>Hybrid strategy:</strong> Common patterns include{" "}
              <strong>Teams + Zoom</strong> (Teams internal, Zoom external) or{" "}
              <strong>Teams + Webex</strong> (Teams for chat, Webex for rooms and events).
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
              <h3 className="text-lg font-semibold">Compliance & hardware-first setups</h3>
              <p className="text-sm text-slate-700">
                <strong>Webex</strong> is ideal if you care about data residency, telephony, and
                Cisco-powered meeting rooms above everything else.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Client calls & webinars</h3>
              <p className="text-sm text-slate-700">
                <strong>Zoom</strong> is the safest bet for external collaboration, with a UX that
                prospects and customers understand immediately.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Internal collaboration hub</h3>
              <p className="text-sm text-slate-700">
                <strong>Microsoft Teams</strong> is the clear winner when your company is already
                running on Outlook, OneDrive, and SharePoint.
              </p>
            </div>
          </div>
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
