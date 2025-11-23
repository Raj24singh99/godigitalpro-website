import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown, MonitorSmartphone } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Carrd";
const slug = "carrd";
const category = "One-Page Site Builder";
const shortPitch =
  "Carrd is a lightweight, responsive site builder for landing pages, portfolios, bio links, and simple product pages—ideal for fast launches without code.";
const pricingSummary =
  "Generous free tier for basic sites. Pro Lite from ~$9/year, Pro Standard ~$19/year, and Pro Plus ~$49/year with custom domains, forms, embeds, and more sites.";
const officialUrl = "https://carrd.co";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/carrd.co",
  gradient: "from-amber-500 via-rose-500 to-slate-700",
  glow: "shadow-[0_20px_80px_rgba(249,115,22,0.22)]",
};

const alternatives = [
  { name: "Webflow", slug: "webflow" },
  { name: "Framer", slug: "framer" },
  { name: "Squarespace", slug: "squarespace" },
  { name: "Wix", slug: "wix" },
  { name: "Notion", slug: "notion" },
];

const faqs = [
  { q: "What is Carrd best for?", a: "Carrd is great for one-page sites like portfolios, link-in-bio, simple product launches, and waitlists. It’s fast to build and responsive by default." },
  { q: "Is Carrd free?", a: "Yes. The free plan supports simple sites on a Carrd subdomain. Pro plans add custom domains, forms, embeds, and more sites per account." },
  { q: "Can I use custom domains?", a: "Pro plans let you connect custom domains with SSL. You can manage DNS or use Carrd’s instructions to point records easily." },
  { q: "Does Carrd support forms and email capture?", a: "Pro plans include forms that connect to services like Mailchimp, ConvertKit, and custom endpoints so you can capture leads or feedback." },
  { q: "How flexible is the design?", a: "Carrd’s editor provides sections, grids, timers, embeds, and animations. It’s simpler than Webflow/Framer but sufficient for clean one-page layouts." },
  { q: "Can I embed custom code?", a: "Yes. Pro Standard/Plus allow embeds and custom code (HTML/JS) so you can add widgets, analytics, or third-party scripts." },
  { q: "Is Carrd SEO-friendly?", a: "You can set meta titles/descriptions, add OG images, and ensure responsive design. For heavy SEO needs, multi-page builders might be better." },
  { q: "Which plan should I choose?", a: "Try free to validate. Pick Pro Lite for domains; Pro Standard for forms/embeds; Pro Plus for more sites and advanced features." },
];

