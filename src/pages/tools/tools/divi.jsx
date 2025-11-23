import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown, Layout } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Divi";
const slug = "divi";
const category = "WordPress Page Builder";
const shortPitch =
  "Divi is a visual WordPress theme and page builder that lets marketers and agencies design conversion-focused landing pages, blogs, and full sites with reusable styles and layouts.";
const pricingSummary =
  "Starts at ~$89/year for the Elegant Themes membership with Divi and Extra. A lifetime license (~$249) covers unlimited websites with ongoing updates and support.";
const officialUrl = "https://www.elegantthemes.com/gallery/divi/";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/elegantthemes.com",
  gradient: "from-purple-600 via-indigo-600 to-slate-800",
  glow: "shadow-[0_20px_80px_rgba(79,70,229,0.25)]",
};

const alternatives = [
  { name: "Elementor", slug: "elementor" },
  { name: "SeedProd", slug: "seedprod" },
  { name: "Webflow", slug: "webflow" },
  { name: "Framer", slug: "framer" },
  { name: "Wix", slug: "wix" },
];

const faqs = [
  { q: "Is Divi good for agencies?", a: "Yes. The unlimited site license and lifetime option make Divi cost-effective for agencies that manage many WordPress builds with reusable layouts and styles." },
  { q: "Does Divi work with WooCommerce?", a: "Divi has WooCommerce modules for product grids, carts, checkout, and category layouts, letting you design store pages visually without PHP edits." },
  { q: "How does Divi impact performance?", a: "Recent performance updates reduced CSS/JS bloat, but you should still pair Divi with caching, image optimization, and a CDN to maintain Core Web Vitals." },
  { q: "Is there A/B testing in Divi?", a: "Yes. Divi Leads enables split testing on modules and layouts so marketers can optimize CTAs, hero sections, and pricing blocks without extra plugins." },
  { q: "Can I export/import Divi layouts?", a: "You can save layouts, sections, and modules to the library, export JSON, and reuse them across projects or between staging and production sites." },
  { q: "Does Divi support dynamic content?", a: "Divi integrates with WordPress custom fields (including ACF) so you can bind dynamic content to modules for CMS-driven landing pages." },
  { q: "Is Divi compatible with Gutenberg?", a: "Divi runs alongside Gutenberg; you can disable Gutenberg on certain pages or mix native blocks with Divi layouts depending on your workflow." },
  { q: "Which Divi license should beginners choose?", a: "Start with the yearly plan to test the workflow; upgrade to lifetime if you plan to use Divi on multiple client sites or want long-term updates." },
];

