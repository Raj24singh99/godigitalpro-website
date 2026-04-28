import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown, BarChart3, Shield, Database } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Matomo Analytics";
const slug = "matomo";
const category = "Privacy-first analytics";
const shortPitch =
  "Matomo is an open-source, GDPR-friendly analytics platform that gives marketers and product teams full ownership of their data without third-party tracking risks.";
const pricingSummary =
  "Self-host Matomo for free (hosting costs only) or use Matomo Cloud starting around €19/month for 50k hits with higher tiers for traffic and advanced features like extra integrations.";
const officialUrl = "https://matomo.org";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/matomo.org",
  gradient: "from-emerald-500 via-blue-500 to-indigo-600",
  glow: "shadow-[0_20px_80px_rgba(52,211,153,0.15)]",
};

const alternatives = [
  { name: "Plausible", slug: "plausible" },
  { name: "Fathom Analytics", slug: "fathom-analytics" },
  { name: "MonsterInsights", slug: "monsterinsights" },
  { name: "Hotjar", slug: "hotjar" },
  { name: "Crazy Egg", slug: "crazy-egg" },
];

const faqs = [
  {
    q: "Is Matomo really private and GDPR-friendly?",
    a: "Yes. Matomo offers first-party tracking, cookieless mode, log analytics, IP anonymization, and a DPA. You own the data, can pick EU servers, and avoid sending data to third-party clouds.",
  },
  {
    q: "Can I self-host Matomo?",
    a: "You can. Matomo self-hosting is free aside from your server costs. Many teams run it on VPS providers and keep full control of data retention, backups, and updates.",
  },
  {
    q: "Does Matomo replace Google Analytics 4?",
    a: "For many teams, yes. It delivers traffic, campaigns, goals, funnels, ecommerce, events, and user paths without GA’s sampling or privacy baggage. Some keep GA4 for ads while Matomo owns the main reporting.",
  },
  {
    q: "What are Matomo heatmaps and session recordings?",
    a: "Matomo’s marketing suite includes heatmaps, scroll depth, and session recordings so you can understand on-page behavior without sending data to separate vendors.",
  },
  {
    q: "Does Matomo integrate with WordPress and Tag Manager?",
    a: "Yes. There are plugins for WordPress and connectors for Google Tag Manager/Matomo Tag Manager. You can deploy via GTM or first-party container and track events easily.",
  },
  {
    q: "How accurate is Matomo compared to GA4?",
    a: "Matomo avoids sampling and lets you control bot filtering, consent logic, and data retention. Accuracy typically improves because you define what is blocked vs tracked.",
  },
  {
    q: "Can I import Universal Analytics data?",
    a: "Matomo offers an importer for Universal Analytics to preserve historical trends. You can also forward GA hits to Matomo while you migrate.",
  },
  {
    q: "What support does Matomo offer on Cloud?",
    a: "Matomo Cloud includes support, SLA, backups, and maintenance. You can add support to self-hosting through paid plans or rely on community docs for DIY setups.",
  },
];

