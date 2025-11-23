import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, LayoutDashboard, Palette, ShoppingCart, Globe, BarChart3, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Wix";
const slug = "wix";
const category = "Website Builder";
const shortPitch =
  "Wix is a visual, hosted website builder with built-in ecommerce, CRM, and marketing tools so solo founders, agencies, and SMBs can launch fast without worrying about servers or plugins.";
const pricingSummary =
  "Wix has free trials, website plans from ~$16/mo, and business/ecommerce plans from ~$27/mo billed annually. Pricing scales with bandwidth, storage, analytics, and support tiers.";
const officialUrl = "https://www.wix.com";
const affiliateUrl = `/go/${slug}`;
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/wix.com",
  gradient: "from-amber-500 via-orange-500 to-rose-500",
  glow: "shadow-[0_20px_80px_rgba(251,191,36,0.25)]",
};

const alternatives = [
  { name: "Webflow", slug: "webflow" },
  { name: "Squarespace", slug: "squarespace" },
  { name: "Shopify", slug: "shopify" },
  { name: "Framer", slug: "framer" },
  { name: "WooCommerce", slug: "woocommerce" },
];

const faqs = [
  {
    q: "Is Wix free?",
    a: "You can build and publish on Wix’s free tier with a Wix subdomain and ads. To connect a custom domain, accept payments, or remove Wix branding you need a paid plan.",
  },
  {
    q: "Is Wix good for agencies?",
    a: "Agencies use Wix Studio and Wix Partners to ship landing pages, small business sites, and lightweight ecommerce stores quickly. White-label dev mode plus client-friendly editors make handoff easier.",
  },
  {
    q: "Does Wix support ecommerce?",
    a: "Yes. Business and eCommerce plans add payments, product catalogs, shipping, subscriptions, POS, and dropshipping apps. It’s best for SMB catalogs and digital products.",
  },
  {
    q: "Can I customize SEO on Wix?",
    a: "Wix lets you edit meta tags, schemas, redirects, structured data, and page-level SEO defaults. The newest Editor X/Wix Studio outputs cleaner markup than earlier builders.",
  },
  {
    q: "What’s the difference between Wix Studio and classic Wix?",
    a: "Wix Studio (formerly Editor X) offers more responsive control, flex layouts, and teamwork features for agencies. Classic Wix Editor is simpler and great for DIY sites.",
  },
  {
    q: "How does Wix compare to Webflow?",
    a: "Wix is faster to launch and bundles CRM/automations. Webflow offers deeper design/Dev-like control and cleaner CMS output. We cover it in the comparison below.",
  },
  {
    q: "Does Wix have integrations?",
    a: "Wix App Market includes 250+ native integrations (HubSpot, Google Ads, Meta, Mailchimp) plus Zapier/Make support so you can connect automations.",
  },
  {
    q: "Who should avoid Wix?",
    a: "If you need full code export, complex relational CMS, or enterprise checkout customization, platforms like Webflow, Shopify, or WooCommerce offer more flexibility.",
  },
];

