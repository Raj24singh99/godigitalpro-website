import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Marketo";
const slug = "marketo";
const category = "Marketing Automation";
const shortPitch = "Adobe Marketo is an enterprise marketing automation platform for lead nurturing, scoring, email, and revenue attribution.";
const pricingSummary = "Pricing is tiered by database size and features. Higher tiers add advanced analytics, ABM, and deeper integrations with CRM and ads.";
const officialUrl = "https://business.adobe.com/products/marketo/adobe-marketo.html";
const ratingValue = 4.1;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/marketo.com",
  gradient: "from-purple-600 via-indigo-600 to-blue-500",
  glow: "shadow-[0_20px_80px_rgba(99,102,241,0.24)]",
};

const alternatives = [
  { name: "HubSpot", slug: "hubspot" },
  { name: "Pardot", slug: "pardot" },
  { name: "ActiveCampaign", slug: "activecampaign" },
  { name: "AutopilotHQ", slug: "autopilothq" },
  { name: "Klaviyo", slug: "klaviyo" },
];

const faqs = [
  { q: "Who should use Marketo?", a: "B2B teams with established funnels and marketing ops resources to manage data and campaigns." },
  { q: "Does it integrate with Salesforce?", a: "Yes. Marketo integrates deeply with Salesforce for lead syncing and campaign data." },
  { q: "Is Marketo good for small teams?", a: "It can be heavy for small teams. Simpler tools may fit better until processes mature." },
  { q: "What about ABM?", a: "Higher tiers include ABM features like account scoring and ads connectivity." },
  { q: "How long is implementation?", a: "Expect a structured implementation with data mapping and program setup; timelines vary by complexity." },
  { q: "Does Marketo include a CRM?", a: "No. It integrates with CRMs; you still need a CRM for sales data and pipeline management." },
  { q: "Is training required?", a: "A dedicated marketing ops function is recommended to manage data hygiene, scoring, and campaigns." },
  { q: "Can I do multi-touch attribution?", a: "Yes. Higher tiers support advanced attribution and analytics for revenue reporting." },
];

