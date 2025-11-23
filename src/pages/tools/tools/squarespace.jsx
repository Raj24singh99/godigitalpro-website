import React, { useState } from "react";
import { Sparkles, ShieldCheck, Layout, Palette, ShoppingBag, Globe, Layers, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Squarespace";
const slug = "squarespace";
const category = "Website Builder";
const shortPitch =
  "Squarespace is a design-forward website and ecommerce builder with polished templates, built-in commerce, email, scheduling, and analytics for creators, boutiques, and service businesses.";
const pricingSummary =
  "Plans start around $16–$23/month billed annually; Business and Commerce plans add checkout, subscriptions, and lower transaction fees. Scheduling and Email Campaigns are paid add-ons.";
const officialUrl = "https://www.squarespace.com";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/squarespace.com",
  gradient: "from-slate-900 via-slate-700 to-slate-500",
  glow: "shadow-[0_20px_80px_rgba(51,65,85,0.25)]",
};

const alternatives = [
  { name: "Webflow", slug: "webflow" },
  { name: "Wix", slug: "wix" },
  { name: "Shopify", slug: "shopify" },
  { name: "Framer", slug: "framer" },
];

const faqs = [
  {
    q: "Is Squarespace good for ecommerce?",
    a: "Yes for small-to-mid catalogs and brand sites. Commerce plans support products, subscriptions, shipping, tax, and a solid checkout. Shopify is better for complex catalogs or omnichannel retail.",
  },
  {
    q: "Is Squarespace easy for non-designers?",
    a: "Squarespace is known for polished templates and a guided editor. It’s easier than Webflow and more refined than many drag-and-drop builders.",
  },
  {
    q: "Does Squarespace handle SEO?",
    a: "It includes clean HTML, sitemaps, basic schema, URL controls, and redirects. It’s sufficient for most marketing sites; heavy technical SEO still favors Webflow or custom stacks.",
  },
  {
    q: "Can I sell subscriptions or services?",
    a: "Yes. Commerce plans support subscriptions. Squarespace Scheduling (add-on) handles appointments, paid sessions, and calendar integrations for service businesses.",
  },
  {
    q: "Does Squarespace include email or marketing?",
    a: "Email Campaigns and social integrations are available as add-ons. You can also connect Mailchimp, Klaviyo, or other ESPs.",
  },
  {
    q: "Is Squarespace mobile-friendly?",
    a: "Templates are responsive by default. You can tweak spacing and layout for mobile, though deep custom CSS is limited compared to Webflow.",
  },
  {
    q: "Is Squarespace good for portfolios?",
    a: "Yes. It’s popular with photographers, designers, and agencies because templates showcase imagery and typography well with minimal setup.",
  },
  {
    q: "When should I choose another builder?",
    a: "Pick Webflow for deeper design control, Wix for low-cost quick starts, or Shopify for larger ecommerce catalogs and POS needs.",
  },
];

