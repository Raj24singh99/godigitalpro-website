import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  Zap,
  Crown,
  ArrowLeft,
  Play,
  BarChart3,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "webinarjam vs demio vs zoom";
const canonical = buildCanonical("/tools/compare/webinarjam-vs-demio-vs-zoom");

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
  zoom: {
    gradient: "from-sky-500 via-blue-500 to-indigo-500",
    badge: "bg-sky-100 text-sky-900",
    logo: "https://logo.clearbit.com/zoom.us",
  },
};

const contenders = [
  {
    key: "webinarjam",
    name: "WebinarJam",
    blurb: "Marketing-focused webinars with offers, funnels, and evergreen replays.",
    url: "https://home.webinarjam.com",
  },
  {
    key: "demio",
    name: "Demio",
    blurb: "Modern webinar UX with automated events and CRM-friendly integrations.",
    url: "https://demio.com",
  },
  {
    key: "zoom",
    name: "Zoom",
    blurb: "Global meeting and webinar platform built for scale and reliability.",
    url: "https://zoom.us",
  },
];

const comparisonRows = [
  {
    label: "Primary strength",
    webinarjam: "Sales and marketing webinars optimised for conversions.",
    demio: "Modern attendee experience plus automation for SaaS and education.",
    zoom: "General meetings, large webinars, and global reliability.",
  },
  {
    label: "Attendee caps (typical ranges)",
    webinarjam: "Approx. 500–5,000 depending on tier",
    demio: "Approx. 150–3,000 depending on tier",
    zoom: "From 100 up to 50,000+ with Zoom Events/Webinars",
  },
  {
    label: "Automation",
    webinarjam: "EverWebinar for evergreen events, replays, and email sequences.",
    demio: "Native automated events, tags, and post-webinar workflows.",
    zoom: "Automation via Zoom Webinars, apps, and external marketing tools.",
  },
  {
    label: "Engagement tools",
    webinarjam: "Timed offers, polls, chat, urgency/scarcity elements.",
    demio: "Polls, featured actions (CTAs), resources, and clean chat.",
    zoom: "Q&A, polls, reactions, breakout rooms, and chat.",
  },
  {
    label: "Integrations",
    webinarjam: "Infusionsoft, ActiveCampaign, HubSpot, Zapier, CRMs.",
    demio: "HubSpot, Marketo, Zapier, webhooks, and modern SaaS tools.",
    zoom: "Salesforce, HubSpot, 1k+ apps via Zoom App Marketplace.",
  },
  {
    label: "Best fit",
    webinarjam: "Launches, courses, and evergreen revenue webinars.",
    demio: "SaaS onboarding, customer training, and recurring marketing webinars.",
    zoom: "Internal meetings, client calls, and large cross-functional webinars.",
  },
];

const scoreboard = [
  { label: "Marketing focus", scores: { webinarjam: 9.4, demio: 8.6, zoom: 7.4 } },
  { label: "Ease of use", scores: { webinarjam: 7.5, demio: 9.2, zoom: 8.4 } },
  { label: "Automation", scores: { webinarjam: 9.2, demio: 9.0, zoom: 7.8 } },
  { label: "Enterprise scale", scores: { webinarjam: 8.2, demio: 7.6, zoom: 9.4 } },
  { label: "Value", scores: { webinarjam: 8.4, demio: 8.8, zoom: 8.3 } },
];

const avg = (key) =>
  (
    scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  webinarjam: avg("webinarjam"),
  demio: avg("demio"),
  zoom: avg("zoom"),
};

const overallWinnerKey = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const overallWinnerLabel =
  overallWinnerKey === "webinarjam"
    ? "WebinarJam"
    : overallWinnerKey === "demio"
    ? "Demio"
    : "Zoom";

const pricingTable = [
  {
    plan: "WebinarJam Starter",
    monthly: "From around ~$79/mo (billed annually)",
    annual: "Annual-only billing on most tiers",
    limits: "Approx. 500 attendees, ~2 presenters, core marketing features",
    notes: "Strong entry for revenue-focused webinars and launches.",
  },
  {
    plan: "Demio Growth",
    monthly: "From around ~$99/mo",
    annual: "Approx. ~$74/mo when billed annually",
    limits: "Approx. 500 attendees, automated events, custom branding",
    notes: "Balanced pricing for teams running recurring webinars.",
  },
  {
    plan: "Zoom Webinar 500",
    monthly: "From around ~$79/mo",
    annual: "Approx. ~$64/mo when billed annually",
    limits: "Approx. 500 attendees with webinar license plus 1 host",
    notes: "Ideal for teams already embedded in the Zoom ecosystem.",
  },
];

