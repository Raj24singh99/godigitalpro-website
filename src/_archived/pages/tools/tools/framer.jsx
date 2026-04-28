import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Monitor, Palette, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Framer";
const slug = "framer";
const category = "Website Builder & CMS";
const shortPitch =
  "Framer is a visual website builder with built-in hosting that lets marketers and designers ship fast, animated marketing sites without relying on engineering sprints.";
const pricingSummary =
  "Free to explore, with paid site plans from around $20/month on annual billing for live sites, higher limits, and custom domains.";
const officialUrl = "https://www.framer.com";
const ratingValue = 4.6;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/framer.com",
  gradient: "from-purple-500 via-indigo-500 to-blue-500",
  glow: "shadow-[0_20px_80px_rgba(99,102,241,0.22)]",
};

const alternatives = [
  { name: "Webflow", slug: "webflow" },
  { name: "Wix", slug: "wix" },
  { name: "Squarespace", slug: "squarespace" },
  { name: "Carrd", slug: "carrd" },
  { name: "Tailwind CSS", slug: "tailwind" },
];

const faqs = [
  {
    q: "Is Framer good for marketers and founders?",
    a: "Yes. Framer is built for fast marketing sites with a modern look. Marketers, founders, and designers can ship pages, A/Bs, and campaigns without waiting on engineering.",
  },
  {
    q: "Does Framer include hosting?",
    a: "Framer includes global hosting, SSL, and a CDN by default. You add a custom domain on paid plans and manage everything from one dashboard.",
  },
  {
    q: "What makes Framer different from Webflow?",
    a: "Framer trades deeper CMS/logic for speed and modern motion. Its component props, variables, and animation tools make it easy to design polished experiences quickly.",
  },
  {
    q: "Can Framer handle SEO basics?",
    a: "Yes. You control meta data, canonicals, open graph, sitemaps, redirects, and performance-friendly builds. It ships clean, fast pages out of the box.",
  },
  {
    q: "Does Framer support forms and integrations?",
    a: "Framer supports native forms, CMS-like collections, and integrations via embeds, code components, and tools like Zapier or Make for automation.",
  },
  {
    q: "Is there a free plan?",
    a: "You can prototype and design for free. Publishing to a custom domain requires a paid site plan, which starts affordably for solopreneurs and small teams.",
  },
  {
    q: "Can developers extend Framer?",
    a: "Yes. Developers can build code components, bring in APIs, and add custom CSS or scripts to extend what the visual editor provides.",
  },
  {
    q: "Is Framer fast enough for SEO?",
    a: "Framer outputs performant static pages served via CDN. With image optimization, lightweight scripts, and responsive design baked in, it’s well suited for SEO-conscious teams.",
  },
];