function SquarespaceToolPage() {
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
        "Squarespace makes it easy to ship a polished site or boutique store with minimal setup. Templates, commerce, scheduling, and email add-ons keep everything in one place for creators and small businesses.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
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
      icon: <Layout className="h-5 w-5 text-slate-800" />,
      title: "Design-led templates",
      body: "Curated templates with typography and layout presets make brand sites look polished without heavy design work.",
    },
    {
      icon: <Palette className="h-5 w-5 text-indigo-600" />,
      title: "Visual editing with guardrails",
      body: "Drag-and-drop sections, batch style controls, and responsive defaults keep pages consistent across desktop and mobile.",
    },
    {
      icon: <ShoppingBag className="h-5 w-5 text-emerald-600" />,
      title: "Built-in commerce",
      body: "Sell products, subscriptions, and services with checkout, shipping, tax, and inventory. Sufficient for most small/medium catalogs.",
    },
    {
      icon: <Layers className="h-5 w-5 text-amber-600" />,
      title: "Scheduling and memberships",
      body: "Squarespace Scheduling and member areas (add-ons) handle bookings, paid sessions, and gated content without extra plugins.",
    },
    {
      icon: <Globe className="h-5 w-5 text-sky-600" />,
      title: "Hosting and performance baked in",
      body: "CDN-backed hosting, SSL, and built-in caching keep sites fast without manual DevOps.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-rose-500" />,
      title: "Marketing and SEO basics",
      body: "Email Campaigns, social integrations, analytics, sitemaps, redirects, and clean markup cover baseline marketing needs.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Templates, Ecommerce, Pros & Cons, Alternatives`}
        description="Detailed Squarespace review for creators and businesses covering pricing, templates, ecommerce, pros & cons, alternatives, and when to choose Webflow or Shopify instead."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-slate-300/20 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-slate-900" />
                {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                {toolName} Review (2025): Templates, Commerce, Pros & Cons
              </h1>
              <p className="mt-4 text-lg text-slate-600">{shortPitch}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-700">
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Our rating: {ratingValue}/5</span>
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Reviewed by GoDigitalPro • Updated May 2025</span>
              </div>
              <p className="mt-4 text-slate-700">{pricingSummary}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="btn btn-primary bg-slate-900 text-white ring-2 ring-slate-900 hover:bg-slate-700" href={officialUrl}>
                  Visit Squarespace
                </a>
              </div>
            </div>
            <div className="md:w-1/3">
              <div
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}
              >
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -left-8 top-10 h-20 w-20 rounded-full bg-white blur-3xl" />
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-slate-200 blur-3xl" />
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
                  Squarespace ships beautiful sites and shops quickly with curated templates, hosting, commerce, scheduling, and marketing basics built in.
                </p>
                <div className="relative mt-4 flex items-center gap-2 text-sm font-semibold">
                  <Sparkles className="h-4 w-4 text-amber-200" />
                  Great for creators & boutiques
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--overview bg-white">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">What is {toolName}?</h2>
            <p className="mt-4 text-slate-700">
              Squarespace is a {category.toLowerCase()} focused on design and simplicity. It bundles hosting, templates, commerce, scheduling, email, and analytics so small teams can ship sites fast without plugins or code.
            </p>
            <p className="mt-3 text-slate-700">Creators, boutiques, and service businesses pick Squarespace for polished visuals, manageable SEO controls, and built-in commerce that works out of the box.</p>
            <p className="mt-3 text-slate-700">If you want a beautiful site without deep customization, Squarespace balances control and simplicity well.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Squarespace suits design-minded teams that want simplicity.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Creators, photographers, and designers building portfolio sites.",
                "Small ecommerce brands and boutiques with focused catalogs.",
                "Consultants and studios selling services with scheduling add-ons.",
                "Local businesses needing a fast, polished site with forms and maps.",
                "Podcasters or bloggers wanting clean layouts without heavy plugins.",
                "Teams that prefer templates and guided editing over deep custom code.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-slate-900" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">Squarespace focuses on design, commerce, and ease-of-use so small teams can publish quickly.</p>
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
                  Personal and Business plans cover sites and basic marketing. Commerce plans reduce transaction fees and add richer checkout, subscriptions, and inventory tools. Scheduling and Email Campaigns require add-ons.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Launch on Business if you plan to sell. Upgrade to Commerce if fees or subscriptions matter.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Personal</td>
                    <td className="px-4 py-3">Portfolio and info sites</td>
                    <td className="px-4 py-3">No advanced commerce; basic templates/analytics</td>
                    <td className="px-4 py-3">~$16–$19/mo (annual)</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business</td>
                    <td className="px-4 py-3">Early commerce and services</td>
                    <td className="px-4 py-3">Transaction fee applies; third-party extensions</td>
                    <td className="px-4 py-3">~$23–$33/mo (annual)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Commerce (Basic/Advanced)</td>
                    <td className="px-4 py-3">Shops needing better checkout</td>
                    <td className="px-4 py-3">Lower/no transaction fee, abandoned cart, subscriptions</td>
                    <td className="px-4 py-3">~$27–$49+/mo (annual)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Squarespace pricing is predictable for hosted sites. If you need heavy POS and omnichannel inventory, Shopify is stronger. For deep visual control, Webflow can be worth the extra time.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-slate-900/5 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-slate-900">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Beautiful templates and typography out of the box.</li>
                  <li>All-in-one hosting, commerce, scheduling, and analytics.</li>
                  <li>Guided editing keeps designs consistent without code.</li>
                  <li>Good SEO basics (sitemaps, redirects, metadata).</li>
                  <li>Member areas and scheduling for service businesses.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Less granular design control than Webflow or Framer.</li>
                  <li>Commerce and POS depth trail Shopify for large catalogs.</li>
                  <li>Advanced custom CSS/JS is limited; extensibility via extensions is narrower.</li>
                  <li>Scheduling and email are add-ons, not included by default.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">If you want more customization or deeper ecommerce, consider these tools—each has a full review page.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
                  </div>
                  <a className="text-sm font-semibold text-slate-900 hover:text-slate-700" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">Here’s how Squarespace compares to Webflow, Wix, and Shopify.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Webflow</h3>
                <a className="text-sm font-semibold text-slate-900 hover:text-slate-700" href="/tools/compare/webflow-vs-wordpress-vs-squarespace">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Webflow offers deeper design control and CMS flexibility but has a steeper learning curve. Squarespace is faster for non-technical teams with polished templates and simpler editing.
              </p>
              <p className="mt-2 text-slate-900">Choose Squarespace for speed and simplicity; choose Webflow for granular control and advanced CMS needs.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Wix vs Shopify</h3>
                <a className="text-sm font-semibold text-slate-900 hover:text-slate-700" href="/tools/compare/squarespace-vs-wix-vs-shopify">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Wix is cheaper and more free-form; Shopify is deeper for ecommerce and POS. Squarespace sits in the middle with refined design, simpler editing, and solid commerce for smaller catalogs.
              </p>
              <p className="mt-2 text-slate-900">Choose Squarespace for design-led simplicity; choose Wix for budget flex; choose Shopify for larger retail operations.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              Squarespace is worth it if you want a beautiful, hosted site with built-in commerce and marketing basics. It’s great for portfolios, boutiques, and service brands that value aesthetics and ease over granular control.
            </p>
            <p className="mt-3 text-slate-700">
              If you need complex ecommerce, POS, or heavy customization, Shopify or Webflow may fit better. Wix is cheaper for simple sites but less refined in design consistency.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Squarespace is a strong choice for design-led sites and smaller shops that want an all-in-one builder without technical overhead.
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
            <p>Choose Squarespace if you want speed, polish, and bundled hosting/commerce with minimal setup.</p>
            <p>Choose Webflow for deep control, Wix for budget and flexibility, or Shopify for serious ecommerce and POS.</p>
            <p>Squarespace fits creators, boutiques, and service businesses that value aesthetics and straightforward maintenance.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-slate-900 underline decoration-slate-700 decoration-2 underline-offset-4" href={officialUrl}>
                Visit {toolName}
              </a>
              .
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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

export default SquarespaceToolPage;
