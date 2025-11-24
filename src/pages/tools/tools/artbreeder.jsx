import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Artbreeder";
const slug = "artbreeder";
const category = "AI Image Generation";
const shortPitch =
  "Artbreeder lets you blend and evolve images with AI, creating characters, landscapes, and abstract art by mixing genes and prompts.";
const pricingSummary =
  "Free tier with limited generations and uploads; paid plans add more credits, higher resolution, private images, and faster renders.";
const officialUrl = "https://www.artbreeder.com";
const ratingValue = 4.1;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/artbreeder.com",
  gradient: "from-indigo-500 via-violet-500 to-slate-900",
  glow: "shadow-[0_20px_80px_rgba(99,102,241,0.26)]",
};

const alternatives = [
  { name: "Midjourney", slug: "midjourney" },
  { name: "Stable Diffusion", slug: "stable-diffusion" },
  { name: "DALL·E", slug: "d-id" },
  { name: "Playground AI", slug: "playgroundai" },
  { name: "Leonardo AI", slug: "leonardo-ai" },
];

const faqs = [
  {
    q: "What is Artbreeder?",
    a: "Artbreeder is an AI image platform where you mix and evolve images using genes and prompts to create characters, landscapes, and abstract art.",
  },
  {
    q: "Who is it for?",
    a: "Artists, hobbyists, indie creators, and game devs needing quick concept art or character ideas.",
  },
  {
    q: "How does pricing work?",
    a: "Free tier is limited. Paid plans add more generations, higher resolution, private images, and faster renders.",
  },
  {
    q: "Is it commercial-ready?",
    a: "Check license and terms; some outputs may have restrictions. Always verify before commercial use.",
  },
  {
    q: "Can I control style?",
    a: "Yes. You can blend genes, adjust sliders, and use prompts. Expect to iterate to reach your target look.",
  },
  {
    q: "Does it allow uploads?",
    a: "Yes on paid tiers—upload images to blend and evolve results.",
  },
  {
    q: "Is human review needed?",
    a: "Yes. Check for artifacts, coherence, and rights before publishing or selling outputs.",
  },
];

function ArtbreederToolPage() {
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
        "Artbreeder lets you mix and evolve images using AI genes and prompts. Great for concepting characters and scenes; iterate and review for quality.",
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
      title: "Gene-based mixing",
      body: "Blend multiple images to evolve new characters, landscapes, or abstract art.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Prompt + slider controls",
      body: "Combine prompts with sliders for style, age, lighting, and other traits.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Uploads",
      body: "Bring your own images (paid tiers) to guide blends and variations.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Privacy options",
      body: "Paid plans allow private images if you don’t want outputs shared publicly.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Community gallery",
      body: "Remix from community images and genes for faster exploration.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Export",
      body: "Download generated images; higher tiers support higher resolution exports.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Artbreeder review: pricing, features, pros & cons, and alternatives so you can choose the right AI image tool."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-violet-200/25 blur-3xl" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-indigo-100 blur-3xl" />
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
                  {toolName} lets you blend and evolve images with AI—iterate, tweak genes, and review outputs before publishing.
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
              {toolName} is an AI image generator that blends and evolves images via genes and prompts, helping you create characters, scenes, and abstract art.
            </p>
            <p className="mt-3 text-slate-700">
              Use it for concepting and ideation. Expect to iterate—outputs can vary, and higher fidelity often requires multiple passes.
            </p>
            <p className="mt-3 text-slate-700">Check terms for commercial use and consider private mode if you don’t want to share training inputs.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for artists and creators who want fast visual ideation without 3D or pro illustration skills.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Indie game devs concepting characters and worlds.",
                "Creators exploring character portraits and avatars.",
                "Artists blending styles for inspiration.",
                "Marketers needing quick mood boards or concepts.",
                "Students and hobbyists experimenting with AI art.",
                "Teams needing low-fidelity mocks before pro illustration.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on gene mixing, prompts, and community remixing for AI image creation.</p>
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
                  Free tier is limited; paid plans add more generations, higher resolution, private images, and faster renders. Costs scale with credits and storage.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Test free; move to a mid-tier for uploads/private mode; higher tiers if you need more credits and resolution.</p>
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
                    <td className="px-4 py-3">Testing</td>
                    <td className="px-4 py-3">Limited generations, public images</td>
                    <td className="px-4 py-3">Good for quick trials</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Mid-tier</td>
                    <td className="px-4 py-3">Active creators</td>
                    <td className="px-4 py-3">More credits, uploads, private images</td>
                    <td className="px-4 py-3">Common for regular use</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Top tier</td>
                    <td className="px-4 py-3">Heavy use</td>
                    <td className="px-4 py-3">Highest credits/resolution, faster renders</td>
                    <td className="px-4 py-3">Choose if volume is high</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Budget for credits and storage. Private mode and uploads typically require paid tiers.</p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-indigo-50 p-5 shadow-sm ring-1 ring-indigo-100">
                <div className="flex items-center gap-2 text-indigo-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Gene-based mixing for unique blends.</li>
                  <li>Prompt + slider control for style and traits.</li>
                  <li>Uploads (paid) to guide results.</li>
                  <li>Community remixing for inspiration.</li>
                  <li>Private mode on paid tiers.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Quality varies; iterations needed.</li>
                  <li>Licensing/commercial use may have limits—check terms.</li>
                  <li>Free tier is constrained; paid needed for private uploads.</li>
                  <li>Not a replacement for pro illustration when detail matters.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other AI image tools for style control, licensing, and cost.</p>
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
            <p className="text-slate-700">See how {toolName} compares to other AI art platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Midjourney</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/midjourney">
                  View Midjourney
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Midjourney emphasizes prompt-based generation with high fidelity; {toolName} excels at blending existing images. Choose based on whether you start from prompts or want to evolve existing art.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Stable Diffusion</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/stable-diffusion">
                  View Stable Diffusion
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Stable Diffusion is highly flexible/self-hostable; {toolName} offers a no-setup, blend-focused experience. Pick based on control needs vs speed and ease.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want quick visual ideation via blending and evolving images. Plan iterations and check licensing for commercial use.
            </p>
            <p className="mt-3 text-slate-700">
              Paid tiers unlock private uploads and higher resolution. Keep humans in the loop to filter artifacts and ensure quality.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Great for creative exploration and concepting—use with iterative review for final assets.
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
            <p>{toolName} helps you blend and evolve images with AI for fast concepting of characters and scenes.</p>
            <p>Use it for ideation, then refine or recreate with higher-fidelity tools if needed. Always verify rights for commercial use.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} fits your creative flow, you can try it here:{" "}
              <a className="text-indigo-700 hover:text-indigo-600" href={officialUrl}>
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

export default ArtbreederToolPage;
