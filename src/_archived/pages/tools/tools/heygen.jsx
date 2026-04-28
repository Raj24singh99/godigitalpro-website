import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "HeyGen";
const slug = "heygen";
const category = "AI Video & Avatars";
const shortPitch =
  "HeyGen is an AI video platform that generates talking avatar videos from text, with multilingual voices, lip sync, and templates.";
const pricingSummary =
  "Credit-based and subscription tiers; higher plans add HD exports, more avatars/voices, longer durations, and collaboration. Enterprise offers custom avatars and security controls.";
const officialUrl = "https://www.heygen.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/heygen.com",
  gradient: "from-amber-500 via-orange-500 to-rose-500",
  glow: "shadow-[0_20px_80px_rgba(249,115,22,0.24)]",
};

const alternatives = [
  { name: "Synthesia", slug: "synthesia" },
  { name: "D-ID", slug: "d-id" },
  { name: "Colossyan", slug: "colossyan" },
  { name: "Elai.io", slug: "elai-io" },
  { name: "Pictory AI", slug: "pictory-ai" },
];

const faqs = [
  {
    q: "What is HeyGen?",
    a: "HeyGen is an AI video generation tool that creates talking avatar videos from text scripts, with lip sync, multilingual voices, and templates for marketing, training, and comms.",
  },
  {
    q: "Who is it for?",
    a: "Marketing, enablement, and operations teams that need quick video explainers without hiring on-camera talent.",
  },
  {
    q: "Does HeyGen support multiple languages?",
    a: "Yes. It offers multilingual voices and lip-sync across many languages and accents.",
  },
  {
    q: "How is pricing structured?",
    a: "Credit-based plans; higher tiers add HD exports, longer durations, premium avatars/voices, and collaboration. Enterprise adds custom avatars and security controls.",
  },
  {
    q: "Can I create custom avatars?",
    a: "Custom avatars are available on higher/enterprise plans with consent requirements and safety checks.",
  },
  {
    q: "Is there an API?",
    a: "Yes. An API allows programmatic video generation; usage limits depend on plan.",
  },
  {
    q: "What about ethical use?",
    a: "You must have consent for likeness and voice. Avoid misleading deepfakes; follow platform policies.",
  },
  {
    q: "Does it replace human presenters?",
    a: "It speeds production but human-led videos can still outperform for authenticity and brand nuance; test with your audience.",
  },
];

function HeygenToolPage() {
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
        "HeyGen generates talking avatar videos with multilingual voices and lip sync. It accelerates scripted video production but requires consent and careful brand review.",
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
      title: "AI avatars",
      body: "Library of stock avatars plus custom avatar options on higher tiers.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Multilingual voices",
      body: "Multiple languages and accents with lip sync and voice style choices.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Templates & scenes",
      body: "Ready-made layouts for explainers, training, and marketing videos.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "API & automation",
      body: "Programmatic video creation for scale and integration with workflows.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Compliance & consent",
      body: "Policies and checks for likeness consent and responsible usage.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Collaboration",
      body: "Team workspaces, review, and shared assets on business plans.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="HeyGen review: pricing, features, pros & cons, and alternatives so you can choose the right AI avatar video maker."
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
                  {toolName} accelerates avatar-led video production—great for tutorials and announcements when you need speed and consistency.
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
              {toolName} is an AI video generator for talking avatars. Input a script, pick an avatar and voice, and export videos for training, onboarding, or marketing without cameras or editing software.
            </p>
            <p className="mt-3 text-slate-700">It supports multilingual voices, templates, and scene editing. API access enables scaled, automated production.</p>
            <p className="mt-3 text-slate-700">Use it to ship quick explainers; keep human review for brand, accuracy, and responsible use.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams that want fast, scalable scripted video without on-camera talent.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Enablement teams producing product walk-throughs and training.",
                "Marketing teams creating social/ads variants quickly.",
                "Support teams making FAQ or how-to videos.",
                "Ops teams needing internal announcements or onboarding clips.",
                "Developers automating video generation via API.",
                "Teams that need multilingual content at speed.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on AI avatars, voices, and templates to speed video production.</p>
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
                  Pricing is credit-based by video minutes and features. Higher tiers add HD exports, premium avatars/voices, longer durations, collaboration, and API limits. Enterprise offers custom avatars and security controls.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with a lower tier to test quality and workflow; upgrade when you need more minutes, HD, or team features.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter/Lower</td>
                    <td className="px-4 py-3">Testing & light use</td>
                    <td className="px-4 py-3">Limited minutes, core avatars/voices, standard exports</td>
                    <td className="px-4 py-3">Great to validate quality</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth/Business</td>
                    <td className="px-4 py-3">Teams producing regularly</td>
                    <td className="px-4 py-3">More minutes, HD exports, collaboration, better voices</td>
                    <td className="px-4 py-3">Likely sweet spot</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Large-scale/brand control</td>
                    <td className="px-4 py-3">Custom avatars, security, API scale, support</td>
                    <td className="px-4 py-3">Requires sales; ensure consent policies</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Account for API usage and storage limits; ensure legal consent for avatar creation and scripted content approval processes.
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
                  <li>Fast avatar video creation with templates.</li>
                  <li>Multilingual voices and lip-sync quality.</li>
                  <li>API for automated or high-volume workflows.</li>
                  <li>Team collaboration and shared assets.</li>
                  <li>Custom avatars available on enterprise.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Credit-based pricing can rise with heavy usage.</li>
                  <li>Avatar videos may feel less authentic than live presenters.</li>
                  <li>Custom avatars require consent and legal review.</li>
                  <li>Complex editing may still need traditional video tools.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other AI video and avatar platforms.</p>
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
            <p className="text-slate-700">See how {toolName} stacks against other AI video makers.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Synthesia</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/synthesia">
                  View Synthesia
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Synthesia is a leading avatar video tool with mature enterprise features; {toolName} emphasizes fast workflows and templates. Compare on avatar quality, pricing, and team collaboration fit.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs D-ID</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/d-id">
                  View D-ID
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                D-ID offers face animation and chatbots; {toolName} focuses on scripted avatar videos and templates. Choose D-ID for face animation use cases, {toolName} for production-ready scripted content.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need rapid avatar-based videos across languages and want API/templated workflows without filming.
            </p>
            <p className="mt-3 text-slate-700">If authenticity is paramount or you produce complex narratives, mix AI avatars with live footage or traditional editing.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A fast way to scale scripted videos—use with clear consent policies and editorial review for brand alignment.
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
            <p>Choose {toolName} if you want scalable avatar-led videos with multilingual voices and an API.</p>
            <p>Pick Synthesia or Colossyan for enterprise-grade controls, or D-ID for face animation/chatbot use cases.</p>
            <p>{toolName} shines when paired with strong scripting, consent management, and QA before publishing.</p>
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

export default HeygenToolPage;
