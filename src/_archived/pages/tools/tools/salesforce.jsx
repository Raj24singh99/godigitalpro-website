import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Folder, Crown, ArrowLeft, ChevronDown, BarChart3, Users, Cloud } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Salesforce";
const slug = "salesforce";
const category = "CRM & Sales Cloud";
const shortPitch = "Salesforce is a leading CRM platform with sales, service, marketing, and platform tools to manage customer data and workflows at scale.";
const pricingSummary = "Licenses vary by cloud (Sales, Service, Marketing, Platform) and edition. Costs scale with seats, add-ons, automation, and storage usage.";
const officialUrl = "https://www.salesforce.com";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/salesforce.com",
  gradient: "from-sky-500 via-indigo-500 to-blue-500",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.22)]",
};

const alternatives = [
  { name: "HubSpot CRM", slug: "hubspot" },
  { name: "Microsoft Dynamics 365", slug: "microsoft-dynamics" },
  { name: "Zoho CRM", slug: "zoho-crm" },
  { name: "Pipedrive", slug: "pipedrive" },
  { name: "Freshsales", slug: "freshsales" },
];

const faqs = [
  { q: "What is Salesforce?", a: "Salesforce is a cloud CRM platform with products for sales, service, marketing, analytics, and custom apps." },
  { q: "Who is it for?", a: "Mid-market and enterprise teams needing customizable CRM, automation, and integrations across departments." },
  { q: "How is pricing structured?", a: "Per-user licensing by cloud/edition; add-ons for automation, storage, and specialized products increase cost." },
  { q: "Does Salesforce integrate with other tools?", a: "Yes. AppExchange apps and APIs connect Salesforce to thousands of tools." },
  { q: "Is customization available?", a: "Highly customizable with workflows, objects, automation, and Apex/Lightning development." },
  { q: "What about analytics?", a: "Reports, dashboards, and add-ons like Tableau/Einstein provide analytics and AI assistance." },
  { q: "Is it complex to implement?", a: "Yes. Expect implementation and admin time; many teams work with partners." },
  { q: "Is data security covered?", a: "Enterprise-grade security; admins must configure roles, sharing, and compliance properly." },
];

function SalesforceToolPage() {
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
        "Salesforce offers a broad CRM platform spanning sales, service, marketing, analytics, and custom apps. It is powerful and customizable but requires admin discipline and thoughtful implementation.",
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
      icon: <Users className="h-5 w-5 text-sky-500" />,
      title: "Sales & service clouds",
      body: "Manage pipeline, accounts, and cases with workflows, queues, and automation.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "Automation & AI",
      body: "Flows, process automation, and Einstein features to assist reps and service teams.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Custom objects & apps",
      body: "Build custom data models, apps, and pages with low-code and Apex/Lightning.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-blue-500" />,
      title: "Platform & AppExchange",
      body: "Extend with AppExchange solutions and APIs for integration across the stack.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-teal-600" />,
      title: "Reports & analytics",
      body: "Dashboards and reports with add-ons like Tableau and Einstein for deeper insights.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Security & compliance",
      body: "Role-based access, sharing rules, audit logs, and compliance controls when configured properly.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Salesforce review: pricing, features, pros & cons, and alternatives to decide if it fits your CRM and go-to-market stack."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-sky-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-blue-200/25 blur-3xl" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-sky-100 blur-3xl" />
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
                  {toolName} scales CRM, service, and platform needs—plan governance, data hygiene, and admin resources to get full value.
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
              {toolName} is a cloud CRM that unifies sales, service, marketing, analytics, and custom app development. It’s highly extensible with AppExchange and APIs, but requires clear governance to avoid bloat.
            </p>
            <p className="mt-3 text-slate-700">Use it to centralize customer data and processes; invest in admins/architects to keep data quality and automation healthy.</p>
            <p className="mt-3 text-slate-700">Pair with enablement and change management so teams adopt workflows correctly.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for mid-market and enterprise orgs needing customizable CRM with cross-team workflows.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Sales teams needing robust pipeline, forecasting, and automation.",
                "Service teams managing cases, SLAs, and knowledge bases.",
                "Marketing teams integrating journeys, leads, and CRM data.",
                "RevOps teams standardizing process and reporting across GTM.",
                "Companies building custom apps on a CRM platform backbone.",
                "Enterprises requiring security, roles, and audit controls.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on multi-cloud CRM, automation, customization, integrations, analytics, and security.</p>
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
                  Pricing varies by cloud (Sales, Service, Marketing, Platform) and edition. Costs grow with seats, storage, automation, and add-ons. Implementation and admin costs are significant—budget accordingly.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with essentials for your main cloud; add automation and add-ons after processes are stable and data is clean.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Edition</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key inclusions</th>
                    <th className="px-4 py-3">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter/Essentials</td>
                    <td className="px-4 py-3">Small teams testing Salesforce</td>
                    <td className="px-4 py-3">Core CRM features, limited customization</td>
                    <td className="px-4 py-3">Good for initial adoption</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Professional/Enterprise</td>
                    <td className="px-4 py-3">Growing orgs</td>
                    <td className="px-4 py-3">Automation, APIs, deeper customization</td>
                    <td className="px-4 py-3">Fits most mid-market needs</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Unlimited/Industry</td>
                    <td className="px-4 py-3">Complex/enterprise</td>
                    <td className="px-4 py-3">Highest limits, support, specialized clouds</td>
                    <td className="px-4 py-3">Use if scale and SLAs are critical</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Factor in implementation partners, admin roles, and change management when modeling TCO.</p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-sky-50 p-5 shadow-sm ring-1 ring-sky-100">
                <div className="flex items-center gap-2 text-sky-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Highly customizable multi-cloud CRM platform.</li>
                  <li>Rich automation, workflows, and AI features.</li>
                  <li>Extensive AppExchange and integration ecosystem.</li>
                  <li>Strong security and compliance controls when configured.</li>
                  <li>Scales for mid-market and enterprise teams.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>License and add-on costs can be high.</li>
                  <li>Implementation and governance require expertise.</li>
                  <li>Complex setups can lead to tech debt if unmanaged.</li>
                  <li>Storage and API limits can add hidden costs.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other CRMs to match your budget, team size, and customization needs.</p>
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
            <p className="text-slate-700">See how {toolName} compares to other CRMs.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs HubSpot CRM</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/hubspot">
                  View HubSpot CRM
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                HubSpot is simpler to implement with strong marketing tools; {toolName} offers deeper customization and enterprise capabilities. Choose based on complexity and team size.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Microsoft Dynamics 365</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/microsoft-dynamics">
                  View Microsoft Dynamics 365
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Dynamics integrates tightly with Microsoft stack; {toolName} has a larger app ecosystem. Pick based on existing stack alignment and customization preferences.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need a customizable, enterprise-grade CRM with automation and a broad ecosystem.
            </p>
            <p className="mt-3 text-slate-700">Success depends on governance, data hygiene, and admin investment—plan for TCO beyond licenses.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A top CRM for complex teams; best when paired with strong RevOps, enablement, and ongoing administration.</p>
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
            <p>Choose {toolName} if you need a highly customizable CRM platform spanning sales, service, and more.</p>
            <p>Consider HubSpot for simpler adoption or Dynamics for Microsoft alignment; use {toolName} when scale, extensibility, and automation are priorities.</p>
            <p>{toolName} can unify GTM and service—ensure governance and admin capacity to keep it healthy.</p>
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

export default SalesforceToolPage;
