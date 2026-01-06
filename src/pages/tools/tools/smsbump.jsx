import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "SMSBump (Yotpo)";
const slug = "smsbump";
const category = "SMS & Conversational Marketing";
const shortPitch =
  "SMSBump by Yotpo is an SMS marketing platform for ecommerce, offering compliant messaging, automations, flows, and integrations with Shopify and marketing stacks.";
const pricingSummary =
  "Pay-as-you-go and tiered plans based on SMS/MMS usage and features. Costs scale with sends, carrier fees, and advanced features like flows and segmentation.";
const officialUrl = "https://www.yotpo.com/smsbump/";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/yotpo.com",
  gradient: "from-emerald-500 via-teal-500 to-blue-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.24)]",
};

const alternatives = [
  { name: "Attentive", slug: "attentive" },
  { name: "Postscript", slug: "postscript" },
  { name: "Klaviyo", slug: "klaviyo" },
  { name: "Omnisend", slug: "omnisend" },
  { name: "Twilio", slug: "twilio" },
];

const faqs = [
  {
    q: "What is SMSBump?",
    a: "SMSBump is an SMS marketing platform for ecommerce, part of Yotpo. It provides compliant messaging, automations, and segmentation.",
  },
  {
    q: "Who is it for?",
    a: "Shopify and ecommerce brands that want to run SMS campaigns, automations, and conversational flows.",
  },
  {
    q: "How is pricing structured?",
    a: "Usage-based with tiers; costs depend on SMS/MMS volume, country rates, and carrier fees. Higher tiers add advanced features.",
  },
  {
    q: "Does it support compliance?",
    a: "Yes. It includes tools for opt-in/opt-out, TCPA/GDPR compliance, and consent capture. Teams must configure compliance correctly.",
  },
  {
    q: "What automations exist?",
    a: "Flows for abandoned carts, shipping updates, win-backs, and segmentation-based campaigns.",
  },
  {
    q: "Does it integrate with Shopify?",
    a: "Yes. It integrates deeply with Shopify and Yotpo’s ecosystem (loyalty, reviews) plus other marketing tools.",
  },
  {
    q: "Is it only SMS?",
    a: "Focus is SMS/MMS; pair with email for a full lifecycle program.",
  },
  {
    q: "Is deliverability guaranteed?",
    a: "No. Deliverability depends on compliance, sender reputation, carrier rules, and list quality.",
  },
];

