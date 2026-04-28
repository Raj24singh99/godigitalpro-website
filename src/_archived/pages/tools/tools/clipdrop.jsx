import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Clipdrop";
const slug = "clipdrop";
const category = "AI Image Editing";
const shortPitch =
  "Clipdrop offers AI image editing tools like background removal, cleanup, relighting, upscaling, and text-to-image to speed up creative workflows.";
const pricingSummary =
  "Free and paid plans with credits. Paid tiers unlock higher resolutions, bulk edits, API access, and faster processing for teams and apps.";
const officialUrl = "https://clipdrop.co";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/clipdrop.co",
  gradient: "from-emerald-500 via-cyan-500 to-indigo-500",
  glow: "shadow-[0_20px_80px_rgba(14,165,233,0.25)]",
};

const alternatives = [
  { name: "Cleanup.pictures", slug: "cleanup-pictures" },
  { name: "Remove.bg", slug: "remove-bg" },
  { name: "PhotoRoom", slug: "photoroom" },
  { name: "Leonardo AI", slug: "leonardo-ai" },
  { name: "StockAI", slug: "stockai" },
];

const faqs = [
  {
    q: "What is Clipdrop?",
    a: "Clipdrop is a suite of AI image tools for background removal, cleanup, relighting, upscaling, and generation to help creators produce assets quickly.",
  },
  {
    q: "Who is it for?",
    a: "Designers, marketers, ecommerce sellers, and developers who need fast edits and bulk processing for product shots and creative assets.",
  },
  {
    q: "Does Clipdrop generate images?",
    a: "Yes. It supports text-to-image and image variations alongside editing tools like cleanup and relight.",
  },
  {
    q: "How is pricing structured?",
    a: "Free credits for light use; paid plans add higher resolution outputs, bulk processing, API access, and faster queues.",
  },
  {
    q: "Is there an API?",
    a: "Yes. You can integrate background removal, cleanup, and other features via API for apps and workflows.",
  },
  {
    q: "Do outputs need editing?",
    a: "Yes. AI edits can leave artifacts; manual touch-ups and QA are recommended for production assets.",
  },
  {
    q: "Does it work on mobile?",
    a: "Clipdrop offers web and mobile options; check current mobile support for specific tools.",
  },
  {
    q: "Is usage capped?",
    a: "Free plans have limited credits; paid plans include higher limits and better throughput.",
  },
];

function ClipdropToolPage() {
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
        "Clipdrop bundles background removal, cleanup, upscaling, relighting, and generation so creators can ship assets quickly for ecommerce and marketing.",
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
      title: "Background removal",
      body: "Remove backgrounds cleanly for product shots and social assets.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Cleanup & inpainting",
      body: "Erase unwanted objects and blemishes with AI-powered cleanup.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Relight & upscale",
      body: "Adjust lighting and upscale images to higher resolutions for polished outputs.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Text-to-image",
      body: "Generate images and variations from prompts to explore creative options.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "API & bulk",
      body: "Integrate via API or process batches for ecommerce catalogs and apps.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Fast web tools",
      body: "Browser-based tools with drag-and-drop simplicity and quick exports.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Clipdrop review: pricing, features, pros & cons, and alternatives so you can choose the right AI image editing toolkit."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-cyan-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-emerald-200/25 blur-3xl" />
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
                  {toolName} accelerates image prep for ecommerce and marketing with quick cleanup, relighting, and generation tools.
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
              {toolName} is an AI image-editing suite. It removes backgrounds, erases objects, relights subjects, upscales images, and generates visuals so teams can produce publish-ready assets faster.
            </p>
            <p className="mt-3 text-slate-700">Use it for product catalogs, social graphics, and marketing creative without lengthy manual edits.</p>
            <p className="mt-3 text-slate-700">Pair the web tools with the API to automate bulk workflows for ecommerce and apps.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams needing fast edits and clean product imagery.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Ecommerce teams prepping product images at scale.",
                "Marketers creating social and ad creatives quickly.",
                "Designers who want rapid cleanup before polishing assets.",
                "Developers adding image cleanup via API to their apps.",
                "Content teams needing background removal without Photoshop.",
                "Freelancers delivering clean client assets on short timelines.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on fast AI editing, generation, and bulk automation.</p>
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
                  {toolName} offers free credits and paid plans. Paid tiers increase credit limits, output resolution, batch sizes, and API throughput for production use.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Test with free credits; upgrade if you need high-res exports, API access, or team-level usage.</p>
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
                    <td className="px-4 py-3">Light edits</td>
                    <td className="px-4 py-3">Limited credits, standard resolution</td>
                    <td className="px-4 py-3">Good for testing</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Creators and small teams</td>
                    <td className="px-4 py-3">More credits, higher res, batch tools</td>
                    <td className="px-4 py-3">Best for regular use</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise/API</td>
                    <td className="px-4 py-3">Apps and large catalogs</td>
                    <td className="px-4 py-3">High limits, API throughput, support</td>
                    <td className="px-4 py-3">Align to SLA and volume</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Plan for QA and manual touch-ups on critical assets; AI may leave artifacts that need cleanup.</p>
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
                  <li>Fast background removal and cleanup.</li>
                  <li>Relight and upscale improve quality for ecommerce.</li>
                  <li>API and batch tools for automation.</li>
                  <li>Web-based; easy to start without heavy software.</li>
                  <li>Mix of editing and generation in one suite.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Artifacts may require manual edits.</li>
                  <li>Free credits are limited; paid plans needed for volume.</li>
                  <li>Not a full design tool—pair with editors for final polish.</li>
                  <li>API costs scale with throughput and volume.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other AI image tools to match quality, cost, and workflow fit.
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
            <p className="text-slate-700">See how {toolName} compares with other AI image editors.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Remove.bg</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/remove-bg">
                  View Remove.bg
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Remove.bg specializes in background removal; {toolName} adds cleanup, relighting, upscaling, and generation. Choose based on whether you need an all-in-one toolkit or a single-purpose service.
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
                PhotoRoom focuses on templates and mobile-first editing; {toolName} emphasizes web tools, API, and a mix of editing and generation. Pick based on workflow and platform preference.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need quick background removal, cleanup, and upscaling with optional generation, and you value an API for automation.
            </p>
            <p className="mt-3 text-slate-700">
              It excels for ecommerce and marketing teams that need speed; still plan for human QA and design polish on final assets.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A strong AI image toolkit for fast production assets—use paid tiers for higher res, batch jobs, and API reliability.
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
              Choose {toolName} if you want fast AI background removal, cleanup, and upscaling with options for generation and API automation.
            </p>
            <p>
              Consider Remove.bg for single-purpose removal or PhotoRoom for mobile-first templates; use {toolName} when you need a broader toolkit with automation options.
            </p>
            <p>{toolName} helps teams ship polished assets faster—keep design review in place for important campaigns.</p>
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

export default ClipdropToolPage;
