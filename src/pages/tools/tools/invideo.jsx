import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Video, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "InVideo";
const slug = "invideo";
const category = "Video Creation";
const shortPitch =
  "InVideo is an AI-powered video creation platform that helps marketers, creators, and agencies turn scripts or prompts into polished social ads, promos, and explainers fast.";
const pricingSummary = "Free plan with watermarked exports; paid plans start near $25/month for higher quality, stock assets, and export limits useful for teams.";
const officialUrl = "https://invideo.io";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/invideo.io",
  gradient: "from-indigo-500 via-blue-500 to-sky-500",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.22)]",
};

const alternatives = [
  { name: "Veed", slug: "veed" },
  { name: "Pictory", slug: "pictory" },
  { name: "Descript", slug: "descript" },
  { name: "Kapwing", slug: "kapwing" },
  { name: "Canva", slug: "canva" },
];

const faqs = [
  {
    q: "Is InVideo free?",
    a: "InVideo has a free tier with watermarked exports and limited stock assets. Paid plans remove watermarks, raise export quality, and add premium stock plus longer durations.",
  },
  {
    q: "Can InVideo turn text into video?",
    a: "Yes. AI script-to-video and prompt-based generation let you drop in text and automatically get scenes, media, and voiceover you can edit or swap.",
  },
  {
    q: "Which InVideo plan should I choose?",
    a: "Try the free plan to validate workflow. Most marketers use the Plus/Business tier for HD exports and more stock. Agencies or teams with heavy output should look at Max.",
  },
  {
    q: "Is InVideo good for agencies?",
    a: "Agencies use InVideo to build social ads, product promos, and quick explainer edits without heavy editors. Brand kits and templates help keep client assets consistent.",
  },
  {
    q: "Can I add subtitles and captions automatically?",
    a: "Yes. InVideo can auto-generate captions and let you style them for reels, shorts, and LinkedIn videos.",
  },
  {
    q: "Does InVideo have stock footage and music?",
    a: "Paid plans unlock a wide stock library for footage, images, and music to accelerate editing when you’re short on assets.",
  },
  {
    q: "Can I export for multiple aspect ratios?",
    a: "Yes. Resize videos for vertical, square, or landscape to ship content across TikTok, Instagram, YouTube, and LinkedIn quickly.",
  },
  {
    q: "Does InVideo integrate with other tools?",
    a: "You can upload your own assets and export final files for publishing. For deeper automation you can pair InVideo with Zapier, schedulers, or CMS tools.",
  },
];

