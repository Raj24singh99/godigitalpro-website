import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  Zap,
  Crown,
  ArrowLeft,
  Users,
  BarChart3,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "whereby vs zoom vs microsoft teams";
const canonical = buildCanonical("/tools/compare/whereby-vs-zoom-vs-microsoft-teams");

const brandMeta = {
  whereby: {
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/whereby.com",
  },
  zoom: {
    gradient: "from-sky-500 via-blue-500 to-indigo-500",
    badge: "bg-sky-100 text-sky-900",
    logo: "https://logo.clearbit.com/zoom.us",
  },
  "microsoft teams": {
    gradient: "from-indigo-500 via-purple-500 to-blue-600",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/teams.microsoft.com",
  },
};

const contenders = [
  {
    key: "whereby",
    name: "Whereby",
    blurb: "No-download meetings and embeddable video for SaaS, agencies, and telehealth.",
    url: "https://whereby.com",
  },
  {
    key: "zoom",
    name: "Zoom",
    blurb: "Meetings and webinars at scale with a vast ecosystem of integrations.",
    url: "https://zoom.us",
  },
  {
    key: "microsoft teams",
    name: "Microsoft Teams",
    blurb: "Collaboration hub for Microsoft 365 organisations with chat, channels, and meetings.",
    url: "https://www.microsoft.com/microsoft-teams",
  },
];

const comparisonRows = [
  {
    label: "Deployment",
    whereby: "Browser link first, optional iOS/Android apps for hosts and guests.",
    zoom: "Desktop and mobile apps recommended; browser join is available but less full-featured.",
    "microsoft teams":
      "Bundled with Microsoft 365 desktop/mobile clients; tightly integrated into Windows and Office.",
  },
  {
    label: "Collaboration",
    whereby: "Lightweight collaboration with shared docs, whiteboards, and embedded tools in-room.",
    zoom: "Whiteboards, breakout rooms, polls, apps, and integrations with project tools.",
    "microsoft teams":
      "Deep collaboration via channels, tabs, files, Planner/Tasks, SharePoint, and Office apps.",
  },
  {
    label: "Embedded video",
    whereby: "Purpose-built embedded API for SaaS/telehealth with layout controls and EU hosting.",
    zoom: "SDK exists, strong but more developer-heavy to embed into products.",
    "microsoft teams":
      "Not designed for external embedding inside customer-facing products.",
  },
  {
    label: "Compliance & governance",
    whereby: "GDPR-first with EU data centres and HIPAA options for regulated SMBs.",
    zoom: "Global data centres, SSO, recording policies, and options like FedRAMP and multi-geo.",
    "microsoft teams":
      "Inherits full Microsoft 365 compliance stack, retention, eDiscovery, and DLP capabilities.",
  },
  {
    label: "Ideal teams",
    whereby: "Agencies, telehealth, marketplaces, and SaaS platforms embedding video.",
    zoom: "Sales, marketing, CS, and enterprises needing webinars plus external meetings.",
    "microsoft teams":
      "Internal collaboration across 365 organisations where chat, channels, and meetings live together.",
  },
];

const scoreboard = [
  { label: "Ease for guests", scores: { whereby: 9.6, zoom: 8.8, "microsoft teams": 7.4 } },
  {
    label: "Enterprise controls",
    scores: { whereby: 7.2, zoom: 9.4, "microsoft teams": 9.5 },
  },
  {
    label: "Embedded/API",
    scores: { whereby: 9.1, zoom: 8.1, "microsoft teams": 6.5 },
  },
  {
    label: "Collaboration depth",
    scores: { whereby: 8.0, zoom: 9.0, "microsoft teams": 9.5 },
  },
  {
    label: "Overall value",
    scores: { whereby: 8.8, zoom: 8.9, "microsoft teams": 9.2 },
  },
];

const avg = (key) => {
  const total = scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0);
  return (total / scoreboard.length).toFixed(1);
};

const averages = {
  whereby: avg("whereby"),
  zoom: avg("zoom"),
  "microsoft teams": avg("microsoft teams"),
};

