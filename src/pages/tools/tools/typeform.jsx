import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Typeform";
const slug = "typeform";
const category = "Form builder";
const shortPitch = "Typeform is a conversational form and survey platform that helps marketers capture more leads with brand-grade UX, logic, and deep integrations.";
const pricingSummary = "Freemium with paid plans from around $29/month for Plus, with higher tiers for brand kits, advanced logic, and higher response limits.";
const officialUrl = "https://www.typeform.com";
const ratingValue = 4.6;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/typeform.com",
  gradient: "from-amber-500 via-orange-500 to-rose-500",
  glow: "shadow-[0_20px_80px_rgba(251,191,36,0.15)]",
};

const alternatives = [
  { name: "Jotform", slug: "jotform" },
  { name: "Paperform", slug: "paperform" },
  { name: "Tally", slug: "tally" },
  { name: "SurveyMonkey", slug: "surveymonkey" },
  { name: "Airtable", slug: "airtable" },
];

const faqs = [
  { q: "Is Typeform free?", a: "Typeform has a free plan with limited responses and basic logic. Paid plans unlock more responses, branding controls, hidden fields, and advanced integrations." },
  { q: "Is Typeform good for marketing teams?", a: "Yes. Marketers use Typeform for lead capture, NPS, welcome flows, and research because its conversational UX boosts completion and pipes data into CRMs and automation tools." },
  { q: "Which Typeform plan should I choose?", a: "Most teams start on Plus for logic and brand kits. Business adds workspaces, advanced analytics, and response caps suited for larger teams and agencies." },
  { q: "Can I collect payments with Typeform?", a: "Yes. You can add Stripe and PayPal blocks to collect payments, deposits, and bookings directly in your forms." },
  { q: "Does Typeform support conditional logic?", a: "Typeform supports logic jumps, hidden fields, recall information, and personalization so every respondent sees relevant paths." },
  { q: "Is Typeform secure and GDPR-ready?", a: "Typeform offers GDPR compliance, encryption in transit/at rest, SSO on higher tiers, private by default forms, and audit logs on enterprise plans." },
  { q: "Does Typeform integrate with CRMs and marketing tools?", a: "Yes. Typeform integrates with HubSpot, Salesforce, Slack, Zapier, Make, Google Sheets, and dozens of marketing tools for automatic lead routing." },
  { q: "Can Typeform be embedded on my site?", a: "Typeform provides in-page embeds, popovers, full-page links, and conversational side-tabs so you can place forms anywhere your customers interact." },
];

