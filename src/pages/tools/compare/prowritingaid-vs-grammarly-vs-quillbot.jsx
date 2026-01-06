import React from "react";
import {
  Sparkles,
  Layers,
  Type,
  Crown,
  ArrowLeft,
  ShieldCheck,
  BarChart3,
  Gauge,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "prowritingaid vs grammarly vs quillbot";
const canonical = buildCanonical(
  "/tools/compare/prowritingaid-vs-grammarly-vs-quillbot"
);

const brandMeta = {
  prowritingaid: {
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/prowritingaid.com",
  },
  grammarly: {
    gradient: "from-sky-500 via-blue-500 to-indigo-600",
    badge: "bg-sky-100 text-sky-900",
    logo: "https://logo.clearbit.com/grammarly.com",
  },
  quillbot: {
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/quillbot.com",
  },
};

const contenders = [
  {
    key: "prowritingaid",
    name: "ProWritingAid",
    blurb: "Deep style, readability, pacing and consistency reports.",
    url: "https://prowritingaid.com",
    slug: "prowritingaid",
  },
  {
    key: "grammarly",
    name: "Grammarly",
    blurb: "Real-time grammar, clarity and tone coaching.",
    url: "https://grammarly.com",
    slug: "grammarly",
  },
  {
    key: "quillbot",
    name: "QuillBot",
    blurb: "Paraphrasing, summarisation and citation tools.",
    url: "https://quillbot.com",
    slug: "quillbot",
  },
];

const comparisonRows = [
  {
    label: "Primary use",
    prowritingaid: "Deep editing and style/readability reports.",
    grammarly: "Real-time grammar, clarity and tone coaching.",
    quillbot: "Paraphrasing, summarising and citations.",
  },
  {
    label: "Best for",
    prowritingaid: "Authors, content teams, and long-form writing.",
    grammarly: "Busy professionals, students and everyday writing.",
    quillbot: "Students and creators rewriting or condensing text.",
  },
  {
    label: "Collaboration & teams",
    prowritingaid: "Team style guides, term bases, detailed reports.",
    grammarly: "Business tone detection, snippets, team analytics.",
    quillbot: "Lighter; mostly individual workspaces.",
  },
  {
    label: "AI rewriting",
    prowritingaid: "Rewrite and style suggestions inside reports.",
    grammarly: "“Rewrite for…” prompts for clarity and tone.",
    quillbot: "Multiple paraphrase modes with granular control.",
  },
  {
    label: "Pricing (approx.)",
    prowritingaid:
      "Free; Premium from ~$/mo equivalent, lifetime plans available.",
    grammarly: "Free; Premium/Business from roughly low double-digits/mo.",
    quillbot: "Freemium; Premium from around ~$19.95/mo.",
  },
  {
    label: "Integrations",
    prowritingaid: "Browser, Word, Google Docs, Scrivener, desktop.",
    grammarly: "Browser, Docs, Word, desktop & system-wide checks.",
    quillbot: "Browser extension, Word, Docs, macOS app.",
  },
];

const scoreboard = [
  {
    label: "Grammar accuracy",
    prowritingaid: 8.8,
    grammarly: 9.5,
    quillbot: 8.0,
  },
  {
    label: "Style & readability depth",
    prowritingaid: 9.5,
    grammarly: 8.4,
    quillbot: 7.8,
  },
  {
    label: "Paraphrasing quality",
    prowritingaid: 8.1,
    grammarly: 8.4,
    quillbot: 9.4,
  },
  {
    label: "Team / brand controls",
    prowritingaid: 9.0,
    grammarly: 8.6,
    quillbot: 6.8,
  },
  {
    label: "Value for money",
    prowritingaid: 9.2,
    grammarly: 8.0,
    quillbot: 8.7,
  },
];

const avg = (tool) =>
  (
    scoreboard.reduce((sum, row) => sum + (row[tool] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  prowritingaid: avg("prowritingaid"),
  grammarly: avg("grammarly"),
  quillbot: avg("quillbot"),
};

const overallWinner =
  Math.max(
    parseFloat(averages.prowritingaid),
    parseFloat(averages.grammarly),
    parseFloat(averages.quillbot)
  ) === parseFloat(averages.prowritingaid)
    ? "ProWritingAid"
    : Math.max(
        parseFloat(averages.grammarly),
        parseFloat(averages.quillbot)
      ) === parseFloat(averages.grammarly)
    ? "Grammarly"
    : "QuillBot";

const featureBullets = {
  grammar: [
    "ProWritingAid: Strong grammar engine paired with deep style and readability checks, ideal for polishing long-form content.",
    "Grammarly: Market-leading real-time grammar, spelling, punctuation and clarity suggestions across almost every app.",
    "QuillBot: Solid grammar checker, but primarily supporting its paraphrasing and summarisation workflows.",
  ],
  style: [
    "ProWritingAid: Detailed reports on pacing, repetition, sentence variety, clichés, readability and more.",
    "Grammarly: Style nudges around formality, tone and clarity—less granular than ProWritingAid but very fast.",
    "QuillBot: Style is controlled mainly via paraphrasing modes (formal, simple, creative, etc.).",
  ],
  paraphrasing: [
    "ProWritingAid: Rewriting suggestions embedded in context, useful but not the core of the product.",
    "Grammarly: Rewrite prompts for clarity and tone; helpful for quick line edits.",
    "QuillBot: Dedicated paraphrasing engine with multiple modes, word freezing, and summarisation tools.",
  ],
};

const pricingTable = [
  {
    plan: "ProWritingAid Premium / Teams",
    monthly: "Monthly and annual plans; lifetime licence option",
    bestFor: "Authors, agencies, content teams and heavy long-form writers",
    notes:
      "Lifetime can be most cost-effective if you will use ProWritingAid for several years.",
  },
  {
    plan: "Grammarly Premium / Business",
    monthly: "Premium from low double-digits/mo; Business per-seat",
    bestFor: "Professionals, sales/CS teams, students writing everywhere",
    notes:
      "System-wide real-time checking means it quietly upgrades nearly all day-to-day writing.",
  },
  {
    plan: "QuillBot Premium",
    monthly: "From ~$19.95/mo with discounts on annual plans",
    bestFor: "Students and creators paraphrasing or summarising large amounts of text",
    notes:
      "Limits revolve around words/characters per day and mode usage; check quotas before committing.",
  },
];

const prosCons = {
  prowritingaid: {
    pros: [
      "Rich style, readability and pacing reports—excellent for long-form and editorial-quality content.",
      "Team features like style guides, term bases and consistency checks.",
      "Lifetime licence option can make it the best-value choice over a few years.",
    ],
    cons: [
      "Interface and real-time suggestions can feel heavier than Grammarly for quick everyday writing.",
      "Reports may overwhelm casual users who only want simple grammar fixes.",
      "Slightly fewer mainstream consumer brand integrations and nudges than Grammarly.",
    ],
  },
  grammarly: {
    pros: [
      "Best all-rounder for everyday grammar, clarity and tone across apps and browsers.",
      "Very fast, low-friction suggestions that non-writers happily adopt.",
      "Business features (snippets, style/tone controls) help standardise customer-facing communication.",
    ],
    cons: [
      "Less granular style and structural analysis than ProWritingAid for serious editing.",
      "Ongoing subscription can be more expensive than a one-off lifetime licence option elsewhere.",
      "Heavier paraphrasing or structural rewrites may still need a dedicated tool like QuillBot.",
    ],
  },
  quillbot: {
    pros: [
      "Excellent paraphrasing engine with multiple modes and good control over how much changes.",
      "Built-in summariser and citation tools are helpful for students and academic workflows.",
      "Freemium model makes it easy to try before upgrading for higher limits.",
    ],
    cons: [
      "Not a full grammar/style suite—works best alongside another editor.",
      "Aggressive paraphrasing can change nuance if you are not careful reviewing edits.",
      "Team controls and governance are lighter than ProWritingAid or Grammarly Business.",
    ],
  },
};

const faqs = [
  {
    q: `Which should I pick in ${YEAR}?`,
    a: "Pick ProWritingAid if you want deep style, readability and pacing reports—especially for long-form content or team style guides. Pick Grammarly if you want fast, real-time grammar and tone help everywhere you write. Pick QuillBot if your main need is paraphrasing and summarising existing text.",
  },
  {
    q: "Can I stack these tools together?",
    a: "Yes. A common stack is to draft in your main editor, run ProWritingAid for structural and style issues, polish grammar and tone with Grammarly, and then use QuillBot to paraphrase or shorten specific sections as needed.",
  },
  {
    q: "Which is cheapest over time?",
    a: "Month-to-month, QuillBot Premium is often the lowest sticker price. Over several years, ProWritingAid’s lifetime licence can be the most economical for heavy users, while Grammarly’s value comes from how often its real-time checks prevent mistakes in daily communication.",
  },
  {
    q: "Which is best for teams and brand consistency?",
    a: "ProWritingAid and Grammarly Business are strongest for teams. ProWritingAid shines for editorial teams with style guides and term bases, while Grammarly Business is ideal for sales, support and internal comms needing consistent tone and clarity.",
  },
  {
    q: "Which is safest for academic writing?",
    a: "All three can be used safely if you treat them as assistants rather than ghostwriters. QuillBot is popular for paraphrasing, but you should always review outputs carefully and follow your institution’s policies on AI-assisted writing and citations.",
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
  const lowered = name.toLowerCase(); // "prowritingaid", "grammarly", "quillbot"
  const meta =
    brandMeta[lowered] || {
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

export default function ProWritingAidComparisonPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`ProWritingAid vs Grammarly vs QuillBot – which editor wins? (${YEAR})`}
        description="Compare ProWritingAid, Grammarly, and QuillBot for grammar, style, paraphrasing, team controls and pricing. See the best pick for teams, students, and creators."
        canonical={canonical}
        keywords={`${primaryKeyword}, writing tool comparison, ai writing assistants`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Category + H1 */}
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Writing & editing
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          ProWritingAid vs Grammarly vs QuillBot ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          ProWritingAid delivers the deepest style and readability reports,
          Grammarly is the fastest for everyday grammar and tone, and QuillBot
          excels at paraphrasing and summarising. Here is how to choose—or stack
          them—in your writing workflow.
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
          <div className="rounded-3xl border border-emerald-100 bg-emerald-50 px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-emerald-900">
              <Sparkles className="h-5 w-5" />
              <p className="text-lg font-semibold">Quick verdict</p>
            </div>
            <p className="mt-2 text-slate-800">
              Choose <strong>ProWritingAid</strong> for deep style, readability
              and consistency reports—especially for long-form or team
              workflows. Use <strong>Grammarly</strong> when you want fast,
              low-friction grammar and tone checks wherever you type. Lean on{" "}
              <strong>QuillBot</strong> when your priority is paraphrasing,
              rewording and summarising existing text.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Crown className="h-4 w-4 text-emerald-600" /> Overall scoreboard
              winner: {overallWinner}{" "}
              <span className="text-xs text-slate-600">
                (avg:{" "}
                {overallWinner === "ProWritingAid"
                  ? averages.prowritingaid
                  : overallWinner === "Grammarly"
                  ? averages.grammarly
                  : averages.quillbot}
                /10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              There is no single “best” tool—pick based on whether you care most
              about structural editing depth, everyday speed, or powerful
              paraphrasing.
            </p>
          </div>
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-emerald-600" /> Side-by-side
            comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
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
                  <tr
                    key={row.label}
                    className="odd:bg-white even:bg-slate-50/50 align-top"
                  >
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">
                      {row.prowritingaid}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.grammarly}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.quillbot}
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
                  <th className="px-4 py-3">ProWritingAid</th>
                  <th className="px-4 py-3">Grammarly</th>
                  <th className="px-4 py-3">QuillBot</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const winnerValue = Math.max(
                    row.prowritingaid,
                    row.grammarly,
                    row.quillbot
                  );
                  const winner =
                    winnerValue === row.prowritingaid
                      ? "ProWritingAid"
                      : winnerValue === row.grammarly
                      ? "Grammarly"
                      : "QuillBot";
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
                          winner === "ProWritingAid"
                            ? "font-semibold text-emerald-800"
                            : "text-slate-700"
                        }`}
                      >
                        {row.prowritingaid}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Grammarly"
                            ? "font-semibold text-sky-800"
                            : "text-slate-700"
                        }`}
                      >
                        {row.grammarly}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "QuillBot"
                            ? "font-semibold text-emerald-900"
                            : "text-slate-700"
                        }`}
                      >
                        {row.quillbot}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">
                        {winner}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-emerald-50 via-sky-50 to-emerald-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.prowritingaid}
                  </td>
                  <td className="px-4 py-3 font-semibold text-sky-800">
                    {averages.grammarly}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-900">
                    {averages.quillbot}
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
            <Gauge className="h-6 w-6 text-emerald-600" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <ShieldCheck className="h-5 w-5 text-emerald-600" /> Grammar and
              correctness
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.grammar.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Layers className="h-5 w-5 text-sky-600" /> Style, structure &
              readability
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.style.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Type className="h-5 w-5 text-emerald-600" /> Paraphrasing &
              rewriting
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.paraphrasing.map((item) => (
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
                  <th className="px-4 py-3">Monthly / billing</th>
                  <th className="px-4 py-3">Best for</th>
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
                      {row.bestFor}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600">
            Pricing changes frequently based on promos, regions and academic or
            team discounts. Treat these as rough patterns and always confirm
            current plans on each vendor’s pricing page.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>ProWritingAid:</strong> Feels like an editor-plus-report
              environment. There is more to learn, but you get much deeper
              insight into style, structure and consistency.
            </li>
            <li>
              <strong>Grammarly:</strong> Almost invisible once installed. It
              quietly corrects grammar and clarity across apps, which is why
              non-writers adopt it quickly.
            </li>
            <li>
              <strong>QuillBot:</strong> Simple web app and extension focused on
              dropping in text to paraphrase or summarise. Easy to learn but
              more task-specific than always-on checkers.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Content teams and authors:</strong> ProWritingAid wins
              with deep reports, team style guides and terminology checks across
              long-form assets.
            </li>
            <li>
              <strong>Sales, support and internal comms:</strong> Grammarly
              wins by correcting emails, chat and docs in real time so messages
              stay clear and on-brand.
            </li>
            <li>
              <strong>Students and academic writing:</strong> QuillBot wins for
              paraphrasing, summarising and citation support—used carefully
              alongside your institution’s guidelines.
            </li>
            <li>
              <strong>Creators and solo professionals:</strong> A hybrid stack
              works well: Grammarly for daily writing, ProWritingAid for
              flagship pieces, QuillBot for occasional rewrites and summaries.
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
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Deep editing & style</h3>
              <p className="text-sm text-slate-700">
                <strong>Winner: ProWritingAid.</strong> Ideal for long-form,
                editorial content and teams who want to enforce a house style.
              </p>
            </div>
            <div className="rounded-2xl border border-sky-100 bg-sky-50/80 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Everyday writing speed</h3>
              <p className="text-sm text-slate-700">
                <strong>Winner: Grammarly.</strong> Excellent for emails,
                chats, docs and anything typed across your system.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/80 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Paraphrasing & summaries</h3>
              <p className="text-sm text-slate-700">
                <strong>Winner: QuillBot.</strong> Best when you need multiple
                versions of the same idea, shorter summaries, or different tones.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">
            FAQ: ProWritingAid vs Grammarly vs QuillBot
          </h2>
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

        {/* Internal review links */}
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <a
            className="group flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold text-emerald-700 ring-1 ring-slate-200 hover:bg-emerald-50"
            href="/tools/prowritingaid"
          >
            Read the full ProWritingAid review
            <ArrowLeft className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-0.5" />
          </a>
          <a
            className="group flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold text-emerald-700 ring-1 ring-slate-200 hover:bg-emerald-50"
            href="/tools/grammarly"
          >
            Read the full Grammarly review
            <ArrowLeft className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-0.5" />
          </a>
        </div>

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
