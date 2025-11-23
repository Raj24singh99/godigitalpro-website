import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown, LayoutTemplate, BarChart3, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Leadpages";
const slug = "leadpages";
const category = "Landing page builder";
const shortPitch =
  "Leadpages is a marketer-friendly landing page and site builder with templates, popups, and simple conversion tools for lead gen and offers.";
const pricingSummary =
  "Plans start around $49/month (Standard) with unlimited traffic and leads, adding A/B testing, more sites, and advanced integrations on Pro and above.";
const officialUrl = "https://www.leadpages.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/leadpages.com",
  gradient: "from-indigo-500 via-blue-500 to-sky-500",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.18)]",
};

const alternatives = [
  { name: "Unbounce", slug: "unbounce" },
  { name: "Instapage", slug: "instapage" },
  { name: "Landingi", slug: "landingi" },
  { name: "Webflow", slug: "webflow" },
  { name: "Carrd", slug: "carrd" },
];

const faqs = [
  {
    q: "Is Leadpages easy for non-designers?",
    a: "Yes. The drag-and-drop editor and block templates make it easy to launch pages without developer help. It’s built for marketers and small teams.",
  },
  {
    q: "Does Leadpages include A/B testing?",
    a: "A/B testing is available on Pro and higher plans. Standard focuses on single-variant pages with unlimited traffic and leads.",
  },
  {
    q: "Can I sell products with Leadpages?",
    a: "Leadpages supports Stripe-hosted checkouts for simple sales and lead magnets. For complex ecommerce, pair it with Shopify or other checkouts.",
  },
  {
    q: "Does Leadpages integrate with email tools?",
    a: "Yes. It integrates with major ESPs and CRMs like Mailchimp, HubSpot, ActiveCampaign, and Zapier for broad workflows.",
  },
  {
    q: "Is hosting included?",
    a: "Yes. Leadpages pages are hosted, and you can connect custom domains. There’s no traffic cap on standard plans.",
  },
  {
    q: "Does it support popups and alert bars?",
    a: "Yes. You can deploy popups, alert bars, and simple forms across your site to capture leads or announcements.",
  },
  {
    q: "Can I build full sites with Leadpages?",
    a: "Leadpages supports simple multi-page sites and blogs, but it’s optimized for landing pages and conversions rather than complex CMS work.",
  },
  {
    q: "How is speed and SEO?",
    a: "Templates are mobile-friendly and reasonably fast. You can edit metadata, slugs, and tracking scripts to align with SEO best practices.",
  },
];

