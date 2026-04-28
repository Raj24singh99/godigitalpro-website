import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  ClipboardList,
  Crown,
  ArrowLeft,
  Workflow,
  MessageSquare,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "tidio vs crisp vs livechat";
const canonical = buildCanonical("/tools/compare/tidio-vs-crisp-vs-livechat");

const brandMeta = {
  tidio: {
    gradient: "from-blue-500 via-indigo-500 to-sky-500",
    badge: "bg-blue-100 text-blue-900",
    logo: "https://logo.clearbit.com/tidio.com",
  },
  crisp: {
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/crisp.chat",
  },
  livechat: {
    gradient: "from-orange-500 via-amber-500 to-red-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/livechat.com",
  },
};

const contenders = [
  {
    key: "tidio",
    name: "Tidio",
    blurb: "Live chat + chatbots with AI support for SMBs.",
    url: "https://www.tidio.com",
  },
  {
    key: "crisp",
    name: "Crisp",
    blurb: "Multichannel inbox with chat, status, and automation.",
    url: "https://crisp.chat",
  },
  {
    key: "livechat",
    name: "LiveChat",
    blurb: "Established live chat with routing, reporting, and apps.",
    url: "https://www.livechat.com",
  },
];

const comparisonRows = [
  {
    label: "Best for",
    tidio: "SMBs needing live chat plus AI chatbots fast.",
    crisp: "Startups wanting shared inbox with chat + email.",
    livechat: "Support teams needing mature routing and reporting.",
  },
  {
    label: "AI/automation",
    tidio: "AI chatbots and autoresponders for FAQs/sales.",
    crisp: "Playbooks and status, drip campaigns, triggers.",
    livechat: "Rules, routing, ticket creation with add-ons.",
  },
  {
    label: "Channels",
    tidio: "Web chat, email handoff, Messenger, Instagram.",
    crisp: "Chat, email, WhatsApp, Messenger, Instagram.",
    livechat: "Chat first; deeper ticketing via HelpDesk add-on.",
  },
  {
    label: "Support depth",
    tidio: "Great for sales/support blends; limited ITSM.",
    crisp: "Shared inbox + bots for product/support teams.",
    livechat: "Robust chat routing, transcripts, analytics.",
  },
  {
    label: "Pricing feel",
    tidio: "Freemium, friendly to SMBs and agencies.",
    crisp: "Affordable with generous base; paid features add up.",
    livechat: "Priced higher but predictable seat tiers.",
  },
];

const scoreboard = [
  { label: "Ease of setup", scores: { tidio: 9.3, crisp: 8.7, livechat: 8.4 } },
  { label: "Automation/AI", scores: { tidio: 9.0, crisp: 8.5, livechat: 8.2 } },
  {
    label: "Channel coverage",
    scores: { tidio: 8.6, crisp: 9.0, livechat: 8.1 },
  },
  { label: "Reporting", scores: { tidio: 8.2, crisp: 8.0, livechat: 8.6 } },
  { label: "Value", scores: { tidio: 9.0, crisp: 9.1, livechat: 8.0 } },
];

const avg = (key) => {
  const total = scoreboard.reduce(
    (sum, row) => sum + (row.scores[key] || 0),
    0
  );
  return (total / scoreboard.length).toFixed(1);
};
const averages = {
  tidio: avg("tidio"),
  crisp: avg("crisp"),
  livechat: avg("livechat"),
};
const overallWinner = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const pricingTable = [
  {
    plan: "Tidio Starter",
    monthly: "From ~US$29/mo",
    annual: "Lower annually",
    limits: "AI replies, chatbots, ticketing",
    notes: "Great blend of bots + human chat for small teams.",
  },
  {
    plan: "Crisp Pro",
    monthly: "From ~US$25/mo",
    annual: "Lower annually",
    limits: "Shared inbox, triggers, statuses, canned replies",
    notes: "Best value if you want multichannel inbox + chat.",
  },
  {
    plan: "LiveChat Team",
    monthly: "From ~US$25/agent/mo",
    annual: "Lower annually",
    limits: "Advanced routing, reports, staffing",
    notes: "Solid for established support teams needing analytics.",
  },
];

const faqs = [
  {
    q: `Is Tidio better than Crisp or LiveChat in ${YEAR}?`,
    a: "Tidio wins for fast AI chatbot setup and sales + support blends. Crisp wins for multichannel inbox with great value. LiveChat wins for mature routing, reporting, and add-on ecosystem.",
  },
  {
    q: "Which is best for multichannel inbox?",
    a: "Crisp. It unifies chat, email, and social channels into one shared inbox with automation.",
  },
  {
    q: "Which is best for AI chatbots?",
    a: "Tidio. Its AI replies and bot builder are beginner-friendly and tuned for support and sales.",
  },
  {
    q: "Which is best for established support teams?",
    a: "LiveChat. It has strong routing, staffing, and reporting, and pairs with HelpDesk for tickets.",
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
      "Fast AI chatbot setup",
      "Sales + support flows",
      "Good value for SMBs",
      "Clean widget and mobile apps",
    ],
    cons: [
      "Analytics lighter than enterprise suites",
      "Advanced routing is basic vs LiveChat",
      "Integrations library is focused on popular apps",
    ],
  },
  crisp: {
    pros: [
      "Unified inbox (chat, email, social)",
      "Affordable pricing",
      "Triggers, drip messages, and bots",
      "Status and co-browsing options",
    ],
    cons: [
      "Reporting is light",
      "Voice/video requires add-ons",
      "Some enterprise features missing",
    ],
  },
  livechat: {
    pros: [
      "Mature live chat with routing",
      "Good staffing and analytics",
      "Marketplace of apps and add-ons",
      "Reliable transcripts and history",
    ],
    cons: [
      "Priced higher per agent",
      "Chat-first; tickets via HelpDesk add-on",
      "AI/bot features are more limited natively",
    ],
  },
};

