import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Outranking";
const slug = "outranking-io";
const category = "AI SEO Writing";
const shortPitch = "Outranking combines AI-assisted content drafting with SEO workflows for briefs, outlines, optimization, and fact checks.";
const pricingSummary = "Plans scale by users and monthly word credits. Higher tiers add team seats, workflows, and advanced SERP/SEO tools.";
const officialUrl = "https://www.outranking.io";
const ratingValue = 4.1;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/outranking.io",
  gradient: "from-purple-500 via-indigo-500 to-emerald-500",
  glow: "shadow-[0_20px_80px_rgba(99,102,241,0.24)]",
};

const alternatives = [
  { name: "Surfer SEO", slug: "surfer-seo" },
  { name: "Clearscope", slug: "clearscope" },
  { name: "MarketMuse", slug: "marketmuse" },
  { name: "Jasper AI", slug: "jasper-ai" },
];

const faqs = [
  { q: "Do AI drafts replace writers?", a: "No. AI speeds first drafts, but humans should fact-check, edit, and align tone." },
  { q: "Can I export to my CMS?", a: "Yes. Exports and copy options are available; check specific CMS integrations." },
  { q: "Is there a trial?", a: "Trials/demos are typically available; confirm credit limits before testing." },
  { q: "How accurate are fact checks?", a: "Fact-check prompts assist, but human verification is required—especially for YMYL topics." },
  { q: "Does it support multiple languages?", a: "English is primary; check documentation for other language support and quality." },
  { q: "Can teams collaborate?", a: "Yes. Team seats, comments, and versioning help collaboration on documents." },
  { q: "Does it grade optimization?", a: "Yes. On-page scoring covers keywords, structure, links, and readability." },
  { q: "Who is it best for?", a: "SEO and content teams who want structured briefs, drafts, and scoring with human review." },
];

