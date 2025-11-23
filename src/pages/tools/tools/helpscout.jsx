import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Video, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "HelpScout";
const slug = "helpscout";
const category = "Customer Support";
const shortPitch =
  "HelpScout is an email-first help desk with shared inbox, docs, live chat (Beacon), and light automation so support teams can deliver personal experiences at scale.";
const pricingSummary = "Paid plans start around $20/user/month billed annually, with Plus and Pro adding advanced permissions, reporting, and knowledge base options.";
const officialUrl = "https://www.helpscout.com";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/helpscout.com",
  gradient: "from-emerald-500 via-teal-500 to-blue-500",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.24)]",
};

const alternatives = [
  { name: "Intercom", slug: "intercom" },
  { name: "Tidio", slug: "tidio" },
  { name: "Zendesk", slug: "zendesk" },
  { name: "LiveChat", slug: "livechat" },
  { name: "HelpCrunch", slug: "helpcrunch" },
];

const faqs = [
  {
    q: "Is there a free plan for HelpScout?",
    a: "HelpScout does not offer a permanent free plan. Pricing starts with Standard/Plus tiers per user, with Pro for larger teams.",
  },
  {
    q: "Does HelpScout include live chat?",
    a: "Yes. Beacon provides live chat, a contact form, and proactive messages that link to your shared inbox and docs.",
  },
  {
    q: "Can I build a knowledge base with HelpScout?",
    a: "Yes. Docs lets you publish articles and surface them via Beacon to deflect common questions.",
  },
  {
    q: "Is HelpScout good for email-heavy support?",
    a: "HelpScout is designed for email-first teams, with shared inboxes, collision detection, and saved replies to keep responses personal and organized.",
  },
  {
    q: "Does HelpScout have reporting?",
    a: "Yes. Reporting includes conversation volume, response times, and happiness ratings. Pro tiers add more advanced metrics.",
  },
  {
    q: "How does HelpScout compare to Intercom?",
    a: "HelpScout is email-first with lightweight chat, ideal for personal support. Intercom is broader with bots, product tours, and proactive messaging.",
  },
  {
    q: "Does HelpScout integrate with other tools?",
    a: "HelpScout integrates with CRM, ecommerce, and collaboration tools like Slack, Shopify, HubSpot, and Jira.",
  },
  {
    q: "Who should avoid HelpScout?",
    a: "If you need heavy bots, product tours, or complex routing, Intercom or enterprise suites may fit better. HelpScout prioritizes simplicity and personal support.",
  },
];

