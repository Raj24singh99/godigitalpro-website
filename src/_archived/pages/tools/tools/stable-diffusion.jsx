import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Stable Diffusion";
const slug = "stable-diffusion";
const category = "Generative AI – Images";
const shortPitch =
  "Stable Diffusion is an open-source text-to-image model that generates images from prompts. It powers many hosted services and can be run locally or via APIs.";
const pricingSummary =
  "Open-source model; costs come from hosting/compute or hosted API credits. Pricing varies by provider and GPU usage if self-hosting.";
const officialUrl = "https://stability.ai";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/stability.ai",
  gradient: "from-emerald-500 via-teal-500 to-blue-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.24)]",
};

const alternatives = [
  { name: "Midjourney", slug: "midjourney" },
  { name: "DALL·E", slug: "d-id" },
  { name: "Adobe Firefly", slug: "firefly-adobe" },
  { name: "Leonardo AI", slug: "leonardo-ai" },
  { name: "DreamStudio", slug: "dreamstudio" },
];

const faqs = [
  {
    q: "What is Stable Diffusion?",
    a: "Stable Diffusion is an open-source text-to-image model that generates images from prompts. It can be run locally, via APIs, or through hosted frontends.",
  },
  {
    q: "Who is it for?",
    a: "Developers, designers, and creators needing customizable, open generative image capabilities.",
  },
  {
    q: "How is pricing structured?",
    a: "The model is free; hosted APIs and services charge per image/compute. Self-hosting costs depend on GPU time.",
  },
  {
    q: "Can I run it locally?",
    a: "Yes. You can run Stable Diffusion locally with the right GPU; expect setup, GPU costs, and model management.",
  },
  {
    q: "What about licenses?",
    a: "Check the model license and content policies. Generated outputs may have restrictions; avoid violating IP or terms.",
  },
  {
    q: "Is fine-tuning available?",
    a: "Yes. You can fine-tune or use LoRAs/embeddings for specific styles; requires ML/GPU know-how.",
  },
  {
    q: "Do hosted options exist?",
    a: "Yes. DreamStudio and many providers offer hosted Stable Diffusion APIs and UIs.",
  },
  {
    q: "Is content moderation needed?",
    a: "Yes. Implement safety filters and policies, especially in user-facing products.",
  },
];

function StableDiffusionToolPage() {
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
        "Stable Diffusion is an open-source text-to-image model. It’s flexible for developers and creators who want customizable image generation and control over hosting.",
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
      title: "Text-to-image generation",
      body: "Create images from prompts with controllable styles and parameters.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Open-source & customizable",
      body: "Run locally or via APIs; tweak models, checkpoints, and settings to fit workflows.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Fine-tuning",
      body: "Use LoRAs/embeddings or fine-tune models for specific styles or products.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Safety controls",
      body: "Apply filters and policies to moderate outputs, especially for user-facing use cases.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Flexible hosting",
      body: "Choose self-hosted GPUs, on-prem, or hosted APIs like DreamStudio.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Ecosystem tools",
      body: "Integrate with image editors, automation, and creative pipelines via community tooling.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Stable Diffusion review: pricing, features, pros & cons, and alternatives so you can decide if open-source text-to-image fits your workflow."
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
                  {toolName} offers open, customizable text-to-image generation—ideal for teams that want control over models, hosting, and safety.
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
              {toolName} is an open-source text-to-image model. It underpins many hosted tools and can be run locally or via APIs. Teams use it for creative generation, prototyping, and product imagery when they want flexibility and control.
            </p>
            <p className="mt-3 text-slate-700">
              Hosting choices range from local GPU to cloud providers and managed APIs like DreamStudio. Consider performance, cost, and safety policies when choosing a setup.
            </p>
            <p className="mt-3 text-slate-700">
              Fine-tuning and LoRA support enable brand-specific styles, but require ML expertise and careful governance.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams comfortable with AI tooling who need flexible, controllable image generation.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Developers embedding image generation into apps via API.",
                "Designers prototyping visuals and concepts quickly.",
                "Marketing teams creating variants of product or campaign imagery.",
                "Studios and agencies experimenting with styles using fine-tuning/LoRAs.",
                "Teams requiring on-prem or self-hosted options for compliance.",
                "Builders who want cost control and customization vs. closed models.",
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
            <p className="mt-3 text-slate-700">
              {toolName} provides open, flexible text-to-image generation with hosting choice, customization, and safety controls.
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
                  The model is free; costs come from compute. Hosted APIs charge per image or subscription; self-hosting costs depend on GPU time and infra. Budget for storage, safety filters, and fine-tuning if needed.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Use a hosted API to validate quality and speed; move to self-hosting only if you need control or lower marginal costs at scale.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Hosted API (e.g., DreamStudio)</td>
                    <td className="px-4 py-3">Fast start</td>
                    <td className="px-4 py-3">Managed infra, credits-based billing</td>
                    <td className="px-4 py-3">Great for prototyping</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Self-hosted cloud GPU</td>
                    <td className="px-4 py-3">More control</td>
                    <td className="px-4 py-3">Custom configs, pay for GPU time</td>
                    <td className="px-4 py-3">Needs ops and safety controls</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">On-prem</td>
                    <td className="px-4 py-3">Compliance/latency</td>
                    <td className="px-4 py-3">Full control, hardware investment</td>
                    <td className="px-4 py-3">Highest ops overhead</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Account for safety moderation and fine-tuning costs. Monitor inference times and GPU utilization to manage spend.
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
                  <li>Open-source and highly customizable.</li>
                  <li>Multiple hosting options (API, self-host, on-prem).</li>
                  <li>Fine-tuning and LoRA support for specific styles.</li>
                  <li>Active community and ecosystem tools.</li>
                  <li>Cost control possible with the right setup.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Quality varies by model version and prompting; may trail closed models in some cases.</li>
                  <li>Self-hosting requires GPU, ops, and safety controls.</li>
                  <li>Content moderation is on you; risk of misuse without guardrails.</li>
                  <li>License and IP considerations must be reviewed for commercial use.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other image generation tools to match quality, control, and hosting preferences.
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
            <p className="text-slate-700">See how {toolName} compares to other text-to-image platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Midjourney</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/midjourney">
                  View Midjourney
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Midjourney is closed and Discord-based with strong aesthetics; {toolName} is open and hostable. Choose Midjourney for out-of-the-box quality, {toolName} for control and integration flexibility.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Adobe Firefly</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/firefly-adobe">
                  View Firefly
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Firefly is tightly integrated with Adobe apps and has commercial-safe training data; {toolName} offers openness and self-hosting. Pick based on ecosystem fit and licensing needs.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want flexible, open-source image generation and can manage hosting, safety, and quality tuning.
            </p>
            <p className="mt-3 text-slate-700">
              Use hosted APIs to start fast; move to self-hosting or fine-tuning when you need control, cost optimization, or custom styles.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A powerful open model for teams that value control—ensure governance, safety, and quality checks for production use.
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
              Choose {toolName} if you need customizable, open-source text-to-image generation and can manage hosting or use a trusted API.
            </p>
            <p>
              Consider Midjourney or Firefly for turnkey, closed models; {toolName} fits when you prioritize control, cost management, and extensibility.
            </p>
            <p>{toolName} unlocks flexible image generation—pair with strong safety and QA before shipping outputs to users.</p>
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

export default StableDiffusionToolPage;
