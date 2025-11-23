import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown, MonitorPlay, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Synthesia";
const slug = "synthesia";
const category = "AI Video";
const shortPitch = "Synthesia is an AI video platform that turns scripts into videos with realistic avatars and multilingual voiceovers.";
const pricingSummary = "Paid plans from around $29/seat/month with render limits; enterprise options add SSO, API, and higher volumes.";
const officialUrl = "https://www.synthesia.io";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/synthesia.io",
  gradient: "from-emerald-500 via-teal-500 to-cyan-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.20)]",
};

const alternatives = [
  { name: "Pictory", slug: "pictory" },
  { name: "Veed", slug: "veed" },
  { name: "Descript", slug: "descript" },
  { name: "InVideo", slug: "invideo" },
  { name: "Kapwing", slug: "kapwing" },
];

const faqs = [
  { q: "Is Synthesia free?", a: "No. Synthesia is paid. Starter plans begin around $29/seat/month with render limits; enterprise plans add SSO, API, and higher volumes." },
  { q: "Who is Synthesia best for?", a: "Teams producing training, onboarding, explainer, and localized videos at scale without cameras or actors." },
  { q: "Does Synthesia support multiple languages?", a: "Yes. Synthesia supports 120+ languages and accents with realistic voiceovers." },
  { q: "Can I use my own avatar?", a: "Custom avatars are available on enterprise plans so presenters can appear in videos without filming." },
  { q: "How realistic are the avatars?", a: "Synthesia has industry-leading avatar realism. It’s best-in-class for studio-like presenters from text scripts." },
  { q: "Can I edit timelines?", a: "Synthesia is scene-based. You can edit scenes, text, media, and timings, but deep multitrack timeline edits are limited." },
  { q: "Does Synthesia integrate with LMS or CMS?", a: "Yes. You can export MP4s, embed videos, and use API/SCORM options on higher tiers to connect with LMS/CMS systems." },
  { q: "Is Synthesia secure for enterprise?", a: "Enterprise plans include SSO, security reviews, and governance options suitable for larger organizations." },
];

