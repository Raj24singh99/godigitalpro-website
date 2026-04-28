import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Settings2, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "SEOPress";
const slug = "seopress";
const category = "WordPress SEO plugin";
const shortPitch = "SEOPress is a lightweight WordPress SEO plugin for metadata, sitemaps, schema, redirection, and content analysis without bloat.";
const pricingSummary = "Free core plugin; Pro around $49/yr for unlimited sites with schema, redirections, WooCommerce SEO, and more.";
const officialUrl = "https://www.seopress.org";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/seopress.org",
  gradient: "from-emerald-500 via-teal-500 to-blue-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.22)]",
};

const alternatives = [
  { name: "Yoast SEO", slug: "yoast-seo" },
  { name: "Rank Math", slug: "rank-math" },
  { name: "All in One SEO", slug: "all-in-one-seo" },
  { name: "Semrush", slug: "semrush" },
  { name: "Ubersuggest", slug: "ubersuggest" },
];

const faqs = [
  { q: "Is SEOPress free?", a: "Yes. SEOPress has a free version covering core SEO settings. Pro (around $49/year) adds schema, redirections, breadcrumbs, WooCommerce, and more." },
  { q: "Does SEOPress slow down WordPress?", a: "It’s lightweight and avoids bloat; it’s generally lighter than some popular SEO plugins. Always test on staging after major changes." },
  { q: "Can SEOPress generate schema?", a: "Yes. SEOPress Pro provides schema templates (Article, Product, FAQ, HowTo, Local) and custom schema builder for advanced setups." },
  { q: "Does SEOPress support WooCommerce?", a: "Pro adds WooCommerce SEO, product schema, and breadcrumbs for ecommerce stores." },
  { q: "How does SEOPress compare to Yoast or Rank Math?", a: "SEOPress is lighter with a single fee for unlimited sites. Yoast has a rich UI and add-ons; Rank Math has a generous free tier with AI tools. Pick based on UI preference and feature needs." },
  { q: "Can I migrate from Yoast/Rank Math?", a: "Yes. SEOPress imports settings, meta, and redirects from Yoast, Rank Math, and others to simplify switching." },
  { q: "Does SEOPress handle redirects?", a: "SEOPress Pro includes 301/302/307 redirects and 404 monitoring so you can manage migrations without extra plugins." },
  { q: "Is there white-labeling?", a: "Yes. SEOPress Pro offers white-label mode, useful for agencies who want client-friendly branding in WordPress." },
];

