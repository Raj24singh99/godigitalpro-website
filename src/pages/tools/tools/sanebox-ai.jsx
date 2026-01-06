import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Folder, Crown, ArrowLeft, ChevronDown, BarChart3, Bell, Inbox } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "SaneBox AI";
const slug = "sanebox-ai";
const category = "Email Productivity";
const shortPitch = "SaneBox AI automatically prioritizes email, moves distractions to separate folders, and surfaces important messages with reminders and digests.";
const pricingSummary = "Subscription plans vary by number of accounts and features. Higher tiers add more filtering folders, reminders, and storage. Free trials available.";
const officialUrl = "https://www.sanebox.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/sanebox.com",
  gradient: "from-indigo-500 via-blue-500 to-emerald-500",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.22)]",
};

const alternatives = [
  { name: "Superhuman", slug: "superhuman" },
  { name: "Clean Email", slug: "clean-email" },
  { name: "Mailstrom", slug: "mailstrom" },
  { name: "Boomerang", slug: "boomerang" },
  { name: "Spark Mail", slug: "spark-mail" },
];

const faqs = [
  { q: "What is SaneBox AI?", a: "SaneBox AI filters and prioritizes email automatically, moving less important messages to folders and keeping inboxes focused." },
  { q: "Who is it for?", a: "People overwhelmed by email who want automatic filtering, reminders, and daily digests without switching email clients." },
  { q: "Does it require a new email app?", a: "No. It works with existing email accounts via IMAP/other connections and manages folders server-side." },
  { q: "How is pricing structured?", a: "Subscription plans by number of accounts and features; higher tiers add more folders, attachments storage, and reminder tools." },
  { q: "Are reminders and snoozes included?", a: "Yes. Reminders, snooze, and follow-up nudges are available depending on plan." },
  { q: "Is data secure?", a: "SaneBox connects to email to process headers/content. Review their security/privacy docs and your compliance needs before connecting." },
  { q: "Does it replace manual triage?", a: "It automates much triage, but you should review training and folders to avoid missing critical mail." },
  { q: "Is human review needed?", a: "Yes. Check the SaneLater/other folders regularly until trust is established; adjust training rules as needed." },
];

function SaneboxAiToolPage() {
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
        "SaneBox AI filters email to keep inboxes focused, moving distractions aside and adding reminders and digests. It works with your existing email accounts.",
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
      icon: <Inbox className="h-5 w-5 text-indigo-500" />,
      title: "Inbox prioritization",
      body: "Important emails stay in inbox; less important mail moves to folders like SaneLater/SaneNews.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "AI training",
      body: "Train by moving emails; SaneBox learns what’s important to you.",
    },
    {
      icon: <Bell className="h-5 w-5 text-emerald-600" />,
      title: "Reminders & snooze",
      body: "Set follow-up reminders and snooze messages to return later.",
    },
    {
      icon: <Folder className="h-5 w-5 text-slate-700" />,
      title: "Digest summaries",
      body: "Daily digests summarize filtered messages so you can review quickly.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-blue-600" />,
      title: "Attachment handling",
      body: "Store attachments in connected cloud storage on supported plans.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Works with existing email",
      body: "Connects to major email providers via IMAP/other protocols; no new email client needed.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="SaneBox AI review: pricing, features, pros & cons, and alternatives to help you decide if it fits your email workflow."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-indigo-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-emerald-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-indigo-600" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-indigo-100 blur-3xl" />
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
                  {toolName} filters email noise and adds reminders so you can focus on important messages without switching clients.
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
              {toolName} is an email productivity tool that connects to your existing inbox, learns what’s important, and automatically routes less critical messages to separate folders while offering reminders and digests.
            </p>
            <p className="mt-3 text-slate-700">Use it to reduce inbox noise without migrating to a new email client; monitor the filtered folders until confident.</p>
            <p className="mt-3 text-slate-700">Review privacy and security policies to ensure they meet your requirements.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for busy professionals who want automatic email triage while keeping their current email provider.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "People receiving high volumes of newsletters/marketing emails.",
                "Executives needing faster triage without a new client.",
                "Teams wanting daily digests of non-urgent mail.",
                "Users who want follow-up reminders and snooze.",
                "Professionals connecting multiple accounts in one filter system.",
                "Anyone who wants AI-driven sorting with manual oversight.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-indigo-500" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">{toolName} focuses on AI sorting, reminders, digests, attachment handling, and working with existing email providers.</p>
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
                  {toolName} offers plans based on number of accounts and features. More folders, reminders, and attachment storage are available on higher tiers. Free trials help test filtering quality.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with a lower plan to test filtering; upgrade if you need multiple accounts, more folders, or attachment storage.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Entry</td>
                    <td className="px-4 py-3">Single account</td>
                    <td className="px-4 py-3">Core filtering, basic folders</td>
                    <td className="px-4 py-3">Good to test AI sorting</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Plus</td>
                    <td className="px-4 py-3">Multiple accounts</td>
                    <td className="px-4 py-3">More folders, reminders, digests</td>
                    <td className="px-4 py-3">Fits most busy professionals</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Premium</td>
                    <td className="px-4 py-3">Heavy email users</td>
                    <td className="px-4 py-3">Attachment storage, more rules, support</td>
                    <td className="px-4 py-3">Use if you need added storage/features</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Review privacy terms and test filtering before rolling out widely. Keep an eye on filtered folders early on.</p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-indigo-50 p-5 shadow-sm ring-1 ring-indigo-100">
                <div className="flex items-center gap-2 text-indigo-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Works with existing email accounts—no new client.</li>
                  <li>Automatic sorting reduces inbox noise.</li>
                  <li>Reminders, snooze, and digests help stay on top.</li>
                  <li>Training improves over time with your actions.</li>
                  <li>Multiple accounts supported on higher tiers.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Requires inbox access; privacy/security review needed.</li>
                  <li>Important mail could be misfiled—monitor initially.</li>
                  <li>Attachment storage and extra features cost more.</li>
                  <li>Not a full email client; relies on your existing app.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other email productivity tools to fit your workflow and privacy needs.</p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} compares to other email tools.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Superhuman</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/superhuman">
                  View Superhuman
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Superhuman is an email client focused on speed and shortcuts; {toolName} filters your existing inbox. Choose based on whether you want a new client or automated sorting layered on current email.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Clean Email</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/clean-email">
                  View Clean Email
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Clean Email focuses on bulk cleaning and rules; {toolName} emphasizes ongoing prioritization with AI and reminders. Pick based on whether you need one-time cleanup or continuous triage.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth considering if you want automatic inbox filtering, reminders, and digests without changing email apps.
            </p>
            <p className="mt-3 text-slate-700">Verify privacy/security needs and monitor filtered folders early on to avoid missing critical mail.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A helpful inbox assistant; best when paired with initial oversight and clear privacy review.</p>
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
            <p>Choose {toolName} if you want automatic filtering and reminders layered on top of your existing inbox.</p>
            <p>Consider Superhuman or Clean Email for different approaches; use {toolName} when you prefer AI sorting without switching email apps.</p>
            <p>{toolName} can cut inbox noise—maintain oversight and ensure it meets your security requirements.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-indigo-700 hover:text-indigo-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-indigo-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default SaneboxAiToolPage;
