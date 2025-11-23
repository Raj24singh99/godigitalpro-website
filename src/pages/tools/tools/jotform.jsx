import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown, Pencil, BarChart3, Inbox } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Jotform";
const slug = "jotform";
const category = "Form builder";
const shortPitch =
  "Jotform is a flexible form and data collection tool with templates, payment integrations, approvals, and reporting for teams and agencies.";
const pricingSummary =
  "Free tier with limited submissions/storage; paid plans start around $34/month (annual) adding higher submission limits, storage, HIPAA options, and approvals.";
const officialUrl = "https://www.jotform.com";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/jotform.com",
  gradient: "from-amber-500 via-orange-500 to-rose-500",
  glow: "shadow-[0_20px_80px_rgba(249,115,22,0.18)]",
};

const alternatives = [
  { name: "Typeform", slug: "typeform" },
  { name: "Tally", slug: "tally" },
  { name: "Paperform", slug: "paperform" },
  { name: "SurveyMonkey", slug: "surveymonkey" },
  { name: "Google Forms", slug: "typeform" },
];

const faqs = [
  { q: "Is Jotform easy to use?", a: "Yes. Drag-and-drop builder with templates and widgets makes forms quick to build for most use cases." },
  { q: "Does Jotform support payments?", a: "Yes. Integrates with Stripe, PayPal, Square, and more for order, donation, or registration flows." },
  { q: "How does pricing work?", a: "Pricing is based on monthly submissions, storage, form count, and some features (e.g., HIPAA). Free tier is limited; paid plans expand limits." },
  { q: "Can I automate approvals?", a: "Approvals are built in so you can route submissions for review, signatures, or multi-step workflows." },
  { q: "Does Jotform integrate with other tools?", a: "Yes. Connectors for Google Sheets, Slack, CRMs, email tools, and webhooks help pipe data where it needs to go." },
  { q: "Is Jotform HIPAA compliant?", a: "HIPAA compliance is available on specific tiers; review requirements and pricing before handling PHI." },
  { q: "Can I create PDF forms and reports?", a: "Yes. Jotform allows PDF generation and reports so you can export and share submissions easily." },
  { q: "Is branding customizable?", a: "You can white-label forms on higher tiers, customize themes, and embed on your site with your own domain." },
];

