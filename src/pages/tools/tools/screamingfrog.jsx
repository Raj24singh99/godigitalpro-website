import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Folder, Crown, ArrowLeft, ChevronDown, BarChart3, Search, Server } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Screaming Frog";
const slug = "screamingfrog";
const category = "Technical SEO Crawling";
const shortPitch = "Screaming Frog is a desktop website crawler for technical SEO audits, uncovering issues like broken links, redirects, duplicate content, and metadata gaps.";
const pricingSummary = "Free version crawls up to a limit; paid license unlocks higher limits and advanced features (custom extraction, JavaScript rendering, integrations).";
const officialUrl = "https://www.screamingfrog.co.uk/seo-spider/";
const ratingValue = 4.7;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/screamingfrog.co.uk",
  gradient: "from-emerald-500 via-teal-500 to-blue-500",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.22)]",
};

const alternatives = [
  { name: "Sitebulb", slug: "sitebulb" },
  { name: "Botify", slug: "botify" },
  { name: "Oncrawl", slug: "oncrawl" },
  { name: "Ryte", slug: "ryte" },
  { name: "Semrush Site Audit", slug: "semrush" },
];

const faqs = [
  { q: "What is Screaming Frog?", a: "Screaming Frog SEO Spider is a desktop crawler that audits websites for technical SEO issues." },
  { q: "Who is it for?", a: "SEO professionals and site owners needing in-depth technical audits and data exports." },
  { q: "Is there a free version?", a: "Yes. The free version has crawl limits; the paid license unlocks higher limits and advanced features." },
  { q: "Does it render JavaScript?", a: "Yes. JavaScript rendering is available on paid licenses to crawl modern sites." },
  { q: "Does it integrate with GA/Search Console?", a: "Yes. Integrations pull additional data to enrich audits on paid plans." },
  { q: "What about custom extraction?", a: "Custom extraction is available for pulling specific data from pages (paid feature)." },
  { q: "Does it replace hosted monitoring?", a: "No. It is best for on-demand audits; pair with hosted monitoring for continuous checks." },
  { q: "Is human analysis needed?", a: "Yes. You must interpret findings, prioritize fixes, and verify impacts." },
];

function ScreamingFrogToolPage() {
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
        "Screaming Frog is a powerful desktop crawler for technical SEO audits, surfacing site issues and allowing detailed exports for analysis.",
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
      icon: <Search className="h-5 w-5 text-emerald-500" />,
      title: "Technical SEO audits",
      body: "Identify broken links, redirects, duplicate content, canonicals, and metadata issues.",
    },
    {
      icon: <Server className="h-5 w-5 text-teal-600" />,
      title: "JavaScript rendering",
      body: "Crawl JavaScript-rendered content to audit modern sites (paid feature).",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "Custom extraction",
      body: "Extract custom data from pages via XPath/CSS/regex to analyze specific elements.",
    },
    {
      icon: <Folder className="h-5 w-5 text-slate-700" />,
      title: "Bulk exports",
      body: "Export detailed crawl data to CSV/Sheets for analysis and prioritization.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-blue-600" />,
      title: "Integrations",
      body: "Connect Google Analytics and Search Console on paid licenses to enrich crawl data.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Scheduling & API",
      body: "Schedule crawls and use the API (paid) to automate recurring audits.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Screaming Frog review: pricing, features, pros & cons, and alternatives for technical SEO crawling and audits."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-blue-200/25 blur-3xl" />
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
                  {toolName} offers deep technical audits via a desktop crawler—best used by SEOs who can interpret and prioritize fixes.
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
              {toolName} is a desktop SEO crawler that scans sites for technical issues. It’s highly configurable, supports exports, and is a staple for technical SEO audits.
            </p>
            <p className="mt-3 text-slate-700">Use it for deep, on-demand audits; pair with hosted monitoring tools for continuous checks.</p>
            <p className="mt-3 text-slate-700">Requires SEO expertise to interpret and prioritize the findings it surfaces.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for technical SEOs, agencies, and site owners who need detailed crawl data and custom extraction.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Technical SEOs running deep site audits.",
                "Agencies preparing audit deliverables for clients.",
                "Web teams needing exports for dev ticketing.",
                "Teams validating site migrations or redesigns.",
                "SEOs needing JavaScript rendering audits.",
                "Users comfortable with desktop tooling and data analysis.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on technical SEO crawling, JS rendering, custom extraction, exports, integrations, and automation.</p>
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
                  Free version with crawl limits; paid license unlocks higher limits, custom extraction, JS rendering, integrations, scheduling, and API. Pricing is per license with discounts for volume.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Use free for small audits; move to paid if you need JS rendering, integrations, or bigger crawls.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Option</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key inclusions</th>
                    <th className="px-4 py-3">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Free</td>
                    <td className="px-4 py-3">Small sites</td>
                    <td className="px-4 py-3">Crawl limit, core auditing</td>
                    <td className="px-4 py-3">Great for quick checks</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Paid license</td>
                    <td className="px-4 py-3">Professional use</td>
                    <td className="px-4 py-3">JS rendering, custom extraction, integrations, scheduling, API</td>
                    <td className="px-4 py-3">Fits most SEO teams</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Budget for multiple licenses if several users need concurrent work. Pair with hosted monitoring for ongoing site health.</p>
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
                  <li>Deep technical SEO crawling and data exports.</li>
                  <li>Custom extraction and JS rendering on paid plans.</li>
                  <li>Integrations with GA/GSC; API for automation.</li>
                  <li>Highly configurable; staple for SEO audits.</li>
                  <li>Free version suitable for small sites.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Desktop-based; requires local resources and setup.</li>
                  <li>No built-in continuous monitoring.</li>
                  <li>Data interpretation requires SEO expertise.</li>
                  <li>Paid licenses needed for higher limits and key features.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other crawlers and site audit tools to match your workflow.</p>
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
            <p className="text-slate-700">See how {toolName} compares to other SEO crawling solutions.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Sitebulb</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/sitebulb">
                  View Sitebulb
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Sitebulb offers visualizations and auditing cues; {toolName} is highly data/export focused. Choose based on whether you prefer visual guidance or raw crawl data flexibility.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Botify</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/botify">
                  View Botify
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Botify is a hosted enterprise crawler with continuous monitoring; {toolName} is desktop-based and on-demand. Pick based on whether you need hosted monitoring or local deep audits.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need a powerful desktop crawler for technical SEO audits and you have the expertise to act on the findings.
            </p>
            <p className="mt-3 text-slate-700">Pair it with hosted monitoring for continuous checks and ensure hardware/resources support large crawls.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A must-have technical SEO crawler; best when used by experienced SEOs with processes to prioritize fixes.</p>
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
            <p>Choose {toolName} if you need in-depth technical SEO crawls, custom extraction, and data exports for audits.</p>
            <p>Consider Sitebulb for visual guidance or Botify for hosted monitoring; use {toolName} when you want a robust desktop crawler and can interpret results.</p>
            <p>{toolName} is a staple for SEOs—ensure you have the expertise to prioritize and implement fixes.</p>
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

export default ScreamingFrogToolPage;
