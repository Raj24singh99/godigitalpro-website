import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "BambooHR";
const slug = "bamboohr";
const category = "HRIS & People Ops";
const shortPitch =
  "BambooHR is an HR platform for employee records, onboarding, PTO, performance, and payroll add-ons, built for SMBs and mid-size teams.";
const pricingSummary =
  "Sales-led per-employee pricing by package. Higher tiers add performance, hiring, payroll add-ons, and more integrations/support.";
const officialUrl = "https://www.bamboohr.com";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/bamboohr.com",
  gradient: "from-emerald-500 via-lime-500 to-slate-900",
  glow: "shadow-[0_20px_80px_rgba(34,197,94,0.26)]",
};

const alternatives = [
  { name: "Gusto", slug: "gusto" },
  { name: "Rippling", slug: "rippling" },
  { name: "HiBob", slug: "hibob" },
  { name: "Deel", slug: "deel" },
  { name: "Justworks", slug: "justworks" },
];

const faqs = [
  { q: "What is BambooHR?", a: "BambooHR is an HRIS for employee records, onboarding, PTO, performance, and payroll add-ons for SMBs/mid-size teams." },
  { q: "Who is it for?", a: "People ops and HR teams needing an easy HRIS with onboarding and PTO workflows, not heavy enterprise HR suites." },
  { q: "How does pricing work?", a: "Sales-led, per-employee pricing by package. Add-ons (payroll, benefits admin, performance) increase cost." },
  { q: "Does it include payroll?", a: "Payroll is an add-on/region-specific; verify availability and costs." },
  { q: "Does it handle compliance?", a: "It provides tools for docs, e-sign, and time-off policies; you still own legal compliance and policies." },
  { q: "Is human review needed?", a: "Yes. HR, legal, and finance should review policies, pay rules, and onboarding docs." },
];

function BambooHRToolPage() {
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
        "BambooHR is a friendly HRIS for SMBs with onboarding, PTO, and performance, plus payroll add-ons. Great for growing teams needing a central people hub.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };

  const featureBlocks = [
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "Employee records", body: "Centralized profiles, docs, e-sign, and directories." },
    { icon: <Rocket className="h-5 w-5 text-emerald-500" />, title: "Onboarding", body: "Checklists, e-sign, and tasks for new hires." },
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "PTO & time-off", body: "Policies, approvals, accruals, and calendars." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Performance", body: "Reviews, goals, and feedback (package-dependent)." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "Payroll add-on", body: "Payroll available in supported regions; sync with HR data." },
    { icon: <Plug className="h-5 w-5 text-purple-500" />, title: "Integrations", body: "Connect ATS, payroll, and identity tools to keep records synced." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="BambooHR review: pricing, features, pros & cons, and alternatives so you can choose the right HRIS."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-lime-200/25 blur-3xl" />
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
              <div
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}
              >
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
                  {toolName} keeps HR records, onboarding, and PTO in one place—add payroll/performance as you grow.
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
              {toolName} is an HRIS focused on SMBs and mid-size teams, covering employee records, onboarding, PTO, and performance, with payroll/benefits as add-ons.
            </p>
            <p className="mt-3 text-slate-700">Use it to centralize people data and lighten admin. Verify payroll/benefits availability by region.</p>
            <p className="mt-3 text-slate-700">Keep legal, finance, and HR aligned on policies, compensation, and compliance.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for growing teams needing a friendly HRIS without enterprise complexity.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "SMBs centralizing employee records and docs.",
                "Teams wanting smoother onboarding and checklists.",
                "Companies standardizing PTO policies and approvals.",
                "Managers needing lightweight performance and goals.",
                "HR wanting payroll add-ons tied to HR data.",
                "Businesses integrating ATS/identity with HR records.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on HR records, onboarding, PTO, performance, and optional payroll.</p>
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
                  Sales-led, per-employee pricing by package. Add-ons (payroll, benefits admin, performance) increase cost. Model costs with headcount growth and add-on needs.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with core HRIS + PTO; add performance/payroll once workflows are stable.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Package</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key inclusions</th>
                    <th className="px-4 py-3">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Core</td>
                    <td className="px-4 py-3">SMBs</td>
                    <td className="px-4 py-3">Records, onboarding, PTO, e-sign</td>
                    <td className="px-4 py-3">Baseline HRIS</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Plus</td>
                    <td className="px-4 py-3">Growing teams</td>
                    <td className="px-4 py-3">Performance, more integrations</td>
                    <td className="px-4 py-3">Popular upgrade</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Add-ons</td>
                    <td className="px-4 py-3">Payroll/benefits</td>
                    <td className="px-4 py-3">Payroll (region), benefits admin</td>
                    <td className="px-4 py-3">Confirm availability/fees</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Factor in setup time for policies, payroll, and benefits; align with finance and legal.</p>
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
                  <li>Friendly HRIS for SMBs/mid-size teams.</li>
                  <li>Onboarding, PTO, performance in one place.</li>
                  <li>Payroll add-on to sync HR/pay data.</li>
                  <li>Integrations with ATS and identity tools.</li>
                  <li>E-sign and docs streamline HR admin.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Sales-led pricing; add-ons increase cost.</li>
                  <li>Payroll/benefits availability varies by region.</li>
                  <li>May lack deep enterprise HR/comp features.</li>
                  <li>Still need HR/legal oversight for compliance.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other HRIS/payroll options for cost, features, and region coverage.</p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
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
          <p className="text-slate-700">See how {toolName} compares to other HR platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Rippling</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/rippling">
                  View Rippling
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Rippling bundles IT/HR and deeper payroll; {toolName} is simpler and SMB-friendly. Choose based on IT/finance consolidation vs ease.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Gusto</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/gusto">
                  View Gusto
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Gusto is payroll-first with HR features; {toolName} is HR-first with payroll add-on. Pick based on whether payroll or HR workflows drive your choice.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need a friendly HRIS for records, onboarding, PTO, and lightweight performance, with optional payroll.
            </p>
            <p className="mt-3 text-slate-700">Ensure region coverage for payroll/benefits and align with finance/legal on policies and compliance.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Great HRIS fit for SMBs; add payroll/performance when ready and keep HR/legal in the loop.
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
            <p>{toolName} centralizes HR records, onboarding, and PTO for growing teams, with performance and payroll add-ons.</p>
            <p>Use it when you want an approachable HRIS and can layer payroll/compliance oversight as you scale.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for your team, you can try it here:{" "}
              <a className="text-emerald-700 hover:text-emerald-600" href={officialUrl}>
                Visit {toolName}
              </a>.
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

export default BambooHRToolPage;
