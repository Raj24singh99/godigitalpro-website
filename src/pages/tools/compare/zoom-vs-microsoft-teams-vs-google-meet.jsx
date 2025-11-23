import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  Zap,
  Crown,
  ArrowLeft,
  Video,
  MessageSquare,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "zoom vs microsoft teams vs google meet";
const canonical = buildCanonical(
  "/tools/compare/zoom-vs-microsoft-teams-vs-google-meet"
);

const brandMeta = {
  zoom: {
    gradient: "from-sky-500 via-blue-500 to-indigo-600",
    badge: "bg-sky-100 text-sky-900",
    logo: "https://logo.clearbit.com/zoom.us",
  },
  "microsoft teams": {
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/microsoft.com",
  },
  "google meet": {
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/google.com",
  },
};

const contenders = [
  {
    key: "zoom",
    name: "Zoom",
    blurb: "Client-friendly reliability, webinars/events, frictionless joining.",
    url: "/tools/zoom",
  },
  {
    key: "microsoft teams",
    name: "Microsoft Teams",
    blurb: "Deep Microsoft 365 integration for meetings and collaboration.",
    url: "/tools/microsoft-teams",
  },
  {
    key: "google meet",
    name: "Google Meet",
    blurb: "Browser-first, lightweight meetings bundled with Workspace.",
    url: "/tools/google-meet",
  },
];

const comparisonRows = [
  {
    label: "Ease for external guests",
    zoom: "Join links are simple; minimal friction for guests; stable quality.",
    "microsoft teams":
      "Best for 365 orgs; external guests may face account prompts.",
    "google meet": "Very easy browser joins; minimal setup for guests.",
  },
  {
    label: "Webinars & events",
    zoom: "Robust webinars/events with registration, Q&A, polling, and reports.",
    "microsoft teams":
      "Good for live events; less polished than Zoom for marketing webinars.",
    "google meet": "Basic webinars; aimed at meetings more than events.",
  },
  {
    label: "Ecosystem fit",
    zoom: "Ecosystem-neutral; strong integrations with CRM/automation.",
    "microsoft teams":
      "Best fit for Microsoft 365 (Outlook, SharePoint, OneDrive).",
    "google meet":
      "Best fit for Google Workspace (Gmail, Calendar, Drive, Chat).",
  },
  {
    label: "Admin & security",
    zoom: "Granular host controls, SSO, E2E options, compliance settings.",
    "microsoft teams":
      "Enterprise-grade security and compliance under M365 policies.",
    "google meet":
      "Solid security under Workspace; simpler admin depth and policies.",
  },
  {
    label: "Value",
    zoom: "Great value for client-facing meetings/webinars; paid seats add up.",
    "microsoft teams": "Bundled value if you already license Microsoft 365.",
    "google meet":
      "Bundled with Workspace; excellent value for lightweight needs.",
  },
];

