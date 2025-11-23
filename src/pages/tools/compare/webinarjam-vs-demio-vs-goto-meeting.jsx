import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  Zap,
  Crown,
  ArrowLeft,
  Presentation,
  BarChart3,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "webinarjam vs demio vs goto meeting";
const canonical = buildCanonical("/tools/compare/webinarjam-vs-demio-vs-goto-meeting");

const brandMeta = {
  webinarjam: {
    gradient: "from-rose-500 via-red-500 to-amber-500",
    badge: "bg-rose-100 text-rose-900",
    logo: "https://logo.clearbit.com/webinarjam.com",
  },
  demio: {
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
    badge: "bg-blue-100 text-blue-900",
    logo: "https://logo.clearbit.com/demio.com",
  },
  "goto meeting": {
    gradient: "from-amber-500 via-yellow-500 to-orange-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/gotomeeting.com",
  },
};

const contenders = [
  {
    key: "webinarjam",
    name: "WebinarJam",
    blurb: "High-converting webinars with evergreen automation and timed offers.",
    url: "https://home.webinarjam.com",
  },
  {
    key: "demio",
    name: "Demio",
    blurb: "Modern webinar experience with clean UX and marketing automation.",
    url: "https://demio.com",
  },
  {
    key: "goto meeting",
    name: "GoTo Meeting",
    blurb: "Reliable corporate meetings and training from the GoTo suite.",
    url: "https://www.goto.com/meeting",
  },
];

const comparisonRows = [
  {
    label: "Primary focus",
    webinarjam: "Marketing and sales webinars with high-converting funnels.",
    demio: "Customer education, onboarding, and marketing webinars.",
    "goto meeting": "Day-to-day corporate meetings and training calls.",
  },
  {
    label: "Deployment",
    webinarjam: "Browser-based with streaming tech and registration funnels.",
    demio: "Browser-first with a modern, lightweight attendee experience.",
    "goto meeting": "Desktop/mobile apps plus browser; PSTN dial-in.",
  },
  {
    label: "Automation",
    webinarjam:
      "EverWebinar automation, scheduled replays, and timed broadcast sequences.",
    demio: "Automated sessions, tags, and CRM-friendly registration flows.",
    "goto meeting":
      "Basic reminders; deeper automation typically via GoTo Webinar or external tools.",
  },
  {
    label: "Engagement tools",
    webinarjam: "Timed offers, polls, Q&A, chat, and scarcity elements for sales.",
    demio: "Featured actions, polls, handouts/resources, and chat.",
    "goto meeting": "Screen share, chat, Q&A; limited marketing-style engagement.",
  },
  {
    label: "Integrations",
    webinarjam:
      "Email and CRM integrations oriented around funnels and sales pipelines.",
    demio: "Native marketing integrations plus Zapier for modern SaaS stacks.",
    "goto meeting":
      "Integrates into GoTo Suite and productivity tools; more IT-centric.",
  },
  {
    label: "Best fit",
    webinarjam: "Launches, evergreen funnels, and revenue-focused webinars.",
    demio: "SaaS onboarding, customer training, and recurring marketing webinars.",
    "goto meeting": "Internal/external meetings for regulated or enterprise orgs.",
  },
];

const scoreboard = [
  { label: "Marketing capability", scores: { webinarjam: 9.4, demio: 8.8, "goto meeting": 6.5 } },
  { label: "Ease of use", scores: { webinarjam: 7.6, demio: 9.3, "goto meeting": 8.2 } },
  {
    label: "Enterprise reliability",
    scores: { webinarjam: 8.4, demio: 8.2, "goto meeting": 9.0 },
  },
  { label: "Automation depth", scores: { webinarjam: 9.2, demio: 9.0, "goto meeting": 6.8 } },
  { label: "Value for money", scores: { webinarjam: 8.3, demio: 8.9, "goto meeting": 8.1 } },
];

