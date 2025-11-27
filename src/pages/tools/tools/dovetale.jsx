import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, BookOpen, Globe2, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Dovetale";
const slug = "dovetale";
const category = "Influencer Marketing";
const shortPitch =
  "Dovetale helps ecommerce and consumer brands recruit creators, manage gifting and affiliates, and track ROI from influencer campaigns.";
const pricingSummary =
  "Dovetale has a free tier for basic recruiting and applications; paid plans (via Shopify Collabs) add gifting, commissions, and deeper analytics.";
const officialUrl = "https://www.dovetale.com";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/dovetale.com",
  gradient: "from-rose-500 via-orange-400 to-amber-400",
  glow: "shadow-[0_20px_80px_rgba(249,115,22,0.22)]",
};

const alternatives = [
  { name: "Aspire", slug: "aspire" },
  { name: "Grin", slug: "grin" },
  { name: "Impact", slug: "impact" },
  { name: "Upfluence", slug: "upfluence" },
  { name: "Refersion", slug: "refersion" },
];

const faqs = [
  {
    q: "Is Dovetale good for smaller brands?",
    a: "Yes. The free tier lets small shops launch a creator program with applications, gifting, and simple tracking.",
  },
  {
    q: "Does Dovetale handle gifting and seeding?",
    a: "You can send products to creators, track shipments, and manage approvals to streamline gifting campaigns.",
  },
  {
    q: "Can I pay creators through Dovetale?",
    a: "Yes. You can manage commissions and payouts for affiliate-style programs. Availability depends on your region and plan.",
  },
  {
    q: "Is there an influencer discovery database?",
    a: "Dovetale provides discovery and an application portal so creators can apply, and you can filter them by criteria.",
  },
  {
    q: "Does it integrate with Shopify?",
    a: "Yes. Dovetale powers Shopify Collabs, making it easy to connect your store, track sales, and attribute revenue.",
  },
  {
    q: "Can I track ROI from creator posts?",
    a: "You can track clicks, sales, and discount code performance to see which creators drive revenue.",
  },
  {
    q: "Is there a limit on creators?",
    a: "Limits depend on plan. Free is capped; paid tiers increase collaborator counts and features.",
  },
  {
    q: "Does Dovetale support contracts and compliance?",
    a: "You can manage contracts and W-9 collection; advanced compliance typically requires paid tiers or additional tooling.",
  },
];

