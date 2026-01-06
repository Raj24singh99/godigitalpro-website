import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Otter.ai";
const slug = "otter-ai";
const category = "Meeting AI & Transcription";
const shortPitch = "Otter.ai records, transcribes, summarizes, and extracts action items from meetings across Zoom, Google Meet, Teams, and in-person sessions.";
const pricingSummary = "Free and paid plans by recording limits and features. Higher tiers add longer recordings, advanced summary notes, and collaboration.";
const officialUrl = "https://otter.ai";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/otter.ai",
  gradient: "from-sky-500 via-indigo-500 to-emerald-500",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.22)]",
};

const alternatives = [
  { name: "Fireflies.ai", slug: "fireflies-ai" },
  { name: "Fathom", slug: "fathom" },
  { name: "Grain", slug: "grain" },
  { name: "Gong", slug: "gong" },
];

const faqs = [
  { q: "Does Otter work with Zoom and Google Meet?", a: "Yes. It can auto-join or record locally across major platforms." },
  { q: "Can I share transcripts?", a: "Yes. You can share links, export text, and collaborate with teammates." },
  { q: "Is there a free plan?", a: "Yes, with monthly limits. Paid tiers expand recording length and features." },
  { q: "What about security?", a: "Admin controls, workspace permissions, and SSO are available on higher tiers; review policies for compliance." },
  { q: "Can it capture in-person audio?", a: "Yes. The mobile app records in-person meetings and syncs transcripts." },
  { q: "Are summaries automatic?", a: "Yes. Otter generates key points and action items automatically after sessions." },
  { q: "Can I add custom vocabulary?", a: "Custom vocabulary helps with product names and jargon on paid plans." },
  { q: "Who is it best for?", a: "Teams that spend significant time in meetings and need reliable notes and summaries." },
];

