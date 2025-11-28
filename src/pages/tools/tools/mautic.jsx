import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Mautic";
const slug = "mautic";
const category = "Open Source Marketing Automation";
const shortPitch = "Mautic is an open source marketing automation platform for email, forms, campaigns, and lead management that you can self-host or run with partners.";
const pricingSummary = "Costs depend on hosting and services. Self-hosting reduces software cost but requires infrastructure and maintenance; managed offerings add support.";
const officialUrl = "https://www.mautic.org";
const ratingValue = 4.0;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/mautic.org",
  gradient: "from-indigo-500 via-blue-500 to-emerald-500",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.22)]",
};

const alternatives = [
  { name: "HubSpot", slug: "hubspot" },
  { name: "ActiveCampaign", slug: "activecampaign" },
  { name: "Sendinblue", slug: "sendinblue" },
  { name: "AutopilotHQ", slug: "autopilothq" },
  { name: "MailerLite", slug: "mailerlite" },
];

const faqs = [
  { q: "Is Mautic free?", a: "The software is open source, but you must budget for hosting, maintenance, and sending services." },
  { q: "Do I need developers?", a: "Technical support is recommended for setup, upgrades, and integrations, especially if self-hosted." },
  { q: "Does Mautic include CRM?", a: "No. It integrates with CRMs via API or plugins; you need a separate CRM for sales data." },
  { q: "Can it send SMS?", a: "Yes. With proper plugins and providers, Mautic supports SMS in campaigns." },
  { q: "Is there a hosted option?", a: "Managed hosting partners exist if you prefer not to self-host." },
  { q: "Does it support segmentation?", a: "Yes. You can segment contacts, personalize emails, and trigger dynamic content." },
  { q: "How about security?", a: "Self-hosting requires security upkeep; managed hosting can offload some of that responsibility." },
  { q: "Is Mautic good for large orgs?", a: "It can be, if you invest in hosting, performance tuning, and strong ops processes." },
];

function MauticToolPage() {
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
        "Mautic provides email, forms, and campaign automation with open source flexibility. It fits teams that want control over data, hosting, and customization.",
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
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "Campaign builder", body: "Visual builder for email, SMS, and multi-step nurture flows with branching." },
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "Segments and personalization", body: "Segment contacts, personalize emails, and trigger dynamic content and actions." },
    { icon: <Plug className="h-5 w-5 text-purple-500" />, title: "Integrations and APIs", body: "REST API and plugins to connect CRMs, CMSes, and other tools in your stack." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "Landing pages and forms", body: "Build opt-in forms and landing pages with tracking and conversion goals." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Open source control", body: "Own your deployment, data, and customizations; choose self-hosted or managed." },
    { icon: <Rocket className="h-5 w-5 text-emerald-500" />, title: "Multi-channel", body: "Support for email, SMS, and web personalization based on behavior and segments." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Mautic review: pricing, features, pros & cons, and alternatives so you can decide if open source marketing automation fits your team."
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
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Reviewed by GoDigitalPro - Updated May 2025</span>
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
                  {toolName} gives teams control over marketing automation with open source flexibility. Choose self-hosted or managed depending on your ops capacity.
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
              {toolName} is an open source marketing automation platform covering email, forms, landing pages, segments, and campaigns. You can self-host or use managed partners, giving flexibility over data control and customization.
            </p>
            <p className="mt-3 text-slate-700">
              It requires technical ownership for upgrades, deliverability, and security. Managed options reduce upkeep but add cost. It is best for teams that want control and are willing to own the stack.
            </p>
            <p className="mt-3 text-slate-700">Use it to run nurture flows, segment audiences, and personalize experiences while owning your data and deployments.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams that want marketing automation with open source control and are ready to manage hosting or work with a partner.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Developers and marketers who want data ownership.",
                "Teams with compliance requirements that prefer self-hosting.",
                "Agencies building custom automation for clients.",
                "Companies needing flexible integrations and custom fields.",
                "Organizations replacing pricier SaaS automation tools.",
                "Technical teams comfortable managing deliverability and upgrades.",
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
              {toolName} focuses on core automation features with open source flexibility and integrations.
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
                  {toolName} cost depends on hosting and services. Self-hosting lowers software cost but adds maintenance; managed offerings add support and infrastructure. Budget for deliverability, security, and updates.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Consider total cost: hosting, maintenance, deliverability, and services. Start small and scale with support as needed.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Self-hosted</td>
                    <td className="px-4 py-3">Teams with engineering support</td>
                    <td className="px-4 py-3">Full feature access, hosting costs, manual maintenance</td>
                    <td className="px-4 py-3">Lowest software cost; highest ownership</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Managed/Hosted</td>
                    <td className="px-4 py-3">Teams wanting support</td>
                    <td className="px-4 py-3">Hosting, updates, support, possibly sending services</td>
                    <td className="px-4 py-3">Easier upkeep; higher recurring cost</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise services</td>
                    <td className="px-4 py-3">Large orgs with complex needs</td>
                    <td className="px-4 py-3">Custom support, consulting, advanced integrations</td>
                    <td className="px-4 py-3">Plan for onboarding and deliverability services</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Include infrastructure, monitoring, backups, and deliverability (SPF/DKIM/DMARC) in your plan. Set aside time for upgrades and security patches if self-hosted.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros and cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-indigo-50 p-5 shadow-sm ring-1 ring-indigo-100">
                <div className="flex items-center gap-2 text-indigo-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Open source flexibility and data ownership.</li>
                  <li>Visual campaign builder with multi-channel options.</li>
                  <li>Integrations and API for custom workflows.</li>
                  <li>Lower software cost when self-hosted.</li>
                  <li>Active community and plugin ecosystem.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Requires technical upkeep, security, and deliverability management.</li>
                  <li>No bundled CRM; needs integration for full revenue tracking.</li>
                  <li>UI is less polished than commercial suites.</li>
                  <li>Hosting and email infrastructure setup take time.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other automation tools to balance ownership, convenience, and cost.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items_center justify_between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
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
            <p className="text-slate-700">See how {toolName} stacks up against hosted automation platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify_between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs HubSpot</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/hubspot">
                  View HubSpot
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                HubSpot offers an all-in-one hosted suite with CRM; {toolName} provides open source control and lower software cost. Choose {toolName} if you want ownership and customization, HubSpot for bundled ease and less upkeep.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify_between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs ActiveCampaign</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/activecampaign">
                  View ActiveCampaign
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ActiveCampaign is a hosted automation tool with strong deliverability and UX. {toolName} requires more setup but offers control. Pick {toolName} if you want self-hosted flexibility, ActiveCampaign for managed convenience.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want open source marketing automation and are prepared to manage or pay for hosting, deliverability, and upkeep.
            </p>
            <p className="mt-3 text-slate-700">
              Plan for security, updates, and data hygiene. Decide early between self-hosted and managed based on your ops capacity and compliance needs.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Great for teams that value control and customization; requires ops and technical ownership to succeed.
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
            <p>Use {toolName} for open source marketing automation when you want control over your data and stack.</p>
            <p>
              Choose self-hosted for ownership or managed for lower upkeep; keep maintenance plans for updates, security, and deliverability to protect performance.
            </p>
            <p>{toolName} offers flexibility—human ops and governance ensure reliability and compliance.</p>
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

export default MauticToolPage;
