import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "BigCommerce";
const slug = "bigcommerce";
const category = "Ecommerce Platform";
const shortPitch =
  "BigCommerce is a hosted ecommerce platform built for scalability with built-in SEO, multi-storefront, B2B features, and headless options for modern commerce stacks.";
const pricingSummary =
  "Standard from ~$39/month, Plus around $105/month, Pro around $399/month with revenue thresholds; Enterprise offers custom pricing, B2B features, and advanced support.";
const officialUrl = "https://www.bigcommerce.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/bigcommerce.com",
  gradient: "from-indigo-500 via-slate-600 to-slate-900",
  glow: "shadow-[0_20px_80px_rgba(79,70,229,0.23)]",
};

const alternatives = [
  { name: "Shopify", slug: "shopify" },
  { name: "WooCommerce", slug: "woocommerce" },
  { name: "Wix", slug: "wix" },
  { name: "Squarespace", slug: "squarespace" },
];

const faqs = [
  { q: "Is BigCommerce good for scaling?", a: "Yes. BigCommerce is known for performance, multi-storefront, and native features that reduce reliance on apps, making it suitable for growing brands and mid-market stores." },
  { q: "Does BigCommerce support B2B?", a: "BigCommerce has strong B2B features (price lists, customer groups, quotes) on higher tiers/Enterprise, making it a solid choice for blended B2B/B2C." },
  { q: "Can BigCommerce be headless?", a: "Yes. BigCommerce offers APIs and integrations for headless builds with frameworks like Next.js plus CMS platforms for content-driven storefronts." },
  { q: "What about SEO?", a: "BigCommerce provides SEO-friendly URLs, sitemaps, AMP for product pages, and fast infrastructure to support search performance." },
  { q: "Does BigCommerce charge transaction fees?", a: "BigCommerce does not charge additional transaction fees, though card processing fees apply via payment gateways." },
  { q: "How are payment options?", a: "BigCommerce supports many gateways, digital wallets, and local payments, making it flexible for international selling." },
  { q: "Is there revenue-based plan enforcement?", a: "Yes. Plans have sales volume thresholds that trigger upgrades. Ensure your plan matches current GMV to avoid forced tier changes." },
  { q: "Which plan should I start with?", a: "Start on Standard for validation, move to Plus for abandoned cart savers and marketing features, Pro/Enterprise for higher volume, faceted search, and B2B features." },
];

