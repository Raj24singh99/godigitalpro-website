import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Palette, ShoppingBag, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Envato";
const slug = "envato";
const category = "Creative Assets Marketplace";
const shortPitch =
  "Envato provides stock photos, video, audio, templates, and creative assets for marketers, founders, and creators shipping campaigns fast.";
const pricingSummary =
  "Subscription via Envato Elements starts around $16.50/month billed annually for unlimited downloads; marketplace items can be purchased a la carte.";
const officialUrl = "https://envato.com";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/envato.com",
  gradient: "from-emerald-500 via-lime-500 to-teal-500",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.20)]",
};

const alternatives = [
  { name: "Canva", slug: "canva" },
  { name: "Icons8", slug: "icons8" },
  { name: "Canva Creators", slug: "canva-creators" },
  { name: "Pictory", slug: "pictory" },
  { name: "Descript", slug: "descript" },
];

const faqs = [
  {
    q: "Is Envato good for marketers?",
    a: "Yes. Envato offers ready-to-use creative assets—templates, stock, UI kits, audio—that speed up campaign production without building from scratch.",
  },
  {
    q: "What’s the difference between Envato Elements and Market?",
    a: "Envato Elements is a subscription with unlimited downloads for most assets. Envato Market sells items individually (ThemeForest, VideoHive, etc.) when you prefer one-off licenses.",
  },
  {
    q: "Can I use Envato assets commercially?",
    a: "Yes, with the correct license. Elements uses a simple commercial license per project; Market licenses vary by item—always register the project usage before publishing.",
  },
  {
    q: "Does Envato include fonts and audio?",
    a: "Envato Elements includes fonts, music, SFX, and video, plus templates and stock imagery. Marketplaces also offer niche audio packs and font families.",
  },
  {
    q: "Can teams collaborate on Envato Elements?",
    a: "Yes. Team plans let multiple users share access and manage licensing together, which is useful for agencies and in-house creative teams.",
  },
  {
    q: "How does Envato handle licensing for client work?",
    a: "Each project needs a registered license/download. Agencies typically register assets per client project to stay compliant and organized.",
  },
  {
    q: "Does Envato support WordPress themes?",
    a: "Envato Market hosts popular WordPress themes and plugins. Elements also has website and presentation templates to speed up builds.",
  },
  {
    q: "Is there a free trial?",
    a: "Envato Elements occasionally offers free trials or free monthly files. Marketplace items are pay-per-item with no trial, but there are free files of the month.",
  },
];

