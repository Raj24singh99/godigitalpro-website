import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown, MousePointerClick } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Crazy Egg";
const slug = "crazy-egg";
const category = "Heatmaps & CRO";
const shortPitch =
  "Crazy Egg provides heatmaps, scrollmaps, session recordings, and A/B testing to help marketers see how visitors behave and improve conversions without heavy setup.";
const pricingSummary =
  "Plans typically start near $29/month with tiers based on tracked pageviews and snapshots. Higher tiers add more recordings, advanced filters, and multiple user seats.";
const officialUrl = "https://www.crazyegg.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/crazyegg.com",
  gradient: "from-amber-500 via-orange-500 to-rose-500",
  glow: "shadow-[0_20px_80px_rgba(249,115,22,0.22)]",
};

const alternatives = [
  { name: "Hotjar", slug: "hotjar" },
  { name: "VWO", slug: "vwo" },
  { name: "Lucky Orange", slug: "lucky-orange" },
  { name: "Plausible", slug: "plausible" },
  { name: "Matomo", slug: "matomo" },
];

const faqs = [
  { q: "What does Crazy Egg do?", a: "Crazy Egg offers heatmaps, scrollmaps, session recordings, and A/B testing so marketers can see where users click, where they drop off, and which changes lift conversions." },
  { q: "Is Crazy Egg easy to set up?", a: "Yes. Add the script once or deploy via Tag Manager or CMS plugins. Snapshots and recordings start capturing without complex configuration." },
  { q: "Does Crazy Egg have A/B testing?", a: "Crazy Egg includes basic A/B testing with visual edits and split traffic. You can test headlines, images, CTAs, layouts, and measure conversion impact." },
  { q: "Can I segment users and traffic?", a: "You can filter by device, referral source, UTM params, country, and more. This helps you spot UX issues by segment." },
  { q: "Is Crazy Egg GDPR-friendly?", a: "Crazy Egg supports privacy-friendly settings, masking, and consent options. You can exclude sensitive fields and IPs to align with compliance requirements." },
  { q: "What integrations exist?", a: "Crazy Egg integrates with Google Tag Manager, WordPress, Shopify, and other CMS/ecommerce platforms. You can export data and pair with your analytics stack." },
  { q: "Who is Crazy Egg best for?", a: "Marketers, CRO specialists, and product teams looking for quick visual insight into page performance and simple testing without enterprise tooling." },
  { q: "Which plan should I choose?", a: "Start with the entry plan to benchmark traffic and clicks. Upgrade when you need more snapshots, higher pageviews, or more teammates/testing capacity." },
];

