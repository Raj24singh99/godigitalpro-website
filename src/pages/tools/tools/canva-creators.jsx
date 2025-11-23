import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Canva for Creators";
const slug = "canva-creators";
const category = "Design & Video Suite";
const shortPitch =
  "Canva for Creators combines Canva’s design/video platform with templates, brand kits, AI assists, and monetization options for creators who publish frequently across channels.";
const pricingSummary =
  "Free plan with core templates. Pro from ~$12.99/user/month adds brand kits, Magic Media, and storage. Teams adds approvals, multiple brand kits, and admin controls for collaborators.";
const officialUrl = "https://www.canva.com/creators/";
const ratingValue = 4.6;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/canva.com",
  gradient: "from-sky-500 via-cyan-500 to-indigo-700",
  glow: "shadow-[0_20px_80px_rgba(14,165,233,0.22)]",
};

const alternatives = [
  { name: "Kapwing", slug: "kapwing" },
  { name: "InVideo", slug: "invideo" },
  { name: "Pictory", slug: "pictory" },
  { name: "Envato", slug: "envato" },
  { name: "Icons8", slug: "icons8" },
];

const faqs = [
  { q: "Is Canva for Creators different from Canva?", a: "It’s the same core platform with resources, monetization options, and templates aimed at creators. You can apply to sell templates or join the Creator program." },
  { q: "Can I monetize with Canva?", a: "Yes. Approved creators can earn by publishing templates to Canva’s marketplace. You’ll need to meet quality and originality guidelines." },
  { q: "Which plan do creators need?", a: "Pro unlocks brand kits, Magic Media, and premium assets. Teams is useful if you collaborate with editors or VAs and need approvals/brand controls." },
  { q: "Does Canva handle video for creators?", a: "Yes. Use the timeline editor, captions, transitions, Beat Sync, and Magic Media to generate or edit on-brand short-form videos." },
  { q: "What about rights and licensing?", a: "Follow Canva’s creator terms. Only publish original or properly licensed assets. Pro includes access to premium elements for use in your designs." },
  { q: "Can I connect social accounts?", a: "Canva lets you publish directly to platforms like Instagram, TikTok (via schedulers), Facebook, and others, or export for manual uploads." },
  { q: "Is collaboration supported?", a: "Yes. Share designs, invite collaborators, comment, and use approvals. Teams unlocks more admin controls and multiple brand kits." },
  { q: "Does Canva help with thumbnails and covers?", a: "Yes. There are optimized templates for YouTube thumbnails, channel art, podcast covers, and social headers with fast resizing options." },
];

