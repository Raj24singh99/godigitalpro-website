import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Brevo";
const slug = "brevo";
const category = "Email & CRM";
const shortPitch =
  "Brevo (formerly Sendinblue) is an email, SMS, and marketing automation platform with built-in CRM, forms, and transactional email for growing businesses.";
const pricingSummary =
  "Free tier with daily send limits. Starter from ~$25/month based on email volume; Business adds automation, A/B testing, and landing pages; Enterprise offers dedicated IPs and SSO.";
const officialUrl = "https://www.brevo.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/brevo.com",
  gradient: "from-indigo-500 via-blue-500 to-teal-500",
  glow: "shadow-[0_20px_80px_rgba(79,70,229,0.23)]",
};

const alternatives = [
  { name: "ActiveCampaign", slug: "activecampaign" },
  { name: "MailerLite", slug: "mailerlite" },
  { name: "ConvertKit", slug: "convertkit" },
  { name: "Klaviyo", slug: "klaviyo" },
  { name: "HubSpot", slug: "hubspot" },
];

const faqs = [
  { q: "Is Brevo free?", a: "Brevo has a free plan with daily send limits and core email features. Paid plans scale by email volume and unlock automation, A/B testing, and landing pages." },
  { q: "Does Brevo include a CRM?", a: "Yes. Brevo includes a lightweight CRM with contacts, deals, tasks, and pipeline management to tie campaigns to revenue." },
  { q: "Can Brevo send transactional emails?", a: "Yes. Brevo supports transactional email and SMTP relay, letting you send receipts, alerts, and password resets alongside marketing campaigns." },
  { q: "Does Brevo have automation?", a: "Marketing automation with workflows, triggers, and conditional logic is available on Business and up, including email/SMS steps and segment updates." },
  { q: "How is deliverability?", a: "Brevo offers dedicated IPs on higher tiers, warmup guidance, and deliverability best practices. Good list hygiene and domain authentication remain key." },
  { q: "Does Brevo integrate with ecommerce?", a: "Yes. Integrations with Shopify, WooCommerce, and others enable cart recovery, product recommendations, and purchase-triggered automations." },
  { q: "Can I send SMS and WhatsApp?", a: "Brevo supports SMS, WhatsApp campaigns, and chat widgets so you can orchestrate multi-channel communication from one platform." },
  { q: "Which plan should I start with?", a: "Start Free to test. Move to Starter if you need higher sends; choose Business for automation, A/B, landing pages, and send-time optimization." },
];