const scoreboard = [
  {
    label: "Ease for external guests",
    scores: { zoom: 9.4, "microsoft teams": 8.0, "google meet": 9.0 },
  },
  {
    label: "Webinars & events",
    scores: { zoom: 9.5, "microsoft teams": 8.2, "google meet": 7.2 },
  },
  {
    label: "Ecosystem fit",
    scores: { zoom: 8.6, "microsoft teams": 9.4, "google meet": 9.2 },
  },
  {
    label: "Admin & security",
    scores: { zoom: 8.9, "microsoft teams": 9.2, "google meet": 8.5 },
  },
  {
    label: "Value",
    scores: { zoom: 8.4, "microsoft teams": 8.8, "google meet": 9.0 },
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
  zoom: avg("zoom"),
  "microsoft teams": avg("microsoft teams"),
  "google meet": avg("google meet"),
};

const overallWinnerKey = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const winnerLabelMap = {
  zoom: "Zoom",
  "microsoft teams": "Microsoft Teams",
  "google meet": "Google Meet",
};

const overallWinnerLabel = winnerLabelMap[overallWinnerKey];

const pricingTable = [
  {
    plan: "Zoom Pro / Business / Enterprise",
    monthly: "From ~US$15/user",
    annual: "Lower effective rate on annual",
    limits: "Unlimited meetings, 100–1000 participants by tier; add-ons for webinars/events",
    notes: "Best for client calls and webinars when suite licences are not driving the decision.",
  },
  {
    plan: "Microsoft Teams (Microsoft 365)",
    monthly: "Bundled with Microsoft 365",
    annual: "Annual Microsoft 365 plans",
    limits: "Meetings, live events, and collaboration in the M365 stack",
    notes: "Best if your organisation already pays for Microsoft 365 seats.",
  },
  {
    plan: "Google Meet (Google Workspace)",
    monthly: "Bundled with Workspace",
    annual: "Annual Workspace plans",
    limits: "Meetings bundled; webinars/events are basic vs Zoom",
    notes: "Best for simple joins and Workspace-centric teams.",
  },
];

const featureBullets = {
  guests: [
    "Zoom: Very low friction for external clients; join from links with minimal authentication friction.",
    "Microsoft Teams: Seamless inside 365 tenants; external guests can hit login/account prompts.",
    "Google Meet: Browser-first joins from calendar invites; no heavy client install required for most flows.",
  ],
  collaboration: [
    "Zoom: Strong breakout rooms, whiteboards, and app integrations, but core collaboration still lives in other tools.",
    "Microsoft Teams: Deeply integrated with Channels, SharePoint, OneDrive, and Office apps for ongoing collaboration.",
    "Google Meet: Tight link with Google Calendar, Drive, and Chat for quick ad-hoc and scheduled meetings.",
  ],
  events: [
    "Zoom: Best-in-class for marketing webinars, virtual events, and external trainings.",
    "Microsoft Teams: Good for town halls and internal all-hands inside 365 environments.",
    "Google Meet: Focused on meetings; events possible but with fewer structured webinar tools.",
  ],
};

const faqs = [
  {
    q: `Is Zoom better than Teams or Meet in ${YEAR}?`,
    a: "Zoom excels for client-facing reliability and webinars. Microsoft Teams is best if you live in Microsoft 365 and want chat + collaboration plus meetings. Google Meet wins for lightweight, browser-first meetings bundled with Workspace.",
  },
  {
    q: "Which is best for webinars and virtual events?",
    a: "Zoom. It has the strongest webinar/events feature set with registration pages, Q&A, polling, and attendance reporting built for client-facing events.",
  },
  {
    q: "Which is easiest for external guests to join?",
    a: "Zoom and Google Meet are typically the most frictionless for guests who do not live in your suite. Teams can be excellent for internal users but sometimes prompts external guests to sign in.",
  },
  {
    q: "Which is most affordable overall?",
    a: "If you already license Microsoft 365 or Google Workspace, Teams or Meet are effectively bundled. Zoom adds cost per user but delivers the richest webinar toolkit and a suite-agnostic meeting experience.",
  },
  {
    q: "Which fits enterprise security best?",
    a: "Microsoft Teams fits naturally into Microsoft 365 security, compliance, and governance. Zoom and Google Meet both offer strong controls, with Zoom adding granular host policies and E2E options, and Google Meet inheriting Workspace security policies.",
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
  zoom: {
    pros: [
      "Best webinar/events toolkit with registration, Q&A, polling, and reports",
      "Great guest experience and perceived reliability for client calls",
      "Strong integrations with CRM, marketing, and automation tools",
      "Granular host and admin controls for security and compliance",
    ],
    cons: [
      "Adds cost vs bundled suites like M365 or Workspace",
      "Interface can feel busy to new users",
      "Higher tiers required for very large webinars and events",
    ],
  },
  "microsoft teams": {
    pros: [
      "Deep Microsoft 365 integration across chat, files, and meetings",
      "Enterprise security, compliance, and governance under M365 policies",
      "Bundled value when your org already licenses Microsoft 365",
    ],
    cons: [
      "Guest joins can be clunky for people outside the M365 ecosystem",
      "UI can feel heavy and complex for pure meeting use cases",
      "Webinar experience is less polished than Zoom for marketing teams",
    ],
  },
  "google meet": {
    pros: [
      "Browser-first experience with simple, fast joins",
      "Bundled with Google Workspace; minimal extra cost",
      "Clean, lightweight interface that users learn quickly",
    ],
    cons: [
      "Lighter webinar/event features vs Zoom",
      "Admin depth is simpler than full-blown enterprise meeting suites",
      "Fewer advanced engagement tools and integrations out of the box",
    ],
  },
};

const LogoBadge = ({ name }) => {
  const lowered = name.toLowerCase();
  const key =
    lowered.includes("zoom") || lowered === "zoom"
      ? "zoom"
      : lowered.includes("microsoft")
      ? "microsoft teams"
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

export default function ZoomVsMicrosoftTeamsVsGoogleMeetPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Zoom vs Microsoft Teams vs Google Meet – Honest Comparison (${YEAR})`}
        description="Compare Zoom, Microsoft Teams, and Google Meet for meetings and webinars: guest experience, events, ecosystem fit, security, pricing, and best use cases."
        canonical={canonical}
        keywords={`${primaryKeyword}, video meetings comparison, zoom, microsoft teams, google meet`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Video meetings & webinars
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Zoom vs Microsoft Teams vs Google Meet – Honest Comparison ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          We compared Zoom, Microsoft Teams, and Google Meet across guest
          experience, webinars, ecosystem fit, admin controls, and value. Zoom
          is strongest for client-facing reliability and webinars. Microsoft
          Teams is the natural pick for Microsoft 365 organisations. Google Meet
          is the simplest, browser-first option bundled with Workspace.
        </p>

        {/* Quick verdict + highlight cards */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {/* Quick verdict */}
          <div className="md:col-span-2 space-y-3 rounded-3xl bg-emerald-50/90 p-6 ring-1 ring-emerald-100">
            <div className="flex items-center gap-2 text-lg font-semibold text-emerald-800">
              <Sparkles className="h-5 w-5" /> Quick Verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>Zoom</strong> for client-facing calls and webinars
              with the smoothest guest experience. Choose{" "}
              <strong>Microsoft Teams</strong> if you live in Microsoft 365 and
              want tight integration between chat, files, and meetings. Choose{" "}
              <strong>Google Meet</strong> for simple, browser-first meetings
              bundled with Workspace.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-800">
              <Crown className="h-4 w-4" /> Overall scoreboard winner:{" "}
              {overallWinnerLabel}{" "}
              <span className="text-xs font-medium text-emerald-700">
                (avg: {averages[overallWinnerKey]}/10)
              </span>
            </div>
          </div>

          {/* Webinars highlight */}
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Video className="h-5 w-5 text-emerald-700" /> Best for webinars
              & events
            </div>
            <p className="text-sm text-slate-700">
              Zoom’s webinar/events stack is the most complete for registration,
              Q&A, polling, and attendee reporting—ideal for marketing, sales,
              and training events.
            </p>
          </div>
        </div>

        {/* Additional context cards */}
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Gauge className="h-5 w-5 text-indigo-700" /> Best for 365
              organisations
            </div>
            <p className="text-sm text-slate-700">
              Microsoft Teams is the obvious choice if your company standardises
              on Microsoft 365 and wants meetings inside the same tool as chat,
              files, and Office apps.
            </p>
          </div>
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Zap className="h-5 w-5 text-emerald-600" /> Best for lightweight
              joins
            </div>
            <p className="text-sm text-slate-700">
              Google Meet is ideal when you care most about fast, browser-based
              joins from calendar invites and a clean, minimal UI across devices.
            </p>
          </div>
        </div>

        {/* Brand cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {contenders.map((card) => (
            <div
              key={card.key}
              className={`relative overflow-x-auto rounded-2xl border border-slate-200 bg-gradient-to-br ${
                brandMeta[card.key]?.gradient || "from-slate-500 to-slate-700"
              } p-5 shadow-md md:overflow-hidden`}
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
              <a
                className="relative mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-emerald-50"
                href={card.url}
              >
                View tool <MessageSquare className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-emerald-600" /> Side-by-side
            comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Zoom</th>
                  <th className="px-4 py-3">Microsoft Teams</th>
                  <th className="px-4 py-3">Google Meet</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {comparisonRows.map((row, idx) => (
                  <tr
                    key={row.label}
                    className={idx % 2 === 1 ? "bg-slate-50/60" : ""}
                  >
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      {row.label}
                    </td>
                    <td className="px-4 py-3 text-slate-800">{row.zoom}</td>
                    <td className="px-4 py-3 text-slate-800">
                      {row["microsoft teams"]}
                    </td>
                    <td className="px-4 py-3 text-slate-800">
                      {row["google meet"]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Scoreboard table */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <BarChart3 className="h-6 w-6 text-indigo-600" /> Scoreboard (1–10)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Zoom</th>
                  <th className="px-4 py-3">Microsoft Teams</th>
                  <th className="px-4 py-3">Google Meet</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {scoreboard.map((row, idx) => {
                  const zoomScore = row.scores.zoom;
                  const teamsScore = row.scores["microsoft teams"];
                  const meetScore = row.scores["google meet"];
                  const maxScore = Math.max(zoomScore, teamsScore, meetScore);
                  const winner =
                    maxScore === zoomScore
                      ? "Zoom"
                      : maxScore === teamsScore
                      ? "Microsoft Teams"
                      : "Google Meet";

                  return (
                    <tr
                      key={row.label}
                      className={idx % 2 === 1 ? "bg-slate-50/60" : ""}
                    >
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {row.label}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Zoom"
                            ? "font-semibold text-sky-800"
                            : "text-slate-800"
                        }`}
                      >
                        {zoomScore}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Microsoft Teams"
                            ? "font-semibold text-indigo-800"
                            : "text-slate-800"
                        }`}
                      >
                        {teamsScore}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Google Meet"
                            ? "font-semibold text-emerald-800"
                            : "text-slate-800"
                        }`}
                      >
                        {meetScore}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {winner}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-sky-50 via-indigo-50 to-emerald-50">
                  <td className="px-4 py-3 font-semibold text-slate-900">
                    Average (overall winner)
                  </td>
                  <td className="px-4 py-3 font-semibold text-sky-800">
                    {averages.zoom}
                  </td>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages["microsoft teams"]}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
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
            <Gauge className="h-6 w-6 text-emerald-600" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold text-slate-900">
              <Sparkles className="h-5 w-5 text-emerald-600" /> Guest experience
              & joining
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {featureBullets.guests.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold text-slate-900">
              <Layers className="h-5 w-5 text-indigo-600" /> Collaboration &
              suite alignment
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {featureBullets.collaboration.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold text-slate-900">
              <Video className="h-5 w-5 text-emerald-600" /> Webinars & events
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {featureBullets.events.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">
            Pricing snapshots
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-slate-50/50 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-100 text-slate-800">
                <tr>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Monthly (approx.)</th>
                  <th className="px-4 py-3">Annual</th>
                  <th className="px-4 py-3">Key limits & notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {pricingTable.map((row, idx) => (
                  <tr
                    key={row.plan}
                    className={idx % 2 === 1 ? "bg-slate-50/60" : ""}
                  >
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      {row.plan}
                    </td>
                    <td className="px-4 py-3 text-slate-800">
                      {row.monthly}
                    </td>
                    <td className="px-4 py-3 text-slate-800">
                      {row.annual}
                    </td>
                    <td className="px-4 py-3 text-slate-800">
                      {row.limits} {row.notes && `– ${row.notes}`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600">
            Pricing changes frequently and varies by region, add-ons, and seat
            counts. Always confirm current limits and bundles on each vendor’s
            pricing page before committing.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">
            User experience & learning curve
          </h2>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>
              <strong>Zoom:</strong> Familiar meeting UI for most users; focused
              on meetings and webinars, with straightforward host controls and
              predictable behaviour across devices.
            </li>
            <li>
              <strong>Microsoft Teams:</strong> Very powerful hub for chat,
              files, and meetings; can feel heavy if you just want a meeting
              tool, but excellent once your team lives in Teams channels.
            </li>
            <li>
              <strong>Google Meet:</strong> Minimal UI, simple join flows, and
              tight integration with Calendar make it easy for non-technical
              teams to adopt quickly.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">
            Real-world use cases & winners
          </h2>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>
              <strong>Client-facing sales demos and webinars:</strong> Zoom
              usually wins with its reliability perception and dedicated webinar
              stack.
            </li>
            <li>
              <strong>Internal collaboration for M365 shops:</strong> Microsoft
              Teams wins when your documents, email, and chat already sit in
              Microsoft 365.
            </li>
            <li>
              <strong>Startups and agencies on Workspace:</strong> Google Meet
              is a natural choice when your team runs on Gmail, Calendar, and
              Drive and wants frictionless links.
            </li>
            <li>
              <strong>IT-driven security and governance:</strong> Microsoft
              Teams is strongest if your security team standardises on M365
              policies; Zoom and Meet remain strong but require separate policy
              work.
            </li>
          </ul>
        </section>

        {/* Pros & Cons */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        {/* Who wins for… */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">Who wins for…</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Zoom</h3>
              <p className="mt-1 text-sm text-slate-700">
                Best when you want a neutral, reliable meeting and webinar tool
                that works well with any CRM or marketing stack.
              </p>
              <p className="mt-2 text-sm font-semibold text-sky-700">
                Ideal for: Agencies, consultancies, SaaS sales teams, and
                training providers.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Microsoft Teams</h3>
              <p className="mt-1 text-sm text-slate-700">
                Best when your collaboration, documents, and mail already live
                in Microsoft 365 and you want a unified hub.
              </p>
              <p className="mt-2 text-sm font-semibold text-indigo-700">
                Ideal for: Enterprises and mid-market organisations standardised
                on M365.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Google Meet</h3>
              <p className="mt-1 text-sm text-slate-700">
                Best when you need quick, low-friction meetings embedded into
                Gmail, Calendar, and Drive with minimal setup.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: Startups, agencies, and SMEs running on Google
                Workspace.
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
                <p className="mt-1 text-sm text-slate-700">{item.a}</p>
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
