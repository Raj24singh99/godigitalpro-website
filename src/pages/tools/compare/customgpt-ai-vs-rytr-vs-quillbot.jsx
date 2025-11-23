import React from "react";
import {
  Sparkles,
  Crown,
  Compass,
  Gauge,
  ArrowLeft,
  BarChart3,
} from "lucide-react";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";
import { Link } from "react-router-dom";

const YEAR = new Date().getFullYear();
const canonical = buildCanonical("/tools/compare/customgpt-ai-vs-rytr-vs-quillbot");
const primaryKeyword = "customgpt ai vs rytr vs quillbot";

const brandMeta = {
  customgpt: {
    gradient: "from-indigo-600 via-blue-600 to-slate-800",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/customgpt.ai",
  },
  rytr: {
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/rytr.me",
  },
  quillbot: {
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/quillbot.com",
  },
};

const contenders = [
  {
    key: "customgpt",
    name: "CustomGPT.ai",
    blurb: "No-code, data-grounded chatbots with citations and embeds.",
    url: "https://customgpt.ai/",
  },
  {
    key: "rytr",
    name: "Rytr",
    blurb: "Budget-friendly AI writing assistant for drafts and outlines.",
    url: "https://rytr.me/",
  },
  {
    key: "quillbot",
    name: "QuillBot",
    blurb: "Paraphrasing, rewriting, and grammar helper for existing content.",
    url: "https://quillbot.com/",
  },
];

const comparisonRows = [
  {
    label: "Best for",
    customgpt: "Data-grounded chatbots with citations",
    rytr: "Affordable AI writing",
    quillbot: "Paraphrasing & rewriting",
  },
  {
    label: "Core strength",
    customgpt: "No-code RAG chatbots",
    rytr: "Quick blog & copy drafts",
    quillbot: "Rewrites, grammar, summarizing",
  },
  {
    label: "Citations & trust",
    customgpt: "Yes, sources from your data",
    rytr: "No citations",
    quillbot: "No citations",
  },
  {
    label: "Embeds & deployment",
    customgpt: "Embeds, links, API/webhooks",
    rytr: "Exports/text outputs",
    quillbot: "Browser/editor extensions",
  },
  {
    label: "Pricing style",
    customgpt: "Per-bot/data limits",
    rytr: "Seats + character limits",
    quillbot: "Subscriptions for rewriting",
  },
  {
    label: "Use cases",
    customgpt: "Support, FAQ, onboarding chat",
    rytr: "Content drafts, outlines",
    quillbot: "Rewrite, simplify, grammar",
  },
];

const scoreboard = [
  { label: "Data-grounded accuracy", customgpt: 9.3, rytr: 7.1, quillbot: 7.0 },
  { label: "Writing flexibility", customgpt: 7.4, rytr: 8.4, quillbot: 7.6 },
  { label: "Ease of launch", customgpt: 8.7, rytr: 8.8, quillbot: 9.0 },
  { label: "Value for price", customgpt: 8.3, rytr: 9.0, quillbot: 8.6 },
  { label: "Deployment options", customgpt: 9.0, rytr: 7.5, quillbot: 7.2 },
];

const quickPicks = [
  {
    label: "Best for trusted, data-grounded chat",
    tool: "CustomGPT.ai",
    reason: "Retrieval-augmented answers from your own documents with citations and embeds.",
  },
  {
    label: "Best budget AI writer",
    tool: "Rytr",
    reason: "Low-cost plans for blog posts, ads, and outlines without complex configuration.",
  },
  {
    label: "Best for paraphrasing & polishing",
    tool: "QuillBot",
    reason: "Strong rewriting, simplification, and grammar tools layered on your existing copy.",
  },
];

