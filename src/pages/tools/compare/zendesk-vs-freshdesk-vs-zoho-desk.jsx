import React from "react";
import { Sparkles, Gauge, Layers, Zap, Crown, ArrowLeft, MessageSquare, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "zendesk vs freshdesk vs zoho desk";
const canonical = buildCanonical("/tools/compare/zendesk-vs-freshdesk-vs-zoho-desk");

const brandMeta = {
  zendesk: {
    gradient: "from-emerald-500 via-teal-500 to-indigo-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/zendesk.com",
  },
  freshdesk: {
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/freshdesk.com",
  },
  "zoho desk": {
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/zoho.com",
  },
};

const contenders = [
  { key: "zendesk", name: "Zendesk", blurb: "Enterprise-grade omnichannel support with deep marketplace.", url: "/tools/zendesk" },
  { key: "freshdesk", name: "Freshdesk", blurb: "Affordable omnichannel helpdesk for SMB and mid-market.", url: "/tools/freshdesk" },
  { key: "zoho desk", name: "Zoho Desk", blurb: "Helpdesk aligned with the Zoho suite and Zoho One pricing.", url: "/tools/zoho-desk" },
];

const comparisonRows = [
  {
    label: "Omnichannel depth",
    zendesk: "Email, chat, social, telephony, bots, strong marketplace for channels.",
    freshdesk: "Email, chat, phone, WhatsApp; solid coverage for SMB/mid.",
    "zoho desk": "Email, chat, phone; aligns with Zoho Channels and CRM.",
  },
  {
    label: "Automation & workflows",
    zendesk: "Robust triggers/macros, routing, SLAs, and role controls.",
    freshdesk: "Good automations and SLAs; strong for the price.",
    "zoho desk": "Solid automations; gains power when paired with Zoho Flow/CRM.",
  },
  {
    label: "Marketplace & integrations",
    zendesk: "Large marketplace; mature apps for enterprise stacks.",
    freshdesk: "Good marketplace; strong defaults and integrations.",
    "zoho desk": "Best alignment with Zoho apps; marketplace is smaller.",
  },
  {
    label: "Reporting & analytics",
    zendesk: "Explore offers rich dashboards and custom metrics.",
    freshdesk: "Good reports for queues/SLAs; customizable dashboards.",
    "zoho desk": "Solid reporting; deeper when combined with Zoho Analytics.",
  },
  {
    label: "Value/pricing",
    zendesk: "Premium pricing for enterprise breadth.",
    freshdesk: "Excellent value for SMB/mid-market omnichannel.",
    "zoho desk": "Great value in the Zoho suite/Zoho One bundle.",
  },
];

const scoreboard = [
  { label: "Omnichannel depth", scores: { zendesk: 9.4, freshdesk: 8.6, "zoho desk": 8.2 } },
  { label: "Automation & workflows", scores: { zendesk: 9.2, freshdesk: 8.5, "zoho desk": 8.0 } },
  { label: "Marketplace & integrations", scores: { zendesk: 9.3, freshdesk: 8.4, "zoho desk": 7.8 } },
  { label: "Reporting & analytics", scores: { zendesk: 9.0, freshdesk: 8.3, "zoho desk": 8.0 } },
  { label: "Value/pricing", scores: { zendesk: 7.6, freshdesk: 9.0, "zoho desk": 9.2 } },
];

const avg = (key) => {
  const total = scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0);
  return (total / scoreboard.length).toFixed(1);
};
const averages = { zendesk: avg("zendesk"), freshdesk: avg("freshdesk"), "zoho desk": avg("zoho desk") };
const overallWinner = Object.entries(averages).sort((a, b) => Number(b[1]) - Number(a[1]))[0][0];

const pricingTable = [
  { plan: "Zendesk Suite", monthly: "From ~$55+", annual: "Lower on annual", limits: "Omnichannel, bots, advanced routing", notes: "Best for enterprise breadth and marketplace depth." },
  { plan: "Freshdesk Pro/Enterprise", monthly: "From ~$18+", annual: "Lower on annual", limits: "Omnichannel, automations, SLAs", notes: "Great value for SMB/mid with strong channel coverage." },
  { plan: "Zoho Desk Professional/Enterprise", monthly: "From ~$20+", annual: "Lower on annual", limits: "Helpdesk with Zoho suite alignment", notes: "Best if you already use Zoho apps or Zoho One." },
];

