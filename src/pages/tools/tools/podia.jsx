import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, BookOpen, Users, BarChart2, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Podia";
const slug = "podia";
const category = "Course & Membership Platform";
const shortPitch =
  "Podia is an all-in-one platform for selling courses, digital downloads, and memberships with built-in email, checkout, and community tools that stay simple for solo creators.";
const pricingSummary = "Free plan with transaction fees, then paid plans from about $9–$39/month that remove limits and unlock advanced features.";
const officialUrl = "https://www.podia.com";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/podia.com",
  gradient: "from-purple-500 via-pink-500 to-rose-500",
  glow: "shadow-[0_20px_80px_rgba(217,70,239,0.25)]",
};

const alternatives = [
  { name: "Kajabi", slug: "kajabi" },
  { name: "Teachable", slug: "teachable" },
  { name: "Thinkific", slug: "thinkific" },
  { name: "Gumroad", slug: "gumroad" },
  { name: "ConvertKit", slug: "convertkit" },
];

const faqs = [
  { q: "Is Podia free?", a: "Podia has a Free plan with 10% transaction fees and core features. Paid plans reduce fees, unlock embeds, integrations, and advanced site tools." },
  { q: "What can I sell on Podia?", a: "Courses, digital downloads, memberships, coaching, bundles, and community access—all with built-in checkout and email." },
  { q: "Does Podia include email marketing?", a: "Yes. Podia has built-in email for broadcasts and simple automation. For advanced flows, you can integrate other email tools." },
  { q: "Can I host a community in Podia?", a: "Yes. Podia supports community spaces, posts, and memberships so you can keep content, payments, and engagement in one place." },
  { q: "How is Podia different from Kajabi?", a: "Podia is simpler and more affordable. Kajabi offers deeper funnels, automation, and advanced site control at a higher price." },
  { q: "Does Podia charge transaction fees?", a: "Only the Free plan has 10% fees. Paid plans remove or reduce Podia fees; payment processors still charge their standard rate." },
  { q: "Does Podia handle VAT?", a: "Yes. Podia can collect EU VAT and manage tax calculations at checkout." },
  { q: "Can I use my own domain?", a: "Yes. Paid plans allow custom domains and full site branding so your courses and communities live under your brand." },
];

