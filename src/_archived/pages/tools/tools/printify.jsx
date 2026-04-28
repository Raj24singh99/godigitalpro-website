import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Package, Truck, Palette, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Printify";
const slug = "printify";
const category = "Print-on-Demand";
const shortPitch =
  "Printify connects you to a global network of print-on-demand suppliers so you can sell custom products on Shopify, Etsy, and WooCommerce without holding inventory.";
const pricingSummary = "Free to start, with Printify Premium around $29/month for better margins and discounts across more than 900 product SKUs.";
const officialUrl = "https://printify.com/";
const ratingValue = 4.6;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/printify.com",
  gradient: "from-emerald-500 via-green-500 to-teal-500",
  glow: "shadow-[0_20px_80px_rgba(34,197,94,0.25)]",
};

const alternatives = [
  { name: "Printful", slug: "printful" },
  { name: "ShipBob", slug: "shipbob" },
  { name: "ShipStation", slug: "shipstation" },
  { name: "Shopify", slug: "shopify" },
  { name: "WooCommerce", slug: "woocommerce" },
];

const faqs = [
  { q: "Is Printify free?", a: "Printify has a free plan. Printify Premium (~$29/month) offers up to 20% discounts on products, which boosts margins for active stores." },
  { q: "How does Printify work?", a: "You design products, pick a print provider, and sync listings to Shopify, Etsy, or WooCommerce. Orders route to the provider for printing and shipping without inventory risk." },
  { q: "What marketplaces does Printify support?", a: "Native integrations include Shopify, Etsy, WooCommerce, Wix, and eBay. You can also connect via API for custom storefronts." },
  { q: "How is Printify different from Printful?", a: "Printify is a marketplace of print providers with lower costs and more SKUs. Printful owns its fulfillment for tighter QA but higher base prices. Choose based on margins vs. control." },
  { q: "Does Printify handle returns?", a: "Return policies vary by provider. Printify supports reprints/refunds for production errors; sellers manage customer communication and policy display on their store." },
  { q: "How fast is shipping?", a: "Production and shipping depend on the selected provider and region. Many US/EU providers ship within 2–7 business days after production." },
  { q: "Can I white-label packaging?", a: "Some providers support branded packaging slips or inserts. Check provider details inside Printify’s catalog before listing." },
  { q: "Is Printify good for beginners?", a: "Yes. Mockup generators, templates, and simple publishing flows make it accessible. Premium is worth it once you have consistent orders for better unit economics." },
];

