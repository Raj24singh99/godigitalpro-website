import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown, MessageCircle, Headset, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "LiveChat";
const slug = "livechat";
const category = "Live chat & support";
const shortPitch =
  "LiveChat is a customer messaging platform with chat, inbox, routing, and reporting that helps support and sales teams respond faster on web and in-app.";
const pricingSummary =
  "Starter plan begins around $20/agent/month billed annually. Higher tiers add advanced routing, reporting, HIPAA support, and more integrations.";
const officialUrl = "https://www.livechat.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/livechat.com",
  gradient: "from-indigo-500 via-blue-500 to-slate-800",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.18)]",
};

const alternatives = [
  { name: "Intercom", slug: "intercom" },
  { name: "Tidio", slug: "tidio" },
  { name: "Crisp", slug: "crisp" },
  { name: "HelpScout", slug: "helpscout" },
  { name: "Zendesk", slug: "zendesk" },
];

const faqs = [
  {
    q: "Is LiveChat easy to install?",
    a: "Yes. Add one snippet or use plugins for WordPress, Shopify, and popular CMS/ecommerce platforms. You can customize the widget without code.",
  },
  {
    q: "Does LiveChat support routing and teams?",
    a: "LiveChat offers departments, routing rules, and assignment to connect visitors to the right agent. Higher tiers add more automation and SLAs.",
  },
  {
    q: "Can LiveChat integrate with chatbots?",
    a: "Yes. Pair it with ChatBot (from the same company) or connect to automation platforms via webhooks, Zapier, or Make to pre-qualify and triage conversations.",
  },
  {
    q: "How strong is reporting?",
    a: "You get dashboards for response times, satisfaction, volume, agent performance, and sales tracking. Export options help with BI and client reporting.",
  },
  {
    q: "Does LiveChat have multichannel support?",
    a: "LiveChat covers website and in-app chats primarily, with email handoff. For full omnichannel (social, phone), pair with your CRM or help desk.",
  },
  {
    q: "Is LiveChat secure?",
    a: "LiveChat offers encryption, data residency options, and HIPAA support on higher tiers. Role-based permissions help protect sensitive conversations.",
  },
  {
    q: "Can I use LiveChat for sales?",
    a: "Yes. Many teams route pre-sales questions to sales reps, track conversions, and trigger follow-ups through CRM integrations.",
  },
  {
    q: "How customizable is the widget?",
    a: "You can change branding, greetings, forms, availability, and add proactive messages based on behavior and traffic source.",
  },
];

