import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "GrowthBar";
const slug = "growthbar";
const category = "AI Writing & SEO";
const shortPitch =
  "GrowthBar is an AI writing and SEO tool that generates outlines, drafts, and on-page optimizations to speed up content production.";
const pricingSummary = "Tiered pricing with free trial; higher plans raise word limits, add SEO research, collaboration, and content audits.";
const officialUrl = "https://www.growthbarseo.com";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/growthbarseo.com",
  gradient: "from-emerald-500 via-blue-500 to-indigo-600",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.22)]",
};

const alternatives = [
  { name: "Surfer SEO", slug: "surfer-seo" },
  { name: "Jasper AI", slug: "jasper-ai" },
  { name: "Writesonic", slug: "writesonic" },
  { name: "Scalenut", slug: "scalenut" },
  { name: "NeuronWriter", slug: "neuronwriter" },
];

const faqs = [
  {
    q: "What is GrowthBar?",
    a: "GrowthBar is an AI content and SEO tool that creates outlines, drafts, and optimization suggestions to help teams publish faster.",
  },
  {
    q: "Who is it for?",
    a: "Content and SEO teams producing blogs and landing pages that want AI help plus keyword and on-page insights.",
  },
  {
    q: "Does it support SEO optimization?",
    a: "Yes. GrowthBar offers keyword suggestions, headings, and on-page recommendations to keep drafts aligned to search intent.",
  },
  {
    q: "How is pricing structured?",
    a: "Subscription plans with increasing word limits, projects, and collaboration seats. Free trial available.",
  },
  {
    q: "Does it integrate with WordPress?",
    a: "Yes. GrowthBar offers a WordPress plugin and export options for CMS publishing.",
  },
  {
    q: "Can it replace human editing?",
    a: "No. AI drafts need human review for accuracy, voice, and E-E-A-T. Use it as a drafting accelerator.",
  },
  {
    q: "Is keyword research included?",
    a: "Plans include keyword difficulty and suggestions; depth depends on tier.",
  },
  {
    q: "Does it provide content audits?",
    a: "Higher tiers include content grading and optimization suggestions to improve existing pages.",
  },
];

function GrowthbarToolPage() {
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
        "GrowthBar accelerates SEO content with AI-generated outlines, drafts, and on-page suggestions. It is useful for teams that want faster production and basic SEO guidance.",
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
      title: "SEO-aware outlines",
      body: "Generate outlines aligned to keywords and search intent.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "AI drafts",
      body: "Create first drafts quickly so editors can refine and fact-check.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Keyword research",
      body: "Keyword suggestions, difficulty, and related terms to inform briefs.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Content audits",
      body: "Optimize existing pages with headings, keyword usage, and readability tips.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "CMS workflows",
      body: "WordPress plugin and export options to move drafts into your CMS.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Collaboration",
      body: "Projects, sharing, and simple workflows for teams and agencies.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="GrowthBar review: pricing, features, pros & cons, and alternatives so you can decide if it fits your SEO content workflow."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-200/25 blur-3xl" />
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
                  {toolName} helps teams create SEO-friendly outlines and drafts faster—use it as a head start, then edit for accuracy and voice.
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
              {toolName} is an AI-assisted writing and SEO tool for blogs and landing pages. It combines keyword research, outlines, AI drafts, and on-page recommendations to help teams publish faster while staying aligned to search intent.
            </p>
            <p className="mt-3 text-slate-700">
              It is designed for content teams that want to speed up briefs and drafts without fully replacing human editing, subject matter expertise, and fact-checking.
            </p>
            <p className="mt-3 text-slate-700">Pair with analytics and link-building efforts to drive performance after publishing.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Great for teams producing SEO articles and wanting faster briefs and drafts.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Content marketers producing SEO-driven blogs and landing pages.",
                "Agencies managing content calendars for multiple clients.",
                "Editors who want outlines and drafts to accelerate production.",
                "Teams needing WordPress-friendly workflows with exports/plugins.",
                "SEO specialists looking for keyword suggestions inside briefs.",
                "Small teams seeking affordable AI + SEO tooling.",
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
            <p className="mt-3 text-slate-700">{toolName} blends AI drafting with SEO suggestions and CMS-friendly exports.</p>
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
                  Subscription plans vary by word limits, projects, and collaboration. Higher tiers include content audits, more keyword data, and more seats. Free trial lets you test AI outputs and workflow fit.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with the mid tier if you need audits and collaboration; upgrade when you hit word or seat limits.</p>
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
                    <td className="px-4 py-3">Light/solo use</td>
                    <td className="px-4 py-3">AI outlines/drafts, limited words/projects</td>
                    <td className="px-4 py-3">Test quality and workflow</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Standard/Mid</td>
                    <td className="px-4 py-3">Active content teams</td>
                    <td className="px-4 py-3">More words, collaboration, content audits, keyword data</td>
                    <td className="px-4 py-3">Often best balance of features vs. price</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro/Agency</td>
                    <td className="px-4 py-3">High-volume or agencies</td>
                    <td className="px-4 py-3">Highest limits, more seats, advanced reports</td>
                    <td className="px-4 py-3">Use if you need scale and multiple domains</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Budget for separate SEO tools (SERP analysis, backlinks) and editorial time to refine AI drafts before publishing.
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
                  <li>Fast AI outlines and drafts with SEO-aware suggestions.</li>
                  <li>Content audits help improve existing pages.</li>
                  <li>WordPress plugin and exports streamline publishing.</li>
                  <li>Keyword data helps inform briefs.</li>
                  <li>Approachable pricing for small teams.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Requires human editing for accuracy and voice.</li>
                  <li>Keyword research depth lighter than dedicated SEO suites.</li>
                  <li>Backlink and SERP analysis may require separate tools.</li>
                  <li>Word/seat limits can add cost as teams scale.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other AI writing and SEO tools.</p>
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
            <p className="text-slate-700">See how {toolName} stacks against other AI writing platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Surfer SEO</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/surfer-seo">
                  View Surfer SEO
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Surfer offers deeper SERP analysis and scoring; {toolName} provides faster drafting with lighter SEO guidance. Consider Surfer for detailed on-page optimization, {toolName} for a balanced AI + SEO starter.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Jasper AI</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/jasper-ai">
                  View Jasper AI
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Jasper emphasizes brand voice and templates; {toolName} leans into SEO-aware outlines and WordPress workflows. Pick Jasper for multi-channel copy, {toolName} for SEO blog production.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want a combined AI writing + SEO assistant for blogs and landing pages and you plan to edit outputs before publishing.
            </p>
            <p className="mt-3 text-slate-700">If you need deep SERP analysis, link building, or enterprise workflows, pair {toolName} with dedicated SEO suites.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A practical drafting accelerator with SEO hints—best when paired with human editing and additional SEO analytics.
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
            <p>Choose {toolName} for AI-assisted SEO drafts with easy WordPress workflows.</p>
            <p>Pick Surfer or Scalenut if you need deeper SERP scoring, or Jasper/Writesonic for broader copy templates.</p>
            <p>{toolName} works best when combined with editorial review and link-building plans.</p>
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

export default GrowthbarToolPage;
