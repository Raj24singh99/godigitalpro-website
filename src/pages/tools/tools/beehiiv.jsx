import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, BarChart3, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Beehiiv";
const slug = "beehiiv";
const category = "Newsletter platform";
const shortPitch =
  "Beehiiv is a modern newsletter platform that helps creators and media teams grow, monetize, and segment audiences with native referrals, ads, and premium tiers.";
const pricingSummary = "Free for up to 2,500 subscribers. Grow starts around $49/month, Scale adds automations, advanced analytics, and network ad monetization.";
const officialUrl = "https://www.beehiiv.com";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/beehiiv.com",
  gradient: "from-amber-400 via-orange-500 to-rose-500",
  glow: "shadow-[0_20px_80px_rgba(249,115,22,0.28)]",
};

const alternatives = [
  { name: "ConvertKit", slug: "convertkit" },
  { name: "MailerLite", slug: "mailerlite" },
  { name: "ActiveCampaign", slug: "activecampaign" },
  { name: "GetResponse", slug: "getresponse" },
  { name: "Brevo", slug: "brevo" },
];

const faqs = [
  { q: "Is Beehiiv free?", a: "Yes. The free plan covers up to 2,500 subscribers with core publishing and basic automations. Advanced segmentation, custom domains, and ad tools land on paid plans." },
  { q: "Is Beehiiv good for agencies?", a: "Agencies use Beehiiv to launch owned media plays, run sponsor inventory, and manage multiple newsletters. Cloning, templates, and analytics make campaign operations faster." },
  { q: "Who is Beehiiv best for?", a: "Beehiiv fits creators, media teams, and startups that prioritize growth loops, multi-newsletter portfolios, and monetization via ads, referrals, and paid tiers." },
  { q: "Does Beehiiv handle automations?", a: "Yes. Beehiiv supports onboarding sequences, drip campaigns, triggers, and audience segmentation. It’s not a full CRM, but it covers common lifecycle journeys." },
  { q: "Can I import subscribers to Beehiiv?", a: "You can import CSVs and map fields. High-volume imports may require verification to keep deliverability clean." },
  { q: "Does Beehiiv integrate with other tools?", a: "Beehiiv integrates with Zapier, Stripe, Google Analytics, and webhooks. Marketers often pair it with Shopify, Typeform, and analytics tools." },
  { q: "How does Beehiiv compare to ConvertKit?", a: "Beehiiv leans into growth loops (referrals, boosts, ads) and multi-newsletter portfolios. ConvertKit offers deeper creator commerce and simpler automations." },
  { q: "Is Beehiiv GDPR compliant?", a: "Beehiiv provides subscriber consent tools, data export, and unsubscribe management. Teams should still review their own consent flows and DPA needs." },
];

