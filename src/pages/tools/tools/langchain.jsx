import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "LangChain";
const slug = "langchain";
const category = "AI Developer Tools";
const shortPitch = "LangChain is an open-source framework for building LLM-powered applications with chains, agents, vector search, and integrations.";
const pricingSummary =
  "Open source framework; costs depend on infra and model usage. Commercial hosting and paid services are available separately if needed.";
const officialUrl = "https://www.langchain.com";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/langchain.com",
  gradient: "from-emerald-500 via-teal-500 to-indigo-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.24)]",
};

const alternatives = [
  { name: "LlamaIndex", slug: "llamaindex" },
  { name: "Haystack", slug: "haystack" },
  { name: "FastAPI + OpenAI SDK", slug: "fastapi" },
  { name: "Hugging Face Transformers", slug: "huggingface" },
  { name: "Semantic Kernel", slug: "semantic-kernel" },
];

const faqs = [
  {
    q: "What is LangChain?",
    a: "LangChain is an open-source framework that helps developers build LLM applications using chains, agents, retrieval, and integrations.",
  },
  {
    q: "Who is LangChain best for?",
    a: "Developers building chatbots, RAG systems, agents, or workflow automation with LLMs who want a batteries-included framework.",
  },
  {
    q: "Does LangChain support retrieval-augmented generation (RAG)?",
    a: "Yes. It includes document loaders, text splitters, embeddings, vector stores, and retrieval chains.",
  },
  {
    q: "How is LangChain priced?",
    a: "The framework is open source. Costs come from hosting, vector databases, and model/API usage; managed services may charge separately.",
  },
  {
    q: "Can I use any LLM?",
    a: "LangChain supports many providers (OpenAI, Anthropic, local models, etc.) via integrations and wrappers.",
  },
  {
    q: "Does it include observability?",
    a: "Integrations with tracing and evaluation tools (e.g., LangSmith) help monitor chains, latency, and costs.",
  },
  {
    q: "Is there a UI builder?",
    a: "You can pair LangChain with web frameworks; UI builders are not core, but templates and examples exist.",
  },
  {
    q: "Do I still need custom engineering?",
    a: "Yes. Production apps require prompt design, evals, monitoring, and guardrails; LangChain provides building blocks, not turnkey products.",
  },
];

