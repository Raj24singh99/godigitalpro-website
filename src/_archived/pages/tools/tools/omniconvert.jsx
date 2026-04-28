import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Omniconvert";
const slug = "omniconvert";
const category = "CRO & Personalization";
const shortPitch = "Omniconvert provides A/B testing, surveys, personalization, and RFM analytics to improve ecommerce conversion and retention.";
const pricingSummary = "Pricing scales by traffic and modules. Higher tiers add RFM segmentation, customer value analytics, and advanced personalization.";
const officialUrl = "https://www.omniconvert.com";
const ratingValue = 4.1;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/omniconvert.com",
  gradient: "from-indigo-500 via-sky-500 to-emerald-500",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.22)]",
};

const alternatives = [
  { name: "Optimizely", slug: "optimizely" },
  { name: "VWO", slug: "vwo" },
  { name: "Dynamic Yield", slug: "dynamicyield" },
  { name: "Klaviyo CDP", slug: "klaviyo-cdp" },
];

const faqs = [
  { q: "Does Omniconvert work on Shopify?", a: "Yes. It supports Shopify and other ecommerce platforms through scripts and integrations." },
  { q: "What is RFM?", a: "Recency, Frequency, Monetary value—used to segment customers by purchase behavior for targeting." },
  { q: "Can I run surveys?", a: "Yes. Onsite surveys capture feedback and can trigger based on behavior." },
  { q: "Is coding required?", a: "Most setups are visual; some personalization or widget styling may need light dev help." },
  { q: "Does it integrate with ESPs?", a: "Yes. You can sync segments to email/SMS platforms; confirm specific connectors." },
  { q: "How is pricing structured?", a: "Pricing is traffic-based and module-based. Clarify traffic bands, overages, and included modules in your quote." },
  { q: "Is there a trial?", a: "Trials or demos are available; ask for a proof-of-value on key pages before committing." },
  { q: "Who is it best for?", a: "Ecommerce teams that want CRO plus RFM-driven personalization in one tool." },
];

