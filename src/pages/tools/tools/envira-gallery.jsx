import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Image as ImageIcon, GalleryHorizontal, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Envira Gallery";
const slug = "envira-gallery";
const category = "WordPress Gallery Plugin";
const shortPitch =
  "Envira Gallery is a lightweight WordPress gallery plugin that helps marketers, photographers, and site owners build fast, responsive image and video galleries without code.";
const pricingSummary =
  "Paid plans start around $39/year for Basic, with Pro/Ecommerce bundles adding WooCommerce support, albums, and client-proofing features.";
const officialUrl = "https://enviragallery.com";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/enviragallery.com",
  gradient: "from-emerald-500 via-lime-500 to-teal-500",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.20)]",
};

const alternatives = [
  { name: "Elementor", slug: "elementor" },
  { name: "Divi", slug: "divi" },
  { name: "SeedProd", slug: "seedprod" },
  { name: "Wix", slug: "wix" },
  { name: "Squarespace", slug: "squarespace" },
];

const faqs = [
  {
    q: "Is Envira Gallery beginner-friendly?",
    a: "Yes. It uses a drag-and-drop builder with templates, so non-developers can launch galleries quickly inside WordPress.",
  },
  {
    q: "Does Envira Gallery slow down WordPress sites?",
    a: "Envira is optimized for performance with lazy loading and responsive images. Used properly, it keeps pages lightweight compared to bulky gallery plugins.",
  },
  {
    q: "Can I sell photos with Envira Gallery?",
    a: "On higher tiers, Envira integrates with WooCommerce so you can sell photos, prints, or downloads directly from galleries.",
  },
  {
    q: "Does Envira support video galleries?",
    a: "Yes. You can mix image and video content, including YouTube, Vimeo, and self-hosted files, with lightbox support.",
  },
  {
    q: "Can I watermark images?",
    a: "Envira includes watermarking and right-click protection to help protect your photography from unauthorized use.",
  },
  {
    q: "Is there album and proofing support?",
    a: "Pro plans add albums, client-proofing, and pagination to handle larger collections cleanly.",
  },
  {
    q: "Does it work with page builders?",
    a: "Envira works with Gutenberg, Elementor, and other builders. Shortcodes and blocks make embedding straightforward.",
  },
  {
    q: "Can I customize gallery layouts?",
    a: "Yes. Choose from grids, masonry, lightboxes, slideshows, and mobile-friendly responsive options with per-gallery settings.",
  },
];

