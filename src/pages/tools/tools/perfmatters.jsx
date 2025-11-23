import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Gauge, Cpu, BarChart2, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Perfmatters";
const slug = "perfmatters";
const category = "WordPress Performance";
const shortPitch =
  "Perfmatters is a lightweight WordPress performance plugin that disables bloat, controls scripts, and optimizes assets to improve Core Web Vitals alongside your cache/host.";
const pricingSummary = "Licenses from about $24.95/year for one site, with multi-site and unlimited plans for agencies and publishers.";
const officialUrl = "https://perfmatters.io";
const ratingValue = 4.6;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/perfmatters.io",
  gradient: "from-sky-500 via-indigo-500 to-purple-500",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.25)]",
};

const alternatives = [
  { name: "WP Rocket", slug: "wp-rocket" },
  { name: "Cloudways", slug: "cloudways" },
  { name: "SiteGround", slug: "siteground" },
  { name: "Kinsta", slug: "kinsta" },
  { name: "WPRocket vs Perfmatters vs Cloudways", slug: "compare/wp-rocket-vs-perfmatters-vs-cloudways", isComparison: true },
  { name: "WPRocket vs Perfmatters vs SiteGround Optimizer", slug: "compare/wp-rocket-vs-perfmatters-vs-siteground", isComparison: true },
];

const faqs = [
  { q: "Does Perfmatters replace caching plugins?", a: "No. Perfmatters focuses on script management and bloat control. Pair it with a caching plugin or host-level cache for best results." },
  { q: "What does the Script Manager do?", a: "It lets you disable JavaScript/CSS per page or post type, removing unused assets and improving LCP and CLS." },
  { q: "Will Perfmatters break my site?", a: "If you disable needed scripts, functionality can break. Test changes in staging or incrementally and use the built-in exclusions to stay safe." },
  { q: "Does Perfmatters handle images?", a: "It offers lazy-loading, CDN rewriting, and some media optimizations but is not a full image compression tool. Pair with an image optimizer if needed." },
  { q: "Is Perfmatters compatible with any host?", a: "Yes. It works on most WordPress hosts and is often paired with host caching (e.g., Cloudways, Kinsta, SiteGround)." },
  { q: "Does it improve Core Web Vitals?", a: "Yes. By removing unused scripts, optimizing assets, and delaying JS, Perfmatters helps LCP, FID, and CLS when configured correctly alongside caching." },
  { q: "Can agencies use Perfmatters?", a: "Yes. Multi-site and unlimited plans support agencies managing multiple client sites." },
  { q: "Is there support and documentation?", a: "Perfmatters includes detailed docs and support; most tweaks are explained with tooltips inside the dashboard." },
];