function OmniconvertToolPage() {
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
        "Omniconvert combines experimentation, surveys, personalization, and RFM analytics for ecommerce teams that want to optimize both acquisition and retention.",
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
    { icon: <Sparkles className="h-5 w-5 text-indigo-500" />, title: "A/B testing", body: "Test layouts, messages, and offers across PDP, cart, and landing pages." },
    { icon: <Folder className="h-5 w-5 text-emerald-500" />, title: "Personalization", body: "Show tailored content, popups, and recommendations using segments and RFM data." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "RFM segmentation", body: "Identify high-value, at-risk, and new customers to target offers and experiences." },
    { icon: <Rocket className="h-5 w-5 text-amber-500" />, title: "Surveys & feedback", body: "Collect onsite surveys to uncover friction and guide experiments." },
    { icon: <Plug className="h-5 w-5 text-purple-500" />, title: "Integrations", body: "Connect ecommerce platforms, ESPs, and analytics to sync segments and results." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Governance", body: "Role controls and QA tools to keep experiments safe in production." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Omniconvert review: pricing, features, pros & cons, and alternatives to decide if its CRO and RFM platform fits your store."
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-emerald-100 blur-3xl" />
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
                  {toolName} unifies testing, personalization, surveys, and RFM analytics so you can act on both behavioral and value-based segments.
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
              {toolName} helps ecommerce teams improve conversion and retention. It includes onsite A/B testing, overlays, product recommendations, surveys, and personalization based on behavioral and RFM segments.
            </p>
            <p className="mt-3 text-slate-700">
              The RFM module segments customers by recency, frequency, and monetary value, then feeds campaigns and experiments. Surveys capture qualitative feedback to pair with quantitative results, letting you test hypotheses with real user input.
            </p>
            <p className="mt-3 text-slate-700">
              It is best for brands that want a single tool for CRO and retention analytics. If you only need basic testing, simpler tools may be cheaper; if you need enterprise orchestration, consider adding a CDP.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for ecommerce teams wanting CRO plus RFM-driven personalization.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "DTC brands improving PDP/cart conversion and repeat rate.",
                "Growth teams running onsite experiments and overlays.",
                "Lifecycle marketers wanting RFM insights for campaigns.",
                "UX teams collecting onsite surveys to find friction points.",
                "Merchandisers testing recommendations and badges.",
                "Teams bridging acquisition tests with retention analytics.",
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
              The platform blends experimentation, surveys, and RFM analytics so you can act on both behavioral and value-based segments.
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
              Pricing is traffic- and module-based. Clarify which modules you need (testing, personalization, RFM) and the traffic band. Ask about overages and whether onboarding services are included.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                { name: "Testing/Personalization", price: "By traffic", detail: "A/B tests, overlays, recommendations, targeting", bestFor: "Teams starting with CRO" },
                { name: "RFM & Retention", price: "Module add-on", detail: "RFM analytics, segments, sync to campaigns", bestFor: "Teams focused on repeat revenue" },
                { name: "Enterprise", price: "Custom", detail: "Custom SLAs, support, advanced integrations", bestFor: "High-traffic or multi-brand setups" },
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
                Align experiments with high-impact pages first (PDP, cart). Model expected uplift and traffic before committing to higher traffic bands or multi-module packages.
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
                  <li>Combines CRO, personalization, and RFM analytics in one tool.</li>
                  <li>Onsite surveys pair qualitative insight with test data.</li>
                  <li>RFM helps prioritize offers for high-value or at-risk segments.</li>
                  <li>Good fit for ecommerce teams bridging acquisition and retention.</li>
                  <li>QA and roles help control test quality.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <p className="text-lg font-semibold text-rose-700">Cons</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>Traffic-based pricing can rise for high-volume sites.</li>
                  <li>Learning curve for teams new to RFM segmentation.</li>
                  <li>Widget styling may need dev tweaks to match brand.</li>
                  <li>Not as broad as a full CDP for cross-channel orchestration.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives</h2>
            <p className="mt-3 text-slate-700">Consider these if you need different price points, channel coverage, or guardrails:</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-xs text-slate-600">{alt.tagline || "Personalization/CRO alternative"}</p>
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
            <h2 className="text-2xl font-bold text-slate-900">{toolName} vs other personalization tools</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                { title: "Omniconvert vs VWO", betterFor: "VWO offers broad CRO features; Omniconvert adds RFM analytics for retention-focused teams.", choose: "Pick Omniconvert if RFM segmentation is key. Pick VWO for a general CRO stack." },
                { title: "Omniconvert vs Optimizely", betterFor: "Optimizely excels at experimentation at scale; Omniconvert blends testing with ecommerce RFM insights.", choose: "Pick Omniconvert for ecommerce-focused RFM + CRO. Pick Optimizely for enterprise governance and scale." },
                { title: "Omniconvert vs Dynamic Yield", betterFor: "Dynamic Yield is strong for merchandising depth; Omniconvert is lighter and ties closely to RFM for repeat revenue.", choose: "Pick Omniconvert if you want RFM-led personalization. Pick Dynamic Yield for deep merchandising rules." },
                { title: "Omniconvert vs Klaviyo CDP", betterFor: "Klaviyo centralizes messaging and profiles; Omniconvert is focused on onsite CRO and RFM insights.", choose: "Pick Omniconvert for onsite experiments and RFM. Pair with Klaviyo for lifecycle messaging." },
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
              {toolName} is worth it if you want CRO plus retention analytics without separate tools. Start with high-impact placements, align RFM segments with lifecycle messaging, and measure uplift to justify traffic costs.
            </p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Start with PDP and cart experiments before spreading budget thin.",
                "Define RFM-based offers for high-value and at-risk segments.",
                "Use surveys to find friction, then test fixes and personalize for key segments.",
                "Monitor traffic costs and prioritize high-impact experiments to justify spend.",
              ].map((tip) => (
                <div key={tip} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
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
                {toolName} fits ecommerce teams who want experimentation, personalization, and RFM insights in one platform. It bridges acquisition and retention by pairing tests with value-based segments. If you only need basic CRO or require full CDP orchestration, consider lighter tools or pairing with a CDP.
              </p>
              <div className="mt-5 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">
                  If {toolName} sounds right for your store, explore a proof-of-value here:{" "}
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

export default OmniconvertToolPage;