function OutrankingToolPage() {
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
        "Outranking is an AI SEO writer that generates briefs, outlines, and optimized drafts based on SERP analysis. It guides writers through structured workflows and scoring.",
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
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "SERP analysis", body: "Ingest competitor pages to build outlines and headings that match search intent." },
    { icon: <Sparkles className="h-5 w-5 text-purple-500" />, title: "AI drafts", body: "Generate section drafts and rewrite content with prompts and controls." },
    { icon: <Rocket className="h-5 w-5 text-emerald-500" />, title: "Optimization scores", body: "On-page scoring for keywords, structure, links, and readability." },
    { icon: <Plug className="h-5 w-5 text-sky-500" />, title: "Internal/external links", body: "Suggestions for links to strengthen topical coverage and authority." },
    { icon: <Cloud className="h-5 w-5 text-slate-700" />, title: "Workflows & briefs", body: "Templates for briefs, fact checks, and publishing steps." },
    { icon: <ShieldCheck className="h-5 w-5 text-rose-700" />, title: "Collaboration", body: "Comments, versions, and exports to CMS for team workflows." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Outranking review: pricing, features, pros & cons, and alternatives to decide if its AI SEO workflows fit your content program."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-purple-200/30 blur-3xl" />
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
                  {toolName} speeds SEO workflows: analyze SERPs, build outlines, draft sections with AI, and optimize with scoring. Keep human review for accuracy and brand fit.
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
              {toolName} automates parts of the SEO writing process. It analyzes SERPs, suggests outlines, and drafts sections with AI while providing SEO scores and optimization suggestions. Workflows include keyword research, content briefs, internal/external link suggestions, and fact-check prompts.
            </p>
            <p className="mt-3 text-slate-700">
              Teams can collaborate on documents, track versions, and push to CMS. It is best for teams that need structured briefs and AI drafts but still enforce human review for accuracy and brand tone.
            </p>
            <p className="mt-3 text-slate-700">
              Outranking does not replace deep research, E-E-A-T, or link building. Treat AI drafts as a starting point that writers refine and fact-check.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for SEO and content teams who want AI-assisted briefs and drafts with SERP guidance.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Content teams producing SEO articles at scale.",
                "Agencies building briefs and drafts for clients.",
                "SEO managers standardizing outlines and on-page checks.",
                "Writers who want SERP-based structure to start faster.",
                "Teams needing optimization scores to guide edits.",
                "Editors who want collaboration and fact-check reminders.",
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
              {toolName} emphasizes structured SEO workflows plus AI drafting and scoring.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {featureBlocks.map((feature) => (
                <div key={feature.title} className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center gap-3 text-slate-900">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
                      {feature.icon}
                    </div>
                    <p className="text-lg font-semibold">{feature.title}</p>
                  </div>
                  <p className="mt-3 text-sm text-slate-700">{feature.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--pricing bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pricing</h2>
            <p className="mt-3 text-slate-700">
              Plans scale by users and monthly word credits. Higher tiers add team seats, workflows, and advanced SERP/SEO tools. Monitor credit usage; prioritize high-impact pages first.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                { name: "Solo", price: "Entry", detail: "Limited credits, briefs, AI drafts, optimization", bestFor: "Individual writers" },
                { name: "Professional", price: "Mid-tier", detail: "More users, higher credits, collaboration, advanced SERP tools", bestFor: "Teams and agencies" },
                { name: "Enterprise", price: "Custom", detail: "Custom limits, support, security options, integrations", bestFor: "High-volume publishers" },
              ].map((tier) => (
                <div key={tier.name} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                  <p className="text-sm font-semibold uppercase tracking-wide text-purple-600">{tier.name}</p>
                  <p className="mt-2 text-2xl font-bold text-slate-900">{tier.price}</p>
                  <p className="mt-2 text-sm text-slate-700">{tier.detail}</p>
                  <p className="mt-3 text-xs font-semibold text-slate-600">Best for: {tier.bestFor}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold text-slate-900">Pricing tip</p>
              <p className="mt-2 text-sm text-slate-700">
                Track credits per deliverable. Standardize prompts and outlines to reduce rewrites. Negotiate overage policies if you run large monthly volumes.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros and cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <p className="text-lg font-semibold text-emerald-700">Pros</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>Structured SEO workflows with SERP-driven outlines.</li>
                  <li>AI drafts and rewrites speed production.</li>
                  <li>On-page scoring keeps optimization consistent.</li>
                  <li>Link suggestions and checklists reduce manual QA.</li>
                  <li>Collaboration and versioning help teams stay aligned.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <p className="text-lg font-semibold text-rose-700">Cons</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>Word/credit limits require monitoring at scale.</li>
                  <li>AI drafts need human fact checks and brand edits.</li>
                  <li>Interface has a learning curve for new writers.</li>
                  <li>Not a replacement for deep research or E-E-A-T requirements.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Outranking alternatives</h2>
            <p className="mt-3 text-slate-700">Consider these if you need different scoring, drafting, or planning depth:</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-xs text-slate-600">{alt.tagline || "SEO writing alternative"}</p>
                  </div>
                  <Link className="text-sm font-semibold text-purple-600 hover:text-purple-500" to={`/tools/${alt.slug}`}>
                    View
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--comparisons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Outranking vs other SEO tools</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                { title: "Outranking vs Surfer", betterFor: "Surfer focuses on scoring and brief drafting; Outranking adds guided workflows and fact-check prompts.", choose: "Pick Outranking for guided workflows and AI drafts. Pick Surfer for lighter scoring/editor needs." },
                { title: "Outranking vs Clearscope", betterFor: "Clearscope is light with high-quality scoring; Outranking offers more workflow guidance and AI drafting.", choose: "Pick Outranking if you want drafts and structured steps. Pick Clearscope if you want simple, high-trust scoring." },
                { title: "Outranking vs Jasper", betterFor: "Jasper is broader AI copy; Outranking is specialized for SEO workflows with SERP analysis.", choose: "Pick Outranking for SEO-first workflows. Pick Jasper for general marketing copy." },
                { title: "Outranking vs MarketMuse", betterFor: "MarketMuse emphasizes topic modeling and content planning; Outranking emphasizes drafts and on-page execution.", choose: "Pick Outranking for execution speed. Pick MarketMuse for deeper planning and topic maps." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                  <p className="text-lg font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-2 text-sm text-slate-700">{item.betterFor}</p>
                  <p className="mt-3 text-sm font-semibold text-slate-800">Why choose</p>
                  <p className="mt-1 text-sm text-slate-700">{item.choose}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--worth bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need consistent briefs and AI drafts anchored in SERP data. Set review checklists to enforce factual accuracy and brand voice. Monitor credit usage and focus on priority pages first.
            </p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Build prompt and outline templates to keep drafts consistent.",
                "Have editors fact-check YMYL and data-heavy sections.",
                "Track credit use and ROI per article; prioritize high-value pages.",
                "Pair on-page work with link building and technical SEO for full impact.",
              ].map((tip) => (
                <div key={tip} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <p className="text-sm">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--faq bg-white">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} FAQ</h2>
            <div className="mt-6 space-y-3">
              {faqs.map((item, idx) => (
                <AccordionItem key={item.q} question={item.q} answer={item.a} defaultOpen={idx === 0} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section--final bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-2xl font-bold text-slate-900">Final verdict: who is {toolName} best for?</h2>
              <p className="mt-3 text-slate-700">
                {toolName} is a useful AI SEO platform for teams that want structured briefs, drafts, and on-page scoring without losing editorial oversight. It speeds execution but still relies on human quality control and broader SEO tactics to win competitive SERPs.
              </p>
              <div className="mt-5 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">
                  If {toolName} fits your content program, start a trial here:{" "}
                  <a className="text-purple-600 hover:text-purple-500" href={officialUrl}>
                    Visit {toolName}
                  </a>.
                </p>
                <div className="pt-2">
                  <Link
                    to="/tools"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
                  >
                    <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
                  </Link>
                </div>
              </div>
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

export default OutrankingToolPage;