const faqs = [
  {
    q: `Who wins overall in ${YEAR}?`,
    a: "CustomGPT.ai wins if you need trusted chatbots with citations and deployment options. Rytr wins for budget-friendly content drafts. QuillBot wins for paraphrasing, rewriting, and grammar workflows.",
  },
  {
    q: "Who should choose CustomGPT.ai?",
    a: "Pick CustomGPT.ai to build branded, data-grounded chatbots for support, onboarding, FAQ, or internal knowledge use-cases without writing code. It shines when you want answers tied back to specific sources.",
  },
  {
    q: "Who should choose Rytr?",
    a: "Choose Rytr if you mainly want fast, inexpensive AI writing help—blog ideas, outlines, social posts, ads—and you do not need retrieval-augmented grounding or citations.",
  },
  {
    q: "Who should choose QuillBot?",
    a: "Choose QuillBot when you already have content and need to rewrite, simplify, paraphrase, or correct grammar. It fits students, editors, and teams who polish drafts rather than generate from scratch.",
  },
  {
    q: "Can these tools replace human editors?",
    a: "No—each tool speeds up drafting, chat, or rewriting, but you still need human review for tone, compliance, and accuracy, especially for public or regulated content.",
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

const avg = (toolKey) =>
  (
    scoreboard.reduce((sum, row) => sum + (row[toolKey] || 0), 0) / scoreboard.length
  ).toFixed(1);

const averages = {
  customgpt: avg("customgpt"),
  rytr: avg("rytr"),
  quillbot: avg("quillbot"),
};

const overallWinnerKey = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const overallWinnerName =
  overallWinnerKey === "customgpt"
    ? "CustomGPT.ai"
    : overallWinnerKey === "rytr"
    ? "Rytr"
    : "QuillBot";

const pricingTable = [
  {
    plan: "CustomGPT.ai (Business tiers)",
    monthly: "Varies by bots & usage",
    model: "Per-workspace with chatbot and document limits; usage-based elements on higher tiers.",
    bestFor: "Teams deploying multiple data-grounded chatbots with citations and embeds.",
    notes:
      "Expect higher tiers to include privacy controls, SSO, and more capacity for documents and traffic.",
  },
  {
    plan: "Rytr (Saver / Unlimited)",
    monthly: "Low-cost per user",
    model: "Per-seat plans with character limits or mostly-unlimited usage depending on tier.",
    bestFor: "Freelancers, creators, and SMBs needing inexpensive AI writing support.",
    notes:
      "Great for high-volume drafting on a budget; watch character limits on lower tiers if you publish often.",
  },
  {
    plan: "QuillBot (Premium)",
    monthly: "Subscription for rewriting",
    model: "Individual or team subscriptions that unlock paraphrasing modes and higher usage caps.",
    bestFor: "Students, editors, and teams regularly paraphrasing or polishing existing content.",
    notes:
      "Often used alongside other writing tools—generate elsewhere, then refine and rewrite inside QuillBot.",
  },
];

const prosCons = {
  customgpt: {
    pros: [
      "Retrieval-augmented chat grounded in your own docs and URLs.",
      "Built-in citations and source links for each answer, improving trust.",
      "No-code chatbot builder with widgets, share links, API, and webhooks.",
      "Fits support, onboarding, internal knowledge, and FAQ scenarios.",
    ],
    cons: [
      "Less focused on pure long-form writing templates than Rytr.",
      "Requires curated data sources for best results.",
      "Pricing scales with bot count and usage, which teams must monitor.",
    ],
  },
  rytr: {
    pros: [
      "Very affordable entry pricing compared with many AI writers.",
      "Simple interface for blog ideas, short-form copy, and outlines.",
      "Good mix of languages and tone controls for casual use.",
    ],
    cons: [
      "No citations or tight grounding in your private data.",
      "Less governance and collaboration than larger marketing suites.",
      "Outputs often require editing, especially for nuanced topics.",
    ],
  },
  quillbot: {
    pros: [
      "Excellent at paraphrasing and rewriting existing content.",
      "Built-in grammar and plagiarism functionality (by plan).",
      "Convenient browser and editor extensions for in-place edits.",
    ],
    cons: [
      "Not meant for full-content generation from scratch.",
      "No retrieval or citations; relies entirely on your input text.",
      "Team/enterprise deployment options are lighter than full AI platforms.",
    ],
  },
};

const featureBullets = {
  grounding: [
    "CustomGPT.ai: Focuses on retrieval-augmented generation (RAG) using your documents, websites, and knowledge bases as primary sources.",
    "Rytr: Uses general models and prompt templates for drafting; does not natively ground responses in your private content.",
    "QuillBot: Works almost entirely on text you paste in; it rewrites and checks grammar instead of consulting an external corpus.",
  ],
  workflows: [
    "CustomGPT.ai: Customer support bots, onboarding assistants, internal knowledge Q&A, partner/self-serve portals.",
    "Rytr: Blog post ideas, outlines, ad copy, social snippets, email drafts, and SEO-friendly paragraphs.",
    "QuillBot: Rewriting student essays, simplifying technical texts, polishing marketing copy, and avoiding repetition.",
  ],
  deployment: [
    "CustomGPT.ai: Embeddable chat widgets, links, API integration, and webhooks for custom workflows.",
    "Rytr: Primarily a web app for generating text; export content to your CMS or documents.",
    "QuillBot: Web app plus extensions for browsers and text editors, making it easy to rewrite content in place.",
  ],
};

const useCases = [
  {
    title: "Support & FAQ chat on your website",
    winner: "CustomGPT.ai",
    reasoning:
      "It can ingest your docs, help center, and policies, then surface answers with citations in an embeddable chatbot.",
  },
  {
    title: "Low-cost help drafting blogs and ads",
    winner: "Rytr",
    reasoning:
      "Its pricing and templates are tuned for solo creators and small teams drafting a lot of content quickly.",
  },
  {
    title: "Paraphrasing and simplifying existing copy",
    winner: "QuillBot",
    reasoning:
      "QuillBot excels at rewriting sentences, adjusting tone, and simplifying complex paragraphs without changing meaning too much.",
  },
  {
    title: "Internal knowledge assistant for your team",
    winner: "CustomGPT.ai",
    reasoning:
      "By indexing internal docs and wikis, CustomGPT.ai can become a single chat interface for internal policies, SOPs, and FAQs.",
  },
];

const LogoBadge = ({ name }) => {
  const key = name.toLowerCase().includes("custom")
    ? "customgpt"
    : name.toLowerCase().includes("rytr")
    ? "rytr"
    : name.toLowerCase().includes("quill")
    ? "quillbot"
    : name.toLowerCase();
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
      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${meta.badge}`}>
        {name}
      </span>
    </div>
  );
};

const getRowWinnerName = (row) => {
  const max = Math.max(row.customgpt, row.rytr, row.quillbot);
  if (row.customgpt === row.rytr && row.rytr === row.quillbot) return "Tie";
  if (max === row.customgpt) return "CustomGPT.ai";
  if (max === row.rytr) return "Rytr";
  return "QuillBot";
};

export default function CustomGptVsRytrVsQuillbotPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`CustomGPT.ai vs Rytr vs QuillBot (${YEAR}) – AI tool comparison`}
        description="Deep comparison of CustomGPT.ai, Rytr, and QuillBot across data-grounded chat, rewriting, pricing, and deployment so you can pick the right AI helper for your stack."
        canonical={canonical}
        keywords={`${primaryKeyword}, customgpt review, rytr review, quillbot review, ai writing comparison, rag chatbot, paraphrasing tool`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">
          AI tools & writing assistants
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          CustomGPT.ai vs Rytr vs QuillBot ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          <strong>CustomGPT.ai</strong> specializes in data-grounded chat with
          citations on your content. <strong>Rytr</strong> is a budget writing
          assistant for quick drafts. <strong>QuillBot</strong> focuses on
          paraphrasing, rewriting, and grammar. This breakdown highlights strengths,
          pricing, and best-fit use-cases so you can decide what belongs in your AI
          stack.
        </p>

        {/* Quick verdict & highlight cards */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2 space-y-3 rounded-3xl bg-indigo-50/90 p-6 ring-1 ring-indigo-100">
            <div className="flex items-center gap-2 text-lg font-semibold text-indigo-900">
              <Sparkles className="h-5 w-5" />
              Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>CustomGPT.ai</strong> when you need trusted chatbots on
              your own data with citations and embed options. Choose{" "}
              <strong>Rytr</strong> if you want low-cost, general-purpose AI
              writing. Choose <strong>QuillBot</strong> when your core workflow is
              improving or paraphrasing existing text rather than generating from
              scratch.
            </p>
            <ul className="mt-2 space-y-1 text-sm text-slate-700">
              {quickPicks.map((pick) => (
                <li key={pick.label}>
                  <span className="font-semibold">{pick.label}:</span>{" "}
                  <span className="font-semibold text-slate-900">
                    {pick.tool}
                  </span>{" "}
                  – {pick.reason}
                </li>
              ))}
            </ul>
            <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-indigo-900">
              <Crown className="h-4 w-4 text-indigo-600" />
              Overall scoreboard winner: {overallWinnerName}
              <span className="text-xs font-medium text-slate-700">
                (avg:{" "}
                {overallWinnerKey === "customgpt"
                  ? averages.customgpt
                  : overallWinnerKey === "rytr"
                  ? averages.rytr
                  : averages.quillbot}
                /10)
              </span>
            </div>
          </div>

          <div className="space-y-3 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Compass className="h-5 w-5 text-indigo-700" />
              How they focus
            </div>
            <p className="text-sm text-slate-700">
              <strong>CustomGPT.ai</strong> is a chatbot and agent platform,{" "}
              <strong>Rytr</strong> is an AI writer, and <strong>QuillBot</strong>{" "}
              is a rewriting tool. Mapping your primary workflow to this spectrum
              usually reveals the clear choice.
            </p>
          </div>

          <div className="space-y-3 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <BarChart3 className="h-5 w-5 text-emerald-600" />
              Cost vs. depth
            </div>
            <p className="text-sm text-slate-700">
              <strong>Rytr</strong> and <strong>QuillBot</strong> have low entry
              prices for individuals. <strong>CustomGPT.ai</strong> is priced more
              like infrastructure for chatbots—higher value when bots are central to
              your experience.
            </p>
          </div>
        </div>

        {/* Contender cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {contenders.map((tool) => {
            const meta = brandMeta[tool.key];
            return (
              <a
                key={tool.key}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative block overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br ${
                  meta?.gradient || "from-slate-500 to-slate-800"
                } p-5 shadow-md`}
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white" />
                  <div className="pointer-events-none absolute -left-12 bottom-0 h-28 w-28 rounded-full bg-white" />
                </div>
                <div className="relative flex items-start justify-between">
                  <LogoBadge name={tool.name} />
                  <span className="rounded-full bg-black/25 px-2 py-1 text-xs font-semibold text-white/90">
                    AI contender
                  </span>
                </div>
                <p className="relative mt-3 text-sm font-medium text-white/90">
                  {tool.blurb}
                </p>
              </a>
            );
          })}
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-12 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-indigo-600" />
            Side-by-side comparison
          </h2>
          <p className="text-sm text-slate-700">
            This table summarizes how CustomGPT.ai, Rytr, and QuillBot differ on key
            dimensions like citations, deployment options, and pricing approach.
          </p>

          <div className="overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm text-slate-800 md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">CustomGPT.ai</th>
                  <th className="px-4 py-3">Rytr</th>
                  <th className="px-4 py-3">QuillBot</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="align-top odd:bg-white even:bg-slate-50/40">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-900">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.customgpt}</td>
                    <td className="px-4 py-3 text-slate-700">{row.rytr}</td>
                    <td className="px-4 py-3 text-slate-700">{row.quillbot}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Scoreboard */}
        <section className="mt-12 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <BarChart3 className="h-6 w-6 text-indigo-600" />
            Scoreboard (1–10)
          </h2>
          <p className="text-sm text-slate-700">
            Scores are directional and blend hands-on experience with how each tool
            positions itself. The top scorer per row is highlighted; the final row
            shows the overall average and winner.
          </p>

          <div className="overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Criterion</th>
                  <th className="px-4 py-3">CustomGPT.ai</th>
                  <th className="px-4 py-3">Rytr</th>
                  <th className="px-4 py-3">QuillBot</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const winnerName = getRowWinnerName(row);
                  const max = Math.max(row.customgpt, row.rytr, row.quillbot);

                  return (
                    <tr key={row.label}>
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          max === row.customgpt
                            ? "font-semibold text-indigo-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.customgpt}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          max === row.rytr
                            ? "font-semibold text-amber-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.rytr}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          max === row.quillbot
                            ? "font-semibold text-emerald-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.quillbot}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {winnerName}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-indigo-50 via-amber-50 to-emerald-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (overall winner)
                  </th>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages.customgpt}
                  </td>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages.rytr}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.quillbot}
                  </td>
                  <td className="px-4 py-3 font-bold text-slate-900">
                    {overallWinnerName}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Feature comparison */}
        <section className="mt-12 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Compass className="h-6 w-6 text-indigo-600" />
            How they differ in practice
          </h2>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-slate-900">
              Data grounding & citations
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 md:text-base">
              {featureBullets.grounding.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-slate-900">
              Core workflows & use-cases
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 md:text-base">
              {featureBullets.workflows.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-slate-900">
              Deployment & integrations
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 md:text-base">
              {featureBullets.deployment.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Pricing snapshots</h2>
          <div className="overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Plan / Suite</th>
                  <th className="px-4 py-3">Indicative monthly</th>
                  <th className="px-4 py-3">Pricing model</th>
                  <th className="px-4 py-3">Best for</th>
                  <th className="px-4 py-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {pricingTable.map((row) => (
                  <tr key={row.plan}>
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-900">
                      {row.plan}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.monthly}</td>
                    <td className="px-4 py-3 text-slate-700">{row.model}</td>
                    <td className="px-4 py-3 text-slate-700">{row.bestFor}</td>
                    <td className="px-4 py-3 text-slate-700">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600">
            Pricing changes quickly for AI tools—treat these snapshots as directional
            and confirm current tiers, limits, and discounts on each vendor’s
            pricing page.
          </p>
        </section>

        {/* Use-cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {useCases.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200"
              >
                <h3 className="text-base font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm font-semibold text-indigo-700">
                  Winner: {item.winner}
                </p>
                <p className="mt-1 text-sm text-slate-700">{item.reasoning}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pros & cons */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        {/* FAQ */}
        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
              >
                <h3 className="text-lg font-semibold text-slate-900">{item.q}</h3>
                <p className="mt-1 text-slate-700">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Back link */}
        <div className="mt-10 flex items-center gap-2 text-sm text-slate-600">
          <Link
            to="/tools/customgpt-ai"
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-indigo-700 shadow-sm ring-1 ring-indigo-100 hover:bg-indigo-50"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to CustomGPT.ai review
          </Link>
        </div>
      </div>
    </main>
  );
}