function BrevoToolPage() {
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
        "Brevo combines email, SMS, marketing automation, and a CRM in one platform with clear volume-based pricing. It’s popular with SMBs needing campaigns and transactional email without enterprise cost.",
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
      icon: <Mail className="h-5 w-5 text-indigo-500" />,
      title: "Email and SMS campaigns",
      body: "Send broadcasts with templates, personalization, and dynamic content across email, SMS, and WhatsApp to maintain multi-channel reach.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-blue-500" />,
      title: "Automation and journeys",
      body: "Build workflows for welcome sequences, cart recovery, lead nurture, and post-purchase flows with branching and scoring on Business and above.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-emerald-500" />,
      title: "Built-in CRM and deals",
      body: "Track contacts, deals, and tasks inside Brevo so marketing and sales share context on pipelines and campaign impact.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Ecommerce and integrations",
      body: "Connect Shopify, WooCommerce, and CMS/CRM tools to sync events, trigger automations, and personalize campaigns with purchase data.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Deliverability and compliance",
      body: "Dedicated IP options, warmup tools, consent capture, and GDPR-friendly features help keep inbox placement healthy.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Landing pages and forms",
      body: "Build forms and landing pages to capture leads, then route them to lists, segments, and automations without extra tooling.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Brevo (Sendinblue) review for marketers: pricing, features, pros & cons, alternatives, and comparisons vs ActiveCampaign and ConvertKit."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-indigo-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-blue-300/20 blur-3xl" />
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
                  Brevo combines email, SMS, automation, and a CRM so SMBs can run campaigns and transactional messages with clear volume-based pricing.
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
              {toolName} is an {category.toLowerCase()} platform that merges campaigns, automation, transactional email, SMS/WhatsApp, and a CRM. It’s designed to give growing teams multi-channel communication without stitching many tools together.
            </p>
            <p className="mt-3 text-slate-700">
              Agencies and SMBs use Brevo for newsletters, lifecycle journeys, cart recovery, and customer updates, while keeping sales teams aligned via deals and tasks in the CRM.
            </p>
            <p className="mt-3 text-slate-700">
              Volume-based pricing makes costs predictable compared to seat-heavy marketing automation suites.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} suits SMBs and agencies that need email/SMS automation plus lightweight CRM.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Ecommerce brands running newsletters, promos, and cart recovery.",
                "SMBs combining campaigns, transactional email, and simple CRM.",
                "Agencies managing lifecycle campaigns for clients on one platform.",
                "B2B teams nurturing leads with email/SMS workflows and deals.",
                "Marketers needing volume-based pricing instead of per-seat MA tools.",
                "Teams wanting forms/landing pages tied directly to automations.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on unified messaging, automation, and CRM alignment.</p>
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
                  Pricing scales by email volume. Free covers low-volume sends; Starter lifts limits; Business adds automation, A/B testing, landing pages, and send-time optimization; Enterprise adds SSO, dedicated IPs, and support.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start Free; move to Starter for higher sends; pick Business for automation and testing; Enterprise for SSO/dedicated IP.</p>
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
                    <td className="px-4 py-3">Testing and low send volumes</td>
                    <td className="px-4 py-3">Basic email, daily limit, forms, core CRM</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter</td>
                    <td className="px-4 py-3">Growing lists</td>
                    <td className="px-4 py-3">Higher send limits, no daily cap, basic automation</td>
                    <td className="px-4 py-3">~$25/month (volume-based)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business</td>
                    <td className="px-4 py-3">Lifecycle and ecommerce teams</td>
                    <td className="px-4 py-3">Advanced automation, A/B tests, landing pages, send-time optimization</td>
                    <td className="px-4 py-3">From ~$65+/month (volume-based)</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">High-volume/compliance needs</td>
                    <td className="px-4 py-3">Dedicated IPs, SSO/SAML, SLA support, custom limits</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Pick based on monthly volume and automation needs. Business is the sweet spot for serious lifecycle programs; add Enterprise if you need dedicated IP/SSO and higher support tiers.
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
                  <li>Unified email, SMS/WhatsApp, automation, and CRM in one tool.</li>
                  <li>Volume-based pricing can be cheaper than per-seat MAPs.</li>
                  <li>Transactional email + SMTP alongside marketing campaigns.</li>
                  <li>Good ecommerce triggers for cart recovery and post-purchase.</li>
                  <li>Forms and landing pages reduce need for extra tools.</li>
                  <li>Dedicated IP and deliverability options for higher-volume senders.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Automation depth is lighter than enterprise MAPs like HubSpot/Marketo.</li>
                  <li>Template editor can feel limited for complex modular designs.</li>
                  <li>Free plan daily cap can be restrictive for testing larger lists.</li>
                  <li>Advanced reporting and attribution are basic compared to higher-end tools.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Brevo competes with mid-market email/automation tools and ecommerce platforms. Choose based on automation depth, CRM needs, and pricing model.
            </p>
            <p className="mt-2 text-slate-700">All support campaigns and automation; they differ on CRM depth, ecommerce focus, and analytics.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
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
            <p className="text-slate-700">Here’s how Brevo compares with two common marketing automation choices.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs ActiveCampaign</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/compare/brevo-vs-activecampaign-vs-convertkit">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ActiveCampaign has deeper automation, lead scoring, and CRM features. Brevo is simpler with volume-based pricing and built-in transactional email.
              </p>
              <p className="mt-2 text-slate-700">
                Choose Brevo for value and multi-channel basics; choose ActiveCampaign if you need advanced automation and sales alignment.
              </p>
              <p className="mt-2 text-slate-900">Brevo wins on price and transactional; ActiveCampaign wins on automation depth and reporting.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs ConvertKit</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/compare/brevo-vs-activecampaign-vs-convertkit">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ConvertKit is creator-first with simple automations and strong deliverability. Brevo offers SMS/WhatsApp, transactional email, and a CRM, making it broader for SMBs and ecommerce.
              </p>
              <p className="mt-2 text-slate-700">
                Choose Brevo if you need multi-channel and transactional; choose ConvertKit for creator-centric email with straightforward tagging.
              </p>
              <p className="mt-2 text-slate-900">Both are budget-friendly; pick based on channel breadth vs creator focus.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              Brevo is worth it for SMBs and agencies that want unified email/SMS automation, transactional email, and a light CRM with transparent, volume-based pricing.
            </p>
            <p className="mt-3 text-slate-700">
              If you need enterprise-level automation, attribution, or sales pipelines, consider ActiveCampaign or HubSpot. For creators, ConvertKit may feel simpler.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Brevo is a practical all-in-one for multi-channel messaging and CRM alignment without enterprise costs.
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
              Choose Brevo if you want campaigns, automation, CRM, and transactional email together with predictable volume-based pricing. It’s strong for SMBs and ecommerce brands.
            </p>
            <p>
              Consider ActiveCampaign for deeper automation/CRM or HubSpot for full-funnel attribution. ConvertKit is great for creator-first lists. Brevo remains a balanced choice for multi-channel messaging.
            </p>
            <p>Brevo integrates with common CMS/ecommerce stacks and CRMs, making it easy to add campaigns and automation without heavy setup.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-indigo-700 hover:text-indigo-600" href={officialUrl}>
                Visit {toolName}
              </a>
              .
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
      {open && (
        <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">
          {answer}
        </div>
      )}
    </div>
  );
}

export default BrevoToolPage;
