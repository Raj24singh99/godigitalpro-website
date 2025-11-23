import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, BarChart3, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "All in One SEO";
const slug = "all-in-one-seo";
const category = "WordPress SEO plugin";
const shortPitch =
  "All in One SEO (AIOSEO) is a WordPress plugin that helps site owners optimize on-page SEO, technical foundations, and local search without heavy manual setup.";
const pricingSummary = "Basic starts near $49/year for one site; Pro tiers add schema, redirects, link assistant, WooCommerce SEO, and local SEO modules.";
const officialUrl = "https://aioseo.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/aioseo.com",
  gradient: "from-sky-500 via-blue-600 to-slate-800",
  glow: "shadow-[0_20px_80px_rgba(37,99,235,0.24)]",
};

const alternatives = [
  { name: "Yoast SEO", slug: "yoast-seo" },
  { name: "Rank Math", slug: "rank-math" },
  { name: "SEOPress", slug: "seopress" },
  { name: "Semrush", slug: "semrush" },
  { name: "Surfer SEO", slug: "surfer-seo" },
];

const faqs = [
  { q: "Is All in One SEO free?", a: "There’s a free version covering on-page basics, sitemaps, and search appearance. Paid plans add schema, redirects, link assistant, WooCommerce, and local SEO modules." },
  { q: "Who is AIOSEO best for?", a: "WordPress site owners, bloggers, and WooCommerce stores that want guided SEO setup, technical fixes, and schema without code." },
  { q: "Does AIOSEO help with schema?", a: "Yes. It supports FAQ, HowTo, product, article, event, video, and local schema with templates to speed up rich result eligibility." },
  { q: "Does AIOSEO work for ecommerce?", a: "AIOSEO has WooCommerce SEO settings, breadcrumbs, product schema, and dynamic meta templates tuned for stores." },
  { q: "How is AIOSEO vs Yoast?", a: "AIOSEO offers a modern UI, link assistant, and strong local SEO module. Yoast is the legacy option with wide adoption. Both cover core SEO; AIOSEO can feel lighter and more guided." },
  { q: "Is AIOSEO beginner friendly?", a: "Yes. The onboarding wizard, SEO checklist, and TruSEO score give guidance. Defaults cover XML sitemaps, robots, and canonical tags out of the box." },
  { q: "Does AIOSEO integrate with other tools?", a: "It integrates with Google Search Console, Google Analytics, WooCommerce, and page builders (Elementor, Divi, Gutenberg) and works alongside caching/CDN plugins." },
  { q: "Is AIOSEO secure and maintained?", a: "AIOSEO is actively maintained with regular updates, security fixes, and documentation. Backups and staging tests are still recommended when changing SEO plugins." },
];

