import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "NeuronWriter";
const slug = "neuronwriter";
const category = "SEO Content Optimization";
const shortPitch = "NeuronWriter is an SEO content optimization tool that generates briefs, analyzes SERPs, and scores drafts for topical coverage.";
const pricingSummary = "Tiered plans by projects and credits. Higher tiers add more queries, NLP terms, and team collaboration for SEO briefs and optimization.";
const officialUrl = "https://neuronwriter.com";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/neuronwriter.com",
  gradient: "from-amber-500 via-emerald-500 to-sky-500",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.2)]",
};

const alternatives = [
  { name: "Surfer SEO", slug: "surfer-seo" },
  { name: "Frase", slug: "frase-io" },
  { name: "Clearscope", slug: "clearscope" },
  { name: "MarketMuse", slug: "marketmuse" },
  { name: "Scalenut", slug: "scalenut" },
];

const faqs = [
  { q: "What is NeuronWriter?", a: "NeuronWriter is an SEO content tool that analyzes SERPs, generates briefs, and scores drafts for topical coverage and keywords." },
  { q: "Who is it for?", a: "SEO and content teams creating briefs and optimizing articles for topical relevance and search intent." },
  { q: "Does it replace writers?", a: "No. It guides coverage; human writers and editors are needed for expertise, accuracy, and brand voice." },
  { q: "Are there credits?", a: "Yes. Plans include query/credit limits for briefs and NLP terms; higher tiers increase limits." },
  { q: "Can it write content?", a: "It offers AI-assisted drafting and suggestions; final editing and fact-checking are required." },
  { q: "Does it integrate with CMS?", a: "Exports and copy/paste are common; check for plugins if needed." },
  { q: "What about languages?", a: "Supports multiple languages; verify availability for your markets." },
  { q: "Is on-page scoring included?", a: "Yes. Drafts can be scored against suggested terms and competitors." },
];

function NeuronwriterToolPage() {
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
        "NeuronWriter analyzes SERPs, suggests terms, and provides briefs and scoring for SEO content. It helps teams plan and optimize articles but still needs human editing and expertise.",
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
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "SERP analysis", body: "Analyze competitors and SERP results to understand search intent and required coverage." },
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "Brief generation", body: "Create briefs with suggested headings, questions, and NLP terms to guide writers." },
    { icon: <Rocket className="h-5 w-5 text-emerald-500" />, title: "Content scoring", body: "Score drafts against suggested terms and competitors to improve relevance." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "AI drafting", body: "AI-assisted drafting and suggestions to jumpstart content creation." },
    { icon: <Plug className="h-5 w-5 text-purple-500" />, title: "Exports & collaboration", body: "Export briefs and drafts to share with writers and editors; team features on higher tiers." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Multi-language support", body: "Optimize content in multiple languages; confirm supported locales for your markets." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="NeuronWriter review: pricing, features, pros & cons, and alternatives so you can decide if it fits your SEO content workflow."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-amber-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-emerald-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-amber-600" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-amber-100 blur-3xl" />
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
                  {toolName} accelerates SEO briefs and on-page optimization. Use it to plan topics and drafts, then edit for expertise and accuracy.
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
              {toolName} is an SEO content optimization tool that analyzes SERPs, generates briefs with NLP term suggestions, and scores drafts for topical coverage. It helps writers align content to search intent and competitive benchmarks.
            </p>
            <p className="mt-3 text-slate-700">
              It is best used as a guide: teams should add expertise, sources, and E-E-A-T signals while editing for quality.
            </p>
            <p className="mt-3 text-slate-700">Pair it with analytics and on-page tests to validate impact after publishing.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for SEO and content teams that need structured briefs and on-page optimization guidance.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Content strategists prioritizing topics and clusters.",
                "Writers needing SERP-aligned briefs and NLP terms.",
                "SEO teams optimizing existing articles for relevance.",
                "Agencies producing briefs and drafts for clients.",
                "Editors using scoring to guide revisions.",
                "Teams optimizing across multiple languages/markets.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-amber-500" />
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
              {toolName} focuses on SERP-driven briefs, NLP term suggestions, and scoring to keep drafts aligned with search intent.
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
                  {toolName} offers tiered plans with credit limits for queries and NLP terms. Higher tiers add more projects, collaboration, and AI drafting. Choose based on monthly brief volume and team size.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Pick a tier that covers your monthly briefs; upgrade if you hit credit limits or need more seats and exports.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter</td>
                    <td className="px-4 py-3">Light usage</td>
                    <td className="px-4 py-3">Limited queries and NLP terms</td>
                    <td className="px-4 py-3">Good for testing the workflow</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Active content teams</td>
                    <td className="px-4 py-3">More credits, projects, AI drafts</td>
                    <td className="px-4 py-3">Fits most SEO programs</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business/Agency</td>
                    <td className="px-4 py-3">Agencies & large teams</td>
                    <td className="px-4 py-3">Highest limits, collaboration, priority support</td>
                    <td className="px-4 py-3">Best for multi-client workflows</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Watch credit consumption and maintain editorial standards. Pair with analytics and link-building to see performance after optimization.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros and cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-amber-50 p-5 shadow-sm ring-1 ring-amber-100">
                <div className="flex items-center gap-2 text-amber-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>SERP-driven briefs with NLP term suggestions.</li>
                  <li>Content scoring guides on-page optimization.</li>
                  <li>AI drafting speeds up early versions.</li>
                  <li>Exports and team features for collaboration.</li>
                  <li>Multi-language support for international content.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>AI drafts need editing for accuracy and E-E-A-T.</li>
                  <li>Credit limits can constrain large programs.</li>
                  <li>Not a replacement for analytics or link-building.</li>
                  <li>Template outputs can feel generic without human polish.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other SEO content tools to match pricing, feature depth, and editor experience.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} compares with similar SEO optimization platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Surfer</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/surfer-seo">
                  View Surfer
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Surfer offers robust editors and scoring; {toolName} provides strong briefs and NLP suggestions. Choose based on editor preference, pricing, and team needs.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify_between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Frase</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/frase-io">
                  View Frase
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Frase excels at research and outlines; {toolName} emphasizes NLP terms and scoring. Pick based on whether research depth or term guidance matters more for your workflow.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need SEO-driven briefs, NLP suggestions, and scoring to guide writers, and you can maintain editorial oversight for quality.
            </p>
            <p className="mt-3 text-slate-700">
              Monitor credit usage and pair with analytics and link-building to measure results after publishing.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Solid SEO content optimizer; human expertise and post-publish measurement remain essential.
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
            <p>Use {toolName} to plan briefs and optimize drafts with SERP-informed suggestions.</p>
            <p>
              Upgrade when you need more credits or collaboration; keep editorial review and analytics in your workflow to ensure real search gains.
            </p>
            <p>{toolName} keeps SEO drafts aligned with intent—experts and data confirm success after launch.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-amber-700 hover:text-amber-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-amber-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default NeuronwriterToolPage;
