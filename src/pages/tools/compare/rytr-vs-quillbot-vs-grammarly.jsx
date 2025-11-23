import React from "react";
import {
  Sparkles,
  Crown,
  Layers,
  BarChart3,
  ArrowLeft,
  Gauge,
  Type,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "rytr vs quillbot vs grammarly";
const canonical = buildCanonical("/tools/compare/rytr-vs-quillbot-vs-grammarly");

const brandMeta = {
  rytr: {
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/rytr.me",
  },
  quillbot: {
    gradient: "from-emerald-500 via-teal-500 to-green-600",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/quillbot.com",
  },
  grammarly: {
    gradient: "from-sky-500 via-blue-500 to-indigo-600",
    badge: "bg-sky-100 text-sky-900",
    logo: "https://logo.clearbit.com/grammarly.com",
  },
};

const contenders = [
  {
    key: "rytr",
    name: "Rytr",
    blurb: "Affordable AI writer for short-form copy, ideas, and simple long-form outlines.",
    url: "https://rytr.me",
    slug: "rytr",
  },
  {
    key: "quillbot",
    name: "QuillBot",
    blurb: "Paraphrasing and rewriting assistant with multiple modes and citation tools.",
    url: "https://quillbot.com",
    slug: "quillbot",
  },
  {
    key: "grammarly",
    name: "Grammarly",
    blurb: "Grammar, clarity, and style checker with AI rewrite and tone suggestions.",
    url: "https://grammarly.com",
    slug: "grammarly",
  },
];

const comparisonRows = [
  {
    label: "Primary use",
    rytr: "Generate new copy from prompts and templates.",
    quillbot: "Paraphrase and rewrite existing text in different tones.",
    grammarly: "Fix grammar and clarity; suggest style and tone improvements.",
  },
  {
    label: "Long-form strength",
    rytr: "Good starter drafts and outlines; needs manual editing.",
    quillbot: "Best for rewriting sections or full paragraphs you already wrote.",
    grammarly: "Polishes completed drafts; not a full content generator.",
  },
  {
    label: "AI writing depth",
    rytr: "Multiple templates for emails, ads, blogs, and ideas.",
    quillbot: "Focused on rephrasing, summarising, and shortening content.",
    grammarly: "AI rewriter and suggestions built around your existing draft.",
  },
  {
    label: "Language & tone options",
    rytr: "Supports 30+ languages and tone options.",
    quillbot: "Multiple paraphrase modes (formal, simple, creative, etc.).",
    grammarly: "English-first with strong tone and formality controls.",
  },
  {
    label: "Integrations",
    rytr: "Primarily web app and browser workflows.",
    quillbot: "Browser extensions, Google Docs, Word, and more.",
    grammarly: "Deep integrations with browser, desktop, email, and office tools.",
  },
  {
    label: "Pricing feel",
    rytr: "Free tier + low-cost paid plans with character limits.",
    quillbot: "Free tier + affordable monthly/annual premium.",
    grammarly: "Free tier; premium and business plans are pricier.",
  },
  {
    label: "Best fit",
    rytr: "Budget AI copywriting across many formats.",
    quillbot: "Students, writers, and teams needing safe paraphrasing.",
    grammarly: "Professionals wanting clean, on-brand, error-free writing.",
  },
];

const scoreboard = [
  { label: "Copy generation", scores: { rytr: 8.7, quillbot: 7.4, grammarly: 7.0 } },
  { label: "Paraphrasing quality", scores: { rytr: 7.8, quillbot: 9.2, grammarly: 8.0 } },
  { label: "Grammar & clarity", scores: { rytr: 7.4, quillbot: 7.8, grammarly: 9.4 } },
  { label: "Value for money", scores: { rytr: 9.1, quillbot: 8.4, grammarly: 8.0 } },
  { label: "Ease of use", scores: { rytr: 8.9, quillbot: 8.6, grammarly: 9.0 } },
];

const avg = (key) =>
  (
    scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  rytr: avg("rytr"),
  quillbot: avg("quillbot"),
  grammarly: avg("grammarly"),
};

const overallWinner =
  Math.max(averages.rytr, averages.quillbot, averages.grammarly) ===
  parseFloat(averages.rytr)
    ? "Rytr"
    : Math.max(averages.quillbot, averages.grammarly) === parseFloat(averages.quillbot)
    ? "QuillBot"
    : "Grammarly";

const pricingTable = [
  {
    plan: "Rytr Premium",
    monthly: "Low-cost monthly pricing with character limits",
    annual: "Discounts for annual billing",
    limits: "Character quotas per month, access to all templates and tones",
    notes: "One of the most budget-friendly options if you need frequent AI generation.",
  },
  {
    plan: "QuillBot Premium",
    monthly: "Affordable monthly/semester plans",
    annual: "Cheaper per month on yearly plans",
    limits: "Higher paraphrase limits, full mode access, faster processing",
    notes: "Best value if your main need is paraphrasing and citation support.",
  },
  {
    plan: "Grammarly Premium / Business",
    monthly: "Higher price per seat than Rytr/QuillBot",
    annual: "Reduced rate on annual team contracts",
    limits: "Unlimited checks with advanced suggestions; team features on Business",
    notes: "Worth it for teams sending public-facing copy every day.",
  },
];

const featureBullets = {
  generation: [
    "Rytr: Dozens of templates for emails, ads, blog ideas, intros, product descriptions, and more.",
    "QuillBot: Summariser and paraphraser can help rework existing research into new angles.",
    "Grammarly: AI rewrite suggestions for clarity, tone, and conciseness on your original text.",
  ],
  paraphrasing: [
    "Rytr: Can regenerate sentences/paragraphs, but not designed as a dedicated paraphraser.",
    "QuillBot: Industry-known paraphrasing engine with multiple modes, synonym sliders, and citation tools.",
    "Grammarly: Rewrite suggestions that keep meaning but improve clarity and tone.",
  ],
  editing: [
    "Rytr: Basic grammar and tone support; best when paired with a dedicated editor.",
    "QuillBot: Grammar checker bundled with paraphraser for quick clean-up.",
    "Grammarly: Deep grammar, punctuation, tone, style, and consistency checks with suggestions in-context.",
  ],
};

const prosCons = {
  rytr: {
    pros: [
      "Very affordable AI writer for solo creators and small teams",
      "Wide range of templates for marketing, emails, and content ideas",
      "Supports many languages and tone options for global users",
    ],
    cons: [
      "Outputs still need strong editing for brand voice and nuance",
      "Not as strong as Grammarly at deep grammar and style checks",
      "Smaller ecosystem of integrations compared to Grammarly",
    ],
  },
  quillbot: {
    pros: [
      "Excellent paraphrasing quality with different modes and controls",
      "Good for students, academics, and writers refining existing drafts",
      "Includes summariser, citation tools, and basic grammar checking",
    ],
    cons: [
      "Not a full content generator like Rytr or other AI writers",
      "Can over-simplify or slightly change nuance if overused",
      "Free tier is limited for heavy daily use",
    ],
  },
  grammarly: {
    pros: [
      "Best-in-class grammar, clarity, and style suggestions for English",
      "Deep integrations across browsers, email, documents, and desktop apps",
      "Tone detection and rewrite suggestions help align with brand voice",
    ],
    cons: [
      "Pricier than Rytr and QuillBot, especially for teams",
      "Focused on English; less useful for non-English drafts",
      "AI generation features are more about refinement than full draft creation",
    ],
  },
};

const faqs = [
  {
    q: `Which should I pick in ${YEAR}?`,
    a: "Pick Rytr if you mainly need affordable AI copy generation. Choose QuillBot if paraphrasing and rewriting existing text is your core need. Choose Grammarly if you want the cleanest grammar, clarity, and tone for finished drafts.",
  },
  {
    q: "Can I use them together in a workflow?",
    a: "Yes. A common stack is: generate a rough draft with Rytr, refine or paraphrase tricky sections with QuillBot, then run everything through Grammarly for final grammar and tone checks.",
  },
  {
    q: "Which is cheapest overall?",
    a: "Rytr’s paid plans are typically the cheapest for ongoing content generation. QuillBot’s premium is very reasonable for paraphrasing. Grammarly generally costs more, but delivers the strongest grammar and clarity engine.",
  },
  {
    q: "Which is better for students?",
    a: "QuillBot is popular with students for paraphrasing and summarising sources. Grammarly is excellent for submitting error-free essays and emails. Rytr can help brainstorm ideas and outlines.",
  },
  {
    q: "Which is better for professional marketers or agencies?",
    a: "Rytr is helpful for generating ideas and first drafts at scale. Grammarly is almost essential to keep outbound copy polished. QuillBot can help repurpose content into new variations without starting from scratch.",
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
  const lowered = name.toLowerCase();
  const key = lowered.includes("rytr")
    ? "rytr"
    : lowered.includes("quill")
    ? "quillbot"
    : lowered.includes("gramm")
    ? "grammarly"
    : lowered;

  const meta =
    brandMeta[key] || {
      gradient: "from-slate-400 to-slate-600",
      badge: "bg-slate-100 text-slate-900",
    };

  return (
    <div className="flex items-center gap-2">
      <div
        className={`flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br ${meta.gradient}`}
      >
        {meta.logo ? (
          <img src={meta.logo} alt={`${name} logo`} className="h-full w-full object-cover" />
        ) : (
          <span className="text-sm font-bold text-white">{name.slice(0, 2).toUpperCase()}</span>
        )}
      </div>
      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${meta.badge}`}>{name}</span>
    </div>
  );
};

export default function RytrVsQuillbotVsGrammarlyPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Rytr vs QuillBot vs Grammarly (${YEAR}) – AI writing & editing tools compared`}
        description="Compare Rytr, QuillBot, and Grammarly for AI copywriting, paraphrasing, grammar, clarity, pricing, and the best workflows for students, marketers, and professionals."
        canonical={canonical}
        keywords={`${primaryKeyword}, ai writing comparison, paraphrasing tools, grammar checker comparison`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
          AI writing & editing
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Rytr vs QuillBot vs Grammarly ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Rytr is an affordable AI writer, QuillBot excels at paraphrasing, and Grammarly leads in
          grammar and clarity. Here is how these tools compare so you can build the right writing
          stack for your workflow.
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
              <p className="relative mt-3 text-sm font-medium text-white/90">{item.blurb}</p>
            </a>
          ))}
        </div>

        {/* Quick verdict + overall winner */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-amber-100 bg-amber-50 px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-amber-900">
              <Sparkles className="h-5 w-5" />
              <p className="text-lg font-semibold">Quick verdict</p>
            </div>
            <p className="mt-2 text-slate-800">
              Use <strong>Rytr</strong> to generate ideas and first-draft copy,{" "}
              <strong>QuillBot</strong> to paraphrase and tighten specific passages, and{" "}
              <strong>Grammarly</strong> to polish everything for grammar, clarity, and tone. Many
              teams will get the best results by combining at least two of these tools.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Crown className="h-4 w-4 text-amber-600" /> Overall scoreboard winner: {overallWinner}{" "}
              <span className="text-xs text-slate-600">
                (avg:{" "}
                {overallWinner === "Rytr"
                  ? averages.rytr
                  : overallWinner === "QuillBot"
                  ? averages.quillbot
                  : averages.grammarly}
                /10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              Choose based on whether you primarily need cheap AI generation, safe paraphrasing, or
              the strongest grammar and clarity engine for final drafts.
            </p>
          </div>
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-amber-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Rytr</th>
                  <th className="px-4 py-3">QuillBot</th>
                  <th className="px-4 py-3">Grammarly</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.rytr}</td>
                    <td className="px-4 py-3 text-slate-700">{row.quillbot}</td>
                    <td className="px-4 py-3 text-slate-700">{row.grammarly}</td>
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
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Rytr</th>
                  <th className="px-4 py-3">QuillBot</th>
                  <th className="px-4 py-3">Grammarly</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const { rytr, quillbot, grammarly } = row.scores;
                  const winnerValue = Math.max(rytr, quillbot, grammarly);
                  const winner =
                    winnerValue === rytr
                      ? "Rytr"
                      : winnerValue === quillbot
                      ? "QuillBot"
                      : "Grammarly";
                  return (
                    <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Rytr" ? "font-semibold text-amber-800" : "text-slate-700"
                        }`}
                      >
                        {rytr}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "QuillBot"
                            ? "font-semibold text-emerald-800"
                            : "text-slate-700"
                        }`}
                      >
                        {quillbot}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Grammarly"
                            ? "font-semibold text-sky-800"
                            : "text-slate-700"
                        }`}
                      >
                        {grammarly}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">{winner}</td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-amber-50 via-emerald-50 to-sky-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-amber-800">{averages.rytr}</td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.quillbot}
                  </td>
                  <td className="px-4 py-3 font-semibold text-sky-800">
                    {averages.grammarly}
                  </td>
                  <td className="px-4 py-3 font-bold text-slate-900">{overallWinner}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Feature comparison */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-amber-600" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Type className="h-5 w-5 text-amber-600" /> AI generation & ideation
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.generation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Layers className="h-5 w-5 text-emerald-600" /> Paraphrasing & rewriting
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.paraphrasing.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <ShieldCheck className="h-5 w-5 text-sky-600" /> Grammar, clarity & tone
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.editing.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Pricing snapshots</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Monthly (approx.)</th>
                  <th className="px-4 py-3">Annual</th>
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
                    <td className="px-4 py-3 text-slate-700">{row.monthly}</td>
                    <td className="px-4 py-3 text-slate-700">{row.annual}</td>
                    <td className="px-4 py-3 text-slate-700">{row.limits}</td>
                    <td className="px-4 py-3 text-slate-700">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600">
            Pricing changes frequently and may vary by region and promotion. Always confirm current
            prices, limits, and discounts directly on each product’s pricing page before choosing a
            plan.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Rytr:</strong> Simple interface focused on templates and prompts. Easy for
              non-technical marketers, founders, and students to generate quick drafts.
            </li>
            <li>
              <strong>QuillBot:</strong> Very straightforward—paste text, choose a mode, and
              paraphrase. Great for frequent rephrasing with minimal setup.
            </li>
            <li>
              <strong>Grammarly:</strong> Deep integrations with browsers, email, and office apps
              make it feel “always on”. Ideal if you want constant guardrails across your writing
              stack.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Marketers and copywriters drafting campaigns:</strong> Rytr wins for fast
              generation of options and variations, then Grammarly to finalise.
            </li>
            <li>
              <strong>Students and researchers rephrasing sources:</strong> QuillBot wins for safe
              paraphrasing and summarising, with Grammarly as a strong companion.
            </li>
            <li>
              <strong>Founders and professionals writing emails & docs daily:</strong> Grammarly wins
              for always-on grammar, clarity, and tone support across tools.
            </li>
            <li>
              <strong>Agencies producing high volume content:</strong> Combine Rytr for draft
              generation, QuillBot for repurposing, and Grammarly for final quality control.
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
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Rytr</h3>
              <p className="text-sm text-slate-700">
                Best when you need lots of ideas, outlines, and first drafts across many content
                types on a tight budget.
              </p>
              <p className="mt-2 text-sm font-semibold text-amber-700">
                Ideal for: Solo creators, small agencies, and founders who need speed over polish.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">QuillBot</h3>
              <p className="text-sm text-slate-700">
                Best for paraphrasing and summarising existing content while keeping the original
                meaning intact.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: Students, academics, and writers who refine text instead of generating it
                from scratch.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Grammarly</h3>
              <p className="text-sm text-slate-700">
                Best for ensuring your final writing is grammatically correct, concise, and on-tone
                everywhere you type.
              </p>
              <p className="mt-2 text-sm font-semibold text-sky-700">
                Ideal for: Professionals, sales teams, support teams, and agencies shipping
                client-facing copy.
              </p>
            </div>
          </div>
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
            to="/tools"
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-amber-700 ring-1 ring-amber-100 hover:bg-amber-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
