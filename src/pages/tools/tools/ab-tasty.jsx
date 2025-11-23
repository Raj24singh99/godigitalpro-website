import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "AB Tasty";
const slug = "ab-tasty";
const category = "CRO & Experimentation";
const shortPitch =
  "AB Tasty is an experimentation and personalization platform for marketers to A/B test, launch experiences, and optimize conversions without heavy developer lift.";
const pricingSummary =
  "Pricing is quote-based. Plans typically scale by traffic, experiment volume, and feature access (personalization, server-side testing, flags).";
const officialUrl = "https://www.abtasty.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/abtasty.com",
  gradient: "from-indigo-500 via-purple-500 to-pink-500",
  glow: "shadow-[0_20px_80px_rgba(99,102,241,0.28)]",
};

const alternatives = [
  { name: "VWO", slug: "vwo" },
  { name: "Optimizely", slug: "optimizely" },
  { name: "Convert.com", slug: "convert-com" },
  { name: "Omniconvert", slug: "omniconvert" },
  { name: "Hotjar", slug: "hotjar" },
];

const faqs = [
  {
    q: "What does AB Tasty do?",
    a: "AB Tasty provides A/B and multivariate testing, personalization, feature flags, and rollouts so teams can optimize conversion funnels and launch product experiments.",
  },
  {
    q: "Do marketers need engineers to run AB tests?",
    a: "Marketers can launch client-side tests with visual editors and widgets. Engineering support is needed for complex server-side tests, flags, and event instrumentation.",
  },
  {
    q: "Does AB Tasty support feature flags?",
    a: "Yes. Feature flags and progressive rollouts let product teams ship safely, control exposure, and measure impact with built-in analytics.",
  },
  {
    q: "Is AB Tasty privacy compliant?",
    a: "AB Tasty offers consent management options, data residency choices, and supports compliance with GDPR/CCPA. Work with your legal team to configure settings.",
  },
  {
    q: "Can AB Tasty personalize experiences?",
    a: "Yes. You can target segments by behavior, tech, geolocation, or events and deliver personalized content, banners, and messages.",
  },
  {
    q: "Does AB Tasty integrate with analytics tools?",
    a: "It integrates with Google Analytics, Adobe Analytics, Segment, mParticle, Mixpanel, and data warehouses to sync audiences and results.",
  },
  {
    q: "How is pricing structured?",
    a: "Pricing is custom based on monthly traffic, number of workspaces, and feature modules (client-side, server-side, flags, personalization). Request a quote for specifics.",
  },
  {
    q: "Who is AB Tasty best for?",
    a: "Growth, marketing, and product teams at mid-market and enterprise companies that need controlled experimentation with non-technical launch options.",
  },
];

