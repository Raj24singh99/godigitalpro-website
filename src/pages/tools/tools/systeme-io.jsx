import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Systeme.io";
const slug = "systeme-io";
const category = "All-in-one funnels";
const shortPitch = "Systeme.io bundles funnels, email, checkout, and automation so you can launch offers without stitching tools together.";
const pricingSummary =
  "Tiered plans with contact and automation limits. Higher tiers add evergreen webinars, more workflows, and higher email/contacts caps; free plan to start.";
const officialUrl = "https://systeme.io";
const ratingValue = 4.1;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/systeme.io",
  gradient: "from-emerald-500 via-teal-500 to-sky-500",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.24)]",
};

const alternatives = [
  { name: "Kartra", slug: "kartra" },
  { name: "GrooveFunnels", slug: "groovefunnels" },
  { name: "Builderall", slug: "builderall" },
  { name: "ClickUp", slug: "clickup" },
  { name: "ConvertKit", slug: "convertkit" },
];

const faqs = [
  {
    q: "What is Systeme.io?",
    a: "Systeme.io is an all-in-one marketing platform with funnels, email marketing, automations, checkout, and membership features.",
  },
  {
    q: "Who is it for?",
    a: "Creators, course sellers, coaches, and small teams that want a simple stack for funnels, email, and payments without multiple tools.",
  },
  {
    q: "Does Systeme.io support automations?",
    a: "Yes. You can build workflows, tags, and sequences across email, funnels, and membership actions.",
  },
  {
    q: "How is pricing structured?",
    a: "Free plan to start; paid tiers lift contact limits and add automations, evergreen webinars, and more domains.",
  },
  {
    q: "Can I host courses or memberships?",
    a: "Yes. You can host modules, gate content, and accept payments inside the platform.",
  },
  {
    q: "Does it replace separate email tools?",
    a: "It can for simpler needs. For advanced deliverability controls and analytics, some teams still pair a dedicated ESP.",
  },
  {
    q: "Are checkout and affiliate tools included?",
    a: "Checkout, order bumps, upsells, and affiliate program management are included on paid tiers.",
  },
  {
    q: "Does it integrate with other tools?",
    a: "Native integrations are limited; you can use Zapier/webhooks to connect with CRMs, analytics, and fulfillment tools.",
  },
];

function SystemeToolPage() {
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
        "Systeme.io combines funnels, email, automations, checkout, and memberships in one platform. Great for creators who want fewer tools, but integrations are lighter than specialist stacks.",
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
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "Drag-and-drop funnels",
      body: "Launch landing pages, opt-ins, upsells, and order bumps without code.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Email + automation",
      body: "Sequences, tags, workflows, and broadcasts tied to funnel events.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Courses & memberships",
      body: "Host modules, gate content, and drip lessons with built-in payments.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Affiliates included",
      body: "Track referrals, payouts, and links without buying a separate platform.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Hosted delivery",
      body: "Pages, email, and membership hosting handled for you; SSL and domains on paid tiers.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Zapier/webhooks",
      body: "Extend to CRMs, analytics, or fulfillment tools when native integrations are missing.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Systeme.io review: pricing, features, pros & cons, and alternatives so you know if the all-in-one funnel stack fits your business."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-sky-200/25 blur-3xl" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-emerald-100 blur-3xl" />
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
                  {toolName} replaces multiple tools for funnels, email, and memberships—use it to ship offers faster, then refine automations and deliverability.
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
              {toolName} is an all-in-one platform for landing pages, funnels, email, automations, memberships, and checkout. It aims to replace a multi-tool stack for solo founders and lean teams.
            </p>
            <p className="mt-3 text-slate-700">
              Treat it as a speed-to-launch tool: you get the basics of funnels, email, and courses in one place. Advanced analytics, deep integrations, or complex CRM needs may still require add-ons.
            </p>
            <p className="mt-3 text-slate-700">Plan for QA on deliverability, mobile layouts, and payment flows before scaling campaigns.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for creators and small teams that want to launch offers quickly without stitching multiple tools.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Course creators launching funnels, webinars, and email sequences.",
                "Coaches selling programs with membership access and upsells.",
                "Solo founders testing new offers or lead magnets on a budget.",
                "Agencies needing a simple stack for client lead funnels.",
                "Operators consolidating email + checkout + landing pages.",
                "Teams wanting built-in affiliate tracking without extra tools.",
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
            <p className="mt-3 text-slate-700">
              {toolName} focuses on funnels, email, automations, memberships, and checkout with affiliate management built in.
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
                  {toolName} uses contact- and automation-based tiers. Free starts small; paid tiers add more contacts, workflows, domains, and evergreen webinars. Costs rise with list size and automation depth.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start free for validation; move to a mid tier when you need automations, custom domains, or higher email volume.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Free/Starter</td>
                    <td className="px-4 py-3">Validation/light lists</td>
                    <td className="px-4 py-3">Limited contacts, core funnels, basic automations</td>
                    <td className="px-4 py-3">Good for first offer</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Mid tier</td>
                    <td className="px-4 py-3">Growing lists</td>
                    <td className="px-4 py-3">More contacts, workflows, domains</td>
                    <td className="px-4 py-3">Balances cost and scale</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Top/Unlimited</td>
                    <td className="px-4 py-3">High-volume senders</td>
                    <td className="px-4 py-3">Highest limits, evergreen webinars, more automations</td>
                    <td className="px-4 py-3">Pick when scaling aggressively</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Track deliverability and conversion by funnel. Budget time for copy, split tests, and QA on upsells and emails before scaling spend.
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
                  <li>All-in-one stack for funnels, email, and checkout.</li>
                  <li>Free plan to test before committing.</li>
                  <li>Affiliate tracking built in.</li>
                  <li>Saves time vs stitching multiple tools.</li>
                  <li>Good for quick MVP launches.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Fewer deep integrations than specialist tools.</li>
                  <li>Email deliverability needs monitoring at scale.</li>
                  <li>Design flexibility is simpler than pro page builders.</li>
                  <li>Analytics and reporting are basic.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other funnel and all-in-one platforms to match your automation needs, integrations, and budget.
            </p>
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
            <p className="text-slate-700">See how {toolName} compares to other funnel and all-in-one platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Kartra</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/kartra">
                  View Kartra
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Kartra has richer analytics and page controls; {toolName} wins on simplicity and a free plan. Choose based on how much customization and reporting you need.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs GrooveFunnels</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/groovefunnels">
                  View GrooveFunnels
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                GrooveFunnels offers more apps in-suite; {toolName} focuses on core funnels and email. Pick Groove for breadth, {toolName} for lean setup and speed.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want a simple, all-in-one stack for funnels, email, and memberships and are willing to trade deep integrations for speed and lower cost.
            </p>
            <p className="mt-3 text-slate-700">
              Monitor email deliverability, template flexibility, and analytics as you scale. Add specialized tools later if you outgrow built-ins.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Strong for creators and lean teams that value speed-to-launch; pair with QA and selective integrations as you grow.
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
              Choose {toolName} if you want one place for funnels, email, checkout, and memberships with built-in affiliates and a quick setup path.
            </p>
            <p>
              Consider Kartra for deeper analytics or GrooveFunnels for a broader suite; use {toolName} when simplicity and speed matter most.
            </p>
            <p>{toolName} keeps your go-to-market lean—keep humans in the loop to review copy, deliverability, and payment flows.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-emerald-700 hover:text-emerald-500" href={officialUrl}>
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

export default SystemeToolPage;
