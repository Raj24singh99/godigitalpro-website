import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Pabbly Connect";
const slug = "pabbly";
const category = "Workflow Automation";
const shortPitch =
  "Pabbly Connect is a no-code automation platform that lets marketers, founders, and agencies connect SaaS tools, sync data, and automate campaigns without per-task limits.";
const pricingSummary =
  "Paid plans start near $29/month with higher task volumes and multi-step workflows included. No per-workflow caps and generous task counts make it budget-friendly versus Zapier.";
const officialUrl = "https://www.pabbly.com/connect";
const affiliateUrl = `/go/${slug}`;
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/pabbly.com",
  gradient: "from-emerald-500 via-teal-500 to-sky-500",
  glow: "shadow-[0_20px_80px_rgba(34,197,94,0.18)]",
};

const alternatives = [
  { name: "Zapier", slug: "zapier", isComparison: true },
  { name: "Make", slug: "make", isComparison: true },
  { name: "ActiveCampaign", slug: "activecampaign" },
  { name: "HubSpot", slug: "hubspot" },
  { name: "Zoho", slug: "zoho" },
];

const faqs = [
  {
    q: "Is Pabbly Connect free?",
    a: "Pabbly Connect offers a limited free tier to test basic workflows. Paid plans start around $29/month with higher task limits, multi-step workflows, and priority support.",
  },
  {
    q: "Does Pabbly replace Zapier?",
    a: "For many marketing and ops automations, yes. Pabbly’s per-task pricing and growing app library make it a cost-effective Zapier alternative for SMB and agency workflows.",
  },
  {
    q: "Which Pabbly plan fits agencies?",
    a: "Start with the Standard or Pro plan to unlock higher task allowances and multi-step flows. Agencies or teams running multiple brands often choose the Pro tier for volume and folders.",
  },
  {
    q: "Can Pabbly handle webhook-heavy workflows?",
    a: "Yes. You can trigger from webhooks, parse payloads, map fields, and chain conditional steps to push data into CRMs, ESPs, spreadsheets, or ad platforms.",
  },
  {
    q: "Does Pabbly integrate with popular marketing tools?",
    a: "Pabbly supports hundreds of integrations including HubSpot, ActiveCampaign, MailerLite, Google Sheets, Slack, Zoom, and Stripe. Webhooks and API modules fill gaps.",
  },
  {
    q: "How reliable is Pabbly?",
    a: "It’s stable for most marketing and ops use cases. Task queues, replay options, and execution logs help troubleshoot. Mission-critical teams should still monitor key automations.",
  },
  {
    q: "Is Pabbly secure and GDPR-ready?",
    a: "Pabbly encrypts data in transit and at rest, supports role-based access, and provides a DPA for GDPR. Avoid sending sensitive PII unnecessarily and rotate API keys regularly.",
  },
  {
    q: "Can Pabbly manage billing and email marketing too?",
    a: "Yes. The Pabbly suite includes email marketing, subscriptions, and forms. Many teams still pair Connect with their preferred CRM/ESP but use the suite for lightweight needs.",
  },
];

