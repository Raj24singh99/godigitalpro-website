import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Canva AI Magic Studio";
const slug = "canva-ai-magic-studio";
const category = "AI Design Suite";
const shortPitch = "Canva AI Magic Studio adds generative design tools—Magic Media, Magic Write, brand controls, and quick editing—on top of Canva's visual editor.";
const pricingSummary =
  "Free and Pro tiers; AI credits are included with limits. Higher plans add brand kits, collaboration, more credits, and premium assets.";
const officialUrl = "https://www.canva.com/ai-magic-studio";
const ratingValue = 4.6;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/canva.com",
  gradient: "from-violet-500 via-fuchsia-500 to-rose-500",
  glow: "shadow-[0_20px_80px_rgba(217,70,239,0.26)]",
};

const alternatives = [
  { name: "Adobe Firefly", slug: "firefly-adobe" },
  { name: "Fotor AI", slug: "fotor-ai" },
  { name: "Leonardo AI", slug: "leonardo-ai" },
  { name: "Midjourney", slug: "midjourney" },
  { name: "Kapwing AI", slug: "kapwing-ai" },
];

const faqs = [
  {
    q: "What is Canva AI Magic Studio?",
    a: "Canva AI Magic Studio is Canva's suite of AI tools for text-to-image, video effects, copy generation, and quick edits inside the Canva editor.",
  },
  {
    q: "Who is it for?",
    a: "Designers, marketers, social teams, and non-designers who want fast visual creation with templates and brand controls.",
  },
  {
    q: "What AI features are included?",
    a: "Magic Media (image/video generation), Magic Write (copy), background removal, auto-translate, resize, and other AI-powered editing tools.",
  },
  {
    q: "How is pricing structured?",
    a: "Free and Pro plans include AI credits. Pro adds more credits, brand kits, premium assets, and collaboration. Teams plans expand collaboration further.",
  },
  {
    q: "Can I control brand usage?",
    a: "Yes. Brand kits, fonts, and colors help enforce brand consistency. Always review AI outputs for on-brand alignment.",
  },
  {
    q: "Does Canva AI support video?",
    a: "Yes. Magic Media can generate or edit video clips, plus tools for captions, resize, and effects within the editor.",
  },
  {
    q: "Are credits unlimited?",
    a: "No. AI features consume credits. Higher tiers include more credits; heavy use may require additional allowances.",
  },
  {
    q: "Can I use outputs commercially?",
    a: "Canva provides licensing guidance; review Canva's terms and asset licensing before commercial use.",
  },
];

