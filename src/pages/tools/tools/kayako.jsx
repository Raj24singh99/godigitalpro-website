import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Kayako";
const slug = "kayako";
const category = "Customer Support & Help Desk";
const shortPitch = "Kayako is a help desk and shared inbox platform with live chat, knowledge base, and workflow automation for support teams.";
const pricingSummary =
  "Seat-based pricing across tiers. Higher plans add advanced automation, integrations, and reporting; costs scale with agent seats.";
const officialUrl = "https://www.kayako.com";
const ratingValue = 4.0;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/kayako.com",
  gradient: "from-blue-500 via-sky-500 to-cyan-600",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.24)]",
};

const alternatives = [
  { name: "Zendesk", slug: "zendesk" },
  { name: "Freshdesk", slug: "freshdesk" },
  { name: "Help Scout", slug: "help-scout" },
  { name: "Intercom", slug: "intercom" },
  { name: "Zoho Desk", slug: "zoho-desk" },
];

const faqs = [
  {
    q: "What is Kayako?",
    a: "Kayako is a help desk platform with shared inbox, live chat, and knowledge base capabilities for support teams.",
  },
  {
    q: "Who is Kayako best for?",
    a: "Support teams that need multichannel ticketing, chat, and automation without a complex enterprise deployment.",
  },
  {
    q: "Does Kayako support live chat?",
    a: "Yes. Live chat and embeddable widgets are included to assist customers in-app or on-site.",
  },
  {
    q: "How does pricing work?",
    a: "Seat-based pricing; higher tiers add automation, integrations, and reporting depth.",
  },
  {
    q: "Is there a knowledge base?",
    a: "Yes. You can publish help articles and connect them to chat and ticket deflection.",
  },
  {
    q: "Does Kayako integrate with other tools?",
    a: "Integrations for CRM, e-commerce, and productivity tools are available on select plans.",
  },
  {
    q: "Can I automate workflows?",
    a: "Yes. Automations handle routing, SLAs, and notifications; configuration varies by tier.",
  },
  {
    q: "Do I still need training and processes?",
    a: "Yes. Ticket categorization, macros, and reporting still require team setup and training.",
  },
];

function KayakoToolPage() {
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
        "Kayako provides shared inbox, chat, and knowledge base tools for support teams with workflow automation and reporting to manage SLAs and response quality.",
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
      title: "Shared inbox",
      body: "Centralize email and messaging with assignments, tags, and macros.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-blue-500" />,
      title: "Live chat",
      body: "Embed chat widgets to help customers in real time across web and product.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Knowledge base",
      body: "Publish self-serve articles and connect them to chat and ticket deflection.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Workflow automation",
      body: "Routing, SLAs, and notifications to keep response times consistent.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Reporting",
      body: "Dashboards for volumes, response times, and CSAT across channels.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Integrations",
      body: "Connect CRM, commerce, and collaboration tools to enrich tickets with context.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Kayako review: pricing, features, pros & cons, and alternatives so you can choose the right help desk for your support team."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-blue-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-cyan-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-blue-600" />
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
                  {toolName} brings shared inbox, chat, and knowledge base together so support teams can respond faster and stay organized.
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
              {toolName} is a help desk platform that centralizes support channels, live chat, and self-service content. It helps teams manage SLAs, triage tickets, and keep responses consistent.
            </p>
            <p className="mt-3 text-slate-700">
              Use it to route conversations, automate notifications, and keep history organized across email, chat, and help center.
            </p>
            <p className="mt-3 text-slate-700">
              Reporting covers volumes and response times, but you still need processes for macros, tagging, and knowledge upkeep.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for support teams wanting shared inbox, chat, and knowledge base in one tool without heavy enterprise setup.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Support teams handling email and chat in one place.",
                "E-commerce or SaaS brands needing embedded chat widgets.",
                "Teams that want self-service plus agent workflows.",
                "Leaders tracking response times and SLA adherence.",
                "Growing teams needing automation and routing rules.",
                "Organizations integrating tickets with CRM or order data.",
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
            <p className="mt-3 text-slate-700">
              {toolName} focuses on shared inbox, chat, knowledge base, and automation to streamline support operations.
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
                  {toolName} uses seat-based pricing. Higher tiers add automation depth, integrations, and reporting. Costs scale with agent seats and channel volume.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with a mid-tier to get automation and reporting; add seats as volume grows and evaluate SLAs regularly.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Basic</td>
                    <td className="px-4 py-3">Small teams</td>
                    <td className="px-4 py-3">Shared inbox, basic chat</td>
                    <td className="px-4 py-3">Limited automation</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">Growing support orgs</td>
                    <td className="px-4 py-3">Automations, knowledge base, reporting</td>
                    <td className="px-4 py-3">Good balance of features</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Higher volume teams</td>
                    <td className="px-4 py-3">Advanced integrations, SLAs, security</td>
                    <td className="px-4 py-3">Plan for onboarding and training</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Consider seat counts, channel volume, and integration needs. Align macros, tagging, and knowledge upkeep before scaling.
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
                  <li>Shared inbox with chat and knowledge base included.</li>
                  <li>Automation for routing and SLAs.</li>
                  <li>Embedded chat widgets for web and product.</li>
                  <li>Reporting across channels and response times.</li>
                  <li>Integrations to bring customer context into tickets.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Enterprise features may lag larger suites.</li>
                  <li>Seat-based pricing scales with headcount.</li>
                  <li>Setup for macros, tagging, and knowledge still required.</li>
                  <li>Reporting depth varies by tier.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other help desks to match your automation depth, budget, and integration needs.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
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
            <p className="text-slate-700">See how {toolName} compares with other help desk platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Zendesk</h3>
                <a className="text-sm font-semibold text-blue-700 hover:text-blue-600" href="/tools/zendesk">
                  View Zendesk
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Zendesk is an enterprise-grade suite with deep integrations. {toolName} offers a simpler shared inbox, chat, and knowledge base. Choose Zendesk for advanced scale; choose {toolName} for simplicity.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Freshdesk</h3>
                <a className="text-sm font-semibold text-blue-700 hover:text-blue-600" href="/tools/freshdesk">
                  View Freshdesk
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Freshdesk includes broad automation and marketplace apps. {toolName} focuses on a streamlined experience with chat and knowledge base built-in. Pick based on app ecosystem vs. simplicity.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want a combined shared inbox, chat, and knowledge base with automation for SLAs and routing, without heavy enterprise overhead.
            </p>
            <p className="mt-3 text-slate-700">
              Budget for agent seats and time to set up macros, tagging, and knowledge articles. Confirm integrations for your CRM and commerce stack.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A solid help desk for growing teams that value simplicity and built-in chat/self-service tools.
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
              Choose {toolName} if you want shared inbox, chat, and knowledge base in one tool with manageable automation for SLAs and routing.
            </p>
            <p>
              Consider Zendesk or Freshdesk if you need deeper ecosystems and enterprise features; keep {toolName} for streamlined support operations.
            </p>
            <p>{toolName} keeps support organized across channels—success depends on process setup and knowledge upkeep.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-blue-700 hover:text-blue-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-blue-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default KayakoToolPage;
