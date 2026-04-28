import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  Zap,
  Crown,
  ArrowLeft,
  Video,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "webex vs zoom vs google meet";
const canonical = buildCanonical("/tools/compare/webex-vs-zoom-vs-google-meet");

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
  "google meet": {
    gradient: "from-emerald-500 via-green-500 to-lime-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/meet.google.com",
  },
};

const contenders = [
  {
    key: "webex",
    name: "Webex",
    blurb: "Enterprise-grade meetings, calling, and devices from Cisco.",
    url: "https://www.webex.com",
  },
  {
    key: "zoom",
    name: "Zoom",
    blurb: "The default choice for client meetings, events, and webinars.",
    url: "https://zoom.us",
  },
  {
    key: "google meet",
    name: "Google Meet",
    blurb: "Workspace-native, lightweight browser-first meetings.",
    url: "https://workspace.google.com/products/meet/",
  },
];

const comparisonRows = [
  {
    label: "Join flow",
    webex: "Browser, desktop, and mobile apps; best paired with Cisco devices.",
    zoom: "Desktop/mobile apps with solid browser fallback links.",
    "google meet": "Chrome-first browser experience; no client install required.",
  },
  {
    label: "Webinars & events",
    webex: "Webex Webinars and Events for town halls up to ~100k attendees.",
    zoom: "Zoom Webinars/Events with backstage, Q&A, and breakout rooms.",
    "google meet":
      "Limited event tooling; better for internal updates and smaller meetings.",
  },
  {
    label: "Security & compliance",
    webex: "Strong compliance posture, DLP, e-discovery, and enterprise controls.",
    zoom: "Robust security options, E2EE, regional data centers, complex policies.",
    "google meet":
      "Backed by Google security, Workspace admin console, and data residency options.",
  },
  {
    label: "Integrations & apps",
    webex:
      "Deep hooks into Cisco stack plus Salesforce, ServiceNow, and productivity tools.",
    zoom: "1,000+ marketplace apps for CRMs, scheduling, whiteboards, and automation.",
    "google meet":
      "Tight Gmail, Calendar, and Docs integration; fewer external marketplace apps.",
  },
  {
    label: "Best-fit scenarios",
    webex: "Regulated industries, hybrid offices with meeting-room hardware.",
    zoom: "Client-facing teams, agencies, and companies running webinars at scale.",
    "google meet":
      "Teams standardised on Google Workspace that prioritise simplicity and cost.",
  },
];

const scoreboard = [
  { label: "Ease of use", scores: { webex: 7.8, zoom: 9.3, "google meet": 9.2 } },
  {
    label: "Enterprise controls",
    scores: { webex: 9.5, zoom: 8.8, "google meet": 8.0 },
  },
  {
    label: "Webinar capability",
    scores: { webex: 9.1, zoom: 9.5, "google meet": 6.5 },
  },
  { label: "Value", scores: { webex: 8.0, zoom: 8.7, "google meet": 9.3 } },
  {
    label: "Integrations & ecosystem",
    scores: { webex: 8.7, zoom: 9.2, "google meet": 7.8 },
  },
];

const avg = (key) =>
  (scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0) / scoreboard.length).toFixed(
    1
  );

const averages = {
  webex: avg("webex"),
  zoom: avg("zoom"),
  "google meet": avg("google meet"),
};

const overallWinnerKey = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const winnerLabelMap = {
  webex: "Webex",
  zoom: "Zoom",
  "google meet": "Google Meet",
};

const overallWinnerLabel = winnerLabelMap[overallWinnerKey] || overallWinnerKey;

const pricingTable = [
  {
    plan: "Webex Starter",
    monthly: "$14.50",
    annual: "Annual billing",
    notes: "Up to 150 attendees with recording and basic admin.",
  },
  {
    plan: "Zoom Pro",
    monthly: "$15.99",
    annual: "$12.49/mo billed annually",
    notes: "Up to 30-hour meetings with 100+ participants and cloud recording.",
  },
  {
    plan: "Google Workspace Business Starter",
    monthly: "$6",
    annual: "Monthly Workspace billing",
    notes: "Up to 100-participant Google Meet calls included.",
  },
];