const avg = (key) =>
  (
    scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  webinarjam: avg("webinarjam"),
  demio: avg("demio"),
  "goto meeting": avg("goto meeting"),
};

const overallWinnerKey = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const overallWinnerLabel =
  overallWinnerKey === "webinarjam"
    ? "WebinarJam"
    : overallWinnerKey === "demio"
    ? "Demio"
    : "GoTo Meeting";

const pricingTable = [
  {
    plan: "WebinarJam Starter",
    monthly: "From around ~$79/mo (billed annually)",
    annual: "Annual-only billing on most tiers",
    limits: "Up to ~500 attendees, live + replay features, core automation",
    notes: "Built for sales and marketing teams who monetise webinars directly.",
  },
  {
    plan: "Demio Starter",
    monthly: "From around ~$49/mo",
    annual: "Approx. ~$34/mo when billed annually",
    limits: "Around 150 attendees with core automation and engagement tools",
    notes: "Great for SaaS and marketing teams running recurring webinars.",
  },
  {
    plan: "GoTo Meeting Professional",
    monthly: "From around ~$12/mo",
    annual: "Approx. ~$10.75/mo when billed annually",
    limits: "Up to ~150 participants, PSTN dial-in, admin controls",
    notes: "Priced as a meeting tool, not a full webinar marketing platform.",
  },
];

const featureBullets = {
  engagement: [
    "WebinarJam: Timed offers, scarcity banners, polls, surveys, and chat tuned for live selling.",
    "Demio: Clean chat, featured actions (CTAs), polls, and resources that feel native to SaaS onboarding and education.",
    "GoTo Meeting: Reliable screen share and Q&A; focused on productivity over marketing theatrics.",
  ],
  automation: [
    "WebinarJam: Deep evergreen automation via EverWebinar, pre-recorded replays, and multi-step reminder sequences.",
    "Demio: Automated sessions with tagging, follow-up sequences, and CRM-friendly registration data.",
    "GoTo Meeting: Limited native automation; typically paired with external workflows or GoTo Webinar for marketing flows.",
  ],
  reliability: [
    "WebinarJam: Built for high attendee volumes; browser-based approach with marketing-first UX.",
    "Demio: Modern stack with browser-first simplicity and solid reliability for recurring events.",
    "GoTo Meeting: Enterprise-grade uptime, PSTN dial-in, and governance suitable for IT-led rollouts.",
  ],
};

const prosCons = {
  webinarjam: {
    pros: [
      "Strong sales and marketing features (timed offers, scarcity, promo tools)",
      "Evergreen replays and EverWebinar automation for always-on funnels",
      "High attendee caps on upper tiers for larger launches",
    ],
    cons: [
      "Annual billing can be a barrier for smaller teams testing webinars",
      "UI feels more old-school compared to modern SaaS webinar tools",
      "Less ideal for everyday internal meetings compared to GoTo or Zoom",
    ],
  },
  demio: {
    pros: [
      "Modern, clean UX for hosts and attendees",
      "Good balance of marketing automation and education features",
      "Easy to onboard teams and integrate with modern SaaS stacks",
    ],
    cons: [
      "Tiered attendee caps mean pricing jumps as you grow attendance",
      "Not as deep in sales-specific features as WebinarJam",
      "Fewer heavy enterprise governance controls than GoTo Suite",
    ],
  },
  "goto meeting": {
    pros: [
      "PSTN dial-in and device-agnostic access for global teams",
      "Enterprise security, compliance, and admin controls",
      "Familiar style of UI for corporate users and IT departments",
    ],
    cons: [
      "Limited webinar marketing features compared to WebinarJam and Demio",
      "No true evergreen automation for funnels (that’s GoTo Webinar’s job)",
      "Attendee experience is more “meeting” than “event” or “show”",
    ],
  },
};

