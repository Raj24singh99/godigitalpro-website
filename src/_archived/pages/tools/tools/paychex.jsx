import React, { useState } from "react";
import { ShieldCheck, CreditCard, Plug, Cloud, BarChart2, Crown, Sparkles, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Paychex";
const slug = "paychex";
const category = "Payroll & HR";
const shortPitch =
  "Paychex is a payroll, HR, and benefits platform for small to mid-sized businesses, covering pay runs, taxes, compliance, and workforce management.";
const pricingSummary =
  "Modular pricing based on headcount and features. Core payroll with tax filing; higher tiers add HR services, benefits admin, onboarding, and compliance support.";
const officialUrl = "https://www.paychex.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/paychex.com",
  gradient: "from-blue-600 via-sky-500 to-indigo-500",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.28)]",
};

const alternatives = [
  { name: "Gusto", slug: "gusto" },
  { name: "Rippling", slug: "rippling" },
  { name: "Justworks", slug: "justworks" },
  { name: "ADP", slug: "adp" },
  { name: "Paychex vs Gusto vs Rippling", slug: "compare/payroll" },
];

const faqs = [
  { q: "What is Paychex?", a: "Paychex is a payroll and HR platform that handles pay runs, tax withholding/filing, benefits administration, and workforce management for SMBs." },
  { q: "Who is it for?", a: "Small and mid-sized businesses that want outsourced payroll tax filing plus optional HR services and benefits administration." },
  { q: "How is pricing structured?", a: "Per-employee/per-month plus base fees, varying by features. Higher tiers bundle HR, onboarding, and compliance support." },
  { q: "Does Paychex file payroll taxes?", a: "Yes. Paychex calculates, withholds, and files federal, state, and local payroll taxes." },
  { q: "Does it handle benefits?", a: "Benefits administration is available on higher tiers and add-ons; plan availability varies by region." },
  { q: "Does Paychex integrate with accounting tools?", a: "It integrates with popular accounting and time systems; check current connectors or use CSV/API where needed." },
  { q: "Is support available?", a: "Yes. Support tiers vary; some plans include dedicated specialists for payroll and HR compliance questions." },
  { q: "Can it support multi-state teams?", a: "Yes. Paychex supports multi-state payroll and tax filing for eligible jurisdictions." },
];

