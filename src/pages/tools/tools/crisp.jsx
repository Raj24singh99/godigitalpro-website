import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Crisp";
const slug = "crisp";
const category = "Live Chat & Shared Inbox";
const shortPitch =
  "Crisp is a modern live chat and multi-channel inbox that blends chat, email, and messaging apps with chatbots, campaigns, and a collaborative helpdesk.";
const pricingSummary =
  "Free plan with basic chat. Pro starts around $25/workspace/month, Unlimited near $95/month adding automation, multi-channel inbox, status page, and advanced triggers.";
const officialUrl = "https://crisp.chat";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/crisp.chat",
  gradient: "from-emerald-500 via-teal-500 to-cyan-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.22)]",
};

const alternatives = [
  { name: "Intercom", slug: "intercom" },
  { name: "Tidio", slug: "tidio" },
  { name: "LiveChat", slug: "livechat" },
  { name: "HelpCrunch", slug: "helpcrunch" },
  { name: "Zendesk", slug: "zendesk" },
];

const faqs = [
  { q: "Is Crisp good for startups?", a: "Yes. Crisp is affordable, fast to install, and offers a free tier. Startups use it for live chat, shared inbox, bots, and status updates without enterprise overhead." },
  { q: "Does Crisp have chatbots?", a: "Crisp includes playbooks and automation bots that handle routing, FAQs, and lead capture. You can trigger bots based on events, pages, or segments." },
  { q: "What channels does Crisp support?", a: "Crisp unifies website chat, email, WhatsApp, Messenger, Instagram, and more into one inbox. You can also add a knowledge base and status page plugins." },
  { q: "How is Crisp priced?", a: "Pricing is workspace-based with free, Pro, and Unlimited tiers. Unlimited unlocks automation, triggers, custom email domains, and advanced integrations." },
  { q: "Is Crisp secure and GDPR-friendly?", a: "Crisp supports GDPR compliance, data exports, and controls for consent. You can manage user roles, enable SSO (on upper tiers), and restrict data access per agent." },
  { q: "Does Crisp integrate with CRMs and tools?", a: "Yes. Integrations and webhooks connect Crisp to CRM, marketing automation, Slack, and analytics, plus a plugin marketplace for extras like Shopify and WordPress." },
  { q: "Can I send campaigns from Crisp?", a: "You can send email and in-app messages with segmentation, drip sequences, and triggers to onboard or nurture users." },
  { q: "Which Crisp plan should I start with?", a: "Use the free plan to test live chat, then move to Pro for multi-channel inbox and triggers. Upgrade to Unlimited when you need automation, status pages, and advanced roles." },
];

