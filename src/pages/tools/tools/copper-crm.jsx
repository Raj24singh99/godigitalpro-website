import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Copper CRM";
const slug = "copper-crm";
const category = "CRM for Google Workspace";
const shortPitch =
  "Copper is a CRM built for Google Workspace users, offering pipeline tracking, email sync, and task automation inside Gmail and Google Calendar.";
const pricingSummary =
  "Per-user pricing with tiered features. Higher plans add multiple pipelines, workflow automation, reporting, and admin controls; trials are available.";
const officialUrl = "https://www.copper.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/copper.com",
  gradient: "from-rose-500 via-amber-500 to-emerald-500",
  glow: "shadow-[0_20px_80px_rgba(236,72,153,0.24)]",
};

const alternatives = [
  { name: "Pipedrive", slug: "pipedrive" },
  { name: "HubSpot CRM", slug: "hubspot" },
  { name: "Close", slug: "close-com" },
  { name: "Zoho CRM", slug: "zoho-crm" },
  { name: "Salesforce", slug: "salesforce" },
];

const faqs = [
  {
    q: "What is Copper CRM?",
    a: "Copper is a CRM designed for Google Workspace, with Gmail/Calendar integration for managing pipelines, tasks, and contacts without heavy setup.",
  },
  {
    q: "Who is it for?",
    a: "Sales, account, and customer success teams that live in Gmail and want lightweight CRM workflows with fast onboarding.",
  },
  {
    q: "How is pricing structured?",
    a: "Per-user monthly pricing with tiers. Higher tiers add multiple pipelines, workflow automation, reporting, and permissions.",
  },
  {
    q: "Does it integrate with Gmail/Calendar?",
    a: "Yes. Copper plugs into Gmail and Google Calendar for email sync, meeting tracking, and task creation.",
  },
  {
    q: "Can I automate workflows?",
    a: "Workflow automation and task reminders are available on higher tiers.",
  },
  {
    q: "Are there reports?",
    a: "Reporting and dashboards are included, with more options on upper tiers.",
  },
  {
    q: "Is it customizable?",
    a: "You can customize fields, stages, and pipelines; advanced customization may be lighter than enterprise CRMs.",
  },
  {
    q: "Is there a free trial?",
    a: "Trials are offered so teams can test Gmail/Calendar fit before committing.",
  },
];

function CopperCrmToolPage() {
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
        "Copper embeds CRM into Google Workspace with email sync, pipelines, and automation, making it a good fit for teams that live in Gmail and want fast adoption.",
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
      title: "Gmail integration",
      body: "Manage contacts, tasks, and deals directly from Gmail with email sync.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Pipelines & tasks",
      body: "Track deals across pipelines, assign tasks, and set reminders.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Workflow automation",
      body: "Automate follow-ups, task creation, and updates on higher tiers.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Reporting",
      body: "Dashboards and reports track pipeline health and team performance.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Integrations",
      body: "Connect with Google Workspace apps and other sales/marketing tools.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Mobile & calendar",
      body: "Mobile apps and calendar sync keep activities aligned across devices.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Copper CRM review: pricing, features, pros & cons, and alternatives so you can see if it fits your Google Workspace sales workflow."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-emerald-200/25 blur-3xl" />
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
                  {toolName} keeps CRM inside Gmail and Calendar, reducing context switching while tracking deals and follow-ups.
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
              {toolName} is a CRM optimized for Google Workspace. It syncs Gmail/Calendar, tracks pipelines, and automates tasks so reps can work from their inbox.
            </p>
            <p className="mt-3 text-slate-700">Use it to log emails automatically, track deals, assign tasks, and run reports without leaving Google tools.</p>
            <p className="mt-3 text-slate-700">Best for teams prioritizing ease of use over heavy customization.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for Google Workspace-centric teams needing a simple CRM with email sync.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Sales teams working in Gmail who need pipeline visibility.",
                "Account managers tracking follow-ups and renewals.",
                "Founders and small teams needing quick CRM setup.",
                "Customer success teams logging interactions in Gmail.",
                "Agencies or service teams managing deals with light customization.",
                "Teams wanting automated tasks from email and calendar activity.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on Gmail-centric CRM, pipelines, and automation.</p>
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
                  {toolName} is priced per user with tiers that add pipelines, workflow automation, reporting, and permissions. Trials help test fit before rollout.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with the lowest tier that supports your pipelines; upgrade when you need automation and advanced reporting.</p>
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
                    <td className="px-4 py-3">Small teams in Gmail</td>
                    <td className="px-4 py-3">Core pipeline, email sync, tasks</td>
                    <td className="px-4 py-3">Great starting point</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Professional</td>
                    <td className="px-4 py-3">Growing sales teams</td>
                    <td className="px-4 py-3">Multiple pipelines, automation, reporting</td>
                    <td className="px-4 py-3">Fits most SMBs</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business</td>
                    <td className="px-4 py-3">Larger teams</td>
                    <td className="px-4 py-3">Advanced permissions, more automation, support</td>
                    <td className="px-4 py-3">Best for teams needing control</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Plan onboarding and data cleanup; CRM success depends on consistent logging and clear processes.</p>
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
                  <li>Deep Gmail and Calendar integration.</li>
                  <li>Simple onboarding and UI for small teams.</li>
                  <li>Automation for follow-ups and tasks on higher tiers.</li>
                  <li>Reporting for pipeline health and activity.</li>
                  <li>Good fit for Google-first workflows.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Less customizable than enterprise CRMs.</li>
                  <li>Automation depth is lighter than advanced platforms.</li>
                  <li>Pricing scales with seats; plan adoption carefully.</li>
                  <li>Limited if your team is not on Google Workspace.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other CRMs to match customization, automation depth, and ecosystem fit.
            </p>
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
            <p className="text-slate-700">See how {toolName} compares with other CRMs.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Pipedrive</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/pipedrive">
                  View Pipedrive
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Pipedrive offers strong pipeline customization and marketplace apps; {toolName} emphasizes Gmail-native workflows. Pick based on customization needs and Google reliance.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs HubSpot CRM</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/hubspot">
                  View HubSpot CRM
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                HubSpot ties CRM to marketing automation; {toolName} focuses on Gmail-first simplicity. Choose HubSpot for broader marketing suite, {toolName} for ease in Google Workspace.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if your team runs on Google Workspace and wants a CRM that lives in Gmail with minimal setup and solid automation/reporting.
            </p>
            <p className="mt-3 text-slate-700">
              It shines when reps actually use Gmail and log activities; ensure process discipline for accurate data and reports.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A Google-focused CRM that trades deep customization for speed and adoption—great for Workspace teams, less ideal for complex enterprise needs.
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
              Choose {toolName} if you want a Gmail-first CRM with pipelines, automation, and reporting that teams will actually use.
            </p>
            <p>
              Consider Pipedrive or HubSpot if you need deeper customization or marketing automation; use {toolName} for quick adoption in Google Workspace.
            </p>
            <p>{toolName} helps teams stay organized from the inbox—enforce data hygiene and follow-up habits to maximize value.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-emerald-700 hover:text-emerald-500" href={officialUrl}>
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

export default CopperCrmToolPage;
