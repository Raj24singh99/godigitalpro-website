import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Article Forge";
const slug = "article-forge";
const category = "AI Writing";
const shortPitch =
  "Article Forge generates long-form articles from a keyword or prompt, aiming for SEO-friendly structure and readability with minimal input.";
const pricingSummary =
  "Paid plans with free trials; pricing scales by word credits. Higher tiers unlock more words, bulk generation, and longer articles.";
const officialUrl = "https://www.articleforge.com";
const ratingValue = 3.9;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/articleforge.com",
  gradient: "from-amber-500 via-orange-500 to-slate-900",
  glow: "shadow-[0_20px_80px_rgba(251,146,60,0.26)]",
};

const alternatives = [
  { name: "Jasper AI", slug: "jasper-ai" },
  { name: "Writesonic", slug: "writesonic" },
  { name: "LongShot", slug: "longshot-ai" },
  { name: "AISEO", slug: "aiseo" },
  { name: "Copy.ai", slug: "copyai" },
];

const faqs = [
  {
    q: "What is Article Forge?",
    a: "Article Forge is an AI writing tool that generates long-form articles from a keyword or prompt, targeting SEO-ready structure.",
  },
  {
    q: "Who is it for?",
    a: "Writers and marketers needing quick drafts to edit; not a replacement for subject-matter expertise or fact-checking.",
  },
  {
    q: "How does pricing work?",
    a: "Paid plans with trials; pricing scales by word credits. Higher tiers add longer articles, more words, and bulk generation.",
  },
  {
    q: "Is content unique?",
    a: "Outputs are AI-generated; always check for duplication, hallucinations, and originality. Run plagiarism and fact checks.",
  },
  {
    q: "Is it SEO-ready?",
    a: "Structure is SEO-oriented, but rankings depend on quality, links, and on-page optimization. Human editing is required.",
  },
  {
    q: "Does it replace human writers?",
    a: "No. Use it for first drafts; humans must edit for accuracy, depth, and brand voice.",
  },
  {
    q: "Is human review needed?",
    a: "Absolutely. Fact-check, add sources, and ensure E-E-A-T before publishing.",
  },
];

function ArticleForgeToolPage() {
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
        "Article Forge generates long-form drafts from keywords or prompts. It’s useful for fast starts but needs editing, fact-checking, and SEO optimization.",
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
      title: "Keyword-to-article",
      body: "Generate drafts from a single keyword or short prompt to jumpstart writing.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "SEO-oriented structure",
      body: "Creates headings and sections aimed at SEO readability; still needs optimization.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Long-form drafts",
      body: "Produce longer articles faster; higher tiers allow more words per article.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Bulk generation",
      body: "Generate multiple articles in batches (paid tiers) for scale workflows.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Exports",
      body: "Copy or export drafts to your CMS for editing and optimization.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Rewrite options",
      body: "Regenerate sections to refine tone and flow; human editing remains essential.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Article Forge review: pricing, features, pros & cons, and alternatives so you can choose the right AI writing tool."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-amber-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-orange-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-amber-600" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-amber-100 blur-3xl" />
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
                  {toolName} generates long-form drafts from keywords—edit deeply, fact-check, and optimize before publishing.
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
              {toolName} is an AI writer that turns a keyword or prompt into a long-form draft. It’s aimed at speed for SEO-style articles, but human editing is essential.
            </p>
            <p className="mt-3 text-slate-700">
              Use it to get a first draft, then add expertise, sources, and on-page SEO. Fact-check and ensure originality before publishing.
            </p>
            <p className="mt-3 text-slate-700">Pair with plagiarism and SEO tools to vet quality and compliance.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams needing fast drafts they will edit heavily.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Content teams generating first drafts for blogs.",
                "Affiliate marketers needing volume drafts to refine.",
                "SEO teams creating outlines and drafts before optimization.",
                "Agencies producing drafts for client review and edits.",
                "Writers looking for starting points and ideas to expand.",
                "Teams with a strong editing and fact-checking process.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-amber-500" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">{toolName} focuses on keyword-to-article drafting, long-form outputs, and bulk generation.</p>
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
                  Paid plans with trials; pricing scales by word credits. Higher tiers allow longer articles, more monthly words, and bulk generation. Costs rise with volume—budget for editing time too.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Test on a lower plan; upgrade if you need longer articles and bulk generation. Always invest in human editing.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter/Lower</td>
                    <td className="px-4 py-3">Testing</td>
                    <td className="px-4 py-3">Shorter articles, limited credits</td>
                    <td className="px-4 py-3">Good for fit checks</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Active drafting</td>
                    <td className="px-4 py-3">More words, longer articles, bulk mode</td>
                    <td className="px-4 py-3">Common for teams</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business/High</td>
                    <td className="px-4 py-3">High volume</td>
                    <td className="px-4 py-3">Highest credits, fastest generation</td>
                    <td className="px-4 py-3">Use if producing at scale</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Plan for plagiarism checks, fact-checking, and on-page SEO to make drafts publishable.</p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-amber-50 p-5 shadow-sm ring-1 ring-amber-100">
                <div className="flex items-center gap-2 text-amber-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Fast keyword-to-draft generation.</li>
                  <li>SEO-oriented headings/structure out of the box.</li>
                  <li>Long-form outputs for first drafts.</li>
                  <li>Bulk generation for higher tiers.</li>
                  <li>Quick rewrites to refine sections.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Outputs need heavy human editing and fact-checking.</li>
                  <li>Quality and originality vary; plagiarism checks required.</li>
                  <li>Word-based pricing can climb with volume.</li>
                  <li>Not a substitute for expert depth or sources.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other AI writing tools for quality, controls, and SEO workflows.</p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} compares to other AI writing platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Jasper AI</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/jasper-ai">
                  View Jasper AI
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Jasper offers brand voice and collaboration; {toolName} focuses on fast long-form drafts. Choose based on need for controls vs speed.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs LongShot</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/longshot-ai">
                  View LongShot
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                LongShot leans into factuality and citations; {toolName} is lighter on controls but faster for draft generation. Pick based on how much fact rigor you need out of the box.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need quick long-form drafts and have an editing workflow for accuracy and SEO. It saves time on first drafts, not final copy.
            </p>
            <p className="mt-3 text-slate-700">
              Plan for plagiarism checks, fact-checking, and on-page optimization. Treat outputs as starting points only.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Useful draft generator when paired with strong editorial review; not a publish-button tool.
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
            <p>{toolName} generates long-form drafts from keywords, helping you start faster.</p>
            <p>Use it when you have the editorial rigor to fact-check, add sources, and optimize. It is a draft helper, not a one-click publishing tool.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for your process, you can try it here:{" "}
              <a className="text-amber-700 hover:text-amber-600" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-amber-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default ArticleForgeToolPage;
