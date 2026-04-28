import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Globe, Wallet, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Namecheap";
const slug = "namecheap";
const category = "Domains & Hosting";
const shortPitch =
  "Namecheap is a budget-friendly domain registrar and hosting provider that bundles privacy, DNS, and managed WordPress options without upsell-heavy checkout flows.";
const pricingSummary = "Domains often from ~$9/yr with free WHOIS privacy; hosting from a few dollars per month with promotional pricing on longer terms.";
const officialUrl = "https://www.namecheap.com/";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/namecheap.com",
  gradient: "from-orange-500 via-amber-500 to-rose-500",
  glow: "shadow-[0_20px_80px_rgba(249,115,22,0.25)]",
};

const alternatives = [
  { name: "Hostinger", slug: "hostinger", blurb: "Low-cost hosting with solid performance." },
  { name: "GoDaddy", slug: "godaddy", blurb: "Broad registrar with marketing add-ons." },
  { name: "Bluehost", slug: "bluehost", blurb: "WordPress-friendly hosting bundles." },
  { name: "Cloudways", slug: "cloudways", blurb: "Managed cloud hosting flexibility." },
  { name: "SiteGround", slug: "siteground", blurb: "Premium support and performance." },
];

const faqs = [
  { q: "Is Namecheap reliable?", a: "Yes. It is one of the larger registrars with stable DNS, free WHOIS privacy on most domains, and straightforward management tools." },
  { q: "Does Namecheap include free WHOIS privacy?", a: "Most domains include free privacy protection (domain-dependent). It’s applied at checkout without extra cost." },
  { q: "Is Namecheap good for hosting?", a: "It’s solid for budget shared or managed WordPress hosting. For heavier traffic or more control, consider Cloudways or a VPS." },
  { q: "Can I move domains to Namecheap?", a: "Yes. Transfers are simple, include added time on the domain, and generally keep WHOIS privacy free." },
  { q: "Is support responsive?", a: "Support is available 24/7 with live chat. Response is generally quick, though complex hosting issues may take longer." },
  { q: "Does Namecheap sell aggressively?", a: "Checkout is relatively light on upsells compared to GoDaddy, which many users prefer." },
  { q: "Does it work for agencies?", a: "Agencies use Namecheap for affordable domains, email forwarding, and DNS. For client hosting, performance needs should guide whether to use Namecheap or a cloud host." },
  { q: "Is there email hosting?", a: "Yes. Namecheap offers mailbox plans. Many teams pair domains with Google Workspace or Microsoft 365 instead." },
];

const featureBlocks = [
  {
    icon: <Globe className="h-5 w-5 text-orange-500" />,
    title: "Affordable domains with free privacy",
    body: "Competitive domain pricing plus WHOIS privacy included on most TLDs keeps ownership secure without extra fees.",
  },
  {
    icon: <Plug className="h-5 w-5 text-indigo-500" />,
    title: "DNS and email forwarding",
    body: "Fast DNS management, URL redirects, and email forwarding make it easy to connect domains to websites and marketing tools.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
    title: "Security baked in",
    body: "Free privacy, 2FA, registry lock options, and SSL add-ons protect domains from hijacking and spoofing.",
  },
  {
    icon: <Rocket className="h-5 w-5 text-rose-500" />,
    title: "Hosting options",
    body: "Shared, managed WordPress, and VPS plans help teams start quickly; upgrade paths exist as traffic grows.",
  },
  {
    icon: <Wallet className="h-5 w-5 text-amber-600" />,
    title: "Transparent checkout",
    body: "Straightforward pricing with fewer upsells than some registrars, plus promos on multi-year terms.",
  },
  {
    icon: <Sparkles className="h-5 w-5 text-sky-500" />,
    title: "Easy management UI",
    body: "Clean domain list, bulk edits, and DNS templates save time for agencies and teams managing many properties.",
  },
];

