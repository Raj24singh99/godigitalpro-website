import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, BookOpen, Globe2, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Gorgias";
const slug = "gorgias";
const category = "Ecommerce Helpdesk";
const shortPitch =
  "Gorgias is a helpdesk built for ecommerce, unifying email, chat, social, and SMS with Shopify/Magento/Woo data to personalize support and drive revenue.";
const pricingSummary =
  "Plans start near $10/month with ticket-based pricing; higher tiers add more tickets, automation, and features. Pricing scales by ticket volume and channels.";
const officialUrl = "https://www.gorgias.com";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/gorgias.com",
  gradient: "from-indigo-500 via-blue-500 to-purple-500",
  glow: "shadow-[0_20px_80px_rgba(99,102,241,0.24)]",
};

const alternatives = [
  { name: "Zendesk", slug: "zendesk" },
  { name: "Freshdesk", slug: "freshdesk" },
  { name: "Help Scout", slug: "helpscout" },
  { name: "Intercom", slug: "intercom" },
  { name: "Gladly", slug: "gladly" },
];

const faqs = [
  {
    q: "Who is Gorgias built for?",
    a: "Ecommerce brands, especially Shopify stores, that want support agents to see order data and perform actions without leaving the helpdesk.",
  },
  {
    q: "Which channels does Gorgias support?",
    a: "Email, chat, social comments/DMs, and SMS—centralized into one inbox.",
  },
  {
    q: "Can agents see Shopify data?",
    a: "Yes. Shopify, Magento, WooCommerce integrations surface order and customer data; agents can refund, cancel, or reorder from within tickets.",
  },
  {
    q: "Does Gorgias automate responses?",
    a: "Macros, rules, and intent detection help automate common replies. AI tools assist with draft responses and classification.",
  },
  {
    q: "How is pricing structured?",
    a: "Ticket-based with plan thresholds. Upgrades increase ticket limits and add features; overages may apply if you exceed ticket counts.",
  },
  {
    q: "Does it support multiple stores?",
    a: "Yes. Multi-store and multi-language support are available depending on plan.",
  },
  {
    q: "Are there analytics?",
    a: "Reporting covers response/resolution times, agent performance, and revenue attributed to support.",
  },
  {
    q: "Is there a phone channel?",
    a: "Gorgias focuses on email/chat/social/SMS; for voice you may need integrations or separate tools.",
  },
];

