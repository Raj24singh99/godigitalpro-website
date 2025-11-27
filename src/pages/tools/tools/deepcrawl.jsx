import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Deepcrawl";
const slug = "deepcrawl";
const category = "Technical SEO";
const shortPitch =
  "Deepcrawl (Now Lumar) is a technical SEO platform that crawls sites at scale, surfaces issues, and integrates with analytics to improve crawlability and site health.";
const pricingSummary =
  "Enterprise-style pricing based on site size, crawl volume, and features. Higher tiers add more projects, data retention, integrations, and support; demos are required.";
const officialUrl = "https://www.lumar.io"; // Deepcrawl rebranded
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/lumar.io",
  gradient: "from-indigo-500 via-emerald-500 to-sky-500",
  glow: "shadow-[0_20px_80px_rgba(79,70,229,0.24)]",
};

const alternatives = [
  { name: "Screaming Frog", slug: "screamingfrog" },
  { name: "Sitebulb", slug: "sitebulb" },
  { name: "Botify", slug: "botify" },
  { name: "Ryte", slug: "ryte" },
  { name: "Oncrawl", slug: "oncrawl" },
];

const faqs = [
  {
    q: "What is Deepcrawl (Lumar)?",
    a: "Deepcrawl, now Lumar, is a technical SEO platform that crawls websites to detect issues affecting crawlability, indexability, and performance.",
  },
  {
    q: "Who is it for?",
    a: "Enterprise SEO teams and agencies that need large-scale crawling, issue detection, and reporting across multiple sites.",
  },
  {
    q: "How is pricing structured?",
    a: "Pricing depends on crawl volume, projects, and feature sets. Expect demos and contracts for enterprise deployments.",
  },
  {
    q: "Does it integrate with analytics?",
    a: "Yes. Integrations with analytics and data warehouses help combine crawl data with performance metrics.",
  },
  {
    q: "Can it automate alerts?",
    a: "Yes. Monitoring and alerts can notify teams about changes and new issues between crawls.",
  },
  {
    q: "Does it support JavaScript rendering?",
    a: "Yes. JS rendering is supported to crawl modern sites; check plan allowances and performance.",
  },
  {
    q: "Is there data export?",
    a: "Exports and API access are available on appropriate plans for custom analysis.",
  },
  {
    q: "Is it cloud-based?",
    a: "Yes. Crawls run in the cloud, making it suitable for large sites without local resource limits.",
  },
];

function DeepcrawlToolPage() {
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
        "Deepcrawl (Lumar) delivers large-scale technical SEO crawling, monitoring, and integrations, helping enterprise teams find and fix site issues that impact search performance.",
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
      title: "Large-scale crawling",
      body: "Cloud-based crawls for enterprise sites with JS rendering support.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Issue detection",
      body: "Find crawlability, indexability, internal linking, and performance issues.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Monitoring & alerts",
      body: "Schedule crawls and receive alerts for changes and new problems.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Integrations & exports",
      body: "Integrate with analytics/warehouses; export data and use APIs for analysis.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Dashboards & reporting",
      body: "Visualize site health and share reports with stakeholders.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "QA & staging",
      body: "Crawl staging environments to catch issues before deployment.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Deepcrawl (Lumar) review: pricing, features, pros & cons, and alternatives for enterprise technical SEO teams."
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
                  {toolName} crawls large sites, detects technical SEO issues, and connects to analytics to prioritize fixes that impact performance.
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
              {toolName} is a cloud-based technical SEO platform (now branded Lumar) that crawls websites at scale, identifies issues, and helps teams monitor site health over time.
            </p>
            <p className="mt-3 text-slate-700">Use it for large or complex sites where manual crawling is insufficient and recurring monitoring is needed.</p>
            <p className="mt-3 text-slate-700">Integrate crawl data with analytics to prioritize fixes that move SEO performance.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for enterprise SEO teams, agencies, and large sites needing deep technical coverage.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Enterprise SEO teams managing large sites or multiple properties.",
                "Agencies auditing and monitoring client sites at scale.",
                "Ecommerce and marketplace sites with frequent changes.",
                "Web teams needing staging and production QA coverage.",
                "Organizations that want crawl data integrated with analytics.",
                "Teams requiring alerts and scheduled monitoring for governance.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on scalable crawling, monitoring, and integrations.</p>
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
                  {toolName} uses enterprise pricing based on crawl volume, number of projects, and features like JS rendering, data retention, and integrations. Expect demos to align on scope and contracts.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Estimate URLs and crawl frequency; ensure your plan covers JS rendering, alerts, and data exports for your use cases.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">Mid-size sites</td>
                    <td className="px-4 py-3">Core crawling, JS support, dashboards</td>
                    <td className="px-4 py-3">Good entry point</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Large/complex sites</td>
                    <td className="px-4 py-3">More volume, alerts, integrations</td>
                    <td className="px-4 py-3">Fits most enterprise teams</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise+</td>
                    <td className="px-4 py-3">Very high scale</td>
                    <td className="px-4 py-3">Highest limits, API/exports, support</td>
                    <td className="px-4 py-3">Custom contracts</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Plan for dev/SEO collaboration—fixes require implementation. Align crawl schedules to deployments to catch regressions.</p>
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
                  <li>Cloud-based crawling for large sites.</li>
                  <li>Supports JS rendering and staging environments.</li>
                  <li>Alerts and monitoring for ongoing health.</li>
                  <li>Integrations and exports for deeper analysis.</li>
                  <li>Dashboards to share site health with stakeholders.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Enterprise contracts; pricing grows with volume.</li>
                  <li>Requires dev/SEO time to implement fixes.</li>
                  <li>May overlap with other analytics; ensure integration to avoid silos.</li>
                  <li>Learning curve for configuring complex crawls.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other technical SEO crawlers to match scale, JS rendering needs, and integrations.
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
            <p className="text-slate-700">See how {toolName} compares with other crawlers.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Screaming Frog</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/screamingfrog">
                  View Screaming Frog
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Screaming Frog is desktop-based and great for smaller audits; {toolName} offers cloud scale, monitoring, and collaboration. Choose based on site size and monitoring needs.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Botify</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/botify">
                  View Botify
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Botify is another enterprise crawler with analytics integrations; {toolName} (Lumar) competes closely. Evaluate based on integrations, pricing, and support model.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you manage large or complex sites and need cloud-based crawling, monitoring, and integrations to keep technical SEO in check.
            </p>
            <p className="mt-3 text-slate-700">
              It shines when paired with dev collaboration and analytics to prioritize fixes; plan for configuration and ongoing monitoring time.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A strong enterprise crawler—budget for volume and ensure you have resources to act on findings.</p>
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
              Choose {toolName} if you need enterprise-scale crawling, monitoring, and integrations to maintain technical SEO health.
            </p>
            <p>
              Consider Screaming Frog for smaller audits or Botify for alternative enterprise options; use {toolName} when cloud scale and monitoring are priorities.
            </p>
            <p>{toolName} helps teams catch and fix technical issues—combine with analytics and dev processes to realize the benefits.</p>
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

export default DeepcrawlToolPage;
