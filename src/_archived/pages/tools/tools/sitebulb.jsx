import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Sitebulb";
const slug = "sitebulb";
const category = "Technical SEO & Auditing";
const shortPitch =
  "Sitebulb is a desktop crawler and technical SEO audit tool that visualizes site structure, uncovers issues, and supports JavaScript rendering.";
const pricingSummary =
  "License-based pricing with tiers for Lite and Pro. Costs scale by feature depth (JavaScript crawling, API connectors, reports) rather than crawl volume alone.";
const officialUrl = "https://sitebulb.com";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/sitebulb.com",
  gradient: "from-emerald-500 via-teal-500 to-blue-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.24)]",
};

const alternatives = [
  { name: "Screaming Frog", slug: "screamingfrog" },
  { name: "Deepcrawl", slug: "deepcrawl" },
  { name: "Botify", slug: "botify" },
  { name: "Ryte", slug: "ryte" },
  { name: "Semrush Site Audit", slug: "semrush" },
];

const faqs = [
  {
    q: "What is Sitebulb?",
    a: "Sitebulb is a desktop website crawler and technical SEO audit tool with visualizations for site structure and in-depth issue reporting.",
  },
  {
    q: "Who is it for?",
    a: "Technical SEOs, agencies, and consultants who need flexible crawling, visual reports, and JavaScript rendering for audits.",
  },
  {
    q: "Does it support JavaScript rendering?",
    a: "Yes. Pro tier supports JavaScript crawling to audit modern frameworks and dynamic content.",
  },
  {
    q: "How is pricing structured?",
    a: "Licenses (Lite/Pro) billed per user. Features like JS rendering, API connectors, and advanced reports sit on higher tiers.",
  },
  {
    q: "Is it cloud-based?",
    a: "Sitebulb runs on desktop. You control crawl resources; exports and sharing are handled via reports and CSVs.",
  },
  {
    q: "Does it integrate with other tools?",
    a: "Yes. Pull data from Google Analytics/Search Console; export to CSV and share reports with clients.",
  },
  {
    q: "Can it visualize site architecture?",
    a: "Yes. It provides crawl maps and diagrams to show internal linking and depth issues.",
  },
  {
    q: "Is manual review still needed?",
    a: "Yes. Use findings to guide fixes; human prioritization and developer collaboration remain essential.",
  },
];

function SitebulbToolPage() {
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
        "Sitebulb is a powerful desktop crawler with strong visualizations and JavaScript support. It’s ideal for technical SEO audits and consultant workflows.",
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
      title: "Advanced crawling",
      body: "Handle large sites with control over user agents, robots rules, and rendering.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "JavaScript rendering",
      body: "Audit JS-heavy sites on Pro tier to surface rendered content and crawlability gaps.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Visual site maps",
      body: "Graph site architecture to reveal depth issues, orphaned pages, and internal link structure.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Issue scoring",
      body: "Prioritize fixes with severity scoring across technical, on-page, and performance dimensions.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "GA & GSC connectors",
      body: "Blend crawl data with analytics and search queries to prioritize traffic-impactful fixes.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Reporting & exports",
      body: "Export CSVs and share reports with clients; customize filters and columns for dev teams.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Sitebulb review: pricing, features, pros & cons, and alternatives so you can decide if it fits your technical SEO audit workflow."
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
                  {toolName} gives technical SEOs deep crawling plus visual maps—ideal for audits, issue triage, and sharing findings with devs and clients.
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
              {toolName} is a desktop crawler and audit tool built for technical SEO. It surfaces crawl, indexation, and on-page issues while providing visualizations for architecture and internal linking.
            </p>
            <p className="mt-3 text-slate-700">
              Unlike cloud crawlers, it runs locally, giving control over resources and data. Pro users can crawl JavaScript-heavy sites to catch rendering problems.
            </p>
            <p className="mt-3 text-slate-700">
              Exports, custom filters, and GA/GSC data help prioritize fixes that matter for traffic and conversions.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for technical SEOs and agencies doing deep crawl audits and visual site analysis.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Technical SEOs auditing crawlability, indexation, and on-page issues.",
                "Agencies running recurring audits for multiple clients with sharable reports.",
                "Consultants needing JavaScript rendering to review SPA/React/Next sites.",
                "In-house SEO teams prioritizing fixes with GA/GSC data and issue scoring.",
                "Teams visualizing site architecture to diagnose internal linking gaps.",
                "SEO leads building dev-friendly CSVs for sprints and fix lists.",
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
              {toolName} focuses on flexible crawling, visualization, and reporting to turn audits into actionable fix lists.
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
                  {toolName} offers Lite and Pro licenses. Pricing aligns to features—JavaScript crawling, API connectors, and advanced reports sit on Pro. Because it runs locally, costs are predictable and not tied to crawl volume.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with Lite for basic audits; upgrade to Pro if you need JS rendering, API data, or complex visualizations.</p>
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
                    <td className="px-4 py-3">Core audits</td>
                    <td className="px-4 py-3">Standard crawling, issue reporting</td>
                    <td className="px-4 py-3">Good for smaller sites</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Advanced/JS audits</td>
                    <td className="px-4 py-3">JS rendering, GA/GSC, advanced reports</td>
                    <td className="px-4 py-3">Recommended for agencies</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Budget time for crawl setup, filters, and issue triage. Use exports and sharing to align dev teams on fixes that move KPIs.
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
                  <li>Deep crawling with local control over resources.</li>
                  <li>Visual site maps for architecture insights.</li>
                  <li>JavaScript rendering on Pro for modern frameworks.</li>
                  <li>GA/GSC connectors to prioritize impactful fixes.</li>
                  <li>Shareable reports and CSVs for teams and clients.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Desktop-only; requires local resources for large crawls.</li>
                  <li>Collaborative cloud access not built-in; sharing via exports.</li>
                  <li>JS rendering and some features require Pro.</li>
                  <li>Setup and interpretation still need technical SEO expertise.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other crawlers to match your need for JS rendering, collaboration, and scale.
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
            <p className="text-slate-700">See how {toolName} compares to other technical SEO crawlers.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Screaming Frog</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/screamingfrog">
                  View Screaming Frog
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Both are desktop crawlers; {toolName} leans into visualization and reporting, while Screaming Frog is highly customizable with a broad plugin ecosystem. Choose based on reporting needs vs. custom extraction depth.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Deepcrawl/Botify</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/deepcrawl">
                  View Deepcrawl
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Cloud crawlers like Deepcrawl/Botify excel at collaboration and scheduled crawls; {toolName} is cost-effective and local. Choose cloud for large teams/automation, {toolName} for analyst-led audits and visuals.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need powerful desktop crawling with visualizations and JS support, and you’re comfortable running audits locally.
            </p>
            <p className="mt-3 text-slate-700">
              Plan for time to triage issues and align with dev teams. If you need cloud collaboration and automated scheduling, compare with enterprise crawlers.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A top technical SEO crawler for consultants and teams that want visual, actionable audits without cloud pricing.
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
              Choose {toolName} if you want a visual, flexible desktop crawler with JS support and reporting that clients and devs can use.
            </p>
            <p>
              Consider cloud crawlers for team-wide scheduling and collaboration; use Screaming Frog for highly customized extractions. {toolName} shines for audit-led workflows.
            </p>
            <p>{toolName} helps surface technical issues quickly—combine it with prioritization and dev partnership to drive SEO wins.</p>
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

export default SitebulbToolPage;
