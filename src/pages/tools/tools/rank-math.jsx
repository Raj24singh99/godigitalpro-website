import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Settings2, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Rank Math";
const slug = "rank-math";
const category = "WordPress SEO plugin";
const shortPitch = "Rank Math is a feature-rich WordPress SEO plugin with schema, content analysis, redirects, sitemaps, and AI-assisted suggestions.";
const pricingSummary = "Free version with generous features; Pro from ~$59/year for more keywords, schema, WooCommerce, and AI/analytics extras.";
const officialUrl = "https://rankmath.com";
const ratingValue = 4.6;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/rankmath.com",
  gradient: "from-indigo-500 via-purple-500 to-pink-500",
  glow: "shadow-[0_20px_80px_rgba(99,102,241,0.22)]",
};

const alternatives = [
  { name: "Yoast SEO", slug: "yoast-seo" },
  { name: "SEOPress", slug: "seopress" },
  { name: "All in One SEO", slug: "all-in-one-seo" },
  { name: "Semrush", slug: "semrush" },
  { name: "Ubersuggest", slug: "ubersuggest" },
];

const faqs = [
  { q: "Is Rank Math free?", a: "Yes. The free version is very generous with schema, redirects, and on-page analysis. Pro adds more keywords, tracking, WooCommerce SEO, and AI features." },
  { q: "Does Rank Math support schema?", a: "Yes. It includes schema templates (Article, Product, FAQ, HowTo, Local, etc.) plus custom schema for advanced setups." },
  { q: "How does Rank Math compare to Yoast?", a: "Rank Math offers more features in its free tier and a modern UI. Yoast has a long-standing ecosystem and training. Choose based on UI preference and needs." },
  { q: "Is Rank Math good for WooCommerce?", a: "Yes. Pro adds WooCommerce SEO, product schema, and enhanced breadcrumbs for ecommerce sites." },
  { q: "Does Rank Math include redirects?", a: "Yes. Redirects and 404 monitoring are included so you can manage migrations without extra plugins." },
  { q: "Does Rank Math slow down sites?", a: "It is designed to be lightweight; avoid enabling modules you don’t need and test on staging after major changes." },
  { q: "Is there AI support?", a: "Yes. Rank Math has an AI assistant for content suggestions on higher tiers." },
  { q: "Can I migrate from Yoast/SEOPress?", a: "Yes. Import tools help move metadata and settings from other plugins with minimal friction." },
];

