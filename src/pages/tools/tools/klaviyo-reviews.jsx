import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Klaviyo Reviews";
const slug = "klaviyo-reviews";
const category = "Ecommerce Reviews & UGC";
const shortPitch = "Klaviyo Reviews lets ecommerce brands collect, moderate, and display product reviews and UGC directly within the Klaviyo platform.";
const pricingSummary =
  "Pricing aligns with Klaviyo plans and profile counts. Higher tiers add advanced widgets, syndication, and moderation controls.";
const officialUrl = "https://www.klaviyo.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/klaviyo.com",
  gradient: "from-emerald-500 via-teal-500 to-blue-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.24)]",
};

const alternatives = [
  { name: "Junip", slug: "junip-reviews" },
  { name: "Okendo", slug: "okendo" },
  { name: "Stamped.io", slug: "stamped-io" },
  { name: "Yotpo", slug: "yotpo" },
  { name: "Loox", slug: "loox" },
];

const faqs = [
  {
    q: "What is Klaviyo Reviews?",
    a: "Klaviyo Reviews is a reviews and UGC product inside Klaviyo, letting brands collect and publish product reviews, photos, and ratings.",
  },
  {
    q: "Who is Klaviyo Reviews best for?",
    a: "Shopify and ecommerce brands already using Klaviyo email/SMS who want reviews in the same platform.",
  },
  {
    q: "Does it support photos and videos?",
    a: "Yes. Customers can add UGC; moderation tools help keep content on-brand.",
  },
  {
    q: "How does pricing work?",
    a: "Pricing is tied to Klaviyo plans and profile counts; higher tiers add advanced widgets and syndication.",
  },
  {
    q: "Can I trigger review requests via email/SMS?",
    a: "Yes. Requests can run through Klaviyo flows for post-purchase outreach.",
  },
  {
    q: "Does it integrate with ecommerce platforms?",
    a: "Klaviyo integrates with Shopify and other ecommerce tools, making installation and data sync straightforward.",
  },
  {
    q: "Is migration supported?",
    a: "Import options are available; confirm coverage for your current reviews provider.",
  },
  {
    q: "Do I still need moderation?",
    a: "Yes. Moderation and compliance review remain essential to protect brand trust.",
  },
];

function KlaviyoReviewsPage() {
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
        "Klaviyo Reviews brings review collection and display into the Klaviyo platform, simplifying flows and keeping data in one place for ecommerce brands.",
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
      title: "Native to Klaviyo",
      body: "Collect reviews within Klaviyo, keeping data and flows in one platform.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Email/SMS requests",
      body: "Trigger review requests via post-purchase flows using email and SMS.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "UGC support",
      body: "Photo and video uploads with moderation to keep content on-brand.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Moderation & compliance",
      body: "Approve, filter, and manage reviews to protect trust and policy adherence.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Widgets & display",
      body: "Customizable widgets for PDPs and PLPs to highlight ratings and UGC.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Integrations",
      body: "Connect with Shopify and Klaviyo data for targeting and personalization.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Klaviyo Reviews: pricing, features, pros & cons, and alternatives so you can choose the right reviews tool for your ecommerce store."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-blue-200/25 blur-3xl" />
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
                  {toolName} keeps reviews, UGC, and outreach inside Klaviyo, simplifying data and workflows for ecommerce marketers.
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
              {toolName} brings review collection, moderation, and display into Klaviyo. Brands can trigger requests via Klaviyo flows, collect UGC, and showcase ratings on product pages.
            </p>
            <p className="mt-3 text-slate-700">
              Use it to keep reviews data aligned with your marketing stack, enabling better personalization and targeting based on purchase history and engagement.
            </p>
            <p className="mt-3 text-slate-700">
              Integration with ecommerce platforms makes setup straightforward for Shopify and other stores already using Klaviyo.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for Shopify and ecommerce brands already invested in Klaviyo for messaging and wanting reviews in the same stack.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Brands running post-purchase flows in Klaviyo email/SMS.",
                "Stores wanting UGC and reviews without adding another vendor.",
                "Teams that need unified data for personalization and segmentation.",
                "Merchants seeking lightweight setup via Shopify integrations.",
                "Marketers who value combined reporting across messaging and reviews.",
                "Teams planning to migrate from existing reviews tools into Klaviyo.",
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
              {toolName} focuses on review capture, UGC, and display with tight integration to Klaviyo email/SMS flows and Shopify data.
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
                  {toolName} pricing ties to Klaviyo plans and profile counts. Expect higher costs for advanced widgets, syndication, and larger profile volumes.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">If you already use Klaviyo, start with the plan that fits your profiles; evaluate widget and syndication needs before upgrading.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Included/Starter</td>
                    <td className="px-4 py-3">Early testing</td>
                    <td className="px-4 py-3">Core review capture, basic widgets</td>
                    <td className="px-4 py-3">Good for pilots</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">Growing stores</td>
                    <td className="px-4 py-3">Photo/video UGC, more customization</td>
                    <td className="px-4 py-3">Watch profile-based costs</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Advanced/Plus</td>
                    <td className="px-4 py-3">Higher volume</td>
                    <td className="px-4 py-3">Syndication, advanced widgets, support</td>
                    <td className="px-4 py-3">Plan migration and QA</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Factor in profile counts, SMS/email volume for requests, and migration effort from your current reviews tool.
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
                  <li>Native to Klaviyo—unified data and flows.</li>
                  <li>Email/SMS review requests without extra tools.</li>
                  <li>UGC support with moderation controls.</li>
                  <li>Widgets for PDPs/PLPs, likely fast to deploy.</li>
                  <li>Imports to migrate existing reviews.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Feature depth may trail dedicated review platforms.</li>
                  <li>Pricing tied to Klaviyo profiles and usage.</li>
                  <li>Migration requires QA to preserve social proof.</li>
                  <li>Moderation effort remains necessary.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} to other review platforms to match your widget needs, moderation depth, and pricing preferences.
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
            <p className="text-slate-700">See how {toolName} compares with other review platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Junip</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/junip-reviews">
                  View Junip
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Junip focuses on performance and SMS review requests; {toolName} lives inside Klaviyo. Choose Junip for speed and standalone strength, {toolName} for Klaviyo-native workflows.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Yotpo</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/yotpo">
                  View Yotpo
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Yotpo offers a broader marketing suite (loyalty, SMS). {toolName} keeps reviews inside Klaviyo. Pick Yotpo for an all-in-one suite; pick {toolName} for Klaviyo simplicity.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want reviews, UGC, and outreach managed inside Klaviyo, reducing tool sprawl for Shopify and ecommerce teams.
            </p>
            <p className="mt-3 text-slate-700">
              Budget for profile-based pricing and migration; keep moderation and compliance processes in place to protect brand trust.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A solid choice for Klaviyo-centric brands that want reviews and UGC aligned with their messaging stack.
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
              Choose {toolName} if you want reviews, UGC, and review outreach run inside Klaviyo with tight Shopify data alignment.
            </p>
            <p>
              Consider Junip for performance-first widgets or Yotpo for an all-in-one suite; keep {toolName} for simplicity within your Klaviyo stack.
            </p>
            <p>{toolName} reduces vendor sprawl and keeps social proof connected to your messaging—moderation and migration planning remain key.</p>
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

export default KlaviyoReviewsPage;
