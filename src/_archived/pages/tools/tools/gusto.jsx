import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Gusto";
const slug = "gusto";
const category = "Payroll & HR";
const shortPitch =
  "Gusto is a payroll and HR platform for small businesses, covering payroll, benefits administration, onboarding, and compliance.";
const pricingSummary =
  "Per-employee monthly pricing with base fees; higher tiers add HR tools, onboarding workflows, and compliance support. Add-ons for benefits and state filings.";
const officialUrl = "https://gusto.com";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/gusto.com",
  gradient: "from-rose-500 via-orange-500 to-amber-500",
  glow: "shadow-[0_20px_80px_rgba(244,63,94,0.24)]",
};

const alternatives = [
  { name: "Rippling", slug: "rippling" },
  { name: "Justworks", slug: "justworks" },
  { name: "BambooHR", slug: "bamboohr" },
  { name: "Paychex", slug: "paychex" },
  { name: "Deel", slug: "deel" },
];

const faqs = [
  {
    q: "What is Gusto?",
    a: "Gusto is a payroll and HR platform that handles payroll runs, taxes, benefits administration, onboarding, and compliance for small and midsize businesses.",
  },
  {
    q: "Who is it for?",
    a: "Small and midsize businesses that want streamlined payroll, benefits, and basic HR workflows without enterprise overhead.",
  },
  {
    q: "Does it file payroll taxes?",
    a: "Yes. Gusto handles payroll tax filings and payments in supported states and jurisdictions.",
  },
  {
    q: "How is pricing structured?",
    a: "Monthly base fee plus per-employee pricing. Higher tiers add HR tools, onboarding, performance basics, and compliance features.",
  },
  {
    q: "Does it include benefits?",
    a: "It brokers benefits (health, dental, vision) and syncs deductions; availability varies by state and carrier.",
  },
  {
    q: "Can contractors be paid?",
    a: "Yes. Contractor-only plans exist, and 1099 filings can be handled through Gusto.",
  },
  {
    q: "Does it integrate with accounting?",
    a: "Yes. Integrations include QuickBooks, Xero, and time tools to sync payroll and expenses.",
  },
  {
    q: "Is it suitable for global teams?",
    a: "Gusto is U.S.-centric. For global payroll and EOR, consider providers like Deel or Remote.",
  },
];

function GustoToolPage() {
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
        "Gusto simplifies payroll, benefits, and HR workflows for small businesses. It is approachable and automates filings, but is focused on the U.S. market.",
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
      title: "Payroll automation",
      body: "Run payroll with automatic tax calculations, filings, and payments in supported states.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Onboarding",
      body: "Offer letters, e-sign, document collection, and provisioning checklists for new hires.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Benefits administration",
      body: "Brokered benefits with deductions synced to payroll; availability varies by state.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Compliance support",
      body: "Guidance on filings, W-2/1099 forms, and state registrations (where supported).",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Time & attendance",
      body: "Track hours and sync with payroll; approvals and PTO policies on higher tiers.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Integrations",
      body: "Connect accounting (QuickBooks, Xero) and time tools for cleaner books.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Gusto review: pricing, features, pros & cons, and alternatives to pick the right payroll and HR platform."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-rose-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-amber-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-rose-600" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-amber-100 blur-3xl" />
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
                  {toolName} automates payroll, taxes, and benefits so small teams can stay compliant without heavy HR headcount.
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
              {toolName} is a payroll and HR platform focused on small and midsize businesses. It automates payroll runs, tax filings, benefits deductions, and onboarding tasks to reduce admin work for finance and people teams.
            </p>
            <p className="mt-3 text-slate-700">
              The platform is U.S.-centric and supports multi-state payroll, contractor payments, and benefits where available. Integrations keep accounting and time-tracking in sync.
            </p>
            <p className="mt-3 text-slate-700">Use it to centralize payroll, benefits, and HR basics without piecing together multiple tools.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for U.S.-based small and midsize businesses that want streamlined payroll and HR.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Small businesses hiring W-2 employees and 1099 contractors.",
                "Finance and ops teams needing automated payroll filings.",
                "Startups without a large HR team but needing solid compliance.",
                "Teams wanting integrated benefits administration.",
                "Businesses using QuickBooks/Xero seeking clean sync with payroll.",
                "Companies with distributed U.S. employees across multiple states.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-rose-500" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">{toolName} focuses on payroll automation, benefits, and compliance for U.S. teams.</p>
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
                  Pricing combines a monthly base fee plus per-employee charges. Higher tiers add HR tools, onboarding workflows, and compliance features. Benefits brokerage, state registrations, and special filings may incur additional fees.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with a core payroll tier; upgrade when you need onboarding automation, performance basics, or more HR reporting.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Core payroll tier</td>
                    <td className="px-4 py-3">Payroll-first needs</td>
                    <td className="px-4 py-3">Payroll, filings, basic support</td>
                    <td className="px-4 py-3">Great for straightforward payroll</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Mid/Complete tier</td>
                    <td className="px-4 py-3">Growing teams</td>
                    <td className="px-4 py-3">Onboarding, time tools, more HR workflows</td>
                    <td className="px-4 py-3">Often best balance for SMBs</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Premium/Advanced</td>
                    <td className="px-4 py-3">Teams needing extra compliance help</td>
                    <td className="px-4 py-3">HR advising, more controls, dedicated support</td>
                    <td className="px-4 py-3">Use if you need hands-on guidance</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Budget for benefits costs, state registrations, and accountant time for setup. Confirm coverage if you have employees across many states.
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
                  <li>Automates payroll, filings, and year-end forms.</li>
                  <li>Clean UI and onboarding for admins and employees.</li>
                  <li>Integrated benefits and deductions syncing.</li>
                  <li>Time tracking and PTO policies available on higher tiers.</li>
                  <li>Integrates with popular accounting and time tools.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>U.S.-centric; limited global payroll/EOR support.</li>
                  <li>State-specific compliance still needs careful setup.</li>
                  <li>Add-ons (benefits, registrations) can increase cost.</li>
                  <li>Advanced HR features lighter than full HCM suites.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other payroll and HR tools.</p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-rose-700 hover:text-rose-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} stacks against other payroll/HR platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Rippling</h3>
                <a className="text-sm font-semibold text-rose-700 hover:text-rose-600" href="/tools/rippling">
                  View Rippling
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Rippling offers deeper IT and device management plus global options; {toolName} focuses on approachable U.S. payroll and benefits. Choose Rippling for broader IT/HR, {toolName} for simpler payroll-first needs.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Justworks</h3>
                <a className="text-sm font-semibold text-rose-700 hover:text-rose-600" href="/tools/justworks">
                  View Justworks
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Justworks is a PEO with co-employment; {toolName} is payroll/HR software. Pick Justworks if you want PEO benefits and compliance offloading; choose {toolName} if you prefer direct employer of record with in-house control.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need reliable U.S. payroll with automated filings and integrated benefits, and you prefer a simple interface over enterprise HCM complexity.
            </p>
            <p className="mt-3 text-slate-700">If you need global payroll or deep HR modules (LMS, advanced performance), pair {toolName} with specialized tools or consider a broader suite.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A strong payroll-first choice for U.S. SMBs; shines when you want automation without hiring a large HR ops team.
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
            <p>Choose {toolName} if you need automated U.S. payroll with benefits and approachable HR tools.</p>
            <p>Pick Rippling or Deel for global coverage, or Justworks if you want a PEO model.</p>
            <p>{toolName} works best when paired with clear onboarding processes and clean accounting integrations.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-rose-700 hover:text-rose-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-rose-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default GustoToolPage;
