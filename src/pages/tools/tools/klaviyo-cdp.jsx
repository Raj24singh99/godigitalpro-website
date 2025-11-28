import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Klaviyo CDP";
const slug = "klaviyo-cdp";
const category = "CDP & Customer Data";
const shortPitch = "Klaviyo CDP unifies customer data for ecommerce brands, enabling better segmentation, personalization, and activation across channels.";
const pricingSummary =
  "Pricing scales by profiles and data volume. Higher tiers add advanced governance, identity resolution, and deeper activation limits.";
const officialUrl = "https://www.klaviyo.com";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/klaviyo.com",
  gradient: "from-emerald-500 via-teal-500 to-slate-700",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.24)]",
};

const alternatives = [
  { name: "Segment", slug: "segment" },
  { name: "mParticle", slug: "mparticle" },
  { name: "RudderStack", slug: "rudderstack" },
  { name: "Bloomreach Engagement", slug: "bloomreach" },
  { name: "Salesforce Data Cloud", slug: "salesforce-data-cloud" },
];

const faqs = [
  {
    q: "What is Klaviyo CDP?",
    a: "Klaviyo CDP is Klaviyo’s customer data platform for ecommerce brands, unifying events, profiles, and attributes to power segmentation and personalization.",
  },
  {
    q: "Who is Klaviyo CDP best for?",
    a: "Ecommerce and DTC brands already using Klaviyo for marketing who want deeper data unification and activation across channels.",
  },
  {
    q: "Does it include identity resolution?",
    a: "Yes. Identity resolution and profile stitching help combine customer interactions across devices and channels.",
  },
  {
    q: "How does pricing work?",
    a: "Pricing scales with the number of profiles and data volume. Higher tiers unlock more governance, integrations, and limits.",
  },
  {
    q: "Can I activate audiences to ads?",
    a: "Yes. Audiences can sync to ad platforms, email/SMS, and other destinations supported by Klaviyo.",
  },
  {
    q: "Is data governance included?",
    a: "Data validation, consent, and governance features improve on higher tiers; confirm coverage for your compliance needs.",
  },
  {
    q: "Does it integrate with ecommerce platforms?",
    a: "Klaviyo supports Shopify, BigCommerce, and other ecommerce tools. CDP adds broader data ingestion and activation routes.",
  },
  {
    q: "Do I still need analytics?",
    a: "Yes. Use analytics and experimentation tools alongside CDP to measure lift and refine audiences.",
  },
];

function KlaviyoCDPPage() {
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
        "Klaviyo CDP unifies customer data for ecommerce brands, improving segmentation, personalization, and activation across owned and paid channels.",
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
      title: "Unified profiles",
      body: "Combine events and attributes into a single customer view for accurate targeting.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Identity resolution",
      body: "Stitch identities across devices and channels to reduce duplication and improve attribution.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Segmentation & activation",
      body: "Build segments and sync to email, SMS, and ad destinations for coordinated messaging.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Data governance",
      body: "Validation, consent handling, and governance controls to keep data compliant.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Integrations",
      body: "Ecommerce, analytics, and ad platform integrations to ingest and activate data.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Analytics handoff",
      body: "Send audiences to measurement tools and experimentation stacks for lift analysis.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Klaviyo CDP review: pricing, features, pros & cons, and alternatives so ecommerce brands can choose the right customer data platform."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-teal-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-emerald-600" />
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
                  {toolName} helps ecommerce brands unify profiles and activate audiences across owned and paid channels for higher ROAS and LTV.
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
              {toolName} is a customer data platform focused on ecommerce. It unifies behavioral and transactional data into profiles to power segmentation, personalization, and measurement.
            </p>
            <p className="mt-3 text-slate-700">
              Use it to clean and activate data across email, SMS, and ads. Identity resolution and consent management help keep data trustworthy.
            </p>
            <p className="mt-3 text-slate-700">
              Pair with experimentation and analytics to measure lift on campaigns and audiences.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for ecommerce and DTC teams that want unified data and deeper audience activation without heavy engineering lift.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Shopify and DTC brands already using Klaviyo for email/SMS.",
                "Teams wanting identity resolution and unified profiles.",
                "Marketers building intent-driven audiences for ads and owned channels.",
                "Brands needing consent/governance aligned to privacy requirements.",
                "Growth teams pairing CDP data with experimentation.",
                "Operators seeking to reduce data silos across ecommerce and analytics tools.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
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
              {toolName} centers on unified profiles, identity resolution, and activation for ecommerce data across owned and paid channels.
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
                  {toolName} pricing scales by profiles and data volume. Higher tiers add advanced governance, identity resolution depth, and activation limits—expect costs to rise with audience size.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Estimate monthly active profiles and required destinations; start with a tier that covers governance and identity features you need.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Essentials</td>
                    <td className="px-4 py-3">Smaller brands</td>
                    <td className="px-4 py-3">Core profiles, basic activation</td>
                    <td className="px-4 py-3">Good for initial rollout</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">Growing DTC teams</td>
                    <td className="px-4 py-3">More profiles, identity, governance</td>
                    <td className="px-4 py-3">Watch data volume costs</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">High-volume brands</td>
                    <td className="px-4 py-3">Highest limits, advanced governance</td>
                    <td className="px-4 py-3">Plan for implementation</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Model profile growth, destination sync needs, and compliance requirements. Factor in data team time for implementation and QA.
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
                  <li>Unified profiles and identity stitching.</li>
                  <li>Strong for ecommerce activation with Klaviyo stack.</li>
                  <li>Governance and consent tools.</li>
                  <li>Audience syncs to owned and paid channels.</li>
                  <li>Tight Shopify and ecommerce integrations.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Costs rise with profiles and volume.</li>
                  <li>Less flexible than warehouse-native CDPs for custom data models.</li>
                  <li>Implementation and data QA still required.</li>
                  <li>Best fit if you already use Klaviyo for messaging.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other CDPs to match your data volume, governance needs, and channel activation requirements.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
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
            <p className="text-slate-700">See how {toolName} compares with other CDPs.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Segment</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/segment">
                  View Segment
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Segment is a broad CDP with deep integration options; {toolName} is optimized for ecommerce and Klaviyo activation. Choose based on custom data model needs vs. fast ecommerce activation.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs mParticle</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/mparticle">
                  View mParticle
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                mParticle serves enterprise use cases with broad SDK coverage. {toolName} focuses on ecommerce data and Klaviyo-native activation. Pick mParticle for complex, multi-app data; pick {toolName} for ecommerce-first teams.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want ecommerce-focused identity resolution and activation tied to Klaviyo channels, and you have clear data governance needs.
            </p>
            <p className="mt-3 text-slate-700">
              Budget for data ingestion, QA, and consent management. Align growth and data teams to measure lift from new audiences.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A strong CDP choice for Klaviyo-centric ecommerce brands; ensure profile volume and governance fit your budget and compliance goals.
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
              Choose {toolName} if you want unified ecommerce data, identity resolution, and activation tied closely to Klaviyo email/SMS and ad destinations.
            </p>
            <p>
              Consider Segment or mParticle for broader customization; keep {toolName} for fast ecommerce activation with built-in governance.
            </p>
            <p>{toolName} helps brands boost ROAS and LTV by unifying data—success requires solid implementation, QA, and measurement.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-emerald-700 hover:text-emerald-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-emerald-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default KlaviyoCDPPage;
