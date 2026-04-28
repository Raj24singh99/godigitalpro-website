import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Shyp";
const slug = "shyp";
const category = "Shipping & Fulfillment";
const shortPitch =
  "Shyp helps ecommerce brands simplify shipping with pickups, label creation, and multi-carrier options to speed fulfillment without a heavy ops team.";
const pricingSummary =
  "Pricing depends on shipping volume, carrier rates, and service tiers. Expect per-label costs and fees for pickups or premium support.";
const officialUrl = "https://www.shyp.com";
const ratingValue = 4.0;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/shyp.com",
  gradient: "from-emerald-500 via-teal-500 to-blue-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.24)]",
};

const alternatives = [
  { name: "ShipBob", slug: "shipbob" },
  { name: "ShipStation", slug: "shipstation" },
  { name: "Shopify", slug: "shopify" },
  { name: "Printful", slug: "printful" },
  { name: "Printify", slug: "printify" },
];

const faqs = [
  {
    q: "What is Shyp?",
    a: "Shyp is a shipping tool that simplifies label creation, pickups, and carrier selection for ecommerce brands.",
  },
  {
    q: "Who is it for?",
    a: "Small to mid-sized ecommerce brands that want hands-off shipping help without running their own warehouse software.",
  },
  {
    q: "Does Shyp handle pickups?",
    a: "Yes. Pickup services can be scheduled in supported areas, reducing trips to drop-off locations.",
  },
  {
    q: "How is pricing structured?",
    a: "Costs vary by shipping volume, carrier rates, and any pickup or support fees. Bulk discounts may apply with higher volume.",
  },
  {
    q: "Does Shyp integrate with stores?",
    a: "It connects with major ecommerce platforms and marketplaces to sync orders and print labels faster.",
  },
  {
    q: "Can it replace a 3PL?",
    a: "No. It streamlines shipping, but full fulfillment/warehousing often needs a 3PL like ShipBob or in-house ops.",
  },
  {
    q: "What about tracking?",
    a: "Tracking links and notifications are available through carrier connections and store integrations.",
  },
  {
    q: "Is insurance available?",
    a: "Carrier insurance options may be available; review policies per carrier and shipment value.",
  },
];

function ShypToolPage() {
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
        "Shyp streamlines small-business shipping with label creation, pickups, and carrier options. It is useful for brands that want to simplify outbound logistics without a heavy stack.",
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
      title: "Multi-carrier labels",
      body: "Compare carriers, generate labels, and pick services that match speed and cost targets.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Pickup scheduling",
      body: "Arrange pickups in supported regions to save time on drop-offs and batch shipping.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Order syncing",
      body: "Sync orders from ecommerce platforms to avoid manual entry and reduce mistakes.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Packaging guidance",
      body: "Get packing tips and requirements by carrier to reduce damages and returns.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Tracking & notifications",
      body: "Provide customers with tracking updates through your storefront or email flows.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Integrations",
      body: "Connect stores and marketplaces to centralize labels and reporting.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Shyp review: pricing, features, pros & cons, and alternatives so you can decide if it fits your shipping workflow."
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
                  {toolName} streamlines label creation, pickups, and carrier selection so small teams can ship faster with fewer errors.
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
              {toolName} is a shipping tool built to simplify ecommerce fulfillment. It connects to storefronts, creates labels, and arranges pickups so teams can send packages without heavy operational overhead.
            </p>
            <p className="mt-3 text-slate-700">
              It’s best for brands that need straightforward shipping workflows, not full warehouse management. Review carrier options and service areas to confirm coverage.
            </p>
            <p className="mt-3 text-slate-700">
              Pair it with your ecommerce platform, email flows, and analytics to keep customers updated and track shipping costs.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for ecommerce brands that need simpler shipping without building a full ops team.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "DTC brands shipping smaller daily volumes that still want pickups.",
                "Marketplace sellers needing quick label creation and tracking.",
                "Teams that want multi-carrier options without custom integrations.",
                "SMBs without a 3PL that still need reliable shipping workflows.",
                "Ops managers centralizing shipping data across stores and marketplaces.",
                "Brands testing new markets and service levels before scaling to a 3PL.",
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
              {toolName} focuses on making shipping simpler: label creation, pickups, tracking, and store integrations in one flow.
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
                  {toolName} pricing is tied to shipping volume, carrier rates, and services like pickups. Expect per-label fees plus any surcharges; higher volume may unlock better negotiated rates.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with current volume; revisit rates after 30–60 days to negotiate or switch carriers for better economics.</p>
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
                    <td className="px-4 py-3">Low-volume brands</td>
                    <td className="px-4 py-3">Basic labels, limited pickups</td>
                    <td className="px-4 py-3">Good for testing coverage</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">Steady ecommerce volume</td>
                    <td className="px-4 py-3">Better rates, more pickups, integrations</td>
                    <td className="px-4 py-3">Monitor surcharges and zones</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">High-volume/Custom</td>
                    <td className="px-4 py-3">Large shippers</td>
                    <td className="px-4 py-3">Negotiated carrier terms, support, automation</td>
                    <td className="px-4 py-3">Evaluate vs. 3PL economics</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Factor in packaging, insurance, and returns costs. Review carrier rules to avoid adjustment fees and maintain delivery speed expectations.
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
                  <li>Simple label creation and pickups for small teams.</li>
                  <li>Multi-carrier options to optimize cost and speed.</li>
                  <li>Store integrations to reduce manual entry.</li>
                  <li>Tracking links keep customers informed.</li>
                  <li>Works as a bridge before adopting a 3PL.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Coverage and pickups depend on region and carriers.</li>
                  <li>Per-label and surcharge fees can add up.</li>
                  <li>Not a replacement for full warehouse management.</li>
                  <li>Limited control compared to owning carrier accounts directly.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other shipping and fulfillment tools to match your volume, carrier mix, and ops needs.
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
            <p className="text-slate-700">See how {toolName} compares to other shipping platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs ShipBob</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/shipbob">
                  View ShipBob
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ShipBob is a 3PL with warehousing and nationwide fulfillment; {toolName} focuses on shipping and pickups. Choose ShipBob if you need outsourced fulfillment, {toolName} if you ship from your own space.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs ShipStation</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/shipstation">
                  View ShipStation
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ShipStation offers deep rule-based automation and carrier rate shopping; {toolName} emphasizes simplicity and pickups. Choose based on whether you need granular rules or a lighter workflow.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want simpler shipping with pickups and multi-carrier labels, and you are not ready for a 3PL or complex warehouse software.
            </p>
            <p className="mt-3 text-slate-700">
              Evaluate carrier coverage, pickup availability, and per-label fees. Keep an eye on surcharges and delivery speed to maintain customer experience.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A handy shipping helper for small to mid-size brands; ideal as a bridge before scaling to full fulfillment solutions.
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
              Choose {toolName} if you need simple, multi-carrier shipping with pickups and want to avoid manual label work as you grow.
            </p>
            <p>
              Consider ShipBob if you need outsourced fulfillment or ShipStation for advanced automation; {toolName} fits lean teams managing shipping in-house.
            </p>
            <p>{toolName} keeps shipping approachable while you validate products and markets—upgrade ops when volume justifies it.</p>
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

export default ShypToolPage;