function GorgiasToolPage() {
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
        "Gorgias is an ecommerce helpdesk that unifies support channels and surfaces store data so agents can resolve tickets, issue refunds, and drive revenue without switching tools.",
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
      icon: <BookOpen className="h-5 w-5 text-indigo-500" />,
      title: "Unified inbox",
      body: "Email, chat, social, and SMS in one place with customer context and order data.",
    },
    {
      icon: <Plug className="h-5 w-5 text-blue-500" />,
      title: "Shopify/Magento/Woo integrations",
      body: "View and act on orders—refund, cancel, reorder—without leaving the ticket.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Automation and AI",
      body: "Macros, rules, intent detection, and AI replies speed up common responses.",
    },
    {
      icon: <Globe2 className="h-5 w-5 text-purple-500" />,
      title: "Multi-store and localization",
      body: "Manage multiple stores and languages from one workspace (by plan).",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Analytics and revenue attribution",
      body: "Track response times, agent performance, and revenue influenced by support.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-400" />,
      title: "Macros and templates",
      body: "Reusable responses with dynamic variables ensure consistent, fast replies.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Gorgias review for ecommerce support teams: pricing, features, pros & cons, and alternatives for a Shopify-friendly helpdesk."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-purple-200/30 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-indigo-500" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-amber-100 blur-3xl" />
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
                  Gorgias pulls in ecommerce data so agents can resolve tickets faster and turn support into a revenue channel.
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
              {toolName} is an {category.toLowerCase()} that unifies support channels and ecommerce data. Agents can view orders, edit them, and respond faster with macros and automation.</p>
            <p className="mt-3 text-slate-700">
              Shopify-first but supports Magento, WooCommerce, and others. Designed to reduce handle time and drive revenue from support interactions.
            </p>
            <p className="mt-3 text-slate-700">
              Automation rules and AI help triage, tag intent, and suggest replies for common questions like order status and returns.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} fits ecommerce support teams that need fast access to order data and multi-channel support.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Shopify brands wanting order data inside the helpdesk.",
                "Support teams handling email, chat, social, and SMS in one inbox.",
                "Stores needing macros and automation for repetitive questions.",
                "Teams measuring revenue and CSAT impact of support.",
                "Multi-store or multi-language ecommerce operations.",
                "Brands that want agents to process refunds/exchanges without leaving the ticket.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-indigo-400" />
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
              {toolName} emphasizes ecommerce context, automation, and multi-channel support to speed resolutions and improve CX.</p>
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
                  Pricing is ticket-based. Plans start around $10/month with ticket thresholds; higher tiers increase ticket counts, automation, and features. Overages may apply if you exceed limits.</p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Pick a plan that matches ticket volume; upgrade if automation, multi-store, or higher limits are needed.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Basic</td>
                    <td className="px-4 py-3">Smaller stores</td>
                    <td className="px-4 py-3">Lower ticket limits, core channels</td>
                    <td className="px-4 py-3">~$10+/month (ticket-based)</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Growing ecommerce brands</td>
                    <td className="px-4 py-3">More tickets, advanced automation</td>
                    <td className="px-4 py-3">Higher/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Advanced/Enterprise</td>
                    <td className="px-4 py-3">High-volume, multi-store orgs</td>
                    <td className="px-4 py-3">Highest limits, multi-store, SLA</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Model costs by monthly tickets, channels, and multi-store needs. Overages and add-ons apply if you exceed ticket thresholds.</p>
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
                  <li>Deep Shopify and ecommerce integrations.</li>
                  <li>Unified inbox for email/chat/social/SMS.</li>
                  <li>Macros, rules, and AI to automate common replies.</li>
                  <li>Agents can act on orders without leaving tickets.</li>
                  <li>Revenue attribution for support interactions.</li>
                  <li>Multi-store and multi-language support.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Pricing tied to ticket volume; overages possible.</li>
                  <li>Voice support requires integrations or separate tools.</li>
                  <li>Best for ecommerce—general B2B support may prefer other helpdesks.</li>
                  <li>Advanced automation and features on higher tiers.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              {toolName} competes with ecommerce-focused and general helpdesks. Choose based on ecommerce depth, channels, and automation needs.</p>
            <p className="mt-2 text-slate-700">Every link below goes to a live tool page—no broken routes.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
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
            <p className="text-slate-700">Compare {toolName} to other helpdesks.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Zendesk</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/gorgias-vs-zendesk">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Zendesk is a general helpdesk with broad integrations and voice. {toolName} is specialized for ecommerce with native order actions and Shopify depth.</p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} for Shopify-centric support; choose Zendesk for broader channel mix and non-ecommerce use cases.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Help Scout</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/gorgias-vs-helpscout">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Help Scout is simple and friendly for general support. {toolName} focuses on ecommerce workflows and revenue attribution.</p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} for ecommerce data/actions; choose Help Scout for lightweight, non-ecommerce support needs.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you run an ecommerce brand (especially on Shopify) and want order-aware, multi-channel support with automation, {toolName} is worth it. It can reduce handle time and drive sales from support.</p>
            <p className="mt-3 text-slate-700">
              If you need advanced voice support or broader B2B workflows, compare Zendesk, Intercom, or Freshdesk. Factor ticket volume into pricing to avoid overages.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> {toolName} is a top pick for ecommerce helpdesks where order actions and automation are critical.</p>
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
              Choose {toolName} if you need ecommerce-focused support with Shopify data/actions, automation, and unified channels.</p>
            <p>
              Consider Zendesk or Intercom for broader channel/voice needs, or Help Scout for simple non-ecommerce support; Freshdesk is a budget-friendly alternative.</p>
            <p>{toolName} helps ecommerce teams resolve tickets faster while keeping revenue in view.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here: <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>Visit {toolName}</a>.
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
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w/full items-center justify-between px-4 py-3 text-left text-slate-900"
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

export default GorgiasToolPage;
