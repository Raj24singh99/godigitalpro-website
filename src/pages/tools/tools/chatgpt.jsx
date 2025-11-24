import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "ChatGPT";
const slug = "chatgpt";
const category = "General AI Assistant";
const shortPitch = "ChatGPT is OpenAI's conversational assistant for writing, coding help, research drafts, and task automation via GPT models.";
const pricingSummary =
  "Free tier with GPT-3.5; paid ChatGPT Plus/Team/Enterprise tiers add GPT-4-level models, higher limits, collaboration, and admin controls.";
const officialUrl = "https://chat.openai.com";
const ratingValue = 4.7;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/openai.com",
  gradient: "from-emerald-500 via-teal-500 to-sky-600",
  glow: "shadow-[0_20px_80px_rgba(45,212,191,0.24)]",
};

const alternatives = [
  { name: "Claude", slug: "claude" },
  { name: "Perplexity AI", slug: "perplexity-ai" },
  { name: "Gemini", slug: "google-workspace" },
  { name: "Poe", slug: "poe" },
  { name: "Pi AI", slug: "pi-ai" },
];

const faqs = [
  {
    q: "What is ChatGPT?",
    a: "ChatGPT is OpenAI's AI assistant that can draft content, answer questions, help with code, and automate tasks via GPT models.",
  },
  {
    q: "Who is it for?",
    a: "Knowledge workers, marketers, developers, students, and support teams that need fast drafting, summaries, and ideation.",
  },
  {
    q: "Does it access the live web?",
    a: "Web results depend on the model/version. Always verify facts and avoid sharing sensitive data.",
  },
  {
    q: "How is pricing structured?",
    a: "Free tier for GPT-3.5. Paid tiers (Plus/Team/Enterprise) add stronger models, higher limits, collaboration, and admin controls.",
  },
  {
    q: "Can it write code?",
    a: "Yes. It can generate, explain, and refactor code. Review for correctness and security before using in production.",
  },
  {
    q: "Is data private?",
    a: "Enterprise/Team offers stronger controls; avoid sending secrets on free tiers. Review OpenAI's data policies for your plan.",
  },
  {
    q: "Does it support plugins or actions?",
    a: "Plugins/Actions depend on the plan and rollout. Integrations are evolving; check current availability.",
  },
  {
    q: "Does it replace human review?",
    a: "No. Always fact-check outputs, review code, and ensure compliance before using results.",
  },
];

function ChatgptToolPage() {
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
        "ChatGPT is a versatile assistant for writing, coding, and research drafts. It boosts productivity but requires human review for accuracy, compliance, and security.",
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
      icon: <Sparkles className="h-5 w-5 text-emerald-500" />,
      title: "Content drafting",
      body: "Generate outlines, emails, posts, and summaries quickly with controllable tone.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-amber-500" />,
      title: "Code assistance",
      body: "Explain, debug, and draft code snippets—review for correctness before shipping.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Reasoning & planning",
      body: "Structure plans, checklists, and decision trees; validate assumptions with sources.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Search & context",
      body: "Model-dependent browsing and context windows; verify outputs and citations.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Integrations",
      body: "Plugins/Actions and API ecosystem extend tasks to external services (availability varies).",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Admin controls",
      body: "Team/Enterprise tiers add admin, SSO, data controls, and usage policies.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="ChatGPT review: features, pricing, pros & cons, and alternatives for AI-assisted writing, coding, and research."
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
                  {toolName} boosts writing and coding speed—keep humans in the loop for facts, privacy, and quality before you ship or publish.
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
              {toolName} is a general-purpose AI assistant built on GPT models. It drafts text, answers questions, helps with code, and can connect to tools depending on plan and rollout.
            </p>
            <p className="mt-3 text-slate-700">
              Use it as a speed-up, not a final authority: verify facts, scrub sensitive data, and enforce compliance before using outputs.
            </p>
            <p className="mt-3 text-slate-700">Teams can use admin controls and policies on paid tiers to manage access and data handling.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams and individuals who want AI assistance for writing, coding, and research drafts.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Marketers drafting emails, posts, and landing copy faster.",
                "Developers explaining, drafting, or refactoring code (with review).",
                "Support teams summarizing answers and writing macros.",
                "Product and ops teams making checklists and SOP drafts.",
                "Researchers summarizing sources and generating outlines.",
                "Students learning concepts—while verifying facts elsewhere.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on conversational assistance for writing, coding, and structured reasoning.</p>
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
                  Free access uses GPT-3.5 with basic limits. Paid tiers (Plus/Team/Enterprise) add stronger models, higher rate limits, collaboration, and admin/data controls. Enterprise offers custom terms.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Try free; upgrade to Plus for GPT-4-level outputs. Use Team/Enterprise for admin, SSO, and policy controls.</p>
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
                    <td className="px-4 py-3">Personal/light use</td>
                    <td className="px-4 py-3">GPT-3.5, standard limits</td>
                    <td className="px-4 py-3">Good for exploration</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Plus</td>
                    <td className="px-4 py-3">Power users</td>
                    <td className="px-4 py-3">GPT-4-level models, higher limits</td>
                    <td className="px-4 py-3">Upgrade when quality matters</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Team</td>
                    <td className="px-4 py-3">Small teams</td>
                    <td className="px-4 py-3">Shared workspaces, admin controls</td>
                    <td className="px-4 py-3">Good for policy enforcement</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Large orgs</td>
                    <td className="px-4 py-3">Custom limits, SSO/SCIM, data controls</td>
                    <td className="px-4 py-3">Custom pricing & support</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Pick based on quality needs, admin controls, and data policies. Avoid sharing sensitive data on free tiers.</p>
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
                  <li>Strong general-purpose writing and reasoning.</li>
                  <li>Good coding assistance (review required).</li>
                  <li>Broad ecosystem of integrations and plugins/actions.</li>
                  <li>Paid tiers add admin controls and higher limits.</li>
                  <li>UI is approachable for non-technical users.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Hallucinations and outdated info still possible—verify outputs.</li>
                  <li>Data handling varies by tier; free tier not for sensitive data.</li>
                  <li>Rate limits and availability differ across plans.</li>
                  <li>Plugins/actions availability changes; needs monitoring.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other AI assistants based on model strength, data policies, and integration needs.
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
            <p className="text-slate-700">See how {toolName} compares to other leading assistants.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Claude</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/claude">
                  View Claude
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Claude emphasizes long context and safety. {toolName} has broad integrations and a large ecosystem. Choose based on context length, safety posture, and integrations.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Perplexity AI</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/perplexity-ai">
                  View Perplexity AI
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Perplexity centers on retrieval and citations. {toolName} is broader for creation and workflows. Pick based on whether you need sourcing or general assistance.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want a versatile assistant for writing, coding, and research drafts—and you can provide human oversight for accuracy and compliance.
            </p>
            <p className="mt-3 text-slate-700">
              Avoid sharing sensitive data on lower tiers. Use admin controls on Team/Enterprise for policies and access management.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A top general-purpose AI assistant; best when paired with review processes and data-handling guidelines.
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
            <p>Choose {toolName} if you need a versatile AI partner for writing, coding, and planning with an easy UI.</p>
            <p>
              Consider Claude for long-context safety or Perplexity for sourced answers; use {toolName} for broad creation and workflow assistance.
            </p>
            <p>{toolName} accelerates work—keep humans in the loop for facts, compliance, and security.</p>
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

export default ChatgptToolPage;