function MarketoToolPage() {
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
        "Marketo delivers sophisticated automation, scoring, and analytics for B2B marketing teams. It works best with mature processes and strong ops support.",
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
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "Smart campaigns", body: "Build trigger-based nurture programs with detailed filters and flows." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Lead scoring and lifecycle", body: "Score leads and manage lifecycle stages with CRM sync and alerts to sales." },
    { icon: <Plug className="h-5 w-5 text-purple-500" />, title: "CRM and ad integrations", body: "Sync with Salesforce and connect to ads for retargeting and ABM coordination." },
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "Segmentation and personalization", body: "Segment audiences and personalize emails, landing pages, and forms with tokens." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "Attribution and analytics", body: "Report on multi-touch attribution and program performance across channels." },
    { icon: <Rocket className="h-5 w-5 text-emerald-500" />, title: "Scalability", body: "Handle large databases and complex enterprise programs with governance and roles." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Marketo review: pricing, features, pros & cons, and alternatives so you can decide if enterprise automation fits your team."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-purple-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-blue-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-purple-700" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-purple-100 blur-3xl" />
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
                  {toolName} powers enterprise-grade nurture, scoring, and attribution. It excels with strong ops, clean data, and sales alignment.
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
              {toolName} is a marketing automation platform for building multi-step campaigns, lead scoring, email programs, and attribution reporting. It integrates tightly with CRMs like Salesforce to sync leads, activities, and lifecycle stages.
            </p>
            <p className="mt-3 text-slate-700">
              It is powerful for B2B funnels with complex data models. A marketing ops function is key to design, maintain, and optimize programs and data hygiene.
            </p>
            <p className="mt-3 text-slate-700">Use it to orchestrate lead nurturing, connect ads to lifecycle stages, and report on revenue impact across touchpoints.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for B2B marketing teams with established funnels and marketing ops resources.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "B2B demand gen teams running lead nurture and scoring.",
                "Marketing ops owning lifecycle, data governance, and integrations.",
                "Enterprises syncing complex fields with CRM systems.",
                "Account-based teams coordinating ads and email touchpoints.",
                "Agencies managing sophisticated client programs.",
                "Companies needing detailed attribution and revenue reporting.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-purple-500" />
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
              {toolName} focuses on automation depth, scoring, segmentation, and enterprise integrations to run complex B2B programs.
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
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify_between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{toolName} pricing (2025)</h2>
                <p className="mt-2 text-slate-700">
                  {toolName} pricing depends on database size and features. Higher tiers add ABM, advanced analytics, and support. Plan for implementation and ops resources alongside licensing.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Select a tier that matches your database and maturity; budget for onboarding, integration, and ongoing admin.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Select</td>
                    <td className="px-4 py-3">Growing teams</td>
                    <td className="px-4 py-3">Core automation, email, scoring, basic reporting</td>
                    <td className="px-4 py-3">Good for teams with foundational ops</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Prime</td>
                    <td className="px-4 py-3">Mid-size enterprises</td>
                    <td className="px-4 py-3">Advanced analytics, dynamic content, better SLAs</td>
                    <td className="px-4 py-3">Balances depth and cost</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Ultimate/Enterprise</td>
                    <td className="px-4 py-3">Large enterprises and ABM</td>
                    <td className="px-4 py-3">Full analytics, ABM features, higher limits, premium support</td>
                    <td className="px-4 py-3">Best when complex data and teams are involved</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Include implementation, data cleanup, and ongoing marketing ops in your budget. Align with sales to ensure scoring and lifecycle stages reflect reality.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros and cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-purple-50 p-5 shadow-sm ring-1 ring-purple-100">
                <div className="flex items-center gap-2 text-purple-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Highly flexible automation and segmentation.</li>
                  <li>Strong lead scoring and lifecycle management.</li>
                  <li>Deep CRM and ad platform integrations.</li>
                  <li>Enterprise-scale analytics and attribution.</li>
                  <li>Tokens and templates support modular building.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Requires dedicated ops resources to manage complexity.</li>
                  <li>UI can feel heavy and dated for new users.</li>
                  <li>Pricing is higher than SMB-focused tools.</li>
                  <li>Implementation and data hygiene take time.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other marketing automation platforms to balance ease of use, breadth, and enterprise controls.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify_between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-purple-700 hover:text-purple-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} compares with common alternatives.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify_between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs HubSpot</h3>
                <a className="text-sm font-semibold text-purple-700 hover:text-purple-600" href="/tools/hubspot">
                  View HubSpot
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                HubSpot is easier to onboard and bundles CRM; {toolName} offers deeper automation and customization. Choose based on ops maturity, CRM choice, and complexity of your programs.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify_between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Pardot</h3>
                <a className="text-sm font-semibold text-purple-700 hover:text-purple-600" href="/tools/pardot">
                  View Pardot
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Pardot aligns closely with Salesforce for B2B. {toolName} provides more flexible automation but needs more admin effort. Pick Pardot for Salesforce simplicity, {toolName} for customization and advanced segmentation.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need enterprise-grade automation, scoring, and attribution with deep CRM integrations and have marketing ops to manage it.
            </p>
            <p className="mt-3 text-slate-700">
              Budget for implementation, data hygiene, and ongoing admin; align with sales to ensure lifecycle stages and scoring reflect reality.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Powerful for mature B2B teams; overkill for early-stage marketers without ops resources.
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
            <p>Choose {toolName} if you need flexible enterprise automation, robust scoring, and attribution—and have ops capacity to run it well.</p>
            <p>
              Budget for implementation and ongoing admin to unlock full value; keep sales alignment tight so data and lifecycle stages stay accurate.
            </p>
            <p>{toolName} can anchor a mature B2B stack when supported by strong data hygiene and cross-team alignment.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-purple-700 hover:text-purple-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-purple-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default MarketoToolPage;