const faqs = [
  {
    q: `Which platform should I choose in ${YEAR}?`,
    a: "Pick Zoom if you need a familiar client experience for customers, Webex if compliance and in-room hardware matter, and Google Meet if your teams already live in Google Workspace and cost simplicity is key.",
  },
  {
    q: "Is Google Meet good enough for webinars?",
    a: "It works for lighter internal town halls, but lacks advanced registration, backstage, and attendee engagement features. For serious webinars or virtual events, most teams prefer Zoom or Webex.",
  },
  {
    q: "Does Webex usually cost more?",
    a: "In many enterprise deployments, yes—but you gain advanced compliance, PSTN calling options, and tight control over Cisco devices and room systems.",
  },
  {
    q: "Can Zoom replace both Webex and Google Meet?",
    a: "For many SMBs and agencies, Zoom can centralise meetings and webinars. Large enterprises may still keep Webex for compliance or Google Meet for tighter suite alignment.",
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

const featureBullets = {
  experience: [
    "Webex: Strong in-room and hybrid experience when paired with Cisco desk and room devices.",
    "Zoom: Consistent UX across desktop, mobile, and rooms—most external guests know how to use it.",
    "Google Meet: Fast, lightweight, and fully browser-based for teams already in Gmail and Calendar.",
  ],
  events: [
    "Webex: Webex Webinars and Events support registration, Q&A, and very large attendee counts.",
    "Zoom: Mature events stack with webinars, Zoom Events, breakout rooms, and sponsor areas.",
    "Google Meet: Suitable for internal updates; serious external events usually rely on YouTube Live or third-party tools.",
  ],
  ecosystem: [
    "Webex: Integrates into Cisco calling, contact center, and hardware stack, plus major SaaS tools.",
    "Zoom: Massive app marketplace with CRMs, whiteboards, enablement, scheduling, and more.",
    "Google Meet: Native for Workspace—Calendar, Gmail, Docs, and Chat—keeping workflows inside Google.",
  ],
};

const prosCons = {
  webex: {
    pros: [
      "Industry-grade security, compliance, and data controls",
      "Excellent when paired with Cisco meeting-room hardware",
      "Scales well for large webinars and enterprise deployments",
    ],
    cons: [
      "Feels heavier and more complex for smaller teams",
      "Licensing and telephony options can be harder to navigate",
      "Users outside the Cisco ecosystem may face more friction",
    ],
  },
  zoom: {
    pros: [
      "Very easy for guests and clients to join",
      "Rich app ecosystem and third-party integrations",
      "Strong webinar and events capabilities for marketers",
    ],
    cons: [
      "Some advanced features live behind add-ons",
      "Requires client install for the smoothest experience",
      "Enterprises may need extra configuration for strict compliance",
    ],
  },
  "google meet": {
    pros: [
      "Included with most Google Workspace plans",
      "Pure browser-based join from Calendar and Gmail",
      "Simple interface with minimal training required",
    ],
    cons: [
      "Fewer webinar and event features compared to Zoom/Webex",
      "More limited external app marketplace",
      "Less control for complex telephony and room hardware setups",
    ],
  },
};

const LogoBadge = ({ name }) => {
  const lowered = name.toLowerCase();
  const key =
    lowered === "webex"
      ? "webex"
      : lowered === "zoom"
      ? "zoom"
      : lowered.includes("google")
      ? "google meet"
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

export default function WebexVsZoomVsGoogleMeetPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Webex vs Zoom vs Google Meet – Comparison (${YEAR})`}
        description="Webex vs Zoom vs Google Meet showdown covering features, webinars, pricing, security, and how to pick the right modern meeting platform."
        canonical={canonical}
        keywords={`${primaryKeyword}, video meeting comparison, webex vs zoom, zoom vs google meet`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Hero */}
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Meetings &amp; webinars
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Webex vs Zoom vs Google Meet ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Need to pick a meeting stack for clients and internal teams?{" "}
          <strong>Webex</strong> leans enterprise and hardware-first,{" "}
          <strong>Zoom</strong> dominates external calls and webinars, and{" "}
          <strong>Google Meet</strong> keeps things simple inside Workspace. Here’s the structured
          breakdown.
        </p>

        {/* Quick verdict + free option */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="space-y-3 rounded-3xl bg-emerald-50/90 p-6 ring-1 ring-emerald-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-emerald-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>Webex</strong> if you&apos;re in a regulated industry or rely heavily
              on dedicated room hardware. Choose <strong>Zoom</strong> if client meetings and
              webinars are core to revenue. Choose <strong>Google Meet</strong> if your company is
              all-in on Google Workspace and wants low friction and low cost.
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
              <Video className="h-5 w-5 text-emerald-700" /> Best bundled option
            </div>
            <p className="text-sm text-slate-700">
              <strong>Google Meet</strong> is included with most Google Workspace plans, making it a
              compelling default for internal meetings when you already pay for Gmail and Drive.
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
                  <th className="px-4 py-3">Google Meet</th>
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
                    <td className="px-4 py-3 text-slate-700">{row["google meet"]}</td>
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
                  <th className="px-4 py-3">Google Meet</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const webexScore = row.scores.webex;
                  const zoomScore = row.scores.zoom;
                  const meetScore = row.scores["google meet"];
                  const winnerValue = Math.max(webexScore, zoomScore, meetScore);
                  const winner =
                    winnerValue === webexScore
                      ? "Webex"
                      : winnerValue === zoomScore
                      ? "Zoom"
                      : "Google Meet";

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
                        {webexScore}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Zoom" ? "font-semibold text-sky-800" : "text-slate-700"
                        }`}
                      >
                        {zoomScore}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Google Meet"
                            ? "font-semibold text-emerald-700"
                            : "text-slate-700"
                        }`}
                      >
                        {meetScore}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">{winner}</td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-emerald-50 via-sky-50 to-lime-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.webex}
                  </td>
                  <td className="px-4 py-3 font-semibold text-sky-800">
                    {averages.zoom}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-700">
                    {averages["google meet"]}
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
              <Zap className="h-5 w-5 text-sky-700" /> Meeting experience & UX
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.experience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Video className="h-5 w-5 text-emerald-700" /> Webinars & virtual events
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.events.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Layers className="h-5 w-5 text-indigo-700" /> Ecosystem & integrations
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.ecosystem.map((item) => (
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
                  <th className="px-4 py-3">Billing / tier</th>
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
            Pricing changes frequently and can vary by region, add-ons (phone, webinars), and
            contract size. Always confirm current pricing and feature caps on each vendor&apos;s
            site before committing your team.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Webex:</strong> Feels like an{" "}
              <strong>enterprise collaboration platform</strong> with meetings, messaging, and
              calling. Best when IT curates devices and rollout centrally.
            </li>
            <li>
              <strong>Zoom:</strong> Optimised for <strong>fast external collaboration</strong>—most
              customers know how to use it already, which reduces friction on sales and success
              calls.
            </li>
            <li>
              <strong>Google Meet:</strong> Nearly zero learning curve if your team already uses{" "}
              <strong>Gmail and Google Calendar</strong>. Meeting links live naturally where work
              happens.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use cases & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Regulated and hardware-first enterprises:</strong>{" "}
              <strong>Webex</strong> wins with compliance controls, PSTN, and room hardware
              management.
            </li>
            <li>
              <strong>Agencies and client-facing teams:</strong> <strong>Zoom</strong> wins with a
              familiar UX, breakout rooms, and strong webinar/event tooling.
            </li>
            <li>
              <strong>Startups and SMBs on Google Workspace:</strong>{" "}
              <strong>Google Meet</strong> wins as the lowest-friction option embedded in email and
              calendar.
            </li>
            <li>
              <strong>Hybrid stacks:</strong> Common patterns include Zoom for external calls +
              Google Meet for internal syncs, or Webex for room systems + Zoom for marketing
              webinars.
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
              <h3 className="text-lg font-semibold">Compliance & hardware</h3>
              <p className="text-sm text-slate-700">
                <strong>Webex</strong> is best when regulated environments, PSTN calling, and
                Cisco-powered meeting rooms are non-negotiable.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Client meetings & webinars</h3>
              <p className="text-sm text-slate-700">
                <strong>Zoom</strong> is best for sales calls, demos, community events, and
                marketing webinars where attendee experience matters.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Internal collaboration on a budget</h3>
              <p className="text-sm text-slate-700">
                <strong>Google Meet</strong> is best when your organisation already pays for Google
                Workspace and wants simple, reliable internal meetings.
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
