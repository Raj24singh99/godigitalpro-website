import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Video, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Kapwing";
const slug = "kapwing";
const category = "Video Creation";
const shortPitch =
  "Kapwing is a collaborative video creation platform that lets marketers and teams edit, caption, resize, and publish short-form and social videos quickly in the browser.";
const pricingSummary = "Free tier with watermark; paid plans start around $16–$24/user/month for higher exports, brand kit, and collaboration.";
const officialUrl = "https://www.kapwing.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/kapwing.com",
  gradient: "from-indigo-500 via-blue-500 to-sky-500",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.22)]",
};

const alternatives = [
  { name: "Veed", slug: "veed" },
  { name: "Descript", slug: "descript" },
  { name: "InVideo", slug: "invideo" },
  { name: "Canva", slug: "canva" },
  { name: "Pictory", slug: "pictory" },
];

const faqs = [
  {
    q: "Is Kapwing free?",
    a: "Kapwing has a free plan with a watermark and export limits. Paid plans remove watermarks, allow longer exports, and unlock brand kits and collaboration.",
  },
  {
    q: "Can Kapwing auto-caption videos?",
    a: "Yes. Kapwing includes automatic captioning, translation, and styling so you can ship reels, shorts, and TikToks quickly.",
  },
  {
    q: "Which Kapwing plan should I choose?",
    a: "Use the free plan for tests. Most marketers pick Pro to remove watermarks and unlock higher quality. Teams should consider Business for collaboration and brand assets.",
  },
  {
    q: "Is Kapwing good for agencies?",
    a: "Agencies use Kapwing to edit client clips, add captions, and resize for multiple channels without heavy desktop software.",
  },
  {
    q: "Does Kapwing support templates?",
    a: "Yes. You can start from templates for UGC, ads, memes, explainers, and repurposed webinars or podcasts.",
  },
  {
    q: "Can I resize videos for multiple aspect ratios?",
    a: "Yes. Kapwing makes it easy to switch between vertical, square, and landscape formats for TikTok, Instagram, YouTube, and LinkedIn.",
  },
  {
    q: "Does Kapwing have AI tools?",
    a: "Kapwing offers AI features such as smart cut, background removal, captioning, and video-to-text to speed editing.",
  },
  {
    q: "Does Kapwing integrate with other tools?",
    a: "You can export files and connect storage (Google Drive, Dropbox) to streamline asset imports and exports.",
  },
];

