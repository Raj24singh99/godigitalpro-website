import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Layers3, ClipboardList, Rocket, Crown, ArrowLeft, Headphones, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Zendesk";
const slug = "zendesk";
const category = "Helpdesk";
const shortPitch =
  "Zendesk is an enterprise-grade customer support platform for teams that need omnichannel ticketing, automation, SLAs, and a deep app marketplace.";
const pricingSummary =
  "Paid plans; Suite pricing from around $55/agent/month with higher tiers adding advanced routing, AI, and analytics. Trials available on suites.";
const officialUrl = "https://www.zendesk.com/";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/zendesk.com",
  gradient: "from-emerald-500 via-teal-500 to-indigo-500",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.18)]",
};

const alternatives = [
  { name: "Freshdesk", slug: "freshdesk" },
  { name: "Zoho Desk", slug: "zoho-desk" },
  { name: "Freshworks", slug: "freshworks" },
];

const faqs = [
  {
    q: "Is Zendesk free?",
    a: "Zendesk offers paid plans with trials; there is no full-featured free tier. Some trials provide limited-time access to Suite functionality.",
  },
  {
    q: "Does Zendesk work well for agencies?",
    a: "Yes. Agencies use Zendesk to manage client SLAs, omnichannel requests, and shared inboxes while keeping audits and reporting centralized.",
  },
  {
    q: "Which Zendesk plan is best for beginners?",
    a: "Start with Suite Team/Professional if you need core omnichannel support. Move to Enterprise for advanced routing, roles, and analytics at scale.",
  },
  {
    q: "Can I use Zendesk for client projects?",
    a: "Yes. You can manage client tickets, set SLAs, build knowledge bases, and integrate with project/billing tools via the marketplace.",
  },
  {
    q: "Is Zendesk secure and compliant?",
    a: "Zendesk provides SSO/SAML, audit logs, encryption, IP restrictions, and compliance resources. Admin controls let you enforce least-privilege and policy.",
  },
  {
    q: "Does Zendesk integrate with CRM and marketing tools?",
    a: "Yes. Zendesk has a large marketplace with connectors for Salesforce, HubSpot, Zoho, Slack, Jira, and marketing platforms, plus APIs and webhooks.",
  },
  {
    q: "Is Zendesk good for AI and automation?",
    a: "Zendesk includes bots, triggers, macros, and advanced routing. Higher tiers add AI-powered suggestions and automation for agents and self-serve.",
  },
  {
    q: "How scalable is Zendesk?",
    a: "Zendesk scales to enterprise volumes with routing, permissions, and analytics. Pricing increases with seats and advanced features, so plan governance early.",
  },
];

const featureBlocks = [
  {
    icon: <Headphones className="h-5 w-5 text-emerald-600" />,
    title: "Omnichannel support",
    body: "Email, chat, voice, social, and messaging channels with unified agent workspace so teams handle requests in one place.",
  },
  {
    icon: <ClipboardList className="h-5 w-5 text-indigo-600" />,
    title: "Automation, SLAs, and routing",
    body: "Triggers, macros, and SLAs route tickets to the right teams with priority rules, reducing handling time and improving adherence.",
  },
  {
    icon: <Plug className="h-5 w-5 text-amber-600" />,
    title: "Marketplace and integrations",
    body: "A large marketplace plus APIs/webhooks connect Zendesk to CRM, billing, and project tools, keeping customer context visible to agents.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5 text-emerald-700" />,
    title: "Admin controls and security",
    body: "Role-based access, audit trails, SSO/SAML, IP restrictions, and data controls give admins the governance required for enterprise teams.",
  },
  {
    icon: <Layers3 className="h-5 w-5 text-sky-600" />,
    title: "Knowledge base and self-serve",
    body: "Guide and help center tools reduce ticket volume via articles, bots, and deflection, improving time-to-resolution.",
  },
  {
    icon: <Rocket className="h-5 w-5 text-rose-600" />,
    title: "Analytics and reporting",
    body: "Zendesk Explore provides dashboards for CSAT, SLAs, agent performance, and channel analytics to guide staffing and process improvements.",
  },
];

const pricingTable = [
  { plan: "Suite Team/Professional", best: "SMB/mid teams starting with omnichannel", limits: "Core channels, SLAs, triggers/macros", price: "~$55+/agent/mo" },
  { plan: "Suite Enterprise", best: "Scaling support teams needing advanced controls", limits: "Advanced routing, roles, custom objects, stronger analytics", price: "Custom/higher" },
  { plan: "Add-ons & AI", best: "Teams adding AI, bots, and higher volumes", limits: "Varies by add-on and channel volumes", price: "Add-on pricing" },
];

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

