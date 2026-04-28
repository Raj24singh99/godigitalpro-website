import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Leonardo AI";
const slug = "leonardo-ai";
const category = "AI Image & Design";
const shortPitch = "Leonardo AI is an image generation platform for creative teams, offering fine-tuned models, prompts, and upscaling to produce branded visuals.";
const pricingSummary =
  "Free and paid tiers with daily credits. Paid plans add higher limits, priority generation, training/fine-tuning options, and commercial usage rights.";
const officialUrl = "https://leonardo.ai";
const ratingValue = 4.6;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/leonardo.ai",
  gradient: "from-purple-500 via-fuchsia-500 to-amber-500",
  glow: "shadow-[0_20px_80px_rgba(192,38,211,0.24)]",
};

const alternatives = [
  { name: "Midjourney", slug: "midjourney" },
  { name: "DALL·E", slug: "dalle" },
  { name: "Ideogram", slug: "ideogram" },
  { name: "Adobe Firefly", slug: "adobe-firefly" },
  { name: "Stable Diffusion", slug: "stable-diffusion" },
];

const faqs = [
  {
    q: "What is Leonardo AI?",
    a: "Leonardo AI is an image generation platform that provides models, fine-tuning, and editing tools to create branded visuals and concepts.",
  },
  {
    q: "Who is Leonardo AI best for?",
    a: "Designers, marketers, and game/creative teams needing quick visual concepts with style control and upscaling.",
  },
  {
    q: "Does it support fine-tuning?",
    a: "Yes. Custom models/fine-tuning are available on paid tiers to align outputs to a brand or style.",
  },
  {
    q: "How does pricing work?",
    a: "Credit-based tiers with daily/monthly limits. Paid plans add more credits, priority, fine-tuning, and commercial rights.",
  },
  {
    q: "Can I edit or upscale images?",
    a: "Yes. Upscaling, variations, and editing tools help refine outputs.",
  },
  {
    q: "Are there templates or prompts?",
    a: "Prompt libraries and models help start quickly; you can save styles and presets.",
  },
  {
    q: "What about licensing?",
    a: "Commercial usage depends on your plan and generated content; review terms before commercializing outputs.",
  },
  {
    q: "Do I still need human review?",
    a: "Yes. Check for brand fit, accuracy, and compliance; AI outputs may need editing.",
  },
];

function LeonardoAIToolPage() {
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
        "Leonardo AI offers image generation with fine-tuned models, prompt tools, and upscaling to help teams create on-brand visuals quickly.",
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
      title: "Fine-tuned models",
      body: "Use custom or community models to align outputs with specific styles and brands.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-purple-500" />,
      title: "Fast generation",
      body: "Priority queues on paid tiers deliver images quickly for iterative workflows.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Prompt tools & presets",
      body: "Prompt libraries, styles, and presets help guide consistent outputs.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Rights & usage",
      body: "Commercial terms depend on plan; review licensing and compliance before publishing.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Upscaling & edits",
      body: "Upscale, vary, and refine images to production-ready quality.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Export & workflow",
      body: "Download and integrate outputs into design pipelines; pair with editors for final polish.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Leonardo AI review: pricing, features, pros & cons, and alternatives so you can choose the right AI image generation tool."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-fuchsia-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-amber-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-purple-600" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-purple-100 blur-3xl" />
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
                  {toolName} helps creative teams generate concepts and branded visuals—fine-tune models, upscale outputs, and review for brand fit before publishing.
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
              {toolName} is an AI image generation platform that provides ready-to-use and fine-tuned models, prompt tools, and editing options to create visuals for marketing, games, and design.
            </p>
            <p className="mt-3 text-slate-700">
              Use it to generate concepts, product mockups, and social visuals; then upscale or edit outputs for production. Save styles and prompts to keep branding consistent.
            </p>
            <p className="mt-3 text-slate-700">
              Review licensing and commercial terms on your plan before using outputs in production campaigns.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for creative teams and marketers that need fast visual concepts and style control with manageable licensing.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Marketers creating social and ad visuals quickly.",
                "Designers iterating on concepts and styles before final polish.",
                "Game/creative teams generating assets or mood boards.",
                "Teams needing fine-tuned models for brand consistency.",
                "Agencies prototyping ideas for client presentations.",
                "Users who will review outputs for rights, accuracy, and compliance.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-purple-500" />
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
              {toolName} focuses on fine-tuned models, prompt tools, and editing to deliver on-brand visuals quickly with credit-based usage.
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
                  {toolName} uses credit-based tiers. Paid plans offer more daily credits, priority generation, fine-tuning, and commercial rights. Costs depend on volume and required features.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start free to test quality; upgrade if you need priority, fine-tuning, or commercial usage. Track daily credit burn.</p>
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
                    <td className="px-4 py-3">Testing/light use</td>
                    <td className="px-4 py-3">Daily credits, community models</td>
                    <td className="px-4 py-3">Check usage limits</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Creators/teams</td>
                    <td className="px-4 py-3">More credits, priority, upscales</td>
                    <td className="px-4 py-3">Review rights for commercial use</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">High volume</td>
                    <td className="px-4 py-3">Custom limits, fine-tuning, support</td>
                    <td className="px-4 py-3">Negotiate SLAs and compliance</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Track credit usage, review licensing, and maintain human QA for brand fit. Consider privacy when using custom data for fine-tuning.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-purple-50 p-5 shadow-sm ring-1 ring-purple-100">
                <div className="flex items-center gap-2 text-purple-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Fine-tuned models and style presets for brand alignment.</li>
                  <li>Priority generation on paid tiers.</li>
                  <li>Upscaling and editing for higher-quality outputs.</li>
                  <li>Prompt tools and community models for faster starts.</li>
                  <li>Credit-based plans to start free and scale.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Credit limits; high volume can get costly.</li>
                  <li>License/commercial rights vary by plan.</li>
                  <li>Outputs need human QA for brand and accuracy.</li>
                  <li>Fine-tuning may require more time and data management.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} to other AI image generators to match your style control, licensing, and speed requirements.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-purple-700 hover:text-purple-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} compares with other AI image generators.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Midjourney</h3>
                <a className="text-sm font-semibold text-purple-700 hover:text-purple-600" href="/tools/midjourney">
                  View Midjourney
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Midjourney excels at artistic outputs via Discord; {toolName} offers web app UX, fine-tuning, and upscaling. Choose based on workflow preference and style control needs.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs DALL·E</h3>
                <a className="text-sm font-semibold text-purple-700 hover:text-purple-600" href="/tools/dalle">
                  View DALL·E
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                DALL·E integrates tightly with OpenAI’s ecosystem; {toolName} focuses on fine-tuning, presets, and production tools like upscaling. Pick based on integration needs and style controls.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need fast, style-controlled image generation with fine-tuning and upscaling, and you can manage credits and licensing.
            </p>
            <p className="mt-3 text-slate-700">
              Start free to test quality; upgrade for priority and rights. Keep human review for brand fit, accuracy, and compliance.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A strong image-generation platform for creative teams—best when paired with clear QA and licensing checks.
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
              Choose {toolName} if you want fine-tuned models, prompt tools, and upscaling in a web app and can manage credit usage and rights.
            </p>
            <p>
              Consider Midjourney for artistic Discord workflows or DALL·E for OpenAI ecosystem integration; keep {toolName} for production-focused tools and style control.
            </p>
            <p>{toolName} accelerates visual creation—ensure QA, licensing checks, and human edits before commercial use.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-purple-700 hover:text-purple-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-purple-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default LeonardoAIToolPage;
