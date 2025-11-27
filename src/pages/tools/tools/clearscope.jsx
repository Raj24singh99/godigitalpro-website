import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Clearscope";
const slug = "clearscope";
const category = "SEO Content Optimization";
const shortPitch =
  "Clearscope is a content optimization platform that analyzes search results to give keyword suggestions, readability targets, and content grading so articles rank better.";
const pricingSummary =
  "Tiered plans by seats and monthly reports. Higher tiers add more reports, team seats, integrations, and support; entry tiers suit small teams optimizing a few articles each month.";
const officialUrl = "https://www.clearscope.io";
const ratingValue = 4.6;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/clearscope.io",
  gradient: "from-sky-500 via-cyan-500 to-emerald-500",
  glow: "shadow-[0_20px_80px_rgba(14,165,233,0.24)]",
};

const alternatives = [
  { name: "Surfer SEO", slug: "surfer-seo" },
  { name: "MarketMuse", slug: "marketmuse" },
  { name: "Frase", slug: "frase-io" },
  { name: "Outranking", slug: "outranking-io" },
  { name: "Scalenut", slug: "scalenut" },
];

const faqs = [
  {
    q: "What is Clearscope?",
    a: "Clearscope is an SEO content optimization tool that uses SERP analysis to recommend keywords, structure, and readability targets so writers can align drafts with search intent.",
  },
  {
    q: "Who is it for?",
    a: "Content and SEO teams that want to optimize articles and landing pages for organic search, especially when multiple writers collaborate.",
  },
  {
    q: "Does Clearscope write content?",
    a: "It focuses on optimization rather than generative writing. You still write or use an AI writer, then optimize in Clearscope using its recommendations and content grade.",
  },
  {
    q: "How is pricing structured?",
    a: "Plans are tiered by monthly report credits and seats. Essentials suits small teams; Business and Enterprise increase reports, seats, and support. No perpetual free plan.",
  },
  {
    q: "What integrations are available?",
    a: "Clearscope integrates with Google Docs, WordPress, and some CMS workflows. Exports and copy/paste also work for other editors.",
  },
  {
    q: "Does it guarantee rankings?",
    a: "No tool can guarantee rankings. Clearscope helps align content to search intent, but results depend on quality, links, and technical SEO.",
  },
  {
    q: "Is human review required?",
    a: "Yes. Editors should fact-check, add expertise, and align tone. The tool guides relevance; humans add depth, accuracy, and E-E-A-T signals.",
  },
  {
    q: "How are keyword recommendations generated?",
    a: "Clearscope analyzes top-ranking pages for a query, extracts relevant terms, and suggests coverage and frequency ranges to mirror competitive content.",
  },
];

