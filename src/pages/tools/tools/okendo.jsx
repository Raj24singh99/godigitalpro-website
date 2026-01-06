import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Okendo";
const slug = "okendo";
const category = "Ecommerce Reviews & UGC";
const shortPitch = "Okendo collects and showcases reviews, ratings, photos, and UGC to build trust and increase conversion for ecommerce brands.";
const pricingSummary = "Plans scale by order volume and features. Higher tiers add advanced widgets, UGC collection, syndication, and integrations.";
const officialUrl = "https://www.okendo.io";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/okendo.io",
  gradient: "from-amber-500 via-rose-500 to-fuchsia-600",
  glow: "shadow-[0_20px_80px_rgba(249,115,22,0.22)]",
};

const alternatives = [
  { name: "Yotpo", slug: "yotpo" },
  { name: "Judge.me", slug: "judge-me" },
  { name: "Stamped.io", slug: "stamped-io" },
  { name: "Loox", slug: "loox" },
];

const faqs = [
  { q: "Does Okendo work with Shopify?", a: "Yes. Okendo is built for Shopify and Shopify Plus with a native app and theme widgets." },
  { q: "Can customers upload photos and videos?", a: "Yes. Collection forms support media uploads to enrich reviews and UGC." },
  { q: "Does Okendo integrate with Klaviyo?", a: "Yes. You can use Klaviyo data to trigger requests and segment audiences." },
  { q: "Is there review syndication?", a: "Syndication options are available on higher tiers; confirm coverage for your markets." },
  { q: "How is moderation handled?", a: "Moderation queues and fraud checks help keep reviews compliant with brand guidelines." },
  { q: "What about incentives?", a: "You can run post-purchase campaigns with incentives to increase review volume and media submissions." },
  { q: "Can I customize widgets?", a: "Widgets are themeable; deeper design tweaks may require developer help." },
  { q: "Does it support multiple stores?", a: "Multi-store and multi-language support are available on higher tiers; verify specifics before purchase." },
];

