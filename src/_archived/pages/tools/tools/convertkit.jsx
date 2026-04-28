import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "ConvertKit";
const slug = "convertkit";
const category = "Email Marketing for Creators";
const shortPitch =
  "ConvertKit is an email marketing and automation platform built for creators, helping you grow audiences with forms, landing pages, broadcasts, and visual automations.";
const pricingSummary =
  "Free tier for up to 1k subscribers with limited features. Creator from ~$15/month, Creator Pro from ~$29/month with advanced automations, deliverability tools, and referral program.";
const officialUrl = "https://convertkit.com";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/convertkit.com",
  gradient: "from-orange-500 via-rose-500 to-slate-700",
  glow: "shadow-[0_20px_80px_rgba(249,115,22,0.22)]",
};

const alternatives = [
  { name: "MailerLite", slug: "mailerlite" },
  { name: "ActiveCampaign", slug: "activecampaign" },
  { name: "AWeber", slug: "aweber" },
  { name: "GetResponse", slug: "getresponse" },
  { name: "Beehiiv", slug: "beehiiv" },
];

const faqs = [
  { q: "Is ConvertKit free?", a: "ConvertKit has a free plan up to 1,000 subscribers with core forms and broadcasts. Advanced automations, deliverability controls, and referral features are on paid plans." },
  { q: "Who is ConvertKit best for?", a: "Creators, newsletter operators, and small businesses who need simple automations, easy forms/landing pages, and solid deliverability without enterprise complexity." },
  { q: "Does ConvertKit have visual automation?", a: "Yes. ConvertKit offers a visual automation builder for sequences, tagging, conditional paths, and events like purchases, link clicks, and custom fields." },
  { q: "What ecommerce integrations exist?", a: "ConvertKit integrates with Shopify, Stripe, and WooCommerce. You can trigger automations on purchases and segment by product or amount." },
  { q: "Is deliverability good?", a: "ConvertKit focuses on deliverability with tools for domain authentication, link/page checks, and list hygiene recommendations to keep inbox rates high." },
  { q: "Can I sell products or subscriptions?", a: "ConvertKit Commerce lets you sell digital products and subscriptions directly, with automatic delivery and tagging for follow-up sequences." },
  { q: "Does ConvertKit handle referrals?", a: "Creator Pro includes a newsletter referral system to reward subscribers for inviting others, helping grow lists organically." },
  { q: "Which plan should I choose?", a: "Start with Creator if you need automations and tagging. Upgrade to Creator Pro for advanced deliverability tools, referrals, and more reporting." },
];

