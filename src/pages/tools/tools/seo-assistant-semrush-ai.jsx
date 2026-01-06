import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Folder, Crown, ArrowLeft, ChevronDown, BarChart3, Search, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Semrush AI SEO Assistant";
const slug = "seo-assistant-semrush-ai";
const category = "AI Writing & SEO";
const shortPitch = "Semrush AI SEO Assistant helps write and optimize content with AI drafts, keyword recommendations, tone checks, and on-page guidance.";
const pricingSummary = "Available within Semrush plans; usage depends on plan limits and AI credit availability. Higher plans unlock more AI features and limits.";
const officialUrl = "https://www.semrush.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/semrush.com",
  gradient: "from-orange-500 via-amber-500 to-rose-500",
  glow: "shadow-[0_20px_80px_rgba(249,115,22,0.22)]",
};

const alternatives = [
  { name: "Surfer SEO", slug: "surfer-seo" },
  { name: "Jasper AI", slug: "jasper-ai" },
  { name: "Scalenut", slug: "scalenut" },
  { name: "Frase", slug: "frase" },
  { name: "Copy.ai", slug: "copy-ai" },
];

const faqs = [
  { q: "What is Semrush AI SEO Assistant?", a: "It is an AI writing and optimization tool within Semrush that generates and improves content with keyword and on-page recommendations." },
  { q: "Who is it for?", a: "Content and SEO teams using Semrush who want AI assistance for outlines, drafts, and on-page optimization." },
  { q: "How is pricing structured?", a: "Included in Semrush plans with AI usage limits; higher plans offer more credits/features. Check your plan for availability." },
  { q: "Does it do keyword recommendations?", a: "Yes. It suggests keywords and on-page improvements aligned with Semrush data." },
  { q: "Does it replace human editing?", a: "No. It accelerates drafting and optimization, but human review is required for accuracy and brand voice." },
  { q: "Does it integrate with other tools?", a: "Works within Semrush; exports/copy workflows connect to CMS. Pair with analytics for performance tracking." },
  { q: "Can it guarantee rankings?", a: "No. It provides guidance; rankings depend on content quality, links, and technical SEO." },
  { q: "Is human review needed?", a: "Yes. Verify facts, tone, and E-E-A-T before publishing." },
];

