import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, BarChart2, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Postscript";
const slug = "postscript";
const category = "SMS Marketing for Ecommerce";
const shortPitch =
  "Postscript is an SMS marketing platform built for Shopify brands—covering compliant list growth, campaigns, automation, two-way SMS, and analytics.";
const pricingSummary =
  "Usage-based pricing by messages/subscribers. Plans unlock advanced automation, segmentation, and support tiers. Carrier fees and compliance requirements apply.";
const officialUrl = "https://postscript.io";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/postscript.io",
  gradient: "from-emerald-500 via-teal-500 to-blue-500",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.24)]",
};

const alternatives = [
  { name: "Klaviyo", slug: "klaviyo" },
  { name: "Omnisend", slug: "omnisend" },
  { name: "SMSBump", slug: "smsbump" },
  { name: "Attentive", slug: "attentive" },
  { name: "Postscript vs Klaviyo vs Attentive", slug: "compare/postscript-vs-klaviyo-vs-attentive", isComparison: true },
];

const faqs = [
  { q: "What is Postscript?", a: "Postscript is an SMS marketing platform for Shopify, offering compliant list growth, campaigns, automations, and two-way SMS." },
  { q: "Who is it for?", a: "Shopify merchants wanting owned SMS channels for campaigns, automations, and conversational support." },
  { q: "How is pricing structured?", a: "Usage-based by messages/subscribers; higher tiers add segmentation, automations, and support." },
  { q: "Does it handle compliance?", a: "Yes. Compliance tooling is built in (TCPA/CTIA); you still must follow consent and opt-out rules." },
  { q: "Does it support two-way SMS?", a: "Yes. Two-way messaging and support workflows are available on supported plans." },
  { q: "Are integrations available?", a: "Deep Shopify integration plus connectors with help desks and marketing tools." },
  { q: "Can I segment and personalize?", a: "Yes. Segmentation, flows, and triggers are provided for targeted SMS." },
  { q: "Do I need human review?", a: "Yes. Review copy for compliance, offer clarity, and brand tone before sending." },
];

function PostscriptToolPage() {
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
        "Postscript delivers Shopify-focused SMS marketing with compliant growth, automation, and two-way messaging. Great for ecommerce brands; stay rigorous on consent and copy.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };

  const featureBlocks = [
    { icon: <Folder className="h-5 w-5 text-emerald-600" />, title: "Shopify-native", body: "Deep Shopify integration for data, triggers, and revenue tracking." },
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "Automation & flows", body: "Abandoned cart, win-back, and welcome series with segmentation." },
    { icon: <Plug className="h-5 w-5 text-indigo-500" />, title: "Two-way SMS", body: "Conversational support and replies to improve engagement." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Compliance tooling", body: "TCPA/CTIA tools, opt-in/opt-out management, and consent capture." },
    { icon: <BarChart2 className="h-5 w-5 text-blue-600" />, title: "Analytics & attribution", body: "Revenue tracking, campaign performance, and A/B tests." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "List growth", body: "Popups, keywords, and onsite tools to grow SMS subscribers." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Postscript review: pricing, SMS automation features, pros & cons, and alternatives like Klaviyo and Attentive for Shopify brands."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-emerald-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-blue-200/25 blur-3xl" />
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
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}>
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
                  {toolName} enables compliant SMS marketing for Shopify with automations and two-way messaging—keep consent and copy reviews in place.
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
              {toolName} is an SMS marketing platform built for Shopify. It provides compliant list growth, automated flows, two-way messaging, and revenue tracking for SMS campaigns.
            </p>
            <p className="mt-3 text-slate-700">Use it to run abandoned cart, win-back, and promo campaigns via SMS with Shopify data powering segmentation.</p>
            <p className="mt-3 text-slate-700">Compliance remains critical—ensure opt-in/opt-out and message content follow regulations.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for Shopify brands investing in owned SMS channels.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Shopify stores adding SMS to their lifecycle marketing.",
                "Brands running abandoned cart and win-back flows via SMS.",
                "Merchants wanting two-way SMS for support/engagement.",
                "Teams needing compliance guardrails for opt-in/opt-out.",
                "Marketers seeking revenue attribution for SMS campaigns.",
                "Brands that want keywords/popups to grow SMS lists.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on Shopify-native SMS automation and compliance tooling.</p>
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
                  Pricing is usage-based by messages/subscribers. Plans add advanced automation, segmentation, and support tiers. Carrier/message fees apply; confirm rates and compliance requirements.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with modest send volumes; scale once you validate opt-in growth and ROI. Budget for carrier fees.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter</td>
                    <td className="px-4 py-3">Low-volume senders</td>
                    <td className="px-4 py-3">Core campaigns/automations, compliance tooling</td>
                    <td className="px-4 py-3">Usage-based</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">Scaling Shopify brands</td>
                    <td className="px-4 py-3">Advanced segmentation, more sends, two-way SMS</td>
                    <td className="px-4 py-3">Most common</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Professional/Enterprise</td>
                    <td className="px-4 py-3">Higher volume & support</td>
                    <td className="px-4 py-3">Custom support, higher limits, advanced features</td>
                    <td className="px-4 py-3">Custom pricing</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Maintain consent records and clear opt-out flows. Align SMS tone with brand and legal guidelines before scaling sends.
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
                  <li>Shopify-native with deep data integration.</li>
                  <li>Compliance tooling for opt-in/opt-out management.</li>
                  <li>Automation and segmentation for lifecycle SMS.</li>
                  <li>Two-way SMS for support and engagement.</li>
                  <li>Revenue attribution and testing features.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Usage costs tied to message volume/carrier fees.</li>
                  <li>Compliance risk if consent/copy is mishandled.</li>
                  <li>Primarily Shopify-focused; non-Shopify support limited.</li>
                  <li>Channel is intrusive—content must be curated carefully.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other SMS and omnichannel platforms.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Open comparison page." : "View the full review and pricing details."}</p>
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
            <p className="text-slate-700">See how {toolName} compares to other SMS platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Klaviyo (SMS)</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/klaviyo">
                  View Klaviyo
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Klaviyo bundles email+SMS; {toolName} is SMS-first with deep Shopify focus. Choose Klaviyo for omnichannel in one app; {toolName} for specialized SMS workflows.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Attentive</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/attentive">
                  View Attentive
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Attentive is a leading enterprise SMS provider; {toolName} is strong for Shopify-first brands. Pick based on scale, support, and feature depth needs.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you are a Shopify merchant building an owned SMS channel with compliance tooling and lifecycle automations.
            </p>
            <p className="mt-3 text-slate-700">Budget for message volume and ensure opt-in/opt-out practices are airtight to avoid compliance risk.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A top SMS choice for Shopify brands; best when you pair it with strict compliance and creative testing.
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
              Choose {toolName} if you want Shopify-focused SMS with strong compliance tooling and automation, and you’re ready to manage consent and creative quality.
            </p>
            <p>
              Consider Klaviyo for combined email/SMS or Attentive for enterprise scale; {toolName} excels at specialized SMS for Shopify.
            </p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right, try it here:{" "}
              <a className="text-emerald-700 hover:text-emerald-600" href={officialUrl}>
                Visit {toolName}
              </a>
              .
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
      <button type="button" onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-900">
        <span className="text-sm font-semibold md:text-base">{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">{answer}</div>}
    </div>
  );
}

export default PostscriptToolPage;