function BigCommerceToolPage() {
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
        "BigCommerce is a scalable hosted platform with strong native features, SEO, and B2B capabilities. It reduces app sprawl and supports headless builds for brands that need flexibility.",
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
      icon: <ShoppingBag className="h-5 w-5 text-indigo-500" />,
      title: "Scalable hosted ecommerce",
      body: "Fast infrastructure, SEO-friendly URLs, and no transaction fees make BigCommerce ready for growing catalogs and traffic.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-slate-500" />,
      title: "Built-in marketing + checkout",
      body: "Abandoned cart recovery, coupons, faceted search (Pro), and optimized checkout reduce reliance on third-party apps.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-emerald-500" />,
      title: "B2B features",
      body: "Customer groups, price lists, quotes, and account management support B2B or hybrid stores without heavy customization.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Headless and integrations",
      body: "Robust APIs, multipurpose webhooks, and integrations with ERP/CRM/marketing stacks enable headless and composable builds.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Security and compliance",
      body: "PCI-compliant hosting, SSL, and security best practices reduce operational overhead compared to self-hosted platforms.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Multi-storefront and international",
      body: "Multi-storefront support, multi-currency, and localization help brands launch multiple experiences from one backend.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="BigCommerce review for scaling ecommerce: pricing, features, pros & cons, alternatives, and comparisons vs Shopify and WooCommerce."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-indigo-300/20 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-slate-400/20 blur-3xl" />
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
              <div
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}
              >
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
                  BigCommerce offers performance, B2B tools, and headless-ready APIs so brands can scale without stitching dozens of apps together.
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
              {toolName} is a hosted {category.toLowerCase()} platform designed for growing and mid-market brands. It delivers fast storefronts, SEO-friendly structure, and native features that reduce reliance on third-party apps.
            </p>
            <p className="mt-3 text-slate-700">
              BigCommerce supports B2B/B2C, multi-storefront, and headless builds via APIs, making it flexible for modern commerce stacks. It avoids transaction fees and offers broad payment support.
            </p>
            <p className="mt-3 text-slate-700">
              Teams pick it when they want scalability and governance without moving to fully custom builds on day one.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} fits brands that need scalability, B2B options, and fewer app dependencies.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Mid-market brands wanting performance and built-in features without heavy apps.",
                "B2B or hybrid stores needing price lists, customer groups, and quotes.",
                "Teams exploring headless/composable builds with API flexibility.",
                "International sellers needing multi-storefront, currencies, and localization.",
                "Retailers who want to avoid transaction fees on platform side.",
                "Businesses outgrowing entry-level builders and needing governance.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-indigo-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">{toolName} focuses on performance, built-in capabilities, and flexibility for B2B/B2C and headless builds.</p>
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
                  BigCommerce plans scale by features and annual online sales thresholds. Standard covers essentials; Plus adds marketing features; Pro adds faceted search and higher thresholds; Enterprise unlocks B2B and advanced support.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start Standard; move to Plus for abandoned cart; Pro/Enterprise for higher volume and B2B/search needs.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Plan</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key inclusions</th>
                    <th className="px-4 py-3">Approx. price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Standard</td>
                    <td className="px-4 py-3">Early-stage stores</td>
                    <td className="px-4 py-3">Core checkout, SEO, product/catalog management</td>
                    <td className="px-4 py-3">~$39/month</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Plus</td>
                    <td className="px-4 py-3">Growing stores</td>
                    <td className="px-4 py-3">Abandoned cart saver, customer groups, marketing features</td>
                    <td className="px-4 py-3">~$105/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Higher-volume merchants</td>
                    <td className="px-4 py-3">Faceted search, higher sales thresholds, custom SSL</td>
                    <td className="px-4 py-3">~$399/month</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Scaling/B2B stores</td>
                    <td className="px-4 py-3">Custom pricing, B2B features, SLAs, priority support</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Watch sales thresholds that trigger plan upgrades. Factor payment gateway fees and any app/agency costs. Pro/Enterprise are best for higher volume and B2B/search needs.
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
                  <li>No platform transaction fees; broad payment options.</li>
                  <li>Strong native features reduce reliance on apps.</li>
                  <li>B2B tools (price lists, quotes, customer groups) built in.</li>
                  <li>Headless-ready APIs and multi-storefront support.</li>
                  <li>SEO-friendly architecture and fast hosting.</li>
                  <li>Good for international expansion with multi-currency/localization.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Revenue thresholds trigger plan upgrades; budget for jumps.</li>
                  <li>App ecosystem smaller than Shopify; some features need partners.</li>
                  <li>Design flexibility is good but can feel less polished than Shopify themes out of the box.</li>
                  <li>Advanced B2B/search features require higher tiers.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              BigCommerce competes with other hosted and open-source platforms. Choose based on customization needs, app reliance, and budget for transaction fees and apps.
            </p>
            <p className="mt-2 text-slate-700">All support ecommerce; they differ on app ecosystems, fees, and B2B depth.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
                  </div>
                  <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">Here’s how BigCommerce stacks up against two staple platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Shopify</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/compare/woocommerce-vs-shopify-vs-bigcommerce">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Shopify has the largest app/theme ecosystem and polished UX. BigCommerce includes more native features (no platform fees, built-in B2B) and is headless-friendly. Shopify’s apps can add cost; BigCommerce may cut app reliance.
              </p>
              <p className="mt-2 text-slate-700">
                Choose BigCommerce for B2B, multi-storefront, and fewer add-ons; choose Shopify for the biggest ecosystem and rapid theming.
              </p>
              <p className="mt-2 text-slate-900">Both scale; pick based on desired native features vs ecosystem breadth.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs WooCommerce</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/compare/woocommerce-vs-shopify-vs-bigcommerce">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                WooCommerce is open-source and highly customizable but requires hosting and upkeep. BigCommerce is hosted with built-in performance and compliance, reducing maintenance.
              </p>
              <p className="mt-2 text-slate-700">
                Choose BigCommerce if you want hosted reliability and native features; choose WooCommerce when you need full code control and specific WP ecosystem plugins.
              </p>
              <p className="mt-2 text-slate-900">Both can be headless; decide based on desired control vs managed simplicity.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              BigCommerce is worth it for brands that need scalable, hosted ecommerce with strong native features, B2B options, and headless flexibility without heavy app costs.
            </p>
            <p className="mt-3 text-slate-700">
              If you want the broadest app marketplace, Shopify wins; if you want total code control, WooCommerce wins. BigCommerce balances scalability, features, and managed reliability.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> BigCommerce is a strong platform for growing stores that want performance, built-in features, and B2B readiness with room to go headless.</p>
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
              Choose BigCommerce if you want a hosted platform with strong native features, SEO, and B2B capabilities without transaction fees. It scales well and supports headless/composable builds.
            </p>
            <p>
              Consider Shopify for ecosystem breadth or WooCommerce for deep customization. BigCommerce is a balanced pick for performance and native functionality.
            </p>
            <p>BigCommerce integrates easily with ERPs, CRMs, and marketing tools, making it fit for modern ecommerce stacks.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-indigo-700 hover:text-indigo-600" href={officialUrl}>
                Visit {toolName}
              </a>
              .
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-indigo-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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
      {open && (
        <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">
          {answer}
        </div>
      )}
    </div>
  );
}

export default BigCommerceToolPage;
