import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Colossyan";
const slug = "colossyan";
const category = "AI Video Creation";
const shortPitch =
  "Colossyan is an AI video platform that turns scripts into presenter-led videos with avatars, lip-sync, and multilingual support for training and marketing teams.";
const pricingSummary =
  "Seat-based plans with usage limits. Higher tiers add more minutes, templates, collaboration, brand controls, and priority rendering; trials are available.";
const officialUrl = "https://www.colossyan.com";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/colossyan.com",
  gradient: "from-violet-500 via-blue-500 to-emerald-500",
  glow: "shadow-[0_20px_80px_rgba(99,102,241,0.24)]",
};

const alternatives = [
  { name: "Synthesia", slug: "synthesia" },
  { name: "HeyGen", slug: "heygen" },
  { name: "D-ID", slug: "d-id" },
  { name: "Elai.io", slug: "elai-io" },
  { name: "Pictory AI", slug: "pictory-ai" },
];

const faqs = [
  {
    q: "What is Colossyan?",
    a: "Colossyan is an AI video generator that converts scripts into videos using realistic avatars, lip-sync, and multilingual voiceovers.",
  },
  {
    q: "Who is it for?",
    a: "L&D, enablement, and marketing teams that need presenter-style videos for training, onboarding, and product explainers without studio shoots.",
  },
  {
    q: "Does it support multiple languages?",
    a: "Yes. You can select different languages and voices, and swap presenters for localization.",
  },
  {
    q: "How is pricing structured?",
    a: "Plans are seat-based with monthly minutes. Higher tiers increase minutes, templates, collaboration, and brand controls.",
  },
  {
    q: "Can I customize brand elements?",
    a: "Yes. Upload brand assets, add lower thirds, and use templates to keep videos on-brand.",
  },
  {
    q: "Is there an API?",
    a: "APIs and advanced integrations are offered on higher tiers for programmatic video generation.",
  },
  {
    q: "Do I need editing skills?",
    a: "No. The editor is template-driven. Light editing knowledge helps with pacing and layout, but it’s designed for non-producers.",
  },
  {
    q: "Can I swap avatars later?",
    a: "Yes. You can change avatars and voices on existing scripts to iterate or localize quickly.",
  },
];

function ColossyanToolPage() {
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
        "Colossyan produces presenter-style videos from scripts with avatars, multilingual voices, and templates, helping teams ship training and marketing videos without filming.",
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
      title: "Text to video",
      body: "Turn scripts into presenter-led videos with realistic avatars and lip-sync.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Multilingual voices",
      body: "Choose from multiple languages and accents for global training and marketing.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Templates & scenes",
      body: "Use slide-style scenes, captions, and layouts to structure lessons and explainers.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Brand controls",
      body: "Add logos, lower thirds, and consistent styles to keep videos on-brand.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Collaboration",
      body: "Invite teammates to review scripts, edit scenes, and manage versions.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "API & integrations",
      body: "Automate video creation and connect with LMS or content workflows on higher tiers.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Colossyan review: pricing, features, pros & cons, and alternatives so you can decide if it fits your AI video needs."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-violet-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-emerald-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-violet-600" />
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
                  {toolName} cuts production time by generating presenter videos from scripts—ideal for trainings, explainers, and quick updates.
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
              {toolName} is an AI video generator. Paste a script, pick an avatar and voice, and produce presenter-led videos without cameras or studios.
            </p>
            <p className="mt-3 text-slate-700">Use it for onboarding, SOPs, product walk-throughs, and customer education where speed and localization matter.</p>
            <p className="mt-3 text-slate-700">Pair with your LMS or content hubs to distribute videos and track engagement.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams producing training or explainer videos at speed.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "L&D teams creating onboarding and compliance modules.",
                "Customer education teams producing product tutorials.",
                "Sales and success teams sharing personalized explainers.",
                "Marketing teams making social or ad variations quickly.",
                "Ops teams needing fast SOP videos without filming.",
                "Global teams localizing videos with multilingual voices.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-violet-500" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">{toolName} focuses on avatar-led video creation, localization, and collaboration.</p>
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
                  {toolName} charges per seat with monthly video minutes. Higher tiers unlock more minutes, templates, collaboration, custom fonts, and faster rendering. Trials or demos help validate quality before rollout.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on a lower plan to test quality and avatar fit; upgrade when you need more minutes, collaboration, or brand controls.</p>
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
                    <td className="px-4 py-3">Testing & small teams</td>
                    <td className="px-4 py-3">Limited minutes, core avatars/templates</td>
                    <td className="px-4 py-3">Great for pilots</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro/Team</td>
                    <td className="px-4 py-3">Ongoing training production</td>
                    <td className="px-4 py-3">More minutes, collaboration, brand elements</td>
                    <td className="px-4 py-3">Fits most L&D teams</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">High volume & API</td>
                    <td className="px-4 py-3">Custom avatars, API, priority rendering</td>
                    <td className="px-4 py-3">Best for scale and localization</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Budget for scriptwriting and QA time—AI reduces production but you still need clear messaging and review.</p>
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
                  <li>Fast script-to-video with realistic avatars.</li>
                  <li>Multilingual voices for global teams.</li>
                  <li>Templates make training and explainers easy.</li>
                  <li>Brand controls for consistent output.</li>
                  <li>Collaboration and API for scaling production.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Avatar style may not fit every brand.</li>
                  <li>Minutes and features vary by tier.</li>
                  <li>Human review still needed for clarity and pacing.</li>
                  <li>API and custom options sit on higher plans.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other AI video tools to find the right avatars, pricing, and collaboration features.
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
            <p className="text-slate-700">See how {toolName} compares with other AI video generators.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Synthesia</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/synthesia">
                  View Synthesia
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Synthesia is a leading avatar video tool with broad template libraries; {toolName} emphasizes collaboration and quick scene editing. Choose based on avatar preferences and workflow needs.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs HeyGen</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/heygen">
                  View HeyGen
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                HeyGen offers avatars plus talking photos and face swaps; {toolName} focuses on slide-style training videos. Pick based on your use cases (training vs. creative effects).
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need presenter-led videos at speed, want multilingual support, and prefer templates over full video editing tools.
            </p>
            <p className="mt-3 text-slate-700">
              It shines for training, onboarding, and explainers; ensure scripts are clear and reviewed to maintain quality and accuracy.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A strong AI video option for teams that value speed and localization—budget minutes and seats according to output goals.
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
              Choose {toolName} if you want script-to-video production with avatars, templates, and multilingual voices for training and marketing.
            </p>
            <p>
              Consider Synthesia or HeyGen for different avatar styles or creative options; use {toolName} when collaboration and scene-based editing are priorities.
            </p>
            <p>{toolName} helps teams publish videos fast—pair it with solid scripts and review to keep quality high.</p>
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

export default ColossyanToolPage;
