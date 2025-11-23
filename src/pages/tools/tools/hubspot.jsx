import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Video, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "HubSpot";
const slug = "hubspot";
const category = "CRM & Marketing Automation";
const shortPitch =
  "HubSpot is an all-in-one CRM, marketing automation, sales, and service platform that helps teams attract, engage, and convert customers with unified data and workflows.";
const pricingSummary = "Free CRM with paid hubs starting from ~$45/month (Starter) and scaling through Professional and Enterprise for automation, reporting, and advanced permissions.";
const officialUrl = "https://www.hubspot.com";
const ratingValue = 4.7;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/hubspot.com",
  gradient: "from-amber-500 via-orange-500 to-rose-500",
  glow: "shadow-[0_20px_80px_rgba(249,115,22,0.25)]",
};

const alternatives = [
  { name: "Pipedrive", slug: "pipedrive" },
  { name: "Zoho", slug: "zoho" },
  { name: "Freshworks", slug: "freshworks" },
  { name: "ActiveCampaign", slug: "activecampaign" },
  { name: "Zendesk", slug: "zendesk" },
];

const faqs = [
  {
    q: "Is HubSpot free?",
    a: "HubSpot offers a free CRM with contacts, deals, forms, email, and chat. Advanced automation, permissions, and reporting sit in the paid Starter, Professional, and Enterprise tiers.",
  },
  {
    q: "Which HubSpot plan should I choose?",
    a: "Startups begin on Starter for basic automation. Growing teams pick Professional for workflows, ABM, custom reports, and sequences. Enterprise adds permissions, SSO, sandboxes, and advanced reporting.",
  },
  {
    q: "Does HubSpot include marketing automation?",
    a: "Yes. Marketing Hub adds workflows, email, lead scoring, ABM, ads, forms, CTAs, landing pages, and reporting on paid plans.",
  },
  {
    q: "Can HubSpot replace my CRM?",
    a: "HubSpot’s free CRM covers core contact/deal tracking. Professional and Enterprise add pipelines, permissions, and custom objects that can replace many SMB CRMs.",
  },
  {
    q: "Is HubSpot good for B2B SaaS?",
    a: "Yes. HubSpot is popular with B2B SaaS for marketing automation, ABM, sequences, and integrations to product data via HubSpot APIs.",
  },
  {
    q: "How does HubSpot compare to Pipedrive or Zoho?",
    a: "HubSpot is broader, combining CRM, marketing, sales, and service. Pipedrive focuses on sales pipeline. Zoho is flexible and budget-friendly but less unified out of the box.",
  },
  {
    q: "Does HubSpot integrate with other tools?",
    a: "HubSpot’s marketplace offers 1,000+ integrations for ads, product analytics, support, webinar tools, payments, and more.",
  },
  {
    q: "Is HubSpot secure for enterprise?",
    a: "Enterprise tiers add SSO, audit logs, field-level permissions, and sandboxes, plus governance for teams managing multiple brands or regions.",
  },
];

