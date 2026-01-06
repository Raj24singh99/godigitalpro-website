import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "NightCafe Creator";
const slug = "nightcafe";
const category = "AI Art Generator";
const shortPitch = "NightCafe Creator turns text prompts into AI images using multiple models, style presets, and community challenges for inspiration.";
const pricingSummary = "Credits-based system with free daily credits. Paid packs and subscriptions add more credits, bulk generations, and priority servers.";
const officialUrl = "https://nightcafe.studio";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/nightcafe.studio",
  gradient: "from-orange-500 via-amber-500 to-fuchsia-600",
  glow: "shadow-[0_20px_80px_rgba(249,115,22,0.24)]",
};

const alternatives = [
  { name: "Midjourney", slug: "midjourney" },
  { name: "DALL-E", slug: "dall-e" },
  { name: "Stable Diffusion", slug: "stable-diffusion" },
  { name: "Adobe Firefly", slug: "firefly-adobe" },
  { name: "DreamStudio", slug: "dreamstudio" },
];

const faqs = [
  { q: "What is NightCafe Creator?", a: "NightCafe Creator is an AI art generator that converts text prompts into images using models like Stable Diffusion and style presets." },
  { q: "How does pricing work?", a: "NightCafe uses credits. You get free daily credits; paid packs and subscriptions add more credits, bulk generations, and priority servers." },
  { q: "Can I use multiple models?", a: "Yes. You can pick Stable Diffusion variants, CLIP-guided tools, and other available models, and switch per generation." },
  { q: "Is there a community?", a: "Yes. NightCafe has public galleries, challenges, and remix features to learn from other creators." },
  { q: "Can I use images commercially?", a: "Commercial use depends on the model and licensing. Review terms for each model and your local IP laws before publishing." },
  { q: "Does it support upscaling?", a: "Yes. You can upscale and refine outputs using credits; details depend on your plan and selected model." },
  { q: "Can I batch generate images?", a: "You can generate multiple images per prompt, limited by credits and plan caps." },
  { q: "Is there a mobile app?", a: "NightCafe is web-based and mobile-friendly; check the site from your device browser." },
];