function WixToolPage() {
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
        "Wix is a hosted builder with ecommerce, CRM, and automations that lets marketers launch modern sites quickly. It’s ideal when you want speed-to-market without maintaining hosting or plugins.",
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
      icon: <LayoutDashboard className="h-5 w-5 text-amber-500" />,
      title: "Drag-and-drop editing with responsive control",
      body: "Wix Studio and the classic Editor give marketers full control over sections, animations, media, and layouts with breakpoints and flex behavior baked in.",
    },
    {
      icon: <Palette className="h-5 w-5 text-rose-500" />,
      title: "Templates and components for any niche",
      body: "Curated template kits with apps for booking, restaurants, education, or ecommerce mean you can adapt Wix to almost any service or product use case fast.",
    },
    {
      icon: <ShoppingCart className="h-5 w-5 text-emerald-500" />,
      title: "Built-in ecommerce and subscriptions",
      body: "Sell physical products, digital downloads, bookings, or subscriptions with multi-channel inventory, coupons, and point-of-sale support.",
    },
    {
      icon: <Plug className="h-5 w-5 text-indigo-500" />,
      title: "Huge app market + automations",
      body: "Add chat, reviews, loyalty, shipping, or CRM integrations from the Wix App Market, or use Wix Automations and Zapier to trigger workflows from site activity.",
    },
    {
      icon: <Globe className="h-5 w-5 text-sky-500" />,
      title: "Hosting, CDN, and security handled",
      body: "Wix hosts, patches, and scales everything for you with a global CDN, SSL, and DDoS protection, so you avoid managing servers or caching plugins.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-purple-500" />,
      title: "CRM, analytics, and marketing tools",
      body: "Wix includes contact CRM, email marketing, chat, forms, funnels, and reporting so SMBs can track performance without stitching together multiple tools.",
    },
  ];

  const pricingTable = [
    {
      plan: "Website (Combo/Unlimited)",
      best: "Portfolios, blogs, service pages",
      limits: "No payments, includes hosting, removes Wix ads, connects domain",
      price: "~$16–$22/mo billed annually",
    },
    {
      plan: "Business Basic",
      best: "New ecommerce stores needing payments",
      limits: "50 GB storage, basic analytics, payments & SSL, automated sales tax",
      price: "~$27/mo billed annually",
    },
    {
      plan: "Business Unlimited",
      best: "Scaling stores and agencies",
      limits: "100 GB storage, subscriptions, advanced shipping, 100 automations/mo",
      price: "~$32/mo billed annually",
    },
    {
      plan: "Business VIP / Enterprise",
      best: "High-traffic brands needing priority support",
      limits: "Unlimited storage, advanced reporting, dedicated support, custom SLA",
      price: "~$59/mo+ / custom enterprise",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Hands-on Wix review covering pricing, templates, ecommerce features, pros & cons, alternatives, and who should choose Wix over Webflow or Shopify in 2025."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-amber-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-rose-300/20 blur-3xl" />
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
                  Wix balances designer-friendly layouts with beginner-friendly onboarding, hosting, and marketing tools so teams can focus on launch, not infrastructure.
                </p>
                <div className="relative mt-4 flex items-center gap-2 text-sm font-semibold">
                  <Sparkles className="h-4 w-4 text-amber-200" /> Recommended by GoDigitalPro
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--overview bg-white">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">What is {toolName}?</h2>
            <p className="mt-4 text-slate-700">
              {toolName} is a hosted {category.toLowerCase()} that mixes drag-and-drop design, ecommerce, CRM, and automations in one stack. You pick a template or start from a blank canvas and publish to Wix’s global infrastructure.
            </p>
            <p className="mt-3 text-slate-700">
              Marketers choose Wix when they need to ship sites quickly without touching DNS, servers, or plugin updates. Agencies lean on Wix Studio for better responsive control and collaborative editing.
            </p>
            <p className="mt-3 text-slate-700">
              From restaurants and fitness studios to SaaS coming soon pages, Wix’s template library and App Market cover most SMB and prosumer scenarios.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Wix is perfect when speed-to-market beats deep custom code.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Solo founders validating offers and building landing pages.",
                "Agencies shipping SMB sites with recurring retainers.",
                "Local businesses needing booking, menus, or appointment flows.",
                "Digital product sellers bundling content + ecommerce + community.",
                "Consultants requiring a simple CRM and invoicing in one place.",
                "Creators launching multi-page sites without hiring developers.",
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
            <p className="mt-3 text-slate-700">Wix bundles the essentials so you can market, sell, and support customers without extra plugins.</p>
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
                  Plans differ based on whether you need payments and how much storage/bandwidth you use. Business plans unlock ecommerce, subscriptions, and automations.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Most service sites use Combo/Unlimited. Ecommerce stores start on Business Basic and upgrade once automations and analytics demands grow.</p>
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
                  {pricingTable.map((row, idx) => (
                    <tr key={row.plan} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                      <td className="px-4 py-3 font-semibold text-slate-900">{row.plan}</td>
                      <td className="px-4 py-3">{row.best}</td>
                      <td className="px-4 py-3">{row.limits}</td>
                      <td className="px-4 py-3">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Annual billing lowers costs by ~20%. Add-ons from the App Market are usually monthly, so factor them into long-term budgets.</p>
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
                  <li>Fastest launch for most service and SMB sites.</li>
                  <li>Hosting, CDN, SSL, and maintenance built-in.</li>
                  <li>App Market covers CRM, chat, bookings, marketing.</li>
                  <li>Wix Studio gives agencies flex layouts + teamwork.</li>
                  <li>Ecommerce + subscriptions + POS without plugins.</li>
                  <li>SEO, schemas, and redirects manageable in-app.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Less code-level control than Webflow or headless builds.</li>
                  <li>Exporting to another platform is manual.</li>
                  <li>App subscriptions can add up beyond base plan.</li>
                  <li>Heavy animations/templates need careful performance tuning.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">If you need deeper CMS control, developer workflows, or enterprise ecommerce, explore these options.</p>
            <p className="mt-2 text-slate-700">Each card links to a full review so you can compare pricing and use cases.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Explore pricing, features, pros & cons.</p>
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
            <p className="text-slate-700">Dive into our detailed comparisons to see where Wix fits.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Webflow vs Framer</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/webflow-vs-framer-vs-wix">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Webflow prioritizes clean code and CMS control, Framer ships animated product marketing quickly, and Wix focuses on all-in-one simplicity. Read the breakdown on design control, CMS depth, and pricing.
              </p>
              <p className="mt-2 text-slate-900">Choose Wix when you want bundled hosting, CRM, and speedy client handoff.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Shopify vs WooCommerce</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/woocommerce-vs-shopify-vs-wix">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Shopify wins on hosted ecommerce scale, WooCommerce gives you total control in WordPress, and Wix balances speed plus built-in tools for smaller catalogs.
              </p>
              <p className="mt-2 text-slate-900">If you want drag-and-drop simplicity with payments built in, Wix is tough to beat.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              When you prioritize speed and ease, Wix delivers. You trade some code-level flexibility for built-in hosting, CRM, and ecommerce. For SMB budgets and agencies juggling many sites, that trade usually works.
            </p>
            <p className="mt-3 text-slate-700">If you need React-level control, advanced CMS relationships, or global ecommerce operations, consider Webflow, Shopify, or WooCommerce instead.</p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Wix is a smart default for service businesses, local commerce, and agencies that want to launch quickly with a modern design system.
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
            <p>Choose Wix if you want a hosted builder that balances aesthetics, ecommerce, and marketing tools with minimal setup.</p>
            <p>Pick Webflow or Framer when design fidelity is crucial, or Shopify/WooCommerce when ecommerce depth matters more than simplicity.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, try it here: <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>Visit {toolName}</a>.
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-sky-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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

export default WixToolPage;
