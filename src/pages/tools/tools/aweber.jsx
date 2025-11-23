import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, BarChart3, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "AWeber";
const slug = "aweber";
const category = "Email marketing & automation";
const shortPitch =
  "AWeber is an email marketing platform that helps small businesses and creators launch newsletters, automations, and landing pages with dependable deliverability.";
const pricingSummary = "Free for up to 500 subscribers with core sending. Lite starts near $12.50/month billed annually; Plus adds advanced automation, ecommerce, and reporting.";
const officialUrl = "https://www.aweber.com";
const ratingValue = 4.1;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/aweber.com",
  gradient: "from-indigo-500 via-blue-500 to-sky-500",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.25)]",
};

const alternatives = [
  { name: "MailerLite", slug: "mailerlite" },
  { name: "ConvertKit", slug: "convertkit" },
  { name: "GetResponse", slug: "getresponse" },
  { name: "ActiveCampaign", slug: "activecampaign" },
  { name: "Brevo", slug: "brevo" },
];

const faqs = [
  { q: "Does AWeber have a free plan?", a: "Yes. Free covers up to 500 subscribers, core email sending, templates, and basic automations. Landing pages and ecommerce payments are included with small limits." },
  { q: "Who is AWeber best for?", a: "AWeber fits small businesses, creators, and agencies that want reliable sending, simple automations, and quick landing pages without a complex CRM stack." },
  { q: "Is AWeber good for agencies?", a: "Agencies use AWeber for client newsletters and lead magnets because it’s easy to template, reskin, and manage deliverability across small lists." },
  { q: "Does AWeber include landing pages?", a: "Yes. AWeber has drag-and-drop landing pages with forms, payments, and tagging so you can launch lead captures without a separate builder." },
  { q: "How are AWeber automations?", a: "Automations cover welcome flows, tag-based triggers, splits, and cart follow-ups. It’s simpler than enterprise marketing automation but covers core journeys well." },
  { q: "Is AWeber GDPR compliant?", a: "AWeber offers consent fields, double opt-in, unsubscribe handling, data exports, and a DPA to support GDPR. Teams must still configure consent properly." },
  { q: "Does AWeber integrate with other tools?", a: "It integrates with Stripe, Shopify, WooCommerce, WordPress, Squarespace, Zapier, and hundreds of form or CRM tools." },
  { q: "How is AWeber deliverability?", a: "Known for strong inbox placement thanks to strict list hygiene, confirmed opt-in options, and proactive bounce/spam monitoring." },
];