export default function ToolPage() {
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
        "Printify gives ecommerce sellers a broad catalog, competitive base costs, and plenty of supplier options. It’s ideal for testing designs and scaling POD without carrying inventory.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };

  const featureBlocks = [
    {
      icon: <Package className="h-5 w-5 text-emerald-500" />,
      title: "Wide product catalog",
      body: "Choose from 900+ POD products including apparel, wall art, mugs, phone cases, and home goods with multiple print providers per SKU.",
    },
    {
      icon: <Palette className="h-5 w-5 text-teal-500" />,
      title: "Mockup and design tools",
      body: "Create and preview designs with mockups tailored to each product so listings look polished on Shopify, Etsy, and WooCommerce.",
    },
    {
      icon: <Plug className="h-5 w-5 text-emerald-700" />,
      title: "Store integrations",
      body: "Native integrations with Shopify, Etsy, WooCommerce, and eBay plus an API route orders automatically to selected print providers.",
    },
    {
      icon: <Truck className="h-5 w-5 text-amber-500" />,
      title: "Flexible supplier network",
      body: "Pick providers by region, price, and shipping speed. Switch suppliers without changing your storefront to protect uptime and margins.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Quality and reprint support",
      body: "Printify coordinates reprints/refunds for production errors. Ratings and delivery estimates help you choose reliable partners.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-emerald-600" />,
      title: "Premium discounts",
      body: "Printify Premium unlocks up to 20% off base costs across providers, improving margins for stores with regular order volume.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Products, Pros & Cons, Alternatives`}
        description="Hands-on Printify review for 2025 covering pricing, supplier network, pros & cons, and the best POD alternatives like Printful and ShipBob."
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
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-teal-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-emerald-600" />
                {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">{toolName} Review (2025): Pricing, Pros & Cons</h1>
              <p className="mt-4 text-lg text-slate-600">{shortPitch}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-700">
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Our rating: {ratingValue}/5</span>
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Reviewed by GoDigitalPro • Updated May 2025</span>
              </div>
              <p className="mt-4 text-slate-700">{pricingSummary}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="btn btn-primary bg-emerald-600 text-white ring-2 ring-emerald-500 hover:bg-emerald-700" href={officialUrl}>
                  Visit official website
                </a>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}>
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
                  Printify’s large supplier network and premium discounts make it a strong pick for sellers focused on margins, assortment, and launching products fast.
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
              Printify is a print-on-demand platform that lets you design products and route orders to vetted print providers worldwide. You sell on Shopify, Etsy, WooCommerce, or custom stores—Printify manages production and shipping.
            </p>
            <p className="mt-3 text-slate-700">
              The marketplace model means you can pick providers by price, quality, and region, helping you keep margins healthy and shipping times competitive.
            </p>
            <p className="mt-3 text-slate-700">
              Mockups, product templates, and automated order routing keep setup quick for beginners while giving experienced sellers the flexibility to optimize fulfillment.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Printify is ideal if you want a broad catalog, competitive pricing, and flexibility to choose suppliers.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Shopify or WooCommerce sellers launching POD without inventory risk.",
                "Etsy store owners testing new designs quickly using mockups and simple publishing.",
                "Brands that want to switch suppliers for better margins or regional shipping speed.",
                "Creators adding merch lines for podcasts, YouTube channels, or newsletters.",
                "Agencies spinning up client merch stores without managing fulfillment directly.",
                "Entrepreneurs comparing POD economics before committing to owned inventory.",
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
            <p className="mt-3 text-slate-700">Printify focuses on catalog breadth, cost control, and flexible fulfillment.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {featureBlocks.map((feature) => (
                <div key={feature.title} className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center gap-3 text-slate-900">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">{feature.icon}</div>
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
                  Printify is free to start. Printify Premium unlocks discounts that improve margins; at scale, larger plans are available for enterprise sellers who need dedicated support and higher order volumes.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Stay on Free while testing. Upgrade to Premium once orders are steady to capture better unit economics.</p>
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
                    <td className="px-4 py-3">Testing products and publishing first listings</td>
                    <td className="px-4 py-3">Standard base prices, all integrations, unlimited stores</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Premium</td>
                    <td className="px-4 py-3">Active stores optimizing margins</td>
                    <td className="px-4 py-3">Up to 20% discounts across catalog, priority support</td>
                    <td className="px-4 py-3">~$29/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">High-volume sellers needing SLAs</td>
                    <td className="px-4 py-3">Custom pricing, account management, dedicated support</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Upgrade to Premium once the discounts offset the subscription fee. Enterprise is best for brands shipping at scale who want negotiated pricing and dedicated support from Printify’s team.
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
                  <li>Large catalog with competitive base prices for strong margins.</li>
                  <li>Multiple providers per product give flexibility on cost and speed.</li>
                  <li>Clean integrations with Shopify, Etsy, WooCommerce, and API.</li>
                  <li>Premium discounts materially improve unit economics.</li>
                  <li>Mockups and templates accelerate listing creation.</li>
                  <li>Ability to swap suppliers without rebuilding product pages.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Quality can vary between providers; vet samples before scaling.</li>
                  <li>Customer support for delivery issues may require coordination with providers.</li>
                  <li>Branding options depend on each supplier—less control than owned fulfillment.</li>
                  <li>Shipping speed and costs differ by region; needs careful provider selection.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare Printify to other POD and fulfillment options. Every link below goes to a dedicated review page so you can dig into pricing and fit.
            </p>
            <p className="mt-2 text-slate-700">Pick based on control, quality, and which ecommerce stack you use.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Explore features, pricing, and who it fits best.</p>
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
            <p className="text-slate-700">See how Printify stacks up against leading POD and fulfillment options.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Printful vs ShipBob</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/compare/printify-vs-printful-vs-shipbob">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Printful owns fulfillment for tighter QA, Printify offers more providers and lower base costs, and ShipBob is a 3PL for brands ready for bulk inventory. The comparison page breaks down cost and control.
              </p>
              <p className="mt-2 text-slate-900">Choose Printify for POD flexibility, Printful for quality control, or ShipBob when you move to stocked inventory and need 3PL SLAs.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Printful vs ShipStation</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/compare/printify-vs-printful-vs-shipstation">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ShipStation centralizes shipping labels across carriers for merchants with their own inventory. Printify and Printful handle production. Use the comparison to see when to graduate from POD to managing fulfillment.
              </p>
              <p className="mt-2 text-slate-900">Pick {toolName} to avoid inventory risk, Printful for premium POD quality, and ShipStation when you manage stock and just need shipping automation.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you want to test designs and grow POD margins without warehousing, Printify is worth it. Premium quickly pays for itself once orders are steady, and the supplier choice protects you from single-vendor risk.
            </p>
            <p className="mt-3 text-slate-700">
              If you need stricter QA or branded packaging, compare with Printful. When you’re ready to hold inventory for bulk discounts, consider ShipBob or ShipStation alongside your ecommerce stack.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> A flexible, margin-friendly POD platform that scales from your first listing to established stores.
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
              Choose Printify if you prioritize catalog variety, lower base costs, and the freedom to change suppliers as your store grows. It is excellent for testing products and keeping margins healthy on Shopify, Etsy, or WooCommerce.
            </p>
            <p>Switch to Printful for tighter quality control and branding, or graduate to ShipBob/ShipStation when you hold inventory. Whatever you pick, ensure margins account for shipping and returns.</p>
            <p>Printify fits into modern ecommerce stacks thanks to native integrations and an API you can extend as you scale.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for your store, try it here: <a className="text-emerald-700 hover:text-emerald-600" href={officialUrl}>Visit {toolName}</a>.
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
      <button type="button" onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-900">
        <span className="text-sm font-semibold md:text-base">{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">{answer}</div>}
    </div>
  );
}
