import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "CognitiveSEO";
const slug = "cognitiveseo";
const category = "SEO & Backlink Analysis";
const shortPitch =
  "CognitiveSEO is an SEO platform for backlink analysis, content optimization, and rank tracking to help marketers improve organic visibility.";
const pricingSummary =
  "Plans scale by number of campaigns, backlinks monitored, keyword tracking limits, and content audits. Higher tiers add more users, reports, and support.";
const officialUrl = "https://cognitiveseo.com";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/cognitiveseo.com",
  gradient: "from-emerald-500 via-blue-500 to-indigo-500",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.22)]",
};

const alternatives = [
  { name: "Ahrefs", slug: "ahrefs" },
  { name: "SEMrush", slug: "semrush" },
  { name: "Moz Pro", slug: "moz-pro" },
  { name: "Serpstat", slug: "serpstat" },
  { name: "Surfer SEO", slug: "surfer-seo" },
];

const faqs = [
  {
    q: "What is CognitiveSEO?",
    a: "CognitiveSEO is an SEO platform that offers backlink analysis, rank tracking, site audits, and content optimization tools to improve search performance.",
  },
  {
    q: "Who is it for?",
    a: "SEO specialists, agencies, and in-house marketers who need backlink insights and keyword/content tracking in one tool.",
  },
  {
    q: "Does it have backlink analysis?",
    a: "Yes. It surfaces link profiles, identifies toxic links, and tracks link building progress over time.",
  },
  {
    q: "Does it include content optimization?",
    a: "Yes. Content tools provide keyword suggestions and scoring to help optimize pages for target topics.",
  },
  {
    q: "How is pricing structured?",
    a: "Plans vary by number of campaigns, backlinks monitored, keyword tracking, and users. Higher tiers add more limits and support.",
  },
  {
    q: "Can I track rankings?",
    a: "Yes. Rank tracking monitors keywords across locations and devices with scheduled reports.",
  },
  {
    q: "Does it detect unnatural links?",
    a: "Yes. It flags potentially toxic links to help with cleanup and disavow decisions.",
  },
  {
    q: "Is there a free trial?",
    a: "Trials are commonly offered; expect to upgrade for ongoing tracking and higher limits.",
  },
];

function CognitiveSeoToolPage() {
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
        "CognitiveSEO combines backlink analysis, content optimization, and rank tracking, making it useful for SEOs who need to audit links and improve on-page relevance.",
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
      title: "Backlink analysis",
      body: "Inspect link profiles, identify toxic links, and monitor link building progress.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Content optimization",
      body: "Keyword suggestions and scoring to align content with search intent.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Rank tracking",
      body: "Track keywords across locations/devices with scheduled reports and alerts.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Site audits",
      body: "Audit sites for technical issues and visibility gaps that impact rankings.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Link risk detection",
      body: "Highlight potentially unnatural links to aid cleanup and disavow decisions.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Reporting & exports",
      body: "Custom reports and exports for clients and stakeholders on campaign performance.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="CognitiveSEO review: pricing, features, pros & cons, and alternatives to help you decide if it fits your SEO toolkit."
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
                  {toolName} helps SEOs audit links, optimize content, and track rankings in one platform—use it to spot risks and opportunities faster.
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
              {toolName} is an SEO platform with backlink auditing, rank tracking, site audits, and content tools. It’s designed to help marketers manage link risk, improve relevance, and monitor keyword performance.
            </p>
            <p className="mt-3 text-slate-700">Use it to investigate competitor links, identify toxic domains, and optimize content to align with search intent.</p>
            <p className="mt-3 text-slate-700">Combine its reports with analytics and CRM data to track business impact from SEO efforts.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for SEO teams that need backlink visibility plus content and rank tracking.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "SEO agencies auditing link profiles for clients.",
                "In-house SEOs tracking keyword performance and content relevance.",
                "Marketers analyzing competitor links for outreach targets.",
                "Teams needing toxic link detection and cleanup workflows.",
                "Content teams optimizing pages with keyword suggestions.",
                "Freelancers offering SEO audits and monthly reporting.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on link intelligence, on-page optimization, and ranking visibility.</p>
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
                  {toolName} plans scale with campaign counts, backlinks monitored, tracked keywords, and user seats. Higher tiers add reporting limits and support. Trial options help you test data quality before committing.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Pick a plan that covers your backlink and keyword limits; upgrade when you need more campaigns or users.</p>
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
                    <td className="px-4 py-3">Small sites or freelancers</td>
                    <td className="px-4 py-3">Limited campaigns, backlink and keyword caps</td>
                    <td className="px-4 py-3">Good for testing</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Professional</td>
                    <td className="px-4 py-3">Agencies & in-house teams</td>
                    <td className="px-4 py-3">More campaigns, reports, users</td>
                    <td className="px-4 py-3">Fits ongoing client work</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Large programs</td>
                    <td className="px-4 py-3">Highest limits, dedicated support</td>
                    <td className="px-4 py-3">Use for big portfolios</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Verify data freshness and backlink coverage in your market; costs scale with the volume of tracked assets.</p>
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
                  <li>Strong backlink auditing with toxic link detection.</li>
                  <li>Content optimization assists with on-page relevance.</li>
                  <li>Rank tracking with scheduled reporting.</li>
                  <li>Good for agency-style campaign management.</li>
                  <li>Exports and reports for stakeholders.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Limits on campaigns/keywords vary by plan.</li>
                  <li>Backlink indexes differ from competitors; compare before switching.</li>
                  <li>Content optimizer is helpful but still needs human editing.</li>
                  <li>Full-suite SEO needs may still require multiple tools.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other SEO suites to find the right data coverage, pricing, and workflows.
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
            <p className="text-slate-700">See how {toolName} compares with other SEO platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Ahrefs</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/ahrefs">
                  View Ahrefs
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Ahrefs is known for its large backlink index and site explorer; {toolName} emphasizes toxic link detection and content scoring. Compare data coverage and reporting needs before choosing.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs SEMrush</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/semrush">
                  View SEMrush
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                SEMrush offers a broad marketing suite; {toolName} is more focused on backlinks and on-page optimization. Choose SEMrush for all-in-one marketing, {toolName} for link-centric SEO workflows.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if backlink analysis and content optimization are core to your SEO workflow and you want toxic-link insights alongside rank tracking.
            </p>
            <p className="mt-3 text-slate-700">
              Validate data quality against your market; combine with analytics and crawl tools for a full picture of performance and technical health.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A solid backlink and content-focused SEO tool—best when you need link risk detection plus on-page optimization and tracking.
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
              Choose {toolName} if you need backlink intelligence, toxic link detection, and content optimization with rank tracking in one place.
            </p>
            <p>
              Consider Ahrefs or SEMrush for broader toolsets; use {toolName} when link audits and on-page tuning are your priority.
            </p>
            <p>{toolName} helps SEOs act on link risks and content gaps—pair it with technical audits and analytics for a complete strategy.</p>
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

export default CognitiveSeoToolPage;