const faqs = [
  { q: `Is Zendesk better than Freshdesk or Zoho Desk in ${YEAR}?`, a: "Zendesk leads on omnichannel depth, marketplace, and enterprise controls. Freshdesk wins on value for SMB/mid. Zoho Desk is best if you want tight alignment with the Zoho suite." },
  { q: "Which is most affordable?", a: "Freshdesk and Zoho Desk are more affordable; Zendesk is pricier for enterprise breadth and marketplace depth." },
  { q: "Which fits enterprise needs?", a: "Zendesk—strongest admin controls, routing, and integrations for complex environments." },
  { q: "Which fits if we use Zoho apps?", a: "Zoho Desk—best fit with Zoho CRM/Books/Projects and Zoho One licensing." },
  { q: "Which is easiest to roll out for SMB?", a: "Freshdesk—good defaults, channels, and SLAs at a lower price." },
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
  zendesk: {
    pros: ["Deep omnichannel + marketplace", "Strong automation and routing", "Enterprise admin/security controls", "Robust analytics (Explore)"],
    cons: ["Higher cost at scale", "Requires setup for full potential", "May be heavy for small teams"],
  },
  freshdesk: {
    pros: ["Excellent value for SMB/mid", "Good omnichannel coverage", "Solid automations and SLAs", "Friendly UI and quick setup"],
    cons: ["Less enterprise depth than Zendesk", "Marketplace smaller than Zendesk", "Advanced analytics less robust"],
  },
  "zoho desk": {
    pros: ["Aligned with Zoho suite/Zoho One pricing", "Solid helpdesk + automations", "Good value for multi-app adoption"],
    cons: ["Marketplace smaller", "Some advanced configs need Zoho ecosystem know-how", "Omnichannel depth less than Zendesk"],
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

export default function ZendeskVsFreshdeskVsZohoDeskPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Zendesk vs Freshdesk vs Zoho Desk – Honest Comparison (${YEAR})`}
        description="Compare Zendesk, Freshdesk, and Zoho Desk on omnichannel support, automation, pricing, ecosystem fit, analytics, and best use cases."
        canonical={canonical}
        keywords={`${primaryKeyword}, helpdesk comparison, zendesk, freshdesk, zoho desk`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Support & helpdesk</p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">Zendesk vs Freshdesk vs Zoho Desk – Honest Comparison ({YEAR})</h1>
        <p className="mt-4 text-lg text-slate-700">
          We compared Zendesk, Freshdesk, and Zoho Desk across omnichannel depth, automation, pricing, ecosystem fit, and analytics. Zendesk leads for enterprise omnichannel; Freshdesk offers strong value for SMB/mid; Zoho
          Desk aligns with Zoho suite and pricing.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2 space-y-3 rounded-3xl bg-emerald-50/90 p-6 ring-1 ring-emerald-100">
            <div className="flex items-center gap-2 text-lg font-semibold text-emerald-800">
              <Sparkles className="h-5 w-5" /> Quick Verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>Zendesk</strong> for enterprise omnichannel and marketplace depth. Choose <strong>Freshdesk</strong> for strong SMB/mid value with solid channels. Choose <strong>Zoho Desk</strong> if you want helpdesk aligned to the Zoho suite and Zoho One pricing.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-800">
              <Crown className="h-4 w-4" /> Overall scoreboard winner: {overallWinner.charAt(0).toUpperCase() + overallWinner.slice(1)}{" "}
              <span className="text-xs font-medium text-emerald-700">(avg: {averages[overallWinner]}/10)</span>
            </div>
          </div>
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Shield className="h-5 w-5 text-emerald-700" /> Best for enterprise omnichannel
            </div>
            <p className="text-sm text-slate-700">Zendesk has the most mature omnichannel, marketplace, and admin controls; best for complex environments.</p>
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
              <a className="relative mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-emerald-50" href={card.url}>
                View tool <MessageSquare className="h-4 w-4" />
              </a>
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
