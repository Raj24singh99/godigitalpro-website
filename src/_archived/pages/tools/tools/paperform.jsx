import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Type, Layout, CreditCard, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Paperform";
const slug = "paperform";
const category = "Forms & Payment Pages";
const shortPitch =
  "Paperform lets marketers build landing page-style forms with rich design, logic, payments, and bookings—combining forms and mini-sites without code.";
const pricingSummary = "Plans start around $24/month for essentials; Pro and Agency plans add more responses, collaboration, and integrations.";
const officialUrl = "https://www.paperform.co";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/paperform.co",
  gradient: "from-amber-500 via-rose-500 to-purple-500",
  glow: "shadow-[0_20px_80px_rgba(249,115,22,0.25)]",
};

const alternatives = [
  { name: "Typeform", slug: "typeform" },
  { name: "Jotform", slug: "jotform" },
  { name: "Tally", slug: "tally" },
  { name: "SurveyMonkey", slug: "surveymonkey" },
  { name: "Typeform vs Jotform vs Paperform", slug: "compare/typeform-vs-jotform-vs-paperform", isComparison: true },
];

const faqs = [
  { q: "What makes Paperform different?", a: "Paperform builds forms as full pages with sections, media, and products—closer to a landing page than a single-field flow." },
  { q: "Does Paperform take payments?", a: "Yes. Paperform supports products, subscriptions, coupons, and payment providers like Stripe, PayPal, and Square." },
  { q: "Is Paperform good for bookings?", a: "Yes. It includes scheduling blocks and calendar integrations for bookings alongside form questions." },
  { q: "Can I add logic and calculations?", a: "Yes. Conditional sections, calculations, and scoring are supported, making Paperform useful for quotes and estimates." },
  { q: "Does Paperform integrate with CRMs?", a: "Yes. It integrates via native connectors and webhooks/Zapier to CRMs, email tools, and spreadsheets." },
  { q: "Is Paperform mobile-friendly?", a: "Yes. Forms are responsive and can be shared as standalone pages or embedded anywhere." },
  { q: "What about analytics?", a: "Paperform provides submission analytics and works with Google Analytics/Tag Manager via embeds or custom code." },
  { q: "Can teams collaborate?", a: "Higher tiers include collaboration, approval controls, and multiple user roles." },
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
        "Paperform blends forms and landing pages with payments and logic. It’s great for lead capture, bookings, and product sales without custom development.",
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
      icon: <Layout className="h-5 w-5 text-amber-500" />,
      title: "Landing page-style editor",
      body: "Add sections, media, products, and embeds to turn forms into mini-sites without code.",
    },
    {
      icon: <Type className="h-5 w-5 text-rose-500" />,
      title: "Conditional logic & calculations",
      body: "Branch questions, show/hide sections, and calculate totals for quotes or scored outcomes.",
    },
    {
      icon: <CreditCard className="h-5 w-5 text-indigo-500" />,
      title: "Payments and products",
      body: "Sell products, subscriptions, and services directly in forms with coupons, taxes, and receipts.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-purple-500" />,
      title: "Bookings and scheduling",
      body: "Embed scheduling blocks, collect availability, and sync with calendars to run bookings alongside forms.",
    },
    {
      icon: <Plug className="h-5 w-5 text-emerald-600" />,
      title: "Integrations and automation",
      body: "Connect to CRMs, email tools, and spreadsheets via native integrations, webhooks, or Zapier/Make.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Branding and embeds",
      body: "Custom domains, themes, and embed options let you publish forms anywhere while keeping brand consistency.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Full Paperform review for 2025 covering pricing, payments, bookings, pros & cons, and the best alternatives like Typeform and Jotform."
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
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-rose-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-amber-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-purple-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-amber-600" />
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
                <a className="btn btn-primary bg-amber-600 text-white ring-2 ring-amber-500 hover:bg-amber-700" href={officialUrl}>
                  Visit official website
                </a>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -left-8 top-10 h-20 w-20 rounded-full bg-white blur-3xl" />
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-rose-200 blur-3xl" />
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
                  Paperform turns forms into mini landing pages with media, logic, payments, and bookings—perfect for marketers who want flexibility without code.
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
              Paperform is a form builder that behaves like a landing page editor. You can add sections, images, videos, products, and logic to create interactive pages for lead capture, bookings, and commerce.
            </p>
            <p className="mt-3 text-slate-700">
              Marketers use it to launch branded forms without dev help, connect payment providers, and automate handoffs into CRMs and email tools.
            </p>
            <p className="mt-3 text-slate-700">
              The platform balances design freedom with a simple editor, making it a strong alternative to Typeform/Jotform when you want more layout control.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Paperform fits teams that need form flexibility plus payments/logic.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Marketers launching lead capture and promo pages without dev time.",
                "Agencies creating branded intake, proposals, and quote calculators.",
                "Consultants and coaches selling bookings and sessions directly in forms.",
                "Product teams running surveys with conditional flows and calculations.",
                "Creators selling digital products or subscriptions via embedded forms.",
                "Ops teams collecting data and routing it into CRMs/spreadsheets automatically.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-amber-500" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">Paperform focuses on design flexibility and commerce-ready forms.</p>
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
                  Essentials covers core forms and payments. Pro adds higher response limits, advanced logic, and more integrations. Agency adds collaboration, approvals, and client management features.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on Essentials to test flows. Upgrade to Pro for higher volume and advanced logic; Agency if you manage multiple brands/clients.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Essentials</td>
                    <td className="px-4 py-3">Testing and simple payment forms</td>
                    <td className="px-4 py-3">Core logic, payments, basic embeds</td>
                    <td className="px-4 py-3">~$24/month</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Growing teams needing more volume</td>
                    <td className="px-4 py-3">Higher responses, advanced logic, more integrations</td>
                    <td className="px-4 py-3">~$49/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Agency</td>
                    <td className="px-4 py-3">Agencies managing multiple clients/brands</td>
                    <td className="px-4 py-3">Team collaboration, approvals, multiple domains</td>
                    <td className="px-4 py-3">Custom/upper-tier</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Upgrade when response limits or integrations cap you. Agency makes sense if you manage multiple brands or need team approval flows and multi-domain setups.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-amber-50 p-5 shadow-sm ring-1 ring-amber-100">
                <div className="flex items-center gap-2 text-amber-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Landing page-style forms with strong branding control.</li>
                  <li>Payments, subscriptions, and bookings built into forms.</li>
                  <li>Powerful conditional logic and calculations for quotes.</li>
                  <li>Embeds and custom domains keep experiences on-brand.</li>
                  <li>Integrations via native connectors, webhooks, Zapier/Make.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>More complex than ultra-simple form tools like Tally.</li>
                  <li>Response limits mean upgrades as volume grows.</li>
                  <li>Advanced animations or multi-step conversational flows are better in Typeform.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Explore these form and payment page tools. All links are live review or comparison pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Open comparison page." : "Read the full review for pricing and features."}</p>
                  </div>
                  <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how Paperform compares to leading form builders.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Typeform vs Jotform</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/compare/typeform-vs-jotform-vs-paperform">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Typeform excels at conversational flows, Jotform at admin-heavy widgets and approvals, and Paperform at page-like forms with payments and bookings. The comparison shows which fits your use case.
              </p>
              <p className="mt-2 text-slate-900">Choose Paperform for design flexibility + payments; Typeform for conversational UX; Jotform for complex operations and approvals.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you need forms that look like landing pages and can take payments or bookings, Paperform is worth it. It reduces reliance on developers and keeps brand control high.
            </p>
            <p className="mt-3 text-slate-700">
              If you only need simple data capture, lighter tools like Tally may be cheaper. For pure conversational flows, Typeform may suit better. Paperform shines when you need form + page + payments together.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Paperform is a top choice for marketers and agencies who want flexible, commerce-ready forms without custom builds.
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
              Choose Paperform if you need branded, landing page-style forms with payments, bookings, and logic in one build. It’s built for marketers and agencies who want control without code.
            </p>
            <p>Consider Typeform for conversational surveys or Tally for quick simple forms. Paperform is the sweet spot for flexible, commerce-ready pages.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for your workflows, try it here: <a className="text-amber-700 hover:text-amber-600" href={officialUrl}>Visit {toolName}</a>.
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-amber-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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
