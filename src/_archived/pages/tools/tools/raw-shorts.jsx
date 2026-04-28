import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Folder, Crown, ArrowLeft, ChevronDown, Rocket, Clapperboard, Image } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Raw Shorts";
const slug = "raw-shorts";
const category = "AI Video & Animation";
const shortPitch = "Raw Shorts turns scripts and text into explainer videos and animations with templates, AI narration, and drag-and-drop editing.";
const pricingSummary = "Plans scale by exports, resolution, and branding controls. Higher tiers add HD renders, longer videos, and commercial usage rights.";
const officialUrl = "https://www.rawshorts.com";
const ratingValue = 4.0;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/rawshorts.com",
  gradient: "from-purple-500 via-pink-500 to-orange-500",
  glow: "shadow-[0_20px_80px_rgba(168,85,247,0.22)]",
};

const alternatives = [
  { name: "InVideo", slug: "invideo" },
  { name: "Pictory", slug: "pictory" },
  { name: "Lumen5", slug: "lumen5" },
  { name: "Synthesia", slug: "synthesia" },
  { name: "Animoto", slug: "animoto" },
];

const faqs = [
  { q: "What is Raw Shorts?", a: "Raw Shorts is an AI-assisted video maker for turning scripts and text into explainer videos, slides, and social clips." },
  { q: "Who is it for?", a: "Marketers, educators, and teams that need quick explainer videos without heavy animation software." },
  { q: "Does it support text-to-video?", a: "Yes. You can paste text or scripts to generate drafts and then edit scenes and timing." },
  { q: "How is pricing structured?", a: "Tiered plans based on monthly exports, watermark removal, video length, and HD resolution." },
  { q: "Can I add voiceovers?", a: "Yes. Use AI narration or upload your own audio to sync with scenes." },
  { q: "Does it have templates?", a: "Yes. Libraries of explainer and promo templates with drag-and-drop editing." },
  { q: "Is brand control available?", a: "Higher tiers include custom branding and better control over watermarking and resolution." },
  { q: "Is human review needed?", a: "Yes. You should edit timing, visuals, and messaging to fit your brand and audience." },
];

function RawShortsToolPage() {
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
        "Raw Shorts helps teams generate explainer videos from scripts with AI narration, templates, and easy editing. It speeds up draft creation for social and product videos.",
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
      icon: <Clapperboard className="h-5 w-5 text-purple-500" />,
      title: "Script-to-video drafts",
      body: "Paste text or a script to generate scene drafts automatically.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "Templates & animations",
      body: "Use explainer, promo, and social templates to accelerate storyboarding.",
    },
    {
      icon: <Image className="h-5 w-5 text-pink-500" />,
      title: "Stock media",
      body: "Access stock assets and icons to fill scenes quickly.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Branding controls",
      body: "Remove watermarks, add logos, and set colors on higher tiers.",
    },
    {
      icon: <Plug className="h-5 w-5 text-indigo-500" />,
      title: "Voiceover support",
      body: "Use AI narration or upload your own VO for better fit and control.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-orange-500" />,
      title: "Export options",
      body: "Publish in various resolutions; higher plans unlock HD and longer runtimes.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Raw Shorts review: pricing, features, pros & cons, and alternatives so you can evaluate it for AI-assisted explainer videos."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-purple-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-orange-200/25 blur-3xl" />
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
                  {toolName} speeds up explainer video drafts with AI narration, templates, and drag-and-drop editing.
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
              {toolName} is an AI-powered video maker that transforms text and scripts into animated explainer videos. It combines templates, stock assets, AI narration, and scene automation to help marketers ship videos faster.
            </p>
            <p className="mt-3 text-slate-700">Use it for drafts, then refine visuals, pacing, and voiceover for your audience.</p>
            <p className="mt-3 text-slate-700">Pair with brand guidelines and a review step to keep messaging consistent.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for marketers, educators, and teams that need explainer videos quickly without heavy production.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Marketers producing social or landing page explainers.",
                "Product teams demoing features without full video crews.",
                "Course creators needing quick intros and lesson clips.",
                "Agencies delivering drafts before final brand review.",
                "Founders making pitch or onboarding walkthroughs fast.",
                "Teams that want AI narration and templates to save time.",
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
              {toolName} focuses on AI-assisted scripts-to-video, templates, narration, and brand controls for fast explainer creation.
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
                  {toolName} prices plans by number of monthly exports, watermark removal, video length, and resolution. Higher tiers unlock HD output, longer videos, and commercial usage rights.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on a mid-tier to remove watermarks and get HD; upgrade if you need more exports or longer runtimes.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter/Lower tier</td>
                    <td className="px-4 py-3">Testing</td>
                    <td className="px-4 py-3">Limited exports, watermark, shorter videos</td>
                    <td className="px-4 py-3">Good for quick trials</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro/Growth</td>
                    <td className="px-4 py-3">Teams producing weekly</td>
                    <td className="px-4 py-3">HD exports, more monthly renders, branding</td>
                    <td className="px-4 py-3">Fits most marketing teams</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business/Top</td>
                    <td className="px-4 py-3">Agencies & commercial use</td>
                    <td className="px-4 py-3">Highest limits, priority support, commercial rights</td>
                    <td className="px-4 py-3">Choose if you publish frequently</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Plan exports carefully; add review time for editing narration, pacing, and brand alignment.</p>
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
                  <li>Fast script-to-video generation with templates.</li>
                  <li>AI voiceover plus upload-your-own narration.</li>
                  <li>Stock assets and animations included.</li>
                  <li>Branding controls and watermark removal on higher tiers.</li>
                  <li>Export options for HD and social formats.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Watermarks and limits on lower tiers.</li>
                  <li>AI narration still needs human review for tone.</li>
                  <li>Complex storylines may need manual editing.</li>
                  <li>Stock-heavy visuals can feel generic without customization.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other AI video makers and explainer tools to match your budget and workflow.</p>
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
            <p className="text-slate-700">See how {toolName} compares to other AI video platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs InVideo</h3>
                <a className="text-sm font-semibold text-purple-700 hover:text-purple-600" href="/tools/invideo">
                  View InVideo
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                InVideo emphasizes social templates and stock; {toolName} leans into script-to-video explainers. Pick based on whether you start from scripts or prebuilt social layouts.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Pictory</h3>
                <a className="text-sm font-semibold text-purple-700 hover:text-purple-600" href="/tools/pictory">
                  View Pictory
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Pictory highlights long-form to short-form clipping; {toolName} focuses on animated explainers. Choose based on whether you repurpose existing video or build new animated scripts.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need explainer-style videos quickly and want AI narration plus templates to accelerate drafts.
            </p>
            <p className="mt-3 text-slate-700">It does not replace full animation teams for complex stories—use it for speed, then refine.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A practical AI video maker for explainers and promos; best when paired with human editing for pacing and brand voice.
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
            <p>Choose {toolName} if you want AI-generated explainer drafts, templates, and narration to move faster on video production.</p>
            <p>Consider InVideo or Pictory for social-first formats; use {toolName} when explainer animations are your main need.</p>
            <p>{toolName} helps teams ship video drafts quickly—keep brand and quality checks in place before publishing.</p>
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

export default RawShortsToolPage;
