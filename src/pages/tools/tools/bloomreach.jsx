import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Bloomreach";
const slug = "bloomreach";
const category = "Ecommerce Personalization & CDP";
const shortPitch =
  "Bloomreach combines CDP, merchandising/search, and marketing automation to personalize ecommerce experiences across web, search, and messaging.";
const pricingSummary =
  "Sales-led pricing by volume and products (Engagement/CDP, Discovery/Search, Content). Higher tiers add channels, advanced segments, and support.";
const officialUrl = "https://www.bloomreach.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/bloomreach.com",
  gradient: "from-amber-500 via-emerald-500 to-slate-900",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.26)]",
};

const alternatives = [
  { name: "Klaviyo", slug: "klaviyo" },
  { name: "Algolia", slug: "ai" },
  { name: "Dynamic Yield", slug: "ai" },
  { name: "Emarsys", slug: "ai" },
  { name: "Insider", slug: "ai" },
];

const faqs = [
  { q: "What is Bloomreach?", a: "Bloomreach is an ecommerce personalization platform combining CDP/Engagement, onsite search/merchandising, and content." },
  { q: "Who is it for?", a: "Retail/ecommerce brands needing personalized search, recommendations, and marketing automation with unified customer data." },
  { q: "How does pricing work?", a: "Sales-led; priced by volume and product modules (Engagement, Discovery, Content). More channels and support at higher tiers." },
  { q: "Does it include a CDP?", a: "Engagement includes CDP-like capabilities for segments, events, and journeys; confirm if a dedicated CDP is still needed." },
  { q: "Is it headless?", a: "Bloomreach Content supports headless content delivery; Discovery handles search/merch APIs." },
  { q: "Is human review needed?", a: "Yes. Merchandise rules, data quality, and consent/compliance should be reviewed regularly." },
];

function BloomreachToolPage() {
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
        "Bloomreach unifies CDP/Engagement, search/merchandising, and content for ecommerce personalization. Strong fit for retail brands investing in data-driven experiences.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };

  const featureBlocks = [
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "Personalized search & merch", body: "AI-driven search, recommendations, and merchandising controls." },
    { icon: <Rocket className="h-5 w-5 text-emerald-500" />, title: "CDP & segments", body: "Unify customer/event data to build segments and triggers." },
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "Journeys & messaging", body: "Automate email/SMS/web push with personalization (Engagement)." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Content/Headless", body: "Manage and deliver content/headless experiences (Content product)." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "APIs & integrations", body: "Connect ecommerce platforms, analytics, and ad channels for data and actions." },
    { icon: <Plug className="h-5 w-5 text-purple-500" />, title: "Analytics & testing", body: "A/B tests, reports, and merch insights to optimize performance." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Bloomreach review: pricing, features, pros & cons, and alternatives so you can choose the right ecommerce personalization stack."
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-amber-100 blur-3xl" />
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
                  {toolName} personalizes ecommerce search, merch, and messaging—ensure data quality, consent, and merch guardrails.
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
              {toolName} is an ecommerce personalization platform. It combines a CDP/Engagement layer with search/merchandising (Discovery) and content (Content) to deliver personalized onsite and messaging experiences.
            </p>
            <p className="mt-3 text-slate-700">Use it to power search, recommendations, and lifecycle messaging from unified data. Plan integration with your ecommerce stack and consent flows.</p>
            <p className="mt-3 text-slate-700">Merchandise rules and QA are key to keep recommendations and search results on-brand and profitable.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for mid-market/enterprise ecommerce brands investing in personalization.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Retailers needing personalized search and recommendations.",
                "Brands unifying customer data for segments and journeys.",
                "Merch teams wanting AI-driven search with manual controls.",
                "Lifecycle teams coordinating email/SMS/push with CDP data.",
                "Ecommerce orgs running A/B tests on merch and messaging.",
                "Sites needing headless content with personalization hooks.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on search/merchandising, CDP/segments, journeys, and headless content.</p>
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
                  Pricing is sales-led by volume and product modules (Engagement, Discovery, Content). Higher tiers add channels, support, and advanced capabilities. Expect implementation costs and ongoing data/merch ops.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Scope which modules you need first—often Discovery + Engagement—then expand once ROI is proven.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Module</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key inclusions</th>
                    <th className="px-4 py-3">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Discovery/Search</td>
                    <td className="px-4 py-3">Onsite search/merch</td>
                    <td className="px-4 py-3">Search, recommendations, merch controls</td>
                    <td className="px-4 py-3">Pair with merch QA</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Engagement/CDP</td>
                    <td className="px-4 py-3">Messaging</td>
                    <td className="px-4 py-3">Segments, journeys, email/SMS/push</td>
                    <td className="px-4 py-3">Needs data quality and consent</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Content</td>
                    <td className="px-4 py-3">Headless content</td>
                    <td className="px-4 py-3">Headless CMS, delivery, personalization</td>
                    <td className="px-4 py-3">Use for multi-experience sites</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Model ROI with revenue lift and ops effort; plan data governance and merch processes.</p>
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
                  <li>Unified personalization across search, merch, and messaging.</li>
                  <li>CDP-like segments and events power journeys.</li>
                  <li>Headless content option for flexible delivery.</li>
                  <li>Strong ecommerce integrations and APIs.</li>
                  <li>Analytics and testing to optimize performance.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Sales-led pricing; can be premium for lower-volume stores.</li>
                  <li>Requires solid data quality and merch governance.</li>
                  <li>Implementation/integration effort is non-trivial.</li>
                  <li>May overlap with existing CDP/ESP—avoid duplication.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other personalization/CDP stacks for cost, data depth, and channels.</p>
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
            <p className="text-slate-700">See how {toolName} compares to other ecommerce personalization platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Klaviyo</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/klaviyo">
                  View Klaviyo
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Klaviyo is marketing-first (email/SMS); {toolName} also covers search/merch and headless content. Choose based on breadth vs channel depth and cost.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Algolia</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/ai">
                  View Algolia
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Algolia specializes in search; {toolName} adds CDP/engagement and merchandising. Pick based on whether you need full personalization stack or search-only.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you’re an ecommerce brand ready to invest in personalized search, merch, and messaging with unified data.
            </p>
            <p className="mt-3 text-slate-700">Ensure you have data quality, consent, and merch processes; model ROI against implementation and licensing costs.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Powerful personalization stack for retail when paired with strong data and merch governance.
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
            <p>{toolName} unifies personalization across search, merch, messaging, and content.</p>
            <p>Use it if you’re ready for data-driven ecommerce experiences and can support the needed data, merch, and compliance processes.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} fits your personalization strategy, you can try it here:{" "}
              <a className="text-emerald-700 hover:text-emerald-600" href={officialUrl}>
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

export default BloomreachToolPage;