export default function ZendeskToolPage() {
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
        "Zendesk is a mature helpdesk platform known for omnichannel support, automation, and a large marketplace. It’s well-suited for teams that need enterprise controls, routing, and analytics.",
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

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Unbiased Zendesk review for support leaders covering pricing, features, pros & cons, and alternatives. See if Zendesk fits your 2025 support stack."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-amber-500" />
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
                  Zendesk excels at omnichannel support and automation with a large marketplace, making it a strong fit for teams that need enterprise controls and reporting.
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
              Zendesk is a {category.toLowerCase()} built for omnichannel support. It unifies email, chat, voice, and messaging with automation, SLAs, and analytics so fast-growing teams can scale service quality.
            </p>
            <p className="mt-3 text-slate-700">
              Support leaders use Zendesk to manage SLAs, route tickets, and connect CRM and billing data through its marketplace. Agents benefit from macros, triggers, and a unified workspace to move faster.
            </p>
            <p className="mt-3 text-slate-700">
              Zendesk scales well into enterprise environments thanks to admin controls, roles, and reporting while still being approachable for mid-market teams.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Zendesk suits teams that need reliable omnichannel support with automation and governance.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Support teams handling multi-channel volume with SLAs.",
                "Agencies managing client requests and SLAs in one workspace.",
                "Success teams that need to route tickets to delivery and product.",
                "Organizations requiring strong admin controls, roles, and audit trails.",
                "Teams wanting a large app marketplace to tie support to CRM/billing.",
                "Brands investing in self-serve, knowledge base, and deflection.",
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
            <p className="mt-3 text-slate-700">Zendesk focuses on omnichannel efficiency, automation, and insights to scale support quality.</p>
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
                  Zendesk Suite pricing scales by agent and features. Higher tiers add advanced routing, roles, custom objects, AI, and deeper analytics.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on Suite Team/Professional; move to Enterprise as routing, roles, and analytics needs grow.</p>
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
                  {pricingTable.map((row) => (
                    <tr key={row.plan} className="odd:bg-white even:bg-slate-50/60">
                      <td className="px-4 py-3 font-semibold text-slate-900">{row.plan}</td>
                      <td className="px-4 py-3">{row.best}</td>
                      <td className="px-4 py-3">{row.limits}</td>
                      <td className="px-4 py-3">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Teams often start with Suite Team/Professional to go live quickly, then graduate to Enterprise for advanced routing, permissions, and analytics as volume grows.
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
                  <li>Deep omnichannel capabilities and mature marketplace.</li>
                  <li>Strong automation, routing, and SLA handling.</li>
                  <li>Robust admin/security controls (SSO, roles, audit).</li>
                  <li>Explore analytics for CSAT, SLAs, and agent performance.</li>
                  <li>Knowledge base and deflection reduce ticket load.</li>
                  <li>Scales well for enterprise needs.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Pricier than SMB-focused alternatives.</li>
                  <li>Setup and admin depth can feel heavy initially.</li>
                  <li>Advanced customization may need technical ownership.</li>
                  <li>Seat-based pricing scales with headcount.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Here are common support platforms teams compare to Zendesk. These link to live tool pages.
            </p>
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
          <div className="mx-auto max-w-5xl px-6 py-12 space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} vs other tools</h2>
            <p className="text-slate-700">See how Zendesk compares to Freshdesk and Zoho Desk in our detailed comparison.</p>
            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Zendesk vs Freshdesk vs Zoho Desk</h3>
                  <p className="mt-2 text-slate-700">
                    Zendesk leads on omnichannel depth and marketplace; Freshdesk offers strong value for SMB/mid; Zoho Desk aligns with the Zoho suite and bundled pricing.
                  </p>
                </div>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/zendesk-vs-freshdesk-vs-zoho-desk">
                  Open comparison
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              Zendesk is worth it for teams needing omnichannel support, strong routing, and enterprise governance. It shines when you need scale, analytics, and a broad marketplace to integrate your stack.
            </p>
            <p className="mt-3 text-slate-700">
              If budget is tight or you prefer suite alignment, consider Freshdesk or Zoho Desk. But for enterprise-grade support with deep integrations, Zendesk is a top pick.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Great choice for scaling support organizations that need omnichannel depth, automation, and rich analytics.
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
              Choose Zendesk if you need enterprise-level omnichannel support with robust automation and analytics. It’s especially strong for teams managing SLAs across channels and integrating with CRM/billing.
            </p>
            <p>
              Consider Freshdesk or Zoho Desk if you want lower cost or tight suite alignment. For the broadest marketplace and enterprise controls, Zendesk remains a leading choice.
            </p>
            <p>Zendesk integrates well with modern stacks through its marketplace, APIs, and webhooks, making it flexible for complex environments.</p>
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