function InVideoToolPage() {
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
        "InVideo is a fast, template-driven video creator for marketers and agencies. AI script-to-video, captions, and stock assets make it easy to publish social ads and promos without heavy editing. The free plan is watermarked; paid plans unlock HD exports, larger libraries, and better limits.",
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
      title: "AI script-to-video generation",
      body: "Turn prompts or scripts into draft videos with suggested scenes, B-roll, and voiceover to cut production time dramatically.",
    },
    {
      icon: <Video className="h-5 w-5 text-sky-500" />,
      title: "Templates for every channel",
      body: "Pick from social ads, reels, explainers, product promos, and YouTube templates to keep things on-brand and channel-ready.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-emerald-500" />,
      title: "Brand kit and reusable assets",
      body: "Store your fonts, colors, and logos. Apply them to new videos automatically so teams stay consistent across campaigns.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Captions and accessibility",
      body: "Generate subtitles, edit timing, and style captions for vertical content, making videos more engaging on mute-first feeds.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Stock library built-in",
      body: "Use paid-plan access to premium footage, images, and music so you can produce polished edits even without your own assets.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Multi-aspect exports",
      body: "Resize for vertical, square, or landscape outputs, then export HD files ready for TikTok, Instagram, YouTube, and LinkedIn.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Hands-on InVideo review for marketers and agencies covering pricing, features, pros & cons, alternatives, and fit for your 2025 video workflow."
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
                  Built for rapid social and promo videos, InVideo pairs AI with a deep template and stock library so marketers can ship polished edits without pro editors.
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
              InVideo is a {category.toLowerCase()} platform with AI tools for script-to-video generation, captions, and channel-sized exports. It speeds up short-form and promo video creation with templates and stock assets built-in.
            </p>
            <p className="mt-3 text-slate-700">
              Marketers use InVideo to make social ads, reels, product teasers, walkthroughs, and YouTube intros without heavy editing software. Agencies leverage brand kits to keep client outputs consistent while producing at scale.
            </p>
            <p className="mt-3 text-slate-700">
              The focus is fast drafting and publishing—ideal when you need frequent content for TikTok, Instagram, YouTube Shorts, or LinkedIn campaigns.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">InVideo suits teams that want quality social-ready videos without learning complex editors.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Agencies creating quick promos and ads for multiple clients.",
                "Social media teams shipping a high cadence of reels, shorts, and stories.",
                "Founders and marketers needing explainers and product teasers fast.",
                "Creators who want AI help drafting scripts, scenes, and captions.",
                "Teams repurposing blogs or scripts into short-form video content.",
                "Businesses that need multi-aspect exports for cross-channel publishing.",
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
            <p className="mt-3 text-slate-700">InVideo prioritizes speed to publish while keeping footage, captions, and brand elements cohesive.</p>
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
                  {toolName} offers a free tier for testing with watermarks. Paid plans scale export quality, stock access, and usage. Plus fits most solo marketers; Max is better for teams and agencies that publish often.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Validate on free, then pick Plus for serious publishing. Use Max if you need heavy output or premium stock.</p>
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
                    <td className="px-4 py-3">Testing workflows</td>
                    <td className="px-4 py-3">Watermarked exports, limited assets</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Plus / Business</td>
                    <td className="px-4 py-3">Solo marketers and creators</td>
                    <td className="px-4 py-3">HD exports, more stock library, higher limits</td>
                    <td className="px-4 py-3">~$25–$30/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Max</td>
                    <td className="px-4 py-3">Agencies or teams with heavy volume</td>
                    <td className="px-4 py-3">Highest export quality, premium stock, team collaboration</td>
                    <td className="px-4 py-3">Varies</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Add-ons</td>
                    <td className="px-4 py-3">Teams needing more downloads or assets</td>
                    <td className="px-4 py-3">Extra exports, storage, or stock packs</td>
                    <td className="px-4 py-3">Varies</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Most users can validate with the free plan, then move to Plus for serious publishing. Agencies or teams with frequent deliverables should pick Max to avoid hitting export or asset limits.
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
                  <li>AI script-to-video accelerates short-form creation.</li>
                  <li>Large template library for ads, promos, and social content.</li>
                  <li>Brand kits and caption styling keep assets on-brand.</li>
                  <li>Multi-aspect exports simplify cross-channel publishing.</li>
                  <li>Premium stock assets on paid plans reduce filming needs.</li>
                  <li>Easy to learn compared to pro editors.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Free plan is watermarked and limited for real campaigns.</li>
                  <li>Advanced editing controls are lighter than pro tools like Premiere.</li>
                  <li>Heavy reliance on templates may need manual finesse to stand out.</li>
                  <li>Team collaboration features are still basic versus enterprise video suites.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              InVideo emphasizes speed, templates, and AI generation. If you need deeper editing, podcast-to-video, or motion design, consider these alternatives commonly evaluated by marketers.
            </p>
            <p className="mt-2 text-slate-700">All create social-ready videos; they vary on editing depth, captions, and automation strength.</p>
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
            <p className="text-slate-700">Here’s how {toolName} stacks up against two popular video creation options.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Veed</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/veed-vs-invideo-vs-canva">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Veed offers strong captioning, screen recording, and timeline editing. InVideo is more template-driven for quick promos and ads. Both handle short-form, but Veed leans toward editing control while InVideo prioritizes speed.
              </p>
              <p className="mt-2 text-slate-700">Choose InVideo for fast social promos; choose Veed if you want deeper editing and recording tools in one place.</p>
              <p className="mt-2 text-slate-900">Design teams that prefer guided templates will be faster in InVideo; editors may prefer Veed’s timeline flexibility.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs VidiQ &amp; TubeBuddy</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/vidiq-vs-tubebuddy-vs-invideo">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                VidiQ and TubeBuddy focus on YouTube SEO, keyword research, and channel analytics. InVideo focuses on producing the video assets themselves. Many YouTubers pair them: create with InVideo, optimize and publish with VidiQ/TubeBuddy.
              </p>
              <p className="mt-2 text-slate-700">If you need content creation, pick InVideo. If you already have videos and need optimization, VidiQ or TubeBuddy are better fits.</p>
              <p className="mt-2 text-slate-900">Together they cover both production and distribution, useful for teams scaling YouTube output.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you need frequent social-ready videos without deep editing skills, {toolName} is worth it. Templates, AI generation, and stock assets shrink production time, letting teams publish more consistently.
            </p>
            <p className="mt-3 text-slate-700">
              If you require cinematic control or advanced motion graphics, you’ll still need pro tools. For marketing teams chasing speed, InVideo strikes a good balance of quality, cost, and ease.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> InVideo is a strong pick for marketers and agencies who need fast, polished videos for social ads and promos without heavy editing overhead.
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
              Choose {toolName} if you need a fast, AI-assisted way to publish social ads, promos, and explainers without hefty editing tools. It fits agencies and marketing teams that value volume and speed.
            </p>
            <p>
              Consider Veed or Descript for deeper editing and recording, or Kapwing/Canva if you want broader design tools with lighter video features. Pictory can help when repurposing long-form content into shorter clips.
            </p>
            <p>InVideo slots into modern social workflows nicely—generate, brand, caption, and export in one place, then publish using your scheduler or YouTube tools.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here: <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>Visit {toolName}</a>.
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

export default InVideoToolPage;
