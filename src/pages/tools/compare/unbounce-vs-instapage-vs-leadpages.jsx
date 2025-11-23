import React from "react";
import { Sparkles, Gauge, Layers, Zap, Crown, ArrowLeft, Layout } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "unbounce vs instapage vs leadpages";
const canonical = buildCanonical("/tools/compare/unbounce-vs-instapage-vs-leadpages");

const brandMeta = {
  unbounce: { gradient: "from-emerald-500 via-teal-500 to-blue-500", badge: "bg-emerald-100 text-emerald-900", logo: "https://logo.clearbit.com/unbounce.com" },
  instapage: { gradient: "from-indigo-500 via-blue-500 to-purple-500", badge: "bg-indigo-100 text-indigo-900", logo: "https://logo.clearbit.com/instapage.com" },
  leadpages: { gradient: "from-amber-500 via-orange-500 to-rose-500", badge: "bg-amber-100 text-amber-900", logo: "https://logo.clearbit.com/leadpages.com" },
};

const contenders = [
  { key: "unbounce", name: "Unbounce", blurb: "AI-assisted landing page builder with Smart Traffic." },
  { key: "instapage", name: "Instapage", blurb: "Enterprise personalization and AMP-ready pages." },
  { key: "leadpages", name: "Leadpages", blurb: "Budget-friendly builder for solopreneurs and SMBs." },
];

const comparisonRows = [
  { label: "Primary strength", unbounce: "AI copy + Smart Traffic routing", instapage: "Personalization + AdMap", leadpages: "Affordable templates + built-in payments" },
  { label: "Collaboration", unbounce: "Workspaces + client permissions", instapage: "Enterprise collaboration & approvals", leadpages: "Basic multi-user editing" },
  { label: "Optimization tools", unbounce: "A/B tests, Smart Traffic, popups", instapage: "Heatmaps, Experiments, personalization", leadpages: "Split tests on higher tiers" },
  { label: "Pricing focus", unbounce: "Traffic-based with AI features", instapage: "Premium per-workspace pricing", leadpages: "Flat-rate, more generous limits" },
  { label: "Best for", unbounce: "Agencies & GTM teams needing speed", instapage: "Enterprise marketing teams", leadpages: "Creators and SMBs with limited dev help" },
];

const scoreboard = [
  { label: "Ease of use", scores: { unbounce: 9.0, instapage: 8.2, leadpages: 9.1 } },
  { label: "Optimization power", scores: { unbounce: 9.2, instapage: 9.5, leadpages: 7.2 } },
  { label: "Value for money", scores: { unbounce: 8.5, instapage: 7.0, leadpages: 9.3 } },
  { label: "Enterprise readiness", scores: { unbounce: 8.8, instapage: 9.6, leadpages: 6.5 } },
  { label: "Agency workflow", scores: { unbounce: 9.1, instapage: 8.5, leadpages: 7.4 } },
];

const avg = (key) => (scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0) / scoreboard.length).toFixed(1);
const averages = { unbounce: avg("unbounce"), instapage: avg("instapage"), leadpages: avg("leadpages") };
const overallWinner = Object.entries(averages).sort((a, b) => Number(b[1]) - Number(a[1]))[0][0];

const pricingTable = [
  { plan: "Unbounce Launch", monthly: "$99", annual: "$79/mo annual", notes: "20k visitors, 500 conversions" },
  { plan: "Instapage Build", monthly: "$299", annual: "Custom", notes: "Unlimited pages, AdMap, heatmaps" },
  { plan: "Leadpages Pro", monthly: "$99", annual: "$74/mo annual", notes: "3 sites, unlimited traffic, ecomm checkout" },
];

const faqs = [
  { q: `Which landing page builder is best in ${YEAR}?`, a: "Unbounce is the best mix of power and price, Instapage leads for enterprise personalization, and Leadpages wins for simple, budget-friendly launches." },
  { q: "Can I switch between these tools?", a: "Templates aren’t transferable, but you can export HTML from Unbounce/Instapage or rebuild pages using saved blocks if you migrate." },
  { q: "Which tool integrates with my CRM?", a: "All three integrate with HubSpot, Salesforce, and Zapier. Instapage adds native Marketo/Eloqua connectors." },
  { q: "Do they all support A/B testing?", a: "Yes, though Leadpages reserves split testing for higher plans. Unbounce and Instapage include advanced experimentation by default." },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
};

const prosCons = {
  unbounce: { pros: ["Smart Traffic", "AI copy", "Agency workspaces"], cons: ["Traffic-based overages"] },
  instapage: { pros: ["Personalization", "AdMap", "Heatmaps"], cons: ["Highest cost", "Fewer SMB templates"] },
  leadpages: { pros: ["Low cost", "Unlimited traffic", "Easy ecommerce"], cons: ["Limited testing tools", "Less flexible design"] },
};

const LogoBadge = ({ name }) => {
  const key = name.toLowerCase();
  const meta = brandMeta[key] || { gradient: "from-slate-400 to-slate-600", badge: "bg-slate-100 text-slate-900" };
  return (
    <div className="flex items-center gap-2">
      <div className={`flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br ${meta.gradient}`}>
        {meta.logo ? <img src={meta.logo} alt={`${name} logo`} className="h-full w-full object-cover" /> : <span className="text-sm font-bold text-white">{name.slice(0, 2).toUpperCase()}</span>}
      </div>
      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${meta.badge}`}>{name}</span>
    </div>
  );
};

export default function UnbounceVsInstapageVsLeadpagesPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Unbounce vs Instapage vs Leadpages – Landing Page Comparison (${YEAR})`}
        description="Compare Unbounce, Instapage, and Leadpages across pricing, features, optimization, and best-fit use cases to pick the right landing page builder."
        canonical={canonical}
        keywords={`${primaryKeyword}, landing page builder comparison`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Landing pages</p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">Unbounce vs Instapage vs Leadpages ({YEAR})</h1>
        <p className="mt-4 text-lg text-slate-700">Three standout builders, three different priorities—AI optimization, enterprise personalization, or affordability.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="space-y-3 rounded-3xl bg-emerald-50/90 p-6 ring-1 ring-emerald-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-emerald-800">
              <Sparkles className="h-5 w-5" /> Quick Verdict
            </div>
            <p className="text-base text-slate-800">
              <strong>Unbounce</strong> is our overall pick thanks to Smart Traffic and AI copy. Choose <strong>Instapage</strong> if you need personalization + ad-to-page mapping, or <strong>Leadpages</strong> if budget and simplicity top the list.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-800">
              <Crown className="h-4 w-4" /> Scoreboard winner: {overallWinner.charAt(0).toUpperCase() + overallWinner.slice(1)} ({averages[overallWinner]}/10)
            </div>
          </div>
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Layout className="h-5 w-5 text-emerald-700" /> Best budget pick
            </div>
            <p className="text-sm text-slate-700">Leadpages keeps unlimited traffic and ecommerce on its mid-tier plan, making it a favorite for SMBs.</p>
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
