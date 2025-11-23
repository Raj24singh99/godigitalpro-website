import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown, Mic2 } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Altered Studio";
const slug = "altered-studio";
const category = "AI Voice & Audio";
const shortPitch =
  "Altered Studio is an AI voice platform for voice cloning, speech-to-speech transformation, and audio editing for creators and teams.";
const pricingSummary =
  "Pricing is tiered by usage minutes, voices, and features. Paid plans unlock higher-quality voice cloning, export options, and commercial rights.";
const officialUrl = "https://www.altered.ai";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/altered.ai",
  gradient: "from-indigo-500 via-purple-500 to-pink-500",
  glow: "shadow-[0_20px_80px_rgba(139,92,246,0.28)]",
};

const alternatives = [
  { name: "Descript", slug: "descript" },
  { name: "Pictory", slug: "pictory" },
  { name: "Veed", slug: "veed" },
  { name: "Kapwing", slug: "kapwing" },
  { name: "Swell AI", slug: "swell-ai" },
];

const faqs = [
  {
    q: "What is Altered Studio?",
    a: "Altered Studio is an AI voice platform for speech-to-speech voice transformation, cloning voices, and editing audio.",
  },
  {
    q: "Who uses Altered Studio?",
    a: "Podcasters, video creators, game devs, localization teams, and agencies needing voice cloning or alternate voice performances.",
  },
  {
    q: "Does it support voice cloning?",
    a: "Yes. Paid tiers support higher-quality voice cloning and custom voices. Always follow consent and rights requirements.",
  },
  {
    q: "Can it edit audio?",
    a: "Yes. It includes audio editing and speech-to-speech tools to refine performances and swap voices.",
  },
  {
    q: "Is commercial use allowed?",
    a: "Commercial rights depend on plan and licensing. Check the plan details before using cloned voices commercially.",
  },
  {
    q: "What about languages and accents?",
    a: "Altered offers multiple languages and accents; availability varies by voice model.",
  },
  {
    q: "Does it integrate with other tools?",
    a: "You can export audio and integrate into production workflows. API options may vary by plan.",
  },
  {
    q: "How is pricing structured?",
    a: "Plans scale by usage minutes, voice quality, and licensing. Higher tiers unlock more voices, exports, and commercial rights.",
  },
];

function AlteredStudioToolPage() {
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
        "Altered Studio lets you transform voices, clone speakers, and edit audio with AI. It’s built for creators, localization teams, and studios that need flexible, high-quality voice options.",
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
      icon: <Mic2 className="h-5 w-5 text-rose-500" />,
      title: "Speech-to-speech",
      body: "Transform recorded speech into different voices while preserving performance and emotion.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "Voice cloning",
      body: "Create custom voices with higher-quality cloning on paid tiers; always secure consent and rights.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Audio editing",
      body: "Edit, clean, and refine audio, adjusting pacing and delivery for polished outputs.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Localization",
      body: "Use multilingual voices and accents to localize content and maintain character consistency.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Compliance & rights",
      body: "Tools to manage licensing and usage; verify plan terms for commercial projects.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Exports & workflow",
      body: "Export audio for podcasts, video, games, or ads; integrate into your production pipeline.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Altered Studio review: pricing, voice cloning quality, pros & cons, and alternatives so you can pick the right AI voice platform."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-pink-200/25 blur-3xl" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-rose-100 blur-3xl" />
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
                  {toolName} gives creators and studios flexible AI voice options while keeping control over quality and rights.
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
              {toolName} is an AI voice platform with speech-to-speech transformation, voice cloning, and audio editing. It helps creators, studios, and localization teams generate alternate voices, clean audio, and adapt performances.
            </p>
            <p className="mt-3 text-slate-700">
              It is especially useful when you need high-quality alternate takes without re-recording, or when localizing content with consistent character voices.
            </p>
            <p className="mt-3 text-slate-700">
              Licensing and consent are critical—ensure proper rights when cloning or deploying voices in commercial work.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams needing flexible voice options without extensive studio time.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Podcasters and YouTubers needing alternate takes or cleanup.",
                "Localization teams translating and adapting character voices.",
                "Video creators and advertisers crafting multiple voice versions.",
                "Game studios prototyping or iterating character voices.",
                "Agencies producing multilingual or variant audio quickly.",
                "Teams that need consistent voice identity across languages.",
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
            <p className="mt-3 text-slate-700">
              {toolName} focuses on high-quality AI voice transformation, cloning, and audio editing for production teams.
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
                  {toolName} pricing scales by usage minutes, voice quality, and licensing rights. Paid tiers unlock better cloning, exports, and commercial use. Check terms for consent and rights on commercial projects.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with a lower tier to test quality; upgrade for higher-quality clones, more minutes, and commercial rights.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter</td>
                    <td className="px-4 py-3">Testing & light use</td>
                    <td className="px-4 py-3">Limited minutes, base voices</td>
                    <td className="px-4 py-3">Evaluate quality</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Creators & teams</td>
                    <td className="px-4 py-3">More minutes, better voices, exports</td>
                    <td className="px-4 py-3">Check commercial rights</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Studios & agencies</td>
                    <td className="px-4 py-3">Highest quality clones, team features, support</td>
                    <td className="px-4 py-3">Custom licensing/rights</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Confirm rights and consent for any voice you clone or deploy. Budget minutes and export needs based on production volume.
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
                  <li>High-quality speech-to-speech voice transformation.</li>
                  <li>Voice cloning with higher fidelity on paid tiers.</li>
                  <li>Audio editing tools to refine delivery.</li>
                  <li>Multilingual voices for localization.</li>
                  <li>Exports for podcasts, video, games, and ads.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Commercial rights and consent must be managed carefully.</li>
                  <li>Minutes and higher-quality voices require paid tiers.</li>
                  <li>API/integration options may be limited by plan.</li>
                  <li>Voice cloning requires clear licensing and legal diligence.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other AI audio/voice tools to match quality, rights, and workflow needs.
            </p>
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
            <p className="text-slate-700">See how {toolName} compares with leading AI audio tools.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Descript</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/descript">
                  View Descript
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Descript is a broader audio/video editor with overdub; {toolName} specializes in speech-to-speech transformation and cloning quality. Choose based on whether you need full editing suite or focused voice transformation.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Veed</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/veed">
                  View Veed
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Veed is video-first with AI captions/edits; {toolName} focuses on voice quality and cloning. Use {toolName} for voice assets, Veed for end-to-end video editing.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need high-quality AI voice transformation and cloning for production, localization, or creative projects.
            </p>
            <p className="mt-3 text-slate-700">
              Keep compliance and licensing in mind; ensure consent and rights before commercial deployment. Start on a lower tier to test quality, then scale.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A strong pick for teams prioritizing voice quality and flexibility in AI-driven audio workflows.
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
              Choose {toolName} if you want focused, high-quality AI voice transformation and cloning with production-ready exports.
            </p>
            <p>
              Consider Descript or Veed for broader editing workflows; keep {toolName} for voice quality and cloning depth. Always secure consent for any voices you clone or transform.
            </p>
            <p>{toolName} helps creators and studios deliver polished voice assets quickly, with AI-driven flexibility.</p>
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

export default AlteredStudioToolPage;
