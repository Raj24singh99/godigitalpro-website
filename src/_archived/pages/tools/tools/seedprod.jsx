import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, MonitorSmartphone, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "SeedProd";
const slug = "seedprod";
const category = "WordPress landing page & theme builder";
const shortPitch =
  "SeedProd is a drag-and-drop WordPress builder for landing pages, themes, and WooCommerce templates with fast-loading blocks and built-in conversion tools.";
const pricingSummary = "Paid plans from ~ $39.50/yr; higher tiers add WooCommerce templates, theme builder, and more sites.";
const officialUrl = "https://www.seedprod.com";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/seedprod.com",
  gradient: "from-orange-500 via-amber-500 to-rose-500",
  glow: "shadow-[0_20px_80px_rgba(249,115,22,0.20)]",
};

const alternatives = [
  { name: "Elementor", slug: "elementor" },
  { name: "Divi", slug: "divi" },
  { name: "Unbounce", slug: "unbounce" },
  { name: "Instapage", slug: "instapage" },
  { name: "Leadpages", slug: "leadpages" },
];

const faqs = [
  { q: "Is SeedProd fast?", a: "Yes. SeedProd emphasizes lightweight output and speed-optimized blocks so landing pages load quickly on WordPress compared to some heavier builders." },
  { q: "Does SeedProd include templates?", a: "Yes. It ships with templates for landing pages, sales pages, coming soon, maintenance mode, and WooCommerce product layouts on higher plans." },
  { q: "Can I build entire themes?", a: "On Pro/Elite, SeedProd includes a theme builder so you can create headers, footers, archives, and templates without code." },
  { q: "Is WooCommerce supported?", a: "WooCommerce templates and blocks are available on higher tiers, making it easy to build product, cart, and checkout layouts." },
  { q: "Does SeedProd work with email tools?", a: "Yes. It integrates with popular email and marketing services like Mailchimp, ActiveCampaign, ConvertKit, and others for opt-ins and lead capture." },
  { q: "Can I use custom CSS?", a: "Yes. You can add custom CSS to fine-tune designs beyond the visual controls." },
  { q: "Does SeedProd support coming-soon/maintenance mode?", a: "Yes. You can set coming-soon and maintenance pages with access controls while you build the rest of the site." },
  { q: "What about SEO?", a: "SeedProd outputs clean code and works with SEO plugins like SEOPress, Yoast, and Rank Math for metadata, schema, and indexing settings." },
];

