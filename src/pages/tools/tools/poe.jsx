import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Poe";
const slug = "poe";
const category = "AI Chat & Model Hub";
const shortPitch =
  "Poe by Quora is an AI chat hub that lets you access multiple models (GPT-4, Claude, and others), build bots, and manage conversations in one place.";
const pricingSummary =
  "Freemium with message limits; paid tiers increase GPT-4/Claude usage, speed, and file/image limits. Some model access may vary by subscription level.";
const officialUrl = "https://poe.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/poe.com",
  gradient: "from-purple-500 via-rose-500 to-orange-500",
  glow: "shadow-[0_20px_80px_rgba(192,38,211,0.26)]",
};

const alternatives = [
  { name: "ChatGPT", slug: "chatgpt" },
  { name: "Claude", slug: "claude" },
  { name: "Perplexity AI", slug: "perplexity-ai" },
  { name: "Poe vs ChatGPT vs Claude", slug: "compare/ai-chat-hubs", isComparison: true },
  { name: "Gemini", slug: "gemini" },
];

const faqs = [
  { q: "What is Poe?", a: "Poe is an AI chat platform from Quora that lets you use multiple AI models (like GPT-4 and Claude) and create custom bots." },
  { q: "Who is it for?", a: "People who want access to multiple AI models, faster switching between them, and simple bot building without coding." },
  { q: "How is pricing structured?", a: "Free with message limits; paid subscriptions increase usage quotas, speed, and attachment limits for premium models." },
  { q: "Can I create custom bots?", a: "Yes. You can set instructions/prompts to create your own bots for personal workflows." },
  { q: "Does it support file uploads?", a: "File/image uploads depend on model and plan; check current limits for GPT-4 and Claude access." },
  { q: "Are there APIs?", a: "Poe is primarily an app; for APIs use the underlying model vendors directly (OpenAI/Anthropic, etc.)." },
  { q: "Is data private?", a: "Check Poe’s policies; avoid sensitive data and note that messages may be used to improve services." },
  { q: "Is human review needed?", a: "Yes. Verify outputs, especially for factual or sensitive tasks." },
];

function PoeToolPage() {
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
        "Poe provides a hub for multiple AI models and custom bots. It’s handy for switching contexts quickly—always review responses for accuracy.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };

  const featureBlocks = [
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "Multi-model access", body: "Chat with GPT-4, Claude, and other models in one app." },
    { icon: <Rocket className="h-5 w-5 text-emerald-500" />, title: "Fast switching", body: "Move between models quickly to compare answers and styles." },
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "Custom bots", body: "Create instruction-based bots for your workflows." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "File & image support", body: "Upload files/images (plan-dependent) for certain models." },
    { icon: <Plug className="h-5 w-5 text-purple-500" />, title: "Cross-platform", body: "Mobile and web apps keep conversations in sync." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Limits & safety", body: "Usage limits vary by plan; content policies apply." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Models, Pros & Cons, Alternatives`}
        description="Poe review: pricing, model access, pros & cons, and alternatives like ChatGPT, Claude, and Perplexity."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-rose-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-purple-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-orange-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-purple-600" />
                {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                {toolName} Review (2025): Pricing, Pros & Cons
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
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}>
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
                  {toolName} lets you hop between top AI models in one place—great for quick comparisons and custom bots, with limits based on your plan.
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
              {toolName} is an AI chat hub offering access to multiple large language models. You can switch between models, save bots with custom instructions, and chat on web or mobile.
            </p>
            <p className="mt-3 text-slate-700">Use it to compare model outputs, run personal workflows, and explore different reasoning styles without juggling separate apps.</p>
            <p className="mt-3 text-slate-700">Mind data policies and avoid sensitive information; output quality depends on each model and prompt.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for users wanting multiple AI models in one interface.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Writers and researchers comparing model outputs.",
                "Productivity users who want quick answers from different models.",
                "Builders prototyping prompt-based bots without coding.",
                "Teams exploring reasoning differences between GPT-4 and Claude.",
                "Mobile-first users wanting synced chats across devices.",
                "Anyone curious about multi-model access without separate accounts.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-purple-500" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">{toolName} focuses on multi-model access, bot creation, and cross-device chat.</p>
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
                  Free tier includes limited messages. Paid tiers increase GPT-4/Claude usage, speed, file/image limits, and priority access. Some models may have plan-specific quotas.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start free to test; upgrade if you need more premium-model messages or larger uploads.</p>
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
                    <td className="px-4 py-3">Light use</td>
                    <td className="px-4 py-3">Limited GPT-4/Claude messages, standard models</td>
                    <td className="px-4 py-3">Good for testing</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Premium</td>
                    <td className="px-4 py-3">Regular users</td>
                    <td className="px-4 py-3">More premium-model messages, faster queues</td>
                    <td className="px-4 py-3">Monthly/annual pricing</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Team</td>
                    <td className="px-4 py-3">Teams sharing access</td>
                    <td className="px-4 py-3">Shared billing/limits, higher quotas</td>
                    <td className="px-4 py-3">Plan availability may vary</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Always validate outputs. For API-level control or privacy needs, consider using the underlying model providers directly.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-rose-50 p-5 shadow-sm ring-1 ring-rose-100">
                <div className="flex items-center gap-2 text-rose-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Multi-model access in one interface.</li>
                  <li>Custom bots without coding.</li>
                  <li>Cross-device sync on web and mobile.</li>
                  <li>File/image support on eligible plans.</li>
                  <li>Great for comparing reasoning across models.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Usage limits; premium models gated by plan.</li>
                  <li>No direct API for programmatic use; rely on vendors’ APIs.</li>
                  <li>Data/privacy policies to review before sharing sensitive info.</li>
                  <li>Outputs still need verification for accuracy.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other AI chat tools.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Open comparison page." : "View the full review and pricing details."}</p>
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
            <p className="text-slate-700">See how {toolName} compares to other AI chat experiences.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs ChatGPT</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/chatgpt">
                  View ChatGPT
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ChatGPT is a single-model experience with plugins; {toolName} offers multiple models and bot creation. Choose based on single-ecosystem depth vs multi-model flexibility.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Perplexity</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/perplexity-ai">
                  View Perplexity
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Perplexity focuses on cited answers from the web; {toolName} focuses on multi-model chat. Use Perplexity for research with citations, Poe for switching models and bots.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want multiple AI models in one app, with custom bots and cross-device sync. Upgrade if you hit premium-model limits or need larger uploads.
            </p>
            <p className="mt-3 text-slate-700">For strict privacy or API needs, consider direct vendor APIs instead of a hub.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A flexible multi-model chat hub—best for exploration and quick comparisons, with human review for critical outputs.
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
              Choose {toolName} if you want to access multiple AI models and create custom bots in one place, and you’re fine with plan-based limits.
            </p>
            <p>
              Consider direct ChatGPT or Claude access if you need one ecosystem deeply; {toolName} excels at multi-model flexibility and convenience.
            </p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right, try it here:{" "}
              <a className="text-emerald-700 hover:text-emerald-600" href={officialUrl}>
                Visit {toolName}
              </a>
              .
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
      <button type="button" onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-900">
        <span className="text-sm font-semibold md:text-base">{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">{answer}</div>}
    </div>
  );
}

export default PoeToolPage;