function JotformPage() {
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
        "Jotform is a versatile form builder with payments, approvals, and integrations, making it solid for registrations, intake, and data collection across teams.",
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
    { icon: <Pencil className="h-5 w-5 text-amber-600" />, title: "Drag-and-drop forms", body: "Hundreds of templates, widgets, and conditional logic to build forms fast." },
    { icon: <Inbox className="h-5 w-5 text-indigo-600" />, title: "Approvals & workflows", body: "Route submissions for review, signatures, or multi-step approvals without coding." },
    { icon: <Plug className="h-5 w-5 text-sky-500" />, title: "Payments & e-commerce", body: "Collect payments via Stripe, PayPal, Square and more for orders, donations, and registrations." },
    { icon: <ClipboardList className="h-5 w-5 text-emerald-600" />, title: "Reports & PDFs", body: "Generate PDFs and dashboards so stakeholders can view/export submissions easily." },
    { icon: <ShieldCheck className="h-5 w-5 text-emerald-500" />, title: "Security & compliance", body: "Encryption, optional HIPAA tiers, and custom branding/SLAs on higher plans." },
    { icon: <BarChart3 className="h-5 w-5 text-rose-500" />, title: "Integrations & webhooks", body: "Send data to sheets, CRMs, email, and automation tools; trigger webhooks for custom flows." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Jotform review covering pricing, features, pros & cons, alternatives, and how it compares to Typeform and Paperform."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-rose-300/20 blur-3xl" />
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
              <div
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}
              >
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -left-8 top-10 h-20 w-20 rounded-full bg-white blur-3xl" />
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-amber-200 blur-3xl" />
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
                  Jotform helps teams build forms, collect payments, and route approvals without code—ideal for intake, registrations, and internal workflows.
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
              Jotform is a {category.toLowerCase()} that pairs drag-and-drop building with payments, approvals, and integrations. It’s used for registrations, intake, surveys, orders, and internal requests.
            </p>
            <p className="mt-3 text-slate-700">
              Teams choose Jotform for its template library, widgets, and ability to automate routing without developer time. Reports, PDFs, and embeds make sharing easy.
            </p>
            <p className="mt-3 text-slate-700">
              If you need conversational UX, Typeform may fit better; if you want form-to-doc style, Paperform is strong. Jotform sits in the middle with approvals and payments built in.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} suits teams needing flexible data capture with light automation.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Event registrations, donations, and simple e-commerce orders.",
                "Client intake for agencies and service providers.",
                "Internal requests/approvals for HR, IT, and operations.",
                "Nonprofits collecting payments and signatures.",
                "Teams that need HIPAA-ready forms (on eligible tiers).",
                "Marketers wanting quick embeds and reporting without dev time.",
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
            <p className="mt-3 text-slate-700">Jotform focuses on versatile forms plus payments, approvals, and sharing.</p>
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
                  Pricing is driven by monthly submissions, storage, and features. Free covers a few forms and limited submissions; paid tiers expand limits, storage, HIPAA (eligible plans), approvals, and branding controls.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Free for testing; move to paid once submission limits or payments/approvals kick in; choose HIPAA tiers if required.</p>
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
                    <td className="px-4 py-3">Testing and light usage</td>
                    <td className="px-4 py-3">Limited submissions, storage, branding</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Bronze/Silver/Gold</td>
                    <td className="px-4 py-3">Growing teams needing payments & approvals</td>
                    <td className="px-4 py-3">Higher submissions, storage, integrations, branding controls</td>
                    <td className="px-4 py-3">~$34+/month (annual) depending on tier</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Compliance-heavy or large orgs</td>
                    <td className="px-4 py-3">HIPAA/SSO, dedicated support, SLAs, white-label</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Monitor submission and storage quotas. For high-volume or compliance needs, engage sales for enterprise/HIPAA. If you only need conversational UX, Typeform might be lighter.
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
                  <li>Large template library and widgets.</li>
                  <li>Payments, approvals, and conditional logic built in.</li>
                  <li>Integrations and webhooks for downstream systems.</li>
                  <li>PDF generation and reports for sharing data.</li>
                  <li>HIPAA and enterprise options for compliance.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Submission/storage limits can be restrictive on lower tiers.</li>
                  <li>Conversational UX is weaker than Typeform/Tally.</li>
                  <li>Advanced branding/white-label requires higher tiers.</li>
                  <li>Pricing increases with volume and compliance features.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              If you prefer conversational or doc-style forms, or different pricing, consider these options. They link to detailed pages.
            </p>
            <p className="mt-2 text-slate-700">Choose based on UX style, pricing, and compliance needs.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Form alternative.</p>
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
            <p className="text-slate-700">Here’s how Jotform compares to common form builders.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Typeform vs Paperform</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/typeform-vs-jotform-vs-paperform">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Typeform is conversational and polished; Paperform blends doc-style forms and ecommerce; Jotform offers broad widgets, approvals, and payments with classic form layouts.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs SurveyMonkey vs Typeform</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/surveymonkey-vs-typeform-vs-jotform">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                SurveyMonkey is strong for research surveys; Typeform for conversational UX; Jotform for flexible forms with payments/approvals and broad integrations.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              Jotform is worth it if you need versatile forms with payments, approvals, and integrations. It’s great for registrations, intake, and internal workflows without building custom apps.
            </p>
            <p className="mt-3 text-slate-700">
              If you want conversational forms or simpler pricing, look at Typeform or Tally. For research-grade surveys, SurveyMonkey may fit. Jotform balances breadth and ease of use.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> {toolName} is a flexible choice for form-driven processes that need payments, approvals, and reporting in one platform.
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
              Choose {toolName} if you need robust forms with payments, approvals, and broad integrations for registrations, intake, and internal requests.
            </p>
            <p>
              Consider Typeform for conversational UX, Paperform for doc-style commerce forms, or Tally for lightweight usage. Jotform remains a versatile option with strong automation and payment support.
            </p>
            <p>{toolName} fits easily into stacks via embeds, connectors, and webhooks, helping teams collect and route data quickly.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>
                Visit {toolName}
              </a>
              .
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
        className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-900"
      >
        <span className="text-sm font-semibold md:text-base">{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">{answer}</div>}
    </div>
  );
}

export default JotformPage;
