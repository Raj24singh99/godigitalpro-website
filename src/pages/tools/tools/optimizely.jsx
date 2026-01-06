import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Optimizely";
const slug = "optimizely";
const category = "Experimentation & Personalization";
const shortPitch = "Optimizely (Web/Feature) powers A/B testing, feature flags, rollouts, and personalization for product and marketing teams.";
const pricingSummary = "Quote-based pricing by traffic, environments, and modules (Web, Feature, CMS). Enterprise-focused with SLAs.";
const officialUrl = "https://www.optimizely.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/optimizely.com",
  gradient: "from-indigo-600 via-blue-500 to-emerald-500",
  glow: "shadow-[0_20px_80px_rgba(79,70,229,0.24)]",
};

const alternatives = [
  { name: "VWO", slug: "vwo" },
  { name: "LaunchDarkly", slug: "launchdarkly" },
  { name: "GrowthBook", slug: "growthbook" },
  { name: "AB Tasty", slug: "ab-tasty" },
];

const faqs = [
  { q: "Is there a free plan?", a: "Optimizely is enterprise-focused; expect demos and quotes rather than a free plan." },
  { q: "Can developers and marketers use it together?", a: "Yes. Web covers marketers; Feature covers engineers with flags and experiments." },
  { q: "Does it support server-side testing?", a: "Yes. Feature Experimentation supports server-side SDKs for rollouts and tests." },
  { q: "How is traffic counted?", a: "Pricing is typically based on events or impressions. Clarify metering in your contract." },
  { q: "What about compliance?", a: "Role controls, environment segregation, and audit logs help meet enterprise requirements; request SOC/GDPR docs." },
  { q: "Can I do personalization?", a: "Yes. Audience targeting and integrations with CDPs are available on Web/Personalization." },
  { q: "Is stats handled?", a: "Optimizely includes a trusted stats engine with sequential testing controls." },
  { q: "Does it support flags and rollouts?", a: "Yes. Feature flags, rollouts, and kill switches are part of Feature Experimentation." },
];

