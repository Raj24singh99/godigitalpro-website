import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Truck, Rocket, Crown, ArrowLeft, ChevronDown, Boxes } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "ShipBob";
const slug = "shipbob";
const category = "Ecommerce fulfillment & 3PL";
const shortPitch =
  "ShipBob is a tech-enabled 3PL that stores inventory, picks, packs, and ships ecommerce orders quickly across the US, UK, EU, Canada, and Australia.";
const pricingSummary =
  "Quote-based with storage, pick/pack, and postage. Brands typically start with per-order fulfillment fees plus monthly storage; discounts improve with volume.";
const officialUrl = "https://www.shipbob.com";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/shipbob.com",
  gradient: "from-emerald-500 via-teal-500 to-blue-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.25)]",
};

const alternatives = [
  { name: "ShipStation", slug: "shipstation" },
  { name: "Shopify", slug: "shopify" },
  { name: "Printful", slug: "printful" },
  { name: "Printify", slug: "printify" },
  { name: "WooCommerce", slug: "woocommerce" },
];

const faqs = [
  {
    q: "Is ShipBob only for the US?",
    a: "No. ShipBob operates fulfillment centers in the US, Canada, UK, EU, and Australia so you can place inventory near customers and ship faster worldwide.",
  },
  {
    q: "Does ShipBob integrate with Shopify or Amazon?",
    a: "Yes. ShipBob integrates with Shopify, Amazon, WooCommerce, BigCommerce, Etsy, Walmart, and custom stacks through APIs to sync orders and inventory.",
  },
  {
    q: "What does ShipBob cost?",
    a: "Pricing depends on inventory, order volume, storage, and destinations. Expect per-pick/pack fees plus postage and storage. Volume and SLAs influence rates.",
  },
  {
    q: "Who should use ShipBob?",
    a: "DTC brands that want to outsource warehousing to focus on merchandising and marketing. It fits teams that need 2-day delivery coverage without building their own ops.",
  },
  {
    q: "Can ShipBob handle B2B/wholesale orders?",
    a: "Yes. ShipBob supports retail drop-ship, wholesale cartons, and custom packing lists in addition to standard DTC parcel fulfillment.",
  },
  {
    q: "How does onboarding work?",
    a: "You connect your store(s), send inventory to assigned FCs, configure packaging rules, and set service levels. A launch manager guides the first inbound and test orders.",
  },
  {
    q: "Does ShipBob offer 2-day delivery?",
    a: "ShipBob offers 2-day coverage in many metros by splitting inventory across FCs and using expedited services. Speed depends on where you place stock.",
  },
  {
    q: "Can I see fulfillment performance?",
    a: "Yes. Dashboards show SLAs, delivery speed, inventory aging, and per-order fees so ops and finance teams can monitor costs and promise windows.",
  },
];

