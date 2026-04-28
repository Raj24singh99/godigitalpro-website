import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Kafkai";
const slug = "kafkai";
const category = "AI Writing & SEO";
const shortPitch = "Kafkai is an AI writer built for SEO teams, generating niche articles and drafts to speed up content production.";
const pricingSummary =
  "Credit-based plans with usage-based tiers. Higher plans increase monthly article credits and model access; pricing scales with volume.";
const officialUrl = "https://www.kafkai.com";
const ratingValue = 3.8;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/kafkai.com",
  gradient: "from-indigo-500 via-blue-500 to-slate-600",
  glow: "shadow-[0_20px_80px_rgba(99,102,241,0.24)]",
};

const alternatives = [
  { name: "Jasper AI", slug: "jasper-ai" },
  { name: "AISEO", slug: "aiseo" },
  { name: "Article Forge", slug: "article-forge" },
  { name: "Writesonic", slug: "writesonic" },
  { name: "Surfer SEO", slug: "surfer-seo" },
];

const faqs = [
  {
    q: "What is Kafkai?",
    a: "Kafkai is an AI article writer aimed at SEO teams, generating niche-focused drafts for blogs and content sites.",
  },
  {
    q: "Who is Kafkai best for?",
    a: "Affiliate site owners and SEO teams that need quick drafts for niche topics before human editing and optimization.",
  },
  {
    q: "Does it support niche selection?",
    a: "Yes. You can choose niches or provide seed keywords to guide article generation.",
  },
  {
    q: "How does pricing work?",
    a: "Credit-based. Plans provide a set number of articles per month; higher tiers increase credits and quality options.",
  },
  {
    q: "Is plagiarism checking included?",
    a: "Outputs should be checked externally. Use plagiarism and fact-checking tools before publishing.",
  },
  {
    q: "Can I edit articles after generation?",
    a: "Yes. Review, rewrite, and optimize with human editors and SEO tools.",
  },
  {
    q: "Does it integrate with CMSes?",
    a: "Exports and copy/paste workflows are common. Pair with CMS and on-page SEO tools for publishing.",
  },
  {
    q: "Do I still need SEO scoring tools?",
    a: "Yes. Use Surfer or similar for SERP analysis, optimization, and scoring.",
  },
];

function KafkaiToolPage() {
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
        "Kafkai generates niche-focused articles for SEO teams. It speeds up drafting but requires human editing, optimization, and fact-checking before publishing.",
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
      title: "Niche templates",
      body: "Generate drafts from pre-set niches or seed keywords to match topical focus.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-indigo-500" />,
      title: "Fast drafting",
      body: "Produce first drafts quickly so editors can refine for quality and intent.",
    },
    {
      icon: <Folder className="h-5 w-5 text-blue-500" />,
      title: "Outline options",
      body: "Guide structure with outlines and brief inputs to reduce post-editing time.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Content filters",
      body: "Basic filters and checks; human review is still required for accuracy.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Credit-based plans",
      body: "Choose plans by monthly article credits; scale as volume increases.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Workflow compatibility",
      body: "Exports for CMS workflows; pair with SEO scoring and plagiarism tools.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Kafkai review: pricing, features, pros & cons, and alternatives so you can choose the right AI article writer for SEO."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-blue-200/25 blur-3xl" />
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
                  {toolName} helps SEO teams produce niche drafts faster—use it to start, then edit for intent, accuracy, and originality.
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
              {toolName} is an AI article writer aimed at SEO-focused sites. It generates niche drafts from keywords or niche selections to speed up production.
            </p>
            <p className="mt-3 text-slate-700">
              Use it for first drafts, then refine with human editors, add sources, and optimize for SERP intent before publishing.
            </p>
            <p className="mt-3 text-slate-700">
              Pair with SEO scoring tools and plagiarism checks to ensure quality and originality.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for SEO and affiliate teams that want faster drafts with clear editorial oversight.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Affiliate marketers building content at scale.",
                "SEO teams generating niche drafts before optimization.",
                "Agencies producing first drafts for editor review.",
                "Publishers needing outlines and articles quickly.",
                "Teams willing to invest in fact-checking and rewriting.",
                "Workflows that already include plagiarism and SERP checks.",
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
            <p className="mt-3 text-slate-700">
              {toolName} emphasizes niche article generation and outline guidance to speed up SEO drafting workflows.
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
                  {toolName} uses credit-based plans with monthly article allowances. Higher tiers increase credits and quality options; costs rise with volume.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on a lower tier to gauge quality and editing time. Upgrade only if drafts meet your standards and volume needs.</p>
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
                    <td className="px-4 py-3">Light use</td>
                    <td className="px-4 py-3">Limited article credits</td>
                    <td className="px-4 py-3">Test quality before scaling</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Standard</td>
                    <td className="px-4 py-3">SEO teams</td>
                    <td className="px-4 py-3">More credits, niche options</td>
                    <td className="px-4 py-3">Monitor editing time</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Premium</td>
                    <td className="px-4 py-3">Higher volume</td>
                    <td className="px-4 py-3">Highest credits, priority outputs</td>
                    <td className="px-4 py-3">Use if quality meets standards</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Account for editing, plagiarism checks, and SEO scoring costs. Factor in human time when evaluating total ROI.
            </p>
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
                  <li>Niche-focused article generation.</li>
                  <li>Fast drafts for SEO teams.</li>
                  <li>Credit-based pricing to start small.</li>
                  <li>Outline and keyword guidance options.</li>
                  <li>Useful for initial ideation and structure.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Quality varies; heavy editing required.</li>
                  <li>Plagiarism and fact-checking must be external.</li>
                  <li>Limited brand voice controls.</li>
                  <li>Not a replacement for SERP analysis tools.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other AI writing tools to match your quality needs, SEO focus, and editing workflow.
            </p>
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
            <p className="text-slate-700">See how {toolName} compares with other AI writing platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Jasper AI</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/jasper-ai">
                  View Jasper AI
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Jasper focuses on brand voice and team workflows; {toolName} focuses on niche article generation. Choose Jasper for polish and collaboration; choose {toolName} for quick niche drafts with editing planned.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Surfer SEO</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/surfer-seo">
                  View Surfer SEO
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Surfer provides SERP analysis and optimization. {toolName} produces drafts. Many teams use {toolName} to draft and Surfer to optimize and score content before publishing.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth testing if you need niche drafts quickly and have editors who can refine, fact-check, and optimize before publishing.
            </p>
            <p className="mt-3 text-slate-700">
              Budget for editing time, plagiarism tools, and SEO scoring. Evaluate quality on your keywords before scaling spend.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Useful for rapid SEO drafting, but success depends on strong editorial processes and optimization tooling.
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
              Choose {toolName} if you want quick, niche-focused drafts and have an editorial workflow for rewriting, sourcing, and SEO optimization.
            </p>
            <p>
              Consider Jasper for brand voice workflows or Surfer for optimization; pair {toolName} with both if you want drafting plus scoring.
            </p>
            <p>{toolName} accelerates content starts but still depends on human editing and SEO tools for publish-ready quality.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-indigo-700 hover:text-indigo-500" href={officialUrl}>
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

export default KafkaiToolPage;
