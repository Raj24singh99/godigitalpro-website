import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Layers3, ClipboardList, Crown, ArrowLeft, ChevronDown, BookOpenCheck } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Yoast SEO";
const slug = "yoast-seo";
const category = "WordPress SEO Plugin";
const shortPitch =
  "Yoast SEO is the original WordPress SEO plugin that helps site owners optimize content, schema, readability, and technical metadata without touching code.";
const pricingSummary =
  "Freemium plugin with Yoast SEO Premium starting around $99/year/site. Bundles add WooCommerce SEO, Local SEO, and Video SEO extensions.";
const officialUrl = "https://yoast.com/wordpress/plugins/seo/";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/yoast.com",
  gradient: "from-purple-600 via-pink-500 to-amber-500",
  glow: "shadow-[0_20px_80px_rgba(168,85,247,0.22)]",
};

const alternatives = [
  { name: "Rank Math", slug: "rank-math", isComparison: true },
  { name: "SEOPress", slug: "seopress", isComparison: true },
  { name: "All in One SEO", slug: "all-in-one-seo", isComparison: true },
  { name: "Surfer SEO", slug: "surfer-seo" },
  { name: "Ahrefs", slug: "ahrefs" },
];

const faqs = [
  {
    q: "Is Yoast SEO free?",
    a: "Yes. Yoast SEO has a generous free plugin that covers most on-page basics, XML sitemaps, and schema. Premium unlocks redirects, multiple keywords, internal link suggestions, and advanced schema controls.",
  },
  {
    q: "Should I buy Yoast SEO Premium?",
    a: "Purchase Premium if you manage multiple keywords per post, need automatic redirects, or want the AI-powered internal linking and content insights. Agencies also appreciate the 24/7 support.",
  },
  {
    q: "Does Yoast SEO work with Gutenberg and Elementor?",
    a: "Yoast SEO works across the WordPress block editor, Elementor, Divi, Breakdance, and classic editors. Snippet previews and content analysis appear inside most builders.",
  },
  {
    q: "Can Yoast SEO handle schema markup?",
    a: "Yes. Yoast automatically outputs structured data for articles, breadcrumbs, products, FAQ, and more. You can define content types inside the Schema tab without touching JSON-LD.",
  },
  {
    q: "Does Yoast SEO cover WooCommerce?",
    a: "The WooCommerce SEO add-on extends Yoast with product schema, optimized breadcrumbs, and custom structured data for ecommerce catalogs.",
  },
  {
    q: "Is Yoast SEO good for agencies?",
    a: "Absolutely. Agencies rely on Yoast to enforce content briefs, check readability, and keep clients aligned on SEO basics even when they publish themselves.",
  },
  {
    q: "Will Yoast SEO conflict with other plugins?",
    a: "Yoast plays well with caching, page builders, and multilingual plugins. You should disable other XML sitemap or schema generators to avoid duplication.",
  },
  {
    q: "Does Yoast SEO replace keyword research?",
    a: "No. Yoast helps you optimize pages you already plan to target. Pair it with tools like Ahrefs, Semrush, or Google Keyword Planner for research and strategy.",
  },
];

