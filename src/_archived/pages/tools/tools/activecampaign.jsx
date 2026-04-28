import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, BarChart3, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "ActiveCampaign";
const slug = "activecampaign";
const category = "Marketing automation & CRM";
const shortPitch =
  "ActiveCampaign is a marketing automation and CRM platform that helps teams orchestrate email, journeys, scoring, and sales pipelines in one stack.";
const pricingSummary = "Plans start around $29/month for Lite; Plus/Professional add CRM, lead scoring, in-depth automation, and reporting; pricing scales with contacts.";
const officialUrl = "https://www.activecampaign.com";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/activecampaign.com",
  gradient: "from-blue-600 via-indigo-600 to-slate-900",
  glow: "shadow-[0_20px_80px_rgba(37,99,235,0.26)]",
};

const alternatives = [
  { name: "Klaviyo", slug: "klaviyo" },
  { name: "Omnisend", slug: "omnisend" },
  { name: "Brevo", slug: "brevo" },
  { name: "ConvertKit", slug: "convertkit" },
  { name: "MailerLite", slug: "mailerlite" },
];

const faqs = [
  { q: "Is ActiveCampaign good for small businesses?", a: "Yes. Lite and Plus plans cover automations, email, and simple CRM features at approachable pricing for small teams." },
  { q: "Does ActiveCampaign include a CRM?", a: "Yes. Built-in pipelines, tasks, deals, and lead scoring let sales teams work alongside marketing automations." },
  { q: "Is there a free plan?", a: "There is no free plan, but trials are available. Pricing scales by contacts and feature tier." },
  { q: "Does ActiveCampaign integrate with ecommerce?", a: "Yes. Native integrations for Shopify, WooCommerce, BigCommerce, and custom carts power product-based automations and win-back flows." },
  { q: "Is ActiveCampaign good for B2B?", a: "Yes. Lead scoring, CRM, and behavioral triggers help B2B teams route leads, trigger nurture, and align sales follow-up." },
  { q: "How are ActiveCampaign automations?", a: "Automations support branching, goals, scoring, event tracking, and webhooks. They’re deeper than most SMB ESPs." },
  { q: "Is ActiveCampaign GDPR compliant?", a: "It provides consent tools, double opt-in, data export/deletion, and DPAs. Teams must configure consent properly for their regions." },
  { q: "Does ActiveCampaign offer reporting?", a: "Yes. Campaign, automation, sales pipeline, and attribution reports help teams see performance end to end." },
];