const overallWinnerKey = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const overallWinnerLabel =
  overallWinnerKey === "whereby"
    ? "Whereby"
    : overallWinnerKey === "zoom"
    ? "Zoom"
    : "Microsoft Teams";

const pricingTable = [
  {
    plan: "Whereby Business",
    monthly: "From around ~$14.99/host",
    annual: "Typically billed annually",
    limits: "Unlimited rooms, long meetings, SSO, recording, custom branding",
    notes: "Great for agencies, telehealth, and client-heavy teams needing easy guest access.",
  },
  {
    plan: "Zoom Business",
    monthly: "From around ~$19.99/host",
    annual: "Annual commitments with volume discounts",
    limits: "Up to ~300 attendees per meeting, SSO, recording, admin controls",
    notes: "Strong balance of price and power for SMBs and mid-market teams.",
  },
  {
    plan: "Microsoft 365 Business Standard",
    monthly: "From around ~$12.50/user",
    annual: "Annual Microsoft 365 subscription",
    limits: "Teams, Office apps, ~300 attendees per meeting, 1 TB OneDrive",
    notes: "Best if you want Teams plus full Office suite in one licence.",
  },
];

const featureBullets = {
  experience: [
    "Whereby: Guests join via a single link in the browser—no downloads—for the lowest possible friction.",
    "Zoom: Familiar meeting experience for most people with solid audio/video quality and breakout rooms.",
    "Microsoft Teams: Meetings live where chat, channels, and files already are for 365 organisations.",
  ],
  collaboration: [
    "Whereby: Keep collaboration light and focused around the meeting itself, with embedded tools as needed.",
    "Zoom: Add whiteboards, polls, and apps to enhance workshops, trainings, and sales calls.",
    "Microsoft Teams: Run full projects with channels, threaded chat, shared files, and recurring meetings.",
  ],
  compliance: [
    "Whereby: GDPR-first approach, EU hosting options, and HIPAA support for many regulated SMBs.",
    "Zoom: Advanced admin, role-based access, retention settings, and regional data options.",
    "Microsoft Teams: Deepest compliance and eDiscovery story as part of the broader Microsoft 365 stack.",
  ],
};

const prosCons = {
  whereby: {
    pros: [
      "No downloads needed for guests, ideal for client calls",
      "Embedded video API purpose-built for SaaS and telehealth",
      "Strong EU privacy stance with GDPR-first hosting options",
    ],
    cons: [
      "Limited native webinar/event tooling versus Zoom",
      "Admin controls are simpler than full-blown enterprise suites",
      "Smaller integration ecosystem compared with Zoom/Teams",
    ],
  },
  zoom: {
    pros: [
      "Feature-rich platform for meetings, webinars, and events",
      "Large app ecosystem and integrations with CRMs, LMSs, and more",
      "Widely adopted, so most users are already familiar with it",
    ],
    cons: [
      "Best experience requires app install for hosts and power users",
      "Admin and governance can feel complex at enterprise scale",
      "Multiple product SKUs (Meetings vs Webinars vs Events) to navigate",
    ],
  },
  "microsoft teams": {
    pros: [
      "Deep integration with Outlook, SharePoint, OneDrive, and Office apps",
      "Channels, chat, and meetings live together as a collaboration hub",
      "Strong enterprise compliance, retention, and eDiscovery capabilities",
    ],
    cons: [
      "Guest and external user experience can be clunky compared with Whereby/Zoom",
      "Requires Microsoft 365 licensing and IT buy-in",
      "UI and performance can feel heavy in large tenants",
    ],
  },
};