function SemrushAiSeoAssistantPage() {
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
        "Semrush AI SEO Assistant helps generate and optimize content with AI drafts, keywords, and on-page guidance. It speeds up content production for Semrush users while requiring human oversight.",
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
      icon: <Search className="h-5 w-5 text-orange-500" />,
      title: "Keyword-driven drafts",
      body: "Generate outlines and drafts aligned to target keywords using Semrush data.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-amber-500" />,
      title: "On-page optimization",
      body: "Get recommendations for headings, keywords, and readability to improve SEO alignment.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-rose-500" />,
      title: "Tone & style suggestions",
      body: "Adjust tone and style to match brand voice while keeping SEO goals in mind.",
    },
    {
      icon: <Folder className="h-5 w-5 text-slate-700" />,
      title: "Templates & workflows",
      body: "Use templates and guided workflows for articles, briefs, and optimization tasks.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-blue-600" />,
      title: "Scoring & guidance",
      body: "Content scoring and suggestions help prioritize edits for search intent.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Exports & CMS workflows",
      body: "Copy/export content to your CMS; pair with analytics to track performance.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Semrush AI SEO Assistant review: pricing, features, pros & cons, and alternatives to evaluate it for AI-assisted SEO content."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-orange-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-rose-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-orange-600" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-orange-100 blur-3xl" />
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
                  {toolName} boosts content workflows with AI drafts and optimization inside Semrush—human editing and SEO judgment remain essential.
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
              {toolName} is an AI writing and optimization assistant within Semrush. It helps create keyword-aligned drafts, suggests on-page improvements, and guides tone and structure for SEO content.
            </p>
            <p className="mt-3 text-slate-700">Use it to speed up briefs and drafts; editors must refine for accuracy, voice, and E-E-A-T.</p>
            <p className="mt-3 text-slate-700">Pair with Semrush analytics and other SEO tools for measuring performance after publishing.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for Semrush users producing keyword-driven content who want AI assistance for drafting and on-page optimization.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Content teams creating SEO articles and briefs.",
                "SEO specialists optimizing pages for target keywords.",
                "Agencies producing drafts for clients within Semrush.",
                "Writers needing tone/style guidance with SEO context.",
                "Teams wanting on-page recommendations during drafting.",
                "Editors using AI outputs as starting points, not final copy.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-orange-500" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">{toolName} focuses on keyword-aligned drafts, on-page optimization, tone suggestions, templates, scoring, and exports.</p>
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
                  {toolName} is available within Semrush plans, with AI usage limits tied to plan level. Higher plans/credits unlock more AI usage and features. Check your plan for included limits and costs.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Test within your current plan; upgrade or add credits if you rely heavily on AI drafting and optimization.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Access</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key inclusions</th>
                    <th className="px-4 py-3">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Included in base plans</td>
                    <td className="px-4 py-3">Light AI use</td>
                    <td className="px-4 py-3">AI drafting/optimization with plan limits</td>
                    <td className="px-4 py-3">Good for occasional use</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Higher plans/credits</td>
                    <td className="px-4 py-3">Regular AI use</td>
                    <td className="px-4 py-3">More AI credits, features, and priority</td>
                    <td className="px-4 py-3">Fits active content teams</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise/custom</td>
                    <td className="px-4 py-3">High volume</td>
                    <td className="px-4 py-3">Custom limits, support, governance</td>
                    <td className="px-4 py-3">Use if you publish at scale</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Monitor AI credit usage and quality. Plan for editorial review and SEO strategy outside the tool.</p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-orange-50 p-5 shadow-sm ring-1 ring-orange-100">
                <div className="flex items-center gap-2 text-orange-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Keyword-aligned drafts and on-page guidance within Semrush.</li>
                  <li>Tone/style suggestions to match brand voice.</li>
                  <li>Templates and scoring to speed up editing.</li>
                  <li>Works within existing Semrush workflows.</li>
                  <li>Exports to CMS; pair with Semrush analytics.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items_center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>AI credit limits tied to plan; heavy use may need upgrades.</li>
                  <li>Requires human editing for accuracy and E-E-A-T.</li>
                  <li>Not a replacement for broader SEO strategy or link building.</li>
                  <li>Quality varies by topic; fact-checking remains necessary.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other AI SEO writing tools to match your workflow.</p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-orange-700 hover:text-orange-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} compares to other AI writing/SEO platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Surfer SEO</h3>
                <a className="text-sm font-semibold text-orange-700 hover:text-orange-600" href="/tools/surfer-seo">
                  View Surfer SEO
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Surfer focuses on on-page scoring; {toolName} integrates with Semrush for keyword and AI drafting. Choose based on whether you want Semrush ecosystem integration or standalone scoring.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Jasper AI</h3>
                <a className="text-sm font-semibold text-orange-700 hover:text-orange-600" href="/tools/jasper-ai">
                  View Jasper AI
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Jasper covers broad marketing copy; {toolName} leans into SEO drafts and on-page guidance within Semrush. Pick based on whether you need multi-channel copy or SEO-focused assistance.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you use Semrush and want AI-assisted SEO drafting and on-page guidance integrated with your existing workflows.
            </p>
              <p className="mt-3 text-slate-700">Track AI credit usage, and maintain human review for accuracy, brand voice, and SEO strategy.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A helpful AI assistant inside Semrush; best when paired with editorial oversight and broader SEO planning.</p>
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
            <p>Choose {toolName} if you rely on Semrush and want AI-driven drafts and on-page guidance within that ecosystem.</p>
            <p>Consider Surfer or Jasper for alternative strengths; use {toolName} when Semrush integration and SEO-focused drafting are priorities.</p>
            <p>{toolName} can speed SEO content creation—keep human checks for quality and strategy.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-orange-700 hover:text-orange-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-orange-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default SemrushAiSeoAssistantPage;
