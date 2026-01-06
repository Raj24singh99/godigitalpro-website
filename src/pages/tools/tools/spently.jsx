import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Spently";
const slug = "spently";
const category = "Email Receipts & Shopify Marketing";
const shortPitch =
  "Spently (Pantastic) is a Shopify app for customizing transactional emails and receipts, adding upsells, recommendations, and post-purchase campaigns to drive repeat sales.";
const pricingSummary =
  "Tiered Shopify app pricing. Costs scale with order volume and features like personalization, segmentation, and analytics. Higher plans add more templates and support.";
const officialUrl = "https://pantastic.com/spently";
const ratingValue = 4.0;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/pantastic.com",
  gradient: "from-emerald-500 via-teal-500 to-blue-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.24)]",
};

const alternatives = [
  { name: "Klaviyo", slug: "klaviyo" },
  { name: "Omnisend", slug: "omnisend" },
  { name: "Sendinblue (Brevo)", slug: "brevo" },
  { name: "Postscript", slug: "postscript" },
  { name: "Privy", slug: "privy" },
];

const faqs = [
  {
    q: "What is Spently?",
    a: "Spently is a Shopify app that customizes transactional emails and receipts with branding, recommendations, and upsells to drive repeat purchases.",
  },
  {
    q: "Who is it for?",
    a: "Shopify merchants who want to optimize order notifications and receipts for upsell/cross-sell and brand experience.",
  },
  {
    q: "How is pricing structured?",
    a: "Tiered app pricing that scales with order volume and features like personalization and analytics. Check Shopify App Store for current pricing.",
  },
  {
    q: "Does it replace marketing automation?",
    a: "It focuses on transactional emails; pair with email/SMS platforms for broader lifecycle marketing.",
  },
  {
    q: "Can I add recommendations?",
    a: "Yes. You can include product recommendations, discount codes, and content blocks inside receipts/notifications.",
  },
  {
    q: "Is setup complex?",
    a: "Setup is app-driven. Plan for template customization, testing, and branding alignment.",
  },
  {
    q: "Does it handle compliance?",
    a: "Transactional emails are covered by Shopify flows; still ensure CAN-SPAM/local compliance for any promotional elements.",
  },
  {
    q: "Is analytics included?",
    a: "Yes. Performance metrics on opens, clicks, and revenue from upsells are available on eligible plans.",
  },
];

function SpentlyToolPage() {
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
        "Spently lets Shopify merchants turn receipts and notifications into branded, upsell-friendly emails. It’s best for stores that want to monetize post-purchase touchpoints.",
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
      title: "Branded templates",
      body: "Customize Shopify transactional emails with your branding and layouts.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Upsells & recommendations",
      body: "Add product recommendations, offers, and discounts inside receipts and notifications.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Segmentation",
      body: "Target content based on order data and customer behavior to lift repeat purchases.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Compliance-aware",
      body: "Use transactional channels responsibly; keep CAN-SPAM/local rules in mind for promo elements.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Integrations",
      body: "Works within Shopify; pair with email/SMS tools for broader lifecycle journeys.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Analytics",
      body: "Track opens, clicks, and revenue from upsell blocks to measure ROI.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Spently review: pricing, features, pros & cons, and alternatives so you can decide if upgrading Shopify receipts fits your retention strategy."
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
                  {toolName} turns receipts into revenue channels—add upsells and recommendations while keeping transactional emails on-brand.
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
              {toolName} is a Shopify app focused on transactional emails—order confirmations, shipping updates, and receipts. It lets you brand these messages, add recommendations, and insert upsells to encourage repeat purchases.
            </p>
            <p className="mt-3 text-slate-700">
              It does not replace full lifecycle platforms; instead, it optimizes high-open-rate transactional touchpoints to drive extra revenue.
            </p>
            <p className="mt-3 text-slate-700">
              Combine it with your email/SMS stack for holistic campaigns and segment recipients appropriately.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for Shopify merchants wanting to monetize post-purchase emails without heavy custom development.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "DTC brands seeking extra revenue from order confirmations and receipts.",
                "Merchants wanting branded transactional emails that match their storefront.",
                "Teams adding recommendations/discounts to drive repeat orders.",
                "Stores without dev resources to custom-code Shopify notifications.",
                "Retention teams measuring post-purchase upsell performance.",
                "Brands complementing Klaviyo/Omnisend email flows with enhanced receipts.",
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
              {toolName} focuses on enhancing transactional Shopify emails with branding, recommendations, and analytics.
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
                  Pricing is tiered in the Shopify App Store and scales with order volume and features (personalization, analytics, templates). Upsell revenue can offset costs—track ROI closely.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on a lower tier; upgrade if upsell revenue justifies more features and higher order limits.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter</td>
                    <td className="px-4 py-3">Lower order volumes</td>
                    <td className="px-4 py-3">Basic templates, branding, limited features</td>
                    <td className="px-4 py-3">Validate uplift</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">Growing stores</td>
                    <td className="px-4 py-3">Personalization, analytics, more templates</td>
                    <td className="px-4 py-3">Monitor ROI vs. subscription</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Advanced</td>
                    <td className="px-4 py-3">Higher volume/complex needs</td>
                    <td className="px-4 py-3">Full feature set, priority support</td>
                    <td className="px-4 py-3">Use if order volume is high</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Budget design time for templates and ensure compliance when adding promotional content to transactional emails.
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
                  <li>Monetizes high-open transactional emails.</li>
                  <li>Branded templates without custom dev.</li>
                  <li>Recommendations and offers to drive repeat buys.</li>
                  <li>Analytics to track upsell performance.</li>
                  <li>Shopify-native installation and flows.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>App cost adds to ecommerce stack; must track ROI.</li>
                  <li>Transactional emails have compliance constraints.</li>
                  <li>Deeper lifecycle journeys still need email/SMS platforms.</li>
                  <li>Design effort needed to stay on-brand.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other email/SMS tools if you want unified lifecycle campaigns or built-in transactional customization.
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
            <p className="text-slate-700">See how {toolName} compares to other post-purchase and email tools.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Klaviyo</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/klaviyo">
                  View Klaviyo
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Klaviyo offers full lifecycle marketing; {toolName} specializes in transactional email customization. Many brands use both: {toolName} for receipts, Klaviyo for campaigns and flows.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Omnisend</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/omnisend">
                  View Omnisend
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Omnisend handles email/SMS with automation; {toolName} focuses on Shopify transactionals. Choose Omnisend for broader campaigns; {toolName} if you want specialized receipts with upsells.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want to brand and monetize Shopify transactional emails and have a plan to track upsell revenue.
            </p>
            <p className="mt-3 text-slate-700">
              Test uplift on a lower tier; ensure compliance for promotional content in receipts. Pair with lifecycle platforms for full-funnel engagement.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A solid add-on for post-purchase revenue—best when measured against upsell performance and used with broader marketing tools.
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
              Choose {toolName} if you want to turn Shopify receipts into branded, upsell-friendly touchpoints without custom code.
            </p>
            <p>
              Consider Klaviyo/Omnisend for full lifecycle coverage; keep {toolName} for transactional optimization. Measure revenue from upsell blocks to justify cost.
            </p>
            <p>{toolName} leverages high-open transactional emails—combine with strong offers and design to maximize returns.</p>
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

export default SpentlyToolPage;