function HelpScoutToolPage() {
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
        "HelpScout is a friendly, email-first help desk with shared inboxes, Beacon live chat, knowledge base, and reporting. It’s built for teams that value personal support without the complexity of enterprise suites. Pricing starts near $20/user/month annually.",
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
      title: "Shared inbox with collision detection",
      body: "Assign, tag, and reply from a clean shared inbox with collision detection and saved replies to keep responses consistent.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-indigo-500" />,
      title: "Beacon live chat and messaging",
      body: "Offer live chat, contact forms, and proactive messages that connect to inbox and docs for quick resolution.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Knowledge base (Docs)",
      body: "Publish and organize articles; surface them in Beacon to deflect common questions and reduce ticket volume.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Integrations",
      body: "Connect ecommerce, CRM, and collaboration tools (Shopify, HubSpot, Slack, Jira, etc.) to provide context in conversations.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Automation and workflows",
      body: "Use workflows to route, tag, and auto-reply to common issues, keeping queues organized without heavy complexity.",
    },
    {
      icon: <Video className="h-5 w-5 text-blue-500" />,
      title: "Satisfaction ratings and reporting",
      body: "Track response times, happiness ratings, and volume trends to improve support quality and resourcing.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Practical HelpScout review for support teams: pricing, features, pros & cons, alternatives, and whether HelpScout fits your 2025 support stack."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-200/30 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-blue-200/25 blur-3xl" />
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
                  HelpScout makes support feel personal with a clean inbox, Beacon chat, and docs—without the overhead of heavy enterprise suites.
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
              HelpScout is a {category.toLowerCase()} platform built around email-first teams. It combines shared inboxes, Beacon chat, docs, and reporting so support teams can respond quickly while keeping interactions personal.
            </p>
            <p className="mt-3 text-slate-700">
              Unlike heavier suites, HelpScout prioritizes simplicity and speed, making it easy to onboard teams and deliver consistent responses without complex setup.
            </p>
            <p className="mt-3 text-slate-700">Beacon lets you surface articles and live chat from the same widget, helping reduce volume and guide customers to self-serve answers.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">HelpScout suits teams that want a friendly, email-first support experience with light chat and docs.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Support teams handling high email volume with shared inbox.",
                "SaaS and ecommerce teams wanting chat + docs without heavy bots.",
                "Agencies providing customer support services for multiple brands.",
                "Success teams guiding users with help docs and quick responses.",
                "Operations teams needing reporting and SLAs without complex setup.",
                "Teams that value personal, human support over aggressive automation.",
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
            <p className="mt-3 text-slate-700">HelpScout focuses on fast, personal support across email, chat, and docs.</p>
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
                  HelpScout pricing is per user with plan-based features. Standard covers core inbox and Beacon. Plus adds Teams, advanced permissions, and Docs. Pro includes SSO, IP restrictions, and advanced reporting for larger orgs.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Pick Standard to start. Upgrade to Plus for Docs/Teams. Choose Pro for SSO and advanced controls.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Standard</td>
                    <td className="px-4 py-3">Lean support teams</td>
                    <td className="px-4 py-3">Shared inbox, Beacon, basic reporting</td>
                    <td className="px-4 py-3">~$20/user/month (annual)</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Plus</td>
                    <td className="px-4 py-3">Growing teams</td>
                    <td className="px-4 py-3">Teams, advanced permissions, Docs knowledge base</td>
                    <td className="px-4 py-3">~$40/user/month (annual)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Larger orgs needing governance</td>
                    <td className="px-4 py-3">SSO, IP restrictions, advanced reporting, concierge onboarding</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Add-ons</td>
                    <td className="px-4 py-3">Teams needing extra mailboxes or Docs sites</td>
                    <td className="px-4 py-3">Additional mailboxes, Docs sites</td>
                    <td className="px-4 py-3">Varies</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              HelpScout’s pricing is predictable per user. Choose tiers based on need for Docs, Teams, and security features like SSO/IP controls.
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
                  <li>Clean shared inbox built for personal support.</li>
                  <li>Beacon combines chat, forms, and docs in one widget.</li>
                  <li>Docs knowledge base reduces repeat questions.</li>
                  <li>Workflows and automation without heavy complexity.</li>
                  <li>Integrations with major ecommerce, CRM, and collaboration tools.</li>
                  <li>Predictable per-seat pricing.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>No advanced bots or product tours like Intercom.</li>
                  <li>Automation and routing are lighter than enterprise suites.</li>
                  <li>Voice/phone support requires integrations; not native.</li>
                  <li>Some features (Docs, Teams, SSO) require higher tiers.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              HelpScout is great for email-first teams. If you need bots, product tours, or heavier automation, explore these options.
            </p>
            <p className="mt-2 text-slate-700">All offer support and chat; they differ on automation depth, pricing, and focus.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
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
            <p className="text-slate-700">Here’s how {toolName} compares to two well-known support options.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Intercom</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/compare/tidio-vs-intercom-vs-helpscout">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Intercom offers advanced bots, product tours, and proactive messaging at a higher price. HelpScout is simpler, email-first, and more affordable, ideal when you want human support over heavy automation.
              </p>
              <p className="mt-2 text-slate-900">Choose Intercom for product-led engagement; choose HelpScout for personal, inbox-centered support.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs LiveChat</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/compare/livechat-vs-intercom-vs-helpscout">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                LiveChat is chat-first with a marketplace of extensions. HelpScout is email-first with integrated docs and Beacon chat. Pick LiveChat for live support and plugins; pick HelpScout for inbox + docs + light chat in one tool.
              </p>
              <p className="mt-2 text-slate-900">If email remains your primary channel, HelpScout generally fits better.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              For support teams that are email-first and want chat/docs without heavy complexity, HelpScout is worth it. It’s fast to adopt, keeps responses personal, and includes reporting to improve service quality.
            </p>
            <p className="mt-3 text-slate-700">
              If you need advanced bots, product tours, or deep routing, look at Intercom or enterprise suites. For budget chatbots, Tidio or HelpCrunch may fit better.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> HelpScout is a standout for lean support teams who prioritize human, email-first support with a clean UX and predictable pricing.
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
              Choose {toolName} if you want a clean, email-first support tool with chat and docs that keeps conversations personal. It’s ideal for SaaS, ecommerce, and agencies where email remains central.
            </p>
            <p>
              Consider Intercom for deeper automation and product tours, or LiveChat for a chat-first approach. If you need budget chatbots with light support, look at Tidio or HelpCrunch.
            </p>
            <p>HelpScout integrates smoothly with CRMs and ecommerce platforms, giving agents context to respond faster and better.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here: <a className="text-emerald-700 hover:text-emerald-600" href={officialUrl}>Visit {toolName}</a>.
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

export default HelpScoutToolPage;
