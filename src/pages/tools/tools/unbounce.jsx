import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Wand2, Layout, PanelTop, BarChart3, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Unbounce";
const slug = "unbounce";
const category = "Landing Page Builder";
const shortPitch =
  "Unbounce helps marketers, agencies, and growth teams launch high-converting landing pages and AI-optimized campaigns without touching custom code.";
const pricingSummary =
  "Plans start around $99/month for Launch, with Optimize and Accelerate tiers adding more traffic, A/B testing, AI copywriting, and account management for agencies.";
const officialUrl = "https://unbounce.com";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/unbounce.com",
  gradient: "from-emerald-500 via-teal-500 to-blue-500",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.25)]",
};

const alternatives = [
  { name: "Instapage", slug: "instapage" },
  { name: "Leadpages", slug: "leadpages" },
  { name: "Landingi", slug: "landingi" },
  { name: "Webflow", slug: "webflow" },
  { name: "Carrd", slug: "carrd" },
];

const faqs = [
  {
    q: "Is Unbounce easy for non-developers?",
    a: "Yes. The drag-and-drop Smart Builder, templates, and AI copy suggestions make it simple to publish pages without writing code. Power users can still inject custom HTML, CSS, and scripts.",
  },
  {
    q: "Does Unbounce help with conversion optimization?",
    a: "Unbounce now includes Smart Traffic routing, A/B testing, sticky bars, and popups so you can test headlines, forms, and offers quickly. Reporting highlights lift across desktop and mobile.",
  },
  {
    q: "Can Unbounce integrate with my existing stack?",
    a: "Native integrations cover HubSpot, Salesforce, Marketo, Mailchimp, ActiveCampaign, Zapier, and webhooks. That makes it easy to push leads, trigger nurture sequences, or fire ads conversions.",
  },
  {
    q: "How does billing work?",
    a: "Plans are priced by number of domains, conversions, and visitors. As you scale, you can add more traffic or upgrade tiers. Annual discounts are available for teams running evergreen campaigns.",
  },
  {
    q: "Is Unbounce good for agencies?",
    a: "Agencies get client workspaces, domain management, user permissions, and Accelerate tier support. You can duplicate templates across clients and share reports with stakeholders.",
  },
  {
    q: "Can I use Unbounce for ecommerce?",
    a: "Yes. You can embed checkout buttons, connect Shopify, or route leads to sales teams. Many ecommerce brands build promo pages and product drops with Unbounce to test offers fast.",
  },
  {
    q: "Does Unbounce support AMP or mobile optimization?",
    a: "All templates are responsive. You can edit mobile views separately and optimize elements for page speed. AMP support is limited, but Unbounce prioritizes fast-loading lightweight assets.",
  },
  {
    q: "Is there AI in Unbounce?",
    a: "Smart Copy generates headlines, CTAs, and section copy. Smart Builder also recommends layouts based on your industry, so pages launch faster with on-brand messaging.",
  },
];