function PaychexToolPage() {
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
        "Paychex provides payroll, tax filing, benefits admin, and HR support for SMBs. It offloads compliance and pay runs so teams can focus on operations.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };

  const featureBlocks = [
    { icon: <CreditCard className="h-5 w-5 text-blue-500" />, title: "Payroll & tax filing", body: "Automated payroll with federal, state, and local tax calculation and filing." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Compliance support", body: "Guidance on payroll compliance, garnishments, and reporting across jurisdictions." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "Benefits administration", body: "Benefits setup and administration (plan availability varies by region and plan level)." },
    { icon: <Plug className="h-5 w-5 text-indigo-500" />, title: "Integrations", body: "Connects with accounting, time-tracking, and HRIS tools; APIs/exports available." },
    { icon: <BarChart2 className="h-5 w-5 text-blue-600" />, title: "Reporting & analytics", body: "Payroll, tax, and workforce reports for finance and HR teams." },
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "Onboarding & self-service", body: "Employee self-service for pay stubs and documents; onboarding flows on higher tiers." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Payroll, Pros & Cons, Alternatives`}
        description="Paychex review: pricing, payroll features, pros & cons, and alternatives like Gusto, Rippling, and ADP for SMB payroll and HR."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-blue-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-blue-600" />
                {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                {toolName} Review (2025): Payroll, Pricing, Pros & Cons
              </h1>
              <p className="mt-4 text-lg text-slate-600">{shortPitch}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-700">
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Our rating: {ratingValue}/5</span>
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Reviewed by GoDigitalPro • Updated May 2025</span>
              </div>
              <p className="mt-4 text-slate-700">{pricingSummary}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="btn btn-primary bg-blue-600 text-white ring-2 ring-blue-500 hover:bg-blue-700" href={officialUrl}>
                  Visit official website
                </a>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}>
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
                  {toolName} offloads payroll and tax filing for SMBs, with add-on HR and benefits services to keep compliance manageable.
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
              {toolName} is a payroll and HR platform for small and mid-sized businesses. It calculates and files payroll taxes, runs payroll, and offers benefits administration and HR services on higher tiers.
            </p>
            <p className="mt-3 text-slate-700">
              Teams use Paychex to reduce manual payroll work, keep compliant across states, and give employees self-service for pay stubs and documents.
            </p>
            <p className="mt-3 text-slate-700">Add integrations to sync payroll data with accounting and time-tracking tools as needed.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for SMBs wanting payroll tax filing plus optional HR and benefits services.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Small businesses needing compliant payroll and tax filing without in-house expertise.",
                "Multi-state teams managing varied tax jurisdictions and garnishments.",
                "Companies adding benefits administration alongside payroll.",
                "Finance/HR teams that want reporting and support for audits.",
                "Businesses migrating from manual payroll to automated runs and self-service.",
                "Leaders wanting a single vendor for payroll plus optional HR advisory.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on compliant payroll with options to extend into HR and benefits management.</p>
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
                  Pricing is modular with per-employee fees plus a base; higher tiers add HR services, onboarding, and benefits administration. Exact pricing varies by state, headcount, and selected modules.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Request a quote with your states and headcount. Compare with Gusto/Rippling for total cost and integration fit.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Payroll Core</td>
                    <td className="px-4 py-3">SMBs needing payroll + tax filing</td>
                    <td className="px-4 py-3">Payroll runs, tax filing, direct deposit, basic reporting</td>
                    <td className="px-4 py-3">Per-employee + base</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Payroll + HR</td>
                    <td className="px-4 py-3">Teams needing onboarding and HR support</td>
                    <td className="px-4 py-3">Onboarding, self-service, HR guidance, integrations</td>
                    <td className="px-4 py-3">Higher per-employee</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Payroll + HR + Benefits</td>
                    <td className="px-4 py-3">Teams bundling benefits administration</td>
                    <td className="px-4 py-3">Benefits admin (availability varies), HR services, payroll</td>
                    <td className="px-4 py-3">Custom quote</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Consider total cost versus DIY payroll plus tax services. Factor support responsiveness and integrations when comparing with alternatives.
            </p>
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
                  <li>Handles payroll and tax filing across multiple states.</li>
                  <li>Benefits administration and HR services available.</li>
                  <li>Self-service access for employees (pay stubs, documents).</li>
                  <li>Reporting and support for payroll compliance questions.</li>
                  <li>Integrations with accounting/time systems.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Pricing requires quotes; can be higher than simple SMB payroll tools.</li>
                  <li>Interface and speed can vary by module vs newer SaaS peers.</li>
                  <li>Benefits availability depends on region and plan.</li>
                  <li>May be more than you need if payroll-only with few employees.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other payroll and HR platforms.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.slug.startsWith("compare") ? "Open comparison page." : "View the full review and pricing details."}</p>
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
            <p className="text-slate-700">See how {toolName} stacks against other payroll providers.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Gusto</h3>
                <a className="text-sm font-semibold text-blue-700 hover:text-blue-600" href="/tools/gusto">
                  View Gusto
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Gusto offers modern UI and strong small-business experience; {toolName} brings optional HR services and broad compliance support. Choose based on service depth vs UI simplicity.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Rippling</h3>
                <a className="text-sm font-semibold text-blue-700 hover:text-blue-600" href="/tools/rippling">
                  View Rippling
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Rippling combines HR and IT device management; {toolName} focuses on payroll/HR with service-driven support. Pick Rippling for unified IT+HR, Paychex for service-backed payroll compliance.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need payroll with tax filing across states and value access to HR services and benefits administration from one vendor.
            </p>
            <p className="mt-3 text-slate-700">
              For very small teams or those wanting the newest UI, compare Gusto/Rippling. Ensure quotes reflect your states, headcount, and benefits needs.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A solid choice for SMB payroll and compliance with optional HR services; best when you want support plus tax filing handled.
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
              Choose {toolName} if you want payroll and tax filing with the option to add HR and benefits support as you scale. It reduces compliance risk and gives employees self-service.
            </p>
            <p>
              Consider Gusto for a modern SMB-first UI or Rippling for unified HR and IT; {toolName} excels when service-backed compliance is your priority.
            </p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for your team, try it here:{" "}
              <a className="text-blue-700 hover:text-blue-600" href={officialUrl}>
                Visit {toolName}
              </a>
              .
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-blue-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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

export default PaychexToolPage;
