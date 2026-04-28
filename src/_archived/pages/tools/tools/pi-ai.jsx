import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Pi AI";
const slug = "pi-ai";
const category = "AI Companion & Coaching";
const shortPitch =
  "Pi AI is an AI companion focused on supportive, conversational coaching—helping users reflect, plan, and talk through ideas in a friendly style.";
const pricingSummary =
  "Free access with usage expectations; premium options may include higher message limits and faster responses. Always check current plans and policies.";
const officialUrl = "https://pi.ai";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/pi.ai",
  gradient: "from-emerald-500 via-teal-500 to-blue-500",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.24)]",
};

const alternatives = [
  { name: "Replika", slug: "replika" },
  { name: "Character AI", slug: "characterai" },
  { name: "ChatGPT", slug: "chatgpt" },
  { name: "Pi AI vs ChatGPT vs Character AI", slug: "compare/ai-companions", isComparison: true },
  { name: "Claude", slug: "claude" },
];

const faqs = [
  { q: "What is Pi AI?", a: "Pi AI is an AI companion that offers supportive, conversational guidance and coaching-style chats." },
  { q: "Who is it for?", a: "Individuals who want a calm, reflective AI to talk through ideas, plans, or daily check-ins." },
  { q: "Is it a therapy tool?", a: "No. It’s not a substitute for professional mental health support. For serious concerns, seek licensed professionals." },
  { q: "How is pricing structured?", a: "Free access with potential usage limits; premium tiers may offer more messages and faster responses." },
  { q: "Is data private?", a: "Review current privacy policies before sharing personal information. Avoid sensitive data." },
  { q: "Can it integrate with other tools?", a: "It is primarily a standalone companion; copy/paste is the common workflow." },
  { q: "Does it remember context?", a: "It maintains session context; long-term retention varies—verify what is stored in the latest policy." },
  { q: "Is human review needed?", a: "Use judgment. Do not rely on it for professional, medical, legal, or financial advice." },
];

function PiAIToolPage() {
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
        "Pi AI provides a supportive, conversational companion experience. It is helpful for reflection and brainstorming, but not a replacement for professional advice.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };

  const featureBlocks = [
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "Supportive tone", body: "Gentle, coaching-style responses aimed at reflection and clarity." },
    { icon: <Rocket className="h-5 w-5 text-emerald-500" />, title: "Idea exploration", body: "Talk through plans, ideas, and brainstorming in a conversational flow." },
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "Session context", body: "Maintains context within a session to keep the conversation coherent." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "Accessible anywhere", body: "Available on web and mobile; quick chats from any device." },
    { icon: <Plug className="h-5 w-5 text-purple-500" />, title: "Simple workflows", body: "Copy/paste notes and takeaways into your planners or docs." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Safety reminders", body: "Not a substitute for professional advice; use responsibly." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Pi AI review: pricing, features, pros & cons, and alternatives so you can pick the right AI companion or coaching assistant."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-emerald-50 to-white" />
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
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}>
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
                  {toolName} offers a calm, supportive AI conversation—use it for reflection, but avoid relying on it for professional advice.
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
              {toolName} is an AI companion with a supportive, coaching-like tone. It helps users reflect, plan, and discuss ideas in a friendly conversation.
            </p>
            <p className="mt-3 text-slate-700">
              Treat it as a conversational aide—not a source of professional advice. For health, legal, or financial decisions, consult qualified experts.
            </p>
            <p className="mt-3 text-slate-700">Use copy/paste to move takeaways into your notes or task tools.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for people wanting a calm AI to think out loud with.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Individuals journaling or reflecting on goals and habits.",
                "Students brainstorming ideas or practicing explanations.",
                "Professionals talking through plans before sharing with teams.",
                "Founders sanity-checking messaging or narratives.",
                "Anyone wanting a gentle companion-style chat experience.",
                "Users who need quick, supportive responses without heavy tools.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on supportive conversation and simple, accessible workflows.</p>
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
                  Free access with expected usage limits; premium tiers may add higher message caps and faster responses. Check current plans for details and data policies.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Use free first; upgrade only if you hit limits or want priority performance.</p>
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
                    <td className="px-4 py-3">Casual use</td>
                    <td className="px-4 py-3">Supportive chats with usage expectations</td>
                    <td className="px-4 py-3">Great to try tone</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Premium</td>
                    <td className="px-4 py-3">Regular conversations</td>
                    <td className="px-4 py-3">Higher limits, faster responses</td>
                    <td className="px-4 py-3">Monthly/annual pricing</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Team (if offered)</td>
                    <td className="px-4 py-3">Groups using shared billing</td>
                    <td className="px-4 py-3">Shared billing/admin, higher usage</td>
                    <td className="px-4 py-3">Check availability</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Avoid sharing sensitive information; for serious guidance, consult professionals. Check privacy terms regularly.
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
                  <li>Supportive, calm conversational style.</li>
                  <li>Great for reflection and brainstorming.</li>
                  <li>Simple access on web/mobile.</li>
                  <li>Session context keeps chats coherent.</li>
                  <li>Low friction to start using.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Not suitable for professional/medical/legal advice.</li>
                  <li>Data privacy considerations—avoid sensitive info.</li>
                  <li>Long-term memory/context may be limited.</li>
                  <li>Feature set is focused on conversation, not creation.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other AI companions and chat assistants.</p>
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
            <p className="text-slate-700">See how {toolName} compares to other AI assistants.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs ChatGPT</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/chatgpt">
                  View ChatGPT
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ChatGPT excels at creation and coding; {toolName} focuses on supportive conversation. Choose based on whether you need productivity or companionship.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Character AI</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/characterai">
                  View Character AI
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Character AI offers persona-based chats; {toolName} keeps a calm, coaching persona. Choose based on whether you want playful characters or steady guidance.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want a calm AI companion for reflection and brainstorming, and you understand its limits around professional advice.
            </p>
            <p className="mt-3 text-slate-700">Upgrade if you hit usage limits and want smoother performance; keep privacy in mind.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A friendly AI companion for supportive chats—best when paired with human judgment and expert input for serious decisions.
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
              Choose {toolName} if you want a supportive AI companion to think through ideas and plans. It’s not a replacement for professional advice or therapy.
            </p>
            <p>
              Consider ChatGPT or Claude for productivity/creation; {toolName} excels at calm, reflective conversation.
            </p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for you, try it here:{" "}
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

export default PiAIToolPage;
