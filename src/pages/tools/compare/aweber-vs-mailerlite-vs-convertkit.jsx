import React from "react";
import { Sparkles, Crown, Layers, BarChart3, ArrowLeft, Gauge, Zap, Shield, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const canonical = buildCanonical("/tools/compare/aweber-vs-mailerlite-vs-convertkit");
const primaryKeyword = "aweber vs mailerlite vs convertkit";

const brandMeta = {
  aweber: {
    gradient: "from-sky-500 via-blue-500 to-indigo-500",
    badge: "bg-sky-100 text-sky-900",
    logo: "https://logo.clearbit.com/aweber.com",
  },
  mailerlite: {
    gradient: "from-emerald-500 via-green-500 to-teal-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/mailerlite.com",
  },
  convertkit: {
    gradient: "from-rose-500 via-pink-500 to-indigo-500",
    badge: "bg-rose-100 text-rose-900",
    logo: "https://logo.clearbit.com/convertkit.com",
  },
};

const contenders = [
  {
    key: "aweber",
    name: "AWeber",
    blurb: "Inbox-first email platform with templates, basic automation, and landing pages.",
    url: "https://www.aweber.com/",
  },
  {
    key: "mailerlite",
    name: "MailerLite",
    blurb: "Modern, lightweight ESP with clean UI, visual automations, and strong value.",
    url: "https://www.mailerlite.com/",
  },
  {
    key: "convertkit",
    name: "ConvertKit",
    blurb: "Creator-first platform with powerful automations and digital product checkout.",
    url: "https://convertkit.com/",
  },
];

const comparisonRows = [
  {
    label: "Best for",
    aweber: "SMBs sending newsletters & promos",
    mailerlite: "Lean teams wanting modern UI & value",
    convertkit: "Creators selling digital products & memberships",
  },
  {
    label: "Automation style",
    aweber: "Rules, basic sequences, simple splits",
    mailerlite: "Visual workflows with conditions & delays",
    convertkit: "Visual automations, rules, events, link triggers",
  },
  {
    label: "Landing pages & sites",
    aweber: "Landing pages + signup forms",
    mailerlite: "Landing pages, simple sites, popups",
    convertkit: "Landing pages & opt-in forms (no full sites)",
  },
  {
    label: "Monetization",
    aweber: "Basic ecommerce via integrations and buy buttons",
    mailerlite: "Integrations with major carts & Stripe",
    convertkit: "Native product checkout, subscriptions, tip jars",
  },
  {
    label: "Deliverability focus",
    aweber: "Long-standing sender reputation & guidance",
    mailerlite: "Strong infrastructure and clean IPs",
    convertkit: "Solid for creators; tagging & segmentation help",
  },
  {
    label: "Pricing feel",
    aweber: "Approachable entry; scales by list size",
    mailerlite: "Generous free/low tiers; strong value",
    convertkit: "Priced by subscribers + commerce features",
  },
];

const scoreboard = [
  { label: "Ease of use", aweber: 8.6, mailerlite: 9.2, convertkit: 9.0 },
  { label: "Automation power", aweber: 8.0, mailerlite: 8.7, convertkit: 9.2 },
  { label: "Deliverability", aweber: 9.2, mailerlite: 8.8, convertkit: 8.9 },
  { label: "Landing pages & forms", aweber: 8.5, mailerlite: 9.0, convertkit: 8.6 },
  { label: "Value for money", aweber: 8.3, mailerlite: 9.3, convertkit: 8.4 },
];

const pricingTable = [
  {
    plan: "AWeber Lite (up to ~500 subs)",
    monthly: "From around ~$15–$20/mo",
    annual: "Discounts on annual prepay",
    limits: "Email automation, templates, landing pages, some features tiered by list size",
    notes: "Good starting point for small lists and straightforward newsletters/promos.",
  },
  {
    plan: "MailerLite Growing Business (up to ~1,000 subs)",
    monthly: "From around ~$10–$15/mo",
    annual: "Lower per month on annual",
    limits: "Most features unlocked early; emails and sites scale with list size",
    notes: "Excellent balance of price, automations, and UI for lean teams.",
  },
  {
    plan: "ConvertKit Creator (up to ~1,000 subs)",
    monthly: "From around ~$15–$25/mo",
    annual: "Cheaper on annual plans",
    limits: "Automation, tagging, creators tools; commerce features included with fees",
    notes: "Best justified if you actively sell digital products or memberships.",
  },
  {
    plan: "ConvertKit Creator Pro (larger lists)",
    monthly: "Varies by list size",
    annual: "Discounted annual billing",
    limits: "Advanced reporting, deliverability tools, priority support",
    notes: "For serious creators and publishers scaling revenue via email.",
  },
];

const featureBullets = {
  automation: [
    "AWeber: Automation builder with basic sequences, tagging, and simple triggers; enough for welcome flows and promos.",
    "MailerLite: Clean visual workflows that handle branching, delays, and behavior-based triggers without overwhelming beginners.",
    "ConvertKit: Deep rules and visual automations with link triggers, purchases, and subscriber events built for creator funnels.",
  ],
  design: [
    "AWeber: Large template library; drag-and-drop editor fine-tuned for classic newsletters and promotions.",
    "MailerLite: Modern, minimal templates with blocks for blogs, SaaS, ecommerce, and digital products; easy brand consistency.",
    "ConvertKit: Leaner, text-first templates favoring creator-style emails; great when you prefer plain or lightly designed emails.",
  ],
  monetization: [
    "AWeber: Can embed buy buttons and integrate with carts; more traditional newsletter monetization.",
    "MailerLite: Integrates with Shopify, WooCommerce, Stripe, and more to send behavior-based campaigns.",
    "ConvertKit: Native checkouts for digital products, paid newsletters, and memberships with tagging driven by purchases.",
  ],
};

const faqs = [
  {
    q: `Who wins overall in ${YEAR}?`,
    a: "MailerLite wins for most small businesses and lean teams because of its modern UI and value. AWeber wins if dependable deliverability and classic newsletters are your priority. ConvertKit wins if you are a creator monetizing digital products or memberships.",
  },
  {
    q: "When should I choose AWeber?",
    a: "Choose AWeber if you want a reliable, inbox-focused ESP with a large template library and simple automations for newsletters, promos, and SMB campaigns.",
  },
  {
    q: "When should I choose MailerLite?",
    a: "Pick MailerLite if you care about a modern interface, visual workflows, landing pages, and strong value at lower subscriber counts.",
  },
  {
    q: "When should I choose ConvertKit?",
    a: "Pick ConvertKit if you are a creator selling courses, digital downloads, or paid newsletters and need advanced tagging, link triggers, and native checkout.",
  },
  {
    q: "Which is easiest for beginners?",
    a: "MailerLite and ConvertKit are generally easier for modern users. AWeber is straightforward too, but its UI feels closer to a classic ESP.",
  },
  {
    q: "Which is better for agencies or multiple brands?",
    a: "MailerLite is strong for agencies managing several small brands thanks to its projects/sites and good value. ConvertKit can work if all brands are creator-led. AWeber fits if you mostly send promotional newsletters for multiple clients.",
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
  aweber: {
    pros: [
      "Long track record for deliverability and inbox placement guidance",
      "Large library of ready-to-send newsletter and promo templates",
      "Landing pages and forms included without heavy complexity",
    ],
    cons: [
      "Automation builder and UI feel more traditional vs newer tools",
      "Advanced segmentation and behavior logic are more limited",
      "Pricing scales directly with list size; fewer ultra-budget tiers",
    ],
  },
  mailerlite: {
    pros: [
      "Clean, modern UI that teams pick up quickly",
      "Visual automations with good power for most lifecycle journeys",
      "Strong value at lower and mid subscriber counts",
    ],
    cons: [
      "Deep enterprise-style features are limited",
      "Interface simplicity means fewer ultra-advanced knobs",
      "Free tier limits can be hit quickly once you scale sends",
    ],
  },
  convertkit: {
    pros: [
      "Built specifically for creators and solo publishers",
      "Powerful tagging, link triggers, and automations for funnels",
      "Native product checkout, tip jars, and paid newsletters",
    ],
    cons: [
      "Pricing can feel higher if you only send basic newsletters",
      "Templates are intentionally minimal—not ideal if you need heavy design",
      "Commerce tools rely on per-transaction fees and may overlap with existing cart stacks",
    ],
  },
};

const avg = (tool) =>
  (scoreboard.reduce((sum, row) => sum + (row[tool] || 0), 0) / scoreboard.length).toFixed(1);

const averages = {
  aweber: avg("aweber"),
  mailerlite: avg("mailerlite"),
  convertkit: avg("convertkit"),
};

const overallWinner =
  Math.max(averages.aweber, averages.mailerlite, averages.convertkit) === parseFloat(averages.mailerlite)
    ? "MailerLite"
    : Math.max(averages.aweber, averages.convertkit) === parseFloat(averages.convertkit)
    ? "ConvertKit"
    : "AWeber";

const LogoBadge = ({ name }) => {
  const key = name.toLowerCase().includes("aweber")
    ? "aweber"
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
      <div className={`flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br ${meta.gradient}`}>
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

export default function AweberVsMailerLiteVsConvertKitPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`AWeber vs MailerLite vs ConvertKit (${YEAR}) – Email marketing comparison`}
        description="In-depth comparison of AWeber, MailerLite, and ConvertKit on automation, deliverability, landing pages, pricing, and monetization to help you choose the right email platform."
        canonical={canonical}
        keywords={`${primaryKeyword}, aweber review, mailerlite review, convertkit review, email marketing comparison, email automation tools`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">Email marketing platforms</p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          AWeber vs MailerLite vs ConvertKit ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          AWeber focuses on deliverability and classic newsletters, MailerLite on a modern UX and value, and ConvertKit on creator-first funnels and digital product sales. Below is a structured, side-by-side breakdown so you
          can decide which email service provider fits your list, funnels, and budget.
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
              <p className="relative mt-3 text-sm font-medium text-white/90">{item.blurb}</p>
            </a>
          ))}
        </div>

        {/* Quick verdict + scoreboard */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-sky-100 bg-sky-50 px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sky-900">
              <Sparkles className="h-5 w-5" />
              <p className="text-lg font-semibold">Quick verdict</p>
            </div>
            <p className="mt-2 text-slate-800">
              Choose <strong>AWeber</strong> if you prioritise deliverability and classic SMB newsletters,{" "}
              <strong>MailerLite</strong> if you want a clean UI with visual automations and strong value, and{" "}
              <strong>ConvertKit</strong> if you are a creator monetizing digital products, paid newsletters, or memberships.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Crown className="h-4 w-4 text-sky-600" /> Overall scoreboard winner: {overallWinner}{" "}
              <span className="text-xs text-slate-600">
                (avg:{" "}
                {overallWinner === "MailerLite"
                  ? averages.mailerlite
                  : overallWinner === "ConvertKit"
                  ? averages.convertkit
                  : averages.aweber}
                /10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              The “best” platform depends on your business model: deliverability-led newsletters, lean B2B/B2C flows, or creator monetization.
            </p>
          </div>
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-sky-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">AWeber</th>
                  <th className="px-4 py-3">MailerLite</th>
                  <th className="px-4 py-3">ConvertKit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">{row.label}</th>
                    <td className="px-4 py-3 text-slate-700">{row.aweber}</td>
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
                  <th className="px-4 py-3">AWeber</th>
                  <th className="px-4 py-3">MailerLite</th>
                  <th className="px-4 py-3">ConvertKit</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const winner =
                    row.aweber === row.mailerlite && row.mailerlite === row.convertkit
                      ? "Tie"
                      : Math.max(row.aweber, row.mailerlite, row.convertkit) === row.aweber
                      ? "AWeber"
                      : Math.max(row.mailerlite, row.convertkit) === row.mailerlite
                      ? "MailerLite"
                      : "ConvertKit";

                  return (
                    <tr key={row.label}>
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">{row.label}</th>
                      <td className={`px-4 py-3 ${winner === "AWeber" ? "font-semibold text-sky-700" : "text-slate-700"}`}>
                        {row.aweber}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "MailerLite" ? "font-semibold text-emerald-700" : "text-slate-700"
                        }`}
                      >
                        {row.mailerlite}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "ConvertKit" ? "font-semibold text-rose-700" : "text-slate-700"
                        }`}
                      >
                        {row.convertkit}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">{winner}</td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-sky-50 via-emerald-50 to-rose-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">Average (winner overall)</th>
                  <td className="px-4 py-3 font-semibold text-sky-800">{averages.aweber}</td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">{averages.mailerlite}</td>
                  <td className="px-4 py-3 font-semibold text-rose-800">{averages.convertkit}</td>
                  <td className="px-4 py-3 font-bold text-slate-900">{overallWinner}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Feature comparison */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-sky-600" /> Feature Comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Zap className="h-5 w-5 text-amber-600" /> Automation & lifecycle journeys
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.automation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Mail className="h-5 w-5 text-sky-600" /> Design, landing pages & forms
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.design.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Shield className="h-5 w-5 text-emerald-600" /> Monetization & list monetisation
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
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">{row.plan}</th>
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
            Pricing changes frequently and often varies by subscriber count, emails sent, and promotions. Always confirm latest pricing and free-tier limits on the official AWeber, MailerLite, and ConvertKit pricing pages
            before committing.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User Experience & Learning Curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>MailerLite:</strong> Arguably the smoothest UI for teams. Visual automations, campaigns, and landing pages all live in a clean, modern layout that feels intuitive for marketers.
            </li>
            <li>
              <strong>AWeber:</strong> Familiar ESP feel with simple menus and a focus on campaigns and lists. Very approachable if you have used classic email tools before and want less “app-like” complexity.
            </li>
            <li>
              <strong>ConvertKit:</strong> Built for creators. If you think in terms of broadcasts, sequences, and tags, the UI feels natural—especially for solo creators or small media brands.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-World Use-Cases & Winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Local business / SMB newsletters and promos:</strong> AWeber wins with deliverability focus, templates, and straightforward automations.
            </li>
            <li>
              <strong>SaaS, startups, and lean marketing teams:</strong> MailerLite wins with modern workflows, landing pages, and strong value on growing lists.
            </li>
            <li>
              <strong>Solo creators, coaches, and course sellers:</strong> ConvertKit wins with funnels, tagging, and native digital product checkout.
            </li>
            <li>
              <strong>Agencies running multiple small-brand lists:</strong> MailerLite often wins thanks to clean project management and economically scaling pricing.
            </li>
          </ul>
        </section>

        {/* Pros & Cons section */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        {/* Who wins for… */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Who wins for…</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">AWeber</h3>
              <p className="text-sm text-slate-700">
                Best when you want dependable inboxing, classic newsletters, and simple landing pages without overcomplicating your tech stack.
              </p>
              <p className="mt-2 text-sm font-semibold text-sky-700">
                Ideal for: Local businesses, SMB promos, traditional email campaigns.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">MailerLite</h3>
              <p className="text-sm text-slate-700">
                Best for teams who want a modern UI, lightweight visual automations, and strong value at lower to mid list sizes.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: SaaS, startups, online brands, and agencies on a budget.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">ConvertKit</h3>
              <p className="text-sm text-slate-700">
                Best for creators building funnels, selling digital products, and running paid newsletters or memberships.
              </p>
              <p className="mt-2 text-sm font-semibold text-rose-700">
                Ideal for: Bloggers, course creators, coaches, and media brands.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
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
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-sky-700 ring-1 ring-sky-100 hover:bg-sky-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
