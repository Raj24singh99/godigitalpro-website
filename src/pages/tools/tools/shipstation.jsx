import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Crown, ArrowLeft, ChevronDown, Box, ClipboardList, BarChart4 } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "ShipStation";
const slug = "shipstation";
const category = "Shipping & fulfillment";
const shortPitch =
  "ShipStation is a shipping automation platform that helps ecommerce brands, marketplaces, and 3PLs import orders, rate-shop carriers, and print labels fast.";
const pricingSummary =
  "Free trial available. Paid plans start at ~$9.99/month for Starter, with higher tiers unlocking more shipments, users, and carrier discounts for scaling teams.";
const officialUrl = "https://www.shipstation.com";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/shipstation.com",
  gradient: "from-blue-500 via-indigo-500 to-slate-700",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.20)]",
};

const alternatives = [
  { name: "ShipBob", slug: "shipbob" },
  { name: "Shopify", slug: "shopify" },
  { name: "WooCommerce", slug: "woocommerce" },
  { name: "Printful", slug: "printful" },
];

const faqs = [
  { q: "Who is ShipStation best for?", a: "ShipStation suits ecommerce brands, marketplaces, and fulfillment teams that need to import orders from multiple channels and bulk-print discounted labels fast." },
  { q: "Does ShipStation integrate with my store?", a: "Yes. ShipStation connects to Shopify, WooCommerce, BigCommerce, Amazon, eBay, Etsy, Walmart, and more, plus Zapier and APIs for custom workflows." },
  { q: "Can I rate shop carriers in ShipStation?", a: "You can compare real-time rates across carriers like USPS, UPS, FedEx, DHL, and regional options. Automation rules can auto-select the best service based on cost or SLA." },
  { q: "Is ShipStation good for international shipping?", a: "Yes. It supports customs forms, HS codes, duties, and documentation so you can ship cross-border without manual paperwork on each label." },
  { q: "Does ShipStation handle returns?", a: "ShipStation can generate return labels and branded return portals, making exchanges and refunds smoother for both customers and support teams." },
  { q: "How many users can I invite?", a: "Plans include 1–3 users by default, with higher tiers offering more seats. You can add additional users on select plans to match warehouse staffing." },
  { q: "Is there onboarding help?", a: "ShipStation provides chat and email support plus a knowledge base. Higher tiers include phone support and priority onboarding for faster setup." },
  { q: "Can I automate packing slips and branding?", a: "Yes. You can create branded packing slips, automate insert selection by SKU or channel, and customize notifications so the unboxing experience stays on-brand." },
];

