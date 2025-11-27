import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, BookOpen, Globe2, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Freshsales";
const slug = "freshsales";
const category = "CRM & Sales Automation";
const shortPitch =
  "Freshsales is Freshworks’ CRM for SMBs, combining contact management, pipelines, email, telephony, and AI insights to help reps close faster.";
const pricingSummary =
  "Free tier available; Growth/Pro/Premium start around $9–$69/user/month billed annually, adding sequences, forecasting, territory management, and AI. Pricing scales by seats and features.";
const officialUrl = "https://www.freshworks.com/crm/sales/";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/freshworks.com",
  gradient: "from-emerald-500 via-teal-500 to-sky-500",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.22)]",
};

const alternatives = [
  { name: "HubSpot CRM", slug: "hubspot" },
  { name: "Pipedrive", slug: "pipedrive" },
  { name: "Zoho CRM", slug: "zoho-crm" },
  { name: "Salesforce Sales Cloud", slug: "salesforce" },
  { name: "Close", slug: "close" },
];

const faqs = [
  {
    q: "Who is Freshsales best for?",
    a: "Small to mid-sized sales teams that want an easy CRM with built-in email, phone, and sequences.",
  },
  {
    q: "Does Freshsales include telephony?",
    a: "Yes. Built-in phone and call logging are available on paid plans.",
  },
  {
    q: "Is there marketing automation?",
    a: "Freshsales focuses on sales; marketing automation is in Freshmarketer but integrates within the Freshworks suite.",
  },
  {
    q: "Can I build pipelines and workflows?",
    a: "Yes. Custom pipelines, workflows, sequences, and automations are available by tier.",
  },
  {
    q: "Does it have AI features?",
    a: "Freddy AI provides lead scoring, insights, and next-best actions on higher tiers.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes. A limited free plan exists; most teams upgrade to Growth/Pro for core sales features.",
  },
  {
    q: "Does Freshsales support territories and teams?",
    a: "Higher tiers add territory management, permissions, and roles to organize reps.",
  },
  {
    q: "Are there integrations?",
    a: "Yes. Integrates with Freshdesk, Freshmarketer, email/calendar, and third-party apps via marketplace and APIs.",
  },
];

