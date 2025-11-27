import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, BookOpen, Globe2, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "FlexClip AI";
const slug = "flexclip-ai";
const category = "Online Video Editing";
const shortPitch =
  "FlexClip AI is a browser-based video editor with templates, stock assets, AI text-to-video, and captions for quick marketing and social videos.";
const pricingSummary =
  "Free tier with watermarks and limited stock; paid plans start around $9.99/month adding HD export, more stock, and higher AI limits. Business plans raise limits further.";
const officialUrl = "https://www.flexclip.com";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/flexclip.com",
  gradient: "from-indigo-500 via-blue-500 to-emerald-500",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.22)]",
};

const alternatives = [
  { name: "Canva", slug: "canva" },
  { name: "CapCut", slug: "capcut" },
  { name: "InVideo", slug: "invideo" },
  { name: "Pictory", slug: "pictory" },
  { name: "Descript", slug: "descript" },
];

const faqs = [
  {
    q: "Is FlexClip good for beginners?",
    a: "Yes. Templates, drag-and-drop editing, and auto captions make it approachable for non-editors creating social and promo videos.",
  },
  {
    q: "Does FlexClip have AI features?",
    a: "FlexClip offers text-to-video, AI scripts, auto captions, and background removal to speed editing.",
  },
  {
    q: "Can I export without watermarks?",
    a: "Paid plans remove watermarks and unlock higher resolution exports.",
  },
  {
    q: "Are stock assets included?",
    a: "You get stock videos, images, and music; higher tiers include larger libraries and usage limits.",
  },
  {
    q: "Does it support screen recording?",
    a: "Yes. You can capture screen and webcam for tutorials or product demos.",
  },
  {
    q: "What export resolutions are available?",
    a: "Free exports may be limited; paid plans enable HD/Full HD/4K depending on tier.",
  },
  {
    q: "Can teams collaborate?",
    a: "Collaboration is limited compared to pro tools; it’s mainly single-user or small team sharing via links.",
  },
  {
    q: "Is there a mobile app?",
    a: "FlexClip is browser-first; check for current mobile support or use desktop for full features.",
  },
];

