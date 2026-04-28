import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Builderall";
const slug = "builderall";
const category = "All-in-One Marketing";
const shortPitch = "Builderall bundles website building, funnels, email marketing, automations, and ecommerce into one platform.";
const pricingSummary =
  "Tiered plans with page limits, funnel features, email sends, and automation tools. Higher tiers add more domains, bandwidth, and advanced automations.";
const officialUrl = "https://www.builderall.com";
const ratingValue = 4.1;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/builderall.com",
  gradient: "from-teal-500 via-cyan-500 to-blue-600",
  glow: "shadow-[0_20px_80px_rgba(45,212,191,0.24)]",
};

const alternatives = [
  { name: "Systeme.io", slug: "systeme-io" },
  { name: "Kartra", slug: "kartra" },
  { name: "GrooveFunnels", slug: "groovefunnels" },
  { name: "Kajabi", slug: "kajabi" },
  { name: "Leadpages", slug: "leadpages" },
];

const faqs = [
  {
    q: "What is Builderall?",
    a: "Builderall is an all-in-one marketing platform that combines website/funnel builders, email marketing, automations, and ecommerce tools.",
  },
  {
    q: "Who is it for?",
    a: "Entrepreneurs, small teams, and agencies wanting a bundled stack for funnels, landing pages, email, and basic ecommerce.",
  },
  {
    q: "Does Builderall handle email marketing?",
    a: "Yes. It includes email campaigns, automation workflows, and list management. Deliverability depends on list quality and setup.",
  },
  {
    q: "How is pricing structured?",
    a: "Plans scale by domains, page limits, email sends, and automation capabilities. Higher tiers add more capacity and features.",
  },
  {
    q: "Can I sell products?",
    a: "Yes. You can sell digital/physical products and connect payment gateways. Evaluate tax/shipping needs and marketplace rules.",
  },
  {
    q: "Can I customize code?",
    a: "Builderall focuses on no/low-code. Custom code options are limited compared to open frameworks.",
  },
  {
    q: "Is Builderall good for agencies?",
    a: "Agencies can manage multiple projects, but should assess client branding needs, deliverability, and scalability.",
  },
  {
    q: "Is migration easy?",
    a: "Switching from other platforms may require rebuilding pages and migrating lists. Plan redirects and DNS carefully.",
  },
];

function BuilderallToolPage() {
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
        "Builderall bundles funnels, sites, email, and automations in one place. It is convenient for all-in-one needs; teams should watch performance, deliverability, and flexibility constraints.",
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
      icon: <Sparkles className="h-5 w-5 text-cyan-500" />,
      title: "Site & funnel builder",
      body: "Drag-and-drop pages, funnels, and templates for launches and lead capture.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Automations",
      body: "Trigger-based workflows for email, tagging, and follow-ups across the stack.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Email marketing",
      body: "Campaigns, sequences, and segmentation included; test deliverability and list health.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Hosting & domains",
      body: "Managed hosting with SSL; connect custom domains and manage DNS for multiple projects.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Ecommerce & payments",
      body: "Sell products with integrated checkout and payment gateways; manage offers and upsells.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Analytics & CRM",
      body: "Track leads, pipelines, and conversions; refine funnels with data.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Builderall review: features, pricing, pros & cons, and alternatives for all-in-one marketing stacks."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-teal-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-sky-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-teal-600" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-teal-100 blur-3xl" />
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
                  {toolName} centralizes funnels, email, and automations. It simplifies stacks, but review fit for your audience size and complexity.
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
              {toolName} is an all-in-one marketing and website platform. It combines page builders, funnels, email marketing, automations, and ecommerce so teams can launch without stitching many tools.
            </p>
            <p className="mt-3 text-slate-700">
              The trade-off is flexibility: it is fast to start but less customizable than open frameworks. Evaluate performance, deliverability, and compliance for your use case.
            </p>
            <p className="mt-3 text-slate-700">Use analytics and testing to refine funnels and campaigns over time.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams wanting a bundled marketing stack with minimal setup.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Entrepreneurs launching funnels and simple ecommerce without developers.",
                "Agencies shipping landing pages and campaigns for clients quickly.",
                "Coaches/course creators managing email, funnels, and memberships in one place.",
                "Small teams needing automation and CRM without many integrations.",
                "Marketers testing offers before investing in custom builds.",
                "Businesses consolidating multiple SaaS tools into one subscription.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-teal-500" />
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
              {toolName} focuses on bundled site building, automations, email marketing, and ecommerce with managed hosting.
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
                  {toolName} offers tiers based on domains, page limits, email sends, and automation features. Higher tiers expand capacity, pages, and advanced automations.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on a lower tier; upgrade when you need more domains, sends, or automation scale.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter</td>
                    <td className="px-4 py-3">Single project</td>
                    <td className="px-4 py-3">Limited pages, funnels, and basic email sends</td>
                    <td className="px-4 py-3">Good for testing</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">Multiple domains & campaigns</td>
                    <td className="px-4 py-3">More bandwidth, email, and automations</td>
                    <td className="px-4 py-3">Watch deliverability</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Agency/Top</td>
                    <td className="px-4 py-3">Managing several clients</td>
                    <td className="px-4 py-3">Highest limits, more automation, team features</td>
                    <td className="px-4 py-3">Check support SLAs</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Budget for domains, email sending reputation, and potential third-party add-ons as needs grow.</p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-teal-50 p-5 shadow-sm ring-1 ring-teal-100">
                <div className="flex items-center gap-2 text-teal-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>All-in-one stack for sites, funnels, email, and automations.</li>
                  <li>Faster setup vs. stitching multiple tools.</li>
                  <li>Managed hosting and domains reduce ops overhead.</li>
                  <li>Built-in ecommerce and payment options.</li>
                  <li>Useful for agencies managing multiple properties.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Less flexibility than custom code or specialized tools.</li>
                  <li>Performance and deliverability depend on setup.</li>
                  <li>Learning curve across many bundled features.</li>
                  <li>Migrations can be manual if you leave the platform.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other all-in-one and funnel platforms to match your build preferences and scale needs.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-teal-700 hover:text-teal-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} stacks against other all-in-one platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Kartra</h3>
                <a className="text-sm font-semibold text-teal-700 hover:text-teal-600" href="/tools/kartra">
                  View Kartra
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Kartra emphasizes funnels, video hosting, and advanced automations. {toolName} offers broad site building and ecommerce; choose based on feature depth needed.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Systeme.io</h3>
                <a className="text-sm font-semibold text-teal-700 hover:text-teal-600" href="/tools/systeme-io">
                  View Systeme.io
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Systeme.io is simpler and cost-effective for funnels and email. {toolName} offers more site design flexibility and feature breadth.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want to consolidate funnels, sites, email, and automations under one subscription without coding.
            </p>
            <p className="mt-3 text-slate-700">
              Plan for deliverability best practices, performance tuning, and potential limits if you need heavy customization.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A convenient all-in-one platform for fast launches; best when speed and consolidation matter more than full flexibility.
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
              Choose {toolName} if you want bundled sites, funnels, email, and automations with managed hosting and minimal integrations to manage.
            </p>
            <p>
              Consider Kartra or Systeme.io for alternative pricing and automation depth; use {toolName} when visual building and feature breadth matter.
            </p>
            <p>{toolName} helps teams launch quickly; apply best practices for deliverability, tracking, and page performance as you scale.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-teal-700 hover:text-teal-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-teal-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default BuilderallToolPage;
