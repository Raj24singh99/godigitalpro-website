import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, BookOpen, Globe2, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Fotor AI";
const slug = "fotor-ai";
const category = "Photo Editing & AI Image";
const shortPitch =
  "Fotor AI combines browser-based photo editing with AI tools like background removal, retouching, and text-to-image for quick social and marketing visuals.";
const pricingSummary =
  "Free plan with limited exports and watermarks; Pro starts around $8.99/month unlocking HD exports, more AI credits, and advanced tools. Pro+ adds stock assets and higher limits.";
const officialUrl = "https://www.fotor.com";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/fotor.com",
  gradient: "from-amber-500 via-orange-500 to-emerald-500",
  glow: "shadow-[0_20px_80px_rgba(249,115,22,0.22)]",
};

const alternatives = [
  { name: "Canva", slug: "canva" },
  { name: "PicsArt", slug: "picsart" },
  { name: "Adobe Express", slug: "adobe-express" },
  { name: "Remove.bg", slug: "remove-bg" },
  { name: "Pixlr", slug: "pixlr" },
];

const faqs = [
  {
    q: "Is Fotor free?",
    a: "There is a free plan with limited features and watermarks. Pro/Pro+ remove watermarks, add HD exports, and more AI credits.",
  },
  {
    q: "Does Fotor support AI background removal?",
    a: "Yes. Background remover, object removal, and retouching are included with AI credits.",
  },
  {
    q: "Is there text-to-image?",
    a: "Yes. You can generate images from prompts and integrate them into designs.",
  },
  {
    q: "Can I edit portraits?",
    a: "Fotor offers AI retouch, face editing, and enhancements for portraits.",
  },
  {
    q: "Are templates available?",
    a: "Yes. Social, marketing, and print templates are included, with more unlocked on Pro+.",
  },
  {
    q: "Does it support batch processing?",
    a: "Batch editing is available for some tools on paid plans to speed workflows.",
  },
  {
    q: "What about stock assets?",
    a: "Pro+ includes stock photos and elements; the free plan has limited assets.",
  },
  {
    q: "Is there a desktop or mobile app?",
    a: "Fotor is browser-first with desktop and mobile apps available; feature coverage can vary by platform.",
  },
];

function FotorAIToolPage() {
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
        "Fotor AI is an online photo editor with AI background removal, retouching, and text-to-image. It’s aimed at marketers and creators who need quick, polished visuals without pro tools.",
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
      title: "AI background and object removal",
      body: "Quickly remove backgrounds and unwanted objects for clean marketing assets.",
    },
    {
      icon: <BookOpen className="h-5 w-5 text-emerald-500" />,
      title: "Text-to-image generation",
      body: "Generate visuals from prompts and blend them into your designs.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-orange-500" />,
      title: "Retouch and enhancement",
      body: "Auto retouch, face edits, and image enhancements for portraits and product shots.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Templates and layouts",
      body: "Social, marketing, and print templates with drag-and-drop editing.",
    },
    {
      icon: <Globe2 className="h-5 w-5 text-sky-500" />,
      title: "Stock assets",
      body: "Access photos and elements (larger libraries on Pro+) to speed up creation.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Batch and brand tools",
      body: "Batch edits, watermarks, and brand settings for consistent outputs.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Fotor AI review for creators and marketers: pricing, features, pros & cons, and alternatives for AI photo editing and text-to-image."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-emerald-200/30 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-amber-500" />
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
                  Fotor AI speeds up image cleanup, generation, and design tasks for social and marketing—no heavy desktop apps required.
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
              {toolName} is a {category.toLowerCase()} platform combining photo editing with AI tools for background removal, retouching, and generation. It targets creators and marketers who need quick results online.
            </p>
            <p className="mt-3 text-slate-700">
              Templates and stock assets help produce social and ad creatives without pro design skills. Paid plans unlock higher-quality exports and more AI credits.
            </p>
            <p className="mt-3 text-slate-700">
              Desktop and mobile apps complement the browser experience for editing on different devices.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} suits anyone needing quick, polished visuals without deep editing skills.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Social media managers creating posts and ads quickly.",
                "Small businesses producing product shots with clean backgrounds.",
                "Creators needing AI text-to-image and captions for thumbnails.",
                "Marketers customizing templates for campaigns.",
                "Freelancers doing fast edits without heavy desktop software.",
                "Teams wanting batch background removal and brand watermarks.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-amber-400" />
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
              {toolName} emphasizes AI-assisted cleanup, generation, and templates so you can produce marketing assets fast.
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
                  Free tier has watermarks and lower quality. Pro starts near $8.99/month removing watermarks, adding HD exports, more AI credits, and advanced tools. Pro+ adds stock assets and higher limits.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Test on Free; upgrade to Pro for watermark-free HD exports and enough credits; choose Pro+ if you need stock assets and higher limits.</p>
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
                    <td className="px-4 py-3">Trying tools</td>
                    <td className="px-4 py-3">Watermark, limited quality/assets</td>
                    <td className="px-4 py-3">Free</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Regular creators</td>
                    <td className="px-4 py-3">HD exports, more AI credits, advanced tools</td>
                    <td className="px-4 py-3">~$8.99/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro+</td>
                    <td className="px-4 py-3">Teams needing stock assets</td>
                    <td className="px-4 py-3">Larger stock library, higher limits</td>
                    <td className="px-4 py-3">Higher tier</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Consider watermark removal, export quality, AI credits, and stock access. Heavy usage or commercial stock needs likely require Pro+.
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
                  <li>Easy browser editing with AI helpers.</li>
                  <li>Good background/object removal and retouching.</li>
                  <li>Text-to-image built in.</li>
                  <li>Templates and stock on paid plans.</li>
                  <li>Batch tools and brand settings for speed.</li>
                  <li>Affordable Pro pricing.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Watermarks and limited quality on Free.</li>
                  <li>Advanced editing and layer control are limited.</li>
                  <li>AI and stock usage capped by plan.</li>
                  <li>Less precise than pro tools for detailed retouching.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              {toolName} competes with online design and AI editing tools. Choose based on watermark removal, stock needs, and control over editing.
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
            <p className="text-slate-700">Compare {toolName} to other AI photo and design tools.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Canva</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/fotor-ai-vs-canva">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Canva offers broader design and collaboration features. {toolName} leans into AI photo edits and quick retouching with templates.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} for AI cleanup and generation; choose Canva for full design suites and team collaboration.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs PicsArt</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/fotor-ai-vs-picsart">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                PicsArt has a social-leaning toolkit and mobile focus. {toolName} provides solid desktop/web editing with AI removal and generation.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} for web-first editing and quick marketing assets; choose PicsArt for mobile creativity and community features.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you need fast background removal, retouching, and AI image generation in the browser, {toolName} is worth trying. Pro removes watermarks and unlocks HD exports.
            </p>
            <p className="mt-3 text-slate-700">
              For deeper design collaboration or pro-grade editing, consider Canva, Adobe Express, or desktop software. Watch AI credit usage on heavy tasks.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> {toolName} is a solid, budget-friendly option for AI-powered image cleanup and quick marketing visuals.</p>
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
              Choose {toolName} if you want quick AI-assisted photo editing, background removal, and text-to-image with templates for social and ads.
            </p>
            <p>
              Consider Canva or Adobe Express if you need broader design workflows, and desktop pro tools if you require fine control over edits.
            </p>
            <p>{toolName} keeps everyday marketing visuals fast and accessible without pro-level complexity.</p>
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

export default FotorAIToolPage;
