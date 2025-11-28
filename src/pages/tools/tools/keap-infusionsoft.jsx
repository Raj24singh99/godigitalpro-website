import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Keap (Infusionsoft)";
const slug = "keap-infusionsoft";
const category = "CRM & Automation";
const shortPitch = "Keap (formerly Infusionsoft) combines CRM, sales pipelines, email automation, payments, and scheduling for small businesses.";
const pricingSummary =
  "Tiered pricing based on contacts and features. Higher tiers add advanced automation, pipelines, and e-commerce tools; costs rise with list size.";
const officialUrl = "https://www.keap.com";
const ratingValue = 4.0;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/keap.com",
  gradient: "from-lime-500 via-emerald-500 to-slate-600",
  glow: "shadow-[0_20px_80px_rgba(132,204,22,0.24)]",
};

const alternatives = [
  { name: "HubSpot", slug: "hubspot" },
  { name: "ActiveCampaign", slug: "activecampaign" },
  { name: "Mailchimp", slug: "mailchimp" },
  { name: "Ontraport", slug: "ontraport" },
  { name: "Pipedrive", slug: "pipedrive" },
];

const faqs = [
  {
    q: "What is Keap (Infusionsoft)?",
    a: "Keap is a CRM and automation platform that includes pipelines, email campaigns, payments, and scheduling for small businesses.",
  },
  {
    q: "Who is Keap best for?",
    a: "Service businesses and solopreneurs that want CRM, email automation, and payments in one tool.",
  },
  {
    q: "Does Keap include pipelines?",
    a: "Yes. Sales pipelines with tasks and automations are included on higher tiers.",
  },
  {
    q: "How does pricing work?",
    a: "Pricing scales by contacts and features. Higher tiers add advanced automation, pipelines, and e-commerce capabilities.",
  },
  {
    q: "Can I take payments in Keap?",
    a: "Yes. Invoices, checkout forms, and payments are available, with integrations to gateways.",
  },
  {
    q: "Is email automation included?",
    a: "Yes. Broadcasts, drip campaigns, and segmentation are built in.",
  },
  {
    q: "Does Keap integrate with calendars?",
    a: "Scheduling and calendar integrations let customers book time directly.",
  },
  {
    q: "Do I still need onboarding?",
    a: "Yes. Keap’s flexibility benefits from onboarding help to set automations, tagging, and pipelines correctly.",
  },
];

function KeapInfusionsoftToolPage() {
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
        "Keap (Infusionsoft) blends CRM, pipelines, email automation, payments, and scheduling for small businesses that want a single revenue stack.",
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
      title: "CRM & pipelines",
      body: "Track contacts and deals with tasks, reminders, and pipeline stages.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-lime-500" />,
      title: "Email automation",
      body: "Broadcasts, drips, and segmentation with visual automation builders.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Payments & invoicing",
      body: "Invoices, checkout forms, and payment integrations to collect revenue.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Scheduling",
      body: "Booking links and calendar sync to let customers schedule time.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Automations",
      body: "Trigger-based workflows across forms, emails, payments, and tasks.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Integrations",
      body: "Connect to payment gateways, forms, and third-party tools via marketplace and APIs.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Keap (Infusionsoft) review: pricing, features, pros & cons, and alternatives so you can choose the right CRM and automation platform."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-lime-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-emerald-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-lime-600" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-lime-100 blur-3xl" />
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
                  {toolName} unifies CRM, automation, payments, and scheduling so service businesses can manage revenue in one stack.
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
              {toolName} is a CRM and automation platform for small businesses. It combines contact management, pipelines, email campaigns, payments, and booking links.
            </p>
            <p className="mt-3 text-slate-700">
              Use it to capture leads, nurture with automated sequences, close deals in pipelines, and collect payments via invoices or checkout forms.
            </p>
            <p className="mt-3 text-slate-700">
              Scheduling tools let customers book meetings directly; automation connects forms, tasks, and emails without separate systems.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for small service businesses and solopreneurs that want CRM, automation, and payments in one place.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Coaches and consultants selling services with automated follow-ups.",
                "Agencies managing pipelines and recurring billing.",
                "Service businesses needing booking links tied to automations.",
                "Teams migrating from separate CRM + email + invoicing tools.",
                "Owners who value built-in payments and checkout forms.",
                "Businesses ready to invest time in automation setup.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-lime-500" />
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
              {toolName} focuses on CRM, automation, payments, and scheduling to keep revenue workflows in one platform.
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
                  {toolName} pricing scales by contacts and feature set. Advanced automation, pipelines, and e-commerce tools appear on higher tiers; list growth increases cost.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with the plan that includes automation and pipelines; upgrade when contact limits or advanced e-commerce needs require it.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Lite</td>
                    <td className="px-4 py-3">Solo businesses</td>
                    <td className="px-4 py-3">CRM, basic automations</td>
                    <td className="px-4 py-3">Lower contact limits</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Growing teams</td>
                    <td className="px-4 py-3">Pipelines, advanced automation, payments</td>
                    <td className="px-4 py-3">Good balance of features</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Max</td>
                    <td className="px-4 py-3">Larger lists</td>
                    <td className="px-4 py-3">E-commerce tools, higher limits, support</td>
                    <td className="px-4 py-3">Plan for onboarding investment</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Watch contact limits and automation complexity. Budget time for tagging strategy, deliverability checks, and payment setup.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-lime-50 p-5 shadow-sm ring-1 ring-lime-100">
                <div className="flex items-center gap-2 text-lime-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>CRM, automation, payments, and scheduling in one tool.</li>
                  <li>Visual automation builder with tagging.</li>
                  <li>Pipelines and tasks keep deals organized.</li>
                  <li>Built-in checkout forms and invoicing.</li>
                  <li>Reduces the need for multiple revenue tools.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Pricing scales with contacts.</li>
                  <li>Onboarding and automation setup take time.</li>
                  <li>UI can feel complex for new users.</li>
                  <li>May require integrations for specialized use cases.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other CRM and automation tools to match your contact volume, email needs, and budget.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-lime-700 hover:text-lime-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} compares with other CRM and automation platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs HubSpot</h3>
                <a className="text-sm font-semibold text-lime-700 hover:text-lime-600" href="/tools/hubspot">
                  View HubSpot
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                HubSpot offers broader hubs (sales, marketing, service) with a free tier. {toolName} focuses on small business automation with built-in payments. Choose based on ecosystem breadth vs. bundled revenue tools.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs ActiveCampaign</h3>
                <a className="text-sm font-semibold text-lime-700 hover:text-lime-600" href="/tools/activecampaign">
                  View ActiveCampaign
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ActiveCampaign is strong in email automation and CRM. {toolName} adds payments and scheduling natively. Pick based on whether integrated payments and booking are important to your workflow.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want CRM, automation, payments, and scheduling bundled together and are willing to invest time in setup.
            </p>
            <p className="mt-3 text-slate-700">
              Budget for onboarding to design automations, tagging, and pipelines. Monitor deliverability and contact growth to control costs.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A capable all-in-one CRM and automation platform for small businesses—best when you commit to configuration and process discipline.
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
              Choose {toolName} if you want CRM, automations, payments, and scheduling in one place and can invest in initial setup.
            </p>
            <p>
              Consider HubSpot for a broader ecosystem or ActiveCampaign for deep email automation; keep {toolName} for bundled revenue tools with payments and booking.
            </p>
            <p>{toolName} reduces stack sprawl for small businesses—success depends on thoughtful automation design and data hygiene.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-lime-700 hover:text-lime-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-lime-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default KeapInfusionsoftToolPage;
