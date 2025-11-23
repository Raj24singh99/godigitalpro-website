import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Video, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "GoDaddy";
const slug = "godaddy";
const category = "Domains & Hosting";
const shortPitch =
  "GoDaddy is a domain registrar and hosting provider offering domains, DNS, shared/managed WordPress hosting, website builder, and email bundles for SMBs.";
const pricingSummary = "Domain pricing varies by TLD; hosting starts low with promo rates and higher renewals. Managed WordPress and business email bundles are available.";
const officialUrl = "https://www.godaddy.com";
const ratingValue = 4.0;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/godaddy.com",
  gradient: "from-amber-500 via-orange-500 to-emerald-600",
  glow: "shadow-[0_20px_80px_rgba(251,146,60,0.22)]",
};

const alternatives = [
  { name: "Namecheap", slug: "namecheap" },
  { name: "Hostinger", slug: "hostinger" },
  { name: "SiteGround", slug: "siteground" },
  { name: "Bluehost", slug: "bluehost" },
  { name: "Cloudways", slug: "cloudways" },
];

const faqs = [
  {
    q: "Is GoDaddy cheap for domains?",
    a: "GoDaddy often has strong intro prices but renewals can be higher than budget registrars. Privacy protection may be an add-on depending on TLD.",
  },
  {
    q: "Does GoDaddy include domain privacy?",
    a: "Privacy depends on the TLD. Some include it, others require an add-on. Compare renewal pricing and privacy before purchasing.",
  },
  {
    q: "Is GoDaddy good for hosting?",
    a: "GoDaddy offers shared and managed WordPress hosting. Performance is solid for small sites; advanced users may prefer hosts like Cloudways or SiteGround.",
  },
  {
    q: "Can I manage DNS easily in GoDaddy?",
    a: "Yes. DNS management is straightforward, and you can connect domains to external hosting, email, or site builders.",
  },
  {
    q: "Does GoDaddy have email?",
    a: "Yes. Email is available as a paid add-on (Microsoft 365). Some bundles include email for the first year.",
  },
  {
    q: "Is GoDaddy secure?",
    a: "GoDaddy supports SSL, DNSSEC, and security add-ons. SSL and security often come as paid options on lower-tier hosting.",
  },
  {
    q: "How does GoDaddy compare to Namecheap or Hostinger?",
    a: "Namecheap often has lower renewals and bundled privacy. Hostinger is strong for value hosting. GoDaddy is a one-stop shop with many add-ons but heavier upsells.",
  },
  {
    q: "Can I transfer domains out easily?",
    a: "Yes. You can unlock and transfer domains to other registrars following standard ICANN steps.",
  },
];

