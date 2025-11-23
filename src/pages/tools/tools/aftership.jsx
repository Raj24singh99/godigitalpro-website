import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "AfterShip";
const slug = "aftership";
const category = "Shipping & Post-Purchase";
const shortPitch =
  "AfterShip is a shipment tracking and post-purchase experience platform that improves delivery visibility, notifications, and returns for ecommerce brands.";
const pricingSummary =
  "Free tier with limited shipments; paid plans scale by shipment volume and add branded tracking pages, notifications, analytics, and returns portal.";
const officialUrl = "https://www.aftership.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/aftership.com",
  gradient: "from-amber-500 via-orange-500 to-rose-500",
  glow: "shadow-[0_20px_80px_rgba(249,115,22,0.24)]",
};

const alternatives = [
  { name: "ShipStation", slug: "shipstation" },
  { name: "ShipBob", slug: "shipbob" },
  { name: "Printful", slug: "printful" },
  { name: "Printify", slug: "printify" },
  { name: "Shopify", slug: "shopify" },
];

const faqs = [
  {
    q: "What does AfterShip do?",
    a: "AfterShip provides shipment tracking, delivery notifications, branded tracking pages, analytics, and returns management for ecommerce brands.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes. A free tier supports limited shipments. Paid plans scale with volume and add branding, notifications, and advanced analytics.",
  },
  {
    q: "Does AfterShip support returns?",
    a: "Yes. AfterShip Returns offers a returns portal, labels, and status notifications to streamline the reverse logistics process.",
  },
  {
    q: "Which carriers are supported?",
    a: "AfterShip connects with hundreds of global carriers including UPS, FedEx, DHL, USPS, and regional providers.",
  },
  {
    q: "Can I brand the tracking page?",
    a: "Paid tiers allow branded tracking pages with product recommendations, FAQs, and marketing content.",
  },
  {
    q: "Does it integrate with Shopify and other carts?",
    a: "Yes. Integrations exist for Shopify, BigCommerce, WooCommerce, and other platforms, plus webhooks and APIs.",
  },
  {
    q: "Is AfterShip good for customer experience?",
    a: "Branded tracking, proactive notifications, and clear returns can reduce WISMO tickets and improve post-purchase satisfaction.",
  },
  {
    q: "Who is AfterShip best for?",
    a: "D2C and ecommerce brands that want better delivery visibility, customer updates, and streamlined returns at scale.",
  },
];

