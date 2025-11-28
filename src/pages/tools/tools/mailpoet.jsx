import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "MailPoet";
const slug = "mailpoet";
const category = "WordPress Email & Newsletters";
const shortPitch = "MailPoet is a WordPress plugin for newsletters, post notifications, and ecommerce flows directly inside WP and WooCommerce.";
const pricingSummary = "Pricing scales with subscriber count. Paid tiers add higher send limits, automation, analytics, and WooCommerce features.";
const officialUrl = "https://www.mailpoet.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/mailpoet.com",
  gradient: "from-amber-500 via-orange-500 to-rose-500",
  glow: "shadow-[0_20px_80px_rgba(249,115,22,0.2)]",
};

const alternatives = [
  { name: "Mailchimp", slug: "mailchimp" },
  { name: "ConvertKit", slug: "convertkit" },
  { name: "MailerLite", slug: "mailerlite" },
  { name: "Aweber", slug: "aweber" },
  { name: "SendGrid", slug: "sendgrid" },
];

const faqs = [
  {
    q: "What is MailPoet?",
    a: "MailPoet is a WordPress plugin that lets you send newsletters, welcome series, and ecommerce emails directly from your WP dashboard.",
  },
  {
    q: "Who is it for?",
    a: "Bloggers, small shops, and agencies that want WP-native email without a separate ESP.",
  },
  {
    q: "Does it work with WooCommerce?",
    a: "Yes. Paid tiers add WooCommerce automations like abandoned cart and product recommendations.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes. Free covers smaller lists with core features to start sending newsletters.",
  },
  {
    q: "Can I use my own SMTP?",
    a: "You can use MailPoet Sending Service or connect another SMTP provider.",
  },
  {
    q: "Does it include automation?",
    a: "Yes. You can build welcome sequences, post notifications, and store-triggered emails.",
  },
  {
    q: "What about GDPR?",
    a: "MailPoet supports consent-friendly forms and list management, but you must configure compliance correctly.",
  },
  {
    q: "Is deliverability handled?",
    a: "MailPoet Sending Service improves deliverability; you still need proper DNS and list hygiene.",
  },
];