function UnbounceToolPage() {
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
        "Unbounce remains a go-to landing page platform for marketers who need flexible templates, AI copy suggestions, and built-in conversion optimization. Pricing scales with traffic and conversions, making it predictable for campaigns.",
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
      icon: <Layout className="h-5 w-5 text-emerald-500" />,
      title: "Smart Builder + templates",
      body: "Launch conversion-ready pages in minutes using drag-and-drop sections, saved layouts, and on-brand styles without tapping engineering resources.",
    },
    {
      icon: <Wand2 className="h-5 w-5 text-blue-500" />,
      title: "AI copy & Smart Traffic",
      body: "Generate headlines, CTAs, and body copy with Smart Copy while Smart Traffic auto-routes visitors to the variant most likely to convert.",
    },
    {
      icon: <PanelTop className="h-5 w-5 text-amber-500" />,
      title: "Popups & sticky bars",
      body: "Layer on exit-intent popups, announcements, and sticky bars to capture high-intent visitors or promote seasonal offers without dev work.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-indigo-500" />,
      title: "Testing & analytics",
      body: "Run A/B tests, see conversion lift, and export performance to stakeholders. Integrations pass key metrics directly into your reporting stack.",
    },
    {
      icon: <Plug className="h-5 w-5 text-rose-500" />,
      title: "Deep integrations",
      body: "Sync leads to HubSpot, Salesforce, Marketo, Zapier, and Slack instantly. Webhooks let you plug Unbounce data into custom workflows.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Client-ready governance",
      body: "Workspaces, permissions, and domain controls keep agencies organized and protect enterprise accounts from accidental edits.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Full Unbounce review for marketers and agencies covering pricing, templates, AI Smart Builder, pros & cons, alternatives, and when to choose Unbounce."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-blue-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-emerald-500" />
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
                <a className="btn btn-primary bg-slate-900 text-white ring-2 ring-slate-900 hover:bg-slate-700" href={officialUrl} target="_blank" rel="noreferrer">
                  Visit official website
                </a>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -left-8 top-10 h-20 w-20 rounded-full bg-white blur-3xl" />
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-emerald-200 blur-3xl" />
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
                  Ship landing pages, popups, and lead capture flows faster with AI-assisted layouts and conversion analytics purpose-built for go-to-market teams.
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
              {toolName} is a {category.toLowerCase()} built to help marketing teams launch campaign-specific pages quickly. It removes dependency on engineering by combining templates, AI copy, and built-in conversion tools.
            </p>
            <p className="mt-3 text-slate-700">
              Paid media teams, lifecycle marketers, and agencies rely on Unbounce to spin up new offers, align forms to CRM workflows, and keep experimentation moving when product roadmaps are full.
            </p>
            <p className="mt-3 text-slate-700">
              Because it integrates into existing tech stacks, data flows straight to CRM, MAP, or analytics platforms so you can track pipeline and revenue attribution.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Unbounce excels for teams that need rapid tests and granular control over messaging.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Performance marketers launching paid search and paid social offers.",
                "Agencies building landing pages, popups, and lead flows for multiple clients.",
                "Lifecycle marketers running gated content, webinars, and lead magnets.",
                "Product marketers crafting campaign hubs for launches or vertical plays.",
                "Demand gen teams testing new positioning before pushing it to core site.",
                "Founders or growth leads needing quick validation pages pre-development.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">Unbounce focuses on three things: fast creation, smart optimization, and easy integrations.</p>
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
                  Pricing is tied to conversions and visitors, which keeps scaling predictable. Launch is enough for early-stage teams, Optimize adds Smart Traffic, and Accelerate unlocks concierge support.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Startups choose Launch, growth teams move to Optimize, agencies lean on Accelerate for client services.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Launch</td>
                    <td className="px-4 py-3">Testing new funnels</td>
                    <td className="px-4 py-3">Up to 20k visitors & 500 conversions</td>
                    <td className="px-4 py-3">$99/month</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Optimize</td>
                    <td className="px-4 py-3">Scaling paid campaigns</td>
                    <td className="px-4 py-3">Up to 30k visitors, Smart Traffic, A/B tests</td>
                    <td className="px-4 py-3">$145/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Accelerate</td>
                    <td className="px-4 py-3">Agencies & high-growth teams</td>
                    <td className="px-4 py-3">Up to 50k visitors, Advanced integrations, concierge support</td>
                    <td className="px-4 py-3">$240+/month</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Large marketing orgs</td>
                    <td className="px-4 py-3">Custom traffic caps, SLA, security reviews</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Annual billing drops costs ~20%. Traffic-based overages can be added on-demand so you never hit a hard cap in the middle of a campaign.</p>
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
                  <li>Best-in-class drag-and-drop builder tailored for conversions.</li>
                  <li>Smart Copy and Smart Traffic reduce manual optimization work.</li>
                  <li>Popups and sticky bars cover entire funnel without extra tools.</li>
                  <li>Strong integration ecosystem with popular CRMs/MAPs.</li>
                  <li>Workspaces and permissions keep agency/client work organized.</li>
                  <li>Reliable analytics with quick A/B testing workflows.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Traffic-based pricing can spike if you forget to raise limits.</li>
                  <li>Advanced customization may still require custom CSS/JS.</li>
                  <li>AMP/native multi-step forms are limited versus enterprise CMSs.</li>
                  <li>Smart Traffic needs meaningful traffic to train.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">These tools also focus on landing pages, experimentation, or no-code site building.</p>
            <p className="mt-2 text-slate-700">Each option has its own review on GoDigitalPro for deeper research.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same space.</p>
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
            <p className="text-slate-700">Comparing landing page builders? Start with these in-depth matchups.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Instapage vs Leadpages</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/unbounce-vs-instapage-vs-leadpages">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Instapage excels at enterprise personalization, while Leadpages keeps costs low for small teams. Our comparison explains when Unbounce’s Smart Traffic and testing toolkit deliver better ROI.
              </p>
              <p className="mt-2 text-slate-900">Choose Unbounce if you want AI optimization with agency-friendly workflows.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Landingi vs Webflow</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/unbounce-vs-landingi-vs-webflow">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Landingi offers budget-friendly templates and funnels; Webflow provides fully custom CMS-powered sites. The comparison shows where Unbounce splits the difference for campaign teams.
              </p>
              <p className="mt-2 text-slate-900">Best bet if you need more flexibility than Landingi without the complexity of Webflow.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If campaigns are bottlenecked by dev resources or CMS constraints, Unbounce pays for itself quickly. Launch pages in days, test messaging weekly, and plug insights back into core site updates.
            </p>
            <p className="mt-3 text-slate-700">
              Teams with custom-coded CMS experiences or heavy personalization may still choose Webflow/Instapage, but Unbounce remains the fastest path to validated conversion data.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Unbounce remains a top-tier landing page platform for GTM teams prioritizing speed and experimentation.
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
              Choose Unbounce if you want to own the entire landing page funnel—from AI-assisted copy to Smart Traffic routing—without relying on developers. It’s built for marketers who treat conversion rate as a core KPI.
            </p>
            <p>
              Consider Instapage or Webflow when you need deeper personalization or CMS-level control, and Leadpages/Landingi for budget-friendly basics. Unbounce sits perfectly in the middle with powerful experimentation features.
            </p>
            <p>It integrates cleanly with CRMs, MAPs, and analytics so performance data flows to pipeline dashboards automatically.</p>
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
      <button type="button" onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-900">
        <span className="text-sm font-semibold md:text-base">{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">{answer}</div>}
    </div>
  );
}

export default UnbounceToolPage;
