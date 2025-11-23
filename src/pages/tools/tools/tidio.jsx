import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown, MessageCircle, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Tidio";
const slug = "tidio";
const category = "Live Chat & AI Support";
const shortPitch = "Tidio is a live chat and AI chatbot platform that helps support and sales teams respond faster, automate FAQs, and convert more visitors.";
const pricingSummary = "Freemium with paid plans from around $29/month, adding AI replies, chatbots, ticketing, and higher limits for agents and conversations.";
const officialUrl = "https://www.tidio.com";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/tidio.com",
  gradient: "from-blue-500 via-indigo-500 to-cyan-600",
  glow: "shadow-[0_20px_80px_rgba(37,99,235,0.18)]",
};

const alternatives = [
  { name: "Crisp", slug: "crisp" },
  { name: "LiveChat", slug: "livechat" },
  { name: "Intercom", slug: "intercom" },
  { name: "HelpScout", slug: "helpscout" },
  { name: "Zendesk", slug: "zendesk" },
];

const faqs = [
  { q: "Is Tidio free?", a: "Yes. Tidio has a free plan with basic live chat. Paid plans add more operators, AI replies, chatbots, and ticketing." },
  { q: "Is Tidio good for small businesses?", a: "Yes. It’s built for SMBs that need fast setup, AI chatbots, and blended support/sales chat without heavy setup." },
  { q: "Which Tidio plan should I choose?", a: "Start with the free tier to test. Upgrade to Starter or higher for AI responses, bots, and more seats. Larger teams may opt for Growth/Custom for higher limits." },
  { q: "Does Tidio support AI chatbots?", a: "Yes. Tidio’s AI can answer FAQs, capture leads, and route chats automatically while handing off to agents when needed." },
  { q: "What channels does Tidio support?", a: "Tidio supports web chat plus email handoff and social channels like Messenger and Instagram, so you can keep conversations in one place." },
  { q: "Is Tidio secure and GDPR-ready?", a: "Tidio offers encryption, GDPR compliance features, permissions, and data export controls so teams can meet privacy requirements." },
  { q: "Does Tidio integrate with CRMs and ecommerce?", a: "Yes. Tidio integrates with Shopify, WooCommerce, HubSpot, Salesforce (via connectors), Zapier, Make, and more for order lookup and lead routing." },
  { q: "Can Tidio handle tickets?", a: "Tidio includes light ticketing to track cases alongside live chat and bots; it is best for SMB use cases rather than heavy ITSM." },
];