function GoDaddyToolPage() {
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
        "GoDaddy is a one-stop shop for domains, DNS, and hosting. It’s convenient for SMBs that want domains, email, and hosting in one place, though renewals and upsells can be higher than budget competitors.",
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
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "Domain search and DNS",
      body: "Register domains, manage DNS, and connect to external hosting or apps quickly with a familiar interface.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-indigo-500" />,
      title: "Hosting and managed WordPress",
      body: "Shared and managed WP hosting with SSL options, staging, and backups depending on plan.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Security and SSL options",
      body: "SSL, DNSSEC, and security add-ons keep domains and sites safer; some plans include SSL, others add it as an extra.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Email and productivity",
      body: "Microsoft 365 email bundles integrate with domains; easy setup for SMB teams.",
    },
    {
      icon: <Video className="h-5 w-5 text-blue-500" />,
      title: "Website builder",
      body: "A simple site builder with templates for quick brochure sites if you don’t want WordPress or custom dev.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Commerce add-ons",
      body: "Ecommerce plans and upsells for payments, store, and marketing tools if you want everything in one account.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Honest GoDaddy review covering pricing, features, pros & cons, alternatives, and whether GoDaddy fits your 2025 domains and hosting needs."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-emerald-200/25 blur-3xl" />
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
                  GoDaddy bundles domains, DNS, hosting, email, and a site builder, making it a familiar all-in-one option for SMBs starting online.
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
              {toolName} is a {category.toLowerCase()} provider offering domain registration, DNS hosting, web hosting, and site builders. It’s a common starting point for SMBs that want everything in one account.
            </p>
            <p className="mt-3 text-slate-700">
              You can manage domains, email, SSL, and hosting from one dashboard, with upsells for security, marketing tools, and ecommerce. Performance is fine for small to mid-sized sites; high-performance needs may look to specialized hosts.
            </p>
            <p className="mt-3 text-slate-700">
              The tradeoff is heavier upsells and renewals, so compare long-term pricing with value-focused hosts and registrars.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">GoDaddy fits teams that want convenience and a single vendor for domains, DNS, and hosting.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "SMBs registering domains and launching simple sites quickly.",
                "Freelancers and agencies managing multiple client domains/DNS.",
                "Teams needing Microsoft 365 email tied to domains.",
                "Beginners who want a site builder without complex setup.",
                "Businesses that prefer a single provider for domains, hosting, and SSL.",
                "Users comfortable comparing renewals and add-ons for best value.",
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
            <p className="mt-3 text-slate-700">GoDaddy focuses on convenience and breadth for domains and hosting.</p>
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
                  Domains have intro and renewal pricing that vary by TLD and privacy. Hosting has promo rates and higher renewals. Managed WordPress, email, SSL, and security are often add-ons unless bundled.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Compare renewal rates and add-ons. If you need best value, check Namecheap/Hostinger; stay with GoDaddy for one-vendor convenience.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Product</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key notes</th>
                    <th className="px-4 py-3">Pricing snapshot</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Domains</td>
                    <td className="px-4 py-3">SMBs and agencies</td>
                    <td className="px-4 py-3">Intro deals; check renewals and privacy add-ons</td>
                    <td className="px-4 py-3">Varies by TLD (e.g., ~$0.99 intro, higher renewal)</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Shared/Managed WP Hosting</td>
                    <td className="px-4 py-3">Blogs, small biz sites</td>
                    <td className="px-4 py-3">SSL/backups may need higher tiers; staging on managed WP</td>
                    <td className="px-4 py-3">Promos low; renewals higher</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Email (Microsoft 365)</td>
                    <td className="px-4 py-3">Teams needing branded email</td>
                    <td className="px-4 py-3">Often bundled first year; paid afterward</td>
                    <td className="px-4 py-3">From a few $/user/month</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Site Builder</td>
                    <td className="px-4 py-3">Quick brochure sites</td>
                    <td className="px-4 py-3">Templates, ecommerce options on higher tiers</td>
                    <td className="px-4 py-3">Monthly plans; varies by tier</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Locking multi-year terms can manage renewals; compare total cost vs. value hosts to avoid surprises.</p>
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
                  <li>One-stop shop for domains, DNS, hosting, email.</li>
                  <li>Familiar interface and strong support resources.</li>
                  <li>Managed WordPress options with staging on higher tiers.</li>
                  <li>DNS and domain management are straightforward.</li>
                  <li>Bundled email and site builder for fast setup.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Renewals can be higher than budget registrars/hosts.</li>
                  <li>Upsells at checkout; some features are paid add-ons.</li>
                  <li>Performance/value may lag specialized hosts.</li>
                  <li>Privacy and SSL may not be bundled on low tiers.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              If you want lower renewals, premium support, or higher performance, consider these options.
            </p>
            <p className="mt-2 text-slate-700">All offer domains/hosting; they differ on price, performance, and support.</p>
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
            <p className="text-slate-700">Here’s how {toolName} compares to other popular domain/hosting options.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Namecheap & Hostinger</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/compare/namecheap-vs-hostinger-vs-godaddy">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Namecheap leads on low renewals and bundled privacy; Hostinger leads on performance/value for hosting. GoDaddy offers convenience and bundles but can cost more at renewal.
              </p>
              <p className="mt-2 text-slate-900">Choose GoDaddy for one-vendor simplicity; pick Namecheap/Hostinger for sharper pricing or speed.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs SiteGround & Bluehost</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/compare/hostinger-vs-bluehost-vs-siteground">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                SiteGround offers premium performance/support; Bluehost is beginner-friendly; GoDaddy is a generalist with strong brand and bundles. Compare total cost, performance, and support before choosing.
              </p>
              <p className="mt-2 text-slate-900">If uptime/support are key, SiteGround may win; if you want the simplest onboarding, Bluehost is easy; GoDaddy is fine for all-in-one convenience.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              GoDaddy is worth it if you want a familiar, all-in-one place for domains, DNS, hosting, and email. It’s convenient for SMBs and agencies managing many domains.
            </p>
            <p className="mt-3 text-slate-700">
              If you prioritize lowest renewals, bundled privacy, or higher performance hosting, consider Namecheap, Hostinger, or SiteGround. Model total cost including renewals and add-ons before committing.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> A convenient choice for one-stop domain and hosting management—best when you value simplicity and don’t mind comparing renewals and upsells.
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
              Choose {toolName} if you want domains, DNS, hosting, email, and a site builder in one place. It’s solid for SMBs starting online and agencies managing many domains.
            </p>
            <p>
              Consider Namecheap or Hostinger for sharper pricing and privacy, or SiteGround for premium hosting. GoDaddy remains a reliable all-in-one option when convenience matters most.
            </p>
            <p>GoDaddy integrates with common site builders and productivity tools, keeping setup simple for small teams.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here: <a className="text-amber-700 hover:text-amber-600" href={officialUrl}>Visit {toolName}</a>.
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-amber-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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

export default GoDaddyToolPage;
