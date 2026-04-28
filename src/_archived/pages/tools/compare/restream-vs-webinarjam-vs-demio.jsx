import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  Cast,
  Crown,
  ArrowLeft,
  Mic,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "restream vs webinarjam vs demio";
const canonical = buildCanonical(
  "/tools/compare/restream-vs-webinarjam-vs-demio"
);

const brandMeta = {
  restream: {
    gradient: "from-orange-500 via-amber-500 to-rose-500",
    badge: "bg-orange-100 text-orange-900",
    logo: "https://logo.clearbit.com/restream.io",
  },
  webinarjam: {
    gradient: "from-rose-500 via-pink-500 to-red-600",
    badge: "bg-rose-100 text-rose-900",
    logo: "https://logo.clearbit.com/webinarjam.com",
  },
  demio: {
    gradient: "from-emerald-500 via-teal-500 to-green-600",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/demio.com",
  },
};

const contenders = [
  {
    key: "restream",
    name: "Restream",
    blurb:
      "Multistreaming with a browser-based studio to reach multiple social channels at once.",
    url: "https://restream.io",
  },
  {
    key: "webinarjam",
    name: "WebinarJam",
    blurb:
      "Webinar platform with registration funnels, email reminders, and automated webinars.",
    url: "https://home.webinarjam.com",
  },
  {
    key: "demio",
    name: "Demio",
    blurb:
      "Browser-based webinars with strong attendee UX, engagement tools, and replays.",
    url: "https://demio.com",
  },
];

const comparisonRows = [
  {
    label: "Primary use",
    restream: "Multistreaming live to social (YouTube, LinkedIn, Facebook, etc.).",
    webinarjam: "Marketing webinars with funnels, automation, and offers.",
    demio: "Live and automated webinars with a clean attendee experience.",
  },
  {
    label: "Registration & email",
    restream: "Limited; focus is on streaming to existing audiences.",
    webinarjam:
      "Built-in registration pages, reminders, replays, and follow-up emails.",
    demio:
      "Registration pages, reminders, replays, and join links designed for simplicity.",
  },
  {
    label: "Engagement",
    restream: "Unified chat across platforms, simple Q&A overlays.",
    webinarjam: "Polls, offers, chat, handouts, and urgency-driven CTAs.",
    demio: "Polls, handouts, featured CTAs, and Q&A tools.",
  },
  {
    label: "Streaming reach",
    restream: "Multi-channel social streaming to maximise reach.",
    webinarjam: "Single webinar room; can stream to YouTube with add-ons.",
    demio: "Single webinar destination; focused on experience, not reach.",
  },
  {
    label: "Automation & replays",
    restream:
      "Recordings and restreams; not a full evergreen webinar funnel tool.",
    webinarjam: "Evergreen sessions, scheduled replays, and automated sequences.",
    demio: "Automated sessions and replays with simple scheduling.",
  },
  {
    label: "Best for",
    restream: "Audience growth and brand presence across social.",
    webinarjam: "Lead gen and sales webinars with structured funnels.",
    demio: "Lean webinar teams that want a clean host/attendee UX.",
  },
];

const scoreboard = [
  {
    label: "Multi-channel reach",
    restream: 9.6,
    webinarjam: 7.2,
    demio: 7.1,
  },
  {
    label: "Webinar funnels",
    restream: 7.4,
    webinarjam: 9.3,
    demio: 8.8,
  },
  {
    label: "Ease of setup",
    restream: 9.0,
    webinarjam: 8.0,
    demio: 9.2,
  },
  {
    label: "Engagement tools",
    restream: 8.0,
    webinarjam: 9.1,
    demio: 8.7,
  },
  {
    label: "Value for marketers",
    restream: 9.0,
    webinarjam: 8.8,
    demio: 8.6,
  },
];

