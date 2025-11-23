import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, PenTool, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown, Type } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Rytr";
const slug = "rytr";
const category = "AI writing assistant";
const shortPitch = "Rytr is an AI writing assistant for marketing copy, blogs, outlines, and social posts with templates and multilingual support.";
const pricingSummary = "Free plan with limits; paid plans from ~$9/month for higher character allowances and premium features.";
const officialUrl = "https://rytr.me";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/rytr.me",
  gradient: "from-amber-500 via-orange-500 to-rose-500",
  glow: "shadow-[0_20px_80px_rgba(249,115,22,0.20)]",
};

const alternatives = [
  { name: "Jasper AI", slug: "jasper-ai" },
  { name: "Writesonic", slug: "writesonic" },
  { name: "QuillBot", slug: "quillbot" },
  { name: "Grammarly", slug: "grammarly" },
  { name: "Copy.ai", slug: "jasper-ai" },
];

const faqs = [
  { q: "Is there a free plan?", a: "Yes. Rytr has a free tier with limited characters per month. Paid plans expand character limits and unlock premium features and priority support." },
  { q: "Which use cases does Rytr cover?", a: "Marketing copy, emails, social captions, blog outlines, product descriptions, ad copy, and short-form content in multiple tones and languages." },
  { q: "Does Rytr do long-form content?", a: "It can generate outlines and shorter paragraphs. For longer articles, you typically chain outputs or use drafts then edit for coherence." },
  { q: "Can Rytr improve grammar?", a: "Rytr provides rewriting and tone adjustment; for deep grammar checks, pair it with Grammarly." },
  { q: "Does Rytr have templates?", a: "Yes—dozens of templates for ads, emails, product descriptions, ideas, and outlines with tone/creativity controls." },
  { q: "Is Rytr good for SEO?", a: "Rytr helps create drafts but you’ll need an SEO tool for keyword research and on-page scoring. Pair with Surfer or Semrush for SEO workflows." },
  { q: "What languages does Rytr support?", a: "Rytr supports 30+ languages, making it usable for international teams." },
  { q: "Can I collaborate with a team?", a: "Rytr supports team seats and shared workspaces on higher tiers." },
];