function AioseoToolPage() {
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
        "All in One SEO modernizes WordPress SEO setup with guided checklists, schema templates, redirects, and local SEO. Pricing stays reasonable for solopreneurs and small agencies supporting client sites.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
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
      icon: <Sparkles className="h-5 w-5 text-sky-500" />,
      title: "TruSEO and on-page guidance",
      body: "Real-time SEO checklist and TruSEO scores help optimize titles, meta descriptions, readability, and keyphrase usage without guesswork.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-emerald-500" />,
      title: "Schema and rich results",
      body: "FAQ, HowTo, product, article, event, and video schema templates make it easy to earn rich snippets. Local schema supports maps and NAP consistency.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-amber-500" />,
      title: "Sitemaps and technical SEO",
      body: "XML, video, news, and RSS sitemaps, canonical controls, robots meta, and redirects cover most technical SEO hygiene for WordPress.",
    },
    {
      icon: <Plug className="h-5 w-5 text-indigo-500" />,
      title: "Integrations with builders and analytics",
      body: "Works with Gutenberg, Elementor, Divi, WooCommerce, Google Search Console, and GA to keep analytics and SEO aligned.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Redirection and link assistant",
      body: "404 monitoring, bulk redirects, internal link suggestions, and orphaned content detection reduce SEO drift over time.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Local SEO and WooCommerce",
      body: "Local business schema, maps embeds, store hours, and WooCommerce SEO settings help stores and local businesses rank accurately.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="All in One SEO (AIOSEO) review for 2025 covering pricing, features, schema, local SEO, pros & cons, and alternatives like Yoast and Rank Math."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-sky-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-slate-400/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-sky-600" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-blue-200 blur-3xl" />
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
                  AIOSEO provides guided SEO setup, schema, redirects, and local SEO for WordPress sites so marketers can ship optimizations faster.
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
              All in One SEO is a {category.toLowerCase()} that streamlines technical and on-page SEO for WordPress. It covers titles, meta, sitemaps, schema, redirects, and local SEO so teams avoid manual configuration.
            </p>
            <p className="mt-3 text-slate-700">
              Bloggers, small businesses, agencies, and ecommerce brands use AIOSEO to keep search basics healthy, ship schema quickly, and prevent redirect or 404 issues as content changes.
            </p>
            <p className="mt-3 text-slate-700">
              Compared to hand-tuning code, AIOSEO’s guided wizard and checklists reduce mistakes and help non-technical marketers manage SEO confidently.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} fits WordPress users who want quick, guided SEO setup.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Bloggers and publishers wanting rich snippets and reliable sitemaps.",
                "Small businesses and local brands needing map packs and NAP consistency.",
                "Agencies standardizing SEO across multiple WordPress client sites.",
                "Ecommerce stores using WooCommerce and needing product schema + breadcrumbs.",
                "Content teams that want on-page guidance without custom dev work.",
                "Site owners migrating from other plugins and needing redirect + 404 handling.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-500" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">AIOSEO bundles on-page guidance, schema, redirects, and local SEO to cover most WordPress SEO needs.</p>
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
                  Basic is affordable for one site and covers TruSEO, sitemaps, and on-page basics. Pro tiers add schema, redirects, link assistant, WooCommerce SEO, video/news sitemaps, and local SEO. Agencies can opt for plans covering multiple sites.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Use Basic for a single blog. Choose Pro for WooCommerce, schema depth, and redirects. Agencies should pick a multi-site tier.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Basic</td>
                    <td className="px-4 py-3">Single-site bloggers and small biz</td>
                    <td className="px-4 py-3">Core on-page, sitemaps, TruSEO, limited schema</td>
                    <td className="px-4 py-3">~$49/year</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Plus/Pro</td>
                    <td className="px-4 py-3">Growing sites and WooCommerce stores</td>
                    <td className="px-4 py-3">Redirects, link assistant, advanced schema, local SEO</td>
                    <td className="px-4 py-3">$199–$299/year (bill annually)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Agency</td>
                    <td className="px-4 py-3">Agencies managing multiple sites</td>
                    <td className="px-4 py-3">Higher site limits, client reporting, priority support</td>
                    <td className="px-4 py-3">Varies by site count</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Pricing is billed annually. Factor in site count and whether you need WooCommerce or local SEO modules when choosing a tier.
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
                  <li>Guided setup and TruSEO scores make on-page easy.</li>
                  <li>Strong schema support (FAQ, HowTo, product, local, video).</li>
                  <li>Redirect manager, 404 monitoring, and link assistant reduce SEO drift.</li>
                  <li>WooCommerce SEO options and breadcrumbs for ecommerce.</li>
                  <li>Local SEO module simplifies map pack readiness.</li>
                  <li>Modern UI that feels lighter than some alternatives.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Annual billing may feel rigid for short-term sites.</li>
                  <li>Advanced AI writing or content scoring require pairing with other tools.</li>
                  <li>Switching SEO plugins needs careful migration of metadata and redirects.</li>
                  <li>Large multisite networks might still need enterprise SEO oversight.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              AIOSEO balances usability and depth. Some teams prefer Yoast’s familiarity, Rank Math’s pricing, or pairing on-page plugins with off-page suites like Semrush.
            </p>
            <p className="mt-2 text-slate-700">All are viable SEO options; choose based on UI preference, pricing, and feature depth.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same space.</p>
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
            <p className="text-slate-700">Here’s how AIOSEO compares to two leading WordPress SEO plugins.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Yoast SEO</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/yoast-seo-vs-rank-math-vs-all-in-one-seo">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Yoast is the classic, widely adopted plugin with strong content analysis. AIOSEO offers a fresher UI, link assistant, and robust local SEO out of the box.
              </p>
              <p className="mt-2 text-slate-700">
                Choose Yoast if you want the most common plugin and extensive third-party tutorials; choose AIOSEO if you want a guided wizard, link features, and faster setup.
              </p>
              <p className="mt-2 text-slate-900">Both handle core SEO; AIOSEO can feel lighter for non-technical marketers.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Rank Math</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/seopress-vs-yoast-vs-all-in-one-seo">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Rank Math is feature-packed and generous on free/Pro pricing. AIOSEO emphasizes ease, local SEO, and link assistant while keeping pricing predictable for agencies.
              </p>
              <p className="mt-2 text-slate-700">
                Choose Rank Math for aggressive pricing and lots of toggles; choose AIOSEO for streamlined setup and balanced defaults that play nicely with page builders.
              </p>
              <p className="mt-2 text-slate-900">If you need pure content scoring, pair either plugin with Surfer SEO or Semrush.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              For WordPress users who want guided SEO, schema, redirects, and local optimization in one plugin, AIOSEO is worth the spend. It reduces setup time and keeps technical SEO from slipping through the cracks.
            </p>
            <p className="mt-3 text-slate-700">
              If you prefer the most widely adopted option, Yoast is solid. If you want an aggressive feature-to-price ratio, check Rank Math. But AIOSEO offers a great balance of usability, local SEO, and link management.
            </p>
            <p className="mt-3 font-semibold text-slate-900">Verdict: Excellent choice for WordPress SEO when you want modern UX, schema depth, and redirects without custom code.</p>
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
            <p>Choose AIOSEO if you want guided WordPress SEO with schema, redirects, and local SEO packaged together.</p>
            <p>Consider Yoast for legacy familiarity or Rank Math for aggressive pricing; add Surfer SEO or Semrush if you want content scoring.</p>
            <p>AIOSEO works smoothly with caching/CDN plugins and page builders when configured correctly.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for your stack, you can try it here:{" "}
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
      {open && <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">{answer}</div>}
    </div>
  );
}

export default AioseoToolPage;
