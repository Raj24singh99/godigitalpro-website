import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Mic, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown, Video } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Riverside";
const slug = "riverside";
const category = "Remote recording & podcasting";
const shortPitch =
  "Riverside is a studio-quality remote recording platform for podcasts, video interviews, webinars, and content creation with local recording and multi-track audio/video.";
const pricingSummary = "Free/Starter plans for testing; paid plans from ~$15–$24/month with higher limits, 4K recording, and production tools.";
const officialUrl = "https://riverside.fm";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/riverside.fm",
  gradient: "from-sky-500 via-indigo-500 to-purple-600",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.20)]",
};

const alternatives = [
  { name: "Zoom", slug: "zoom" },
  { name: "Webex", slug: "webex" },
  { name: "Whereby", slug: "whereby" },
  { name: "Loom", slug: "loom" },
  { name: "Descript", slug: "descript" },
];

const faqs = [
  { q: "Does Riverside record locally?", a: "Yes. Riverside records locally for each participant and uploads in the background, preserving high-quality audio/video even if internet drops." },
  { q: "Can Riverside do 4K video?", a: "Paid plans support up to 4K video recording with separate tracks for guests and hosts." },
  { q: "Is Riverside good for podcasts?", a: "Yes. Multi-track audio, local recording, and built-in producer controls make it popular with podcasters and interview shows." },
  { q: "Can I live stream with Riverside?", a: "Yes. You can stream to platforms like YouTube, LinkedIn, and Facebook while capturing local recordings." },
  { q: "Does Riverside have AI features?", a: "Riverside includes AI transcriptions, show notes, and clip highlights on higher tiers to speed post-production." },
  { q: "Does it integrate with editing tools?", a: "You can export high-quality tracks for DAWs or video editors and send to Descript or Adobe tools; Riverside also has lightweight in-app editing." },
  { q: "Is there a free plan?", a: "Yes. A free/Starter plan lets you test recording with limited hours and export watermarks. Paid tiers remove watermarks and raise limits." },
  { q: "What about backups?", a: "Progressive uploads and cloud backups reduce risk; local track capture helps recover quality even if connections glitch." },
];

