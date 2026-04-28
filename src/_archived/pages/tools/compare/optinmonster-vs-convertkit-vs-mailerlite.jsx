import React from "react";
import {
  Sparkles,
  Crown,
  Layers,
  BarChart3,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "optinmonster vs convertkit vs mailerlite";
const canonical = buildCanonical(
  "/tools/compare/optinmonster-vs-convertkit-vs-mailerlite"
);

const brandMeta = {
  optinmonster: {
    gradient: "from-lime-500 via-emerald-500 to-sky-500",
    badge: "bg-lime-100 text-lime-900",
    logo: "https://logo.clearbit.com/optinmonster.com",
  },
  convertkit: {
    gradient: "from-orange-500 via-rose-500 to-pink-500",
    badge: "bg-orange-100 text-orange-900",
    logo: "https://logo.clearbit.com/convertkit.com",
  },
  mailerlite: {
    gradient: "from-emerald-500 via-green-500 to-cyan-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/mailerlite.com",
  },
};

const contenders = [
  {
    key: "optinmonster",
    name: "OptinMonster",
    blurb: "Onsite overlays, exit-intent popups, and advanced targeting to capture leads.",
    url: "https://optinmonster.com",
  },
  {
    key: "convertkit",
    name: "ConvertKit",
    blurb: "Email marketing for creators with automation, tagging, and landing pages.",
    url: "https://convertkit.com",
  },
  {
    key: "mailerlite",
    name: "MailerLite",
    blurb: "Affordable email marketing with landing pages, popups, and simple automations.",
    url: "https://www.mailerlite.com",
  },
];

const comparisonRows = [
  {
    label: "Best for",
    optinmonster: "Onsite CRO & popups for blogs, stores, and publishers.",
    convertkit: "Creator-focused email with tagging, sequences, and paid newsletters.",
    mailerlite: "Budget-friendly email + pages for small businesses and lean teams.",
  },
  {
    label: "Primary focus",
    optinmonster: "Onsite capture, exit-intent popups, and A/B testing.",
    convertkit: "Email campaigns, nurturing sequences, and audience tagging.",
    mailerlite: "Email newsletters, simple automation, landing pages and forms.",
  },
  {
    label: "Landing pages",
    optinmonster: "Not a landing page builder; focused on onsite overlays.",
    convertkit: "Landing pages and simple sites with creator-friendly templates.",
    mailerlite: "Landing pages, popups, and embedded forms included.",
  },
  {
    label: "Onsite targeting",
    optinmonster:
      "Deep targeting, exit-intent, scroll triggers, device and page rules.",
    convertkit: "Basic forms and minimal onsite behavioral targeting.",
    mailerlite:
      "Lightweight popups and forms with simpler targeting than OptinMonster.",
  },
  {
    label: "Pricing (directional)",
    optinmonster: "From ~US$9/mo (annual) for basic features; tiers scale with sites and campaigns.",
    convertkit: "Free tier; paid from ~US$15/mo based on subscribers.",
    mailerlite: "Free tier; paid from ~US$10/mo based on subscribers and features.",
  },
];

const scoreboard = [
  { label: "Onsite CRO power", optinmonster: 9.4, convertkit: 7.0, mailerlite: 7.5 },
  { label: "Email automation", optinmonster: 6.5, convertkit: 9.0, mailerlite: 8.3 },
  { label: "Ease of use", optinmonster: 8.6, convertkit: 8.8, mailerlite: 8.9 },
  { label: "Value for money", optinmonster: 8.7, convertkit: 8.1, mailerlite: 9.1 },
  { label: "Creator/ecommerce fit", optinmonster: 8.9, convertkit: 9.2, mailerlite: 8.6 },
];

const avg = (tool) =>
  (
    scoreboard.reduce((sum, row) => sum + (row[tool] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  optinmonster: avg("optinmonster"),
  convertkit: avg("convertkit"),
  mailerlite: avg("mailerlite"),
};

const overallWinner =
  Math.max(
    parseFloat(averages.optinmonster),
    parseFloat(averages.convertkit),
    parseFloat(averages.mailerlite)
  ) === parseFloat(averages.optinmonster)
    ? "OptinMonster"
    : Math.max(
        parseFloat(averages.convertkit),
        parseFloat(averages.mailerlite)
      ) === parseFloat(averages.convertkit)
    ? "ConvertKit"
    : "MailerLite";

const pricingTable = [
  {
    plan: "OptinMonster (Basic / Plus / Pro)",
    monthly: "From around ~US$9/mo (billed annually)",
    annual: "Higher tiers unlock more sites, campaigns, and features",
    limits:
      "Campaign types, site counts, pageview thresholds, and integrations vary by plan",
    notes: "Treat as your onsite CRO layer that can feed whichever email platform you use.",
  },
  {
    plan: "ConvertKit (Free / Creator / Creator Pro)",
    monthly: "Free up to a small list; paid from ~US$15/mo",
    annual: "Discounts for annual billing and higher subscriber tiers",
    limits:
      "Pricing scales with subscribers and feature set (automation, visual funnels, advanced reporting)",
    notes: "Best if your list growth and revenue come from creator products, courses, or subscriptions.",
  },
  {
    plan: "MailerLite (Free / Growing / Advanced)",
    monthly: "Free tier, then from ~US$10/mo",
    annual: "Annual discounts and higher limits on paid tiers",
    limits:
      "Contact limits, automation depth, and advanced features depend on tier",
    notes: "Often the best “budget-friendly but capable” choice for small businesses.",
  },
];

const featureBullets = {
  stack: [
    "OptinMonster: Onsite CRO engine that plugs into many email service providers, ideal as the capture-layer on top of your stack.",
    "ConvertKit: All-in-one creator email hub with tagging, sequences, broadcasts, and simple landing pages.",
    "MailerLite: Consolidated email, landing pages, and popups, strong for lean stacks that want fewer tools.",
  ],
  automation: [
    "OptinMonster: Light automation logic (triggers and display rules) but relies on your ESP for nurture sequences.",
    "ConvertKit: Visual automations, tagging, and sequences tailored to creators selling products, courses, and memberships.",
    "MailerLite: Solid automations for welcome flows, basic funnels, and ecommerce triggers on higher tiers.",
  ],
  experimentation: [
    "OptinMonster: A/B tests for popups, headlines, and offers, plus granular targeting per campaign.",
    "ConvertKit: Email-level A/B testing and automation logic (paths based on link clicks and tags).",
    "MailerLite: Subject line and content tests with reporting that is easy for small teams to digest.",
  ],
};

const prosCons = {
  optinmonster: {
    pros: [
      "Best-in-class onsite overlays, exit-intent campaigns, and granular targeting rules",
      "Works with many ESPs, making it a flexible capture layer regardless of email tool",
      "Strong for ecommerce brands and blogs that rely heavily on onsite conversions",
    ],
    cons: [
      "Not an email platform; you still need an ESP for sending campaigns",
      "Another subscription in your stack if you only need light popups",
      "Requires careful configuration to avoid hurting UX with aggressive popups",
    ],
  },
  convertkit: {
    pros: [
      "Built specifically for creators with tagging, sequences, and digital product workflows",
      "Clean, creator-friendly UI and landing page templates",
      "Solid automation and segmentation without feeling overwhelming",
    ],
    cons: [
      "Onsite forms and popups are more basic than OptinMonster’s targeting and CRO tools",
      "Pricing can feel high if list size grows and you do not use advanced features",
      "Less enterprise ecommerce functionality compared to heavier ESPs",
    ],
  },
  mailerlite: {
    pros: [
      "Excellent value with generous free tier and affordable paid plans",
      "Landing pages, popups, and email in a single, simple interface",
      "Good choice for small businesses, newsletters, and side projects",
    ],
    cons: [
      "Onsite targeting and CRO options are lighter than OptinMonster",
      "Automation depth is solid but not as creator-focused as ConvertKit",
      "Fewer “premium” ecosystem integrations compared to older ESPs",
    ],
  },
};

const faqs = [
  {
    q: `Which should I pick in ${YEAR}?`,
    a: "Pick OptinMonster if onsite targeting and popups are your main lever, ConvertKit if you are a creator who lives in email and automations, and MailerLite if you want budget-friendly email plus pages for a small team.",
  },
  {
    q: "Can I use OptinMonster with ConvertKit or MailerLite?",
    a: "Yes. This is a common setup: OptinMonster handles onsite popups and targeting, then passes subscribers into ConvertKit or MailerLite lists and automations in real time.",
  },
  {
    q: "Do ConvertKit or MailerLite replace OptinMonster?",
    a: "They can replace basic forms and popups, but OptinMonster’s strength is deeper onsite targeting, A/B testing, and CRO features that go beyond what built-in forms usually offer.",
  },
  {
    q: "What’s best for a new creator starting from scratch?",
    a: "If you are just starting a newsletter or creator business, ConvertKit or MailerLite alone are usually enough. Layer in OptinMonster later if onsite CRO becomes a priority.",
  },
  {
    q: "What about ecommerce stores?",
    a: "Many stores pair OptinMonster for onsite capture with either MailerLite or a dedicated ecommerce ESP. ConvertKit can also work if your store is heavily creator-led.",
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
  const meta =
    brandMeta[name.toLowerCase()] || {
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

export default function OptinMonsterVsConvertkitVsMailerlitePage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`OptinMonster vs ConvertKit vs MailerLite (${YEAR}) – Popups & email compared`}
        description="Compare OptinMonster, ConvertKit, and MailerLite across onsite CRO, email automation, pricing, and fit for creators, blogs, and ecommerce brands."
        canonical={canonical}
        keywords={`${primaryKeyword}, popup vs email platform, optinmonster vs convertkit, optinmonster vs mailerlite`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Hero */}
        <p className="text-sm font-semibold uppercase tracking-wide text-lime-700">
          Lead capture & email
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          OptinMonster vs ConvertKit vs MailerLite ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          OptinMonster dominates onsite popups and CRO. ConvertKit and MailerLite
          focus on email, automation, and landing pages. The best stack is often
          a combination—here is how each tool fits.
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
          <div className="rounded-3xl border border-lime-100 bg-lime-50 px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-lime-900">
              <Sparkles className="h-5 w-5" />
              <p className="text-lg font-semibold">Quick verdict</p>
            </div>
            <p className="mt-2 text-slate-800">
              Use <strong>OptinMonster</strong> as your onsite CRO engine when
              popups and overlays drive a large share of signups. Pick{" "}
              <strong>ConvertKit</strong> if you are a creator selling products,
              courses, or memberships via email. Choose <strong>MailerLite</strong> if you want a
              simple, cost-effective email + pages stack for a small business or
              side project.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Crown className="h-4 w-4 text-lime-600" /> Overall scoreboard
              winner: {overallWinner}{" "}
              <span className="text-xs text-slate-600">
                (avg:{" "}
                {overallWinner === "OptinMonster"
                  ? averages.optinmonster
                  : overallWinner === "ConvertKit"
                  ? averages.convertkit
                  : averages.mailerlite}
                /10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              This is not a pure “either/or” choice. It is common to combine
              OptinMonster with either ConvertKit or MailerLite based on how
              advanced you need your email automation to be.
            </p>
          </div>
        </div>

        {/* Best for summary */}
        <div className="mt-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <div className="text-sm font-semibold text-slate-900">Best for</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <ShieldCheck className="mt-0.5 h-4 w-4 text-lime-600" />
              <span>
                <strong>OptinMonster:</strong> blogs, ecommerce stores, and
                publishers that want advanced onsite targeting and A/B tested
                popups.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Layers className="mt-0.5 h-4 w-4 text-orange-600" />
              <span>
                <strong>ConvertKit:</strong> creators who sell courses, digital
                products, and memberships mostly via email.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <ShieldCheck className="mt-0.5 h-4 w-4 text-emerald-600" />
              <span>
                <strong>MailerLite:</strong> small businesses and newsletters
                that want capable email + landing pages without heavy cost.
              </span>
            </li>
          </ul>
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-lime-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">OptinMonster</th>
                  <th className="px-4 py-3">ConvertKit</th>
                  <th className="px-4 py-3">MailerLite</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr
                    key={row.label}
                    className="odd:bg-white even:bg-slate-50/50"
                  >
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">
                      {row.optinmonster}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.convertkit}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.mailerlite}
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
                  <th className="px-4 py-3">OptinMonster</th>
                  <th className="px-4 py-3">ConvertKit</th>
                  <th className="px-4 py-3">MailerLite</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const { optinmonster, convertkit, mailerlite } = row;
                  const winnerValue = Math.max(
                    optinmonster,
                    convertkit,
                    mailerlite
                  );
                  const winner =
                    winnerValue === optinmonster
                      ? "OptinMonster"
                      : winnerValue === convertkit
                      ? "ConvertKit"
                      : "MailerLite";
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
                          winner === "OptinMonster"
                            ? "font-semibold text-lime-800"
                            : "text-slate-700"
                        }`}
                      >
                        {optinmonster}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "ConvertKit"
                            ? "font-semibold text-orange-800"
                            : "text-slate-700"
                        }`}
                      >
                        {convertkit}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "MailerLite"
                            ? "font-semibold text-emerald-800"
                            : "text-slate-700"
                        }`}
                      >
                        {mailerlite}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">
                        {winner}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-lime-50 via-orange-50 to-emerald-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-lime-800">
                    {averages.optinmonster}
                  </td>
                  <td className="px-4 py-3 font-semibold text-orange-800">
                    {averages.convertkit}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.mailerlite}
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
            <ShieldCheck className="h-6 w-6 text-lime-600" /> Feature
            comparison
          </h2>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">
              How they fit in your stack
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {featureBullets.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">
              Automation & journeys
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {featureBullets.automation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">
              Experimentation & CRO
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {featureBullets.experimentation.map((item) => (
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
                  <th className="px-4 py-3">Annual / term</th>
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
          <p className="text-sm text-slate-600">
            Pricing changes frequently and depends on contact counts, traffic,
            and promos. Treat these numbers as directional and verify current
            tiers and limits on each vendor’s site.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>
              <strong>OptinMonster:</strong> Feels like a CRO tool—lots of power
              in targeting and placements, but you will want a clear popup
              strategy to avoid overdoing it.
            </li>
            <li>
              <strong>ConvertKit:</strong> Built for creators; UI is fairly
              simple, with sequences and automations that mirror creator sales
              funnels.
            </li>
            <li>
              <strong>MailerLite:</strong> Very approachable; editors and
              automations are simple enough for non-technical founders and small
              teams.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>
              <strong>Content sites and blogs:</strong> OptinMonster + your
              favorite ESP (ConvertKit or MailerLite) for scroll/exit-intent
              popups and email nurture sequences.
            </li>
            <li>
              <strong>Solo creators building a list:</strong> ConvertKit or
              MailerLite alone is usually enough at the start; layer OptinMonster
              later if onsite traffic is high.
            </li>
            <li>
              <strong>Small ecommerce stores:</strong> OptinMonster for cart
              recovery overlays, plus MailerLite or another ESP for campaigns
              and abandoned carts.
            </li>
            <li>
              <strong>Side projects and micro-SaaS:</strong> MailerLite often
              wins on cost and simplicity with landing pages + basic automations.
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
              <h3 className="text-lg font-semibold">OptinMonster</h3>
              <p className="text-sm text-slate-700">
                Best when onsite overlays and aggressive list-building are a core
                growth channel and you want fine-grained targeting and tests.
              </p>
              <p className="mt-2 text-sm font-semibold text-lime-700">
                Ideal for: Content-heavy sites, ecommerce, and CRO-focused
                marketers.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">ConvertKit</h3>
              <p className="text-sm text-slate-700">
                Best for creators who sell via launches, evergreen funnels, and
                segmented broadcasts to an engaged audience.
              </p>
              <p className="mt-2 text-sm font-semibold text-orange-700">
                Ideal for: Bloggers, YouTubers, course creators, and solo
                founders.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">MailerLite</h3>
              <p className="text-sm text-slate-700">
                Best for budget-conscious brands that still need landing pages,
                popups, and decent automations in one place.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: Small businesses, newsletters, local services, and
                early-stage projects.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">FAQ</h2>
          <div className="space-y-3">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
              >
                <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-slate-900">
                  {item.q}
                  <span className="text-xl leading-none text-slate-500 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-2 text-sm text-slate-700">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Back link */}
        <div className="mt-10 flex items-center gap-2 text-sm text-slate-600">
          <Link
            to="/tools"
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-lime-700 ring-1 ring-lime-100 hover:bg-lime-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