function AweberToolPage() {
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
        "AWeber gives small teams dependable deliverability, simple automation, and ready-to-ship landing pages. Pricing is approachable, making it a safe starter option for newsletters and promos.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
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
      icon: <Sparkles className="h-5 w-5 text-indigo-500" />,
      title: "Templates and easy editor",
      body: "Drag-and-drop blocks, AMP elements, and template packs make it fast to ship newsletters, promos, and seasonal campaigns without design overhead.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-emerald-500" />,
      title: "Automation basics that matter",
      body: "Tag-based triggers, splits, and cart follow-ups cover welcome, nurture, and post-purchase flows. Great for small businesses launching lifecycle email quickly.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-amber-500" />,
      title: "Deliverability and reporting",
      body: "Solid inbox placement, link tracking, and device analytics make it easier to keep lists healthy and sponsors confident.",
    },
    {
      icon: <Plug className="h-5 w-5 text-sky-500" />,
      title: "Integrations for SMB stacks",
      body: "Connects to Stripe, Shopify, WooCommerce, WordPress, Squarespace, Wix, Zapier, and form tools for smooth lead capture and commerce flows.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "List hygiene controls",
      body: "Bounce handling, opt-in confirmation, and engagement tagging keep sender reputation clean as you scale audiences.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Landing pages and ecommerce",
      body: "Built-in landing pages with payment buttons and tagging let you sell products or subscriptions without external builders.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="AWeber review for 2025 covering pricing, deliverability, features, and alternatives for small businesses, creators, and agencies."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-sky-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-300/20 blur-3xl" />
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
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}>
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
                  AWeber focuses on dependable sending, quick templates, and accessible automation so small teams can ship campaigns and track revenue fast.
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
              AWeber is an {category.toLowerCase()} platform built for small businesses, creators, and agencies. It combines newsletters, automations, landing pages, and payments with strong deliverability support.
            </p>
            <p className="mt-3 text-slate-700">
              Teams use AWeber for welcome series, promos, and lead magnets that need quick setup and reliable inboxing. Landing pages and sign-up forms reduce dependency on external builders.
            </p>
            <p className="mt-3 text-slate-700">
              Its strength is ease and dependability rather than complex segmentation. For most small stacks, it covers the essentials without overhead.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Choose {toolName} if you want dependable sending, straightforward automations, and built-in landing pages.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Small businesses launching newsletters and promos quickly.",
                "Creators selling simple products or memberships with email follow-ups.",
                "Agencies managing client newsletters and lead gen in one dashboard.",
                "Shops that need cart follow-up without a heavy marketing automation suite.",
                "Teams valuing deliverability and list hygiene over complex branching.",
                "Marketers who want fast templates and proven support.",
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
            <p className="mt-3 text-slate-700">AWeber is built for fast setup and clean sending so you can focus on campaigns, not configuration.</p>
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
                  Free covers 500 subscribers with core features. Lite adds custom domains, analytics, and email split testing. Plus brings advanced automation, sales tracking, and more list capacity. Pricing scales with subscriber volume.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Stay on Free to test. Choose Lite for growing lists. Move to Plus when automation depth and ecommerce/reporting matter.</p>
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
                    <td className="px-4 py-3">Testing campaigns and small lists</td>
                    <td className="px-4 py-3">Up to 500 subscribers, AWeber branding, basic automation</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Lite</td>
                    <td className="px-4 py-3">Growing creators and small businesses</td>
                    <td className="px-4 py-3">Custom domains, split tests, more templates, larger lists</td>
                    <td className="px-4 py-3">~$12.50+/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Plus</td>
                    <td className="px-4 py-3">Teams wanting automation + ecommerce</td>
                    <td className="px-4 py-3">Full automation builder, sales tracking, advanced reports</td>
                    <td className="px-4 py-3">Varies by list size</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Most teams find Lite sufficient until they need deeper ecommerce tracking or higher list caps, which pushes them to Plus.</p>
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
                  <li>Strong deliverability track record for small lists.</li>
                  <li>Fast templates and landing pages bundled in.</li>
                  <li>Approachable automations with tag logic and splits.</li>
                  <li>Integrations with major site builders, stores, and CRMs.</li>
                  <li>Payments and cart follow-up without complex setup.</li>
                  <li>Transparent pricing, easy to forecast.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Automation depth and branching are lighter than enterprise tools.</li>
                  <li>Design flexibility is improving but not as open as some builders.</li>
                  <li>Pricing scales with list size; large audiences may prefer different economics.</li>
                  <li>Advanced ecommerce journeys may require another platform.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              AWeber focuses on approachable email marketing; some teams prefer creator-centric ESPs or deeper automation depending on goals.
            </p>
            <p className="mt-2 text-slate-700">These options all send email; they diverge on automation depth, ecommerce, and pricing.</p>
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
            <p className="text-slate-700">Here’s how AWeber compares to two popular ESPs.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs MailerLite</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/aweber-vs-mailerlite-vs-convertkit">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                MailerLite is modern, minimal, and affordable with solid automations. AWeber wins on deliverability heritage and built-in landing pages with payment buttons.
              </p>
              <p className="mt-2 text-slate-700">
                Choose MailerLite for design flexibility and sleek UI; choose AWeber for inbox reliability, landing pages, and quick client setups.
              </p>
              <p className="mt-2 text-slate-900">Both integrate with ecommerce and form tools—AWeber’s support and templates help new teams ship faster.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs ConvertKit</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/aweber-vs-getresponse-vs-activecampaign">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ConvertKit leans into creator commerce with digital product sales and visual automations. AWeber keeps automations simpler and focuses on send reliability and ready-to-use pages.
              </p>
              <p className="mt-2 text-slate-700">
                Choose ConvertKit for creator sales funnels; choose AWeber for accessible setup, support, and strong inboxing for SMB newsletters.
              </p>
              <p className="mt-2 text-slate-900">If you need deeper behavioral branching, ActiveCampaign or GetResponse may also be worth a look.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              For small businesses, creators, and agencies that want dependable deliverability, quick templates, and manageable automations, AWeber is a solid, low-risk choice. You can get campaigns live fast without rebuilding your stack.
            </p>
            <p className="mt-3 text-slate-700">
              If you need heavier CRM logic or ecommerce-specific journeys, consider stepping up to ActiveCampaign or GetResponse. Otherwise, AWeber balances price and capability nicely for lean teams.
            </p>
            <p className="mt-3 font-semibold text-slate-900">Verdict: Great fit for straightforward newsletters and promos with reliable sending and fast setup.</p>
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
            <p>Pick AWeber if you want fast, reliable email marketing with landing pages and approachable automations built in.</p>
            <p>Consider MailerLite or ConvertKit if you want fresher UI or creator commerce depth; ActiveCampaign if you need heavier automation branching.</p>
            <p>AWeber slots neatly into most SMB stacks, connecting with storefronts, site builders, and CRMs via native integrations and Zapier.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for your stack, you can try it here:{" "}
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

export default AweberToolPage;
