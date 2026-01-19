import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

// Reusable layout that mirrors the AISEO page structure with configurable content.
function RichToolPage({ config }) {
  const {
    toolName,
    slug,
    category,
    shortPitch,
    pricingSummary,
    officialUrl,
    ratingValue = 4,
    brandMeta,
    reviewBody,
    overview = [],
    whoTagline,
    whoItems = [],
    featureIntro,
    features = [],
    pricingRows = [],
    pricingFastPick,
    pros = [],
    cons = [],
    alternatives = [],
    comparisons = [],
    worthPoints = [],
    worthVerdict,
    faqs = [],
    finalPoints = [],
    heroUpdatedText = "Reviewed by GoDigitalPro - Updated May 2025",
  } = config;

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
      reviewBody: reviewBody || `${toolName} helps teams work faster. Use it with a review process to ensure quality, accuracy, and fit for your workflow.`,
      reviewRating: {
        "@type": "Rating",
        ratingValue,
        bestRating: "5",
        worstRating: "1",
      },
    },
  };
  const faqSchema =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }
      : null;

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description={`${toolName} review: pricing, features, pros and cons, and alternatives so you can decide if it fits your stack.`}
        canonical={canonical}
        image={`https://www.godigitalpro.in/og/tools/${slug}.png`}
        type="article"
        schema={faqSchema ? [productSchema, faqSchema] : [productSchema]}
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-sky-200/25 blur-3xl" />
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
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">{heroUpdatedText}</span>
              </div>
              <p className="mt-4 text-slate-700">{pricingSummary}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="btn btn-primary bg-slate-900 text-white ring-2 ring-slate-900 hover:bg-slate-700" href={officialUrl}>
                  Visit official website
                </a>
              </div>
            </div>
            {brandMeta ? (
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
                      <img
                        src={brandMeta.logo}
                        alt={`${toolName} logo`}
                        loading="lazy"
                        decoding="async"
                        fetchpriority="low"
                        width="56"
                        height="56"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-white/80">Featured Tool</p>
                      <p className="text-xl font-bold">{toolName}</p>
                    </div>
                  </div>
                  <p className="relative mt-4 text-sm leading-relaxed text-white/90">
                    {config.brandCardPitch ||
                      `${toolName} accelerates your workflow. Pair it with a review process to ensure accuracy, quality, and fit for your stack.`}
                  </p>
                  <div className="relative mt-4 flex items-center gap-2 text-sm font-semibold">
                    <Sparkles className="h-4 w-4 text-amber-200" />
                    Recommended by GoDigitalPro
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </section>

        <section className="section section--overview bg-white">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">What is {toolName}?</h2>
            {overview.map((paragraph) => (
              <p key={paragraph} className="mt-3 text-slate-700">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {whoItems.length > 0 ? (
          <section className="section section--who bg-slate-50">
            <div className="mx-auto max-w-5xl px-6 py-10">
              <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
              {whoTagline ? <p className="mt-3 text-slate-700">{whoTagline}</p> : null}
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {whoItems.map((item) => (
                  <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    <p className="text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {features.length > 0 ? (
          <section className="section section--features bg-white">
            <div className="mx-auto max-w-6xl px-6 py-12">
              <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
              {featureIntro ? <p className="mt-3 text-slate-700">{featureIntro}</p> : null}
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {features.map((feature) => (
                  <div key={feature.title} className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                    <div className="flex items-center gap-3 text-slate-900">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
                        {feature.icon || <Sparkles className="h-5 w-5 text-emerald-500" />}
                      </div>
                      <h3 className="text-lg font-semibold">{feature.title}</h3>
                    </div>
                    <p className="mt-2 text-sm text-slate-700">{feature.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {pricingRows.length > 0 ? (
          <section className="section section--pricing bg-slate-50">
            <div className="mx-auto max-w-6xl px-6 py-12">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">{toolName} pricing (2025)</h2>
                  <p className="mt-2 text-slate-700">{pricingSummary}</p>
                </div>
                {pricingFastPick ? (
                  <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                    <p className="font-semibold text-slate-900">Fast pick</p>
                    <p className="text-slate-700">{pricingFastPick}</p>
                  </div>
                ) : null}
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
                    {pricingRows.map((row, idx) => (
                      <tr key={row.tier} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                        <td className="px-4 py-3 font-semibold text-slate-900">{row.tier}</td>
                        <td className="px-4 py-3">{row.bestFor}</td>
                        <td className="px-4 py-3">{row.inclusions}</td>
                        <td className="px-4 py-3">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        ) : null}

        {(pros.length > 0 || cons.length > 0) ? (
          <section className="section section--pros-cons bg-white">
            <div className="mx-auto max-w-6xl px-6 py-12">
              <h2 className="text-2xl font-bold text-slate-900">{toolName} pros and cons</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {pros.length > 0 ? (
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
                ) : null}
                {cons.length > 0 ? (
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
                ) : null}
              </div>
            </div>
          </section>
        ) : null}

        {alternatives.length > 0 ? (
          <section className="section section--alternatives bg-slate-50">
            <div className="mx-auto max-w-6xl px-6 py-12">
              <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
              <p className="mt-3 text-slate-700">Compare {toolName} with other options in the same category.</p>
              <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {alternatives.map((alt) => (
                  <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                    <div>
                      <p className="font-semibold text-slate-900">{alt.name}</p>
                      <p className="text-sm text-slate-600">{alt.tagline || "Popular alternative in the same category."}</p>
                    </div>
                    <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href={`/tools/${alt.slug}`}>
                      View
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {comparisons.length > 0 ? (
          <section className="section section--vs bg-white">
            <div className="mx-auto max-w-5xl px-6 py-12 space-y-6">
              <h2 className="text-2xl font-bold text-slate-900">{toolName} vs other tools</h2>
              <p className="text-slate-700">See how {toolName} stacks up against similar platforms.</p>
              {comparisons.map((item) => (
                <div key={item.title} className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                    {item.ctaHref ? (
                      <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href={item.ctaHref}>
                        {item.ctaText || "View"}
                      </a>
                    ) : null}
                  </div>
                  <p className="mt-2 text-slate-700">{item.body}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {worthPoints.length > 0 || worthVerdict ? (
          <section className="section section--worth-it bg-slate-50">
            <div className="mx-auto max-w-5xl px-6 py-12">
              <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
              {worthPoints.map((item) => (
                <p key={item} className="mt-3 text-slate-700">
                  {item}
                </p>
              ))}
              {worthVerdict ? (
                <p className="mt-3 font-semibold text-slate-900">
                  <strong>Verdict:</strong> {worthVerdict}
                </p>
              ) : null}
            </div>
          </section>
        ) : null}

        {faqs.length > 0 ? (
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
        ) : null}

        {finalPoints.length > 0 ? (
          <section className="section section--final bg-slate-50">
            <div className="mx-auto max-w-5xl px-6 py-12 space-y-4 text-slate-800">
              <h2 className="text-2xl font-bold text-slate-900">Final verdict on {toolName}</h2>
              {finalPoints.map((item) => (
                <p key={item}>{item}</p>
              ))}
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
        ) : null}
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

export default RichToolPage;
