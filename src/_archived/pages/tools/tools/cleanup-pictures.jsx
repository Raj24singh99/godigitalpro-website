import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Cleanup.Pictures";
const slug = "cleanup-pictures";
const category = "Image Cleanup";
const shortPitch = "Cleanup.Pictures quickly removes unwanted objects, text, and blemishes from photos with AI-powered inpainting.";
const pricingSummary =
  "Free basic exports with limitations; paid plans unlock higher resolution, commercial use rights, and priority processing.";
const officialUrl = "https://cleanup.pictures";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/cleanup.pictures",
  gradient: "from-emerald-500 via-teal-500 to-blue-500",
  glow: "shadow-[0_20px_80px_rgba(52,211,153,0.24)]",
};

const alternatives = [
  { name: "Remove.bg", slug: "remove-bg" },
  { name: "Photoroom", slug: "photoroom" },
  { name: "Clipdrop", slug: "clipdrop" },
  { name: "Photoshop Generative Fill", slug: "firefly-adobe" },
  { name: "Pincel AI", slug: "pictory-ai" },
];

const faqs = [
  {
    q: "What is Cleanup.Pictures?",
    a: "Cleanup.Pictures is an AI inpainting tool that removes unwanted objects, text, or blemishes from images.",
  },
  {
    q: "Who is it for?",
    a: "Creators, marketers, photographers, and editors who need fast touch-ups without pro editing software.",
  },
  {
    q: "What does the free plan include?",
    a: "Free plan offers basic exports with resolution or watermark limitations. Paid plans add higher resolution and commercial rights.",
  },
  {
    q: "Is it good for commercial use?",
    a: "Paid plans include commercial use rights. Always review licensing terms for your use case.",
  },
  {
    q: "Can it replace Photoshop?",
    a: "It excels at quick object removal. Complex compositing still benefits from full editors like Photoshop.",
  },
  {
    q: "Does it store my images?",
    a: "Review Cleanup.Pictures' privacy terms for storage and retention. Avoid uploading sensitive content without checking policies.",
  },
  {
    q: "Does it handle batch work?",
    a: "The tool is optimized for single-image edits. Batch or API workflows may require other tools or integrations.",
  },
  {
    q: "Is there a mobile app?",
    a: "It is web-first; mobile browsers work, but dedicated app availability may vary.",
  },
];

function CleanupPicturesToolPage() {
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
        "Cleanup.Pictures is a fast inpainting tool for removing objects and text from photos. Great for quick edits; heavy compositing still needs pro software.",
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
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "Object removal",
      body: "Erase people, objects, or text from images in seconds with AI inpainting.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "High-resolution exports",
      body: "Paid plans unlock higher-res output suitable for professional use.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Brush controls",
      body: "Adjust brush size and selection to refine cleanup areas precisely.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Web-based",
      body: "Runs in the browser—no install required. Works on desktop and mobile browsers.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Integrations & API",
      body: "API/integration options are limited; pair with other tools for batch pipelines.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Commercial rights",
      body: "Paid plans include commercial usage; review license terms for your scenario.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Cleanup.Pictures review: features, pricing, pros & cons, and alternatives for fast AI object removal in photos."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-teal-200/25 blur-3xl" />
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
                  {toolName} is excellent for quick cleanup tasks—review exports for quality and resolution before final use.
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
              {toolName} is a web-based AI tool for removing objects, text, or imperfections from images. It uses inpainting to fill the selected area with plausible background.
            </p>
            <p className="mt-3 text-slate-700">
              It's ideal for quick marketing edits, listing photos, and social content. Complex composites still benefit from full-fledged editors.
            </p>
            <p className="mt-3 text-slate-700">Check export resolution, licensing, and privacy terms if you use it for commercial projects.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for creators who want fast, browser-based cleanup without heavy editing suites.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Marketers cleaning product or ad images quickly.",
                "Photographers removing distractions before sharing proofs.",
                "Social teams polishing UGC and campaign visuals.",
                "Ecommerce sellers removing text/stickers from listings.",
                "Designers needing quick inpainting before full retouching.",
                "Users who prefer web tools over installing software.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on AI inpainting for quick cleanup tasks with minimal setup.</p>
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
                  {toolName} offers free basic exports. Paid plans add higher resolution, commercial rights, and priority processing. Pricing is straightforward and consumer-friendly.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start free; upgrade if you need high-res exports or commercial licensing.</p>
              </div>
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
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Free</td>
                    <td className="px-4 py-3">Basic edits</td>
                    <td className="px-4 py-3">Standard resolution, core cleanup</td>
                    <td className="px-4 py-3">Good to try tool</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro/Commercial</td>
                    <td className="px-4 py-3">Creators & teams</td>
                    <td className="px-4 py-3">Higher res, commercial rights, priority</td>
                    <td className="px-4 py-3">Upgrade for client work</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Check export limits, licensing, and privacy terms before using for commercial projects.</p>
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
                  <li>Very fast object and text removal.</li>
                  <li>Simple web UI—no install required.</li>
                  <li>Useful for product photos and marketing edits.</li>
                  <li>Paid tiers add high-res exports and commercial rights.</li>
                  <li>Works on desktop and mobile browsers.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Free tier export quality is limited.</li>
                  <li>Complex edits still need pro tools like Photoshop.</li>
                  <li>API/batch options are limited.</li>
                  <li>Review privacy/licensing for sensitive or commercial work.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other image cleanup and background tools based on quality, batch needs, and licensing.
            </p>
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
            <p className="text-slate-700">See how {toolName} compares to other cleanup tools.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Remove.bg</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/remove-bg">
                  View Remove.bg
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Remove.bg specializes in background removal. {toolName} focuses on object cleanup/inpainting. Use both if you need background removal and object erasure together.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Photoroom</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/photoroom">
                  View Photoroom
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Photoroom adds templates and batch workflows for product photos. {toolName} is faster for one-off object removal. Choose based on volume and template needs.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want fast, browser-based object removal without pro editing software and you need occasional high-res exports.
            </p>
            <p className="mt-3 text-slate-700">Upgrade to paid if you need commercial use or higher resolution; use pro editors for complex composites.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A great quick-fix tool for cleanup; best as part of a broader image workflow when quality control matters.
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
            <p>Choose {toolName} if you need quick object removal and inpainting from the browser with minimal setup.</p>
            <p>
              Consider Remove.bg for background cutouts or Photoroom for batch/product workflows; use {toolName} for fast one-off cleanups and touch-ups.
            </p>
            <p>{toolName} is efficient for quick edits—check resolution and licensing for client or commercial work.</p>
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

export default CleanupPicturesToolPage;
