import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Close";
const slug = "close-com";
const category = "Sales CRM";
const shortPitch =
  "Close is a sales CRM focused on inside sales productivity with built-in calling, SMS, email sequences, and pipeline tracking for fast-moving teams.";
const pricingSummary =
  "Pricing is per user per month with tiers that add calling credits, power dialers, sequences, and advanced reporting. Higher plans include more telephony features and permissions.";
const officialUrl = "https://close.com";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/close.com",
  gradient: "from-indigo-500 via-blue-500 to-emerald-500",
  glow: "shadow-[0_20px_80px_rgba(79,70,229,0.24)]",
};

const alternatives = [
  { name: "Pipedrive", slug: "pipedrive" },
  { name: "HubSpot Sales", slug: "hubspot" },
  { name: "Salesforce", slug: "salesforce" },
  { name: "Salesmate", slug: "salesmate" },
  { name: "Copper", slug: "copper-crm" },
];

const faqs = [
  {
    q: "What is Close?",
    a: "Close is a sales CRM built for inside sales teams, offering pipelines, calling, SMS, email sequences, and automation to speed up outreach.",
  },
  {
    q: "Who is it for?",
    a: "Sales teams that rely on outbound calling, SMS, and email to close deals and want those channels native to their CRM.",
  },
  {
    q: "Does Close include calling and SMS?",
    a: "Yes. Calling and SMS are built in with usage-based credits and features like power and predictive dialers on higher tiers.",
  },
  {
    q: "How is pricing structured?",
    a: "Per-user monthly plans. Higher tiers add dialers, advanced reporting, permissions, and more calling credits.",
  },
  {
    q: "Does it handle email sequences?",
    a: "Yes. You can build sequences, templates, and tracking inside Close, with task automation for follow-ups.",
  },
  {
    q: "What integrations exist?",
    a: "Calendar, email, and numerous sales tools integrate. API access is available for custom workflows.",
  },
  {
    q: "Can I manage multiple pipelines?",
    a: "Yes. Close supports multiple pipelines and customizable stages per workflow.",
  },
  {
    q: "Is data import/export supported?",
    a: "Yes. You can import from CSV or other CRMs and export data for reporting or migration.",
  },
];

function CloseToolPage() {
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
        "Close brings calling, SMS, email sequences, and pipeline management into one CRM so inside sales teams can move quickly without juggling multiple tools.",
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
      title: "Calling & SMS",
      body: "Native calling and SMS with usage credits, power dialers, and call coaching tools.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Pipelines & tasks",
      body: "Manage deals across pipelines, automate tasks, and keep follow-ups organized.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Sequences & templates",
      body: "Build email sequences and templates with tracking to improve outreach efficiency.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Reporting",
      body: "Track activity, conversions, and rep performance with dashboards and exports.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Integrations & API",
      body: "Connect email, calendar, and sales tools, or use the API for custom workflows.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Automation",
      body: "Automate lead routing, follow-ups, and reminders to reduce manual admin work.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Close CRM review: pricing, features, pros & cons, and alternatives so you can assess it for inside sales teams."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-indigo-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-emerald-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-indigo-600" />
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
                  {toolName} blends pipelines, dialers, SMS, and sequences so inside sales teams can reach more leads without stitching tools together.
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
              {toolName} is a CRM built for high-velocity sales teams. It merges pipeline management with built-in calling, SMS, and email so reps can prospect and follow up from one place.
            </p>
            <p className="mt-3 text-slate-700">
              It reduces tool-switching and centralizes communication history, making it easier to coach reps and report on activity.
            </p>
            <p className="mt-3 text-slate-700">Pair it with your marketing stack or enrichment tools to keep lead data fresh.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for inside sales and outbound teams needing integrated dialers and sequences.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Outbound sales teams running call + SMS cadences.",
                "SaaS sales teams needing fast follow-ups and logging.",
                "Sales managers who want call recording and coaching.",
                "Teams replacing separate dialer, sequencer, and CRM tools.",
                "Small-to-mid teams that want quick setup without heavy admin.",
                "Reps who live in email, SMS, and phone daily.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on integrated communication, automation, and pipeline visibility.</p>
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
                  {toolName} is priced per user with tiers that unlock dialers, advanced analytics, and deeper permissions. Calling and SMS use credits; budget for usage alongside seat costs.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Choose the tier with the dialer and reporting you need; forecast calling/SMS credits based on outbound volume.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Startup/Basic</td>
                    <td className="px-4 py-3">Small teams</td>
                    <td className="px-4 py-3">Core CRM, calling & SMS with credits</td>
                    <td className="px-4 py-3">Good for early teams</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Professional</td>
                    <td className="px-4 py-3">Growing sales orgs</td>
                    <td className="px-4 py-3">Power dialer, sequences, advanced reporting</td>
                    <td className="px-4 py-3">Matches most outbound needs</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Larger teams</td>
                    <td className="px-4 py-3">Predictive dialer, permissions, success team</td>
                    <td className="px-4 py-3">Choose for scale and governance</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Plan for usage-based telephony costs and compliance (TCPA/local laws) when setting budgets.</p>
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
                  <li>Built-in calling, SMS, and email sequences.</li>
                  <li>Power dialer and coaching tools boost rep output.</li>
                  <li>Good fit for high-velocity outbound teams.</li>
                  <li>Multiple pipelines with clear activity tracking.</li>
                  <li>API and integrations extend workflows.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Telephony costs add to seat pricing.</li>
                  <li>Marketing automation is lighter than full suites.</li>
                  <li>May be more than needed for simple pipelines.</li>
                  <li>Compliance requirements for SMS/calls vary by region.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other sales CRMs to match calling needs, integrations, and budget.
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
                Pipedrive is pipeline-first with marketplace apps; {toolName} bakes in calling/SMS. Choose Pipedrive for flexibility, {toolName} for integrated telephony and sequences.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs HubSpot Sales</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/hubspot">
                  View HubSpot
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                HubSpot ties CRM to marketing automation; {toolName} emphasizes inside-sales outreach. Pick HubSpot for all-in-one marketing + sales, {toolName} for focused outbound productivity.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if your team relies on calls, SMS, and email sequences and wants them integrated into one CRM with dialers and reporting.
            </p>
            <p className="mt-3 text-slate-700">
              It shines for high-velocity outbound sales; budget for telephony usage and train reps on compliance and call quality.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A strong pick for inside sales teams that need dialers and sequences built in—choose tiers that align with your calling volume and reporting needs.
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
              Choose {toolName} if you want a CRM with built-in calling, SMS, and sequences to keep reps focused and productive.
            </p>
            <p>
              Consider Pipedrive or HubSpot if you prefer their ecosystems or need deeper marketing features; use {toolName} when integrated telephony is the priority.
            </p>
            <p>{toolName} centralizes outbound channels so teams can reach more leads faster—pair it with good data hygiene and coaching.</p>
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

export default CloseToolPage;
