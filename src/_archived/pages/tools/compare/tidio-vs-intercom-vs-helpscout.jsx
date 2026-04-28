import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  ClipboardList,
  Crown,
  ArrowLeft,
  Workflow,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "tidio vs intercom vs helpscout";
const canonical = buildCanonical("/tools/compare/tidio-vs-intercom-vs-helpscout");

const brandMeta = {
  tidio: {
    gradient: "from-blue-500 via-indigo-500 to-sky-500",
    badge: "bg-blue-100 text-blue-900",
    logo: "https://logo.clearbit.com/tidio.com",
  },
  intercom: {
    gradient: "from-slate-800 via-slate-900 to-black",
    badge: "bg-slate-200 text-slate-900",
    logo: "https://logo.clearbit.com/intercom.com",
  },
  helpscout: {
    gradient: "from-emerald-500 via-teal-500 to-blue-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/helpscout.com",
  },
};

const contenders = [
  {
    key: "tidio",
    name: "Tidio",
    blurb: "Live chat + AI chatbots for SMB sales and support.",
    url: "https://www.tidio.com",
  },
  {
    key: "intercom",
    name: "Intercom",
    blurb: "Enterprise-grade messenger, bots, and proactive support.",
    url: "https://www.intercom.com",
  },
  {
    key: "helpscout",
    name: "HelpScout",
    blurb: "Email-first help desk with chat and docs for support teams.",
    url: "https://www.helpscout.com",
  },
];

const comparisonRows = [
  {
    label: "Best for",
    tidio: "SMBs needing quick chatbots + chat.",
    intercom: "Product-led companies with complex support and sales motions.",
    helpscout: "Support teams that are email-first and need chat/docs.",
  },
  {
    label: "AI and bots",
    tidio: "Fast AI replies and chatbot templates.",
    intercom: "Fin AI agent, advanced bots, and proactive messaging.",
    helpscout: "Beacon chat + automation via workflows; AI add-ons emerging.",
  },
  {
    label: "Channels",
    tidio: "Chat, email handoff, social DMs.",
    intercom: "Messenger, email, product tours, proactive popups.",
    helpscout: "Email, chat (Beacon), docs, light in-app via widget.",
  },
  {
    label: "Support depth",
    tidio: "Great starter ticketing plus chatbots.",
    intercom: "Advanced routing, SLAs, product data, and targeting.",
    helpscout: "Robust inbox, collision detection, docs, satisfaction reports.",
  },
  {
    label: "Pricing feel",
    tidio: "Freemium and SMB-friendly tiers.",
    intercom: "Premium; priced for growth/enterprise teams.",
    helpscout: "Predictable per-seat with strong email support focus.",
  },
];

const scoreboard = [
  { label: "Ease of setup", scores: { tidio: 9.3, intercom: 8.0, helpscout: 8.8 } },
  { label: "Automation/AI", scores: { tidio: 9.0, intercom: 9.5, helpscout: 8.0 } },
  { label: "Support workflows", scores: { tidio: 8.3, intercom: 9.3, helpscout: 9.0 } },
  { label: "Value", scores: { tidio: 9.1, intercom: 7.6, helpscout: 8.7 } },
  { label: "Proactive messaging", scores: { tidio: 8.4, intercom: 9.6, helpscout: 7.8 } },
];

const avg = (key) => {
  const total = scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0);
  return (total / scoreboard.length).toFixed(1);
};
const averages = {
  tidio: avg("tidio"),
  intercom: avg("intercom"),
  helpscout: avg("helpscout"),
};
const overallWinner = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const pricingTable = [
  {
    plan: "Tidio Starter",
    monthly: "From ~US$29/mo",
    annual: "Lower annually",
    limits: "AI replies, bots, ticketing",
    notes: "Great for SMB support/sales blends.",
  },
  {
    plan: "Intercom Essential",
    monthly: "From ~US$39+/seat/mo",
    annual: "Lower annually",
    limits: "Bots, messenger, proactive outreach",
    notes: "Best for PLG teams needing targeting and data.",
  },
  {
    plan: "HelpScout Standard",
    monthly: "From ~US$25/user/mo",
    annual: "Lower annually",
    limits: "Shared inbox, Beacon chat, docs, reporting",
    notes: "Best for support teams that are email-first.",
  },
];

