import React, { useState } from "react";
import { Sparkles, ShieldCheck, Gauge, Server, Cloud, Plug, Headphones, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "SiteGround";
const slug = "siteground";
const category = "Hosting";
const shortPitch =
  "SiteGround offers managed WordPress and cloud hosting with strong support, performance tooling, and security, popular among agencies and growing sites.";
const pricingSummary =
  "Shared/WordPress plans often start around $3–$15/month (intro rates) and scale with traffic and storage. Cloud plans are higher but add dedicated resources and staging. Renewal rates are higher than intro deals.";
const officialUrl = "https://www.siteground.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/siteground.com",
  gradient: "from-emerald-500 via-green-500 to-teal-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.20)]",
};

const alternatives = [
  { name: "Bluehost", slug: "bluehost" },
  { name: "Hostinger", slug: "hostinger" },
  { name: "Cloudways", slug: "cloudways" },
  { name: "Kinsta", slug: "kinsta" },
];

const faqs = [
  { q: "Is SiteGround good for WordPress?", a: "Yes. It offers managed WordPress features, caching (SG Optimizer), staging, backups, and strong support, making it popular with WP agencies and site owners." },
  { q: "How fast is SiteGround?", a: "SiteGround uses Google Cloud, CDN, and its own caching. Performance is solid for most small/medium sites; high-traffic sites may prefer premium managed hosts." },
  { q: "Is SiteGround secure?", a: "Security includes web application firewall, daily backups, free SSL, bot protection, and isolation for shared accounts. Regular updates keep WordPress installations secure." },
  { q: "What are SiteGround’s prices after renewal?", a: "Intro prices are lower; renewals increase. Budget for renewal rates or consider migrating to cloud plans if you outgrow shared tiers." },
  { q: "Does SiteGround have email hosting?", a: "Yes, email accounts are included on many plans, which can reduce extra costs for small businesses." },
  { q: "Is SiteGround good for ecommerce?", a: "Yes for small/medium WooCommerce stores with caching and CDN. Large stores may want cloud/VPS or premium managed hosts for more resources." },
  { q: "Can I migrate easily?", a: "SiteGround offers a migrator plugin for WordPress and professional migration on higher plans, simplifying moves from other hosts." },
  { q: "How is support?", a: "SiteGround is known for responsive support via chat and tickets, often cited as a differentiator versus budget hosts." },
];

