import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, BarChart2, Gauge, Globe2, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Plausible Analytics";
const slug = "plausible";
const category = "Privacy-First Analytics";
const shortPitch =
  "Plausible is a lightweight, privacy-friendly web analytics tool with clean dashboards, goal tracking, and simple attribution without cookies or invasive scripts.";
const pricingSummary = "Usage-based pricing starting with a free trial; plans scale by monthly pageviews and include all features and sites.";
const officialUrl = "https://plausible.io";
const ratingValue = 4.6;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/plausible.io",
  gradient: "from-indigo-500 via-blue-500 to-emerald-500",
  glow: "shadow-[0_20px_80px_rgba(79,70,229,0.25)]",
};

const alternatives = [
  { name: "Fathom Analytics", slug: "fathom-analytics" },
  { name: "Matomo", slug: "matomo" },
  { name: "MonsterInsights", slug: "monsterinsights" },
  { name: "Fathom vs Plausible vs GA4", slug: "compare/fathom-vs-plausible-vs-ga4", isComparison: true },
  { name: "Plausible vs Fathom vs Matomo", slug: "compare/plausible-vs-fathom-vs-matomo", isComparison: true },
];

const faqs = [
  { q: "Is Plausible GDPR-compliant?", a: "Yes. Plausible is cookieless, complies with GDPR/PECR/CCPA, and provides a DPA. Data is hosted in the EU." },
  { q: "Can Plausible replace Google Analytics?", a: "For many marketing and product teams, yes. It covers traffic, sources, goals, campaigns, and simple event tracking without GA’s complexity." },
  { q: "Does Plausible slow down my site?", a: "No. The script is tiny (~1 KB) and cookieless, minimizing performance impact compared to heavier analytics scripts." },
  { q: "How does pricing work?", a: "Pricing scales by pageviews across all sites in your account. There’s a free trial, no long-term contract, and all features are included on every plan." },
  { q: "Can I track campaigns and conversions?", a: "Yes. Use UTM parameters, custom events, and goals to attribute conversions. Plausible reports sources, referrers, and top pages clearly." },
  { q: "Is there self-hosting?", a: "Yes. Plausible offers a self-hosted option if you need to keep analytics entirely on your own infrastructure." },
  { q: "Does Plausible integrate with CMS and frameworks?", a: "It works with any site via a script snippet. Official plugins cover WordPress, Ghost, Docusaurus, Next.js, and more." },
  { q: "Can I share public dashboards?", a: "Yes. You can enable public or passworded dashboards for stakeholders, clients, or transparency." },
];