function MailpoetToolPage() {
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
        "MailPoet combines email templates, automations, and WooCommerce triggers inside WordPress. It is great for site owners who want simple sending without external ESPs.",
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
      title: "WordPress-native email",
      body: "Create and send newsletters directly from the WP dashboard without external ESPs.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Templates and editor",
      body: "Drag-and-drop templates tailored for blogs and shops with reusable blocks.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "WooCommerce automations",
      body: "Send abandoned cart, product recommendations, and order updates on paid tiers.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "List management",
      body: "Capture subscribers, segment lists, and manage consent-friendly forms.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Deliverability help",
      body: "Use MailPoet Sending Service or connect your own SMTP for reliable delivery.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Analytics",
      body: "Track opens, clicks, and subscriber activity inside WordPress.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="MailPoet review: pricing, features, pros & cons, and alternatives so you can choose a WordPress-native email tool confidently."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-amber-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-orange-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-amber-600" />
                {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                {toolName} Review (2025): Features, Pricing, Pros & Cons
              </h1>
              <p className="mt-4 text-lg text-slate-600">{shortPitch}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-700">
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Our rating: {ratingValue}/5</span>
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Reviewed by GoDigitalPro - Updated May 2025</span>
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
                  {toolName} keeps newsletters and store automations inside WordPress, reducing friction for teams that want to send without leaving WP.
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
              {toolName} is a WordPress plugin for newsletters, welcome series, post notifications, and WooCommerce automations. It lets you design, send, and track email without leaving WP.
            </p>
            <p className="mt-3 text-slate-700">
              It is best for site owners and small shops that prefer WP-native email over external ESPs. You still need list hygiene and DNS setup to keep deliverability strong.
            </p>
            <p className="mt-3 text-slate-700">Pair it with good forms, clear consent, and content quality to get the most from the channel.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for WordPress-first teams that want built-in email and ecommerce flows.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Bloggers sending post updates from WordPress.",
                "Small shops running WooCommerce emails and offers.",
                "Creators wanting simple welcome sequences.",
                "Agencies managing multiple WP sites with basic automations.",
                "Site owners who prefer WP-native templates over external tools.",
                "Marketers avoiding complex ESP setups for small lists.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-amber-500" />
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
              {toolName} focuses on WP-native sending, ecommerce triggers, and simple analytics so teams can run email inside WordPress.
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
                  {toolName} scales pricing with subscriber count and features. Paid tiers add WooCommerce flows, higher send limits, and analytics. Pick a tier that matches your list size and store needs.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Use the free tier to test templates and deliverability; upgrade as subscribers grow or when you need WooCommerce automations.</p>
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
                    <td className="px-4 py-3">Small lists and testing</td>
                    <td className="px-4 py-3">Core templates, basic automation, limited subscribers</td>
                    <td className="px-4 py-3">Great for early-stage blogs</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Premium</td>
                    <td className="px-4 py-3">Growing blogs and shops</td>
                    <td className="px-4 py-3">More subscribers, automation, WooCommerce triggers</td>
                    <td className="px-4 py-3">Covers most small businesses</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Higher volumes</td>
                    <td className="px-4 py-3">Large stores or agencies</td>
                    <td className="px-4 py-3">Highest send limits, advanced support</td>
                    <td className="px-4 py-3">Best for multi-site or high-volume stores</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Factor in deliverability work: DNS records, list hygiene, and segmentation. Budget time to design on-brand templates that load fast in inboxes.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros and cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-amber-50 p-5 shadow-sm ring-1 ring-amber-100">
                <div className="flex items-center gap-2 text-amber-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Works inside WordPress with no external ESP required.</li>
                  <li>Good templates for blogs and ecommerce.</li>
                  <li>WooCommerce triggers cover common store flows.</li>
                  <li>Pricing scales with subscriber count, starting free.</li>
                  <li>Option to use MailPoet sending or your own SMTP.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Less advanced than dedicated ESPs for complex automation.</li>
                  <li>Deliverability still requires good list hygiene and DNS setup.</li>
                  <li>Heavier sites may feel performance impacts if not optimized.</li>
                  <li>Limited A/B testing compared with full marketing suites.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other email platforms to balance simplicity, automation depth, and WordPress integration.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
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
            <p className="text-slate-700">See how {toolName} compares with hosted ESPs and creator-focused platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Mailchimp</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/mailchimp">
                  View Mailchimp
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Mailchimp offers advanced automation and reporting as a hosted ESP. {toolName} keeps everything inside WordPress. Choose Mailchimp for complex multi-channel campaigns, {toolName} for WP simplicity and store triggers.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs ConvertKit</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/convertkit">
                  View ConvertKit
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ConvertKit targets creators with tagging and funnels. {toolName} is simpler and WP-native. Pick ConvertKit for advanced tagging and automations, {toolName} for quick newsletters and store flows inside WP.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want to send newsletters and WooCommerce automations without leaving WordPress and do not need complex ESP features yet.
            </p>
            <p className="mt-3 text-slate-700">
              Ensure deliverability basics (SPF, DKIM) and list hygiene. Plan a path to stronger automation if your program outgrows WP-native tools.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Great for WordPress-first teams that need simple automations and newsletters without a separate ESP; upgrade when volume and complexity rise.
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
            <p>Choose {toolName} if you want WP-native newsletters and store flows with minimal setup.</p>
            <p>
              Upgrade as your list grows or when you need more WooCommerce automation and deliverability support beyond the free tier.
            </p>
            <p>{toolName} keeps email close to your CMS; keep hygiene and compliance in mind to maintain performance.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-amber-700 hover:text-amber-500" href={officialUrl}>
                Visit {toolName}
              </a>.
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
      {open && <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">{answer}</div>}
    </div>
  );
}

export default MailpoetToolPage;