export default function ToolPage() {
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
        "Perfmatters trims WordPress bloat with script controls, asset optimization, and performance tweaks. It pairs with caching and good hosting to improve Core Web Vitals and speed.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };

  const featureBlocks = [
    {
      icon: <Gauge className="h-5 w-5 text-sky-500" />,
      title: "Script Manager",
      body: "Disable unused JS/CSS per page, post type, or device to cut payloads and improve LCP/CLS.",
    },
    {
      icon: <Cpu className="h-5 w-5 text-indigo-500" />,
      title: "Performance tweaks",
      body: "Delay JS, preload assets, control Heartbeat API, and reduce bloat from emojis/embeds for faster execution.",
    },
    {
      icon: <Plug className="h-5 w-5 text-emerald-600" />,
      title: "CDN and asset rewrites",
      body: "Rewrite static assets to CDN, host Google Fonts locally, and combine with caching for stronger global performance.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "Lazy load and media tools",
      body: "Lazy-load images, iframes, and videos, and swap YouTube iframes with placeholders to cut initial load weight.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Safe toggles with docs",
      body: "Each optimization includes explanations and safeguards so you can tune performance confidently.",
    },
    {
      icon: <BarChart2 className="h-5 w-5 text-purple-600" />,
      title: "Works with any cache/host",
      body: "Designed to complement WP Rocket, host caching (Cloudways, SiteGround), and CDNs for stack-wide improvements.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Detailed Perfmatters review for 2025 covering pricing, script management, Core Web Vitals impact, pros & cons, and the best alternatives like WP Rocket."
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
          <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-indigo-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-sky-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-sky-600" />
                {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">{toolName} Review (2025): Pricing, Pros & Cons</h1>
              <p className="mt-4 text-lg text-slate-600">{shortPitch}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-700">
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Our rating: {ratingValue}/5</span>
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Reviewed by GoDigitalPro • Updated May 2025</span>
              </div>
              <p className="mt-4 text-slate-700">{pricingSummary}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="btn btn-primary bg-sky-600 text-white ring-2 ring-sky-500 hover:bg-sky-700" href={officialUrl}>
                  Visit official website
                </a>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -left-8 top-10 h-20 w-20 rounded-full bg-white blur-3xl" />
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-indigo-200 blur-3xl" />
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
                  Perfmatters removes bloat, controls scripts, and adds targeted performance tweaks so WordPress sites hit better Core Web Vitals alongside caching and solid hosting.
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
              Perfmatters is a WordPress optimization plugin focused on script control and bloat reduction. It disables unneeded assets, delays JavaScript, rewrites CDNs, and adds targeted performance tweaks.
            </p>
            <p className="mt-3 text-slate-700">
              Unlike all-in-one caching plugins, Perfmatters complements caching and good hosting. It’s ideal for teams that want granular control over what loads on each page to improve Core Web Vitals.
            </p>
            <p className="mt-3 text-slate-700">
              Agencies use it across client sites to standardize performance, and publishers use Script Manager to reduce third-party overhead on key templates.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Use Perfmatters if you need granular control over performance beyond caching.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Agencies managing multiple WordPress sites that need consistent speed tweaks.",
                "Publishers reducing third-party bloat on article templates.",
                "Ecommerce stores trimming unused scripts and improving checkout speed.",
                "Site owners pairing host-level caching with deeper asset control.",
                "Teams chasing Core Web Vitals improvements without redesigning.",
                "Developers who want fine-grained toggles instead of heavy plugins.",
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
            <p className="mt-3 text-slate-700">Perfmatters targets the assets and settings that slow WordPress sites down.</p>
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
                  Pricing is license-based: single-site, multi-site, and unlimited site plans. All include the full feature set; agencies pick higher tiers for client coverage. Renewal discounts often apply.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Choose single-site for solo projects, multi-site for a small portfolio, unlimited for agencies and publishers.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Single Site</td>
                    <td className="px-4 py-3">Individual site owners</td>
                    <td className="px-4 py-3">1 site license, all features</td>
                    <td className="px-4 py-3">~$24.95/year</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Unlimited</td>
                    <td className="px-4 py-3">Agencies and publishers</td>
                    <td className="px-4 py-3">Unlimited sites, all features</td>
                    <td className="px-4 py-3">~$124.95/year</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              All plans include updates and support. Pick the license count that matches your site portfolio; upgrade as you add more projects.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-sky-50 p-5 shadow-sm ring-1 ring-sky-100">
                <div className="flex items-center gap-2 text-sky-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Granular script control to remove bloat.</li>
                  <li>Works alongside any caching/hosting setup.</li>
                  <li>Improves Core Web Vitals with targeted tweaks.</li>
                  <li>Lightweight plugin with clear documentation.</li>
                  <li>CDN rewrites and font hosting reduce external calls.</li>
                  <li>Licensing fits individuals through agencies.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Not a caching plugin—needs pairing with cache/host.</li>
                  <li>Misconfigured script disables can break functionality.</li>
                  <li>Limited built-in image compression; may need another tool.</li>
                  <li>Requires some testing to dial in optimal settings.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Here are common alternatives and complements. All links go to full review or comparison pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Open comparison page." : "View the full review and pricing details."}</p>
                  </div>
                  <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">Compare Perfmatters to caching plugins and host-level optimizers.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs WP Rocket vs Cloudways</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/wp-rocket-vs-perfmatters-vs-cloudways">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                WP Rocket handles caching and many optimizations, Cloudways adds server-level caching, and Perfmatters adds granular script control. The comparison shows how they stack and when to combine them.
              </p>
              <p className="mt-2 text-slate-900">Choose Perfmatters to trim bloat and control assets; combine with WP Rocket or host caching for best results.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs WP Rocket vs SiteGround Optimizer</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/wp-rocket-vs-perfmatters-vs-siteground">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                SiteGround Optimizer works only on SiteGround hosting, providing caching and media optimizations. Perfmatters adds per-site script control anywhere. WP Rocket is host-agnostic caching + optimizations.
              </p>
              <p className="mt-2 text-slate-900">Pick Perfmatters for granular control; WP Rocket for plug-and-play caching; SiteGround Optimizer if you’re on SiteGround.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              Yes—if you want to reduce WordPress bloat and improve Core Web Vitals beyond what caching can do. Perfmatters pairs well with caching plugins or host-level caches to squeeze out extra speed.
            </p>
            <p className="mt-3 text-slate-700">
              You’ll need to test settings, but the gains in LCP/CLS and overall snappiness are often worth the time, especially for ecommerce, publishers, and agencies.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Perfmatters is a top performance add-on for WordPress sites that need fine control over assets and scripts alongside caching and good hosting.
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
              Choose Perfmatters to control scripts, reduce bloat, and complement caching/hosting for faster WordPress sites. It’s especially valuable for sites with many plugins or third-party scripts.
            </p>
            <p>Pair it with WP Rocket or host-level caching for best results; add image optimization if you need compression beyond lazy-loading.</p>
            <p>Perfmatters is lightweight, well-documented, and scales from single sites to agency portfolios.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for your stack, try it here: <a className="text-sky-700 hover:text-sky-600" href={officialUrl}>Visit {toolName}</a>.
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