function HubSpotToolPage() {
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
        "HubSpot blends CRM, marketing automation, sales engagement, and service tools in a single platform. With a free CRM and tiered hubs, it supports teams from startup to enterprise with workflows, reporting, and strong integrations.",
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
      title: "Unified CRM and contact timelines",
      body: "Store contacts, companies, and deals with emails, calls, and activities in one timeline so sales and marketing share context.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-indigo-500" />,
      title: "Marketing automation and ABM",
      body: "Build workflows, lead scoring, ABM lists, ads audiences, and nurture sequences that sync with CRM data.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Permissions, governance, and SSO",
      body: "Enterprise tiers add fine-grained permissions, sandboxes, audit logs, and SSO to keep large teams compliant.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "App marketplace integrations",
      body: "Connect product analytics, support, ads, webinar tools, and billing so data flows both ways without heavy engineering.",
    },
    {
      icon: <Video className="h-5 w-5 text-blue-500" />,
      title: "Content and meeting tools",
      body: "Landing pages, CTAs, forms, meeting links, and chatbots help capture and convert leads with fewer tools.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Reporting and revenue attribution",
      body: "Custom reports, dashboards, and attribution tie marketing activity to pipeline and revenue, especially on Professional/Enterprise.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="In-depth HubSpot review for marketers, sales, and success teams. See pricing, features, pros & cons, alternatives, and whether HubSpot fits your 2025 stack."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-rose-200/25 blur-3xl" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-rose-200 blur-3xl" />
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
                  HubSpot unifies CRM, marketing, sales, and service data so teams can automate journeys, report revenue impact, and scale go-to-market from one platform.
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
              {toolName} is a {category.toLowerCase()} platform combining CRM, marketing automation, sales engagement, service desk, and CMS tools. It’s built to align marketing, sales, and success on one database with shared workflows.
            </p>
            <p className="mt-3 text-slate-700">
              Marketers rely on HubSpot for email, landing pages, forms, ads, ABM, and automation. Sales teams use sequences, deals, meetings, and pipelines. Support teams use inbox, tickets, and knowledge base in Service Hub.
            </p>
            <p className="mt-3 text-slate-700">
              Integrations and custom objects let product-led companies sync behavioral data to drive lifecycle campaigns and revenue reporting.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} suits teams that want CRM and automation under one roof.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "B2B SaaS teams aligning marketing, sales, and success on shared data.",
                "Agencies running inbound programs and reporting across clients.",
                "Startups needing a free CRM that can scale to automation and ABM.",
                "Sales teams using sequences, tasks, and deal pipelines with integrated email.",
                "Support teams using shared inbox and tickets alongside CRM data.",
                "Ops teams connecting product analytics, billing, and ads for multi-touch attribution.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">HubSpot focuses on end-to-end go-to-market alignment and automation.</p>
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
                  HubSpot offers a free CRM and paid hubs (Marketing, Sales, Service, CMS, Operations). Starter tiers unlock light automation. Professional adds robust workflows, custom reports, and ABM. Enterprise layers in permissions, SSO, sandboxes, and advanced reporting.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on free/Starter. Move to Professional for serious automation and reporting. Use Enterprise for governance at scale.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Free CRM</td>
                    <td className="px-4 py-3">Startups and small teams</td>
                    <td className="px-4 py-3">Basic email, forms, deals; limited automation</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter</td>
                    <td className="px-4 py-3">Teams beginning automation</td>
                    <td className="px-4 py-3">Light workflows, limited reporting</td>
                    <td className="px-4 py-3">~$45/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Professional</td>
                    <td className="px-4 py-3">Growing GTM teams</td>
                    <td className="px-4 py-3">Advanced workflows, ABM, custom reports, sequences</td>
                    <td className="px-4 py-3">$800–$1,600+/month (varies by hub/users)</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Large orgs needing governance</td>
                    <td className="px-4 py-3">SSO, permissions, partitions, sandboxes, advanced reporting</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Pricing varies across hubs and contact limits. Model contacts and seats carefully—cost scales with automation and user counts. Bundles can reduce total spend if you need multiple hubs.
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
                  <li>Unified CRM with marketing, sales, and service in one platform.</li>
                  <li>Strong automation and ABM when using Pro/Enterprise hubs.</li>
                  <li>Large app marketplace for ads, product, support, and billing tools.</li>
                  <li>Clean UX and fast onboarding for small teams.</li>
                  <li>Custom objects and APIs for product-led growth scenarios.</li>
                  <li>Good reporting and attribution on higher tiers.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Costs can rise quickly with contacts, seats, and hubs.</li>
                  <li>Advanced features locked behind Professional/Enterprise.</li>
                  <li>Custom CRM requirements may still favor Salesforce for some enterprises.</li>
                  <li>Marketing email send limits and contact tiers need careful planning.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              HubSpot is broad and user-friendly. If you need lower cost, sales-only focus, or deeper enterprise customization, consider these alternatives.
            </p>
            <p className="mt-2 text-slate-700">All provide CRM/automation; they differ on price, customization, and ecosystem depth.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug + alt.name} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
                  </div>
                  <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} stacks up against two common CRM and automation options.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Pipedrive</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/compare/hubspot-vs-pipedrive-vs-zoho">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Pipedrive is sales-first with a streamlined pipeline UI and lower price. HubSpot is broader with marketing automation, service tools, and a larger ecosystem.
              </p>
              <p className="mt-2 text-slate-900">Choose Pipedrive for simple sales pipelines; choose HubSpot when marketing, sales, and service need one platform.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs ActiveCampaign</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/compare/zapier-vs-hubspot-vs-activecampaign">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ActiveCampaign excels at marketing automation and email for the price. HubSpot combines CRM, service, and sales engagement with a cleaner UI and deeper reporting on higher tiers.
              </p>
              <p className="mt-2 text-slate-900">Pick ActiveCampaign for budget-friendly automation; pick HubSpot when you want unified CRM plus multi-hub expansion.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              For teams that want marketing, sales, and service aligned, HubSpot is worth it. The free CRM is generous, and Professional/Enterprise hubs deliver robust automation, reporting, and governance.
            </p>
            <p className="mt-3 text-slate-700">
              If budget is tight or you need deep customization, consider Pipedrive, Zoho, or Salesforce. If you only need email automation, ActiveCampaign may be more cost-effective.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> HubSpot is a top choice for GTM teams seeking an integrated platform with strong usability and ecosystem support—just plan pricing as you scale contacts and seats.
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
              Choose HubSpot if you want a unified CRM with marketing, sales, and service that scales from free to enterprise. It reduces tool sprawl and keeps revenue teams aligned.
            </p>
            <p>
              Consider Pipedrive or Zoho for lower-cost sales CRMs, or Salesforce if you need deep customization. For email-heavy automation, ActiveCampaign is a strong alternative.
            </p>
            <p>HubSpot’s ecosystem and marketplace make it easy to connect ads, product data, and support tools, delivering a complete view of the customer journey.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here: <a className="text-amber-700 hover:text-amber-600" href={officialUrl}>Visit {toolName}</a>.
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-amber-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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

export default HubSpotToolPage;
