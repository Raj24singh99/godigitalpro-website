import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown, LayoutTemplate, BarChart3, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Landingi";
const slug = "landingi";
const category = "Landing page builder";
const shortPitch =
  "Landingi is a landing page and funnel builder with drag-and-drop templates, popups, A/B testing, and light automations for marketers and agencies.";
const pricingSummary =
  "Plans start around $35/month (annual) with templates, popups, and basic automation; higher tiers add A/B testing, more domains, and agency/white-label options.";
const officialUrl = "https://landingi.com";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/landingi.com",
  gradient: "from-blue-500 via-indigo-500 to-purple-500",
  glow: "shadow-[0_20px_80px_rgba(79,70,229,0.18)]",
};

const alternatives = [
  { name: "Unbounce", slug: "unbounce" },
  { name: "Instapage", slug: "instapage" },
  { name: "Leadpages", slug: "leadpages" },
  { name: "Webflow", slug: "webflow" },
  { name: "Carrd", slug: "carrd" },
];

const faqs = [
  {
    q: "Is Landingi good for beginners?",
    a: "Yes. Landingi is designed for marketers with drag-and-drop templates, guided funnels, and simple publishing to custom domains.",
  },
  {
    q: "Does Landingi include A/B testing?",
    a: "A/B testing is available on higher tiers. Basic plans focus on single-variant pages and popups.",
  },
  {
    q: "Can I build funnels and popups?",
    a: "Yes. You can create multi-step funnels, popups, and light automations to guide visitors through offers.",
  },
  {
    q: "What integrations are available?",
    a: "Landingi connects to popular ESP/CRM tools, payment widgets, and Zapier. You can embed scripts for analytics and pixels.",
  },
  {
    q: "Is hosting included?",
    a: "Yes. Landingi hosts your pages and popups; you can connect custom domains and manage SSL without extra hosting.",
  },
  {
    q: "Does Landingi support ecommerce?",
    a: "It supports simple checkout via integrations/widgets. For full ecommerce, pair it with Shopify or similar.",
  },
  {
    q: "Are there agency features?",
    a: "Higher tiers add client/white-label options, more domains, and account management suited for agencies.",
  },
  {
    q: "How is speed and SEO?",
    a: "Templates are mobile-friendly; you can edit meta tags, slugs, and add tracking to align with SEO best practices.",
  },
];

