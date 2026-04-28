import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Folder, Crown, ArrowLeft, ChevronDown, BarChart3, Users, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Salesmate";
const slug = "salesmate";
const category = "CRM & Sales Engagement";
const shortPitch = "Salesmate is a CRM and sales engagement platform with pipelines, calling/texting, automations, and reporting for SMB and mid-market teams.";
const pricingSummary = "Per-user tiered pricing. Higher tiers add automation, calling credits/features, sequences, and advanced reporting. Add-ons may apply for telephony/credits.";
const officialUrl = "https://www.salesmate.io";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/salesmate.io",
  gradient: "from-emerald-500 via-teal-500 to-blue-500",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.22)]",
};

const alternatives = [
  { name: "HubSpot Sales Hub", slug: "hubspot" },
  { name: "Pipedrive", slug: "pipedrive" },
  { name: "Freshsales", slug: "freshsales" },
  { name: "Close", slug: "close" },
  { name: "Zoho CRM", slug: "zoho-crm" },
];

const faqs = [
  { q: "What is Salesmate?", a: "Salesmate is a CRM and sales engagement tool offering pipelines, automations, calling/texting, and reporting." },
  { q: "Who is it for?", a: "SMB and mid-market sales teams needing CRM plus built-in calling, texting, and sequences." },
  { q: "Does it have telephony?", a: "Yes. Calling and texting are built in; credits and numbers may be billed separately." },
  { q: "How is pricing structured?", a: "Per-user tiers with features unlocked at higher plans; telephony/credits can be add-ons." },
  { q: "Are automations supported?", a: "Yes. Workflows, sequences, and deal automation help standardize outreach and pipeline." },
  { q: "Does it integrate with other tools?", a: "Integrations and APIs connect Salesmate to email, calendar, and other apps." },
  { q: "Is reporting included?", a: "Dashboards and reports are included; advanced analytics come on higher tiers." },
  { q: "Is implementation heavy?", a: "Lighter than enterprise CRMs; still requires setup of pipelines, sequences, and telephony." },
];

function SalesmateToolPage() {
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
        "Salesmate combines CRM, sales engagement, calling, texting, and automation for SMB/mid-market teams. It’s lighter than enterprise CRMs but still configurable.",
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
      icon: <Users className="h-5 w-5 text-emerald-500" />,
      title: "Pipeline CRM",
      body: "Manage deals, contacts, and activities with customizable pipelines.",
    },
    {
      icon: <Phone className="h-5 w-5 text-teal-500" />,
      title: "Calling & texting",
      body: "Built-in telephony with logging; credits and numbers may be billed separately.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "Sequences & automation",
      body: "Automate outreach, reminders, and deal updates to standardize motion.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Integrations",
      body: "Connect email, calendar, and apps via integrations and APIs.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-blue-600" />,
      title: "Reporting",
      body: "Dashboards for pipeline, activities, and team performance; advanced analytics on higher tiers.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Data & admin controls",
      body: "Permissions, roles, and audit trails to manage data access and compliance.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Salesmate review: pricing, features, pros & cons, and alternatives to see if it fits your CRM and sales engagement needs."
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
                  {toolName} blends CRM, calling, texting, and automation—good for teams wanting engagement features without heavy enterprise overhead.
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
              {toolName} is a CRM and sales engagement platform that includes pipelines, built-in calling/texting, sequences, and automations. It aims to streamline outreach and deal management for SMB and mid-market teams.
            </p>
            <p className="mt-3 text-slate-700">Use it to centralize activities and communications; set up pipelines, roles, and telephony early for clean data.</p>
            <p className="mt-3 text-slate-700">Pair with clear cadences and reporting to enforce consistent sales motion.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for sales teams that want CRM plus built-in engagement without heavy enterprise complexity.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "SMB sales teams needing calling and texting inside CRM.",
                "BDRs running sequences and activity tracking in one place.",
                "Mid-market teams wanting automation without heavy admin lift.",
                "Managers tracking pipeline, activities, and outcomes in dashboards.",
                "Teams migrating from spreadsheets or simpler CRMs.",
                "RevOps standardizing cadences and telephony logging.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on pipelines, telephony, sequences, integrations, reporting, and admin controls.</p>
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
                  {toolName} has per-user tiers. Higher plans unlock automation, advanced calling/texting, and deeper reporting. Telephony numbers/credits may be extra—model total costs with usage.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start mid-tier to access automations and calling; upgrade if usage and team size justify more advanced features.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter/Lower</td>
                    <td className="px-4 py-3">Small teams testing</td>
                    <td className="px-4 py-3">Core CRM, limited automation</td>
                    <td className="px-4 py-3">Good for evaluation</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth/Pro</td>
                    <td className="px-4 py-3">Active sales teams</td>
                    <td className="px-4 py-3">Automations, calling/texting features</td>
                    <td className="px-4 py-3">Fits most SMB/mid-market needs</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business/Enterprise</td>
                    <td className="px-4 py-3">Larger teams</td>
                    <td className="px-4 py-3">Highest limits, advanced reporting/support</td>
                    <td className="px-4 py-3">Use when scale and governance required</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Include telephony costs in TCO; ensure data hygiene and training for adoption.</p>
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
                  <li>CRM plus calling/texting in one platform.</li>
                  <li>Automations and sequences for consistent outreach.</li>
                  <li>Integrations and API for workflow connectivity.</li>
                  <li>Reporting for pipeline and activities.</li>
                  <li>Generally lighter to implement than enterprise CRMs.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Telephony costs and setup can add complexity.</li>
                  <li>Less suited for very large/complex enterprises.</li>
                  <li>Data hygiene and process discipline still required.</li>
                  <li>Advanced analytics may be limited vs. larger CRM suites.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other sales CRMs to match your engagement and reporting needs.</p>
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
            <p className="text-slate-700">See how {toolName} compares to other CRM/engagement platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Pipedrive</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/pipedrive">
                  View Pipedrive
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Pipedrive is pipeline-centric; {toolName} adds built-in calling/texting. Choose based on whether telephony in-app or pure pipeline simplicity matters more.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Close</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/close">
                  View Close
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Close is known for strong dialing and outreach; {toolName} offers similar engagement plus broader CRM flexibility. Pick based on dialing depth vs. overall CRM fit.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want CRM plus built-in calling/texting and automations without enterprise-level complexity.
            </p>
            <p className="mt-3 text-slate-700">Success depends on process discipline, data hygiene, and training; budget for telephony credits.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A solid CRM/engagement option for SMB and mid-market teams; best with clear cadences and good data practices.</p>
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
            <p>Choose {toolName} if you want a CRM with built-in calling, texting, and automations for sales teams.</p>
            <p>Consider Pipedrive for pipeline simplicity or Close for heavy dialing; use {toolName} when you want engagement plus CRM in one.</p>
            <p>{toolName} helps standardize outreach—ensure telephony setup and training to maximize value.</p>
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

export default SalesmateToolPage;
