import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown, Mail, Workflow, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "MailerLite";
const slug = "mailerlite";
const category = "Email marketing & automation";
const shortPitch =
  "MailerLite is a lean email marketing platform with automations, drag-and-drop newsletters, landing pages, and form capture built for creators, SaaS, and agencies.";
const pricingSummary =
  "Free plan up to 1,000 subscribers. Paid plans start around $15/month for advanced automations, dynamic segmentation, and higher sends as lists grow.";
const officialUrl = "https://www.mailerlite.com";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/mailerlite.com",
  gradient: "from-emerald-500 via-green-500 to-teal-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.18)]",
};

const alternatives = [
  { name: "ConvertKit", slug: "convertkit" },
  { name: "ActiveCampaign", slug: "activecampaign" },
  { name: "Klaviyo", slug: "klaviyo" },
  { name: "Omnisend", slug: "omnisend" },
  { name: "AWeber", slug: "aweber" },
];

const faqs = [
  {
    q: "Is MailerLite good for beginners?",
    a: "Yes. The UI is lightweight and the drag-and-drop email builder is intuitive. Most users can launch campaigns and automations without developer help.",
  },
  {
    q: "Does MailerLite support automations?",
    a: "MailerLite includes visual automation workflows for welcome journeys, lead nurture, onboarding, and win-backs with triggers, delays, and branching.",
  },
  {
    q: "Can I build landing pages with MailerLite?",
    a: "Yes. You can publish landing pages, popups, and forms without code. Templates ship with sections for lead capture and simple offers.",
  },
  {
    q: "How does MailerLite pricing work?",
    a: "Pricing scales by subscriber count and plan tier. The free plan covers basic sends; paid tiers unlock more monthly emails, automation depth, and additional users.",
  },
  {
    q: "Does MailerLite integrate with other tools?",
    a: "It integrates with Shopify, WooCommerce, Stripe, WordPress, Zapier, Make, and dozens of native apps. Webhooks and APIs handle custom connections.",
  },
  {
    q: "Is MailerLite good for ecommerce?",
    a: "MailerLite supports Shopify/WooCommerce, product blocks, abandoned cart emails, and customer tagging. Klaviyo/Omnisend have deeper ecommerce analytics, but MailerLite works for lean stores.",
  },
  {
    q: "Is deliverability strong?",
    a: "Deliverability is solid for most senders as long as you authenticate domains (SPF/DKIM) and keep lists clean. Warm up domains and segment to maintain inboxing.",
  },
  {
    q: "Can agencies manage multiple accounts?",
    a: "Yes. You can manage multiple workspaces, invite teammates, and control permissions, making it workable for agencies and freelancers handling client lists.",
  },
];

