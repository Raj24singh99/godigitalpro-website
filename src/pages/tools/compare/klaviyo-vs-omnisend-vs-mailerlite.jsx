import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  Zap,
  Crown,
  ArrowLeft,
  MessageSquare,
  Smartphone,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "klaviyo vs omnisend vs mailerlite";
const canonical = buildCanonical(
  "/tools/compare/klaviyo-vs-omnisend-vs-mailerlite"
);

const brandMeta = {
  klaviyo: {
    gradient: "from-emerald-500 via-teal-500 to-indigo-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/klaviyo.com",
  },
  omnisend: {
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/omnisend.com",
  },
  mailerlite: {
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/mailerlite.com",
  },
};

const contenders = [
  {
    key: "klaviyo",
    name: "Klaviyo",
    blurb: "Advanced ecommerce personalisation and predictive analytics.",
    url: "https://www.klaviyo.com/",
  },
  {
    key: "omnisend",
    name: "Omnisend",
    blurb: "Email + SMS for ecommerce with strong value.",
    url: "https://www.omnisend.com/",
  },
  {
    key: "mailerlite",
    name: "MailerLite",
    blurb: "Simplest email builder with friendly pricing.",
    url: "https://www.mailerlite.com/",
  },
];

const comparisonRows = [
  {
    label: "Ecommerce integrations & data",
    klaviyo:
      "Deep Shopify/BigCommerce data syncs, predictive metrics, product feeds.",
    omnisend:
      "Strong ecommerce integrations and automation suited for DTC brands.",
    mailerlite:
      "Basic ecommerce data; geared toward simpler stores or creator-led shops.",
  },
  {
    label: "Segmentation & personalisation",
    klaviyo:
      "Advanced behavioural/predictive segments and dynamic content blocks.",
    omnisend:
      "Rich segments with cross-channel triggers; less predictive than Klaviyo.",
    mailerlite:
      "Simple segments and personalisation for lean teams and newsletters.",
  },
  {
    label: "SMS capability",
    klaviyo:
      "Built-in SMS with solid deliverability; pricing can stack up at volume.",
    omnisend: "Excellent SMS bundles and automation alongside email.",
    mailerlite: "Limited SMS; relies on integrations/add-ons.",
  },
  {
    label: "Ease of use",
    klaviyo:
      "Powerful but denser UI; best if you can invest time in onboarding.",
    omnisend: "Friendly UI with guided flows for ecommerce marketers.",
    mailerlite: "Easiest UI and editors for beginners and creators.",
  },
  {
    label: "Total cost at scale",
    klaviyo:
      "Higher cost at volume, justified when advanced segmentation drives revenue.",
    omnisend: "Good value for email + SMS bundles.",
    mailerlite: "Lowest overall cost for newsletters and simple automations.",
  },
];

const scoreboard = [
  {
    label: "Ecommerce integrations & data",
    scores: { klaviyo: 9.6, omnisend: 9.0, mailerlite: 7.2 },
  },
  {
    label: "Segmentation & personalisation",
    scores: { klaviyo: 9.5, omnisend: 8.8, mailerlite: 7.5 },
  },
  {
    label: "SMS capability",
    scores: { klaviyo: 9.0, omnisend: 9.3, mailerlite: 6.0 },
  },
  {
    label: "Ease of use",
    scores: { klaviyo: 8.2, omnisend: 8.6, mailerlite: 9.2 },
  },
  {
    label: "Total cost at scale",
    scores: { klaviyo: 7.4, omnisend: 8.3, mailerlite: 9.0 },
  },
];

const avg = (key) => {
  const total = scoreboard.reduce(
    (sum, row) => sum + (row.scores[key] || 0),
    0
  );
  return (total / scoreboard.length).toFixed(1);
};

const averages = {
  klaviyo: avg("klaviyo"),
  omnisend: avg("omnisend"),
  mailerlite: avg("mailerlite"),
};

const prettyNames = {
  klaviyo: "Klaviyo",
  omnisend: "Omnisend",
  mailerlite: "MailerLite",
};

const overallWinnerKey = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const overallWinnerLabel = prettyNames[overallWinnerKey] || overallWinnerKey;