export default function ToolPage() {
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
        "Plausible offers privacy-first analytics with clear reporting, fast performance, and simple setup. It’s a strong Google Analytics alternative for teams that value compliance and simplicity.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };

  const featureBlocks = [
    {
      icon: <Gauge className="h-5 w-5 text-indigo-500" />,
      title: "Lightweight script",
      body: "A ~1 KB script runs cookieless analytics with minimal impact on page speed and Core Web Vitals.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "Clean, real-time dashboards",
      body: "See traffic, sources, devices, locations, and conversions without navigating complex menus or sampling.",
    },
    {
      icon: <BarChart2 className="h-5 w-5 text-emerald-600" />,
      title: "Goals, events, and campaigns",
      body: "Track custom events, conversions, and UTM campaigns. Attribute signups, purchases, and content performance easily.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Privacy-first and compliant",
      body: "Cookieless by default, GDPR/PECR/CCPA compliant, EU hosting, and clear DPAs help teams meet privacy standards.",
    },
    {
      icon: <Plug className="h-5 w-5 text-blue-500" />,
      title: "Simple integrations",
      body: "Works with any site via snippet; plugins available for WordPress, Ghost, Next.js, and static site generators.",
    },
    {
      icon: <Globe2 className="h-5 w-5 text-indigo-600" />,
      title: "Public and shared dashboards",
      body: "Shareable dashboards keep clients, execs, or communities informed without extra seats or complex permissions.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="In-depth Plausible Analytics review for 2025 covering pricing, privacy, features, pros & cons, and the best alternatives for lightweight analytics."
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
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-emerald-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-indigo-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-emerald-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-indigo-600" />
                {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">{toolName} Review (2025): Pricing, Pros & Cons</h1>
              <p className="mt-4 text-lg text-slate-600">{shortPitch}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-700">
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Our rating: {ratingValue}/5</span>
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Reviewed by GoDigitalPro • Updated May 2025</span>
              </div>
              <p className="mt-4 text-slate-700">{pricingSummary}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="btn btn-primary bg-indigo-600 text-white ring-2 ring-indigo-500 hover:bg-indigo-700" href={officialUrl}>
                  Visit official website
                </a>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -left-8 top-10 h-20 w-20 rounded-full bg-white blur-3xl" />
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-emerald-200 blur-3xl" />
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
                  Plausible keeps analytics fast, privacy-first, and understandable. Track goals, campaigns, and events without the overhead of heavier suites.
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
              Plausible is a privacy-first analytics platform that provides real-time traffic, source, and conversion insights without cookies or invasive tracking. Setup is one script, dashboards are easy to read, and pricing is
              straightforward.
            </p>
            <p className="mt-3 text-slate-700">
              Teams use Plausible as a Google Analytics alternative when they need compliant, lightweight reporting for marketing, editorial, SaaS, and product sites.
            </p>
            <p className="mt-3 text-slate-700">
              You can deploy the hosted version or self-host if you need full data control. Public sharing and passworded dashboards help keep stakeholders informed.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Plausible fits teams that want simple, compliant analytics without sacrificing clarity.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Content and marketing teams needing clean traffic and conversion data without GA complexity.",
                "Privacy-focused companies that want GDPR/PECR compliance and cookieless tracking.",
                "Agencies sharing public dashboards with clients for transparency.",
                "Founders and product teams who want quick insights without tagging overhead.",
                "SaaS teams tracking signups and activations with lightweight events.",
                "Publishers who care about speed and Core Web Vitals impact.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-indigo-500" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">Plausible focuses on speed, privacy, and clarity so teams can answer questions quickly.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {featureBlocks.map((feature) => (
                <div key={feature.title} className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center gap-3 text-slate-900">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">{feature.icon}</div>
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
                  Pricing scales by monthly pageviews across all sites. All features are included on every tier, with a free trial to test. You can add as many sites as needed and keep using one plan until total pageviews grow.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on the lowest usage tier; move up only when traffic grows. Self-host if you require full data control.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Tier</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key limits</th>
                    <th className="px-4 py-3">Approx. price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter</td>
                    <td className="px-4 py-3">Blogs, landing pages, and new products</td>
                    <td className="px-4 py-3">Lower monthly pageview allotment, all features</td>
                    <td className="px-4 py-3">From ~$9/month</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">SaaS and content sites with steady traffic</td>
                    <td className="px-4 py-3">Higher pageview limits, unlimited sites</td>
                    <td className="px-4 py-3">~$29–$59/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Scale</td>
                    <td className="px-4 py-3">High-traffic publishers and larger funnels</td>
                    <td className="px-4 py-3">Largest pageview allotments, SSO options for enterprises</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Because pricing is pageview-based, you keep all features as you grow. If you need on-prem or strict data control, use the self-hosted option on your own infrastructure.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-indigo-50 p-5 shadow-sm ring-1 ring-indigo-100">
                <div className="flex items-center gap-2 text-indigo-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Cookieless, privacy-first, and GDPR-friendly by design.</li>
                  <li>Very lightweight script with minimal performance impact.</li>
                  <li>Clear dashboards and goal tracking without configuration bloat.</li>
                  <li>Simple, usage-based pricing with all features included.</li>
                  <li>Self-hosting option for full data control.</li>
                  <li>Public dashboards and easy sharing for stakeholders and clients.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Less granular reporting and attribution than GA4 or enterprise suites.</li>
                  <li>Fewer ad network integrations; campaign tracking is UTM-based.</li>
                  <li>No built-in session recordings or heatmaps—requires other tools.</li>
                  <li>Pageview-based pricing can rise with rapid traffic growth.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Explore these analytics options. All links go to dedicated review or comparison pages—no dead ends.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Open the head-to-head comparison." : "View the full review and pricing details."}</p>
                  </div>
                  <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">Compare Plausible to other privacy-focused and traditional analytics options.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Fathom vs GA4</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/compare/fathom-vs-plausible-vs-ga4">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Fathom and Plausible are lightweight and privacy-first; GA4 is deeper but complex. The comparison outlines when to prioritize simplicity versus detailed attribution and ads integrations.
              </p>
              <p className="mt-2 text-slate-900">Pick Plausible for clarity and compliance; GA4 for granular reporting tied to Google Ads; Fathom for similar simplicity with a different pricing model.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Fathom vs Matomo</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/compare/plausible-vs-fathom-vs-matomo">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Plausible and Fathom prioritize speed and privacy with hosted and self-host options. Matomo is feature-rich with on-prem analytics but heavier. The comparison page shows which fits your compliance and reporting needs.
              </p>
              <p className="mt-2 text-slate-900">Choose Plausible for lightweight clarity; Fathom for similar simplicity; Matomo when you need deep, self-hosted analytics and integrations.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you want privacy-friendly analytics that stakeholders can understand, Plausible is worth it. It delivers essentials—traffic, sources, goals, and campaigns—without slowing your site or overwhelming teams.
            </p>
            <p className="mt-3 text-slate-700">
              If you need ad platform integrations, multi-touch attribution, or very granular reports, GA4 or enterprise analytics may still be necessary. For most marketing sites, Plausible is a faster, clearer choice.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Plausible is a top pick for teams seeking simple, compliant analytics with excellent performance and clear dashboards.
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
              Choose Plausible if you want privacy-friendly analytics that are easy to deploy and easy to read. It fits marketers, founders, and agencies who value fast dashboards and straightforward pricing.
            </p>
            <p>Consider GA4 or Matomo when you need granular attribution or deep integrations; Fathom is a close peer if you want similar simplicity with a different UI and billing.</p>
            <p>Plausible integrates cleanly with most stacks and can be self-hosted for full control.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for your analytics, try it here: <a className="text-indigo-700 hover:text-indigo-600" href={officialUrl}>Visit Plausible</a>.
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-indigo-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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
      <button type="button" onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-900">
        <span className="text-sm font-semibold md:text-base">{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">{answer}</div>}
    </div>
  );
}