function ClearscopeToolPage() {
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
        "Clearscope provides SERP-driven keyword recommendations, readability targets, and a content grade to help teams optimize drafts for search. It is strong for SEO editors who want consistent briefs and optimization guidance.",
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
      title: "Keyword suggestions",
      body: "SERP-driven term recommendations with frequency ranges to improve topical coverage and relevance.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "SEO briefs",
      body: "Create briefs with target keywords, questions, and structure so writers know what to include before drafting.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Content grading",
      body: "Live content grade that updates as you edit, guiding writers toward competitive relevance scores.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Quality guardrails",
      body: "Readability and word-count guidance to match search intent without keyword stuffing.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "SERP analysis",
      body: "Pulls insights from top-ranking pages to surface related topics, questions, and entities to address.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Editor integrations",
      body: "Works inside Google Docs, WordPress, and via exports to keep writers in their preferred workflow.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Clearscope review: pricing, features, pros & cons, and alternatives so you can decide if it’s the right content optimization platform."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-sky-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-emerald-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-sky-600" />
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
                  {toolName} gives SEO teams a consistent way to brief writers, optimize drafts, and monitor keyword coverage without guesswork.
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
              {toolName} is an SEO content optimization platform. It uses SERP data to suggest keywords, questions, and readability targets so writers can match search intent and compete with top-ranking pages.
            </p>
            <p className="mt-3 text-slate-700">
              Think of it as an optimization layer: you still create the narrative, but Clearscope guides coverage and structure to improve organic performance.
            </p>
            <p className="mt-3 text-slate-700">It pairs well with AI writers or human authors to standardize briefs and editing before publishing.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for SEO and content teams optimizing keyword-driven articles at scale.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "SEO managers creating briefs with consistent keyword coverage.",
                "Content teams optimizing existing articles to regain rankings.",
                "Agencies delivering SEO content for multiple clients.",
                "Editors who want clear guidance on readability and length.",
                "Teams pairing AI-written drafts with human review and optimization.",
                "Writers who prefer working in Google Docs or WordPress with live guidance.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-500" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">{toolName} focuses on SERP-informed briefs, keyword coverage, and optimization workflows.</p>
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
                  {toolName} tiers are based on monthly report credits and seats. Essentials fits teams optimizing a handful of posts each month; Business and Enterprise increase reports, add collaboration, and priority support.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with Essentials to gauge workflow fit; move up when you need more reports, seats, or integrations.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Essentials</td>
                    <td className="px-4 py-3">Small teams, few articles/month</td>
                    <td className="px-4 py-3">Limited reports, 1–2 seats, Google Docs/WordPress add-ons</td>
                    <td className="px-4 py-3">Good for testing and ad-hoc refreshes</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business</td>
                    <td className="px-4 py-3">Teams publishing regularly</td>
                    <td className="px-4 py-3">More reports, more seats, collaboration features</td>
                    <td className="px-4 py-3">Fits steady monthly content cadence</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Large or agency teams</td>
                    <td className="px-4 py-3">Highest report volumes, SSO, custom onboarding</td>
                    <td className="px-4 py-3">Best for high-volume optimization</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Monitor report usage, team seats, and the time editors spend polishing content. Budget for complementary tools like analytics and link building.
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
                  <li>Clear keyword and topical coverage recommendations.</li>
                  <li>Content grade and readability guidance reduce guesswork.</li>
                  <li>Solid Google Docs and WordPress integrations.</li>
                  <li>Helpful for refreshing aging content to regain rankings.</li>
                  <li>Standardizes briefs across multiple writers or clients.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Pricing scales with report usage; no free tier.</li>
                  <li>Not a full SERP/technical SEO tool—pair with analytics and audits.</li>
                  <li>Requires human editing for voice, facts, and differentiation.</li>
                  <li>Generative writing is limited; mainly an optimization layer.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other SEO content tools to match your budget, report volume, and collaboration needs.
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
            <p className="text-slate-700">See how {toolName} stacks against other content optimization platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Surfer SEO</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/surfer-seo">
                  View Surfer SEO
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Surfer combines SERP analysis with some content generation; {toolName} emphasizes briefs, live grades, and editor plugins. Pick Surfer for broader UI plus audits, Clearscope for streamlined briefs and writer experience.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs MarketMuse</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/marketmuse">
                  View MarketMuse
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                MarketMuse leans into inventory audits and topic modeling; {toolName} is lighter-weight for day-to-day briefs and optimization. Choose based on whether you need site-wide planning or faster brief-to-publish workflows.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want consistent SEO briefs, clear keyword guidance, and editor-friendly optimization for each article.
            </p>
            <p className="mt-3 text-slate-700">
              It shines when paired with human editors, analytics, and link-building. Teams that already have writers or AI drafts can speed up optimization and maintain standards.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A strong content optimization choice for teams needing reliable briefs and live feedback; still requires editorial judgment and SEO fundamentals.
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
              Choose {toolName} if you want SERP-informed briefs, live content grading, and integrations that keep writers in familiar editors while optimizing for search.
            </p>
            <p>
              Consider Surfer for broader analysis or MarketMuse for site-level planning; use {toolName} when you want to streamline brief-to-publish optimization.
            </p>
            <p>{toolName} helps content teams standardize SEO quality while writers focus on clarity, expertise, and differentiation.</p>
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

export default ClearscopeToolPage;
