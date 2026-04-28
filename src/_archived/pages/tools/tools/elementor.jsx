import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Layout, Layers, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Elementor";
const slug = "elementor";
const category = "WordPress Page Builder";
const shortPitch =
  "Elementor is a visual WordPress builder that helps marketers, agencies, and site owners design pages, themes, and funnels without custom code.";
const pricingSummary =
  "Free core plugin with Pro plans from around $59/year for 1 site, scaling to higher tiers for more sites, WooCommerce widgets, and advanced features.";
const officialUrl = "https://elementor.com";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/elementor.com",
  gradient: "from-rose-500 via-pink-500 to-red-500",
  glow: "shadow-[0_20px_80px_rgba(244,63,94,0.22)]",
};

const alternatives = [
  { name: "Divi", slug: "divi" },
  { name: "SeedProd", slug: "seedprod" },
  { name: "Framer", slug: "framer" },
  { name: "Webflow", slug: "webflow" },
  { name: "Tailwind CSS", slug: "tailwind" },
];

const faqs = [
  {
    q: "Is Elementor good for marketers?",
    a: "Yes. Elementor lets marketers ship landing pages, sales pages, and funnels without relying on developers. Templates and widgets speed up campaign launches.",
  },
  {
    q: "Do I need Elementor Pro?",
    a: "The free version handles basic layouts. Elementor Pro adds theme building, WooCommerce widgets, popups, dynamic content, and a larger template library—worth it for most business sites.",
  },
  {
    q: "Is Elementor fast?",
    a: "Elementor can be fast with proper hosting, caching, and image optimization. The latest Flexbox/Container features and performance settings help reduce bloat.",
  },
  {
    q: "Can I use Elementor with WooCommerce?",
    a: "Yes. Pro includes WooCommerce widgets and templates for product grids, carts, and checkout, making it easier to customize ecommerce pages.",
  },
  {
    q: "Does Elementor work with SEO plugins?",
    a: "Elementor works with Yoast, Rank Math, SEOPress, and other SEO plugins. Clean headings, schema widgets, and site maps depend on your SEO setup.",
  },
  {
    q: "Can I export or reuse templates?",
    a: "You can save and reuse sections, pages, and kits across sites. Import/export makes agency handoff faster.",
  },
  {
    q: "Is Elementor compatible with most themes?",
    a: "Yes, but using Elementor’s Hello theme or a lightweight theme gives the best performance and compatibility.",
  },
  {
    q: "How does Elementor compare with Divi?",
    a: "Elementor has a faster learning curve and a large widget library; Divi offers lifetime licenses. Performance often depends on hosting and optimization.",
  },
];

