import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "CorelDRAW";
const slug = "coreldraw";
const category = "Graphic Design";
const shortPitch =
  "CorelDRAW is a vector graphics suite for illustration, layout, typography, and photo editing, used by designers for branding, print, and digital assets.";
const pricingSummary =
  "Subscription and perpetual options vary by region. Higher tiers bundle more apps, assets, and collaboration; trials are available for evaluation.";
const officialUrl = "https://www.coreldraw.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/coreldraw.com",
  gradient: "from-emerald-500 via-teal-500 to-indigo-500",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.24)]",
};

const alternatives = [
  { name: "Adobe Illustrator", slug: "adobe-xd" },
  { name: "Affinity Designer", slug: "affinity-designer" },
  { name: "Figma", slug: "figma" },
  { name: "Sketch", slug: "sketch" },
  { name: "Gravit Designer", slug: "gravit-designer" },
];

const faqs = [
  {
    q: "What is CorelDRAW?",
    a: "CorelDRAW is a vector graphic design suite for illustration, layout, and typography with companion photo-editing tools.",
  },
  {
    q: "Who is it for?",
    a: "Designers and teams creating logos, print collateral, signage, and digital assets for branding and marketing.",
  },
  {
    q: "How is pricing structured?",
    a: "Subscription and perpetual licenses vary by region. Higher tiers bundle more applications, assets, and collaboration features.",
  },
  {
    q: "Does it support collaboration?",
    a: "Collaboration features allow sharing and feedback; depth varies by plan and platform.",
  },
  {
    q: "Is it good for print?",
    a: "Yes. CorelDRAW supports print workflows, color management, and prepress tools for professional output.",
  },
  {
    q: "Does it run on Mac and Windows?",
    a: "Yes. CorelDRAW is available on Windows and Mac; feature parity can vary slightly by OS.",
  },
  {
    q: "Does it include photo editing?",
    a: "Corel PHOTO-PAINT and other tools are included in suites for raster editing and effects.",
  },
  {
    q: "Is there a trial?",
    a: "Trials are available so you can test performance, UI, and compatibility before purchase.",
  },
];

function CoreldrawToolPage() {
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
        "CorelDRAW provides vector illustration, layout, and photo tools for branding, print, and digital work, with options for collaboration and multi-platform support.",
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
      title: "Vector illustration",
      body: "Create logos, icons, and detailed illustrations with precision vector tools.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Layout & typography",
      body: "Design multi-page layouts, apply typography controls, and manage styles for print and digital.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Collaboration",
      body: "Share files for review and feedback; plan-dependent collaboration features.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Photo editing",
      body: "Use PHOTO-PAINT and related tools for raster editing, effects, and mockups.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Print & color management",
      body: "Prepress tools, color profiles, and output settings for professional print work.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Assets & fonts",
      body: "Access clipart, templates, and font management to speed up design work.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="CorelDRAW review: pricing, features, pros & cons, and alternatives so you can choose the right design suite."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-emerald-600" />
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
                  {toolName} provides vector and layout tools for branding, print, and digital work with options for collaboration and asset libraries.
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
              {toolName} is a vector design suite for illustration, layout, and typography, bundled with photo-editing tools. It is used for branding, print collateral, signage, and digital assets.
            </p>
            <p className="mt-3 text-slate-700">It supports Mac and Windows, with collaboration and asset management features depending on plan.</p>
            <p className="mt-3 text-slate-700">Use it for logo design, multi-page brochures, packaging, and marketing visuals when you need precise vector control.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for designers and teams needing vector and layout tools for print and digital brand assets.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Brand designers creating logos, icons, and identity systems.",
                "Marketing teams producing brochures, ads, and social assets.",
                "Print shops and sign makers needing prepress tools.",
                "Agencies collaborating with clients on brand collateral.",
                "Freelancers handling multi-page layouts and packaging.",
                "Teams wanting Mac/Windows support with vector precision.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">{toolName} focuses on vector illustration, layout, typography, and bundled photo tools.</p>
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
                  {toolName} offers subscription and perpetual options depending on region. Higher bundles include more apps, assets, and collaboration. Trials help you test performance, UI, and compatibility.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Use the trial; choose a plan that includes the apps and collaboration you need, and verify OS performance.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Standard/Graphics Suite</td>
                    <td className="px-4 py-3">Individual designers</td>
                    <td className="px-4 py-3">CorelDRAW, PHOTO-PAINT, assets</td>
                    <td className="px-4 py-3">Good for most use cases</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Professional/Collab</td>
                    <td className="px-4 py-3">Teams & collaboration</td>
                    <td className="px-4 py-3">Collaboration tools, more assets/features</td>
                    <td className="px-4 py-3">Fits teams with feedback cycles</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Large organizations</td>
                    <td className="px-4 py-3">Deployment controls, support, volume licensing</td>
                    <td className="px-4 py-3">Best for governance</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Check hardware requirements and color/profile needs; performance and color accuracy matter for print workflows.</p>
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
                  <li>Robust vector and layout tools.</li>
                  <li>Print-friendly features and color management.</li>
                  <li>Bundled photo editing and asset libraries.</li>
                  <li>Available on Mac and Windows.</li>
                  <li>Collaboration options for feedback.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>UI/feature differences between OS versions.</li>
                  <li>Subscription/perpetual choices can be confusing by region.</li>
                  <li>Collaboration depth may trail cloud-first tools.</li>
                  <li>Requires capable hardware for large files.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other vector design tools to match collaboration, platform, and budget needs.
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
            <p className="text-slate-700">See how {toolName} compares with other design suites.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Illustrator</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/adobe-xd">
                  View Illustrator
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Illustrator is industry-standard with deep ecosystem; {toolName} offers strong vector tools with different pricing and OS options. Choose based on workflow and ecosystem needs.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Affinity Designer</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/affinity-designer">
                  View Affinity Designer
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Affinity Designer is a one-time purchase with strong vector tools; {toolName} provides broader suite and print features. Pick based on budget and print needs.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need vector illustration, layout, and photo tools with print-friendly workflows and multi-platform support.
            </p>
            <p className="mt-3 text-slate-700">
              It shines when you require precise print output and bundled assets; evaluate collaboration depth and hardware needs for your team.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A capable design suite for branding and print—test with the trial and confirm OS performance before committing to a plan.
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
              Choose {toolName} if you want robust vector and layout tools with print workflows and bundled photo editing on Mac and Windows.
            </p>
            <p>
              Consider Illustrator or Affinity Designer depending on ecosystem and pricing preferences; use {toolName} for suite-based design with print strengths.
            </p>
            <p>{toolName} supports branding and print projects end-to-end—confirm hardware and collaboration needs before rollout.</p>
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

export default CoreldrawToolPage;