function LandingiPage() {
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
        "Landingi is a landing page and funnel builder with templates, popups, and A/B testing. It’s aimed at marketers and agencies that want fast launch with light automations.",
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
      icon: <LayoutTemplate className="h-5 w-5 text-blue-600" />,
      title: "Drag-and-drop pages",
      body: "Templates and blocks make it easy to build landing pages without code, with responsive layouts and custom domains.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-amber-500" />,
      title: "Funnels and popups",
      body: "Create multi-step funnels, popups, and alert bars to capture leads and guide visitors through offers.",
    },
    {
      icon: <Workflow className="h-5 w-5 text-indigo-600" />,
      title: "Automations & integrations",
      body: "Trigger follow-ups and pass leads to ESP/CRM tools or Zapier. Embed scripts and pixels easily.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-emerald-600" />,
      title: "A/B testing and analytics",
      body: "Test variants (on higher tiers) and track conversions to optimize campaigns without extra tools.",
    },
    {
      icon: <Plug className="h-5 w-5 text-sky-500" />,
      title: "Widgets & payments",
      body: "Embed payment widgets, forms, and calendars to collect leads or simple payments directly on pages.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-500" />,
      title: "Hosting & SSL included",
      body: "Landingi hosts pages, handles SSL, and supports multiple domains—useful for agencies managing many clients.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Landingi review covering pricing, features, pros & cons, alternatives, and how it compares to Unbounce, Instapage, and Webflow."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-blue-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-purple-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-blue-500" />
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
                  Landingi makes it easy to launch pages, popups, and funnels with A/B testing and light automations so marketers and agencies can ship quickly.
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
              {toolName} is a {category.toLowerCase()} for marketers and agencies who want to build landing pages, popups, and funnels without coding. Hosting, domains, and SSL are included, and higher tiers add testing and
              white-label options.
            </p>
            <p className="mt-3 text-slate-700">
              It’s more affordable than some enterprise builders, with enough features (A/B testing, funnels, automations) to run campaigns effectively.
            </p>
            <p className="mt-3 text-slate-700">
              If you need pixel-perfect design control, Webflow might be better; if deep testing/personalization is key, consider Unbounce/Instapage. Landingi balances speed, simplicity, and price.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} fits teams that want conversion-focused pages and funnels quickly.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Agencies launching client pages with templates and white-label options.",
                "Marketers building lead gen pages and popups without dev help.",
                "SMBs needing simple funnels and automations for offers.",
                "Teams that want A/B testing without heavy enterprise pricing.",
                "Founders validating offers with quick pages and built-in hosting.",
                "Users who prefer Zapier/ESP integrations over custom dev work.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-blue-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">Landingi provides the essentials for conversion-focused landing pages and funnels.</p>
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
                  Tiered pricing scales by features, domains, and testing. Base plans include templates, popups, and hosting; higher tiers add A/B testing, funnels/automation depth, and agency/white-label options.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on the base plan to launch pages; upgrade for A/B testing and more domains; agency tiers for white-label/client management.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Core</td>
                    <td className="px-4 py-3">Solo marketers/SMBs</td>
                    <td className="px-4 py-3">Templates, popups, basic automations, limited domains</td>
                    <td className="px-4 py-3">~$35/month (annual)</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Create/Automate</td>
                    <td className="px-4 py-3">Teams needing testing</td>
                    <td className="px-4 py-3">A/B testing, more domains, expanded automations</td>
                    <td className="px-4 py-3">$59–$89/month (annual)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Agency/Unlimited</td>
                    <td className="px-4 py-3">Agencies and high-volume teams</td>
                    <td className="px-4 py-3">More workspaces, domains, white-label, priority support</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Pricing is competitive; testing requires mid-tier or higher. If you need enterprise personalization or dynamic content, consider Unbounce/Instapage. For fast funnels with good value, Landingi is strong.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-blue-50 p-5 shadow-sm ring-1 ring-blue-100">
                <div className="flex items-center gap-2 text-blue-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Easy drag-and-drop builder with templates.</li>
                  <li>Funnels, popups, and automations built in.</li>
                  <li>A/B testing available on mid/high tiers.</li>
                  <li>Hosting, SSL, and custom domains included.</li>
                  <li>Integrations with ESPs/CRMs and Zapier.</li>
                  <li>Agency/white-label options for client work.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>A/B testing not on the lowest tier.</li>
                  <li>Less design flexibility than Webflow/Framer.</li>
                  <li>Personalization/testing depth is lighter than Unbounce/Instapage.</li>
                  <li>Advanced ecommerce requires external checkouts.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              If you need deeper testing, more design control, or ecommerce focus, consider these tools. They link to full reviews.
            </p>
            <p className="mt-2 text-slate-700">Each balances speed, testing, and design flexibility differently.</p>
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
            <p className="text-slate-700">Here’s how Landingi compares to other landing page builders.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Unbounce vs Webflow</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/unbounce-vs-landingi-vs-webflow">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Unbounce focuses on testing/personalization; Webflow focuses on design flexibility/CMS. Landingi offers fast funnels and good value with simpler UI and lower pricing.
              </p>
              <p className="mt-2 text-slate-900">
                Choose Landingi for speed and affordability; choose Unbounce for experimentation depth; choose Webflow for bespoke design and CMS.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Unbounce vs Instapage</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/unbounce-vs-instapage-vs-leadpages">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Instapage and Unbounce offer more advanced testing and personalization. Landingi is easier and cheaper, with funnels and popups built in. If testing is critical, look at those; for fast launch value, Landingi wins.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              Landingi is worth it for marketers and agencies needing quick landing pages, funnels, popups, and A/B tests without high enterprise costs. Hosting and domains included simplify rollout.
            </p>
            <p className="mt-3 text-slate-700">
              If you need deeper personalization, advanced analytics, or pixel-level design, consider Unbounce, Instapage, or Webflow. For most SMB/agency use cases, Landingi’s speed and value stand out.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> {toolName} is a solid, cost-effective choice for launching and optimizing landing pages and funnels quickly.
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
              Choose Landingi if you want a fast, affordable landing page and funnel builder with hosting, popups, and testing available on mid/high tiers. It’s great for SMBs and agencies shipping campaigns quickly.
            </p>
            <p>
              Consider Unbounce/Instapage for advanced experimentation; Webflow for design-heavy builds; Leadpages for unlimited traffic and simple selling. Landingi hits the middle ground on price and ease.
            </p>
            <p>{toolName} connects easily to ESP/CRM stacks and Zapier, so leads flow where you need them without custom dev.</p>
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

export default LandingiPage;
