import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "GrooveFunnels (Groove.cm)";
const slug = "groovefunnels";
const category = "Funnel Builder & Marketing Suite";
const shortPitch = "GrooveFunnels (Groove.cm) is an all-in-one marketing platform for landing pages, funnels, email, ecommerce, and memberships.";
const pricingSummary = "Free plan with limits; paid tiers unlock more domains, pages, emails, automations, and bandwidth for funnels and stores.";
const officialUrl = "https://groove.cm/";
const ratingValue = 3.9;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/groove.cm",
  gradient: "from-rose-500 via-fuchsia-500 to-indigo-600",
  glow: "shadow-[0_20px_80px_rgba(236,72,153,0.24)]",
};

const alternatives = [
  { name: "Kartra", slug: "kartra" },
  { name: "Builderall", slug: "builderall" },
  { name: "Unbounce", slug: "unbounce" },
  { name: "Kajabi", slug: "kajabi" },
  { name: "CartFlows", slug: "cartflows" },
];

const faqs = [
  {
    q: "What is GrooveFunnels (Groove.cm)?",
    a: "GrooveFunnels (Groove.cm) is an all-in-one marketing suite for building landing pages, funnels, ecommerce stores, memberships, email sequences, and automation.",
  },
  {
    q: "Who is it for?",
    a: "Course creators, coaches, and small businesses that want a bundled funnel builder, email, and membership tool without stitching multiple platforms together.",
  },
  {
    q: "Does it include email automation?",
    a: "Yes. GrooveMail provides broadcasts, automations, and sequences with list import options and tagging.",
  },
  {
    q: "How is pricing structured?",
    a: "Free plan with usage limits; paid plans expand domain counts, pages, email limits, automation features, and support.",
  },
  {
    q: "Can I sell products and courses?",
    a: "Yes. GrooveSell and GrooveMember support checkouts, upsells, and gated content for courses or memberships.",
  },
  {
    q: "Is it a replacement for a dedicated CRM?",
    a: "It has contact management and tagging, but larger sales teams may still prefer a purpose-built CRM.",
  },
  {
    q: "How does it compare to ClickFunnels?",
    a: "Groove aims to bundle more tools (email, membership, ecommerce) in one price; ClickFunnels is often praised for funnel templates and community.",
  },
  {
    q: "Is there a learning curve?",
    a: "The suite is broad, so expect some setup time to connect domains, funnels, email, and payments.",
  },
];