export default function ToolPage() {
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
        "Podia simplifies selling courses, downloads, and memberships with built-in checkout, email, and community. It’s affordable and fast to launch, with fewer knobs than Kajabi or Thinkific.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };

  const featureBlocks = [
    {
      icon: <BookOpen className="h-5 w-5 text-purple-500" />,
      title: "Courses, downloads, and bundles",
      body: "Sell courses, ebooks, templates, and bundles in one checkout with simple setup, drip content, and upsells.",
    },
    {
      icon: <Users className="h-5 w-5 text-rose-500" />,
      title: "Memberships and community",
      body: "Host communities with posts and replies, gate content by tier, and keep discussions close to your products.",
    },
    {
      icon: <Plug className="h-5 w-5 text-pink-500" />,
      title: "Built-in email and automations",
      body: "Send broadcasts and simple sequences without extra tools; tag buyers and trigger messages when they purchase or enroll.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "Clean storefront and checkout",
      body: "Create sales pages, embed buy buttons, and run coupons or payment plans with a fast, mobile-friendly checkout.",
    },
    {
      icon: <BarChart2 className="h-5 w-5 text-emerald-600" />,
      title: "Analytics and payouts",
      body: "Track sales, subscribers, and engagement. Connect Stripe/PayPal for direct payouts without waiting for platform disbursements.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Taxes and compliance",
      body: "EU VAT collection, customer receipts, and policy pages help keep your store compliant without extra add-ons.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Honest Podia review for 2025 covering pricing, features, pros & cons, and the best alternatives like Kajabi, Teachable, and Thinkific."
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
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-rose-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-purple-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-rose-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-purple-600" />
                {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">{toolName} Review (2025): Pricing, Pros & Cons</h1>
              <p className="mt-4 text-lg text-slate-600">{shortPitch}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-700">
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Our rating: {ratingValue}/5</span>
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Reviewed by GoDigitalPro • Updated May 2025</span>
              </div>
              <p className="mt-4 text-slate-700">{pricingSummary}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="btn btn-primary bg-purple-600 text-white ring-2 ring-purple-500 hover:bg-purple-700" href={officialUrl}>
                  Visit official website
                </a>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -left-8 top-10 h-20 w-20 rounded-full bg-white blur-3xl" />
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-pink-200 blur-3xl" />
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
                  Podia keeps selling simple: courses, downloads, memberships, email, and community in one place so creators can launch quickly and grow without juggling plugins.
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
              Podia is an all-in-one selling platform for courses, downloads, memberships, and coaching. It bundles storefront, checkout, email, and community so you can run a creator business without stitching tools together.
            </p>
            <p className="mt-3 text-slate-700">
              Unlike heavier all-in-ones, Podia keeps the UI simple and pricing approachable. It’s designed for solo creators and small teams who want to launch fast and avoid maintenance overhead.
            </p>
            <p className="mt-3 text-slate-700">
              You can start free, pay only transaction fees, and upgrade when you’re ready to reduce fees and unlock custom domains and advanced site options.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Podia fits creators who want a single, easy stack for digital products and community.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Course creators who want fast setup and clean checkout.",
                "Newsletter writers adding paid communities or downloads.",
                "Coaches selling sessions, bundles, and upsells in one flow.",
                "Small teams that don’t want to manage plugins or custom code.",
                "Creators moving from marketplace platforms to a branded site.",
                "Budget-conscious founders who still need email + community built in.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-purple-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">Podia emphasizes simplicity while covering the core flows to sell and engage.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {featureBlocks.map((feature) => (
                <div key={feature.title} className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center gap-3 text-slate-900">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">{feature.icon}</div>
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
                  The Free plan has 10% transaction fees. The Mover and Shaker plans reduce or remove fees and add custom domains, embeds, affiliate tools, and advanced site options. Email sending is included; usage scales with
                  your audience.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start free to validate offers. Upgrade when fees outweigh the subscription or you need custom domains and embeds.</p>
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
                    <td className="px-4 py-3">Testing offers and early sales</td>
                    <td className="px-4 py-3">10% transaction fee, core features</td>
                    <td className="px-4 py-3">$0 + fees</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Mover</td>
                    <td className="px-4 py-3">Creators selling regularly</td>
                    <td className="px-4 py-3">No Podia transaction fees, custom domain, embeds</td>
                    <td className="px-4 py-3">~$39/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Shaker</td>
                    <td className="px-4 py-3">Scaling businesses needing affiliates</td>
                    <td className="px-4 py-3">Affiliate program, advanced site features, priority support</td>
                    <td className="px-4 py-3">~$89/month</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Upgrade once transaction fees exceed the subscription or you need custom domains, embeds, or an affiliate program. Keep email costs in mind as your audience grows.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-purple-50 p-5 shadow-sm ring-1 ring-purple-100">
                <div className="flex items-center gap-2 text-purple-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>All-in-one simplicity: courses, downloads, memberships, email, and community.</li>
                  <li>Fast setup with clean checkout and sales pages.</li>
                  <li>Affordable tiers; easy to start free and upgrade as you grow.</li>
                  <li>Built-in VAT handling and direct Stripe/PayPal payouts.</li>
                  <li>Membership and community built into the same platform.</li>
                  <li>Embeds and buy buttons for selling from any site.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Less advanced automation than Kajabi or ConvertKit.</li>
                  <li>Fewer site customization options than Webflow or custom stacks.</li>
                  <li>Free plan charges 10% fees; upgrades required to remove them.</li>
                  <li>Community features are simpler than dedicated community platforms.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare Podia with these popular creator platforms. Every link goes to a full review page.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">See pricing, strengths, and best-fit guidance.</p>
                  </div>
                  <a className="text-sm font-semibold text-purple-700 hover:text-purple-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">Check Podia against popular course platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Teachable vs Kajabi</h3>
                <a className="text-sm font-semibold text-purple-700 hover:text-purple-600" href="/tools/compare/teachable-vs-kajabi-vs-podia">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Kajabi offers deeper funnels and automation, Teachable focuses on courses and coaching, and Podia balances simplicity and price. The comparison highlights which fits your growth stage.
              </p>
              <p className="mt-2 text-slate-900">Pick Podia for ease and affordability; Kajabi for advanced marketing; Teachable for course-first workflows.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Thinkific vs Kajabi</h3>
                <a className="text-sm font-semibold text-purple-700 hover:text-purple-600" href="/tools/compare/thinkific-vs-kajabi-vs-podia">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Thinkific offers strong assessments and learning experience tools. Kajabi is an all-in-one with robust automation. Podia stays simpler with built-in email and community at a lower price point.
              </p>
              <p className="mt-2 text-slate-900">Choose Podia if you want an all-in-one that’s easy to manage; pick Thinkific for learning depth; pick Kajabi for advanced funnels.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you want to sell digital products, courses, and memberships without heavy setup, Podia is worth it. It’s cost-effective, fast to launch, and keeps email, community, and checkout under one roof.
            </p>
            <p className="mt-3 text-slate-700">
              If you need advanced funnels, granular site control, or deep learning features, consider Kajabi or Thinkific. Otherwise Podia’s simplicity and bundled features make it a strong default.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Podia is a top pick for creators who value speed, simplicity, and predictable pricing over complex automation.
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
              Choose Podia if you want a straightforward platform to sell courses, downloads, and memberships with email and community included. It’s ideal for creators who prioritize speed and low-maintenance setups.
            </p>
            <p>Consider Kajabi for advanced automation or Thinkific/Teachable for richer learning features. You can always start on Podia, prove demand, and upgrade later.</p>
            <p>Podia’s free-to-paid path makes it easy to test offers and scale without heavy upfront costs.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for your business, try it here: <a className="text-purple-700 hover:text-purple-600" href={officialUrl}>Visit {toolName}</a>.
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-purple-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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
      <button type="button" onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-900">
        <span className="text-sm font-semibold md:text-base">{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">{answer}</div>}
    </div>
  );
}
