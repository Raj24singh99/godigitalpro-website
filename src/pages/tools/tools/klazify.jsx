import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Klazify";
const slug = "klazify";
const category = "Data Enrichment & Classification";
const shortPitch = "Klazify is a domain and company classification API that enriches URLs with categories, company info, and social data for targeting and analytics.";
const pricingSummary =
  "Tiered pricing based on API requests. Higher tiers add more monthly calls and support; costs scale with volume and SLAs.";
const officialUrl = "https://www.klazify.com";
const ratingValue = 4.1;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/klazify.com",
  gradient: "from-blue-500 via-sky-500 to-indigo-600",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.24)]",
};

const alternatives = [
  { name: "Clearbit", slug: "clearbit" },
  { name: "FullContact", slug: "fullcontact" },
  { name: "People Data Labs", slug: "people-data-labs" },
  { name: "Apollo.io", slug: "apollo-io" },
  { name: "ZoomInfo", slug: "zoominfo" },
];

const faqs = [
  {
    q: "What is Klazify?",
    a: "Klazify is an API that classifies domains and companies, returning categories, metadata, and social data for enrichment and targeting.",
  },
  {
    q: "Who is Klazify best for?",
    a: "Marketers, data teams, and developers who need domain classification for personalization, ad targeting, or analytics.",
  },
  {
    q: "What data does it provide?",
    a: "Categories, company details, logos, and social links for domains and URLs.",
  },
  {
    q: "How does pricing work?",
    a: "Monthly tiers based on API call volume; higher plans add more requests and support SLAs.",
  },
  {
    q: "Is there a free tier?",
    a: "Free trials are available with limited calls; confirm current limits on signup.",
  },
  {
    q: "Does it support multiple languages or regions?",
    a: "Classification works globally; accuracy can vary by region or niche sites.",
  },
  {
    q: "Is there a dashboard?",
    a: "Yes. A dashboard shows usage, API keys, and documentation links.",
  },
  {
    q: "Do I still need data validation?",
    a: "Yes. Validate enrichment results and consider human checks for critical workflows.",
  },
];

function KlazifyPage() {
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
        "Klazify enriches domains and companies with categories and metadata via API, helping teams personalize, target, and analyze traffic or leads.",
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
      title: "Domain classification",
      body: "Categorize domains and URLs for targeting, analytics, and personalization.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-blue-500" />,
      title: "Company enrichment",
      body: "Pull company info, logos, and social links to enhance profiles.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "API-first",
      body: "REST API with clear docs, dashboard keys, and usage monitoring.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Data governance",
      body: "Usage controls and validation; accuracy should be monitored by your team.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Global coverage",
      body: "Classify international domains; test regional accuracy for your market.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Integrations",
      body: "Use alongside CDPs, CRMs, and analytics tools via API and exports.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Klazify review: pricing, features, pros & cons, and alternatives so you can choose the right domain classification and enrichment API."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-blue-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-blue-600" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-blue-100 blur-3xl" />
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
                  {toolName} classifies domains and enriches company data via API, helping teams personalize, score, and analyze traffic or leads.
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
              {toolName} is an API-driven enrichment and classification tool. It returns categories, company info, and metadata for domains to support targeting, personalization, and analytics.
            </p>
            <p className="mt-3 text-slate-700">
              Use it to enrich leads, score traffic sources, and align campaigns to industry or intent. Integrate via API or exports into your CDP/CRM.
            </p>
            <p className="mt-3 text-slate-700">
              Always validate enrichment accuracy—especially for niche or new domains—before automating decisions.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams needing domain classification and company enrichment via API with flexible, volume-based pricing.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Marketers enriching leads and scoring traffic.",
                "Data teams classifying domains for analytics and personalization.",
                "Ad ops teams building category-based targeting and exclusions.",
                "Developers integrating classification into internal tools.",
                "CDP/CRM admins adding enrichment without heavy setup.",
                "Ops teams needing global domain coverage with quick lookups.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-blue-500" />
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
              {toolName} focuses on domain classification, enrichment, and API delivery for targeting and analytics use cases.
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
                  {toolName} uses tiered pricing by monthly API calls. Higher tiers add more requests and support; costs rise with volume and SLA needs.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Estimate monthly calls and test accuracy on a lower tier; upgrade once validation and workflows are proven.</p>
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
                    <td className="px-4 py-3">Limited monthly calls</td>
                    <td className="px-4 py-3">Validate accuracy first</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Teams</td>
                    <td className="px-4 py-3">More calls, better limits</td>
                    <td className="px-4 py-3">Match to steady workloads</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">High volume</td>
                    <td className="px-4 py-3">Highest calls, support/SLA</td>
                    <td className="px-4 py-3">Plan for throughput and QA</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Track hit rates and classification accuracy. Budget for monitoring and fallback rules when enrichment fails or is low confidence.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-blue-50 p-5 shadow-sm ring-1 ring-blue-100">
                <div className="flex items-center gap-2 text-blue-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>API-first domain classification and enrichment.</li>
                  <li>Global coverage with quick lookups.</li>
                  <li>Dashboard for keys and usage monitoring.</li>
                  <li>Fits personalization and targeting workflows.</li>
                  <li>Volume-based pricing keeps entry costs low.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Accuracy varies; human validation needed.</li>
                  <li>API limits can constrain heavy batch jobs.</li>
                  <li>Not a full B2B data suite (limited firmographics depth).</li>
                  <li>Retries/fallbacks required for production workflows.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other enrichment providers to match your data depth, accuracy needs, and budget.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-blue-700 hover:text-blue-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} compares with other enrichment platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Clearbit</h3>
                <a className="text-sm font-semibold text-blue-700 hover:text-blue-600" href="/tools/clearbit">
                  View Clearbit
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Clearbit offers broader firmographics and B2B data. {toolName} focuses on fast classification and basic enrichment. Pick based on data depth vs. cost and speed.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs People Data Labs</h3>
                <a className="text-sm font-semibold text-blue-700 hover:text-blue-600" href="/tools/people-data-labs">
                  View People Data Labs
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                People Data Labs provides deep people and company data; {toolName} is leaner for domain classification. Choose based on whether you need person-level enrichment or lightweight domain categories.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth considering if you need fast domain classification and basic enrichment via API with predictable, volume-based pricing.
            </p>
            <p className="mt-3 text-slate-700">
              Validate accuracy on your domains and set up monitoring and fallbacks. Upgrade only when call volume and SLA needs justify it.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A lean enrichment API for targeting and analytics—best when paired with validation and complementary data sources.
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
              Choose {toolName} if you need API-first domain classification and basic enrichment with simple, volume-based pricing and can validate accuracy in your stack.
            </p>
            <p>
              Consider Clearbit or People Data Labs for deeper firmographics and person-level data; keep {toolName} for lightweight classification use cases.
            </p>
            <p>{toolName} accelerates targeting and analytics with quick enrichment—human validation and monitoring keep quality high.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-blue-700 hover:text-blue-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-blue-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default KlazifyPage;