const avg = (tool) =>
  (
    scoreboard.reduce((sum, row) => sum + (row[tool] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  restream: avg("restream"),
  webinarjam: avg("webinarjam"),
  demio: avg("demio"),
};

const overallWinner =
  Math.max(
    parseFloat(averages.restream),
    parseFloat(averages.webinarjam),
    parseFloat(averages.demio)
  ) === parseFloat(averages.restream)
    ? "Restream"
    : Math.max(
        parseFloat(averages.webinarjam),
        parseFloat(averages.demio)
      ) === parseFloat(averages.webinarjam)
    ? "WebinarJam"
    : "Demio";

const featureBullets = {
  streaming: [
    "Restream: Built to multistream to multiple platforms at once from a browser-based studio or encoder.",
    "WebinarJam: Primarily a webinar room; can simulcast with add-ons, but focus is on the funnel.",
    "Demio: Focused on a single, polished webinar room rather than multi-channel streaming.",
  ],
  funnels: [
    "Restream: You will typically plug into separate landing pages, CRMs, and email tools for funnels.",
    "WebinarJam: All-in-one webinar funnel—registration, reminders, live/evergreen sessions, and post-webinar follow-ups.",
    "Demio: Simple but effective registration pages, reminders, and replay flows—less complex than WebinarJam.",
  ],
  engagement: [
    "Restream: Unified cross-platform chat, basic overlays and comments from social platforms.",
    "WebinarJam: Advanced engagement stack with polls, offers, handouts, and urgency elements for selling.",
    "Demio: Modern, clutter-free engagement (polls, CTAs, handouts) that feels good for attendees and hosts.",
  ],
};

const pricingTable = [
  {
    plan: "Restream Standard/Professional",
    monthly: "From around ~$19–$49/mo depending on features",
    focus: "Multistreaming limits, destinations, and branding",
    notes:
      "Great entry for creators and brands that want to go live on multiple platforms without complex webinar funnels.",
  },
  {
    plan: "WebinarJam Basic/Professional",
    monthly: "Billed annually; effective from roughly ~$39+/mo",
    focus: "Attendee caps, number of webinars, and automation",
    notes:
      "Strong value if you run consistent lead-gen webinars and want built-in registration emails and replays.",
  },
  {
    plan: "Demio Starter/Growth",
    monthly: "From roughly ~$35–$69/mo (often billed annually)",
    focus: "Room size, event types (live/automated), and features",
    notes:
      "Well-priced for teams that value UX and engagement but do not need complex evergreen logic.",
  },
];

const prosCons = {
  restream: {
    pros: [
      "Excellent multi-channel live reach across major social platforms.",
      "Browser-based studio makes it easy for non-technical hosts to go live.",
      "Unified chat across platforms helps you monitor comments in one place.",
    ],
    cons: [
      "No native webinar registration funnels or nurture emails.",
      "Less suited for gated, high-intent lead-gen webinars without external tools.",
      "Analytics and attendee data are tied to each platform rather than one unified webinar list.",
    ],
  },
  webinarjam: {
    pros: [
      "Purpose-built webinar funnels, including registration pages and automated reminders.",
      "Evergreen and automated webinar options for predictable lead generation.",
      "Rich engagement toolkit (polls, offers, urgency timers, handouts) tuned for selling.",
    ],
    cons: [
      "Interface and design feel more “funnel marketer” than modern SaaS in some areas.",
      "Annual billing and attendee caps may feel heavy for small, occasional use.",
      "Less focus on multi-channel reach; it is more of a classic webinar room.",
    ],
  },
  demio: {
    pros: [
      "Clean, modern webinar experience for both hosts and attendees.",
      "Strong engagement features without overwhelming the interface.",
      "Simple setup for live and automated sessions, ideal for lean teams.",
    ],
    cons: [
      "Funnels and automation are less advanced than WebinarJam’s marketing focus.",
      "No native multistreaming to multiple social platforms.",
      "Pricing can climb as attendee numbers and event volume increase.",
    ],
  },
};

const faqs = [
  {
    q: `Who wins overall in ${YEAR}?`,
    a: "Restream wins if your priority is multi-channel reach and audience growth across social. WebinarJam wins if you care most about lead-gen webinar funnels and automation. Demio wins if you want a clean, modern webinar experience with solid engagement for lean teams.",
  },
  {
    q: "Which should I pick for lead generation?",
    a: "Pick WebinarJam if you want the most built-in funnel features (registration, reminders, replays, urgency). Pick Demio if you want a simpler setup that still handles registration and follow-up without feeling heavy.",
  },
  {
    q: "Which is best for creators and brand awareness?",
    a: "Restream is the best fit for creators, founders, and brands who want regular live shows or announcements broadcast across YouTube, LinkedIn, Facebook, and more at the same time.",
  },
  {
    q: "Can I combine Restream with WebinarJam or Demio?",
    a: "Yes. Many teams run gated webinars on WebinarJam or Demio while using Restream separately for public live streams, driving social audiences back to their registration funnels.",
  },
  {
    q: "Do I need technical skills to use these tools?",
    a: "Not really. All three are designed for non-technical marketers and creators. Restream and Demio are particularly straightforward. WebinarJam requires more upfront setup because of its funnel options.",
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
  const meta =
    brandMeta[lowered] || {
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

export default function RestreamVsWebinarJamVsDemioPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Restream vs WebinarJam vs Demio – live streaming vs webinars (${YEAR})`}
        description="Compare Restream, WebinarJam, and Demio on multistreaming reach, webinar funnels, engagement tools, and pricing so you can choose the right stack for live events."
        canonical={canonical}
        keywords={`${primaryKeyword}, webinar vs multistreaming comparison, webinar software comparison`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Category + H1 */}
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-700">
          Live streaming & webinars
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Restream vs WebinarJam vs Demio ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Restream maximizes reach across social channels. WebinarJam and Demio
          excel at registration, reminders, and webinar engagement. Choose based
          on whether you prioritise broad reach, gated funnels, or a clean
          webinar experience.
        </p>

        {/* Top contender cards */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {contenders.map((item) => (
            <a
              key={item.key}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
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
            </a>
          ))}
        </div>

        {/* Quick verdict + overall winner */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-orange-100 bg-orange-50 px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-orange-900">
              <Sparkles className="h-5 w-5" />
              <p className="text-lg font-semibold">Quick verdict</p>
            </div>
            <p className="mt-2 text-slate-800">
              Use <strong>Restream</strong> if your primary goal is to reach as
              many people as possible across social channels. Choose{" "}
              <strong>WebinarJam</strong> when you want classic marketing
              webinars with funnels and automation. Pick <strong>Demio</strong>{" "}
              for lean teams that care about a modern, attendee-friendly webinar
              experience with solid engagement.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Crown className="h-4 w-4 text-orange-600" /> Overall scoreboard
              winner: {overallWinner}{" "}
              <span className="text-xs text-slate-600">
                (avg:{" "}
                {overallWinner === "Restream"
                  ? averages.restream
                  : overallWinner === "WebinarJam"
                  ? averages.webinarjam
                  : averages.demio}
                /10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              In real stacks, teams often pair Restream for public shows with a
              dedicated webinar platform (WebinarJam or Demio) for gated,
              high-intent events.
            </p>
          </div>
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
                  <th className="px-4 py-3">Restream</th>
                  <th className="px-4 py-3">WebinarJam</th>
                  <th className="px-4 py-3">Demio</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr
                    key={row.label}
                    className="odd:bg-white even:bg-slate-50/50 align-top"
                  >
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">
                      {row.restream}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.webinarjam}
                    </td>
                    <td className="px-4 py-3 text-slate-700">{row.demio}</td>
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
                  <th className="px-4 py-3">Restream</th>
                  <th className="px-4 py-3">WebinarJam</th>
                  <th className="px-4 py-3">Demio</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const winnerValue = Math.max(
                    row.restream,
                    row.webinarjam,
                    row.demio
                  );
                  const winner =
                    winnerValue === row.restream
                      ? "Restream"
                      : winnerValue === row.webinarjam
                      ? "WebinarJam"
                      : "Demio";
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
                          winner === "Restream"
                            ? "font-semibold text-orange-800"
                            : "text-slate-700"
                        }`}
                      >
                        {row.restream}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "WebinarJam"
                            ? "font-semibold text-rose-800"
                            : "text-slate-700"
                        }`}
                      >
                        {row.webinarjam}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Demio"
                            ? "font-semibold text-emerald-800"
                            : "text-slate-700"
                        }`}
                      >
                        {row.demio}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">
                        {winner}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-orange-50 via-rose-50 to-emerald-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-orange-800">
                    {averages.restream}
                  </td>
                  <td className="px-4 py-3 font-semibold text-rose-800">
                    {averages.webinarjam}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.demio}
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
            <Gauge className="h-6 w-6 text-orange-600" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Cast className="h-5 w-5 text-orange-600" /> Streaming & reach
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.streaming.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Layers className="h-5 w-5 text-rose-600" /> Funnels & automation
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.funnels.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Mic className="h-5 w-5 text-emerald-600" /> Engagement & attendee
              experience
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.engagement.map((item) => (
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
                  <th className="px-4 py-3">Approx. monthly</th>
                  <th className="px-4 py-3">Focus</th>
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
                    <td className="px-4 py-3 text-slate-700">{row.focus}</td>
                    <td className="px-4 py-3 text-slate-700">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600">
            Pricing, attendee caps, and features change frequently. Use this as
            directional guidance and always confirm current plans on each
            vendor’s pricing page before committing.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Restream:</strong> Feels like a live streaming studio. If
              you have used tools like StreamYard or OBS, it will feel familiar,
              but its browser studio keeps complexity lower.
            </li>
            <li>
              <strong>WebinarJam:</strong> Built around marketers and funnel
              users. There are more options to learn, but you get control over
              registration, reminders, and sales flows.
            </li>
            <li>
              <strong>Demio:</strong> Very clean, modern UI. Easy to spin up
              webinars without feeling like you are configuring a full funnel
              builder.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Top-of-funnel audience growth:</strong> Restream wins by
              broadcasting to multiple social platforms and growing awareness.
            </li>
            <li>
              <strong>Lead-gen and sales webinars:</strong> WebinarJam wins with
              its built-in funnels, replays, and sales-focused engagement
              features.
            </li>
            <li>
              <strong>Customer education and onboarding:</strong> Demio wins for
              hosting polished, recurring sessions with a great attendee
              experience and simple automation.
            </li>
            <li>
              <strong>Hybrid strategy:</strong> Use Restream to drive awareness
              and nurture your audience, then invite them into gated webinars on
              WebinarJam or Demio to capture leads and revenue.
            </li>
          </ul>
        </section>

        {/* Pros & Cons */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        {/* FAQ */}
        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">
            FAQ: Restream vs WebinarJam vs Demio
          </h2>
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
        <div className="mt-10 flex items-center gap-3">
          <Link
            to="/tools"
            className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-orange-700 shadow-sm ring-1 ring-orange-100 hover:bg-orange-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