function TidioToolPage() {
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
        "Tidio combines live chat, AI chatbots, and lightweight ticketing so small teams can automate FAQs and respond faster. It offers social channels, ecommerce integrations, and affordable pricing, making it a strong fit for SMB support and sales.",
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
      icon: <MessageCircle className="h-5 w-5 text-blue-500" />,
      title: "Live chat that’s easy to launch",
      body: "Embed chat quickly with brand styling, canned responses, and assignments so teams can start responding in minutes.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-indigo-500" />,
      title: "AI chatbots for FAQs and lead capture",
      body: "Use AI to auto-answer repetitive questions, capture leads, and collect context before handing off to humans.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-emerald-500" />,
      title: "Light ticketing and inbox",
      body: "Track cases, escalate, and keep history with a shared inbox so nothing drops even when chat ends.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Ecommerce and CRM integrations",
      body: "Connect Shopify, WooCommerce, HubSpot, Salesforce (via connectors), Zapier, and Make to sync orders and leads.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Routing and permissions",
      body: "Assign by team or queue, set working hours, and manage agent roles for clean handoffs and coverage.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Multichannel coverage",
      body: "Handle web chat plus Messenger and Instagram DMs so conversations stay centralized alongside email handoff.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Unbiased Tidio review for SMB support and sales teams covering pricing, features, pros & cons, alternatives, and fit for your 2025 stack."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-blue-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-blue-500" />
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
                  Tidio blends AI chatbots with human chat so small teams can handle more conversations, qualify leads, and keep customers informed—without enterprise overhead.
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
              Tidio is a live chat and AI chatbot platform for support and sales teams. It installs quickly, automates FAQs, captures leads, and routes chats to agents when human help is needed.
            </p>
            <p className="mt-3 text-slate-700">
              Ecommerce brands, SaaS startups, and agencies use Tidio to deflect repetitive questions, qualify prospects, and keep conversations in one inbox across web chat and social channels.
            </p>
            <p className="mt-3 text-slate-700">Light ticketing and inbox features ensure follow-up, while integrations sync data to CRMs, ecommerce platforms, and automation tools.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Tidio fits teams that need fast, AI-assisted live chat without enterprise complexity.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Ecommerce stores answering shipping, returns, and product FAQs while capturing leads.",
                "B2B SaaS teams qualifying visitors, booking demos, and handling support in one inbox.",
                "Agencies managing support for clients and needing quick bot templates plus handoff.",
                "Small support teams that want AI to deflect repetitive requests.",
                "Sales teams that want instant lead capture and routing to reps.",
                "Founders who need a no-fuss chat with automation before a CX hire.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-blue-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">Tidio focuses on speed-to-value for SMB support and sales, blending AI deflection with human chat.</p>
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
                  Tidio’s free plan covers basic chat. Paid plans add AI replies, bots, automation, and higher seat/usage limits. Growth and custom tiers serve teams needing more volume and SLAs.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Test free, then move to Starter for AI replies and bots. Growing teams should budget for Growth or custom for higher limits.</p>
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
                    <td className="px-4 py-3">Testing and very small teams</td>
                    <td className="px-4 py-3">Basic chat, limited seats and conversations</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter</td>
                    <td className="px-4 py-3">SMBs wanting AI automation</td>
                    <td className="px-4 py-3">AI replies, chatbots, higher limits</td>
                    <td className="px-4 py-3">~$29/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">Teams scaling conversation volume</td>
                    <td className="px-4 py-3">More seats, automation, and usage headroom</td>
                    <td className="px-4 py-3">Custom/usage-based</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Custom/Enterprise</td>
                    <td className="px-4 py-3">Higher-volume orgs needing SLAs</td>
                    <td className="px-4 py-3">Advanced support, security, and SLAs</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Starter suits most SMBs. Upgrade when conversation volume and automation needs grow.</p>
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
                  <li>Fast setup for live chat with clean UI.</li>
                  <li>AI chatbots deflect FAQs and capture leads.</li>
                  <li>Affordable for SMBs; clear starting price.</li>
                  <li>Multichannel (web + social) in one inbox.</li>
                  <li>Ecommerce and CRM integrations for context.</li>
                  <li>Light ticketing keeps follow-ups organized.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Reporting is lighter than enterprise suites.</li>
                  <li>Advanced routing and SLAs are basic.</li>
                  <li>Heavy ITSM or complex workflows may require bigger tools.</li>
                  <li>Integrations list is focused on popular apps; niche tools may need Zapier/Make.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Consider these tools if you need broader ticketing, deeper analytics, or different pricing. Each has a dedicated page.</p>
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
            <p className="text-slate-700">Here’s how Tidio compares to two close competitors.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Crisp vs LiveChat</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/tidio-vs-crisp-vs-livechat">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Crisp offers a unified inbox across chat, email, and social with strong value. LiveChat is more mature for routing and reporting. Tidio wins on fast AI chatbot setup and SMB-friendly pricing.
              </p>
              <p className="mt-2 text-slate-700">Pick Tidio for AI + chat, Crisp for multichannel inbox value, LiveChat for robust routing and analytics.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Intercom vs HelpScout</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/tidio-vs-intercom-vs-helpscout">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Intercom is premium and built for product-led growth with deep data and proactive messaging. HelpScout is email-first with clean chat and docs. Tidio is fastest to launch with AI for SMB teams on a budget.
              </p>
              <p className="mt-2 text-slate-700">Choose Tidio for speed and AI; Intercom for enterprise/PLG depth; HelpScout for email-first support with chat/docs.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              For SMBs needing AI chatbots plus live chat in one place, {toolName} is worth it. It reduces response times and deflects repetitive work without enterprise cost or setup.
            </p>
            <p className="mt-3 text-slate-700">
              If you need deep routing, SLAs, or product-led messaging at scale, Intercom or Zendesk may be better. For email-first support teams, HelpScout fits well; for multichannel inbox value, try Crisp.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Tidio is a smart, affordable pick for small teams that want AI-assisted chat and light ticketing without heavy implementation.
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
              Choose Tidio if you want AI chatbots and live chat that launch quickly, with enough integrations and ticketing to keep customers happy without heavy setup.
            </p>
            <p>
              Consider Intercom for enterprise-grade, data-driven messaging; HelpScout for email-first support; or LiveChat/Crisp if you need mature routing or multichannel inbox value.
            </p>
            <p>{toolName} fits neatly in a modern stack alongside CRMs, ecommerce, and automation tools, ensuring every chat becomes a follow-up or sale.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>
                Visit {toolName}
              </a>
              .
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-sky-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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
      <button type="button" onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-900">
        <span className="text-sm font-semibold md:text-base">{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">{answer}</div>}
    </div>
  );
}

export default TidioToolPage;
