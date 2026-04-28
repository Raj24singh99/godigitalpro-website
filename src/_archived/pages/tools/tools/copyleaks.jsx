import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Copyleaks";
const slug = "copyleaks";
const category = "Plagiarism Detection & AI Content";
const shortPitch =
  "Copyleaks is a plagiarism and AI-content detector used by educators and businesses to check originality across documents, websites, and code repositories.";
const pricingSummary =
  "Usage-based and tiered plans. Higher tiers add more credits, API access, LMS integrations, multi-language support, and dedicated support; free trials are available.";
const officialUrl = "https://copyleaks.com";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/copyleaks.com",
  gradient: "from-indigo-500 via-emerald-500 to-sky-500",
  glow: "shadow-[0_20px_80px_rgba(79,70,229,0.24)]",
};

const alternatives = [
  { name: "Originality.ai", slug: "originality-ai" },
  { name: "Grammarly", slug: "grammarly" },
  { name: "ProWritingAid", slug: "prowritingaid" },
  { name: "Turnitin (academic)", slug: "turnitin" },
  { name: "Copyscape", slug: "copyscape" },
];

const faqs = [
  {
    q: "What is Copyleaks?",
    a: "Copyleaks is a plagiarism and AI-content detection platform for educators, publishers, and businesses to verify originality across documents and online sources.",
  },
  {
    q: "Who is it for?",
    a: "Schools, universities, publishers, and businesses that need to detect plagiarism or AI-generated text in assignments, articles, and submissions.",
  },
  {
    q: "Does it detect AI-written text?",
    a: "Yes. Copyleaks offers AI-content detection alongside traditional plagiarism checks; always review flags manually for context.",
  },
  {
    q: "How is pricing structured?",
    a: "Plans are usage/credit-based. Higher tiers include more scans, API access, LMS integrations, and support.",
  },
  {
    q: "What integrations exist?",
    a: "APIs, LMS plugins (e.g., Canvas, Moodle), and CMS integrations are available on supported tiers.",
  },
  {
    q: "Does it support multiple languages?",
    a: "Yes. Copyleaks supports many languages; check coverage for your use case.",
  },
  {
    q: "How accurate is it?",
    a: "Accuracy varies by source quality and content type. Use flags as signals and follow up with human review.",
  },
  {
    q: "Is data secure?",
    a: "Copyleaks emphasizes security and compliance; review policies for your requirements, especially with student data.",
  },
];

function CopyleaksToolPage() {
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
        "Copyleaks combines plagiarism detection and AI-content detection with APIs and LMS integrations, making it useful for schools, publishers, and businesses checking originality.",
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
      title: "Plagiarism detection",
      body: "Scan documents and web content to flag potential plagiarism and matches.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "AI-content detection",
      body: "Identify likely AI-generated passages; use human judgment on edge cases.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Integrations & API",
      body: "Connect via API or LMS/CMS plugins to automate scanning workflows.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Multi-language support",
      body: "Detect across many languages; check coverage for your region and use.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Batch & repository scans",
      body: "Scan repositories or bulk uploads to ensure originality at scale.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Reports & alerts",
      body: "View similarity reports, scores, and alerts for flagged content.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Copyleaks review: pricing, features, pros & cons, and alternatives so you can decide if it fits your plagiarism/AI detection needs."
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
                  {toolName} helps you detect plagiarism and AI-generated text across documents and the web—use it as a signal with human follow-up.
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
              {toolName} is a plagiarism and AI-content detection platform. It scans documents, code, and web sources to flag similarities and likely AI-generated passages.
            </p>
            <p className="mt-3 text-slate-700">Use it to check assignments, manuscripts, or business content for originality before publishing or grading.</p>
            <p className="mt-3 text-slate-700">Pair with clear academic or editorial policies; human review is required to interpret flags correctly.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for educators, publishers, and businesses verifying originality at scale.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Universities and schools checking student submissions.",
                "Publishers and editors reviewing articles and manuscripts.",
                "Businesses vetting marketing or compliance-sensitive content.",
                "LMS teams integrating detection into coursework flows.",
                "Agencies validating copy before delivery to clients.",
                "Organizations monitoring repositories or bulk documents for originality.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on detection accuracy, integrations, and reporting.</p>
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
                  {toolName} offers usage-based and tiered plans. Higher tiers add more credits, API access, LMS/CMS integrations, and dedicated support. Trials help you test detection quality before scaling.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with a trial; choose a plan that covers your expected scan volume and integration needs.</p>
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
                    <td className="px-4 py-3">Low-volume checks</td>
                    <td className="px-4 py-3">Limited credits, core detection</td>
                    <td className="px-4 py-3">Good for pilots</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Schools/teams</td>
                    <td className="px-4 py-3">More scans, multi-language, LMS/CMS integrations</td>
                    <td className="px-4 py-3">Fits most programs</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">High volume & API</td>
                    <td className="px-4 py-3">Highest limits, API, dedicated support</td>
                    <td className="px-4 py-3">Best for large orgs</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Plan for human review and policies; detection tools provide signals, not final judgments.</p>
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
                  <li>Plagiarism and AI detection in one platform.</li>
                  <li>APIs and LMS/CMS integrations for automation.</li>
                  <li>Multi-language support and repository scanning.</li>
                  <li>Reports with similarity scores and highlights.</li>
                  <li>Emphasis on security and compliance.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Credits can add up with high volume.</li>
                  <li>False positives/negatives require human review.</li>
                  <li>AI detection is probabilistic, not definitive proof.</li>
                  <li>Integration and API use may need technical setup.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other plagiarism and AI detection tools to match accuracy, integrations, and budget.
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
            <p className="text-slate-700">See how {toolName} compares with other detection platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Originality.ai</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/originality-ai">
                  View Originality.ai
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Originality.ai is popular for web publishers and AI detection; {toolName} combines plagiarism and AI detection with LMS/API options. Choose based on integrations and audience.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Grammarly</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/grammarly">
                  View Grammarly
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Grammarly focuses on grammar and style with plagiarism checks; {toolName} emphasizes detection breadth and integrations. Pick based on writing assistance vs. detection needs.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need plagiarism and AI-content detection with integrations and reporting, and you have policies for human review.
            </p>
            <p className="mt-3 text-slate-700">
              It performs best when combined with clear guidelines, human adjudication, and training on acceptable use of AI and citations.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A robust detection platform—budget for scan volume and keep humans in the loop for fair, accurate decisions.
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
              Choose {toolName} if you need plagiarism and AI detection with APIs and LMS/CMS integrations, and you will pair it with human review and policies.
            </p>
            <p>
              Consider Originality.ai or Grammarly based on whether you prioritize web publishing or writing assistance; use {toolName} for broader detection with enterprise options.
            </p>
            <p>{toolName} provides signals to protect originality—use it alongside education, policy, and manual review.</p>
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

export default CopyleaksToolPage;
