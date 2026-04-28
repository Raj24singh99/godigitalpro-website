import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "KoalaWriter";
const slug = "koalawriter";
const category = "AI Writing & SEO";
const shortPitch = "KoalaWriter is an AI writing tool for SEO-friendly articles, outlines, and product content with SERP-aware drafting and fact-check prompts.";
const pricingSummary =
  "Tiered pricing by word credits and features. Higher plans add more credits, faster outputs, and collaboration options.";
const officialUrl = "https://koala.sh";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/koala.sh",
  gradient: "from-emerald-500 via-teal-500 to-blue-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.24)]",
};

const alternatives = [
  { name: "Jasper AI", slug: "jasper-ai" },
  { name: "Writesonic", slug: "writesonic" },
  { name: "AISEO", slug: "aiseo" },
  { name: "Copy.ai", slug: "copy-ai" },
  { name: "Surfer SEO", slug: "surfer-seo" },
];

const faqs = [
  {
    q: "What is KoalaWriter?",
    a: "KoalaWriter is an AI writing tool that generates SEO-friendly articles, outlines, and ecommerce content with SERP-aware drafting.",
  },
  {
    q: "Who is KoalaWriter best for?",
    a: "SEO writers, content teams, and ecommerce marketers who need fast drafts and outlines to edit and publish.",
  },
  {
    q: "Does it use SERP data?",
    a: "It can reference SERP context to shape outlines and drafts; always review for accuracy.",
  },
  {
    q: "How does pricing work?",
    a: "Plans are credit-based by words and features. Higher tiers add more credits and faster outputs.",
  },
  {
    q: "Can it write product descriptions or ads?",
    a: "Yes. Templates support blog posts, product pages, and ad copy.",
  },
  {
    q: "Does it support fact-checking?",
    a: "It provides citations/prompts, but human fact-checking is required before publishing.",
  },
  {
    q: "Is there an editor?",
    a: "Yes. You can tweak tone, length, and sections before exporting or copying.",
  },
  {
    q: "Do I still need SEO tools?",
    a: "Yes. Pair with SERP/on-page scoring tools and human edits to ensure quality and ranking potential.",
  },
];

function KoalaWriterPage() {
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
        "KoalaWriter speeds up SEO drafts with SERP-aware outlines and templates for blogs and product content. It requires human editing and SEO scoring before publishing.",
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
      title: "SERP-aware outlines",
      body: "Generate outlines informed by SERP context to cover relevant headings and intent.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Fast drafts",
      body: "Create article drafts quickly so editors can refine tone, facts, and depth.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Templates",
      body: "Blog posts, product descriptions, and ad copy templates accelerate production.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Tone controls",
      body: "Adjust tone and length; always review to keep brand voice consistent.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Credit-based",
      body: "Word credit plans scale with output volume and speed.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Exports & copy",
      body: "Edit in-app, then copy or export to your CMS or docs workflow.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="KoalaWriter review: pricing, features, pros & cons, and alternatives to help you choose the right AI writing tool for SEO content."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-blue-200/25 blur-3xl" />
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
                  {toolName} accelerates SEO drafts and ecommerce content—use it for first drafts, then edit for voice, facts, and optimization.
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
              {toolName} is an AI writing tool designed for SEO and ecommerce content. It generates outlines and drafts with SERP context to cover relevant topics faster.
            </p>
            <p className="mt-3 text-slate-700">
              Use it to speed up article creation, product copy, and ad ideas. Treat outputs as drafts—edit for voice, facts, and compliance before publishing.
            </p>
            <p className="mt-3 text-slate-700">
              Pair it with on-page scoring tools and analytics to validate keyword targeting and measure performance.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for content and SEO teams that want faster drafts and are prepared to edit and optimize outputs.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Content marketers producing SEO articles and outlines.",
                "Ecommerce teams writing product descriptions and category copy.",
                "Agencies drafting first versions before editorial review.",
                "Writers testing multiple headlines, intros, and angles quickly.",
                "Teams pairing AI drafts with SERP/on-page scoring tools.",
                "Workflows that include fact-checking and brand voice edits.",
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
            <p className="mt-3 text-slate-700">
              {toolName} focuses on SERP-aware outlines, drafts, and templates for SEO and ecommerce content with credit-based pricing.
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
                  {toolName} uses credit-based plans with tiers for word counts and features. Higher plans add more credits, speed, and collaboration; costs scale with production volume.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Test on a lower tier; upgrade only if draft quality meets your editorial standards and you need more credits or speed.</p>
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
                    <td className="px-4 py-3">Testing/light use</td>
                    <td className="px-4 py-3">Limited credits, core templates</td>
                    <td className="px-4 py-3">Good for trials</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Solo creators</td>
                    <td className="px-4 py-3">More credits, faster outputs</td>
                    <td className="px-4 py-3">Match to monthly content volume</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Team</td>
                    <td className="px-4 py-3">Teams</td>
                    <td className="px-4 py-3">Highest credits, collaboration</td>
                    <td className="px-4 py-3">Plan for editorial workflows</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Track credit usage and editing time. Pair with SEO scoring and fact-checking before publishing.
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
                  <li>SERP-aware outlines for SEO content.</li>
                  <li>Templates for blogs, product copy, and ads.</li>
                  <li>Credit-based pricing to start small.</li>
                  <li>Tone and length controls in editor.</li>
                  <li>Fast drafts to accelerate production.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Outputs need human editing and fact-checking.</li>
                  <li>Brand voice and E-E-A-T require manual work.</li>
                  <li>Credit costs rise with heavy usage.</li>
                  <li>Not a substitute for SEO scoring tools.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other AI writing tools to match your budget, tone control, and SEO workflow needs.
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
            <p className="text-slate-700">See how {toolName} compares with other AI writing platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Jasper AI</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/jasper-ai">
                  View Jasper AI
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Jasper emphasizes brand voice and collaboration; {toolName} focuses on SERP-aware drafts and credit-based pricing. Choose based on brand governance vs. drafting speed and cost.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Surfer SEO</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/surfer-seo">
                  View Surfer SEO
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Surfer provides SERP scoring and optimization; {toolName} produces drafts. Many teams use {toolName} to draft and Surfer to optimize before publishing.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth considering if you need fast, SERP-aware drafts and have an editorial process to refine, fact-check, and optimize content.
            </p>
            <p className="mt-3 text-slate-700">
              Budget for credits and allocate time for SEO scoring and brand voice edits. Run trials to assess quality on your topics before scaling.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A helpful drafting assistant for SEO and ecommerce content—best when paired with human editing and optimization tools.
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
              Choose {toolName} if you want fast, SERP-aware AI drafts for SEO and ecommerce content and have the editorial rigor to polish outputs.
            </p>
            <p>
              Consider Jasper for brand voice governance or Surfer for optimization; keep {toolName} for drafting speed and credit flexibility.
            </p>
            <p>{toolName} helps teams publish faster while keeping SEO goals in view—human review remains essential.</p>
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

export default KoalaWriterPage;