function FreshsalesToolPage() {
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
        "Freshsales is a CRM for SMB sales teams with contact management, pipelines, built-in email/phone, and AI scoring. It’s approachable and integrates across Freshworks products.",
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
      icon: <BookOpen className="h-5 w-5 text-emerald-500" />,
      title: "Pipelines and deals",
      body: "Custom pipelines, stages, and deal management with tasks and reminders.",
    },
    {
      icon: <Plug className="h-5 w-5 text-sky-500" />,
      title: "Built-in email and phone",
      body: "Send/track emails, log calls, and use integrated telephony on paid tiers.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-amber-500" />,
      title: "Sequences and workflows",
      body: "Automate follow-ups, assignments, and notifications to keep deals moving.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "AI insights",
      body: "Freddy AI for lead scoring, forecasting, and next-best actions (higher tiers).",
    },
    {
      icon: <Globe2 className="h-5 w-5 text-teal-500" />,
      title: "Reporting and forecasting",
      body: "Dashboards, reports, and forecasts to track pipelines and rep performance.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-emerald-500" />,
      title: "Integrations and suite",
      body: "Works with Freshdesk, Freshmarketer, and third-party apps via marketplace and API.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Freshsales review for SMB sales teams: pricing, features, pros & cons, and alternatives for CRM, email/phone, and automations."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-200/30 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-sky-200/30 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-emerald-500" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-sky-100 blur-3xl" />
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
                  Freshsales combines pipelines, email/phone, and AI scoring in a CRM built for SMB sales teams that want quick onboarding.
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
              {toolName} is a {category.toLowerCase()} solution from Freshworks. It covers contact management, pipelines, email/phone, sequences, and AI lead scoring with an approachable UI for SMB sales teams.
            </p>
            <p className="mt-3 text-slate-700">
              Built-in telephony and email tracking reduce tool sprawl. Integrations with the Freshworks suite help align support and marketing.
            </p>
            <p className="mt-3 text-slate-700">
              Higher tiers add territory management, forecasting, and AI insights for teams growing their sales ops maturity.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} fits SMB sales teams needing an easy CRM with built-in comms and automation.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Inbound/inside sales teams managing high-velocity pipelines.",
                "SMBs wanting built-in phone/email without extra tools.",
                "Teams needing sequences and workflows for follow-up.",
                "Orgs already using Freshdesk/Freshmarketer wanting suite integration.",
                "Sales managers who need simple reports and forecasts.",
                "Teams that want AI scoring and insights on higher tiers.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
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
              {toolName} emphasizes easy CRM setup, built-in comms, automation, and AI scoring for SMB sales teams.
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
                  Free plan exists; Growth/Pro/Premium range roughly $9–$69/user/month (annual). Higher tiers add sequences, AI, territory management, and advanced analytics.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on Growth to unlock key sales features; move to Pro/Premium if you need AI insights, territories, or deeper forecasting.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Plan</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key limits</th>
                    <th className="px-4 py-3">Approx. price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Free</td>
                    <td className="px-4 py-3">Testing and very small teams</td>
                    <td className="px-4 py-3">Limited features, no advanced automation</td>
                    <td className="px-4 py-3">Free</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">Core sales teams</td>
                    <td className="px-4 py-3">Email/phone, basic automation, pipelines</td>
                    <td className="px-4 py-3">~$9–$19/user/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro/Premium</td>
                    <td className="px-4 py-3">Growing teams needing AI and territories</td>
                    <td className="px-4 py-3">AI, sequences, territory, advanced analytics</td>
                    <td className="px-4 py-3">~$39–$69+/user/month</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Consider seat counts, need for built-in phone/email, and whether AI/territory features matter. Annual billing lowers seat cost.
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
                  <li>Easy CRM setup with built-in email and phone.</li>
                  <li>Affordable entry pricing for SMBs.</li>
                  <li>Sequences and workflows improve follow-up.</li>
                  <li>AI scoring and insights on higher tiers.</li>
                  <li>Integrates with Freshworks suite for support/marketing.</li>
                  <li>Mobile apps for reps on the go.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Less customization than enterprise CRMs.</li>
                  <li>Advanced reporting/analytics can feel limited vs. Salesforce/HubSpot.</li>
                  <li>Marketing automation is separate in Freshmarketer.</li>
                  <li>Phone features depend on plan and region.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              {toolName} competes with SMB and mid-market CRMs. Choose based on depth of automation, analytics, and existing suite alignment.
            </p>
            <p className="mt-2 text-slate-700">Every link below goes to a live tool page—no broken routes.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
                  </div>
                  <a className="text-sm font-semibold text-sky-600 hover:text-sky-500" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">Compare {toolName} to other CRMs.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs HubSpot CRM</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/freshsales-vs-hubspot">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                HubSpot offers a broad marketing/sales/service platform with deeper automation. {toolName} is simpler and often more affordable for sales-focused teams.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} for fast, sales-centric setup; choose HubSpot if you need integrated marketing automation and deeper analytics.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify_between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Pipedrive</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/freshsales-vs-pipedrive">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Pipedrive excels at simple pipelines and automation. {toolName} offers built-in phone/email and ties into the Freshworks suite.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} for suite integration and comms; choose Pipedrive for lean pipeline management and simplicity.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you’re an SMB sales team wanting an easy CRM with built-in email/phone, sequences, and AI scoring, {toolName} is worth it. Setup is quick and pricing is SMB-friendly.
            </p>
            <p className="mt-3 text-slate-700">
              If you need deep analytics, enterprise customization, or heavy marketing automation, compare HubSpot or Salesforce before committing.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> {toolName} is a solid sales CRM for SMBs, especially if you already use or plan to use Freshworks products.</p>
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
              Choose {toolName} if you want a sales-focused CRM with built-in comms, automation, and AI that’s approachable for SMB teams.
            </p>
            <p>
              Consider HubSpot, Pipedrive, or Salesforce depending on your need for marketing automation, pipeline simplicity, or enterprise customization.</p>
            <p>{toolName} helps reps keep pipeline, comms, and automation in one place with a gentle learning curve.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here: <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>Visit {toolName}</a>.
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-sky-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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
        className="flex w/full items-center justify-between px-4 py-3 text-left text-slate-900"
      >
        <span className="text-sm font-semibold md:text-base">{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">
          {answer}
        </div>
      )}
    </div>
  );
}

export default FreshsalesToolPage;
