import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "SpyFu";
const slug = "spyfu";
const category = "SEO & PPC Competitor Research";
const shortPitch =
  "SpyFu provides competitor keyword research for SEO and PPC, showing rankings, ad history, and backlink insights to help teams plan campaigns.";
const pricingSummary =
  "Tiered subscriptions with limits on searches, exports, and tracked keywords. Higher plans increase limits and add API access; pricing is mid-market friendly.";
const officialUrl = "https://www.spyfu.com";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/spyfu.com",
  gradient: "from-emerald-500 via-teal-500 to-blue-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.24)]",
};

const alternatives = [
  { name: "Semrush", slug: "semrush" },
  { name: "Ahrefs", slug: "ahrefs" },
  { name: "Moz Pro", slug: "moz-pro" },
  { name: "SE Ranking", slug: "se-ranking" },
  { name: "Serpstat", slug: "serpstat" },
];

const faqs = [
  {
    q: "What is SpyFu?",
    a: "SpyFu is a competitive research tool for SEO and PPC, showing keywords, rankings, ad history, and backlinks for your site and competitors.",
  },
  {
    q: "Who is it for?",
    a: "SEO and PPC teams that want to benchmark competitors, find keyword gaps, and review ad copy/history.",
  },
  {
    q: "How is pricing structured?",
    a: "Tiered plans with limits on searches, exports, and tracked keywords. Higher tiers add more limits and API access.",
  },
  {
    q: "Does SpyFu replace analytics?",
    a: "No. Use it for research and competitor insights; pair with your analytics and search console data to validate performance.",
  },
  {
    q: "Does it have PPC data?",
    a: "Yes. It shows estimated PPC keywords, budgets, and ad history for domains.",
  },
  {
    q: "Is data exact?",
    a: "Data is estimated/modelled. Use it directionally and validate with first-party data.",
  },
  {
    q: "Are backlinks included?",
    a: "SpyFu includes backlink insights; depth may differ from specialized link tools.",
  },
  {
    q: "Is there rank tracking?",
    a: "Yes. Plans include rank tracking for chosen keywords; limits vary by tier.",
  },
];

function SpyfuToolPage() {
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
        "SpyFu offers SEO/PPC competitive research with keyword, ranking, ad history, and backlink data. It’s valued for directional insights and mid-market pricing.",
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
      title: "Competitor keywords",
      body: "See competitor rankings and PPC keywords to find gaps and opportunities.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Ad history",
      body: "Review historical ad copy and spend estimates to inform PPC strategy.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Keyword research",
      body: "Identify SEO and PPC keywords, related terms, and difficulty signals.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Backlink insights",
      body: "Analyze backlink profiles to benchmark authority and link opportunities.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Rank tracking",
      body: "Track target keywords; limits depend on plan tier.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Exports & API",
      body: "Export data and use API (higher tiers) to integrate with reporting.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="SpyFu review: pricing, features, pros & cons, and alternatives so you can judge if its competitor SEO/PPC data fits your strategy."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-sky-200/25 blur-3xl" />
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
                  {toolName} surfaces competitor keywords and ad history—use it directionally, then validate with your own analytics before acting.
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
              {toolName} is a competitor research tool for SEO and PPC. It provides estimated rankings, keywords, ad history, and backlinks to help teams find gaps and plan campaigns.
            </p>
            <p className="mt-3 text-slate-700">
              Use it directionally: data is modeled. Pair findings with first-party analytics, search console, and paid search data before making budget decisions.
            </p>
            <p className="mt-3 text-slate-700">
              Rank tracking, exports, and API (higher tiers) support reporting and monitoring over time.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for SEO/PPC practitioners who need competitor intel and keyword ideas.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "SEO managers finding keyword gaps and benchmarking rankings.",
                "PPC teams reviewing competitor ad history and estimated spend.",
                "Agencies preparing research for pitches and audits.",
                "Content teams prioritizing topics with competitive insights.",
                "SMBs wanting directional data at mid-market pricing.",
                "Analysts combining exports/API with reporting stacks.",
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
              {toolName} centers on competitive SEO/PPC data with exports and rank tracking.
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
                  Pricing is tiered with limits on searches, exports, and tracked keywords. Higher tiers raise limits and add API access. It’s generally mid-market compared to full-suite platforms.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Pick a mid-tier for most teams; upgrade if you need more tracking/export volume or API integration.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Basic</td>
                    <td className="px-4 py-3">Light usage/SMB</td>
                    <td className="px-4 py-3">Core research, lower limits</td>
                    <td className="px-4 py-3">Good starter; watch caps</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Most teams</td>
                    <td className="px-4 py-3">Higher limits, tracking, exports</td>
                    <td className="px-4 py-3">Balanced price/features</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Team/API</td>
                    <td className="px-4 py-3">Agencies/automation</td>
                    <td className="px-4 py-3">Max limits, API access</td>
                    <td className="px-4 py-3">Use if you need integrations</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Use findings with caution—validate with first-party data and search console. Budget for complementary tools if you need deeper backlink or site audits.
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
                  <li>Affordable competitive research for SEO/PPC.</li>
                  <li>Ad history helps craft PPC strategy.</li>
                  <li>Rank tracking and exports support reporting.</li>
                  <li>Backlink insights for benchmarking.</li>
                  <li>API on higher tiers for integration.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Data is modeled—use directionally, not as absolute.</li>
                  <li>Backlink depth may lag specialized link indexes.</li>
                  <li>Limits on searches/exports can be restrictive on lower tiers.</li>
                  <li>Site audits and technical checks require other tools.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other SEO/PPC research platforms to match budget, data depth, and feature needs.
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
            <p className="text-slate-700">See how {toolName} compares to other research platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Semrush</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/semrush">
                  View Semrush
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Semrush is a full-suite SEO/PPC platform with site audits; {toolName} is focused on competitive research with lower pricing. Choose Semrush for all-in-one needs, {toolName} for budget-friendly research.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Ahrefs</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/ahrefs">
                  View Ahrefs
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Ahrefs excels at backlinks and content research; {toolName} is competitive for PPC insights and affordable subscriptions. Choose based on whether backlink depth or PPC intel is priority.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want affordable competitor insights for SEO/PPC and can validate modeled data with your own analytics.
            </p>
            <p className="mt-3 text-slate-700">
              Pair it with search console/ads data, and use other tools for site audits or deep backlink analysis if needed.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A cost-effective competitive research tool—use its directional data to guide testing, not as a single source of truth.
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
              Choose {toolName} if you want budget-friendly competitor keyword and PPC insights and will validate findings with your data.
            </p>
            <p>
              Consider Semrush or Ahrefs for deeper, all-in-one suites. {toolName} fits teams needing directional research without high costs.
            </p>
            <p>{toolName} can guide SEO/PPC priorities—combine with testing and analytics to confirm impact.</p>
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

export default SpyfuToolPage;