function MailerLiteToolPage() {
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
        "MailerLite delivers clean email marketing with automation, landing pages, and forms that are easy to ship. Pricing is friendly for beginners and scales predictably for growing lists.",
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
      icon: <Mail className="h-5 w-5 text-emerald-600" />,
      title: "Modern email builder",
      body: "Drag-and-drop newsletters with saved blocks, product embeds, countdowns, and personalized content make campaigns fast to ship.",
    },
    {
      icon: <Workflow className="h-5 w-5 text-indigo-600" />,
      title: "Visual automation",
      body: "Build welcome series, nurture journeys, and re-engagement flows with triggers, delays, conditions, and goals.",
    },
    {
      icon: <Plug className="h-5 w-5 text-sky-500" />,
      title: "Integrations and APIs",
      body: "Connect to Shopify, WooCommerce, Stripe, Zapier, Make, and webhooks. Sync events and subscribers both ways.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-amber-500" />,
      title: "Landing pages & forms",
      body: "Publish landing pages, popups, and embedded forms with templates optimized for lead capture—no separate builder required.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-500" />,
      title: "Deliverability safeguards",
      body: "Domain auth, list hygiene tools, and engagement-based segmentation help maintain inbox placement as you scale sending volume.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-rose-500" />,
      title: "Reporting that’s easy to read",
      body: "Track opens, clicks, sales attribution, and automation performance with clear dashboards your team and clients can follow.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Practical MailerLite review for marketers and founders covering pricing, features, automations, pros & cons, alternatives, and who should use it."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-teal-300/20 blur-3xl" />
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
                    <p className="text-xs uppercase tracking-[0.18em] text-white/80">Featured Tool</p>
                    <p className="text-xl font-bold">{toolName}</p>
                  </div>
                </div>
                <p className="relative mt-4 text-sm leading-relaxed text-white/90">
                  MailerLite keeps email marketing simple while offering the automations and landing pages founders and agencies need to ship fast without bloat.
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
              {toolName} is an {category.toLowerCase()} platform that combines email campaigns, automations, landing pages, and forms in one straightforward tool. It balances usability with enough depth for growing companies.
            </p>
            <p className="mt-3 text-slate-700">
              Creators and SaaS teams like MailerLite for quick onboarding, clean reporting, and fair pricing. Ecommerce brands can run abandoned cart and product emails, while agencies appreciate multi-account management and
              permissions.
            </p>
            <p className="mt-3 text-slate-700">
              If you outgrow the free tier, paid plans scale predictably by list size and unlock richer automations, more sends, and collaboration features.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">MailerLite is ideal for teams that want approachable email automation without complex enterprise overhead.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Creators and newsletters needing fast, attractive campaigns.",
                "SaaS and product teams delivering onboarding and lifecycle email.",
                "Ecommerce stores wanting lean automations for cart recovery and promos.",
                "Agencies managing multiple client lists with clear permissions.",
                "Startups that value predictable, subscriber-based pricing.",
                "Teams migrating from Mailchimp or starting fresh with clean lists.",
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
            <p className="mt-3 text-slate-700">MailerLite focuses on the core workflows marketers need: sending, automating, capturing, and reporting.</p>
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
                  Pricing is based on subscriber count. The free tier covers up to 1,000 subscribers with basic sends; paid tiers unlock higher monthly emails, advanced automation, dynamic segmentation, and additional users.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Stay on Free to test; upgrade to Growing Business once automations matter; go Advanced for bigger lists and richer controls.</p>
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
                    <td className="px-4 py-3">Testing, small lists, simple newsletters</td>
                    <td className="px-4 py-3">Up to 1,000 subscribers, limited sends/features</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growing Business</td>
                    <td className="px-4 py-3">Creators and SMBs needing automation</td>
                    <td className="px-4 py-3">Higher send limits, automation, dynamic segmentation</td>
                    <td className="px-4 py-3">~$15+/month (based on list size)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Advanced</td>
                    <td className="px-4 py-3">Larger lists and teams</td>
                    <td className="px-4 py-3">Highest send caps, more users, advanced controls</td>
                    <td className="px-4 py-3">Custom by subscribers</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              List size drives cost, so keep hygiene tight. If ecommerce analytics and predictive models matter most, compare Klaviyo or Omnisend. For lean automation with predictable pricing, MailerLite stays competitive.
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
                  <li>Easy, modern UI with fast onboarding.</li>
                  <li>Visual automations with branching and delays.</li>
                  <li>Landing pages, forms, and popups included.</li>
                  <li>Fair pricing that scales by subscribers, not seats.</li>
                  <li>Integrations with Shopify, WooCommerce, Zapier, Make.</li>
                  <li>Clean reports clients and stakeholders can digest.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Fewer native ecommerce analytics vs Klaviyo/Omnisend.</li>
                  <li>Advanced multivariate testing is limited.</li>
                  <li>Higher-volume senders may need deliverability tuning.</li>
                  <li>Fewer deep CRM features than ActiveCampaign.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              If you need deeper ecommerce analytics, a built-in CRM, or more aggressive testing, consider these alternatives. They all link to detailed tool pages.
            </p>
            <p className="mt-2 text-slate-700">They differ on pricing models, automation depth, and integrations.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Email platform in the same space.</p>
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
            <p className="text-slate-700">Here’s how MailerLite compares with popular email marketing suites.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Klaviyo vs Omnisend</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/klaviyo-vs-omnisend-vs-mailerlite">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Klaviyo and Omnisend lean into ecommerce data and predictive segments. MailerLite is simpler and cheaper; it covers core automations and landing pages without heavy analytics overhead.
              </p>
              <p className="mt-2 text-slate-700">
                Choose Klaviyo/Omnisend for advanced ecommerce journeys; choose MailerLite if you prioritize ease, price, and clean UI for general marketing and light ecommerce.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs ConvertKit vs OptinMonster</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/optinmonster-vs-convertkit-vs-mailerlite">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ConvertKit focuses on creators with simple automations. OptinMonster is great for on-site capture. MailerLite bundles capture + email + landing pages, making it a strong all-rounder for lean teams.
              </p>
              <p className="mt-2 text-slate-700">
                Choose MailerLite if you want everything in one UI; pick ConvertKit for creator-focused tagging; pick OptinMonster if you already have an ESP and only need high-converting forms.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              For creators, SMBs, and agencies that want approachable email marketing with solid automations, {toolName} is a strong pick. It ships quickly, scales by list size, and avoids the heavy UI of enterprise suites.
            </p>
            <p className="mt-3 text-slate-700">
              If you need deep ecommerce analytics, predictive models, or CRM-grade automations, consider Klaviyo or ActiveCampaign. Otherwise, MailerLite balances price and capability well.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> MailerLite is worth it when you need clean email workflows, fast setup, and pricing that stays predictable as your list grows.
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
              Choose MailerLite if you want an easy, affordable email platform with landing pages, forms, and automations built in. It’s great for creators, SMBs, and agencies shipping campaigns quickly.
            </p>
            <p>
              Consider Klaviyo or Omnisend for deeper ecommerce data, or ActiveCampaign if you need CRM-grade automations and deal tracking. ConvertKit stays a favorite for creator tagging and simplicity.
            </p>
            <p>MailerLite slots neatly into most stacks via Zapier/Make and native ecommerce connectors, keeping data flowing without heavy setup.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
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

export default MailerLiteToolPage;
