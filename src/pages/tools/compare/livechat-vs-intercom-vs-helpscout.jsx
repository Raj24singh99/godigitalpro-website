import React from "react";
import { Sparkles, Crown, Layers, BarChart3, ArrowLeft, Gauge, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "livechat vs intercom vs helpscout";
const canonical = buildCanonical("/tools/compare/livechat-vs-intercom-vs-helpscout");

const brandMeta = {
  livechat: {
    gradient: "from-orange-500 via-amber-500 to-slate-900",
    badge: "bg-orange-100 text-orange-900",
    logo: "https://logo.clearbit.com/livechat.com",
  },
  intercom: {
    gradient: "from-slate-800 via-slate-900 to-black",
    badge: "bg-slate-200 text-slate-900",
    logo: "https://logo.clearbit.com/intercom.com",
  },
  helpscout: {
    gradient: "from-emerald-500 via-teal-500 to-sky-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/helpscout.com",
  },
};

const contenders = [
  {
    key: "livechat",
    name: "LiveChat",
    blurb: "Sales and support live chat with rich widgets, routing, and a connected help desk.",
    url: "https://www.livechat.com/",
    slug: "livechat",
  },
  {
    key: "intercom",
    name: "Intercom",
    blurb: "Product-led messenger with deep bots, outbound, and data-driven targeting.",
    url: "https://www.intercom.com/",
    slug: "intercom",
  },
  {
    key: "helpscout",
    name: "HelpScout",
    blurb: "Email-first shared inbox with Beacon chat and Docs for support teams.",
    url: "https://www.helpscout.com/",
    slug: "helpscout",
  },
];

const comparisonRows = [
  {
    label: "Primary use case",
    livechat: "Real-time sales + support chat with quick setup",
    intercom: "Product-led messaging, bots, and proactive support",
    helpscout: "Email-first help desk with chat/docs baked in",
  },
  {
    label: "Automation & bots",
    livechat: "Rules + chatbots (via ChatBot) for routing/qualification",
    intercom: "Fin/AI agent, custom bots, tours, and rich targeting",
    helpscout: "Workflows and light AI; bots are more limited",
  },
  {
    label: "Channels",
    livechat: "Web chat, messaging, email help desk, social DMs",
    intercom: "Messenger, in-app, email, product tours, proactive banners",
    helpscout: "Email, Beacon chat, Docs, light in-app widget",
  },
  {
    label: "Support depth",
    livechat: "Chat-first with ticketing via HelpDesk integration",
    intercom: "Advanced routing, SLAs, data, and custom objects",
    helpscout: "Shared inbox, collision detection, Docs, satisfaction reports",
  },
  {
    label: "Pricing feel",
    livechat: "Per-seat with add-ons for bots/help desk",
    intercom: "Premium pricing for PLG and enterprise stacks",
    helpscout: "Predictable per-seat pricing for support teams",
  },
  {
    label: "Best for",
    livechat: "Teams driving revenue from chat + fast support",
    intercom: "Product-led companies needing automation depth",
    helpscout: "Support orgs that are email-first with clean chat/docs",
  },
];

const scoreboard = [
  { label: "Automation & bots", livechat: 8.5, intercom: 9.6, helpscout: 7.5 },
  { label: "Support workflows", livechat: 8.7, intercom: 9.4, helpscout: 8.9 },
  { label: "Sales enablement", livechat: 9.0, intercom: 9.2, helpscout: 7.4 },
  { label: "Ease of setup", livechat: 8.8, intercom: 7.9, helpscout: 9.0 },
  { label: "Value for money", livechat: 8.4, intercom: 7.0, helpscout: 8.8 },
];

const avg = (tool) =>
  (scoreboard.reduce((sum, row) => sum + (row[tool] || 0), 0) / scoreboard.length).toFixed(1);

const averages = {
  livechat: avg("livechat"),
  intercom: avg("intercom"),
  helpscout: avg("helpscout"),
};

const overallWinner =
  Math.max(averages.livechat, averages.intercom, averages.helpscout) === parseFloat(averages.livechat)
    ? "LiveChat"
    : Math.max(averages.intercom, averages.helpscout) === parseFloat(averages.intercom)
    ? "Intercom"
    : "HelpScout";

const pricingTable = [
  {
    plan: "LiveChat Team",
    monthly: "From around ~$24/agent/mo",
    annual: "Lower when billed annually",
    limits: "Live chat seats, routing, integrations; bots/help desk are add-ons",
    notes: "Strong for revenue + support chat where speed matters.",
  },
  {
    plan: "Intercom Essential",
    monthly: "From ~$39+/seat/mo",
    annual: "Lower annually",
    limits: "Messenger, bots, outbound, tours; pricing scales with seats + contacts",
    notes: "Best for product-led teams that want proactive, data-driven messaging.",
  },
  {
    plan: "HelpScout Standard",
    monthly: "From ~$25/user/mo",
    annual: "Discounted on annual",
    limits: "Shared inbox, Beacon chat, Docs, reports",
    notes: "Ideal for email-first support teams needing predictable pricing.",
  },
];

const featureBullets = {
  messaging: [
    "LiveChat: Fast web chat with sales-friendly widgets, carts, and eye-catchers.",
    "Intercom: Messenger, in-product banners, tours, and proactive campaigns for PLG.",
    "HelpScout: Beacon chat inside a shared inbox + Docs to deflect common questions.",
  ],
  automation: [
    "LiveChat: Rules and automation boosted by ChatBot for qualification and triage.",
    "Intercom: Deep bots, Fin AI agent, workflow builder, and targeting on user/product data.",
    "HelpScout: Workflows for tagging/routing, with lighter AI assistance and limited bots.",
  ],
  support: [
    "LiveChat: Pairs well with HelpDesk for tickets; agents can switch from chat to email.",
    "Intercom: SLAs, roles, custom objects, and multi-team routing for complex orgs.",
    "HelpScout: Gmail-like inbox, collision detection, Docs, and satisfaction surveys.",
  ],
};

const prosCons = {
  livechat: {
    pros: [
      "Sales-ready chat with strong widgets and routing",
      "Bots via ChatBot and easy automation rules",
      "Fast to deploy with a broad integration marketplace",
    ],
    cons: [
      "Bots and full help desk require add-ons",
      "Per-seat pricing can grow with large teams",
      "Less product-led targeting depth than Intercom",
    ],
  },
  intercom: {
    pros: [
      "Deep automation, bots, and outbound for PLG motion",
      "Rich targeting using user and product data",
      "Robust workflows, SLAs, and security for larger orgs",
    ],
    cons: [
      "Premium pricing that scales with seats and contacts",
      "Setup and data plumbing take more time",
      "Overkill if you only need straightforward chat",
    ],
  },
  helpscout: {
    pros: [
      "Email-first experience with clean UI and collision detection",
      "Beacon chat plus Docs in the same flow",
      "Predictable per-seat pricing and quick onboarding",
    ],
    cons: [
      "Bots/AI are lighter than Intercom and LiveChat add-ons",
      "Proactive messaging and product tours are limited",
      "Fewer sales features; focused on support use-cases",
    ],
  },
};

const faqs = [
  {
    q: `Who wins overall in ${YEAR}?`,
    a: "Intercom wins for automation depth and product-led messaging. LiveChat wins for fast sales/support chat plus bots via add-ons. HelpScout wins if you want an email-first help desk with simple chat/docs.",
  },
  {
    q: "Which is most affordable?",
    a: "HelpScout and LiveChat have more predictable, lower entry pricing. Intercom is premium and scales with seats/contacts.",
  },
  {
    q: "Which is best for PLG SaaS?",
    a: "Intercom. Its bots, tours, and targeting on product data make it the strongest for PLG teams.",
  },
  {
    q: "Which is best for sales-driven chat?",
    a: "LiveChat. It focuses on fast web chat, sales-friendly widgets, and easy handoffs to tickets.",
  },
  {
    q: "Which is best for support teams that live in email?",
    a: "HelpScout. It keeps a Gmail-like inbox, adds Beacon chat, and bundles Docs for deflection.",
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

const LogoBadge = ({ name }) => {
  const lowered = name.toLowerCase();
  const key = lowered.includes("livechat")
    ? "livechat"
    : lowered.includes("intercom")
    ? "intercom"
    : lowered.includes("helpscout")
    ? "helpscout"
    : lowered;

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
          <span className="text-sm font-bold text-white">{name.slice(0, 2).toUpperCase()}</span>
        )}
      </div>
      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${meta.badge}`}>{name}</span>
    </div>
  );
};

export default function LiveChatVsIntercomVsHelpScoutPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`LiveChat vs Intercom vs HelpScout (${YEAR}) – Chat and help desk comparison`}
        description="Compare LiveChat, Intercom, and HelpScout on chat, bots, support workflows, pricing, and the right stack for sales and support teams."
        canonical={canonical}
        keywords={`${primaryKeyword}, live chat comparison, intercom alternatives, helpscout vs livechat`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-700">Customer messaging</p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          LiveChat vs Intercom vs HelpScout ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          LiveChat is fast, sales-friendly chat with bots via add-ons. Intercom is the automation
          powerhouse for product-led teams. HelpScout is the email-first help desk with chat and
          docs for support orgs. Use this breakdown to pick your stack.
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
              <p className="relative mt-3 text-sm font-medium text-white/90">{item.blurb}</p>
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
              Choose <strong>LiveChat</strong> for fast, sales-friendly chat with bots via add-ons.
              Choose <strong>Intercom</strong> for deep automation, tours, and product-led
              messaging. Choose <strong>HelpScout</strong> if you’re email-first and want clean chat
              plus Docs without heavy complexity.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Crown className="h-4 w-4 text-orange-600" /> Overall scoreboard winner: {overallWinner}{" "}
              <span className="text-xs text-slate-600">
                (avg:{" "}
                {overallWinner === "LiveChat"
                  ? averages.livechat
                  : overallWinner === "Intercom"
                  ? averages.intercom
                  : averages.helpscout}
                /10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              The right tool depends on whether you optimise for sales chat velocity, automation
              depth, or an email-first support culture.
            </p>
          </div>
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-orange-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">LiveChat</th>
                  <th className="px-4 py-3">Intercom</th>
                  <th className="px-4 py-3">HelpScout</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.livechat}</td>
                    <td className="px-4 py-3 text-slate-700">{row.intercom}</td>
                    <td className="px-4 py-3 text-slate-700">{row.helpscout}</td>
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
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">LiveChat</th>
                  <th className="px-4 py-3">Intercom</th>
                  <th className="px-4 py-3">HelpScout</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const winnerValue = Math.max(row.livechat, row.intercom, row.helpscout);
                  const winner =
                    winnerValue === row.livechat
                      ? "LiveChat"
                      : winnerValue === row.intercom
                      ? "Intercom"
                      : "HelpScout";
                  return (
                    <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winner === "LiveChat" ? "font-semibold text-orange-800" : "text-slate-700"
                        }`}
                      >
                        {row.livechat}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Intercom" ? "font-semibold text-slate-800" : "text-slate-700"
                        }`}
                      >
                        {row.intercom}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "HelpScout" ? "font-semibold text-emerald-800" : "text-slate-700"
                        }`}
                      >
                        {row.helpscout}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">{winner}</td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-orange-50 via-slate-50 to-emerald-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-orange-800">{averages.livechat}</td>
                  <td className="px-4 py-3 font-semibold text-slate-900">{averages.intercom}</td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">{averages.helpscout}</td>
                  <td className="px-4 py-3 font-bold text-slate-900">{overallWinner}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Feature comparison */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-orange-600" /> Feature Comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Zap className="h-5 w-5 text-orange-600" /> Messaging & engagement
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.messaging.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Shield className="h-5 w-5 text-sky-600" /> Automation & routing
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.automation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Layers className="h-5 w-5 text-emerald-600" /> Support operations
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.support.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Pricing Snapshots</h2>
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
            Pricing changes frequently and depends on seats, contacts, and usage. Confirm current
            limits on each vendor’s pricing page before committing.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User Experience & Learning Curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>LiveChat:</strong> Chat-first UI that sales/support teams learn quickly; bots
              live in the ChatBot add-on.
            </li>
            <li>
              <strong>Intercom:</strong> Rich, data-driven workspace with workflows and tours; setup
              benefits from clean product data and ops support.
            </li>
            <li>
              <strong>HelpScout:</strong> Feels like Gmail with collaboration, plus Beacon chat and
              Docs; easy for support teams to adopt.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-World Use-Cases & Winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>PLG SaaS needing proactive in-app messaging:</strong> Intercom wins with bots,
              tours, and targeting on product data.
            </li>
            <li>
              <strong>Revenue-focused chat for ecommerce or sales teams:</strong> LiveChat wins with
              speedy widgets, rules, and sales-friendly workflows.
            </li>
            <li>
              <strong>Email-first support teams wanting clean chat + docs:</strong> HelpScout wins
              with its shared inbox, Beacon, and Docs.
            </li>
            <li>
              <strong>Teams pairing chat with existing help desk/CRM:</strong> LiveChat and Intercom
              integrate widely; HelpScout is great if email is already central to ops.
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
              <h3 className="text-lg font-semibold">LiveChat</h3>
              <p className="text-sm text-slate-700">
                Best for teams that need fast web chat with sales-friendly widgets and simple bots to
                qualify or route visitors.
              </p>
              <p className="mt-2 text-sm font-semibold text-orange-700">
                Ideal for: Ecommerce, inside sales, and support teams that want speed.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Intercom</h3>
              <p className="text-sm text-slate-700">
                Best for PLG and enterprise teams that need automation, proactive messaging, and rich
                targeting on product data.
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-800">
                Ideal for: SaaS with in-app onboarding, success, and revenue motions.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">HelpScout</h3>
              <p className="text-sm text-slate-700">
                Best for support orgs that live in email but want chat and docs without overhauling
                their workflow.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: Support teams, success orgs, and service businesses.
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
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-orange-700 ring-1 ring-orange-100 hover:bg-orange-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
