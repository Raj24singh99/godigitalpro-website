import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Video, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Gumroad";
const slug = "gumroad";
const category = "Creator Commerce";
const shortPitch =
  "Gumroad is a storefront and checkout platform for creators selling digital downloads, memberships, and simple products without setting up a full ecommerce site.";
const pricingSummary = "No monthly fee; platform + processor fees on each sale. Great for lean launches and small catalogs.";
const officialUrl = "https://gumroad.com";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/gumroad.com",
  gradient: "from-emerald-500 via-teal-500 to-emerald-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.24)]",
};

const alternatives = [
  { name: "Lemon Squeezy", slug: "lemon-squeezy" },
  { name: "Paddle", slug: "paddle" },
  { name: "Shopify", slug: "shopify" },
  { name: "Podia", slug: "podia" },
  { name: "Stripe", slug: "stripe" },
];

const faqs = [
  {
    q: "Is Gumroad free?",
    a: "Gumroad has no monthly fee. You pay platform + payment processing fees per sale. This makes it easy to start without upfront cost.",
  },
  {
    q: "What can I sell on Gumroad?",
    a: "Digital downloads, memberships, courses, pre-orders, and simple physical products. It’s most popular for downloadable assets and memberships.",
  },
  {
    q: "Does Gumroad handle taxes?",
    a: "Gumroad acts as Merchant of Record for VAT/sales tax in many cases, reducing compliance work for creators.",
  },
  {
    q: "Can I use my own domain?",
    a: "Yes. You can use Gumroad-hosted pages or embed checkout on your site; custom domains are supported with hosted pages.",
  },
  {
    q: "Is Gumroad good for subscriptions?",
    a: "Gumroad supports recurring payments for memberships and products, with basic customer management.",
  },
  {
    q: "Does Gumroad support licensing or downloads?",
    a: "Yes. You can deliver files, set download limits, and use license keys via integrations for software products.",
  },
  {
    q: "How does Gumroad compare to Lemon Squeezy or Paddle?",
    a: "Gumroad is fastest to launch but lighter on APIs. Lemon Squeezy and Paddle offer stronger SaaS billing/APIs and MoR compliance.",
  },
  {
    q: "Is Gumroad good for ecommerce stores?",
    a: "Gumroad is best for lean catalogs. Larger stores may prefer Shopify or other full ecommerce platforms.",
  },
];

