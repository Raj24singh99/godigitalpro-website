import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Folder, Crown, ArrowLeft, ChevronDown, BarChart3, Mail, Server } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "SendGrid";
const slug = "sendgrid";
const category = "Email Delivery & Marketing";
const shortPitch = "SendGrid is an email delivery and marketing platform offering APIs, SMTP relay, templates, and analytics for transactional and marketing emails.";
const pricingSummary = "Free and paid tiers based on monthly sends and features. Higher tiers add dedicated IPs, subuser management, automation, and support.";
const officialUrl = "https://sendgrid.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/sendgrid.com",
  gradient: "from-sky-500 via-blue-500 to-indigo-500",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.22)]",
};

const alternatives = [
  { name: "Postmark", slug: "postmark" },
  { name: "Mailgun", slug: "mailgun" },
  { name: "Amazon SES", slug: "amazon-ses" },
  { name: "SparkPost", slug: "sparkpost" },
  { name: "Mailchimp", slug: "mailchimp" },
];

const faqs = [
  { q: "What is SendGrid?", a: "SendGrid provides email delivery via API/SMTP plus marketing email tools, templates, and analytics." },
  { q: "Who is it for?", a: "Developers sending transactional emails and marketers running campaigns on the same platform." },
  { q: "How is pricing structured?", a: "Free and paid tiers by monthly sends. Higher tiers add dedicated IPs, subusers, automation, and priority support." },
  { q: "Does it handle deliverability?", a: "Yes. Tools for authentication, suppression management, and IP reputation help improve deliverability." },
  { q: "Are templates available?", a: "Yes. Templates and a visual editor are available for transactional and marketing emails." },
  { q: "Does it integrate with other tools?", a: "APIs, webhooks, and integrations connect SendGrid to apps, CRMs, and data tools." },
  { q: "Is it good for marketing automation?", a: "Basic automation exists; for deeper automation, pair with dedicated marketing platforms if needed." },
  { q: "Is compliance handled?", a: "You must set up authentication, consent, and compliance; SendGrid provides tools but responsibility remains with the sender." },
];

function SendgridToolPage() {
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
        "SendGrid delivers transactional and marketing emails via API/SMTP with templates, analytics, and deliverability tools. It suits teams that want reliable delivery plus basic marketing features.",
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
      icon: <Mail className="h-5 w-5 text-sky-500" />,
      title: "Email APIs & SMTP",
      body: "Send transactional email via API or SMTP with robust documentation and SDKs.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "Templates & editor",
      body: "Build and reuse templates for transactional and marketing emails.",
    },
    {
      icon: <Server className="h-5 w-5 text-indigo-500" />,
      title: "Deliverability tools",
      body: "Authentication setup, suppression management, and dedicated IP options to improve inbox placement.",
    },
    {
      icon: <Folder className="h-5 w-5 text-slate-700" />,
      title: "Marketing campaigns",
      body: "List management, scheduling, basic automation, and analytics for campaigns.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-blue-600" />,
      title: "Analytics & webhooks",
      body: "Track opens, clicks, bounces, and events; use webhooks to sync data downstream.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Integrations",
      body: "Connect to apps, CRMs, and data stacks via APIs, webhooks, and partner integrations.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="SendGrid review: pricing, features, pros & cons, and alternatives to assess it for email delivery and marketing."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-200/25 blur-3xl" />
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
                  {toolName} unifies transactional and marketing email sending with deliverability tools—configure auth, consent, and suppression to stay compliant.
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
              {toolName} is an email delivery platform that lets developers send transactional emails via API/SMTP and marketers run campaigns with templates and analytics. It includes deliverability tools to help reach inboxes.
            </p>
            <p className="mt-3 text-slate-700">Use it for product emails, receipts, notifications, and campaigns; plan proper authentication, consent, and suppression management.</p>
            <p className="mt-3 text-slate-700">Pair with your CRM or data warehouse to personalize and measure performance.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams needing reliable transactional delivery plus marketing sends in one platform.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Product teams sending transactional emails and notifications.",
                "Marketers running campaigns with templates and analytics.",
                "Developers who prefer API/SMTP for email delivery.",
                "Teams needing deliverability tooling and dedicated IP options.",
                "Companies consolidating transactional and marketing email in one provider.",
                "Businesses integrating email events with data stacks via webhooks/APIs.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on email APIs, templates, deliverability, campaigns, analytics, and integrations.</p>
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
                  {toolName} offers free and paid tiers based on monthly sends. Higher tiers add dedicated IPs, subusers, automation, and priority support. Marketing campaigns may be packaged separately; model total sends and features needed.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on a lower tier to validate deliverability; upgrade when volume or dedicated IP needs arise.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Free/Essentials</td>
                    <td className="px-4 py-3">Low volume/testing</td>
                    <td className="px-4 py-3">Limited sends, core API/SMTP</td>
                    <td className="px-4 py-3">Good to validate deliverability</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Growing teams</td>
                    <td className="px-4 py-3">Higher sends, dedicated IP option, subusers</td>
                    <td className="px-4 py-3">Fits most production needs</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Marketing/Advanced</td>
                    <td className="px-4 py-3">Campaign-heavy</td>
                    <td className="px-4 py-3">Automation, segmentation, stronger support</td>
                    <td className="px-4 py-3">Use if campaigns are core</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Estimate sends, plan authentication (SPF/DKIM/DMARC), and maintain list hygiene to keep deliverability strong.</p>
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
                  <li>Reliable API/SMTP delivery for transactional emails.</li>
                  <li>Templates and editor for both transactional and marketing.</li>
                  <li>Deliverability tooling and dedicated IP options.</li>
                  <li>Webhooks and analytics for event tracking.</li>
                  <li>Integrations with apps, CRMs, and data pipelines.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Advanced marketing automation is limited vs. dedicated tools.</li>
                  <li>Deliverability still depends on list quality and setup.</li>
                  <li>Higher sends and dedicated IPs raise costs.</li>
                  <li>Compliance (consent/opt-out) remains the sender’s responsibility.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other email delivery platforms to match your deliverability and automation needs.</p>
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
            <p className="text-slate-700">See how {toolName} compares to other email delivery providers.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Postmark</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/postmark">
                  View Postmark
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Postmark focuses on transactional-only with strong deliverability and clear separation from marketing; {toolName} supports both transactional and marketing. Choose based on whether you want a single provider or separation.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Mailgun</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/mailgun">
                  View Mailgun
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Mailgun targets developers with APIs and deliverability; {toolName} adds marketing tools and a UI for campaigns. Pick based on your need for marketing features versus pure developer focus.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want reliable transactional delivery plus marketing capabilities and deliverability tooling in one provider.
            </p>
            <p className="mt-3 text-slate-700">Ensure proper auth, consent, and list hygiene; consider separating transactional and marketing if deliverability risk is high.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A versatile email platform; best when you need combined transactional and marketing sends with APIs and deliverability support.</p>
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
            <p>Choose {toolName} if you want one platform for transactional and marketing email with APIs, templates, and deliverability tools.</p>
            <p>Consider Postmark for transactional-only or Mailgun for developer-first delivery; use {toolName} when you need combined capabilities and a UI.</p>
            <p>{toolName} can streamline email ops—maintain best practices to keep deliverability healthy.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>
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

export default SendgridToolPage;