function SeedProdToolPage() {
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
        "SeedProd is a fast, drag-and-drop WordPress builder that helps marketers launch landing pages, themes, and WooCommerce layouts without code. Its speed focus and templates make it a top choice for WordPress conversions.",
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
    { icon: <MonitorSmartphone className="h-5 w-5 text-orange-500" />, title: "Drag-and-drop builder", body: "Visual blocks for hero sections, forms, CTAs, countdowns, testimonials, and more to launch pages fast." },
    { icon: <Palette className="h-5 w-5 text-rose-500" />, title: "Landing & theme templates", body: "Prebuilt pages and full theme parts (header/footer/archive) help you ship quickly and stay on-brand." },
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "Conversion-focused blocks", body: "Countdowns, opt-in forms, scarcity timers, and WooCommerce blocks support launches and promos." },
    { icon: <ClipboardList className="h-5 w-5 text-emerald-500" />, title: "Coming soon & maintenance", body: "Built-in modes with access control so you can build behind the scenes while collecting leads." },
    { icon: <Plug className="h-5 w-5 text-sky-500" />, title: "Integrations", body: "Connect to email and CRM tools like Mailchimp, ActiveCampaign, ConvertKit, and Zapier for lead sync." },
    { icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />, title: "Performance-minded", body: "Lightweight output and clean code help pages load faster and integrate with caching/CDN setups." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="SeedProd review for 2025 covering pricing, templates, WooCommerce blocks, pros/cons, and alternatives like Elementor or Divi."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-orange-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-orange-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-rose-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-orange-500" />
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
                  SeedProd helps WordPress marketers launch fast landing pages, themes, and WooCommerce layouts without fighting bloated builders.
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
              {toolName} is a WordPress builder focused on speed and conversions. It lets you create landing pages, full themes, and WooCommerce templates with drag-and-drop blocks and conversion elements.
            </p>
            <p className="mt-3 text-slate-700">
              Marketers and store owners use it to launch campaigns, sales pages, and product drops quickly without custom code. It works alongside SEO plugins and caching tools to stay fast.
            </p>
            <p className="mt-3 text-slate-700">
              If you want a lightweight builder for WordPress that prioritizes performance and packaged templates, SeedProd is a strong pick.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">SeedProd suits WordPress teams that want quick builds and conversions without heavy code.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Marketers launching landing pages and opt-ins without developers.",
                "Agencies building client sites with fast templates and white-label access.",
                "WooCommerce stores needing conversion-friendly product and checkout layouts.",
                "Founders shipping coming-soon pages while the site is under construction.",
                "Teams wanting theme builder control for headers/footers without PHP.",
                "Creators who need countdowns, forms, and lead sync to email tools.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-orange-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">SeedProd focuses on speed, templates, and conversion blocks for WordPress.</p>
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
                  Basic starts around $39.50/yr for single-site landing pages. Plus/Pro add more templates, theme builder, WooCommerce blocks, and more sites. Elite adds priority support and agency-friendly limits.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with Plus for theme builder; go Pro/Elite for WooCommerce templates and more sites.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Plan</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key features</th>
                    <th className="px-4 py-3">Approx. price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Basic</td>
                    <td className="px-4 py-3">Single-site landing pages</td>
                    <td className="px-4 py-3">Templates, opt-ins, coming soon/maintenance</td>
                    <td className="px-4 py-3">~$39.50/yr</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Plus</td>
                    <td className="px-4 py-3">Theme builder users</td>
                    <td className="px-4 py-3">Theme parts, more templates, more sites</td>
                    <td className="px-4 py-3">~$99.50/yr</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">WooCommerce & agencies</td>
                    <td className="px-4 py-3">Woo commerce blocks/templates, advanced integrations</td>
                    <td className="px-4 py-3">~$199.50/yr</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Elite</td>
                    <td className="px-4 py-3">Large teams & priority support</td>
                    <td className="px-4 py-3">Highest site limits, priority support, all features</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Pricing is competitive versus Elementor/Divi; the speed focus can reduce hosting/optimization overhead.</p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-orange-50 p-5 shadow-sm ring-1 ring-orange-100">
                <div className="flex items-center gap-2 text-orange-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Lightweight and fast vs many WordPress builders.</li>
                  <li>Theme builder + landing pages in one tool.</li>
                  <li>WooCommerce blocks and templates for ecommerce.</li>
                  <li>Coming soon/maintenance modes built-in.</li>
                  <li>Easy integrations with major email/marketing tools.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Fewer third-party widgets than Elementor/Divi ecosystems.</li>
                  <li>Advanced animations/effects are limited.</li>
                  <li>Some WooCommerce features require higher tiers.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">SeedProd competes with other WordPress builders and hosted landing page tools. Pick based on performance needs, templates, and ecommerce coverage.</p>
            <p className="mt-2 text-slate-700">All of these offer drag-and-drop building; they differ on ecosystem, speed, and pricing.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
                  </div>
                  <a className="text-sm font-semibold text-orange-700 hover:text-orange-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">Here’s how {toolName} compares to other popular WordPress builders.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Elementor vs Divi</h3>
                <a className="text-sm font-semibold text-orange-700 hover:text-orange-600" href="/tools/compare/seedprod-vs-elementor-vs-divi">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Elementor and Divi offer huge widget ecosystems and design effects. SeedProd focuses on speed, simplicity, and built-in conversion blocks. If you need deep design flourishes, Elementor/Divi may win; for fast campaign pages, SeedProd excels.
              </p>
              <p className="mt-2 text-slate-900">Choose {toolName} for speed and WooCommerce-ready templates; choose Elementor/Divi if you want the largest design ecosystem.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Unbounce vs Instapage</h3>
                <a className="text-sm font-semibold text-orange-700 hover:text-orange-600" href="/tools/compare/unbounce-vs-instapage-vs-leadpages">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Unbounce and Instapage are hosted builders with strong testing/personalization. SeedProd runs inside WordPress, giving you control over hosting and integrations at lower cost.
              </p>
              <p className="mt-2 text-slate-900">Choose {toolName} if you’re WordPress-first and want speed + ownership; choose hosted builders if you need advanced testing baked in.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you build landing pages or WooCommerce templates on WordPress and want speed without heavy code, {toolName} is worth it. It shortens launch time and keeps pages lean.
            </p>
            <p className="mt-3 text-slate-700">
              If you need advanced animations or huge widget libraries, Elementor/Divi might fit better. Hosted builders like Unbounce/Instapage are great if you prefer managed infra and baked-in testing.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> {toolName} is a top pick for fast, conversion-focused WordPress pages and themes with WooCommerce coverage.
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
            <p>Choose {toolName} for fast WordPress landing pages, themes, and WooCommerce templates that stay lean. It’s ideal for marketers and agencies who value speed over heavy effects.</p>
            <p>Consider Elementor or Divi for deep design features, or hosted tools like Unbounce/Instapage if you prefer managed experimentation.</p>
            <p>{toolName} works well alongside WordPress SEO, caching, and analytics stacks to support campaigns and store growth.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your site, you can try it here:{" "}
              <a className="text-orange-700 hover:text-orange-600" href={officialUrl}>
                Visit {toolName}
              </a>
              .
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-orange-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default SeedProdToolPage;