function AbTastyToolPage() {
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
        "AB Tasty blends marketer-friendly editors with deeper experimentation, flags, and personalization. It is a strong pick for teams that want velocity without giving up control or analytics rigor.",
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
      title: "Visual A/B testing",
      body: "Launch client-side experiments with a visual editor, templates, and QA previews to move faster without heavy code changes.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Feature flags & rollouts",
      body: "Control exposure, ship gradually, and roll back instantly with server-side flags tied to experiment results.",
    },
    {
      icon: <Plug className="h-5 w-5 text-indigo-500" />,
      title: "Personalization",
      body: "Target experiences by behavior, device, location, referrer, or custom events to lift engagement and conversion.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Governance & privacy",
      body: "Role-based access, approval flows, consent tools, and data residency options help teams stay compliant.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Data & integrations",
      body: "Sync audiences and results with GA, Adobe, Segment, mParticle, Mixpanel, and data warehouses.",
    },
    {
      icon: <Folder className="h-5 w-5 text-pink-500" />,
      title: "Widgets & on-site banners",
      body: "Deploy banners, popups, and messages to promote offers, collect feedback, or guide users through funnels.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="AB Tasty review for experimentation teams: pricing, features, pros & cons, and alternatives to help you choose the right CRO and feature flag platform."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-indigo-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-pink-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-indigo-500" />
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
                  {toolName} combines marketer-friendly launches with the control product teams need for safe experimentation and personalization.
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
              {toolName} is an {category.toLowerCase()} platform that lets teams experiment on pages, apps, and features. It combines client-side testing with server-side flags so marketing and product teams can ship safely.
            </p>
            <p className="mt-3 text-slate-700">
              Use it to iterate on funnels, personalize offers, and validate ideas with statistically sound experiments. Built-in QA, approvals, and targeting help teams move fast without chaos.
            </p>
            <p className="mt-3 text-slate-700">
              Integrations with analytics and CDPs keep data consistent while you target segments and measure lift across your stack.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams that need experimentation velocity with governance.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Growth and CRO teams iterating on landing pages and checkout flows.",
                "Product teams rolling out features with flags and staged rollouts.",
                "Marketers who need visual editors to launch tests without deep code changes.",
                "Ecommerce teams personalizing offers by behavior, traffic source, or audience.",
                "Ops and compliance teams that require approvals, roles, and consent management.",
                "Data teams who want experiment data synced to analytics and warehouses.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-indigo-400" />
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
              {toolName} focuses on fast experiments, safe rollouts, and personalization that aligns to your analytics stack.
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
                  {toolName} is custom priced by traffic, experiment volume, and modules (client-side, server-side, flags, personalization). Expect annual contracts with implementation support.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with client-side testing; add flags/personalization as you mature. Ask for traffic-based pricing tiers.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Tier</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key inclusions</th>
                    <th className="px-4 py-3">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Core testing</td>
                    <td className="px-4 py-3">Web CRO teams</td>
                    <td className="px-4 py-3">Visual editor, client-side A/B, basic widgets</td>
                    <td className="px-4 py-3">Priced by traffic and domains</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Personalization</td>
                    <td className="px-4 py-3">Marketing/merchandising teams</td>
                    <td className="px-4 py-3">Segmentation, targeting rules, dynamic content</td>
                    <td className="px-4 py-3">Add-on to core testing</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Server-side & flags</td>
                    <td className="px-4 py-3">Product & engineering</td>
                    <td className="px-4 py-3">Feature flags, rollouts, server-side experiments</td>
                    <td className="px-4 py-3">Requires implementation time</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Large/global teams</td>
                    <td className="px-4 py-3">Governance, SSO, SLAs, custom onboarding</td>
                    <td className="px-4 py-3">Custom contract</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Ask for transparent traffic bands and proof-of-value timelines. Clarify implementation support for flags and server-side testing.
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
                  <li>Marketer-friendly visual editor with QA and approvals.</li>
                  <li>Feature flags and server-side testing for product teams.</li>
                  <li>Personalization and segmentation built in.</li>
                  <li>Strong integrations with analytics and CDPs.</li>
                  <li>Governance options for roles, approvals, and consent.</li>
                  <li>Supports both web experiments and on-site messaging.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Pricing is custom; smaller teams may find entry costs high.</li>
                  <li>Advanced server-side use cases need engineering time.</li>
                  <li>Heavy personalization and flags require disciplined analytics.</li>
                  <li>Contracting and implementation can take time for enterprises.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other experimentation and personalization tools to pick the right fit for budget, governance, and analytics depth.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-indigo-600 hover:text-indigo-500" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} compares with other CRO and experimentation leaders.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs VWO</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/compare/vwo-vs-hotjar-vs-crazy-egg">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                VWO is strong for CRO suites and behavior analytics; {toolName} leans into personalization and flags alongside testing. Choose based on whether you need a fuller suite or deeper targeting and rollouts.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Optimizely</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/optimizely">
                  View Optimizely
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Optimizely offers a broad digital experience platform; {toolName} prioritizes marketer-led launches and straightforward personalization. Consider your need for platform breadth versus speed and usability.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it for teams that want experimentation velocity plus feature flags and personalization in one stack. It fits ecommerce and product-led companies that run frequent tests and need governance.
            </p>
            <p className="mt-3 text-slate-700">
              If you need built-in analytics and behavior tools, evaluate VWO or FullStory pairings. For smaller budgets, lighter tools may be cheaper but less flexible.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A solid choice when you need both marketer-friendly testing and product-grade flags with integrations to your analytics sources of truth.
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
              Choose {toolName} if you need marketer-friendly A/B tests plus feature flags and personalization under one roof. It works well for CRO, growth, and product teams that collaborate closely.
            </p>
            <p>
              Consider VWO or Convert.com if you need deeper analytics suites, or Optimizely if you want a broader digital experience platform. Pair {toolName} with your analytics/CDP for best data quality.
            </p>
            <p>{toolName} supports disciplined experimentation while keeping launch velocity high.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-indigo-700 hover:text-indigo-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-indigo-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default AbTastyToolPage;
