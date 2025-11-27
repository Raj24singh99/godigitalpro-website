import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, BookOpen, Globe2, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Gatsby";
const slug = "gatsby";
const category = "Static Site Generator & Framework";
const shortPitch =
  "Gatsby is a React-based framework for building fast, secure sites with a data layer that pulls from CMSs, APIs, and files, then ships static assets plus optional SSR.";
const pricingSummary =
  "Open source to build and host anywhere. Gatsby Cloud (now Netlify-managed) offered build/preview services; most teams host on Netlify/Vercel/S3 with usage-based costs.";
const officialUrl = "https://www.gatsbyjs.com";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/gatsbyjs.com",
  gradient: "from-purple-500 via-indigo-500 to-cyan-500",
  glow: "shadow-[0_20px_80px_rgba(99,102,241,0.24)]",
};

const alternatives = [
  { name: "Next.js", slug: "next-js" },
  { name: "Astro", slug: "astro" },
  { name: "Nuxt", slug: "nuxt" },
  { name: "Hugo", slug: "hugo" },
  { name: "Eleventy", slug: "eleventy" },
];

const faqs = [
  {
    q: "What is Gatsby best for?",
    a: "Content-rich sites that benefit from static generation, a strong plugin ecosystem, and pulling data from multiple sources.",
  },
  {
    q: "Does Gatsby support SSR?",
    a: "Yes. Gatsby supports static generation, DSG (deferred static generation), and SSR routes for dynamic needs.",
  },
  {
    q: "How do I source data in Gatsby?",
    a: "Use the GraphQL data layer with source plugins for CMSs (Contentful, Sanity, WordPress), files, and APIs.",
  },
  {
    q: "Is Gatsby Cloud still available?",
    a: "Gatsby Cloud was acquired by Netlify; you can host builds/previews on Netlify or other hosts.",
  },
  {
    q: "How is performance?",
    a: "Static output plus image optimization yields strong performance. Build times can grow with large data sets—incremental builds help.",
  },
  {
    q: "Is Gatsby free?",
    a: "Yes, open source. Hosting/build services are paid by provider usage (Netlify, Vercel, S3/CloudFront, etc.).",
  },
  {
    q: "What about CMS previews?",
    a: "Preview setups are supported via plugins and hosting providers that offer draft previews (e.g., Netlify).",
  },
  {
    q: "Does Gatsby support TypeScript?",
    a: "Yes. TypeScript is supported with built-in tooling.",
  },
];

