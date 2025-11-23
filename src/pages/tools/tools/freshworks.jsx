import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Video, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Freshworks";
const slug = "freshworks";
const category = "CRM & CX Suite";
const shortPitch =
  "Freshworks is a CRM and customer experience platform with sales (Freshsales), marketing, support (Freshdesk), and success tools built to be easy to deploy for SMB and mid-market teams.";
const pricingSummary = "Free and paid tiers across hubs; Freshsales and Freshmarketer start with low per-user pricing, scaling with automation, AI, and reporting. Bundles exist for CX and CRM suites.";
const officialUrl = "https://www.freshworks.com";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/freshworks.com",
  gradient: "from-emerald-500 via-teal-500 to-blue-500",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.24)]",
};

const alternatives = [
  { name: "HubSpot", slug: "hubspot" },
  { name: "Pipedrive", slug: "pipedrive" },
  { name: "Zoho", slug: "zoho" },
  { name: "Zendesk", slug: "zendesk" },
  { name: "Freshdesk", slug: "freshdesk" },
];

const faqs = [
  {
    q: "Is there a free plan for Freshworks?",
    a: "Yes. Some Freshworks products offer free or trial tiers. Paid tiers add automation, AI, and advanced reporting.",
  },
  {
    q: "What products are in Freshworks?",
    a: "Freshsales (CRM), Freshmarketer (marketing), Freshdesk (support), Freshchat, and more. Suites bundle multiple products.",
  },
  {
    q: "Is Freshworks good for sales automation?",
    a: "Yes. Freshsales includes sequences, workflows, deal management, and AI insights to help reps prioritize and automate tasks.",
  },
  {
    q: "How does Freshworks handle support?",
    a: "Freshdesk provides omnichannel support with tickets, chat, knowledge base, and automations for routing and SLAs.",
  },
  {
    q: "Does Freshworks integrate with other tools?",
    a: "Yes. Integrations cover calendars, email, telephony, ecommerce, and data tools, plus an app marketplace and APIs/webhooks.",
  },
  {
    q: "How does Freshworks compare to HubSpot or Zoho?",
    a: "Freshworks focuses on ease of use and value. HubSpot has broader ecosystem and UI polish; Zoho offers expansive apps and value; both can be pricier or more complex depending on plan.",
  },
  {
    q: "Is Freshworks suitable for mid-market?",
    a: "Yes. Freshworks serves SMB to mid-market with AI features and governance; enterprises with heavy customization may opt for Salesforce or HubSpot Enterprise.",
  },
  {
    q: "Can I use Freshworks for marketing automation?",
    a: "Freshmarketer includes campaigns, journeys, and personalization. Depth is solid for SMB/mid-market; ActiveCampaign or HubSpot can offer more advanced options.",
  },
];