function ElementorToolPage() {
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
        "Elementor is a leading WordPress builder with a strong widget library, robust template ecosystem, and WooCommerce support. It’s built for marketers and agencies who want control without coding every layout.",
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
      icon: <Layout className="h-5 w-5 text-rose-500" />,
      title: "Visual drag-and-drop builder",
      body: "Design pages and templates without code using responsive controls, flexbox containers, and reusable sections.",
    },
    {
      icon: <Layers className="h-5 w-5 text-indigo-500" />,
      title: "Theme and template kits",
      body: "Build headers, footers, archives, and popups alongside page templates so the full site matches your brand.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Performance-minded options",
      body: "CSS/JS loading controls, container-based layouts, and image optimizations help keep Core Web Vitals in check.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "WooCommerce widgets",
      body: "Customize product, cart, and checkout layouts with dedicated widgets and template kits for ecommerce.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-rose-600" />,
      title: "Robust ecosystem",
      body: "Extensive add-ons, templates, and third-party widgets expand functionality for marketing, LMS, and memberships.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-pink-500" />,
      title: "Collaboration-friendly",
      body: "Role controls, notes (via add-ons), and saved kits support agency workflows and repeatable builds.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Elementor review for marketers and agencies: pricing, performance tips, pros & cons, WooCommerce support, and alternatives to choose the right builder."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-rose-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-pink-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-rose-500" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-rose-200 blur-3xl" />
                </div>
                <div className="relative flex items-center gap-3">
                  <div className="h-14 w-14 overflow-hidden rounded-xl bg-white/20 ring-2 ring-white/30">
                    <img src={brandMeta.logo} alt={`${toolName} logo`} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/80">Featured Builder</p>
                    <p className="text-xl font-bold">{toolName}</p>
                  </div>
                </div>
                <p className="relative mt-4 text-sm leading-relaxed text-white/90">
                  Elementor gives marketers and creators design freedom on WordPress with a large widget library and theme-level control, reducing engineering bottlenecks.
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
              Elementor is a {category.toLowerCase()} that lets you design an entire WordPress site visually—from landing pages to headers, footers, popups, and WooCommerce templates.
            </p>
            <p className="mt-3 text-slate-700">
              Marketing teams use Elementor to launch campaigns quickly, while agencies appreciate reusable templates and kits to standardize client builds.
            </p>
            <p className="mt-3 text-slate-700">
              With Pro, you gain theme building, WooCommerce widgets, and dynamic content support for advanced sites without hand-coded PHP or JS.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Elementor suits teams that want visual control of WordPress without hiring a full-time developer.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Marketing teams building landing pages and sales funnels on WordPress.",
                "Agencies creating repeatable site kits for multiple clients.",
                "Entrepreneurs and creators managing their own branded sites.",
                "Ecommerce operators customizing product and checkout templates with WooCommerce widgets.",
                "Course or membership sites needing gated pages and flexible layouts.",
                "Designers who want to prototype and ship pages without writing PHP/JS.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-rose-400" />
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
              Elementor combines a visual editor, robust widget set, and theme building, letting you control layouts across your entire site without code.
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
                  Elementor has a free tier for basic pages. Pro plans add full theme building, WooCommerce widgets, and advanced features. Pricing scales by number of sites with discounts on higher tiers.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start free to test. Go Pro for any revenue-generating site; select the tier matching your site count.</p>
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
                    <td className="px-4 py-3">Simple pages and testing</td>
                    <td className="px-4 py-3">Basic widgets, no theme builder</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro (1 Site)</td>
                    <td className="px-4 py-3">Single business site</td>
                    <td className="px-4 py-3">Theme builder, Woo widgets, popups</td>
                    <td className="px-4 py-3">~$59/year</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro (Up to 25 Sites)</td>
                    <td className="px-4 py-3">Agencies or portfolios of sites</td>
                    <td className="px-4 py-3">More site activations, premium support</td>
                    <td className="px-4 py-3">~$199/year</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Agency / Higher Tiers</td>
                    <td className="px-4 py-3">Large agencies and studios</td>
                    <td className="px-4 py-3">Up to 1000 sites, VIP support</td>
                    <td className="px-4 py-3">Higher, discounted per-site</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Factor in hosting, caching, and image optimization for performance. Pro is recommended for any revenue or lead-gen site because it unlocks full-site control and WooCommerce templates.
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
                  <li>Rich widget library and template kits for fast builds.</li>
                  <li>Theme builder controls headers, footers, archives, and popups.</li>
                  <li>WooCommerce widgets make ecommerce customization easier.</li>
                  <li>Large ecosystem of add-ons and third-party templates.</li>
                  <li>Container/Flexbox support improves responsive design and performance.</li>
                  <li>Friendly learning curve for marketers and designers.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Performance depends heavily on hosting and optimization.</li>
                  <li>Some advanced features require Pro; multiple-site pricing adds up.</li>
                  <li>Large template/add-on stacks can bloat sites without discipline.</li>
                  <li>Visual builders still need QA across devices and breakpoints.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Elementor competes with other WordPress builders and hosted site tools. These options vary in performance, pricing, and how much code control you want.
            </p>
            <p className="mt-2 text-slate-700">All links go to live pages—no broken redirects.</p>
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
            <p className="text-slate-700">Compare Elementor to other builders to pick the right stack.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Divi</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/seedprod-vs-elementor-vs-divi">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Elementor is known for speed of building and its large widget library. Divi offers a slick builder and lifetime licenses. Performance depends on hosting and optimization for both.
              </p>
              <p className="mt-2 text-slate-900">
                Choose Elementor for broader add-on support and a faster learning curve; choose Divi if you want a lifetime pricing option and built-in A/B testing.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs SeedProd</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/seedprod-vs-elementor-vs-divi">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                SeedProd is lightweight and great for landing pages and coming-soon/maintenance modes. Elementor provides deeper theme building and WooCommerce customization.
              </p>
              <p className="mt-2 text-slate-900">
                Choose Elementor for full-site control; choose SeedProd if you primarily need fast campaign pages on WordPress.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              For marketers and agencies on WordPress, Elementor is worth it because it reduces dev bottlenecks and ships campaigns faster. Pro unlocks the full power of theme building and ecommerce widgets.
            </p>
            <p className="mt-3 text-slate-700">
              If performance and code control are top priorities, a code-first stack with Tailwind/Next.js may be better. For hosted, no-code builds, consider Webflow or Framer instead.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Elementor is a top WordPress builder for marketing sites and ecommerce teams that need speed plus flexibility.
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
              Choose Elementor if you want visual control over a WordPress site with strong WooCommerce support. It’s excellent for marketers who need to iterate quickly without writing code.
            </p>
            <p>
              Consider Webflow or Framer if you’re open to hosted site builders. Choose Tailwind/Next.js for full developer control and maximum performance. SeedProd or Divi may work for simpler campaigns or different pricing.
            </p>
            <p>Elementor fits well alongside SEO plugins, caching tools, and marketing integrations to build a conversion-focused WordPress stack.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here: <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>Visit {toolName}</a>.
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

export default ElementorToolPage;
