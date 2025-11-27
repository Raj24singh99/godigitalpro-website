import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, BookOpen, Globe2, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Drip";
const slug = "drip";
const category = "Email & SMS Marketing";
const shortPitch =
  "Drip is built for ecommerce brands to automate email and SMS, personalize by behavior, and drive revenue with targeted lifecycle journeys.";
const pricingSummary =
  "Pricing scales by contact count and SMS usage. Plans start around $39/month for smaller lists; higher tiers add more sends and support.";
const officialUrl = "https://www.drip.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/drip.com",
  gradient: "from-violet-500 via-purple-500 to-indigo-500",
  glow: "shadow-[0_20px_80px_rgba(129,140,248,0.24)]",
};

const alternatives = [
  { name: "Klaviyo", slug: "klaviyo" },
  { name: "Mailchimp", slug: "mailchimp" },
  { name: "Omnisend", slug: "omnisend" },
  { name: "ActiveCampaign", slug: "activecampaign" },
  { name: "ConvertKit", slug: "convertkit" },
];

const faqs = [
  {
    q: "Is Drip built for ecommerce?",
    a: "Yes. Drip focuses on ecommerce brands with Shopify, WooCommerce, and custom storefront integrations for behavior-based targeting.",
  },
  {
    q: "Does Drip support SMS?",
    a: "Yes. You can send SMS, manage consent, and combine SMS with email in multi-step workflows.",
  },
  {
    q: "Can I build visual automations?",
    a: "Yes. Drip offers a visual workflow builder for welcome series, cart recovery, post-purchase flows, and winbacks.",
  },
  {
    q: "Does Drip include forms and popups?",
    a: "Yes. You can build on-site forms and popups to capture emails/phone numbers and trigger automations.",
  },
  {
    q: "Is there A/B testing?",
    a: "You can A/B test subject lines, content, and timing in campaigns and workflows.",
  },
  {
    q: "Does Drip handle segmentation?",
    a: "Behavioral segmentation uses events like orders, site activity, and email engagement to target the right shoppers.",
  },
  {
    q: "How is deliverability?",
    a: "Deliverability is solid, but depends on list health, consent, and sending practices. Dedicated sending options exist on higher tiers.",
  },
  {
    q: "Is Drip GDPR compliant?",
    a: "Drip provides consent management tools and data export options. Teams still must configure flows to honor regional laws.",
  },
];