const featureBullets = {
  engagement: [
    "WebinarJam: Timed offers, urgency, polls, and chat tuned for closing sales live.",
    "Demio: Clean, branded engagement experience with features that feel natural for SaaS demos and training.",
    "Zoom: Reliable engagement tools (Q&A, polls, reactions, breakout rooms) that most attendees already understand.",
  ],
  automation: [
    "WebinarJam: Deep evergreen engine via EverWebinar, including just-in-time sessions and replay funnels.",
    "Demio: Automated events, integrations, and tagging that plug nicely into CRMs and marketing workflows.",
    "Zoom: Automations usually run through external marketing tools, CRMs, or Zapier plus Zoom’s APIs.",
  ],
  reliability: [
    "WebinarJam: Focused on webinar delivery with good performance for live launches and evergreen replays.",
    "Demio: Modern, browser-first experience with solid reliability for recurring marketing programs.",
    "Zoom: Battle-tested globally with strong performance across regions and network conditions.",
  ],
};

const prosCons = {
  webinarjam: {
    pros: [
      "Optimised for sales-heavy webinars with strong offer tools",
      "EverWebinar provides powerful evergreen and replay automation",
      "High attendee caps available on upper tiers",
    ],
    cons: [
      "Annual billing can be a hurdle for smaller teams or experiments",
      "UI feels more old-school compared with newer webinar SaaS tools",
      "Not ideal as your primary day-to-day meeting platform",
    ],
  },
  demio: {
    pros: [
      "Modern UX with a polished attendee experience",
      "Native automation and CRM integrations for SaaS and marketing",
      "Quick to roll out across GTM and CS teams",
    ],
    cons: [
      "Attendee caps and pricing tiers may push costs up as you scale",
      "Less sales-optimised than WebinarJam for hardcore launch funnels",
      "Fewer enterprise IT controls compared with Zoom",
    ],
  },
  zoom: {
    pros: [
      "Global brand familiarity and easy adoption for attendees",
      "Scales to very large webinars and events with add-ons",
      "Rich app marketplace and integrations with major enterprise tools",
    ],
    cons: [
      "Requires extra tooling for full-funnel marketing automation",
      "Generic UI that is less event-like than specialist webinar tools",
      "Webinar/Event licenses add complexity to pricing and setup",
    ],
  },
};