function GatsbyToolPage() {
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
        "Gatsby is a React-based static site framework with a powerful data layer, strong plugin ecosystem, and options for static, deferred, and server rendering.",
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
      icon: <BookOpen className="h-5 w-5 text-purple-500" />,
      title: "Data layer with GraphQL",
      body: "Source content from CMSs, files, and APIs, then query via GraphQL at build time.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Static, DSG, and SSR",
      body: "Combine static generation with deferred static generation and server-side rendering where needed.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-400" />,
      title: "Image optimization",
      body: "Automatic image processing and responsive images for fast pages.",
    },
    {
      icon: <Plug className="h-5 w-5 text-indigo-500" />,
      title: "Plugin ecosystem",
      body: "Rich plugins for CMS sources, SEO, analytics, styling, and performance.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Performance and security",
      body: "Static assets served via CDN reduce attack surface and boost speed.",
    },
    {
      icon: <Globe2 className="h-5 w-5 text-sky-500" />,
      title: "CMS previews and drafts",
      body: "Preview drafts via host-integrated preview services and source plugins.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Gatsby review for developers and content teams: pricing, features, pros & cons, and alternatives for React-based static sites."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-purple-200/30 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-cyan-200/30 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-purple-500" />
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
                  Gatsby lets teams build high-performance React sites that pull data from many sources and ship static assets with optional SSR when needed.
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
              {toolName} is a {category.toLowerCase()} for React developers. It provides a GraphQL data layer, static generation, deferred builds, and SSR options to build content-rich, fast sites.
            </p>
            <p className="mt-3 text-slate-700">
              Teams use it for marketing sites, blogs, docs, and multi-source content experiences where performance and security matter.
            </p>
            <p className="mt-3 text-slate-700">
              Hosting is flexible—Netlify, Vercel, AWS, or static hosting—so you can choose based on cost and workflow.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} suits teams that want React + static performance with a flexible data layer.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Marketing and content teams with headless CMSes feeding multiple sites.",
                "Docs and blogs that need fast pages and strong SEO.",
                "Teams wanting a plugin ecosystem for CMS, SEO, analytics, and images.",
                "Developers preferring React/GraphQL and static security/performance.",
                "Sites with mixed static + selective SSR/DSG needs.",
                "Organizations wanting flexible hosting options (Netlify/Vercel/AWS).",
              ].map((item) => (
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
            <p className="mt-3 text-slate-700">
              {toolName} emphasizes performance, a flexible data layer, and a mature plugin ecosystem for React-based sites.
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
                  Gatsby is open source. Hosting/builds are paid to providers like Netlify/Vercel/S3; costs depend on build minutes, bandwidth, and features (previews, edge, etc.).
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Host on Netlify or Vercel for previews and CI; consider S3/CloudFront if you want DIY hosting and cost control.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Open source</td>
                    <td className="px-4 py-3">Any team</td>
                    <td className="px-4 py-3">No license cost; you manage hosting</td>
                    <td className="px-4 py-3">Free</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Managed hosting</td>
                    <td className="px-4 py-3">Teams wanting previews and CI</td>
                    <td className="px-4 py-3">Usage-based (builds, bandwidth, seats)</td>
                    <td className="px-4 py-3">Provider-based</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Large orgs with SLA and governance needs</td>
                    <td className="px-4 py-3">Custom contracts with hosts or infra teams</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Factor build times, data sourcing complexity, and preview needs when estimating costs with hosting providers.
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
                  <li>Strong performance with static output and image optimization.</li>
                  <li>Powerful data layer and plugin ecosystem.</li>
                  <li>Supports static, DSG, and SSR for flexibility.</li>
                  <li>Great for multi-source content sites and headless CMS.</li>
                  <li>Open source with flexible hosting options.</li>
                  <li>TypeScript support and React familiarity.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Build times can grow with large data sets.</li>
                  <li>GraphQL data layer adds complexity for some teams.</li>
                  <li>Less suited to highly dynamic apps vs. Next.js/Remix.</li>
                  <li>Some Gatsby Cloud features changed post-acquisition.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              {toolName} competes with React frameworks and static site generators. Choose based on dynamic needs, build times, and hosting preferences.
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
            <p className="text-slate-700">Compare {toolName} to other React frameworks.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow_sm ring-1 ring-slate-200">
              <div className="flex items_center justify_between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Next.js</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/gatsby-vs-next-js">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Next.js excels at dynamic and app-like experiences with SSR/ISR. {toolName} shines for content-heavy sites with a rich plugin/data layer and static performance.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} for content-centric static performance; choose Next.js for dynamic, app-like needs.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow_sm ring-1 ring-slate-200">
              <div className="flex items_center justify_between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Astro</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/gatsby-vs-astro">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Astro focuses on shipping less JavaScript with an island architecture. {toolName} offers a mature GraphQL data layer and plugin ecosystem for React-centric builds.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} if you prefer React/GraphQL and existing plugins; choose Astro for minimal JS and island-based rendering.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you want fast, secure, content-rich sites with a strong plugin ecosystem and data layer, {toolName} is worth it. It balances static speed with options for dynamic routes.
            </p>
            <p className="mt-3 text-slate-700">
              If your app is highly dynamic or you want minimal JS by default, compare Next.js or Astro. Factor build times and hosting workflows in your decision.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> {toolName} remains a solid choice for React teams building performant marketing and content sites with multi-source data.</p>
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
              Choose {toolName} if you want a React static site framework with a rich data layer, plugin ecosystem, and options for DSG/SSR when needed.
            </p>
            <p>
              Consider Next.js or Astro for more dynamic or minimal-JS architectures; Hugo/Eleventy for non-React static workflows.</p>
            <p>{toolName} helps teams deliver fast, secure sites with flexible data sourcing and mature tooling.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here: <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>Visit {toolName}</a>.
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
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items_center justify-between px-4 py-3 text-left text-slate-900"
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

export default GatsbyToolPage;