const faqs = [
  {
    q: `Is Tidio better than Intercom or HelpScout in ${YEAR}?`,
    a: "Tidio is best for SMBs wanting quick AI chatbots and live chat. Intercom is strongest for product-led companies needing proactive, data-driven support. HelpScout is ideal for email-first support with clean chat/docs.",
  },
  {
    q: "Which is best for enterprise or PLG?",
    a: "Intercom. It offers deep targeting, product tours, bots, SLAs, and data-driven workflows.",
  },
  {
    q: "Which is most affordable?",
    a: "Tidio has the friendliest entry price; HelpScout is predictable for email-first support. Intercom is premium.",
  },
  {
    q: "Which is simplest for support teams?",
    a: "HelpScout. It feels like Gmail with collaboration, plus chat and docs in one place.",
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
  tidio: {
    pros: [
      "Fast AI chatbots",
      "Sales + support in one widget",
      "Affordable tiers",
      "Clean UI and mobile apps",
    ],
    cons: [
      "Reporting is lighter",
      "Advanced routing limited vs Intercom",
      "Integrations list is shorter than enterprise tools",
    ],
  },
  intercom: {
    pros: [
      "Deep bots and proactive messaging",
      "Product + user data targeting",
      "Robust workflows and SLAs",
      "Large integration ecosystem",
    ],
    cons: [
      "Premium pricing",
      "Setup requires data plumbing",
      "Overkill for small teams needing basics",
    ],
  },
  helpscout: {
    pros: [
      "Email-first experience with collision detection",
      "Beacon chat + Docs in one",
      "Predictable pricing",
      "Great UX for support teams",
    ],
    cons: [
      "Bots/AI are lighter than Intercom/Tidio",
      "Proactive messaging limited",
      "Fewer sales-focused features",
    ],
  },
};

const useCaseInsights = {
  byTeamSize: [
    "Solo founders / micro-SMBs: Tidio is usually easiest to adopt thanks to a simple widget, AI templates, and freemium tiers.",
    "Lean product/support teams: HelpScout and Tidio both work, but HelpScout wins if most conversations are still email-based.",
    "Larger PLG or enterprise teams: Intercom shines once you care about SLAs, user segmentation, and end-to-end product data.",
  ],
  byPrimaryGoal: [
    "Automate repetitive questions and lead capture: Tidio’s AI replies and chatbots give you fast coverage without a huge ops investment.",
    "Run product-led growth playbooks: Intercom is built to trigger messages off events, segments, and in-app behaviours.",
    "Create a calm, email-first help desk: HelpScout feels like Gmail with collaboration, plus Beacon chat and Docs to deflect tickets.",
  ],
  byStackFit: [
    "Simple marketing site or ecommerce store: Tidio embeds quickly and provides AI + live chat in a single widget.",
    "SaaS with in-app messaging and tours: Intercom integrates with your product data, events, and user profiles extremely well.",
    "Teams graduating from shared inboxes: HelpScout is a natural upgrade from regular email tools without overwhelming the team.",
  ],
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

export default function TidioVsIntercomVsHelpScoutPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Tidio vs Intercom vs HelpScout – Which to choose? (${YEAR})`}
        description="Detailed comparison of Tidio, Intercom, and HelpScout across AI, proactive messaging, support workflows, pricing, and ideal use cases for modern support teams."
        canonical={canonical}
        keywords={`${primaryKeyword}, customer support platforms, live chat tools, help desk software, AI chatbots`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
          Customer support
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Tidio vs Intercom vs HelpScout – Honest Comparison ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Tidio is the fastest, most affordable way to add AI chatbots and live
          chat to your site. Intercom is the powerhouse for product-led support
          and sales, with deep data and proactive, event-driven messaging.
          HelpScout is the email-first help desk with built-in chat and Docs,
          ideal if your team still lives primarily in the inbox. Below is a
          structured breakdown to help you choose the right platform for your
          support strategy and stage.
        </p>

        {/* Quick Verdict + Highlights */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="space-y-3 rounded-3xl bg-blue-50/90 p-6 ring-1 ring-blue-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-blue-800">
              <Sparkles className="h-5 w-5" /> Quick Verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>Tidio</strong> for fast AI chatbots and live chat
              on a budget. Choose <strong>Intercom</strong> for
              enterprise-grade, data-driven messaging and support across the
              full customer lifecycle. Choose <strong>HelpScout</strong> if your
              team is email-first and wants chat/Docs without heavy complexity
              or orchestration work.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-blue-800">
              <Crown className="h-4 w-4" /> Overall scoreboard leader:{" "}
              {overallWinner.charAt(0).toUpperCase() + overallWinner.slice(1)}{" "}
              <span className="text-xs font-medium text-blue-700">
                (avg: {averages[overallWinner]}/10)
              </span>
            </div>
          </div>

          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <ShieldCheck className="h-5 w-5 text-slate-800" /> Best for
              proactive + enterprise
            </div>
            <p className="text-sm text-slate-700">
              Intercom’s data-driven messenger, bots, and tours excel for PLG
              and enterprise support motions where you need rich targeting and
              SLAs.
            </p>
          </div>

          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Workflow className="h-5 w-5 text-emerald-700" /> Best
              email-first experience
            </div>
            <p className="text-sm text-slate-700">
              HelpScout keeps support simple with a Gmail-like inbox, Beacon
              chat, and Docs in one place—great for teams moving off regular
              email.
            </p>
          </div>
        </div>

        {/* Contenders */}
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
            <Layers className="h-6 w-6 text-blue-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[640px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Tidio</th>
                  <th className="px-4 py-3">Intercom</th>
                  <th className="px-4 py-3">HelpScout</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr
                    key={row.label}
                    className="odd:bg-white even:bg-slate-50/40"
                  >
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.tidio}</td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.intercom}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.helpscout}
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
            <Gauge className="h-6 w-6 text-indigo-600" /> Scoreboard (1–10)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[640px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Tidio</th>
                  <th className="px-4 py-3">Intercom</th>
                  <th className="px-4 py-3">HelpScout</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const entries = Object.entries(row.scores);
                  const winnerKey = entries.sort((a, b) => b[1] - a[1])[0][0];
                  return (
                    <tr
                      key={row.label}
                      className="odd:bg-white even:bg-slate-50/40"
                    >
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "tidio"
                            ? "font-semibold text-blue-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.tidio}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "intercom"
                            ? "font-semibold text-slate-900"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.intercom}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "helpscout"
                            ? "font-semibold text-emerald-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.helpscout}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-blue-50/70">
                  <th className="bg-blue-100 px-4 py-3 font-semibold text-slate-900">
                    Average
                  </th>
                  <td className="px-4 py-3 font-semibold text-blue-800">
                    {averages.tidio}
                  </td>
                  <td className="px-4 py-3 font-semibold text-slate-900">
                    {averages.intercom}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.helpscout}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Which tool should you pick */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Zap className="h-6 w-6 text-amber-500" />
            Which tool fits your support motion best?
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">
                Tidio – AI-first for SMBs
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-700">
                <li>Best when you want to automate FAQs and lead capture quickly.</li>
                <li>Good fit for small teams that cannot spend months on setup.</li>
                <li>Ideal if your primary channel is website chat + basic email handoff.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">
                Intercom – PLG & enterprise engine
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-700">
                <li>Best if you have a product with active in-app usage and events.</li>
                <li>Great fit for PLG funnels, onboarding tours, and upsell nudges.</li>
                <li>Worth it when you can invest in data, routing, and experimentation.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">
                HelpScout – Calm, email-first help desk
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-700">
                <li>Perfect if most conversations still start in email.</li>
                <li>Good for teams that want structure, not a full-blown CX platform.</li>
                <li>Docs + Beacon help you deflect and handle common questions.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pros & Cons Cards */}
        <section className="mt-10 space-y-6">
          <h2 className="text-2xl font-bold">Pros & cons at a glance</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {Object.entries(prosCons).map(([key, value]) => (
              <div
                key={key}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <LogoBadge
                    name={key.charAt(0).toUpperCase() + key.slice(1)}
                  />
                </div>
                <div className="mt-3">
                  <p className="text-sm font-semibold text-emerald-700">Pros</p>
                  <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-700">
                    {value.pros.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-3">
                  <p className="text-sm font-semibold text-rose-700">Cons</p>
                  <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-700">
                    {value.cons.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How they work in practice */}
        <section className="mt-10 space-y-6">
          <h2 className="text-2xl font-bold">How they work in real teams</h2>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-slate-900">
              By team size and maturity
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {useCaseInsights.byTeamSize.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-slate-900">
              By primary goal
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {useCaseInsights.byPrimaryGoal.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-slate-900">
              By stack and integrations
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {useCaseInsights.byStackFit.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing snapshot */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <ClipboardList className="h-6 w-6 text-blue-600" /> Pricing snapshot
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[640px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Monthly</th>
                  <th className="px-4 py-3">Annual</th>
                  <th className="px-4 py-3">Limits</th>
                  <th className="px-4 py-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {pricingTable.map((row) => (
                  <tr
                    key={row.plan}
                    className="odd:bg-white even:bg-slate-50/40"
                  >
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
          <p className="text-xs text-slate-500">
            Pricing is indicative and may change. Always confirm current pricing
            and feature limits on each vendor’s official pricing page before
            committing.
          </p>
        </section>

        {/* Shared ProsConsSection component */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        {/* Final verdict */}
        <section className="mt-12 space-y-4 rounded-3xl bg-slate-900 p-6 text-white shadow-sm">
          <h2 className="text-2xl font-bold">Final verdict</h2>
          <ul className="space-y-2 text-sm text-slate-100">
            <li>
              <strong>Tidio</strong> is ideal if you want to modernize a simple
              website or store quickly with AI chatbots and live chat, without
              taking on a complex CX platform.
            </li>
            <li>
              <strong>Intercom</strong> makes sense when your product has enough
              traffic and in-app usage to fully leverage event-based messaging,
              tours, and sophisticated routing.
            </li>
            <li>
              <strong>HelpScout</strong> is the best choice if you are upgrading
              from shared inboxes and want a calm, email-first help desk with
              built-in Docs and a lightweight chat widget.
            </li>
          </ul>
        </section>

        {/* FAQs */}
        <section className="mt-10 space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">FAQs</h2>
          <div className="space-y-2 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-slate-100 bg-slate-50/60 p-4 open:bg-slate-50"
              >
                <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-slate-900 group-open:text-blue-800">
                  {item.q}
                  <span className="text-xs text-slate-500 group-open:hidden">
                    +
                  </span>
                  <span className="hidden text-xs text-slate-500 group-open:inline">
                    –
                  </span>
                </summary>
                <p className="mt-2 text-sm text-slate-700">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Back link */}
        <div className="mt-10 flex items-center gap-3 text-sm font-semibold text-sky-700">
          <ArrowLeft className="h-4 w-4" />
          <Link to="/tools">Back to Tools Hub</Link>
        </div>
      </div>
    </main>
  );
}
