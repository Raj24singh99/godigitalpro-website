import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, BookOpen, Globe2, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Factorial HR";
const slug = "factorialhr";
const category = "HRIS & People Ops";
const shortPitch =
  "Factorial HR centralizes time off, payroll, docs, performance, and onboarding in one platform built for small and mid-sized teams.";
const pricingSummary =
  "Plans start near $6–$8/employee/month depending on modules and country. Pricing scales with seats and add-ons like payroll or advanced analytics.";
const officialUrl = "https://factorialhr.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/factorialhr.com",
  gradient: "from-orange-500 via-amber-400 to-rose-400",
  glow: "shadow-[0_20px_80px_rgba(249,115,22,0.22)]",
};

const alternatives = [
  { name: "BambooHR", slug: "bamboohr" },
  { name: "Gusto", slug: "gusto" },
  { name: "Rippling", slug: "rippling" },
  { name: "Deel", slug: "deel" },
  { name: "HiBob", slug: "hibob" },
];

const faqs = [
  {
    q: "Is Factorial HR good for small teams?",
    a: "Yes. It targets SMBs with HR basics like time off, onboarding, and document management plus optional payroll/benefits in supported regions.",
  },
  {
    q: "Does Factorial include payroll?",
    a: "Payroll is available in select countries. You can also connect external payroll providers depending on your region.",
  },
  {
    q: "Can I manage time off and attendance?",
    a: "Yes. You can configure PTO policies, approvals, calendars, and time tracking for attendance or shifts.",
  },
  {
    q: "Does Factorial handle performance reviews?",
    a: "Performance and goals modules are available to manage reviews, feedback, and OKRs depending on your plan.",
  },
  {
    q: "Is onboarding supported?",
    a: "You can assign onboarding tasks, collect documents, and track completion for new hires.",
  },
  {
    q: "Are integrations available?",
    a: "Yes. Factorial integrates with payroll partners, job boards, calendars, SSO, and more. Coverage varies by region.",
  },
  {
    q: "Is Factorial compliant with GDPR?",
    a: "Factorial is based in the EU and provides GDPR-friendly data management. HR teams still must configure policies properly.",
  },
  {
    q: "Does it support multi-country teams?",
    a: "It supports multiple locations; payroll/benefits availability depends on country. Check coverage before rollout.",
  },
];

