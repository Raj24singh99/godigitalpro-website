import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, BarChart2, Gauge, Users, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Pipedrive";
const slug = "pipedrive";
const category = "Sales CRM";
const shortPitch =
  "Pipedrive is a pipeline-first CRM built for sales teams that need speed, clear forecasting, and automation without enterprise bloat.";
const pricingSummary = "Plans from ~$14/user/month (billed annually), with higher tiers adding automation, advanced reporting, and security controls.";
const officialUrl = "https://www.pipedrive.com";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/pipedrive.com",
  gradient: "from-slate-900 via-slate-800 to-indigo-700",
  glow: "shadow-[0_20px_80px_rgba(51,65,85,0.25)]",
};

const alternatives = [
  { name: "HubSpot", slug: "hubspot" },
  { name: "Zoho", slug: "zoho" },
  { name: "Freshworks", slug: "freshworks" },
  { name: "Pipedrive vs HubSpot vs Zoho", slug: "compare/hubspot-vs-pipedrive-vs-zoho", isComparison: true },
];

const faqs = [
  { q: "Is Pipedrive good for small teams?", a: "Yes. Pipedrive is designed for small-to-mid sales teams that need pipeline clarity, quick deal updates, and automation without heavy admin overhead." },
  { q: "Does Pipedrive include email and sequences?", a: "Yes. Pipedrive includes email sync, templates, and simple sequences on higher tiers. You can run outreach, track opens, and log replies automatically." },
  { q: "How does Pipedrive compare to HubSpot?", a: "Pipedrive is faster and simpler for sales pipelines. HubSpot is a full marketing and sales suite with deeper automation and attribution, but at higher cost and complexity." },
  { q: "Does Pipedrive have built-in calling?", a: "Yes. Pipedrive offers calling, call logging, and call recordings on eligible plans. You can also integrate with VoIP providers from the marketplace." },
  { q: "Can Pipedrive forecast revenue?", a: "Yes. Pipedrive offers weighted pipeline views, forecasting, and custom reporting so managers see revenue risk by stage and owner." },
  { q: "What integrations does Pipedrive support?", a: "It connects with Google Workspace, Microsoft 365, Slack, Zoom, Calendly, marketing automation tools, and hundreds of marketplace apps." },
  { q: "Is Pipedrive customizable?", a: "You can customize fields, stages, activities, permissions, and automations. It’s lighter than enterprise CRMs but flexible enough for most sales teams." },
  { q: "Is Pipedrive secure and GDPR-compliant?", a: "Yes. Pipedrive offers SOC 2 compliance, SSO (on higher tiers), role-based permissions, and GDPR-ready data processing agreements." },
];