function LeadpagesPage() {
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
        "Leadpages is a straightforward landing page builder with templates, popups, hosting, and integrations. It’s built for marketers who want unlimited traffic and leads without complex setup.",
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
      icon: <LayoutTemplate className="h-5 w-5 text-indigo-600" />,
      title: "Landing page templates",
      body: "Conversion-focused templates with drag-and-drop blocks let marketers launch pages fast without code.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-amber-500" />,
      title: "Popups and alert bars",
      body: "Deploy on-site popups, alert bars, and forms to capture leads and promote offers across pages.",
    },
    {
      icon: <Plug className="h-5 w-5 text-sky-500" />,
      title: "Integrations",
      body: "Connect to ESPs/CRMs (Mailchimp, HubSpot, ActiveCampaign), Stripe checkout, and Zapier for automation.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-emerald-600" />,
      title: "Analytics and A/B testing",
      body: "Built-in analytics and split testing (Pro+) help optimize conversions without extra tools.",
    },
    {
      icon: <ShoppingBag className="h-5 w-5 text-rose-500" />,
      title: "Simple selling",
      body: "Use Stripe-powered payments for simple offers, lead magnets, and low-friction checkouts.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-500" />,
      title: "Hosting and domains",
      body: "Fast hosting with SSL and custom domains included; no traffic caps on standard plans.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Leadpages review for marketers covering pricing, features, pros & cons, alternatives, and how it compares to Unbounce or Instapage."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-indigo-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-sky-300/20 blur-3xl" />
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
                  Leadpages focuses on conversion-first templates, hosted pages, and unlimited traffic so marketers can launch offers and lead capture fast without dev work.
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
              {toolName} is a {category.toLowerCase()} built for marketers who need to ship lead gen and offer pages quickly. It includes hosting, templates, popups, alert bars, and simple Stripe-powered sales without traffic caps on Standard.
            </p>
            <p className="mt-3 text-slate-700">
              Agencies and small teams use it to launch campaigns without pulling in engineering. Integrations with ESP/CRM tools make handoffs easy.
            </p>
            <p className="mt-3 text-slate-700">
              If you want more design control or advanced testing, tools like Unbounce or Instapage may fit better, but Leadpages balances speed and cost well.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Leadpages is best for marketers and small teams prioritizing fast launch and simple conversion tooling.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Agencies launching lead gen campaigns without dev support.",
                "Creators and consultants promoting offers or events.",
                "SMBs needing simple sites/landing pages with popups and forms.",
                "Teams wanting unlimited traffic/leads without overage stress.",
                "Marketers preferring integrated hosting and domains.",
                "Anyone needing quick Stripe-powered selling for digital offers.",
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
            <p className="mt-3 text-slate-700">Leadpages prioritizes conversion-friendly templates and fast deployment.</p>
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
                  Standard starts around $49/month with unlimited traffic/leads and one site. Pro adds A/B testing and more sites; Advanced adds higher limits and integrations. Annual billing drops the monthly rate.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on Standard; go Pro for testing; advance if you need more sites and integrations.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Standard</td>
                    <td className="px-4 py-3">Solo marketers & small teams</td>
                    <td className="px-4 py-3">Unlimited traffic/leads, 1 site, popups/alert bars</td>
                    <td className="px-4 py-3">~$49/month</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Teams needing testing + more sites</td>
                    <td className="px-4 py-3">A/B testing, 3 sites, online sales/stripe</td>
                    <td className="px-4 py-3">~$99/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Advanced</td>
                    <td className="px-4 py-3">Higher-volume/agency usage</td>
                    <td className="px-4 py-3">More sites, advanced integrations, priority support</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Unlimited traffic/leads on Standard is generous. Testing is locked to Pro+, so upgrade when optimization matters. For advanced ecommerce, pair with dedicated checkout or store platforms.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-indigo-50 p-5 shadow-sm ring-1 ring-indigo-100">
                <div className="flex items-center gap-2 text-indigo-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Fast drag-and-drop builder for marketers.</li>
                  <li>Unlimited traffic/leads on Standard.</li>
                  <li>Built-in popups, alert bars, and Stripe checkout.</li>
                  <li>Integrations with major ESPs/CRMs and Zapier.</li>
                  <li>Hosting and SSL included with custom domains.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>A/B testing only on Pro+ tiers.</li>
                  <li>Less design control than Webflow or Framer.</li>
                  <li>Not a full ecommerce/CMS solution.</li>
                  <li>Advanced analytics/testing require upgrades or external tools.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              If you need more testing, design control, or ecommerce depth, consider these landing page and site builders.
            </p>
            <p className="mt-2 text-slate-700">Each links to its full review page.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Landing page/site alternative.</p>
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
            <p className="text-slate-700">Here’s how Leadpages compares with popular landing page builders.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Unbounce vs Instapage</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/unbounce-vs-instapage-vs-leadpages">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Unbounce and Instapage offer deeper testing and personalization. Leadpages is simpler, with unlimited traffic and lower price. Choose based on testing needs and budget.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Landingi vs Webflow</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/unbounce-vs-landingi-vs-webflow">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Landingi is similar in simplicity with funnels/automations; Webflow is more design-flexible. Leadpages sits between: faster than Webflow, simpler than Landingi for basic pages.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              Leadpages is worth it if you want fast, hosted landing pages with popups/alert bars and unlimited traffic, without heavy design or testing needs. It’s great for agencies, creators, and SMBs shipping offers quickly.
            </p>
            <p className="mt-3 text-slate-700">
              If you need advanced testing, personalization, or full-site design control, consider Unbounce, Instapage, or Webflow. For ecommerce, pair Leadpages with dedicated checkout solutions.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> {toolName} is a solid pick for conversion-focused teams that value speed, simplicity, and predictable pricing.
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
              Choose {toolName} if you need fast landing pages with lead capture, popups, and simple selling—no developer required. It’s ideal for lead gen and small offers.
            </p>
            <p>
              Consider Unbounce or Instapage for deeper testing; Webflow for design flexibility; Landingi for funnel-style simplicity. Mixing Leadpages with a dedicated checkout/ecommerce stack covers more advanced sales needs.
            </p>
            <p>{toolName} fits well in a lean marketing stack, exporting leads to ESP/CRM tools via native integrations or Zapier.</p>
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

export default LeadpagesPage;
