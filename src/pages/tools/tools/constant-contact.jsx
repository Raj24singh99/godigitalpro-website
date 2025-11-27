import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Constant Contact";
const slug = "constant-contact";
const category = "Email & SMS Marketing";
const shortPitch =
  "Constant Contact offers email marketing, automation, SMS (in select regions), and list management for small businesses and nonprofits.";
const pricingSummary =
  "Pricing scales by contacts and feature tier. Higher plans add automation, segmentation, SMS, and advanced reporting; trials are available for testing.";
const officialUrl = "https://www.constantcontact.com";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/constantcontact.com",
  gradient: "from-blue-500 via-amber-500 to-emerald-500",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.22)]",
};

const alternatives = [
  { name: "Mailchimp", slug: "mailchimp" },
  { name: "SendGrid", slug: "sendgrid" },
  { name: "Mailerlite", slug: "mailerlite" },
  { name: "Klaviyo", slug: "klaviyo" },
  { name: "HubSpot", slug: "hubspot" },
];

const faqs = [
  {
    q: "What is Constant Contact?",
    a: "Constant Contact is an email and SMS marketing platform with templates, list management, automation, and reporting.",
  },
  {
    q: "Who is it for?",
    a: "Small businesses, nonprofits, and local marketers who need straightforward email campaigns, sign-up forms, and occasional SMS.",
  },
  {
    q: "How is pricing structured?",
    a: "Pricing is based on contact count and plan level. Higher tiers unlock automation, SMS, advanced segmentation, and reporting.",
  },
  {
    q: "Does it include templates?",
    a: "Yes. Drag-and-drop templates are available for newsletters, promotions, and events.",
  },
  {
    q: "Is SMS included?",
    a: "SMS availability depends on region and plan. Check current eligibility and costs before rollout.",
  },
  {
    q: "Are there integrations?",
    a: "Yes. It integrates with ecommerce platforms, CRMs, and form tools for syncing contacts and triggering campaigns.",
  },
  {
    q: "Does it support automation?",
    a: "Automation features like welcome series, birthday emails, and drip campaigns are available on higher tiers.",
  },
  {
    q: "Is there a free trial?",
    a: "Trials are offered; ongoing use requires a paid plan once trial limits are reached.",
  },
];

function ConstantContactToolPage() {
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
        "Constant Contact provides email and SMS marketing with templates, list tools, and automation for small businesses and nonprofits.",
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
      title: "Email templates",
      body: "Drag-and-drop email templates for newsletters, promotions, and events.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "List management",
      body: "Signup forms, list segmentation, and basic contact hygiene tools.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Automation",
      body: "Welcome series, drip campaigns, and triggered emails on higher tiers.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Integrations",
      body: "Connect ecommerce stores, CRMs, and form tools to sync contacts and events.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "SMS (select regions)",
      body: "Send SMS campaigns where available; manage consent and compliance.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Reporting",
      body: "Track opens, clicks, and engagement; export results for stakeholders.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Constant Contact review: pricing, features, pros & cons, and alternatives so you can pick the right email/SMS partner."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-blue-200/25 blur-3xl" />
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
                  {toolName} simplifies email and SMS for small teams with templates, list tools, and automations without heavy setup.
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
              {toolName} is an email and SMS marketing platform. Build campaigns, manage lists, and automate basic journeys without complex setup.
            </p>
            <p className="mt-3 text-slate-700">Use it for newsletters, promotions, events, and donor updates, with templates and segmentation baked in.</p>
            <p className="mt-3 text-slate-700">It works best when lists are clean, consent is captured, and senders follow deliverability best practices.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for small businesses, nonprofits, and local marketers needing reliable email campaigns.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Local businesses sending newsletters and promotions.",
                "Nonprofits updating donors and volunteers.",
                "Event organizers managing invites and reminders.",
                "Ecommerce shops syncing contacts for simple flows.",
                "Marketers who need approachable automation and templates.",
                "Teams that want SMS as an add-on for key messages (where available).",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on approachable email/SMS creation, automation, and integrations.</p>
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
                  {toolName} pricing is contact-based with plan tiers. Higher tiers add automation, segmentation, SMS (availability varies), and advanced reporting. Costs rise with list size and SMS volume.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on the lowest tier that includes automation you need; budget for list growth and SMS credits if using text.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Core/Standard</td>
                    <td className="px-4 py-3">Newsletters and promos</td>
                    <td className="px-4 py-3">Templates, basic automation, reporting</td>
                    <td className="px-4 py-3">Good starter tier</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Plus</td>
                    <td className="px-4 py-3">Growing lists</td>
                    <td className="px-4 py-3">More automation, segmentation, ecommerce tools</td>
                    <td className="px-4 py-3">Fits most small businesses</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">SMS/Advanced</td>
                    <td className="px-4 py-3">Email + SMS & deeper reporting</td>
                    <td className="px-4 py-3">SMS (where available), advanced analytics</td>
                    <td className="px-4 py-3">Budget for credits and compliance</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Keep lists clean, use double opt-in where possible, and warm sender domains to maintain deliverability as you scale.</p>
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
                  <li>Approachable templates and editor.</li>
                  <li>Contact-based pricing is easy to model.</li>
                  <li>Basic automation and segmentation built in.</li>
                  <li>Integrations for ecommerce and CRMs.</li>
                  <li>SMS option where supported.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Advanced automation is lighter than specialist tools.</li>
                  <li>SMS availability depends on region; credits add cost.</li>
                  <li>Not as deep for ecommerce as Klaviyo/others.</li>
                  <li>Deliverability depends on list hygiene and setup.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other email/SMS platforms to match automation depth, ecommerce needs, and budget.
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
            <p className="text-slate-700">See how {toolName} compares with other email platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Mailchimp</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/mailchimp">
                  View Mailchimp
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Mailchimp offers broader automation and ecommerce templates; {toolName} focuses on ease for small teams. Choose based on automation depth and UI preference.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Klaviyo</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/klaviyo">
                  View Klaviyo
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Klaviyo is ecommerce-first with deep lifecycle flows; {toolName} is simpler for newsletters and basic automations. Pick based on ecommerce focus and required segmentation depth.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want approachable email marketing with templates, list tools, and light automation, plus optional SMS where available.
            </p>
            <p className="mt-3 text-slate-700">
              It works best when lists are clean, sender reputation is managed, and campaigns are measured against conversions and goals.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A solid pick for small teams and nonprofits—budget for list growth and consider SMS availability in your region.
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
              Choose {toolName} if you need approachable email marketing with templates, list tools, and light automation, plus optional SMS.
            </p>
            <p>
              Consider Mailchimp or Klaviyo if you need deeper ecommerce automation; use {toolName} when simplicity and small-team fit matter most.
            </p>
            <p>{toolName} keeps campaigns moving with minimal overhead—prioritize list hygiene and deliverability to get the most value.</p>
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

export default ConstantContactToolPage;