function DovetaleToolPage() {
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
        "Dovetale is a creator CRM and affiliate platform that powers Shopify Collabs. It simplifies recruiting, gifting, and payout tracking so brands can measure creator ROI.",
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
      icon: <BookOpen className="h-5 w-5 text-rose-500" />,
      title: "Creator CRM and applications",
      body: "Centralize applicants, approvals, tags, and notes so your team can evaluate and onboard creators quickly.",
    },
    {
      icon: <Globe2 className="h-5 w-5 text-amber-500" />,
      title: "Gifting and seeding",
      body: "Send products, track shipments, and manage what each creator receives to keep campaigns organized.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Affiliate links and codes",
      body: "Generate links and codes to attribute revenue and manage commissions with less spreadsheet work.",
    },
    {
      icon: <Plug className="h-5 w-5 text-orange-500" />,
      title: "Shopify-native tracking",
      body: "Tight Shopify integration powers attribution, product selection, and payouts inside your ecommerce stack.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Compliance and approvals",
      body: "Contracts, W-9 collection, and approvals help keep creator programs compliant and consistent.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-400" />,
      title: "Reporting and ROI",
      body: "Dashboards show clicks, sales, and payout totals so you can double down on top performers.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Dovetale review for ecommerce teams: pricing, features, pros & cons, and alternatives for running influencer and affiliate programs."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-amber-200/30 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-rose-200/30 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-rose-500" />
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
                  Dovetale powers creator recruiting, gifting, and affiliate payouts so brands can see what influencer programs truly drive sales.
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
              {toolName} is an {category.toLowerCase()} platform for Shopify and ecommerce brands. It centralizes creator discovery, gifting, affiliate links, and payouts so you can run campaigns without spreadsheets.
            </p>
            <p className="mt-3 text-slate-700">
              Performance dashboards reveal which creators drive clicks and orders. Applications make it easy for creators to join your program.
            </p>
            <p className="mt-3 text-slate-700">
              Because it powers Shopify Collabs, setup is straightforward for merchants already on Shopify.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} fits commerce teams that want to grow sales with creators and affiliates.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Shopify brands launching their first creator program.",
                "DTC marketers who need affiliate links and coupon codes tracked.",
                "Social teams coordinating gifting and seeded product drops.",
                "Performance marketers tying influencer spend to revenue.",
                "Partner/affiliate managers consolidating payouts and contracts.",
                "Small teams that want a free or low-friction influencer tool.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-rose-400" />
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
              {toolName} emphasizes creator onboarding, payouts, and attribution so you can scale influencer programs with less manual work.
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
                  Pricing ranges from free to paid tiers through Shopify Collabs. Costs depend on collaborator counts, payouts, and advanced features.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on the free tier; upgrade when you need higher collaborator limits, payouts, and deeper analytics.</p>
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
                    <td className="px-4 py-3">New creator programs</td>
                    <td className="px-4 py-3">Basic discovery, limited collaborators</td>
                    <td className="px-4 py-3">Free</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">Scaling DTC brands</td>
                    <td className="px-4 py-3">Higher limits, gifting, payouts</td>
                    <td className="px-4 py-3">Usage-based/paid</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Larger teams with compliance</td>
                    <td className="px-4 py-3">Advanced permissions, contracts, SLA</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Plan based on collaborator counts, payout volume, and whether you need compliance workflows or integrations beyond Shopify.
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
                  <li>Shopify-native with easy onboarding for merchants.</li>
                  <li>Free tier to start creator programs quickly.</li>
                  <li>Gifting and affiliate tracking reduce manual work.</li>
                  <li>Clear dashboards for clicks, sales, and payouts.</li>
                  <li>Applications and creator CRM keep outreach organized.</li>
                  <li>Good for lean teams that need simple influencer ops.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Less robust search and analytics than enterprise influencer suites.</li>
                  <li>Advanced compliance and contracts may require extra tools.</li>
                  <li>Best for Shopify—other stacks may need workarounds.</li>
                  <li>Limits on collaborators or payouts on lower tiers.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              {toolName} competes with influencer marketing and affiliate platforms. Choose based on campaign complexity, compliance needs, and ecommerce stack.
            </p>
            <p className="mt-2 text-slate-700">Every link below goes to a live tool page—no broken routes.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
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
            <p className="text-slate-700">Compare {toolName} to other influencer and affiliate platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Aspire</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/dovetale-vs-aspire">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Aspire offers richer discovery and enterprise workflows. {toolName} is simpler, Shopify-native, and easier to start for lean teams.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} for fast setup on Shopify; choose Aspire for complex campaigns and deeper analytics.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Grin</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/dovetale-vs-grin">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Grin is a full creator management suite with deeper CRM and reporting. {toolName} prioritizes simplicity and Shopify integration.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} for ease and affordability; choose Grin for enterprise-scale influencer operations.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you run a Shopify store and want to start or scale creator programs quickly, {toolName} is worth it. The free tier lowers risk and you can upgrade as you prove ROI.
            </p>
            <p className="mt-3 text-slate-700">
              If you need heavy compliance, deep search, or multi-region payouts, compare enterprise platforms like Aspire or Grin before committing.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> {toolName} is a strong pick for DTC teams that want Shopify-native influencer and affiliate tooling without heavy lift.
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
              Choose {toolName} if you want an easy, Shopify-native way to manage creators, gifting, and affiliate payouts with clear ROI tracking.
            </p>
            <p>
              Consider Aspire or Grin if you need deeper discovery and enterprise workflows; Impact or Refersion if you prioritize affiliate tracking at scale.
            </p>
            <p>{toolName} integrates tightly with Shopify, making setup fast and reducing manual reconciliation work for ecommerce teams.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here: <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>Visit {toolName}</a>.
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
      {open && (
        <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">
          {answer}
        </div>
      )}
    </div>
  );
}

export default DovetaleToolPage;
