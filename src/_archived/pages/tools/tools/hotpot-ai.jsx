import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Hotpot AI";
const slug = "hotpot-ai";
const category = "AI Design & Imaging";
const shortPitch =
  "Hotpot AI offers AI tools for image generation, background removal, object cleanup, and design templates for social, marketing, and product visuals.";
const pricingSummary =
  "Credit-based and subscription options; costs vary by resolution and task (generation, upscale, removal). Free trials with watermarks/limits.";
const officialUrl = "https://hotpot.ai";
const ratingValue = 4.0;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/hotpot.ai",
  gradient: "from-indigo-500 via-blue-500 to-sky-500",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.24)]",
};

const alternatives = [
  { name: "Remove.bg", slug: "remove-bg" },
  { name: "Cleanup.pictures", slug: "cleanup-pictures" },
  { name: "Clipdrop", slug: "clipdrop" },
  { name: "Fotor AI", slug: "fotor-ai" },
  { name: "Picsart AI", slug: "picsart-ai" },
];

const faqs = [
  {
    q: "What is Hotpot AI?",
    a: "Hotpot AI is a suite of AI design tools for image generation, background removal, cleanup, upscaling, and templated graphics.",
  },
  {
    q: "Who is it for?",
    a: "Marketers, designers, ecommerce sellers, and creators who need quick visuals without heavy design software.",
  },
  {
    q: "Does it remove backgrounds?",
    a: "Yes. Background removal and object cleanup are built in for product and profile shots.",
  },
  {
    q: "How is pricing structured?",
    a: "Credits or subscriptions; higher resolutions and advanced tasks use more credits. Trials offer limited or watermarked exports.",
  },
  {
    q: "Is there AI image generation?",
    a: "Yes. Text-to-image generation with style options and upscaling for higher quality.",
  },
  {
    q: "Can I use templates?",
    a: "Social, marketing, and product templates are available to speed design.",
  },
  {
    q: "Do I retain rights to generated images?",
    a: "Terms vary by plan; review licensing and commercial use policies, especially for AI-generated content.",
  },
  {
    q: "Is there an API?",
    a: "Hotpot offers an API for some tasks; check documentation and pricing for usage limits.",
  },
];

function HotpotAiToolPage() {
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
        "Hotpot AI bundles AI image generation, background removal, cleanup, and templates. It’s useful for quick visuals and product images, though quality varies and licensing should be reviewed.",
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
      title: "AI image generation",
      body: "Create images from text prompts with style options and upscaling.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Background removal",
      body: "Remove backgrounds for product shots, portraits, and social images.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Object cleanup",
      body: "Erase unwanted objects and blemishes from photos.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Upscaling",
      body: "Improve resolution and sharpness for higher-quality exports.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Templates",
      body: "Ready-made templates for social posts, ads, and product graphics.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "API access",
      body: "API for programmatic image tasks (availability depends on plan).",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Hotpot AI review: pricing, features, pros & cons, and alternatives so you can pick the right AI design tool."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-indigo-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-sky-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-indigo-600" />
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
                  {toolName} speeds up design tasks—generate, clean up, and upscale images for social, ads, and ecommerce with minimal editing overhead.
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
              {toolName} is a set of AI-powered design tools for generating images, removing backgrounds, cleaning up photos, and creating templates. It targets marketers, ecommerce sellers, and creators that need fast visuals without pro design tools.
            </p>
            <p className="mt-3 text-slate-700">Exports and upscaling help polish outputs; quality varies by prompt and resolution.</p>
            <p className="mt-3 text-slate-700">Use it to prototype visuals quickly; review licensing and brand fit before publishing.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Great for teams needing quick visuals, product images, or social graphics.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Ecommerce sellers preparing product photos and listings.",
                "Marketing teams making social posts and ads rapidly.",
                "Creators needing background removal and cleanup on the go.",
                "Teams prototyping concepts before full design work.",
                "Small businesses without heavy design resources.",
                "Developers automating image tasks via API (where available).",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-indigo-500" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">{toolName} focuses on AI image generation, cleanup, and templated design.</p>
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
                  Pricing is credit-based with subscriptions available. Higher resolutions and advanced tasks (upscale, cleanup) consume more credits. Trials often include limits or watermarks; paid removes restrictions.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Test outputs on trial; buy credits or a plan sized to your resolution needs and task mix.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Trial/Free</td>
                    <td className="px-4 py-3">Testing quality</td>
                    <td className="px-4 py-3">Limited tasks, watermarks or lower res</td>
                    <td className="px-4 py-3">Use to gauge fit</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Credits/Pay-as-you-go</td>
                    <td className="px-4 py-3">Occasional needs</td>
                    <td className="px-4 py-3">Buy credits for specific tasks/resolutions</td>
                    <td className="px-4 py-3">Flexible for sporadic use</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Subscriptions</td>
                    <td className="px-4 py-3">Regular creators/teams</td>
                    <td className="px-4 py-3">Monthly credits, higher limits, no watermarks</td>
                    <td className="px-4 py-3">Pick based on resolution needs</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Plan for export resolutions you need; check licensing for commercial use of AI-generated content.</p>
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
                  <li>Multiple tools (generate, remove, cleanup, upscale) in one place.</li>
                  <li>Templates speed up social and marketing graphics.</li>
                  <li>Useful for ecommerce product prep and quick edits.</li>
                  <li>Credit model offers flexibility.</li>
                  <li>API available for some tasks.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Image quality can vary; requires prompt and edit iteration.</li>
                  <li>Credits can add up for high-res or frequent tasks.</li>
                  <li>Watermarks/limits on free usage.</li>
                  <li>Licensing/commercial rights need review for generated content.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other AI image and design tools.</p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} stacks against other AI imaging tools.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Remove.bg</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/remove-bg">
                  View Remove.bg
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Remove.bg specializes in background removal at high accuracy; {toolName} offers removal plus generation, cleanup, and templates. Choose Remove.bg for best-in-class cutouts, {toolName} for broader design tasks.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Clipdrop</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/clipdrop">
                  View Clipdrop
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Clipdrop has strong cleanup and relighting; {toolName} emphasizes templates and a mix of generation and editing. Pick Clipdrop for advanced cleanup quality, {toolName} for an all-in-one design set.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need quick AI-assisted visuals, background removal, and templates without heavyweight design tools.
            </p>
            <p className="mt-3 text-slate-700">If you need the highest quality cutouts or advanced photo editing, consider specialized tools like Remove.bg or Clipdrop and traditional editors.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A handy all-in-one AI design toolkit—best when you balance speed with quality checks and licensing review.
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
            <p>Choose {toolName} if you need AI generation, removal, cleanup, and templates in one lightweight toolkit.</p>
            <p>Pick specialized tools like Remove.bg for the most accurate cutouts, or Clipdrop for advanced cleanup; use traditional editors for complex retouching.</p>
            <p>{toolName} works best when paired with clear prompts, quality control, and licensing awareness.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-indigo-700 hover:text-indigo-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-indigo-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default HotpotAiToolPage;
