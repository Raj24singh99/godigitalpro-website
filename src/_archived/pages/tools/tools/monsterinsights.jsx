import React, { useState } from "react";
import { Sparkles, ShieldCheck, Gauge, BarChart3, Plug, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "MonsterInsights";
const slug = "monsterinsights";
const category = "Analytics for WordPress";
const shortPitch =
  "MonsterInsights makes Google Analytics easy on WordPress with setup wizards, enhanced ecommerce tracking, dashboards inside WP, and GDPR-friendly consent options.";
const pricingSummary = "Free version available; paid plans from ~$100/year for advanced tracking, ecommerce, and reports.";
const officialUrl = "https://www.monsterinsights.com/";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/monsterinsights.com",
  gradient: "from-emerald-500 via-teal-500 to-blue-500",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.25)]",
};

const alternatives = [
  { name: "Fathom Analytics", slug: "fathom-analytics", blurb: "Privacy-first analytics with simple dashboards." },
  { name: "Plausible", slug: "plausible", blurb: "Lightweight, cookieless GA alternative." },
  { name: "Matomo", slug: "matomo", blurb: "Self-hosted/hosted analytics with strong privacy." },
  { name: "GA4 (native)", url: "https://analytics.google.com/", blurb: "Use GA4 directly if you want the full interface." },
];

const faqs = [
  { q: "What does MonsterInsights do?", a: "It connects GA4 to WordPress without code, surfaces reports in the dashboard, and enables enhanced ecommerce/events tracking." },
  { q: "Is there a free version?", a: "Yes. The free plugin covers basic GA4 connection and essential reports. Paid plans add ecommerce, form tracking, dimensions, and advanced reports." },
  { q: "Does it support GA4?", a: "Yes. It fully supports GA4, including enhanced measurement toggles and events." },
  { q: "Is MonsterInsights GDPR-friendly?", a: "It offers consent integrations, anonymization, and options to adjust tracking based on user consent. You must configure according to your policies." },
  { q: "Can it track WooCommerce ecommerce?", a: "Yes. Pro plans add enhanced ecommerce for WooCommerce, Easy Digital Downloads, MemberPress, and more." },
  { q: "Is performance impacted?", a: "The plugin loads lightweight scripts; GA4 is still used. For minimal footprint, privacy tools like Fathom/Plausible are even lighter." },
  { q: "Does it replace GA4?", a: "No. It simplifies setup and reporting inside WordPress while keeping GA4 as the underlying analytics." },
  { q: "Is support good?", a: "Support is responsive on paid plans, and documentation covers most configurations." },
];

const featureBlocks = [
  {
    icon: <Plug className="h-5 w-5 text-emerald-600" />,
    title: "Code-free GA4 setup",
    body: "Connect GA4 via wizard, verify tracking, and toggle enhanced measurement without manual code.",
  },
  {
    icon: <BarChart3 className="h-5 w-5 text-indigo-500" />,
    title: "Inline dashboards",
    body: "See key GA metrics inside WordPress, including traffic, top pages, and conversion highlights.",
  },
  {
    icon: <Gauge className="h-5 w-5 text-amber-600" />,
    title: "Ecommerce + events",
    body: "Enhanced ecommerce for WooCommerce/EDD/MemberPress and event tracking for forms, downloads, outbound clicks.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5 text-sky-600" />,
    title: "Consent & privacy aids",
    body: "Anonymize IPs, integrate consent plugins, and adjust tracking settings to align with GDPR/CCPA policies.",
  },
  {
    icon: <Sparkles className="h-5 w-5 text-rose-500" />,
    title: "Template-based setup",
    body: "Prebuilt settings for bloggers, ecommerce, and agencies speed up deployment across sites.",
  },
  {
    icon: <Rocket className="h-5 w-5 text-emerald-500" />,
    title: "Site speed friendly",
    body: "Minimal overhead compared to manual GA scripts; still lighter options exist if you want cookieless analytics.",
  },
];