function YoastSeoToolPage() {
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
        "Yoast SEO remains the go-to WordPress SEO plugin thanks to its trusted on-page analysis, schema automation, and extensive training. Bloggers, agencies, and WooCommerce stores adopt it to standardize SEO best practices without code.",
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
      icon: <Sparkles className="h-5 w-5 text-purple-500" />,
      title: "On-page SEO & readability analysis",
      body: "Yoast’s traffic lights coach writers on keyword usage, headings, internal links, sentence length, and passive voice so every post ships with consistent on-page quality.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-500" />,
      title: "Schema automation & rich results",
      body: "Define page types, add FAQ or HowTo blocks, and Yoast outputs structured data automatically—no JSON editing required.",
    },
    {
      icon: <Layers3 className="h-5 w-5 text-amber-500" />,
      title: "XML sitemaps & technical controls",
      body: "Yoast manages XML sitemaps, robots meta, canonical URLs, breadcrumbs, and indexing toggles for archives or taxonomies.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-sky-500" />,
      title: "Internal linking and insights",
      body: "Premium highlights related articles, suggests anchor text, and shows top phrases per article to improve topical authority.",
    },
    {
      icon: <Plug className="h-5 w-5 text-rose-500" />,
      title: "Integrations & extensions",
      body: "Connect with Semrush for keyword ideas, Zapier for editorial workflows, and add-ons for WooCommerce, Local SEO, and Video SEO.",
    },
    {
      icon: <BookOpenCheck className="h-5 w-5 text-indigo-500" />,
      title: "Academy and content briefs",
      body: "Yoast Academy courses train teams on SEO fundamentals. Premium briefs inside WordPress remind authors of focus keywords, synonyms, and structure.",
    },
  ];

  const pricingTable = [
    { plan: "Free", best: "Bloggers & small sites", limits: "1 focus keyphrase, core on-page checks, XML sitemap", price: "$0" },
    { plan: "Yoast SEO Premium", best: "Content teams & agencies", limits: "Multiple keywords, redirects, internal linking, schema blocks", price: "$99/year/site" },
    { plan: "WooCommerce / Local / Video SEO add-ons", best: "Stores & local businesses", limits: "Product schema, local structured data, video XML sitemaps", price: "$79–$149/year/extension" },
    { plan: "Yoast SEO for Shopify", best: "Merchants on Shopify", limits: "Content analysis inside Shopify, templates, structured data", price: "$19/month" },
  ];

  const pros = [
    "Best-known WordPress SEO brand with 10M+ installs and constant updates.",
    "Traffic-light guidance keeps writers aligned on readability and keyword usage.",
    "Automatic schema, XML sitemaps, breadcrumbs, and canonical handling.",
    "Redirect manager, internal linking suggestions, and orphaned content insights in Premium.",
    "WooCommerce, Local, and Video add-ons cover specialized structured data.",
    "Strong documentation, Yoast Academy, and community support.",
  ];

  const cons = [
    "Premium license is per site, which can add up for large agency portfolios.",
    "Interface can feel heavy in the editor compared with leaner plugins.",
    "Free version only allows one focus keyword and lacks redirect management.",
    "Advanced schema customization still limited versus custom JSON-LD setups.",
  ];

  const useCases = [
    "Bloggers optimizing articles and pillar pages directly inside WordPress.",
    "Agencies enforcing on-page SEO checklists for client content teams.",
    "Ecommerce and WooCommerce stores improving product metadata and breadcrumbs.",
    "Publishers shipping FAQ, HowTo, and news content with valid schema.",
    "Local businesses adding NAP schema and location pages through add-ons.",
    "Marketing teams training junior writers via Yoast Academy and readability scoring.",
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Hands-on Yoast SEO review covering pricing, premium features, pros & cons, top alternatives like Rank Math, and whether Yoast is still the best WordPress SEO plugin."
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
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-amber-50" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-purple-300/30 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-amber-300/25 blur-3xl" />
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
                  <div className="absolute -left-10 top-12 h-20 w-20 rounded-full bg-white blur-3xl" />
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-amber-200 blur-3xl" />
                </div>
                <div className="relative flex items-center gap-3">
                  <div className="h-14 w-14 overflow-hidden rounded-xl bg-white/20 ring-2 ring-white/40">
                    <img src={brandMeta.logo} alt={`${toolName} logo`} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/80">Featured Tool</p>
                    <p className="text-xl font-bold">{toolName}</p>
                  </div>
                </div>
                <p className="relative mt-4 text-sm leading-relaxed text-white/90">
                  Yoast SEO still sets the standard for WordPress on-page guidance, schema automation, and editorial training. It helps marketers keep every post optimized even when multiple authors ship content daily.
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
              Yoast SEO is the most widely installed {category.toLowerCase()}, giving WordPress users a dashboard for metadata, schema, readability, and indexing controls. It bundles technical SEO settings (XML sitemaps,
              canonical URLs) with content analysis, so writers and developers stay aligned.
            </p>
            <p className="mt-3 text-slate-700">
              Marketing teams lean on Yoast to guide freelancers, ensure keyword usage is intentional, and keep category archives or media attachments from causing duplicate content. Agencies love the built-in redirect
              manager and orphaned content alerts that surface quick wins.
            </p>
            <p className="mt-3 text-slate-700">Yoast SEO Premium adds AI-driven linking, schema blocks, and 24/7 support—useful when you manage multiple brands or ecommerce catalogs.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Yoast SEO is ideal for teams publishing on WordPress who need built-in guardrails.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {useCases.map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-purple-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">These capabilities keep Yoast ahead in the WordPress SEO space.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {featureBlocks.map((feature) => (
                <div key={feature.title} className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center gap-3 text-slate-900">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">{feature.icon}</div>
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
                  Yoast SEO keeps it simple: free plugin for fundamentals, Premium per site for advanced tooling, and optional add-ons for WooCommerce, Local, Video, and News SEO. Licenses include updates and support for one
                  year; renewals receive discounts.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Most sites start free → Premium once redirects, internal linking, or multiple keyphrases matter.</p>
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
                  {pricingTable.map((row, idx) => (
                    <tr key={row.plan} className={idx % 2 ? "bg-slate-50/60" : "bg-white"}>
                      <td className="px-4 py-3 font-semibold text-slate-900">{row.plan}</td>
                      <td className="px-4 py-3">{row.best}</td>
                      <td className="px-4 py-3">{row.limits}</td>
                      <td className="px-4 py-3">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Agencies managing many domains can bundle licenses or switch to Yoast Premium agencies program for bulk discounts. Always budget add-ons (Local, WooCommerce, Video) if those rich results matter.
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
                  {pros.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  {cons.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Yoast SEO dominates WordPress, but other plugins cater to developers or advanced schema needs. Evaluate these before standardizing your stack.
            </p>
            <p className="mt-2 text-slate-700">Each card links to a detailed GoDigitalPro review.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison available." : "Popular SEO/keyword alternative."}</p>
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
            <p className="text-slate-700">Compare Yoast SEO with its closest WordPress rivals.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Rank Math vs All in One SEO</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/yoast-seo-vs-rank-math-vs-all-in-one-seo">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Rank Math emphasizes automation and unlimited keywords, All in One SEO keeps things lightweight, and Yoast balances training with trusted defaults. Read the dedicated comparison for pricing, schema, and
                performance notes.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs SEOPress vs Rank Math</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/yoast-seo-vs-seopress-vs-rank-math">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                SEOPress appeals to developers with white-label branding and API access. Rank Math doubles down on automation. Yoast focuses on editorial guardrails. Dive into the comparison to see which fits your workflow.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If your team publishes in WordPress and needs consistent SEO hygiene, Yoast is worth it. The free tier covers basics, while Premium’s redirects, schema enhancements, and linking assistants pay for themselves
              after a few saved hours.
            </p>
            <p className="mt-3 text-slate-700">
              Go with Rank Math or SEOPress if you want native redirection and unlimited keywords without per-site fees, or if you need more API control. Choose Yoast when you prioritize training, documentation, and proven
              defaults that content teams already understand.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Yoast SEO stays the safest pick for most WordPress publishers who want reliable SEO guardrails without deep configuration.
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
              Choose Yoast SEO if you want a battle-tested plugin that enforces good habits, adds schema, and gives your WordPress authors instant feedback. Premium unlocks deeper automation without changing your workflow.
            </p>
            <p>
              Consider Rank Math or SEOPress if you crave unlimited keyword analysis, white labeling, or API hooks. Pair Yoast with Semrush or Surfer if you need advanced keyword research or content scoring.
            </p>
            <p>Yoast fits naturally into most marketing stacks because it ships with sensible defaults, integrates with editorial tools, and keeps technical SEO under control.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for your stack, you can explore it here:{" "}
              <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>
                Visit {toolName}
              </a>
              .
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-sky-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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
      <button type="button" onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-900">
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

export default YoastSeoToolPage;
