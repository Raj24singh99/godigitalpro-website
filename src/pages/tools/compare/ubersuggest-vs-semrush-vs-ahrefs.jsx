import React from "react";
import { Sparkles, Gauge, Layers, Zap, Crown, ArrowLeft, Search } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "ubersuggest vs semrush vs ahrefs";
const canonical = buildCanonical("/tools/compare/ubersuggest-vs-semrush-vs-ahrefs");

const brandMeta = {
  ubersuggest: { gradient: "from-amber-500 via-orange-500 to-rose-500", badge: "bg-amber-100 text-amber-900", logo: "https://logo.clearbit.com/neilpatel.com" },
  semrush: { gradient: "from-orange-500 via-red-500 to-rose-600", badge: "bg-orange-100 text-orange-900", logo: "https://logo.clearbit.com/semrush.com" },
  ahrefs: { gradient: "from-blue-600 via-blue-500 to-cyan-500", badge: "bg-blue-100 text-blue-900", logo: "https://logo.clearbit.com/ahrefs.com" },
};

const contenders = [
  { key: "ubersuggest", name: "Ubersuggest", blurb: "Budget-friendly SEO toolkit with AI ideas." },
  { key: "semrush", name: "Semrush", blurb: "Enterprise-grade SEO, PPC, and content suite." },
  { key: "ahrefs", name: "Ahrefs", blurb: "Deep backlink + keyword data loved by SEOs." },
];

const comparisonRows = [
  { label: "Keyword depth", ubersuggest: "Solid core data + AI clusters", semrush: "Largest keyword DB & intent filters", ahrefs: "Massive keyword DB + click metrics" },
  { label: "Backlink data", ubersuggest: "Smaller index", semrush: "Strong index + toxic link audit", ahrefs: "Industry-leading crawler & link data" },
  { label: "Content tools", ubersuggest: "AI briefs + ideas", semrush: "Content Marketing Platform, SEO Writing Assistant", ahrefs: "Content Explorer, SERP comparisons" },
  { label: "Pricing", ubersuggest: "From $29 or lifetime", semrush: "From $129.95/mo", ahrefs: "From $99/mo + add-ons" },
  { label: "Best fit", ubersuggest: "SMBs & agencies on a budget", semrush: "Full marketing teams", ahrefs: "SEO specialists & link builders" },
];

const scoreboard = [
  { label: "Ease of use", scores: { ubersuggest: 9.1, semrush: 8.2, ahrefs: 8.5 } },
  { label: "Data depth", scores: { ubersuggest: 7.6, semrush: 9.6, ahrefs: 9.5 } },
  { label: "Value", scores: { ubersuggest: 9.4, semrush: 8.0, ahrefs: 8.2 } },
  { label: "Reporting", scores: { ubersuggest: 7.8, semrush: 9.4, ahrefs: 8.8 } },
  { label: "AI & automation", scores: { ubersuggest: 8.7, semrush: 9.0, ahrefs: 7.6 } },
];

const avg = (key) => (scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0) / scoreboard.length).toFixed(1);
const averages = { ubersuggest: avg("ubersuggest"), semrush: avg("semrush"), ahrefs: avg("ahrefs") };
const overallWinner = Object.entries(averages).sort((a, b) => Number(b[1]) - Number(a[1]))[0][0];

const pricingTable = [
  { plan: "Ubersuggest Business", monthly: "$49", annual: "$29/mo annual or $490 lifetime", notes: "7 projects, 300 keywords" },
  { plan: "Semrush Pro", monthly: "$129.95", annual: "$108.33/mo annual", notes: "5 projects, 500 keywords, PPC tools" },
  { plan: "Ahrefs Standard", monthly: "$199", annual: "$166/mo annual", notes: "10 projects, 1500 keywords" },
];

const faqs = [
  { q: `Who should choose which tool in ${YEAR}?`, a: "Pick Ubersuggest for budget-friendly SEO, Semrush for all-in-one marketing analytics, and Ahrefs when backlink depth is non-negotiable." },
  { q: "Can I stack tools?", a: "Yes. Many teams run Ubersuggest alongside Search Console, or pair Semrush/Ahrefs with Ubersuggest for AI content ideation." },
  { q: "Do they all have free trials?", a: "Ubersuggest has a generous free tier, Semrush/Ahrefs offer limited trials but require credit cards." },
  { q: "Which is best for agencies?", a: "Semrush and Ahrefs provide advanced reporting and API access. Ubersuggest excels for client self-serve dashboards due to lower cost." },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
};

const prosCons = {
  ubersuggest: { pros: ["Low cost", "AI briefs", "Lifetime option"], cons: ["Smaller backlink index", "Lower limits"] },
  semrush: { pros: ["Massive data", "PPC/social tools", "Robust reporting"], cons: ["Expensive add-ons", "Learning curve"] },
  ahrefs: { pros: ["Best backlink data", "Fast crawler", "SERP analysis"], cons: ["No PPC tools", "Charges for additional users"] },
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

export default function UbersuggestVsSemrushVsAhrefsPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Ubersuggest vs Semrush vs Ahrefs – SEO Platform Comparison (${YEAR})`}
        description="Evaluate Ubersuggest, Semrush, and Ahrefs across data depth, pricing, features, and ideal buyers to choose the right SEO platform."
        canonical={canonical}
        keywords={`${primaryKeyword}, seo comparison`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">SEO platforms</p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">Ubersuggest vs Semrush vs Ahrefs ({YEAR})</h1>
        <p className="mt-4 text-lg text-slate-700">Budget-friendly versus enterprise suites—see how the top keyword tools compare.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="space-y-3 rounded-3xl bg-amber-50/90 p-6 ring-1 ring-amber-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-amber-800">
              <Sparkles className="h-5 w-5" /> Quick Verdict
            </div>
            <p className="text-base text-slate-800">
              <strong>Ubersuggest</strong> wins on value and AI assistance, <strong>Semrush</strong> delivers the most complete marketing suite, and <strong>Ahrefs</strong> remains the backlink powerhouse.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-amber-800">
              <Crown className="h-4 w-4" /> Scoreboard winner: {overallWinner.charAt(0).toUpperCase() + overallWinner.slice(1)} ({averages[overallWinner]}/10)
            </div>
          </div>
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Search className="h-5 w-5 text-amber-700" /> Best free option
            </div>
            <p className="text-sm text-slate-700">Ubersuggest’s free tier covers daily keyword research and audits—great for getting started.</p>
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