function FactorialHRToolPage() {
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
        "Factorial HR is an SMB-friendly HRIS that covers time off, documents, onboarding, performance, and optional payroll. It’s approachable for growing teams needing centralized HR.",
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
      icon: <BookOpen className="h-5 w-5 text-orange-500" />,
      title: "Time off and attendance",
      body: "Configure PTO policies, approvals, calendars, and time tracking to keep records accurate.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Onboarding and tasks",
      body: "Assign tasks, collect docs, and track completion for new hires in one place.",
    },
    {
      icon: <Globe2 className="h-5 w-5 text-rose-500" />,
      title: "Payroll and benefits",
      body: "Built-in payroll in supported regions and integrations elsewhere to keep pay synced with HR data.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Integrations and SSO",
      body: "Connect calendars, job boards, and identity providers to streamline workflows and access.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Documents and compliance",
      body: "Store contracts and policies with e-signatures, permissions, and audit trails.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-400" />,
      title: "Performance and goals",
      body: "Manage reviews, feedback, and objectives to align teams, available on higher tiers.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Factorial HR review for SMB people teams: pricing, features, pros & cons, and alternatives for HRIS, time off, onboarding, and payroll."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-amber-200/30 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-rose-200/30 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-orange-500" />
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
                  Factorial HR brings time off, docs, onboarding, performance, and payroll into one SMB-friendly platform with regional compliance in mind.
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
              {toolName} is an {category.toLowerCase()} platform focused on small and mid-sized companies. It centralizes HR data, time off, onboarding, performance, and optional payroll.
            </p>
            <p className="mt-3 text-slate-700">
              People teams use it to reduce spreadsheet work, standardize processes, and keep employees self-serving routine HR tasks.
            </p>
            <p className="mt-3 text-slate-700">
              Because coverage varies by country, check which modules—especially payroll/benefits—apply to your locations before rollout.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} fits SMB people teams that need a modern HRIS without enterprise complexity.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "SMBs needing PTO tracking and approvals.",
                "Teams centralizing documents, policies, and signatures.",
                "Companies onboarding new hires with checklists and tasks.",
                "Organizations wanting built-in or integrated payroll by region.",
                "People teams introducing performance reviews and goals.",
                "Ops teams needing multi-location support with basic analytics.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-orange-400" />
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
              {toolName} emphasizes approachable HR workflows, compliance basics, and modular payroll options for growing teams.
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
                  Pricing is per employee/month and varies by region and modules. Expect ~$6–$8/employee/month for core HR, with payroll and analytics as add-ons.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with core HR for PTO, docs, and onboarding; layer payroll or performance once basics are solid.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Core HR</td>
                    <td className="px-4 py-3">SMBs needing PTO, docs, onboarding</td>
                    <td className="px-4 py-3">Seat-based; payroll not included</td>
                    <td className="px-4 py-3">~$6–$8/employee/month</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Performance/Analytics</td>
                    <td className="px-4 py-3">Teams adding reviews and insights</td>
                    <td className="px-4 py-3">Add-on to core HR</td>
                    <td className="px-4 py-3">Add-on pricing</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Payroll</td>
                    <td className="px-4 py-3">Regions where payroll is supported</td>
                    <td className="px-4 py-3">Regional availability, additional fees</td>
                    <td className="px-4 py-3">Custom/region-based</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Model costs with headcount growth and confirm regional payroll/benefit coverage. Annual commitments may reduce per-seat pricing.
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
                  <li>Approachable HRIS for SMBs.</li>
                  <li>Time off, docs, onboarding, and performance in one place.</li>
                  <li>Optional payroll and benefits in supported regions.</li>
                  <li>Good self-serve experience for employees.</li>
                  <li>Integrations with calendars, job boards, and SSO.</li>
                  <li>EU-based with GDPR-friendly posture.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Payroll/benefits availability varies by country.</li>
                  <li>Analytics depth is lighter than enterprise HRIS.</li>
                  <li>Advanced customization may be limited for complex orgs.</li>
                  <li>Seat costs can add up as teams scale quickly.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              {toolName} competes with modern HRIS and payroll platforms. Choose based on country coverage, payroll needs, and depth of analytics.
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
            <p className="text-slate-700">Compare {toolName} to other HRIS platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs BambooHR</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/factorialhr-vs-bamboohr">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                BambooHR is popular in SMBs with solid HR fundamentals. {toolName} adds payroll options in some regions and a modern UI, while BambooHR has stronger US benefits partners.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} if you want EU-friendly HRIS with optional payroll; choose BambooHR for US-centric benefits and broad integrations.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Rippling</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/factorialhr-vs-rippling">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Rippling combines HRIS, IT, and payroll globally with strong automation. {toolName} is simpler and more SMB-focused, with lower lift to implement.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} for ease and price; choose Rippling if you need global payroll, device/IT automation, and deeper workflows.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you’re an SMB needing PTO, onboarding, docs, and optional payroll in supported regions, {toolName} is worth evaluating. It reduces admin and keeps employees self-serving.
            </p>
            <p className="mt-3 text-slate-700">
              If you need deep analytics, complex workflows, or global payroll breadth, compare Rippling, HiBob, or enterprise HRIS before deciding.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> {toolName} is a strong fit for growing teams wanting approachable HRIS with compliance basics and optional payroll.
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
              Choose {toolName} if you want a modern, SMB-friendly HRIS with time off, docs, onboarding, and optional payroll where available.
            </p>
            <p>
              Consider BambooHR or Gusto for US-centric payroll/benefits, or Rippling/HiBob for more complex, global requirements.
            </p>
            <p>{toolName} keeps HR basics in one place so people teams can spend more time supporting employees and less time on admin.</p>
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

export default FactorialHRToolPage;
