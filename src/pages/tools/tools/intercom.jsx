import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Video, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Intercom";
const slug = "intercom";
const category = "Customer Support & Messaging";
const shortPitch =
  "Intercom is a customer service platform that blends live chat, bots, help center, and outbound messages so SaaS, e-commerce, and product teams can support and activate users in one place.";
const pricingSummary = "Plans start around $39/user/month for Essential, with Advanced and Expert tiers adding AI bots, proactive messaging, and deeper routing controls.";
const officialUrl = "https://www.intercom.com";
const ratingValue = 4.6;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/intercom.com",
  gradient: "from-cyan-500 via-blue-500 to-indigo-600",
  glow: "shadow-[0_20px_80px_rgba(6,182,212,0.22)]",
};

const alternatives = [
  { name: "Zendesk", slug: "zendesk" },
  { name: "HelpScout", slug: "helpscout" },
  { name: "Freshdesk", slug: "freshdesk" },
  { name: "Tidio", slug: "tidio" },
  { name: "LiveChat", slug: "livechat" },
];

const faqs = [
  {
    q: "Is Intercom free?",
    a: "Intercom does not have a permanent free plan. You can trial it, then move to paid tiers that start near $39/user/month with usage-based components for seats, emails, and bots.",
  },
  {
    q: "Does Intercom include AI chatbots?",
    a: "Yes. Fin AI bot handles common questions, triage, and suggested answers. Operators, workflows, and resolution bots deflect tickets and route complex cases to humans.",
  },
  {
    q: "Which Intercom plan fits small teams?",
    a: "Essential works for lean teams needing a shared inbox and basic automation. Growing teams typically choose Advanced for better routing, bots, and proactive messaging.",
  },
  {
    q: "Is Intercom good for SaaS onboarding?",
    a: "Yes. Product tours, tooltips, and in-app messages help guide new users, announce releases, and trigger contextual support inside the product.",
  },
  {
    q: "Does Intercom replace a help center?",
    a: "Intercom includes a help center with articles, collections, and search that can be surfaced inside chat or on your site to deflect questions.",
  },
  {
    q: "How does Intercom compare to Zendesk?",
    a: "Zendesk is ticketing-first and strong for large support orgs. Intercom excels at conversational support, proactive messaging, and in-product engagement, particularly for SaaS.",
  },
  {
    q: "Can I integrate Intercom with CRM and product data?",
    a: "Yes. Intercom connects to Salesforce, HubSpot, Segment, Zapier, and data tools so you can target messages and provide context to support agents.",
  },
  {
    q: "Is Intercom secure enough for enterprise?",
    a: "Intercom offers SSO, role-based permissions, audit logs, and compliance certifications. Expert plans cater to larger orgs that need governance.",
  },
];