function EnviraGalleryPage() {
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
        "Envira Gallery delivers fast, responsive galleries for WordPress with a drag-and-drop builder, templates, and WooCommerce-friendly options. It’s built to be lightweight while giving marketers and photographers the layouts they need.",
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
      icon: <GalleryHorizontal className="h-5 w-5 text-emerald-600" />,
      title: "Drag-and-drop gallery builder",
      body: "Create image and video galleries quickly with templates, without writing CSS or JavaScript.",
    },
    {
      icon: <ImageIcon className="h-5 w-5 text-lime-600" />,
      title: "Responsive, fast lightboxes",
      body: "Mobile-friendly grids, masonry layouts, and lightboxes with lazy loading to protect speed and UX.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-indigo-500" />,
      title: "Performance optimized",
      body: "Lean scripts, CDN-friendly output, and image optimization help keep Core Web Vitals healthy.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "WooCommerce integration",
      body: "Sell prints or downloads directly from galleries on upper tiers, with proofing and client galleries.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-500" />,
      title: "Image protection",
      body: "Watermarking and right-click protection discourage unauthorized reuse of your work.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-emerald-400" />,
      title: "Builder and CMS friendly",
      body: "Works with Gutenberg, Elementor, Divi, and shortcodes so galleries embed neatly in any layout.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Envira Gallery review for WordPress users who want fast, responsive image and video galleries. See pricing, pros, cons, and alternatives for 2025."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-lime-300/20 blur-3xl" />
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
              <div
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}
              >
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
                  Envira keeps WordPress galleries fast and good-looking with templates, proofing options, and eCommerce-friendly add-ons.
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
              Envira Gallery is a {category.toLowerCase()} designed to create photo and video galleries without slowing down your site. It balances ease-of-use with performance-friendly output.
            </p>
            <p className="mt-3 text-slate-700">
              Marketers and photographers use it for portfolio pages, product lookbooks, event recaps, and lead-gen galleries that need to load quickly on mobile.
            </p>
            <p className="mt-3 text-slate-700">
              With WooCommerce support, proofing, and watermarking on higher tiers, it covers both creative and commercial gallery needs.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Envira works well for visual-first WordPress sites that care about speed and polish.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Photographers showcasing portfolios or client shoots.",
                "Marketers building product galleries, testimonials, and lookbooks.",
                "Agencies producing lightweight galleries for clients without custom code.",
                "Ecommerce stores selling prints or digital downloads via WooCommerce.",
                "Bloggers who need responsive, mobile-friendly photo grids.",
                "Course creators or coaches sharing event recaps and media libraries.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
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
              Envira focuses on performance, flexibility, and builder compatibility so you can ship galleries that look great and convert on any device.
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
                  Pricing is annual with lifetime options occasionally available. Higher tiers unlock WooCommerce add-ons, proofing, albums, and more gallery templates. Updates and support are included while licensed.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on Basic for simple galleries; upgrade to Pro if you need WooCommerce selling, albums, and proofing.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Basic</td>
                    <td className="px-4 py-3">Simple galleries on one site</td>
                    <td className="px-4 py-3">Core gallery features, no WooCommerce add-ons</td>
                    <td className="px-4 py-3">~$39/year</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Plus</td>
                    <td className="px-4 py-3">Multiple sites or more layouts</td>
                    <td className="px-4 py-3">More templates, albums, and site installs</td>
                    <td className="px-4 py-3">~$79/year</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Pros selling photos and proofing</td>
                    <td className="px-4 py-3">WooCommerce add-ons, proofing, watermarking, priority support</td>
                    <td className="px-4 py-3">~$99+/year</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              If you only need fast image grids, Basic works. If you need ecommerce, albums, or client galleries, Pro pays off quickly. Lifetime deals occasionally appear for long-term savings.
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
                  <li>Drag-and-drop builder and templates make setup fast.</li>
                  <li>Lightweight output with lazy loading protects site speed.</li>
                  <li>WooCommerce integration for selling prints or downloads.</li>
                  <li>Watermarking and proofing built for photographers.</li>
                  <li>Works with Gutenberg and popular page builders.</li>
                  <li>Responsive layouts that look good on mobile.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Advanced layouts still rely on shortcodes and settings panels.</li>
                  <li>Some features (ecommerce, proofing) require higher tiers.</li>
                  <li>Heavier galleries can impact load times if images aren’t optimized.</li>
                  <li>Support and updates depend on an active license.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Envira competes with page builders and hosted site builders that include gallery blocks. These pages are live so you can compare details without dead links.
            </p>
            <p className="mt-2 text-slate-700">Pick based on how much customization you want, whether you need ecommerce, and if you prefer hosted vs. WordPress.</p>
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
            <p className="text-slate-700">Here’s how Envira compares to popular gallery and site-building options.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Elementor</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/envira-gallery-vs-elementor-vs-seedprod">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Elementor includes gallery widgets inside a full page builder. Envira is lighter and focused purely on galleries, with features like proofing and watermarking tailored for photographers.
              </p>
              <p className="mt-2 text-slate-900">
                Choose Envira for performance-first galleries and WooCommerce selling; choose Elementor if you want a full site builder with many blocks and templates.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs SeedProd</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/envira-gallery-vs-elementor-vs-seedprod">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                SeedProd is a landing page builder with gallery blocks. Envira offers deeper gallery customization, proofing, and ecommerce-focused add-ons.
              </p>
              <p className="mt-2 text-slate-900">
                Choose Envira for gallery-first needs; choose SeedProd if you need a full landing page toolkit with occasional galleries.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              For WordPress users who need fast, good-looking galleries without code, Envira is worth it—especially if you want ecommerce or proofing on top. It keeps sites lightweight while offering the templates and controls marketers expect.
            </p>
            <p className="mt-3 text-slate-700">
              If you already use a robust page builder with gallery widgets and don’t need proofing or selling, you may be fine with native blocks. For dedicated gallery workflows, Envira’s focus is a win.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Envira Gallery is a strong choice for WordPress sites that need performant galleries with ecommerce and protection options.
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
              Choose Envira if you want a dedicated gallery plugin that stays fast, works with your builder, and supports proofing or ecommerce. It’s great for photographers, marketers, and agencies shipping many visual assets.
            </p>
            <p>
              Consider Elementor or SeedProd if you primarily need a broader page builder with occasional galleries. Hosted builders like Wix or Squarespace can also work if you’re willing to move off WordPress entirely.
            </p>
            <p>Envira integrates cleanly with WooCommerce, form tools, and caching plugins, making it easy to fold into your existing WordPress stack.</p>
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

export default EnviraGalleryPage;
