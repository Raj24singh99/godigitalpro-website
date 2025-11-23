import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown, Palette, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Tailwind CSS";
const slug = "tailwind";
const category = "CSS Framework";
const shortPitch = "Tailwind CSS is a utility-first framework that lets developers ship custom, performant UI fast without fighting pre-made component themes.";
const pricingSummary = "Tailwind CSS is free and open source. You bring your own hosting and stack; commercial UI kits and enterprise support are optional add-ons.";
const officialUrl = "https://tailwindcss.com";
const ratingValue = 4.7;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/tailwindcss.com",
  gradient: "from-sky-500 via-cyan-500 to-indigo-600",
  glow: "shadow-[0_20px_80px_rgba(56,189,248,0.20)]",
};

const alternatives = [
  { name: "Webflow", slug: "webflow" },
  { name: "Framer", slug: "framer" },
  { name: "Elementor", slug: "elementor" },
  { name: "Divi", slug: "divi" },
  { name: "Carrd", slug: "carrd" },
];

const faqs = [
  { q: "Is Tailwind CSS free?", a: "Yes. Tailwind CSS is free and open source. You can optionally buy UI kits or get enterprise support, but the framework is free to use." },
  { q: "Who is Tailwind CSS best for?", a: "Developers who want fast, consistent UI without fighting component theme overrides. Tailwind shines for teams that own their design system." },
  { q: "Does Tailwind work with React, Vue, Next, or Laravel?", a: "Yes. Tailwind is framework-agnostic. It works with React, Vue, Next.js, Laravel, Rails, and more." },
  { q: "Is Tailwind good for SEO and performance?", a: "Yes. With JIT and purge, unused CSS is removed, keeping bundles lean. SEO depends on your markup and content, not Tailwind itself." },
  { q: "Do designers like Tailwind?", a: "Designers appreciate Tailwind for codifying design tokens. Many teams pair Figma tokens with Tailwind config for parity between design and code." },
  { q: "Can non-developers use Tailwind?", a: "Tailwind is code-first. Non-developers typically rely on devs or pair it with visual tooling like Webflow/Framer for no-code needs." },
  { q: "Does Tailwind support dark mode and theming?", a: "Yes. Tailwind supports dark mode toggles, CSS variables, and design tokens via the config file so you can theme components consistently." },
  { q: "How does Tailwind compare to Bootstrap?", a: "Tailwind offers more flexibility with utility classes and fewer opinions on components. It’s lighter and easier to customize than overriding Bootstrap themes." },
];

