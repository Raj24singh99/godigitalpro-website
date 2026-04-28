import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Wave Accounting";
const slug = "wave-accounting";
const category = "Accounting";
const shortPitch = "Wave Accounting is a free accounting and invoicing platform for freelancers and small businesses, with paid add-ons for payroll and payments.";
const pricingSummary =
  "Core accounting and invoicing are free. Paid add-ons include payroll, payments, and services; costs vary by usage and region.";
const officialUrl = "https://www.waveapps.com";
const ratingValue = 4.1;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/waveapps.com",
  gradient: "from-blue-500 via-cyan-500 to-emerald-500",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.24)]",
};

const alternatives = [
  { name: "QuickBooks Online", slug: "quickbooks-online" },
  { name: "FreshBooks", slug: "freshbooks" },
  { name: "Xero", slug: "xero" },
  { name: "Zoho Books", slug: "zoho-books" },
  { name: "Sage", slug: "sage" },
];

const faqs = [
  {
    q: "What is Wave Accounting?",
    a: "Wave Accounting is a free accounting and invoicing platform for small businesses. You pay for add-ons like payroll and payments.",
  },
  {
    q: "Who is it for?",
    a: "Freelancers and small businesses that want simple, free accounting and invoicing with optional paid payroll and payments.",
  },
  {
    q: "Is it really free?",
    a: "Core accounting and invoicing are free. Payroll, payments, and services have fees; check availability by region.",
  },
  {
    q: "Does it handle payroll?",
    a: "Yes, as a paid add-on. Availability and pricing depend on your region.",
  },
  {
    q: "Can I accept payments?",
    a: "Yes. Payments are offered with transaction fees; connect your bank for payouts.",
  },
  {
    q: "Does it include inventory or advanced features?",
    a: "Wave is lightweight. For inventory, deeper reporting, or complex needs, consider a fuller platform.",
  },
  {
    q: "Is support available?",
    a: "Free users get limited support; paid services and add-ons offer more. Review support terms before relying on it.",
  },
  {
    q: "Can I export data?",
    a: "Yes. You can export reports and data; do periodic backups for safety.",
  },
];

function WaveAccountingPage() {
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
        "Wave Accounting offers free accounting and invoicing for small businesses. Paid payroll and payments cover more needs, but advanced features are limited versus full accounting suites.",
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
      title: "Free accounting & invoicing",
      body: "Core bookkeeping and invoicing are free, helping small teams start without cost.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Payments",
      body: "Accept payments with transaction fees; connect payouts to your bank.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Receipts & expenses",
      body: "Track receipts and expenses to keep books organized for tax time.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Payroll add-on",
      body: "Paid payroll with tax filings in supported regions—verify availability.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Reports & export",
      body: "Basic reports with export options; back up data periodically.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Integrations",
      body: "Connect banks and some apps; for extensive integrations, consider fuller suites.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Wave Accounting review: pricing, features, pros & cons, and alternatives so you can decide if free accounting fits your business."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-emerald-200/25 blur-3xl" />
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
                  {toolName} keeps core accounting free—plan paid add-ons for payroll/payments, and consider a move to full suites if complexity grows.
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
              {toolName} is a free accounting and invoicing platform for small businesses. Paid services add payroll and payments, making it a starter-friendly option without upfront software cost.
            </p>
            <p className="mt-3 text-slate-700">
              Treat it as a starter solution: good for freelancers and microbusinesses. If you need inventory, advanced reporting, or deep integrations, you may need a fuller accounting platform.
            </p>
            <p className="mt-3 text-slate-700">Regularly back up data and review support options if you rely on it for compliance and tax filings.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for freelancers and small businesses that need basic accounting and invoicing without subscription costs.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Freelancers sending invoices and tracking expenses.",
                "Microbusinesses needing simple books and reports.",
                "Teams that want free core accounting and optional payroll.",
                "Owners comfortable with lightweight feature sets.",
                "Businesses with straightforward revenue/expense patterns.",
                "Users who will upgrade to fuller suites as complexity increases.",
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
            <p className="mt-3 text-slate-700">
              {toolName} focuses on free bookkeeping/invoicing with paid add-ons for payments and payroll; integrations and reports are basic.
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
                  Core accounting/invoicing are free. Paid add-ons cover payroll and payments; transaction and service fees apply. Availability varies by region—verify coverage before committing.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Use free accounting/invoicing; add payments/payroll if supported and needed. Move to a full suite when you require advanced features or integrations.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Component</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key inclusions</th>
                    <th className="px-4 py-3">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Free accounting</td>
                    <td className="px-4 py-3">Basic books</td>
                    <td className="px-4 py-3">Transactions, invoicing, receipts</td>
                    <td className="px-4 py-3">Great for starting out</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Payments</td>
                    <td className="px-4 py-3">Getting paid</td>
                    <td className="px-4 py-3">Payment processing (fees apply)</td>
                    <td className="px-4 py-3">Check rates and payout times</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Payroll</td>
                    <td className="px-4 py-3">Employees/contractors</td>
                    <td className="px-4 py-3">Payroll, tax filings (region-dependent)</td>
                    <td className="px-4 py-3">Verify availability</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Track when you outgrow the free tier—inventory, job costing, or complex taxes may require a more robust platform. Always back up data and reconcile regularly.
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
                  <li>Free core accounting and invoicing.</li>
                  <li>Simple interface for small businesses.</li>
                  <li>Payments and payroll available as add-ons.</li>
                  <li>Receipts and expense tracking included.</li>
                  <li>Exports for backup and tax prep.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Limited advanced features (inventory, job costing, deep reporting).</li>
                  <li>Payroll/payment availability and fees depend on region.</li>
                  <li>Integrations are lighter than full accounting suites.</li>
                  <li>Support options are limited for free users.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other accounting tools to match your feature depth, payroll needs, and integrations.
            </p>
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
            <p className="text-slate-700">See how {toolName} compares to other accounting platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs QuickBooks Online</h3>
                <a className="text-sm font-semibold text-blue-700 hover:text-blue-600" href="/tools/quickbooks-online">
                  View QuickBooks Online
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                QuickBooks has deeper accounting, payroll, and integrations; {toolName} is free and simpler. Choose based on complexity and budget.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs FreshBooks</h3>
                <a className="text-sm font-semibold text-blue-700 hover:text-blue-600" href="/tools/freshbooks">
                  View FreshBooks
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                FreshBooks is strong for invoicing and time tracking with paid plans; {toolName} is free but lighter. Pick FreshBooks for service businesses needing robust billing, {toolName} for free basics.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want free accounting/invoicing and have straightforward needs; add paid services for payroll/payments if supported in your region.
            </p>
            <p className="mt-3 text-slate-700">
              If you grow into inventory, advanced reporting, or complex taxes, plan to move to a full accounting suite. Keep backups and reconcile regularly.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A solid free starting point—upgrade to fuller platforms as your complexity increases.
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
              Choose {toolName} if you need free bookkeeping and invoicing, with optional payments/payroll, and you accept its lightweight scope.
            </p>
            <p>
              Consider QuickBooks or FreshBooks for deeper accounting/billing; use {toolName} as a starter until your needs expand.
            </p>
            <p>{toolName} keeps costs low—back up data, reconcile, and plan a migration path as you grow.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-blue-700 hover:text-blue-500" href={officialUrl}>
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

export default WaveAccountingPage;