function MatomoToolPage() {
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
        "Matomo gives marketers privacy-first analytics with complete data ownership, making it a strong GA4 alternative for GDPR-conscious teams. You can self-host or use Matomo Cloud with heatmaps, funnels, and ecommerce tracking baked in.",
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
      icon: <BarChart3 className="h-5 w-5 text-emerald-600" />,
      title: "Owned analytics without sampling",
      body: "Matomo delivers traffic, events, campaigns, goals, funnels, and ecommerce without sampling. Data lives on your servers or Matomo Cloud so you keep control.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-indigo-500" />,
      title: "GDPR-first consent and cookieless mode",
      body: "Built-in consent screens, IP anonymization, and cookieless tracking make Matomo easier to run in regulated regions. You decide retention and deletion rules.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-amber-500" />,
      title: "Behavior tools built in",
      body: "Heatmaps, session recordings, scroll depth, form analytics, and user journeys ship in the suite so you don’t juggle multiple vendors to understand UX.",
    },
    {
      icon: <Plug className="h-5 w-5 text-sky-500" />,
      title: "Tag management and integrations",
      body: "Use Matomo Tag Manager or GTM to deploy pixels and events. Connect to WooCommerce, Shopify, WordPress, and API exports for BI and reporting.",
    },
    {
      icon: <Database className="h-5 w-5 text-rose-500" />,
      title: "Data importers and raw exports",
      body: "Import Universal Analytics data, export unsampled CSVs, and pipe logs for server-side tracking. Analysts keep transparency across every hit.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Performance and uptime friendly",
      body: "First-party JS is lightweight; log analytics mode reduces client load. Cloud includes scaling, backups, and SLA so marketing teams stay focused.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Analytics, Pricing, Pros & Cons, Alternatives`}
        description="Hands-on Matomo review for marketers comparing analytics, privacy, pricing, pros & cons, alternatives, and who should pick it over GA4."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-300/20 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-300/20 blur-3xl" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-indigo-200 blur-3xl" />
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
                  Matomo keeps analytics first-party and transparent so you can respect privacy laws while still capturing the metrics marketers and product teams need to ship campaigns confidently.
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
              Matomo is a {category.toLowerCase()} platform built for teams that want deep analytics without giving data to ad networks. It combines traffic reports, events, goals, funnels, and ecommerce with heatmaps and session recordings in one suite.
            </p>
            <p className="mt-3 text-slate-700">
              Marketers switch to Matomo to avoid GA4’s sampling and consent friction. Product teams like that they can run self-hosted instances, set retention rules, and access unsampled raw data for analysis.
            </p>
            <p className="mt-3 text-slate-700">
              Whether you self-host or use Matomo Cloud, you keep ownership of customer data and can prove compliance with GDPR, HIPAA-friendly setups, or stricter client contracts.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Matomo is designed for teams that need trustworthy analytics with privacy and ownership guarantees.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Agencies serving EU clients that require GDPR-ready analytics and data residency.",
                "Ecommerce brands needing accurate funnels, cart tracking, and unsampled reports.",
                "Product teams that want event and user journey data without third-party sharing.",
                "Publishers that need heatmaps, scroll depth, and A/B testing in one platform.",
                "Compliance-led organizations that require first-party tracking and IP anonymization.",
                "Marketers migrating off GA4 who still want goals, campaigns, and imports of UA data.",
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
              Matomo focuses on data ownership and actionable marketing insights without third-party dependencies or sampling.
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
                  Matomo offers a free self-hosted option plus Matomo Cloud subscriptions. Cloud pricing scales by monthly hits and includes maintenance, backups, and support. Optional add-ons cover things like roll-up reporting and search engine keywords.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Self-host if you have devops handy; pick Cloud for fastest launch, SLAs, and feature updates.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Self-hosted</td>
                    <td className="px-4 py-3">Teams with server access and privacy requirements</td>
                    <td className="px-4 py-3">You manage infra, backups, and scaling</td>
                    <td className="px-4 py-3">Free (plus hosting)</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Cloud Growth</td>
                    <td className="px-4 py-3">SMBs and agencies shipping fast</td>
                    <td className="px-4 py-3">Includes Tag Manager, heatmaps, 50k–100k hits</td>
                    <td className="px-4 py-3">~€19–€35/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Cloud Business</td>
                    <td className="px-4 py-3">Ecommerce and content sites with higher traffic</td>
                    <td className="px-4 py-3">Higher hit caps, roll-up reporting, SLA</td>
                    <td className="px-4 py-3">Custom by volume</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Large orgs needing SSO and compliance</td>
                    <td className="px-4 py-3">SSO/SAML, premium support, dedicated onboarding</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Most marketers start on Matomo Cloud Growth to avoid infrastructure work. Privacy-heavy teams eventually self-host to tune retention and keep PII in their own stack. Enterprises should budget for support, SSO, and roll-up features.
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
                  <li>True data ownership with self-hosting and EU/EAA data residency.</li>
                  <li>Unsampled reports across campaigns, funnels, events, and ecommerce.</li>
                  <li>Built-in heatmaps, session recordings, and Tag Manager reduce extra tools.</li>
                  <li>Consent tools and cookieless mode simplify GDPR compliance.</li>
                  <li>Imports from Universal Analytics keep historical continuity.</li>
                  <li>Flexible API exports so analysts can move data into BI stacks.</li>
                  <li>Transparent pricing that scales with traffic instead of seats.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <Shield className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Self-hosting requires devops time for scaling and upgrades.</li>
                  <li>UI feels less polished than GA4 or newer privacy tools.</li>
                  <li>At very high traffic, infra costs can exceed GA4’s free tier.</li>
                  <li>Fewer native ad platform integrations compared to GA4.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              If you want privacy-first analytics but prefer a lighter UI or simpler setup, consider these options. All keep data lean and avoid ad network sharing.
            </p>
            <p className="mt-2 text-slate-700">They differ on ease of onboarding, event depth, ecommerce features, and reporting exports.</p>
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
            <p className="text-slate-700">Here’s how Matomo stacks up against two close privacy-first competitors.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Plausible vs Fathom</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/plausible-vs-fathom-vs-matomo">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Plausible and Fathom are faster to set up with very lean dashboards. Matomo is heavier but includes funnels, heatmaps, session recordings, and Tag Manager—better if you want one suite instead of multiple tools.
              </p>
              <p className="mt-2 text-slate-700">
                Self-hosted needs more ops than the SaaS-only Plausible/Fathom models. Cloud Matomo adds managed hosting if you want the broader feature set without servers.
              </p>
              <p className="mt-2 text-slate-900">
                Choose Matomo for advanced reports and behavior tools; choose Plausible or Fathom for simplest privacy analytics with minimal overhead.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs MonsterInsights</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/monsterinsights-vs-matomo-vs-fathom">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                MonsterInsights is a WordPress plugin that surfaces GA data in WP. Matomo gives you the underlying analytics platform itself, with first-party data and native ecommerce tracking for WooCommerce or Shopify.
              </p>
              <p className="mt-2 text-slate-700">
                If you want privacy compliance and control, Matomo wins. If you are committed to GA4 and just want quick WP dashboards, MonsterInsights is lighter.
              </p>
              <p className="mt-2 text-slate-900">
                Choose Matomo when owning data matters; choose MonsterInsights if GA4 is non-negotiable and you simply need reporting inside WordPress.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              For marketers, developers, and compliance-led teams that need trustworthy analytics without ad tech baggage, Matomo is a strong pick. The suite covers funnels, goals, ecommerce, and UX behavior so you avoid stitching multiple tools together.
            </p>
            <p className="mt-3 text-slate-700">
              If you rely heavily on Google Ads auto-tagging or prefer a minimalist UI with no server work, Plausible or Fathom might be easier. But when ownership, imports, and deep reporting matter, Matomo’s flexibility justifies the overhead.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Matomo is worth it for privacy-first teams that need full-funnel analytics and are willing to manage (or pay for) hosting.
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
              Choose Matomo if you need owned analytics that respects privacy while giving marketers detailed reporting, funnels, and behavior tracking. It’s especially useful for EU clients, healthcare, finance, and ecommerce brands that want unsampled data.
            </p>
            <p>
              Consider Plausible or Fathom for a leaner UI and zero maintenance. If you must keep GA4 for ads attribution, Matomo can still mirror hits for compliance and ownership while you transition.
            </p>
            <p>Matomo fits well in a privacy-first marketing stack, connecting to tag managers, ecommerce platforms, and BI tools without leaking data to third parties.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>
                Visit {toolName}
              </a>
              .
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
      {open && <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">{answer}</div>}
    </div>
  );
}

export default MatomoToolPage;