function SEOPressToolPage() {
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
        "SEOPress is a lightweight WordPress SEO plugin with strong schema, redirects, and white-labeling. Agencies like its pricing and clean interface compared to bulkier plugins.",
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
    { icon: <Settings2 className="h-5 w-5 text-emerald-500" />, title: "Metadata & sitemaps", body: "Control titles, meta descriptions, XML/HTML sitemaps, robots, and indexing rules without bloat." },
    { icon: <ClipboardList className="h-5 w-5 text-indigo-500" />, title: "Content analysis", body: "On-page checks for keywords, readability, and schema to guide authors before publishing." },
    { icon: <Sparkles className="h-5 w-5 text-sky-500" />, title: "Schema builder", body: "Prebuilt Article, Product, FAQ, HowTo, Local schema plus a builder for custom JSON-LD." },
    { icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />, title: "Redirections & 404 monitoring", body: "Manage 301/302/307 redirects, catch 404s, and smooth migrations without extra plugins." },
    { icon: <Plug className="h-5 w-5 text-amber-500" />, title: "WooCommerce SEO", body: "Product schema, breadcrumbs, and clean product metadata for ecommerce stores." },
    { icon: <Rocket className="h-5 w-5 text-rose-500" />, title: "White-label for agencies", body: "Brand the plugin for clients and manage unlimited sites with one license." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="SEOPress review for 2025 covering pricing, features, schema builder, redirects, pros/cons, and alternatives like Yoast or Rank Math."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-emerald-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-300/20 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-sky-300/20 blur-3xl" />
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
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -left-8 top-10 h-20 w-20 rounded-full bg-white blur-3xl" />
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-emerald-200 blur-3xl" />
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
                  SEOPress gives WordPress sites clean SEO controls, schema, and redirects without slowing down the dashboard—ideal for agencies and site owners who dislike bloat.
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
              {toolName} is a WordPress SEO plugin that covers metadata, sitemaps, schema, redirects, and content analysis. It competes with Yoast and Rank Math while staying lightweight and affordable.
            </p>
            <p className="mt-3 text-slate-700">
              Agencies prefer it for unlimited-site licensing, white-label options, and migration tools from other plugins. Store owners like its WooCommerce schema and breadcrumbs.
            </p>
            <p className="mt-3 text-slate-700">
              If you want control without add-on upsells or bloat, SEOPress is a strong pick. If you need built-in AI writing or guided setup, Rank Math/Yoast may appeal more.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">SEOPress fits WordPress users who want lean controls and agency-friendly pricing.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "WordPress site owners who want a lightweight SEO plugin.",
                "Agencies managing many sites that need white-label and unlimited licensing.",
                "Content teams needing schema and on-page checks without bloat.",
                "WooCommerce stores wanting product schema and breadcrumbs.",
                "Marketers migrating from Yoast or Rank Math with minimal friction.",
                "Developers who want clean settings and custom schema flexibility.",
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
            <p className="mt-3 text-slate-700">SEOPress keeps WordPress SEO simple while including schema, redirects, and ecommerce coverage.</p>
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
                <p className="mt-2 text-slate-700">Free core plugin; Pro around $49/year for unlimited sites, with a higher-tier plan for extra support and features.</p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start free; upgrade to Pro for schema, redirects, WooCommerce SEO, and white-label if you manage clients.</p>
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
                    <td className="px-4 py-3">Small sites and blogs</td>
                    <td className="px-4 py-3">Meta, sitemaps, robots, basic analysis</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Serious sites & agencies</td>
                    <td className="px-4 py-3">Schema builder, redirects, WooCommerce, breadcrumbs, white-label</td>
                    <td className="px-4 py-3">~$49/yr</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business</td>
                    <td className="px-4 py-3">High-touch support needs</td>
                    <td className="px-4 py-3">Priority support, advanced schema/analytics options</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">The unlimited-site license makes SEOPress attractive for agencies; competitors often charge per site or add-ons for advanced features.</p>
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
                  <li>Lightweight with a clean UI and unlimited-site licensing.</li>
                  <li>Strong schema support and custom JSON-LD builder.</li>
                  <li>Redirects and 404 monitoring included—no extra plugin.</li>
                  <li>White-label mode for agencies and freelancers.</li>
                  <li>WooCommerce SEO coverage for product schema.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Fewer built-in AI/content suggestions than Rank Math.</li>
                  <li>Smaller ecosystem/tutorial volume than Yoast.</li>
                  <li>Some advanced schema use cases need manual tuning.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare SEOPress with other WordPress SEO plugins and SEO suites if you need different pricing or features.</p>
            <p className="mt-2 text-slate-700">All of these handle titles, sitemaps, and schema; differences are in UI, add-ons, and ecosystem.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
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
            <p className="text-slate-700">Here’s how {toolName} compares to other WordPress SEO plugins.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Yoast vs Rank Math</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/compare/seopress-vs-yoast-vs-rank-math">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Yoast has the largest ecosystem and training; Rank Math offers generous free limits and AI assists. SEOPress is lighter with an unlimited-site license and white-label options.
              </p>
              <p className="mt-2 text-slate-900">Choose {toolName} for lean performance and agency pricing; choose Yoast for familiarity; choose Rank Math for AI and a rich free tier.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Yoast vs All in One SEO</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/compare/seopress-vs-yoast-vs-all-in-one-seo">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                All in One SEO is feature-rich with addons; Yoast offers tutorials and readability guidance. SEOPress stays lean, affordable, and white-label friendly for agencies.
              </p>
              <p className="mt-2 text-slate-900">Choose {toolName} if you want unlimited sites and low overhead; choose Yoast/AIOSEO if you prefer their ecosystems and guided setups.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you want a fast, affordable WordPress SEO plugin with schema, redirects, and white-labeling, SEOPress is worth it—especially for agencies managing many sites.
            </p>
            <p className="mt-3 text-slate-700">If you prefer guided content analysis or AI writing, Rank Math or Yoast may fit better. Otherwise, SEOPress offers great value with clean performance.</p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> SEOPress is a top pick for lightweight, agency-friendly WordPress SEO.
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
            <p>Choose {toolName} for lean performance, schema flexibility, redirects, and unlimited-site licensing. It’s ideal for agencies, freelancers, and store owners who dislike bloat.</p>
            <p>Consider Rank Math or Yoast if you want heavier guidance, AI tools, or prefer their ecosystems. All in One SEO is another solid full-featured option.</p>
            <p>{toolName} fits nicely alongside analytics, caching, and ecommerce plugins without slowing down your stack.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your site, you can try it here:{" "}
              <a className="text-emerald-700 hover:text-emerald-600" href={officialUrl}>
                Visit {toolName}
              </a>
              .
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

export default SEOPressToolPage;
