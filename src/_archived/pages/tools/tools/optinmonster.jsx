import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown, LayoutTemplate, Target } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "OptinMonster";
const slug = "optinmonster";
const category = "Conversion Optimization";
const shortPitch =
  "OptinMonster is a conversion toolkit for marketers that builds popups, slide-ins, and onsite campaigns with advanced targeting to grow email lists and recover abandoning visitors.";
const pricingSummary =
  "Plans start near $9/month when billed annually. Higher tiers add behavior targeting, A/B testing, countdowns, and integrations with major ESPs and CRMs.";
const officialUrl = "https://optinmonster.com";
const affiliateUrl = `/go/${slug}`;
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/optinmonster.com",
  gradient: "from-lime-500 via-emerald-500 to-sky-500",
  glow: "shadow-[0_20px_80px_rgba(132,204,22,0.18)]",
};

const alternatives = [
  { name: "Unbounce", slug: "unbounce", isComparison: true },
  { name: "Leadpages", slug: "leadpages", isComparison: true },
  { name: "Instapage", slug: "instapage" },
  { name: "ConvertKit", slug: "convertkit" },
  { name: "MailerLite", slug: "mailerlite" },
];

const faqs = [
  {
    q: "Is OptinMonster free?",
    a: "No free plan, but it offers a low-cost Starter tier. Most marketers upgrade to Growth for behavior targeting, A/B testing, and exit-intent.",
  },
  {
    q: "Which OptinMonster plan is best for beginners?",
    a: "Start with Basic if you just need simple popups and integrations. Move to Growth for exit-intent, device targeting, and revenue attribution once you have traffic.",
  },
  {
    q: "Does OptinMonster integrate with my ESP or CRM?",
    a: "Yes. It connects with Mailchimp, ConvertKit, ActiveCampaign, HubSpot, Klaviyo, and dozens of others. HTML/webhooks fill gaps when a native integration is missing.",
  },
  {
    q: "Can OptinMonster be used on Shopify or WooCommerce?",
    a: "Yes. It works across CMS platforms. Ecommerce teams use cart/checkout behavior targeting, coupons, and countdown timers to recover abandoning shoppers.",
  },
  {
    q: "How is OptinMonster different from page builders like Unbounce?",
    a: "Page builders focus on landing pages. OptinMonster specializes in onsite overlays, slide-ins, and onsite targeting to capture leads and reduce bounce on existing pages.",
  },
  {
    q: "Does OptinMonster support A/B testing?",
    a: "Yes. You can A/B test designs, triggers, and targeting rules, then shift traffic to top performers to lift conversion rates.",
  },
  {
    q: "Is OptinMonster GDPR compliant?",
    a: "You can enable consent checkboxes, display privacy links, and keep data handling within your ESP/CRM. Always consult legal counsel for your specific use case.",
  },
  {
    q: "Does OptinMonster slow down my site?",
    a: "It’s designed to be lightweight. Use asynchronous loading and avoid stacking too many campaigns on a single page to keep performance healthy.",
  },
];