function OtterAiToolPage() {
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
        "Otter.ai automates meeting notes with live transcription, summaries, and action items. It integrates with major video platforms and supports collaboration on transcripts.",
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
    { icon: <Sparkles className="h-5 w-5 text-sky-500" />, title: "Live transcription", body: "Real-time captions and transcripts for online and in-person meetings." },
    { icon: <Rocket className="h-5 w-5 text-emerald-500" />, title: "AI summaries", body: "Key points and action items generated automatically after sessions." },
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "Collaboration", body: "Share transcripts, add comments, and highlight important moments." },
    { icon: <Plug className="h-5 w-5 text-purple-500" />, title: "Integrations", body: "Hooks for Zoom, Google Meet, and Microsoft Teams to auto-join and record." },
    { icon: <Cloud className="h-5 w-5 text-slate-700" />, title: "Search & export", body: "Search across transcripts, export text/audio, and sync to workflows." },
    { icon: <ShieldCheck className="h-5 w-5 text-rose-700" />, title: "Security controls", body: "Workspace permissions and recording settings to manage access and compliance." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Otter.ai review: pricing, features, pros & cons, and alternatives to decide if its meeting AI fits your team."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-sky-200/30 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-emerald-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-sky-700" />
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
                  {toolName} captures meetings automatically and delivers searchable transcripts, highlights, and action items so teams do not miss details.
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
              {toolName} joins calls or records locally, transcribing live and generating summaries with highlights and action items. It works with Zoom, Google Meet, Microsoft Teams, and in-person recordings via mobile.
            </p>
            <p className="mt-3 text-slate-700">
              Transcripts are searchable, shareable, and support collaboration with comments and highlights. Automated summaries and key points help teams review quickly and share takeaways with stakeholders.
            </p>
            <p className="mt-3 text-slate-700">
              It is great for distributed teams, product/user research, and sales calls. For sensitive data, confirm security controls and adjust recording policies accordingly.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams that need reliable meeting notes without manual effort.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Product and research teams documenting user interviews and discovery calls.",
                "Sales teams capturing call notes, objections, and next steps.",
                "Remote teams needing searchable meeting history and action items.",
                "Content teams repurposing transcripts for summaries and briefs.",
                "Managers who cannot attend all meetings but need highlights.",
                "Students and educators recording lectures or study sessions.",
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
            <p className="mt-3 text-slate-700">
              {toolName} focuses on capturing, summarizing, and sharing meeting insights quickly.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {featureBlocks.map((feature) => (
                <div key={feature.title} className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center gap-3 text-slate-900">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
                      {feature.icon}
                    </div>
                    <p className="text-lg font-semibold">{feature.title}</p>
                  </div>
                  <p className="mt-3 text-sm text-slate-700">{feature.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--pricing bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pricing</h2>
            <p className="mt-3 text-slate-700">
              Free and paid plans vary by recording length, monthly transcription limits, and features like custom vocabulary and team controls. Business tiers add admin controls, integrations, and SSO. Confirm policies on data retention and storage.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                { name: "Basic (Free)", price: "$0", detail: "Limited monthly transcription, basic summaries, share links", bestFor: "Personal and light use" },
                { name: "Pro", price: "$ per user", detail: "Longer recordings, more imports, custom vocabulary", bestFor: "Active individual users" },
                { name: "Business/Enterprise", price: "Custom", detail: "Team features, admin controls, integrations, SSO", bestFor: "Teams and org-wide rollout" },
              ].map((tier) => (
                <div key={tier.name} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                  <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">{tier.name}</p>
                  <p className="mt-2 text-2xl font-bold text-slate-900">{tier.price}</p>
                  <p className="mt-2 text-sm text-slate-700">{tier.detail}</p>
                  <p className="mt-3 text-xs font-semibold text-slate-600">Best for: {tier.bestFor}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold text-slate-900">Pricing tip</p>
              <p className="mt-2 text-sm text-slate-700">
                Standardize consent and recording policies before rolling out. Map users who need recording and summaries to paid seats; keep occasional viewers on lower-cost options.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros and cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <p className="text-lg font-semibold text-emerald-700">Pros</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>Accurate, fast transcription with multi-platform support.</li>
                  <li>Automated summaries and action items reduce manual note-taking.</li>
                  <li>Searchable, shareable transcripts improve collaboration.</li>
                  <li>Integrations join meetings automatically to capture notes.</li>
                  <li>Mobile recording for in-person sessions.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <p className="text-lg font-semibold text-rose-700">Cons</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>Recording policies must align with privacy laws and consent.</li>
                  <li>Free tier has strict limits; teams will need paid plans.</li>
                  <li>Accuracy varies by accent, audio quality, and jargon; custom vocab helps.</li>
                  <li>Security-conscious teams must review access controls and retention.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives</h2>
            <p className="mt-3 text-slate-700">Consider these if you need deeper sales intelligence, different pricing, or workflow automation:</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-xs text-slate-600">{alt.tagline || "Meeting AI alternative"}</p>
                  </div>
                  <Link className="text-sm font-semibold text-sky-700 hover:text-sky-500" to={`/tools/${alt.slug}`}>
                    View
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--comparisons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} vs other meeting AI tools</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                { title: "Otter.ai vs Fireflies.ai", betterFor: "Both record and transcribe; Fireflies leans into workflow and integrations, while Otter focuses on simple capture and summaries.", choose: "Pick Otter for ease and summaries. Pick Fireflies if you need workflow automation." },
                { title: "Otter.ai vs Fathom", betterFor: "Fathom is Zoom-focused with sales/light use; Otter covers more platforms and collaboration features.", choose: "Pick Otter for multi-platform use. Pick Fathom if you are Zoom-only and want sales-focused summaries." },
                { title: "Otter.ai vs Grain", betterFor: "Grain emphasizes clips/highlights; Otter emphasizes full transcripts and summaries across platforms.", choose: "Pick Otter for full transcripts and search. Pick Grain for highlight reels." },
                { title: "Otter.ai vs Gong", betterFor: "Gong is sales intelligence; Otter is meeting capture and summaries.", choose: "Pick Otter for general meeting notes. Pick Gong if you need sales coaching and deal analytics." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                  <p className="text-lg font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-2 text-sm text-slate-700">{item.betterFor}</p>
                  <p className="mt-3 text-sm font-semibold text-slate-800">Why choose</p>
                  <p className="mt-1 text-sm text-slate-700">{item.choose}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--worth bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you spend significant time in meetings and need dependable notes. Set consent and security policies before enabling auto-join bots, and use custom vocabulary for product terms and names to improve accuracy.
            </p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Align with legal/IT on recording and retention policies.",
                "Enable Otter on recurring meetings to build consistent transcripts.",
                "Use custom vocabulary for brand/product terms to improve accuracy.",
                "Share summaries and highlights to reduce meeting recap time.",
              ].map((tip) => (
                <div key={tip} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <p className="text-sm">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--faq bg-white">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} FAQ</h2>
            <div className="mt-6 space-y-3">
              {faqs.map((item, idx) => (
                <AccordionItem key={item.q} question={item.q} answer={item.a} defaultOpen={idx === 0} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section--final bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-2xl font-bold text-slate-900">Final verdict: who is {toolName} best for?</h2>
              <p className="mt-3 text-slate-700">
                {toolName} is best for distributed teams and heavy meeting cultures that need accurate transcripts and summaries without manual effort. If you need sales intelligence or deal analytics, pair it with a specialized platform—but for general meeting capture, Otter remains a top choice.
              </p>
              <div className="mt-5 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">
                  If {toolName} fits your team, try it here:{" "}
                  <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>
                    Visit {toolName}
                  </a>.
                </p>
                <div className="pt-2">
                  <Link
                    to="/tools"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
                  >
                    <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
                  </Link>
                </div>
              </div>
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

export default OtterAiToolPage;
