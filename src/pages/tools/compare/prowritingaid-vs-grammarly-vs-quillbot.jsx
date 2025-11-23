import React from "react";
import { Sparkles, Layers, Type, Crown, ArrowLeft, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "prowritingaid vs grammarly vs quillbot";
const canonical = buildCanonical("/tools/compare/prowritingaid-vs-grammarly-vs-quillbot");

const brandMeta = {
  prowritingaid: { gradient: "from-emerald-500 via-teal-500 to-cyan-500", badge: "bg-emerald-100 text-emerald-900", logo: "https://logo.clearbit.com/prowritingaid.com" },
  grammarly: { gradient: "from-sky-500 via-blue-500 to-indigo-600", badge: "bg-sky-100 text-sky-900", logo: "https://logo.clearbit.com/grammarly.com" },
  quillbot: { gradient: "from-green-500 via-emerald-500 to-teal-500", badge: "bg-emerald-100 text-emerald-900", logo: "https://logo.clearbit.com/quillbot.com" },
};

const contenders = [
  { key: "prowritingaid", name: "ProWritingAid", blurb: "Deep style, readability, and pacing reports.", url: "https://prowritingaid.com" },
  { key: "grammarly", name: "Grammarly", blurb: "Real-time grammar and tone coaching.", url: "https://grammarly.com" },
  { key: "quillbot", name: "QuillBot", blurb: "Paraphrasing and summarization modes.", url: "https://quillbot.com" },
];

const comparisonRows = [
  { label: "Primary use", prowritingaid: "Deep editing and style guides.", grammarly: "Grammar and tone coaching.", quillbot: "Paraphrasing and summarizing." },
  { label: "Best for", prowritingaid: "Teams/authors needing reports.", grammarly: "Fast grammar fixes in any editor.", quillbot: "Quick rewrites and citations." },
  { label: "Collaboration", prowritingaid: "Team style guides + term lists.", grammarly: "Business tone detection, snippets.", quillbot: "Lighter; mostly individual use." },
  { label: "Pricing", prowritingaid: "Free + Premium from ~$30/mo; lifetime available.", grammarly: "Free + Premium/Business from ~$12/mo.", quillbot: "Freemium; Premium from ~$19.95/mo." },
  { label: "Integrations", prowritingaid: "Docs, Word, Chrome, Scrivener.", grammarly: "Browser, Docs, Word, desktop.", quillbot: "Browser, Word, macOS." },
];

const scoreboard = [
  { label: "Grammar accuracy", scores: { prowritingaid: 8.8, grammarly: 9.5, quillbot: 8.0 } },
  { label: "Style & readability depth", scores: { prowritingaid: 9.5, grammarly: 8.4, quillbot: 7.8 } },
  { label: "Paraphrasing quality", scores: { prowritingaid: 8.1, grammarly: 8.4, quillbot: 9.4 } },
  { label: "Team/brand controls", scores: { prowritingaid: 9.0, grammarly: 8.6, quillbot: 6.8 } },
  { label: "Value for money", scores: { prowritingaid: 9.2, grammarly: 8.0, quillbot: 8.7 } },
];

const avg = (key) => (scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0) / scoreboard.length).toFixed(1);
const averages = { prowritingaid: avg("prowritingaid"), grammarly: avg("grammarly"), quillbot: avg("quillbot") };
const overallWinner = Object.entries(averages).sort((a, b) => Number(b[1]) - Number(a[1]))[0][0];