function CrispToolPage() {
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
        "Crisp combines live chat, shared inbox, bots, and campaigns in one place. It’s popular with startups and SMBs that want modern chat experiences without Intercom-level prices.",
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
      icon: <MessageCircle className="h-5 w-5 text-emerald-500" />,
      title: "Unified inbox across channels",
      body: "Manage web chat, email, and messaging apps from one inbox with assignments, tags, and saved replies so teams reply faster.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-cyan-500" />,
      title: "Bots and playbooks",
      body: "Automate routing, FAQs, and lead capture with triggers, conditions, and multi-step flows to reduce agent load and speed responses.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-emerald-500" />,
      title: "Campaigns and sequences",
      body: "Send targeted email and in-app campaigns, drip sequences, and onboarding nudges to activate and retain users.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Integrations and plugins",
      body: "Connect to Shopify, WordPress, Slack, CRMs, and analytics. Use webhooks and the plugin marketplace to extend workflows.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Collaboration and roles",
      body: "Shared inbox features, mentions, internal notes, and role permissions keep teams aligned while protecting sensitive conversations.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Status and helpdesk options",
      body: "Enable Crisp Status page and knowledge base plugins so customers can self-serve during incidents or common questions.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Comprehensive Crisp review for startups and SMBs: pricing, features, pros & cons, alternatives, and how Crisp compares to Tidio, LiveChat, and Intercom."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-emerald-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-emerald-200 blur-3xl" />
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
                  Crisp blends live chat, inbox, bots, and campaigns to keep support and growth teams fast while keeping costs predictable for startups and SMBs.
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
              {toolName} is a {category.toLowerCase()} that unifies live chat, email, and messaging apps with automation and campaigns. Teams can handle support, pre-sales, and onboarding from one place.
            </p>
            <p className="mt-3 text-slate-700">
              Startups adopt Crisp for its clean widget, fast setup, and affordable plans. Agencies appreciate the workspace model, role controls, and plugin ecosystem for eCommerce and SaaS sites.
            </p>
            <p className="mt-3 text-slate-700">
              Crisp also offers status pages and a knowledge base plugin so customers can self-serve during incidents or FAQs, reducing ticket volume.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} suits product, support, and growth teams that want unified chat + inbox with automation.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Startups needing affordable live chat, inbox, and bots in one place.",
                "SaaS teams running onboarding messages, triggers, and lifecycle campaigns.",
                "Ecommerce stores managing chat, email, and social DMs with fast handoffs.",
                "Support teams wanting a shared inbox with tagging, notes, and roles.",
                "Agencies managing multiple client workspaces and branded chat widgets.",
                "Product teams that want status pages and knowledge base to reduce tickets.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on fast support, automation, and campaign workflows without heavy complexity.</p>
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
                  Pricing is workspace-based. Free covers basic chat; Pro unlocks multi-channel inbox and triggers; Unlimited adds automation, playbooks, SSO, and advanced plugins.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on Pro for multi-channel chat; upgrade to Unlimited when automation and roles matter.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Plan</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key inclusions</th>
                    <th className="px-4 py-3">Approx. price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Free</td>
                    <td className="px-4 py-3">Testing chat widget</td>
                    <td className="px-4 py-3">Basic chat, limited history, single inbox</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">SMBs and startups</td>
                    <td className="px-4 py-3">Multi-channel inbox, triggers, custom themes, integrations</td>
                    <td className="px-4 py-3">~$25/workspace/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Unlimited</td>
                    <td className="px-4 py-3">Growing teams and agencies</td>
                    <td className="px-4 py-3">Bots/playbooks, status page, KB plugin, SSO, advanced roles</td>
                    <td className="px-4 py-3">~$95/workspace/month</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Consider automation volume, channels, and role needs when choosing plans. Unlimited is often worth it for bots, status pages, and governance.
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
                  <li>Affordable live chat + inbox with a generous free tier.</li>
                  <li>Automation and bots reduce workload for support and sales.</li>
                  <li>Multi-channel messaging (chat, email, socials) in one place.</li>
                  <li>Campaigns and sequences extend beyond reactive support.</li>
                  <li>Status page and knowledge base options for self-service.</li>
                  <li>Flexible integrations and plugin marketplace for ecommerce/SaaS.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Advanced automation and SSO only on the Unlimited tier.</li>
                  <li>Reporting depth is lighter than enterprise CX suites.</li>
                  <li>Large teams may outgrow workspace/user management options.</li>
                  <li>Heavy bot flows need careful setup to avoid user frustration.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Crisp competes with live chat and CX platforms. Choose based on automation depth, omnichannel needs, and price per seat or workspace.
            </p>
            <p className="mt-2 text-slate-700">All of these support chat; they differ on ticketing, bot power, and enterprise controls.</p>
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
            <p className="text-slate-700">Here’s how Crisp compares to two popular live chat options.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Tidio</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/compare/helpcrunch-vs-tidio-vs-crisp">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Tidio is known for quick AI chatbots and budget-friendly plans. Crisp offers broader inbox, campaigns, and status page options. Both are easy to launch and integrate.
              </p>
              <p className="mt-2 text-slate-700">
                Choose Crisp if you want chat + inbox + campaigns together; choose Tidio if bots-first automation at the lowest cost is your priority.
              </p>
              <p className="mt-2 text-slate-900">Crisp is stronger for multi-channel inboxes; Tidio shines for plug-and-play chatbots.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs LiveChat</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/compare/tidio-vs-crisp-vs-livechat">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                LiveChat is mature, with strong routing and analytics. Crisp focuses on modern UX, bots, and campaign workflows. LiveChat pricing is per seat; Crisp is workspace-based.
              </p>
              <p className="mt-2 text-slate-700">
                Choose Crisp if you want automation and multi-channel messaging with friendly pricing. Choose LiveChat for deeper reporting and traditional agent routing controls.
              </p>
              <p className="mt-2 text-slate-900">Both integrate with CRMs; decide based on automation needs vs. enterprise routing depth.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it for startups, SMBs, and agencies that want live chat, inbox, bots, and campaigns without enterprise pricing. Automation and multi-channel support reduce workloads and improve response times.
            </p>
            <p className="mt-3 text-slate-700">
              If you need deep ITSM, complex routing, or enterprise compliance, consider Zendesk or Intercom. For lightweight chatbots only, Tidio might be enough.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Crisp delivers strong value as an all-in-one live chat and inbox platform with automation and campaigns for growing teams.
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
              Choose Crisp if you want a clean, affordable chat plus inbox platform with automation, campaigns, and plugins that help support and growth teams move faster.
            </p>
            <p>
              Consider Tidio for bots-first simplicity or Intercom/Zendesk for enterprise routing and ticketing depth. Crisp balances automation, price, and UX for most SMB needs.
            </p>
            <p>Crisp fits modern stacks with webhooks and integrations feeding data into CRMs, analytics, and marketing automation.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-emerald-700 hover:text-emerald-600" href={officialUrl}>
                Visit {toolName}
              </a>
              .
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
      {open && (
        <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">
          {answer}
        </div>
      )}
    </div>
  );
}

export default CrispToolPage;
