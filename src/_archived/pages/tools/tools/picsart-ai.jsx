import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Picsart AI";
const slug = "picsart-ai";
const category = "AI Design & Editing";
const shortPitch =
  "Picsart AI is a design and photo editing suite with AI tools for background removal, image generation, filters, and quick social-ready assets.";
const pricingSummary =
  "Freemium with limits and watermarks; paid plans remove watermarks, add HD exports, premium assets, and higher AI usage. Team plans add collaboration.";
const officialUrl = "https://picsart.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/picsart.com",
  gradient: "from-pink-500 via-purple-500 to-indigo-500",
  glow: "shadow-[0_20px_80px_rgba(236,72,153,0.28)]",
};

const alternatives = [
  { name: "Canva", slug: "canva" },
  { name: "PhotoRoom", slug: "photoroom" },
  { name: "Fotor AI", slug: "fotor-ai" },
  { name: "Picsart vs Canva vs PhotoRoom", slug: "compare/picsart-vs-canva-vs-photoroom", isComparison: true },
  { name: "Adobe Express", slug: "adobe-xd" },
];

const faqs = [
  { q: "What is Picsart AI?", a: "Picsart AI is an editing and design platform with AI background removal, image generation, filters, and templates for social and marketing visuals." },
  { q: "Who is it for?", a: "Creators, marketers, and small businesses that need quick visuals without pro design tools." },
  { q: "Does it generate images?", a: "Yes. It includes AI image generation and editing tools; review outputs before publishing." },
  { q: "How is pricing structured?", a: "Free tier with limits/watermarks; paid plans remove watermarks, add HD exports, and higher AI usage." },
  { q: "Does it have templates?", a: "Yes. Templates for social posts, ads, and collages are included." },
  { q: "Can it remove backgrounds?", a: "Yes. Background removal and retouching are built in." },
  { q: "Is there a mobile app?", a: "Yes. Mobile and web apps keep edits synced across devices." },
  { q: "Is human review needed?", a: "Yes. Check brand fit, licensing of assets, and quality before publishing." },
];

function PicsartToolPage() {
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
        "Picsart AI combines photo editing, templates, and AI tools for fast social-ready visuals. It’s strong for speed; final brand checks are still necessary.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };

  const featureBlocks = [
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "AI generation & effects", body: "Generate images, apply filters, and stylize photos quickly." },
    { icon: <Rocket className="h-5 w-5 text-emerald-500" />, title: "Templates for social", body: "Ready-made templates for Instagram, TikTok, ads, and more." },
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "Background removal", body: "Cut out subjects, fix backgrounds, and retouch product shots." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "Cross-device editing", body: "Web and mobile apps keep projects synced for on-the-go edits." },
    { icon: <Plug className="h-5 w-5 text-purple-500" />, title: "Asset library", body: "Access stock assets and fonts; check licensing for commercial use." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Brand checks", body: "Human review needed for brand fit and ad policy compliance." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Picsart AI review: pricing, features, pros & cons, and alternatives to help you pick the right AI design and editing tool."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-pink-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-pink-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-purple-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-pink-600" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-pink-100 blur-3xl" />
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
                  {toolName} helps teams create social-ready visuals fast—great for speed, with human checks for brand and licensing fit.
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
              {toolName} is a design and editing suite with AI tools for generation, background removal, and templates. It targets quick social and marketing visuals without pro-level complexity.
            </p>
            <p className="mt-3 text-slate-700">
              Treat it as a fast visual assistant: teams should review outputs for brand consistency, licensing, and ad policy compliance.
            </p>
            <p className="mt-3 text-slate-700">Pair with schedulers and ad platforms to publish assets after QA.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for creators and marketers needing quick visuals.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Social media teams producing daily posts and stories.",
                "Creators making thumbnails and quick edits on mobile.",
                "Small businesses needing product visuals without designers.",
                "Agencies delivering rapid mockups and ad variants.",
                "Marketers testing creative variations for paid campaigns.",
                "Teams that want AI generation plus standard editing in one place.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-pink-500" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">{toolName} focuses on AI-assisted editing, templates, and fast exports.</p>
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
                  Free tier includes watermarks and limits. Paid plans remove watermarks, increase AI usage, add HD exports, and unlock premium assets. Teams can add shared workspaces.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start free; upgrade if you need watermark-free HD exports, higher AI usage, or premium assets.</p>
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
                    <td className="px-4 py-3">Testing/light use</td>
                    <td className="px-4 py-3">Editing tools, watermarks, limited AI usage</td>
                    <td className="px-4 py-3">Good for trial</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Regular creators</td>
                    <td className="px-4 py-3">No watermark, HD exports, higher AI limits, premium assets</td>
                    <td className="px-4 py-3">Monthly/annual pricing</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Team</td>
                    <td className="px-4 py-3">Teams/agencies</td>
                    <td className="px-4 py-3">Collaboration, shared billing, higher caps</td>
                    <td className="px-4 py-3">Custom depending on seats/usage</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Compare to Canva/PhotoRoom for price vs asset needs. Ensure any stock or generated images meet your licensing and platform policies.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-pink-50 p-5 shadow-sm ring-1 ring-pink-100">
                <div className="flex items-center gap-2 text-pink-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Fast templates and AI effects for social.</li>
                  <li>Background removal and retouching built in.</li>
                  <li>Cross-device editing on mobile/web.</li>
                  <li>Large asset library (check licensing).</li>
                  <li>Low learning curve; quick results.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Watermarks/limits on free; paid needed for serious use.</li>
                  <li>AI outputs need review for brand fit and accuracy.</li>
                  <li>Licensing must be checked for commercial use.</li>
                  <li>Not a full replacement for pro design or video tools.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other design and editing platforms.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Open comparison page." : "View the full review and pricing details."}</p>
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
            <p className="text-slate-700">See how {toolName} compares to other visual tools.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Canva</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/canva">
                  View Canva
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Canva is a full design platform; {toolName} emphasizes quick edits, AI effects, and mobile-friendly workflows. Choose based on depth of design needs vs speed.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs PhotoRoom</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/photoroom">
                  View PhotoRoom
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                PhotoRoom specializes in background removal and product scenes; {toolName} offers broader editing and generation. Pick based on whether you need cutouts or all-in-one edits.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want fast social-ready visuals with AI effects and templates, and you’re ready to review for brand fit and licensing.
            </p>
            <p className="mt-3 text-slate-700">Upgrade if you need watermark-free HD exports and higher AI limits; keep human QA in the loop.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A versatile, quick design toolkit; best for rapid social/marketing assets with editorial checks.
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
              Choose {toolName} if you want AI-assisted design and editing for social and marketing visuals with minimal effort.
            </p>
            <p>
              Consider Canva for deeper layout tools or PhotoRoom for specialized product cutouts; {toolName} excels at quick, creative edits.
            </p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit, try it here:{" "}
              <a className="text-emerald-700 hover:text-emerald-600" href={officialUrl}>
                Visit {toolName}
              </a>
              .
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
      <button type="button" onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-900">
        <span className="text-sm font-semibold md:text-base">{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">{answer}</div>}
    </div>
  );
}

export default PicsartToolPage;