function OptimizelyToolPage() {
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
        "Optimizely is an enterprise experimentation and feature management platform. It supports web A/B tests, personalization, and product rollouts with flags and progressive delivery.",
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
    { icon: <Sparkles className="h-5 w-5 text-indigo-500" />, title: "Web experimentation", body: "Client-side A/B/n and multivariate tests with visual editor and code options." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Feature flags", body: "Server-side flags, kill switches, rollouts, and holdouts for product releases." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "Personalization", body: "Targeted experiences driven by audiences and integrations with CDPs." },
    { icon: <Folder className="h-5 w-5 text-emerald-500" />, title: "Stats engine", body: "Trusted stats with sequential testing controls and error mitigation." },
    { icon: <Plug className="h-5 w-5 text-purple-500" />, title: "Integrations", body: "Connect analytics, CDPs, data warehouses, and tag managers." },
    { icon: <Rocket className="h-5 w-5 text-amber-500" />, title: "Governance", body: "Roles, approvals, audit trails, and environment controls for enterprise teams." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Optimizely review: pricing, features, pros & cons, and alternatives to decide if its experimentation and feature management fit your org."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-indigo-200/30 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-emerald-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-indigo-700" />
                {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                {toolName} Review (2025): Features, Pricing, Pros & Cons
              </h1>
              <p className="mt-4 text-lg text-slate-600">{shortPitch}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-700">
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Our rating: {ratingValue}/5</span>
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Reviewed by GoDigitalPro - Updated May 2025</span>
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-indigo-100 blur-3xl" />
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
                  {toolName} standardizes experimentation and progressive delivery with governance, stats, and integrations across web and product teams.
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
              {toolName} offers two core modules: Web Experimentation/Personalization and Feature Experimentation. Web handles client-side tests and experiences; Feature provides flags, rollouts, and server-side experiments for apps.
            </p>
            <p className="mt-3 text-slate-700">
              It is designed for teams that run frequent experiments with governance, stats, and role controls. Integrations with analytics and CDPs help unify metrics across channels and keep experiments accountable.
            </p>
            <p className="mt-3 text-slate-700">
              Pricing is enterprise and traffic-based. If you need lighter CRO, consider smaller tools; if you need robust experimentation at scale, Optimizely is a leader.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams running experimentation at scale with governance needs.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Product teams shipping features gradually with flags and rollouts.",
                "Marketing teams running client-side A/B tests and personalization.",
                "Data teams enforcing stats rigor and guardrails on experiments.",
                "Enterprises needing roles, approvals, and compliance controls.",
                "Engineering teams adopting progressive delivery with kill switches.",
                "Organizations unifying web and app experimentation in one stack.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-indigo-600" />
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
              {toolName} covers client and server experiments, personalization, and controlled rollouts with governance.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {featureBlocks.map((feature) => (
                <div key={feature.title} className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center gap-3 text-slate-900">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
                      {feature.icon}
                    </div>
                    <p className="text-lg font-semibold">{feature.title}</p>
                  </div>
                  <p className="mt-3 text-sm text-slate-700">{feature.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--pricing bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pricing</h2>
            <p className="mt-3 text-slate-700">
              Pricing is quote-based by traffic, events, and modules (Web, Feature, CMS). Clarify event metering, environment counts, and support tiers. Bundle Web + Feature if you need both marketing and product experimentation.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                { name: "Web Experimentation", price: "Quote", detail: "Client-side tests, personalization, visual editor", bestFor: "Marketing and CRO teams" },
                { name: "Feature Experimentation", price: "Quote", detail: "Feature flags, rollouts, server-side experiments", bestFor: "Product/engineering teams" },
                { name: "Enterprise bundles", price: "Custom", detail: "Unified contracts, SLAs, success services", bestFor: "Organizations combining web and product" },
              ].map((tier) => (
                <div key={tier.name} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                  <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">{tier.name}</p>
                  <p className="mt-2 text-2xl font-bold text-slate-900">{tier.price}</p>
                  <p className="mt-2 text-sm text-slate-700">{tier.detail}</p>
                  <p className="mt-3 text-xs font-semibold text-slate-600">Best for: {tier.bestFor}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold text-slate-900">Pricing tip</p>
              <p className="mt-2 text-sm text-slate-700">
                Model expected traffic/events and align contract with realistic experimentation velocity. Ask for sandbox environments and implementation support to speed rollout.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros and cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <p className="text-lg font-semibold text-emerald-700">Pros</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>Mature experimentation and stats engine trusted by large teams.</li>
                  <li>Feature flags with gradual rollouts and kill switches.</li>
                  <li>Strong governance: roles, environments, approvals, and audit trails.</li>
                  <li>Personalization with audience targeting and integrations.</li>
                  <li>Good ecosystem and support for enterprise requirements.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <p className="text-lg font-semibold text-rose-700">Cons</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>Premium pricing and contracts; overkill for small teams.</li>
                  <li>Visual editor may need dev support for complex pages.</li>
                  <li>Implementation requires tagging and clean event schemas.</li>
                  <li>Heavier than lean CRO tools for simple tests.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives</h2>
            <p className="mt-3 text-slate-700">Consider these if you need different price points, simplicity, or flag-centric workflows:</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-xs text-slate-600">{alt.tagline || "Experimentation/flags alternative"}</p>
                  </div>
                  <Link className="text-sm font-semibold text-indigo-700 hover:text-indigo-500" to={`/tools/${alt.slug}`}>
                    View
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--comparisons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} vs other tools</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                { title: "Optimizely vs VWO", betterFor: "VWO is cost-effective for CRO; Optimizely adds stronger governance and feature experimentation for product teams.", choose: "Pick Optimizely for unified web+feature experiments with governance. Pick VWO for lower cost web CRO." },
                { title: "Optimizely vs LaunchDarkly", betterFor: "LaunchDarkly excels at flags; Optimizely blends flags with an experimentation-first approach and stats engine.", choose: "Pick Optimizely if you want experiments plus flags in one. Pick LaunchDarkly for deep flag workflows and SDK breadth." },
                { title: "Optimizely vs GrowthBook", betterFor: "GrowthBook is flexible and open-source; Optimizely offers managed enterprise support and bundled personalization.", choose: "Pick Optimizely for enterprise support and governance. Pick GrowthBook for open-source flexibility and cost control." },
                { title: "Optimizely vs AB Tasty", betterFor: "AB Tasty is a CRO suite; Optimizely offers feature experimentation and deeper governance.", choose: "Pick Optimizely for product+web experiments; pick AB Tasty for CRO-focused marketing teams." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                  <p className="text-lg font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-2 text-sm text-slate-700">{item.betterFor}</p>
                  <p className="mt-3 text-sm font-semibold text-slate-800">Why choose</p>
                  <p className="mt-1 text-sm text-slate-700">{item.choose}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--worth bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if experimentation is a core practice and you need governance across web and product. Ensure analytics events and schemas are clean before rollout. Budget for implementation services and training to speed adoption.
            </p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Audit your tracking plan and events before implementation.",
                "Start with a few high-impact experiments to prove ROI.",
                "Set governance: roles, approvals, and naming conventions.",
                "Plan for SDK rollouts and kill switch policies with engineering.",
              ].map((tip) => (
                <div key={tip} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-600" />
                  <p className="text-sm">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--faq bg-white">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} FAQ</h2>
            <div className="mt-6 space-y-3">
              {faqs.map((item, idx) => (
                <AccordionItem key={item.q} question={item.q} answer={item.a} defaultOpen={idx === 0} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section--final bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-2xl font-bold text-slate-900">Final verdict: who is {toolName} best for?</h2>
              <p className="mt-3 text-slate-700">
                {toolName} is a leading choice for enterprises standardizing experimentation and progressive delivery across teams. If you are early in CRO or have limited traffic, it may be heavy. If you need governance, stats, and flags in one platform, {toolName} is a strong fit.
              </p>
              <div className="mt-5 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">
                  If {toolName} sounds right for your org, request a demo here:{" "}
                  <a className="text-indigo-700 hover:text-indigo-500" href={officialUrl}>
                    Visit {toolName}
                  </a>.
                </p>
                <div className="pt-2">
                  <Link
                    to="/tools"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
                  >
                    <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
                  </Link>
                </div>
              </div>
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

export default OptimizelyToolPage;
