import React from "react";
import { Sparkles, Gauge, Layers, Zap, Crown, ArrowLeft, MessageSquare, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "klaviyo vs omnisend vs mailerlite";
const canonical = buildCanonical("/tools/compare/klaviyo-vs-omnisend-vs-mailerlite");

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
  { key: "klaviyo", name: "Klaviyo", blurb: "Advanced ecommerce personalization and predictive analytics.", url: "https://www.klaviyo.com/" },
  { key: "omnisend", name: "Omnisend", blurb: "Email + SMS for ecommerce with strong value.", url: "https://www.omnisend.com/" },
  { key: "mailerlite", name: "MailerLite", blurb: "Simplest email builder with friendly pricing.", url: "https://www.mailerlite.com/" },
];

const comparisonRows = [
  {
    label: "Ecommerce integrations & data",
    klaviyo: "Deep Shopify/BigCommerce data syncs, predictive metrics, product feeds.",
    omnisend: "Strong ecommerce integrations and automation suited for DTC brands.",
    mailerlite: "Basic ecommerce data; geared toward simpler stores or creators.",
  },
  {
    label: "Segmentation & personalization",
    klaviyo: "Advanced behavioral/predictive segments and dynamic content.",
    omnisend: "Rich segments with cross-channel triggers; less predictive than Klaviyo.",
    mailerlite: "Simple segments and personalization for lean teams.",
  },
  {
    label: "SMS capability",
    klaviyo: "Built-in SMS with solid deliverability; pricing can add up.",
    omnisend: "Excellent SMS bundles and automation alongside email.",
    mailerlite: "Limited SMS; relies on integrations/add-ons.",
  },
  {
    label: "Ease of use",
    klaviyo: "Powerful but denser UI; best with time to onboard.",
    omnisend: "Friendly UI with guided flows for ecommerce marketers.",
    mailerlite: "Easiest UI and editors for beginners and creators.",
  },
  {
    label: "Total cost at scale",
    klaviyo: "Higher cost at volume, justified if using advanced segmentation.",
    omnisend: "Good value for email + SMS bundles.",
    mailerlite: "Lowest overall cost for newsletters and simple automations.",
  },
];

const scoreboard = [
  { label: "Ecommerce integrations & data", scores: { klaviyo: 9.6, omnisend: 9.0, mailerlite: 7.2 } },
  { label: "Segmentation & personalization", scores: { klaviyo: 9.5, omnisend: 8.8, mailerlite: 7.5 } },
  { label: "SMS capability", scores: { klaviyo: 9.0, omnisend: 9.3, mailerlite: 6.0 } },
  { label: "Ease of use", scores: { klaviyo: 8.2, omnisend: 8.6, mailerlite: 9.2 } },
  { label: "Total cost at scale", scores: { klaviyo: 7.4, omnisend: 8.3, mailerlite: 9.0 } },
];

const avg = (key) => {
  const total = scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0);
  return (total / scoreboard.length).toFixed(1);
};
const averages = { klaviyo: avg("klaviyo"), omnisend: avg("omnisend"), mailerlite: avg("mailerlite") };
const overallWinner = Object.entries(averages).sort((a, b) => Number(b[1]) - Number(a[1]))[0][0];

const pricingTable = [
  { plan: "Klaviyo (email + SMS)", monthly: "Usage-based", annual: "—", limits: "Based on contacts/sends/SMS", notes: "Best when advanced personalization lifts revenue." },
  { plan: "Omnisend Standard/Pro", monthly: "From ~$16 / ~$59", annual: "Lower on annual", limits: "Email + SMS bundles", notes: "Strong value when you send both email and SMS." },
  { plan: "MailerLite Growing Business/Advanced", monthly: "From ~$10 / ~$20", annual: "Lower on annual", limits: "Generous email sends, basic automation", notes: "Cheapest for lean teams and newsletters." },
];

const faqs = [
  { q: `Is Klaviyo better than Omnisend or MailerLite in ${YEAR}?`, a: "Klaviyo wins for advanced ecommerce segmentation and predictive analytics. Omnisend wins for balanced email + SMS value. MailerLite wins for simplicity and lowest cost." },
  { q: "Which is best for advanced ecommerce personalization?", a: "Klaviyo—deep data syncs, predictive segments, product feeds, and dynamic content." },
  { q: "Which is best value for email + SMS?", a: "Omnisend—solid automation with SMS bundles priced well for DTC brands." },
  { q: "Which is easiest for beginners or creators?", a: "MailerLite—clean UI, simple automations, and low pricing." },
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
    pros: ["Deep ecommerce data and predictive analytics", "Advanced segmentation/personalization", "Strong email + SMS automations"],
    cons: ["Higher cost at scale", "UI is denser for beginners", "Best ROI when product/catalog data is used fully"],
  },
  omnisend: {
    pros: ["Great email + SMS bundles", "Friendly UI and templated flows", "Solid ecommerce integrations and automation"],
    cons: ["Less predictive than Klaviyo", "Depth of analytics below Klaviyo", "Not as simple as MailerLite for beginners"],
  },
  mailerlite: {
    pros: ["Easiest UI and editors", "Lowest cost for newsletters/lean teams", "Decent automation for basics"],
    cons: ["Limited SMS", "Ecommerce data/segments lighter", "Fewer advanced personalization options"],
  },
};