function FramerToolPage() {
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
        "Framer is a modern website builder that excels at fast iteration for marketing sites. It pairs beautiful motion with hosting, SEO controls, and collection-like content so teams can launch without heavy engineering support.",
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
      icon: <Monitor className="h-5 w-5 text-purple-500" />,
      title: "Visual builder with modern motion",
      body: "Design landing pages with scrolling effects, animation, and polished components without coding complex CSS or JS.",
    },
    {
      icon: <Palette className="h-5 w-5 text-indigo-500" />,
      title: "Components, props, and tokens",
      body: "Use reusable components with props and design tokens so marketing teams stay on-brand as they ship new sections.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Built-in hosting and performance",
      body: "Global CDN, SSL, responsive images, and optimized builds keep pages fast for SEO, paid traffic, and conversions.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Integrations and embeds",
      body: "Embed forms, scheduling widgets, live chat, analytics, and custom code snippets to connect stack tools quickly.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "SEO controls out of the box",
      body: "Manage metadata, canonicals, sitemap, redirects, and social previews so pages are crawlable and campaign ready.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-pink-500" />,
      title: "AI aids for copy and layout",
      body: "AI-assisted copy and quick layout options help teams prototype pages faster and iterate on ideas before launch.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Hands-on Framer review for marketers and designers covering pricing, features, pros, cons, and alternatives so you can choose the right website builder."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-purple-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-purple-500" />
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
                  Framer keeps teams moving quickly with a visual builder, production-ready hosting, and motion-rich components that make sites feel premium.
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
              Framer is a {category.toLowerCase()} that blends a visual editor with production-ready hosting. It’s built for teams who want the polish of a custom-coded site with the speed of a modern builder.
            </p>
            <p className="mt-3 text-slate-700">
              Marketing teams, founders, and designers use Framer to create launch pages, pricing pages, and campaign hubs in hours, with animation and responsiveness built in.
            </p>
            <p className="mt-3 text-slate-700">
              Components, tokens, and code extensibility keep design systems consistent while allowing engineers to step in only when custom functionality is needed.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Framer suits design-led teams that need to ship high-converting pages quickly.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Marketing teams launching campaigns, landing pages, and experiments rapidly.",
                "Designers wanting control of layout, motion, and polish without coding from scratch.",
                "Founders validating new products with modern-looking sites and built-in analytics.",
                "Agencies producing client sites efficiently with reusable components and tokens.",
                "Revenue teams running promo pages, sales collateral hubs, and demos.",
                "Small teams replacing hand-coded stacks with an all-in-one hosted builder.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-purple-400" />
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
              Framer focuses on speed to launch, premium on-page motion, and on-brand consistency without feeling like a rigid template system.
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
                  Framer offers a generous free tier for drafting. Paid site plans add custom domains, higher traffic, and deeper collaboration. Annual pricing is discounted compared to monthly.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Most teams start on a Basic/Pro site plan with a custom domain; agencies upgrade for more seats and traffic.</p>
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
                    <td className="px-4 py-3">Exploration and drafts</td>
                    <td className="px-4 py-3">Framer domain only, limited traffic</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Mini</td>
                    <td className="px-4 py-3">Simple one-pagers and personal sites</td>
                    <td className="px-4 py-3">Lower traffic limits, single password protection</td>
                    <td className="px-4 py-3">~$5/month (annual)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Basic</td>
                    <td className="px-4 py-3">Marketing sites and campaigns</td>
                    <td className="px-4 py-3">Custom domain, more CMS items, higher bandwidth</td>
                    <td className="px-4 py-3">~$20/month (annual)</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Teams and agencies needing collaboration</td>
                    <td className="px-4 py-3">Team permissions, increased traffic, advanced analytics</td>
                    <td className="px-4 py-3">~$30+/month (annual)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Start for free to design and validate. Move to Basic when you’re ready to launch with a custom domain. Upgrade to Pro if you collaborate with multiple stakeholders or expect heavier traffic.
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
                  <li>Gorgeous on-page motion and modern styling with minimal setup.</li>
                  <li>Fast to ship marketing pages without heavy developer support.</li>
                  <li>Built-in hosting, SSL, and performance optimizations.</li>
                  <li>Reusable components and tokens keep brands consistent.</li>
                  <li>Easy embeds and integrations for forms, chat, analytics, and scheduling.</li>
                  <li>Good SEO controls including redirects, sitemaps, and meta settings.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>CMS/collections are simpler than Webflow for large content teams.</li>
                  <li>Advanced logic or dynamic data often needs code components.</li>
                  <li>Per-site pricing can add up for agencies with many client projects.</li>
                  <li>Version control is lighter than developer-first workflows.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Framer competes with visual website builders and code-first stacks. These tools differ on CMS depth, hosting models, and how much developer help is needed.
            </p>
            <p className="mt-2 text-slate-700">All of these offer hosted options and templates; they vary in flexibility, performance, and editor learning curve.</p>
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
            <p className="text-slate-700">Here’s how Framer stacks up against other popular site builders.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Webflow</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/webflow-vs-framer-vs-wix">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Webflow offers deeper CMS and logic controls, making it strong for content-heavy teams. Framer is faster for design-led landing pages with motion and polished defaults.
              </p>
              <p className="mt-2 text-slate-700">
                If you value speed to launch and modern visuals with lighter CMS needs, Framer wins. If you need complex collections or granular CMS permissions, Webflow is stronger.
              </p>
              <p className="mt-2 text-slate-900">
                Choose Framer for design speed; choose Webflow for larger, structured content operations.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Tailwind CSS</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/tailwind-vs-webflow-vs-framer">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Tailwind is code-first and gives developers total control plus top-tier performance. Framer removes code work for most marketing pages but offers less customization beyond its editor.
              </p>
              <p className="mt-2 text-slate-700">
                Dev-focused teams that maintain design systems may prefer Tailwind; marketing teams that need autonomy and speed tend to choose Framer.
              </p>
              <p className="mt-2 text-slate-900">
                Choose Framer for motion-rich marketing sites; choose Tailwind if you want full control inside your own codebase.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              For marketers and founders who prioritize modern design and quick launches, Framer’s speed, hosting, and motion features justify the spend. It reduces dependency on developers while keeping sites fast.
            </p>
            <p className="mt-3 text-slate-700">
              If you need a robust CMS, heavy localization, or complex logic, you may outgrow Framer and prefer Webflow or a code-first stack. For campaign-heavy teams, Framer’s velocity and polish are a strong fit.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Framer is excellent for design-led marketing sites that must look premium and launch quickly with built-in hosting.
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
              Choose Framer if you need to launch marketing pages quickly with a premium, animated feel and don’t want to maintain a custom front-end stack. It’s great for campaigns, product launches, and design-led brands.
            </p>
            <p>
              Consider Webflow or a Tailwind/Next.js stack if you require complex CMS structures, programmatic content, or deep developer workflows. Wix or Squarespace can work for simpler, template-driven needs.
            </p>
            <p>Framer integrates smoothly with forms, analytics, and automation tools, making it a solid hub for modern go-to-market teams.</p>
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

export default FramerToolPage;
