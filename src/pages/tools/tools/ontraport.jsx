import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Ontraport";
const slug = "ontraport";
const category = "CRM & Marketing Automation";
const shortPitch = "Ontraport blends CRM, marketing automation, landing pages, membership, and payments for service and digital product businesses.";
const pricingSummary = "Plans billed per user/month with contact limits. Higher tiers add more contacts, advanced automation, and deeper reporting.";
const officialUrl = "https://www.ontraport.com";
const ratingValue = 4.0;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/ontraport.com",
  gradient: "from-indigo-500 via-blue-500 to-emerald-500",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.22)]",
};

const alternatives = [
  { name: "HubSpot", slug: "hubspot" },
  { name: "ActiveCampaign", slug: "activecampaign" },
  { name: "Keap", slug: "keap-infusionsoft" },
  { name: "GoHighLevel", slug: "gohighlevel" },
];

const faqs = [
  { q: "Does Ontraport handle payments?", a: "Yes. You can sell products, manage subscriptions, and gate membership content." },
  { q: "Is there a free trial?", a: "Trials are typically available; confirm current offers with Ontraport." },
  { q: "Can I send SMS?", a: "Yes. SMS is available; check regional availability and per-message costs." },
  { q: "Does it integrate with webinars?", a: "Yes. Integrations and APIs support webinar and event workflows." },
  { q: "How steep is the learning curve?", a: "Expect onboarding time. Start with a core funnel, then expand automation gradually." },
  { q: "Does it support membership sites?", a: "Yes. You can gate content and manage member access and payments." },
  { q: "Can I connect other tools?", a: "Yes. Use native integrations or APIs to sync data with other platforms." },
  { q: "Who is it best for?", a: "Service providers, course creators, and digital product businesses wanting an all-in-one CRM plus automation stack." },
];