function ShipStationToolPage() {
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
        "ShipStation centralizes order import, label creation, and rate shopping across carriers so ecommerce and marketplace sellers ship faster with fewer errors. Automation rules, branded docs, and integrations reduce manual ops work.",
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
      icon: <Box className="h-5 w-5 text-blue-500" />,
      title: "Centralized order import",
      body: "Sync orders from Shopify, Amazon, eBay, WooCommerce, and more, so your team doesn’t tab-hop to fulfill multi-channel sales.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-indigo-500" />,
      title: "Smart automations",
      body: "Rules for SKUs, weight, destination, and tags auto-select carriers, services, and packing slips, reducing manual decision-making.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Carrier flexibility",
      body: "Compare discounts and live rates across USPS, UPS, FedEx, DHL, and regional carriers, then print labels in bulk without re-keying data.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Branded experiences",
      body: "Create branded packing slips, notifications, and return labels so shipping stays on-brand even when fulfilled by third parties or multiple warehouses.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-rose-500" />,
      title: "Returns & RMA ease",
      body: "Generate return labels and portals that streamline RMAs for support teams, keeping customers updated on status without manual emails.",
    },
    {
      icon: <BarChart4 className="h-5 w-5 text-sky-500" />,
      title: "Reporting for ops teams",
      body: "Monitor shipping spend, carrier performance, and fulfillment SLAs so you can negotiate better rates and improve warehouse throughput.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Unbiased ShipStation review for ecommerce teams comparing pricing, features, pros, cons, alternatives, and whether ShipStation fits your 2025 shipping stack."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-blue-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-300/20 blur-3xl" />
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
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}>
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
                  ShipStation reduces fulfillment friction with bulk label printing, automation rules, and branded documents so operations teams keep SLAs tight and customers informed.
                </p>
                <div className="relative mt-4 flex items-center gap-2 text-sm font-semibold">
                  <Sparkles className="h-4 w-4 text-amber-200" />
                  Recommended by GoDigitalPro
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Why operations teams pick {toolName}</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {featureBlocks.map((feature) => (
                <div key={feature.title} className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center gap-3">
                    {feature.icon}
                    <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-700">{feature.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--pricing bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pricing</h2>
            <p className="mt-3 text-slate-700">Pricing is based on monthly shipment volume and user seats. All plans include branded labels, automation rules, and marketplace integrations.</p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left text-sm md:text-base">
                <thead className="bg-white text-slate-800">
                  <tr>
                    <th className="px-4 py-3">Plan</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key features</th>
                    <th className="px-4 py-3">Approx. price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter</td>
                    <td className="px-4 py-3">New stores &amp; low volume</td>
                    <td className="px-4 py-3">50 shipments, 1 user, branded labels, core integrations</td>
                    <td className="px-4 py-3">$9.99/mo</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Bronze</td>
                    <td className="px-4 py-3">Growing brands</td>
                    <td className="px-4 py-3">500 shipments, 1 user, automation rules, discounted rates</td>
                    <td className="px-4 py-3">$29.99/mo</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Silver</td>
                    <td className="px-4 py-3">Multi-channel merchants</td>
                    <td className="px-4 py-3">1500 shipments, 2 users, custom packing slips, returns</td>
                    <td className="px-4 py-3">$59.99/mo</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Gold</td>
                    <td className="px-4 py-3">Teams with warehouses</td>
                    <td className="px-4 py-3">3000 shipments, 3 users, advanced automations, phone support</td>
                    <td className="px-4 py-3">$99.99/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Pick Starter or Bronze if you’re testing channels. Upgrade to Silver or Gold for higher volume, more seats, and faster support as operations grow.</p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-blue-50 p-5 shadow-sm ring-1 ring-blue-100">
                <div className="flex items-center gap-2 text-blue-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Strong automation rules that reduce manual shipping decisions.</li>
                  <li>Multi-channel imports keep orders centralized for fulfillment.</li>
                  <li>Built-in rate shopping to control shipping costs.</li>
                  <li>Branded packing slips, notifications, and returns out of the box.</li>
                  <li>Supports international shipments with customs documentation.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>UI can feel busy compared to lighter shipping apps.</li>
                  <li>Lowest tiers include limited users; teams may need to upgrade quickly.</li>
                  <li>Some advanced reporting and automations require higher plans.</li>
                  <li>Warehouse picking/packing flows are basic versus full WMS tools.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Brands compare ShipStation with other fulfillment platforms depending on whether they outsource picking and packing, rely on marketplace-native tools, or keep everything inside their ecommerce platform.
            </p>
            <p className="mt-2 text-slate-700">All options cover core label creation; they differ on 3PL services, automation depth, and native ecommerce integration.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
                  </div>
                  <a className="text-sm font-semibold text-blue-700 hover:text-blue-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how ShipStation stacks against popular alternatives.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs ShipBob vs Shopify</h3>
                <a className="text-sm font-semibold text-blue-700 hover:text-blue-600" href="/tools/compare/shipstation-vs-shipbob-vs-shopify">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ShipStation handles in-house label creation and automation. ShipBob is a 3PL that stores and ships inventory for you. Shopify offers native shipping for Shopify merchants with less automation depth than ShipStation.
              </p>
              <p className="mt-2 text-slate-900">
                Choose ShipStation if you fulfill yourself and want carrier choice. Choose ShipBob to outsource fulfillment, or Shopify shipping if you want a simpler native setup while you’re small.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              ShipStation is worth it for teams that need to centralize orders from multiple channels, automate carrier selection, and keep labels moving without hiring more coordinators. It reduces manual steps that slow down warehouses.
            </p>
            <p className="mt-3 text-slate-700">
              If you prefer to outsource fulfillment entirely, a 3PL like ShipBob may fit better. For very small stores, native Shopify shipping could suffice before scaling into ShipStation’s automation depth.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> ShipStation is a strong pick for ecommerce teams shipping in-house that want speed, carrier choice, and branded experiences without building their own WMS.
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
              Choose ShipStation if you ship in-house and want automation, branded documents, and carrier flexibility without buying a heavy warehouse management system. It accelerates pick-pack-ship while keeping costs visible.
            </p>
            <p>
              Consider ShipBob when you want to outsource storage and fulfillment, or stick with Shopify’s native shipping if your volume is low and you value simplicity over controls.
            </p>
            <p>ShipStation fits nicely into ecommerce stacks because it syncs orders, updates tracking back to sales channels, and gives ops visibility into shipping spend per channel.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit, start here:{" "}
              <a className="text-blue-700 hover:text-blue-600" href={officialUrl}>
                Visit {toolName}
              </a>
              .
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-blue-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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

export default ShipStationToolPage;
