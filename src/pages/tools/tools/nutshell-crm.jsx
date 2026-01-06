import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Nutshell CRM";
const slug = "nutshell-crm";
const category = "CRM & Sales Automation";
const shortPitch = "Nutshell CRM combines pipeline management, email automation, reporting, and collaboration for growing sales teams.";
const pricingSummary = "Plans billed per user/month. Higher tiers add advanced automation, reporting, and integrations. Trials are available.";
const officialUrl = "https://www.nutshell.com";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/nutshell.com",
  gradient: "from-emerald-500 via-sky-500 to-indigo-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.22)]",
};

const alternatives = [
  { name: "HubSpot CRM", slug: "hubspot" },
  { name: "Pipedrive", slug: "pipedrive" },
  { name: "Freshsales", slug: "freshworks" },
  { name: "Close", slug: "close" },
];

const faqs = [
  { q: "What is Nutshell CRM?", a: "Nutshell CRM is a sales-focused CRM with pipelines, email sequences, reporting, and integrations for SMB and mid-market teams." },
  { q: "Is there a free trial?", a: "Yes. Trials are available so teams can test pipelines, sequences, and reporting before purchasing." },
  { q: "Does it integrate with Gmail/Outlook?", a: "Yes. Email sync and calendar integrations keep communication and meetings inside the CRM." },
  { q: "Can I automate follow-ups?", a: "Yes. Use sequences and workflows to trigger emails and tasks at each stage." },
  { q: "Is there a mobile app?", a: "Mobile apps let reps update deals, notes, and activities on the go." },
  { q: "Can I import data?", a: "You can import contacts, companies, and deals via CSV and map fields during import." },
  { q: "Does it support reporting?", a: "Yes. Pipeline, forecast, and activity reports are included; dashboards help managers track performance." },
  { q: "Who is it best for?", a: "SMB and mid-market sales teams that want an approachable CRM with built-in outreach and reporting." },
];