function CrazyEggToolPage() {
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
        "Crazy Egg is a straightforward heatmap and A/B testing suite. It helps marketers and CRO teams spot friction with click maps, recordings, and quick experiments without complex setup.",
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
      icon: <MousePointerClick className="h-5 w-5 text-amber-500" />,
      title: "Heatmaps and scrollmaps",
      body: "Visualize where users click, hover, and how far they scroll to spot dead zones and discover high-interest sections.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-rose-500" />,
      title: "Session recordings",
      body: "Watch anonymized user sessions to see real behaviors, rage clicks, and exit points that analytics alone can miss.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-emerald-500" />,
      title: "A/B testing built in",
      body: "Run quick experiments on copy, buttons, and layouts with visual edits and measure conversion uplifts without engineering support.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-600" />,
      title: "Easy installation and integrations",
      body: "Add via script, GTM, or CMS plugins. Works with WordPress, Shopify, and most ecommerce or marketing stacks.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Privacy controls",
      body: "Mask sensitive fields, comply with consent, and limit data collection for GDPR-friendly implementations.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-orange-500" />,
      title: "Insights for CRO and UX",
      body: "Combine heatmaps, recordings, and tests to prioritize fixes that improve conversions and user journeys quickly.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Unbiased Crazy Egg review for marketers: pricing, features, pros & cons, alternatives, and how it compares to Hotjar, VWO, and Lucky Orange."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-amber-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-amber-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-rose-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-amber-500" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-amber-200 blur-3xl" />
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
                  Crazy Egg simplifies heatmaps, recordings, and A/B tests so marketers can see friction fast and ship CRO fixes without heavy analytics builds.
                </p>
                <div className="relative mt-4 flex items-center gap-2 text-sm font-semibold">
                  <Sparkles className="h-4 w-4 text-yellow-100" />
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
              {toolName} is a {category.toLowerCase()} and testing tool that shows how visitors interact with your pages. Heatmaps, scrollmaps, and recordings reveal friction, while built-in A/B testing validates fixes.
            </p>
            <p className="mt-3 text-slate-700">
              CRO teams, marketers, and product designers use Crazy Egg to quickly diagnose UX issues without full analytics overhauls. Installation is lightweight and works across CMS and ecommerce platforms.
            </p>
            <p className="mt-3 text-slate-700">
              With segmentation, privacy controls, and simple reporting, teams can move from insight to experiment to result in days, not weeks.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} is ideal for teams that want actionable UX insights and testing without complex setup.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Marketers needing quick visibility into what users click or ignore.",
                "CRO specialists prioritizing experiments based on real behavior.",
                "Product teams validating design updates before wide rollout.",
                "Ecommerce managers improving PDPs, carts, and checkouts.",
                "Agencies doing conversion audits for clients with minimal dev work.",
                "Founders wanting a simple heatmap + testing stack for landing pages.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">Crazy Egg focuses on visual insights and simple testing that tie directly to CRO outcomes.</p>
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
                  Pricing is based on pageviews and snapshot volume. Plans add more recordings, seats, and support at higher tiers. Annual billing can lower effective rates.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with entry plan; upgrade when you need more snapshots or seats for teams.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Plan</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key inclusions</th>
                    <th className="px-4 py-3">Approx. price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Entry</td>
                    <td className="px-4 py-3">Small sites and landing pages</td>
                    <td className="px-4 py-3">Heatmaps/scrollmaps, limited recordings, A/B tests</td>
                    <td className="px-4 py-3">~$29/month</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Standard</td>
                    <td className="px-4 py-3">Growing marketing teams</td>
                    <td className="px-4 py-3">More snapshots, recordings, filters, and seats</td>
                    <td className="px-4 py-3">~$49–$99/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Plus / Pro</td>
                    <td className="px-4 py-3">High-traffic sites and CRO agencies</td>
                    <td className="px-4 py-3">Highest pageviews, priority support, more workspaces</td>
                    <td className="px-4 py-3">$99+/month</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Choose based on monthly traffic and team size. Recordings and testing usage drive the need for higher tiers; prioritize the plan that best matches your experimentation cadence.
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
                  <li>Fast setup with clear visual insights (heatmaps, scrollmaps).</li>
                  <li>Session recordings reveal real friction points.</li>
                  <li>Built-in A/B testing for quick iterations without developer time.</li>
                  <li>Segments by device, referral, UTM, and more for targeted fixes.</li>
                  <li>CMS/ecommerce-friendly with plugins and GTM support.</li>
                  <li>Privacy controls to mask sensitive data and honor consent.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Recording quotas and pageview limits may require higher tiers for busy sites.</li>
                  <li>Testing features are simpler than dedicated experimentation platforms.</li>
                  <li>Reporting is lighter than enterprise analytics suites.</li>
                  <li>Heatmap accuracy can vary on highly dynamic or app-like pages.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Crazy Egg sits between lightweight analytics and full experimentation suites. Pick based on testing depth, pricing, and how much qualitative insight you need.
            </p>
            <p className="mt-2 text-slate-700">All offer behavior analytics; differences lie in testing capabilities, privacy options, and cost.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
                  </div>
                  <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">Here’s how Crazy Egg compares to two popular CRO tools.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Hotjar</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/compare/vwo-vs-hotjar-vs-crazy-egg">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Hotjar is broad with feedback widgets and surveys. Crazy Egg focuses on heatmaps, recordings, and quick tests with simple setup. Both reveal behavior; Hotjar leans more into feedback.
              </p>
              <p className="mt-2 text-slate-700">
                Choose Crazy Egg for fast CRO insights and built-in A/B tests; choose Hotjar if you want feedback polls alongside behavior maps.
              </p>
              <p className="mt-2 text-slate-900">Both are easy to deploy; pick based on whether feedback collection is essential.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Lucky Orange</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/compare/lucky-orange-vs-hotjar-vs-crazy-egg">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Lucky Orange adds live chat and real-time dashboards alongside heatmaps and recordings. Crazy Egg keeps focus on insights and testing with a straightforward UI.
              </p>
              <p className="mt-2 text-slate-700">
                Choose Crazy Egg if you already have chat/support tools and want pure CRO insights. Choose Lucky Orange if you want bundled chat plus behavior analytics together.
              </p>
              <p className="mt-2 text-slate-900">Both work for SMBs; decide based on whether live chat is part of your workflow.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it for marketers and CRO teams who need quick visual insight and basic testing without heavy analytics stacks. It’s fast to deploy, easy to read, and good for prioritizing fixes.
            </p>
            <p className="mt-3 text-slate-700">
              If you require advanced experimentation or deep product analytics, consider VWO or Mixpanel. For behavior + feedback together, Hotjar may fit better.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Crazy Egg is a solid, budget-friendly choice for heatmaps, recordings, and lightweight A/B testing that improve conversions quickly.
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
              Choose Crazy Egg if you want fast heatmaps, recordings, and simple testing to guide CRO decisions without heavy technical lift.
            </p>
            <p>
              Consider Hotjar for feedback + behavior or VWO for robust experimentation. Lucky Orange is solid if you also want live chat with analytics.
            </p>
            <p>Crazy Egg plays nicely with CMS, ecommerce, and analytics stacks, helping teams move from insight to conversion wins quickly.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-amber-700 hover:text-amber-600" href={officialUrl}>
                Visit {toolName}
              </a>
              .
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-amber-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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
      {open && (
        <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">
          {answer}
        </div>
      )}
    </div>
  );
}

export default CrazyEggToolPage;
