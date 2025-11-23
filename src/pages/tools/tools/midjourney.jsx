import React, { useState } from "react";
import { Sparkles, Wand2, Brush, Palette, ShieldCheck, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Midjourney";
const slug = "midjourney";
const category = "AI Image Generation";
const shortPitch =
  "Midjourney is a leading AI image generator known for artistic quality, style controls, and fast iteration, used by creatives for concept art, marketing visuals, and product mockups.";
const pricingSummary = "Paid plans begin around $10–$30/month depending on fast hours and usage; no ongoing free tier.";
const officialUrl = "https://www.midjourney.com/";
const ratingValue = 4.6;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/midjourney.com",
  gradient: "from-indigo-500 via-purple-500 to-pink-500",
  glow: "shadow-[0_20px_80px_rgba(109,40,217,0.25)]",
};

const alternatives = [
  { name: "Canva", slug: "canva", blurb: "Templates + Magic Media for quick creatives." },
  { name: "Veed", slug: "veed", blurb: "Video + AI visuals and editing." },
  { name: "Pictory", slug: "pictory", blurb: "AI video/promo creation from scripts." },
  { name: "Synthesia", slug: "synthesia", blurb: "AI video avatars and scenes from text." },
  { name: "Adobe Express", slug: "canva", blurb: "Use Canva/Express depending on your stack." },
];

const faqs = [
  { q: "What is Midjourney best at?", a: "Artistic, stylized images with strong lighting and composition. Great for concept art, marketing visuals, and moodboards." },
  { q: "Is there a free plan?", a: "No ongoing free tier. Usage is paid via monthly subscriptions that include fast hours; additional usage can be purchased." },
  { q: "Does Midjourney support custom styles?", a: "Yes. You can guide style with prompts, stylize values, model versions, seeds, and reference images." },
  { q: "Can I use images commercially?", a: "Commercial rights depend on your plan. Paid subscribers generally can use outputs commercially; check the current terms." },
  { q: "How do I access it?", a: "Primarily via Discord today, with a web experience rolling out. You prompt to generate, upscale, and vary images." },
  { q: "Does it handle brand consistency?", a: "It can approximate with reference images and prompt engineering, but it’s less consistent than brand-trained fine-tuned models." },
  { q: "Is it safe for work?", a: "Midjourney enforces content rules; unsafe prompts are blocked. Always review outputs for brand compliance." },
  { q: "How fast is it?", a: "Fast mode is quick for iterations; relaxed mode queues jobs at lower priority to save credits." },
];

const featureBlocks = [
  {
    icon: <Wand2 className="h-5 w-5 text-purple-500" />,
    title: "High-quality image generation",
    body: "Produces detailed, stylized images with strong lighting and composition suitable for concept art and marketing.",
  },
  {
    icon: <Brush className="h-5 w-5 text-amber-500" />,
    title: "Style control",
    body: "Guide outputs with stylize values, seeds, aspect ratios, model versions, and reference images.",
  },
  {
    icon: <Palette className="h-5 w-5 text-emerald-500" />,
    title: "Variations & upscaling",
    body: "Quickly vary, upscale, and remix outputs to refine direction without starting over.",
  },
  {
    icon: <Sparkles className="h-5 w-5 text-rose-500" />,
    title: "Fast iteration",
    body: "Fast mode delivers rapid generations; relaxed mode offers cheaper queued runs for volume exploration.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5 text-sky-600" />,
    title: "Content and safety controls",
    body: "Moderation and community standards keep generations within acceptable use; brand review still required.",
  },
  {
    icon: <Rocket className="h-5 w-5 text-indigo-500" />,
    title: "Growing ecosystem",
    body: "Accessible via Discord with a web experience emerging, plus active prompt communities for learning fast.",
  },
];