const useCaseInsights = {
  byTeamSize: [
    "Solo founders / micro-SMBs: Tidio or Crisp are easier to start with, thanks to freemium tiers and low admin overhead.",
    "Lean product/support teams: Crisp’s shared inbox and multichannel routing reduce context switching across email + chat + social.",
    "Larger support orgs: LiveChat makes more sense when you care about SLAs, staffing, and reporting across multiple agents.",
  ],
  byPrimaryGoal: [
    "Increase first response speed with AI: Tidio’s AI answers and chatbot flows can cover FAQs, lead qualification, and basic triage.",
    "Centralize all conversations: Crisp is designed as a multichannel inbox where chat, email, and social messages live together.",
    "Standardize support quality: LiveChat focuses on routing, concurrency, and analytics so managers can coach and forecast workload.",
  ],
  byStackFit: [
    "Simple website + Shopify/Woo: Any of the three embed quickly; Tidio and Crisp are often fastest to wire up with common CMSs.",
    "Existing help desk: LiveChat pairs well with HelpDesk; Crisp and Tidio can hand off to external ticket tools via integrations.",
    "Heavier B2B stack: Crisp or LiveChat often integrate cleanly with CRMs and status tooling used in SaaS environments.",
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

export default function TidioVsCrispVsLiveChatPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Tidio vs Crisp vs LiveChat – Which is best? (${YEAR})`}
        description="Compare Tidio, Crisp, and LiveChat on AI, automation, channels, reporting, pricing, and which live chat tool best fits your support team."
        canonical={canonical}
        keywords={`${primaryKeyword}, live chat tools, customer support software, ai chatbots, multichannel inbox`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
          Live chat & support
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Tidio vs Crisp vs LiveChat – Honest Comparison ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Tidio offers fast AI chatbots plus live agents, great for SMBs wanting
          to automate FAQs and qualification. Crisp unifies chat, email, and
          social in a multichannel inbox with strong value for startups and SaaS
          teams. LiveChat is the mature option with routing, analytics, and an
          app ecosystem for established support teams that care about staffing
          and SLAs. Below is a structured breakdown to help you decide.
        </p>

        {/* Quick verdict & highlights */}
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <div className="space-y-3 rounded-3xl bg-blue-50/90 p-6 ring-1 ring-blue-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-blue-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>Tidio</strong> for AI chatbots plus live chat in
              one lightweight package. Choose <strong>Crisp</strong> for a
              multichannel inbox that centralizes chat, email, and social DMs.
              Choose <strong>LiveChat</strong> for robust routing, staffing, and
              reporting if you are running a more mature support org.
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
              <MessageSquare className="h-5 w-5 text-blue-700" /> Best
              AI-first chat
            </div>
            <p className="text-sm text-slate-700">
              Tidio’s AI replies and chatbot templates make automation simple
              for support and sales teams without requiring an in-house ops
              specialist.
            </p>
          </div>

          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Workflow className="h-5 w-5 text-emerald-700" /> Best
              multichannel inbox
            </div>
            <p className="text-sm text-slate-700">
              Crisp consolidates chat, email, and social DMs into one shared
              inbox so teams do not juggle multiple tools or tabs.
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
            <Layers className="h-6 w-6 text-blue-600" /> Side-by-side
            comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[640px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Tidio</th>
                  <th className="px-4 py-3">Crisp</th>
                  <th className="px-4 py-3">LiveChat</th>
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
                    <td className="px-4 py-3 text-slate-700">{row.crisp}</td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.livechat}
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
                  <th className="px-4 py-3">Crisp</th>
                  <th className="px-4 py-3">LiveChat</th>
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
                          winnerKey === "crisp"
                            ? "font-semibold text-emerald-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.crisp}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "livechat"
                            ? "font-semibold text-amber-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.livechat}
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
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.crisp}
                  </td>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages.livechat}
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
            Which tool fits your team best?
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">
                Tidio – AI-first live chat
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-700">
                <li>SMBs that want bots + agents in one widget.</li>
                <li>Teams without a dedicated ops engineer.</li>
                <li>Websites focused on lead capture and FAQs.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">
                Crisp – Multichannel inbox
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-700">
                <li>SaaS and ecommerce teams with many channels.</li>
                <li>Founders who want email + chat in one place.</li>
                <li>Teams that send lifecycle or in-app messages.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">
                LiveChat – Support-heavy orgs
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-700">
                <li>Existing support teams with multiple agents.</li>
                <li>Managers who care about routing and analytics.</li>
                <li>Orgs that want chat tightly coupled with a help desk.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pros & cons cards */}
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

        {/* Use-case insights */}
        <section className="mt-10 space-y-6">
          <h2 className="text-2xl font-bold">How they work in practice</h2>

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
            Pricing is approximate and may change. Always verify on each tool’s
            official pricing page before deciding.
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
              website quickly with AI chatbots and live agents without heavy
              configuration.
            </li>
            <li>
              <strong>Crisp</strong> is the best bet when your conversations are
              spread across chat, email, and social, and you want a single
              multichannel inbox to manage them all.
            </li>
            <li>
              <strong>LiveChat</strong> makes sense for larger or growing
              support teams that need routing, analytics, and a reliable
              chat-first workflow that can plug into a help desk.
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
