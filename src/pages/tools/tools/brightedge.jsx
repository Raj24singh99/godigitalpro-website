import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "BrightEdge";
const slug = "brightedge";
const category = "SEO Platform";
const shortPitch =
  "BrightEdge is an enterprise SEO platform for keyword research, rank tracking, content insights, and technical/site performance reporting.";
const pricingSummary =
  "Sales-led enterprise pricing based on domains, keywords, and features. Higher tiers add more reporting, integrations, and support.";
const officialUrl = "https://www.brightedge.com";
const ratingValue = 4.1;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/brightedge.com",
  gradient: "from-sky-600 via-indigo-600 to-slate-900",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.26)]",
};

const alternatives = [
  { name: "SEMrush", slug: "semrush" },
  { name: "Ahrefs", slug: "ahrefs" },
  { name: "Conductor", slug: "conductor" },
  { name: "Botify", slug: "botify" },
  { name: "Deepcrawl", slug: "ai" },
];

const faqs = [
  { q: "What is BrightEdge?", a: "BrightEdge is an enterprise SEO platform covering keyword research, rank tracking, content recommendations, and technical reporting." },
  { q: "Who is it for?", a: "Enterprise SEO teams needing centralized reporting and recommendations across content and technical SEO." },
  { q: "How does pricing work?", a: "Sales-led enterprise pricing by domains/keywords/features; includes onboarding and support. Expect annual contracts." },
  { q: "Does it integrate with analytics?", a: "Yes. Integrates with analytics/search console and exports; check your stack compatibility." },
  { q: "Does it replace crawlers?", a: "It includes technical insights but many teams pair with dedicated crawlers (e.g., Botify/Deepcrawl) for depth." },
  { q: "Is human review needed?", a: "Yes. Validate recommendations, prioritize, and coordinate with content/engineering." },
];

function BrightEdgeToolPage() {
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
        "BrightEdge provides enterprise SEO reporting, keyword research, rank tracking, and content/technical insights. It’s strong for centralized reporting with enterprise support.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };

  const featureBlocks = [
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "Keyword research", body: "Discover and group keywords with volume and intent signals." },
    { icon: <Rocket className="h-5 w-5 text-emerald-500" />, title: "Rank tracking", body: "Monitor rankings across devices/locations and competitors." },
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "Content insights", body: "Recommendations for pages and templates to improve relevance." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Technical reporting", body: "Technical audits and site performance insights; pair with crawlers for depth." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "Dashboards & alerts", body: "Custom reporting, alerts, and dashboards for stakeholders." },
    { icon: <Plug className="h-5 w-5 text-purple-500" />, title: "Integrations", body: "Connect analytics/search console and export data to BI." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="BrightEdge review: pricing, features, pros & cons, and alternatives so you can choose the right enterprise SEO platform."
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
                  {toolName} centralizes SEO research, tracking, and recommendations—validate with your data and pair with crawlers for deeper tech audits.
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
              {toolName} is an enterprise SEO platform for keyword research, rank tracking, content recommendations, and technical insights. It brings reporting and recommendations into one place.
            </p>
            <p className="mt-3 text-slate-700">Use it to monitor rankings, find opportunities, and guide content/technical work. Pair with a crawler for deeper technical auditing.</p>
            <p className="mt-3 text-slate-700">Integrate analytics/search console to align with actual traffic and conversions.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for enterprise SEO teams with multiple domains and stakeholders.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Large sites needing centralized SEO reporting for leadership.",
                "Teams coordinating content and technical SEO across domains.",
                "Organizations wanting keyword/rank tracking with recommendations.",
                "SEOs who need dashboards and alerts tied to analytics data.",
                "Companies pairing platform recommendations with dedicated crawlers.",
                "Teams needing enterprise support and onboarding.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on research, tracking, content recommendations, technical insights, and reporting.</p>
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
                  Enterprise, sales-led pricing based on domains/keywords and features. Onboarding and support included; expect annual contracts. Budget for pairing with a crawler if needed.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Scope domains and keywords; negotiate based on usage. Pair with a crawler for deep tech audits.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Plan</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key inclusions</th>
                    <th className="px-4 py-3">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Large programs</td>
                    <td className="px-4 py-3">Research, tracking, recommendations, support</td>
                    <td className="px-4 py-3">Contracts/usage-based pricing</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Custom</td>
                    <td className="px-4 py-3">Multiple domains</td>
                    <td className="px-4 py-3">Add-ons, extra support/integrations</td>
                    <td className="px-4 py-3">Tailored by volume/features</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Plan for training, governance, and pairing with technical crawlers for deeper fixes.</p>
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
                  <li>Enterprise reporting across keywords, rankings, and content.</li>
                  <li>Recommendations to guide content and technical work.</li>
                  <li>Integrations with analytics/search console and exports.</li>
                  <li>Dashboards and alerts for stakeholders.</li>
                  <li>Onboarding and enterprise support.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Enterprise pricing; requires clear ROI.</li>
                  <li>Technical depth may still need dedicated crawlers.</li>
                  <li>Contracts and onboarding required.</li>
                  <li>Recommendations need human prioritization and validation.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other SEO platforms for cost, depth, and integrations.</p>
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
            <p className="text-slate-700">See how {toolName} compares to other enterprise SEO platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Conductor</h3>
                <a className="text-sm font-semibold text-blue-700 hover:text-blue-600" href="/tools/conductor">
                  View Conductor
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Conductor and {toolName} both serve enterprise SEO; evaluate based on UI preference, integrations, and support model. Many pair with a crawler for technical depth.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs SEMrush</h3>
                <a className="text-sm font-semibold text-blue-700 hover:text-blue-600" href="/tools/semrush">
                  View SEMrush
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                SEMrush offers broad SEO/marketing features and a large database; {toolName} targets enterprise reporting with support. Choose based on breadth, database size, and contract preference.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need enterprise SEO reporting and recommendations with support, and can pair it with technical crawling for deeper fixes.
            </p>
            <p className="mt-3 text-slate-700">Ensure stakeholders and engineering can act on recommendations to realize value.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A solid enterprise SEO platform—best when combined with strong execution and technical auditing tools.
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
            <p>{toolName} centralizes enterprise SEO research, tracking, and recommendations.</p>
            <p>Use it when you need executive-ready reporting and can pair it with a crawler and execution muscle to ship fixes.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} fits your SEO program, you can try it here:{" "}
              <a className="text-blue-700 hover:text-blue-600" href={officialUrl}>
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

export default BrightEdgeToolPage;