function RankMathToolPage() {
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
        "Rank Math is a powerful WordPress SEO plugin with robust schema, redirects, and on-page analysis—offering a strong free tier and WooCommerce support on paid plans.",
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
    { icon: <Settings2 className="h-5 w-5 text-indigo-500" />, title: "On-page SEO analysis", body: "Content analysis, readability checks, and keyword suggestions to guide authors." },
    { icon: <Sparkles className="h-5 w-5 text-pink-500" />, title: "Schema and rich snippets", body: "Built-in schema templates and custom schema builder for rich results (FAQ, HowTo, Product, Local, etc.)." },
    { icon: <ClipboardList className="h-5 w-5 text-emerald-500" />, title: "Sitemaps & indexing controls", body: "XML sitemaps, robots/meta controls, and instant indexing options." },
    { icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />, title: "Redirects & 404 monitor", body: "Manage redirects and fix 404s without extra plugins." },
    { icon: <Plug className="h-5 w-5 text-amber-500" />, title: "WooCommerce SEO", body: "Product schema, breadcrumbs, and metadata enhancements for ecommerce (Pro)." },
    { icon: <Rocket className="h-5 w-5 text-rose-500" />, title: "Analytics & AI assists", body: "Search Console/Analytics integration and AI suggestions on higher tiers." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Rank Math review for 2025 covering pricing, schema, redirects, on-page analysis, pros/cons, and alternatives like Yoast or SEOPress."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-indigo-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-pink-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-indigo-500" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-pink-200 blur-3xl" />
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
                  Rank Math combines schema, redirects, on-page guidance, and WooCommerce SEO in a modern interface with a strong free tier.
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
              {toolName} is a WordPress SEO plugin covering on-page analysis, schema, sitemaps, redirects, and WooCommerce SEO. It competes with Yoast and SEOPress, often offering more in its free tier.
            </p>
            <p className="mt-3 text-slate-700">
              Marketers use it to guide authors, automate technical SEO, and add schema without code. Pro adds analytics, AI assists, and WooCommerce enhancements.
            </p>
            <p className="mt-3 text-slate-700">{toolName} is a strong choice if you want a powerful yet approachable WordPress SEO plugin with a generous free tier.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} fits WordPress users who want robust SEO features without many add-ons.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Bloggers and content teams needing on-page guidance and schema.",
                "Agencies managing multiple client sites with strong free features.",
                "WooCommerce stores needing product schema and breadcrumbs.",
                "Site owners migrating from other plugins seeking a modern UI.",
                "Marketers wanting redirects and 404 monitoring without extra plugins.",
                "Teams interested in AI suggestions and integrated analytics (Pro).",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-indigo-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">Rank Math focuses on on-page guidance, schema, technical controls, and ecommerce SEO.</p>
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
                <p className="mt-2 text-slate-700">Free tier is robust. Pro starts near $59/year for more keyword credits, schema, WooCommerce SEO, and analytics/AI features. Business/Agency tiers add more sites and support.</p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start free; upgrade to Pro for WooCommerce, advanced schema, and tracking; choose Agency if managing many client sites.</p>
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
                    <td className="px-4 py-3">Small sites & blogs</td>
                    <td className="px-4 py-3">On-page analysis, schema templates, redirects</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Growing sites</td>
                    <td className="px-4 py-3">More keywords, advanced schema, WooCommerce SEO</td>
                    <td className="px-4 py-3">~$59/yr</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business</td>
                    <td className="px-4 py-3">Agencies & multi-site</td>
                    <td className="px-4 py-3">More sites, analytics, AI credits, priority support</td>
                    <td className="px-4 py-3">Varies</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Agency</td>
                    <td className="px-4 py-3">Large client portfolios</td>
                    <td className="px-4 py-3">Highest limits, advanced support, white-label</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Rank Math’s free tier is strong; Pro/Business add WooCommerce, schema depth, and analytics that agencies value.</p>
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
                  <li>Generous free tier with schema, redirects, and analysis.</li>
                  <li>Modern UI with modular features.</li>
                  <li>WooCommerce SEO support on paid tiers.</li>
                  <li>Custom schema and rich snippet options.</li>
                  <li>Analytics/AI assists to guide content and fixes.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>More features than some users need; can feel busy.</li>
                  <li>AI and advanced analytics limited to paid tiers.</li>
                  <li>Schema customization still requires attention to detail.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare Rank Math with other WordPress SEO plugins and SEO suites depending on features and budget.</p>
            <p className="mt-2 text-slate-700">All of these offer meta, sitemaps, and schema; they differ on UI, pricing, and ecosystem.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
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
            <p className="text-slate-700">Here’s how {toolName} compares to popular WordPress SEO plugins.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Yoast vs SEOPress</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/compare/yoast-seo-vs-seopress-vs-rank-math">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Rank Math offers more features free; Yoast has the largest ecosystem and training; SEOPress is lightweight and white-label friendly. Choose based on UI, performance needs, and pricing.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Yoast vs All in One SEO</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/compare/yoast-seo-vs-rank-math-vs-all-in-one-seo">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                All in One SEO packs many features; Yoast is familiar; Rank Math balances depth with a generous free tier and WooCommerce perks. Pick based on which UI and pricing fit best.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              For most WordPress sites, Rank Math is worth it thanks to its strong free tier, schema, redirects, and WooCommerce support. It reduces plugin clutter and guides authors effectively.
            </p>
            <p className="mt-3 text-slate-700">If you prefer Yoast’s ecosystem/tutorials or SEOPress’s lightweight/white-label approach, those are solid alternatives. Otherwise, Rank Math offers great value.</p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> {toolName} is a top-choice WordPress SEO plugin with generous features and modern UX.
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
            <p>Choose {toolName} for a powerful, modern WordPress SEO plugin with strong free features and WooCommerce support. It’s great for bloggers, agencies, and stores.</p>
            <p>Consider Yoast for ecosystem/training or SEOPress for lightweight white-label needs. All in One SEO is another full-featured option.</p>
            <p>{toolName} fits neatly alongside caching, analytics, and content workflows to keep SEO in control.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your site, you can try it here:{" "}
              <a className="text-indigo-700 hover:text-indigo-600" href={officialUrl}>
                Visit {toolName}
              </a>
              .
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

export default RankMathToolPage;
