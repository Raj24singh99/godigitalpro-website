import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Layers3, ClipboardList, Rocket, Crown, ArrowLeft, Building2, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Zoho";
const slug = "zoho";
const category = "Business Suite";
const shortPitch =
  "Zoho is a unified business suite combining CRM, marketing, helpdesk, finance, and collaboration tools for growing teams who want everything under one roof.";
const pricingSummary =
  "Paid plans with generous trials; Zoho One bundles 45+ apps from around $37/user/month (billed annually) when all employees are licensed.";
const officialUrl = "https://www.zoho.com/";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/zoho.com",
  gradient: "from-emerald-500 via-blue-500 to-purple-500",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.18)]",
};

const alternatives = [
  { name: "HubSpot", slug: "hubspot" },
  { name: "Pipedrive", slug: "pipedrive" },
  { name: "Freshworks", slug: "freshworks" },
];

const faqs = [
  {
    q: "Is Zoho free?",
    a: "Zoho offers free tiers on select apps like CRM with limited users and features. The full Zoho One suite is paid but includes trials to test before rollout.",
  },
  {
    q: "Does Zoho work well for agencies?",
    a: "Yes. Agencies use Zoho for sales pipelines, ticketing, project delivery, finance, and client portals—keeping CRM, helpdesk, and invoicing connected.",
  },
  {
    q: "Which Zoho plan is best for beginners?",
    a: "Start with Zoho CRM Standard/Professional if you just need sales. If you want the whole suite, Zoho One is the most cost-effective for all-employee licensing.",
  },
  {
    q: "Can I use Zoho for client projects?",
    a: "Yes. Zoho Projects, Desk, and CRM let you manage client work, tickets, SLAs, and communication while keeping billing and reporting centralized.",
  },
  {
    q: "Is Zoho secure and compliant?",
    a: "Zoho offers role-based access, audit logs, encryption, IP restrictions, SSO/SAML, and data residency options. It provides compliance resources and DPAs.",
  },
  {
    q: "Does Zoho integrate with other tools?",
    a: "Yes. Native connectors for Google Workspace, Microsoft 365, Slack, payment gateways, marketing platforms, plus APIs and Zoho Flow for automation.",
  },
  {
    q: "Is Zoho good for finance and billing?",
    a: "Zoho Books, Subscriptions, and Invoice cover invoicing, subscriptions, taxes, and reporting—helpful for service businesses and retainers.",
  },
  {
    q: "How scalable is Zoho?",
    a: "Zoho scales across sales, marketing, support, operations, and finance. The all-employee Zoho One license keeps costs predictable as you grow.",
  },
];

const featureBlocks = [
  {
    icon: <Layers3 className="h-5 w-5 text-emerald-600" />,
    title: "All-in-one suite (CRM, support, finance)",
    body: "Zoho bundles CRM, Desk, Projects, Books, Subscriptions, Analytics, and marketing tools so sales, support, and finance stay in sync without stitching multiple vendors.",
  },
  {
    icon: <ClipboardList className="h-5 w-5 text-indigo-600" />,
    title: "CRM + helpdesk + projects connected",
    body: "Pipeline stages, tickets, and project tasks can reference the same customer record, keeping sales, success, and delivery aligned on SLAs and handoffs.",
  },
  {
    icon: <Plug className="h-5 w-5 text-amber-600" />,
    title: "Integrations and automation",
    body: "Zoho Flow, APIs, and native connectors link with Workspace, 365, Slack, payment gateways, and marketing platforms. Automations reduce manual data entry and follow-up work.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5 text-emerald-700" />,
    title: "Governance and security",
    body: "Role-based access, audit logs, IP restrictions, SSO/SAML, and encryption help satisfy security and compliance requirements for client and financial data.",
  },
  {
    icon: <Building2 className="h-5 w-5 text-sky-600" />,
    title: "Finance and billing built in",
    body: "Zoho Books, Invoice, and Subscriptions manage invoicing, taxes, and recurring revenue—reducing reconciliation issues between sales and finance teams.",
  },
  {
    icon: <Rocket className="h-5 w-5 text-rose-600" />,
    title: "Analytics and reporting",
    body: "Zoho Analytics pulls data across CRM, finance, support, and marketing to deliver unified dashboards for pipeline health, retention, and profitability.",
  },
];

const pricingTable = [
  { plan: "Zoho CRM Standard/Professional", best: "Sales teams starting out", limits: "Pipeline, automation, limited seats by plan", price: "~$14–$23/user/mo" },
  { plan: "Zoho One (all apps, all employees)", best: "Growing teams needing full suite", limits: "All-employee licensing required for bundle pricing", price: "~$37/user/mo (annual, all-employee)" },
  { plan: "Zoho Desk/Projects/Books add-ons", best: "Support, delivery, finance teams", limits: "Module-specific limits vary", price: "Varies by app (~$10–$30/user/mo)" },
  { plan: "Enterprise tiers", best: "Larger orgs, advanced security", limits: "Higher automation, advanced controls", price: "Custom" },
];

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

