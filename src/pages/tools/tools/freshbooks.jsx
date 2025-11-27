import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, BookOpen, Globe2, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "FreshBooks";
const slug = "freshbooks";
const category = "Accounting & Invoicing";
const shortPitch =
  "FreshBooks makes invoicing, time tracking, expenses, and basic accounting simple for freelancers and small service teams.";
const pricingSummary =
  "Lite plans start around $17/month (lower with promos); Plus/Premium add more billable clients and features. Usage scales by active clients; optional add-ons for team members and payments.";
const officialUrl = "https://www.freshbooks.com";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/freshbooks.com",
  gradient: "from-sky-500 via-blue-500 to-indigo-500",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.22)]",
};

const alternatives = [
  { name: "QuickBooks", slug: "quickbooks" },
  { name: "Xero", slug: "xero" },
  { name: "Wave Accounting", slug: "wave-accounting" },
  { name: "Zoho Books", slug: "zoho-books" },
  { name: "Hiveage", slug: "hiveage" },
];

const faqs = [
  {
    q: "Is FreshBooks good for freelancers?",
    a: "Yes. It’s designed for freelancers and small service businesses needing easy invoicing, time tracking, and expenses.",
  },
  {
    q: "How does client limits work?",
    a: "Plans include a number of billable clients (e.g., Lite: 5). Higher tiers raise limits or remove them.",
  },
  {
    q: "Does FreshBooks track time and projects?",
    a: "Yes. Time tracking, project collaboration, and billable rates are included—handy for agencies and contractors.",
  },
  {
    q: "Are payments supported?",
    a: "Online payments are supported via FreshBooks Payments and partners; payment processing fees apply.",
  },
  {
    q: "Can I manage expenses and receipts?",
    a: "Yes. Expense tracking, receipt uploads, and basic reporting are included.",
  },
  {
    q: "Is there payroll?",
    a: "Payroll is handled via integrations (e.g., Gusto) rather than native payroll.",
  },
  {
    q: "Does FreshBooks handle double-entry accounting?",
    a: "It supports essential accounting features and reporting. Complex accounting may require an accountant or more advanced software.",
  },
  {
    q: "Is there mobile access?",
    a: "Mobile apps and web access let you invoice and track time on the go.",
  },
];