function NutshellCrmToolPage() {
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
        "Nutshell CRM is a sales-focused CRM with pipelines, email sequences, reporting, and integrations. It fits small to mid-market teams wanting ease of use without enterprise bloat.",
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
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "Pipeline views", body: "Board, list, map, and timeline views to track deals and activities by stage." },
    { icon: <Sparkles className="h-5 w-5 text-emerald-500" />, title: "Email sequences", body: "Send and schedule personalized email drips with activity tracking and follow-ups." },
    { icon: <Rocket className="h-5 w-5 text-amber-500" />, title: "Automation", body: "Automated reminders, task creation, and handoffs to reduce manual follow-ups." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "Reporting", body: "Pipeline, forecast, and activity dashboards to measure performance and forecasts." },
    { icon: <Plug className="h-5 w-5 text-purple-500" />, title: "Integrations", body: "Gmail/Outlook sync, calendar, marketing tools, and Zapier connectivity." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Collaboration", body: "Team @mentions, notes, and assignments keep context in one place." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Nutshell CRM review: pricing, features, pros & cons, and alternatives to decide if this CRM fits your sales team."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-200/30 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-sky-200/25 blur-3xl" />
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
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Reviewed by GoDigitalPro - Updated May 2025</span>
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
                  {toolName} brings pipelines, outreach, and reporting together so reps spend more time selling and less time switching tools.
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
              {toolName} is built for SMB sales teams. It supports pipelines, email sequences, contact management, activity tracking, and reporting so reps can work from one place. You can switch between list, board, map, and timeline views to track deals.
            </p>
            <p className="mt-3 text-slate-700">
              Automated reminders and email sequences keep follow-ups moving. Integrations with Gmail/Outlook, calendars, and marketing tools make it practical for teams that want a simple but capable CRM.
            </p>
            <p className="mt-3 text-slate-700">
              Larger enterprises needing deep customization may prefer Salesforce or HubSpot. {toolName} focuses on fast onboarding, predictable pricing, and core sales automation.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for sales teams that want clear pipelines, quick setup, and built-in outreach.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "SMB sales teams moving from spreadsheets to a structured CRM.",
                "Agencies handling deal pipelines and renewals for clients.",
                "Founders and small teams needing follow-up reminders and email sequences.",
                "Revenue teams that need reporting without heavy admin work.",
                "Field reps who benefit from map views and mobile access.",
                "Teams integrating Gmail/Outlook calendars with pipeline tasks.",
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
            <p className="mt-3 text-slate-700">
              The platform focuses on easy pipelines, outreach, and reporting with automation that keeps deals on track.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {featureBlocks.map((feature) => (
                <div key={feature.title} className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center gap-3 text-slate-900">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
                      {feature.icon}
                    </div>
                    <p className="text-lg font-semibold">{feature.title}</p>
                  </div>
                  <p className="mt-3 text-sm text-slate-700">{feature.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--pricing bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pricing</h2>
            <p className="mt-3 text-slate-700">
              Pricing is per user/month with tiers that scale by features and support. Ask for clear limits on contacts, sequences, and reporting features before committing.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  name: "Foundations",
                  price: "$ per user",
                  detail: "Pipelines, contacts, basic automation, email sync.",
                  bestFor: "Small teams starting with CRM.",
                },
                {
                  name: "Pro",
                  price: "$ per user",
                  detail: "Sequences, advanced automation, reports, unlimited pipelines.",
                  bestFor: "SMB teams needing automation and reporting.",
                },
                {
                  name: "Power/Enterprise",
                  price: "Custom",
                  detail: "Advanced permissions, admin controls, dedicated support.",
                  bestFor: "Larger teams wanting SLAs and onboarding help.",
                },
              ].map((tier) => (
                <div key={tier.name} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                  <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">{tier.name}</p>
                  <p className="mt-2 text-2xl font-bold text-slate-900">{tier.price}</p>
                  <p className="mt-2 text-sm text-slate-700">{tier.detail}</p>
                  <p className="mt-3 text-xs font-semibold text-slate-600">Best for: {tier.bestFor}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold text-slate-900">Pricing tip</p>
              <p className="mt-2 text-sm text-slate-700">
                Request ROI benchmarks, clear user limits, and overage rules. Model expected pipeline size and sequence volume to forecast costs.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros and cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <p className="text-lg font-semibold text-emerald-700">Pros</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>Fast setup with intuitive pipelines and list views.</li>
                  <li>Built-in email sequences reduce need for a separate outreach tool.</li>
                  <li>Solid reporting for SMB sales teams.</li>
                  <li>Map view helps field reps and territory planning.</li>
                  <li>Responsive support and clear pricing.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <p className="text-lg font-semibold text-rose-700">Cons</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>Less extensible than Salesforce or HubSpot for complex workflows.</li>
                  <li>Marketing automation is lighter than specialized platforms.</li>
                  <li>Limited customization on fields and workflows compared to enterprise CRMs.</li>
                  <li>Advanced forecasting options are basic for large orgs.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives</h2>
            <p className="mt-3 text-slate-700">Consider these if you need broader suites or different pricing models:</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-xs text-slate-600">{alt.tagline || "Popular CRM alternative"}</p>
                  </div>
                  <Link className="text-sm font-semibold text-emerald-700 hover:text-emerald-500" to={`/tools/${alt.slug}`}>
                    View
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--comparisons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} vs other CRMs</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                { title: "Nutshell vs Pipedrive", betterFor: "Pipedrive offers a broad marketplace; Nutshell focuses on ease and bundled automation.", choose: "Pick Nutshell for quick setup and included sequences. Pick Pipedrive for more add-ons and customization." },
                { title: "Nutshell vs HubSpot", betterFor: "HubSpot spans marketing and service; Nutshell is leaner for sales with clearer pricing.", choose: "Pick Nutshell for predictable sales-focused pricing. Pick HubSpot if you need a broader ecosystem and can manage complexity." },
                { title: "Nutshell vs Close", betterFor: "Close includes a dialer and SMS; Nutshell centers on pipelines and email with map view.", choose: "Pick Nutshell if email-first and map views matter. Pick Close if calling is central to your sales motion." },
                { title: "Nutshell vs Freshsales", betterFor: "Freshsales bundles telephony; Nutshell keeps things simpler for SMB sales teams.", choose: "Pick Nutshell for simplicity. Pick Freshsales if you need built-in calling and service tools." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                  <p className="text-lg font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-2 text-sm text-slate-700">{item.betterFor}</p>
                  <p className="mt-3 text-sm font-semibold text-slate-800">Why choose</p>
                  <p className="mt-1 text-sm text-slate-700">{item.choose}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--worth bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want a sales-first CRM with minimal admin overhead. Seat-based pricing is predictable; add users as adoption grows. Keep data hygiene clean—stages, owners, and fields—so automation fires correctly.
            </p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Define pipeline stages and owners before rollout to keep data clean.",
                "Start with sequences for top segments, then expand.",
                "Use map/timeline views for territory and follow-up planning.",
                "Track reporting adoption and refine required fields for accuracy.",
              ].map((tip) => (
                <div key={tip} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-600" />
                  <p className="text-sm">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--faq bg-white">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} FAQ</h2>
            <div className="mt-6 space-y-3">
              {faqs.map((item, idx) => (
                <AccordionItem key={item.q} question={item.q} answer={item.a} defaultOpen={idx === 0} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section--final bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-2xl font-bold text-slate-900">Final verdict: who is {toolName} best for?</h2>
              <p className="mt-3 text-slate-700">
                {toolName} fits SMB and mid-market sales teams that want fast pipelines, built-in outreach, and reporting without enterprise bloat. If you need complex customization or a huge app marketplace, consider Salesforce or HubSpot—otherwise {toolName} keeps things simple and effective.
              </p>
              <div className="mt-5 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">
                  If {toolName} sounds right for your team, try it here:{" "}
                  <a className="text-emerald-700 hover:text-emerald-500" href={officialUrl}>
                    Visit {toolName}
                  </a>.
                </p>
                <div className="pt-2">
                  <Link
                    to="/tools"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
                  >
                    <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
                  </Link>
                </div>
              </div>
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

export default NutshellCrmToolPage;