function GumroadToolPage() {
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
        "Gumroad lets creators sell digital goods and memberships with no monthly fee. It’s fast to launch, handles VAT in many regions, and keeps setup simple. Fees are per-sale, so it’s great for lean catalogs but less ideal for high-volume stores or deep SaaS billing needs.",
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
      title: "Hosted checkout and pages",
      body: "Spin up product pages and checkout quickly without building a site. Embed checkout on existing pages if you prefer.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Merchant of Record for tax",
      body: "Gumroad collects/remits VAT/sales tax in many regions, reducing compliance overhead for creators.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-indigo-500" />,
      title: "Digital delivery and licensing",
      body: "Deliver files instantly, limit downloads, and use license keys via integrations for software and digital assets.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Memberships and subscriptions",
      body: "Recurring payments for memberships or ongoing products make it easy to build predictable revenue.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Embeds and integrations",
      body: "Embed checkout buttons, connect to email tools, and use Zapier for automations without heavy dev work.",
    },
    {
      icon: <Video className="h-5 w-5 text-blue-500" />,
      title: "Marketing basics",
      body: "Offer coupons, bundles, pre-orders, and upsells. Sell directly via links in newsletters, socials, and communities.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Practical Gumroad review for creators: pricing, features, pros & cons, alternatives, and whether Gumroad fits your 2025 digital product stack."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-teal-200/25 blur-3xl" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-teal-200 blur-3xl" />
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
                  Built for creators selling fast, Gumroad removes monthly fees and hosting setup so you can launch products, memberships, and bundles quickly.
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
              Gumroad is a {category.toLowerCase()} platform that lets you sell digital products, memberships, and simple physical items without managing a full store. Hosted pages, checkout, and fulfillment are included.
            </p>
            <p className="mt-3 text-slate-700">
              Creators use Gumroad to launch quickly, share links on social or newsletters, and embed checkout on existing sites. It’s popular for PDFs, templates, audio packs, art, and memberships.
            </p>
            <p className="mt-3 text-slate-700">Because fees are per-sale with no monthly charge, it’s great for low-volume or experimental products. High-volume stores may seek lower transaction costs elsewhere.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} fits creators and small teams that want to sell quickly with minimal setup.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Creators selling digital downloads (templates, art, audio, code).",
                "Newsletter and community owners monetizing with memberships.",
                "Coaches selling simple products, resources, or access bundles.",
                "Indie hackers validating products without setting up full ecommerce.",
                "Agencies selling one-off resources or internal tools.",
                "Artists and writers offering zines, ebooks, or pre-orders.",
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
            <p className="mt-3 text-slate-700">Gumroad is built for speed to launch and low-friction selling.</p>
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
                  Gumroad charges per-transaction platform + processor fees and has no monthly fee. This is ideal for low-volume or experimental products. High-volume merchants should compare effective rates with MoR platforms or full ecommerce.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on Gumroad for quick launches. If volume grows, evaluate fees vs. MoR options like Lemon Squeezy or Paddle.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Model</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key notes</th>
                    <th className="px-4 py-3">Approx. cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Per-transaction fees</td>
                    <td className="px-4 py-3">Creators selling a few products</td>
                    <td className="px-4 py-3">No monthly fee; platform % + processor fees per sale</td>
                    <td className="px-4 py-3">Varies by country/volume</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Add-ons</td>
                    <td className="px-4 py-3">Optional features</td>
                    <td className="px-4 py-3">Discoverability, analytics, and integrations via API/Zapier</td>
                    <td className="px-4 py-3">Varies</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Gumroad keeps costs simple. Calculate effective rates when your revenue grows; MoR tools may be more efficient at scale, while Shopify offers more flexibility for full stores.
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
                  <li>No monthly fee; easy to start selling.</li>
                  <li>Hosted pages and checkout reduce setup.</li>
                  <li>Handles VAT/sales tax as MoR in many regions.</li>
                  <li>Supports memberships and subscriptions.</li>
                  <li>Embeds and links make distribution simple.</li>
                  <li>Great for digital downloads with instant delivery.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Per-sale fees can add up for high-volume sellers.</li>
                  <li>Limited storefront customization compared to full ecommerce.</li>
                  <li>APIs and integrations are lighter than Paddle or Lemon Squeezy.</li>
                  <li>Not ideal for large SKU catalogs or complex shipping.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Gumroad prioritizes speed and simplicity. If you need more APIs, storefront flexibility, or lower rates at scale, consider these alternatives.
            </p>
            <p className="mt-2 text-slate-700">All handle digital sales; they differ on APIs, MoR coverage, and costs.</p>
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
            <p className="text-slate-700">Here’s how {toolName} compares to two common alternatives.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Lemon Squeezy</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/compare/paddle-vs-gumroad-vs-lemon-squeezy">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Lemon Squeezy offers MoR billing with stronger APIs and licensing for SaaS and software. Gumroad is simpler and faster for basic digital sales. Choose Lemon Squeezy for API-driven flows; choose Gumroad for speed and simplicity.
              </p>
              <p className="mt-2 text-slate-900">For indie creators selling downloads, Gumroad is easiest. For software/SaaS, Lemon Squeezy may scale better.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Paddle</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/compare/paddle-vs-gumroad-vs-lemon-squeezy">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Paddle is a MoR built for SaaS billing with robust APIs, subscriptions, invoices, and tax/chargeback handling. Gumroad is lighter, best for simple digital sales. Choose Paddle for SaaS; choose Gumroad for creator storefronts.
              </p>
              <p className="mt-2 text-slate-900">If you don’t need deep billing or APIs, Gumroad keeps launch time minimal.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you want to sell digital products or memberships quickly with no monthly fee, {toolName} is worth it. It removes setup and compliance friction so you can focus on creating and marketing.
            </p>
            <p className="mt-3 text-slate-700">
              High-volume sellers or SaaS teams may outgrow Gumroad’s fees and API limitations. In that case, evaluate Lemon Squeezy, Paddle, or Shopify for more control and better unit economics.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Gumroad is a top pick for creators launching digital goods fast—ideal when you value speed and simplicity over deep customization.
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
              Choose {toolName} if you want painless digital sales and memberships with no monthly fee. It’s best for lean catalogs and creator businesses that sell via links and embeds.
            </p>
            <p>
              Consider Lemon Squeezy or Paddle for API-heavy SaaS, or Shopify if you need a full storefront with many SKUs. Gumroad remains a go-to for fast launches and low setup overhead.
            </p>
            <p>Gumroad slots neatly into creator stacks alongside email and community tools, letting you monetize faster.</p>
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

export default GumroadToolPage;
