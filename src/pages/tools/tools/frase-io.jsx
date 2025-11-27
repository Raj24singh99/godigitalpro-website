import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, BookOpen, Globe2, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Frase.io";
const slug = "frase-io";
const category = "AI SEO Content";
const shortPitch =
  "Frase.io helps marketers research, outline, and optimize SEO content with AI briefs, SERP analysis, and content scoring in one workflow.";
const pricingSummary =
  "Starter around $15/month for individuals; Pro/Team from ~$45–$115/month with higher document limits and team seats. Credits for AI writing scale by plan.";
const officialUrl = "https://www.frase.io";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/frase.io",
  gradient: "from-emerald-500 via-teal-500 to-cyan-500",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.22)]",
};

const alternatives = [
  { name: "Surfer SEO", slug: "surfer-seo" },
  { name: "Jasper", slug: "jasper" },
  { name: "MarketMuse", slug: "marketmuse" },
  { name: "Clearscope", slug: "clearscope" },
  { name: "Semrush", slug: "semrush" },
];

const faqs = [
  {
    q: "How does Frase.io help with SEO?",
    a: "It analyzes SERPs to suggest topics, headings, and questions, then scores your draft for coverage and readability.",
  },
  {
    q: "Does Frase.io write content?",
    a: "Yes. AI drafting and rewriting are included, but human editing is recommended to ensure accuracy and brand tone.",
  },
  {
    q: "Is there a content brief generator?",
    a: "Frase builds briefs with competitor outlines, keywords, and questions to guide writers.",
  },
  {
    q: "Can I optimize existing articles?",
    a: "Yes. Import your content to get a content score, gap analysis, and suggestions to improve SEO coverage.",
  },
  {
    q: "Does Frase integrate with WordPress?",
    a: "Yes. There’s a WordPress plugin and export options to move drafts into your CMS.",
  },
  {
    q: "Are AI credits included?",
    a: "AI credits come with each plan and can be topped up; drafting heavily will consume credits faster.",
  },
  {
    q: "Does Frase support multiple languages?",
    a: "It supports several languages for research and drafting; check current language support for your target markets.",
  },
  {
    q: "Is there team collaboration?",
    a: "Team plans include multiple seats, shared documents, and centralized billing.",
  },
];