function LiveChatToolPage() {
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
        "LiveChat delivers reliable chat, routing, and reporting for sales and support teams. Installation is easy, and integrations bridge to CRMs and automation platforms to keep conversations flowing.",
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
      icon: <MessageCircle className="h-5 w-5 text-indigo-600" />,
      title: "Fast, branded chat widget",
      body: "Customize colors, greetings, and availability while keeping performance tight across web and in-app experiences.",
    },
    {
      icon: <Headset className="h-5 w-5 text-emerald-600" />,
      title: "Routing and collaboration",
      body: "Departments, assignments, and canned responses help get the right agent on the right thread without slow handoffs.",
    },
    {
      icon: <Plug className="h-5 w-5 text-sky-500" />,
      title: "Integrations & automation",
      body: "Connect to CRMs like HubSpot/Pipedrive, send data via webhooks or Zapier/Make, and pair with ChatBot for automation.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-amber-500" />,
      title: "Proactive engagement",
      body: "Trigger greetings and forms based on URL, UTM, or behavior to convert high-intent visitors without waiting for outreach.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-500" />,
      title: "Security & roles",
      body: "Role-based permissions, HIPAA support on higher tiers, and data masking keep sensitive data protected.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-rose-500" />,
      title: "Reporting & exports",
      body: "Track response times, CSAT, volume, and revenue impact. Export to BI tools or share reports with leadership and clients.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="LiveChat review for support and sales teams covering pricing, features, pros & cons, alternatives, and how it stacks up against Intercom and Tidio."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-indigo-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-blue-300/20 blur-3xl" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-indigo-200 blur-3xl" />
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
                  LiveChat offers fast, reliable chat with routing, collaboration, and reporting, making it a dependable front door for support and pre-sales teams.
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
              LiveChat is a messaging platform for websites and apps that helps teams capture leads, resolve support issues, and route conversations. It focuses on performance, reliability, and a familiar agent inbox.
            </p>
            <p className="mt-3 text-slate-700">
              You can embed it quickly, customize branding, and connect it to CRMs and automation platforms so chat data feeds your broader go-to-market workflows.
            </p>
            <p className="mt-3 text-slate-700">
              Compared to heavier platforms, LiveChat stays approachable while still offering routing, reports, and security features needed for production support.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">LiveChat works best for teams needing reliable live support and pre-sales chat without heavy CRM baggage.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Support teams that need fast responses and clear routing.",
                "Sales teams capturing and qualifying inbound leads via chat.",
                "SaaS companies adding in-app support without complex setup.",
                "Ecommerce stores answering product and shipping questions in real time.",
                "Agencies offering managed chat for client sites.",
                "Teams wanting a dependable widget while keeping their own CRM/help desk.",
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
            <p className="mt-3 text-slate-700">LiveChat focuses on reliability, routing, and reporting with strong integrations.</p>
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
                  Pricing is per-agent. Starter covers core chat; Team adds routing and reporting improvements; Business/Enterprise add HIPAA, security, and advanced support. Trials are available to test fit.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on Starter to launch quickly; upgrade to Team for routing & Proactive; use Business/Enterprise if you need HIPAA/security features.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter</td>
                    <td className="px-4 py-3">Small teams needing fast chat</td>
                    <td className="px-4 py-3">Core chat, basic assignments, branding</td>
                    <td className="px-4 py-3">~$20/agent/mo (annual)</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Team</td>
                    <td className="px-4 py-3">Growing support/sales teams</td>
                    <td className="px-4 py-3">Routing, advanced reporting, ticketing add-ons</td>
                    <td className="px-4 py-3">~$41/agent/mo (annual)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business</td>
                    <td className="px-4 py-3">Larger orgs needing compliance</td>
                    <td className="px-4 py-3">HIPAA support, SSO, security features</td>
                    <td className="px-4 py-3">~$59/agent/mo (annual)</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Complex orgs with custom needs</td>
                    <td className="px-4 py-3">Custom SLAs, onboarding, dedicated support</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Seat-based pricing scales with headcount. If you need omnichannel, factor in integrations or parallel help desk tools. Automations via ChatBot/Zapier/Make can offset headcount as you grow.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-indigo-50 p-5 shadow-sm ring-1 ring-indigo-100">
                <div className="flex items-center gap-2 text-indigo-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Fast, reliable chat widget with simple install.</li>
                  <li>Routing, departments, and collaboration keep responses quick.</li>
                  <li>Strong integrations with CRMs and automation tools.</li>
                  <li>Proactive messages and forms to capture leads.</li>
                  <li>Security and HIPAA options on higher tiers.</li>
                  <li>Accessible reporting and exports for stakeholders.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Omnichannel beyond web/app requires other tools.</li>
                  <li>Seat-based pricing grows with larger teams.</li>
                  <li>Automation relies on ChatBot or third-party platforms.</li>
                  <li>Not a full ticketing system; pair with help desk if needed.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              If you need deeper automation, omnichannel, or ticketing, explore these platforms. Each links to a full breakdown.
            </p>
            <p className="mt-2 text-slate-700">They differ on chatbot depth, CRM capabilities, and pricing models.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Support chat alternative.</p>
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
            <p className="text-slate-700">Here’s how LiveChat compares to popular support chat platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Tidio vs Crisp</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/tidio-vs-crisp-vs-livechat">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Tidio and Crisp combine chat with affordable chatbots and multichannel options. LiveChat offers a mature widget, routing, and reporting with strong reliability.
              </p>
              <p className="mt-2 text-slate-700">
                Choose LiveChat for dependable chat and reporting; pick Tidio/Crisp if you want lower cost and bundled bots out of the box.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Intercom vs HelpScout</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/livechat-vs-intercom-vs-helpscout">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Intercom is a full platform with bots and product tours; HelpScout emphasizes email-style support with docs. LiveChat stays lean on chat with easy setup and reporting.
              </p>
              <p className="mt-2 text-slate-700">
                Choose LiveChat if you want reliable chat without heavy platform costs; choose Intercom for product tours and bots; choose HelpScout for team inbox flows.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              For teams needing a dependable chat layer with good routing and reporting, LiveChat is worth it. It slots into existing CRMs and automation stacks without forcing a new help desk.
            </p>
            <p className="mt-3 text-slate-700">
              If you want deep chatbots or omnichannel, consider Intercom or Tidio. If you prefer email-style support, HelpScout works well. For pure live chat with fast rollout, LiveChat is a safe bet.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> LiveChat is a solid, reliable choice for web and in-app chat when you want speed, routing, and clean reporting without heavy complexity.
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
              Choose LiveChat if you want reliable live chat with routing, reporting, and solid integrations. It’s great for support and sales teams that need fast responses without heavy platform lock-in.
            </p>
            <p>
              Consider Intercom for bots and tours or HelpScout for shared inbox workflows. Tidio and Crisp stay budget-friendly with built-in chatbots. LiveChat remains a dependable middle ground focused on live chat quality.
            </p>
            <p>LiveChat fits cleanly alongside your CRM and help desk, keeping conversations flowing while you add automation as needed.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
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

export default LiveChatToolPage;
