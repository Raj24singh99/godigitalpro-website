import React from "react";
import {
  Sparkles,
  Crown,
  Layers,
  BarChart3,
  ArrowLeft,
  Gauge,
  MessageCircle,
  Zap,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "helpcrunch vs tidio vs crisp";
const canonical = buildCanonical("/tools/compare/helpcrunch-vs-tidio-vs-crisp");

const brandMeta = {
  helpcrunch: {
    gradient: "from-indigo-500 via-blue-500 to-teal-500",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/helpcrunch.com",
  },
  tidio: {
    gradient: "from-cyan-500 via-sky-500 to-blue-500",
    badge: "bg-cyan-100 text-cyan-900",
    logo: "https://logo.clearbit.com/tidio.com",
  },
  crisp: {
    gradient: "from-emerald-500 via-teal-500 to-blue-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/crisp.chat",
  },
};

const contenders = [
  {
    key: "helpcrunch",
    name: "HelpCrunch",
    blurb: "Chat + inbox + email campaigns + knowledge base in one tool.",
    url: "https://helpcrunch.com/",
  },
  {
    key: "tidio",
    name: "Tidio",
    blurb: "Affordable chatbots and live chat for SMBs.",
    url: "https://www.tidio.com/",
  },
  {
    key: "crisp",
    name: "Crisp",
    blurb: "Multi-channel inbox with strong bots and rich integrations.",
    url: "https://crisp.chat/",
  },
];

const comparisonRows = [
  {
    label: "Core focus",
    helpcrunch: "Live chat + shared inbox + email campaigns + knowledge base",
    tidio: "Chatbots + live chat for lead capture and support",
    crisp: "Multi-channel inbox (chat, social, messaging) + bots",
  },
  {
    label: "Best for",
    helpcrunch: "Startups wanting all-in-one communications in a single tool",
    tidio: "SMBs wanting fast, affordable chatbots and live chat",
    crisp: "Teams needing rich chat and multi-channel conversations",
  },
  {
    label: "Email campaigns",
    helpcrunch: "Yes – email campaigns and automations on higher tiers",
    tidio: "Limited; primarily focused on chat and automation in-widget",
    crisp: "Email/chat sequences possible via plugins/integrations",
  },
  {
    label: "Knowledge base / help center",
    helpcrunch: "Built-in knowledge base module",
    tidio: "Typically integrates/links to external docs or help centers",
    crisp: "Helpdesk / KB plugins available in the ecosystem",
  },
  {
    label: "Pricing feel",
    helpcrunch: "Affordable mid-range for an all-in-one stack",
    tidio: "Most budget-friendly for bots and live chat",
    crisp: "Value pricing that scales with features and channels",
  },
];

const scoreboard = [
  { label: "Chatbot strength", helpcrunch: 8.4, tidio: 9.2, crisp: 9.0 },
  { label: "All-in-one breadth", helpcrunch: 9.1, tidio: 7.4, crisp: 8.3 },
  { label: "Ease of setup", helpcrunch: 8.8, tidio: 9.3, crisp: 8.5 },
  { label: "Value for money", helpcrunch: 8.9, tidio: 9.4, crisp: 9.0 },
  { label: "Support workflows", helpcrunch: 8.7, tidio: 7.8, crisp: 8.6 },
];

const pricingTable = [
  {
    plan: "HelpCrunch Pro / Premium",
    monthly: "From roughly ~$25–$39/user",
    annual: "Lower effective price on annual billing",
    limits: "Chat, inbox, email campaigns, popups, and knowledge base (by tier)",
    notes: "Makes most sense if you actively use campaigns + chat + KB together.",
  },
  {
    plan: "Tidio Chatbots / Communicator",
    monthly: "Free tier + paid from roughly ~$20–$30/month",
    annual: "Discounts for annual plans",
    limits: "Bot triggers, conversations, and seats scale with plan",
    notes: "One of the lowest-cost ways to get serious chatbots and live chat.",
  },
  {
    plan: "Crisp Unlimited / higher tiers",
    monthly: "From roughly ~$25–$95/month",
    annual: "Annual billing available",
    limits: "Features, channels, and automation capabilities increase with tier",
    notes: "Strong value when you consolidate multiple channels into Crisp.",
  },
];

const featureBullets = {
  chatAndBots: [
    "HelpCrunch: Solid live chat with automation options; not as bot-centric as Tidio, but integrated with email and KB.",
    "Tidio: Very strong focus on chatbots and flows for lead capture, FAQs, and routing on a budget.",
    "Crisp: Powerful bot and automation stack, including triggers, campaigns, and integrations across channels.",
  ],
  inboxAndChannels: [
    "HelpCrunch: Shared inbox for website chat, email, and other channels in one view.",
    "Tidio: Primarily a website chat + bot inbox, with some channel extensions depending on plan.",
    "Crisp: Multi-channel inbox pulling in chat, email, social, and messaging apps into one place.",
  ],
  lifecycleAndContent: [
    "HelpCrunch: Email campaigns, onboarding sequences, and in-app messages plus a built-in knowledge base.",
    "Tidio: Lifecycle nurtures mostly driven by chatbots and targeted widgets, not full email marketing.",
    "Crisp: Lifecycle campaigns possible via sequences and plugins; helpdesk/KB add-ons available.",
  ],
};

const faqs = [
  {
    q: `Is HelpCrunch better than Tidio in ${YEAR}?`,
    a: "HelpCrunch is better if you want an all-in-one stack with live chat, shared inbox, email campaigns, and a built-in knowledge base. Tidio wins if your top priority is budget-friendly chatbots and live chat without needing deeper email or KB features.",
  },
  {
    q: "When should I pick Crisp instead?",
    a: "Pick Crisp if you want a powerful multi-channel inbox that pulls in chat, email, and social channels, plus strong bots and plugins. It is ideal when you care more about consolidating channels than running email campaigns in the same tool.",
  },
  {
    q: "Which tool is best for budget chatbots?",
    a: "Tidio is typically the lowest-cost way to get quality chatbots and live chat up and running. HelpCrunch and Crisp cost more but offer broader capabilities beyond bots alone.",
  },
  {
    q: "Do they all have knowledge bases?",
    a: "HelpCrunch includes a built-in knowledge base. Crisp offers a helpdesk/KB plugin within its ecosystem. Tidio usually connects out to external documentation tools rather than shipping a full KB inside the product.",
  },
  {
    q: "Which is easiest to set up for a small team?",
    a: "Tidio and HelpCrunch are both very quick to set up for basic chat. Tidio is especially easy for plug-and-play bots. HelpCrunch gives you a slightly richer setup with campaigns and KB. Crisp is simple too, though multi-channel setups can take a bit longer to configure.",
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
  helpcrunch: {
    pros: [
      "All-in-one: live chat, shared inbox, email campaigns, and knowledge base",
      "Good value for teams wanting a combined support + marketing comms stack",
      "Solid onboarding, simple UI, and integrated widgets/popups",
    ],
    cons: [
      "Bots and automation are strong but not as bot-centric as Tidio",
      "Overkill if you only need basic chat and a couple of triggers",
      "As your team scales, you may need to fine-tune workflows and segments",
    ],
  },
  tidio: {
    pros: [
      "Very affordable entry point for chatbots and live chat",
      "Easy setup with templates and visual bot flows",
      "Excellent choice for small ecommerce sites and SMBs testing chat/bots",
    ],
    cons: [
      "Not a full email marketing or lifecycle platform",
      "No deeply integrated, native knowledge base module",
      "Larger teams may outgrow its collaboration and reporting quickly",
    ],
  },
  crisp: {
    pros: [
      "Strong multi-channel inbox combining chat, email, and messaging apps",
      "Robust automation, bots, and plugin ecosystem",
      "Great if you want to consolidate multiple channels into one tool",
    ],
    cons: [
      "Email campaigns and KB depend more on plugins than native suites",
      "Can get more complex to configure as you add channels and features",
      "Pricing scales with features; may be more than you need for simple chat",
    ],
  },
};

const avg = (tool) =>
  (
    scoreboard.reduce((sum, row) => sum + (row[tool] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  helpcrunch: avg("helpcrunch"),
  tidio: avg("tidio"),
  crisp: avg("crisp"),
};

const overallWinner = (() => {
  const values = {
    helpcrunch: parseFloat(averages.helpcrunch),
    tidio: parseFloat(averages.tidio),
    crisp: parseFloat(averages.crisp),
  };
  const max = Math.max(values.helpcrunch, values.tidio, values.crisp);
  if (max === values.helpcrunch) return "HelpCrunch";
  if (max === values.tidio) return "Tidio";
  return "Crisp";
})();

const LogoBadge = ({ name }) => {
  const key = name.toLowerCase().includes("helpcrunch")
    ? "helpcrunch"
    : name.toLowerCase().includes("tidio")
    ? "tidio"
    : name.toLowerCase().includes("crisp")
    ? "crisp"
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

export default function HelpCrunchVsTidioVsCrispPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`HelpCrunch vs Tidio vs Crisp (${YEAR}) – Support & chat comparison`}
        description="Compare HelpCrunch, Tidio, and Crisp on chatbots, shared inbox, email campaigns, knowledge base, pricing, and support workflows so you can choose the right platform for your support stack."
        canonical={canonical}
        keywords={`${primaryKeyword}, chat comparison, support inbox tools, live chat vs chatbot`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">
          Support & chat platforms
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          HelpCrunch vs Tidio vs Crisp ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          HelpCrunch leans into all-in-one customer comms with chat, inbox, email, and a
          knowledge base. Tidio is the budget chatbot and live chat favourite for SMBs.
          Crisp is the multi-channel inbox with strong bots and integrations. Below is a
          structured breakdown to match the platform to your support and growth strategy.
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
                <MessageCircle className="h-5 w-5 text-white/80" />
              </div>
              <p className="relative mt-3 text-sm font-medium text-white/90">
                {item.blurb}
              </p>
            </a>
          ))}
        </div>

        {/* Quick verdict + overall winner */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-indigo-100 bg-indigo-50 px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-indigo-900">
              <Sparkles className="h-5 w-5" />
              <p className="text-lg font-semibold">Quick verdict</p>
            </div>
            <p className="mt-2 text-slate-800">
              Choose <strong>HelpCrunch</strong> if you want{" "}
              <strong>all-in-one live chat, shared inbox, email campaigns, and a knowledge base</strong>{" "}
              in one platform. Choose <strong>Tidio</strong> if your priority is{" "}
              <strong>budget-friendly chatbots and live chat</strong> for lead capture and basic
              support. Choose <strong>Crisp</strong> if you want a{" "}
              <strong>multi-channel inbox with powerful bots and plugins</strong> to unify chat,
              email, and messaging apps.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Crown className="h-4 w-4 text-indigo-600" /> Overall scoreboard winner:{" "}
              {overallWinner}{" "}
              <span className="text-xs text-slate-600">
                (avg:{" "}
                {overallWinner === "HelpCrunch"
                  ? averages.helpcrunch
                  : overallWinner === "Tidio"
                  ? averages.tidio
                  : averages.crisp}
                /10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              The “best” platform depends on whether you optimise for{" "}
              <strong>all-in-one messaging + email</strong> (HelpCrunch),{" "}
              <strong>low-cost chatbots</strong> (Tidio), or{" "}
              <strong>multi-channel inbox + bots</strong> (Crisp).
            </p>
          </div>
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-indigo-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">HelpCrunch</th>
                  <th className="px-4 py-3">Tidio</th>
                  <th className="px-4 py-3">Crisp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.helpcrunch}</td>
                    <td className="px-4 py-3 text-slate-700">{row.tidio}</td>
                    <td className="px-4 py-3 text-slate-700">{row.crisp}</td>
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
                  <th className="px-4 py-3">HelpCrunch</th>
                  <th className="px-4 py-3">Tidio</th>
                  <th className="px-4 py-3">Crisp</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const maxScore = Math.max(
                    row.helpcrunch,
                    row.tidio,
                    row.crisp
                  );
                  const winner =
                    row.helpcrunch === row.tidio &&
                    row.tidio === row.crisp
                      ? "Tie"
                      : maxScore === row.helpcrunch
                      ? "HelpCrunch"
                      : maxScore === row.tidio
                      ? "Tidio"
                      : "Crisp";

                  return (
                    <tr key={row.label}>
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winner === "HelpCrunch"
                            ? "font-semibold text-indigo-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.helpcrunch}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Tidio"
                            ? "font-semibold text-cyan-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.tidio}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Crisp"
                            ? "font-semibold text-emerald-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.crisp}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {winner}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-indigo-50 via-cyan-50 to-emerald-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages.helpcrunch}
                  </td>
                  <td className="px-4 py-3 font-semibold text-cyan-800">
                    {averages.tidio}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.crisp}
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
            <Gauge className="h-6 w-6 text-indigo-600" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Zap className="h-5 w-5 text-indigo-600" /> Chat, bots & automation
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.chatAndBots.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <MessageCircle className="h-5 w-5 text-cyan-600" /> Inbox & channels
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.inboxAndChannels.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Shield className="h-5 w-5 text-emerald-600" /> Lifecycle, content & KB
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.lifecycleAndContent.map((item) => (
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
            Pricing for HelpCrunch, Tidio, and Crisp changes frequently and depends on seats,
            usage, and promos. Always confirm current pricing, free-tier limits, and feature
            differences on their official pricing pages before deciding.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>HelpCrunch:</strong> Feels like a modern support + marketing suite;
              easy to onboard small teams that want both chat and email campaigns in one
              place.
            </li>
            <li>
              <strong>Tidio:</strong> Very approachable for small teams; bot templates and
              visual flows make it easy to launch useful automation quickly.
            </li>
            <li>
              <strong>Crisp:</strong> Clean UI that scales as you add channels; requires a
              bit more configuration when you hook up multiple sources and plugins.
            </li>
          </ul>
        </section>

        {/* Real-world use-cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Startup or SaaS needing support + onboarding emails + KB:</strong>{" "}
              HelpCrunch wins as an all-in-one comms layer for chat, email, and docs.
            </li>
            <li>
              <strong>Small ecommerce brand wanting lead-gen bots on a budget:</strong>{" "}
              Tidio wins with easy chatbots and pricing that scales gently at first.
            </li>
            <li>
              <strong>Support team consolidating chat, email, and social DMs:</strong>{" "}
              Crisp wins with its multi-channel inbox and automation capabilities.
            </li>
            <li>
              <strong>Agencies handling support for multiple small brands:</strong>{" "}
              HelpCrunch or Crisp can both work well, depending on whether you need
              campaigns + KB (HelpCrunch) or multi-channel routing (Crisp).
            </li>
          </ul>
        </section>

        {/* Pros & Cons */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
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
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-indigo-700 ring-1 ring-indigo-100 hover:bg-indigo-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools hub
          </Link>
        </div>
      </div>
    </main>
  );
}