const faqs = [
  {
    q: `Should I replace Teams with Whereby in ${YEAR}?`,
    a: "Probably not for internal collaboration. Microsoft Teams is excellent as an internal hub for chat, channels, and files. Whereby shines for external client meetings and embedded video experiences in your product.",
  },
  {
    q: "Which platform supports webinars best?",
    a: "Zoom has the most mature webinar and events offering. Whereby focuses on meetings and embedded video, while Teams webinars exist but are tied tightly to Microsoft 365 and are best for internal or partner events.",
  },
  {
    q: "Can I embed Teams into my product?",
    a: "Not in a first-class way. For product use cases, you are usually better off with Whereby Embedded or Zoom’s SDKs if you want tight video integration inside your own app.",
  },
  {
    q: "Who wins on compliance?",
    a: "Microsoft Teams and Zoom have the deepest enterprise compliance portfolios (multi-geo, eDiscovery, regulated industries). Whereby offers EU hosting and HIPAA support that works very well for regulated SMBs and privacy-focused teams.",
  },
  {
    q: "What if my company already has Microsoft 365?",
    a: "If you already pay for Microsoft 365, Teams is often the default internal meeting and collaboration hub. You can still add Whereby for external client meetings or embedded video, and Zoom if you need specialised webinars.",
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

const LogoBadge = ({ name }) => {
  const lowered = name.toLowerCase();
  const key = lowered.includes("microsoft") ? "microsoft teams" : lowered;
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

export default function WherebyVsZoomVsMicrosoftTeamsPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Whereby vs Zoom vs Microsoft Teams – Honest Comparison (${YEAR})`}
        description="Whereby vs Zoom vs Microsoft Teams breakdown covering join experience, collaboration depth, webinars, compliance, pricing, and which platform fits agencies, SaaS, or enterprise teams."
        canonical={canonical}
        keywords={`${primaryKeyword}, microsoft teams vs zoom, whereby vs teams, video meeting comparison`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
          Meetings & collaboration
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Whereby vs Zoom vs Microsoft Teams ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Choosing a meeting platform now means choosing how your team collaborates.{" "}
          <strong>Whereby</strong> is browser-first and embeds neatly into SaaS products.{" "}
          <strong>Zoom</strong> is the workhorse for meetings and webinars with clients.{" "}
          <strong>Microsoft Teams</strong> is the collaboration hub for Microsoft 365 organisations.
          Here is how they compare before you commit to a stack.
        </p>

        {/* Quick verdict + collaborator pick */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="space-y-3 rounded-3xl bg-amber-50/90 p-6 ring-1 ring-amber-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-amber-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Use <strong>Whereby</strong> for client-facing sessions, telehealth, and embedded
              video where frictionless guest access matters most. Use <strong>Zoom</strong> for
              webinars, workshops, and cross-company meetings. Use <strong>Microsoft Teams</strong>{" "}
              as your internal collaboration hub if you already rely on Microsoft 365 for email,
              files, and security.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-amber-800">
              <Crown className="h-4 w-4" /> Overall scoreboard winner: {overallWinnerLabel}{" "}
              <span className="text-xs font-medium text-amber-700">
                (avg: {averages[overallWinnerKey]}/10)
              </span>
            </div>
          </div>
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Users className="h-5 w-5 text-amber-700" /> Best for collaborators
            </div>
            <p className="text-sm text-slate-700">
              <strong>Microsoft Teams</strong> ties meetings directly to chat, channels, Planner,
              and SharePoint, making it the most complete collaboration hub for 365-first companies.
            </p>
          </div>
        </div>

        {/* Top contender cards */}
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
            <Layers className="h-6 w-6 text-amber-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Whereby</th>
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
                    <td className="px-4 py-3 text-slate-700">{row.whereby}</td>
                    <td className="px-4 py-3 text-slate-700">{row.zoom}</td>
                    <td className="px-4 py-3 text-slate-700">
                      {row["microsoft teams"]}
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
                  <th className="px-4 py-3">Whereby</th>
                  <th className="px-4 py-3">Zoom</th>
                  <th className="px-4 py-3">Microsoft Teams</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const wherebyScore = row.scores.whereby;
                  const zoomScore = row.scores.zoom;
                  const teamsScore = row.scores["microsoft teams"];
                  const winnerValue = Math.max(wherebyScore, zoomScore, teamsScore);
                  const winnerKey =
                    winnerValue === wherebyScore
                      ? "whereby"
                      : winnerValue === zoomScore
                      ? "zoom"
                      : "microsoft teams";
                  const winnerLabel =
                    winnerKey === "whereby"
                      ? "Whereby"
                      : winnerKey === "zoom"
                      ? "Zoom"
                      : "Microsoft Teams";

                  return (
                    <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "whereby"
                            ? "font-semibold text-amber-800"
                            : "text-slate-700"
                        }`}
                      >
                        {wherebyScore}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "zoom"
                            ? "font-semibold text-sky-800"
                            : "text-slate-700"
                        }`}
                      >
                        {zoomScore}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "microsoft teams"
                            ? "font-semibold text-indigo-800"
                            : "text-slate-700"
                        }`}
                      >
                        {teamsScore}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">
                        {winnerLabel}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-amber-50 via-sky-50 to-indigo-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages.whereby}
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
            <Gauge className="h-6 w-6 text-amber-600" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Zap className="h-5 w-5 text-amber-600" /> Join experience & UX
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.experience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Users className="h-5 w-5 text-sky-600" /> Collaboration model
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.collaboration.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Shield className="h-5 w-5 text-indigo-600" /> Compliance & governance
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.compliance.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Pricing snapshots</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Monthly (approx.)</th>
                  <th className="px-4 py-3">Annual (approx.)</th>
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
            Pricing changes frequently based on region, promotions, and contract size. Always confirm
            current seat pricing, attendee caps, and feature inclusions on each vendor’s official
            pricing page before committing.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Whereby:</strong> Very low learning curve for both hosts and guests. Great for
              teams that often meet with non-technical clients who may not have admin rights to
              install apps.
            </li>
            <li>
              <strong>Zoom:</strong> Slightly higher setup effort but familiar to most external
              guests. Hosts can grow into advanced features over time (breakouts, webinars, apps).
            </li>
            <li>
              <strong>Microsoft Teams:</strong> Heavier initial learning but powerful once embedded
              into daily work. Best when your team is already committed to Microsoft 365 as its core
              stack.
            </li>
          </ul>
        </section>

        {/* Real-world use-cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Agencies and client services:</strong> Whereby wins with no-download rooms,
              easy URLs, and clean branding that makes client calls feel on-brand and low friction.
            </li>
            <li>
              <strong>Sales demos, webinars, and trainings:</strong> Zoom wins with its webinar
              product, breakout rooms, and strong app ecosystem for sales and enablement teams.
            </li>
            <li>
              <strong>Internal collaboration for 365 orgs:</strong> Microsoft Teams wins as the
              central place where chat, files, meetings, and tasks live together in one UI.
            </li>
            <li>
              <strong>SaaS products embedding video:</strong> Whereby Embedded is built for this
              scenario; Zoom’s SDK can work but is typically heavier to implement and operate.
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
              <h3 className="text-lg font-semibold">Whereby</h3>
              <p className="text-sm text-slate-700">
                Best when frictionless access and embedded video are your priorities, especially for
                external clients and product experiences.
              </p>
              <p className="mt-2 text-sm font-semibold text-amber-700">
                Ideal for: Agencies, telehealth, coaching, and SaaS products embedding live video.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Zoom</h3>
              <p className="text-sm text-slate-700">
                Best when you need a single platform for client calls, webinars, and training
                sessions with robust features and integrations.
              </p>
              <p className="mt-2 text-sm font-semibold text-sky-700">
                Ideal for: Sales and CS teams, trainers, and mid-market/enterprise organisations.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Microsoft Teams</h3>
              <p className="text-sm text-slate-700">
                Best when collaboration is centred on Microsoft 365 and you want meetings tightly
                tied to chat, files, and security policies.
              </p>
              <p className="mt-2 text-sm font-semibold text-indigo-700">
                Ideal for: 365-first enterprises, government, and organisations with strong IT
                governance needs.
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
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-amber-700 ring-1 ring-amber-100 hover:bg-amber-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
