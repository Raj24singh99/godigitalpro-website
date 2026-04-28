import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Accelo";
const slug = "accelo";
const category = "PSA & Client Work Management";
const shortPitch =
  "Accelo is a professional services automation platform that unifies sales, projects, retainers, billing, and support for agencies and service teams.";
const pricingSummary =
  "Pricing is tiered by modules (Sales, Projects, Retainers, Service) and seats. Expect per-user monthly pricing with annual commitments and onboarding.";
const officialUrl = "https://www.accelo.com";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/accelo.com",
  gradient: "from-sky-500 via-blue-500 to-indigo-600",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.24)]",
};

const alternatives = [
  { name: "HubSpot", slug: "hubspot" },
  { name: "Pipedrive", slug: "pipedrive" },
  { name: "ClickUp", slug: "clickup" },
  { name: "Monday.com", slug: "monday" },
  { name: "Zoho", slug: "zoho" },
];

const faqs = [
  {
    q: "What does Accelo do?",
    a: "Accelo connects sales, projects, retainers, timesheets, billing, and support tickets in one PSA built for agencies and service teams.",
  },
  {
    q: "Is Accelo good for agencies?",
    a: "Yes. It was built for agencies/consultancies that need integrated quoting, scheduling, delivery, and invoicing with utilization tracking.",
  },
  {
    q: "Does Accelo include CRM?",
    a: "Accelo includes pipeline and contact management with automations that feed directly into projects, retainers, and billing.",
  },
  {
    q: "Can we track time and profitability?",
    a: "Yes. Time tracking rolls into project budgets, retainers, and profitability dashboards so you can watch margins in real time.",
  },
  {
    q: "Does Accelo integrate with accounting?",
    a: "Accelo integrates with tools like Xero and QuickBooks for invoicing and payments, plus Google/Microsoft for email and calendars.",
  },
  {
    q: "How is onboarding?",
    a: "Accelo offers guided onboarding and implementation packages. Plan time to map workflows, permissions, and data migrations.",
  },
  {
    q: "Is Accelo customizable?",
    a: "You can configure workflows, statuses, fields, triggers, and automations. Deep customization may require admin time.",
  },
  {
    q: "Who should not use Accelo?",
    a: "If you only need lightweight task management or a simple CRM, Accelo may feel heavy. It shines when you need PSA depth.",
  },
];