function OkendoToolPage() {
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
        "Okendo is a reviews and UGC platform for ecommerce. It captures reviews, photos, videos, and Q&A, then displays them in conversion-optimized widgets.",
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
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "Review collection", body: "Post-purchase requests with incentives, attributes, and media uploads." },
    { icon: <Folder className="h-5 w-5 text-rose-500" />, title: "UGC display", body: "PDP widgets, carousels, and galleries optimized for conversion." },
    { icon: <Cloud className="h-5 w-5 text-fuchsia-500" />, title: "Attributes & filters", body: "Collect product-specific attributes to filter and surface relevant reviews." },
    { icon: <Plug className="h-5 w-5 text-indigo-500" />, title: "Integrations", body: "Shopify, Klaviyo, and loyalty tools share data for email and rewards." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Moderation & compliance", body: "Moderation controls, fraud checks, and permissions for brand safety." },
    { icon: <Rocket className="h-5 w-5 text-emerald-500" />, title: "Campaigns & emails", body: "Automated flows to request reviews and repurpose UGC across channels." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Okendo review: pricing, features, pros & cons, and alternatives to decide if its reviews and UGC platform fits your store."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-amber-200/30 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-fuchsia-200/25 blur-3xl" />
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
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Reviewed by GoDigitalPro - Updated May 2025</span>
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
                  {toolName} helps DTC brands collect media-rich reviews and display them in conversion-optimized widgets across PDPs, carts, and emails.
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
              {toolName} helps ecommerce brands collect and display reviews, photos, videos, and Q&A. Post-purchase flows with incentives increase response rates; attribute fields let shoppers filter reviews to what matters most.
            </p>
            <p className="mt-3 text-slate-700">
              Widgets for PDPs, carousels, and galleries are built for conversion. Segmentation and tags surface the most relevant proof. Integrations with Shopify, Klaviyo, and loyalty platforms make it a good fit for DTC teams without heavy custom dev.
            </p>
            <p className="mt-3 text-slate-700">
              You still need clear moderation rules, strong creative incentives, and alignment with brand safety to get the most from UGC.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for DTC brands wanting rich reviews and UGC to lift conversion.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Shopify and Shopify Plus merchants focused on PDP conversion.",
                "DTC teams collecting photo/video UGC for ads and email.",
                "Brands wanting post-purchase flows with incentives and segmentation.",
                "Marketers who need review syndication and on-site widgets.",
                "Merchandisers wanting product attribute filters in reviews.",
                "Teams using Klaviyo/loyalty tools that need data sharing.",
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
              Focus on high-quality, attribute-rich reviews and UGC with strong PDP widgets and integrations.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {featureBlocks.map((feature) => (
                <div key={feature.title} className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center gap-3 text-slate-900">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
                      {feature.icon}
                    </div>
                    <p className="text-lg font-semibold">{feature.title}</p>
                  </div>
                  <p className="mt-3 text-sm text-slate-700">{feature.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--pricing bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pricing</h2>
            <p className="mt-3 text-slate-700">
              Pricing scales by order volume and modules. Higher tiers add advanced widgets, attributes, media UGC, and integrations. Ask for order bands, overage handling, and whether syndication is included.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                { name: "Starter", price: "Entry", detail: "Core collection, basic widgets, email requests", bestFor: "New DTC brands testing reviews" },
                { name: "Growth", price: "Mid-tier", detail: "Advanced widgets, attributes, media UGC, integrations", bestFor: "Scaling Shopify/Plus brands" },
                { name: "Enterprise", price: "Custom", detail: "Multi-store, higher volumes, SLAs, dedicated support", bestFor: "High-volume or multi-store setups" },
              ].map((tier) => (
                <div key={tier.name} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                  <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">{tier.name}</p>
                  <p className="mt-2 text-2xl font-bold text-slate-900">{tier.price}</p>
                  <p className="mt-2 text-sm text-slate-700">{tier.detail}</p>
                  <p className="mt-3 text-xs font-semibold text-slate-600">Best for: {tier.bestFor}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold text-slate-900">Pricing tip</p>
              <p className="mt-2 text-sm text-slate-700">
                Budget for peak season order volume. Negotiate order bands and confirm whether add-ons like syndication or premium support affect pricing tiers.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros and cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <p className="text-lg font-semibold text-emerald-700">Pros</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>Strong PDP widgets with attributes and media for trust signals.</li>
                  <li>Good Shopify and Klaviyo integrations for automation.</li>
                  <li>UGC collection flows are flexible with incentives.</li>
                  <li>Segmentation and tags improve relevancy of displayed reviews.</li>
                  <li>Responsive support and implementation resources.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <p className="text-lg font-semibold text-rose-700">Cons</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>Pricing rises with order volume; budget accordingly for Q4 peaks.</li>
                  <li>May require theme edits to fine-tune widget design.</li>
                  <li>Analytics depth is lighter than full-fledged CX suites.</li>
                  <li>Non-Shopify stacks may need more custom work.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives</h2>
            <p className="mt-3 text-slate-700">Compare these if you need a different mix of pricing, loyalty, or SMS features:</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-xs text-slate-600">{alt.tagline || "Reviews/UGC alternative"}</p>
                  </div>
                  <Link className="text-sm font-semibold text-amber-600 hover:text-amber-500" to={`/tools/${alt.slug}`}>
                    View
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--comparisons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Okendo vs other review tools</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                { title: "Okendo vs Yotpo", betterFor: "Yotpo is a suite with loyalty/SMS; Okendo specializes in reviews/UGC with strong PDP widgets and clearer pricing.", choose: "Pick Okendo for focused reviews and UGC with Shopify/Klaviyo. Pick Yotpo if you want loyalty/SMS bundled." },
                { title: "Okendo vs Judge.me", betterFor: "Judge.me is budget-friendly and lightweight; Okendo offers richer attributes, UGC, and design flexibility for premium brands.", choose: "Pick Okendo for richer media and attributes. Pick Judge.me if budget is the main constraint." },
                { title: "Okendo vs Stamped", betterFor: "Stamped bundles loyalty; Okendo specializes in reviews/UGC depth and design control.", choose: "Pick Okendo for deeper review widgets. Pick Stamped if you need loyalty plus reviews in one tool." },
                { title: "Okendo vs Loox", betterFor: "Loox is photo-first; Okendo balances attributes, media, and segmentation.", choose: "Pick Okendo if you want attributes and Klaviyo flows. Pick Loox if you need very simple photo reviews." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                  <p className="text-lg font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-2 text-sm text-slate-700">{item.betterFor}</p>
                  <p className="mt-3 text-sm font-semibold text-slate-800">Why choose</p>
                  <p className="mt-1 text-sm text-slate-700">{item.choose}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--worth bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if your PDP conversion depends on rich social proof with media. Plan incentives and email flows to maximize response rates, and align moderation rules with brand safety and legal requirements.
            </p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Set up post-purchase triggers and incentives for early volume.",
                "Collect attributes (fit, size, use case) to improve filtering and relevance.",
                "Use Klaviyo/ESP data to segment review requests by product and audience.",
                "Define moderation SLAs and brand guidelines for media and text.",
              ].map((tip) => (
                <div key={tip} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <p className="text-sm">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--faq bg-white">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} FAQ</h2>
            <div className="mt-6 space-y-3">
              {faqs.map((item, idx) => (
                <AccordionItem key={item.q} question={item.q} answer={item.a} defaultOpen={idx === 0} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section--final bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-2xl font-bold text-slate-900">Final verdict: who is {toolName} best for?</h2>
              <p className="mt-3 text-slate-700">
                {toolName} is best for DTC brands on Shopify/Plus that need high-quality reviews and UGC with strong PDP widgets and Klaviyo integrations. If you need loyalty or SMS baked in, consider a broader suite; otherwise {toolName} excels at focused social proof.
              </p>
              <div className="mt-5 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">
                  If {toolName} fits your store, start a trial here:{" "}
                  <a className="text-amber-700 hover:text-amber-500" href={officialUrl}>
                    Visit {toolName}
                  </a>.
                </p>
                <div className="pt-2">
                  <Link
                    to="/tools"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
                  >
                    <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
                  </Link>
                </div>
              </div>
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

export default OkendoToolPage;