function CanvaCreatorsToolPage() {
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
        "Canva for Creators pairs Canva’s design/video workflows with resources and monetization for creators. It’s great for creators who ship thumbnails, reels, carousels, and templates daily.",
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
      icon: <Palette className="h-5 w-5 text-sky-500" />,
      title: "Creator-ready templates",
      body: "Thumbnails, shorts/reels, carousels, banners, and cover art templates keep content on-brand and quick to ship.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-indigo-500" />,
      title: "AI assists (Magic Media)",
      body: "Background remover, Magic Write, text-to-image/video, and beat sync shorten edit cycles for frequent posts.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-emerald-500" />,
      title: "Brand kits and locking",
      body: "Lock fonts, colors, and logos. Create templates for your team or VAs so every post stays consistent.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Publishing and integrations",
      body: "Schedule or publish to social, export for YouTube/TikTok, and sync storage. Share review links for quick feedback.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Collaboration and approvals",
      body: "Comments, version history, and approvals keep editors and collaborators aligned. Teams adds admin governance.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Monetize templates",
      body: "Apply to the Creator program to publish templates and earn from marketplace usage, subject to Canva’s policies.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Canva for Creators review: pricing, features, pros & cons, alternatives, and comparisons vs Kapwing/InVideo for creator workflows and monetization."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-cyan-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-sky-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-300/20 blur-3xl" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-sky-200 blur-3xl" />
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
                  Canva for Creators helps you publish consistent thumbnails, reels, carousels, and templates fast while opening a path to monetize your designs.
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
              {toolName} is Canva tailored to creators who publish frequently. It combines design, video, audio, and templates with brand kits, AI assists, and the ability to monetize templates via Canva’s marketplace.
            </p>
            <p className="mt-3 text-slate-700">
              Use it to produce thumbnails, reels, stories, carousels, banners, and lead magnets quickly, then publish or schedule across channels.
            </p>
            <p className="mt-3 text-slate-700">
              For collaborators or VAs, Teams adds approvals and admin controls so your brand remains consistent across all outputs.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} fits creators who need fast, on-brand assets across multiple channels.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "YouTubers and podcasters producing thumbnails, covers, and social clips.",
                "Short-form creators publishing reels/shorts with captions and effects.",
                "Newsletter and course creators making lead magnets and promo assets.",
                "Solo creators hiring VAs and needing brand kits + approvals.",
                "Agency creators supplying templates and content for clients.",
                "Designers who want to monetize templates in Canva’s marketplace.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">Canva for Creators centers on content velocity, brand safety, and monetization.</p>
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
                  Pricing mirrors Canva: Free covers basics; Pro adds brand kits, Magic Media, and premium assets; Teams adds approvals, brand governance, and admin controls.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Use Pro if you’re a solo creator. Choose Teams when collaborating with editors or VAs.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Plan</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key inclusions</th>
                    <th className="px-4 py-3">Approx. price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Free</td>
                    <td className="px-4 py-3">Testing Canva workflows</td>
                    <td className="px-4 py-3">Templates, basic exports, limited storage</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Solo creators</td>
                    <td className="px-4 py-3">Brand kit, Magic Media, BG remover, premium assets</td>
                    <td className="px-4 py-3">~$12.99/user/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Teams</td>
                    <td className="px-4 py-3">Collaborating creators/agencies</td>
                    <td className="px-4 py-3">Approvals, multiple brand kits, admin controls, SSO options</td>
                    <td className="px-4 py-3">Varies by seats/region</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Monetization programs are application-based and separate from subscription pricing. Pick the subscription that matches your collaboration and brand control needs.
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
                  <li>Creator-focused templates for thumbnails, reels, and carousels.</li>
                  <li>Brand kits and locking to keep output consistent across collaborators.</li>
                  <li>Magic Media and AI assists speed up daily content production.</li>
                  <li>Direct publishing/scheduling to social platforms.</li>
                  <li>Option to monetize templates via Canva’s Creator program.</li>
                  <li>Affordable pricing for the breadth of tools and assets.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Video timeline is light compared to pro editors.</li>
                  <li>Marketplace monetization requires approval and quality standards.</li>
                  <li>Heavier brand libraries can feel slow on lower-end devices.</li>
                  <li>Advanced animation/motion requires other tools like After Effects/Framer.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Canva for Creators competes with online editors and design platforms. Pick based on video depth, animation needs, and how much brand governance you require.
            </p>
            <p className="mt-2 text-slate-700">All are easy to learn; they differ on video timelines, asset breadth, and AI tools.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
                  </div>
                  <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">Here’s how Canva for Creators stacks against two common options.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs InVideo</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/veed-vs-invideo-vs-canva">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                InVideo is video-first with scene-based editing. Canva for Creators balances video with brand kits, templates, and broader design outputs.
              </p>
              <p className="mt-2 text-slate-700">
                Choose Canva if you need all assets (thumbnails, carousels, reels) in one place. Choose InVideo if your priority is video ad production depth.
              </p>
              <p className="mt-2 text-slate-900">Both are easy—decision rests on brand breadth versus video specialization.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Kapwing</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/kapwing-vs-canva-vs-invideo">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Kapwing brings more granular video timelines and collaboration. Canva for Creators wins on template breadth, brand kits, and the ability to monetize templates.
              </p>
              <p className="mt-2 text-slate-700">
                Choose Canva if you want a one-stop hub for all creator assets; choose Kapwing for deeper browser-based video editing.
              </p>
              <p className="mt-2 text-slate-900">Both integrate with social; choose based on video depth versus template/brand system needs.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              For creators, {toolName} is worth it if you need fast, on-brand content across formats plus a path to monetize templates. Pro is inexpensive for the value; Teams is great when you collaborate.
            </p>
            <p className="mt-3 text-slate-700">
              If you need pro-grade video or motion, pair Canva with specialized tools. Otherwise, Canva covers most daily creator outputs with strong brand controls.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Canva for Creators is a versatile, cost-effective choice for high-volume content creators who want speed, branding, and monetization options.
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
              Choose Canva for Creators if you need to ship thumbnails, reels, and carousels daily with brand kits and AI assists. It keeps content consistent and opens monetization options via templates.
            </p>
            <p>
              Consider Kapwing/InVideo for deeper video timelines if that’s your main work. Canva remains the fastest cross-format option for most creators.
            </p>
            <p>Canva integrates with social platforms, storage, and email tools so you can keep workflows tight without heavy setup.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-sky-700 hover:text-sky-600" href={officialUrl}>
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

export default CanvaCreatorsToolPage;
