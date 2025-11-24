import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "AutopilotHQ";
const slug = "autopilothq";
const category = "Marketing Automation";
const shortPitch =
  "AutopilotHQ is a visual marketing automation platform for journeys across email, SMS, in-app, and chat, with customer data and personalization built in.";
const pricingSummary =
  "Free trial, then plans by contacts and channels. Higher tiers add advanced journeys, messaging channels, CDP features, and more seats/support.";
const officialUrl = "https://www.autopilothq.com";
const ratingValue = 4.1;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/autopilothq.com",
  gradient: "from-sky-500 via-cyan-500 to-slate-900",
  glow: "shadow-[0_20px_80px_rgba(14,165,233,0.26)]",
};

const alternatives = [
  { name: "HubSpot", slug: "hubspot" },
  { name: "ActiveCampaign", slug: "activecampaign" },
  { name: "Klaviyo", slug: "klaviyo" },
  { name: "Customer.io", slug: "customerio" },
  { name: "Mailchimp", slug: "mailerlite" },
];

const faqs = [
  { q: "What is AutopilotHQ?", a: "AutopilotHQ is a visual journey builder for email, SMS, chat, and in-app messages with customer data and personalization." },
  { q: "Who is it for?", a: "Growth and lifecycle teams that want drag-and-drop journeys without heavy engineering." },
  { q: "How does pricing work?", a: "Plans scale by contacts and channels; higher tiers add advanced journeys, CDP-like features, seats, and support." },
  { q: "Does it replace a CDP?", a: "It includes customer data for journeys, but deep CDP/warehouse use cases may need a dedicated CDP." },
  { q: "Does it support SMS/in-app?", a: "Yes on eligible plans; check channel availability and costs." },
  { q: "Is human review needed?", a: "Yes. QA journeys, throttling, and compliance for email/SMS before scaling." },
];

function AutopilotHQToolPage() {
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
        "AutopilotHQ delivers visual multi-channel journeys with built-in customer data. It’s strong for lifecycle teams that want drag-and-drop automation and personalization.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };

  const featureBlocks = [
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "Visual journeys", body: "Drag-and-drop canvases for lifecycle flows across channels." },
    { icon: <Rocket className="h-5 w-5 text-emerald-500" />, title: "Personalization", body: "Use customer traits/events to tailor timing, content, and branches." },
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "Multi-channel", body: "Email, SMS, chat, and in-app messaging (plan-dependent)." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Compliance & throttles", body: "Quiet hours, frequency caps, and consent tools to stay compliant." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "Integrations", body: "Ecommerce, CRM, ads, and analytics connections for triggers and attribution." },
    { icon: <Plug className="h-5 w-5 text-purple-500" />, title: "Testing & reporting", body: "A/B tests and journey performance reporting to optimize flows." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="AutopilotHQ review: pricing, features, pros & cons, and alternatives so you can choose the right lifecycle automation platform."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-sky-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-cyan-200/25 blur-3xl" />
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
              <div
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}
              >
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -left-8 top-10 h-20 w-20 rounded-full bg-white blur-3xl" />
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-sky-100 blur-3xl" />
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
                  {toolName} offers visual, multi-channel journeys—QA throttling, consent, and personalization before scaling.
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
              {toolName} is a marketing automation platform with a visual journey builder for email, SMS, chat, and in-app messaging. It pairs customer data with branching logic to deliver personalized flows.
            </p>
            <p className="mt-3 text-slate-700">Use it to orchestrate lifecycle campaigns without deep engineering; still plan data quality, consent, and QA steps.</p>
            <p className="mt-3 text-slate-700">Pair with analytics to measure revenue, opt-outs, and message frequency.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for lifecycle/growth teams wanting visual, multi-channel journeys.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "DTC brands running welcome, abandon, and post-purchase flows.",
                "SaaS teams orchestrating trials, onboarding, and renewals.",
                "Marketers needing quick iteration without engineering tickets.",
                "Teams coordinating SMS/email/in-app with consent controls.",
                "Ops wanting centralized journey reporting and tests.",
                "Agencies managing multiple client journeys visually.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on visual journeys, personalization, multi-channel messaging, and compliance controls.</p>
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
                  Plans scale by contacts and channels. Higher tiers add SMS/in-app, advanced journeys, seats, and support. Model costs with send volumes and contact growth; include SMS carrier fees.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Pilot on a lower tier; upgrade for SMS/in-app and bigger contact counts once ROI is proven.</p>
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
                    <td className="px-4 py-3">Fit testing</td>
                    <td className="px-4 py-3">Core email journeys, basics</td>
                    <td className="px-4 py-3">Validate ROI</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">Scaling teams</td>
                    <td className="px-4 py-3">More contacts, SMS/in-app, testing</td>
                    <td className="px-4 py-3">Common choice</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Advanced</td>
                    <td className="px-4 py-3">High volume</td>
                    <td className="px-4 py-3">Highest limits, support, seats</td>
                    <td className="px-4 py-3">For large programs</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Budget for SMS fees and creative/testing time. Monitor opt-outs and frequency caps.</p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-sky-50 p-5 shadow-sm ring-1 ring-sky-100">
                <div className="flex items-center gap-2 text-sky-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Visual journey builder reduces engineering dependency.</li>
                  <li>Multi-channel messaging (plan-dependent).</li>
                  <li>Personalization from customer data and events.</li>
                  <li>Testing and reporting baked in.</li>
                  <li>Compliance controls like quiet hours/caps.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Sales-led pricing can climb with contacts/SMS usage.</li>
                  <li>Complex data models may still need CDP/warehouse.</li>
                  <li>Requires QA to avoid over-messaging.</li>
                  <li>Channel availability varies by plan/region.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other automation tools for channel breadth, data depth, and pricing.</p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} compares to other lifecycle platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs ActiveCampaign</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/activecampaign">
                  View ActiveCampaign
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ActiveCampaign offers deeper CRM and branching; {toolName} focuses on visual ease. Pick based on CRM needs vs simplicity.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Klaviyo</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/klaviyo">
                  View Klaviyo
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Klaviyo is ecommerce-first; {toolName} is broader and more visual. Choose based on ecommerce depth vs cross-channel design needs.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want a visual, multi-channel automation tool and can manage consent, QA, and messaging frequency.
            </p>
            <p className="mt-3 text-slate-700">Plan data hygiene and testing; monitor opt-outs and revenue impact as you scale flows.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A flexible visual automation platform—great for lifecycle teams that value ease over heavy CRM depth.
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
            <p>{toolName} provides visual multi-channel journeys with built-in data and personalization.</p>
            <p>Use it when you want faster lifecycle iteration without heavy engineering, and you can manage consent, QA, and frequency controls.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for your stack, you can try it here:{" "}
              <a className="text-sky-700 hover:text-sky-600" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-sky-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default AutopilotHQToolPage;