function DripToolPage() {
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
        "Drip is an ecommerce-first email and SMS platform with strong automation, segmentation, and on-site forms to capture and convert shoppers.",
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
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Ecommerce automations",
      body: "Prebuilt flows for welcome, cart recovery, browse abandonment, and post-purchase make revenue wins fast.",
    },
    {
      icon: <BookOpen className="h-5 w-5 text-purple-500" />,
      title: "Visual journey builder",
      body: "Drag-and-drop workflows combine email and SMS with delays, splits, and event triggers.",
    },
    {
      icon: <Globe2 className="h-5 w-5 text-indigo-500" />,
      title: "Behavioral segmentation",
      body: "Target by orders, product views, engagement, and custom events to keep campaigns relevant.",
    },
    {
      icon: <Plug className="h-5 w-5 text-violet-500" />,
      title: "Shopify-first integrations",
      body: "Deep ecommerce data, product feeds, and revenue attribution help show impact clearly.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Compliance and consent",
      body: "GDPR/CCPA tools, double opt-in, and SMS consent flows help keep lists healthy.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-400" />,
      title: "Forms, popups, and testing",
      body: "On-site capture tools with A/B testing and personalization to grow your list faster.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Drip review for ecommerce marketers: pricing, features, pros & cons, and alternatives for email and SMS automation."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-purple-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-300/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-purple-500" />
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
                  Drip combines email, SMS, and on-site capture in one ecommerce-focused platform with strong automation and segmentation.
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
              {toolName} is an {category.toLowerCase()} platform made for ecommerce stores. It gives marketers automations, segmentation, and on-site capture to convert visitors and grow LTV.
            </p>
            <p className="mt-3 text-slate-700">
              Shopify and WooCommerce integrations pipe in orders and product data so campaigns stay relevant and measurable.
            </p>
            <p className="mt-3 text-slate-700">
              Visual workflows make it easy to design journeys without engineering, and deliverability tooling helps keep lists healthy.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} fits ecommerce teams that want lifecycle revenue with approachable automation.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Shopify brands needing cart/browse abandonment flows quickly.",
                "DTC marketers combining email and SMS in one journey.",
                "Teams wanting visual workflows without engineering help.",
                "Stores that want on-site popups tied directly to automations.",
                "Marketers focused on segmentation by behavior and orders.",
                "Brands that want clear revenue attribution from campaigns.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-purple-400" />
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
              {toolName} emphasizes ecommerce-ready automations, segmentation, and consent-friendly SMS/email orchestration.
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
                  Pricing scales by contact count with SMS usage billed separately. Entry pricing starts near $39/month; larger lists and SMS volume increase cost.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start at your current list size; budget extra for SMS volume. Upgrade when you need higher send limits or advanced support.</p>
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
                    <td className="px-4 py-3">Smaller stores testing automation</td>
                    <td className="px-4 py-3">Contact-based pricing; SMS billed per use</td>
                    <td className="px-4 py-3">~$39+/month</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">Scaling DTC brands</td>
                    <td className="px-4 py-3">Higher send limits, advanced workflows</td>
                    <td className="px-4 py-3">Variable by list size</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Large catalogs and multi-store setups</td>
                    <td className="px-4 py-3">Dedicated sending, SLAs, advanced support</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Evaluate by list size, SMS volumes, and whether you need dedicated IPs or deliverability support. SMS costs can spike with high-volume campaigns, so model usage.
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
                  <li>Ecommerce-first automations and templates.</li>
                  <li>Visual journeys combining email and SMS.</li>
                  <li>Strong segmentation with product and event data.</li>
                  <li>On-site forms/popups built in.</li>
                  <li>Clear revenue attribution for campaigns.</li>
                  <li>Approachable UI for non-technical marketers.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Pricing climbs with list size and SMS volume.</li>
                  <li>Fewer deep CDP features than enterprise suites.</li>
                  <li>Some advanced testing and personalization require workarounds.</li>
                  <li>Dedicated sending and IP options reserved for higher tiers.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              {toolName} competes with ecommerce-focused ESPs and SMS platforms. Choose based on catalog size, list growth pace, and depth of reporting needed.
            </p>
            <p className="mt-2 text-slate-700">Every link below goes to a live tool page—no broken routes.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
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
            <p className="text-slate-700">Compare {toolName} to other ecommerce marketing platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Klaviyo</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/drip-vs-klaviyo">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Klaviyo has deeper analytics and ecosystem integrations. {toolName} offers a lighter UI and straightforward automation for lean teams.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} for simplicity and quick wins; choose Klaviyo if you need deeper reporting and personalization at scale.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Mailchimp</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/drip-vs-mailchimp">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Mailchimp is generalist with broad templates and basic automation. {toolName} is ecommerce-first with deeper Shopify/Woo data.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} for ecommerce lifecycle depth; choose Mailchimp for simple newsletters and wide integrations beyond ecommerce.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you run an ecommerce brand and want approachable email/SMS automation with solid attribution, {toolName} is worth it. Setup is fast and templates are revenue-focused.
            </p>
            <p className="mt-3 text-slate-700">
              If you need heavier analytics or multi-brand governance, compare Klaviyo or enterprise suites. For newsletters only, lighter tools may be cheaper.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> {toolName} is a strong choice for DTC teams seeking lifecycle revenue without heavy Martech overhead.
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
              Choose {toolName} if you want ecommerce-focused email and SMS automation with fast setup and clear revenue attribution.
            </p>
            <p>
              Consider Klaviyo for deeper analytics or Mailchimp for generalist needs. Omnisend and ActiveCampaign are solid if you want broader channel options.
            </p>
            <p>{toolName} brings together on-site capture, automations, and segmentation so lean teams can grow revenue without heavy engineering.</p>
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

export default DripToolPage;