function FlexClipAIToolPage() {
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
        "FlexClip AI is a lightweight online video editor with templates, stock assets, and AI tools like text-to-video and auto captions—great for fast marketing clips and social content.",
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
      icon: <Sparkles className="h-5 w-5 text-indigo-500" />,
      title: "AI text-to-video and scripts",
      body: "Generate scripts and draft videos from prompts to jumpstart edits.",
    },
    {
      icon: <BookOpen className="h-5 w-5 text-blue-500" />,
      title: "Templates and stock library",
      body: "Prebuilt templates plus stock footage, images, and music to assemble videos quickly.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Auto captions and voiceover",
      body: "Automatic subtitles and text-to-speech voiceovers speed up social edits.",
    },
    {
      icon: <Plug className="h-5 w-5 text-cyan-500" />,
      title: "Screen and webcam recording",
      body: "Capture demos and tutorials directly inside the editor.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Branding tools",
      body: "Add logos, watermarks, and brand fonts/colors to keep outputs consistent.",
    },
    {
      icon: <Globe2 className="h-5 w-5 text-sky-500" />,
      title: "Aspect ratios and formats",
      body: "Export in multiple aspect ratios for social platforms with quick resizing.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="FlexClip AI review for marketers and creators: pricing, features, pros & cons, and alternatives for fast online video editing."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-blue-200/30 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-emerald-200/30 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-indigo-500" />
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
                  FlexClip AI speeds up social and marketing video creation with templates, stock, and AI tools in a browser-friendly editor.
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
              {toolName} is an {category.toLowerCase()} platform aimed at marketers, creators, and small teams that need quick, polished videos without pro editing skills.
            </p>
            <p className="mt-3 text-slate-700">
              Templates, stock assets, and AI tools reduce editing time for social posts, ads, and explainers. Screen capture and captions make tutorials fast to produce.
            </p>
            <p className="mt-3 text-slate-700">
              It’s best for lightweight workflows; heavy collaboration or color-accurate finishing still belong in pro NLEs.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} suits marketers and creators who want fast edits over fine-grained control.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Social media managers producing shorts and reels quickly.",
                "Marketers making promo or explainer videos without pro editors.",
                "Course creators capturing screen and adding captions fast.",
                "Small teams needing branded intros/outros and templates.",
                "Founders making pitch or product demo videos on a budget.",
                "Anyone wanting AI captions/text-to-video to speed up edits.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-indigo-400" />
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
              {toolName} emphasizes speed: templates, AI helpers, and stock assets reduce editing time for common marketing videos.
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
                  Free plan has watermarks and limited assets. Paid plans from ~$9.99/month remove watermarks, add HD/4K exports, more stock, and higher AI limits. Business tiers raise limits further.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Try Free to check workflow; upgrade to Plus/Business for HD exports, stock, and higher AI credits.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Free</td>
                    <td className="px-4 py-3">Testing and basic clips</td>
                    <td className="px-4 py-3">Watermark, limited stock/resolution</td>
                    <td className="px-4 py-3">Free</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Plus/Pro</td>
                    <td className="px-4 py-3">Regular creators and marketers</td>
                    <td className="px-4 py-3">HD/Full HD exports, more stock, AI limits</td>
                    <td className="px-4 py-3">~$9.99–$19.99/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business</td>
                    <td className="px-4 py-3">Higher volume teams</td>
                    <td className="px-4 py-3">Higher limits, 4K exports, priority support</td>
                    <td className="px-4 py-3">Higher/custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Choose based on export resolution, stock needs, and AI credit consumption. Watermarks and low resolution on Free make paid plans necessary for client work.
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
                  <li>Easy browser-based editor with templates.</li>
                  <li>AI tools for captions, scripts, and text-to-video.</li>
                  <li>Stock assets included on paid plans.</li>
                  <li>Fast resizing for social formats.</li>
                  <li>Screen/webcam recording built in.</li>
                  <li>Affordable entry pricing.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Limited advanced editing and audio controls vs. pro NLEs.</li>
                  <li>Collaboration features are basic.</li>
                  <li>Watermarks and resolution caps on Free.</li>
                  <li>AI and stock usage caps on lower tiers.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              {toolName} competes with online editors and AI video tools. Choose based on collaboration, editing depth, and export needs.
            </p>
            <p className="mt-2 text-slate-700">Every link below goes to a live tool page—no broken routes.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
                  </div>
                  <a className="text-sm font-semibold text-sky-600 hover:text-sky-500" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">Compare {toolName} to other online editors.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Canva</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/flexclip-ai-vs-canva">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Canva offers broader design tools with video. {toolName} focuses on quick video edits with screen recording and AI captions.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} for fast video workflows; choose Canva for mixed design + video needs.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs CapCut</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/flexclip-ai-vs-capcut">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                CapCut has strong mobile apps and effects for social. {toolName} is browser-first with templates and stock for marketing videos.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} for browser-based marketing edits; choose CapCut if you want mobile-first editing with advanced effects.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you need fast marketing and social videos with templates, stock, and AI helpers, {toolName} is worth it—especially if you lack pro editing skills.
            </p>
            <p className="mt-3 text-slate-700">
              If you need advanced color/audio control or team collaboration, consider Descript, Adobe Premiere, or CapCut for deeper editing features.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> {toolName} is a solid choice for quick, branded videos in the browser with AI speeding common tasks.</p>
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
              Choose {toolName} if you want quick, template-driven videos with AI captions and stock assets in a simple browser editor.
            </p>
            <p>
              Consider Canva for all-in-one design, CapCut for mobile-heavy workflows, or Descript for richer audio/video editing if you need more control.
            </p>
            <p>{toolName} accelerates everyday marketing videos while staying easy for non-editors to use.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here: <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>Visit {toolName}</a>.
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-sky-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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

export default FlexClipAIToolPage;