function PabblyToolPage() {
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
        "Pabbly Connect delivers budget-friendly automation with generous task limits, multi-step workflows, and webhook flexibility. It’s a practical Zapier alternative for marketers, founders, and agencies scaling automations without runaway costs.",
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
      icon: <Workflow className="h-5 w-5 text-emerald-500" />,
      title: "Multi-step workflows without hard caps",
      body: "Chain triggers, routers, and actions across many apps while staying within generous task limits. Ideal for leads, onboarding, renewals, and ops clean-up jobs.",
    },
    {
      icon: <Plug className="h-5 w-5 text-sky-500" />,
      title: "Hooks, APIs, and app library",
      body: "Listen to webhooks, hit any REST API, or pick from hundreds of native apps like HubSpot, ActiveCampaign, Sheets, Slack, Zoom, and Stripe to move data automatically.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-indigo-500" />,
      title: "Logs, retries, and mapping clarity",
      body: "Execution logs, replays, and field mapping previews make debugging easier. Conditional steps and paths keep logic organized for marketing ops and CS workflows.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "Suite extras when you need them",
      body: "Access Pabbly’s email marketing, subscriptions, and form tools if you want an all-in-one stack—or keep Connect as the automation core alongside your existing ESP/CRM.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Security and governance",
      body: "Team access, encrypted credentials, and a GDPR-ready DPA help agencies and startups stay compliant while automating customer and billing data flows.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Value-focused pricing",
      body: "Predictable monthly pricing with larger task buckets and no per-zap overages keeps automation costs sane compared to per-task pricing in Zapier.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Detailed Pabbly Connect review for marketers and agencies covering pricing, features, pros, cons, alternatives, and fit for your 2025 automation stack."
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
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-slate-50" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-sky-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-emerald-500" />
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
                  Built for cost-conscious automation, Pabbly Connect makes it easy to ship workflows for leads, onboarding, and ops without per-task surprises.
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
              Pabbly Connect is a {category.toLowerCase()} platform that lets teams automate repetitive tasks, sync data between SaaS tools, and orchestrate campaigns with minimal code.
            </p>
            <p className="mt-3 text-slate-700">
              Marketers and agencies use it to move leads from forms to CRMs, trigger nurture emails, update spreadsheets, and notify sales in chat. Founders use it to wire billing, support, and usage alerts together quickly.
            </p>
            <p className="mt-3 text-slate-700">
              Its differentiator is predictable pricing: larger task buckets and multi-step flows at lower cost than Zapier, while keeping webhooks and API flexibility for custom needs.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Pabbly fits teams that want reliable automations without runaway per-task bills.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Agencies syncing form fills to CRMs, ESPs, and Slack while keeping clients inside task limits.",
                "Marketers automating lead routing, tagging, list cleaning, and webinar follow-ups.",
                "Founders wiring billing events from Stripe into support, product analytics, and finance sheets.",
                "Ecommerce teams handling order notifications, fulfillment updates, and review requests.",
                "Customer success and ops teams using webhooks to trigger onboarding and renewals playbooks.",
                "SaaS teams needing API calls + conditional logic without building internal glue code.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">Pabbly emphasizes affordability, webhook flexibility, and multi-step logic for marketing and ops teams.</p>
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
                  {toolName} offers predictable bundles of tasks with unlimited workflows. Plans include multi-step automations, formatters, routers, and webhook triggers. Higher tiers add more monthly tasks and priority support.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on Standard; upgrade to Pro if you’re an agency or run webhook-heavy flows across brands.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Free</td>
                    <td className="px-4 py-3">Testing simple automations</td>
                    <td className="px-4 py-3">Low monthly tasks, single-step flows</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Standard</td>
                    <td className="px-4 py-3">Small teams and solo founders</td>
                    <td className="px-4 py-3">Multi-step flows, thousands of tasks</td>
                    <td className="px-4 py-3">~$29/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Agencies and multi-brand setups</td>
                    <td className="px-4 py-3">Higher task volumes, folders, priority support</td>
                    <td className="px-4 py-3">~$49–$59/month</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Custom</td>
                    <td className="px-4 py-3">High-volume ops and enterprises</td>
                    <td className="px-4 py-3">Tailored task limits, SLAs, dedicated success</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              If you run always-on lead capture and renewal automations, move off the free plan quickly to avoid throttling. Agencies should model average monthly tasks per client to choose the right tier before onboarding.
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
                  <li>Generous task limits and predictable pricing compared to Zapier.</li>
                  <li>Multi-step workflows with routers, delays, and conditions.</li>
                  <li>Webhook + API modules fill integration gaps quickly.</li>
                  <li>Execution logs, replays, and mapping views improve debugging.</li>
                  <li>Useful suite extras (email, forms, subscriptions) if you need them.</li>
                  <li>Good for agencies managing multiple brands under one account.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>App library is smaller than Zapier’s and Make’s.</li>
                  <li>UI feels less polished; some modules require manual setup.</li>
                  <li>Advanced error handling and branching are improving but less granular than Make.</li>
                  <li>Documentation depth varies across integrations.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Teams often compare Pabbly Connect to Zapier and Make when balancing cost, app coverage, and UI depth. Marketing and ops teams may also consider automation features inside their CRM or ESP stack.
            </p>
            <p className="mt-2 text-slate-700">Each of these options supports triggers/actions, but pricing, governance, and app coverage differ.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Comparison available for a direct look." : "Popular automation or CRM alternative."}</p>
                  </div>
                  <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-500" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">Here’s how Pabbly compares to two automation leaders.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Zapier</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/compare/zapier-vs-make-vs-pabbly">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Zapier still wins on app coverage and polish. Pabbly wins on cost predictability with larger task buckets and unlimited workflows, making it friendlier for agencies that run many small automations.
              </p>
              <p className="mt-2 text-slate-700">
                Choose Zapier for the broadest integrations and refined UX; choose Pabbly for budget control and webhooks/API-first flexibility when you can map data manually.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Make</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/compare/pabbly-vs-zapier-vs-make">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Make excels at complex branching and visualization. Pabbly focuses on straightforward, linear automations with clearer pricing. If you need heavy data manipulation, Make may feel stronger; for fast, affordable flows, Pabbly is easier.
              </p>
              <p className="mt-2 text-slate-900">
                Choose Pabbly when you value predictable billing and quick build-out; choose Make for intricate workflows and visual mapping.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you need reliable automations across marketing, sales, and ops without overpaying per task, Pabbly Connect is an excellent choice. It’s strong for agencies and startups that value predictable billing and webhook flexibility.
            </p>
            <p className="mt-3 text-slate-700">
              If you need the widest app library, advanced branching, or a more polished UI, Zapier or Make may be better. But for most campaign and ops workflows, Pabbly can replace expensive zap/task overages.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Pick {toolName} if you want solid automation coverage and lower costs; look elsewhere only for niche apps or highly complex data transforms.
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
              Choose {toolName} if you want affordable, reliable automation to connect forms, CRMs, ESPs, billing, and chat without runaway per-task bills. It is especially handy for agencies managing multiple clients.
            </p>
            <p>
              Consider Zapier or Make if you require the broadest app coverage, heavy data transforms, or a more visual builder. But for most go-to-market and ops automations, Pabbly provides strong value.
            </p>
            <p>Pabbly fits cleanly into a modern stack: capture leads, push them to CRM, trigger nurture, and update reporting automatically.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for your workflows, you can start here: <a className="text-emerald-700 hover:text-emerald-500" href={officialUrl}>Visit {toolName}</a>.
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-emerald-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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
      {open && (
        <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">
          {answer}
        </div>
      )}
    </div>
  );
}

export default PabblyToolPage;