function ActiveCampaignToolPage() {
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
        "ActiveCampaign combines advanced automation, CRM, and ecommerce triggers in a single platform. It’s strong for lifecycle campaigns, lead scoring, and sales alignment at SMB and mid-market scale.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
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
      icon: <Sparkles className="h-5 w-5 text-blue-500" />,
      title: "Advanced automations",
      body: "Branching logic, goals, scoring, and event tracking let you orchestrate lifecycle journeys beyond basic drip campaigns.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-emerald-500" />,
      title: "Built-in CRM and deals",
      body: "Pipeline management, tasks, and deal stages keep marketing and sales aligned on the same data model.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-amber-500" />,
      title: "Attribution and reporting",
      body: "Campaign, automation, and pipeline reports reveal performance across email, site events, and revenue outcomes.",
    },
    {
      icon: <Plug className="h-5 w-5 text-indigo-500" />,
      title: "Ecommerce and lead data",
      body: "Shopify, WooCommerce, and BigCommerce integrations power product-triggered automations, abandoned cart, and win-backs.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Deliverability and compliance",
      body: "List hygiene tools, opt-in management, and GDPR-ready features help keep sender reputation healthy.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Personalization",
      body: "Conditional content, predictive sending, and segmentation let you tailor journeys for different audiences.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="ActiveCampaign review for 2025 covering pricing, automation depth, CRM, pros & cons, alternatives, and comparisons for marketers and sales teams."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-blue-300/20 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-300/20 blur-3xl" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-blue-200 blur-3xl" />
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
                  ActiveCampaign brings automation depth, CRM, and ecommerce data together so marketing and sales stay aligned on one platform.
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
              ActiveCampaign is a {category.toLowerCase()} platform that merges advanced email automation with a built-in CRM. It emphasizes segmentation, personalization, and sales alignment.
            </p>
            <p className="mt-3 text-slate-700">
              Marketers use it for onboarding sequences, lead nurture, ecommerce win-backs, and dynamic content. Sales teams benefit from lead scoring, pipelines, and automated task assignment.
            </p>
            <p className="mt-3 text-slate-700">Compared to lighter ESPs, ActiveCampaign offers deeper branching, goals, and attribution to keep lifecycle programs accountable.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} fits teams that want automation depth plus CRM alignment.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "B2B teams needing lead scoring, routing, and sales-aligned nurture.",
                "Ecommerce brands running product-triggered flows and win-backs.",
                "Agencies orchestrating lifecycle programs for multiple clients.",
                "SaaS teams wanting onboarding, adoption, and renewal sequences.",
                "Marketers who need branching automations beyond basic drips.",
                "Sales teams wanting pipeline + automation in one place.",
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
            <p className="mt-3 text-slate-700">Automation, CRM, and ecommerce data combine to keep lifecycle programs effective.</p>
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
                  Pricing scales by contacts and tier. Lite covers core email and automation. Plus adds CRM, lead scoring, and SMS. Professional unlocks predictive sending, split automations, and advanced reporting. Enterprise adds
                  custom objects and security controls.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on Plus if you need CRM + scoring; move to Professional for split automations and predictive sending.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Lite</td>
                    <td className="px-4 py-3">Email + basic automation</td>
                    <td className="px-4 py-3">No CRM deals, lighter reporting</td>
                    <td className="px-4 py-3">~$29+/month (contact-based)</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Plus</td>
                    <td className="px-4 py-3">Growing teams needing CRM</td>
                    <td className="px-4 py-3">CRM, lead scoring, SMS, deep forms</td>
                    <td className="px-4 py-3">~$49+/month (contact-based)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Professional</td>
                    <td className="px-4 py-3">Automation-heavy teams</td>
                    <td className="px-4 py-3">Split automations, predictive sending, site messages</td>
                    <td className="px-4 py-3">Custom, contact-based</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Large orgs with security needs</td>
                    <td className="px-4 py-3">Custom objects, SSO/SCIM, uptime SLAs</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Pricing varies with contact count; monitor list hygiene to control costs.</p>
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
                  <li>Deep automations with branching, goals, and events.</li>
                  <li>Integrated CRM keeps marketing and sales aligned.</li>
                  <li>Strong ecommerce triggers for carts, upsells, and win-backs.</li>
                  <li>Predictive sending and personalization improve engagement.</li>
                  <li>Reporting spans campaigns, automations, and pipelines.</li>
                  <li>Extensive integrations with SaaS, commerce, and forms.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>No free plan; costs rise with contact growth.</li>
                  <li>Learning curve for complex automations and CRM setup.</li>
                  <li>UI can feel busy compared to lighter ESPs.</li>
                  <li>Advanced features mostly in higher tiers.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              ActiveCampaign balances automation depth with a built-in CRM. Some teams pick ecommerce-native or creator-first ESPs depending on stack and budget.
            </p>
            <p className="mt-2 text-slate-700">These options all offer email + automation; they differ on commerce focus, pricing, and CRM strength.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same space.</p>
                  </div>
                  <a className="text-sm font-semibold text-sky-600 hover:text-sky-500" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">Here’s how ActiveCampaign compares to two close automation rivals.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Klaviyo</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/omnisend-vs-klaviyo-vs-activecampaign">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Klaviyo is ecommerce-first with tight Shopify roots. ActiveCampaign offers deeper branching, CRM, and B2B-friendly features while still supporting ecommerce triggers.
              </p>
              <p className="mt-2 text-slate-700">Choose Klaviyo for pure DTC and Shopify ecosystems; choose ActiveCampaign for mixed B2B/B2C and sales alignment.</p>
              <p className="mt-2 text-slate-900">Both deliver strong segmentation; AC wins on native CRM and broader automation logic.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Brevo</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/brevo-vs-activecampaign-vs-convertkit">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Brevo (formerly Sendinblue) is budget-friendly with SMS and transactional email. ActiveCampaign costs more but provides richer automation, scoring, and CRM depth.
              </p>
              <p className="mt-2 text-slate-700">Choose Brevo for cost-sensitive campaigns and transactional needs; choose ActiveCampaign when automation complexity and sales collaboration matter.</p>
              <p className="mt-2 text-slate-900">Brevo’s pricing is favorable; AC’s sophistication pays off for lifecycle-heavy teams.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you need automation depth, CRM alignment, and ecommerce triggers in one platform, ActiveCampaign is worth the spend. It reduces stack sprawl and improves lead handling across marketing and sales.
            </p>
            <p className="mt-3 text-slate-700">If you only need simple newsletters, a lighter ESP is cheaper. For heavy enterprise sales, a full CRM plus MAP may suit you better.</p>
            <p className="mt-3 font-semibold text-slate-900">Verdict: A top choice for lifecycle-heavy teams that need automation sophistication without enterprise bloat.</p>
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
            <p>Pick ActiveCampaign if you need sophisticated automation, CRM alignment, and ecommerce triggers in a single platform.</p>
            <p>Consider Klaviyo for Shopify/DTC focus or Brevo/ConvertKit for lighter, budget-friendly email. Pair with your CRM carefully to avoid overlap.</p>
            <p>ActiveCampaign slots well into modern stacks via robust integrations and webhooks.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for your stack, you can try it here:{" "}
              <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>
                Visit {toolName}
              </a>
              .
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-sky-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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

export default ActiveCampaignToolPage;