function BeehiivToolPage() {
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
        "Beehiiv modernizes newsletter growth with native referrals, boosts, and ad network tools while keeping publishing fast. Pricing scales fairly for creators and lean media teams that want monetization built-in.",
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
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "Growth loops built-in",
      body: "Referrals, boosts, and cross-promotions help you compound growth without extra plugins. Sponsors and recommendations are handled inside the platform.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-emerald-500" />,
      title: "Actionable analytics",
      body: "Campaign, cohort, and UTM tracking provide clear readouts on subscriber quality, open/click health, and monetization performance.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-indigo-500" />,
      title: "Automations that cover the basics",
      body: "Welcome flows, drip sequences, triggers, and segment filters keep lifecycle comms on autopilot without complex builders.",
    },
    {
      icon: <Plug className="h-5 w-5 text-sky-500" />,
      title: "Integrations and API access",
      body: "Zapier, webhooks, and API support make it easy to sync subscribers with storefronts, forms, CRMs, and data warehouses.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Deliverability focus",
      body: "Native warmup guidance, bounce handling, and consent tools help keep IPs healthy as lists grow and sponsors rely on performance.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Monetization options",
      body: "Ad network access, sponsor management, paid newsletters, and multilayered offers let media teams diversify revenue quickly.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Unbiased Beehiiv review for creators, media teams, and agencies covering pricing, growth tools, pros & cons, and alternatives."
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
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-white" />
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
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -left-8 top-10 h-20 w-20 rounded-full bg-white blur-3xl" />
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-orange-200 blur-3xl" />
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
                  Beehiiv streamlines newsletter growth with referrals, boosts, and sponsor tools while keeping publishing fast and analytics clear for media operators.
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
              Beehiiv is a {category.toLowerCase()} built for creators and media brands that want growth mechanics and monetization baked in. It combines newsletter publishing, sponsorship workflows, and paid tiers with lightweight automations.
            </p>
            <p className="mt-3 text-slate-700">
              Teams use Beehiiv to launch or migrate newsletters, test sponsor inventory, and spin up adjacent publications under one account. Growth programs like referrals and boosts reduce acquisition costs while keeping lists clean.
            </p>
            <p className="mt-3 text-slate-700">
              The platform strikes a balance between speed and monetization depth, making it attractive for creators, media operators, and agencies running owned audience plays.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} suits teams that prioritize fast growth loops, monetization, and simple automation.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Creators launching or migrating newsletters with audience growth goals.",
                "Media teams managing multiple publications and sponsor inventory.",
                "Startups building owned media flywheels to supplement paid acquisition.",
                "Agencies spinning up lead-gen newsletters or client media properties.",
                "Marketers who want referrals, boosts, and paid tiers without heavy dev work.",
                "Operators who need clean analytics and deliverability at scale.",
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
            <p className="mt-3 text-slate-700">Growth, monetization, and analytics come packaged so teams can ship quickly without a heavy stack.</p>
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
                  Beehiiv uses audience-based tiers. The free plan covers core publishing up to 2,500 subscribers. Grow adds advanced segmentation, custom domains, surveys, and premium subscriptions. Scale unlocks automations, A/B testing, workspaces, and network ad tools.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on Free to test. Upgrade to Grow for domains and referrals. Scale fits multi-newsletter and sponsor-heavy teams.</p>
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
                    <td className="px-4 py-3">New newsletters testing Beehiiv</td>
                    <td className="px-4 py-3">2,500 subscribers, core publishing, basic automation</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Grow</td>
                    <td className="px-4 py-3">Creators monetizing and scaling</td>
                    <td className="px-4 py-3">Custom domains, referrals, surveys, premium tiers</td>
                    <td className="px-4 py-3">~$49/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Scale</td>
                    <td className="px-4 py-3">Media teams and agencies</td>
                    <td className="px-4 py-3">Advanced automations, A/B testing, workspaces, API</td>
                    <td className="px-4 py-3">Custom based on volume</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Most creators get ROI on Grow; media teams that manage multiple newsletters or sponsor pipelines usually pick Scale.</p>
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
                  <li>Built-in referrals, boosts, and ads reduce growth costs.</li>
                  <li>Fast publishing with clean editor and multi-newsletter support.</li>
                  <li>Actionable analytics tuned for media and sponsor reporting.</li>
                  <li>Solid deliverability tools and list health safeguards.</li>
                  <li>Lightweight automations cover the key lifecycle moments.</li>
                  <li>API, webhooks, and Zapier integrations for stack flexibility.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Not a full CRM; complex branching automations are limited.</li>
                  <li>Advanced ad inventory controls may require manual workflows.</li>
                  <li>Pricing scales with audience size, so large lists need budgeting.</li>
                  <li>Template customization is improving but less flexible than some ESPs.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Beehiiv leads on growth loops and monetization, but some teams pick creator-first ESPs or traditional marketing automation depending on needs.
            </p>
            <p className="mt-2 text-slate-700">All of these provide email creation and sending; they differ on automation depth, commerce, and pricing.</p>
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
            <p className="text-slate-700">Here’s how Beehiiv stacks up against two creator-friendly ESPs.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs MailerLite</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/beehiiv-vs-mailerlite-vs-convertkit">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                MailerLite keeps things simple with editor blocks and basic automations at friendly pricing. Beehiiv offers stronger growth loops (referrals, boosts, ads) and multi-publication controls.
              </p>
              <p className="mt-2 text-slate-700">
                Choose MailerLite for lightweight newsletters with simple journeys. Choose Beehiiv when monetization, sponsorships, and referral programs are priority.
              </p>
              <p className="mt-2 text-slate-900">Mailerlite links to ecomm and forms nicely; Beehiiv wins for media-style reporting and owned audience growth.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs ConvertKit</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/beehiiv-vs-mailerlite-vs-convertkit">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ConvertKit is beloved by creators for digital product sales and straightforward automations. Beehiiv pushes harder on referral growth, sponsor tools, and running multiple newsletters under one roof.
              </p>
              <p className="mt-2 text-slate-700">
                ConvertKit’s commerce is deeper; Beehiiv’s ad network, boosts, and analytics are better suited for media operators and agencies running owned lists.
              </p>
              <p className="mt-2 text-slate-900">Pick Beehiiv for media-style monetization; pick ConvertKit for creator commerce and simple funnels.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              For creators, agencies, and media teams aiming to grow and monetize newsletters quickly, Beehiiv delivers strong value. Referrals, boosts, paid tiers, and ad tools reduce reliance on paid acquisition and keep revenue in one place.
            </p>
            <p className="mt-3 text-slate-700">
              If you need deep CRM branching or advanced ecommerce automations, a fuller marketing automation platform may fit better. But for newsletter-led growth and media operations, Beehiiv’s speed to launch and monetization stack make it a top pick.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              Verdict: Beehiiv is excellent for owned media plays, fast growth loops, and monetization without heavy tooling.
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
            <p>Choose Beehiiv if you want built-in growth, monetization, and analytics tailored to newsletters and media brands.</p>
            <p>Consider ConvertKit or MailerLite if you only need simple newsletters or prefer creator commerce workflows over media monetization.</p>
            <p>Beehiiv fits well alongside form tools, CRMs, and analytics to keep owned audience programs measurable end to end.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for your stack, check it out here:{" "}
              <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>
                Visit {toolName}
              </a>
              .
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
      <button type="button" onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-900">
        <span className="text-sm font-semibold md:text-base">{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">{answer}</div>}
    </div>
  );
}

export default BeehiivToolPage;
