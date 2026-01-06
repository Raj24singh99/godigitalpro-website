import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Tars";
const slug = "tars";
const category = "Chatbots & CX";
const shortPitch = "Tars lets teams build no-code chatbots for lead capture, support, and conversion-focused landing experiences.";
const pricingSummary =
  "Tiered pricing based on seats, chat volume, and features. Higher tiers add integrations, custom domains, and advanced routing/analytics.";
const officialUrl = "https://hellotars.com";
const ratingValue = 4.1;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/hellotars.com",
  gradient: "from-indigo-500 via-sky-500 to-emerald-500",
  glow: "shadow-[0_20px_80px_rgba(99,102,241,0.24)]",
};

const alternatives = [
  { name: "Landbot", slug: "landbot" },
  { name: "Intercom", slug: "intercom" },
  { name: "Drift AI", slug: "drift-ai" },
  { name: "HubSpot", slug: "hubspot" },
  { name: "Zendesk", slug: "zendesk" },
];

const faqs = [
  {
    q: "What is Tars?",
    a: "Tars is a chatbot builder for creating conversational flows that capture leads, qualify visitors, and resolve support questions.",
  },
  {
    q: "Who is it for?",
    a: "Marketing, CX, and support teams that need conversion-focused chat experiences without heavy engineering effort.",
  },
  {
    q: "Does Tars use AI?",
    a: "Tars offers AI-assisted replies and templates, but effective bots still require scripted flows and QA to prevent off-brand responses.",
  },
  {
    q: "How is pricing structured?",
    a: "Plans scale with usage, seats, and integrations. Higher tiers add advanced routing, domains, and enterprise controls.",
  },
  {
    q: "Can it integrate with CRMs?",
    a: "Yes. You can send leads to CRMs, marketing tools, or support platforms via native integrations or webhooks.",
  },
  {
    q: "Does it support multilingual bots?",
    a: "Yes. You can build flows in multiple languages; test translations and intents before going live.",
  },
  {
    q: "Is coding required?",
    a: "No-code builder covers most flows. Custom logic can be added with APIs or webhook steps.",
  },
  {
    q: "Where can bots be embedded?",
    a: "Embed on landing pages, websites, or share as standalone links. Some tiers support custom domains and pop-up launchers.",
  },
];

function TarsToolPage() {
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
        "Tars makes it easy to build chatbots for lead gen and support without code. Great for conversion-focused flows—still needs scripting, QA, and integration work.",
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
      title: "No-code builder",
      body: "Drag-and-drop flows for lead capture, FAQs, and routing without engineering support.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Conversion-focused widgets",
      body: "Embed bots on landing pages or as standalone experiences designed to boost form completion.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Templates & playbooks",
      body: "Starter flows for industries and use cases to launch faster and customize as needed.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Compliance controls",
      body: "Consent prompts, data capture controls, and routing to live agents or forms when needed.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Hosting & domains",
      body: "Bots are hosted and can live on your domain depending on plan; SSL included.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Integrations & webhooks",
      body: "Send leads to CRMs, marketing tools, or support desks; trigger workflows with webhooks.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Tars review: pricing, features, pros & cons, and alternatives so you know if it fits your chatbot and conversion goals."
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
                  {toolName} ships chatbots fast for lead gen and support—use it to guide visitors, then sync data to your CRM and QA responses.
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
              {toolName} is a no-code chatbot platform to capture leads, route visitors, and answer FAQs. It focuses on conversion-first chat experiences that can replace or augment static forms.
            </p>
            <p className="mt-3 text-slate-700">
              Treat it as a guided flow builder: design clear intents, guardrails, and handoffs. AI assists but should be monitored for tone, accuracy, and compliance.
            </p>
            <p className="mt-3 text-slate-700">Plan for integrations with your CRM/support tools and test every branch before going live.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams that want to turn forms into conversations and capture more qualified leads.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "B2B marketers replacing static forms with guided flows.",
                "Support teams deflecting FAQs before live agent handoff.",
                "Performance teams running chatbot landing pages for ads.",
                "Agencies building reusable chatbot templates for clients.",
                "Product teams wanting in-app guidance and lead capture.",
                "Ops teams syncing captured data directly into CRMs.",
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
              {toolName} focuses on no-code chatbot flows, conversion widgets, compliance controls, and CRM/support integrations.
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
                  {toolName} tiers are based on users, chat volume, and integrations. Higher tiers add advanced routing, custom domains, and enterprise controls. Costs rise with traffic and seats.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start mid-tier if you need CRM integrations; upgrade when traffic grows or you need custom domains and SSO.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter</td>
                    <td className="px-4 py-3">Basic lead capture</td>
                    <td className="px-4 py-3">No-code bots, standard widgets</td>
                    <td className="px-4 py-3">Test conversion impact</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">Teams with integrations</td>
                    <td className="px-4 py-3">CRM hooks, more volume, domains</td>
                    <td className="px-4 py-3">Good default for B2B</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">High traffic & controls</td>
                    <td className="px-4 py-3">SSO, advanced routing, support</td>
                    <td className="px-4 py-3">For complex org needs</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Track conversion rates per flow. QA every branch, collect consent, and route edge cases to humans to avoid drop-offs or compliance issues.
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
                  <li>No-code flows built for conversions.</li>
                  <li>Templates to launch quickly.</li>
                  <li>CRM/support integrations via APIs.</li>
                  <li>Custom domains and branding on higher tiers.</li>
                  <li>Supports multilingual bots.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Requires scripting and QA to avoid off-brand responses.</li>
                  <li>Complex branching can become hard to maintain.</li>
                  <li>Costs rise with traffic/volume.</li>
                  <li>Deeper AI or live chat features may need other tools.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other chatbot and CX tools to match your routing, AI, and integration needs.
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
            <p className="text-slate-700">See how {toolName} compares to other chatbot builders and CX platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Landbot</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/landbot">
                  View Landbot
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Landbot offers flexible UI and web app-like experiences; {toolName} leans into conversion-focused chat widgets. Pick based on design flexibility vs speed-to-launch.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Intercom</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/intercom">
                  View Intercom
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Intercom combines bots with live chat and help desk features. {toolName} is lighter and conversion-first; choose Intercom for full-stack support, {toolName} for focused lead flows.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want to boost conversions with guided chat flows and can dedicate time to scripting, QA, and integrations with your stack.
            </p>
            <p className="mt-3 text-slate-700">
              Keep humans in the loop for complex cases, and monitor response quality, consent, and routing to maintain trust and compliance.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A strong no-code chatbot builder for lead gen and FAQ deflection—best with disciplined flow design and integration hygiene.
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
              Choose {toolName} if you want conversion-focused chatbots without code and plan to connect them to your CRM or support stack.
            </p>
            <p>
              Consider Intercom for combined live chat/help desk or Landbot for more UI flexibility; use {toolName} to launch guided flows quickly.
            </p>
            <p>{toolName} lifts form conversions when paired with solid messaging, QA, and human fallback paths.</p>
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

export default TarsToolPage;