function FreshBooksToolPage() {
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
        "FreshBooks simplifies invoicing, time tracking, expenses, and basic accounting for freelancers and small service teams. It’s approachable and integrates payments and project tracking.",
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
      icon: <BookOpen className="h-5 w-5 text-sky-500" />,
      title: "Invoicing and payments",
      body: "Create branded invoices, accept online payments, and automate reminders.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Time tracking and projects",
      body: "Track billable hours, set rates, and attach time to invoices for clients.",
    },
    {
      icon: <Plug className="h-5 w-5 text-indigo-500" />,
      title: "Expenses and receipts",
      body: "Capture expenses, upload receipts, and categorize spend for reports and taxes.",
    },
    {
      icon: <Globe2 className="h-5 w-5 text-sky-500" />,
      title: "Estimates and proposals",
      body: "Send estimates that convert to invoices, keeping work-to-cash tight.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Basic accounting and reporting",
      body: "Balance sheets, profit/loss, and tax summaries for small businesses.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-400" />,
      title: "Integrations and apps",
      body: "Connect payments, payroll partners, and productivity tools plus mobile apps for on-the-go billing.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="FreshBooks review for freelancers and small teams: pricing, features, pros & cons, and alternatives for invoicing, time tracking, and basic accounting."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-sky-200/30 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-200/30 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-sky-500" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-indigo-100 blur-3xl" />
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
                  FreshBooks brings invoicing, time, and expenses together so freelancers and small teams can get paid faster with less admin.
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
              {toolName} is an {category.toLowerCase()} platform designed for freelancers and small service businesses. It focuses on easy invoicing, time tracking, expenses, and basic accounting reports.
            </p>
            <p className="mt-3 text-slate-700">
              Payment integrations help you collect online payments; project and time tracking keep billable work connected to invoices.
            </p>
            <p className="mt-3 text-slate-700">
              While it covers essentials, complex accounting or inventory may require more advanced systems or accountant support.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} suits service-based freelancers and small teams that want simple billing and time tracking.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Freelancers needing quick invoicing and online payments.",
                "Agencies and contractors tracking billable time and projects.",
                "Small businesses managing expenses and basic accounting.",
                "Teams that invoice a limited number of clients monthly.",
                "Service providers wanting estimates that convert to invoices.",
                "Owners needing mobile access to invoice and track time on the go.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-400" />
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
              {toolName} emphasizes ease of invoicing, payments, time tracking, and expenses for service businesses.
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
                  Lite is around $17/month (promos often lower) with a cap on billable clients. Plus/Premium increase client limits and add features; team members and payments incur extra fees.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Choose Lite if you invoice only a few clients; upgrade to Plus/Premium if you need more clients, advanced reports, or retainers.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Lite</td>
                    <td className="px-4 py-3">Freelancers with few clients</td>
                    <td className="px-4 py-3">Billable client cap (e.g., 5)</td>
                    <td className="px-4 py-3">~$17/month (pre-promo)</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Plus</td>
                    <td className="px-4 py-3">Growing service teams</td>
                    <td className="px-4 py-3">Higher client limit, more reports</td>
                    <td className="px-4 py-3">Higher, monthly/annual</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Premium/Select</td>
                    <td className="px-4 py-3">Larger small businesses</td>
                    <td className="px-4 py-3">Highest limits, advanced features</td>
                    <td className="px-4 py-3">Custom/higher</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Consider number of billable clients, need for retainers, team members, and payment processing fees. Promotions often lower first-year pricing.
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
                  <li>Very easy invoicing and time tracking.</li>
                  <li>Online payments and automated reminders.</li>
                  <li>Good for freelancers and small service teams.</li>
                  <li>Expense tracking and basic accounting reports.</li>
                  <li>Estimates convert to invoices smoothly.</li>
                  <li>Mobile apps for on-the-go billing.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Billable client caps on lower tiers.</li>
                  <li>Not ideal for complex accounting or inventory.</li>
                  <li>Team members and payment processing add cost.</li>
                  <li>Payroll requires integrations.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              {toolName} competes with SMB accounting tools. Choose based on client volume, accounting complexity, and whether you need inventory or payroll.
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
            <p className="text-slate-700">Compare {toolName} to other SMB accounting and invoicing platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs QuickBooks</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/freshbooks-vs-quickbooks">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                QuickBooks has deeper accounting and inventory options. {toolName} is simpler and faster for service-based billing and time tracking.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} for simplicity and client invoicing; choose QuickBooks if you need advanced accounting and inventory.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify_between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Xero</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/freshbooks-vs-xero">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Xero offers robust accounting, inventory, and payroll integrations. {toolName} focuses on ease for freelancers and small service teams.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} for straightforward invoicing; choose Xero if you need fuller accounting workflows.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you invoice clients, track time, and want basic accounting without complexity, {toolName} is worth it. It cuts admin and helps you get paid faster.
            </p>
            <p className="mt-3 text-slate-700">
              If you need more advanced accounting, inventory, or extensive payroll, consider QuickBooks, Xero, or Zoho Books before deciding.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> {toolName} is a solid choice for freelancers and small service businesses that prioritize ease of invoicing and time tracking.</p>
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
              Choose {toolName} if you want simple invoicing, time tracking, and expenses in one place for a manageable number of clients.
            </p>
            <p>
              Consider QuickBooks or Xero for deeper accounting, inventory, or if your client list grows beyond FreshBooks’ lower tiers.</p>
            <p>{toolName} keeps billing straightforward so service teams spend more time on client work and less on admin.</p>
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
        className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-900"
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

export default FreshBooksToolPage;