function AfterShipToolPage() {
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
        "AfterShip improves post-purchase visibility with tracking, notifications, and returns workflows. It helps ecommerce brands reduce support load and increase repeat purchases.",
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
      title: "Branded tracking",
      body: "Custom tracking pages with brand elements, recommendations, and FAQs to keep customers engaged.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Proactive notifications",
      body: "Email/SMS updates for shipment statuses to reduce WISMO tickets and improve trust.",
    },
    {
      icon: <Plug className="h-5 w-5 text-indigo-500" />,
      title: "Carrier coverage",
      body: "Connects to hundreds of global carriers, normalizing tracking data for consistent updates.",
    },
    {
      icon: <Folder className="h-5 w-5 text-amber-600" />,
      title: "Analytics",
      body: "Delivery performance insights by carrier, region, and SLA to inform shipping strategy.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Returns portal",
      body: "Self-serve returns with labels, status updates, and policy controls to simplify reverse logistics.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Integrations",
      body: "Shopify, BigCommerce, WooCommerce, APIs, and webhooks to sync orders and events.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="AfterShip review for ecommerce: pricing, features, pros & cons, and alternatives so you can upgrade tracking, notifications, and returns."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-amber-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-emerald-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-amber-600" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-amber-100 blur-3xl" />
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
                  {toolName} keeps customers informed with branded tracking and proactive alerts, reducing support tickets post-purchase.
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
              {toolName} centralizes shipping visibility with multi-carrier tracking, branded pages, notifications, and returns. It helps ecommerce brands control the post-purchase experience and reduce “Where is my order?” contacts.
            </p>
            <p className="mt-3 text-slate-700">
              Delivery analytics highlight carrier performance, while returns workflows streamline labels and statuses for customers.
            </p>
            <p className="mt-3 text-slate-700">
              Integrations with major carts and carriers make setup straightforward for most D2C brands.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for ecommerce teams that care about post-purchase experience and support load reduction.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "D2C brands wanting branded tracking and proactive notifications.",
                "Ops teams needing carrier performance analytics and SLA monitoring.",
                "Support teams aiming to cut WISMO tickets with better status updates.",
                "Merchants expanding globally who need multi-carrier coverage.",
                "Brands seeking a simpler returns experience with status visibility.",
                "Growth teams using tracking pages for upsells and recommendations.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-amber-500" />
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
              {toolName} focuses on delivery visibility, branded communication, and streamlined returns.
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
                  {toolName} offers a free tier with limited shipments. Paid tiers scale by shipment volume and unlock branding, notifications, analytics, and returns portal features.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on free to validate; upgrade when you want branded tracking and automated notifications.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Free</td>
                    <td className="px-4 py-3">Testing/low volume</td>
                    <td className="px-4 py-3">Limited shipments, basic tracking</td>
                    <td className="px-4 py-3">Good for proof-of-value</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">Scaling stores</td>
                    <td className="px-4 py-3">Branded pages, notifications, analytics</td>
                    <td className="px-4 py-3">Volume-based pricing</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Returns</td>
                    <td className="px-4 py-3">Returns-heavy brands</td>
                    <td className="px-4 py-3">Returns portal, labels, status updates</td>
                    <td className="px-4 py-3">Add-on/plan dependent</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Confirm per-shipment pricing, notification limits, and returns fees. Consider carrier and region coverage for your markets.
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
                  <li>Branded tracking pages and proactive notifications.</li>
                  <li>Multi-carrier coverage with normalized tracking.</li>
                  <li>Analytics on delivery performance and SLAs.</li>
                  <li>Returns portal improves customer experience.</li>
                  <li>Free tier to start; scales with shipment volume.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Costs scale with volume; heavy shippers pay more.</li>
                  <li>Advanced customization needs setup time.</li>
                  <li>Returns module may be an add-on depending on plan.</li>
                  <li>Still relies on carrier performance; cannot fix carrier delays.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other shipping and fulfillment tools to pick the right fit for volume, returns, and carrier mix.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
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
            <p className="text-slate-700">See how {toolName} compares with other shipping tools.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs ShipStation</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/shipstation">
                  View ShipStation
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ShipStation focuses on label creation and order routing; {toolName} focuses on tracking, notifications, and returns. Pair them or choose based on whether fulfillment or post-purchase experience is the priority.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs ShipBob</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/shipbob">
                  View ShipBob
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ShipBob is a 3PL; {toolName} enhances tracking and returns. Use {toolName} alongside a 3PL to keep customers informed and reduce support load.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it for brands that want to improve post-purchase communication, reduce WISMO tickets, and make returns smoother. It’s a strong add-on to your ecommerce stack.
            </p>
            <p className="mt-3 text-slate-700">
              If you’re small or have minimal shipments, start on free and upgrade when branded tracking and notifications drive ROI through happier customers.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A valuable CX layer for shipping and returns that complements fulfillment and ecommerce platforms.
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
              Choose {toolName} if you want branded tracking, proactive notifications, and streamlined returns to improve customer experience and reduce support tickets.
            </p>
            <p>
              Consider ShipStation for labels or ShipBob for 3PL; use {toolName} to handle the post-purchase communication layer across carriers.
            </p>
            <p>{toolName} helps keep customers informed, engaged, and confident after checkout.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-amber-700 hover:text-amber-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-amber-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default AfterShipToolPage;