export default function ToolPage() {
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
        "Pipedrive focuses on sales velocity: clear pipelines, automation, and forecasting without the overhead of enterprise CRMs. It’s easy to adopt and priced well for SMB sales teams.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };

  const featureBlocks = [
    {
      icon: <Gauge className="h-5 w-5 text-indigo-500" />,
      title: "Pipeline-first UI",
      body: "Drag-and-drop pipelines, customizable stages, and clear deal health indicators keep reps focused on movement and next steps.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "Workflow automation",
      body: "Automate follow-ups, task creation, and status changes—reducing admin work and keeping deals moving without manual reminders.",
    },
    {
      icon: <Plug className="h-5 w-5 text-emerald-600" />,
      title: "Integrations for the sales stack",
      body: "Connect calendars, email, calling, scheduling, and marketing automation so activities sync and managers see the full picture.",
    },
    {
      icon: <BarChart2 className="h-5 w-5 text-slate-700" />,
      title: "Forecasting and reporting",
      body: "Weighted forecasts, custom dashboards, and activity reports highlight revenue risk, rep performance, and where deals stall.",
    },
    {
      icon: <Users className="h-5 w-5 text-indigo-600" />,
      title: "Lead management and web forms",
      body: "Capture leads via forms/chat, route them to pipelines, and score or qualify quickly to reduce leakage between marketing and sales.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Security and admin controls",
      body: "Role-based access, SSO on higher tiers, audit logs, and SOC 2 compliance keep data protected for growing teams.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Complete Pipedrive review for 2025 covering pricing, features, pros & cons, and the best alternatives like HubSpot and Zoho for sales teams."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-indigo-300/20 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-slate-400/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-indigo-600" />
                {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">{toolName} Review (2025): Pricing, Pros & Cons</h1>
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
                  Pipedrive keeps sales teams focused on pipeline movement, automations, and forecasting without drowning them in setup. It’s built for speed and adoption.
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
              {toolName} is a {category.toLowerCase()} focused on pipeline visibility and sales velocity. Reps get a clear board to update deals, while managers see forecasts, activity, and where deals get stuck.
            </p>
            <p className="mt-3 text-slate-700">
              Automations reduce manual follow-up, and integrations keep email, calendar, scheduling, and calling in sync so the CRM stays accurate without extra admin work.
            </p>
            <p className="mt-3 text-slate-700">
              Pipedrive suits teams that need a CRM their reps will actually use—less bloat than enterprise suites, but enough reporting and governance for leadership.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Pipedrive fits outbound, inbound, and hybrid sales teams that want adoption and clarity.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "SMB and mid-market sales teams needing a fast, lightweight CRM.",
                "Agencies and consultancies tracking pipeline without enterprise cost.",
                "Founders and RevOps teams who want forecasting and activity reporting without heavy setup.",
                "BDRs/SDRs running sequences and logging calls from one place.",
                "Teams moving off spreadsheets or bloated CRMs to a focused sales tool.",
                "Businesses integrating calendars, email, and scheduling directly into pipelines.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-indigo-500" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">Pipedrive prioritizes pipeline clarity, automation, and reporting so reps close faster and managers forecast accurately.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {featureBlocks.map((feature) => (
                <div key={feature.title} className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center gap-3 text-slate-900">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">{feature.icon}</div>
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
                  Pipedrive offers tiered pricing starting around $14/user/month (annual) for Essential, adding email sync at Advanced, deeper automation/reporting at Professional, and security/permissions at Enterprise.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on Advanced for email + automation; upgrade to Professional for reporting; Enterprise for SSO and admin controls.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Essential</td>
                    <td className="px-4 py-3">Simple pipeline tracking</td>
                    <td className="px-4 py-3">No email sync; limited automation</td>
                    <td className="px-4 py-3">~$14/user/mo (annual)</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Advanced</td>
                    <td className="px-4 py-3">Most SMB teams</td>
                    <td className="px-4 py-3">Email sync, templates, basic automation</td>
                    <td className="px-4 py-3">~$29/user/mo (annual)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Professional</td>
                    <td className="px-4 py-3">Scaling teams needing reporting</td>
                    <td className="px-4 py-3">Advanced automation, custom reports/forecasting</td>
                    <td className="px-4 py-3">~$59/user/mo (annual)</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Larger orgs needing governance</td>
                    <td className="px-4 py-3">SSO, security rules, implementation support</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Most teams start on Advanced for email sync and automation. Upgrade to Professional when you need deeper reporting and forecasting. Choose Enterprise if you require SSO, advanced permissions, and dedicated support.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-indigo-50 p-5 shadow-sm ring-1 ring-indigo-100">
                <div className="flex items-center gap-2 text-indigo-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Pipeline-first design that reps actually use.</li>
                  <li>Simple automations reduce admin work.</li>
                  <li>Good value versus enterprise CRMs.</li>
                  <li>Strong forecasting and activity reporting.</li>
                  <li>Wide integration marketplace for sales stack.</li>
                  <li>Email, calling, and scheduling built in for sales motions.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Marketing automation is limited compared to HubSpot.</li>
                  <li>Advanced reporting customization trails enterprise CRMs.</li>
                  <li>Lowest tier lacks email sync/automation.</li>
                  <li>Not ideal for very large, multi-SKU enterprise sales motions.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">If you need a broader suite or different price point, explore these options. All links go to full reviews or comparisons.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Open comparison page." : "Read the full review and pricing details."}</p>
                  </div>
                  <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how Pipedrive compares to other CRMs commonly evaluated by sales teams.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs HubSpot vs Zoho</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/compare/hubspot-vs-pipedrive-vs-zoho">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                HubSpot blends marketing and sales automation, Zoho offers a broad suite at value pricing, and Pipedrive optimizes for pipeline speed. The comparison shows which fits your stack and budget.
              </p>
              <p className="mt-2 text-slate-900">Choose Pipedrive for sales-first simplicity; HubSpot for full-funnel automation; Zoho for suite value.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Freshworks vs Zoho</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/compare/pipedrive-vs-freshworks-vs-zoho">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Freshworks offers bundled sales + support, Zoho delivers breadth at a low price, and Pipedrive is the streamlined sales CRM. The comparison covers pricing, automation depth, and reporting.
              </p>
              <p className="mt-2 text-slate-900">Pick Pipedrive for rep adoption; Freshworks for all-in-one CX; Zoho for budget-friendly suite coverage.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you want a CRM your reps will use daily, Pipedrive is worth it. Fast pipeline updates, automation, and clear forecasts drive adoption and accuracy without heavy setup.
            </p>
            <p className="mt-3 text-slate-700">
              If you need deep marketing automation or enterprise-grade customization, HubSpot or Salesforce-class CRMs may fit better. For SMB/mid-market sales teams, Pipedrive hits the value sweet spot.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> A top pick for sales-led teams that want speed, clarity, and automation at a reasonable price.
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
              Choose Pipedrive if you need a pipeline-focused CRM that’s easy to adopt, automates follow-ups, and keeps forecasts clear. It’s ideal for sales teams that value speed over suite bloat.
            </p>
            <p>Consider HubSpot for full-funnel automation or Zoho/Freshworks for broader suites. You can always graduate to heavier CRMs later if complexity grows.</p>
            <p>Pipedrive integrates well with the sales stack, keeping your data accurate and your team focused on closing.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for your team, try it here: <a className="text-indigo-700 hover:text-indigo-600" href={officialUrl}>Visit {toolName}</a>.
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-indigo-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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
