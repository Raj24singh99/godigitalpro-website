import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown, BarChart3, Workflow, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Klaviyo";
const slug = "klaviyo";
const category = "Email & SMS for ecommerce";
const shortPitch =
  "Klaviyo is a lifecycle marketing platform for ecommerce brands, combining email, SMS, segmentation, and predictive analytics to drive revenue.";
const pricingSummary =
  "Free up to 500 contacts with email/SMS credits. Paid plans scale by contacts/messages; advanced features like predictive analytics and CDP-style profiles included.";
const officialUrl = "https://www.klaviyo.com";
const ratingValue = 4.6;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/klaviyo.com",
  gradient: "from-emerald-500 via-green-600 to-teal-700",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.18)]",
};

const alternatives = [
  { name: "Omnisend", slug: "omnisend" },
  { name: "ActiveCampaign", slug: "activecampaign" },
  { name: "MailerLite", slug: "mailerlite" },
  { name: "ConvertKit", slug: "convertkit" },
  { name: "HubSpot", slug: "hubspot" },
];

const faqs = [
  { q: "Is Klaviyo good for ecommerce?", a: "Yes. Klaviyo is built for ecommerce with deep Shopify/WooCommerce data, product feeds, flows, and predictive analytics for churn/CLV." },
  { q: "Does Klaviyo support SMS?", a: "Klaviyo supports SMS alongside email with compliance tools, consent capture, and combined reporting so you can coordinate channels." },
  { q: "How does pricing work?", a: "Pricing scales by contacts/messages. There’s a free tier up to 500 contacts with limited sends. Paid plans unlock higher sends, SMS credits, and full features." },
  { q: "Does Klaviyo have flows/automation?", a: "Yes. Visual flows power welcome, browse/cart abandonment, win-back, post-purchase, and review requests with branching and testing." },
  { q: "Can I do segmentation and personalization?", a: "Klaviyo’s segments pull from events, revenue, product data, and predictive scores. Dynamic content/personalization is baked into templates." },
  { q: "What integrations are available?", a: "Native connectors for Shopify, WooCommerce, BigCommerce, Recharge, Facebook/Google Ads, plus APIs and webhooks for custom events." },
  { q: "Does Klaviyo support A/B testing?", a: "Yes. Test subject lines, content, send times, and flows. Predictive send time and benchmarks help optimize performance." },
  { q: "How strong are analytics?", a: "Revenue reporting, attribution, cohort views, and predictive metrics are strong for ecommerce teams wanting channel-level performance." },
];