function TailwindToolPage() {
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
        "Tailwind CSS gives developers a fast, utility-first approach to styling. It keeps CSS bundles lean with JIT/purge, aligns easily with design tokens, and removes the need to override opinionated UI kits. It’s free and works with any framework.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
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
      icon: <Palette className="h-5 w-5 text-sky-500" />,
      title: "Utility-first styling",
      body: "Compose UI with small, composable classes instead of overriding component themes. Build exactly what design needs.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-indigo-500" />,
      title: "Design token friendly",
      body: "Map brand colors, typography, spacing, and shadows in the config so devs and designers stay in sync.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-emerald-500" />,
      title: "Performance-first builds",
      body: "JIT and purge strip unused styles, keeping CSS bundles lean for SEO-friendly, fast-loading pages.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Framework agnostic",
      body: "Works with React, Vue, Next.js, Laravel, Rails, and more. Bring your own components or pair with UI kits.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Accessible by design",
      body: "However you structure components, Tailwind’s utilities make it straightforward to apply semantic markup and ARIA-friendly patterns.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Rapid iteration",
      body: "Move quickly in prototypes and production—no context switching between CSS files and components.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Honest Tailwind CSS review for developers and product teams covering features, pros & cons, alternatives, and where Tailwind fits in your 2025 stack."
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
                <Crown className="h-4 w-4 text-sky-500" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-cyan-200 blur-3xl" />
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
                  Tailwind keeps styling fast, consistent, and performant—perfect for product teams that want to move quickly without sacrificing brand fidelity.
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
              {toolName} is a utility-first CSS framework that helps developers build custom, responsive UI quickly. Instead of fighting component overrides, you compose styles directly in your markup.
            </p>
            <p className="mt-3 text-slate-700">
              Teams pair Tailwind with design tokens to align code and Figma, keeping brand colors, spacing, and type in sync. JIT and purge keep CSS lean for performance and SEO.
            </p>
            <p className="mt-3 text-slate-700">Tailwind is free and works with any stack, from static sites to full apps.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Tailwind is best for developer-led teams that want speed and control.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Product teams building design systems and custom components.",
                "Developers migrating from heavy CSS/SCSS to lean, utility-first workflows.",
                "SaaS startups shipping marketing and app UI quickly with consistent tokens.",
                "Agencies building custom sites where brand fidelity matters.",
                "Teams optimizing for performance and Lighthouse scores.",
                "Engineers who prefer code-first over visual builders.",
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
            <p className="mt-3 text-slate-700">Tailwind focuses on speed, control, and performance with minimal CSS overhead.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {featureBlocks.map((feature) => (
                <div key={feature.title} className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center gap-3 text-slate-900">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">{feature.icon}</div>
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
                  Tailwind CSS is free. You host your own app/site and handle deployment. Optional costs include UI kits, Tailwind UI/Components, or enterprise support if you want hands-on help.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Free to start and stay. Budget for UI kits/support only if your team needs them.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Tailwind CSS</td>
                    <td className="px-4 py-3">All developers</td>
                    <td className="px-4 py-3">Framework only; host/build yourself</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Tailwind UI kits</td>
                    <td className="px-4 py-3">Teams wanting prebuilt components</td>
                    <td className="px-4 py-3">License-based component libraries</td>
                    <td className="px-4 py-3">One-time/license</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise support</td>
                    <td className="px-4 py-3">Large orgs needing guidance</td>
                    <td className="px-4 py-3">Support/consulting</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Tailwind itself is free; plan hosting and UI kit costs based on your stack and design needs.</p>
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
                  <li>Utility-first approach speeds up custom UI.</li>
                  <li>Great performance via JIT and purge.</li>
                  <li>Design token alignment with Figma/config.</li>
                  <li>Framework-agnostic and highly flexible.</li>
                  <li>Free and open source with a large ecosystem.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Requires coding; non-devs need dev support.</li>
                  <li>No built-in components or hosting—BYO stack.</li>
                  <li>Class-heavy markup can feel verbose without conventions.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">If you want visual builders or different workflows, consider these alternatives. All have dedicated pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same space.</p>
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
            <p className="text-slate-700">Here’s how Tailwind compares to two common alternatives.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Webflow vs Framer</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/tailwind-vs-webflow-vs-framer">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Webflow and Framer are visual builders with hosting. Tailwind is code-first and free, giving more control and performance. Use Webflow/Framer when marketers need to ship pages without dev help.
              </p>
              <p className="mt-2 text-slate-700">Choose Tailwind for custom systems and performance; choose Webflow/Framer for visual shipping and built-in hosting.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Elementor vs Divi</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/tailwind-vs-elementor-vs-divi">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Elementor and Divi solve for WordPress no-code site building. Tailwind is framework-agnostic and code-first, giving more control and performance. Pick based on whether you want WP ease or custom builds.
              </p>
              <p className="mt-2 text-slate-700">Choose Tailwind for dev-led builds; choose Elementor/Divi for WordPress speed-to-launch.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you want maximum control, strong performance, and a unified design token system, Tailwind is absolutely worth it. It’s free, fast to learn for devs, and widely supported.
            </p>
            <p className="mt-3 text-slate-700">If you need no-code visual building and hosting, look at Webflow, Framer, Elementor, or Divi. Tailwind pairs well with any backend or static site stack.</p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Tailwind is a top-tier choice for developers and product teams who value speed, control, and performance in their front-end stack.
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
              Choose Tailwind if you want a fast, code-first way to build custom, performant UI that matches your brand. It’s free, flexible, and works with any stack.
            </p>
            <p>
              Consider Webflow or Framer if you need visual builders with hosting, or Elementor/Divi if you’re on WordPress and need marketer autonomy. Tailwind remains the best pick for dev-led teams prioritizing control.
            </p>
            <p>Tailwind fits well alongside modern frameworks, CI/CD, and design token workflows to keep products consistent and performant.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>
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
      <button type="button" onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-900">
        <span className="text-sm font-semibold md:text-base">{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">{answer}</div>}
    </div>
  );
}

export default TailwindToolPage;
