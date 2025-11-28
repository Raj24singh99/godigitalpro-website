import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Magical AI";
const slug = "magical-ai";
const category = "Productivity & AI Autofill";
const shortPitch = "Magical AI automates data entry, text expansion, and repetitive browser tasks so teams can move data between tools faster.";
const pricingSummary = "Free and paid plans. Paid tiers add more runs, advanced automation steps, and sharing for teams that live in the browser.";
const officialUrl = "https://www.getmagical.com";
const ratingValue = 4.1;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/getmagical.com",
  gradient: "from-amber-500 via-rose-500 to-purple-600",
  glow: "shadow-[0_20px_80px_rgba(244,114,182,0.2)]",
};

const alternatives = [
  { name: "TextExpander", slug: "textexpander" },
  { name: "Bardeen", slug: "bardeen-ai" },
  { name: "Zapier AI Actions", slug: "zapier-ai-actions" },
  { name: "Superhuman AI", slug: "superhuman-ai" },
  { name: "Superagi", slug: "superagi" },
];

const faqs = [
  {
    q: "What is Magical AI?",
    a: "Magical AI is a browser-based productivity tool that automates data entry, text expansion, and repetitive workflows using AI and shortcuts.",
  },
  {
    q: "Who is it for?",
    a: "Support, sales, ops, and recruiting teams that copy data between tools or send repeated responses and want to save time.",
  },
  {
    q: "Does it run in the browser?",
    a: "Yes. Magical overlays your browser tabs to move data, autofill forms, and insert snippets without coding.",
  },
  {
    q: "Is coding required?",
    a: "No coding is required. You configure snippets, autofill steps, and prompts through the UI.",
  },
  {
    q: "Can teams share snippets?",
    a: "Yes. Paid tiers enable sharing templates and managing team access.",
  },
  {
    q: "Is there AI drafting?",
    a: "Yes. AI assists with drafting or rephrasing replies while keeping key details.",
  },
  {
    q: "What about data security?",
    a: "You control which data is used for autofill. Review policies and compliance needs before deploying to sensitive workflows.",
  },
  {
    q: "Are there usage limits?",
    a: "Free plans have run limits. Paid plans increase AI runs and automation steps for heavier use.",
  },
];

function MagicalToolPage() {
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
        "Magical AI combines text expansion with browser-based automation. It helps teams reduce copy-paste work and personalize responses faster.",
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
      title: "AI text generation",
      body: "Draft and rephrase replies while keeping important details and context.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Snippets and templates",
      body: "Save snippets for repeated messages and personalize them on the fly.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Data moves",
      body: "Copy data between tabs and tools without manual copy-paste.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Autofill and shortcuts",
      body: "Fill forms quickly with saved fields, shortcuts, and AI assistance.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Browser-native",
      body: "Works where you already work, even if APIs or integrations are missing.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Team sharing",
      body: "Share snippets and automations with teammates on paid tiers.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Magical AI review: pricing, features, pros & cons, and alternatives so you can decide if browser-based automation fits your workflows."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-rose-200/25 blur-3xl" />
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
                  {toolName} reduces copy-paste work with AI text generation and autofill. Use it to save time, then review outputs for accuracy and compliance.
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
              {toolName} is a productivity platform that runs in your browser to automate repetitive tasks like data entry, text expansion, and form filling. It uses AI to suggest text and shortcuts while you work.
            </p>
            <p className="mt-3 text-slate-700">
              It is useful when integrations are missing or workflows vary across tools. You still need to review outputs for accuracy and brand voice, especially in customer-facing replies.
            </p>
            <p className="mt-3 text-slate-700">Pair it with a light QA process for sensitive data and customer communications.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams that copy data between tools or send repeated responses at scale.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Support teams sending templated replies with personalization.",
                "Sales reps logging calls or notes into CRMs quickly.",
                "RevOps moving data between spreadsheets and web apps.",
                "Recruiters updating ATS records with saved snippets.",
                "Founders automating manual workflows without code.",
                "Analysts copying research notes across multiple tools.",
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
              {toolName} focuses on browser-based automation, text expansion, and AI suggestions that reduce manual copy-paste work.
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
                  {toolName} offers free and paid tiers. Paid plans add more AI runs, advanced automation steps, and sharing. Costs rise with usage; align your tier to volume and team size.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start free to validate workflows; upgrade when you need higher limits and team sharing.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Free</td>
                    <td className="px-4 py-3">Light personal use</td>
                    <td className="px-4 py-3">Core snippets, limited AI runs, basic automations</td>
                    <td className="px-4 py-3">Good for testing workflows</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Individuals using daily</td>
                    <td className="px-4 py-3">More AI runs, advanced steps, priority support</td>
                    <td className="px-4 py-3">Solid for solo operators</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Teams</td>
                    <td className="px-4 py-3">Support or sales teams</td>
                    <td className="px-4 py-3">Sharing, admin, higher limits, onboarding help</td>
                    <td className="px-4 py-3">Best for team-wide adoption</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Track usage against limits and set guidelines for when to use AI vs manual responses. Review data handling policies before deploying widely.
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
                  <li>Works in the browser without complex setup.</li>
                  <li>AI and snippets save time on repeated replies.</li>
                  <li>Team sharing keeps messaging consistent.</li>
                  <li>No code required for automations and shortcuts.</li>
                  <li>Great for workflows lacking native integrations.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Heavy workflows still need human review for accuracy.</li>
                  <li>Browser-based approach depends on page layout stability.</li>
                  <li>Advanced automation is limited versus full RPA tools.</li>
                  <li>Usage caps on free plans can be tight for busy teams.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other automation and snippet tools to see which fits your environment and data policies.
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
            <p className="text-slate-700">See how {toolName} compares with similar automation platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Bardeen</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/bardeen-ai">
                  View Bardeen
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Bardeen focuses on web automation and scraping; {toolName} shines for quick snippets, autofill, and AI drafting. Choose based on whether you need complex workflows or fast text automation.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs TextExpander</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/textexpander">
                  View TextExpander
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                TextExpander is great for snippets across devices. {toolName} adds browser automations and AI drafting. Pick {toolName} if you need data moves alongside templated text.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you frequently copy data between tools and want AI help drafting replies without building full integrations.
            </p>
            <p className="mt-3 text-slate-700">
              Keep review steps for sensitive data and customer messaging. Train teams on when to use AI vs manual responses for accuracy and brand safety.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Good for reducing manual copy-paste; still needs oversight for data accuracy and tone.
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
            <p>Choose {toolName} if you want browser-native automation and AI drafting to cut repetitive work.</p>
            <p>
              Pair it with guidelines for data handling and tone so AI outputs stay accurate and on-brand across teams.
            </p>
            <p>{toolName} helps teams work faster in the browser; human review remains essential for sensitive workflows.</p>
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
        className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-900"
      >
        <span className="text-sm font-semibold md:text-base">{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">{answer}</div>}
    </div>
  );
}

export default MagicalToolPage;