const faqs = [
  {
    q: `Do I need WebinarJam or GoTo Meeting in ${YEAR}?`,
    a: "Pick WebinarJam if webinar-driven revenue and evergreen funnels are central to your strategy. Pick GoTo Meeting if you primarily need recurring internal or client meetings with dial-in and compliance.",
  },
  {
    q: "Who should pick Demio?",
    a: "Demio suits teams who want a clean, modern experience for onboarding, education, and marketing webinars, with automation and integrations that plug into a SaaS stack.",
  },
  {
    q: "Can GoTo Meeting handle webinars?",
    a: "GoTo Meeting can host larger calls, but for full webinar functionality—registration pages, reporting, and marketing features—GoTo Webinar is the better fit in the GoTo ecosystem.",
  },
  {
    q: "Which tool has the best dial-in and reliability?",
    a: "GoTo Meeting offers strong PSTN dial-in, global access, and governance. WebinarJam and Demio focus more on browser-based attendance and marketing outcomes than telephony.",
  },
  {
    q: "What if I need both webinars and everyday meetings?",
    a: "Many teams pair a marketing-focused tool (WebinarJam or Demio) with a meeting tool (GoTo Meeting or Zoom) so they are not forced to compromise on either use case.",
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
  const meta =
    brandMeta[name.toLowerCase()] || {
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

export default function WebinarJamVsDemioVsGoToMeetingPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`WebinarJam vs Demio vs GoTo Meeting – Webinar & Meeting Comparison (${YEAR})`}
        description="Compare WebinarJam, Demio, and GoTo Meeting for marketing webinars, automation, engagement tools, recurring meetings, reliability, pricing, and which platform fits your team."
        canonical={canonical}
        keywords={`${primaryKeyword}, webinar platform comparison, webinarjam vs demio, goto meeting alternatives`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-rose-700">
          Webinar & meeting platforms
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          WebinarJam vs Demio vs GoTo Meeting ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          WebinarJam is built to sell from the virtual stage. Demio delivers a modern webinar
          experience with automation for SaaS and customer education. GoTo Meeting is the reliable
          meeting workhorse for enterprises. Here is how they stack up so you do not pick a sales
          tool for meetings—or a meeting tool for sales.
        </p>

        {/* Quick verdict + best-for card */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="space-y-3 rounded-3xl bg-rose-50/90 p-6 ring-1 ring-rose-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-rose-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>WebinarJam</strong> when live and evergreen webinars are a core revenue
              channel. Choose <strong>Demio</strong> for a slick attendee experience and marketing
              automation wrapped in a modern UI. Choose <strong>GoTo Meeting</strong> when your top
              priority is reliable, compliant meetings across a corporate or regulated environment.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-rose-800">
              <Crown className="h-4 w-4" /> Overall scoreboard winner: {overallWinnerLabel}{" "}
              <span className="text-xs font-medium text-rose-700">
                (avg: {averages[overallWinnerKey]}/10)
              </span>
            </div>
          </div>
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Presentation className="h-5 w-5 text-rose-700" /> Best for corporate calls
            </div>
            <p className="text-sm text-slate-700">
              <strong>GoTo Meeting</strong> leads for corporate use thanks to PSTN dial-in, strong
              uptime, and admin controls that satisfy IT and compliance teams.
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
            <Layers className="h-6 w-6 text-rose-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">WebinarJam</th>
                  <th className="px-4 py-3">Demio</th>
                  <th className="px-4 py-3">GoTo Meeting</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.webinarjam}</td>
                    <td className="px-4 py-3 text-slate-700">{row.demio}</td>
                    <td className="px-4 py-3 text-slate-700">{row["goto meeting"]}</td>
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
                  <th className="px-4 py-3">WebinarJam</th>
                  <th className="px-4 py-3">Demio</th>
                  <th className="px-4 py-3">GoTo Meeting</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const webinarjam = row.scores.webinarjam;
                  const demio = row.scores.demio;
                  const gotoMeeting = row.scores["goto meeting"];
                  const winnerValue = Math.max(webinarjam, demio, gotoMeeting);
                  const winnerKey =
                    winnerValue === webinarjam
                      ? "webinarjam"
                      : winnerValue === demio
                      ? "demio"
                      : "goto meeting";
                  const winnerLabel =
                    winnerKey === "webinarjam"
                      ? "WebinarJam"
                      : winnerKey === "demio"
                      ? "Demio"
                      : "GoTo Meeting";

                  return (
                    <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "webinarjam"
                            ? "font-semibold text-rose-800"
                            : "text-slate-700"
                        }`}
                      >
                        {webinarjam}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "demio"
                            ? "font-semibold text-blue-800"
                            : "text-slate-700"
                        }`}
                      >
                        {demio}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "goto meeting"
                            ? "font-semibold text-amber-800"
                            : "text-slate-700"
                        }`}
                      >
                        {gotoMeeting}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">
                        {winnerLabel}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-rose-50 via-indigo-50 to-amber-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-rose-800">
                    {averages.webinarjam}
                  </td>
                  <td className="px-4 py-3 font-semibold text-blue-800">
                    {averages.demio}
                  </td>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages["goto meeting"]}
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
            <Gauge className="h-6 w-6 text-rose-600" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Zap className="h-5 w-5 text-rose-600" /> Webinar formats & engagement
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.engagement.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Layers className="h-5 w-5 text-indigo-600" /> Automation & funnels
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.automation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Shield className="h-5 w-5 text-amber-600" /> Meetings, reliability & compliance
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.reliability.map((item) => (
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
            Pricing fluctuates based on promos, attendee caps, and billing currency. Always confirm
            current pricing and limits on each vendor’s official site before committing long term.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>WebinarJam:</strong> Built with marketers in mind; there is a learning curve
              around configuration and funnels, but power users can run very sophisticated launches.
            </li>
            <li>
              <strong>Demio:</strong> One of the cleaner UIs in the webinar space; easier for teams
              who want to get started quickly without sacrificing automation and branding.
            </li>
            <li>
              <strong>GoTo Meeting:</strong> Familiar, utilitarian UI optimised for productivity,
              not “showtime”; many users already know it from corporate environments.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Launches, product demos, and revenue-focused webinars:</strong> WebinarJam
              wins with timed offers, evergreen replays, and funnel-ready automation.
            </li>
            <li>
              <strong>SaaS onboarding, customer education, and recurring training:</strong> Demio
              wins with its clean UX, automation, and integrations into modern CRMs and marketing
              tools.
            </li>
            <li>
              <strong>Internal meetings, board reviews, and compliance-heavy calls:</strong> GoTo
              Meeting wins with dial-in, admin controls, and enterprise trust.
            </li>
            <li>
              <strong>Hybrid stacks:</strong> Use WebinarJam or Demio to drive pipeline, and GoTo
              Meeting or Zoom for internal and client check-ins.
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
              <h3 className="text-lg font-semibold">WebinarJam</h3>
              <p className="text-sm text-slate-700">
                Best when webinars are a primary revenue engine and you need timed offers, evergreen
                replays, and sequences that plug into your funnel.
              </p>
              <p className="mt-2 text-sm font-semibold text-rose-700">
                Ideal for: Info-product sellers, coaches, agencies, launch-driven SaaS.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Demio</h3>
              <p className="text-sm text-slate-700">
                Best for teams that run frequent webinars for onboarding or marketing and care about
                aesthetics, automation, and integrations as much as features.
              </p>
              <p className="mt-2 text-sm font-semibold text-blue-700">
                Ideal for: SaaS marketing teams, CS teams, B2B demand gen.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">GoTo Meeting</h3>
              <p className="text-sm text-slate-700">
                Best when your primary job is to run reliable, compliant meetings across a distributed
                organisation rather than to run events that feel like shows.
              </p>
              <p className="mt-2 text-sm font-semibold text-amber-700">
                Ideal for: Enterprises, regulated industries, IT-led rollouts.
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
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-rose-700 ring-1 ring-rose-100 hover:bg-rose-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