function CanvaAiMagicStudioToolPage() {
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
        "Canva AI Magic Studio layers AI image, video, and copy tools onto Canva's editor. It speeds up content creation with brand kits and templates; review outputs for brand fit and licensing.",
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
      title: "Magic Media",
      body: "Generate images and short videos from prompts with style controls and editing tools.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Magic Write",
      body: "Draft copy, captions, and headlines directly in Canva docs and designs.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Brand kits",
      body: "Enforce logos, fonts, and colors to keep AI-assisted designs on-brand.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Resize & translate",
      body: "Instantly resize designs for multiple formats and translate text for localization.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Integrations",
      body: "Publish to social platforms, collaborate with teams, and pull assets from libraries.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Background & edit tools",
      body: "Background removal, expand, eraser, and other quick fixes powered by AI.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Canva AI Magic Studio review: features, pricing, pros & cons, and alternatives for AI-powered design and content creation."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-rose-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-fuchsia-600" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-fuchsia-100 blur-3xl" />
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
                  {toolName} speeds up creative work with AI images, video effects, and copy—review outputs for brand fit and licensing.
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
              {toolName} is Canva's AI toolkit that sits inside the familiar Canva editor. It lets you generate images and short videos, draft copy, translate text, and resize designs quickly.
            </p>
            <p className="mt-3 text-slate-700">
              Pair AI outputs with brand kits to stay consistent. Human review is still needed for brand safety, factual accuracy, and licensing.
            </p>
            <p className="mt-3 text-slate-700">Templates, stock assets, and publishing integrations help teams ship faster across channels.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams producing social, marketing, and lightweight creative assets quickly.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Social media teams generating images, videos, and captions fast.",
                "Marketers creating ads, banners, and presentations at pace.",
                "Non-designers who need templates and AI boosts with guardrails.",
                "Agencies producing variants and localizations for clients.",
                "Teams that want brand kits to keep AI outputs consistent.",
                "Creators repurposing content across channels and formats.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-fuchsia-500" />
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
              {toolName} focuses on AI-assisted image/video generation, copywriting, brand controls, and quick editing inside Canva.
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
                  {toolName} follows Canva's Free, Pro, and Teams pricing. AI credits are included with limits; Pro/Teams add more credits, brand kits, premium assets, and collaboration.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start free to test AI tools; upgrade to Pro/Teams for more credits, brand controls, and shared libraries.</p>
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
                    <td className="px-4 py-3">Personal use</td>
                    <td className="px-4 py-3">Limited AI credits, basic assets, core editor</td>
                    <td className="px-4 py-3">Good to explore features</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Creators & small teams</td>
                    <td className="px-4 py-3">More AI credits, brand kits, premium assets</td>
                    <td className="px-4 py-3">Most popular choice</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Teams</td>
                    <td className="px-4 py-3">Collaboration at scale</td>
                    <td className="px-4 py-3">Shared libraries, approvals, more credits</td>
                    <td className="px-4 py-3">Best for multi-seat workflows</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Monitor AI credit usage, asset licensing, and collaboration needs when picking a plan.</p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-fuchsia-50 p-5 shadow-sm ring-1 ring-fuchsia-100">
                <div className="flex items-center gap-2 text-fuchsia-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>AI images, video effects, and copy inside Canva's familiar editor.</li>
                  <li>Brand kits keep designs consistent across teams.</li>
                  <li>Fast resizing, translating, and editing for multi-channel needs.</li>
                  <li>Huge template and asset library to start from.</li>
                  <li>Publishing integrations and collaboration tools built-in.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>AI credits are limited; heavy use may need more allowances.</li>
                  <li>Outputs require review for brand fit and licensing.</li>
                  <li>Advanced design control is lighter than pro design tools.</li>
                  <li>Video generation/editing is improving but not fully pro-grade.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other AI design tools to match your control, asset needs, and budget.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-fuchsia-700 hover:text-fuchsia-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} stacks against other AI design platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Adobe Firefly</h3>
                <a className="text-sm font-semibold text-fuchsia-700 hover:text-fuchsia-600" href="/tools/firefly-adobe">
                  View Adobe Firefly
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Firefly integrates with Adobe apps and offers detailed controls. {toolName} is faster for template-driven design and collaboration; pick based on control vs. speed.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Midjourney</h3>
                <a className="text-sm font-semibold text-fuchsia-700 hover:text-fuchsia-600" href="/tools/midjourney">
                  View Midjourney
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Midjourney excels at artistic generation via prompts. {toolName} offers integrated editing, templates, and publishing—better for fast, on-brand production.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want AI-assisted images, video, and copy directly inside Canva with brand guardrails and publishing integrations.
            </p>
            <p className="mt-3 text-slate-700">
              Plan for credit usage, asset licensing, and human review to keep outputs on-brand and compliant.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A powerful AI add-on for fast, on-brand creative production—best when paired with clear brand guidelines and review steps.
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
              Choose {toolName} if you want AI creation embedded in Canva with templates, brand kits, and publishing in one place.
            </p>
            <p>
              Consider Adobe Firefly for deeper control in Adobe apps or Midjourney for artistic generation; use {toolName} when speed, collaboration, and brand guardrails matter.
            </p>
            <p>{toolName} helps teams ship creative faster—keep review loops for brand, factual, and licensing checks.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-fuchsia-700 hover:text-fuchsia-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-fuchsia-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default CanvaAiMagicStudioToolPage;