function EnvatoToolPage() {
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
        "Envato delivers a deep catalog of creative assets that help marketers ship faster. Subscription via Elements is simple and cost-effective for frequent asset use, while the Market suits one-off buys.",
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
      icon: <Palette className="h-5 w-5 text-emerald-500" />,
      title: "Massive creative catalog",
      body: "Access stock photos, video, SFX, music, presentation templates, UI kits, and fonts for campaigns, ads, and product launches.",
    },
    {
      icon: <ShoppingBag className="h-5 w-5 text-amber-500" />,
      title: "Flexible licensing",
      body: "Unlimited downloads with Elements or single-purchase Market items mean teams can choose subscription or a la carte based on usage.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-indigo-500" />,
      title: "Faster campaign production",
      body: "Premade templates for decks, social, and video save hours for marketers and founders who need to move quickly.",
    },
    {
      icon: <Plug className="h-5 w-5 text-sky-500" />,
      title: "Tool-friendly assets",
      body: "Templates compatible with Figma, Premiere, After Effects, WordPress, and Canva make it easy to drop assets into your existing workflow.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Clear commercial use",
      body: "Simple license terms on Elements and item-specific Market licenses keep client work compliant when registered per project.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-lime-500" />,
      title: "Fresh monthly assets",
      body: "New drops and featured free files keep libraries updated with on-trend creative for seasonal or product campaigns.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Envato review for marketers and creators: pricing, licensing, pros & cons, and alternatives to speed up campaigns with templates, stock, and creative assets."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-lime-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-emerald-500" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-emerald-200 blur-3xl" />
                </div>
                <div className="relative flex items-center gap-3">
                  <div className="h-14 w-14 overflow-hidden rounded-xl bg-white/20 ring-2 ring-white/30">
                    <img src={brandMeta.logo} alt={`${toolName} logo`} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/80">Featured Marketplace</p>
                    <p className="text-xl font-bold">{toolName}</p>
                  </div>
                </div>
                <p className="relative mt-4 text-sm leading-relaxed text-white/90">
                  Envato’s Elements subscription and Market stores help marketers launch polished creative fast, with a straightforward approach to licensing.
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
              Envato is a {category.toLowerCase()} that bundles millions of creative assets across stock, templates, audio, and web themes. It’s designed to help teams move quickly without sacrificing quality.
            </p>
            <p className="mt-3 text-slate-700">
              Marketers, creators, and founders rely on Envato to source visuals for ads, webinars, pitch decks, product videos, and websites without hiring large creative teams.
            </p>
            <p className="mt-3 text-slate-700">
              The combination of Envato Elements (subscription) and Envato Market (a la carte) provides flexibility whether you download assets daily or only for special projects.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Envato fits teams that want speed and variety without heavy production costs.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Marketing teams producing ads, landing pages, and promo videos quickly.",
                "Founders and ops teams building decks and one-pagers with polished templates.",
                "Agencies assembling creative for clients without commissioning everything custom.",
                "YouTube and podcast creators needing intro/outro audio, SFX, and motion graphics.",
                "Product teams prototyping UI with kits, icons, and presentation assets.",
                "Event and webinar teams designing banners, lower-thirds, and slide templates.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
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
              Envato focuses on breadth, speed, and straightforward licensing so teams can stay compliant while shipping faster.
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
                  Envato Elements offers a single subscription with unlimited downloads. Envato Market sells individual assets (themes, video, audio, graphics) if you only need occasional items.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">If you download monthly, Elements is the best value. Use Market for one-off needs like a single theme or video file.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Envato Elements</td>
                    <td className="px-4 py-3">Teams downloading assets frequently</td>
                    <td className="px-4 py-3">Unlimited downloads, per-project registration</td>
                    <td className="px-4 py-3">~$16.50/month (annual)</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Envato Market</td>
                    <td className="px-4 py-3">One-off themes, video, or audio</td>
                    <td className="px-4 py-3">Pay per item, license per project</td>
                    <td className="px-4 py-3">Varies by item</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Team Plans</td>
                    <td className="px-4 py-3">Agencies or in-house creative teams</td>
                    <td className="px-4 py-3">Multiple seats, shared licensing dashboard</td>
                    <td className="px-4 py-3">Starts higher, billed per seat</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              If you buy multiple assets yearly, Elements pays for itself quickly. For rare purchases, the Market’s a la carte pricing is flexible. Always register each download to keep licensing clean.
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
                  <li>Huge library across stock, video, audio, fonts, and templates.</li>
                  <li>Elements subscription simplifies budgeting with unlimited downloads.</li>
                  <li>Per-project licensing keeps client work compliant and organized.</li>
                  <li>Compatible assets for Figma, Adobe, WordPress, and Canva workflows.</li>
                  <li>Team plans enable shared access and license management.</li>
                  <li>Regular new assets and monthly freebies keep content fresh.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Quality can vary across contributors; curation is required.</li>
                  <li>Licensing must be registered per project to stay compliant.</li>
                  <li>Some niche assets may only live on Market, not Elements.</li>
                  <li>Unlimited downloads still require good asset organization internally.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Envato competes with design suites and stock libraries that bundle templates, fonts, video, and audio. Each option differs by editor fit, licensing, and collaboration.
            </p>
            <p className="mt-2 text-slate-700">All links below go to live tool pages so you can compare without dead ends.</p>
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
            <p className="text-slate-700">Here’s how Envato compares to other creative platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Canva</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/icons8-vs-canva-vs-envato">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Canva includes an editor with templates and some stock; Envato focuses on assets you can drop into any editor with broader depth across video, audio, and web themes.
              </p>
              <p className="mt-2 text-slate-700">
                If you need an all-in-one design editor, Canva wins. If you want a large asset library for multi-tool workflows, Envato is stronger.
              </p>
              <p className="mt-2 text-slate-900">
                Choose Envato for flexible assets and licensing; choose Canva for collaborative editing inside one app.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Icons8</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/icons8-vs-canva-vs-envato">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Icons8 specializes in icons, illustrations, and AI-generated assets. Envato covers more categories including stock video, audio, and web themes.
              </p>
              <p className="mt-2 text-slate-900">
                Choose Envato for all-around creative inventory; choose Icons8 if you need consistent icon/illustration styles or AI image generation.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you frequently use stock, templates, or audio, Envato Elements offers strong value. Agencies and content teams can reduce production time while staying legally covered with per-project licensing.
            </p>
            <p className="mt-3 text-slate-700">
              If you only need a few assets yearly, the a la carte Market may be more efficient. For collaborative editing and templating, pair Envato assets with tools like Canva or Adobe apps.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Envato is a fast, flexible creative asset hub that helps teams ship polished campaigns without overloading designers.
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
              Choose Envato if you want a large, flexible creative library to accelerate campaigns across multiple tools. It’s efficient for agencies, founders, and marketers who regularly need fresh assets.
            </p>
            <p>
              Consider Canva or Icons8 if you need a built-in editor or specialized icon/illustration sets. For rare purchases, Envato Market’s a la carte model can be enough without a subscription.
            </p>
            <p>Envato integrates naturally into a modern creative stack: grab assets, customize in your design/video tools, and launch faster.</p>
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

export default EnvatoToolPage;
