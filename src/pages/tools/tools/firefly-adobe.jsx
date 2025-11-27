import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, BookOpen, Globe2, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Adobe Firefly";
const slug = "firefly-adobe";
const category = "AI Image Generation";
const shortPitch =
  "Adobe Firefly generates images and text effects with a focus on commercial safety, Adobe Stock training data, and tight Creative Cloud integration.";
const pricingSummary =
  "Firefly credits are included in Creative Cloud plans; pay-as-you-go credit packs available. Enterprise adds higher limits and IP indemnity.";
const officialUrl = "https://firefly.adobe.com";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/adobe.com",
  gradient: "from-rose-500 via-orange-500 to-amber-400",
  glow: "shadow-[0_20px_80px_rgba(249,115,22,0.22)]",
};

const alternatives = [
  { name: "Midjourney", slug: "midjourney" },
  { name: "DALL-E", slug: "dall-e" },
  { name: "DreamStudio", slug: "dreamstudio" },
  { name: "Canva AI", slug: "canva-ai" },
  { name: "Runway", slug: "runway" },
];

const faqs = [
  {
    q: "Is Firefly commercially safe?",
    a: "Adobe trains Firefly on licensed Adobe Stock and public domain content; enterprise plans include IP indemnity for commercial use.",
  },
  {
    q: "Does Firefly integrate with Creative Cloud?",
    a: "Yes. Firefly powers features in Photoshop, Illustrator, Express, and the Firefly web app with consistent prompts and credits.",
  },
  {
    q: "Can I control style and layout?",
    a: "You can set aspect ratios, content type, styles, and use structure/reference images in supported apps to guide outputs.",
  },
  {
    q: "Does Firefly support text effects?",
    a: "Yes. Text effects and text-to-template features are available in Firefly and Adobe Express.",
  },
  {
    q: "How are credits consumed?",
    a: "Generations and certain edits consume credits; Creative Cloud plans include monthly credits and you can buy more.",
  },
  {
    q: "Is there an API?",
    a: "Yes. Firefly Services API lets developers add generative features to apps with usage-based credits.",
  },
  {
    q: "What about vector and design assets?",
    a: "Firefly supports text-to-vector, text-to-template, and Generative Fill/Expand inside Adobe apps.",
  },
  {
    q: "Does Firefly support content credentials?",
    a: "Outputs can include Content Credentials metadata to increase transparency and provenance.",
  },
];