function MonsterInsightsToolPage() {
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
        "MonsterInsights makes GA4 simple for WordPress by handling tracking code, events, and reports inside WP. It’s popular with site owners who want analytics without code.",
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
        title={`${toolName} Review 2025: GA4 for WordPress, Pricing, Pros & Cons, Alternatives`}
        description="MonsterInsights review for WordPress: GA4 setup without code, ecommerce tracking, dashboards, pros & cons, and alternatives like Fathom, Plausible, and Matomo."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-blue-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-amber-500" />
                {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                {toolName} Review (2025): GA4 made simple for WordPress
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
                  MonsterInsights simplifies GA4 setup and reporting for WordPress owners who want analytics without code and with ecommerce/events ready to go.
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
              MonsterInsights is a WordPress plugin that connects GA4 without code, adds dashboards inside WP, and enables enhanced ecommerce and event tracking across forms, downloads, and outbound clicks.
            </p>
            <p className="mt-3 text-slate-700">
              It’s designed for site owners who want GA4 accuracy but prefer configuration wizards, automatic events, and reports inside WordPress rather than living in the GA interface daily.
            </p>
            <p className="mt-3 text-slate-700">
              Privacy features, consent integrations, and toggles for enhanced measurement make it safer to deploy in regulated markets when configured properly.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">MonsterInsights is best for WordPress owners who want GA4 data without manual coding.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Bloggers and publishers wanting quick GA4 setup.",
                "Ecommerce stores on WooCommerce or EDD needing enhanced ecommerce tracking.",
                "Agencies standardizing GA4 setup across many WP sites.",
                "Marketers who prefer GA dashboards inside WordPress.",
                "Teams needing form/download/outbound-click tracking without custom code.",
                "Sites that need consent-friendly GA deployment with IP anonymization and toggles.",
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
            <p className="mt-3 text-slate-700">MonsterInsights focuses on GA4 accuracy with WordPress convenience and ecommerce readiness.</p>
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
                  Free covers basic GA4 connection. Paid plans add ecommerce, forms, custom dimensions, and expanded reports. Pricing scales by site count and feature set.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Use free for basics; upgrade to Plus/Pro for ecommerce and events; Agency for multiple client sites.</p>
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
                    <td className="px-4 py-3">Basic GA4 on WordPress</td>
                    <td className="px-4 py-3">Standard reports, code-free setup</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Plus/Pro</td>
                    <td className="px-4 py-3">Ecommerce and events</td>
                    <td className="px-4 py-3">Enhanced ecommerce, forms, custom dimensions</td>
                    <td className="px-4 py-3">From ~$100/yr</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Agency</td>
                    <td className="px-4 py-3">Multiple client sites</td>
                    <td className="px-4 py-3">More site licenses, priority support</td>
                    <td className="px-4 py-3">Scaled pricing</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              If you want fully cookieless analytics with minimal scripts, alternatives like Fathom or Plausible fit better; for GA fidelity and ecommerce, MonsterInsights aligns well.
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
                  <li>Code-free GA4 setup and verification.</li>
                  <li>Enhanced ecommerce and events without custom coding.</li>
                  <li>Dashboards inside WordPress for quick insights.</li>
                  <li>Consent and anonymization options for compliance.</li>
                  <li>Good documentation and support on paid plans.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Still relies on GA4 scripts—privacy tools like Fathom/Plausible are lighter.</li>
                  <li>Subscription pricing for advanced features.</li>
                  <li>Not a replacement for GA’s full interface for deep analysis.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">If you want cookieless analytics or full control, consider these options.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug || alt.url} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.blurb}</p>
                  </div>
                  <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href={alt.url || `/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how MonsterInsights compares with privacy-first and self-hosted analytics.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Matomo vs Fathom</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/compare/monsterinsights-vs-matomo-vs-fathom">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                MonsterInsights keeps GA4 while simplifying setup. Matomo offers full ownership (self/hosted). Fathom is lightweight, privacy-first, and cookieless. Pick based on compliance and reporting depth needs.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Plausible vs GA4 native</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/compare/monsterinsights-vs-plausible-vs-ga4">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Plausible is cookieless and simple; GA4 native offers full power but complexity; MonsterInsights bridges GA4 into WordPress with wizards and ecommerce tracking.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you run WordPress and want GA4 without coding, MonsterInsights is worth it. Ecommerce tracking, event automation, and dashboards save time. If you prefer privacy-first or cookieless analytics, Fathom or Plausible are better fits.
            </p>
            <p className="mt-3 text-slate-700">
              Agencies can standardize GA4 deployment across many sites, while site owners keep data flowing accurately with minimal effort.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> MonsterInsights is a strong choice for WordPress GA4 setup and reporting; choose alternatives if you want to avoid GA entirely.
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
              Choose MonsterInsights if you want GA4 done-for-you on WordPress with ecommerce and event tracking. Choose Matomo for self-hosted control, or Fathom/Plausible for lightweight, privacy-first analytics.
            </p>
            <p>
              MonsterInsights keeps GA data accurate with minimal code, making it great for owners and agencies standardizing analytics across sites.
            </p>
            <p className="font-semibold text-slate-900">
              Ready to try {toolName}? <a className="text-emerald-700 hover:text-emerald-600" href={officialUrl}>Visit {toolName}</a>.
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
      {open && (
        <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">
          {answer}
        </div>
      )}
    </div>
  );
}

export default MonsterInsightsToolPage;