function OptinMonsterToolPage() {
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
        "OptinMonster helps marketers capture more leads with targeted popups, slide-ins, and onsite campaigns. It pairs flexible templates with behavior targeting, ESP integrations, and testing to steadily improve conversion rates.",
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
      icon: <LayoutTemplate className="h-5 w-5 text-lime-600" />,
      title: "Drag-and-drop campaign builder",
      body: "Launch popups, slide-ins, floating bars, and gamified wheels quickly with templates tuned for ecommerce and lead-gen.",
    },
    {
      icon: <Target className="h-5 w-5 text-emerald-600" />,
      title: "Behavior and device targeting",
      body: "Target by exit intent, scroll depth, source, device, geolocation, or referrer so campaigns appear only to high-intent visitors.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-indigo-500" />,
      title: "A/B testing and analytics",
      body: "Run experiments on copy, design, and triggers. Shift traffic to winners with built-in stats and upstream analytics connections.",
    },
    {
      icon: <Plug className="h-5 w-5 text-sky-500" />,
      title: "ESP and CRM integrations",
      body: "Connect to Mailchimp, ConvertKit, ActiveCampaign, HubSpot, Klaviyo, and more so every lead lands in the right list or sequence.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Compliance and consent options",
      body: "Add consent checkboxes, double opt-in, and privacy links to keep campaigns compliant in regulated markets.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Ecommerce boosters",
      body: "Use countdowns, coupons, and cart abandonment triggers to recover revenue on Shopify, WooCommerce, and BigCommerce stores.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="In-depth OptinMonster review covering pricing, features, pros, cons, alternatives, and whether it fits your 2025 conversion stack."
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
          <div className="absolute inset-0 bg-gradient-to-br from-lime-50 via-white to-slate-50" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-lime-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-emerald-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-lime-500" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-lime-200 blur-3xl" />
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
                  OptinMonster helps you lift onsite conversions with targeted overlays that capture emails, segment visitors, and route leads instantly to your ESP/CRM.
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
              OptinMonster is a {category.toLowerCase()} platform for building onsite campaigns—popups, slide-ins, floating bars, and inline forms—that convert visitors into subscribers or customers.
            </p>
            <p className="mt-3 text-slate-700">
              Marketers use it to gate lead magnets, recover abandoning carts, or trigger targeted offers based on device, intent, or referral source without editing code-heavy templates.
            </p>
            <p className="mt-3 text-slate-700">
              The tool integrates with major email and CRM platforms so captured leads instantly enter automations, supporting ecommerce, SaaS, and content-driven funnels.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} suits teams focused on growing lists and capturing intent without heavy development.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Content marketers turning readers into subscribers with targeted scroll and exit overlays.",
                "Ecommerce teams recovering abandoning carts with coupons, timers, and cart-triggered popups.",
                "SaaS marketers capturing demos and trials via lead magnets and behavior-based offers.",
                "Agencies running lead-gen overlays across multiple client sites with centralized reporting.",
                "Lifecycle teams segmenting visitors by source or device before sending to ESP automations.",
                "Founders launching quick onsite experiments without changing page templates.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-lime-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">OptinMonster focuses on fast campaign launch, granular targeting, and conversion testing.</p>
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
                  Pricing scales by features and sites. Starter covers basic popups, while Growth adds exit-intent, device targeting, countdowns, and advanced integrations for serious CRO work.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on Basic to validate demand; upgrade to Growth once you run exit-intent and A/B tests regularly.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Basic</td>
                    <td className="px-4 py-3">New sites testing popups</td>
                    <td className="px-4 py-3">Core templates, 1 site, no exit-intent</td>
                    <td className="px-4 py-3">~$9/month (annual)</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Plus</td>
                    <td className="px-4 py-3">Growing sites, multiple campaigns</td>
                    <td className="px-4 py-3">More sites, advanced triggers</td>
                    <td className="px-4 py-3">~$19/month (annual)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Serious CRO teams</td>
                    <td className="px-4 py-3">Exit-intent, geolocation, A/B testing, countdowns</td>
                    <td className="px-4 py-3">~$29/month (annual)</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">High-traffic sites and agencies</td>
                    <td className="px-4 py-3">All triggers, site licenses, advanced integrations</td>
                    <td className="px-4 py-3">~$49+/month (annual)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Upgrade when you need exit-intent, device targeting, A/B testing, or more sites. If you already use a landing page builder, pair OptinMonster for onsite overlays rather than replacing it.
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
                  <li>Fast to launch popups, slide-ins, and floating bars without code.</li>
                  <li>Strong targeting rules: exit-intent, scroll, referrer, device, geolocation.</li>
                  <li>Deep ESP/CRM integrations to segment subscribers automatically.</li>
                  <li>A/B testing and reporting baked in for CRO cycles.</li>
                  <li>Templates optimized for ecommerce, SaaS, and publishers.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>No true free plan; best features start at higher tiers.</li>
                  <li>Page-builder style landing pages are outside its focus.</li>
                  <li>Design flexibility is good but less open-ended than a full page builder.</li>
                  <li>Too many overlapping campaigns can impact UX if not managed carefully.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Teams compare OptinMonster with page builders and other onsite conversion tools, depending on whether they want full landing pages or lightweight overlays.
            </p>
            <p className="mt-2 text-slate-700">All of these support lead capture; they differ on design control, analytics depth, and pricing.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Comparison available for a direct look." : "Popular alternative for onsite conversions."}</p>
                  </div>
                  <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-500" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">Here’s how OptinMonster compares to two nearby options.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Unbounce</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/compare/optinmonster-vs-unbounce-vs-leadpages">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Unbounce is a landing page builder with AI copy/testing features. OptinMonster specializes in overlays and onsite widgets. Pair them if you want landing pages plus targeted popups on your site.
              </p>
              <p className="mt-2 text-slate-900">
                Choose OptinMonster for onsite CRO without rebuilding pages; choose Unbounce if you need full-page design and dynamic text replacement.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs ConvertKit</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/compare/optinmonster-vs-convertkit-vs-mailerlite">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ConvertKit is an ESP with landing pages; OptinMonster is a front-end capture layer. Many creators pair them: OptinMonster captures and targets, ConvertKit nurtures and automates.
              </p>
              <p className="mt-2 text-slate-900">
                Choose OptinMonster for richer onsite targeting; choose ConvertKit for email-first workflows and creator tooling.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              OptinMonster is worth it if you need to capture more leads on existing pages with targeted overlays, A/B tests, and strong ESP/CRM integrations. It helps ecommerce recover carts and content teams grow lists faster.
            </p>
            <p className="mt-3 text-slate-700">
              If you mainly need landing pages or email automation, pair it with Unbounce or ConvertKit instead of replacing them. Avoid over-stacking campaigns to keep UX clean.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Use {toolName} to lift onsite conversion rates; complement it with your existing ESP or page builder for nurture and page creation.
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
              Choose {toolName} if you want targeted overlays to turn traffic into leads without redesigning pages. It’s especially strong for ecommerce promos, lead magnets, and segmenting visitors before sending them to email automations.
            </p>
            <p>
              Consider landing page builders like Unbounce or Leadpages if you need full-page creation. Combine them with {toolName} for onsite CRO plus nurture.
            </p>
            <p>{toolName} fits well alongside ESPs and CRMs—capture intent onsite, then automate follow-up in your existing stack.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for your site, you can try it here: <a className="text-emerald-700 hover:text-emerald-500" href={officialUrl}>Visit {toolName}</a>.
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-emerald-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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

export default OptinMonsterToolPage;
