import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Tidio AI";
const slug = "tidio-ai";
const category = "AI customer support";
const shortPitch = "Tidio AI adds automated replies, routing, and chatbots to help ecommerce and support teams resolve questions faster.";
const pricingSummary =
  "Free and paid tiers by seats and features. Higher plans add AI limits, automation, integrations, and more triggers for support and sales chat.";
const officialUrl = "https://www.tidio.com";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/tidio.com",
  gradient: "from-indigo-500 via-blue-500 to-emerald-500",
  glow: "shadow-[0_20px_80px_rgba(99,102,241,0.24)]",
};

const alternatives = [
  { name: "Intercom", slug: "intercom" },
  { name: "Drift AI", slug: "drift-ai" },
  { name: "Zendesk AI Agents", slug: "zendesk-ai-agents" },
  { name: "Freshdesk", slug: "freshdesk" },
  { name: "Gorgias", slug: "gorgias" },
];

const faqs = [
  {
    q: "What is Tidio AI?",
    a: "Tidio AI is an AI layer on Tidio live chat that automates answers, routes tickets, and assists agents for faster support and sales responses.",
  },
  {
    q: "Who is it for?",
    a: "Ecommerce stores and support teams needing faster replies, automated FAQs, and routing without hiring more agents.",
  },
  {
    q: "Does it integrate with ecommerce platforms?",
    a: "Yes. Tidio integrates with Shopify and other platforms to pull order info and provide contextual replies.",
  },
  {
    q: "How is pricing structured?",
    a: "Free plan plus paid tiers that lift AI/message limits, add automation, triggers, and integrations. Costs scale with volume and seats.",
  },
  {
    q: "Is human oversight needed?",
    a: "Yes. AI responses should be monitored, with fallbacks to humans for complex or sensitive queries.",
  },
  {
    q: "Can it deflect FAQs?",
    a: "Yes. Build flows and automated answers to common questions to reduce ticket volume.",
  },
  {
    q: "Does it support multilingual chat?",
    a: "Yes, but test translations and ensure humans handle edge cases.",
  },
  {
    q: "Is data safe?",
    a: "Follow Tidio's policy and avoid sharing sensitive PII in prompts. Set role-based access for agents.",
  },
];

function TidioAIToolPage() {
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
        "Tidio AI brings automated replies and chatbots to support and ecommerce teams. It speeds responses and deflects FAQs but still needs human oversight and solid workflows.",
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
      title: "AI chat & replies",
      body: "Automate common questions with AI-powered answers and suggested replies for agents.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Workflows & triggers",
      body: "Build flows for routing, lead capture, and FAQ deflection with no-code automations.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Ecommerce context",
      body: "Pull order and customer data from Shopify/other platforms to personalize responses.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Human fallback",
      body: "Hand off to live agents for complex cases; set rules for sensitive topics.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Omnichannel",
      body: "Chat widgets, email, and socials supported; maintain SLAs across channels.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Integrations",
      body: "Connect to Shopify, CRMs, and help desks; use webhooks for custom workflows.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Tidio AI review: pricing, features, pros & cons, and alternatives so you can evaluate automated chat for support and ecommerce."
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-indigo-100 blur-3xl" />
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
                  {toolName} automates replies and routes chats—use it to deflect FAQs and support agents, with human review for edge cases.
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
              {toolName} is an AI-assisted live chat platform that automates FAQs, suggests replies, and routes conversations to the right agents. It’s popular with ecommerce stores that want faster support and lead capture.
            </p>
            <p className="mt-3 text-slate-700">
              Treat it as an assist layer: set clear rules, test flows, and keep humans on standby for complex cases. Align AI answers with refund, shipping, and compliance policies.
            </p>
            <p className="mt-3 text-slate-700">Set up tracking and CRM/help desk integrations so captured data stays usable across teams.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for ecommerce and support teams needing AI help to deflect tickets and speed responses.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Shopify stores handling pre/post-purchase questions.",
                "Support teams reducing repetitive FAQs with bots.",
                "Sales/chat teams qualifying leads before handoff.",
                "Small teams needing 24/7 coverage with AI assist.",
                "Multi-channel support needing routing and triggers.",
                "Ops teams wanting Shopify/CRM context in chats.",
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
            <p className="mt-3 text-slate-700">
              {toolName} focuses on AI replies, automation flows, ecommerce context, omnichannel chat, and integrations.
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
                  {toolName} has free and paid tiers. Paid plans expand AI/message limits, add automation and integrations, and unlock more triggers. Costs scale with seats and volume.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start free to test accuracy; upgrade when you need Shopify/CRM context, more automations, or higher AI limits.</p>
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
                    <td className="px-4 py-3">Testing/light chat</td>
                    <td className="px-4 py-3">Core chat, limited AI/automation</td>
                    <td className="px-4 py-3">Great for validation</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">Ecommerce teams</td>
                    <td className="px-4 py-3">More AI limits, Shopify/CRM hooks</td>
                    <td className="px-4 py-3">Recommended starting point</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Advanced/Plus</td>
                    <td className="px-4 py-3">Higher volume</td>
                    <td className="px-4 py-3">Highest limits, advanced triggers</td>
                    <td className="px-4 py-3">Pick when scaling support</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Track AI accuracy, deflection, and CSAT. Keep humans in the loop and review AI outputs regularly, especially for policy-sensitive topics.
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
                  <li>AI replies and workflows reduce repetitive tickets.</li>
                  <li>Ecommerce context for personalized answers.</li>
                  <li>Omnichannel chat with triggers and routing.</li>
                  <li>Integrations with Shopify and CRMs.</li>
                  <li>Human fallback built into flows.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>AI accuracy needs monitoring and tuning.</li>
                  <li>Costs rise with volume and seats.</li>
                  <li>Complex flows require setup and QA.</li>
                  <li>Policy-sensitive topics still need human review.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other support chat platforms to match your automation depth, channels, and ecommerce needs.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} compares to other AI support platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Intercom</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/intercom">
                  View Intercom
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Intercom is a broader customer platform with help desk and product tours; {toolName} is lighter and ecommerce-friendly. Pick Intercom for full-stack CX, {toolName} for quick AI chat setup.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Zendesk AI Agents</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/zendesk-ai-agents">
                  View Zendesk AI Agents
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Zendesk AI Agents integrate deeply with ticketing; {toolName} excels at onsite chat and ecommerce context. Choose based on whether you lead with tickets or onsite chat deflection.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need AI-assisted chat for ecommerce or support and can monitor accuracy, set fallbacks, and connect it to your stack.
            </p>
            <p className="mt-3 text-slate-700">
              Pair AI with clear policies and human review. Track CSAT, deflection, and conversion to ensure ROI as volume grows.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A strong AI chat option for ecommerce and support—best with disciplined QA and integrations.
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
              Choose {toolName} if you want AI chat and workflows for ecommerce/support, with human fallback and integrations to keep data in sync.
            </p>
            <p>
              Consider Intercom for broader CX or Zendesk AI Agents for ticket-centric teams; use {toolName} for quick onsite AI chat and deflection.
            </p>
            <p>{toolName} lifts responsiveness and deflection when paired with policy guardrails and QA.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-indigo-700 hover:text-indigo-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-indigo-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default TidioAIToolPage;
