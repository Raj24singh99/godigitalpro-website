import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Justdone AI";
const slug = "justdone-ai";
const category = "AI Writing & Content";
const shortPitch = "Justdone AI is a writing assistant with 100+ tools for SEO content, rewriting, paraphrasing, and ideation across formats.";
const pricingSummary =
  "Credit-based tiers with a free trial. Higher plans add more word credits, faster models, and collaboration features for teams.";
const officialUrl = "https://justdone.ai";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/justdone.ai",
  gradient: "from-cyan-500 via-blue-500 to-indigo-600",
  glow: "shadow-[0_20px_80px_rgba(6,182,212,0.24)]",
};

const alternatives = [
  { name: "Jasper AI", slug: "jasper-ai" },
  { name: "Writesonic", slug: "writesonic" },
  { name: "Copy.ai", slug: "copy-ai" },
  { name: "Rytr", slug: "rytr" },
  { name: "QuillBot", slug: "quillbot" },
];

const faqs = [
  {
    q: "What is Justdone AI?",
    a: "Justdone AI is an AI writing platform with hundreds of templates for SEO articles, ad copy, paraphrasing, and editing.",
  },
  {
    q: "Who is Justdone AI best for?",
    a: "Marketers, bloggers, and small teams that need quick drafts, outlines, and rewrites across multiple content formats.",
  },
  {
    q: "Does Justdone AI support SEO writing?",
    a: "Yes. Templates focus on keyword-aware outlines, titles, and meta descriptions, though human editing is required.",
  },
  {
    q: "How does pricing work?",
    a: "Pricing is credit-based. Paid plans increase monthly credits, model speed, and collaboration options.",
  },
  {
    q: "Is there a Chrome extension?",
    a: "Yes. A browser extension supports quick drafting in docs, email, and CMS editors.",
  },
  {
    q: "Can I control tone and length?",
    a: "You can choose tones, lengths, and paraphrasing levels. Always review for accuracy and brand voice.",
  },
  {
    q: "Does it integrate with other tools?",
    a: "Copy/paste workflows are common; pair with SEO scoring tools for optimization and CMSes for publishing.",
  },
  {
    q: "Do I still need to edit outputs?",
    a: "Yes. Fact-check, add sources, and align with brand guidelines before publishing.",
  },
];

function JustdoneAIToolPage() {
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
        "Justdone AI delivers a broad template library for SEO-friendly drafts, paraphrasing, and editing. It accelerates first drafts but still requires human oversight.",
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
      title: "Template library",
      body: "100+ writing templates for SEO, ads, social, and editing tasks to speed up drafting.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-cyan-500" />,
      title: "Fast drafting",
      body: "Generate outlines and drafts quickly so teams can focus on refining content quality.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Paraphrasing & rewriting",
      body: "Adjust tone, clarity, and length while preserving meaning for repurposing content.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Tone controls",
      body: "Choose tones and styles; always review outputs to maintain brand voice.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Credit-based usage",
      body: "Plans scale by monthly credits and speed; upgrade when production volume grows.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Browser extension",
      body: "Draft inside docs, email, and CMS editors using the Chrome extension.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Justdone AI review: pricing, features, pros & cons, and alternatives so you can pick the right AI writing assistant."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-cyan-600" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-cyan-100 blur-3xl" />
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
                  {toolName} accelerates SEO drafts, rewrites, and editing so teams can publish faster while keeping quality checks in place.
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
              {toolName} is an AI writing assistant designed to speed up blog posts, landing pages, and marketing copy with SEO-aware templates.
            </p>
            <p className="mt-3 text-slate-700">
              Use it for outlines, drafts, paraphrasing, and email/social copy. Treat it as a drafting aid—edit for accuracy, tone, and sources before publishing.
            </p>
            <p className="mt-3 text-slate-700">
              Pair with on-page SEO tools and analytics to validate keywords, SERP intent, and performance after publishing.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for marketers and writers who need fast drafts with SEO focus and flexible tone controls.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Content marketers producing SEO articles and outlines at pace.",
                "Small teams needing quick drafts for blogs, ads, and social posts.",
                "Agencies creating first drafts before editor review.",
                "Writers repurposing content via paraphrasing and tone shifts.",
                "Teams testing multiple headlines, hooks, and CTAs quickly.",
                "Users who pair AI drafts with SEO scoring and fact-checking tools.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-cyan-500" />
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
              {toolName} focuses on templates, paraphrasing, and tone controls to accelerate SEO-friendly drafts across channels.
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
                  {toolName} offers credit-based plans. Costs rise with usage and faster model access; team features appear on higher tiers.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on the entry plan to test output quality and templates; upgrade when you need more credits or collaboration.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter/Free</td>
                    <td className="px-4 py-3">Testing/light use</td>
                    <td className="px-4 py-3">Core templates, limited credits</td>
                    <td className="px-4 py-3">Good for trials</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Solo creators</td>
                    <td className="px-4 py-3">More credits, faster responses</td>
                    <td className="px-4 py-3">Monthly pricing</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Team</td>
                    <td className="px-4 py-3">Small teams</td>
                    <td className="px-4 py-3">Highest credits, collaboration</td>
                    <td className="px-4 py-3">Scale as output grows</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Watch credit usage and output quality. Plan for SEO tools and editorial time to fact-check and adjust tone.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-cyan-50 p-5 shadow-sm ring-1 ring-cyan-100">
                <div className="flex items-center gap-2 text-cyan-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Large template library for varied formats.</li>
                  <li>Paraphrasing and tone tools for repurposing content.</li>
                  <li>Credit-based plans make it easy to start.</li>
                  <li>Browser extension for drafting in-context.</li>
                  <li>Useful for outlines and first drafts.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Outputs need human editing and fact-checking.</li>
                  <li>Credit costs rise with heavy usage.</li>
                  <li>Brand voice enforcement still manual.</li>
                  <li>Not a replacement for SERP/on-page scoring tools.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other AI writing platforms to match your budget, tone control, and collaboration needs.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-cyan-700 hover:text-cyan-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} stacks against other AI writing assistants.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Jasper AI</h3>
                <a className="text-sm font-semibold text-cyan-700 hover:text-cyan-600" href="/tools/jasper-ai">
                  View Jasper AI
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Jasper emphasizes brand voice and team workflows. {toolName} offers a broad template set and credit-based pricing. Choose based on brand governance vs. variety and cost.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Copy.ai</h3>
                <a className="text-sm font-semibold text-cyan-700 hover:text-cyan-600" href="/tools/copy-ai">
                  View Copy.ai
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Copy.ai focuses on marketing workflows and collaboration. {toolName} centers on a large template library with flexible tones. Pick the one that aligns with your workflow depth and team size.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth considering if you need fast drafts, rewrites, and SEO-friendly outlines with credit-based pricing flexibility.
            </p>
            <p className="mt-3 text-slate-700">
              Budget for credit usage and plan for editorial review. Pair with SEO scoring tools and fact-checking before publishing.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A solid drafting assistant for marketers and small teams—best when paired with human editing and SEO validation.
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
              Choose {toolName} if you want fast AI-assisted drafts, paraphrasing, and SEO templates, and have an editorial process to refine outputs.
            </p>
            <p>
              Consider Jasper for deeper brand voice control or Copy.ai for collaborative marketing workflows; use {toolName} for variety and speed.
            </p>
            <p>{toolName} helps teams publish faster while keeping SEO goals in view—human review remains essential.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-cyan-700 hover:text-cyan-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-cyan-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default JustdoneAIToolPage;