function IntercomToolPage() {
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
        "Intercom unifies chat, bots, help center, and outbound messaging so SaaS and e-commerce teams can support and activate users. AI deflection, contextual targeting, and product tours make it strong for in-app engagement. Pricing starts around $39/user/month with extra usage for seats and messaging.",
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
      icon: <Sparkles className="h-5 w-5 text-cyan-500" />,
      title: "AI bots and automation",
      body: "Fin and resolution bots handle common questions, triage, and suggested replies so agents focus on complex issues.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-indigo-500" />,
      title: "Unified inbox with routing",
      body: "Centralize chat, email, and in-app conversations. Rules, SLAs, and assignments keep queues organized for support and success teams.",
    },
    {
      icon: <Video className="h-5 w-5 text-blue-500" />,
      title: "Product tours and announcements",
      body: "Launch guided tours, tooltips, and release banners to onboard users and drive adoption inside your product.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Help center and self-serve",
      body: "Publish articles and collections that surface automatically in chat, reducing inbound volume and boosting resolution rates.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Data and CRM integrations",
      body: "Connect Salesforce, HubSpot, Segment, Zapier, and product data to target users, personalize outreach, and give agents context.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Outbound and lifecycle messaging",
      body: "Send in-app messages, emails, and push notifications triggered by behavior to drive upgrades, adoption, and retention.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Real-world Intercom review for SaaS and e-commerce teams: pricing, features, pros & cons, alternatives, and whether Intercom fits your 2025 support stack."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-cyan-200/30 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-cyan-500" />
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
                  Built for modern support, Intercom combines chat, bots, and outbound in one workspace so teams can reduce tickets and drive adoption without fragmented tools.
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
              Intercom is a {category.toLowerCase()} platform that merges live chat, email, bots, help center, and in-app messaging. It helps support and product teams respond faster, deflect routine questions, and guide users through onboarding or upgrades.
            </p>
            <p className="mt-3 text-slate-700">
              SaaS companies lean on Intercom for contextual support inside their products. E-commerce stores use it for conversational support and proactive shipping or order updates. Product managers leverage tours and announcements to drive adoption.
            </p>
            <p className="mt-3 text-slate-700">
              By unifying customer data, targeting, automation, and support in one place, Intercom reduces the need for separate chat, ticketing, and onboarding tools.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Intercom fits teams that want conversational support plus in-product engagement in one stack.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "SaaS companies providing in-app chat, product tours, and targeted messages.",
                "E-commerce brands needing conversational support and proactive order updates.",
                "Support teams that want bots to deflect FAQs and route complex issues to agents.",
                "Success teams delivering onboarding, QBR prep, and lifecycle nudges inside the product.",
                "Growth teams sending feature announcements and upgrade prompts based on behavior.",
                "Product managers who want real-time feedback loops and contextual help center surfacing.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">Intercom blends conversational support with product activation to shorten resolution times and improve adoption.</p>
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
                  {toolName} pricing blends per-seat costs with usage. Essential covers inbox and basic automation. Advanced adds routing, proactive messaging, and stronger bots. Expert aims at larger orgs needing SSO, compliance, and custom reporting.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with Essential if you’re new to live chat. Move to Advanced when you need routing and proactive campaigns. Larger teams should evaluate Expert.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Essential</td>
                    <td className="px-4 py-3">Startups and lean teams</td>
                    <td className="px-4 py-3">Core inbox, basic automation, limited seats</td>
                    <td className="px-4 py-3">~$39/user/month</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Advanced</td>
                    <td className="px-4 py-3">Growing support orgs</td>
                    <td className="px-4 py-3">Routing, stronger bots, outbound messaging, reporting</td>
                    <td className="px-4 py-3">Custom based on seats/usage</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Expert</td>
                    <td className="px-4 py-3">Enterprise teams</td>
                    <td className="px-4 py-3">SSO, audit logs, advanced security, premium support</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Add-ons</td>
                    <td className="px-4 py-3">Teams scaling bots or messaging volume</td>
                    <td className="px-4 py-3">Extra Fin bot capacity, outbound sends, or seats</td>
                    <td className="px-4 py-3">Usage-based</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Expect usage-based charges for seats, outbound messaging, and automation volume. Model scenarios before committing; Advanced and Expert require sales contact for accurate pricing.
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
                  <li>Combines chat, bots, help center, and outbound in one platform.</li>
                  <li>AI deflection reduces repetitive tickets and speeds replies.</li>
                  <li>Strong in-product messaging and product tours for onboarding.</li>
                  <li>Deep integrations with CRM and product data for targeting.</li>
                  <li>Modern interface with routing and SLA controls for teams.</li>
                  <li>Help center content surfaces contextually inside chat.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Pricing can climb quickly with seats, outbound, and bot usage.</li>
                  <li>Traditional ticketing features are lighter than Zendesk.</li>
                  <li>Advanced automation and routing require higher tiers.</li>
                  <li>Implementation needs time to align data, routing, and content.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Intercom shines for conversational support and product-led growth. If you prefer classic ticketing, lighter pricing, or e-commerce specialization, evaluate these options.
            </p>
            <p className="mt-2 text-slate-700">All provide chat and ticketing; they differ on automation depth, pricing, and in-product engagement.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
                  </div>
                  <a className="text-sm font-semibold text-cyan-700 hover:text-cyan-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">Here’s how {toolName} compares to two well-known support solutions.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs LiveChat</h3>
                <a className="text-sm font-semibold text-cyan-700 hover:text-cyan-600" href="/tools/compare/livechat-vs-intercom-vs-helpscout">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                LiveChat focuses on live support with a lean toolkit and strong marketplace. Intercom adds AI deflection, product tours, and outbound messaging, making it broader for SaaS and lifecycle teams.
              </p>
              <p className="mt-2 text-slate-700">Choose LiveChat for straightforward chat and ticket routing; choose Intercom for combined support and in-app engagement with automation.</p>
              <p className="mt-2 text-slate-900">Teams wanting proactive onboarding and upgrades will get more value from Intercom’s product-led features.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Tidio</h3>
                <a className="text-sm font-semibold text-cyan-700 hover:text-cyan-600" href="/tools/compare/tidio-vs-intercom-vs-helpscout">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Tidio is affordable with chatbots for SMB e-commerce. Intercom costs more but provides richer automation, product tours, and integrations for SaaS and B2B teams.
              </p>
              <p className="mt-2 text-slate-700">Pick Tidio for simple, budget-friendly chatbots; pick Intercom when you need deep data targeting, AI deflection, and in-product lifecycle messaging.</p>
              <p className="mt-2 text-slate-900">If you expect to scale seats and automation, Intercom’s broader platform will be easier to grow into.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              For SaaS, product-led, and e-commerce teams that want conversational support plus engagement in one place, Intercom is worth it. AI bots, targeting, and tours reduce tickets and lift activation.
            </p>
            <p className="mt-3 text-slate-700">
              If you only need classic ticketing at the lowest cost, Zendesk or HelpScout may fit better. But if in-product messaging and automation are priorities, Intercom’s platform justifies the spend.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Intercom is a top choice for teams blending support, success, and growth motions in one tool, as long as you budget for usage-based pricing.
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
              Choose {toolName} if you want live chat, bots, outbound messaging, and product tours in one place. It’s especially strong for SaaS teams that care about in-app engagement and faster resolutions.
            </p>
            <p>
              Consider Zendesk for enterprise ticketing depth, HelpScout for simplicity, or Tidio for budget-friendly chatbots. Make sure to model usage-based pricing before scaling seats and outbound.
            </p>
            <p>Intercom integrates well with CRM and data pipelines, making it a central hub for support and product communications.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here: <a className="text-cyan-700 hover:text-cyan-600" href={officialUrl}>Visit {toolName}</a>.
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-cyan-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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

export default IntercomToolPage;
