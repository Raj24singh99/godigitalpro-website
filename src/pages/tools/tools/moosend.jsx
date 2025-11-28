import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Moosend";
const slug = "moosend";
const category = "Email Marketing & Automation";
const shortPitch = "Moosend is an email marketing and automation platform with drag-and-drop campaigns, segmentation, and simple eCommerce workflows.";
const pricingSummary = "Pricing scales with subscriber count and features. Higher tiers add automation depth, transactional emails, and support options.";
const officialUrl = "https://moosend.com";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/moosend.com",
  gradient: "from-amber-500 via-sky-500 to-emerald-500",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.22)]",
};

const alternatives = [
  { name: "Mailchimp", slug: "mailchimp" },
  { name: "MailerLite", slug: "mailerlite" },
  { name: "Sendinblue", slug: "sendinblue" },
  { name: "SendGrid", slug: "sendgrid" },
  { name: "Klaviyo", slug: "klaviyo" },
];

const faqs = [
  { q: "What is Moosend?", a: "Moosend is an email marketing platform for campaigns, segmentation, and automation with a drag-and-drop editor." },
  { q: "Who is it for?", a: "SMBs, eCommerce stores, and marketers who need simple email automation without complex enterprise overhead." },
  { q: "Does it support automation?", a: "Yes. Automations include welcome flows, abandoned cart, and other triggers." },
  { q: "Is there a free plan?", a: "Moosend has offered trials and lower-cost tiers; check current pricing for free/paid options." },
  { q: "Does it handle transactional email?", a: "Transactional sending is available on certain plans; confirm limits and setup." },
  { q: "Are templates included?", a: "Yes. Templates and a drag-and-drop editor help build campaigns quickly." },
  { q: "What about integrations?", a: "Integrations cover popular eCommerce and marketing tools; verify for your stack." },
  { q: "Can I manage segmentation?", a: "Yes. Segments and personalization are supported; data quality remains important." },
];

function MoosendToolPage() {
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
        "Moosend provides email campaigns, segmentation, and automations with a drag-and-drop editor. It suits SMBs and eCommerce stores wanting approachable email tools.",
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
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "Drag-and-drop editor", body: "Build campaigns quickly with templates and a visual editor." },
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "Segmentation & personalization", body: "Target subscribers with segments, personalization, and dynamic content." },
    { icon: <Rocket className="h-5 w-5 text-emerald-500" />, title: "Automations", body: "Set up welcome series, abandoned cart, and other triggered flows." },
    { icon: <Plug className="h-5 w-5 text-purple-500" />, title: "Integrations", body: "Connect to eCommerce and marketing tools to sync audiences and events." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "Analytics", body: "Track opens, clicks, and conversions to improve campaigns." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Deliverability focus", body: "Tools to manage list hygiene and sending reputation; best results require good practices." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Moosend review: pricing, features, pros & cons, and alternatives so you can pick the right email platform for your list."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-sky-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-amber-600" />
                {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                {toolName} Review (2025): Features, Pricing, Pros & Cons
              </h1>
              <p className="mt-4 text-lg text-slate-600">{shortPitch}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-700">
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Our rating: {ratingValue}/5</span>
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Reviewed by GoDigitalPro - Updated May 2025</span>
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
                  {toolName} keeps email simple with a visual editor and approachable automation. Pair it with good list hygiene and deliverability setup for best results.
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
              {toolName} is an email marketing platform with campaign creation, segmentation, and automation. It is aimed at SMBs and eCommerce stores wanting an easy editor and straightforward automation without enterprise complexity.
            </p>
            <p className="mt-3 text-slate-700">Use it for newsletters, basic customer journeys, and store-triggered emails like welcome and cart recovery.</p>
            <p className="mt-3 text-slate-700">Deliverability still depends on list hygiene, DNS setup, and engagement best practices.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for small teams and stores that want approachable email automation.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "SMBs sending newsletters and promos.",
                "eCommerce brands running welcome and cart flows.",
                "Agencies building simple flows for clients.",
                "Marketers needing quick templates and personalization.",
                "Founders managing email without heavy setup.",
                "Teams wanting transactional email alongside marketing.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-amber-500" />
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
              {toolName} focuses on easy campaign building, automation basics, and integrations for stores and SMBs.
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
                  {toolName} pricing scales with subscriber count. Higher tiers add automation depth, transactional sending, and support. Choose a tier that matches list size and automation complexity.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on a low tier to test deliverability and flows; upgrade as your list grows or if you need more automation and support.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Entry/Starter</td>
                    <td className="px-4 py-3">Small lists</td>
                    <td className="px-4 py-3">Templates, campaigns, basic automation</td>
                    <td className="px-4 py-3">Good to validate deliverability</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">Growing stores and SMBs</td>
                    <td className="px-4 py-3">More subscribers, advanced flows, transactional options</td>
                    <td className="px-4 py-3">Fits most teams scaling email</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro/Enterprise</td>
                    <td className="px-4 py-3">Large lists and complex needs</td>
                    <td className="px-4 py-3">Highest limits, deliverability support, service</td>
                    <td className="px-4 py-3">Best when email is mission-critical</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Plan for DNS setup, list hygiene, and testing. Budget time for creative and segmentation to keep engagement high and spam rates low.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros and cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-amber-50 p-5 shadow-sm ring-1 ring-amber-100">
                <div className="flex items-center gap-2 text-amber-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Easy drag-and-drop email builder.</li>
                  <li>Approachable automations for common flows.</li>
                  <li>Affordable entry pricing for small lists.</li>
                  <li>Templates and personalization speed up campaigns.</li>
                  <li>Transactional options on higher tiers.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Less advanced than enterprise ESPs for complex automation.</li>
                  <li>Deliverability depends on list hygiene and setup; support varies by tier.</li>
                  <li>Feature depth may be lighter than specialized eCommerce ESPs.</li>
                  <li>May need external tools for deep analytics or CDP use cases.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other ESPs to balance automation depth, eCommerce features, and pricing.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
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
            <p className="text-slate-700">See how {toolName} compares with similar ESPs.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify_between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Mailchimp</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/mailchimp">
                  View Mailchimp
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Mailchimp offers broader templates and brand assets; {toolName} focuses on simplicity and cost. Choose {toolName} if you need approachable automation, Mailchimp for more ecosystem breadth.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify_between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs MailerLite</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/mailerlite">
                  View MailerLite
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                MailerLite is also simple and affordable; {toolName} has similar strengths. Compare pricing, templates, and deliverability support for your list size and niche.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need an approachable ESP for newsletters and basic automations without enterprise cost or complexity.
            </p>
            <p className="mt-3 text-slate-700">
              Pair it with strong list hygiene, DNS setup, and testing to keep deliverability healthy. Consider specialized ESPs if you require deep eCommerce data or CDP features.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Solid SMB option; keep good deliverability practices to get the most from it.
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
            <p>Use {toolName} for approachable email marketing and automations if you run small to mid-size lists.</p>
            <p>
              Upgrade tiers as your list and automation complexity grow; pair with best practices for deliverability to maintain inbox placement.
            </p>
            <p>{toolName} can power SMB email programs—human strategy and list care keep results strong.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-amber-700 hover:text-amber-500" href={officialUrl}>
                Visit {toolName}
              </a>.
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
        className="flex w-full items-center justify_between px-4 py-3 text-left text-slate-900"
      >
        <span className="text-sm font-semibold md:text-base">{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">{answer}</div>}
    </div>
  );
}

export default MoosendToolPage;
