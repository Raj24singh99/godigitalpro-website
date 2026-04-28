import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Claude";
const slug = "claude";
const category = "AI Assistant";
const shortPitch = "Claude by Anthropic is an AI assistant focused on safety, long context, and helpfulness for writing, analysis, and coding.";
const pricingSummary =
  "Free web tier; paid Team/Pro/Enterprise tiers add higher limits, stronger models, and admin controls. API pricing is usage-based by tokens/context window.";
const officialUrl = "https://claude.ai";
const ratingValue = 4.6;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/anthropic.com",
  gradient: "from-indigo-500 via-blue-500 to-cyan-500",
  glow: "shadow-[0_20px_80px_rgba(99,102,241,0.24)]",
};

const alternatives = [
  { name: "ChatGPT", slug: "chatgpt" },
  { name: "Perplexity AI", slug: "perplexity-ai" },
  { name: "Gemini", slug: "google-workspace" },
  { name: "Poe", slug: "poe" },
  { name: "Pi AI", slug: "pi-ai" },
];

const faqs = [
  {
    q: "What is Claude?",
    a: "Claude is Anthropic's AI assistant designed for safe, helpful responses with support for long context windows.",
  },
  {
    q: "Who is it for?",
    a: "Teams and individuals who need drafting, analysis, coding help, and long-context work with a focus on safety.",
  },
  {
    q: "How long is the context window?",
    a: "Context length varies by model/version. Long context is a key differentiator; check current limits in the plan you use.",
  },
  {
    q: "How is pricing structured?",
    a: "Free web access exists. Team/Pro/Enterprise tiers add higher limits; API pricing is usage-based by tokens and context size.",
  },
  {
    q: "Does Claude browse the web?",
    a: "Browsing depends on model/version and rollout. Verify current capabilities and fact-check results.",
  },
  {
    q: "Is data private?",
    a: "Enterprise offers stronger privacy and admin controls. Avoid sharing secrets on free tiers and review Anthropic's policies.",
  },
  {
    q: "Does it support file uploads?",
    a: "Yes. File uploads help with summarization and analysis; size and type limits apply.",
  },
  {
    q: "Does it replace human review?",
    a: "No. Fact-check outputs, review code, and ensure compliance before using results.",
  },
];