function NamecheapToolPage() {
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
        "Namecheap is a registrar known for fair pricing, free WHOIS privacy, and a straightforward checkout. It’s strong for domains and light hosting use cases without heavy upsells.",
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

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Domains, Hosting, Pricing, Alternatives`}
        description="Hands-on Namecheap review: pricing, domains, hosting, pros & cons, and alternatives like Hostinger, GoDaddy, and SiteGround."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-orange-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-rose-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-amber-500" />
                {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                {toolName} Review (2025): Affordable domains without the upsell overload
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
                    <p className="text-xs uppercase tracking-[0.18em] text-white/80">Featured Tool</p>
                    <p className="text-xl font-bold">{toolName}</p>
                  </div>
                </div>
                <p className="relative mt-4 text-sm leading-relaxed text-white/90">
                  Namecheap keeps domain costs low, includes privacy, and avoids heavy upsells. Hosting options exist if you want a single vendor to start quickly.
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
              Namecheap is a domain registrar and hosting provider known for low prices and free WHOIS privacy. It offers shared/managed WordPress hosting, email, SSL, and DNS tools that are easy to manage.
            </p>
            <p className="mt-3 text-slate-700">
              Marketers and agencies use Namecheap to secure domains, set up quick landing pages, and manage DNS for campaigns. Its checkout is less aggressive than GoDaddy, which keeps ownership costs predictable.
            </p>
            <p className="mt-3 text-slate-700">
              For heavier sites, you may graduate to managed cloud hosting, but Namecheap is a strong starting point when budget, privacy, and simplicity matter.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Choose Namecheap when you need affordable, low-friction domain management.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Marketers securing campaign or brand domains with DNS setup.",
                "Agencies managing many client domains with privacy included.",
                "Founders launching MVPs on shared or managed WordPress hosting.",
                "Teams needing quick email forwarding and SSL for microsites.",
                "Budget-conscious users comparing against upsell-heavy registrars.",
                "Anyone wanting a straightforward transfer experience.",
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
            <p className="mt-3 text-slate-700">Namecheap focuses on price, privacy, and simple hosting for small projects.</p>
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
                  Domain renewals remain competitive with privacy included on most TLDs. Hosting is inexpensive for light sites; promotional rates apply on longer terms.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Use Namecheap for domains/DNS; start with shared or EasyWP for small sites; upgrade to cloud/VPS when traffic scales.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Domains</td>
                    <td className="px-4 py-3">Brand/campaign domains</td>
                    <td className="px-4 py-3">Privacy included on most TLDs</td>
                    <td className="px-4 py-3">From ~$9/yr</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Shared hosting</td>
                    <td className="px-4 py-3">Small sites and landing pages</td>
                    <td className="px-4 py-3">Entry-level resources, promo term pricing</td>
                    <td className="px-4 py-3">From a few $/mo</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">EasyWP (managed WP)</td>
                    <td className="px-4 py-3">WordPress without manual setup</td>
                    <td className="px-4 py-3">WP-focused limits and management</td>
                    <td className="px-4 py-3">Low monthly</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">VPS/Cloud</td>
                    <td className="px-4 py-3">Higher traffic or control</td>
                    <td className="px-4 py-3">More resources; DIY management</td>
                    <td className="px-4 py-3">Varies</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Keep an eye on renewal pricing for both domains and hosting; longer commitments usually net the best value.
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
                  <li>Competitive domain pricing with free privacy.</li>
                  <li>Simple DNS, forwarding, and SSL setup.</li>
                  <li>Checkout with minimal upsells compared to major registrars.</li>
                  <li>Managed WordPress (EasyWP) for quick launches.</li>
                  <li>Responsive 24/7 chat support.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Shared hosting performance lags premium providers.</li>
                  <li>Renewal pricing can climb—watch terms.</li>
                  <li>Cloud/VPS offerings require more DIY management.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">If you need more performance, bundled marketing, or premium support, consider these options.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.blurb}</p>
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
            <p className="text-slate-700">Compare Namecheap with two popular registrars/hosts.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Hostinger vs GoDaddy</h3>
                <a className="text-sm font-semibold text-orange-700 hover:text-orange-600" href="/tools/compare/namecheap-vs-hostinger-vs-godaddy">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Namecheap focuses on value and minimal upsells. Hostinger delivers faster shared hosting at similar prices. GoDaddy has broad products but heavier upsells. Pick based on performance needs and checkout experience.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Bluehost vs SiteGround</h3>
                <a className="text-sm font-semibold text-orange-700 hover:text-orange-600" href="/tools/compare/namecheap-vs-bluehost-vs-siteground">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Bluehost is a WordPress favorite for beginners; SiteGround is premium with strong support; Namecheap is the price leader with free privacy. Choose based on support/performance versus lowest cost.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              For domains, DNS, and budget hosting, Namecheap is worth it—pricing is fair, privacy is included, and the UX is simple. For heavy sites or managed performance, consider Hostinger, SiteGround, or Cloudways.
            </p>
            <p className="mt-3 text-slate-700">
              Agencies appreciate the lighter upsells and bulk tools. Watch renewal pricing and be ready to upgrade hosting as traffic grows.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Namecheap is a smart choice for affordable, low-friction domain management with starter hosting options.
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
              Choose Namecheap if you value low-cost domains with free privacy and a clean checkout. It’s great for campaigns, microsites, and early-stage projects. Move to higher-performance hosting if you grow beyond shared limits.
            </p>
            <p>
              Consider Hostinger or SiteGround for more performance out of the gate, and Cloudways if you want managed cloud flexibility.
            </p>
            <p className="font-semibold text-slate-900">
              Ready to try {toolName}? <a className="text-orange-700 hover:text-orange-600" href={officialUrl}>Visit {toolName}</a>.
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-orange-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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

export default NamecheapToolPage;