const faqs = [
  { q: `Which should I pick in ${YEAR}?`, a: "Pick ProWritingAid for the deepest style and readability reports. Pick Grammarly for fast grammar fixes and tone detection. Pick QuillBot for paraphrasing and summaries." },
  { q: "Can I stack these tools?", a: "Yes. Many teams generate drafts, run ProWritingAid for style, then polish grammar in Grammarly and paraphrase sections with QuillBot." },
  { q: "Which is cheapest?", a: "QuillBot Premium is the lowest monthly cost. ProWritingAid’s lifetime plan can be cheapest over time if you’ll use it for years." },
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

export default function ProWritingAidComparisonPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`ProWritingAid vs Grammarly vs QuillBot – which editor wins? (${YEAR})`}
        description="Compare ProWritingAid, Grammarly, and QuillBot for grammar, style, paraphrasing, and pricing. See the best pick for teams, students, and creators."
        canonical={canonical}
        keywords={`${primaryKeyword}, writing tool comparison`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Writing & editing</p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">ProWritingAid vs Grammarly vs QuillBot ({YEAR})</h1>
        <p className="mt-4 text-lg text-slate-700">
          ProWritingAid delivers the deepest style reports, Grammarly is fastest for grammar fixes, and QuillBot is best for paraphrasing. Here’s how to pick or stack them.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="space-y-3 rounded-3xl bg-emerald-50/90 p-6 ring-1 ring-emerald-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-emerald-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>ProWritingAid</strong> for in-depth reports and team style guides. Use <strong>Grammarly</strong> when you want fast grammar and tone checks everywhere you write. Lean on{" "}
              <strong>QuillBot</strong> to paraphrase or summarize sections for clarity.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-800">
              <Crown className="h-4 w-4" /> Overall scoreboard winner: {overallWinner.charAt(0).toUpperCase() + overallWinner.slice(1)}{" "}
              <span className="text-xs font-medium text-emerald-700">(avg: {averages[overallWinner]}/10)</span>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="text-sm font-semibold text-slate-900">Best for</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <Layers className="mt-0.5 h-4 w-4 text-emerald-600" />
                <span><strong>ProWritingAid:</strong> style depth + team guides.</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-0.5 h-4 w-4 text-sky-600" />
                <span><strong>Grammarly:</strong> fast grammar/tone everywhere.</span>
              </li>
              <li className="flex items-start gap-2">
                <Type className="mt-0.5 h-4 w-4 text-emerald-600" />
                <span><strong>QuillBot:</strong> paraphrasing and summarizing.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl bg-slate-50 p-6 shadow-sm ring-1 ring-slate-200">
          <div className="grid gap-4 md:grid-cols-3">
            {contenders.map((tool) => (
              <div key={tool.key} className="rounded-2xl bg-white/60 p-4 ring-1 ring-slate-200">
                <div className="flex items-center justify-between gap-2">
                  <LogoBadge name={tool.name} />
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-600">Contender</span>
                </div>
                <p className="mt-3 text-sm text-slate-700">{tool.blurb}</p>
                <a className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-emerald-700 hover:text-emerald-600" href={tool.url}>
                  Visit site
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
          <table className="w-full text-left text-sm text-slate-800 md:text-base">
            <thead className="bg-slate-50 text-slate-700">
              <tr>
                <th className="px-4 py-3">Dimension</th>
                <th className="px-4 py-3">ProWritingAid</th>
                <th className="px-4 py-3">Grammarly</th>
                <th className="px-4 py-3">QuillBot</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {comparisonRows.map((row) => (
                <tr key={row.label} className="align-top">
                  <td className="px-4 py-3 font-semibold text-slate-900">{row.label}</td>
                  <td className="px-4 py-3">{row.prowritingaid}</td>
                  <td className="px-4 py-3">{row.grammarly}</td>
                  <td className="px-4 py-3">{row.quillbot}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-5">
            <div className="flex items-center gap-2 text-emerald-700">
              <Crown className="h-4 w-4" />
              <p className="text-sm font-semibold uppercase tracking-wide">Top pick</p>
            </div>
            <h3 className="mt-2 text-xl font-bold text-slate-900">ProWritingAid</h3>
            <p className="mt-2 text-sm text-slate-700">Best for teams and authors who need granular style and readability reports plus custom guides.</p>
            <p className="mt-3 text-sm text-slate-700">
              Score: {averages.prowritingaid}/10. Use it to enforce tone, fix pacing, and standardize terminology across content.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-base font-semibold text-slate-900">Scores</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {scoreboard.map((row) => (
                <li key={row.label} className="flex items-center justify-between">
                  <span>{row.label}</span>
                  <span className="font-semibold text-slate-900">{row.scores.prowritingaid} / {row.scores.grammarly} / {row.scores.quillbot}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-base font-semibold text-slate-900">How to choose</h3>
            <p className="mt-2 text-sm text-slate-700">Pick the winner that matches your workflow: depth (ProWritingAid), speed (Grammarly), or rewrites (QuillBot).</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide text-slate-600">
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-emerald-800">Style depth</span>
              <span className="rounded-full bg-sky-100 px-3 py-1 text-sky-800">Grammar speed</span>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-emerald-800">Paraphrasing</span>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <a className="group flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold text-emerald-700 ring-1 ring-slate-200 hover:bg-emerald-50" href="/tools/prowritingaid">
            Read the full ProWritingAid review <ArrowLeft className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-0.5" />
          </a>
          <a className="group flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold text-emerald-700 ring-1 ring-slate-200 hover:bg-emerald-50" href="/tools/grammarly">
            Read the full Grammarly review <ArrowLeft className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-0.5" />
          </a>
        </div>

        <div className="mt-12 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-xl font-bold text-slate-900">FAQs</h2>
          <div className="mt-4 space-y-2">
            {faqs.map((item) => (
              <details key={item.q} className="group rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-slate-900">
                  {item.q}
                  <span className="text-xl leading-none text-slate-500 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-2 text-sm text-slate-700">{item.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-6 text-sm text-slate-700">
            <Link className="inline-flex items-center gap-2 font-semibold text-emerald-700 hover:text-emerald-600" to="/tools">
              <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
            </Link>
          </div>
        </div>
      </div>
    
        <ProsConsSection contenders={contenders} />

</main>
  );
}
