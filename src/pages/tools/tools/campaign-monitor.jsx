import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Campaign Monitor";
const slug = "campaign-monitor";
const category = "Email Marketing";
const shortPitch = "Campaign Monitor is an email marketing platform for building campaigns, automation journeys, and reports with an easy drag-and-drop builder.";
const pricingSummary =
  "List-size based pricing with essentials and advanced tiers. Higher plans add marketing automation, transactional email, and better segmentation.";
const officialUrl = "https://www.campaignmonitor.com";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/campaignmonitor.com",
  gradient: "from-emerald-500 via-teal-500 to-blue-600",
  glow: "shadow-[0_20px_80px_rgba(52,211,153,0.24)]",
};

const alternatives = [
  { name: "Mailerlite", slug: "mailerlite" },
  { name: "ConvertKit", slug: "convertkit" },
  { name: "SendGrid", slug: "sendgrid" },
  { name: "Constant Contact", slug: "constant-contact" },
  { name: "Mailgun", slug: "mailgun" },
];

const faqs = [
  {
    q: "What is Campaign Monitor?",
    a: "Campaign Monitor is an email marketing platform for designing campaigns, building automation journeys, and tracking performance.",
  },
  {
    q: "Who is it for?",
    a: "Marketing teams, nonprofits, and SMBs that want a straightforward email builder, list management, and automation without heavy complexity.",
  },
  {
    q: "Does Campaign Monitor offer automation?",
    a: "Yes. Journeys can be triggered by signups, engagement, or ecommerce events. Complexity is moderate compared to enterprise suites.",
  },
  {
    q: "How is pricing structured?",
    a: "Pricing is based on list size and feature tier. Automation, better segmentation, and transactional email may require higher tiers or add-ons.",
  },
  {
    q: "Can it handle transactional email?",
    a: "Transactional email is available via add-ons or integrations. Evaluate deliverability and setup requirements.",
  },
  {
    q: "Does it support SMS?",
    a: "Campaign Monitor focuses on email. SMS/multichannel may require additional tools or integrations.",
  },
  {
    q: "How is deliverability?",
    a: "Deliverability depends on list quality, authentication (SPF/DKIM/DMARC), and sending practices. Warm up domains and maintain hygiene.",
  },
  {
    q: "Is migration easy?",
    a: "Importing lists and templates is supported. Plan DNS/auth setup, segment mapping, and template recreation carefully.",
  },
];

function CampaignMonitorToolPage() {
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
        "Campaign Monitor provides an easy email builder, list management, and moderate automation. It is reliable for SMB campaigns; plan deliverability and list hygiene to maximize results.",
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
      icon: <Sparkles className="h-5 w-5 text-emerald-500" />,
      title: "Email builder",
      body: "Drag-and-drop templates with branding controls and personalization tokens.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-amber-500" />,
      title: "Automation journeys",
      body: "Trigger emails based on signups, behaviors, and segments with branching logic.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Segmentation",
      body: "Create segments using engagement, custom fields, ecommerce data, or tags.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Deliverability tools",
      body: "Support for SPF, DKIM, DMARC, and list hygiene to protect sender reputation.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Integrations",
      body: "Connect with CRMs, ecommerce platforms, and forms to sync contacts and events.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Reporting",
      body: "Campaign performance dashboards, link tracking, and A/B testing for subject lines.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Campaign Monitor review: features, pricing, pros & cons, and alternatives for email marketing and automation."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-teal-200/25 blur-3xl" />
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
                  {toolName} makes email building approachable. Pair it with solid list hygiene and domain authentication to maximize deliverability.
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
              {toolName} is an email marketing platform with a visual builder, journeys, segmentation, and reporting. It aims to balance ease of use with enough automation for most SMB programs.
            </p>
            <p className="mt-3 text-slate-700">
              Use it for newsletters, onboarding series, and behavior-triggered journeys. Plan authentication and consent practices to keep deliverability healthy.
            </p>
            <p className="mt-3 text-slate-700">Integrate with your CRM or ecommerce tools to sync contacts and drive relevant targeting.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams that want approachable email marketing with automation and clean templates.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Marketing teams running newsletters, promos, and lifecycle journeys.",
                "Nonprofits and associations sending updates and donation drives.",
                "Ecommerce brands sending post-purchase and winback sequences.",
                "Agencies managing email for SMB clients with approachable UX.",
                "Founders who need reliable email without enterprise complexity.",
                "Teams that prioritize deliverability and list hygiene practices.",
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
              {toolName} focuses on approachable email design, segmentation, automation journeys, and deliverability fundamentals.
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
                  {toolName} charges by list size and feature tier. Higher tiers unlock advanced automation, better segmentation, transactional email, and premium support.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with essentials; move up when you need complex journeys, transactional sends, or higher volumes.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Essentials</td>
                    <td className="px-4 py-3">Newsletters & simple journeys</td>
                    <td className="px-4 py-3">Core builder, basic automation, reporting</td>
                    <td className="px-4 py-3">Great for starters</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Smart/Advanced</td>
                    <td className="px-4 py-3">Lifecycle programs</td>
                    <td className="px-4 py-3">More automation, segmentation, A/B testing</td>
                    <td className="px-4 py-3">Watch list growth vs. cost</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Premier/Enterprise</td>
                    <td className="px-4 py-3">High volume teams</td>
                    <td className="px-4 py-3">Highest volumes, deliverability support, services</td>
                    <td className="px-4 py-3">Best for scale and support SLAs</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Factor in list hygiene, DNS setup, and potential add-ons (transactional, SMS, integrations) when budgeting.</p>
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
                  <li>Approachable drag-and-drop email builder.</li>
                  <li>Solid segmentation and automation for SMB needs.</li>
                  <li>Deliverability support with authentication guidance.</li>
                  <li>Reports and A/B testing for optimization.</li>
                  <li>Integrations for CRM and ecommerce data sync.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Pricing rises with list size and volume.</li>
                  <li>Advanced journeys and multi-channel are limited vs. enterprise suites.</li>
                  <li>Transactional email may require add-ons or extra setup.</li>
                  <li>Template customization is simpler than headless/custom stacks.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other email platforms to match your automation depth, deliverability support, and budget.
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
            <p className="text-slate-700">See how {toolName} stacks against other email platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs ConvertKit</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/convertkit">
                  View ConvertKit
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ConvertKit is creator-focused with strong tagging and commerce for digital products. {toolName} suits broader SMB needs with polished templates and reporting.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Mailerlite</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/mailerlite">
                  View Mailerlite
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Mailerlite offers cost-effective plans and simple automation. {toolName} provides polished design tools and robust reporting—pick based on budget and design needs.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want an approachable email builder with solid segmentation and automation, without heavy enterprise overhead.
            </p>
            <p className="mt-3 text-slate-700">
              Budget for list growth, authentication setup, and possible transactional add-ons. Keep list hygiene and consent practices strong.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A reliable email platform for SMB teams; best when paired with good deliverability practices and clear lifecycle strategy.
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
              Choose {toolName} if you want polished email templates, approachable automation, and solid reporting without enterprise bloat.
            </p>
            <p>
              Consider ConvertKit for creator commerce or Mailerlite for budget-friendly plans; use {toolName} when deliverability guidance and design polish matter.
            </p>
            <p>{toolName} keeps email programs manageable—pair it with list hygiene and authentication to maximize results.</p>
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

export default CampaignMonitorToolPage;
