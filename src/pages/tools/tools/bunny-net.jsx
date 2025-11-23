import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown, Cloud } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Bunny.net";
const slug = "bunny-net";
const category = "CDN & Edge Storage";
const shortPitch =
  "Bunny.net is a performance-focused CDN and edge storage platform that helps sites and apps deliver fast globally with simple pricing and easy setup.";
const pricingSummary =
  "Pay-as-you-go with regional pricing starting around $0.01/GB in standard regions. Edge storage and video delivery add low per-GB/storage costs; Enterprise features available.";
const officialUrl = "https://bunny.net";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/bunny.net",
  gradient: "from-orange-500 via-amber-500 to-rose-500",
  glow: "shadow-[0_20px_80px_rgba(249,115,22,0.22)]",
};

const alternatives = [
  { name: "Cloudways", slug: "cloudways" },
  { name: "Rocket.net", slug: "rocket-net" },
  { name: "Kinsta", slug: "kinsta" },
  { name: "SiteGround", slug: "siteground" },
  { name: "A2 Hosting", slug: "a2-hosting" },
];

const faqs = [
  { q: "What is Bunny.net?", a: "Bunny.net is a CDN with edge storage, image optimization, and video delivery. It’s built for speed and simple pricing for websites, ecommerce, and apps." },
  { q: "Is Bunny.net easy to set up?", a: "Yes. You can enable pull zones or push zones, point DNS, and start caching quickly. Integrations exist for WordPress/ecommerce via plugins." },
  { q: "How is pricing structured?", a: "Pay-as-you-go per GB by region with low rates. Edge storage and Bunny Stream (video) have simple per-GB storage/transfer pricing. Enterprise SLAs are available." },
  { q: "Does Bunny.net have image optimization?", a: "Yes. Bunny Optimizer handles image compression, WebP/AVIF conversion, resizing, and smart routing via the CDN." },
  { q: "Is Bunny.net good for WordPress?", a: "Yes. Paired with caching plugins or hosting like Cloudways/rocket.net, Bunny speeds up media delivery and static assets for WordPress and WooCommerce." },
  { q: "What about security?", a: "Bunny.net offers WAF (add-on), DDoS protection, SSL, token authentication, and geo/IP controls to secure assets and video streams." },
  { q: "Can I use Bunny.net for video?", a: "Bunny Stream provides video storage, encoding, CDN delivery, and DRM options with simple pricing." },
  { q: "Which plan should I choose?", a: "Start with standard pay-as-you-go zones. Add image optimizer and edge storage as needed. Consider enterprise for SLA/support if you have high traffic or compliance needs." },
];

