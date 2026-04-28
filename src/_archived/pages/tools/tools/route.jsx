import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Folder, Crown, ArrowLeft, ChevronDown, BarChart3, Package, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Route";
const slug = "route";
const category = "Post-Purchase & Package Protection";
const shortPitch = "Route offers package protection, order tracking, and post-purchase engagement to improve customer experience after checkout.";
const pricingSummary = "Merchant pricing depends on volume and protection offerings; consumers often pay a small fee at checkout. Higher merchant tiers add branding, analytics, and support.";
const officialUrl = "https://www.route.com";
const ratingValue = 4.1;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/route.com",
  gradient: "from-sky-500 via-cyan-500 to-emerald-500",
  glow: "shadow-[0_20px_80px_rgba(14,165,233,0.22)]",
};

const alternatives = [
  { name: "AfterShip", slug: "aftership" },
  { name: "Narvar", slug: "narvar" },
  { name: "Malomo", slug: "malomo" },
  { name: "17Track", slug: "17track" },
  { name: "ReConvert", slug: "reconvert" },
];

const faqs = [
  { q: "What is Route?", a: "Route provides package protection, branded tracking, and post-purchase engagement tools for ecommerce merchants and shoppers." },
  { q: "Who is it for?", a: "Ecommerce brands that want to reduce WISMO tickets and provide protection/claims handling with branded tracking." },
  { q: "How is pricing structured?", a: "Consumers often pay a small fee for protection; merchants have pricing/terms based on volume and features." },
  { q: "Does it handle claims?", a: "Yes. Protection and claims handling are available; review policies and coverage details." },
  { q: "Is tracking branded?", a: "Yes. Branded tracking pages and post-purchase messaging can be customized." },
  { q: "Does it reduce support tickets?", a: "It can reduce WISMO by centralizing tracking and sending notifications; monitor results." },
  { q: "Does it integrate with ecommerce platforms?", a: "Yes. Integrations with platforms and carriers are available to sync orders and tracking." },
  { q: "Is human review needed?", a: "Yes. Set policies, monitor claims quality, and ensure messaging matches brand." },
];

function RouteToolPage() {
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
        "Route offers package protection, claims handling, and branded tracking to improve post-purchase experience and reduce WISMO tickets.",
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
      icon: <Package className="h-5 w-5 text-sky-500" />,
      title: "Package protection",
      body: "Offer shipment protection to customers at checkout with clear coverage rules.",
    },
    {
      icon: <Bell className="h-5 w-5 text-emerald-600" />,
      title: "Tracking & notifications",
      body: "Provide branded tracking and proactive updates to reduce WISMO tickets.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "Claims handling",
      body: "Route handles claims workflows; merchants should review SLAs and experience.",
    },
    {
      icon: <Folder className="h-5 w-5 text-slate-700" />,
      title: "Post-purchase engagement",
      body: "Use tracking pages for brand content, recommendations, and promotions.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-blue-600" />,
      title: "Analytics",
      body: "Monitor claim volumes, resolution times, and impact on CSAT/WISMO.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Integrations",
      body: "Connect ecommerce platforms and carriers to sync orders and statuses.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Route review: pricing, features, pros & cons, and alternatives to decide if it fits your post-purchase and protection stack."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-sky-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-emerald-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-sky-600" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-sky-100 blur-3xl" />
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
                  {toolName} adds protection and branded tracking to improve the post-purchase experience and reduce WISMO load.
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
              {toolName} is a post-purchase platform offering package protection, branded tracking, and notifications. It helps merchants handle delivery issues, engage customers after checkout, and reduce support burden.
            </p>
            <p className="mt-3 text-slate-700">Use it to set clear protection policies, keep customers informed, and add brand content to tracking pages.</p>
            <p className="mt-3 text-slate-700">Pair with customer support to monitor claims quality and response times.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for ecommerce brands aiming to reduce WISMO tickets and protect shipments.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Brands with high ticket volumes and support costs.",
                "Stores wanting branded tracking pages and notifications.",
                "Teams needing clearer claims handling for lost/damaged orders.",
                "Merchants wanting post-purchase upsells on tracking pages.",
                "Ops teams centralizing carrier updates and status checks.",
                "Businesses wanting to offer opt-in protection at checkout.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-500" />
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
              {toolName} focuses on package protection, branded tracking, notifications, claims handling, and analytics to improve post-purchase experience.
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
                  Merchant pricing depends on shipment volume and features; shoppers often pay a small checkout fee for protection. Higher tiers add branded experiences, analytics, and support.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Pilot on a subset of orders; measure WISMO reduction and customer satisfaction before expanding.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Pilot/Entry</td>
                    <td className="px-4 py-3">Testing protection</td>
                    <td className="px-4 py-3">Core protection, standard tracking</td>
                    <td className="px-4 py-3">Measure WISMO lift</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">Active stores</td>
                    <td className="px-4 py-3">Branded tracking, more notifications</td>
                    <td className="px-4 py-3">Fits most scaling brands</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">High volume & SLA</td>
                    <td className="px-4 py-3">Enhanced support, analytics, custom terms</td>
                    <td className="px-4 py-3">Choose if you need tighter SLAs</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Track protection revenue vs claims cost and CSAT; ensure policies are clear at checkout.</p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-sky-50 p-5 shadow-sm ring-1 ring-sky-100">
                <div className="flex items-center gap-2 text-sky-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Package protection with claims handling.</li>
                  <li>Branded tracking and notifications reduce WISMO.</li>
                  <li>Post-purchase pages for engagement and upsells.</li>
                  <li>Integrations with ecommerce platforms and carriers.</li>
                  <li>Analytics on claims and customer experience.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Customer-paid protection fees can affect conversion.</li>
                  <li>Claims experience must be monitored for quality.</li>
                  <li>Integration and branding setup take effort.</li>
                  <li>Not all issues are covered; set expectations clearly.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other post-purchase and tracking tools to match budget and experience goals.</p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} compares to other post-purchase platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs AfterShip</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/aftership">
                  View AfterShip
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                AfterShip focuses on tracking and notifications; {toolName} adds protection and claims handling. Choose based on whether protection or pure tracking is your priority.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Narvar</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/narvar">
                  View Narvar
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Narvar offers robust post-purchase experiences; {toolName} is strong on protection and claims. Pick based on whether you need insurance-like coverage or broader post-purchase CX tools.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth considering if you want package protection, branded tracking, and fewer WISMO tickets.
            </p>
            <p className="mt-3 text-slate-700">Watch claims experience and fee impact on conversion; align policies with support.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A strong post-purchase option for protection and tracking; best with clear policies and QA on claims.</p>
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
            <p>Choose {toolName} if you want to add protection and branded tracking to improve post-purchase experience and reduce support tickets.</p>
            <p>Consider AfterShip or Narvar for different blends of tracking and CX; use {toolName} when protection and claims handling are key.</p>
            <p>{toolName} can boost trust after checkout—keep policies transparent and monitor claims quality.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-sky-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default RouteToolPage;
