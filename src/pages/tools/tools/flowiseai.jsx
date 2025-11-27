import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, BookOpen, Globe2, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "FlowiseAI";
const slug = "flowiseai";
const category = "Open Source LLM Orchestration";
const shortPitch =
  "FlowiseAI is an open source visual builder for LLM workflows—build chatbots and agents with drag-and-drop nodes, connectors, and custom components.";
const pricingSummary =
  "Self-hosted and open source; Flowise Cloud offers hosted plans starting around $20/month with limits on requests, seats, and connectors. Usage-based scaling for higher tiers.";
const officialUrl = "https://flowiseai.com";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/flowiseai.com",
  gradient: "from-sky-500 via-cyan-500 to-emerald-500",
  glow: "shadow-[0_20px_80px_rgba(14,165,233,0.22)]",
};

const alternatives = [
  { name: "Langflow", slug: "langflow" },
  { name: "Bubble", slug: "bubble" },
  { name: "Zapier AI", slug: "zapier-ai" },
  { name: "Retool", slug: "retool" },
  { name: "BuildShip", slug: "buildship" },
];

const faqs = [
  {
    q: "Is FlowiseAI open source?",
    a: "Yes. You can self-host and extend it. A hosted Flowise Cloud option is available if you don’t want to manage infra.",
  },
  {
    q: "What can I build with FlowiseAI?",
    a: "You can build chatbots, RAG flows, agents, and pipelines using nodes for LLMs, embeddings, vector stores, tools, and APIs.",
  },
  {
    q: "Does FlowiseAI support vector databases?",
    a: "Yes. Connectors include Pinecone, Weaviate, Chroma, and others for RAG and retrieval workflows.",
  },
  {
    q: "Can I deploy to production?",
    a: "Yes. Flows can be exposed via APIs or widgets. Hosted Cloud simplifies auth, scaling, and monitoring.",
  },
  {
    q: "Is coding required?",
    a: "You can build visually, but custom code nodes and API calls let you extend behavior when needed.",
  },
  {
    q: "Which models are supported?",
    a: "OpenAI, Azure OpenAI, Anthropic, local models, and others via connectors. Bring your own keys.",
  },
  {
    q: "How is authentication handled?",
    a: "Hosted Cloud provides auth and rate limits; self-hosted instances can integrate your own auth proxies or gateways.",
  },
  {
    q: "Is there logging and monitoring?",
    a: "Yes. Logs, tracing, and tokens per request are available; depth varies between self-hosted and Cloud.",
  },
];