function DiviToolPage() {
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
        "Divi is a flexible WordPress builder/theme popular with agencies thanks to its lifetime license, huge layout library, and built-in split testing. It suits marketers who want visual control without custom code.",
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
      icon: <Layout className="h-5 w-5 text-purple-500" />,
      title: "Visual drag-and-drop builder",
      body: "Design pages in a front-end editor with inline text editing, responsive controls, and global styles that keep branding consistent across templates.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-indigo-500" />,
      title: "Huge layout and module library",
      body: "Hundreds of packs and modules for CTAs, forms, testimonials, pricing, and WooCommerce save time when launching campaigns or new templates.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Built-in split testing (Divi Leads)",
      body: "Run A/B tests on headlines, buttons, hero images, and pricing sections directly inside Divi with goal tracking for conversions or clicks.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-emerald-500" />,
      title: "Theme builder with dynamic content",
      body: "Create headers, footers, post templates, and product pages using dynamic fields from WordPress, ACF, or WooCommerce for CMS-driven sites.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Role editing and safeguards",
      body: "Lock layouts, control who can edit modules, and roll back with Divi’s history tools so client teams can tweak content safely.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Marketing integrations",
      body: "Native modules for email opt-ins (HubSpot, Mailchimp, ActiveCampaign), analytics embeds, and script management keep stacks connected.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Detailed Divi review for marketers and agencies: pricing, features, pros & cons, alternatives, and comparison picks for WordPress builds."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-purple-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-purple-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-300/20 blur-3xl" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-purple-200 blur-3xl" />
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
                  Divi combines a flexible theme, visual builder, and split testing so marketers can ship pages fast while keeping branding consistent across WordPress sites.
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
              {toolName} is a {category.toLowerCase()} that pairs a visual drag-and-drop builder with a full theme. You can build landing pages, blogs, and WooCommerce templates with reusable components and global styling.
            </p>
            <p className="mt-3 text-slate-700">
              Agencies lean on Divi for its lifetime license, layout packs, and ability to lock down modules so clients can edit content without breaking designs. Marketers appreciate the built-in A/B testing for CTAs and hero sections.
            </p>
            <p className="mt-3 text-slate-700">
              Divi supports dynamic content from WordPress fields and works alongside popular marketing tools, making it easier to keep campaigns consistent across multiple properties.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} fits teams that want visual control of WordPress sites without heavy custom development.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Agencies managing multiple client sites who value the unlimited/lifetime license.",
                "Marketers launching landing pages and campaigns that need reusable sections and forms.",
                "Ecommerce teams customizing WooCommerce product, cart, and checkout layouts visually.",
                "Content teams building high-volume blogs with post templates and global styles.",
                "Growth teams running experiments with Divi Leads to optimize conversions.",
                "Designers who want fine-grained control over spacing, effects, and typography without code.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-purple-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">Divi focuses on visual speed-to-launch while keeping brand controls and testing close to the editor.</p>
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
                  Divi is sold via the Elegant Themes membership. Pricing is simple: an annual license for updates/support or a one-time lifetime license. Both cover unlimited websites.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with yearly, move to lifetime if you’ll use Divi on multiple sites.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Yearly Access</td>
                    <td className="px-4 py-3">Testing Divi on a few client sites</td>
                    <td className="px-4 py-3">Divi + Extra themes, updates, support, unlimited sites</td>
                    <td className="px-4 py-3">~$89/year</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Lifetime Access</td>
                    <td className="px-4 py-3">Agencies/designers using Divi long term</td>
                    <td className="px-4 py-3">All features plus lifetime updates/support</td>
                    <td className="px-4 py-3">~$249 one-time</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Divi Cloud (optional)</td>
                    <td className="px-4 py-3">Teams reusing templates across sites</td>
                    <td className="px-4 py-3">Save and sync layouts/components between installs</td>
                    <td className="px-4 py-3">Usage-based / add-on</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              The lifetime license is compelling for agencies because it avoids annual renewals. Pair Divi with performance plugins (caching, image optimization) to keep sites snappy regardless of plan.
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
                  <li>Unlimited sites with yearly or lifetime pricing keeps costs predictable for agencies.</li>
                  <li>Visual builder with hundreds of layout packs and modules speeds up landing page launches.</li>
                  <li>Built-in split testing (Divi Leads) for optimizing CTAs and hero variants without extra tools.</li>
                  <li>Theme builder enables custom headers/footers and post templates with dynamic content.</li>
                  <li>Strong WooCommerce modules for designing product, cart, and checkout flows visually.</li>
                  <li>Role editing and history protect designs when clients update content.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Heavier output than lightweight builders; needs caching/CDN to optimize Core Web Vitals.</li>
                  <li>Advanced styling depth can overwhelm casual editors compared to simpler block builders.</li>
                  <li>Some third-party WordPress plugins may require manual styling to match Divi design tokens.</li>
                  <li>Locked into the Divi ecosystem; migrating to another builder can take effort.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Divi competes with other visual builders and hosted site platforms. Choose based on performance needs, hosting setup, and how much you want to work inside WordPress.
            </p>
            <p className="mt-2 text-slate-700">All of these offer visual editing and template libraries, but differ on speed, ecosystem fit, and pricing.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
                  </div>
                  <a className="text-sm font-semibold text-purple-700 hover:text-purple-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">Here’s how Divi compares to two of its closest WordPress builder rivals.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Elementor</h3>
                <a className="text-sm font-semibold text-purple-700 hover:text-purple-600" href="/tools/compare/seedprod-vs-elementor-vs-divi">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Elementor has a massive widget ecosystem and popup builder; Divi leans on global styles and a lifetime license for better long-term value. Elementor can feel heavier; both need caching and CDN care.
              </p>
              <p className="mt-2 text-slate-700">
                If you want marketplace extensions and advanced motion effects, Elementor excels. If you want to standardize on a predictable license across many sites, Divi’s economics are better for agencies.
              </p>
              <p className="mt-2 text-slate-900">
                Choose Divi for reusable design systems and lifetime pricing; choose Elementor for the broadest widget library and animation depth.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs SeedProd</h3>
                <a className="text-sm font-semibold text-purple-700 hover:text-purple-600" href="/tools/compare/seedprod-vs-elementor-vs-divi">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                SeedProd ships lighter landing pages out of the box and focuses on campaign speed with maintenance/coming-soon modes. Divi offers deeper design controls, theme building, and A/B testing built-in.
              </p>
              <p className="mt-2 text-slate-700">
                For purely conversion-focused landing pages on WordPress, SeedProd can be faster. For full-site design systems and WooCommerce layouts, Divi’s depth is stronger.
              </p>
              <p className="mt-2 text-slate-900">
                Choose Divi when you need a single builder for end-to-end sites; choose SeedProd when page speed and quick campaign launches matter most.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              For agencies and marketers committed to WordPress, Divi offers strong value: unlimited sites, lifetime pricing, a visual builder, and built-in testing. It reduces time-to-launch while keeping brand control tight.
            </p>
            <p className="mt-3 text-slate-700">
              You should plan on performance optimization and governance (roles/history) to keep experiences smooth. If you prefer a hosted, code-optional platform, Webflow or Framer may suit you better.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Divi is a solid choice for WordPress teams that want design flexibility, A/B testing, and predictable pricing across many sites.
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
              Choose Divi if you’re an agency, marketer, or designer who wants visual control of WordPress experiences with reusable components, WooCommerce modules, and built-in testing. Lifetime pricing and unlimited sites make it a practical standard.
            </p>
            <p>
              Consider alternatives like Elementor or Webflow if you want a different design language or hosted stack. SeedProd is a great fit when raw speed and lean pages are the top priority.
            </p>
            <p>Divi fits well into modern marketing stacks, integrating forms, analytics, and CRM scripts so you can ship campaigns without heavy development.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-purple-700 hover:text-purple-600" href={officialUrl}>
                Visit {toolName}
              </a>
              .
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-purple-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default DiviToolPage;
