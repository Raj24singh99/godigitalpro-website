import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Act-On";
const slug = "act-on";
const category = "Marketing Automation";
const shortPitch =
  "Act-On is a marketing automation platform for B2B teams to launch campaigns, nurture leads, score prospects, and sync pipeline with CRM.";
const pricingSummary =
  "Pricing is tiered by contacts and functionality (automation, ABM, SMS, AI features). Expect onboarding costs and annual contracts for most plans.";
const officialUrl = "https://www.act-on.com";
const ratingValue = 4.1;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/act-on.com",
  gradient: "from-emerald-500 via-teal-500 to-blue-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.26)]",
};

const alternatives = [
  { name: "HubSpot", slug: "hubspot" },
  { name: "ActiveCampaign", slug: "activecampaign" },
  { name: "MailerLite", slug: "mailerlite" },
  { name: "Omnisend", slug: "omnisend" },
  { name: "Pabbly", slug: "pabbly" },
];

const faqs = [
  {
    q: "What does Act-On do?",
    a: "Act-On provides marketing automation: email campaigns, lead scoring, nurture journeys, forms, landing pages, and analytics that connect to CRMs.",
  },
  {
    q: "Who is Act-On best for?",
    a: "B2B marketing teams that need lifecycle automation, lead scoring, and CRM alignment without the overhead of enterprise suites.",
  },
  {
    q: "Does Act-On integrate with CRM?",
    a: "Yes. It integrates with CRMs like Salesforce and Microsoft Dynamics to sync leads, activities, and scores.",
  },
  {
    q: "Does it support SMS or webinars?",
    a: "Act-On offers SMS and webinar integrations depending on plan and region. Check add-ons and local compliance requirements.",
  },
  {
    q: "Is there lead scoring?",
    a: "Yes. You can configure behavioral and demographic scoring to prioritize sales-ready leads and push scores to CRM.",
  },
  {
    q: "Is onboarding required?",
    a: "Most plans include or require onboarding to set up integrations, scoring, and journeys correctly.",
  },
  {
    q: "How does pricing work?",
    a: "Pricing is based on contact volume and features. Higher tiers unlock advanced automation, ABM, and analytics.",
  },
  {
    q: "Does Act-On have ABM features?",
    a: "Act-On supports account-based targeting, scoring, and reporting, especially when paired with CRM data.",
  },
];

