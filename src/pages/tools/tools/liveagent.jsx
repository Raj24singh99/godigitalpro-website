import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "LiveAgent";
const slug = "liveagent";
const category = "Customer Support & Help Desk";
const shortPitch = "LiveAgent is a help desk and live chat platform with ticketing, call center features, and multichannel support for service teams.";
const pricingSummary =
  "Tiered pricing by features and channels. Higher tiers add call center, advanced automation, and reporting; costs scale with seats and channels.";
const officialUrl = "https://www.liveagent.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/liveagent.com",
  gradient: "from-orange-500 via-amber-500 to-rose-500",
  glow: "shadow-[0_20px_80px_rgba(249,115,22,0.24)]",
};

const alternatives = [
  { name: "Zendesk", slug: "zendesk" },
  { name: "Freshdesk", slug: "freshdesk" },
  { name: "Help Scout", slug: "help-scout" },
  { name: "Intercom", slug: "intercom" },
  { name: "Zoho Desk", slug: "zoho-desk" },
];

const faqs = [
  {
    q: "What is LiveAgent?",
    a: "LiveAgent is a help desk platform offering ticketing, live chat, call center, and multichannel support features.",
  },
  {
    q: "Who is LiveAgent best for?",
    a: "Support teams that need a combined ticketing, chat, and call center solution without heavy enterprise setup.",
  },
  {
    q: "Does it include live chat and call center?",
    a: "Yes. Chat widgets and call center features (IVR, call routing) are available on higher tiers.",
  },
  {
    q: "How does pricing work?",
    a: "Seat-based tiers with feature differences. Higher tiers include call center, advanced automation, and reporting.",
  },
  {
    q: "Are automations supported?",
    a: "Yes. Rules, SLAs, and workflows help route and prioritize tickets.",
  },
  {
    q: "Does it integrate with other tools?",
    a: "Integrations exist for CRM, ecommerce, and productivity tools; check the app directory for specifics.",
  },
  {
    q: "Is there a knowledge base?",
    a: "Yes. You can build and publish knowledge base articles for self-service.",
  },
  {
    q: "Do I still need training?",
    a: "Yes. Set up tagging, macros, routing, and knowledge processes for consistent support quality.",
  },
];

function LiveAgentPage() {
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
        "LiveAgent combines ticketing, live chat, and call center features in one platform, giving support teams multichannel coverage with automation and reporting.",
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
      title: "Multichannel support",
      body: "Manage email, chat, call center, and social tickets in one system.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-orange-500" />,
      title: "Live chat",
      body: "Embed chat widgets on your site to assist customers in real time.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Call center",
      body: "IVR, call routing, and recordings for phone support on higher tiers.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Automation & SLAs",
      body: "Rules, SLAs, and workflows to route and prioritize tickets.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Knowledge base",
      body: "Publish help articles for self-service and link them to chat/tickets.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Integrations",
      body: "Connect CRM, ecommerce, and productivity tools to add context to tickets.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="LiveAgent review: pricing, features, pros & cons, and alternatives so you can choose the right help desk and live chat platform."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-amber-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-rose-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-amber-600" />
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
                  {toolName} brings ticketing, chat, and call center together—ideal for teams that want multichannel support without stitching multiple tools.
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
              {toolName} is a help desk platform that centralizes tickets, live chat, and call center features. It helps support teams route requests, automate responses, and provide multichannel service.
            </p>
            <p className="mt-3 text-slate-700">
              Use it to embed chat on your site, manage emails, handle calls with IVR/routing, and publish a knowledge base. Automation and SLAs help keep response quality consistent.
            </p>
            <p className="mt-3 text-slate-700">
              Integrations enrich tickets with customer context from CRM and ecommerce platforms.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for support teams needing ticketing plus chat and optional call center in one platform.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Support teams handling email, chat, and calls together.",
                "Businesses adding live chat without separate tools.",
                "Teams that want IVR and call routing included.",
                "Leaders who need SLAs and automation for routing/priorities.",
                "Organizations seeking a built-in knowledge base for deflection.",
                "Teams integrating support with CRM/ecommerce context.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-amber-500" />
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
              {toolName} focuses on multichannel support, automation, and integrations to streamline service operations.
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
                  {toolName} pricing is seat-based with feature tiers. Call center features, advanced automation, and reporting are on higher tiers; costs rise with seats and channels.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Choose a tier with chat and automation first; add call center features when volume justifies it.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Ticketing/Basic</td>
                    <td className="px-4 py-3">Email support</td>
                    <td className="px-4 py-3">Ticketing, basic automations</td>
                    <td className="px-4 py-3">Good for small teams</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Chat/Standard</td>
                    <td className="px-4 py-3">Live chat</td>
                    <td className="px-4 py-3">Chat widgets, more rules/SLAs</td>
                    <td className="px-4 py-3">Balanced for most teams</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Call Center/All-Inclusive</td>
                    <td className="px-4 py-3">Multichannel</td>
                    <td className="px-4 py-3">Call center, advanced reporting</td>
                    <td className="px-4 py-3">Plan for training and setup</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Confirm channel needs, seat counts, and call center requirements. Configure tagging, macros, and SLAs to get value quickly.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-amber-50 p-5 shadow-sm ring-1 ring-amber-100">
                <div className="flex items-center gap-2 text-amber-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Ticketing, chat, and call center in one platform.</li>
                  <li>Automation and SLAs improve responsiveness.</li>
                  <li>Knowledge base for self-service.</li>
                  <li>Integrations add customer context to tickets.</li>
                  <li>Flexible pricing tiers for different channel needs.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Call center features cost more and need setup.</li>
                  <li>Seat-based pricing scales with headcount.</li>
                  <li>Setup/training needed for routing and macros.</li>
                  <li>Reporting depth may differ from enterprise suites.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other help desks to match your channel needs, automation depth, and budget.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} compares with other support platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Zendesk</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/zendesk">
                  View Zendesk
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Zendesk is enterprise-grade with a large app ecosystem; {toolName} focuses on ease with built-in chat/call center. Choose Zendesk for deep enterprise needs; {toolName} for simpler multichannel setup.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Freshdesk</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/freshdesk">
                  View Freshdesk
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Freshdesk offers broad automation and marketplace apps. {toolName} emphasizes combined chat/call center simplicity. Pick based on app ecosystem vs. built-in multichannel approach.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want ticketing, chat, and optional call center in one platform with manageable setup and cost.
            </p>
            <p className="mt-3 text-slate-700">
              Budget for seats and channel needs; invest in setup for routing, macros, and knowledge base to get value quickly.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A solid help desk for teams needing combined chat/call center features without enterprise complexity.
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
              Choose {toolName} if you want a combined ticketing, chat, and call center solution with built-in automation and knowledge base features.
            </p>
            <p>
              Consider Zendesk or Freshdesk for larger ecosystems; keep {toolName} for simpler multichannel support with integrated chat/call center.
            </p>
            <p>{toolName} helps support teams stay responsive across channels—success depends on good setup, training, and ongoing QA.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-amber-700 hover:text-amber-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-amber-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default LiveAgentPage;
