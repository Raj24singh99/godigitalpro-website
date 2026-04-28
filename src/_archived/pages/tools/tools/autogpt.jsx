import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "AutoGPT";
const slug = "autogpt";
const category = "AI Agents";
const shortPitch =
  "AutoGPT is an open-source autonomous agent framework that chains AI steps to plan and execute tasks with tools, code, and web access.";
const pricingSummary =
  "Open source; self-host or run via community/cloud options. Costs depend on model/API usage and infrastructure. Paid hosted options may add orchestration and credits.";
const officialUrl = "https://www.auto-gpt.com";
const ratingValue = 4.0;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/auto-gpt.com",
  gradient: "from-violet-500 via-purple-600 to-slate-900",
  glow: "shadow-[0_20px_80px_rgba(124,58,237,0.26)]",
};

const alternatives = [
  { name: "AgentGPT", slug: "agentgpt" },
  { name: "LangChain", slug: "langchain" },
  { name: "FlowiseAI", slug: "flowiseai" },
  { name: "SuperAGI", slug: "superagi" },
  { name: "ChatGPT", slug: "chatgpt" },
];

const faqs = [
  {
    q: "What is AutoGPT?",
    a: "AutoGPT is an open-source framework for autonomous agents that chain reasoning steps with tools (web, code, files) to accomplish goals.",
  },
  {
    q: "Who is it for?",
    a: "Developers and tinkerers building agent workflows, experiments, or automation that needs multi-step reasoning.",
  },
  {
    q: "How does pricing work?",
    a: "The framework is free/OSS. You pay for underlying model/API calls and any hosting/infra. Some hosted versions may charge for credits.",
  },
  {
    q: "Does it run locally?",
    a: "Yes. You can self-host; configure keys for models/tools. Hosting and API costs depend on your setup.",
  },
  {
    q: "Is it production-ready?",
    a: "It’s evolving. Reliability depends on your guardrails, evals, and error handling. Use cautiously in production.",
  },
  {
    q: "Does it support plugins/tools?",
    a: "Yes. You can wire web browsing, file I/O, code execution, APIs, and custom tools.",
  },
  {
    q: "Is human review needed?",
    a: "Absolutely. Add constraints, logging, approvals, and tests to avoid runaway or unsafe actions.",
  },
];

function AutoGPTToolPage() {
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
        "AutoGPT is an OSS autonomous agent framework. It’s powerful for experimentation but requires guardrails, approvals, and monitoring for real-world use.",
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
      title: "Autonomous tasking",
      body: "Breaks down goals into steps, executes tools, and iterates until done (with guardrails).",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Tool integrations",
      body: "Connects to web browsing, code execution, files, and APIs to take actions.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Plugins & extensions",
      body: "Add custom tools and agents; integrate with vector stores or RAG for context.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Guardrails",
      body: "Configure approvals, constraints, and logging to reduce risky actions.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Deploy anywhere",
      body: "Run locally, on servers, or via hosted options—cost depends on infra and API usage.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Open source",
      body: "Community-driven with extensible codebase; fork and adapt to your workflows.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="AutoGPT review: pricing, features, pros & cons, and alternatives so you can choose the right AI agent framework."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-violet-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-purple-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-violet-600" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-violet-100 blur-3xl" />
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
                  {toolName} chains AI steps with tools—add guardrails, approvals, and logs before letting it act on real data.
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
              {toolName} is an open-source framework for autonomous AI agents. It plans, calls tools, and iterates toward a goal with minimal human input.
            </p>
            <p className="mt-3 text-slate-700">
              Use it to prototype agent workflows, automate research, or run scripted tasks—always with safeguards. Reliability depends on your constraints and monitoring.
            </p>
            <p className="mt-3 text-slate-700">Model and API costs accrue as agents run; track usage and failures.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for developers and teams experimenting with multi-step agent workflows.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Developers prototyping agentic apps with tool use.",
                "Teams building research/data gathering agents with oversight.",
                "Ops/automation teams scripting repeatable tasks with approvals.",
                "Experimenters comparing agent frameworks and RAG/tooling setups.",
                "Engineering teams comfortable with self-hosting and monitoring.",
                "Anyone who can enforce guardrails before production use.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-violet-500" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">{toolName} focuses on autonomous tasking, tool use, and extensibility.</p>
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
                  Open source to self-host. Costs come from model/API usage and infrastructure. Hosted options may charge for orchestration and credits. Track token usage and set limits.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start self-hosted with strict limits; consider hosted if you need easier orchestration and guardrails.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Self-host</td>
                    <td className="px-4 py-3">Builders</td>
                    <td className="px-4 py-3">Full control, OSS, your infra cost</td>
                    <td className="px-4 py-3">Requires ops and monitoring</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Hosted/community</td>
                    <td className="px-4 py-3">Fast trials</td>
                    <td className="px-4 py-3">Managed orchestration, metered usage</td>
                    <td className="px-4 py-3">Check limits and safety controls</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Always set token and action limits; log actions and require approvals for risky steps.</p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-violet-50 p-5 shadow-sm ring-1 ring-violet-100">
                <div className="flex items-center gap-2 text-violet-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Open-source and extensible.</li>
                  <li>Tool use: web, code, files, APIs.</li>
                  <li>Autonomous planning/iteration for complex tasks.</li>
                  <li>Runs locally or hosted; flexible deployment.</li>
                  <li>Active community and plugin ecosystem.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Reliability varies; needs guardrails and monitoring.</li>
                  <li>Can incur high token costs if unbounded.</li>
                  <li>Risk of unintended actions without approvals.</li>
                  <li>Setup/ops overhead for self-hosting.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other agent frameworks for reliability, tooling, and hosting.</p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-violet-700 hover:text-violet-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} compares to other agent stacks.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs AgentGPT</h3>
                <a className="text-sm font-semibold text-violet-700 hover:text-violet-600" href="/tools/agentgpt">
                  View AgentGPT
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                AgentGPT is hosted and simpler to start; {toolName} is OSS and more customizable. Choose hosted ease vs full control.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs LangChain</h3>
                <a className="text-sm font-semibold text-violet-700 hover:text-violet-600" href="/tools/langchain">
                  View LangChain
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                LangChain is a general LLM framework with chains/agents; {toolName} is agent-first. Pick based on framework preference and ecosystem fit.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you’re building or experimenting with autonomous agents and can enforce guardrails, approvals, and cost controls.
            </p>
            <p className="mt-3 text-slate-700">Use it for R&D and carefully scoped automations; monitor actions and spend.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Powerful OSS agent framework for builders—pair with strict safety and monitoring before production use.
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
            <p>{toolName} enables autonomous agent workflows with tool use and iteration.</p>
            <p>Use it when you need deep customization and can manage safety, costs, and reliability; otherwise consider hosted, constrained agent tools.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for your experiments, you can try it here:{" "}
              <a className="text-violet-700 hover:text-violet-600" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-violet-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default AutoGPTToolPage;
