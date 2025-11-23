import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, MessageSquare, Smartphone, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Omnisend";
const slug = "omnisend";
const category = "Email & SMS Marketing";
const shortPitch =
  "Omnisend is an ecommerce-first email and SMS automation platform that helps marketers deliver targeted campaigns, cart recovery, and post-purchase flows without heavy setup.";
const pricingSummary =
  "Free tier for up to 250 contacts, paid plans from ~$16/month with generous email + SMS bundles that scale for DTC brands.";
const officialUrl = "https://www.omnisend.com/";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/omnisend.com",
  gradient: "from-indigo-500 via-purple-500 to-pink-500",
  glow: "shadow-[0_20px_80px_rgba(109,40,217,0.20)]",
};

const alternatives = [
  { name: "Klaviyo", slug: "klaviyo", blurb: "Advanced ecommerce data and predictive analytics." },
  { name: "MailerLite", slug: "mailerlite", blurb: "Lean email marketing with a simple builder." },
  { name: "ActiveCampaign", slug: "activecampaign", blurb: "Deeper CRM + marketing automation." },
  { name: "ConvertKit", slug: "convertkit", blurb: "Creator-friendly email and sequences." },
  { name: "Brevo", slug: "brevo", blurb: "Affordable multichannel campaigns." },
];

const faqs = [
  { q: "Is Omnisend good for ecommerce brands?", a: "Yes. It was built for ecommerce with prebuilt cart recovery, browse abandonment, post-purchase, and product feed blocks that pull catalog data automatically." },
  { q: "Is there a free plan?", a: "Omnisend has a free tier with up to 250 contacts and 500 emails/month. It’s enough to test onboarding and a few automations before upgrading." },
  { q: "Does Omnisend include SMS?", a: "Yes. SMS is bundled on paid plans with country-based pricing. Many DTC teams pick it for affordable SMS alongside email in one automation builder." },
  { q: "Does it integrate with Shopify?", a: "Yes. Shopify, Shopify Plus, BigCommerce, WooCommerce, and custom stores are supported, with product feeds, segment builders, and triggers based on store events." },
  { q: "Who is Omnisend best for?", a: "Small to mid-size ecommerce and DTC teams that want fast time-to-value on email + SMS without a steep learning curve. Agencies also use it to launch flows quickly." },
  { q: "How does Omnisend compare to Klaviyo?", a: "Klaviyo wins on advanced predictive analytics and deep data modeling; Omnisend wins on simplicity, bundled SMS value, and launch speed for most DTC brands." },
  { q: "Does Omnisend support automation templates?", a: "Yes. You get guided templates for cart recovery, winback, post-purchase, welcome, and more, plus split testing, conditional splits, and product recommendations." },
  { q: "Is Omnisend GDPR compliant?", a: "Omnisend offers GDPR tools including consent fields, unsubscribe controls, and data export/delete options. Check your own consent capture before sending SMS." },
];

const featureBlocks = [
  {
    icon: <Sparkles className="h-5 w-5 text-indigo-500" />,
    title: "Fast ecommerce automation",
    body: "Prebuilt flows for cart/browse abandonment, post-purchase, and winbacks let teams launch email + SMS journeys in hours instead of weeks.",
  },
  {
    icon: <MessageSquare className="h-5 w-5 text-emerald-500" />,
    title: "Email + SMS in one builder",
    body: "Trigger and branch both channels in the same canvas with shared segmentation, making lifecycle programs consistent across touchpoints.",
  },
  {
    icon: <Smartphone className="h-5 w-5 text-amber-500" />,
    title: "Affordable SMS bundles",
    body: "Bundled SMS credits and country-aware pricing help DTC brands run global campaigns without runaway SMS bills.",
  },
  {
    icon: <Plug className="h-5 w-5 text-sky-500" />,
    title: "Shopify, BigCommerce, WooCommerce",
    body: "Native store integrations power product feeds, dynamic recommendations, and event triggers without custom middleware.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
    title: "Compliance & deliverability",
    body: "Built-in consent fields, preference management, deliverability monitoring, and SPF/DKIM guidance protect sender reputation.",
  },
  {
    icon: <Rocket className="h-5 w-5 text-rose-500" />,
    title: "Reporting marketers can use",
    body: "Revenue attribution by flow and channel, plus cohort-level reporting, make it easy to see which journeys and audiences convert.",
  },
];

