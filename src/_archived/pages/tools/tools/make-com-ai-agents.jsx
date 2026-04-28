import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Make.com AI Agents";
const slug = "make-com-ai-agents";
const category = "Automation & AI Workflows";
const shortPitch = "Make.com AI Agents combine automation scenarios with AI steps so teams can orchestrate data flows, generate content, and trigger actions across apps.";
const pricingSummary = "Pricing scales by operations and features. Higher tiers add more ops, priority support, AI modules, and governance for teams.";
const officialUrl = "https://www.make.com";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/make.com",
  gradient: "from-purple-500 via-blue-500 to-emerald-500",
  glow: "shadow-[0_20px_80px_rgba(99,102,241,0.22)]",
};

const alternatives = [
  { name: "Zapier", slug: "zapier" },
  { name: "Zapier AI Actions", slug: "zapier-ai-actions" },
  { name: "Make", slug: "make" },
  { name: "n8n", slug: "n8n" },
  { name: "Bardeen", slug: "bardeen-ai" },
];

const faqs = [
  {
    q: "What are Make.com AI Agents?",
    a: "They are Make scenarios that include AI modules to generate or summarize text while running automations across apps.",
  },
  {
    q: "Who should use it?",
    a: "Ops, marketing, support, and product teams that want low-code automation with AI enrichment and integrations.",
  },
  {
    q: "Do I need to code?",
    a: "No coding required for most scenarios; HTTP modules help with custom APIs if needed.",
  },
  {
    q: "How is pricing handled?",
    a: "Pricing is based on operations and feature tiers. More ops and governance features come with higher plans.",
  },
  {
    q: "Can teams collaborate?",
    a: "Yes. Roles, folders, and versioning help teams build and manage scenarios together.",
  },
  {
    q: "Is it reliable for critical flows?",
    a: "You should add validation, error handling, and monitoring to keep critical workflows stable.",
  },
  {
    q: "What integrations are available?",
    a: "Hundreds of connectors plus HTTP modules for custom APIs. Check the catalog for your stack.",
  },
  {
    q: "Can I limit AI behavior?",
    a: "You can set prompts, validations, and guardrails; always review outputs for sensitive workflows.",
  },
];

