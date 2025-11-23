import React from "react";
import {
  Sparkles,
  Crown,
  Layers,
  BarChart3,
  ArrowLeft,
  Gauge,
  Video,
  Shield,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "goto meeting vs zoom vs webex";
const canonical = buildCanonical("/tools/compare/goto-meeting-vs-zoom-vs-webex");

const brandMeta = {
  "goto meeting": {
    gradient: "from-amber-500 via-orange-500 to-slate-700",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/goto.com",
  },
  zoom: {
    gradient: "from-sky-500 via-blue-500 to-indigo-600",
    badge: "bg-sky-100 text-sky-900",
    logo: "https://logo.clearbit.com/zoom.us",
  },
  webex: {
    gradient: "from-emerald-500 via-teal-500 to-blue-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/webex.com",
  },
};

const contenders = [
  {
    key: "goto meeting",
    name: "GoTo Meeting",
    blurb: "Reliable meetings with dial-in, recordings, and GoTo ecosystem ties.",
    url: "/tools/goto-meeting",
  },
  {
    key: "zoom",
    name: "Zoom",
    blurb: "High-quality video meetings and webinars with massive adoption.",
    url: "/tools/zoom",
  },
  {
    key: "webex",
    name: "Webex",
    blurb: "Enterprise-grade meetings with strong security and Cisco integration.",
    url: "/tools/webex",
  },
];

const comparisonRows = [
  {
    label: "Best for",
    "goto meeting": "Dial-in–friendly business meetings and existing GoTo users",
    zoom: "High-quality video calls, webinars, and general meeting adoption",
    webex: "Enterprises with strict security/compliance and Cisco stacks",
  },
  {
    label: "Webinars / events",
    "goto meeting": "Requires GoTo Webinar add-on for full webinar experience",
    zoom: "Built-in webinars and events with a strong feature set",
    webex: "Webex Webinars/Events available for larger programs",
  },
  {
    label: "Joining experience",
    "goto meeting": "Simple links and strong dial-in options",
    zoom: "Very familiar to most users; easy across devices with virtual backgrounds",
    webex: "Good overall; clients can feel heavier in some environments",
  },
  {
    label: "Admin / security controls",
    "goto meeting": "Solid basics for SMB teams",
    zoom: "Robust controls, SSO, and compliance options with a large ecosystem",
    webex: "Enterprise-grade controls, data residency options, and governance",
  },
  {
    label: "Integrations & ecosystem",
    "goto meeting": "Calendar and basic integrations; strong with GoTo stack",
    zoom: "Extensive app marketplace and integrations across tools",
    webex: "Deep integration with Cisco and enterprise collaboration tools",
  },
];

const scoreboard = [
  { label: "Video quality", gotoMeeting: 8.6, zoom: 9.4, webex: 9.0 },
  { label: "Webinar strength", gotoMeeting: 7.8, zoom: 9.5, webex: 8.7 },
  { label: "Ease of use", gotoMeeting: 8.7, zoom: 9.2, webex: 8.3 },
  { label: "Enterprise readiness", gotoMeeting: 8.3, zoom: 8.8, webex: 9.3 },
  { label: "Value for SMB", gotoMeeting: 8.6, zoom: 8.4, webex: 8.1 },
];

const pricingTable = [
  {
    plan: "GoTo Meeting Professional",
    monthly: "Roughly ~$12–$16/organizer",
    annual: "Lower effective monthly on annual contracts",
    limits: "Up to ~150 participants, basics like recordings and screen sharing",
    notes: "Strong if you already use GoTo products or rely heavily on dial-in.",
  },
  {
    plan: "Zoom Pro",
    monthly: "Roughly ~$15–$20/license",
    annual: "Discounts for annual + higher bundles",
    limits: "Longer meetings, 100+ participants, cloud recordings, basic admin",
    notes: "Popular baseline for SMEs running frequent video meetings and webinars.",
  },
  {
    plan: "Webex Business / Meet",
    monthly: "Roughly ~$14–$25/license",
    annual: "Enterprise deals and term discounts common",
    limits: "Participant caps and security features vary by plan tier",
    notes: "Best fit when security, compliance, and Cisco integration are priorities.",
  },
];

const featureBullets = {
  meetings: [
    "GoTo Meeting: Focused on reliable scheduled meetings with strong dial-in and straightforward controls.",
    "Zoom: Optimised for high-quality video, breakout rooms, and a familiar UX for most participants.",
    "Webex: Built for hybrid work and enterprise collaboration, with robust meeting controls and device support.",
  ],
  webinars: [
    "GoTo Meeting: Uses GoTo Webinar for larger, structured webinars and events.",
    "Zoom: Native Zoom Webinars and Zoom Events offer a mature webinar stack with robust host controls.",
    "Webex: Webex Webinars/Events support large-scale virtual events with enterprise-grade features.",
  ],
  security: [
    "GoTo Meeting: Solid SMB security posture with standard controls and compliance options.",
    "Zoom: Matured significantly with end-to-end encryption options, SSO, and governance improvements.",
    "Webex: Long-standing enterprise security, data residency options, and deep Cisco security integration.",
  ],
};

const faqs = [
  {
    q: `Is Zoom better than GoTo Meeting in ${YEAR}?`,
    a: "Zoom typically leads on video quality, user familiarity, and built-in webinars. GoTo Meeting is a solid alternative if you rely heavily on dial-in, prefer a simpler UX, or already use other GoTo products.",
  },
  {
    q: "When should I pick Webex?",
    a: "Pick Webex if you operate in a security- or compliance-sensitive environment, want deep control over data residency, or are already invested in Cisco networking and collaboration tools.",
  },
  {
    q: "Which is easiest for guests to join?",
    a: "All three are straightforward. Zoom links are extremely common and familiar, while GoTo Meeting shines when you have many phone/dial-in participants. Webex is similar but can feel heavier on older machines or networks.",
  },
  {
    q: "What about webinars and virtual events?",
    a: "Zoom has one of the strongest built-in webinar/event offerings. GoTo uses GoTo Webinar as a dedicated product. Webex offers Webex Webinars/Events that are popular with larger, enterprise-style virtual events.",
  },
  {
    q: "Which is best for small businesses?",
    a: "For many SMBs, Zoom or GoTo Meeting will be easiest to justify on price and familiarity. Webex is more compelling when your SMB has elevated security requirements or is already using Cisco gear.",
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
  "goto meeting": {
    pros: [
      "Simple, reliable scheduling and hosting for business meetings",
      "Strong dial-in support and PSTN options for phone attendees",
      "Fits neatly if you already use GoTo's broader product suite",
    ],
    cons: [
      "Webinars typically require separate GoTo Webinar product",
      "Ecosystem and brand recognition are weaker than Zoom's",
      "Not as feature-dense or ubiquitous as Zoom for many users",
    ],
  },
  zoom: {
    pros: [
      "Excellent video quality and performance across many networks",
      "Massive user familiarity—most guests already know how to join",
      "Strong webinar/event options and large app marketplace",
    ],
    cons: [
      "Security and privacy scrutiny means careful configuration for regulated teams",
      "Can feel like overkill for simple internal meetings",
      "Costs can add up with add-ons and large webinar tiers",
    ],
  },
  webex: {
    pros: [
      "Enterprise-grade security, compliance, and data residency options",
      "Deep integration with Cisco collaboration hardware and network stack",
      "Suitable for large, complex enterprises and hybrid work deployments",
    ],
    cons: [
      "Heavier feel and more complexity than Zoom/GoTo for small teams",
      "User experience can vary more depending on client/IT setup",
      "Pricing and implementation are typically overkill for very small businesses",
    ],
  },
};

const avg = (tool) =>
  (
    scoreboard.reduce((sum, row) => sum + (row[tool] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  gotoMeeting: avg("gotoMeeting"),
  zoom: avg("zoom"),
  webex: avg("webex"),
};

const overallWinner = (() => {
  const values = {
    gotoMeeting: parseFloat(averages.gotoMeeting),
    zoom: parseFloat(averages.zoom),
    webex: parseFloat(averages.webex),
  };
  const max = Math.max(values.gotoMeeting, values.zoom, values.webex);
  if (max === values.gotoMeeting) return "GoTo Meeting";
  if (max === values.zoom) return "Zoom";
  return "Webex";
})();

const LogoBadge = ({ name }) => {
  const key = name.toLowerCase().includes("goto")
    ? "goto meeting"
    : name.toLowerCase().includes("zoom")
    ? "zoom"
    : name.toLowerCase().includes("webex")
    ? "webex"
    : name.toLowerCase();

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

export default function GoToMeetingVsZoomVsWebexPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`GoTo Meeting vs Zoom vs Webex (${YEAR}) – Video meeting comparison`}
        description="Compare GoTo Meeting, Zoom, and Webex on video quality, webinars, security, pricing, and real-world fit so you can pick the right meeting platform for your team."
        canonical={canonical}
        keywords={`${primaryKeyword}, meeting software comparison, video conferencing tools`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
          Video meeting platforms
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          GoTo Meeting vs Zoom vs Webex ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          GoTo Meeting is built for reliable, dial-in–friendly business meetings. Zoom
          dominates in video quality, familiarity, and webinars. Webex is the
          enterprise-grade choice for security-conscious organisations. Below is a
          structured comparison to help you pick the right fit for your meeting and
          webinar needs.
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
                <Video className="h-5 w-5 text-white/80" />
              </div>
              <p className="relative mt-3 text-sm font-medium text-white/90">
                {item.blurb}
              </p>
            </Link>
          ))}
        </div>

        {/* Quick verdict + overall winner */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-amber-100 bg-amber-50 px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-amber-900">
              <Sparkles className="h-5 w-5" />
              <p className="text-lg font-semibold">Quick verdict</p>
            </div>
            <p className="mt-2 text-slate-800">
              Choose <strong>Zoom</strong> if you want{" "}
              <strong>the most familiar experience, strong video quality, and built-in webinars</strong>. Choose{" "}
              <strong>GoTo Meeting</strong> if your priority is{" "}
              <strong>reliable business meetings with dial-in</strong> and you already use GoTo
              products. Choose <strong>Webex</strong> if you operate in a{" "}
              <strong>security- or compliance-heavy environment</strong> and want tight integration
              with Cisco.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Crown className="h-4 w-4 text-amber-600" /> Overall scoreboard winner:{" "}
              {overallWinner}{" "}
              <span className="text-xs text-slate-600">
                (avg:{" "}
                {overallWinner === "GoTo Meeting"
                  ? averages.gotoMeeting
                  : overallWinner === "Zoom"
                  ? averages.zoom
                  : averages.webex}
                /10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              The “best” platform depends on whether you optimise for{" "}
              <strong>ubiquity and webinars</strong> (Zoom),{" "}
              <strong>dial-in–friendly business meetings</strong> (GoTo Meeting), or{" "}
              <strong>enterprise-grade security and Cisco alignment</strong> (Webex).
            </p>
          </div>
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-amber-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">GoTo Meeting</th>
                  <th className="px-4 py-3">Zoom</th>
                  <th className="px-4 py-3">Webex</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">
                      {row["goto meeting"]}
                    </td>
                    <td className="px-4 py-3 text-slate-700">{row.zoom}</td>
                    <td className="px-4 py-3 text-slate-700">{row.webex}</td>
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
                  <th className="px-4 py-3">Criterion</th>
                  <th className="px-4 py-3">GoTo Meeting</th>
                  <th className="px-4 py-3">Zoom</th>
                  <th className="px-4 py-3">Webex</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const maxScore = Math.max(
                    row.gotoMeeting,
                    row.zoom,
                    row.webex
                  );
                  const winner =
                    row.gotoMeeting === row.zoom &&
                    row.zoom === row.webex
                      ? "Tie"
                      : maxScore === row.gotoMeeting
                      ? "GoTo Meeting"
                      : maxScore === row.zoom
                      ? "Zoom"
                      : "Webex";

                  return (
                    <tr key={row.label}>
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winner === "GoTo Meeting"
                            ? "font-semibold text-amber-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.gotoMeeting}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Zoom"
                            ? "font-semibold text-sky-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.zoom}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Webex"
                            ? "font-semibold text-emerald-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.webex}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {winner}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-amber-50 via-sky-50 to-emerald-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages.gotoMeeting}
                  </td>
                  <td className="px-4 py-3 font-semibold text-sky-800">
                    {averages.zoom}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.webex}
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
            <Gauge className="h-6 w-6 text-amber-600" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Video className="h-5 w-5 text-amber-600" /> Core meeting experience
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.meetings.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Users className="h-5 w-5 text-sky-600" /> Webinars & virtual events
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.webinars.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Shield className="h-5 w-5 text-emerald-600" /> Security, admin & ecosystem
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
            Pricing for GoTo Meeting, Zoom, and Webex changes frequently and depends on
            licences, add-ons (like webinars), and enterprise deals. Always confirm
            current pricing, participant caps, and feature tiers on each vendor’s
            official pricing page before committing.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & rollout</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>GoTo Meeting:</strong> Familiar, straightforward interface that suits
              traditional business meetings and phone/dial-in–heavy use cases.
            </li>
            <li>
              <strong>Zoom:</strong> Intuitive for most users with minimal training needed;
              rollout is typically fast because many users already know the product.
            </li>
            <li>
              <strong>Webex:</strong> Strong for enterprises but can require more IT
              involvement to configure policies, devices, and security posture correctly.
            </li>
          </ul>
        </section>

        {/* Real-world use-cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Client calls and internal meetings with dial-in:</strong> GoTo
              Meeting is a strong pick, especially if your clients are used to phone
              dial-ins or you already use GoTo’s tools.
            </li>
            <li>
              <strong>Frequent video calls and webinars to broad audiences:</strong> Zoom
              usually wins thanks to its ubiquity, video quality, and webinar features.
            </li>
            <li>
              <strong>Enterprises with strict security and Cisco infrastructure:</strong>{" "}
              Webex wins with its enterprise-grade security, controls, and device
              integration.
            </li>
            <li>
              <strong>Hybrid organisations with a mix of small teams and external events:</strong>{" "}
              A Zoom + Webex or Zoom + GoTo combination can work, depending on whether
              your bias is toward webinars or enterprise controls.
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
              <h3 className="text-lg font-semibold">GoTo Meeting</h3>
              <p className="text-sm text-slate-700">
                Best for teams that schedule predictable business meetings and rely on
                dial-in and the broader GoTo ecosystem.
              </p>
              <p className="mt-2 text-sm font-semibold text-amber-700">
                Ideal for: Traditional SMBs, service firms, and GoTo-centric stacks.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Zoom</h3>
              <p className="text-sm text-slate-700">
                Best when you want highly reliable video meetings and webinars with an
                interface most people already know.
              </p>
              <p className="mt-2 text-sm font-semibold text-sky-700">
                Ideal for: Startups, SMEs, agencies, and teams running frequent webinars.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Webex</h3>
              <p className="text-sm text-slate-700">
                Best when compliance, security, and Cisco device integration are
                non-negotiable.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: Enterprises, regulated industries, and Cisco-heavy IT
                environments.
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
            <ArrowLeft className="h-4 w-4" /> Back to Tools hub
          </Link>
        </div>
      </div>
    </main>
  );
}
