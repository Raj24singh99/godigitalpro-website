import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Video, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "GetResponse";
const slug = "getresponse";
const category = "Email & Marketing Automation";
const shortPitch =
  "GetResponse is an email marketing and automation platform with funnels, landing pages, webinars, and ecommerce tools aimed at SMBs and creators.";
const pricingSummary = "Free tier with list limits; paid plans start near $15/month, scaling by list size with features for automation, webinars, and ecommerce on higher tiers.";
const officialUrl = "https://www.getresponse.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/getresponse.com",
  gradient: "from-blue-500 via-sky-500 to-emerald-500",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.22)]",
};

const alternatives = [
  { name: "Mailerlite", slug: "mailerlite" },
  { name: "ActiveCampaign", slug: "activecampaign" },
  { name: "ConvertKit", slug: "convertkit" },
  { name: "Klaviyo", slug: "klaviyo" },
  { name: "Omnisend", slug: "omnisend" },
];

const faqs = [
  {
    q: "Is GetResponse free?",
    a: "Yes. GetResponse offers a free tier with list and feature limits. Paid plans scale list size and unlock automation, webinars, and ecommerce features.",
  },
  {
    q: "Does GetResponse include automation?",
    a: "Yes. Workflows, autoresponders, scoring, and segmentation are included on paid plans, with more advanced automation on higher tiers.",
  },
  {
    q: "Can I run webinars with GetResponse?",
    a: "Yes. GetResponse has built-in webinars and funnels, which is unique among many email tools. Higher tiers increase attendee limits.",
  },
  {
    q: "Is GetResponse good for ecommerce?",
    a: "Yes. Ecommerce features include product recommendations, abandoned cart flows, and integrations with major ecommerce platforms.",
  },
  {
    q: "Does GetResponse have landing pages?",
    a: "Yes. Landing pages and funnels are included, plus basic website builders and popups to capture leads.",
  },
  {
    q: "How does GetResponse compare to Mailerlite or ConvertKit?",
    a: "GetResponse is broader with webinars and funnels. Mailerlite is simpler and cheaper; ConvertKit is creator-focused. ActiveCampaign is deeper on automation.",
  },
  {
    q: "Can I integrate GetResponse with other tools?",
    a: "Yes. Integrations include Shopify, WooCommerce, Zapier, CRMs, and webinar tools; APIs and webhooks are available.",
  },
  {
    q: "Is GetResponse compliant and secure?",
    a: "GetResponse offers GDPR-friendly tools, consent fields, and security features like 2FA. Higher tiers add more support and controls.",
  },
];