function CarrdToolPage() {
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
        "Carrd is a fast, affordable builder for one-page sites. It’s perfect for landing pages, waitlists, and link-in-bio experiences, with Pro plans adding forms, embeds, and domains.",
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
      icon: <MonitorSmartphone className="h-5 w-5 text-amber-500" />,
      title: "Lightning-fast one-page builds",
      body: "Templates and a simple editor help you launch responsive pages in minutes—ideal for campaigns, link hubs, and portfolios.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-rose-500" />,
      title: "Forms and lead capture",
      body: "Pro plans add forms and integrations so you can collect emails, RSVPs, or feedback without extra plugins.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-emerald-500" />,
      title: "Custom domains and SEO basics",
      body: "Connect domains, manage SSL, and set meta titles/descriptions and OG images to keep pages branded and discoverable.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-600" />,
      title: "Embeds and custom code",
      body: "Add videos, widgets, payment buttons, or analytics with embed blocks and custom HTML/JS on Pro plans.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Performance and reliability",
      body: "Carrd sites are lightweight and globally cached, keeping load times quick for mobile and desktop visitors.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-slate-700" />,
      title: "Affordable scaling",
      body: "Low annual pricing per account covers multiple sites, making it cost-effective for side projects and agencies.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Carrd review for creators and marketers: pricing, features, pros & cons, alternatives, and comparisons vs Webflow or Framer."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-amber-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-amber-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-rose-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-amber-500" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-amber-200 blur-3xl" />
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
                  Carrd delivers clean, responsive one-page sites with fast setup, custom domains, and forms that make campaigns, portfolios, and link hubs look polished.
                </p>
                <div className="relative mt-4 flex items-center gap-2 text-sm font-semibold">
                  <Sparkles className="h-4 w-4 text-amber-100" />
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
              {toolName} is a {category.toLowerCase()} that prioritizes speed, simplicity, and responsive design. It’s ideal for landing pages, link-in-bio hubs, portfolios, and small product launches.
            </p>
            <p className="mt-3 text-slate-700">
              With low annual pricing and baked-in hosting, Carrd removes friction for creators, marketers, and founders who want to ship pages without heavier builders or WordPress setup.
            </p>
            <p className="mt-3 text-slate-700">
              Forms, embeds, and custom code on Pro plans keep it flexible enough to connect with email tools, analytics, and payment widgets.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} suits creators, founders, and agencies who need fast, affordable one-page sites.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Creators building link-in-bio or portfolio pages with custom domains.",
                "Marketers launching waitlists, events, or simple product pages quickly.",
                "Founders validating ideas with landing pages before investing in a full site.",
                "Agencies needing quick one-pagers for campaigns or client proofs.",
                "Communities or newsletters wanting fast signup pages with forms.",
                "Teams embedding forms, payment buttons, or widgets without code-heavy builds.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">{toolName} keeps one-page sites simple, responsive, and connected to your stack.</p>
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
                  Pricing is per account and billed yearly, covering multiple sites. Higher tiers add more sites, forms, embeds, and custom code access alongside domains and SSL.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Choose Pro Standard for domains + forms/embeds; Pro Plus if you need more sites or advanced features.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Plan</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key inclusions</th>
                    <th className="px-4 py-3">Approx. price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Free</td>
                    <td className="px-4 py-3">Simple subdomain pages</td>
                    <td className="px-4 py-3">One-page editor, Carrd subdomain, responsive design</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro Lite</td>
                    <td className="px-4 py-3">Custom domain basics</td>
                    <td className="px-4 py-3">Custom domains + SSL, more sites than Free</td>
                    <td className="px-4 py-3">~$9/year</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro Standard</td>
                    <td className="px-4 py-3">Creators capturing leads</td>
                    <td className="px-4 py-3">Forms, embeds, custom code, more sites, branding controls</td>
                    <td className="px-4 py-3">~$19/year</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro Plus</td>
                    <td className="px-4 py-3">Power users and agencies</td>
                    <td className="px-4 py-3">Highest site limits, advanced embeds, additional features</td>
                    <td className="px-4 py-3">~$49/year</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Carrd’s annual pricing is hard to beat. Choose based on whether you need forms/embeds and how many sites you plan to launch across clients or projects.
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
                  <li>Extremely affordable annual pricing for multiple sites.</li>
                  <li>Fast, simple editor with responsive defaults.</li>
                  <li>Custom domains, SSL, and forms for lead capture on Pro.</li>
                  <li>Embeds and custom code keep it flexible for widgets/analytics.</li>
                  <li>Lightweight pages that load quickly on mobile.</li>
                  <li>Great for rapid experiments, portfolios, and link hubs.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Not suited for multi-page or complex CMS needs.</li>
                  <li>Design freedom is simpler than Webflow/Framer.</li>
                  <li>Ecommerce is limited; relies on embeds or external carts.</li>
                  <li>No native blogging—best for single-page use cases.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Carrd competes with lighter site builders and more advanced visual builders. Pick based on whether you need single-page simplicity or multi-page flexibility.
            </p>
            <p className="mt-2 text-slate-700">All can build sites; they differ on depth, CMS, and ecommerce options.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
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
            <p className="text-slate-700">Here’s how Carrd compares to two popular visual builders.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Webflow</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/compare/carrd-vs-webflow-vs-framer">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Webflow offers CMS, ecommerce, and advanced animations. Carrd is faster and simpler for one-page sites at a fraction of the cost.
              </p>
              <p className="mt-2 text-slate-700">
                Choose Carrd for quick landing pages and bios; choose Webflow for multi-page sites, CMS needs, and richer design control.
              </p>
              <p className="mt-2 text-slate-900">Carrd wins on speed and price; Webflow wins on flexibility and depth.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Framer</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/compare/carrd-vs-webflow-vs-framer">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Framer excels at animated, design-forward sites with CMS options. Carrd keeps things lean for simple launches, link hubs, and portfolios.
              </p>
              <p className="mt-2 text-slate-700">
                Choose Carrd when speed and cost matter most; choose Framer for expressive marketing pages with more motion and CMS flexibility.
              </p>
              <p className="mt-2 text-slate-900">Both publish fast—pick based on creative ambition versus simplicity.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need fast, affordable, single-page sites that look polished. It’s ideal for creators, campaigns, and quick experiments where multi-page builders are overkill.
            </p>
            <p className="mt-3 text-slate-700">
              If you need a CMS, ecommerce, or heavy design control, Webflow, Framer, or Squarespace may fit better. For quick landing pages, Carrd’s simplicity wins.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Carrd is a top pick for lightweight, responsive one-page sites with unbeatable pricing and fast launch speed.
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
              Choose Carrd if you want a clean one-page site with a custom domain, forms, and embeds in minutes. It’s the fastest way to launch link hubs, waitlists, and simple product pages.
            </p>
            <p>
              Consider Webflow or Framer for multi-page, CMS, or design-heavy sites. Carrd remains the lightweight, budget-friendly choice for quick wins.
            </p>
            <p>Carrd plays nicely with email tools, analytics, and embeds, so you can connect it to your growth stack without engineering help.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-amber-700 hover:text-amber-600" href={officialUrl}>
                Visit {toolName}
              </a>
              .
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
      {open && (
        <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">
          {answer}
        </div>
      )}
    </div>
  );
}

export default CarrdToolPage;