function LangChainPage() {
  const canonical = buildCanonical(`/tools/${slug}`);
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: toolName,
    description: shortPitch,
    brand: "Open-source framework",
    url: canonical,
    review: {
      "@type": "Review",
      author: { "@type": "Organization", name: "GoDigitalPro" },
      reviewBody:
        "LangChain provides chains, agents, retrieval components, and integrations that speed up building LLM-powered apps. You still need strong engineering for production quality.",
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
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "Chains & agents",
      body: "Compose prompts, tools, and decision flows; build agents that call external tools.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Retrieval (RAG)",
      body: "Document loaders, text splitters, embeddings, and vector stores for retrieval-augmented generation.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Integrations",
      body: "Supports many LLMs, vector DBs, storage, and tool APIs to plug into your stack.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Guardrails & evals",
      body: "Hooks for moderation, retries, and evaluation to improve reliability (via community tools and LangSmith).",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Templates & examples",
      body: "Starter templates for chatbots, docs QA, and agents to accelerate prototyping.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Observability",
      body: "Tracing and logging via integrations (e.g., LangSmith) to monitor latency and cost.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="LangChain review: features, pros & cons, and alternatives so you can choose the right framework for building LLM apps."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-emerald-600" />
                {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                {toolName} Review (2025): Features, Pros & Cons, Alternatives
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-emerald-100 blur-3xl" />
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
                  {toolName} gives developers building blocks for LLM apps—chains, agents, and retrieval—while you bring your own models and infrastructure.
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
              {toolName} is an open-source framework that simplifies building LLM applications. It provides abstractions for prompts, chains, agents, tool calling, retrieval, and integrations with many LLMs and vector stores.
            </p>
            <p className="mt-3 text-slate-700">
              Use it to build chatbots, RAG systems, and AI agents. Pair it with observability and evals to monitor latency, cost, and quality in production.
            </p>
            <p className="mt-3 text-slate-700">
              The framework is free; costs come from your infrastructure, model usage, and any managed services you adopt.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for developers and teams building LLM apps who want flexible building blocks and many integrations.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Teams building chatbots or assistants with tool calling.",
                "Developers creating retrieval-augmented generation (RAG) workflows.",
                "Startups needing quick prototypes with many LLM/vector options.",
                "Enterprises standardizing LLM integrations across products.",
                "Engineers who want observability and eval hooks for LLM flows.",
                "Teams willing to manage infra, prompts, guardrails, and testing.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">
              {toolName} focuses on chains, agents, retrieval components, and integrations to speed up LLM app development.
            </p>
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
                  {toolName} is open source; there is no framework license fee. Costs come from hosting, vector DBs, and model/API usage. Managed services (like LangSmith hosting) may be paid.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Prototype locally; model and vector costs add up in production. Add tracing/evals early to track latency, quality, and spend.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Option</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key inclusions</th>
                    <th className="px-4 py-3">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Self-hosted OSS</td>
                    <td className="px-4 py-3">Developers</td>
                    <td className="px-4 py-3">Open source framework</td>
                    <td className="px-4 py-3">Infra + model costs only</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Managed services</td>
                    <td className="px-4 py-3">Teams needing hosted tooling</td>
                    <td className="px-4 py-3">Tracing, evals, possible hosting</td>
                    <td className="px-4 py-3">Separate pricing; evaluate SLAs</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Custom stack</td>
                    <td className="px-4 py-3">Enterprises</td>
                    <td className="px-4 py-3">Pick LLMs/vector DBs/infra</td>
                    <td className="px-4 py-3">Requires platform engineering</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Budget for model usage, vector storage, and observability. Build guardrails, evals, and caching to control quality and costs.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-emerald-50 p-5 shadow-sm ring-1 ring-emerald-100">
                <div className="flex items-center gap-2 text-emerald-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Open source with a large ecosystem.</li>
                  <li>Supports many LLMs, vector stores, and tools.</li>
                  <li>Built-in components for chains, agents, and retrieval.</li>
                  <li>Observability/eval integrations for production readiness.</li>
                  <li>Templates accelerate prototypes.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Not turnkey—requires engineering and prompt design.</li>
                  <li>Production quality needs evals, guardrails, and monitoring.</li>
                  <li>Ecosystem moves quickly; upgrades can require refactors.</li>
                  <li>Costs come from external models/vector DBs; must be managed.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other LLM frameworks to match your preferred stack, hosting model, and tooling needs.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} compares with other LLM frameworks.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs LlamaIndex</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/llamaindex">
                  View LlamaIndex
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                LlamaIndex focuses deeply on retrieval and data connectors; {toolName} offers broader chains/agents plus retrieval. Choose based on whether retrieval depth or general-purpose flows matter most.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Semantic Kernel</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/semantic-kernel">
                  View Semantic Kernel
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Semantic Kernel is Microsoft’s OSS framework for planners/skills; {toolName} has a larger ecosystem of integrations and templates. Pick based on your stack (Azure/.NET vs. broader polyglot) and feature preferences.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need a flexible, open-source framework to build LLM apps with retrieval, tool calling, and integrations—and you can invest in engineering and observability.
            </p>
            <p className="mt-3 text-slate-700">
              Budget for model/vector costs, add evals and guardrails early, and plan for maintenance as the ecosystem evolves.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A leading framework for LLM development—best for teams ready to manage infrastructure, quality, and costs.
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
            <p>
              Choose {toolName} if you want an open-source, integration-rich framework for LLM apps and you are prepared to own infra, evals, and guardrails.
            </p>
            <p>
              Consider LlamaIndex for retrieval-focused builds or Semantic Kernel for Azure/.NET ecosystems; keep {toolName} for general-purpose chains, agents, and ecosystem breadth.
            </p>
            <p>{toolName} accelerates LLM development—production success hinges on monitoring, cost controls, and iterative testing.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-emerald-700 hover:text-emerald-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-emerald-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default LangChainPage;