const LogoBadge = ({ name }) => {
  const meta = brandMeta[name.toLowerCase()] || { gradient: "from-slate-400 to-slate-600", badge: "bg-slate-100 text-slate-900" };
  return (
    <div className="flex items-center gap-2">
      <div className={`flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br ${meta.gradient}`}>
        {meta.logo ? <img src={meta.logo} alt={`${name} logo`} className="h-full w-full object-cover" /> : <span className="text-sm font-bold text-white">{name.slice(0, 2).toUpperCase()}</span>}
      </div>
      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${meta.badge}`}>{name}</span>
    </div>
  );
};

export default function KlaviyoVsOmnisendVsMailerLitePage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Klaviyo vs Omnisend vs MailerLite – Honest Comparison (${YEAR})`}
        description="Compare Klaviyo, Omnisend, and MailerLite on ecommerce data, segmentation, SMS, ease of use, pricing, and who wins for your email/SMS strategy."
        canonical={canonical}
        keywords={`${primaryKeyword}, email marketing comparison, sms ecommerce`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Email & SMS for ecommerce</p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">Klaviyo vs Omnisend vs MailerLite – Honest Comparison ({YEAR})</h1>
        <p className="mt-4 text-lg text-slate-700">
          We built ecommerce flows, campaigns, and SMS journeys in Klaviyo, Omnisend, and MailerLite. Klaviyo leads on advanced personalization and predictive analytics. Omnisend balances email + SMS with great value.
          MailerLite is the simplest, most affordable option for lean teams and newsletters. Here’s the detailed breakdown.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2 space-y-3 rounded-3xl bg-emerald-50/90 p-6 ring-1 ring-emerald-100">
            <div className="flex items-center gap-2 text-lg font-semibold text-emerald-800">
              <Sparkles className="h-5 w-5" /> Quick Verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>Klaviyo</strong> for advanced ecommerce data, predictive segments, and deep personalization. Choose <strong>Omnisend</strong> if you want solid email + SMS automation and value for DTC brands.
              Choose <strong>MailerLite</strong> when you need the simplest, lowest-cost platform for newsletters and light automation.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-800">
              <Crown className="h-4 w-4" /> Overall scoreboard winner: {overallWinner.charAt(0).toUpperCase() + overallWinner.slice(1)}{" "}
              <span className="text-xs font-medium text-emerald-700">(avg: {averages[overallWinner]}/10)</span>
            </div>
          </div>
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <MessageSquare className="h-5 w-5 text-emerald-700" /> Best for advanced personalization
            </div>
            <p className="text-sm text-slate-700">Klaviyo’s predictive segments, product feeds, and dynamic content drive the richest personalization for ecommerce teams.</p>
          </div>
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Smartphone className="h-5 w-5 text-indigo-700" /> Best for email + SMS value
            </div>
            <p className="text-sm text-slate-700">Omnisend’s bundled email + SMS flows and pricing make it a strong pick for DTC marketers who use both channels.</p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {contenders.map((card) => (
            <div key={card.key} className={`relative overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden bg-gradient-to-br ${brandMeta[card.key]?.gradient || "from-slate-500 to-slate-700"} p-5 shadow-md`}>
              <div className="absolute inset-0 opacity-10">
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white" />
                <div className="pointer-events-none absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-white" />
              </div>
              <div className="relative flex items-start justify-between">
                <LogoBadge name={card.name} />
              </div>
              <p className="relative mt-3 text-sm font-medium text-white/90">{card.blurb}</p>
            </div>
          ))}
        </div>

        
        <ProsConsSection contenders={contenders} prosCons={prosCons} />


        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                <h3 className="text-lg font-semibold text-slate-900">{item.q}</h3>
                <p className="mt-1 text-slate-700">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-10 flex items-center gap-2 text-sm text-slate-600">
          <Link to="/tools" className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-emerald-700 ring-1 ring-emerald-100 hover:bg-emerald-50">
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
