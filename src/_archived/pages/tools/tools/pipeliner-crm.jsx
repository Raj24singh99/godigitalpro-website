import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, BarChart2, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Pipeliner CRM";
const slug = "pipeliner-crm";
const category = "Sales CRM";
const shortPitch =
  "Pipeliner CRM is a visual sales CRM focused on pipelines, reporting, and team collaboration for SMB and mid-market sales teams.";
const pricingSummary =
  "Per-user pricing by tier. Higher tiers add advanced automation, reporting, and integrations; enterprise options for larger deployments.";
const officialUrl = "https://www.pipelinersales.com";
const ratingValue = 4.0;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/pipelinersales.com",
  gradient: "from-sky-500 via-indigo-500 to-blue-600",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.26)]",
};

const alternatives = [
  { name: "Pipedrive", slug: "pipedrive" },
  { name: "HubSpot CRM", slug: "hubspot" },
  { name: "Zoho CRM", slug: "zoho-crm" },
  { name: "Salesforce", slug: "salesforce" },
  { name: "Pipeliner vs Pipedrive vs HubSpot", slug: "compare/pipeliner-vs-pipedrive-vs-hubspot", isComparison: true },
];

const faqs = [
  { q: "What is Pipeliner CRM?", a: "Pipeliner CRM is a visual, pipeline-focused CRM for sales teams, with dashboards, automation, and collaboration features." },
  { q: "Who is it for?", a: "SMB and mid-market sales teams that want visual pipelines, forecasting, and straightforward reporting." },
  { q: "How is pricing structured?", a: "Per-user, per-month with tiered features. Higher tiers include automation, integrations, and advanced reporting." },
  { q: "Does it integrate with email and calendars?", a: "Yes, with common email/calendar integrations; check supported providers and sync rules." },
  { q: "Can it automate tasks?", a: "Automation and workflows are available on higher tiers; validate against your sales process." },
  { q: "Is forecasting included?", a: "Yes. Pipeline forecasting and dashboards are core features." },
  { q: "Is onboarding required?", a: "Basic setups are quick; complex automation may need admin time or partner support." },
  { q: "Can it be customized?", a: "Custom fields, stages, and views are supported; depth varies by tier." },
];

function PipelinerToolPage() {
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
        "Pipeliner CRM delivers visual pipelines, reporting, and sales automation for SMB/mid-market teams. It’s useful for straightforward sales processes; ensure it fits your stack and integrations.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };

  const featureBlocks = [
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "Visual pipelines", body: "Drag-and-drop pipelines with custom stages and deal views." },
    { icon: <BarChart2 className="h-5 w-5 text-blue-600" />, title: "Forecasting & reporting", body: "Dashboards for pipeline health, velocity, and forecasts." },
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "Automation", body: "Workflows and reminders to keep deals moving (tier-dependent)." },
    { icon: <Plug className="h-5 w-5 text-emerald-500" />, title: "Integrations", body: "Email/calendar sync, and connectors to common sales/marketing tools." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "Collaboration", body: "Team visibility, notes, and activities to align reps and managers." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Customization", body: "Fields, views, and permissions to match your sales process." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Pipeliner CRM review: pricing, features, pros & cons, and alternatives like Pipedrive and HubSpot for sales pipelines."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-indigo-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-sky-200/25 blur-3xl" />
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
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}>
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
                  {toolName} offers visual pipelines and forecasting for sales teams. It’s fast to grasp—validate integrations and automation fit before rollout.
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
              {toolName} is a sales CRM built around visual pipelines, dashboards, and automation. It targets SMB and mid-market teams that want clear pipeline views and forecasting.
            </p>
            <p className="mt-3 text-slate-700">Use it to track deals, collaborate with reps, and automate reminders. Set up fields and stages to match your sales motion.</p>
            <p className="mt-3 text-slate-700">Check integrations for email, calendar, and marketing tools to keep data in sync.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for sales teams that value visual pipelines and straightforward forecasting.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "SMB sales teams needing clear pipeline views and tasks.",
                "Mid-market teams wanting forecasting and dashboards without heavy admin.",
                "Managers requiring visibility into rep activities and deal health.",
                "Teams moving off spreadsheets into a structured CRM.",
                "Sales orgs that need email/calendar sync for activity capture.",
                "Businesses wanting automation and reminders to reduce pipeline leaks.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on visual pipelines, forecasting, and sales automation.</p>
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
                  Per-user, per-month tiers. Higher plans add automation, advanced reporting, and broader integrations. Enterprise options exist for larger teams and security needs.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Match tiers to pipeline complexity and integration needs; request trials to gauge rep adoption.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Base</td>
                    <td className="px-4 py-3">Small teams</td>
                    <td className="px-4 py-3">Core pipelines, contacts, basic reporting</td>
                    <td className="px-4 py-3">Per-user pricing</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business</td>
                    <td className="px-4 py-3">Growing sales orgs</td>
                    <td className="px-4 py-3">Automation, deeper reporting, more integrations</td>
                    <td className="px-4 py-3">Most popular tier</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Larger teams</td>
                    <td className="px-4 py-3">Advanced security, custom terms, priority support</td>
                    <td className="px-4 py-3">Custom pricing</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Compare with Pipedrive/HubSpot for usability and integration fit. Factor onboarding and data migration effort.
            </p>
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
                  <li>Visual pipelines are easy for reps to understand.</li>
                  <li>Forecasting and dashboards included.</li>
                  <li>Automation/reminders reduce pipeline leakage.</li>
                  <li>Email/calendar integrations for activity capture.</li>
                  <li>Custom fields and views to match process.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Per-user costs add up for large teams.</li>
                  <li>Automation depth may trail enterprise CRMs.</li>
                  <li>Migration and training effort needed from spreadsheets.</li>
                  <li>Check integration coverage for your exact stack.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other sales CRMs.</p>
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
            <p className="text-slate-700">See how {toolName} stacks against other CRMs.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Pipedrive</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/pipedrive">
                  View Pipedrive
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Pipedrive is known for simplicity; {toolName} emphasizes visual dashboards. Choose based on UI preference, automation depth, and integrations.
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
                HubSpot offers a broad marketing/sales suite; {toolName} focuses on sales pipelines. Pick HubSpot for full lifecycle tools, {toolName} for leaner sales-focused workflows.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want visual pipelines, forecasting, and straightforward automation without heavyweight enterprise CRM overhead.
            </p>
            <p className="mt-3 text-slate-700">Pilot with reps to confirm adoption; ensure integrations meet your stack needs.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A solid sales CRM for SMB/mid-market teams that value visual clarity; best when paired with a clear sales process and clean data.
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
              Choose {toolName} if you want a visual, sales-focused CRM with forecasting and automation that reps can adopt quickly.
            </p>
            <p>
              Consider Pipedrive for lightweight pipelines or HubSpot for a broader marketing/sales suite; {toolName} excels at visual clarity and straightforward setup.
            </p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for your team, try it here:{" "}
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

export default PipelinerToolPage;