function FreshworksToolPage() {
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
        "Freshworks provides CRM, marketing, and support tools with quick setup, solid automation, and strong value for SMB/mid-market teams. Pricing is accessible across hubs, with bundles for CX and CRM suites.",
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
      title: "Unified CRM and sales automation",
      body: "Freshsales offers deals, sequences, workflows, contact scoring, and forecasting to keep pipelines moving.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-indigo-500" />,
      title: "Marketing journeys and email",
      body: "Freshmarketer provides campaigns, journeys, popups, and personalization to nurture leads and customers.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Support and success tools",
      body: "Freshdesk, chat, and knowledge base enable omnichannel support with SLAs, routing, and automations.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Integrations and marketplace",
      body: "Connect calendars, email, telephony, ecommerce, and BI tools via apps, APIs, and webhooks.",
    },
    {
      icon: <Video className="h-5 w-5 text-blue-500" />,
      title: "AI and insights",
      body: "AI assists with lead scoring, deal insights, chatbots, and agent suggestions to speed GTM workflows.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Value-focused pricing",
      body: "Free and entry tiers plus bundles help teams start quickly and scale without enterprise-level costs.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Freshworks review for CRM, marketing, and support teams: pricing, features, pros & cons, alternatives, and whether it fits your 2025 GTM stack."
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
                  Freshworks brings sales, marketing, and support into a cohesive stack for SMB and mid-market teams, with AI assistance and approachable pricing.
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
              Freshworks is a {category.toLowerCase()} platform delivering sales, marketing, and support products under one umbrella. It aims to be easy to deploy while offering automation, AI, and integrations that cover the customer lifecycle.
            </p>
            <p className="mt-3 text-slate-700">
              Freshsales handles CRM and sequences; Freshmarketer manages campaigns and journeys; Freshdesk and chat cover support. Bundles make it simpler to roll out multiple products together.
            </p>
            <p className="mt-3 text-slate-700">
              The platform targets SMB and mid-market teams needing value and speed to deploy without enterprise complexity.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Freshworks fits teams that want a unified, approachable GTM stack.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "SMB/mid-market sales teams needing CRM + sequences quickly.",
                "Support teams that may use Freshdesk alongside CRM data.",
                "Marketing teams that want journeys without heavy marketing ops.",
                "Companies looking for value vs. higher-priced suites.",
                "Teams wanting AI-assisted scoring, chat, and insights.",
                "Org using Freshdesk already and expanding to CRM/marketing.",
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
            <p className="mt-3 text-slate-700">Freshworks focuses on approachability, automation, and value across sales, marketing, and support.</p>
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
                  Pricing varies by product and seats. Free and entry tiers exist for Freshsales/marketer; higher tiers add AI, automation, phone, and reporting. Bundles (like Freshsales Suite or CX suite) can reduce total cost if you need multiple products.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on free/entry tiers; upgrade for AI, automation depth, and reporting. Consider bundles if rolling out sales + support.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Plan/Hub</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key limits</th>
                    <th className="px-4 py-3">Approx. price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Freshsales/Freshmarketer (Free/Starter)</td>
                    <td className="px-4 py-3">Testing the platform</td>
                    <td className="px-4 py-3">Basic CRM/marketing features, contact limits</td>
                    <td className="px-4 py-3">Free/low per-user pricing</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro tiers</td>
                    <td className="px-4 py-3">Growing teams</td>
                    <td className="px-4 py-3">AI, advanced workflows, phone, better reporting</td>
                    <td className="px-4 py-3">Varies by seats/users</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise tiers</td>
                    <td className="px-4 py-3">Mid-market with governance needs</td>
                    <td className="px-4 py-3">More permissions, auditing, sandbox options</td>
                    <td className="px-4 py-3">Custom/higher</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">CX/CRM bundles</td>
                    <td className="px-4 py-3">Teams deploying multiple products</td>
                    <td className="px-4 py-3">Discounted bundles across sales/support/marketing</td>
                    <td className="px-4 py-3">Varies</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Model total seats across hubs. Bundles can save cost if you adopt Freshdesk plus Freshsales/marketer. Compare with HubSpot/Zoho for pricing and feature depth at similar tiers.
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
                  <li>Unified CRM, marketing, and support options.</li>
                  <li>Approachable UI and fast setup.</li>
                  <li>AI features for scoring, chat, and insights.</li>
                  <li>Value-focused pricing with free/entry tiers.</li>
                  <li>Marketplace and APIs for integrations.</li>
                  <li>Bundles can reduce cost for multi-hub adoption.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Less customization than Salesforce/HubSpot Enterprise.</li>
                  <li>Advanced marketing features trail some competitors.</li>
                  <li>Ecosystem smaller than HubSpot or Salesforce AppExchange.</li>
                  <li>Pricing scales by seats; plan bundles carefully.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              If you need deeper customization, a larger ecosystem, or different pricing, consider these alternatives.
            </p>
            <p className="mt-2 text-slate-700">All offer CRM/marketing/support; they differ on depth, price, and ecosystem size.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug + alt.name} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
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
            <p className="text-slate-700">Here’s how {toolName} compares to two common CRM/support options.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Pipedrive & Zoho</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/compare/pipedrive-vs-freshworks-vs-zoho">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Pipedrive is sales-focused and simple; Zoho is broad and great value; Freshworks balances sales, support, and marketing with approachable UI. Choose Freshworks if you need support + CRM together; pick Pipedrive for pipeline speed; pick Zoho for maximum app breadth/value.
              </p>
              <p className="mt-2 text-slate-900">If you want a unified support + CRM stack without heavy complexity, Freshworks is a strong middle path.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs HubSpot</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/compare/freshworks-vs-hubspot-vs-zendesk">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                HubSpot offers a larger ecosystem and polished UX but can cost more at scale. Freshworks is more value-focused with simpler deployment. Choose HubSpot for ecosystem depth and advanced features; choose Freshworks for balanced capabilities and price.
              </p>
              <p className="mt-2 text-slate-900">If budget and speed matter, Freshworks is compelling; HubSpot wins when you need extensive integrations and enterprise-grade features.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              Freshworks is worth it for SMB and mid-market teams wanting a unified, value-friendly CRM and CX stack with AI assistance. It reduces stack sprawl and speeds deployment.
            </p>
            <p className="mt-3 text-slate-700">
              If you need heavy customization, massive app ecosystems, or enterprise governance, evaluate HubSpot Enterprise or Salesforce. For pure sales simplicity, Pipedrive may suffice.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Freshworks is a strong, approachable choice for multi-hub GTM teams that want balance between features, price, and speed to deploy.
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
              Choose {toolName} if you want a unified, easy-to-deploy suite covering sales, marketing, and support without enterprise complexity. It’s ideal for SMB and mid-market teams seeking value and speed.
            </p>
            <p>
              Consider HubSpot or Salesforce for larger ecosystems and customization, Pipedrive for sales-only simplicity, or Zendesk if support depth is your priority. Freshworks remains a strong middle ground for multi-hub needs.
            </p>
            <p>Freshworks integrates with key tools and offers APIs/marketplace apps, keeping GTM data connected with minimal lift.</p>
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

export default FreshworksToolPage;