function MidjourneyToolPage() {
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
        "Midjourney excels at artistic, stylized AI images. It’s popular for concept art, marketing visuals, and mockups thanks to strong style control and fast iteration.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
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

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Quality, Pros & Cons, Alternatives`}
        description="Midjourney review for 2025: pricing, image quality, style controls, pros & cons, and how it compares to other AI image/video tools."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-purple-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-pink-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-amber-500" />
                {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                {toolName} Review (2025): Artistic AI images with style control
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-pink-200 blur-3xl" />
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
                  Midjourney produces high-quality AI images with strong style control. It’s ideal for concept art, marketing visuals, and fast iteration.
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
              Midjourney is an AI image generator that turns text prompts and reference images into high-quality visuals. It’s favored for stylized, artistic outputs and responsive iteration.
            </p>
            <p className="mt-3 text-slate-700">
              Creatives and marketers use it for concept art, moodboards, social assets, thumbnails, product mockups, and campaign visuals without expensive shoots.
            </p>
            <p className="mt-3 text-slate-700">
              Access is primarily via Discord with a web experience rolling out; you prompt, vary, and upscale images rapidly to reach the style you need.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Midjourney suits teams needing fast, high-quality visuals without traditional design cycles.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Marketers creating campaign visuals and social assets.",
                "Designers exploring concepts, styles, and moodboards.",
                "Product teams mocking up ideas and hero images quickly.",
                "Founders and creators generating thumbnails and cover art.",
                "Agencies producing options for clients without lengthy shoots.",
                "Teams experimenting with visual directions before full production.",
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
            <p className="mt-3 text-slate-700">Midjourney focuses on visual quality, style control, and iteration speed.</p>
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
                  Plans scale by fast hours and access. There is no ongoing free plan. Higher tiers offer more fast generations and concurrency; relaxed mode queues jobs at lower priority to stretch credits.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Use lower tiers for light usage; upgrade when you need more fast hours or team capacity.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Basic</td>
                    <td className="px-4 py-3">Light creative testing</td>
                    <td className="px-4 py-3">Limited fast hours; relaxed queue</td>
                    <td className="px-4 py-3">~$10/mo</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Standard</td>
                    <td className="px-4 py-3">Regular design/marketing use</td>
                    <td className="px-4 py-3">More fast hours, priority access</td>
                    <td className="px-4 py-3">~$30/mo</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro / Team</td>
                    <td className="px-4 py-3">Heavy use or team collaboration</td>
                    <td className="px-4 py-3">Higher quotas, concurrency, stealth mode</td>
                    <td className="px-4 py-3">Higher tier</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Midjourney credits are based on fast hours; relaxed mode helps stretch budgets when speed is less critical.</p>
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
                  <li>Top-tier artistic quality and style.</li>
                  <li>Fast iteration with variations and upscaling.</li>
                  <li>Good style control via prompts, stylize, seeds, references.</li>
                  <li>Active community and examples to learn from.</li>
                  <li>Web experience emerging beyond Discord.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>No ongoing free tier; usage is paid.</li>
                  <li>Access largely via Discord (web rolling out).</li>
                  <li>Brand/style consistency can require prompt effort.</li>
                  <li>Moderation/content limits may restrict some use cases.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">If you want simpler templates, video-focused AI, or brand-safe analytics, consider these.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.name} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.blurb}</p>
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
            <p className="text-slate-700">Compare Midjourney with leading AI image/video tools.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs DALL·E vs Stable Diffusion</h3>
                <a className="text-sm font-semibold text-purple-700 hover:text-purple-600" href="/tools/compare/midjourney-vs-dalle-vs-stable-diffusion">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Midjourney prioritizes artistic quality; DALL·E offers strong versatility and editing; Stable Diffusion is flexible and self-hostable with community models.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Synthesia vs Pictory</h3>
                <a className="text-sm font-semibold text-purple-700 hover:text-purple-600" href="/tools/compare/synthesia-vs-pictory-vs-veed">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                For video needs, Synthesia and Pictory handle AI video generation. Midjourney focuses on images—pair it with video tools for full creative stacks.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you want high-quality, stylized images quickly, Midjourney is worth it. It accelerates concepting and marketing visuals with strong style control. Budget for paid usage; there’s no ongoing free plan.
            </p>
            <p className="mt-3 text-slate-700">
              For strict brand consistency or self-hosted control, consider Stable Diffusion. For built-in editing and versatility, DALL·E is compelling. Use Midjourney when artistry and speed matter most.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> A top choice for creatives and marketers needing standout AI imagery fast.
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
              Choose Midjourney for fast, high-quality AI images with strong style control. It fits marketers, designers, and creators who need standout visuals quickly.
            </p>
            <p>
              Consider DALL·E for editing and versatility, or Stable Diffusion for self-hosted control and consistent models. Pair Midjourney with video AI tools when you need motion.
            </p>
            <p className="font-semibold text-slate-900">
              Ready to try {toolName}? <a className="text-purple-700 hover:text-purple-600" href={officialUrl}>Visit {toolName}</a>.
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-purple-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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
      {open && (
        <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">
          {answer}
        </div>
      )}
    </div>
  );
}

export default MidjourneyToolPage;