function FlowiseAIToolPage() {
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
        "FlowiseAI is an open source visual builder for LLM apps. It lets teams compose RAG, chatbots, and agents with connectors for models, vector stores, and APIs.",
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
      icon: <BookOpen className="h-5 w-5 text-sky-500" />,
      title: "Visual flow builder",
      body: "Drag-and-drop nodes for LLMs, tools, and data sources to design chat and agent workflows.",
    },
    {
      icon: <Globe2 className="h-5 w-5 text-cyan-500" />,
      title: "RAG and vector support",
      body: "Integrations with vector DBs and embeddings for retrieval-augmented generation use cases.",
    },
    {
      icon: <Plug className="h-5 w-5 text-emerald-500" />,
      title: "APIs and webhooks",
      body: "Expose flows via REST APIs or widgets and trigger external APIs mid-flow.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Auth and governance",
      body: "Cloud adds auth, rate limits, and workspace controls; self-host can integrate your own auth layers.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-amber-400" />,
      title: "Logging and tracing",
      body: "Inspect requests, tokens, and chain steps for debugging and optimization.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-sky-500" />,
      title: "Extensible components",
      body: "Add custom code nodes, tools, and model providers to fit unique workflows.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="FlowiseAI review for developers and product teams: pricing, features, pros & cons, and alternatives for visual LLM workflow building."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-sky-200/30 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-emerald-200/30 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-sky-500" />
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
                  FlowiseAI lets you ship LLM agents and RAG flows visually, with open source flexibility and a hosted option when you want managed scaling.
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
              {toolName} is an {category.toLowerCase()} platform to compose LLM applications with a visual interface. It supports chatbots, RAG, and agent flows with connectors to popular models and vector stores.
            </p>
            <p className="mt-3 text-slate-700">
              Builders can self-host for control and extensibility, or use Flowise Cloud for managed auth, scaling, and monitoring.
            </p>
            <p className="mt-3 text-slate-700">
              APIs and widgets make it straightforward to embed flows into products and internal tools.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} fits teams that want to build LLM apps quickly while retaining flexibility.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Product teams prototyping AI copilots and chatbots.",
                "Developers building RAG flows with vector stores.",
                "Agencies creating client-specific AI widgets and bots.",
                "Data/AI teams needing visual orchestration with code escape hatches.",
                "Teams preferring open source/self-host for compliance.",
                "Startups that want managed hosting instead of running infra themselves.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-400" />
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
              {toolName} emphasizes fast composition of LLM workflows with connectors for data, tools, and hosting options.
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
                  Open source is free to self-host. Flowise Cloud starts near $20/month with request and seat limits; higher tiers add more requests, connectors, and governance.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Try self-host for control or start on Cloud’s base plan; upgrade as request volumes and team seats grow.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Plan</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key limits</th>
                    <th className="px-4 py-3">Approx. price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Self-host</td>
                    <td className="px-4 py-3">Teams needing control</td>
                    <td className="px-4 py-3">Infra + maintenance on you</td>
                    <td className="px-4 py-3">Free (open source)</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Cloud Starter</td>
                    <td className="px-4 py-3">Individuals/light teams</td>
                    <td className="px-4 py-3">Request and seat limits</td>
                    <td className="px-4 py-3">~$20/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Cloud Growth/Enterprise</td>
                    <td className="px-4 py-3">Production apps</td>
                    <td className="px-4 py-3">Higher limits, SSO, governance</td>
                    <td className="px-4 py-3">Higher/custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Consider data residency, model costs (your API keys), and whether you want managed auth/logging from Cloud or prefer self-host control.
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
                  <li>Open source with self-hosting flexibility.</li>
                  <li>Visual builder plus extensible code nodes.</li>
                  <li>Supports multiple models and vector DBs.</li>
                  <li>APIs and widgets for embedding flows.</li>
                  <li>Hosted option to avoid infra management.</li>
                  <li>Logging and tracing to debug prompts and chains.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Self-hosting requires ops setup and monitoring.</li>
                  <li>Cloud request limits may need upgrading quickly for heavy usage.</li>
                  <li>UI polish and docs can lag commercial low-code tools.</li>
                  <li>Complex flows still need careful prompt and cost management.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              {toolName} competes with visual LLM builders and low-code platforms. Choose based on hosting preference, collaboration, and model/tooling support.
            </p>
            <p className="mt-2 text-slate-700">Every link below goes to a live tool page—no broken routes.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
                  </div>
                  <a className="text-sm font-semibold text-sky-600 hover:text-sky-500" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">Compare {toolName} to other LLM orchestration builders.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Langflow</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/flowiseai-vs-langflow">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Both are open source visual LLM builders. {toolName} emphasizes ease and a hosted Cloud option; Langflow leans into flexibility with more granular controls.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} for fast start and Cloud hosting; choose Langflow if you want deeper customization and are comfortable self-hosting.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Retool + AI</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/flowiseai-vs-retool">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Retool adds AI to its low-code app builder with enterprise features. {toolName} focuses purely on LLM orchestration with open source roots.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} for LLM-specific flows and open stack; choose Retool if you need full internal apps plus enterprise governance.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you want to build LLM chatbots, agents, and RAG flows quickly with open source flexibility, {toolName} is worth it—self-host for control or use Cloud to skip infra.
            </p>
            <p className="mt-3 text-slate-700">
              If you need heavy enterprise governance or broader app-building features, compare Retool, BuildShip, or custom stacks before deciding.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> {toolName} is a strong choice for fast LLM orchestration with a clear path from prototype to production via self-host or Cloud.</p>
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
              Choose {toolName} if you want an open, visual LLM builder with both self-host and hosted options, plus connectors for popular models and vector stores.
            </p>
            <p>
              Consider Langflow for more customization or Retool/Zapier AI if you need wider app-building and automation alongside LLMs.
            </p>
            <p>{toolName} helps teams move from prompt experiments to embedded AI features with less custom plumbing.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here: <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>Visit {toolName}</a>.
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-sky-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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
      {open && (
        <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">
          {answer}
        </div>
      )}
    </div>
  );
}

export default FlowiseAIToolPage;
