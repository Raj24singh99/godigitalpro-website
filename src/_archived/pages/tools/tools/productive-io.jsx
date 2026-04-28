import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, BarChart2, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Productive.io";
const slug = "productive-io";
const category = "Agency Management Platform";
const shortPitch =
  "Productive.io is an all-in-one platform for agencies covering projects, time tracking, budgeting, resource planning, sales/CRM, and invoicing.";
const pricingSummary =
  "Per-seat pricing by tier. Higher tiers add advanced financials, forecasting, permissions, and integrations; enterprise options for larger agencies.";
const officialUrl = "https://www.productive.io";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/productive.io",
  gradient: "from-emerald-500 via-teal-500 to-blue-500",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.24)]",
};

const alternatives = [
  { name: "Harvest", slug: "harvest" },
  { name: "Accelo", slug: "accelo" },
  { name: "Kantata/Mavenlink", slug: "kantata-mavenlink" },
  { name: "Asana", slug: "asana" },
  { name: "Productive vs Harvest vs Accelo", slug: "compare/productive-vs-harvest-vs-accelo", isComparison: true },
];

const faqs = [
  { q: "What is Productive.io?", a: "Productive.io is an agency management platform combining projects, time tracking, budgeting, sales/CRM, resource planning, and invoicing." },
  { q: "Who is it for?", a: "Agencies and service firms that want delivery, financials, and sales in one system." },
  { q: "How is pricing structured?", a: "Per-user, per-month tiers. Higher plans add advanced financials, permissions, and integrations." },
  { q: "Does it include time tracking and invoicing?", a: "Yes. Time tracking, budgets, and invoicing are core features." },
  { q: "Does it support resource planning?", a: "Yes. Scheduling and utilization features help plan capacity." },
  { q: "Is there CRM functionality?", a: "Yes. Sales pipelines and deal tracking are included." },
  { q: "Does it integrate with other tools?", a: "Integrations with accounting, calendars, and more; check current list." },
  { q: "Is it suitable for large enterprises?", a: "Best for agencies; larger enterprises should validate scalability and role controls." },
];

function ProductiveToolPage() {
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
        "Productive.io unifies projects, time, budgeting, sales, and invoicing for agencies. It reduces tool sprawl; ensure it meets your reporting and integration needs.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };

  const featureBlocks = [
    { icon: <Folder className="h-5 w-5 text-emerald-600" />, title: "Projects & tasks", body: "Manage projects with tasks, time tracking, and budget visibility." },
    { icon: <BarChart2 className="h-5 w-5 text-blue-600" />, title: "Financials & budgets", body: "Track budgets, profit margins, and invoicing in one place." },
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "Resource planning", body: "Schedule teams, monitor utilization, and forecast capacity." },
    { icon: <Plug className="h-5 w-5 text-emerald-500" />, title: "Integrations", body: "Connect accounting, calendars, and communication tools." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "Sales/CRM", body: "Pipeline management, deals, and handoff into delivery." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Reporting & permissions", body: "Reporting for leadership and permissions for team access." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Productive.io review: pricing, features, pros & cons, and alternatives for agencies needing projects, time, budgets, and invoicing in one platform."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-emerald-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-blue-200/25 blur-3xl" />
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
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}>
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
                  {toolName} unifies project delivery and financials for agencies—use it to reduce tool sprawl and improve margin visibility.
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
              {toolName} is an agency management platform combining project management, time tracking, budgets, CRM, resource planning, and invoicing. It aims to give agencies a single source for delivery and financial performance.
            </p>
            <p className="mt-3 text-slate-700">Use it to track margins, utilization, and project status without piecing together multiple tools.</p>
            <p className="mt-3 text-slate-700">Evaluate reporting depth and integrations to ensure it fits your agency’s workflows.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for agencies and service firms wanting unified delivery and financials.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Agencies tracking time, budgets, and invoicing in one place.",
                "Teams needing resource planning and utilization visibility.",
                "Leaders monitoring project margins and revenue forecasts.",
                "Sales + delivery teams wanting CRM handoff into projects.",
                "Firms migrating off spreadsheets and multiple disconnected tools.",
                "Shops that need permissions and reporting by role.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on agency delivery, financials, and resource planning.</p>
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
                  Per-user tiers with increasing financial controls, forecasting, and permissions. Enterprise options for larger agencies and custom needs.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Match tier to required financial controls and integrations. Pilot with a team before full rollout.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Essential</td>
                    <td className="px-4 py-3">Smaller teams</td>
                    <td className="px-4 py-3">Projects, time tracking, invoicing basics</td>
                    <td className="px-4 py-3">Per-seat pricing</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Professional</td>
                    <td className="px-4 py-3">Growing agencies</td>
                    <td className="px-4 py-3">Advanced financials, resource planning, reporting</td>
                    <td className="px-4 py-3">Most popular</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Larger orgs</td>
                    <td className="px-4 py-3">Custom permissions, integrations, SLAs</td>
                    <td className="px-4 py-3">Custom pricing</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Evaluate onboarding effort and change management. Compare with Harvest/Accelo if time tracking or service automation depth is critical.
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
                  <li>All-in-one for projects, time, budgets, and invoicing.</li>
                  <li>Resource planning and utilization tracking.</li>
                  <li>Sales/CRM flows into delivery.</li>
                  <li>Reporting for margins and forecasts.</li>
                  <li>Reduces tool sprawl for agencies.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Per-seat costs add up for larger teams.</li>
                  <li>Learning curve to adopt full suite.</li>
                  <li>May need deeper integrations/reporting for unique workflows.</li>
                  <li>Enterprise-level automation may trail specialized PSA tools.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other agency and time-tracking platforms.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Open comparison page." : "View the full review and pricing details."}</p>
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
            <p className="text-slate-700">See how {toolName} compares to other agency tools.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Harvest</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/harvest">
                  View Harvest
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Harvest is strong for time tracking/invoicing; {toolName} covers broader agency operations (CRM, resource planning). Choose based on breadth vs simplicity.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Accelo</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/accelo">
                  View Accelo
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Accelo offers service automation/retainers; {toolName} emphasizes project/financial clarity. Pick Accelo for PSA automation, {toolName} for unified project + financial view.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want a single platform for projects, time, budgets, and sales as an agency, and you’re willing to onboard your team into one system.
            </p>
            <p className="mt-3 text-slate-700">For specialized PSA needs or simpler time tracking, compare Accelo/Harvest. Pilot to ensure adoption and data accuracy.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A robust all-in-one for agencies; best when you commit to centralized delivery and financial tracking.
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
              Choose {toolName} if you want agency delivery, financials, and sales in one tool, and you’re ready to standardize workflows across teams.
            </p>
            <p>
              Consider Harvest for lightweight time/invoicing or Accelo for deeper PSA automation; {toolName} excels at unified visibility and margin tracking.
            </p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for your agency, try it here:{" "}
              <a className="text-emerald-700 hover:text-emerald-600" href={officialUrl}>
                Visit {toolName}
              </a>
              .
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
      <button type="button" onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-900">
        <span className="text-sm font-semibold md:text-base">{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">{answer}</div>}
    </div>
  );
}

export default ProductiveToolPage;