const pricingTable = [
  {
    plan: "Klaviyo (email + SMS)",
    monthly: "Usage-based",
    annual: "—",
    limits: "Pricing based on contacts, email volume, and SMS usage.",
    notes: "Best when advanced personalisation and predictive features lift revenue per contact.",
  },
  {
    plan: "Omnisend Standard / Pro",
    monthly: "From ~ $16 / ~ $59",
    annual: "Lower on annual",
    limits: "Email + SMS bundles with send and contact thresholds.",
    notes: "Strong value when you actively use both email and SMS with prebuilt ecommerce flows.",
  },
  {
    plan: "MailerLite Growing Business / Advanced",
    monthly: "From ~ $10 / ~ $20",
    annual: "Lower on annual",
    limits: "Generous email sends with basic automation; higher tiers add extras.",
    notes: "Cheapest option for lean teams, creators, and newsletter-led businesses.",
  },
];

const faqs = [
  {
    q: `Is Klaviyo better than Omnisend or MailerLite in ${YEAR}?`,
    a: "Klaviyo wins for advanced ecommerce segmentation, data, and predictive analytics. Omnisend wins when you want balanced email + SMS value and prebuilt ecommerce flows. MailerLite wins if you prioritise simplicity and lowest cost for newsletters and light automation.",
  },
  {
    q: "Which is best for advanced ecommerce personalisation?",
    a: "Klaviyo—thanks to deep Shopify/BigCommerce data syncs, predictive segments, product feeds, and dynamic content that can be driven by behaviour and value.",
  },
  {
    q: "Which is best value for email + SMS?",
    a: "Omnisend—its email + SMS bundles, ecommerce-focused automations, and pricing structure make it attractive for DTC and omnichannel brands using both channels.",
  },
  {
    q: "Which is easiest for beginners or creators?",
    a: "MailerLite—its clean UI, straightforward editors, and simple automation builder are easiest to adopt for creators, newsletters, and lean ecommerce teams.",
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
  klaviyo: {
    pros: [
      "Deep ecommerce data and predictive analytics for Shopify/BigCommerce and more",
      "Advanced segmentation and personalisation across email and SMS",
      "Strong automation library for high-intent ecommerce journeys",
    ],
    cons: [
      "Higher cost at scale, especially with heavy SMS usage",
      "UI can feel dense for new or non-technical marketers",
      "Best ROI only when product and behavioural data are used fully",
    ],
  },
  omnisend: {
    pros: [
      "Great email + SMS bundles with strong ecommerce focus",
      "Friendly UI and templated ecommerce flows",
      "Solid integrations with major ecommerce platforms",
    ],
    cons: [
      "Less predictive depth than Klaviyo",
      "Analytics and experimentation tools not as advanced as Klaviyo",
      "Can feel heavier than MailerLite for very simple use-cases",
    ],
  },
  mailerlite: {
    pros: [
      "Easiest UI and editors for non-specialists",
      "Lowest cost for newsletters and lean marketing teams",
      "Decent automation for welcome sequences and simple funnels",
    ],
    cons: [
      "Limited SMS; typically needs integrations for full omnichannel",
      "Ecommerce data and segments are lighter than Klaviyo/Omnisend",
      "Fewer advanced personalisation and predictive options",
    ],
  },
};

const LogoBadge = ({ name }) => {
  const key = name.toLowerCase();
  const meta =
    brandMeta[key] || {
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

export default function KlaviyoVsOmnisendVsMailerLitePage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Klaviyo vs Omnisend vs MailerLite – Honest Comparison (${YEAR})`}
        description="Compare Klaviyo, Omnisend, and MailerLite on ecommerce data, segmentation, SMS, ease of use, pricing, and which tool wins for your email/SMS strategy."
        canonical={canonical}
        keywords={`${primaryKeyword}, email marketing comparison, sms ecommerce, klaviyo vs omnisend, mailerlite vs klaviyo`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Email & SMS for ecommerce
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Klaviyo vs Omnisend vs MailerLite – Honest Comparison ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          We built ecommerce flows, campaigns, and SMS journeys in{" "}
          <strong>Klaviyo</strong>, <strong>Omnisend</strong>, and{" "}
          <strong>MailerLite</strong>. Klaviyo leads on advanced personalisation
          and predictive analytics. Omnisend balances email + SMS with strong
          ecommerce value. MailerLite is the simplest and most affordable option
          for lean teams and creator-led brands. Here is the detailed breakdown.
        </p>

        {/* Quick verdict & highlight cards */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2 space-y-3 rounded-3xl bg-emerald-50/90 p-6 ring-1 ring-emerald-100">
            <div className="flex items-center gap-2 text-lg font-semibold text-emerald-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>Klaviyo</strong> for{" "}
              <strong>
                deep ecommerce data, predictive segments, and advanced
                personalisation
              </strong>
              . Choose <strong>Omnisend</strong> if you want{" "}
              <strong>balanced email + SMS</strong> with strong value for DTC
              brands. Choose <strong>MailerLite</strong> when you need{" "}
              <strong>
                the simplest, lowest-cost platform for newsletters and light
                automation
              </strong>
              .
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-800">
              <Crown className="h-4 w-4" /> Overall scoreboard winner:{" "}
              {overallWinnerLabel}{" "}
              <span className="text-xs font-medium text-emerald-700">
                (avg: {averages[overallWinnerKey]}/10)
              </span>
            </div>
          </div>

          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <MessageSquare className="h-5 w-5 text-emerald-700" /> Best for
              advanced personalisation
            </div>
            <p className="text-sm text-slate-700">
              <strong>Klaviyo</strong> shines when you want{" "}
              <strong>predictive segments, product feeds, and dynamic content</strong>{" "}
              that react to real ecommerce behaviour.
            </p>
          </div>

          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Smartphone className="h-5 w-5 text-indigo-700" /> Best for email
              + SMS value
            </div>
            <p className="text-sm text-slate-700">
              <strong>Omnisend</strong> offers{" "}
              <strong>bundled email + SMS pricing and flows</strong> tuned for
              DTC and ecommerce brands using both channels.
            </p>
          </div>
        </div>

        {/* Contender cards */}
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
        <section className="mt-12 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-emerald-600" /> Side-by-side
            comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Klaviyo</th>
                  <th className="px-4 py-3">Omnisend</th>
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
                      {row.klaviyo}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.omnisend}
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
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Criterion</th>
                  <th className="px-4 py-3">Klaviyo</th>
                  <th className="px-4 py-3">Omnisend</th>
                  <th className="px-4 py-3">MailerLite</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const entries = Object.entries(row.scores);
                  const [winnerKey] =
                    entries.sort((a, b) => Number(b[1]) - Number(a[1]))[0] ||
                    [];
                  const winnerName = prettyNames[winnerKey] || "";

                  return (
                    <tr key={row.label}>
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "klaviyo"
                            ? "font-semibold text-emerald-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.klaviyo}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "omnisend"
                            ? "font-semibold text-indigo-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.omnisend}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "mailerlite"
                            ? "font-semibold text-amber-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.mailerlite}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {winnerName}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-emerald-50 via-indigo-50 to-amber-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.klaviyo}
                  </td>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages.omnisend}
                  </td>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages.mailerlite}
                  </td>
                  <td className="px-4 py-3 font-bold text-slate-900">
                    {overallWinnerLabel}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">
            Pricing snapshots (approximate)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
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
                    <td className="px-4 py-3 text-slate-700">
                      {row.annual}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.limits}
                    </td>
                    <td className="px-4 py-3 text-slate-700">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600">
            Pricing for Klaviyo, Omnisend, and MailerLite changes frequently and
            depends on list size, sends, SMS volumes, and region. Always confirm
            on their official pricing pages and model your blended email + SMS
            costs before committing.
          </p>
        </section>

        {/* Pros & cons */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        {/* FAQ */}
        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold">FAQ</h2>
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
        <div className="mt-10 flex items-center gap-2 text-sm text-slate-600">
          <Link
            to="/tools"
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-emerald-700 ring-1 ring-emerald-100 hover:bg-emerald-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