function SiteGroundToolPage() {
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
        "SiteGround combines solid performance, managed WordPress tooling, and reliable support. It’s a strong fit for agencies and site owners needing dependable hosting without premium-managed prices.",
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
      icon: <Gauge className="h-5 w-5 text-emerald-600" />,
      title: "Performance on Google Cloud",
      body: "SSD storage, CDN, and custom caching (SG Optimizer) help WordPress and WooCommerce sites load quickly.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-teal-600" />,
      title: "Security and backups",
      body: "Daily backups, free SSL, WAF, bot protection, and account isolation keep sites safer on shared environments.",
    },
    {
      icon: <Server className="h-5 w-5 text-emerald-700" />,
      title: "Managed WordPress tooling",
      body: "Staging, auto-updates, WP-CLI, and a migrator plugin simplify site management for agencies and site owners.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-blue-600" />,
      title: "Scalable plans",
      body: "Shared/WordPress plans for smaller sites; cloud plans add resources for higher traffic or multiple projects.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-600" />,
      title: "Integrations and email included",
      body: "Email accounts included, DNS management, and easy CDN/SSL setups reduce reliance on extra providers.",
    },
    {
      icon: <Headphones className="h-5 w-5 text-rose-500" />,
      title: "Responsive support",
      body: "Support is a SiteGround highlight—fast responses via chat/tickets with knowledgeable WordPress help.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Performance, Pricing, Pros & Cons, Alternatives`}
        description="Independent SiteGround review covering performance, pricing, pros & cons, alternatives, and whether SiteGround is right for WordPress, WooCommerce, and agency sites."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-emerald-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-300/20 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-teal-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-emerald-500" />
                {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                {toolName} Review (2025): Hosting Performance, Pricing, Pros & Cons
              </h1>
              <p className="mt-4 text-lg text-slate-600">{shortPitch}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-700">
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Our rating: {ratingValue}/5</span>
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Reviewed by GoDigitalPro • Updated May 2025</span>
              </div>
              <p className="mt-4 text-slate-700">{pricingSummary}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="btn btn-primary bg-slate-900 text-white ring-2 ring-slate-900 hover:bg-slate-700" href={officialUrl}>
                  Visit SiteGround
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
                  Managed WordPress hosting on Google Cloud with caching, staging, backups, and standout support for agencies and site owners.
                </p>
                <div className="relative mt-4 flex items-center gap-2 text-sm font-semibold">
                  <Sparkles className="h-4 w-4 text-amber-200" />
                  Trusted for WordPress performance
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--overview bg-white">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">What is {toolName}?</h2>
            <p className="mt-4 text-slate-700">
              SiteGround is a hosting provider focused on managed WordPress and cloud hosting. It blends performance optimizations, security, and responsive support—making it appealing to agencies that manage multiple client sites and to
              SMBs that want reliable hosting without deep sysadmin work.
            </p>
            <p className="mt-3 text-slate-700">If you need strong support, staging, and caching out of the box, SiteGround is a dependable mid-priced option.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">SiteGround fits teams that value support, managed tooling, and solid performance.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Agencies managing multiple WordPress/WooCommerce sites for clients.",
                "SMBs that want strong support and performance without server admin.",
                "Creators and bloggers needing reliable uptime and backups.",
                "Ecommerce shops that need caching/CDN without custom devops.",
                "Teams migrating from entry-level hosts to better support and speed.",
                "Nonprofits or local businesses wanting email + hosting in one place.",
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
            <p className="mt-3 text-slate-700">SiteGround focuses on performance, security, and ease-of-use for WordPress and WooCommerce.</p>
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
                  Intro shared/WordPress rates can be low, but renewals increase. Expect ~$3–$15+/month (intro) depending on storage/sites, with higher renewal pricing. Cloud plans cost more but add dedicated resources and staging. Email
                  is included on many tiers.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on GrowBig for staging/backups; upgrade to cloud if traffic or resources outgrow shared hosting.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">StartUp / basic WP</td>
                    <td className="px-4 py-3">Single small site</td>
                    <td className="px-4 py-3">Lower storage/visits, core caching</td>
                    <td className="px-4 py-3">~$3–$8/mo intro (higher renewals)</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">GrowBig</td>
                    <td className="px-4 py-3">Multiple sites/clients</td>
                    <td className="px-4 py-3">More storage, staging, priority support</td>
                    <td className="px-4 py-3">~$5–$15/mo intro (higher renewals)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">GoGeek</td>
                    <td className="px-4 py-3">Heavier sites needing more resources</td>
                    <td className="px-4 py-3">Higher storage, staging, white-label dev tools</td>
                    <td className="px-4 py-3">~$10–$25+/mo intro (higher renewals)</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Cloud</td>
                    <td className="px-4 py-3">Scaling traffic or multiple projects</td>
                    <td className="px-4 py-3">Dedicated resources, staging, more control</td>
                    <td className="px-4 py-3">$100+/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Budget for renewal pricing when planning lifetime costs. If you need premium managed WordPress performance and concierge support, Kinsta or WP Engine might justify the higher price.
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
                  <li>Strong support with quick responses.</li>
                  <li>Good performance for managed WP/WooCommerce at mid-tier pricing.</li>
                  <li>Staging, backups, caching, and security built in.</li>
                  <li>Email hosting included on many plans.</li>
                  <li>Google Cloud infrastructure and CDN access.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Renewal rates are significantly higher than intro pricing.</li>
                  <li>Resource caps can be limiting for high-traffic sites on shared plans.</li>
                  <li>Not as many developer features as premium managed hosts (e.g., staging environments vs advanced workflows).</li>
                  <li>Cloud plans approach premium pricing—evaluate against Kinsta/WP Engine.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare SiteGround with these hosting providers. Each link goes to a full review page.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
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
            <p className="text-slate-700">Here’s how SiteGround compares to WP Engine and Cloudways.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs WP Engine</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/compare/wp-engine-vs-cloudways-vs-siteground">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                WP Engine is a premium managed WordPress host with more enterprise features and higher pricing. SiteGround is more affordable and includes email; it’s great for SMBs and agencies that don’t need premium tooling.
              </p>
              <p className="mt-2 text-slate-900">Choose SiteGround for value and support; choose WP Engine for premium managed performance and enterprise features.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Cloudways</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/compare/wp-engine-vs-cloudways-vs-siteground">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Cloudways offers managed cloud deployments (AWS/DO/GCP) with more control and scaling. SiteGround is simpler with bundled email and support. Cloudways can scale higher; SiteGround is easier to start and includes email.
              </p>
              <p className="mt-2 text-slate-900">Choose SiteGround for simplicity and included email; choose Cloudways for customizable cloud scaling.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you want dependable managed WordPress hosting with good support and performance at mid-tier pricing, SiteGround is worth it. It’s especially good for agencies and SMBs migrating from budget hosts.
            </p>
            <p className="mt-3 text-slate-700">
              If you need enterprise features or extreme performance, consider Kinsta or WP Engine. For cloud flexibility, Cloudways or VPS options might fit better. Account for renewal rates when budgeting.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> SiteGround balances performance, support, and managed WordPress tooling—ideal for growing sites and agencies that want reliability without premium price tags.
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
            <p>Choose SiteGround if you want strong support, managed WordPress tools, and solid performance without premium pricing.</p>
            <p>Choose WP Engine or Kinsta for enterprise-grade managed hosting, or Cloudways if you need cloud flexibility and scaling control.</p>
            <p>SiteGround fits agencies, SMBs, and creators who need reliable hosting with staging, backups, and included email.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-emerald-700 hover:text-emerald-500" href={officialUrl}>
                Visit {toolName}
              </a>
              .
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-emerald-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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

export default SiteGroundToolPage;