const faqs = [
  {
    q: `Which platform closes more revenue in ${YEAR}?`,
    a: "WebinarJam is usually the best bet when your goal is closing revenue from live and evergreen webinars thanks to timed offers, urgency, and EverWebinar automation.",
  },
  {
    q: "Who should choose Demio?",
    a: "Choose Demio if you run recurring webinars for SaaS demos, onboarding, or customer education and care about modern UX, automation, and clean CRM integrations.",
  },
  {
    q: "Is Zoom Webinar enough for marketing events?",
    a: "Zoom Webinar is enough for many marketing events—especially large ones—but you will often pair it with marketing automation, landing page builders, and CRM tools for full-funnel tracking.",
  },
  {
    q: "Can I run evergreen webinars on all three?",
    a: "WebinarJam/EverWebinar and Demio support evergreen or automated sessions natively. Zoom typically relies on external automation and funnels to simulate evergreen experiences.",
  },
  {
    q: "What if I already use Zoom for all meetings?",
    a: "If Zoom is already your meeting backbone, you can layer Zoom Webinars or Events for reach, and still bring in specialist tools or landing pages to add marketing automation.",
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

export default function WebinarJamVsDemioVsZoomPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`WebinarJam vs Demio vs Zoom – Honest Webinar Comparison (${YEAR})`}
        description="Compare WebinarJam, Demio, and Zoom for live and evergreen webinars, automation, engagement, pricing, and which platform fits your go-to-market this year."
        canonical={canonical}
        keywords={`${primaryKeyword}, webinar comparison, webinarjam vs zoom, demio vs zoom, webinar platforms`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-rose-700">
          Webinar platforms
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          WebinarJam vs Demio vs Zoom ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Three webinar heavyweights, three philosophies: WebinarJam is built to sell from the
          virtual stage, Demio focuses on modern UX and automation, and Zoom scales to massive
          audiences as part of your everyday meeting stack. Here is how they compare before you
          lock in your webinar strategy.
        </p>

        {/* Quick verdict + best evergreen */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="space-y-3 rounded-3xl bg-rose-50/90 p-6 ring-1 ring-rose-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-rose-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>WebinarJam</strong> when sales-focused webinars and evergreen funnels
              are core to your revenue. Choose <strong>Demio</strong> when you want modern UX,
              automation, and smooth integrations for SaaS demos and education. Choose{" "}
              <strong>Zoom</strong> when you need a single platform for meetings and webinars with
              global reliability and enterprise adoption.
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
              <Play className="h-5 w-5 text-rose-700" /> Best evergreen engine
            </div>
            <p className="text-sm text-slate-700">
              <strong>WebinarJam + EverWebinar</strong> give you always-on funnels with replays and
              just-in-time sessions, ideal for courses, info-products, and SaaS demos running 24/7.
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
                  <th className="px-4 py-3">Zoom</th>
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
                    <td className="px-4 py-3 text-slate-700">{row.zoom}</td>
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
                  <th className="px-4 py-3">Zoom</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const webinarjam = row.scores.webinarjam;
                  const demio = row.scores.demio;
                  const zoom = row.scores.zoom;
                  const winnerValue = Math.max(webinarjam, demio, zoom);
                  const winnerKey =
                    winnerValue === webinarjam
                      ? "webinarjam"
                      : winnerValue === demio
                      ? "demio"
                      : "zoom";
                  const winnerLabel =
                    winnerKey === "webinarjam"
                      ? "WebinarJam"
                      : winnerKey === "demio"
                      ? "Demio"
                      : "Zoom";

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
                          winnerKey === "zoom"
                            ? "font-semibold text-sky-800"
                            : "text-slate-700"
                        }`}
                      >
                        {zoom}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">
                        {winnerLabel}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-rose-50 via-indigo-50 to-sky-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-rose-800">
                    {averages.webinarjam}
                  </td>
                  <td className="px-4 py-3 font-semibold text-blue-800">
                    {averages.demio}
                  </td>
                  <td className="px-4 py-3 font-semibold text-sky-800">
                    {averages.zoom}
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
              <Shield className="h-5 w-5 text-sky-600" /> Reliability & scale
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
            Pricing changes frequently based on promotions, region, and attendee caps. Always confirm
            current pricing and limits on each vendor’s official site before committing your webinar
            strategy.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>WebinarJam:</strong> Built for marketers; expect configuration steps around
              funnels, offers, and automation. Once dialled in, it can run highly engineered launch
              events and evergreen funnels.
            </li>
            <li>
              <strong>Demio:</strong> One of the smoother UIs in the webinar category; easy for GTM
              and CS teams to adopt without heavy training, while still being powerful for
              automation.
            </li>
            <li>
              <strong>Zoom:</strong> Extremely familiar to most attendees and hosts; friction is low,
              but the “event feel” is more neutral compared with specialist webinar tools.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Revenue-focused webinars and launches:</strong> WebinarJam wins with timed
              offers, evergreen replays, and funnel-ready automation.
            </li>
            <li>
              <strong>SaaS demos, onboarding, and education:</strong> Demio wins with its modern UX
              and integrations that slot into a SaaS GTM stack.
            </li>
            <li>
              <strong>Company-wide town halls and cross-functional events:</strong> Zoom wins with
              scale, breakout rooms, and global reliability.
            </li>
            <li>
              <strong>Hybrid stacks:</strong> Many teams run WebinarJam or Demio for pipeline-driving
              webinars and rely on Zoom for internal meetings and customer calls.
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
                Best when your webinars are a direct revenue driver and you want evergreen funnels,
                urgency, and sales-focused features out of the box.
              </p>
              <p className="mt-2 text-sm font-semibold text-rose-700">
                Ideal for: Course creators, info-product sellers, coaches, and launch-heavy SaaS.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Demio</h3>
              <p className="text-sm text-slate-700">
                Best for teams that run recurring webinars and care about experience, automation, and
                clean data flowing into their CRM and marketing stack.
              </p>
              <p className="mt-2 text-sm font-semibold text-blue-700">
                Ideal for: SaaS marketing and CS teams, B2B demand-gen, onboarding workflows.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Zoom</h3>
              <p className="text-sm text-slate-700">
                Best when you want one platform for meetings and webinars that everyone already
                knows how to use, and where scale and reliability matter most.
              </p>
              <p className="mt-2 text-sm font-semibold text-sky-700">
                Ideal for: Enterprises, remote-first teams, and global organisations.
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