function AcceloToolPage() {
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
        "Accelo is a PSA that ties together sales, projects, retainers, and billing. Agencies choose it to gain visibility into utilization and profitability while keeping delivery workflows in one place.",
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
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Projects & retainers",
      body: "Plan projects, recurring retainers, milestones, and budgets with built-in time tracking and approvals.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "PSA automation",
      body: "Automate intake-to-delivery workflows, task creation, and handoffs between sales, delivery, and finance.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "CRM to delivery",
      body: "Turn closed deals into projects or retainers instantly, keeping scopes, budgets, and timelines aligned.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Utilization & margin",
      body: "Track resource utilization, billable vs. non-billable time, and profitability across clients and services.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Billing & invoices",
      body: "Generate invoices from time/expenses or retainers, sync to accounting, and monitor collections.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-blue-400" />,
      title: "Support & ticketing",
      body: "Manage support tickets alongside projects with SLAs, queues, and time capture for billable work.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Accelo review for agencies: pricing, PSA features, pros & cons, and alternatives so you can choose the right platform for projects, retainers, and billing."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-sky-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-sky-600" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-indigo-200 blur-3xl" />
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
                  {toolName} helps agencies connect sales, delivery, and billing so utilization and profitability stay visible.
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
              {toolName} is a professional services automation platform that manages client work end-to-end: pipeline, scoping, delivery, support, and invoicing. It replaces disconnected tools with a unified workflow.
            </p>
            <p className="mt-3 text-slate-700">
              Agencies use it to see project health, retainer burn, and team utilization in real time, while keeping communications and approvals organized.
            </p>
            <p className="mt-3 text-slate-700">
              The connected CRM and billing modules reduce rework and make reporting easier for leadership and finance.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for agencies and service teams that need PSA depth with connected delivery and billing.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Digital and creative agencies managing retainers and projects.",
                "Consultancies that need utilization tracking and margin visibility.",
                "Support-focused teams that bill time against SLAs and retainers.",
                "RevOps and finance teams that want CRM-to-invoice handoffs automated.",
                "Project managers who need resource planning and approvals in one place.",
                "Leaders who want dashboards for profitability across clients and services.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-500" />
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
              {toolName} focuses on keeping sales, delivery, and finance aligned so you can protect margins while delivering on time.
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
                  {toolName} is priced per user and module (Sales, Projects, Retainers, Service). Expect implementation fees and annual contracts; negotiate for traffic or seat bands that fit your team.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with Projects + Retainers; add CRM and Support if you want one connected workflow.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Module</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key inclusions</th>
                    <th className="px-4 py-3">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Sales</td>
                    <td className="px-4 py-3">Pipeline & quoting</td>
                    <td className="px-4 py-3">Opportunities, quotes, email sync</td>
                    <td className="px-4 py-3">Feeds scopes to projects/retainers</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Projects</td>
                    <td className="px-4 py-3">Delivery teams</td>
                    <td className="px-4 py-3">Tasks, milestones, budgets, Gantt</td>
                    <td className="px-4 py-3">Time/expense tracking</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Retainers</td>
                    <td className="px-4 py-3">Ongoing services</td>
                    <td className="px-4 py-3">Recurring budgets, burn tracking</td>
                    <td className="px-4 py-3">Alerts for overages</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Service</td>
                    <td className="px-4 py-3">Support teams</td>
                    <td className="px-4 py-3">Tickets, SLAs, queues, time capture</td>
                    <td className="px-4 py-3">Works with retainers for billing</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Confirm billing cadence, onboarding, and data migration support. Ask for dashboards tailored to utilization, margins, and client health.
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
                  <li>Unified PSA for sales, delivery, and billing.</li>
                  <li>Strong retainer management with burn tracking.</li>
                  <li>Time tracking ties directly to budgets and invoices.</li>
                  <li>Automations reduce handoff friction between teams.</li>
                  <li>Utilization and profitability dashboards.</li>
                  <li>Integrations with email, calendars, and accounting.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Implementation and change management take time.</li>
                  <li>Pricing is custom; smaller shops may find it expensive.</li>
                  <li>Advanced automation setup requires admin skills.</li>
                  <li>Interface can feel busy until processes are standardized.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other PSA and work management platforms to fit your budget, workflows, and CRM needs.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} compares with other PSA and CRM options for service teams.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs HubSpot</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/hubspot">
                  View HubSpot
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                HubSpot is a broad CRM/marketing suite; {toolName} is PSA-first. Choose HubSpot for marketing + CRM breadth; choose {toolName} for delivery, retainers, and billing depth.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs ClickUp</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/clickup">
                  View ClickUp
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ClickUp is flexible work management; {toolName} provides structured PSA workflows with billing. Choose based on whether you need PSA financials or general-purpose tasking.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you run client services and need connected sales-to-billing workflows, utilization tracking, and margin visibility. It reduces tool sprawl and manual handoffs.
            </p>
            <p className="mt-3 text-slate-700">
              Smaller teams with simple processes may find it heavy; larger agencies gain more from automation and PSA structure.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A strong PSA choice for agencies wanting profitability insights and unified delivery operations.
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
              Choose {toolName} if you want PSA workflows that connect CRM, projects, retainers, and billing with utilization and profitability dashboards.
            </p>
            <p>
              Consider lighter tools like ClickUp or Monday if you only need tasking, or broader CRMs like HubSpot if marketing automation is the priority.
            </p>
            <p>{toolName} keeps service teams aligned on revenue, delivery, and client health in one platform.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>
                Visit {toolName}
              </a>.
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

export default AcceloToolPage;
