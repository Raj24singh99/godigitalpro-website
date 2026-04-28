import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "TextCortex";
const slug = "textcortex";
const category = "AI writing";
const shortPitch = "TextCortex is an AI writing assistant for emails, blogs, and rewrites with browser extensions and team workspaces.";
const pricingSummary =
  "Free and credit-based paid plans. Higher tiers add more word credits, brand voice controls, workspaces, and collaboration features.";
const officialUrl = "https://textcortex.com";
const ratingValue = 4.1;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/textcortex.com",
  gradient: "from-purple-500 via-pink-500 to-amber-500",
  glow: "shadow-[0_20px_80px_rgba(168,85,247,0.24)]",
};

const alternatives = [
  { name: "Jasper AI", slug: "jasper-ai" },
  { name: "Writesonic", slug: "writesonic" },
  { name: "Rytr", slug: "rytr" },
  { name: "KoalaWriter", slug: "koalawriter" },
  { name: "Writer.com", slug: "writer-com" },
];

const faqs = [
  {
    q: "What is TextCortex?",
    a: "TextCortex is an AI writing assistant for drafting, rewriting, and summarizing content across emails, blogs, and documents.",
  },
  {
    q: "Who is it for?",
    a: "Writers, marketers, and teams who want AI help for quick drafts and rewrites inside browsers or docs.",
  },
  {
    q: "Does it support brand voice?",
    a: "Higher tiers include brand voice/tones. You should review outputs to ensure accuracy and consistency.",
  },
  {
    q: "How is pricing structured?",
    a: "Free plan with limited credits; paid plans add word credits, team features, and brand settings.",
  },
  {
    q: "Does it have a browser extension?",
    a: "Yes. You can use TextCortex across many sites to rewrite or draft inline.",
  },
  {
    q: "Is plagiarism checking included?",
    a: "TextCortex focuses on generation. For compliance, pair it with fact-checking and plagiarism tools as needed.",
  },
  {
    q: "Can it generate long-form blogs?",
    a: "Yes, but long-form outputs still need human editing, structure, and sourcing for E-E-A-T.",
  },
  {
    q: "Does it integrate with CMSes?",
    a: "Content can be pasted or exported; dedicated CMS integrations may be limited, so plan your workflow accordingly.",
  },
];

function TextCortexToolPage() {
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
        "TextCortex is a versatile AI writing assistant with extensions and team features. It accelerates drafts and rewrites, but outputs still need human editing and fact-checking.",
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
      title: "Drafting & rewriting",
      body: "Generate emails, blog sections, and rewrites with tone and length controls.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Browser extension",
      body: "Use the assistant across apps and sites to compose or rephrase inline.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Templates & commands",
      body: "Prompts and templates for common tasks like outreach, summaries, and outlines.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Brand voice options",
      body: "Higher tiers allow brand/tones—human review remains necessary for accuracy.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Cross-device",
      body: "Web app plus extensions to access writing tools wherever you work.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Collaboration",
      body: "Team workspaces with shared settings on paid plans; integrations are lighter than full CMS suites.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="TextCortex review: pricing, features, pros & cons, and alternatives to help you choose the right AI writing assistant."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-amber-200/25 blur-3xl" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-purple-100 blur-3xl" />
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
                  {toolName} accelerates drafts and rewrites across the web—use it to start faster, then edit for accuracy, sourcing, and brand voice.
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
              {toolName} is an AI writing assistant for drafting, rewriting, and summarizing content. Browser extensions bring the assistant into email, docs, and web apps so you can work inline.
            </p>
            <p className="mt-3 text-slate-700">
              Treat it as a drafting accelerator: outputs need fact-checking, brand voice review, and edits for structure and SEO where relevant.
            </p>
            <p className="mt-3 text-slate-700">Plan for a review process and pair with plagiarism/fact-check tools if you publish externally.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for writers and teams needing quick drafts, rewrites, and inline assistance across the web.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Content marketers drafting blog sections and outlines.",
                "Email and outreach teams rewriting messages for clarity.",
                "Social/content teams needing quick captions and variations.",
                "Writers who want inline help in docs and CMSes via extensions.",
                "Teams testing brand voice controls before scaling AI use.",
                "Small teams that want shared settings without complex tooling.",
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
              {toolName} focuses on drafting, rewriting, and browser-native assistance with team settings and brand options on higher tiers.
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
                  {toolName} uses free and credit-based paid plans. Higher tiers add more word credits, brand voice settings, and team workspaces. Costs scale with usage and team size.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start free to test tone and quality; upgrade when you need brand settings or more credits for team use.</p>
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
                    <td className="px-4 py-3">Testing/light writing</td>
                    <td className="px-4 py-3">Limited credits, core assistant</td>
                    <td className="px-4 py-3">Good for quality checks</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter/Pro</td>
                    <td className="px-4 py-3">Regular writers</td>
                    <td className="px-4 py-3">More credits, tone controls, extension</td>
                    <td className="px-4 py-3">Solid for individuals</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Team/Business</td>
                    <td className="px-4 py-3">Teams needing governance</td>
                    <td className="px-4 py-3">Shared workspaces, brand voice, higher limits</td>
                    <td className="px-4 py-3">Use when collaborating</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Track credit usage and edit rate. Establish review guidelines for sourcing, tone, and compliance before publishing AI-assisted content.
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
                  <li>Browser extension for inline writing.</li>
                  <li>Good for emails, rewrites, and short-form.</li>
                  <li>Brand voice options on higher tiers.</li>
                  <li>Team workspaces for collaboration.</li>
                  <li>Templates for common writing tasks.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Long-form outputs still need heavy editing.</li>
                  <li>Limited deep CMS integrations.</li>
                  <li>Credit limits can add up for teams.</li>
                  <li>Requires manual fact-checking and sourcing.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other AI writing tools to match your budget, brand controls, and integration needs.
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
            <p className="text-slate-700">See how {toolName} compares to other AI writers.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Jasper AI</h3>
                <a className="text-sm font-semibold text-purple-700 hover:text-purple-600" href="/tools/jasper-ai">
                  View Jasper AI
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Jasper focuses on brand voice and team workflows; {toolName} offers flexible rewriting and extensions. Choose Jasper for deeper brand controls, {toolName} for lightweight inline writing.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Writesonic</h3>
                <a className="text-sm font-semibold text-purple-700 hover:text-purple-600" href="/tools/writesonic">
                  View Writesonic
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Writesonic has more marketing templates and image tools; {toolName} shines for rewriting and inline assistance. Pick based on whether you need a broader content suite or focused writing help.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need quick drafts and rewrites across the web and can commit to editing for accuracy and brand tone.
            </p>
            <p className="mt-3 text-slate-700">
              Establish review guidelines and consider supplemental tools for plagiarism and fact-checking before publishing.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A flexible AI writing assistant with strong rewriting—best when paired with human QA and clear brand standards.
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
              Choose {toolName} if you want AI-assisted drafting and rewriting with browser extensions and lightweight team controls.
            </p>
            <p>
              Consider Jasper for deeper brand governance or Writesonic for a broader marketing suite; use {toolName} for flexible inline writing and rewrites.
            </p>
            <p>{toolName} saves time on first drafts—keep humans editing for accuracy, sourcing, and tone.</p>
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

export default TextCortexToolPage;
