import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Package, Truck, Palette, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Printful";
const slug = "printful";
const category = "Print-on-Demand";
const shortPitch =
  "Printful runs its own manufacturing and fulfillment for custom products so ecommerce brands can launch merch with consistent quality, branding, and global shipping.";
const pricingSummary = "No monthly fee; you pay per item produced and shipped. Optional Plus/Pro subscriptions add design, mockups, and marketing tools.";
const officialUrl = "https://www.printful.com";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/printful.com",
  gradient: "from-amber-500 via-orange-500 to-rose-500",
  glow: "shadow-[0_20px_80px_rgba(249,115,22,0.25)]",
};

const alternatives = [
  { name: "Printify", slug: "printify" },
  { name: "ShipBob", slug: "shipbob" },
  { name: "ShipStation", slug: "shipstation" },
  { name: "Shopify", slug: "shopify" },
  { name: "WooCommerce", slug: "woocommerce" },
];

const faqs = [
  { q: "Is Printful free to start?", a: "Yes. There’s no monthly fee to list items. You pay the base product + printing + shipping per order. Optional Plus/Pro subscriptions unlock design extras and marketing tools." },
  { q: "What storefronts does Printful support?", a: "Printful integrates with Shopify, Etsy, WooCommerce, Wix, BigCommerce, Squarespace, eBay, Amazon, and custom stores via API." },
  { q: "How is Printful different from Printify?", a: "Printful owns fulfillment centers and handles production in-house, leading to more consistent quality and branding options. Printify is a marketplace of providers with lower base costs but more variability." },
  { q: "Does Printful offer branded packaging?", a: "Yes. Branded packing slips, pack-ins, and logo placement on labels are available on many products and regions." },
  { q: "What is Printful’s shipping speed?", a: "Production typically takes 2–5 business days. Shipping varies by region and carrier, with options for faster delivery in the US, EU, and select regions." },
  { q: "Can I migrate top sellers off POD later?", a: "Yes. Many brands start with Printful and later move best sellers to bulk production or a 3PL like ShipBob for lower unit costs while keeping Printful for testing." },
  { q: "Does Printful handle returns?", a: "It covers manufacturing errors and damaged items. For buyer’s remorse or sizing issues, sellers set their own policy and manage support." },
  { q: "Is Printful good for beginners?", a: "Yes. Mockups, product templates, and guided publishing make it easy to list products. Quality control and branding options help keep customer experience polished." },
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
        "Printful’s owned fulfillment network delivers consistent POD quality, branding options, and global shipping. It’s ideal for brands that want reliability over the lowest base cost.",
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
      icon: <Package className="h-5 w-5 text-amber-500" />,
      title: "Owned fulfillment centers",
      body: "Production and quality control are managed by Printful, giving more consistent results than provider marketplaces and reducing defective orders.",
    },
    {
      icon: <Palette className="h-5 w-5 text-rose-500" />,
      title: "Branding and packaging",
      body: "Branded packing slips, pack-ins, and labeling options make unboxing feel on-brand—important for DTC and creator storefronts.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-600" />,
      title: "Robust ecommerce integrations",
      body: "Connect to Shopify, Etsy, WooCommerce, Wix, Amazon, eBay, and custom stores via API so orders sync automatically to fulfillment.",
    },
    {
      icon: <Truck className="h-5 w-5 text-emerald-600" />,
      title: "Global shipping coverage",
      body: "Fulfillment centers across the US, EU, and beyond enable faster delivery to major markets and lower cross-border friction.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-orange-500" />,
      title: "Mockups and product templates",
      body: "Built-in mockups and design tools speed up listing creation, so you can test designs quickly without third-party editors.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Predictable quality and support",
      body: "Production consistency, issue handling, and SLA-backed support reduce refund risk and keep customer satisfaction high.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Quality, Pros & Cons, Alternatives`}
        description="Detailed Printful review for 2025 covering costs, quality, branding, shipping, pros & cons, and the best POD alternatives."
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
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-amber-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-rose-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-amber-600" />
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
                <a className="btn btn-primary bg-amber-600 text-white ring-2 ring-amber-500 hover:bg-amber-700" href={officialUrl}>
                  Visit official website
                </a>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -left-8 top-10 h-20 w-20 rounded-full bg-white blur-3xl" />
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-amber-200 blur-3xl" />
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
                  Owned fulfillment, consistent quality, and branding options make Printful a dependable POD choice for brands that value experience over the absolute lowest base cost.
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
              Printful is a {category.toLowerCase()} platform that manufactures and ships custom products on demand. Because Printful owns the production facilities, quality control and branding options are more consistent than
              marketplace-based POD services.
            </p>
            <p className="mt-3 text-slate-700">
              Brands connect Shopify, Etsy, WooCommerce, or other stores, publish products with Printful’s mockups, and let orders flow straight to fulfillment—no inventory required.
            </p>
            <p className="mt-3 text-slate-700">
              As you scale, you can keep using Printful for breadth or move best sellers to bulk production while maintaining POD for testing.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Printful fits teams that want reliable POD with branding options and minimal setup pain.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Shopify and Etsy sellers who want consistent POD quality and shipping.",
                "Creators launching merch lines without managing inventory.",
                "DTC brands testing new SKUs before moving to bulk production.",
                "Agencies spinning up client stores with branded packaging.",
                "Brands needing global fulfillment with predictable QA.",
                "Teams that value owned fulfillment over the lowest base price.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">Printful optimizes for reliable quality, branded unboxing, and solid integrations so you can focus on sales and designs.</p>
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
                  Printful does not charge a monthly fee for fulfillment. You pay per order (base product + printing + shipping). Optional Plus/Pro subscriptions add design assets, mockups, and marketing tools that can speed up
                  creative production.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on free. Add Plus/Pro if you need design tools or priority features; margins come from product selection, not subscription.</p>
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
                    <td className="px-4 py-3">Testing products and launching fast</td>
                    <td className="px-4 py-3">Pay per product + shipping; core mockups</td>
                    <td className="px-4 py-3">$0 + production</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Plus</td>
                    <td className="px-4 py-3">Sellers needing more mockups and design tools</td>
                    <td className="px-4 py-3">Premium mockups, background remover, more assets</td>
                    <td className="px-4 py-3">~$9/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Growing stores and teams</td>
                    <td className="px-4 py-3">Everything in Plus, promo tools, digitization discounts</td>
                    <td className="px-4 py-3">~$49/month</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Your margins depend on product choice, selling price, and shipping. Upgrade to Plus/Pro only if the extra mockups and design tools save you time or improve conversion enough to offset the fee.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-amber-50 p-5 shadow-sm ring-1 ring-amber-100">
                <div className="flex items-center gap-2 text-amber-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Owned fulfillment centers deliver consistent quality.</li>
                  <li>Branded packing slips and pack-ins elevate unboxing.</li>
                  <li>Strong integration coverage across major storefronts.</li>
                  <li>Global production network for faster regional shipping.</li>
                  <li>Mockups and design tools speed up listing creation.</li>
                  <li>Reliable support and remediation for production issues.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Base prices are higher than some POD marketplaces.</li>
                  <li>Less provider choice; you rely on Printful’s network.</li>
                  <li>Shipping times vary by region and carrier options.</li>
                  <li>Plus/Pro design features are optional upsells; margins still hinge on product/price.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">If you need lower base prices, a 3PL, or different ecommerce stacks, explore these alternatives. All link to full review pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">View the full review and pricing details.</p>
                  </div>
                  <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how Printful compares to other POD and fulfillment options.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Printify vs ShipBob</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/compare/printify-vs-printful-vs-shipbob">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Printify offers lower costs and more suppliers, Printful owns fulfillment for consistent quality and branding, and ShipBob is a 3PL for stocking inventory. Use the comparison to decide when to favor margins,
                quality, or control.
              </p>
              <p className="mt-2 text-slate-900">Choose Printful when you want reliable quality without managing inventory; pick Printify for margin-first testing; move to ShipBob when you scale on stocked SKUs.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Printify vs ShipStation</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/compare/printify-vs-printful-vs-shipstation">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Printify and Printful handle production; ShipStation is for merchants with their own inventory who need label automation. The comparison page outlines when to stay on POD or graduate to managing stock.
              </p>
              <p className="mt-2 text-slate-900">Pick Printful for quality-first POD; pick ShipStation when you’re ready to own inventory and shipping rules.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you care about consistent POD quality, branding, and reliable support, Printful is worth it—even if base costs are a bit higher than marketplace alternatives. It keeps customer experience polished while you test
              and scale.
            </p>
            <p className="mt-3 text-slate-700">
              If you’re extremely margin-sensitive or want multiple supplier options, consider Printify. When you outgrow POD and hold inventory, move top sellers to a 3PL like ShipBob while keeping Printful for experimentation.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Printful is a dependable POD partner for brands and creators that prioritize quality, branding, and global reach.
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
              Choose Printful if you want consistent POD quality, branded packaging, and solid integrations without managing inventory. It’s great for Shopify/Etsy sellers and creators who value experience.
            </p>
            <p>Consider Printify for lower costs or ShipBob/ShipStation when you hold inventory and need full logistics control.</p>
            <p>Printful stays useful even as you scale—keep it for testing new products while bulk-producing best sellers elsewhere.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for your store, try it here: <a className="text-amber-700 hover:text-amber-600" href={officialUrl}>Visit {toolName}</a>.
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-amber-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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
