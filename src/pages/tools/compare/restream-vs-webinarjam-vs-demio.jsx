import React from "react";
import { Sparkles, Gauge, Layers, Cast, Crown, ArrowLeft, Mic } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "restream vs webinarjam vs demio";
const canonical = buildCanonical("/tools/compare/restream-vs-webinarjam-vs-demio");

const brandMeta = {
  restream: { gradient: "from-orange-500 via-amber-500 to-rose-500", badge: "bg-orange-100 text-orange-900", logo: "https://logo.clearbit.com/restream.io" },
  webinarjam: { gradient: "from-rose-500 via-pink-500 to-red-600", badge: "bg-rose-100 text-rose-900", logo: "https://logo.clearbit.com/webinarjam.com" },
  demio: { gradient: "from-emerald-500 via-teal-500 to-green-600", badge: "bg-emerald-100 text-emerald-900", logo: "https://logo.clearbit.com/demio.com" },
};

const contenders = [
  { key: "restream", name: "Restream", blurb: "Multistreaming with a browser-based studio to reach social channels.", url: "https://restream.io" },
  { key: "webinarjam", name: "WebinarJam", blurb: "Webinar platform with registration, reminders, and automation.", url: "https://home.webinarjam.com" },
  { key: "demio", name: "Demio", blurb: "Browser-based webinars with engagement tools and replays.", url: "https://demio.com" },
];

const comparisonRows = [
  { label: "Primary use", restream: "Multistream to social channels.", webinarjam: "Marketing webinars with funnels.", demio: "Live/automated webinars with simple setup." },
  { label: "Registration & email", restream: "Limited; focus on streaming.", webinarjam: "Built-in registration, reminders, follow-ups.", demio: "Registration pages, reminders, replays." },
  { label: "Engagement", restream: "Chat across platforms; simple Q&A.", webinarjam: "Polls, offers, chat, handouts.", demio: "Polls, handouts, CTA, chat." },
  { label: "Streaming reach", restream: "Multi-channel social streaming.", webinarjam: "Single webinar destination.", demio: "Single webinar destination." },
  { label: "Best for", restream: "Audience growth across social.", webinarjam: "Lead-gen webinars with automation.", demio: "Lean webinar teams needing clean UX." },
];

const scoreboard = [
  { label: "Multi-channel reach", scores: { restream: 9.6, webinarjam: 7.2, demio: 7.1 } },
  { label: "Webinar funnels", scores: { restream: 7.4, webinarjam: 9.3, demio: 8.8 } },
  { label: "Ease of setup", scores: { restream: 9.0, webinarjam: 8.0, demio: 9.2 } },
  { label: "Engagement tools", scores: { restream: 8.0, webinarjam: 9.1, demio: 8.7 } },
  { label: "Value for marketers", scores: { restream: 9.0, webinarjam: 8.8, demio: 8.6 } },
];

const avg = (key) => (scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0) / scoreboard.length).toFixed(1);
const averages = { restream: avg("restream"), webinarjam: avg("webinarjam"), demio: avg("demio") };
const overallWinner = Object.entries(averages).sort((a, b) => Number(b[1]) - Number(a[1]))[0][0];

const faqs = [
  { q: `Who wins overall in ${YEAR}?`, a: "Restream wins for multistreaming reach. WebinarJam wins for marketing webinar funnels. Demio wins for clean, simple webinar delivery." },
  { q: "Which should I pick for lead gen?", a: "Choose WebinarJam or Demio for registration, reminders, and CTAs. Use Restream if you want to stream broadly across social and drive traffic back to funnels." },
  { q: "Can I combine them?", a: "Yes. Some teams stream to social via Restream and host gated webinars on Demio/WebinarJam for leads." },
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

export default function RestreamVsWebinarJamVsDemioPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Restream vs WebinarJam vs Demio – Live streaming vs webinars (${YEAR})`}
        description="Compare Restream, WebinarJam, and Demio on multistreaming, webinar funnels, engagement tools, and pricing."
        canonical={canonical}
        keywords={`${primaryKeyword}, webinar vs multistreaming comparison`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-700">Live streaming & webinars</p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">Restream vs WebinarJam vs Demio ({YEAR})</h1>
        <p className="mt-4 text-lg text-slate-700">
          Restream maximizes reach across social channels. WebinarJam and Demio excel at registration, reminders, and webinar engagement. Pick based on whether you need broad reach or gated webinar funnels.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="space-y-3 rounded-3xl bg-orange-50/90 p-6 ring-1 ring-orange-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-orange-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>Restream</strong> for multi-channel live reach. Choose <strong>WebinarJam</strong> or <strong>Demio</strong> for lead-gen webinars with built-in registration and reminders.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-orange-800">
              <Crown className="h-4 w-4" /> Overall scoreboard winner: {overallWinner.charAt(0).toUpperCase() + overallWinner.slice(1)}{" "}
              <span className="text-xs font-medium text-orange-700">(avg: {averages[overallWinner]}/10)</span>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="text-sm font-semibold text-slate-900">Best for</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <Cast className="mt-0.5 h-4 w-4 text-orange-600" />
                <span><strong>Restream</strong> for social reach and unified chat.</span>
              </li>
              <li className="flex items-start gap-2">
                <Layers className="mt-0.5 h-4 w-4 text-rose-600" />
                <span><strong>WebinarJam</strong> for webinar funnels and automation.</span>
              </li>
              <li className="flex items-start gap-2">
                <Mic className="mt-0.5 h-4 w-4 text-emerald-600" />
                <span><strong>Demio</strong> for clean, attendee-friendly webinars.</span>
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
                <a className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-orange-700 hover:text-orange-600" href={tool.url}>
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
                <th className="px-4 py-3">Restream</th>
                <th className="px-4 py-3">WebinarJam</th>
                <th className="px-4 py-3">Demio</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {comparisonRows.map((row) => (
                <tr key={row.label} className="align-top">
                  <td className="px-4 py-3 font-semibold text-slate-900">{row.label}</td>
                  <td className="px-4 py-3">{row.restream}</td>
                  <td className="px-4 py-3">{row.webinarjam}</td>
                  <td className="px-4 py-3">{row.demio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {scoreboard.map((row) => (
            <div key={row.label} className="rounded-2xl bg-slate-50 p-4 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold text-slate-900">{row.label}</p>
              <div className="mt-2 space-y-1 text-sm text-slate-700">
                <Score label="Restream" value={row.scores.restream} />
                <Score label="WebinarJam" value={row.scores.webinarjam} />
                <Score label="Demio" value={row.scores.demio} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-slate-50 p-6 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-lg font-semibold text-slate-900">FAQs</h3>
          <ul className="mt-3 space-y-3 text-sm text-slate-800">
            {faqs.map((item) => (
              <li key={item.q}>
                <p className="font-semibold text-slate-900">{item.q}</p>
                <p className="text-slate-700">{item.a}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex items-center gap-3">
          <Link
            to="/tools"
            className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-orange-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    
        <ProsConsSection contenders={contenders} />

</main>
  );
}

const Score = ({ label, value }) => (
  <div className="flex items-center justify-between">
    <span>{label}</span>
    <span className="font-semibold text-slate-900">{value}/10</span>
  </div>
);