export default function ZohoToolPage() {
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
        "Zoho is a unified business suite covering CRM, helpdesk, projects, and finance. It’s strong for teams that want connected sales, support, and billing without stitching multiple vendors. Pricing is competitive, especially with the Zoho One bundle.",
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

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Unbiased Zoho review for marketers, sales, and ops teams covering pricing, features, pros & cons, and alternatives. See if Zoho fits your 2025 stack."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-300/20 blur-3xl" />
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
                  Zoho connects CRM, support, finance, and operations in one suite, reducing integration overhead while keeping teams aligned on the same customer data.
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
              Zoho is a {category.toLowerCase()} that bundles CRM, marketing, support, projects, and finance apps. It helps sales, success, and operations teams stay aligned without juggling multiple vendors.
            </p>
            <p className="mt-3 text-slate-700">
              Marketers and sales teams use it for pipeline management and campaigns, while support and delivery use Desk and Projects for SLAs and collaboration. Finance teams rely on Books and Subscriptions for billing and reporting.
            </p>
            <p className="mt-3 text-slate-700">
              Zoho One licensing keeps pricing predictable as you add departments, making it attractive for growing agencies and SMBs.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Zoho suits teams that want connected sales, support, finance, and delivery in a single suite.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Agencies managing sales, support, and invoicing from a shared client record.",
                "In-house marketing and sales teams wanting CRM + campaign tools without extra vendors.",
                "Customer success teams handling tickets, SLAs, and handoffs to delivery.",
                "Ops and finance teams needing billing, subscriptions, and reporting tied to CRM data.",
                "Founders who want predictable pricing via the Zoho One bundle as they add headcount.",
                "Service businesses running projects, timesheets, and client communication in one place.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
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
              Zoho is strongest when you need connected front-office and back-office workflows with automation.
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
                  Zoho offers standalone app plans and the Zoho One bundle. CRM tiers suit sales teams; Zoho One is best when you want the full suite under all-employee licensing.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with CRM Standard/Professional; consider Zoho One if multiple teams need apps across sales, support, and finance.</p>
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
                  {pricingTable.map((row) => (
                    <tr key={row.plan} className="odd:bg-white even:bg-slate-50/60">
                      <td className="px-4 py-3 font-semibold text-slate-900">{row.plan}</td>
                      <td className="px-4 py-3">{row.best}</td>
                      <td className="px-4 py-3">{row.limits}</td>
                      <td className="px-4 py-3">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              For single-team needs, pick the specific Zoho app tier (e.g., CRM Professional). For multi-team adoption, Zoho One often delivers the best value and simpler governance.
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
                  <li>All-in-one suite reduces vendor sprawl.</li>
                  <li>CRM, support, finance, and projects share customer data.</li>
                  <li>Zoho One pricing is competitive for multi-team adoption.</li>
                  <li>Strong automation with Zoho Flow and APIs.</li>
                  <li>Security controls: SSO/SAML, IP restrictions, audit logs.</li>
                  <li>Finance apps (Books/Subscriptions) streamline billing.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>UI depth can feel heavy for small teams.</li>
                  <li>Best pricing requires all-employee licensing on Zoho One.</li>
                  <li>Advanced customization may need developer time.</li>
                  <li>Migration from existing stacks requires careful planning.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Zoho competes with CRM and suite platforms. Here are options teams compare when deciding on stack fit.
            </p>
            <p className="mt-2 text-slate-700">All links point to live tool pages or the direct comparison we host.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison available." : "Popular alternative in the same space."}</p>
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
          <div className="mx-auto max-w-5xl px-6 py-12 space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} vs other tools</h2>
            <p className="text-slate-700">See how Zoho stacks up against other leading CRMs in our dedicated comparison.</p>
            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Zoho vs HubSpot vs Pipedrive</h3>
                  <p className="mt-2 text-slate-700">
                    HubSpot excels at marketing + sales + attribution, Pipedrive wins for pure pipeline speed, and Zoho offers the broadest suite for value across CRM, support, and finance.
                  </p>
                </div>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/hubspot-vs-pipedrive-vs-zoho">
                  Open comparison
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              For teams that want CRM, helpdesk, projects, and finance under one roof, Zoho delivers strong value and reduces integration overhead. Zoho One pricing is compelling for multi-team adoption.
            </p>
            <p className="mt-3 text-slate-700">
              If you only need a single module, start with the individual app (e.g., CRM). If you run multiple teams, the all-employee Zoho One bundle typically wins on cost and governance simplicity.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Excellent choice for agencies and SMBs wanting connected sales, support, and finance with predictable pricing.
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
              Choose Zoho if you want a connected suite for CRM, support, projects, and finance with strong automation. It’s especially good for agencies and SMBs that need predictable pricing as they add teams.
            </p>
            <p>
              Consider point solutions if you only need one module and prefer niche depth. For all-in-one value, Zoho One is hard to beat.
            </p>
            <p>Zoho fits neatly into a modern stack, integrating with Workspace, Microsoft 365, and your billing stack through native apps and APIs.</p>
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
