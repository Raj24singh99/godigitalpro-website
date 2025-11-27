import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Judge.me";
const slug = "judge-me";
const category = "Ecommerce Reviews";
const shortPitch = "Judge.me is a reviews and UGC platform for ecommerce stores, offering widgets, email/SMS requests, and SEO-friendly displays.";
const pricingSummary = "Free and paid plans. Paid tier adds advanced widgets, integrations, white-labeling, and richer automation controls.";
const officialUrl = "https://judge.me";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/judge.me",
  gradient: "from-amber-500 via-emerald-500 to-teal-600",
  glow: "shadow-[0_20px_80px_rgba(5,150,105,0.24)]",
};

const alternatives = [
  { name: "Yotpo", slug: "yotpo" },
  { name: "Okendo", slug: "okendo" },
  { name: "Loox", slug: "loox" },
  { name: "Stamped.io", slug: "stamped-io" },
  { name: "Junip", slug: "junip-reviews" },
];

const faqs = [
  { q: "What is Judge.me?", a: "Judge.me is a reviews and UGC platform for ecommerce, with widgets, email/SMS requests, and SEO-friendly displays." },
  { q: "Who is it for?", a: "Ecommerce brands wanting to collect and display reviews and photos with minimal cost and fast setup." },
  {
    q: "Does Judge.me have a free plan?",
    a: "Yes. A free plan exists with core reviews; the paid plan adds advanced widgets, integrations, and customization.",
  },
  {
    q: "How is pricing structured?",
    a: "Free tier plus a paid tier (often per store). Paid unlocks white-labeling, more automation, and integrations.",
  },
  { q: "Are review requests automated?", a: "Yes. Email and SMS requests can be automated; ensure compliance with messaging rules." },
  { q: "Does it support photos and videos?", a: "Photo/video reviews are supported; moderate submissions to protect brand trust." },
  { q: "Is it SEO-friendly?", a: "Widgets can output structured data for SEO. Configure properly to avoid duplication and follow search guidelines." },
  { q: "Can it integrate with other apps?", a: "Integrations exist for Shopify, WooCommerce, Klaviyo, and more; check plan eligibility." },
];

function JudgeMeToolPage() {
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
        "Judge.me is a budget-friendly reviews and UGC platform for ecommerce. It’s strong on value and simplicity; success depends on good moderation and request flows.",
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
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "Review widgets", body: "Display reviews, photos, and Q&A with customizable widgets." },
    { icon: <Rocket className="h-5 w-5 text-emerald-500" />, title: "Request automation", body: "Send automated email/SMS review requests post-purchase." },
    { icon: <Folder className="h-5 w-5 text-teal-500" />, title: "Photo/video UGC", body: "Collect media-rich reviews; moderate to protect brand trust." },
    { icon: <Plug className="h-5 w-5 text-blue-500" />, title: "Integrations", body: "Works with Shopify, WooCommerce, Klaviyo, and more for synced data." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "SEO snippets", body: "Structured data and SEO-friendly markup to surface ratings in search." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Moderation controls", body: "Filters, approvals, and flags help keep reviews high quality." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Judge.me review: pricing, features, pros & cons, and alternatives to choose the right ecommerce reviews platform."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-amber-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-emerald-200/25 blur-3xl" />
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
                  {toolName} makes it easy to gather and display reviews—set up moderation, request automations, and SEO-friendly widgets carefully.
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
              {toolName} is a reviews and UGC app for ecommerce stores. It helps collect, moderate, and display reviews with SEO-friendly widgets, making social proof visible across your site.
            </p>
            <p className="mt-3 text-slate-700">Use it to automate review requests and showcase ratings. Moderate submissions and follow messaging/compliance rules.</p>
            <p className="mt-3 text-slate-700">It’s popular for budget-friendly pricing with features that rival pricier review platforms.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for ecommerce brands that want social proof without heavy costs.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Shopify/WooCommerce stores needing fast review setup.",
                "Brands wanting budget-friendly UGC with automation.",
                "Teams that will moderate photo/video submissions.",
                "Merchants seeking SEO-friendly review snippets.",
                "Operators integrating reviews with email/SMS flows.",
                "Stores that want customizable widgets and white-labeling.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on collecting, moderating, and displaying reviews and UGC for ecommerce stores.</p>
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
                  {toolName} has a free plan with core reviews and a paid tier that adds advanced widgets, integrations, white-labeling, and richer automation. Pricing is per store.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on free to test collection and display; upgrade if you need advanced widgets, branding, or integrations.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Free</td>
                    <td className="px-4 py-3">Testing/basic proof</td>
                    <td className="px-4 py-3">Core reviews, basic widgets</td>
                    <td className="px-4 py-3">Great to start collecting</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Awesome/Paid</td>
                    <td className="px-4 py-3">Growing stores</td>
                    <td className="px-4 py-3">Advanced widgets, photos/video, white-label</td>
                    <td className="px-4 py-3">Most popular tier</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Custom/Plus</td>
                    <td className="px-4 py-3">Higher volume brands</td>
                    <td className="px-4 py-3">Custom terms, deeper integrations/support</td>
                    <td className="px-4 py-3">Align on SLA and needs</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Set up moderation rules and messaging compliance. Map review requests into your post-purchase flow to maximize response rates.</p>
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
                  <li>Budget-friendly pricing with strong features.</li>
                  <li>Photo/video reviews and customizable widgets.</li>
                  <li>Email/SMS automation for requests.</li>
                  <li>SEO-friendly snippets and schema options.</li>
                  <li>Integrations for Shopify, WooCommerce, Klaviyo, and more.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Manual moderation needed to keep quality high.</li>
                  <li>Single paid tier may require add-ons for edge needs.</li>
                  <li>Compliance and deliverability need ongoing monitoring.</li>
                  <li>Design customization can require theme tweaks.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other ecommerce review platforms.</p>
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
            <p className="text-slate-700">See how {toolName} compares to other review platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Yotpo</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/yotpo">
                  View Yotpo
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Yotpo has broader marketing suite add-ons; {toolName} focuses on reviews and value pricing. Choose based on depth of marketing features vs cost simplicity.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Okendo</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/okendo">
                  View Okendo
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Okendo offers granular attributes and UGC features; {toolName} is simpler and budget-friendly. Pick based on customization depth vs simplicity and cost.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth using if you want affordable, feature-rich reviews and UGC with simple setup. It fits brands willing to moderate and manage request flows.
            </p>
            <p className="mt-3 text-slate-700">Success depends on good timing for requests, strong moderation, and SEO-friendly widget configuration.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Great value for ecommerce reviews; pair with solid moderation and compliance practices.
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
            <p>Choose {toolName} if you want affordable reviews and UGC with automated requests and customizable widgets.</p>
            <p>Consider Yotpo or Okendo for deeper marketing add-ons or advanced attributes; use {toolName} when value and simplicity matter.</p>
            <p>{toolName} delivers strong social proof when combined with good moderation and SEO setup.</p>
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

export default JudgeMeToolPage;