function ConvertKitToolPage() {
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
        "ConvertKit is a creator-first email platform with strong tagging, visual automations, and deliverability. It’s great for newsletters, product launches, and simple funnel automation.",
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
      icon: <Mail className="h-5 w-5 text-orange-500" />,
      title: "Forms, landing pages, and broadcasts",
      body: "Capture subscribers with hosted forms and landing pages, then send quick broadcasts with clean editor and templates built for deliverability.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-rose-500" />,
      title: "Visual automations and tagging",
      body: "Build sequences, tags, and conditional logic to nurture subscribers based on behaviors like link clicks, purchases, or custom fields.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-emerald-500" />,
      title: "Commerce for creators",
      body: "Sell digital products and subscriptions directly through ConvertKit, tagging buyers and triggering follow-ups automatically.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Integrations across the stack",
      body: "Connect Shopify, WooCommerce, Stripe, Gumroad, Calendly, and more. Use webhooks and Zapier for custom workflows.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Deliverability and compliance",
      body: "Domain authentication, link checks, GDPR-friendly consent tools, and hygiene reminders keep inbox placement strong.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-slate-700" />,
      title: "Growth and referrals",
      body: "Creator Pro adds referral programs, subscriber scoring, and advanced reporting to accelerate list growth.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Full ConvertKit review for creators: pricing, features, pros & cons, alternatives, and comparisons vs MailerLite and ActiveCampaign."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-rose-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-orange-300/25 blur-3xl" />
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
                  ConvertKit focuses on creators: simple forms, clean broadcasts, and visual automations that keep audiences engaged and deliverability high.
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
              {toolName} is an {category.toLowerCase()} platform that makes it easy to capture subscribers, automate sequences, sell digital products, and maintain deliverability. It’s built for creators and lean teams.
            </p>
            <p className="mt-3 text-slate-700">
              Newsletter operators, course creators, and SaaS marketers appreciate its visual automations, tagging, and simple landing pages, plus a commerce option for direct sales.
            </p>
            <p className="mt-3 text-slate-700">
              With lightweight templates and strong deliverability tools, ConvertKit keeps focus on sending reliable campaigns instead of complex CRM overhead.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} suits creators and lean teams who want clean automations and good deliverability without enterprise CRM complexity.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Newsletter creators who need fast forms, landing pages, and broadcasts.",
                "Course and digital product sellers triggering automations from purchases.",
                "Founders and marketers building simple funnels with tagging and sequences.",
                "Content creators running lead magnets and nurturing subscribers over time.",
                "Small teams needing dependable deliverability and sender reputation tools.",
                "Operators wanting referrals and list growth features without extra plugins.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-orange-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">ConvertKit focuses on shipping emails with strong deliverability, clean automations, and creator-friendly growth tools.</p>
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
                  Pricing scales by subscriber count. Free covers basics; Creator adds automations and tagging; Creator Pro adds advanced deliverability tools, referrals, and team features.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on Creator for automations; move to Creator Pro for referrals and deliverability controls.</p>
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
                    <td className="px-4 py-3">Testing and small lists</td>
                    <td className="px-4 py-3">Forms, basic broadcasts, limited automation</td>
                    <td className="px-4 py-3">$0 (up to 1k subs)</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Creator</td>
                    <td className="px-4 py-3">Creators and small teams</td>
                    <td className="px-4 py-3">Visual automations, sequences, tagging, integrations</td>
                    <td className="px-4 py-3">~$15+/month (subscriber-based)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Creator Pro</td>
                    <td className="px-4 py-3">Scaling newsletters and brands</td>
                    <td className="px-4 py-3">Referral program, deliverability tools, scoring, advanced reporting</td>
                    <td className="px-4 py-3">~$29+/month (subscriber-based)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              As your list grows, budget for deliverability best practices: domain authentication, list hygiene, and link/page checks. Creator Pro simplifies this for teams scaling faster.
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
                  <li>Creator-friendly UI with fast forms and landing pages.</li>
                  <li>Visual automations and tagging make segmentation simple.</li>
                  <li>Strong focus on deliverability and sender reputation.</li>
                  <li>Commerce and referrals built-in for monetization and growth.</li>
                  <li>Integrations with ecommerce and creator tools to trigger journeys.</li>
                  <li>Transparent pricing tiers that scale with list size.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Design flexibility is simpler than some newsletter platforms.</li>
                  <li>Advanced CRM/reporting depth is lighter than enterprise MAPs.</li>
                  <li>Commerce is basic compared to full ecommerce suites.</li>
                  <li>Pricing scales with list size; large lists may prefer volume discounts elsewhere.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              ConvertKit competes with email service providers and newsletter platforms. Choose based on automation needs, design flexibility, and list growth features.
            </p>
            <p className="mt-2 text-slate-700">All send campaigns; they differ on visual builders, pricing, and CRM depth.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
                  </div>
                  <a className="text-sm font-semibold text-rose-700 hover:text-rose-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">Here’s how ConvertKit compares to two popular email tools.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs MailerLite</h3>
                <a className="text-sm font-semibold text-rose-700 hover:text-rose-600" href="/tools/compare/getresponse-vs-mailerlite-vs-convertkit">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                MailerLite offers strong landing page and design options at competitive pricing. ConvertKit focuses on deliverability, tagging, and creator workflows with simpler templates.
              </p>
              <p className="mt-2 text-slate-700">
                Choose ConvertKit for automation simplicity and referrals; choose MailerLite if you need more design flexibility and lower entry pricing.
              </p>
              <p className="mt-2 text-slate-900">Both are great for small teams—pick based on design vs. automation depth priorities.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs ActiveCampaign</h3>
                <a className="text-sm font-semibold text-rose-700 hover:text-rose-600" href="/tools/compare/optinmonster-vs-convertkit-vs-mailerlite">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ActiveCampaign is a deeper marketing automation platform with CRM features and complex branching. ConvertKit is lighter, faster to set up, and creator-focused.
              </p>
              <p className="mt-2 text-slate-700">
                Choose ConvertKit for lean funnels and newsletters; choose ActiveCampaign if you need CRM, lead scoring, and multi-channel automation complexity.
              </p>
              <p className="mt-2 text-slate-900">ConvertKit wins on simplicity; ActiveCampaign wins on enterprise-level automation breadth.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it for creators and lean teams that want reliable deliverability, simple automations, and built-in monetization without heavy CRM overhead.
            </p>
            <p className="mt-3 text-slate-700">
              If you need deep CRM features or complex multi-channel journeys, consider ActiveCampaign or HubSpot. For design-heavy newsletters, MailerLite or Beehiiv may suit you better.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> ConvertKit is a strong, creator-first email platform with the right balance of simplicity, automation, and deliverability for most small to mid-size lists.
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
              Choose ConvertKit if you want creator-focused email with clean automations, strong deliverability, and built-in commerce/referral tools to grow your list.
            </p>
            <p>
              Consider MailerLite for more design options, ActiveCampaign for deeper automation + CRM, or Beehiiv for newsletter-native features. ConvertKit balances ease and deliverability for most teams.
            </p>
            <p>ConvertKit plugs into ecommerce, scheduling, and automation tools so your campaigns stay connected to revenue and engagement signals.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-rose-700 hover:text-rose-600" href={officialUrl}>
                Visit {toolName}
              </a>
              .
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-rose-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default ConvertKitToolPage;