function KlaviyoPage() {
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
        "Klaviyo is the go-to lifecycle platform for ecommerce brands, combining email, SMS, segmentation, and predictive analytics to drive repeat purchases and higher LTV.",
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
    { icon: <Workflow className="h-5 w-5 text-emerald-600" />, title: "Flows for ecommerce", body: "Visual flows for welcome, browse/cart abandonment, post-purchase, and win-back with branching and testing." },
    { icon: <MessageSquare className="h-5 w-5 text-indigo-600" />, title: "Email + SMS together", body: "Coordinate email and SMS with unified consent, profiles, and reporting to avoid channel silos." },
    { icon: <BarChart3 className="h-5 w-5 text-amber-500" />, title: "Predictive analytics", body: "CLV, churn risk, and buying probability help segment and time campaigns more effectively." },
    { icon: <Plug className="h-5 w-5 text-sky-500" />, title: "Deep commerce integrations", body: "Tight Shopify/WooCommerce data plus app connectors and APIs for events and product feeds." },
    { icon: <ClipboardList className="h-5 w-5 text-emerald-500" />, title: "Segmentation & personalization", body: "Build segments with revenue, product, and engagement data; personalize blocks and recommendations." },
    { icon: <ShieldCheck className="h-5 w-5 text-rose-500" />, title: "Compliance & deliverability", body: "Consent capture, list hygiene tools, and deliverability guidance keep inbox placement healthy." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Klaviyo review for ecommerce teams covering pricing, features, pros/cons, alternatives, and how it compares to Omnisend and ActiveCampaign."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-teal-300/20 blur-3xl" />
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
                  Klaviyo pairs rich ecommerce data with email and SMS so brands can run targeted flows, predictive segments, and channel-coordinated campaigns from one platform.
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
              {toolName} is an {category.toLowerCase()} platform that connects store data, email, and SMS for lifecycle marketing. It excels at segmentation, automation, and predictive analytics for ecommerce growth.
            </p>
            <p className="mt-3 text-slate-700">
              Brands use Klaviyo to power flows (welcome, cart, post-purchase), targeted campaigns, and product recommendations. Unified profiles and consent across channels keep messaging consistent.
            </p>
            <p className="mt-3 text-slate-700">
              If you want an ecommerce-first platform with built-in analytics and strong deliverability, Klaviyo is a top contender.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Klaviyo fits ecommerce brands wanting coordinated email/SMS with deep data.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "DTC brands on Shopify/WooCommerce needing lifecycle flows.",
                "Ecommerce teams segmenting by purchase behavior and predictive scores.",
                "Marketers coordinating email + SMS with unified profiles.",
                "Brands wanting product feeds and recommendations in campaigns.",
                "Teams needing benchmarks, cohort views, and revenue reporting.",
                "Agencies managing ecommerce clients with standard flows and templates.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on ecommerce-ready automation, personalization, and analytics.</p>
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
                  Pricing scales by contacts and messages. Free up to 500 contacts with limited sends; paid tiers unlock full flows, analytics, and SMS credits. SMS is billed by region; email by contacts/sends.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start free to test; upgrade as you scale lists and flows; add SMS credits as you expand channel mix.</p>
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
                    <td className="px-4 py-3">Testing and small lists</td>
                    <td className="px-4 py-3">Up to 500 contacts, limited sends, core flows</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Email/SMS paid tiers</td>
                    <td className="px-4 py-3">Scaling ecommerce brands</td>
                    <td className="px-4 py-3">Pricing by contacts; SMS credits by region</td>
                    <td className="px-4 py-3">Varies by list size (from ~$45/month)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">High-volume and multi-brand teams</td>
                    <td className="px-4 py-3">Custom limits, SSO, dedicated support</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Budget for both email and SMS usage. If you have mixed product catalogs, use product feeds and predictive segments to drive revenue per send. Consider deliverability warmup when ramping volume.
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
                  <li>Deep ecommerce data and product feeds.</li>
                  <li>Strong flows and segmentation with predictive metrics.</li>
                  <li>Unified email/SMS with consent and reporting.</li>
                  <li>Integrations for major stores and apps; solid APIs.</li>
                  <li>Revenue-focused analytics and benchmarks.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Costs scale with list size; SMS adds extra cost.</li>
                  <li>Not ideal for non-commerce CRM-heavy use cases.</li>
                  <li>Advanced personalization still requires testing and design effort.</li>
                  <li>Higher SMS volumes need careful compliance management.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              If you need a different pricing model or broader CRM features, consider these platforms. All link to detailed tool pages.
            </p>
            <p className="mt-2 text-slate-700">Each balances ecommerce focus, automation depth, and pricing differently.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Lifecycle marketing alternative.</p>
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
            <p className="text-slate-700">Here’s how Klaviyo compares to close ecommerce automation platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Omnisend vs MailerLite</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/klaviyo-vs-omnisend-vs-mailerlite">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Omnisend is ecommerce-focused with SMS at good value; MailerLite is simpler and cheaper. Klaviyo leads on data depth, flows, and predictive analytics for scaling brands.
              </p>
              <p className="mt-2 text-slate-900">
                Choose Klaviyo for data-rich flows; choose Omnisend for value; choose MailerLite if you need simplicity over depth.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Omnisend vs ActiveCampaign</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/omnisend-vs-klaviyo-vs-activecampaign">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ActiveCampaign brings CRM-style automations and deals. Omnisend competes on ecommerce value. Klaviyo leads for Shopify/WooCommerce data depth, predictive metrics, and SMS/email cohesion.
              </p>
              <p className="mt-2 text-slate-900">
                Choose Klaviyo for ecommerce-first depth; choose ActiveCampaign if you need CRM + multichannel beyond ecommerce; choose Omnisend if budget is tight with solid ecommerce flows.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              Klaviyo is worth it for ecommerce brands that need sophisticated segmentation, flows, and unified email/SMS. Predictive analytics and revenue reporting help teams scale efficiently.
            </p>
            <p className="mt-3 text-slate-700">
              If you’re not ecommerce-first or need CRM-heavy features, consider ActiveCampaign or HubSpot. For lean budgets, Omnisend/MailerLite may suffice. But for Shopify/WooCommerce merchants, Klaviyo remains a top pick.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> {toolName} is a leading lifecycle platform for ecommerce growth with strong data, flows, and SMS/email coordination.
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
              Choose {toolName} if you run ecommerce and need data-rich flows, predictive segmentation, and coordinated email/SMS. It’s excellent for scaling DTC brands and agencies serving them.
            </p>
            <p>
              Consider Omnisend or MailerLite for simpler/cheaper needs, and ActiveCampaign for broader CRM-style automation. Klaviyo remains a top-tier ecommerce-first choice with strong ROI.
            </p>
            <p>{toolName} integrates cleanly with stores and ad platforms, stitching revenue data into campaigns and reporting.</p>
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

export default KlaviyoPage;