function BunnyNetToolPage() {
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
        "Bunny.net delivers fast global performance with simple CDN, edge storage, and video delivery pricing. It’s loved by SMBs and agencies for its speed, optimizer, and easy setup.",
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
      icon: <Cloud className="h-5 w-5 text-orange-500" />,
      title: "Global CDN with smart routing",
      body: "Low-latency delivery across a large PoP network with geo-routing, instant purging, and cache rules configurable from a clean dashboard.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "Image optimization",
      body: "On-the-fly compression, WebP/AVIF conversion, resizing, and smart routing reduce page weight and improve Core Web Vitals.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-emerald-500" />,
      title: "Edge storage and video",
      body: "Push/edge storage plus Bunny Stream for video hosting, encoding, and delivery keeps assets close to users with predictable pricing.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-600" />,
      title: "Integrations and APIs",
      body: "APIs, plugins, and integrations with WordPress, ecommerce platforms, and CI/CD pipelines streamline setup and cache management.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Security add-ons",
      body: "DDoS protection, SSL, token auth, geo/IP rules, and a WAF add-on protect assets, APIs, and video streams.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Simple, low-cost pricing",
      body: "Transparent per-GB rates plus affordable optimizer and storage options make budgeting predictable for SMBs and agencies.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Bunny.net review: pricing, features, pros & cons, alternatives, and comparisons vs managed WordPress/CDN options like Cloudways or Rocket.net."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-amber-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-orange-300/25 blur-3xl" />
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
              <div
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}
              >
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -left-8 top-10 h-20 w-20 rounded-full bg-white blur-3xl" />
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-orange-200 blur-3xl" />
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
                  Bunny.net pairs a fast CDN with edge storage, image optimization, and simple pricing, making it a favorite for SMBs, agencies, and WooCommerce sites.
                </p>
                <div className="relative mt-4 flex items-center gap-2 text-sm font-semibold">
                  <Sparkles className="h-4 w-4 text-amber-100" />
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
              {toolName} is a {category.toLowerCase()} offering CDN delivery, edge storage, image optimization, and video streaming. It focuses on speed, reliability, and transparent pricing for websites, apps, and media workloads.
            </p>
            <p className="mt-3 text-slate-700">
              Marketers and developers use Bunny.net to improve Core Web Vitals, speed up WooCommerce/WordPress, and deliver static and video assets globally without complex contracts.
            </p>
            <p className="mt-3 text-slate-700">
              APIs, granular caching rules, and add-ons like WAF make it flexible enough for both small sites and larger media projects.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} suits teams needing fast, cost-effective CDN and edge delivery.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Ecommerce and WooCommerce stores improving page speed and conversions.",
                "Content sites and blogs boosting Core Web Vitals with image optimization.",
                "Media and SaaS apps delivering static assets and APIs globally.",
                "Teams hosting video with Bunny Stream for encoding + CDN delivery.",
                "Agencies speeding up client sites with easy dashboards and pay-go pricing.",
                "Developers wanting clear pricing and fast purge/propagation times.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on speed, optimization, and transparent billing.</p>
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
                  Bunny.net uses pay-as-you-go per GB with regional rates. Optimizer, edge storage, and Bunny Stream add simple per-GB charges. Enterprise SLAs/support are optional.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with standard zones; add Optimizer and edge storage if images or media are heavy.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Standard CDN</td>
                    <td className="px-4 py-3">Most sites and apps</td>
                    <td className="px-4 py-3">Pay-go per GB, instant purge, SSL, basic security</td>
                    <td className="px-4 py-3">From ~$0.01/GB (region-based)</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Bunny Optimizer</td>
                    <td className="px-4 py-3">Image-heavy sites</td>
                    <td className="px-4 py-3">Image compression, WebP/AVIF, resizing, smart routing</td>
                    <td className="px-4 py-3">Low per-GB add-on</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Edge Storage / Stream</td>
                    <td className="px-4 py-3">Media and video delivery</td>
                    <td className="px-4 py-3">Edge storage, video encoding/delivery, DRM/auth</td>
                    <td className="px-4 py-3">Usage-based per GB stored/transferred</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Costs depend on traffic and region mix. Monitor image/video usage and enable Optimizer/Stream where it meaningfully improves performance and UX.
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
                  <li>Very fast CDN with straightforward setup and purge.</li>
                  <li>Low, transparent pricing; good for SMBs and agencies.</li>
                  <li>Image optimization and edge storage built in.</li>
                  <li>Strong for WordPress/WooCommerce performance boosts.</li>
                  <li>APIs and plugins simplify integration and automation.</li>
                  <li>Security add-ons (WAF, token auth) for protected content.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Advanced security/WAF is an add-on, not default.</li>
                  <li>Fewer enterprise integrations than hyperscalers.</li>
                  <li>Video DRM and auth need configuration to secure streams.</li>
                  <li>Support SLAs require enterprise tiers for mission-critical workloads.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Bunny.net competes with CDNs and managed hosts that include CDN layers. Pick based on performance needs, ops overhead, and whether you want bundled hosting.
            </p>
            <p className="mt-2 text-slate-700">All can improve speed; they differ on control, support, and tooling depth.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
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
            <p className="text-slate-700">Here’s how Bunny.net compares to nearby options.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Rocket.net</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/compare/rocket-net-vs-cloudways-vs-kinsta">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Rocket.net bundles hosting + CDN tuned for WordPress. Bunny.net is CDN only, letting you pair it with any host. Rocket.net is simpler end-to-end; Bunny is more flexible and cheaper as pure CDN.
              </p>
              <p className="mt-2 text-slate-700">
                Choose Bunny when you want CDN control and low per-GB pricing; choose Rocket.net if you want hosted WordPress with built-in edge optimization.
              </p>
              <p className="mt-2 text-slate-900">Both improve speed—decide based on hosting preference vs standalone CDN.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Cloudways</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/compare/bunny-net-vs-rocket-net-vs-cloudways">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Cloudways is managed hosting across cloud providers. Bunny.net adds CDN, image optimization, and media delivery on top. Many teams use Bunny with Cloudways to boost performance.
              </p>
              <p className="mt-2 text-slate-700">
                Choose Bunny for CDN/optimizer; choose Cloudways for managed servers. Combine both for stronger speed + simplicity.
              </p>
              <p className="mt-2 text-slate-900">Cloudways handles servers; Bunny accelerates assets. Together they cover hosting + CDN needs.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need a fast CDN with image optimization and clear pricing. It’s especially good for WooCommerce/WordPress, media-heavy sites, and teams that want CDN control without enterprise contracts.
            </p>
            <p className="mt-3 text-slate-700">
              If you need fully managed WordPress hosting, Rocket.net or Cloudways may be simpler. Otherwise, Bunny.net gives you performance and flexibility at low cost.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Bunny.net is a strong, value-focused CDN/edge platform for performance-driven teams.
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
              Choose Bunny.net if you want a fast, affordable CDN with image optimization and edge storage. It’s great for WooCommerce, content sites, and apps that need speed without contracts.
            </p>
            <p>
              Consider Rocket.net or Cloudways for bundled hosting; hyperscalers if you need advanced enterprise networking. Bunny.net remains a practical default for many SMBs and agencies.
            </p>
            <p>{toolName} integrates easily with hosting stacks, plugins, and CI/CD, making performance improvements quick to ship.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-amber-700 hover:text-amber-600" href={officialUrl}>
                Visit {toolName}
              </a>
              .
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
      {open && (
        <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">
          {answer}
        </div>
      )}
    </div>
  );
}

export default BunnyNetToolPage;