function ClaudeToolPage() {
  const canonical = buildCanonical(`/tools/${slug}`);
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: toolName,
    description: shortPitch,
    brand: "Third-party tool",
    url: canonical,
    review: {
      "@type": "Review",
      author: { "@type": "Organization", name: "GoDigitalPro" },
      reviewBody:
        "Claude focuses on safety and long context, making it strong for drafting, analysis, and coding. Human review is still required for accuracy and compliance.",
      reviewRating: {
        "@type": "Rating",
        ratingValue,
        bestRating: "5",
        worstRating: "1",
      },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const featureBlocks = [
    {
      icon: <Sparkles className="h-5 w-5 text-indigo-500" />,
      title: "Long context",
      body: "Handle longer documents and conversations; great for analysis and summarization.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Drafting & analysis",
      body: "Write, summarize, and critique content with attention to safety guidelines.",
    },
    {
      icon: <Folder className="h-5 w-5 text-purple-500" />,
      title: "File uploads",
      body: "Upload docs for summaries, comparisons, and insights (size limits apply).",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "API & tooling",
      body: "API access with usage-based pricing and model choices; integrate into apps and workflows.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Integrations",
      body: "Emerging partner ecosystem; use third-party wrappers and tooling to extend Claude.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Safety focus",
      body: "Safety research underpins Claude—still review outputs for accuracy and compliance.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Claude review: features, pricing, pros & cons, and alternatives for a long-context, safety-focused AI assistant."
        canonical={canonical}
        image={`https://www.godigitalpro.in/og/tools/${slug}.png`}
        type="article"
        schema={[productSchema, faqSchema]}
        breadcrumbs={[
          { name: "Home", url: buildCanonical("/") },
          { name: "Tools Hub", url: buildCanonical("/tools") },
          { name: toolName, url: canonical },
        ]}
      />

      <main className="tool-page bg-white text-slate-900">
        <section className="section section--hero relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-100 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-indigo-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-sky-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-indigo-600" />
                {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                {toolName} Review (2025): Features, Pricing, Pros & Cons
              </h1>
              <p className="mt-4 text-lg text-slate-600">{shortPitch}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-700">
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Our rating: {ratingValue}/5</span>
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Reviewed by GoDigitalPro • Updated May 2025</span>
              </div>
              <p className="mt-4 text-slate-700">{pricingSummary}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="btn btn-primary bg-slate-900 text-white ring-2 ring-slate-900 hover:bg-slate-700" href={officialUrl}>
                  Visit official website
                </a>
              </div>
            </div>
            <div className="md:w-1/3">
              <div
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}
              >
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -left-8 top-10 h-20 w-20 rounded-full bg-white blur-3xl" />
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-indigo-100 blur-3xl" />
                </div>
                <div className="relative flex items-center gap-3">
                  <div className="h-14 w-14 overflow-hidden rounded-xl bg-white/20 ring-2 ring-white/30">
                    <img src={brandMeta.logo} alt={`${toolName} logo`} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/80">Featured Tool</p>
                    <p className="text-xl font-bold">{toolName}</p>
                  </div>
                </div>
                <p className="relative mt-4 text-sm leading-relaxed text-white/90">
                  {toolName} excels at long-context tasks. Keep human review for accuracy, policy, and data sensitivity across plans.
                </p>
                <div className="relative mt-4 flex items-center gap-2 text-sm font-semibold">
                  <Sparkles className="h-4 w-4 text-amber-200" />
                  Recommended by GoDigitalPro
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--overview bg-white">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">What is {toolName}?</h2>
            <p className="mt-4 text-slate-700">
              {toolName} is Anthropic's assistant focused on safety and long-context reasoning. It drafts, summarizes, and analyzes text, and can help with code while adhering to safety constraints.
            </p>
            <p className="mt-3 text-slate-700">
              Use it for research synthesis, policy-friendly drafting, and long documents. Always verify outputs and follow your data-handling rules.
            </p>
            <p className="mt-3 text-slate-700">API access lets teams integrate Claude into workflows; watch token and context costs.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams needing long-context analysis and safety-focused drafting.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Researchers synthesizing long reports and transcripts.",
                "Policy-sensitive teams needing careful outputs and review.",
                "Developers wanting safe-by-default AI assistance (with code review).",
                "Writers summarizing books, docs, and meeting notes.",
                "Operations teams building workflows with API access.",
                "Teams that value long context windows for reasoning tasks.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-indigo-500" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">{toolName} focuses on safety, long context, and strong writing/analysis support.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {featureBlocks.map((feature) => (
                <div key={feature.title} className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center gap-3 text-slate-900">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-700">{feature.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--pricing bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{toolName} pricing (2025)</h2>
                <p className="mt-2 text-slate-700">
                  {toolName} offers free web access, with Team/Pro/Enterprise tiers adding higher limits and admin controls. API is usage-priced by tokens and context window; long context increases cost.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start free; use Team/Pro for heavier use. Model API costs by token/context for production workloads.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Tier</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key inclusions</th>
                    <th className="px-4 py-3">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Free</td>
                    <td className="px-4 py-3">Light personal use</td>
                    <td className="px-4 py-3">Web access, basic limits</td>
                    <td className="px-4 py-3">Try before upgrading</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro/Team</td>
                    <td className="px-4 py-3">Power users & small teams</td>
                    <td className="px-4 py-3">Higher limits, better models, collaboration</td>
                    <td className="px-4 py-3">Good for recurring usage</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Governed use</td>
                    <td className="px-4 py-3">Admin controls, SSO, data policies, support</td>
                    <td className="px-4 py-3">Custom pricing</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Plan for token/context costs, data policies, and human review steps across all tiers.</p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-indigo-50 p-5 shadow-sm ring-1 ring-indigo-100">
                <div className="flex items-center gap-2 text-indigo-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Long context windows for deep documents.</li>
                  <li>Safety-forward design and responses.</li>
                  <li>Strong writing and analysis quality.</li>
                  <li>File uploads for summaries and comparisons.</li>
                  <li>API access for workflow integration.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>API long-context usage can be costly.</li>
                  <li>Availability of browsing/tools varies by model and rollout.</li>
                  <li>Still requires fact-checking and compliance review.</li>
                  <li>Feature rollout cadence differs from other assistants.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other assistants based on context length, safety posture, integrations, and cost.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href={`/tools/${alt.slug}`}>
                    View
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--vs bg-white">
          <div className="mx-auto max-w-5xl px-6 py-12 space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} vs other tools</h2>
            <p className="text-slate-700">See how {toolName} compares to other leading AI assistants.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs ChatGPT</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/chatgpt">
                  View ChatGPT
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ChatGPT offers broad integrations and a large ecosystem. {toolName} prioritizes safety and long context. Choose based on context needs and governance.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Perplexity AI</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/perplexity-ai">
                  View Perplexity AI
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Perplexity emphasizes retrieval and citations. {toolName} focuses on long-context creation and analysis. Pick based on whether sourcing or synthesis is primary.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need long-context analysis and a safety-forward assistant, and you will keep human review in the loop.
            </p>
            <p className="mt-3 text-slate-700">
              Model your usage costs for long context, and set data policies appropriate to your tier (Team/Enterprise for stronger controls).
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A top choice for long-context, safety-conscious work—pair it with verification and governance.
            </p>
          </div>
        </section>

        <section className="section section--faq bg-white">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} FAQs</h2>
            <p className="mt-2 text-slate-700">Tap a question to expand the answer.</p>
            <div className="mt-6 space-y-3">
              {faqs.map((item, idx) => (
                <AccordionItem key={item.q} question={item.q} answer={item.a} defaultOpen={idx === 0} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section--final bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12 space-y-4 text-slate-800">
            <h2 className="text-2xl font-bold text-slate-900">Final verdict on {toolName}</h2>
            <p>Choose {toolName} if you need long-context drafting, analysis, and a safety-forward assistant.</p>
            <p>
              Consider ChatGPT for broad integrations or Perplexity for cited answers; use {toolName} when context length and governance lead your requirements.
            </p>
            <p>{toolName} accelerates knowledge work—keep review, compliance, and cost controls in place.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-indigo-700 hover:text-indigo-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-indigo-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function AccordionItem({ question, answer, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-900"
      >
        <span className="text-sm font-semibold md:text-base">{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">{answer}</div>}
    </div>
  );
}

export default ClaudeToolPage;