function NightCafeToolPage() {
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
        "NightCafe Creator converts prompts into AI images with multiple models, community challenges, and credit-based pricing. It is a flexible option for creators who want quick explorations without managing infrastructure.",
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
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "Multiple models", body: "Pick from Stable Diffusion variants, CLIP-guided modes, and new drops to match your style needs." },
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "Style presets", body: "Use preset styles (photographic, cinematic, anime, abstract) to speed prompt setup." },
    { icon: <Plug className="h-5 w-5 text-purple-500" />, title: "Batch generations", body: "Generate multiple images per prompt; use credits to explore variations quickly." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "Upscaling", body: "Refine and upscale outputs when you need higher fidelity results." },
    { icon: <Rocket className="h-5 w-5 text-emerald-500" />, title: "Community challenges", body: "Join challenges, remix public prompts, and learn from published workflows." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Rights awareness", body: "Guidance on usage rights and model terms; always verify commercial allowances." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="NightCafe Creator review: pricing, features, pros & cons, and alternatives to decide if its AI art generator fits your workflow."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-amber-200/30 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-fuchsia-200/25 blur-3xl" />
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
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Reviewed by GoDigitalPro - Updated May 2025</span>
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-amber-100 blur-3xl" />
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
                  {toolName} lets you test prompts, styles, and models quickly with community inspiration. Use it for ideation, thumbnails, and moodboards.
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
              {toolName} is an AI art generator where you enter prompts and get images using models like Stable Diffusion. It bundles style presets, bulk generation, and upscaling in a credit-based marketplace with a large community gallery.
            </p>
            <p className="mt-3 text-slate-700">
              Use it for quick ideation, moodboards, thumbnails, and drafts before handing off to designers. Credits keep spending predictable, and you can earn more by joining challenges and publishing work.
            </p>
            <p className="mt-3 text-slate-700">
              Remember to review licensing, especially for commercial campaigns or when using community prompts. Treat AI outputs as drafts that still need brand and legal checks.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams and creators who want fast concept art without complex setups.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Content creators needing thumbnails, covers, or social visuals.",
                "Designers prototyping ideas before polishing in pro tools.",
                "Marketers building quick concepts for ads or landing hero art.",
                "Game and product teams testing moodboards and character ideas.",
                "Agencies that want rapid drafts to present style directions.",
                "Educators and students experimenting with prompts and models.",
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
            <p className="mt-3 text-slate-700">
              The platform focuses on versatile models, preset styles, community prompts, and credit-based control so you can experiment safely.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {featureBlocks.map((feature) => (
                <div key={feature.title} className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center gap-3 text-slate-900">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
                      {feature.icon}
                    </div>
                    <p className="text-lg font-semibold">{feature.title}</p>
                  </div>
                  <p className="mt-3 text-sm text-slate-700">{feature.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--pricing bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pricing</h2>
            <p className="mt-3 text-slate-700">
              Pricing runs on credits. Free users get daily credits; paid packs and subscriptions add more monthly credits, faster queues, and bulk runs. Always check the latest pricing page for changes.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  name: "Free tier",
                  price: "$0",
                  detail: "Daily free credits, limited priority, community access.",
                  bestFor: "Casual use and testing prompts.",
                },
                {
                  name: "Credit packs",
                  price: "$ variable",
                  detail: "One-time packs for bursts of generations and upscales.",
                  bestFor: "Occasional projects or client drafts.",
                },
                {
                  name: "Subscriptions",
                  price: "$ monthly",
                  detail: "Monthly credits, higher limits, and faster generation queues.",
                  bestFor: "Regular creators and teams iterating often.",
                },
              ].map((tier) => (
                <div key={tier.name} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                  <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">{tier.name}</p>
                  <p className="mt-2 text-2xl font-bold text-slate-900">{tier.price}</p>
                  <p className="mt-2 text-sm text-slate-700">{tier.detail}</p>
                  <p className="mt-3 text-xs font-semibold text-slate-600">Best for: {tier.bestFor}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold text-slate-900">Note on commercial rights</p>
              <p className="mt-2 text-sm text-slate-700">
                Commercial allowances depend on the model and your jurisdiction. Review the NightCafe terms, the chosen model terms, and any client requirements before publishing.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros and cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <p className="text-lg font-semibold text-emerald-700">Pros</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>Multiple models and style presets for variety.</li>
                  <li>Credit system keeps spending predictable with daily free credits.</li>
                  <li>Large community with challenges and remixable prompts.</li>
                  <li>Batch generations and upscaling without manual setup.</li>
                  <li>Web-based; no local GPU or installs needed.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <p className="text-lg font-semibold text-rose-700">Cons</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>Credit costs can rise on large runs or high-res outputs.</li>
                  <li>Commercial rights vary by model; verification is required.</li>
                  <li>Quality may lag behind top-tier closed models in some styles.</li>
                  <li>Queue times can vary on the free tier during peak hours.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">NightCafe alternatives</h2>
            <p className="mt-3 text-slate-700">Consider these if you need different strengths:</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-xs text-slate-600">AI image generator</p>
                  </div>
                  <Link className="text-sm font-semibold text-amber-700 hover:text-amber-500" to={`/tools/${alt.slug}`}>
                    View
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--comparisons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">NightCafe vs other AI art tools</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "NightCafe vs Midjourney",
                  betterFor: "Midjourney often wins on aesthetic quality; NightCafe wins on credit control and web access.",
                  choose: "Pick NightCafe if you want credits, web usage, and community challenges. Choose Midjourney if art quality is top priority and you are comfortable with Discord workflows.",
                },
                {
                  title: "NightCafe vs DALL-E",
                  betterFor: "DALL-E (especially the latest) offers strong coherence and text handling; NightCafe offers multiple models and remix culture.",
                  choose: "Pick NightCafe for community prompts and flexible models. Choose DALL-E for branded prompts and cleaner text rendering.",
                },
                {
                  title: "NightCafe vs Stable Diffusion local",
                  betterFor: "Local SD gives control and zero per-image fees but requires GPU and setup; NightCafe removes infrastructure work.",
                  choose: "Pick NightCafe if you do not want to manage hardware. Choose local SD if you need full control, custom checkpoints, and no platform limits.",
                },
                {
                  title: "NightCafe vs Adobe Firefly",
                  betterFor: "Firefly fits Adobe workflows and brand safety; NightCafe is model-flexible and community-driven.",
                  choose: "Pick NightCafe for experimentation and challenges. Pick Firefly if you live inside Adobe apps and need enterprise guardrails.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                  <p className="text-lg font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-2 text-sm text-slate-700">{item.betterFor}</p>
                  <p className="mt-3 text-sm font-semibold text-slate-800">Why choose</p>
                  <p className="mt-1 text-sm text-slate-700">{item.choose}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--worth bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth trying if you want quick AI art without running hardware, and you value community prompts. The credit system keeps spending visible, but large projects can consume credits quickly—plan budgets and test small first.
            </p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Use daily free credits to validate prompt quality before buying packs.",
                "Create a prompt library with style notes to reuse across projects.",
                "Document which model you used for each deliverable to aid compliance.",
                "Pair AI outputs with designer review to align with brand and accessibility.",
              ].map((tip) => (
                <div key={tip} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <p className="text-sm">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--faq bg-white">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} FAQ</h2>
            <div className="mt-6 space-y-3">
              {faqs.map((item, idx) => (
                <AccordionItem key={item.q} question={item.q} answer={item.a} defaultOpen={idx === 0} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section--final bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-2xl font-bold text-slate-900">Final verdict: who is {toolName} best for?</h2>
              <p className="mt-3 text-slate-700">
                {toolName} is best for creators and marketers who want flexible AI art without setup and enjoy learning from community prompts. If you need the absolute highest fidelity or enterprise guardrails, you may prefer Midjourney or Firefly—but {toolName} remains a strong choice for experimenting fast with clear credit controls.
              </p>
              <div className="mt-5 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">
                  If {toolName} fits your workflow, start a prompt test here:{" "}
                  <a className="text-amber-700 hover:text-amber-500" href={officialUrl}>
                    Visit {toolName}
                  </a>.
                </p>
                <div className="pt-2">
                  <Link
                    to="/tools"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
                  >
                    <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
                  </Link>
                </div>
              </div>
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

export default NightCafeToolPage;
