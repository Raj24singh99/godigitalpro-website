import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Majestic SEO";
const slug = "majestic-seo";
const category = "Backlink Analysis";
const shortPitch = "Majestic SEO specializes in backlink data with Trust Flow and Citation Flow to evaluate link quality and topical authority.";
const pricingSummary = "Tiered pricing by features and data limits. Higher tiers unlock API access, more rows, and advanced exports for teams and agencies.";
const officialUrl = "https://majestic.com";
const ratingValue = 4.0;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/majestic.com",
  gradient: "from-amber-500 via-lime-500 to-cyan-500",
  glow: "shadow-[0_20px_80px_rgba(190,242,100,0.18)]",
};

const alternatives = [
  { name: "Ahrefs", slug: "ahrefs" },
  { name: "Semrush", slug: "semrush" },
  { name: "Moz Pro", slug: "moz-pro" },
  { name: "CognitiveSEO", slug: "cognitiveseo" },
  { name: "Ryte", slug: "ryte" },
];

const faqs = [
  {
    q: "What is Majestic SEO?",
    a: "Majestic is a backlink intelligence tool with metrics like Trust Flow and Citation Flow to assess link quality and authority.",
  },
  {
    q: "Who is it for?",
    a: "SEO teams, link builders, and agencies that need deep backlink data, trust metrics, and topical relevance analysis.",
  },
  {
    q: "Does Majestic have an API?",
    a: "Yes. Higher plans include API credits for custom reporting, dashboards, and automation.",
  },
  {
    q: "What are Fresh vs Historic indexes?",
    a: "Fresh covers recent crawls; Historic provides long-term backlink data for deeper analysis.",
  },
  {
    q: "Can it find toxic links?",
    a: "Majestic flags low-quality or spammy links, but manual review is recommended before disavowing.",
  },
  {
    q: "Does it include keyword research?",
    a: "Majestic is primarily backlink-focused. Use separate tools for keyword and on-page analysis.",
  },
  {
    q: "Is there competitive comparison?",
    a: "Yes. You can compare domains for Trust Flow, anchor text, and referring domains.",
  },
  {
    q: "Is the interface modern?",
    a: "Some users find the UI dated compared with newer tools, but data depth remains strong.",
  },
];

function MajesticToolPage() {
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
        "Majestic provides backlink data, Trust Flow, and Citation Flow metrics. It is useful for SEO teams conducting link audits, prospecting, and competitive research.",
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
      title: "Trust Flow and Citation Flow",
      body: "Measure link quality and influence to evaluate backlink health and authority.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Topical relevance",
      body: "See topical categories of backlinks to judge relevance by niche and subject matter.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Fresh and Historic indexes",
      body: "Analyze recent links or long-term historical data depending on your needs.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "API access",
      body: "Use the API for custom reporting, dashboards, and automated monitoring.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Backlink auditing",
      body: "Identify potentially harmful links and track changes over time.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Competitive comparison",
      body: "Compare domains for Trust Flow, anchor text, and referring domains.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Majestic SEO review: pricing, features, pros & cons, and alternatives to see if its backlink data fits your SEO workflows."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-lime-200/25 blur-3xl" />
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
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Reviewed by GoDigitalPro - Updated May 2025</span>
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-lime-100 blur-3xl" />
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
                  {toolName} focuses on backlink intelligence and trust metrics. Use it to audit links, find opportunities, and monitor competitive profiles.
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
              {toolName} is a backlink intelligence tool that offers crawled link data, Trust Flow, Citation Flow, and topical categories to judge link quality and relevance.
            </p>
            <p className="mt-3 text-slate-700">
              It helps SEOs audit backlink profiles, research competitors, and find prospects for outreach. Data can be exported or accessed via API for custom dashboards.
            </p>
            <p className="mt-3 text-slate-700">Pair it with on-page, content, and technical SEO tools for a full-picture strategy.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for SEO teams that prioritize backlink audits, competitive research, and link prospecting.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Link builders researching prospects and opportunities.",
                "SEO agencies auditing client backlink profiles.",
                "In-house SEOs monitoring toxic links or spammy anchors.",
                "Competitive researchers comparing link profiles by niche.",
                "Teams reporting Trust Flow and topical relevance to stakeholders.",
                "Analysts needing API access for custom link dashboards.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-lime-500" />
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
              {toolName} centers on backlink discovery, trust scoring, and topical relevance to guide link audits and prospecting.
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
                  {toolName} uses tiered plans with data limits and features. Higher tiers add API credits, more rows, and advanced exports. Choose a tier based on your reporting needs and team size.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with Pro for most day-to-day audits; upgrade if you need API access, more rows, or multi-seat collaboration.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Lite</td>
                    <td className="px-4 py-3">Individual SEOs</td>
                    <td className="px-4 py-3">Core reports, limited rows, Fresh index access</td>
                    <td className="px-4 py-3">Good for basic audits</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Agencies and in-house teams</td>
                    <td className="px-4 py-3">More data, comparison tools, better exports</td>
                    <td className="px-4 py-3">Covers most day-to-day needs</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">API/Enterprise</td>
                    <td className="px-4 py-3">Large teams and custom dashboards</td>
                    <td className="px-4 py-3">API credits, highest limits, account management</td>
                    <td className="px-4 py-3">Best for automation and bulk reporting</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Watch row limits and export needs; budget for API usage if you plan custom dashboards. Pair with other SEO tools for keywords and on-page analysis.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros and cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-lime-50 p-5 shadow-sm ring-1 ring-lime-100">
                <div className="flex items-center gap-2 text-lime-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Deep backlink data with unique trust metrics.</li>
                  <li>Fresh and Historic indexes for time-based analysis.</li>
                  <li>Topical relevance helps evaluate link context.</li>
                  <li>API enables custom reporting and automation.</li>
                  <li>Useful for competitor comparisons and link audits.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Interface can feel dated compared with newer tools.</li>
                  <li>Limited on-page SEO features; focused on backlinks only.</li>
                  <li>Learning curve around Trust Flow and data exports.</li>
                  <li>Data may differ from other crawlers; validate across tools.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other backlink and SEO platforms to match data depth, UI preferences, and pricing.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-lime-700 hover:text-lime-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} compares with broader SEO platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Ahrefs</h3>
                <a className="text-sm font-semibold text-lime-700 hover:text-lime-600" href="/tools/ahrefs">
                  View Ahrefs
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Ahrefs offers all-in-one SEO features; {toolName} specializes in backlinks and trust metrics. Choose {toolName} for deep link trust analysis, Ahrefs for broader SEO workflows.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Semrush</h3>
                <a className="text-sm font-semibold text-lime-700 hover:text-lime-600" href="/tools/semrush">
                  View Semrush
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Semrush combines keyword research, content, and ads data. {toolName} is focused on backlink intelligence. Pick Semrush for all-in-one marketing, {toolName} for link-specific depth and trust metrics.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you prioritize backlink audits, trust metrics, and topical relevance in your SEO strategy.
            </p>
            <p className="mt-3 text-slate-700">
              Pair it with content, technical SEO, and analytics tools to complete your stack and validate impact on rankings.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Strong for link intelligence; less suited as a standalone all-in-one SEO suite. Use it alongside keyword and on-page tools.
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
            <p>Use {toolName} for backlink research, trust metrics, and competitive comparisons.</p>
            <p>
              Combine it with keyword, content, and technical SEO tools to round out your strategy and validate outcomes in analytics.
            </p>
            <p>{toolName} gives link-focused insight—manual review and complementary tools keep your SEO program balanced.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-lime-700 hover:text-lime-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-lime-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default MajesticToolPage;