function OmnisendToolPage() {
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
        "Omnisend pairs email and SMS automation for ecommerce brands. It is fast to launch, integrates tightly with Shopify and BigCommerce, and includes templates for cart recovery, welcome, and post-purchase flows.",
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

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Hands-on Omnisend review for ecommerce teams covering pricing, features, pros & cons, alternatives, and how it compares to Klaviyo and ActiveCampaign."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-indigo-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-pink-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-amber-500" />
                {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                {toolName} Review (2025): Email + SMS for ecommerce
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
                  Omnisend combines email and SMS in one builder with ecommerce data baked in, letting DTC brands launch targeted lifecycle programs fast.
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
              Omnisend is an email and SMS marketing automation platform designed for ecommerce sellers. It plugs into your storefront to trigger messaging from real shopping behavior.
            </p>
            <p className="mt-3 text-slate-700">
              Marketers use it to launch welcome, browse abandonment, cart recovery, and post-purchase flows quickly, while bundling SMS so you can coordinate multi-touch journeys without separate tools.
            </p>
            <p className="mt-3 text-slate-700">
              Because it’s lighter than enterprise marketing clouds, Omnisend is easy for lean teams and agencies to run while still offering attribution and segment depth.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Omnisend is best for ecommerce and DTC brands that want quick wins from lifecycle marketing.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Shopify and Shopify Plus brands needing fast cart recovery and welcome flows.",
                "DTC teams that want affordable SMS alongside email without extra tools.",
                "Agencies launching lifecycle programs for multiple storefront clients.",
                "Brands testing product drops and seasonal campaigns with segmentation.",
                "Growth teams that need reporting by flow, channel, and revenue attribution.",
                "Lean teams wanting a simpler alternative to heavy marketing automation suites.",
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
            <p className="mt-3 text-slate-700">
              Omnisend focuses on speed to launch, cross-channel coordination, and revenue impact for ecommerce stores.
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
                  Omnisend offers a free plan to test core automations, then paid plans that bundle email sends and SMS credits. Pricing scales by contacts and SMS geography, keeping total cost lower than many rivals.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on Free/Standard to validate flows; upgrade to Pro when SMS and higher volumes are critical.</p>
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
                    <td className="px-4 py-3">Testing welcome/cart flows</td>
                    <td className="px-4 py-3">Up to 250 contacts, 500 emails/month</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Standard</td>
                    <td className="px-4 py-3">Growing stores launching full lifecycle</td>
                    <td className="px-4 py-3">Scales with contacts; email + limited SMS credits</td>
                    <td className="px-4 py-3">From ~$16/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">DTC brands heavy on SMS + automation</td>
                    <td className="px-4 py-3">Higher limits, advanced reporting, more SMS</td>
                    <td className="px-4 py-3">From ~$59/month</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">High-volume retailers needing custom terms</td>
                    <td className="px-4 py-3">Custom limits, deliverability support, SSO</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Budget-conscious DTC teams often find Pro the sweet spot because SMS is bundled generously. Klaviyo may cost more at scale if you only need moderate personalization.
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
                  <li>Purpose-built for ecommerce with product feeds and store triggers.</li>
                  <li>Affordable SMS bundles paired with email in one builder.</li>
                  <li>Fast to launch with prebuilt lifecycle templates.</li>
                  <li>Clear attribution and flow-level revenue reporting.</li>
                  <li>Simpler than heavy marketing automation suites.</li>
                  <li>Good balance of segmentation power and usability.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Predictive analytics are lighter than Klaviyo.</li>
                  <li>Advanced multi-touch lead scoring is limited versus ActiveCampaign.</li>
                  <li>Design flexibility is solid but not as open as custom builders.</li>
                  <li>SMS costs still vary by country—monitor high-volume sends.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              If you need deeper predictive insights, campaign management, or a creator-first tool, consider these proven alternatives. Each link goes to a full review page.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.blurb}</p>
                  </div>
                  <a className="text-sm font-semibold text-indigo-600 hover:text-indigo-500" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how Omnisend stacks up against two of its closest peers.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Klaviyo vs MailerLite</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/compare/klaviyo-vs-omnisend-vs-mailerlite">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Klaviyo wins on advanced personalization and predictive segments. Omnisend provides the best balance of value and speed for ecommerce. MailerLite is the simplest and cheapest for lean teams.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs ActiveCampaign</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/compare/omnisend-vs-klaviyo-vs-activecampaign">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ActiveCampaign offers deeper CRM-style automation and scoring. Omnisend is faster to launch for ecommerce with bundled SMS and simpler reporting for lifecycle flows.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              For Shopify, BigCommerce, and WooCommerce brands that want email + SMS automation without enterprise overhead, Omnisend is a strong choice. It is quick to launch, priced well, and built around ecommerce data.
            </p>
            <p className="mt-3 text-slate-700">
              If you need predictive analytics and heavier personalization, consider Klaviyo. If you need combined CRM + automation for sales-led motions, ActiveCampaign may fit better.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Omnisend is worth it for DTC teams prioritizing speed, SMS value, and ecommerce-ready automations.
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
              Choose Omnisend if you are an ecommerce or DTC team that needs reliable email + SMS automation, quick setup, and fair pricing. It shines for cart recovery, post-purchase journeys, and promotional sends.
            </p>
            <p>
              Consider Klaviyo for advanced personalization or ActiveCampaign if CRM-style scoring and sales automation matter more. For newsletter-first creators, MailerLite may be enough.
            </p>
            <p>Omnisend fits well in a modern ecommerce stack, connecting storefront events, audiences, and campaigns across channels while keeping reporting clear.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for your stack, you can try it here: <a className="text-indigo-700 hover:text-indigo-500" href={officialUrl}>Visit {toolName}</a>.
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-indigo-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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

export default OmnisendToolPage;