function FireflyAdobeToolPage() {
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
        "Adobe Firefly is a generative image and text-effects model built for Creative Cloud. It prioritizes commercial safety, Adobe Stock training, and seamless integration with Adobe apps.",
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
      icon: <Sparkles className="h-5 w-5 text-rose-500" />,
      title: "Generative images and text effects",
      body: "Text-to-image, text effects, and style presets tuned for commercial-friendly outputs.",
    },
    {
      icon: <BookOpen className="h-5 w-5 text-orange-500" />,
      title: "Adobe ecosystem integration",
      body: "Generative Fill/Expand in Photoshop, vector/text-to-template in Illustrator and Express, plus Firefly web app.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Commercial safety and IP indemnity",
      body: "Trained on Adobe Stock/public domain; enterprise offers indemnity and Content Credentials.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Firefly Services API",
      body: "Developers can add Firefly generation to apps with usage-based credits and content credentials.",
    },
    {
      icon: <Globe2 className="h-5 w-5 text-sky-500" />,
      title: "Reference and structure controls",
      body: "Use reference images and structure hints (in supported apps) to control layout and style.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Template and vector generation",
      body: "Generate templates, vectors, and design assets to speed creative workflows.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Adobe Firefly review for designers and marketers: pricing, features, pros & cons, and alternatives for AI image generation with Creative Cloud."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-rose-200/30 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-amber-200/30 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-rose-500" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-orange-100 blur-3xl" />
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
                  Firefly brings AI image and text effects into Creative Cloud with commercial safety and content credentials for peace of mind.
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
              {toolName} is Adobe’s {category.toLowerCase()} model powering generative features in Creative Cloud. It focuses on brand-safe outputs, design-ready assets, and enterprise-friendly IP posture.
            </p>
            <p className="mt-3 text-slate-700">
              Designers and marketers use it for concepting, image generation, text effects, and quick template creation directly inside Adobe tools.
            </p>
            <p className="mt-3 text-slate-700">
              The Firefly API extends these capabilities to custom apps with content credentials metadata for transparency.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} fits Creative Cloud users who want safe, integrated generative tools.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Designers concepting visuals directly in Photoshop/Illustrator.",
                "Marketers building social and campaign assets in Express.",
                "Teams needing commercially safe images with credentials.",
                "Enterprises wanting IP indemnity and governance.",
                "Developers integrating generative features via Firefly API.",
                "Creators preferring Adobe workflows over third-party tools.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-rose-400" />
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
              {toolName} emphasizes safe generation, Adobe integration, and controls for layout and style.
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
                  Firefly credits are bundled with Creative Cloud plans; additional credit packs and enterprise plans are available. API usage is billed by credits.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Use included credits in your Creative Cloud plan first; add packs or enterprise when usage scales or IP indemnity is required.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Included credits</td>
                    <td className="px-4 py-3">Individual Creative Cloud users</td>
                    <td className="px-4 py-3">Monthly credit allotment per plan</td>
                    <td className="px-4 py-3">Included in plan</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Credit packs</td>
                    <td className="px-4 py-3">Users needing more generations</td>
                    <td className="px-4 py-3">Usage-based by credits</td>
                    <td className="px-4 py-3">Varies by pack</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Teams needing IP indemnity</td>
                    <td className="px-4 py-3">Higher limits, governance, SLA</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Monitor credit consumption for Generative Fill/Expand and API usage. Enterprise plans add indemnity and admin controls for regulated teams.
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
                  <li>Deep integration with Creative Cloud apps.</li>
                  <li>Commercial safety focus with Adobe Stock training.</li>
                  <li>Content Credentials for provenance.</li>
                  <li>Good controls for aspect ratio, style, and references.</li>
                  <li>API for adding Firefly to custom workflows.</li>
                  <li>Included credits for many Adobe users.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Output quality/styles can lag Midjourney in some aesthetics.</li>
                  <li>Credit-based usage requires monitoring for heavy work.</li>
                  <li>Some features tied to specific Adobe apps or versions.</li>
                  <li>API access billed separately from base Creative Cloud plans.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              {toolName} competes with image generators and creative suites. Choose based on style quality, enterprise posture, and integration needs.
            </p>
            <p className="mt-2 text-slate-700">Every link below goes to a live tool page—no broken routes.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
                  </div>
                  <a className="text-sm font-semibold text-sky-600 hover:text-sky-500" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">Compare {toolName} to other image generators.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Midjourney</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/firefly-adobe-vs-midjourney">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Midjourney excels at artistic, stylized outputs. {toolName} focuses on safe, controllable assets with Adobe integration and credentials.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} for Adobe workflows and commercial posture; choose Midjourney for creative exploration and unique styles.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs DALL-E</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/firefly-adobe-vs-dall-e">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                DALL-E integrates with productivity tools and offers strong in/outpainting. {toolName} ties into Creative Cloud with safety and design assets in mind.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} for Adobe ecosystem and credentials; choose DALL-E for broad integrations and prompt flexibility.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you work in Creative Cloud and need safe, on-brand generative assets with content credentials, {toolName} is worth it—credits are often included already.
            </p>
            <p className="mt-3 text-slate-700">
              If you want the most stylized art or lowest-cost generation, compare Midjourney or other models. Monitor credit usage for heavy workflows.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> {toolName} is the best fit for Adobe-centric teams that value integration, safety, and governance in generative AI.</p>
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
              Choose {toolName} if you want integrated, commercially safe generative AI inside Creative Cloud with content credentials and enterprise options.
            </p>
            <p>
              Consider Midjourney or DALL-E for more experimental styles, and DreamStudio/Runway if you need different controls or video capabilities.
            </p>
            <p>{toolName} keeps generative creation close to your Adobe workflow while emphasizing safety and transparency.</p>
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

export default FireflyAdobeToolPage;
