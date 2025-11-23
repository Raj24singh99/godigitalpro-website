import React from "react";
import { Sparkles, Gauge, Layers, Zap, Crown, ArrowLeft, Video } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "veed vs invideo vs canva";
const canonical = buildCanonical("/tools/compare/veed-vs-invideo-vs-canva");

const brandMeta = {
  veed: { gradient: "from-rose-500 via-pink-500 to-purple-600", badge: "bg-rose-100 text-rose-900", logo: "https://logo.clearbit.com/veed.io" },
  invideo: { gradient: "from-indigo-500 via-violet-500 to-fuchsia-500", badge: "bg-indigo-100 text-indigo-900", logo: "https://logo.clearbit.com/invideo.io" },
  canva: { gradient: "from-emerald-500 via-teal-500 to-cyan-500", badge: "bg-emerald-100 text-emerald-900", logo: "https://logo.clearbit.com/canva.com" },
};

const contenders = [
  { key: "veed", name: "VEED", blurb: "Timeline editor with subtitles + collaboration.", url: "https://www.veed.io" },
  { key: "invideo", name: "InVideo", blurb: "Template-driven video creator with AI scripts.", url: "https://invideo.io" },
  { key: "canva", name: "Canva", blurb: "General design suite with video templates.", url: "https://www.canva.com" },
];

const comparisonRows = [
  { label: "Editing style", veed: "Full timeline editor in browser.", invideo: "Template & scene-based editing.", canva: "Drag-and-drop canvas with timeline layers." },
  { label: "AI help", veed: "Auto subtitles, clip detection, script assistant.", invideo: "AI video assistant, text-to-video, voiceover.", canva: "Magic Media for script generation + B-roll suggestions." },
  { label: "Best for", veed: "Repurposing long-form recordings.", invideo: "Creating ads/promos from templates.", canva: "Quick brand-safe social videos built alongside graphics." },
  { label: "Collaboration", veed: "Review links, comments, team workspaces.", invideo: "Workspace sharing, approvals, team libraries.", canva: "Organization-wide brand controls, comments, approvals." },
  { label: "Learning curve", veed: "Low for marketers, moderate for complex timelines.", invideo: "Very low—fill blanks and swap media.", canva: "Very low if you already use Canva for design." },
];

const scoreboard = [
  { label: "Editing flexibility", scores: { veed: 9.0, invideo: 8.1, canva: 7.5 } },
  { label: "Template breadth", scores: { veed: 8.4, invideo: 9.2, canva: 9.0 } },
  { label: "Brand management", scores: { veed: 8.3, invideo: 8.0, canva: 9.4 } },
  { label: "Repurposing speed", scores: { veed: 9.1, invideo: 8.8, canva: 8.5 } },
  { label: "Value", scores: { veed: 8.4, invideo: 8.7, canva: 9.1 } },
];

const avg = (key) => (scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0) / scoreboard.length).toFixed(1);
const averages = { veed: avg("veed"), invideo: avg("invideo"), canva: avg("canva") };
const overallWinner = Object.entries(averages).sort((a, b) => Number(b[1]) - Number(a[1]))[0][0];

const pricingTable = [
  { plan: "VEED Pro", monthly: "$24", annual: "$18/mo annual", notes: "4K exports, AI clipper, brand templates." },
  { plan: "InVideo Business", monthly: "$30", annual: "$20/mo annual", notes: "Unlimited premium templates, background removal, team sharing." },
  { plan: "Canva Pro / Teams", monthly: "$14.99+", annual: "$12.99/mo annual", notes: "Brand kit, Magic Media, shared folders." },
];

const faqs = [
  { q: `Which platform should I pick in ${YEAR}?`, a: "Choose VEED for editing recorded content, InVideo for making ads/promos from templates, and Canva if you already design everything else inside Canva and need simple videos too." },
  { q: "Is VEED more powerful than Canva?", a: "Yes—VEED has a full editor with keyframes, audio cleanup, and review workflows. Canva wins when you want to keep everything in one brand system with lighter editing." },
  { q: "Does InVideo replace VEED?", a: "No. InVideo generates video scenes from scripts and templates, while VEED lets you edit actual recordings with subtitles and layers." },
  { q: "Can I mix and match tools?", a: "Many teams research/edit in VEED, then add graphic overlays or variations in Canva. InVideo is often used for ad variations alongside either editor." },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
};

const prosCons = {
  veed: { pros: ["Timeline control", "Subtitles + audio cleanup", "Enterprise permissions"], cons: ["Pricier for large seat counts", "Limited stock design elements vs Canva"] },
  invideo: { pros: ["Massive template catalog", "AI script assistant", "Fast exports"], cons: ["Less manual control", "Seats charged per creator"] },
  canva: { pros: ["Deep brand controls", "Magic Media AI", "Used by entire org"], cons: ["Timeline is basic", "Audio tools limited"] },
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

export default function VeedVsInvideoVsCanvaPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`VEED vs InVideo vs Canva – Template & Editing Comparison (${YEAR})`}
        description="Compare VEED, InVideo, and Canva across editing control, templates, AI helpers, collaboration, pricing, and real-world workflows."
        canonical={canonical}
        keywords={`${primaryKeyword}, social video editor comparison`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Video creation</p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">VEED vs InVideo vs Canva ({YEAR})</h1>
        <p className="mt-4 text-lg text-slate-700">All three promise quick marketing videos, but they shine at different steps. Here’s the breakdown.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="space-y-3 rounded-3xl bg-rose-50/80 p-6 ring-1 ring-rose-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-rose-800">
              <Sparkles className="h-5 w-5" /> Quick Verdict
            </div>
            <p className="text-base text-slate-800">
              <strong>VEED</strong> edits real footage with subtitles, <strong>InVideo</strong> cranks out ad-ready templates, and <strong>Canva</strong> keeps everything on-brand if your org already uses it. Many teams combine VEED + Canva.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-rose-800">
              <Crown className="h-4 w-4" /> Overall scoreboard winner: {overallWinner.charAt(0).toUpperCase() + overallWinner.slice(1)}{" "}
              <span className="text-xs font-medium text-rose-700">(avg: {averages[overallWinner]}/10)</span>
            </div>
          </div>
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Video className="h-5 w-5 text-rose-700" /> Best free option
            </div>
            <p className="text-sm text-slate-700">Canva’s free plan offers the most usable video templates without watermarks. VEED/InVideo reserve watermark-free exports for paid tiers.</p>
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