function GrooveFunnelsToolPage() {
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
        "GrooveFunnels (Groove.cm) bundles funnels, landing pages, email, ecommerce, and membership tools. It is attractive for teams that want an all-in-one stack, but breadth means more setup.",
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
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "Page & funnel builder",
      body: "Drag-and-drop builder with templates for opt-ins, sales pages, and upsell flows.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Email & automation",
      body: "Broadcasts, sequences, tagging, and triggers via GrooveMail for lifecycle journeys.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Membership & courses",
      body: "Gate content, host courses, and handle member logins and drip schedules.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Ecommerce & checkout",
      body: "GrooveSell supports payments, upsells, order bumps, and subscriptions.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Webinars & video",
      body: "Tools for live/automated webinars and video hosting with CTAs.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Integrations & domains",
      body: "Connect custom domains, payment gateways, and third-party apps via native or Zapier-style options.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="GrooveFunnels (Groove.cm) review: pricing, features, pros & cons, and alternatives to help you pick the right funnel builder."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-fuchsia-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-fuchsia-700" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-fuchsia-100 blur-3xl" />
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
                  {toolName} bundles funnels, email, and memberships. It reduces tool sprawl but requires setup to align domains, email, and automations.
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
              {toolName} is an all-in-one marketing platform spanning landing pages, funnels, email marketing, ecommerce, and memberships. It targets creators, coaches, and small businesses that want to launch offers without stitching many tools together.
            </p>
            <p className="mt-3 text-slate-700">
              Because it covers multiple products in one subscription, teams can lower tool sprawl but should expect a learning curve to configure domains, email deliverability, and automation.
            </p>
            <p className="mt-3 text-slate-700">Use it to launch funnels quickly, then refine with testing, analytics, and automation rules.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for small teams that want bundled funnels, email, and memberships with minimal extra tools.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Course creators selling memberships or digital products.",
                "Coaches and consultants needing funnels, booking, and email drips.",
                "Small businesses launching offers without separate funnel + email tools.",
                "Marketers testing multiple offers with upsells/downsells.",
                "Teams migrating from multiple tools to a single subscription.",
                "Side hustlers wanting a free/low-cost funnel starter.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-fuchsia-500" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">{toolName} focuses on bundled funnels, email automation, ecommerce, and memberships.</p>
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
                  Free plan offers limited pages and email sends; paid tiers expand domains, funnels, email limits, and automation depth. Higher tiers include more bandwidth, video hosting, and priority support.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on free to validate the builder and deliverability; upgrade when you need custom domains, higher email limits, or automation branching.</p>
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
                    <td className="px-4 py-3">Testing/side projects</td>
                    <td className="px-4 py-3">Limited pages, domains, and email sends</td>
                    <td className="px-4 py-3">Validate builder and deliverability</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro/Starter paid</td>
                    <td className="px-4 py-3">Launching core offers</td>
                    <td className="px-4 py-3">More funnels, domains, email automation, ecommerce tools</td>
                    <td className="px-4 py-3">Adds GrooveMail automation depth</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Higher tiers</td>
                    <td className="px-4 py-3">Scaling multi-offer teams</td>
                    <td className="px-4 py-3">Higher limits, video hosting, priority support</td>
                    <td className="px-4 py-3">Check contract terms and overages</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Budget for payment gateway fees, deliverability setup (SPF/DKIM), and potential integrations you still need (CRM, ads pixels, analytics).
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
                  <li>All-in-one coverage (funnels, email, membership, ecommerce).</li>
                  <li>Free plan lowers barrier to test funnels and deliverability.</li>
                  <li>Upsell/downsells and order bumps supported in GrooveSell.</li>
                  <li>Templates help launch pages quickly.</li>
                  <li>Single vendor billing reduces tool sprawl.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Broad feature set means setup and learning curve.</li>
                  <li>Deliverability and domain setup require care.</li>
                  <li>Some users prefer deeper specialization (e.g., dedicated CRM or LMS).</li>
                  <li>Performance and support can vary across modules.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other funnel and marketing suites.</p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-fuchsia-700 hover:text-fuchsia-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} stacks against other funnel builders and suites.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Kartra</h3>
                <a className="text-sm font-semibold text-fuchsia-700 hover:text-fuchsia-600" href="/tools/kartra">
                  View Kartra
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Kartra offers a mature all-in-one suite; {toolName} has a free tier and evolving modules. Choose based on your need for stability vs. cost and whether you prefer specific module depth.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Builderall</h3>
                <a className="text-sm font-semibold text-fuchsia-700 hover:text-fuchsia-600" href="/tools/builderall">
                  View Builderall
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Builderall is another budget-friendly all-in-one; {toolName} emphasizes a free tier and branded modules. Evaluate both for page performance, automation depth, and support responsiveness.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want a bundled funnel + email + membership stack with a free starter option and can invest time in setup.
            </p>
            <p className="mt-3 text-slate-700">
              If you prefer best-of-breed tools or need advanced CRM/LMS features, consider pairing specialized platforms or sticking to a dedicated funnel builder.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> An appealing all-in-one for scrappy teams; value depends on your willingness to configure and maintain the suite.
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
            <p>Choose {toolName} if you want a free-to-start funnel and membership suite bundled with email and ecommerce.</p>
            <p>Consider ClickFunnels or Unbounce for focused funnel performance, or Kajabi for course-specific features if that is your main use case.</p>
            <p>{toolName} shines when you consolidate billing and run multiple offers from one platform.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-fuchsia-700 hover:text-fuchsia-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-fuchsia-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default GrooveFunnelsToolPage;