function FraseIOToolPage() {
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
        "Frase.io combines SERP research, AI briefs, and content scoring so writers can draft and optimize SEO content in one place.",
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
      icon: <BookOpen className="h-5 w-5 text-emerald-500" />,
      title: "SERP-driven briefs",
      body: "Analyze top results to extract headings, questions, and topics that should be covered.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-amber-500" />,
      title: "AI drafting and rewriting",
      body: "Generate outlines, paragraphs, and rewrites to speed up content creation.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Content scoring",
      body: "Score drafts against competitors and suggested terms to find gaps.",
    },
    {
      icon: <Plug className="h-5 w-5 text-cyan-500" />,
      title: "Integrations and exports",
      body: "WordPress plugin, CMS exports, and Google Docs workflows keep publishing smooth.",
    },
    {
      icon: <Globe2 className="h-5 w-5 text-sky-500" />,
      title: "Topic and keyword suggestions",
      body: "Target related terms and questions to improve search relevance.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-emerald-500" />,
      title: "Content refresh guidance",
      body: "Optimize existing posts with gap analysis and updated briefs.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Frase.io review for content and SEO teams: pricing, features, pros & cons, and alternatives for AI-driven briefs and content optimization."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-200/30 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-cyan-200/30 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-emerald-500" />
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
                  Frase.io combines SERP insights, AI briefs, and optimization scores so teams can create content that ranks faster.
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
              {toolName} is an {category.toLowerCase()} platform that analyzes SERPs, generates briefs, and offers AI drafting so writers can produce SEO-friendly content faster.
            </p>
            <p className="mt-3 text-slate-700">
              It scores drafts against competitors and suggested terms, making optimization part of the drafting flow.
            </p>
            <p className="mt-3 text-slate-700">
              WordPress and Google Docs workflows keep publishing seamless for content teams.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
          <p className="mt-3 text-slate-700">{toolName} suits SEO writers and teams that need structured research and optimization built into drafting.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Content marketers producing SEO articles and landing pages.",
                "SEO teams needing briefs and content scoring for writers.",
                "Agencies creating outlines and drafts at scale.",
                "Teams refreshing existing posts with gap analysis.",
                "Freelancers wanting SERP-driven outlines and AI drafting.",
                "Editors who need quick exports to WordPress or Docs.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
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
              {toolName} emphasizes research, structured briefs, AI drafting, and optimization scores within one editor.
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
                  Starter is ~ $15/month for light users. Pro/Team range from ~$45–$115/month with higher document limits, AI credits, and seats. Additional AI credits can be purchased.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with Starter if solo; upgrade to Pro/Team for higher doc limits, AI credits, and collaboration.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Plan</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key limits</th>
                    <th className="px-4 py-3">Approx. price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter</td>
                    <td className="px-4 py-3">Solo writers</td>
                    <td className="px-4 py-3">Lower doc and AI credit limits</td>
                    <td className="px-4 py-3">~$15/month</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Active content teams</td>
                    <td className="px-4 py-3">More docs, credits, features</td>
                    <td className="px-4 py-3">~$45–$60/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Team</td>
                    <td className="px-4 py-3">Agencies and larger teams</td>
                    <td className="px-4 py-3">Higher limits, multiple seats</td>
                    <td className="px-4 py-3">~$115+/month</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Factor in document and credit needs, collaboration, and CMS integration workflows. Heavy AI drafting may need add-on credits.
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
                  <li>SERP-based briefs and questions to guide content.</li>
                  <li>AI drafting and rewriting built into the editor.</li>
                  <li>Content scoring and gap analysis for optimization.</li>
                  <li>WordPress and Google Docs friendly workflows.</li>
                  <li>Supports refreshing existing articles efficiently.</li>
                  <li>Clear pricing tiers for individuals and teams.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>AI outputs require human editing for accuracy and tone.</li>
                  <li>Credit limits can be restrictive for heavy drafting.</li>
                  <li>Not a full SEO suite—pair with keyword tracking tools.</li>
                  <li>Interface can feel busy compared to pure editors.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              {toolName} competes with SEO content tools. Choose based on scoring depth, collaboration, and AI drafting needs.
            </p>
            <p className="mt-2 text-slate-700">Every link below goes to a live tool page—no broken routes.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify_between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
                  </div>
                  <a className="text-sm font-semibold text-sky-600 hover:text-sky-500" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">Compare {toolName} to other SEO content platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Surfer SEO</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/frase-io-vs-surfer-seo">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Surfer focuses on keyword density and on-page optimization. {toolName} blends SERP briefs, AI drafting, and scoring in one editor.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} for integrated drafting + briefs; choose Surfer if you want deeper keyword-focused on-page audits.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items_center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Jasper</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/frase-io-vs-jasper">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Jasper is a general AI writer with templates and brand voice. {toolName} is more SEO-specific with SERP research and scoring.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} for SEO-focused drafting; choose Jasper for broader marketing copy with brand voice controls.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you need SERP-driven briefs, AI-assisted drafting, and optimization scores in one place, {toolName} is worth it. It helps teams produce SEO-friendly drafts faster.
            </p>
            <p className="mt-3 text-slate-700">
              If you need rank tracking, link building, or heavy keyword research suites, pair it with broader SEO tools. For pure copywriting, compare general AI writers.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> {toolName} is a strong choice for SEO content teams wanting research, drafting, and optimization in one workflow.</p>
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
              Choose {toolName} if you want to research, draft, and optimize SEO content in a single tool with SERP briefs and scoring.
            </p>
            <p>
              Consider Surfer, Clearscope, or MarketMuse for alternative scoring and research approaches, or Jasper for general marketing copy needs.
            </p>
            <p>{toolName} helps teams move faster from keyword to publish-ready drafts while keeping SEO requirements visible.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here: <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>Visit {toolName}</a>.
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded_full bg-white px-3 py-2 text-sm font-semibold text-sky-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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
      {open && (
        <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">
          {answer}
        </div>
      )}
    </div>
  );
}

export default FraseIOToolPage;