function ActOnToolPage() {
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
        "Act-On is a B2B marketing automation platform focused on lead nurture, scoring, and CRM alignment. It suits teams that want robust campaigns without the complexity of enterprise suites.",
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
      title: "Journeys & nurture",
      body: "Build drip campaigns, branching nurture paths, and triggered emails/SMS based on behavior and attributes.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Lead scoring",
      body: "Configure behavioral and demographic scoring to surface sales-ready leads and sync scores to CRM.",
    },
    {
      icon: <Plug className="h-5 w-5 text-indigo-500" />,
      title: "CRM integrations",
      body: "Two-way sync with CRMs like Salesforce and Dynamics to align marketing engagement with pipeline.",
    },
    {
      icon: <Folder className="h-5 w-5 text-teal-500" />,
      title: "Forms & landing pages",
      body: "Create gated content experiences, progressive profiling, and track conversions without heavy dev work.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Compliance & consent",
      body: "Tools for consent capture, list hygiene, and preference centers to support GDPR/CCPA compliance.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Analytics & attribution",
      body: "Measure campaign performance, funnel impact, and pipeline contribution to prove revenue influence.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Act-On review for B2B marketers: pricing, automation features, pros & cons, and alternatives so you can pick the right marketing automation stack."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-300/20 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-sky-300/20 blur-3xl" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-emerald-200 blur-3xl" />
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
                  {toolName} helps B2B teams nurture, score, and route leads with CRM alignment and compliance controls built in.
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
              {toolName} is a marketing automation platform for B2B teams. It unifies email, journeys, scoring, landing pages, and analytics to grow pipeline and align with sales.
            </p>
            <p className="mt-3 text-slate-700">
              Use it to create nurture streams, capture leads, and measure campaign impact on revenue. CRM integrations keep marketing data flowing to sales and back.
            </p>
            <p className="mt-3 text-slate-700">
              Consent tools, list hygiene, and preference centers help maintain deliverability and compliance.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for B2B marketing teams that need lifecycle automation plus CRM alignment.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Demand gen teams running nurture journeys and scoring.",
                "B2B marketers needing CRM-integrated forms and landing pages.",
                "Sales teams that want qualified, scored leads passed to CRM automatically.",
                "RevOps teams looking for attribution and pipeline impact reporting.",
                "Companies doing ABM who need account-level targeting and engagement.",
                "Teams that require consent management and deliverability controls.",
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
              {toolName} focuses on lead lifecycle, scoring, and CRM alignment so marketing can prove revenue impact.
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
                  {toolName} is priced by contact volume and features. Higher tiers include advanced automation, ABM, SMS, and deeper analytics. Expect annual contracts and onboarding costs.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with core automation + scoring; add ABM/SMS once fundamentals are proven.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Core automation</td>
                    <td className="px-4 py-3">Small/mid B2B teams</td>
                    <td className="px-4 py-3">Email, journeys, forms, scoring</td>
                    <td className="px-4 py-3">Contact-based pricing</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">ABM & SMS</td>
                    <td className="px-4 py-3">Teams running ABM or SMS</td>
                    <td className="px-4 py-3">Account targeting, SMS, deeper analytics</td>
                    <td className="px-4 py-3">May require higher tier</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Larger teams</td>
                    <td className="px-4 py-3">Advanced governance, SLAs, training</td>
                    <td className="px-4 py-3">Custom contract</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Ask for deliverability support, CRM integration scope, and migration help. Negotiate contact tiers and ramp periods.
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
                  <li>Strong nurture, scoring, and CRM alignment for B2B.</li>
                  <li>Forms and landing pages without heavy dev work.</li>
                  <li>ABM and SMS options for multi-channel programs.</li>
                  <li>Consent and deliverability tools built in.</li>
                  <li>Clear focus on pipeline contribution and reporting.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Pricing is contact-based and can climb with scale.</li>
                  <li>Requires structured onboarding and CRM setup.</li>
                  <li>Interface can feel utilitarian versus newer tools.</li>
                  <li>Advanced ABM/SMS may require higher tiers or add-ons.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other marketing automation platforms to match your budget, CRM, and channel mix.
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
            <p className="text-slate-700">See how {toolName} stacks up against other automation platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs HubSpot</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/hubspot">
                  View HubSpot
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                HubSpot offers broader CRM/marketing breadth; {toolName} focuses on B2B automation and scoring. Choose based on whether you need a full suite or focused automation.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs ActiveCampaign</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/activecampaign">
                  View ActiveCampaign
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ActiveCampaign is flexible and cost-effective for SMBs; {toolName} leans into B2B scoring, CRM alignment, and ABM. Pick based on your CRM depth and channel mix.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it for B2B teams that want structured nurture, scoring, and CRM alignment without adopting a heavier enterprise suite.
            </p>
            <p className="mt-3 text-slate-700">
              Teams with smaller lists or simple automations might prefer lighter/cheaper tools; those needing ABM and deep CRM sync will benefit more from {toolName}.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A solid pick for B2B lifecycle automation with scoring and compliance built in.
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
              Choose {toolName} if you need B2B-focused automation, scoring, and CRM alignment with compliance controls. It helps prove pipeline impact from marketing.
            </p>
            <p>
              Consider HubSpot for an all-in-one suite or ActiveCampaign/MailerLite for budget-friendly automations. Omnisend fits ecommerce; {toolName} fits B2B.
            </p>
            <p>{toolName} keeps marketing, sales, and ops aligned on qualified leads and revenue.</p>
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

export default ActOnToolPage;