function TypeformToolPage() {
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
        "Typeform provides conversational, on-brand forms that lift completion rates for lead capture, onboarding, and research. Logic jumps, hidden fields, and strong integrations keep data flowing into CRMs and automation tools. Pricing starts with a free tier and scales with responses and features.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
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
      icon: <Palette className="h-5 w-5 text-amber-500" />,
      title: "Conversational, on-brand forms",
      body: "Single-question flow with themes, media, and video keeps respondents engaged and makes lead capture feel premium.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-orange-500" />,
      title: "Personalization with logic",
      body: "Logic jumps, recall information, hidden fields, and piping let you tailor every path to the respondent for higher completion.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-emerald-500" />,
      title: "Payments and bookings",
      body: "Collect payments, deposits, and bookings via Stripe or PayPal directly in your form—great for productized services and paid surveys.",
    },
    {
      icon: <Plug className="h-5 w-5 text-sky-500" />,
      title: "Integrations that route leads automatically",
      body: "Native integrations and webhooks sync responses to HubSpot, Salesforce, Slack, Sheets, Zapier, and Make without manual exports.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Security and compliance",
      body: "GDPR-ready, encryption, and SSO on higher tiers ensure data stays safe while meeting client requirements.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Flexible embeds",
      body: "Embed inline, use popovers, or share standalone links so you can place forms in product, landing pages, help docs, or email.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="In-depth Typeform review for marketers and agencies covering pricing, features, pros & cons, alternatives, and whether Typeform fits your 2025 stack."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-amber-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-amber-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-orange-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-amber-500" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-orange-200 blur-3xl" />
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
                  Built for conversational lead capture and surveys, Typeform keeps respondents engaged while piping clean data into your stack automatically.
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
              Typeform is a {category.toLowerCase()} platform built to make forms feel like conversations. It blends beautiful design with logic, payments, and integrations so marketers capture more qualified responses with less friction.
            </p>
            <p className="mt-3 text-slate-700">
              Teams use Typeform for lead capture, NPS, onboarding, and customer research. Its UX looks like a high-end landing page, which keeps respondents engaged longer than traditional form layouts.
            </p>
            <p className="mt-3 text-slate-700">
              With personalization, hidden fields, and embeds, data flows to CRM and automation tools without manual effort—making it a strong fit for modern go-to-market teams.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Typeform suits teams that want branded, high-converting forms without sacrificing data quality.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Marketing teams capturing leads, newsletter signups, and webinar registrations.",
                "Agencies running onboarding, discovery, and client intake while keeping brand polish.",
                "CX/CS teams gathering NPS, CSAT, and post-onboarding feedback with logic-based forks.",
                "Founders validating ideas with surveys that route answers to Slack and Sheets automatically.",
                "Product teams running research, feature requests, and beta waitlists.",
                "Creators selling paid consults, audits, and mini-products with embedded payments.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-amber-400" />
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
              Typeform focuses on experience, personalization, and data routing so marketers can turn more visitors into qualified leads without clunky form friction.
            </p>
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
                  Typeform has a free tier for light usage. Plus adds branding, responses, and payments. Business introduces teams, workspaces, and advanced analytics. Enterprise adds SSO, SLAs, and compliance for larger orgs.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Most marketers start with Plus; agencies and larger teams upgrade to Business for workspaces, collaboration, and response headroom.</p>
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
                    <td className="px-4 py-3">Testing and low-volume forms</td>
                    <td className="px-4 py-3">Limited responses, Typeform branding, basic logic</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Plus</td>
                    <td className="px-4 py-3">Marketing teams and creators</td>
                    <td className="px-4 py-3">Higher response limits, payments, hidden fields, brand kit</td>
                    <td className="px-4 py-3">~$29/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business</td>
                    <td className="px-4 py-3">Agencies and growing teams</td>
                    <td className="px-4 py-3">Workspaces, advanced logic, analytics, collaboration</td>
                    <td className="px-4 py-3">~$59/month</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Organizations with compliance needs</td>
                    <td className="px-4 py-3">SSO, SLAs, audit logs, security reviews</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Start on Plus for branded forms and payments. Upgrade to Business if you need team workspaces, more responses, and analytics. Enterprise is for organizations requiring security reviews and SSO.
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
                  <li>Conversational UX that boosts completion rates for lead capture and surveys.</li>
                  <li>Strong personalization with logic jumps, piping, and hidden fields.</li>
                  <li>Brand kits, themes, and media blocks make forms feel like mini landing pages.</li>
                  <li>Native integrations and webhooks route data into CRMs and marketing automation.</li>
                  <li>Payments and bookings directly inside the form.</li>
                  <li>Flexible embeds that work inside sites, product, and live chat.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Response limits on lower tiers can add cost for high-volume campaigns.</li>
                  <li>Single-question flow is less efficient for long audits or records.</li>
                  <li>Payments and SSO require paid plans.</li>
                  <li>Heavy logic can be slower to build vs spreadsheet-style tools.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Typeform is the go-to choice for brand-first forms. If you need heavier admin workflows, lower cost, or research-grade controls, these alternatives are worth a look.
            </p>
            <p className="mt-2 text-slate-700">All of these tools have dedicated pages so you can compare details before committing.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same space.</p>
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
            <p className="text-slate-700">Here’s how Typeform stacks up against two of its closest competitors.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Jotform vs Paperform</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/typeform-vs-jotform-vs-paperform">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Jotform wins for admin-heavy workflows, widgets, and approvals. Paperform is great when you want form + landing page + payments in one. Typeform delivers the best branded experience and completion rates.
              </p>
              <p className="mt-2 text-slate-700">
                Choose Typeform for brand polish and lead capture, Jotform for heavy operations, and Paperform for productized services with inline payments.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs SurveyMonkey vs Tally</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/typeform-vs-surveymonkey-vs-tally">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                SurveyMonkey leads with enterprise-grade analytics, quotas, and governance. Tally is the value pick with a very generous free tier. Typeform is the best for on-brand experiences and conversions.
              </p>
              <p className="mt-2 text-slate-700">
                Choose Typeform for conversions and UX; SurveyMonkey for research teams and compliance; Tally for fast, affordable launches.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              For marketers, agencies, and CX teams that care about conversion and brand experience, Typeform is worth the spend. It reduces drop-off, sends structured data to your stack, and supports payments for productized services.
            </p>
            <p className="mt-3 text-slate-700">
              If you need heavy admin workflows, HIPAA, or very high response volumes on a budget, Jotform or Tally can be better fits. Research teams that need quotas and benchmarks should weigh SurveyMonkey.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Typeform is a top-tier choice when you want forms that feel like part of your brand and integrate cleanly with your go-to-market stack.
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
              Choose Typeform if your priority is a branded, high-converting experience for lead capture, onboarding, or research. Strong embeds, logic, and integrations keep data flowing without developer help.
            </p>
            <p>
              Consider Jotform if you need approvals and admin-heavy flows. Consider Tally for the best free plan or when cost is critical. SurveyMonkey serves enterprise research and governance needs.
            </p>
            <p>Typeform fits well in a modern marketing stack, linking to CRMs, automation, and analytics so every submission routes to the right follow-up.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>
                Visit {toolName}
              </a>
              .
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-sky-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default TypeformToolPage;
