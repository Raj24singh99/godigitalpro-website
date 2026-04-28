import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Folder, Crown, ArrowLeft, ChevronDown, Video, Image, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "RunwayML";
const slug = "runwayml";
const category = "AI Video & Creative";
const shortPitch = "RunwayML provides AI video generation, editing, and VFX tools like text-to-video, inpainting, and motion tracking for creators and teams.";
const pricingSummary = "Free and paid tiers based on credits and features. Higher plans add faster renders, higher resolution, teams, and commercial usage rights.";
const officialUrl = "https://runwayml.com";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/runwayml.com",
  gradient: "from-purple-500 via-indigo-500 to-teal-500",
  glow: "shadow-[0_20px_80px_rgba(129,140,248,0.22)]",
};

const alternatives = [
  { name: "Pika Labs", slug: "pika-labs" },
  { name: "Synthesia", slug: "synthesia" },
  { name: "Adobe After Effects", slug: "adobe-after-effects" },
  { name: "Descript", slug: "descript" },
  { name: "Kaiber", slug: "kaiber" },
];

const faqs = [
  { q: "What is RunwayML?", a: "RunwayML is an AI video platform with text-to-video, inpainting, VFX, and editing tools for creators and teams." },
  { q: "Who is it for?", a: "Creators, editors, marketers, and teams needing fast AI-driven video generation or VFX assistance." },
  { q: "How is pricing structured?", a: "Credit-based tiers; higher plans add more credits, higher resolution, faster renders, team features, and commercial rights." },
  { q: "Does it support text-to-video?", a: "Yes. Text-to-video and image-to-video generation are core features." },
  { q: "Can I edit existing footage?", a: "Yes. Tools include inpainting, background removal, motion tracking, and other VFX assists." },
  { q: "Is commercial use allowed?", a: "Check plan terms; commercial usage typically requires paid tiers and adherence to content policies." },
  { q: "Does it integrate with other tools?", a: "Exports to standard formats; pair with NLEs and design tools for final delivery." },
  { q: "Is human review needed?", a: "Yes. Review outputs for quality, consistency, and licensing/compliance before publishing." },
];

function RunwaymlToolPage() {
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
        "RunwayML offers AI video generation, inpainting, and VFX tools that speed up creative workflows. Quality review and compliance remain essential.",
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
      icon: <Video className="h-5 w-5 text-purple-500" />,
      title: "Text-to-video & image-to-video",
      body: "Generate clips from prompts or images with adjustable styles.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "Inpainting & VFX assists",
      body: "Remove objects, fill scenes, and apply VFX with AI-driven tools.",
    },
    {
      icon: <Image className="h-5 w-5 text-indigo-500" />,
      title: "Background removal & motion tracking",
      body: "Isolate subjects and track motion to blend elements cleanly.",
    },
    {
      icon: <Folder className="h-5 w-5 text-slate-700" />,
      title: "Projects & assets",
      body: "Organize assets and timelines inside projects for easier collaboration.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-teal-600" />,
      title: "Credits & performance",
      body: "Manage credits and render settings; higher tiers deliver faster, higher-res outputs.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-700" />,
      title: "Exports & integrations",
      body: "Export to standard formats and continue editing in NLEs like Premiere or Resolve.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="RunwayML review: pricing, features, pros & cons, and alternatives to evaluate it for AI video generation and VFX."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-purple-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-teal-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-purple-600" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-purple-100 blur-3xl" />
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
                  {toolName} accelerates video creation with AI generation and VFX assists—use it to ideate and iterate faster, then polish in your NLE.
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
              {toolName} is an AI video platform combining text-to-video generation, inpainting, and VFX tools. It helps creators ideate, edit, and experiment faster, then export to standard editors for final polish.
            </p>
            <p className="mt-3 text-slate-700">Use it for drafts, concepts, and effects; ensure outputs meet quality, rights, and compliance requirements.</p>
            <p className="mt-3 text-slate-700">Pair with brand guidelines and legal review for commercial work.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for video creators, marketers, and teams exploring AI-assisted VFX and generation.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Video creators prototyping scenes and concepts.",
                "Marketers producing social and campaign visuals quickly.",
                "Editors using AI for inpainting and cleanup tasks.",
                "Teams needing background removal and motion tracking.",
                "Agencies experimenting with AI-first video workflows.",
                "Studios blending AI outputs with traditional VFX pipelines.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on AI generation, VFX assists, asset organization, credit management, and exports.</p>
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
                  {toolName} uses credit-based plans. Free tiers let you test quality; paid plans add more credits, higher resolution, faster renders, teams, and commercial rights.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start free to gauge quality; move to paid if you need higher resolution, speed, or commercial usage rights.</p>
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
                    <td className="px-4 py-3">Testing</td>
                    <td className="px-4 py-3">Limited credits, lower resolution</td>
                    <td className="px-4 py-3">Good for quality checks</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Standard</td>
                    <td className="px-4 py-3">Regular creators</td>
                    <td className="px-4 py-3">More credits, higher res, faster renders</td>
                    <td className="px-4 py-3">Fits most solo users</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro/Business</td>
                    <td className="px-4 py-3">Teams & commercial</td>
                    <td className="px-4 py-3">Highest limits, teams, commercial rights</td>
                    <td className="px-4 py-3">Pick for production work</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Watch credit usage; confirm licensing and content policies for commercial projects.</p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-purple-50 p-5 shadow-sm ring-1 ring-purple-100">
                <div className="flex items-center gap-2 text-purple-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Strong AI video generation and VFX assists.</li>
                  <li>Useful inpainting, background removal, and tracking tools.</li>
                  <li>Credits model scales with usage.</li>
                  <li>Exports to standard editors for final polish.</li>
                  <li>Team features on higher tiers.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Credits and render limits can add up for long projects.</li>
                  <li>Quality varies; human review and editing are required.</li>
                  <li>Licensing/commercial use depend on plan compliance.</li>
                  <li>Advanced edits still need full NLE/VFX tools.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other AI video and VFX tools to match your workflow.</p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-purple-700 hover:text-purple-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} compares to other AI video platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Pika Labs</h3>
                <a className="text-sm font-semibold text-purple-700 hover:text-purple-600" href="/tools/pika-labs">
                  View Pika Labs
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Pika Labs focuses on text-to-video; {toolName} pairs generation with inpainting and VFX assists. Choose based on whether you need pure generation or broader editing tools.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Descript</h3>
                <a className="text-sm font-semibold text-purple-700 hover:text-purple-600" href="/tools/descript">
                  View Descript
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Descript excels at audio/video editing with transcripts; {toolName} focuses on AI visuals and VFX. Pick based on whether you need transcript-driven editing or AI-first visuals.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want AI-driven video generation and VFX assists to accelerate creative workflows.
            </p>
            <p className="mt-3 text-slate-700">Keep human review, check licensing, and finish in traditional editors for production quality.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A leading AI video/VFX tool; best when paired with editorial oversight and clear usage rights.</p>
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
            <p>Choose {toolName} if you need AI video generation and VFX assists to speed up creative workflows.</p>
            <p>Consider Pika Labs for pure generation or Descript for transcript-driven editing; use {toolName} when visual AI and VFX flexibility matter.</p>
            <p>{toolName} can cut production time—verify quality, rights, and brand fit before publishing.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-purple-700 hover:text-purple-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-purple-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default RunwaymlToolPage;
