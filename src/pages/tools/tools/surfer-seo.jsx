import React, { useState } from "react";
import { Sparkles, ShieldCheck, ClipboardList, BarChart3, Layers, Gauge, Crown, ArrowLeft, ChevronDown, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Surfer SEO";
const slug = "surfer-seo";
const category = "SEO Content";
const shortPitch =
  "Surfer SEO scores your pages against live SERPs, suggesting NLP terms and structure so content teams can publish optimized briefs and drafts faster.";
const pricingSummary =
  "Plans start around $89/month with a Lite option below that on promos. Higher tiers add more articles, SERP Analyzer, and team seats; add-ons like AI writing and audits cost extra.";
const officialUrl = "https://www.surferseo.com";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/surferseo.com",
  gradient: "from-amber-500 via-orange-500 to-pink-600",
  glow: "shadow-[0_20px_80px_rgba(249,115,22,0.18)]",
};

const alternatives = [
  { name: "Semrush", slug: "semrush" },
  { name: "Ahrefs", slug: "ahrefs" },
  { name: "SE Ranking", slug: "se-ranking" },
  { name: "Jasper AI", slug: "jasper-ai" },
];

const faqs = [
  {
    q: "Is Surfer SEO good for agencies and content teams?",
    a: "Yes. Surfer SEO helps teams build briefs, optimize drafts, and hand editors clear NLP guidelines. Agencies can standardize content QA with on-page scores and shareable guidelines.",
  },
  {
    q: "Is Surfer SEO accurate for on-page optimization?",
    a: "Surfer analyzes live SERPs to recommend headings, word count, and NLP terms. Scores are directional—use judgment, but it’s one of the more reliable on-page optimizers.",
  },
  {
    q: "Does Surfer SEO include AI writing?",
    a: "Yes. The AI Writer add-on can produce drafts using your target keyword. Many teams still edit for brand voice and depth, but it speeds first drafts.",
  },
  {
    q: "Which plan should I pick?",
    a: "Start with the entry plan if you produce a handful of articles monthly. Agencies and in-house teams usually pick higher plans for more articles, SERP Analyzer, and collaboration.",
  },
  {
    q: "Does Surfer SEO replace Semrush or Ahrefs?",
    a: "No. Surfer focuses on on-page optimization and content scoring. Semrush/Ahrefs cover keyword research, backlinks, and technical audits. Many teams use Surfer alongside those suites.",
  },
  {
    q: "Can I share Surfer reports with writers?",
    a: "Yes. You can export or share guidelines with freelancers and writers so they follow structure, headings, and target NLP terms.",
  },
  {
    q: "How does Surfer compare to writing only with AI?",
    a: "AI alone often misses SERP-specific nuances. Surfer grounds suggestions in the top results, reducing risk of thin or off-target drafts.",
  },
  {
    q: "Does Surfer help with old content?",
    a: "Yes. Use Content Audit to refresh existing pages with new terms, internal links, and improvements to regain rankings.",
  },
];