function SmsbumpToolPage() {
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
        "SMSBump by Yotpo powers SMS marketing and automations for ecommerce. It’s strong for Shopify brands that need compliant messaging, flows, and Yotpo ecosystem integrations.",
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
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "SMS/MMS campaigns",
      body: "Send promos and announcements with compliant opt-in/opt-out management.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Automations & flows",
      body: "Set up abandoned cart, shipping updates, win-backs, and triggered journeys.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Segmentation",
      body: "Target by behavior, purchase history, and attributes to increase ROI.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Compliance tooling",
      body: "Consent capture, opt-outs, quiet hours, and country-specific rules to stay compliant.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Shopify & Yotpo ecosystem",
      body: "Deep Shopify integration plus Yotpo reviews/loyalty connections for coordinated messaging.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Analytics & attribution",
      body: "Track revenue, conversions, and deliverability; integrate with broader analytics.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="SMSBump (Yotpo) review: pricing, features, pros & cons, and alternatives so you can decide if it fits your SMS strategy."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-sky-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-emerald-600" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-emerald-100 blur-3xl" />
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
                  {toolName} powers SMS flows for ecommerce—use it with solid consent practices, segmentation, and creative testing to maximize ROI.
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
              {toolName} is an SMS marketing platform from Yotpo focused on ecommerce. It provides compliant opt-in/opt-out, automations, segmentation, and integrations with Shopify and Yotpo products.
            </p>
            <p className="mt-3 text-slate-700">
              It’s best for brands that want to pair SMS with email and loyalty, using flows like abandoned cart, shipping updates, and win-backs. Compliance setup is critical to protect deliverability.
            </p>
            <p className="mt-3 text-slate-700">
              Use it alongside email, paid ads, and onsite capture to build lists and trigger targeted messaging.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for ecommerce teams that want compliant SMS with Shopify/Yotpo integrations.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Shopify brands running abandoned cart and shipping flows via SMS.",
                "Retention teams adding SMS to lifecycle alongside email/loyalty.",
                "Marketers needing segmentation and triggered campaigns.",
                "Teams that value Yotpo integrations (reviews, loyalty, UGC).",
                "Growth teams testing promos, launches, and two-way messaging.",
                "Brands focused on compliance and deliverability in regulated regions.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
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
              {toolName} centers on compliant SMS sending, automations, and ecommerce integrations.
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
                  {toolName} pricing is usage-based; fees vary by SMS/MMS volume, country rates, and features. Advanced flows and segmentation sit on higher tiers. Model costs with expected sends and revenue per send.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with pay-as-you-go to validate ROI; move to a plan that matches your monthly volume and feature needs.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Pay-as-you-go/Starter</td>
                    <td className="px-4 py-3">Testing SMS</td>
                    <td className="px-4 py-3">Basic campaigns, opt-in tools</td>
                    <td className="px-4 py-3">Validate compliance and performance</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">Active ecommerce programs</td>
                    <td className="px-4 py-3">Automations, segmentation, integrations</td>
                    <td className="px-4 py-3">Estimate monthly send volume</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">High-volume/advanced needs</td>
                    <td className="px-4 py-3">Advanced flows, support, potential discounts</td>
                    <td className="px-4 py-3">Custom pricing; monitor carrier fees</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Include costs for carrier fees and compliance management. Pair with email to balance costs and reduce SMS fatigue.
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
                  <li>Strong Shopify and Yotpo ecosystem integration.</li>
                  <li>Automations and segmentation for ecommerce journeys.</li>
                  <li>Compliance tooling for opt-in/opt-out and quiet hours.</li>
                  <li>Analytics for revenue attribution and deliverability.</li>
                  <li>Pairs well with email and loyalty programs.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Usage costs rise with send volume and carrier fees.</li>
                  <li>Compliance setup is mandatory; mistakes hurt deliverability.</li>
                  <li>SMS fatigue risk—requires thoughtful segmentation and frequency.</li>
                  <li>Limited to SMS/MMS; email still needed for full lifecycle.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other SMS platforms to match your ecommerce stack, compliance needs, and pricing preferences.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
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
            <p className="text-slate-700">See how {toolName} compares to other SMS platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Attentive</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/attentive">
                  View Attentive
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Attentive is a premium SMS platform with strong services; {toolName} integrates tightly with Shopify and Yotpo. Choose based on desired services, pricing, and ecosystem fit.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Postscript</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/postscript">
                  View Postscript
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Postscript is SMS-first for Shopify; {toolName} benefits from Yotpo ecosystem (loyalty/reviews). Choose based on feature depth, pricing, and whether you’re already using Yotpo.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you’re an ecommerce brand adding or scaling SMS with Shopify and you want Yotpo ecosystem integrations plus compliance tools.
            </p>
            <p className="mt-3 text-slate-700">
              Model costs against projected SMS revenue, set up opt-in correctly, and balance SMS with email to avoid fatigue. Monitor deliverability and compliance continuously.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A solid SMS option for Shopify/Yotpo users—best when paired with good list capture, segmentation, and compliance practices.
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
              Choose {toolName} if you’re a Shopify brand and want SMS automations with Yotpo ecosystem ties and compliance tooling built in.
            </p>
            <p>
              Consider Attentive for managed services or Postscript for SMS-first depth. {toolName} shines when you need Shopify/Yotpo integration and solid compliance workflows.
            </p>
            <p>{toolName} can drive revenue when paired with smart segmentation, cadence control, and complementary email programs.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-emerald-700 hover:text-emerald-500" href={officialUrl}>
                Visit {toolName}
              </a>.
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
      {open && <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">{answer}</div>}
    </div>
  );
}

export default SmsbumpToolPage;
