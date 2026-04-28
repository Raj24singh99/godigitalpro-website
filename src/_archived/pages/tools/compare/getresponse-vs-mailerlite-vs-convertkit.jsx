import React from "react";
import {
  Sparkles,
  Crown,
  Layers,
  BarChart3,
  ArrowLeft,
  Gauge,
  Mail,
  Zap,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "getresponse vs mailerlite vs convertkit";
const canonical = buildCanonical(
  "/tools/compare/getresponse-vs-mailerlite-vs-convertkit"
);

const brandMeta = {
  getresponse: {
    gradient: "from-blue-500 via-sky-500 to-emerald-500",
    badge: "bg-blue-100 text-blue-900",
    logo: "https://logo.clearbit.com/getresponse.com",
  },
  mailerlite: {
    gradient: "from-emerald-500 via-teal-500 to-lime-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/mailerlite.com",
  },
  convertkit: {
    gradient: "from-rose-500 via-orange-500 to-amber-500",
    badge: "bg-rose-100 text-rose-900",
    logo: "https://logo.clearbit.com/convertkit.com",
  },
};

const contenders = [
  {
    key: "getresponse",
    name: "GetResponse",
    blurb: "Email + automation + landing pages + funnels + webinars.",
    url: "https://www.getresponse.com/",
  },
  {
    key: "mailerlite",
    name: "MailerLite",
    blurb: "Lightweight newsletters and automations at strong value.",
    url: "https://www.mailerlite.com/",
  },
  {
    key: "convertkit",
    name: "ConvertKit",
    blurb: "Creator-first email with tags, funnels, and digital product checkout.",
    url: "https://convertkit.com/",
  },
];

const comparisonRows = [
  {
    label: "Best for",
    getresponse: "SMBs needing email + funnels + webinars in one stack",
    mailerlite: "Newsletters and simple automations on a budget",
    convertkit: "Creators selling content, courses, and digital products",
  },
  {
    label: "Automation depth",
    getresponse:
      "Visual workflows with ecommerce and behavioral triggers; strong all-rounder",
    mailerlite:
      "Light/medium automation—great for welcome flows and basic journeys",
    convertkit:
      "Tag-based automations tuned for creator funnels, launches, and evergreen sequences",
  },
  {
    label: "Webinars",
    getresponse:
      "Native webinar hosting and funnels, a key differentiator vs the others",
    mailerlite: "No native webinars; relies on integrations",
    convertkit: "No native webinars; pair with separate webinar tools",
  },
  {
    label: "Landing pages / sites",
    getresponse:
      "Landing pages + basic funnels; enough for many SMB lead-gen flows",
    mailerlite: "Good landing pages and forms; easy to deploy quickly",
    convertkit:
      "Landing pages and forms focused on creators and lead magnets",
  },
  {
    label: "Pricing feel",
    getresponse: "List-size based; mid-range, especially with webinars",
    mailerlite:
      "Value pricing with generous free/low tiers for smaller lists",
    convertkit:
      "Priced for creators; higher tiers and commerce fees as you scale",
  },
];

const scoreboard = [
  { label: "Automation power", getresponse: 8.7, mailerlite: 7.6, convertkit: 8.0 },
  { label: "Ease of use", getresponse: 8.4, mailerlite: 9.0, convertkit: 8.8 },
  { label: "Value for money", getresponse: 8.2, mailerlite: 9.3, convertkit: 8.4 },
  { label: "Creator tools", getresponse: 7.8, mailerlite: 8.1, convertkit: 9.3 },
  { label: "Webinars / funnels", getresponse: 9.0, mailerlite: 7.0, convertkit: 7.2 },
];

const pricingTable = [
  {
    plan: "GetResponse (Email/Marketing Automation)",
    monthly: "From roughly ~$15+/month (list-size based)",
    annual: "Discounts on longer-term plans",
    limits: "Emails, automation, funnels; webinars and advanced features on higher tiers",
    notes: "Makes most sense when you actively use funnels, webinars, and ecommerce automations.",
  },
  {
    plan: "MailerLite (Growing Business tiers)",
    monthly: "Free plan + paid tiers from roughly ~$10+/month",
    annual: "Cheaper per month on annual billing",
    limits: "Emails, automation, sites, and features scale with subscriber count",
    notes: "Excellent balance of simplicity and value for newsletters and light automation.",
  },
  {
    plan: "ConvertKit (Creator / Creator Pro)",
    monthly: "Free plan + paid tiers from roughly ~$15+/month",
    annual: "Annual options available",
    limits: "Subscribers, automation, and advanced reporting/features vary by tier",
    notes: "Works best when you monetise via digital products, paid newsletters, or memberships.",
  },
];

const featureBullets = {
  automation: [
    "GetResponse: Visual automation builder with branching logic, ecommerce events, scoring, and deep campaign flows.",
    "MailerLite: Straightforward workflows suitable for welcome sequences, basic drip campaigns, and simple behavior-based triggers.",
    "ConvertKit: Tag-based automations tailored for creators—ideal for launches, evergreen funnels, and segmenting based on actions.",
  ],
  pagesFunnels: [
    "GetResponse: Landing pages and conversion funnels built in, plus webinar funnel templates for lead-gen and product launches.",
    "MailerLite: Clean landing page builder and forms that cover lead magnets, simple sales pages, and basic list-building.",
    "ConvertKit: Landing pages and forms optimised around creator use-cases—lead magnets, waitlists, and newsletter signups.",
  ],
  monetization: [
    "GetResponse: Strong for ecommerce email and funnels; can plug into stores and automate abandoned cart and product flows.",
    "MailerLite: Monetisation typically runs through connected ecommerce or payment tools; email supports promotions and launches.",
    "ConvertKit: Native checkout for digital products, subscriptions, and tip jars with automations that react to purchases.",
  ],
};

const faqs = [
  {
    q: `Is GetResponse better than MailerLite in ${YEAR}?`,
    a: "GetResponse is usually better if you need deeper automation, funnels, and especially built-in webinars. MailerLite wins if you mainly send newsletters, run simple automation, and care most about ease of use and budget.",
  },
  {
    q: "When should I choose ConvertKit?",
    a: "Choose ConvertKit if you are a creator selling digital products, courses, or memberships and you want tag-based automations, launches, and native checkout built around your audience.",
  },
  {
    q: "Which has the best free plan?",
    a: "MailerLite and ConvertKit offer very compelling free tiers for smaller lists. GetResponse’s free offering lets you test the platform but is more limited if you rely heavily on automation and webinars.",
  },
  {
    q: "Who offers the most automation depth?",
    a: "GetResponse typically offers the broadest automation scope, especially for ecommerce and webinars. ConvertKit has excellent creator-focused flows. MailerLite keeps automation intentionally lighter but easier.",
  },
  {
    q: "Which is easiest for non-technical users?",
    a: "MailerLite and ConvertKit are usually easier for non-technical users to learn quickly. GetResponse is still approachable but feels more like a full marketing suite when you enable funnels and webinars.",
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
  getresponse: {
    pros: [
      "All-in-one feel with email, automation, funnels, and webinars",
      "Solid automation builder with ecommerce and behavioral triggers",
      "Good choice when you want to centralise multiple marketing tools",
    ],
    cons: [
      "Can feel heavier than MailerLite/ConvertKit for simple newsletters",
      "Costs climb as list size and feature usage grow",
      "UI and options may overwhelm very small or beginner teams",
    ],
  },
  mailerlite: {
    pros: [
      "Very simple, modern interface that is easy to learn",
      "Great value pricing for newsletters and light automation",
      "Landing pages, forms, and basic automations are quick to deploy",
    ],
    cons: [
      "Automation and segmentation are lighter than GetResponse/ConvertKit",
      "Less specialised creator commerce tooling than ConvertKit",
      "May require additional tools as your funnels become more complex",
    ],
  },
  convertkit: {
    pros: [
      "Built from the ground up for creators and solo brands",
      "Tag-based automations and sequences are ideal for launches and funnels",
      "Native checkout for digital products, subscriptions, and tip jars",
    ],
    cons: [
      "Pricing can feel higher if you only need basic newsletters",
      "Templates are intentionally minimal and less suited to heavy design",
      "Not as webinar/funnel–all-in-one as GetResponse; webinars require integrations",
    ],
  },
};

const avg = (tool) =>
  (
    scoreboard.reduce((sum, row) => sum + (row[tool] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  getresponse: avg("getresponse"),
  mailerlite: avg("mailerlite"),
  convertkit: avg("convertkit"),
};

const overallWinner = (() => {
  const tools = ["getresponse", "mailerlite", "convertkit"];
  const values = tools.map((t) => parseFloat(averages[t]));
  const max = Math.max(...values);
  if (max === parseFloat(averages.getresponse)) return "GetResponse";
  if (max === parseFloat(averages.mailerlite)) return "MailerLite";
  return "ConvertKit";
})();

const LogoBadge = ({ name }) => {
  const key = name.toLowerCase().includes("getresponse")
    ? "getresponse"
    : name.toLowerCase().includes("mailerlite")
    ? "mailerlite"
    : name.toLowerCase().includes("convertkit")
    ? "convertkit"
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

export default function GetResponseVsMailerLiteVsConvertKitPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`GetResponse vs MailerLite vs ConvertKit (${YEAR}) – Email & automation comparison`}
        description="Compare GetResponse, MailerLite, and ConvertKit on automation, webinars, pricing, and ease of use so you can choose the right email platform for your list and funnel strategy."
        canonical={canonical}
        keywords={`${primaryKeyword}, email marketing comparison, email automation tools`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
          Email & automation platforms
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          GetResponse vs MailerLite vs ConvertKit ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          GetResponse leans into funnels, webinars, and full-funnel automation. MailerLite is
          the simplicity-and-value pick for newsletters and light journeys. ConvertKit is the
          creator-first option with tags, sequences, and native digital product checkout. Below
          is a structured breakdown to match the platform to your list strategy.
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
                <Mail className="h-5 w-5 text-white/80" />
              </div>
              <p className="relative mt-3 text-sm font-medium text-white/90">
                {item.blurb}
              </p>
            </a>
          ))}
        </div>

        {/* Quick verdict + overall winner */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-blue-100 bg-blue-50 px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-blue-900">
              <Sparkles className="h-5 w-5" />
              <p className="text-lg font-semibold">Quick verdict</p>
            </div>
            <p className="mt-2 text-slate-800">
              Choose <strong>GetResponse</strong> if you want{" "}
              <strong>webinars + funnels + deeper automation</strong> in one platform. Pick{" "}
              <strong>MailerLite</strong> if you need{" "}
              <strong>simple, value-priced newsletters</strong> and clean automations. Go with{" "}
              <strong>ConvertKit</strong> if you are a{" "}
              <strong>creator selling digital products, courses, or memberships</strong> and want
              tag-based funnels with checkout built in.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Crown className="h-4 w-4 text-amber-600" /> Overall scoreboard winner:{" "}
              {overallWinner}{" "}
              <span className="text-xs text-slate-600">
                (avg:{" "}
                {overallWinner === "GetResponse"
                  ? averages.getresponse
                  : overallWinner === "MailerLite"
                  ? averages.mailerlite
                  : averages.convertkit}
                /10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              The “best” tool depends on whether your priority is{" "}
              <strong>all-in-one funnels and webinars</strong> (GetResponse),{" "}
              <strong>budget-friendly newsletters</strong> (MailerLite), or{" "}
              <strong>creator monetisation</strong> (ConvertKit).
            </p>
          </div>
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-blue-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">GetResponse</th>
                  <th className="px-4 py-3">MailerLite</th>
                  <th className="px-4 py-3">ConvertKit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.getresponse}</td>
                    <td className="px-4 py-3 text-slate-700">{row.mailerlite}</td>
                    <td className="px-4 py-3 text-slate-700">{row.convertkit}</td>
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
                  <th className="px-4 py-3">GetResponse</th>
                  <th className="px-4 py-3">MailerLite</th>
                  <th className="px-4 py-3">ConvertKit</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const maxScore = Math.max(
                    row.getresponse,
                    row.mailerlite,
                    row.convertkit
                  );
                  const winner =
                    row.getresponse === row.mailerlite &&
                    row.mailerlite === row.convertkit
                      ? "Tie"
                      : maxScore === row.getresponse
                      ? "GetResponse"
                      : maxScore === row.mailerlite
                      ? "MailerLite"
                      : "ConvertKit";

                  return (
                    <tr key={row.label}>
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winner === "GetResponse"
                            ? "font-semibold text-blue-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.getresponse}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "MailerLite"
                            ? "font-semibold text-emerald-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.mailerlite}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "ConvertKit"
                            ? "font-semibold text-amber-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.convertkit}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {winner}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-blue-50 via-emerald-50 to-amber-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-blue-800">
                    {averages.getresponse}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.mailerlite}
                  </td>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages.convertkit}
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
            <Gauge className="h-6 w-6 text-blue-600" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Zap className="h-5 w-5 text-blue-600" /> Automations & journeys
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.automation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Mail className="h-5 w-5 text-emerald-600" /> Pages, funnels & webinars
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.pagesFunnels.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Shield className="h-5 w-5 text-amber-600" /> Monetisation & creator tools
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.monetization.map((item) => (
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
            Pricing for GetResponse, MailerLite, and ConvertKit changes regularly and
            depends on subscriber count, features, and promos. Always confirm current
            pricing, free-tier limits, and commerce fees on their official pricing pages
            before committing.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>GetResponse:</strong> Feels like a full marketing suite once you
              enable funnels and webinars—powerful, but benefits from someone comfortable
              with automation tools.
            </li>
            <li>
              <strong>MailerLite:</strong> Clean, minimal UX that non-technical users can
              learn quickly. Great for teams that mostly send campaigns and a few core
              automations.
            </li>
            <li>
              <strong>ConvertKit:</strong> Built around creator workflows—broadcasts,
              sequences, tags, and products. Easy to reason about if you think in terms
              of launches and evergreen funnels.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>SMB funnels with webinars and lead-gen:</strong> GetResponse wins with
              built-in webinars, funnels, and automation under one roof.
            </li>
            <li>
              <strong>Simple newsletters and lifecycle basics on a budget:</strong>{" "}
              MailerLite wins for ease of use and pricing while still offering decent
              automations and landing pages.
            </li>
            <li>
              <strong>Creators selling digital products, courses, or memberships:</strong>{" "}
              ConvertKit wins with native checkout, tag-based funnels, and creator-centric
              tooling.
            </li>
            <li>
              <strong>Agencies handling email for smaller clients:</strong> MailerLite or
              GetResponse can both work—MailerLite for simpler setups, GetResponse if
              funnels and webinars are part of the offer.
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
              <h3 className="text-lg font-semibold">GetResponse</h3>
              <p className="text-sm text-slate-700">
                Best when your strategy includes webinars, funnels, and deeper automation
                around ecommerce and lead-gen.
              </p>
              <p className="mt-2 text-sm font-semibold text-blue-700">
                Ideal for: SMBs and marketers who want more of an “all-in-one” email +
                funnel stack.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">MailerLite</h3>
              <p className="text-sm text-slate-700">
                Best if you mainly send newsletters, run core automations, and care about
                keeping both UX and pricing lean.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: Newsletters, small SaaS, and lean teams on a budget.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">ConvertKit</h3>
              <p className="text-sm text-slate-700">
                Best if you identify as a creator and want email + funnels tightly coupled
                to digital product sales and memberships.
              </p>
              <p className="mt-2 text-sm font-semibold text-amber-700">
                Ideal for: Creators, course sellers, coaches, and solo media brands.
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
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-blue-700 ring-1 ring-blue-100 hover:bg-blue-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools hub
          </Link>
        </div>
      </div>
    </main>
  );
}