function RytrToolPage() {
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
      reviewBody: "Rytr is an affordable AI writer for short-form marketing copy, outlines, and quick drafts with templates across many languages and tones.",
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
    { icon: <Type className="h-5 w-5 text-amber-500" />, title: "Templates for marketers", body: "Dozens of templates for ads, emails, product descriptions, blog ideas, and social captions speed up drafting." },
    { icon: <Sparkles className="h-5 w-5 text-rose-500" />, title: "Tone and creativity controls", body: "Adjust tone, creativity, and language to match brand voice across campaigns." },
    { icon: <ClipboardList className="h-5 w-5 text-emerald-500" />, title: "Outlines and short-form content", body: "Generate outlines, intros, and short paragraphs to jumpstart content and reduce blank-page time." },
    { icon: <Plug className="h-5 w-5 text-sky-500" />, title: "Multilingual support", body: "30+ languages supported, useful for global teams and localization drafts." },
    { icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />, title: "Plagiarism checks", body: "Built-in plagiarism checking helps keep outputs unique (available on paid tiers)." },
    { icon: <Rocket className="h-5 w-5 text-indigo-500" />, title: "Team collaboration", body: "Team access and shared workspaces on higher plans keep content efforts organized." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Rytr review for 2025 covering pricing, templates, multilingual support, pros/cons, and alternatives like Jasper, Writesonic, or QuillBot."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-amber-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-amber-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-rose-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-amber-500" />
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
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -left-8 top-10 h-20 w-20 rounded-full bg-white blur-3xl" />
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-amber-200 blur-3xl" />
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
                  Rytr delivers affordable AI copy across formats with tone control and multilingual support, ideal for quick campaigns and drafts.
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
              {toolName} is an AI writing assistant that creates marketing copy, outlines, and short-form content in multiple languages and tones. It’s built for marketers who want fast drafts without high costs.
            </p>
            <p className="mt-3 text-slate-700">
              It offers templates for ads, product descriptions, and social posts. Pair it with grammar and SEO tools for polishing and optimization.
            </p>
            <p className="mt-3 text-slate-700">{toolName} fits teams that need quick, affordable AI outputs rather than heavy long-form editors.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Rytr suits marketers and founders who need fast copy support.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Marketers drafting ads, emails, and social captions quickly.",
                "Ecommerce teams writing product descriptions at scale.",
                "Founders and startups creating landing copy on a budget.",
                "Agencies needing multilingual drafts for clients.",
                "Content teams building outlines and ideation prompts.",
                "Writers who want rewrites/tone shifts before manual edits.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">Rytr focuses on fast, versatile AI copy generation with manageable costs.</p>
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
                <p className="mt-2 text-slate-700">Free tier with limited characters; paid plans from roughly $9/month. Higher tiers expand character limits, unlock plagiarism checks, and add team features.</p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start free to test quality; upgrade when you need higher monthly volume and team access.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Plan</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key features</th>
                    <th className="px-4 py-3">Approx. price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Free</td>
                    <td className="px-4 py-3">Testing and light usage</td>
                    <td className="px-4 py-3">Limited characters, templates, basic tones</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Saver</td>
                    <td className="px-4 py-3">Solo marketers</td>
                    <td className="px-4 py-3">Higher characters, plagiarism checks, more tones</td>
                    <td className="px-4 py-3">~$9/mo</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Unlimited</td>
                    <td className="px-4 py-3">Heavy users & teams</td>
                    <td className="px-4 py-3">Highest limits, team access, priority support</td>
                    <td className="px-4 py-3">~$29/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Rytr is one of the most affordable AI writers. If you need long-form with SEO scoring, consider pairing it with another tool.</p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-amber-50 p-5 shadow-sm ring-1 ring-amber-100">
                <div className="flex items-center gap-2 text-amber-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Very affordable compared to many AI writers.</li>
                  <li>Templates, tones, and languages for quick campaigns.</li>
                  <li>Plagiarism checker on paid tiers.</li>
                  <li>Team collaboration available.</li>
                  <li>Good for short-form and outlines.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Not ideal for long-form SEO content without pairing another tool.</li>
                  <li>Outputs still need human editing for accuracy and nuance.</li>
                  <li>Limited research or fact-checking capability.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Rytr competes with premium AI writers and paraphrasers. Choose based on needed quality, length, and budget.</p>
            <p className="mt-2 text-slate-700">All of these create AI copy; they differ on long-form strength, SEO features, and price.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
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
            <p className="text-slate-700">Here’s how {toolName} compares to other AI writers.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Jasper vs Writesonic</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/compare/writesonic-vs-jasper-vs-rytr">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Jasper and Writesonic offer richer long-form and brand features. Rytr is cheaper and faster for short-form drafts. Pick Jasper/Writesonic for premium outputs; choose Rytr for budget-friendly copy.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs QuillBot vs Grammarly</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/compare/rytr-vs-quillbot-vs-grammarly">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                QuillBot and Grammarly focus on rewriting and grammar. Rytr generates new copy across templates. Pair Rytr with Grammarly for polishing; pick QuillBot for paraphrasing-heavy tasks.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">{toolName} is worth it if you need affordable AI copy for short-form content, outlines, and quick drafts. It saves time without heavy costs.</p>
            <p className="mt-3 text-slate-700">If you need premium long-form quality or SEO scoring, consider Jasper/Writesonic or pair Rytr with an SEO tool.</p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> {toolName} is a budget-friendly AI writer for marketers and founders who want fast, multilingual copy generation.
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
            <p>Choose {toolName} if you need quick, affordable AI copy across multiple languages and templates. It shines for short-form marketing content and outlines.</p>
            <p>Consider Jasper or Writesonic for premium long-form or branded content, and combine Rytr with Grammarly/SEO tools for polished outputs.</p>
            <p>{toolName} fits easily alongside your CMS, email, and analytics stack to speed up campaigns.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-amber-700 hover:text-amber-600" href={officialUrl}>
                Visit {toolName}
              </a>
              .
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

export default RytrToolPage;