function SynthesiaToolPage() {
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
        "Synthesia converts scripts into videos with lifelike AI avatars and multilingual voiceovers. It’s great for training, onboarding, and explainers where speed and localization matter. Pricing is per seat/render with enterprise options for SSO, API, and higher volumes.",
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

  const featureBlocks = [
    {
      icon: <MonitorPlay className="h-5 w-5 text-emerald-500" />,
      title: "AI avatars and voiceovers",
      body: "Pick from realistic presenters and 120+ languages/accents to generate videos without cameras or actors.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-cyan-500" />,
      title: "Script-to-video in minutes",
      body: "Drop in your script, choose an avatar, and add media—Synthesia assembles scenes quickly so teams publish faster.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-emerald-500" />,
      title: "Templates and brand kits",
      body: "Use templates, brand colors, fonts, and layouts to keep videos consistent across teams and regions.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Embeds and LMS/CMS-friendly",
      body: "Export MP4s, embed videos, and use API/SCORM on higher plans to plug into LMS, CMS, or knowledge bases.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-700" />,
      title: "Enterprise governance",
      body: "Role-based access, SSO, and approvals on enterprise plans keep content reviews tight for regulated teams.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Localization at scale",
      body: "Generate localized variants quickly with multilingual voiceovers and captions, reducing studio time for global teams.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="In-depth Synthesia review covering pricing, features, pros & cons, alternatives, and whether Synthesia fits your 2025 video stack."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-emerald-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-emerald-500" />
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
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -left-8 top-10 h-20 w-20 rounded-full bg-white blur-3xl" />
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-emerald-200 blur-3xl" />
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
                  Build professional videos from scripts with lifelike avatars, in minutes instead of studio hours—great for training, onboarding, and explainers.
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
              Synthesia is an AI video platform that turns scripts into videos with realistic presenters and multilingual voiceovers. It removes the need for cameras, studios, or on-camera talent.
            </p>
            <p className="mt-3 text-slate-700">Teams use Synthesia for training, onboarding, product explainers, and localized content that would otherwise be expensive to record.</p>
            <p className="mt-3 text-slate-700">Scene-based editing, templates, and brand kits keep videos consistent, while enterprise features add SSO, approvals, and API access.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Synthesia suits teams that want polished video without filming.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "L&D and enablement teams producing training and onboarding videos.",
                "Product marketing creating explainers and feature updates quickly.",
                "Global teams localizing content across 120+ languages.",
                "Support and CX teams making tutorial videos at scale.",
                "Agencies delivering avatar-led videos for clients without studio shoots.",
                "Founders who need spokesperson-style videos without being on camera.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">Synthesia focuses on avatar quality, localization, and speed-to-video for business use cases.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {featureBlocks.map((feature) => (
                <div key={feature.title} className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center gap-3 text-slate-900">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">{feature.icon}</div>
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
                  Starter plans begin around $29/seat/month with render and feature limits. Enterprise plans add higher volumes, SSO, security reviews, API access, and custom avatars.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Use Starter to trial avatar videos. Move to enterprise when you need volume, SSO, API, or custom avatars.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter</td>
                    <td className="px-4 py-3">Testing scripts-to-video</td>
                    <td className="px-4 py-3">Seat/render limits, core avatars/templates</td>
                    <td className="px-4 py-3">~$29/seat/month</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Teams scaling training/localization</td>
                    <td className="px-4 py-3">Higher limits, custom avatars, API, SSO, security</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Budget for per-seat/render costs; enterprise is best for consistent, high-volume usage.</p>
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
                  <li>Best-in-class realistic avatars and voiceovers.</li>
                  <li>120+ languages for fast localization.</li>
                  <li>Templates and brand kits keep videos consistent.</li>
                  <li>Enterprise options (SSO, API, custom avatars).</li>
                  <li>Great for training, onboarding, and explainers.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Pricier than lightweight editors; render limits apply.</li>
                  <li>Timeline/audio control is lighter than video editors.</li>
                  <li>No full multitrack editing; complex edits need another tool.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">If you need editing depth, budget options, or different workflows, consider these. Each has a dedicated page.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same space.</p>
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
            <p className="text-slate-700">Here’s how Synthesia stacks up against two close competitors.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Pictory vs Descript</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/synthesia-vs-pictory-vs-descript">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Descript excels at editing and overdub; Pictory is great for text-to-video and social clip automation. Synthesia wins for avatar realism and multilingual voiceovers.
              </p>
              <p className="mt-2 text-slate-700">Choose Synthesia for avatar-led explainers; Pictory for script/blog-to-video; Descript for rich editing and overdub.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Pictory vs Veed</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/synthesia-vs-pictory-vs-veed">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Veed is the fastest online editor for captions and social clips. Pictory automates storyboards from scripts. Synthesia leads with avatars. Many teams pair Synthesia with Veed or Descript for final polish.
              </p>
              <p className="mt-2 text-slate-700">Choose Synthesia for avatar videos; Pictory for quick social cuts; Veed for editing speed and captions.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you need avatar-led training, onboarding, or explainer videos without filming, Synthesia is worth it. It saves time, supports localization, and keeps branding consistent.
            </p>
            <p className="mt-3 text-slate-700">
              If you need heavy editing, audio mixing, or cinematic control, pair Synthesia with Veed or Descript—or choose those tools alone for social-first workflows.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Synthesia is a top pick for business video teams that want speed, scale, and avatar quality over deep timeline editing.
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
              Choose Synthesia if you want polished, avatar-led videos without cameras or studios. It’s ideal for training, onboarding, and localized explainers.
            </p>
            <p>
              Consider Pictory or Veed if you need fast social clips or deeper editing. Pair Synthesia with Descript/Veed for final cuts when you need more control.
            </p>
            <p>{toolName} fits well in a modern video stack alongside script, editing, and publishing tools so teams can produce at scale.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>
                Visit {toolName}
              </a>
              .
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-sky-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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
      <button type="button" onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-900">
        <span className="text-sm font-semibold md:text-base">{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">{answer}</div>}
    </div>
  );
}

export default SynthesiaToolPage;