function RiversideToolPage() {
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
        "Riverside offers studio-quality remote recording with local, multi-track audio/video, AI transcription, and live streaming. It’s a favorite for podcasters, interview shows, and marketers doing high-quality virtual content.",
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
    { icon: <Mic className="h-5 w-5 text-indigo-500" />, title: "Local multi-track recording", body: "Capture separate audio/video tracks locally for each guest to ensure high quality." },
    { icon: <Video className="h-5 w-5 text-sky-500" />, title: "4K video & producer controls", body: "Record in up to 4K with a producer view, audience mode, and scene controls for polished sessions." },
    { icon: <Sparkles className="h-5 w-5 text-purple-500" />, title: "AI transcription & highlights", body: "Built-in transcription, show notes, and clipping tools speed post-production." },
    { icon: <ClipboardList className="h-5 w-5 text-emerald-500" />, title: "Live streaming + recording", body: "Stream to YouTube, LinkedIn, and Facebook while saving local tracks for editing." },
    { icon: <Plug className="h-5 w-5 text-amber-500" />, title: "Integrations & exports", body: "Export to DAWs or editors; send to Descript; download WAV/MP4 with separate tracks." },
    { icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />, title: "Reliability & backups", body: "Progressive uploads and backups reduce risk from internet dropouts; local capture preserves quality." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Riverside review for 2025 covering pricing, 4K local recording, live streaming, AI features, pros/cons, and alternatives like Zoom or Descript."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-sky-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-sky-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-indigo-500" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-indigo-200 blur-3xl" />
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
                  Riverside lets you record higher-quality audio and video than typical meeting tools by capturing locally and uploading in the background.
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
              {toolName} is a remote recording platform designed for podcasters, interviewers, and marketers who want studio-quality audio and video. It records each participant locally in high quality and uploads progressively.
            </p>
            <p className="mt-3 text-slate-700">
              Live streaming, producer controls, and AI transcriptions make it a strong choice for shows, webinars, and content repurposing.
            </p>
            <p className="mt-3 text-slate-700">{toolName} is ideal when quality matters more than running standard video meetings.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Riverside fits teams producing high-quality audio/video content.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Podcasters recording remote guests with separate tracks.",
                "Marketers running video interviews, webinars, and virtual events.",
                "Content teams creating clips and highlights for social.",
                "Agencies producing client podcasts and video series.",
                "Founders hosting live Q&A streams with post-production needs.",
                "Educators and trainers needing reliable recordings.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">{toolName} focuses on high-quality recording, reliability, and fast post-production.</p>
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
                <p className="mt-2 text-slate-700">Free/Starter plans have limited hours and watermarks. Paid plans (~$15–$24/month) add more hours, separate tracks, 4K video, and AI transcription/notes.</p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Use a paid tier if you need watermark-free exports, longer recordings, and multi-track 4K video.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Plan</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key features</th>
                    <th className="px-4 py-3">Approx. price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Free/Starter</td>
                    <td className="px-4 py-3">Testing and small projects</td>
                    <td className="px-4 py-3">Limited hours, watermark exports</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Standard</td>
                    <td className="px-4 py-3">Podcasters and creators</td>
                    <td className="px-4 py-3">More hours, separate tracks, higher quality</td>
                    <td className="px-4 py-3">~$15–$24/mo</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro/Teams</td>
                    <td className="px-4 py-3">Studios, agencies, brands</td>
                    <td className="px-4 py-3">4K video, AI tools, producer controls, more seats</td>
                    <td className="px-4 py-3">Custom/varies</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Compared to generic meeting tools, Riverside’s paid plans deliver higher-quality outputs and production features.</p>
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
                  <li>Local, multi-track recording for high-quality audio/video.</li>
                  <li>Up to 4K video capture with producer controls.</li>
                  <li>AI transcription/show notes and clipping speeds editing.</li>
                  <li>Live streaming plus local recording safety net.</li>
                  <li>Exports to DAWs/editors; works with Descript.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>More complex than Zoom/Meet for casual calls.</li>
                  <li>Requires guest setup (mic, camera, browser) for best quality.</li>
                  <li>Storage and hour limits require plan upgrades for heavy users.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">If you need simpler meetings or different workflows, consider these.</p>
            <p className="mt-2 text-slate-700">All can record; quality and production features vary.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
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
            <p className="text-slate-700">Here’s how {toolName} compares to meeting tools for recording.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Zoom vs Whereby</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/riverside-vs-zoom-vs-whereby">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Zoom and Whereby are great for meetings. Riverside wins on local multi-track recording and 4K video for production. Use Zoom/Whereby for quick calls; use Riverside when quality matters.
              </p>
              <p className="mt-2 text-slate-900">Choose {toolName} for studio-quality recording; choose Zoom/Whereby for simple meetings.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Descript vs Loom</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/riverside-vs-loom-vs-descript">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Descript excels at editing and screen capture; Loom is best for async video. Riverside focuses on capture quality and live production. Many teams record in Riverside, then edit in Descript and share clips like Loom.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you produce podcasts, interviews, or webinars where audio/video quality matters, {toolName} is worth it. Local multi-track recording, 4K video, and AI-powered post-production save time and improve results.
            </p>
            <p className="mt-3 text-slate-700">For casual meetings, cheaper tools suffice. For production-grade capture, Riverside is a strong investment.</p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> {toolName} is a top pick for remote recording with studio-quality outputs and streaming in one platform.
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
            <p>Choose {toolName} if you care about studio-quality remote recording, streaming, and fast post-production. It’s built for podcasters, marketers, and creators.</p>
            <p>Use Zoom/Whereby for quick meetings; Descript/Loom for screen capture or async; Riverside for premium capture quality.</p>
            <p>{toolName} fits perfectly into a production workflow where you record high quality, edit efficiently, and repurpose across channels.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-sky-700 hover:text-sky-600" href={officialUrl}>
                Visit {toolName}
              </a>
              .
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

export default RiversideToolPage;