function OntraportToolPage() {
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
        "Ontraport is an all-in-one CRM and marketing automation platform. It handles contacts, email/SMS automation, landing pages, membership, and payments for service and digital businesses.",
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
    { icon: <Sparkles className="h-5 w-5 text-indigo-500" />, title: "Visual automation", body: "Build email/SMS sequences, branching logic, and lifecycle workflows." },
    { icon: <Folder className="h-5 w-5 text-emerald-500" />, title: "CRM & pipelines", body: "Manage contacts, deals, tasks, and activities with custom fields." },
    { icon: <Rocket className="h-5 w-5 text-amber-500" />, title: "Pages & forms", body: "Landing pages, forms, and popups without needing custom code." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "Payments & membership", body: "Collect payments, manage subscriptions, and gate content." },
    { icon: <Plug className="h-5 w-5 text-purple-500" />, title: "Integrations", body: "Connect payment gateways, webinars, and other tools; use APIs for custom flows." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Reporting", body: "Attribution, funnel metrics, and subscription insights for optimization." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Ontraport review: pricing, features, pros & cons, and alternatives to decide if its CRM and automation platform fits your business."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-indigo-200/30 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-emerald-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-indigo-700" />
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
                  {toolName} bundles CRM, automation, pages, payments, and membership so you can run funnels end-to-end without stitching many tools.
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
              {toolName} focuses on solopreneurs, agencies, coaches, and digital product businesses that need CRM plus automation without assembling many tools. It provides contact management, visual automations, email/SMS, landing pages, forms, payments, and membership tools.
            </p>
            <p className="mt-3 text-slate-700">
              Reporting covers funnels, attribution, and subscription metrics. The platform trades extreme customization for an integrated stack that is easier to deploy than stitching multiple point solutions.
            </p>
            <p className="mt-3 text-slate-700">
              If you require advanced sales CRM or enterprise-scale marketing, consider pairing or choosing a specialized platform. For service and digital businesses, {toolName} keeps most essentials under one roof.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for service and digital product businesses wanting an integrated CRM and automation stack.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Coaches and course creators selling memberships or digital products.",
                "Agencies and consultants managing leads, nurture, and onboarding.",
                "SMBs needing forms, landing pages, and payment flows without coding.",
                "Teams wanting email/SMS automation connected to CRM data.",
                "Subscription businesses tracking renewals and churn risk.",
                "Operators who prefer a single bill instead of multiple point tools.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-indigo-600" />
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
              {toolName} combines CRM, marketing automation, and payments so you can run funnels end-to-end.
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
              Pricing is per user per month with contact limits. Higher tiers add more contacts, advanced automation, and deeper reporting. Confirm SMS costs, payment fees, and whether support is included.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                { name: "Basic", price: "Entry", detail: "Core CRM, email, forms, simple automations", bestFor: "Solo operators or small teams" },
                { name: "Plus/Pro", price: "Mid-tier", detail: "Advanced automations, pages, payments, SMS, membership", bestFor: "Growing businesses and digital products" },
                { name: "Enterprise", price: "Custom", detail: "More contacts, custom objects, priority support", bestFor: "Higher-volume teams needing SLAs" },
              ].map((tier) => (
                <div key={tier.name} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                  <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">{tier.name}</p>
                  <p className="mt-2 text-2xl font-bold text-slate-900">{tier.price}</p>
                  <p className="mt-2 text-sm text-slate-700">{tier.detail}</p>
                  <p className="mt-3 text-xs font-semibold text-slate-600">Best for: {tier.bestFor}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold text-slate-900">Pricing tip</p>
              <p className="mt-2 text-sm text-slate-700">
                Map contact limits to your list size; budget SMS and email volume. Start with one funnel, validate conversion, then scale seats and contacts.
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
                  <li>All-in-one stack for CRM, automation, pages, payments, and membership.</li>
                  <li>Visual builder makes lifecycle flows approachable.</li>
                  <li>Membership tools built-in—good for courses and communities.</li>
                  <li>Attribution and funnel reports help optimize campaigns.</li>
                  <li>Reduces need to stitch multiple point solutions.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <p className="text-lg font-semibold text-rose-700">Cons</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>UI can feel dense for new users; onboarding time is needed.</li>
                  <li>Less advanced sales features than enterprise CRMs.</li>
                  <li>Contact limits and SMS costs require monitoring.</li>
                  <li>Design flexibility of pages may need custom CSS for polish.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives</h2>
            <p className="mt-3 text-slate-700">Consider these if you need broader suites, different pricing, or deeper sales tools:</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-xs text-slate-600">{alt.tagline || "CRM/automation alternative"}</p>
                  </div>
                  <Link className="text-sm font-semibold text-indigo-700 hover:text-indigo-500" to={`/tools/${alt.slug}`}>
                    View
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--comparisons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} vs other automation tools</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                { title: "Ontraport vs ActiveCampaign", betterFor: "ActiveCampaign excels at email automation; Ontraport adds pages, payments, and membership in one stack.", choose: "Pick Ontraport for all-in-one funnels. Pick ActiveCampaign if you already have pages/payments elsewhere." },
                { title: "Ontraport vs HubSpot", betterFor: "HubSpot has a larger ecosystem and sales features; Ontraport is more cost-effective for SMB digital businesses.", choose: "Pick Ontraport for integrated funnels on a budget. Pick HubSpot for multi-hub growth with deeper sales tools." },
                { title: "Ontraport vs Keap", betterFor: "Keap is similar for SMB CRM/automation; Ontraport often has more robust membership and payment options.", choose: "Pick Ontraport if membership and payments are central. Pick Keap for simpler automation and sales." },
                { title: "Ontraport vs GoHighLevel", betterFor: "GoHighLevel is agency-focused with white-label options; Ontraport targets business owners directly.", choose: "Pick Ontraport for owner-operators. Pick GoHighLevel if you need white-label and client sub-accounts." },
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
              {toolName} is worth it if you want CRM, automation, and payments bundled. It saves stitching costs but requires disciplined setup for data and automations. Start with one funnel, validate delivery, then scale campaigns and membership features.
            </p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Pilot one funnel (lead to sale or signup to activation) before expanding.",
                "Set data hygiene rules for fields, tags, and subscriptions early.",
                "Monitor contact limits, SMS costs, and payment fees to avoid surprises.",
                "Use templates for pages/forms to speed launch and keep branding consistent.",
              ].map((tip) => (
                <div key={tip} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
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
                {toolName} is best for service providers, course creators, and digital product businesses that want CRM, automation, pages, payments, and membership in one platform. If you need deep sales CRM or enterprise-scale marketing, consider pairing with specialized tools—otherwise Ontraport is a pragmatic all-in-one.
              </p>
              <div className="mt-5 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">
                  If {toolName} sounds right for your business, start a trial here:{" "}
                  <a className="text-indigo-700 hover:text-indigo-500" href={officialUrl}>
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

export default OntraportToolPage;
