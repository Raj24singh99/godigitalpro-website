import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Craiyon";
const slug = "craiyon";
const category = "AI Image Generation";
const shortPitch =
  "Craiyon (formerly DALL·E mini) is a free/low-cost AI image generator that creates images from text prompts for quick creative exploration.";
const pricingSummary =
  "Free and paid plans. Paid tiers add faster generation, higher resolution, commercial rights, and API access; free use is rate-limited.";
const officialUrl = "https://www.craiyon.com";
const ratingValue = 4.0;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/craiyon.com",
  gradient: "from-amber-500 via-emerald-500 to-indigo-500",
  glow: "shadow-[0_20px_80px_rgba(245,158,11,0.22)]",
};

const alternatives = [
  { name: "Midjourney", slug: "midjourney" },
  { name: "DALL·E", slug: "stable-diffusion" },
  { name: "Stable Diffusion", slug: "stable-diffusion" },
  { name: "Leonardo AI", slug: "leonardo-ai" },
  { name: "NightCafe", slug: "nightcafe" },
];

const faqs = [
  {
    q: "What is Craiyon?",
    a: "Craiyon is an AI image generator that creates images from text prompts, known for being accessible and easy to try.",
  },
  {
    q: "Who is it for?",
    a: "Hobbyists, students, marketers, and creators who want quick visuals without heavy tools or high costs.",
  },
  {
    q: "How is pricing structured?",
    a: "Free use with limits; paid plans add faster generation, higher resolution, and usage rights suitable for commercial projects.",
  },
  {
    q: "Is commercial use allowed?",
    a: "Commercial rights depend on plan. Check current terms before using outputs commercially.",
  },
  {
    q: "Can I use it via API?",
    a: "API access is available on paid plans to integrate image generation into apps.",
  },
  {
    q: "Do outputs need editing?",
    a: "Yes. Expect artifacts; use editing or upscaling tools for polished results.",
  },
  {
    q: "What about safety?",
    a: "Prompts and outputs are moderated; still review for appropriateness and rights before publishing.",
  },
  {
    q: "Is there a watermark?",
    a: "Free plans may include watermarks; paid tiers can remove them depending on current terms.",
  },
];

function CraiyonToolPage() {
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
        "Craiyon is a lightweight, accessible AI image generator for quick visuals and idea exploration. It’s inexpensive, but outputs may require cleanup for professional use.",
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
      title: "Text-to-image",
      body: "Generate images from prompts quickly for concepting and inspiration.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Fast generation",
      body: "Paid plans speed up renders and increase resolution for practical use.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Rights & watermark options",
      body: "Paid tiers can remove watermarks and include commercial rights; check terms.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "API access",
      body: "Integrate image generation into apps and workflows on supported plans.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Prompt flexibility",
      body: "Experiment with styles, subjects, and compositions to explore ideas.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Editing pipeline",
      body: "Export images to other tools for cleanup, upscaling, or compositing.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Craiyon review: pricing, features, pros & cons, and alternatives so you can see if this lightweight AI image generator fits your needs."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-amber-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-emerald-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-amber-600" />
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
                  {toolName} offers accessible AI image generation—great for quick visuals, moodboards, and ideas; refine outputs before production use.
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
              {toolName} is an AI image generator that converts text prompts into visuals. It’s known for being easy to try and low-cost compared to heavier options.
            </p>
            <p className="mt-3 text-slate-700">Use it for brainstorming, moodboards, social drafts, and quick concepts; polish outputs in other tools if needed.</p>
            <p className="mt-3 text-slate-700">Paid plans improve speed, resolution, and rights, making it more viable for commercial work.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for users needing quick, inexpensive AI images.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Hobbyists exploring AI art and prompt ideas.",
                "Students creating visuals for projects and presentations.",
                "Marketers drafting social images and concept art.",
                "Designers building moodboards before detailed work.",
                "Developers wanting lightweight image generation via API.",
                "Teams testing prompts before using higher-end models.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-amber-500" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">{toolName} focuses on accessible text-to-image generation with optional speed/quality upgrades.</p>
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
                  {toolName} has a free plan with limits. Paid plans increase speed, resolution, usage rights, and API access—useful if you need faster or commercial-ready outputs.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start free; upgrade if you need faster renders, higher res, commercial rights, or API integration.</p>
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
                    <td className="px-4 py-3">Light and personal use</td>
                    <td className="px-4 py-3">Rate-limited generations, watermark</td>
                    <td className="px-4 py-3">Good for trying prompts</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Creators & students</td>
                    <td className="px-4 py-3">Faster renders, higher res, fewer limits</td>
                    <td className="px-4 py-3">Fits regular use</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Commercial/API</td>
                    <td className="px-4 py-3">Businesses & apps</td>
                    <td className="px-4 py-3">Commercial rights, API access, priority</td>
                    <td className="px-4 py-3">Best for production workflows</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Plan for post-processing: upscaling and cleanup may be needed for professional use.</p>
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
                  <li>Very accessible with free plan.</li>
                  <li>Fast way to test prompts and styles.</li>
                  <li>Paid tiers improve speed and resolution.</li>
                  <li>API for integrating generation into apps.</li>
                  <li>Low barrier for students and hobbyists.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Quality and fidelity are lower than top-tier models.</li>
                  <li>Artifacts and watermarks on free plan.</li>
                  <li>Commercial use requires paid plans/rights.</li>
                  <li>Limited control compared to advanced generators.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other AI image generators to match quality, rights, and workflow needs.
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
            <p className="text-slate-700">See how {toolName} compares with other AI image platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Midjourney</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/midjourney">
                  View Midjourney
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Midjourney produces higher-fidelity images with more control; {toolName} is faster and cheaper to start. Pick based on quality needs and budget.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Stable Diffusion</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/stable-diffusion">
                  View Stable Diffusion
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Stable Diffusion offers open models and fine-tuning; {toolName} is managed and simple. Choose based on whether you need customization or convenience.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want a quick, low-cost way to generate AI images and are okay with editing outputs for polish or using them for ideation.
            </p>
            <p className="mt-3 text-slate-700">
              It shines for experimentation and early concepts; upgrade plans if you need speed, higher resolution, and rights for commercial work.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A handy starter AI image tool—great for brainstorming and drafts; use paid tiers and post-processing for professional results.
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
              Choose {toolName} if you want accessible AI image generation for brainstorming and drafts with optional paid upgrades for speed and rights.
            </p>
            <p>
              Consider Midjourney or Stable Diffusion for higher fidelity or customization; use {toolName} when simplicity and cost are your priorities.
            </p>
            <p>{toolName} helps you explore ideas quickly—polish outputs before professional or commercial use.</p>
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

export default CraiyonToolPage;
