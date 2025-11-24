import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Botpress AI";
const slug = "botpress-ai";
const category = "Conversational AI";
const shortPitch =
  "Botpress AI is a platform for building conversational agents and chatbots with visual flows, NLU, and integrations for web and messaging channels.";
const pricingSummary =
  "Free tier with limits; paid plans add higher usage, premium connectors, analytics, and team features. API/model costs vary by usage.";
const officialUrl = "https://botpress.com";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/botpress.com",
  gradient: "from-indigo-500 via-purple-600 to-slate-900",
  glow: "shadow-[0_20px_80px_rgba(99,102,241,0.26)]",
};

const alternatives = [
  { name: "Botpress", slug: "ai" },
  { name: "Botpress Cloud", slug: "ai" },
  { name: "LangChain", slug: "langchain" },
  { name: "Rasa", slug: "ai" },
  { name: "Dialogflow", slug: "ai" },
];

const faqs = [
  { q: "What is Botpress AI?", a: "Botpress AI is a platform to build conversational agents with visual flows, NLU, and integrations across web and messaging channels." },
  { q: "Who is it for?", a: "Developers and teams building chatbots/assistants for support, lead capture, or workflows without coding everything from scratch." },
  { q: "How does pricing work?", a: "Free tier with usage limits; paid plans increase usage, connectors, analytics, and team features. Model/API costs depend on usage." },
  { q: "Does it support custom logic?", a: "Yes. You can add code steps, APIs, and custom tools within flows." },
  { q: "Is it enterprise-ready?", a: "Larger deployments require attention to auth, security, and hosting choices; evaluate SLAs and data policies." },
  { q: "Is human review needed?", a: "Yes. Test intents, guardrails, and flows; monitor for hallucinations and data exposure." },
];

function BotpressAIToolPage() {
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
        "Botpress AI lets teams build conversational agents with visual flows, NLU, and integrations. It’s strong for fast bot creation—add guardrails and QA for production.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };

  const featureBlocks = [
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "Visual flows", body: "Design conversation flows and logic without coding everything manually." },
    { icon: <Rocket className="h-5 w-5 text-emerald-500" />, title: "NLU & intents", body: "NLU support for intents/entities; plug into LLMs for generative replies." },
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "Integrations", body: "Connect to APIs, CRMs, databases, and messaging channels." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Guardrails", body: "Add validations, approvals, and safety steps to avoid bad outputs." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "Analytics", body: "Track conversations, drop-offs, and bot performance to improve flows." },
    { icon: <Plug className="h-5 w-5 text-purple-500" />, title: "Deployment", body: "Deploy to web widgets or messaging platforms; manage environments." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Botpress AI review: pricing, features, pros & cons, and alternatives so you can choose the right conversational AI platform."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-purple-200/25 blur-3xl" />
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
                  {toolName} helps you build and deploy chatbots with visual flows—add safety checks and test intents before going live.
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
              {toolName} is a conversational AI platform for building chatbots and assistants. It combines visual flows, NLU, and integrations to deploy bots on web and messaging channels.
            </p>
            <p className="mt-3 text-slate-700">Use it to speed up bot creation; ensure you implement guardrails, logging, and approval steps for production bots.</p>
            <p className="mt-3 text-slate-700">Monitor model/API usage and costs, and test flows for hallucinations and edge cases.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams building support/lead/chatbots that need faster iteration than hand-coding.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Support teams deploying FAQ/triage bots.",
                "Growth teams running lead capture bots on web/chat.",
                "Product teams embedding assistants in apps.",
                "Ops teams automating internal workflows via chat.",
                "Builders prototyping agentic flows with visual tools.",
                "Teams needing connectors to CRMs/APIs without full custom code.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on visual bot building, NLU, connectors, and safety/analytics.</p>
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
                  Free tier with limits; paid plans add more usage, connectors, analytics, and collaboration. Factor in model/API costs for LLM calls and hosting.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Prototype on free; upgrade when you need production connectors, analytics, and higher usage.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Plan</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key inclusions</th>
                    <th className="px-4 py-3">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Free</td>
                    <td className="px-4 py-3">Prototyping</td>
                    <td className="px-4 py-3">Limited usage, basic connectors</td>
                    <td className="px-4 py-3">Good for tests</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Active bots</td>
                    <td className="px-4 py-3">More usage, premium connectors, analytics</td>
                    <td className="px-4 py-3">Common for production</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Team/Business</td>
                    <td className="px-4 py-3">Collaboration</td>
                    <td className="px-4 py-3">Teams, environments, higher limits</td>
                    <td className="px-4 py-3">For larger orgs</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Monitor API/LLM costs; implement rate limits and approvals for sensitive flows.</p>
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
                  <li>Visual bot building with NLU/LLM support.</li>
                  <li>Connectors/APIs for workflows without full code.</li>
                  <li>Deployment to web widgets and messaging platforms.</li>
                  <li>Analytics to improve drop-offs and outcomes.</li>
                  <li>Guardrails and code steps for custom logic.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>LLM/API costs can grow; needs monitoring.</li>
                  <li>Requires careful safety/guardrails for production.</li>
                  <li>Complex enterprise auth/security may need extra setup.</li>
                  <li>Free tier limits; advanced connectors gated on paid plans.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other bot frameworks for flexibility, safety, and integrations.</p>
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
            <p className="text-slate-700">See how {toolName} compares to other conversational AI platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Rasa</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/ai">
                  View Rasa
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Rasa is open-source and code-first; {toolName} offers visual building with managed components. Choose based on need for code-level control vs speed of visual flows.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Dialogflow/CX</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/ai">
                  View Dialogflow
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Dialogflow is Google Cloud–centric; {toolName} is stack-neutral with visual flows. Pick based on cloud preference and integration needs.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need to build bots fast with visual flows and integrations, and can manage safety, costs, and QA for production use.
            </p>
            <p className="mt-3 text-slate-700">Prototype quickly, then harden flows with approvals, logging, and limits before scaling.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A flexible conversational AI builder—best when paired with strong guardrails and monitoring.
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
            <p>{toolName} helps teams build and deploy chatbots with visual flows, NLU, and integrations.</p>
            <p>Use it when you need speed and integrations, and be deliberate about safety, cost controls, and QA for production bots.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} fits your conversational AI plans, you can try it here:{" "}
              <a className="text-indigo-700 hover:text-indigo-600" href={officialUrl}>
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

export default BotpressAIToolPage;