function GetResponseToolPage() {
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
        "GetResponse combines email marketing, automation, landing pages, webinars, and ecommerce tools for SMBs and creators. It’s a broad platform with a unique built-in webinar feature, starting with a free tier and scaling by list size.",
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
      icon: <Sparkles className="h-5 w-5 text-blue-500" />,
      title: "Email and automation",
      body: "Autoresponders, workflows, segmentation, scoring, and personalization to nurture subscribers at scale.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-indigo-500" />,
      title: "Landing pages and funnels",
      body: "Drag-and-drop pages, popups, and funnels to capture leads without separate builders.",
    },
    {
      icon: <Video className="h-5 w-5 text-emerald-500" />,
      title: "Built-in webinars",
      body: "Host webinars natively, capture registrations, and follow up with automation—differentiating GetResponse from many email tools.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Ecommerce capabilities",
      body: "Abandoned cart flows, product recommendations, and store integrations for Shopify, WooCommerce, and more.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Compliance and consent",
      body: "GDPR-friendly fields, double opt-in options, and security features like 2FA and suppression management.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Reporting and deliverability",
      body: "Performance dashboards, deliverability tools, and A/B testing to optimize campaigns and funnels.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Comprehensive GetResponse review covering pricing, features, pros & cons, alternatives, and whether GetResponse fits your 2025 marketing automation stack."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-sky-200/30 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-emerald-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-blue-500" />
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
                  GetResponse combines email, automation, landing pages, webinars, and ecommerce flows so SMBs can capture, nurture, and convert without stitching tools.
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
            <h2 className="text-2xl font-bold text-slate-900">What is GetResponse?</h2>
            <p className="mt-4 text-slate-700">
              GetResponse is an {category.toLowerCase()} platform offering email campaigns, automation, landing pages, webinars, and ecommerce tools. It’s designed for SMBs and creators who want a broad toolkit without managing many integrations.
            </p>
            <p className="mt-3 text-slate-700">
              Compared to lean email tools, GetResponse stands out with native webinars and funnels. It also supports ecommerce flows like abandoned cart emails and product recommendations.
            </p>
            <p className="mt-3 text-slate-700">Plans scale by list size and features, so budgeting requires estimating contact growth and feature needs early.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">GetResponse suits teams that want email plus webinars and funnels in one tool.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "SMBs running lead-gen funnels with email nurture.",
                "Creators hosting webinars and selling digital products.",
                "Ecommerce brands wanting abandoned cart flows and recommendations.",
                "Agencies building funnels and email programs for clients.",
                "Teams needing landing pages, popups, and automation without separate tools.",
                "Marketers who want built-in webinars instead of external integrations.",
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
            <p className="mt-3 text-slate-700">GetResponse stands out for combining email, funnels, webinars, and ecommerce flows.</p>
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
                  Pricing scales by list size and plan. Free covers small lists with limited features. Paid tiers unlock automation, webinars, funnels, and ecommerce tools. Higher tiers add more webinar attendees and advanced automation.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on free/low tiers to validate. Upgrade when you need automation depth, webinars, or ecommerce flows.</p>
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
                    <td className="px-4 py-3">Small lists testing the platform</td>
                    <td className="px-4 py-3">List size cap, limited automation/webinars</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Email Marketing / Marketing Automation</td>
                    <td className="px-4 py-3">Growing lists and automations</td>
                    <td className="px-4 py-3">Features scale with sub-plan; advanced automation on higher sub-tiers</td>
                    <td className="px-4 py-3">From ~$15/month (list-size based)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Ecommerce Marketing</td>
                    <td className="px-4 py-3">Stores needing cart recovery and recommendations</td>
                    <td className="px-4 py-3">Higher webinar caps, ecommerce automation</td>
                    <td className="px-4 py-3">List-size based; higher than core plans</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Add-ons</td>
                    <td className="px-4 py-3">Teams needing more webinars/contacts</td>
                    <td className="px-4 py-3">Extra attendees, contacts, transactional email</td>
                    <td className="px-4 py-3">Varies</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Budget by list size and webinar needs. If you mainly need email, compare costs with Mailerlite or ConvertKit. If you need automation depth, benchmark against ActiveCampaign.
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
                  <li>Built-in webinars and funnels.</li>
                  <li>Strong automation for SMBs.</li>
                  <li>Landing pages, popups, and basic website builder included.</li>
                  <li>Ecommerce features like abandoned cart and recommendations.</li>
                  <li>Wide integrations and APIs.</li>
                  <li>Free tier to start testing.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Pricing scales with list size; can get expensive as you grow.</li>
                  <li>Automation depth is strong but less advanced than top-end platforms.</li>
                  <li>Landing pages and builder are solid but not as flexible as dedicated tools.</li>
                  <li>Webinar caps and features depend on tier; higher limits cost more.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Choose alternatives based on price sensitivity, automation depth, or creator focus.
            </p>
            <p className="mt-2 text-slate-700">All offer email/automation; they differ on webinars, ecommerce, and pricing models.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
                  </div>
                  <a className="text-sm font-semibold text-blue-700 hover:text-blue-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">Here’s how GetResponse compares to common email and automation platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Mailerlite</h3>
                <a className="text-sm font-semibold text-blue-700 hover:text-blue-600" href="/tools/compare/getresponse-vs-mailerlite-vs-convertkit">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Mailerlite is simpler and cheaper, great for basic newsletters and light automation. GetResponse adds webinars, funnels, and ecommerce automation at a higher price.
              </p>
              <p className="mt-2 text-slate-900">Choose Mailerlite for lightweight programs; choose GetResponse if you need webinars and ecommerce flows.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs ActiveCampaign</h3>
                <a className="text-sm font-semibold text-blue-700 hover:text-blue-600" href="/tools/compare/getresponse-vs-mailerlite-vs-convertkit">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ActiveCampaign offers deeper automation and CRM-style features. GetResponse is broader with webinars and landing pages. Choose ActiveCampaign for advanced workflows; choose GetResponse for all-in-one email, funnels, and webinars.
              </p>
              <p className="mt-2 text-slate-900">If you run webinars and ecommerce flows, GetResponse stands out; for intricate automations, ActiveCampaign may fit better.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you want email marketing plus webinars, funnels, and ecommerce automation in one platform, GetResponse is worth it. It reduces tool sprawl and speeds campaign launches.
            </p>
            <p className="mt-3 text-slate-700">
              If budget is tight or you only need newsletters, try Mailerlite or ConvertKit. For heavy automation and CRM integration, compare with ActiveCampaign or HubSpot.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> GetResponse is a strong all-in-one marketing platform for SMBs needing email, webinars, and ecommerce flows—plan list growth to manage costs.
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
              Choose {toolName} if you want email, automation, landing pages, webinars, and ecommerce tools in one platform. It’s best for SMBs and creators who value breadth.
            </p>
            <p>
              Consider Mailerlite or ConvertKit for simpler newsletters, or ActiveCampaign for deeper automation. GetResponse shines when webinars and ecommerce flows matter without adding extra tools.
            </p>
            <p>It integrates with major platforms and supports APIs, making it flexible enough to fit into most marketing stacks.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here: <a className="text-blue-700 hover:text-blue-600" href={officialUrl}>Visit {toolName}</a>.
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-blue-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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

export default GetResponseToolPage;