function KapwingToolPage() {
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
        "Kapwing is a browser-based video platform that helps marketers and teams caption, trim, resize, and publish social videos quickly. With AI captioning, templates, and collaboration, it’s a fast option for reels, shorts, and promotional clips. Free is watermarked; paid plans unlock higher quality and branding.",
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
      icon: <Sparkles className="h-5 w-5 text-indigo-500" />,
      title: "AI captioning and translation",
      body: "Generate, edit, and style captions automatically to boost watch time on mute-first feeds across TikTok, Reels, and Shorts.",
    },
    {
      icon: <Video className="h-5 w-5 text-sky-500" />,
      title: "Multi-aspect resizing",
      body: "Resize for vertical, square, or landscape in a few clicks so you can publish across social channels without re-editing.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-emerald-500" />,
      title: "Templates and smart cuts",
      body: "Start from templates for ads, UGC, and explainers. Use smart cut to remove silences or jump cuts automatically.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Brand kits and collaboration",
      body: "Paid plans add brand colors, fonts, and shared workspaces so teams keep assets on-brand while collaborating in the browser.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Storage integrations",
      body: "Import/export from Google Drive or Dropbox and download in multiple formats to plug into schedulers or editors.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Fast social publishing",
      body: "Export-ready files for reels, shorts, and ads reduce handoffs, letting marketers ship more content each week.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Hands-on Kapwing review for marketers and teams covering pricing, features, pros & cons, alternatives, and fit for your 2025 video workflow."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-200/25 blur-3xl" />
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
              <div
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}
              >
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
                  Kapwing helps teams turn raw clips into captioned, channel-ready social videos fast—with templates, smart cuts, and brand kits to stay on-message.
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
              Kapwing is a browser-based {category.toLowerCase()} tool focused on speed and collaboration. Marketers use it to caption, trim, resize, and brand videos for social channels without heavy desktop software.
            </p>
            <p className="mt-3 text-slate-700">
              It’s popular for turning webinars, podcasts, and raw clips into reels and shorts. Templates, brand kits, and AI features reduce editing time so teams can publish more consistently.
            </p>
            <p className="mt-3 text-slate-700">Because it’s web-based, collaborators can edit together, comment, and export from anywhere without large file transfers.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Kapwing suits teams that need to produce social-ready videos quickly with minimal learning curve.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Social teams producing reels, shorts, and ads at high cadence.",
                "Agencies editing client content and maintaining brand kits.",
                "Content marketers repurposing webinars and podcasts into clips.",
                "Creators who need fast captioning and resizing for multi-channel publishing.",
                "Founders and small teams without dedicated video editors.",
                "Collaborative teams needing browser-based editing and comments.",
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
            <p className="mt-3 text-slate-700">Kapwing prioritizes speed to publish while keeping videos on-brand.</p>
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
                  Kapwing uses a freemium model. Free is watermarked with limited exports. Paid tiers remove watermarks, increase quality and export length, add brand kits, and unlock collaboration for teams.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Test on free. Upgrade to Pro to remove watermarks; choose Business if you need collaboration and brand kits.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Plan</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key limits</th>
                    <th className="px-4 py-3">Approx. price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Free</td>
                    <td className="px-4 py-3">Testing and personal use</td>
                    <td className="px-4 py-3">Watermark, export limits</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Solo creators/marketers</td>
                    <td className="px-4 py-3">No watermark, higher quality/length</td>
                    <td className="px-4 py-3">~$16–$24/user/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business</td>
                    <td className="px-4 py-3">Teams and agencies</td>
                    <td className="px-4 py-3">Brand kits, collaboration, shared workspaces</td>
                    <td className="px-4 py-3">Custom/team pricing</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Add-ons</td>
                    <td className="px-4 py-3">Teams needing more exports/storage</td>
                    <td className="px-4 py-3">Higher limits, extra storage</td>
                    <td className="px-4 py-3">Varies</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              For regular publishing, expect to be on Pro or Business to remove watermarks and handle longer videos. Validate workloads to avoid hitting export caps.
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
                  <li>Fast, browser-based editing with no heavy installs.</li>
                  <li>Excellent captioning, resizing, and template support for social.</li>
                  <li>Brand kits and collaboration for teams/agencies.</li>
                  <li>Smart cut and AI features speed up editing.</li>
                  <li>Easy export for reels, shorts, and ads.</li>
                  <li>Affordable compared to pro desktop editors.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Free plan is watermarked and limited for real campaigns.</li>
                  <li>Not a full pro editor for complex timeline work.</li>
                  <li>Exports and storage limits may require higher tiers.</li>
                  <li>Browser-based editing can be slower on very large files.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Kapwing focuses on speed and caption-friendly outputs. If you need deeper editing, podcast workflows, or heavier motion design, consider these alternatives.
            </p>
            <p className="mt-2 text-slate-700">All create social-ready videos; they differ on editing depth, collaboration, and price.</p>
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
            <p className="text-slate-700">Here’s how {toolName} stacks against two popular video tools.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Veed</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/veed-vs-descript-vs-kapwing">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Veed offers strong captioning and editing with good templates. Kapwing is similarly fast with a focus on browser collaboration. Pricing and feature depth are comparable; try both to see which fits your workflow.
              </p>
              <p className="mt-2 text-slate-900">Choose Kapwing for collaborative, template-heavy editing; choose Veed if you prefer its UI and export options.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Descript</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/veed-vs-descript-vs-kapwing">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Descript excels at transcript-based editing and podcasts. Kapwing is lighter and quicker for social clips and captions. If you edit audio-heavy content, Descript is better; for simple social edits, Kapwing is faster.
              </p>
              <p className="mt-2 text-slate-900">Many teams pair Kapwing for social clips with Descript for podcast workflows.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you need to caption, resize, and publish social videos quickly, Kapwing is worth it. It cuts editing time and keeps teams aligned with brand kits and collaboration.
            </p>
            <p className="mt-3 text-slate-700">
              For heavy timeline editing or audio-first workflows, pair Kapwing with a pro editor or Descript. For budget-only needs, free plans from other tools may suffice but will add watermarks/limits.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Kapwing is a strong pick for marketers and creators who need fast, captioned social videos without complex editing software.
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
              Choose {toolName} if you need a fast, collaborative way to create captioned social videos. It’s ideal for teams shipping reels, shorts, and ads regularly.
            </p>
            <p>
              Consider Veed or Descript for different workflows, or InVideo/Pictory if you want more templates and stock-driven creation. Kapwing remains great when you want speed without heavy installs.
            </p>
            <p>Kapwing fits modern social workflows, connecting exports to schedulers or your storage tools with minimal friction.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here: <a className="text-sky-700 hover:text-sky-600" href={officialUrl}>Visit {toolName}</a>.
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-sky-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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
      {open && (
        <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">
          {answer}
        </div>
      )}
    </div>
  );
}

export default KapwingToolPage;
