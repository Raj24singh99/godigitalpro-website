import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "SuperAGI";
const slug = "superagi";
const category = "AI Agent Framework";
const shortPitch =
  "SuperAGI is an open-source framework for building and running AI agents with tools, workflows, and integrations for automation and experimentation.";
const pricingSummary =
  "Open source to self-host; paid cloud/managed options vary by usage, compute, and support. Costs depend on runs, models, and integrations.";
const officialUrl = "https://superagi.com";
const ratingValue = 4.1;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/superagi.com",
  gradient: "from-emerald-500 via-teal-500 to-blue-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.24)]",
};

const alternatives = [
  { name: "LangChain", slug: "langchain" },
  { name: "Flowise", slug: "flowiseai" },
  { name: "OpenAI Assistants", slug: "openai-assistants" },
  { name: "Auto-GPT", slug: "autogpt" },
  { name: "SuperAGI Cloud", slug: "superagi" },
];

const faqs = [
  {
    q: "What is SuperAGI?",
    a: "SuperAGI is an open-source framework for building AI agents with tool use, workflows, and integrations. It supports multi-step automation and experimentation.",
  },
  {
    q: "Who is it for?",
    a: "Developers and automation teams building custom AI agents, experimenting with tool use, or orchestrating multi-step workflows.",
  },
  {
    q: "How is pricing structured?",
    a: "The framework is open-source; paid cloud/managed offerings charge by usage, compute, and support. Self-hosting costs depend on infra and model usage.",
  },
  {
    q: "What models are supported?",
    a: "Supports multiple LLMs (model choice may vary by deployment). You can configure model providers and keys.",
  },
  {
    q: "Are tools/integrations available?",
    a: "Yes. Agents can call external tools/APIs; integrations depend on configuration and community add-ons.",
  },
  {
    q: "Does it handle security?",
    a: "Self-hosting requires you to manage secrets, rate limits, and safety. Cloud options may add controls; always enforce guardrails.",
  },
  {
    q: "Can non-developers use it?",
    a: "It is developer-focused. Some UIs exist, but expect technical setup for custom agents and workflows.",
  },
  {
    q: "Is it production-ready?",
    a: "Use caution. Test agents thoroughly, add logging/monitoring, and set constraints before deploying to production use cases.",
  },
];

function SuperagiToolPage() {
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
        "SuperAGI is an open-source AI agent framework for building tool-using agents and workflows. It suits developers who want customization and self-host or managed options.",
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
      title: "Agent framework",
      body: "Build AI agents with multi-step workflows, goals, and tool use.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Tool integration",
      body: "Connect agents to external APIs and tools to act beyond text generation.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Multiple model support",
      body: "Configure different LLM providers; choose models based on cost/performance.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Self-host or cloud",
      body: "Run open-source locally/own infra or use managed options for convenience.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Observability & controls",
      body: "Add logging, constraints, and guardrails to manage agent actions (implementation-specific).",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Extensible",
      body: "Community-driven plugins and integrations to expand agent capabilities.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="SuperAGI review: pricing, features, pros & cons, and alternatives so you can decide if this open agent framework fits your AI automation plans."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-sky-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-emerald-600" />
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
                  {toolName} gives you an open agent framework—be deliberate about safety, observability, and model costs before production.
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
              {toolName} is an open-source AI agent framework. It lets developers create agents that use tools, run workflows, and integrate with external systems. It can be self-hosted or used via cloud options.
            </p>
            <p className="mt-3 text-slate-700">
              It targets teams experimenting with automation beyond simple chat—plan for safety, rate limits, and observability when deploying agents.
            </p>
            <p className="mt-3 text-slate-700">
              Use it with your choice of LLMs and infrastructure, and combine with logging/monitoring to keep agents under control.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for technical teams building custom AI agents with control over tools, hosting, and safety.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Developers creating AI agents that call APIs and perform tasks.",
                "Automation teams experimenting with multi-step, goal-based workflows.",
                "Builders wanting open-source and self-host options for compliance.",
                "Teams testing different LLMs and tools for specific use cases.",
                "Engineers adding logging/guardrails to keep agents reliable.",
                "Early-stage products embedding agents into apps with custom logic.",
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
              {toolName} offers agent-building primitives, tool use, and hosting flexibility for developers.
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
                  Open-source framework is free to self-host. Paid cloud/managed offerings charge by usage, compute, and support. Model choice and tool calls also drive costs—budget for API and infra spend.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Prototype self-hosted; if you need SLAs/less ops, evaluate managed/cloud. Track run counts and model costs closely.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Self-host (open source)</td>
                    <td className="px-4 py-3">Builders with infra capacity</td>
                    <td className="px-4 py-3">Full control, custom tools</td>
                    <td className="px-4 py-3">Manage infra, security, and costs</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Managed/Cloud</td>
                    <td className="px-4 py-3">Faster start</td>
                    <td className="px-4 py-3">Hosted agents, support, SLAs</td>
                    <td className="px-4 py-3">Usage-based; check limits</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Compliance/scale needs</td>
                    <td className="px-4 py-3">Custom terms, security, dedicated support</td>
                    <td className="px-4 py-3">Price by volume and requirements</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Track model/API costs, tool call limits, and security posture. Add logging and guardrails before production use.
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
                  <li>Open-source, flexible agent framework.</li>
                  <li>Supports tool use and multi-step workflows.</li>
                  <li>Choice of LLM providers; self-host or managed.</li>
                  <li>Extensible via integrations and community plugins.</li>
                  <li>Good for experimentation and custom automation.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Developer-focused; setup and ops required.</li>
                  <li>Safety and guardrails are your responsibility.</li>
                  <li>Costs depend on model/tool usage; can spike without limits.</li>
                  <li>Production readiness requires logging, monitoring, and constraints.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other agent frameworks and platforms to match control, ease, and hosting needs.
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
            <p className="text-slate-700">See how {toolName} compares to other agent and orchestration platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs LangChain</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/langchain">
                  View LangChain
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                LangChain is a broad LLM orchestration library; {toolName} focuses on agent execution with tool use. Choose based on preferred abstractions and community ecosystem.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Flowise</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/flowiseai">
                  View Flowise
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Flowise provides a low-code UI for LLM flows; {toolName} is more developer/agent-focused. Choose Flowise for visual building, {toolName} for open agent framework and code-driven control.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want an open agent framework with flexibility over models, tools, and hosting, and you have the engineering bandwidth to manage safety and operations.
            </p>
            <p className="mt-3 text-slate-700">
              Start with contained use cases, add logging/guardrails, and monitor costs. Move to managed/cloud if you need SLAs and reduced ops overhead.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A solid open option for custom AI agents—best when paired with disciplined safety, observability, and cost controls.
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
              Choose {toolName} if you want open, flexible AI agents and can invest in safety, monitoring, and cost management—or use a managed offering for convenience.
            </p>
            <p>
              Consider LangChain/Flowise for orchestration UIs or OpenAI Assistants for hosted simplicity. {toolName} excels when customization and hosting choice matter most.
            </p>
            <p>{toolName} accelerates agent experimentation—ship carefully with guardrails and logging before production.</p>
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

export default SuperagiToolPage;
