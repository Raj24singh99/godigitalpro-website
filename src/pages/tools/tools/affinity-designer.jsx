import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Affinity Designer";
const slug = "affinity-designer";
const category = "Design & Illustration";
const shortPitch =
  "Affinity Designer is a professional vector and raster design app for UI, illustration, and branding with a one-time license.";
const pricingSummary =
  "One-time purchase per platform (or a Universal License). No subscriptions; upgrades may carry separate fees.";
const officialUrl = "https://affinity.serif.com/en-us/designer/";
const ratingValue = 4.6;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/affinity.serif.com",
  gradient: "from-indigo-500 via-purple-500 to-rose-500",
  glow: "shadow-[0_20px_80px_rgba(139,92,246,0.24)]",
};

const alternatives = [
  { name: "Figma", slug: "figma" },
  { name: "Canva", slug: "canva" },
  { name: "Framer", slug: "framer" },
  { name: "Adobe XD", slug: "adobe-xd" },
  { name: "Envato", slug: "envato" },
];

const faqs = [
  {
    q: "What is Affinity Designer used for?",
    a: "Affinity Designer is for vector and raster design: UI, logos, illustration, marketing assets, and print-ready files.",
  },
  {
    q: "Is it subscription based?",
    a: "No. Affinity Designer is a one-time purchase per platform or via Universal License. No ongoing subscription is required.",
  },
  {
    q: "Does it support CMYK and print?",
    a: "Yes. Affinity Designer supports CMYK/spot colors, PDF/X export, and print-friendly workflows.",
  },
  {
    q: "Can I use it for UI design?",
    a: "Yes. You can design interfaces with artboards, symbols, and grids. For collaborative prototyping, pair with tools like Figma or Framer.",
  },
  {
    q: "Does it work on iPad?",
    a: "Affinity Designer has desktop and iPad apps with near-parity features and Apple Pencil support.",
  },
  {
    q: "Does it integrate with other Affinity apps?",
    a: "Yes. It works alongside Affinity Photo and Publisher with shared file formats and StudioLink workflows.",
  },
  {
    q: "Is there collaboration?",
    a: "Designer is single-user per document. For real-time multiplayer, you’ll need to use handoff/sharing flows or complement with collaborative tools.",
  },
  {
    q: "Who is it best for?",
    a: "Designers who want powerful vector/raster tools without subscriptions—illustrators, brand designers, and UI creators comfortable with standalone files.",
  },
];

function AffinityDesignerToolPage() {
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
        "Affinity Designer offers pro-grade vector and raster editing with a one-time license. It’s popular with designers who want performance, color accuracy, and offline-friendly workflows without subscriptions.",
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
      title: "Vector + raster in one",
      body: "Switch between vector and pixel personas to handle illustration, UI, and texture work seamlessly.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Performance",
      body: "Snappy pan/zoom, large artboards, and precise editing even on complex illustrations.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Design systems & symbols",
      body: "Symbols, constraints, and assets help manage reusable UI components and brand elements.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Print & export",
      body: "CMYK, spot colors, PDF/X, and export presets for multi-format delivery.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Cross-platform",
      body: "Runs on macOS, Windows, and iPad with a single file format.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "StudioLink",
      body: "Tight integration with Affinity Photo/Publisher for end-to-end creative workflows.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Affinity Designer review: pricing, features, pros & cons, and alternatives so you can pick the right vector and illustration tool."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-rose-200/25 blur-3xl" />
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
                  {toolName} delivers fast vector and raster editing without subscriptions, ideal for illustrators, brand designers, and UI creators.
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
              {toolName} is a professional design app that merges vector and pixel workflows. Designers use it for UI, illustration, marketing assets, and print deliverables without a subscription.
            </p>
            <p className="mt-3 text-slate-700">
              It’s performant on large files, supports artboards and constraints, and integrates with other Affinity apps through StudioLink.
            </p>
            <p className="mt-3 text-slate-700">
              For teams needing real-time multiplayer collaboration, pair {toolName} with a shared storage process or complementary collaborative tools.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for designers who want powerful vector/raster tools with one-time licensing.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Illustrators creating detailed vector and texture-rich artwork.",
                "Brand designers producing logos, icons, and print-ready assets.",
                "UI designers who prefer offline-friendly, performant tooling.",
                "Teams needing CMYK/spot color support for print workflows.",
                "Creators who dislike subscriptions and prefer perpetual licenses.",
                "Designers working across desktop and iPad with shared files.",
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
              {toolName} focuses on precision vector editing, pixel workflows, and export control without recurring fees.
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
                  {toolName} uses one-time licensing per platform or via Universal License. No monthly subscription; upgrades may carry separate costs.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Buy once on the platform(s) you use daily; consider the Universal License if you work across devices.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Option</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key inclusions</th>
                    <th className="px-4 py-3">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Single platform</td>
                    <td className="px-4 py-3">Desktop or iPad only</td>
                    <td className="px-4 py-3">One-time license</td>
                    <td className="px-4 py-3">Low upfront cost</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Universal License</td>
                    <td className="px-4 py-3">Cross-device designers</td>
                    <td className="px-4 py-3">Covers desktop + iPad apps</td>
                    <td className="px-4 py-3">Best if you switch devices</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Bundle (Designer + Photo + Publisher)</td>
                    <td className="px-4 py-3">Full Affinity suite</td>
                    <td className="px-4 py-3">All three apps</td>
                    <td className="px-4 py-3">Discounted as a bundle</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Confirm upgrade policies for major versions. Factor in iPad vs desktop needs before choosing single platform or Universal License.
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
                  <li>One-time license; no subscription.</li>
                  <li>Fast performance for vector and pixel work.</li>
                  <li>CMYK/spot support for print workflows.</li>
                  <li>Symbols/assets for UI and brand systems.</li>
                  <li>Cross-platform with iPad support.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>No native multiplayer collaboration.</li>
                  <li>Prototyping is limited versus Figma/Framer.</li>
                  <li>File-based workflow requires disciplined versioning.</li>
                  <li>Upgrade costs apply for major new versions.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other design and prototyping tools to pick the right fit for collaboration, licensing, and workflow.
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
            <p className="text-slate-700">See how {toolName} compares with modern UI/illustration tools.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Figma</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/figma">
                  View Figma
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Figma is cloud-first with multiplayer collaboration; {toolName} is offline-friendly with one-time pricing and stronger print/color tools.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Canva</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/canva">
                  View Canva
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Canva is template-driven and web-based; {toolName} is pro-grade design software for detailed control over vector and print outputs.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want a fast, offline-friendly design tool with one-time pricing and strong print/color support.
            </p>
            <p className="mt-3 text-slate-700">
              If collaboration and browser-based access are priorities, evaluate Figma/Framer. For subscription-free ownership, {toolName} is a standout.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A powerful alternative to subscription design suites, especially for illustrators and brand designers.
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
              Choose {toolName} if you need pro-grade vector/raster design without subscriptions and value offline performance and print accuracy.
            </p>
            <p>
              Consider Figma or Framer for cloud collaboration, or Canva for quick templated outputs. Keep {toolName} for precision work you fully own.
            </p>
            <p>{toolName} gives designers control, speed, and one-time licensing for UI, illustration, and brand work.</p>
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

export default AffinityDesignerToolPage;