function ShipBobToolPage() {
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
        "ShipBob is a reliable 3PL for ecommerce brands that want nationwide and international coverage without running their own warehouse. It pairs solid SLAs with integrations for Shopify, Amazon, and marketplaces.",
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
      icon: <Truck className="h-5 w-5 text-emerald-500" />,
      title: "3PL network with 2-day coverage",
      body: "Distribute inventory across ShipBob’s US, EU, UK, CA, and AU facilities to cut transit times and offer 2-day delivery in key metros.",
    },
    {
      icon: <Boxes className="h-5 w-5 text-sky-500" />,
      title: "Inventory and warehouse visibility",
      body: "Realtime stock, aging, and reorder points plus clear SLAs give ops teams control without running a warehouse.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-indigo-500" />,
      title: "B2C and B2B flexibility",
      body: "Supports DTC parcels alongside wholesale cartons, retail drop-ship, and custom packing so brands can sell across channels.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Deep ecommerce integrations",
      body: "Sync orders and inventory with Shopify, Amazon, WooCommerce, BigCommerce, Walmart, Etsy, and ERPs via native connectors and APIs.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Predictable SLAs and QA",
      body: "Pick/pack SLAs, receiving standards, and QA checks reduce errors and chargebacks, giving customer support fewer tickets.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Analytics for ops and finance",
      body: "Cost reports, delivery speed, and SKU-level performance help brands monitor margin impact and make stocking decisions.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Unbiased ShipBob review for ecommerce brands comparing pricing, network coverage, B2B options, and alternatives like ShipStation or Shopify."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-sky-300/25 blur-3xl" />
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
                  ShipBob lets ecommerce brands outsource fulfillment while keeping control through analytics, SLAs, and deep store integrations.
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
              {toolName} is a {category.toLowerCase()} platform that handles storage, pick/pack, and last-mile delivery for ecommerce brands. It connects to your storefronts and marketplaces so orders automatically route to the nearest
              fulfillment center.
            </p>
            <p className="mt-3 text-slate-700">
              Growth and ops teams use {toolName} to promise faster delivery without managing their own warehouse staff, equipment, and carrier relationships. Reporting makes it easier to defend costs with finance and track SLA health.
            </p>
            <p className="mt-3 text-slate-700">
              The platform is best for DTC brands between launch and enterprise scale that want predictable fulfillment quality and speed across regions.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} suits brands that want outsourced fulfillment without losing visibility.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "DTC brands scaling past in-house fulfillment and needing 2-day coverage.",
                "Shopify and WooCommerce sellers that want outsourced pick/pack with tight integrations.",
                "Growth teams running campaigns that require reliable delivery timelines.",
                "Brands expanding to new regions without opening additional warehouses.",
                "Sellers combining DTC parcels with occasional wholesale or retail drop-ship orders.",
                "Finance-led teams that need cost transparency and SLA reporting from a 3PL partner.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-400" />
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
              {toolName} focuses on predictable fulfillment quality, distributed inventory, and integrations that keep ecommerce teams lean.
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
                  {toolName} pricing is quote-based. Fees typically include receiving, storage, pick/pack, packaging, and postage. Volume, storage footprint, and SLA level influence rates; heavier SKUs or custom handling add cost.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">ShipBob fits once you ship 100+ orders/month and want 2-day delivery without hiring warehouse staff.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Launch</td>
                    <td className="px-4 py-3">Brands new to 3PLs</td>
                    <td className="px-4 py-3">Standard pick/pack SLAs, limited custom projects</td>
                    <td className="px-4 py-3">Quote</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">Scaling DTC with multi-node inventory</td>
                    <td className="px-4 py-3">Multi-warehouse placement, custom packaging, returns processing</td>
                    <td className="px-4 py-3">Quote</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">B2B & Wholesale</td>
                    <td className="px-4 py-3">Retail and distributor shipments</td>
                    <td className="px-4 py-3">Carton/retail prep, pallet labeling, compliance docs</td>
                    <td className="px-4 py-3">Quote</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Complex, multi-channel ops</td>
                    <td className="px-4 py-3">Dedicated support, EDI, customized SLAs, global network use</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Smaller brands can test with one facility before distributing inventory. As demand concentrates in regions, splitting stock across FCs improves speed and cost per parcel.
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
                  <li>Distributed fulfillment network for faster delivery in key markets.</li>
                  <li>Strong ecommerce integrations reduce manual routing and errors.</li>
                  <li>Transparent SLAs, dashboards, and cost visibility for ops/finance.</li>
                  <li>Supports both DTC parcels and B2B/retail workflows.</li>
                  <li>Dedicated onboarding to move off in-house fulfillment smoothly.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Quote-based pricing can be opaque until volume is clear.</li>
                  <li>Custom projects and kitting add costs not obvious upfront.</li>
                  <li>Less granular control than in-house operations software.</li>
                  <li>Two-day coverage depends on splitting inventory across FCs.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              {toolName} dominates outsourced fulfillment for digital-first brands, but some teams prefer running shipping in-house or sticking with their ecommerce platform’s native options. Here are common options ops and ecommerce teams consider.
            </p>
            <p className="mt-2 text-slate-700">All of these handle order routing and shipping labels; they differ on whether you outsource warehousing, the level of automation, and ecosystem fit.</p>
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
            <p className="text-slate-700">Here’s how {toolName} compares to other fulfillment options.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs ShipStation</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/shipstation-vs-shipbob-vs-shopify">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ShipStation is software for brands that keep fulfillment in-house; {toolName} is a 3PL that stores and ships for you. If you want automation while staying DIY, ShipStation wins. If you want to outsource and focus on marketing, {toolName} wins.
              </p>
              <p className="mt-2 text-slate-700">
                ShipStation costs a monthly subscription plus carrier labels. {toolName} pricing is per order plus storage but removes warehouse overhead and hiring.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} if you want outsourced speed and SLAs; choose ShipStation if you’re optimizing your own warehouse throughput.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Printful</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/shipbob-vs-shipstation-vs-printful">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Printful is POD/print-on-demand that produces and ships only items it manufactures. {toolName} stores your own inventory and ships broader product catalogs. Printful is faster to start for POD; {toolName} fits once you have pre-made inventory and want 3PL speed.
              </p>
              <p className="mt-2 text-slate-700">
                Printful pricing is per-item manufacture; {toolName} charges per pick/pack and storage. Brands that move beyond POD margins often upgrade to a 3PL like {toolName}.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} for owned inventory and faster delivery; choose Printful if you’re validating designs without holding stock.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              For ecommerce brands shipping 100+ orders each month, {toolName} lets you outsource fulfillment while keeping visibility on costs, speed, and accuracy. It removes warehouse overhead and hiring, freeing teams to invest in growth and product.
            </p>
            <p className="mt-3 text-slate-700">
              If you’re still validating demand or have very low order volumes, start with in-house shipping or a simpler partner. If you want to promise 2-day delivery across regions without building facilities, {toolName}’s network and SLAs justify the move.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> {toolName} is a leading 3PL pick for DTC brands that want faster delivery and clean ops without managing warehouses.
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
              Choose {toolName} if you want to outsource fulfillment, improve delivery speed, and free your team from warehouse management. It’s strongest for omnichannel brands that still want reporting and predictability.
            </p>
            <p>
              Consider alternatives like ShipStation if you want to stay DIY with automation, Shopify or WooCommerce native shipping if you’re early-stage, or Printful if you run a POD-first business.
            </p>
            <p>{toolName} fits into modern ecommerce stacks by syncing inventory, orders, and returns so growth campaigns can promise reliable delivery times.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>
                Visit {toolName}
              </a>
              .
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-sky-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default ShipBobToolPage;