function SurferSeoToolPage() {
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
        "Surfer SEO is a strong on-page optimizer. It gives content teams clear NLP term suggestions, structure guidelines, and audits to update existing pages. Pair it with Semrush or Ahrefs for research and links.",
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
      icon: <ClipboardList className="h-5 w-5 text-amber-600" />,
      title: "SERP-driven content guidelines",
      body: "Surfer builds outlines with ideal word count, headings, questions, and NLP terms based on top-ranking pages, keeping drafts aligned to search intent.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-rose-600" />,
      title: "Content Score for fast QA",
      body: "Editors and writers track a live score as they add sections and terms, making it easy to hand off articles that meet SEO targets.",
    },
    {
      icon: <Layers className="h-5 w-5 text-indigo-600" />,
      title: "Content Audit for refreshes",
      body: "Analyze existing URLs to find missing terms, internal link opportunities, and structural tweaks that can recover rankings faster than net-new pages.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-pink-500" />,
      title: "AI-assisted drafting",
      body: "Surfer AI can produce first drafts using your keyword and tone-of-voice inputs. Teams usually edit for examples, E-E-A-T, and brand voice.",
    },
    {
      icon: <Gauge className="h-5 w-5 text-emerald-600" />,
      title: "SERP Analyzer and keyword clusters",
      body: "Dig deeper into SERP competition, compare competitors, and cluster keywords for multi-page strategies without guessing.",
    },
    {
      icon: <FileText className="h-5 w-5 text-slate-700" />,
      title: "Shareable guidelines for writers",
      body: "Export or share content guidelines with freelancers so they follow the right length, structure, and term usage without needing a Surfer account.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Hands-on Surfer SEO review for content teams covering pricing, features, pros & cons, alternatives, and when to use Surfer alongside Semrush or Ahrefs."
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
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-amber-300/20 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-pink-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-amber-500" />
                {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                {toolName} Review (2025): On-Page SEO, Pricing, Pros & Cons
              </h1>
              <p className="mt-4 text-lg text-slate-600">{shortPitch}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-700">
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Our rating: {ratingValue}/5</span>
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Reviewed by GoDigitalPro • Updated May 2025</span>
              </div>
              <p className="mt-4 text-slate-700">{pricingSummary}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="btn btn-primary bg-slate-900 text-white ring-2 ring-slate-900 hover:bg-slate-700" href={officialUrl}>
                  Visit Surfer SEO
                </a>
              </div>
            </div>
            <div className="md:w-1/3">
              <div
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}
              >
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
                  Surfer SEO helps teams ship optimized articles faster with SERP-backed guidelines, NLP term suggestions, and audits to refresh existing pages.
                </p>
                <div className="relative mt-4 flex items-center gap-2 text-sm font-semibold">
                  <Sparkles className="h-4 w-4 text-amber-200" />
                  Recommended for content-led growth
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--overview bg-white">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">What is {toolName}?</h2>
            <p className="mt-4 text-slate-700">
              Surfer SEO is a {category.toLowerCase()} platform that guides writers and editors to create content aligned to live SERPs. It suggests headings, length, and NLP terms so drafts rank better and refreshes recover slipping pages.
            </p>
            <p className="mt-3 text-slate-700">
              Agencies and in-house teams use Surfer to standardize briefs, align freelancers, and audit existing content. It pairs well with Semrush/Ahrefs for keyword research and link building.
            </p>
            <p className="mt-3 text-slate-700">
              If you need on-page optimization without replacing your research stack, Surfer SEO is one of the fastest ways to level up content quality.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Surfer SEO suits teams focused on content-led growth.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Agencies delivering SEO content and needing consistent on-page scores.",
                "Content teams refreshing aging articles to regain rankings.",
                "Freelancers and editors who want clear guidelines and NLP terms.",
                "Founders running lean content programs and needing fast briefs.",
                "Teams pairing Surfer with Semrush/Ahrefs for research + links.",
                "Writers collaborating with AI but needing SERP-grounded guidance.",
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
            <p className="mt-3 text-slate-700">Surfer SEO keeps content aligned to search intent with live SERP analysis and easy-to-follow scores.</p>
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
                  Pricing starts around $89/month. Lite promos can be lower with fewer articles. Higher tiers unlock more monthly articles, SERP Analyzer, and collaboration. Add-ons like AI Writer and Content Audit credits may increase
                  spend—budget accordingly.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with the entry plan to test workflows. Upgrade if you publish multiple articles weekly or run refresh programs.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Lite/Starter</td>
                    <td className="px-4 py-3">Testing and low-volume teams</td>
                    <td className="px-4 py-3">Limited articles/month, basic guidelines</td>
                    <td className="px-4 py-3">~$49–$59+/month (promo dependent)</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Essential/Pro</td>
                    <td className="px-4 py-3">Active content teams and agencies</td>
                    <td className="px-4 py-3">More articles, audits, SERP Analyzer, team access</td>
                    <td className="px-4 py-3">~$89–$129+/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Advanced/Business</td>
                    <td className="px-4 py-3">High-volume publishers</td>
                    <td className="px-4 py-3">Higher limits, workspace sharing, priority support</td>
                    <td className="px-4 py-3">Custom/varies</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Surfer’s pricing is tied to monthly article credits. If you need research, links, and audits beyond on-page, pair it with Semrush or Ahrefs.
            </p>
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
                  <li>Clear, SERP-grounded guidelines that writers can follow easily.</li>
                  <li>Content Score simplifies QA for editors and agencies.</li>
                  <li>Content Audit helps recover rankings on existing pages.</li>
                  <li>Integrates with SEO suites—no need to replace research stack.</li>
                  <li>AI Writer speeds first drafts when you need volume.</li>
                  <li>Shareable guidelines for freelancers without extra seats.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Credits can be limiting if you publish daily without higher tiers.</li>
                  <li>AI Writer outputs need human editing for depth and E-E-A-T.</li>
                  <li>Not a full SEO suite—still need research and link tools.</li>
                  <li>Over-optimizing to hit scores can hurt readability; use judgment.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              These tools often pair with or compete against Surfer. Each has a full review page on our hub so you can compare details and pricing.
            </p>
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
            <p className="text-slate-700">Here’s how Surfer SEO stacks up against Semrush and SE Ranking.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Semrush</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/compare/surfer-seo-vs-semrush-vs-se-ranking">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Semrush is a full SEO suite with research, backlinks, and technical audits. Surfer is a focused on-page optimizer. Many teams use both—Semrush for discovery and reporting, Surfer for briefs and optimization.
              </p>
              <p className="mt-2 text-slate-900">Choose Surfer for on-page scoring and guidelines; choose Semrush if you need an all-in-one suite.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs SE Ranking</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/compare/surfer-seo-vs-semrush-vs-se-ranking">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                SE Ranking offers rank tracking, research, and site audits at a budget-friendly price. Surfer focuses on on-page optimization. Pair them if you need affordable research plus strong guidelines.
              </p>
              <p className="mt-2 text-slate-900">Choose Surfer to improve content quality; choose SE Ranking to monitor ranks and research keywords efficiently.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If content drives your pipeline, Surfer SEO is worth it. It reduces guesswork on structure and terminology, helping writers ship optimized drafts faster. Pair it with keyword research and link tools for full coverage.
            </p>
            <p className="mt-3 text-slate-700">
              If you need a single platform for research, links, and technical SEO, Semrush or Ahrefs are broader. If you only publish a few pieces a year, Surfer may feel pricey—consider pay-as-you-go credits or lite offers.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Surfer SEO is a top on-page optimizer for teams that want SERP-aligned content and faster refresh cycles.
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
            <p>Use Surfer SEO if you want on-page optimization, clear writer guidelines, and fast content refreshes grounded in real SERPs.</p>
            <p>Keep Semrush or Ahrefs for research, links, and site audits. Surfer complements those suites rather than replacing them.</p>
            <p>It fits agencies, content teams, and founders who publish regularly and need repeatable, optimized briefs.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-amber-700 hover:text-amber-500" href={officialUrl}>
                Visit {toolName}
              </a>
              .
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-amber-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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

export default SurferSeoToolPage;
