import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Tidio for Shopify";
const slug = "tidio-for-shopify";
const category = "Shopify chat & AI";
const shortPitch = "Tidio’s Shopify app adds AI chat, automation, and order-aware support so stores can reply faster and recover more sales.";
const pricingSummary =
  "Free and paid tiers by seats and usage. Higher plans add AI/message limits, automation, product/order data access, and more triggers for Shopify stores.";
const officialUrl = "https://apps.shopify.com/tidio-live-chat";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/tidio.com",
  gradient: "from-emerald-500 via-blue-500 to-purple-500",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.24)]",
};

const alternatives = [
  { name: "Gorgias", slug: "gorgias" },
  { name: "Zendesk", slug: "zendesk" },
  { name: "Intercom", slug: "intercom" },
  { name: "Drift AI", slug: "drift-ai" },
  { name: "Freshdesk", slug: "freshdesk" },
];

const faqs = [
  {
    q: "What is Tidio for Shopify?",
    a: "It’s the Tidio app for Shopify stores, combining AI chat, automation, and order-aware support to answer customers faster and drive conversions.",
  },
  {
    q: "Who is it for?",
    a: "Shopify merchants who want live chat plus AI automations for FAQs, order status, and pre-sale questions.",
  },
  {
    q: "Does it pull order data?",
    a: "Yes. It can surface order details to agents/AI for context. Verify permissions and test before going live.",
  },
  {
    q: "How is pricing structured?",
    a: "Free plan plus paid tiers that lift AI limits, add triggers, integrations, and advanced automation. Costs scale with seats and volume.",
  },
  {
    q: "Can it boost sales?",
    a: "Yes, by answering pre-sale questions, recovering carts, and triggering offers—results depend on flows and follow-up.",
  },
  {
    q: "Is human oversight needed?",
    a: "Yes. Keep humans for complex cases, policy topics, and escalations.",
  },
  {
    q: "Does it support multilingual chat?",
    a: "Yes, but test translations and edge cases with live agents.",
  },
  {
    q: "How does it integrate?",
    a: "Native Shopify app plus webhooks/CRMs. Ensure pixels/analytics capture conversions from chat flows.",
  },
];

function TidioForShopifyToolPage() {
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
        "Tidio for Shopify adds AI chat, automation, and order-aware replies. Great for store support and pre-sale questions; success relies on QA, flows, and human fallback.",
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
      title: "AI answers",
      body: "Automate FAQs and suggest replies for agents, tuned to Shopify data and policies.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Order context",
      body: "Pull order/shipping info into chat so reps and bots can respond with specifics.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Automation flows",
      body: "Triggers for cart recovery, promos, lead capture, and routing without code.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Human handoff",
      body: "Escalate to agents for refunds, policy questions, or edge cases.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Omnichannel",
      body: "Chat across web, email, and socials; maintain consistent SLAs.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Shopify-native",
      body: "Install via Shopify App Store; sync with CRM/help desk using integrations or webhooks.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Tidio for Shopify review: pricing, features, pros & cons, and alternatives to decide if Shopify AI chat fits your store."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-purple-200/25 blur-3xl" />
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
                  {toolName} brings AI chat and Shopify context to your store—use it to answer faster, recover carts, and hand off complex cases to humans.
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
              {toolName} is the Shopify app for Tidio, combining AI chat, automations, and order-aware responses. It helps stores handle support and pre-sale questions without growing headcount.
            </p>
            <p className="mt-3 text-slate-700">
              Treat it as an assist layer: map flows for shipping, refunds, and product FAQs, and keep humans for exceptions. Test order lookups and ensure policies are respected.
            </p>
            <p className="mt-3 text-slate-700">Wire it into CRM/help desk and analytics so conversations convert and are attributed correctly.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for Shopify stores that need chat + AI for pre/post-purchase support and recovery.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Shopify merchants handling shipping/return FAQs.",
                "Stores running promos and recovering abandoned carts.",
                "Support teams wanting order-aware chat without custom code.",
                "Lean teams needing 24/7 coverage with human fallback.",
                "Brands capturing leads and collecting feedback in-chat.",
                "Operators who want CRM/help desk sync for conversations.",
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
              {toolName} focuses on AI answers, Shopify context, automations, omnichannel chat, and integrations for store teams.
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
                  {toolName} has free and paid tiers. Paid plans increase AI/message limits, add triggers, and unlock more automation and integrations. Costs scale with usage and seats.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Test free; move to a mid tier when you need order-aware replies, higher AI limits, and advanced triggers for cart recovery.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Free</td>
                    <td className="px-4 py-3">Light stores/testing</td>
                    <td className="px-4 py-3">Core chat, limited AI</td>
                    <td className="px-4 py-3">Validate workflows</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Standard</td>
                    <td className="px-4 py-3">Growing stores</td>
                    <td className="px-4 py-3">Higher AI limits, order data, automations</td>
                    <td className="px-4 py-3">Recommended starting tier</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Advanced</td>
                    <td className="px-4 py-3">High volume</td>
                    <td className="px-4 py-3">Highest limits, advanced triggers, support</td>
                    <td className="px-4 py-3">Use when scaling support and recovery</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Track deflection, conversion, and CSAT. QA order lookups and refund flows; keep humans on sensitive topics and ensure consent where needed.
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
                  <li>Shopify-native install and order context.</li>
                  <li>AI answers plus human handoff.</li>
                  <li>Automation for FAQs, recovery, and lead capture.</li>
                  <li>Omnichannel chat with triggers.</li>
                  <li>Integrations and webhooks for CRM/help desk.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>AI accuracy and policy compliance need monitoring.</li>
                  <li>Costs grow with usage and seats.</li>
                  <li>Complex flows require setup and testing.</li>
                  <li>Order data access requires careful permissions and QA.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other Shopify support and chat tools to match your automation depth and support stack.
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
            <p className="text-slate-700">See how {toolName} compares to other Shopify-focused support tools.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Gorgias</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/gorgias">
                  View Gorgias
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Gorgias is a full help desk for Shopify with macros and deep ticketing; {toolName} excels at onsite chat and AI flows. Choose based on whether you lead with tickets or onsite chat.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Zendesk</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/zendesk">
                  View Zendesk
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Zendesk offers enterprise ticketing and knowledge bases; {toolName} is faster to deploy for Shopify chat. Pick based on team size and workflow complexity.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you run a Shopify store and want AI-assisted chat with order context to boost support speed and sales, backed by human oversight.
            </p>
            <p className="mt-3 text-slate-700">
              Keep policies and fallbacks clear, QA automations regularly, and connect analytics to measure deflection and revenue impact.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A strong Shopify chat option with AI and automation—best with disciplined QA and integrations to capture value.
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
              Choose {toolName} if you want Shopify-native chat with AI answers, order context, and automation that can recover carts and reduce tickets.
            </p>
            <p>
              Consider Gorgias for deeper ticketing or Zendesk for enterprise CX; use {toolName} when you prioritize onsite chat speed and Shopify context.
            </p>
            <p>{toolName} can lift CSAT and revenue—keep humans available and monitor flows for compliance and accuracy.</p>
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

export default TidioForShopifyToolPage;