function MakeAgentsToolPage() {
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
        "Make.com AI Agents layer AI prompts into scenarios so you can enrich data, summarize, or generate content while moving data between apps. Great for teams that want visual automation with AI in the loop.",
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
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Visual scenarios",
      body: "Drag-and-drop builder for connecting apps, triggers, and actions with branching logic.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "AI modules",
      body: "Add prompts for summarization, classification, and text generation inside scenarios.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Integrations",
      body: "Hundreds of connectors plus HTTP modules for custom APIs and edge cases.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Data handling",
      body: "Map, transform, and store data between steps with error handling options.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Governance",
      body: "Roles, versioning, and logging to keep automations safe at scale.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Scalability",
      body: "Higher ops limits and scheduling keep heavy workflows reliable.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Make.com AI Agents review: pricing, features, pros & cons, and alternatives so you can decide if AI-enriched automation fits your team."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-purple-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-emerald-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-purple-600" />
                {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                {toolName} Review (2025): Features, Pricing, Pros & Cons
              </h1>
              <p className="mt-4 text-lg text-slate-600">{shortPitch}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-700">
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Our rating: {ratingValue}/5</span>
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Reviewed by GoDigitalPro - Updated May 2025</span>
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
                  {toolName} lets you add AI to visual workflows, blending integrations, data transforms, and prompts. Keep guardrails and validation in place for critical flows.
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
              {toolName} extends Make scenarios with AI prompts and actions, letting you combine automations with content generation, summarization, and data enrichment.
            </p>
            <p className="mt-3 text-slate-700">
              The visual builder helps non-developers connect tools, set triggers, and insert AI steps while mapping and transforming data between actions.
            </p>
            <p className="mt-3 text-slate-700">Use it to reduce manual work, but keep monitoring and validation for workflows that touch customers or finances.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams that want AI-enriched automation without heavy coding.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Marketing teams enriching leads and generating copy at handoff.",
                "Support teams summarizing tickets and routing them to the right queue.",
                "RevOps syncing CRM, ads, and data warehouse workflows.",
                "Product teams automating internal alerts with AI summaries.",
                "Agencies building client-specific automations without heavy code.",
                "Founders connecting tools quickly without waiting on engineering.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-purple-500" />
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
              {toolName} focuses on visual automation with AI steps, strong integrations, and governance controls for teams.
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
                  {toolName} prices by operations and feature tiers. Higher tiers add AI modules, governance, and faster scheduling. Match your plan to volume, connectors, and security needs.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on a lower ops plan to validate scenarios; upgrade when you need more operations, faster scheduling, or governance controls.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Free/Starter</td>
                    <td className="px-4 py-3">Testing small workflows</td>
                    <td className="px-4 py-3">Limited ops, core modules, basic scheduling</td>
                    <td className="px-4 py-3">Good for prototypes</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Core/Growth</td>
                    <td className="px-4 py-3">Teams running daily automations</td>
                    <td className="px-4 py-3">More ops, faster scheduling, AI steps, more connectors</td>
                    <td className="px-4 py-3">Covers most team needs</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro/Enterprise</td>
                    <td className="px-4 py-3">High-volume or complex governance</td>
                    <td className="px-4 py-3">Highest ops, priority support, roles, advanced modules</td>
                    <td className="px-4 py-3">Best for mission-critical automations</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Monitor ops usage and error rates. Add validation steps for AI outputs and set clear ownership for sensitive flows before scaling.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros and cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-purple-50 p-5 shadow-sm ring-1 ring-purple-100">
                <div className="flex items-center gap-2 text-purple-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Visual builder makes complex workflows accessible.</li>
                  <li>AI modules add enrichment without custom code.</li>
                  <li>Strong connector library plus HTTP modules for gaps.</li>
                  <li>Role and log controls help governance for teams.</li>
                  <li>Scales with ops-based pricing and scheduling options.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Ops-based pricing can rise quickly with heavy usage.</li>
                  <li>AI outputs need validation for critical workflows.</li>
                  <li>Error handling still requires thoughtful design.</li>
                  <li>Not a replacement for full custom engineering at extreme scale.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other automation platforms to balance ease of use, AI depth, and governance.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-purple-700 hover:text-purple-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} compares with popular automation platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Zapier</h3>
                <a className="text-sm font-semibold text-purple-700 hover:text-purple-600" href="/tools/zapier">
                  View Zapier
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Zapier is simpler for quick zaps; {toolName} offers a visual canvas with branching and mapping. Choose {toolName} for complex logic and AI enrichment, Zapier for fast single-path automations.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs n8n</h3>
                <a className="text-sm font-semibold text-purple-700 hover:text-purple-600" href="/tools/n8n">
                  View n8n
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                n8n is self-hostable and developer-friendly; {toolName} is hosted and more visual. Pick n8n for on-prem control and code flexibility, {toolName} for faster team onboarding and managed hosting.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want AI-enriched automations with strong integrations and a visual builder, and you prefer hosted convenience over custom code.
            </p>
            <p className="mt-3 text-slate-700">
              Monitor operations usage and add validation steps for AI outputs. Critical workflows still need human oversight and testing.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Excellent for teams that want visual automation with AI steps; keep guardrails for sensitive processes.
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
            <p>Use {toolName} to combine AI generation with automation in a visual builder.</p>
            <p>
              Start small, monitor ops usage, and add guardrails before scaling to critical customer-facing or financial workflows.
            </p>
            <p>{toolName} helps teams automate faster while adding AI enrichment—human review remains key for accuracy.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-purple-700 hover:text-purple-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-purple-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default MakeAgentsToolPage;
