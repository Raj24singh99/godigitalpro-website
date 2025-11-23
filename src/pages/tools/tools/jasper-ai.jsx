import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Video, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Jasper AI";
const slug = "jasper-ai";
const category = "AI Writing";
const shortPitch =
  "Jasper AI is a brand-safe AI writing platform built for marketing teams that need on-brief copy, campaign workflows, and collaboration without sacrificing governance.";
const pricingSummary = "Paid plans start around $39/month for Creator, with Pro and Business tiers adding collaboration, brand voice, and SSO controls.";
const officialUrl = "https://www.jasper.ai";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/jasper.ai",
  gradient: "from-rose-500 via-purple-500 to-indigo-600",
  glow: "shadow-[0_20px_80px_rgba(147,51,234,0.25)]",
};

const alternatives = [
  { name: "Writesonic", slug: "writesonic" },
  { name: "Rytr", slug: "rytr" },
  { name: "QuillBot", slug: "quillbot" },
  { name: "Grammarly", slug: "grammarly" },
  { name: "CustomGPT AI", slug: "customgpt-ai" },
];

const faqs = [
  {
    q: "Is Jasper AI free?",
    a: "Jasper does not have a true free plan. You can trial it for a limited period, then choose a paid tier starting with Creator for solo use, Pro for teams, and Business for enterprise controls.",
  },
  {
    q: "Does Jasper AI support brand voice?",
    a: "Yes. Jasper’s Brand Voice learns from your examples and guidelines to generate copy that matches tone, style, and terminology across campaigns, landing pages, and ads.",
  },
  {
    q: "Which Jasper AI plan is best for marketing teams?",
    a: "Small teams start on Pro for collaboration, campaign workflows, and multiple seats. Larger marketing orgs should use Business for SSO, compliance, and advanced approvals.",
  },
  {
    q: "Can Jasper AI create long-form content?",
    a: "Yes. Jasper handles blog posts, scripts, briefs, and campaign assets with templates and document-style editing, plus integrations to push drafts into CMS and docs.",
  },
  {
    q: "Is Jasper AI good for agencies?",
    a: "Agencies use Jasper to quickly draft briefs, social copy, ads, and landing page sections while keeping each client’s brand voice separated inside workspaces and permissions.",
  },
  {
    q: "How does Jasper AI compare to Writesonic or Rytr?",
    a: "Writesonic and Rytr are budget-friendly and template-heavy. Jasper focuses on brand governance, workflows, and collaboration, making it better for larger teams needing approvals and consistency.",
  },
  {
    q: "Does Jasper AI integrate with other tools?",
    a: "Yes. Jasper connects with CMS platforms, Google Docs, Chrome, Zapier, and marketing tools so you can draft, review, and publish content with fewer copy-paste steps.",
  },
  {
    q: "Is Jasper AI secure for enterprise?",
    a: "Jasper offers Business plans with SSO, role-based access, separate workspaces, and compliance features designed for enterprise marketing and legal teams.",
  },
];

function JasperToolPage() {
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
        "Jasper AI is an AI writing and marketing co-pilot built to keep content on-brand at scale. It blends brand voice training, campaign workflows, and collaboration so teams can generate copy that meets approvals. Pricing starts near $39/month for individuals, with strong governance available on Business plans.",
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
      icon: <Sparkles className="h-5 w-5 text-rose-500" />,
      title: "Brand Voice and style guides",
      body: "Train Jasper on tone, terminology, and examples so every ad, page, and nurture email matches your brand without rewriting by hand.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-indigo-500" />,
      title: "Campaign workflows and briefs",
      body: "Plan campaigns with briefs, assets, and prompts in one workspace. Move from idea to on-brand copy faster with templates and approvals.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Governance for teams and agencies",
      body: "Separate workspaces, roles, and SSO keep clients or departments organized. Content filters reduce risk before publishing.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Integrations with the marketing stack",
      body: "Use Chrome, Google Docs, CMS exports, and Zapier to push drafts into blogs, docs, or project tools without copy-paste loops.",
    },
    {
      icon: <Video className="h-5 w-5 text-blue-500" />,
      title: "Long-form and multi-format outputs",
      body: "Create blog posts, scripts, social threads, and landing page sections with guided prompts, AI chat, and document editing.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-600" />,
      title: "Analytics and collaboration",
      body: "Track usage, share folders, comment, and reuse prompts. Marketing leaders get visibility into activity and content quality trends.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Honest Jasper AI review for marketers and agencies. See pricing, features, pros & cons, alternatives, and whether Jasper fits your 2025 stack."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-rose-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-rose-500" />
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
                  Built for marketing teams that need approvals, brand consistency, and fast output, Jasper helps produce on-brief copy across campaigns without endless rewrites.
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
              Jasper is an {category.toLowerCase()} platform designed to keep marketing copy on-brand at speed. It combines AI chat, templates, and workflows with brand voice training so teams can produce content that feels consistent across channels.
            </p>
            <p className="mt-3 text-slate-700">
              Agencies and in-house teams use Jasper for ads, landing page sections, nurture emails, scripts, blog posts, and briefs. Workspaces and permissions keep clients and departments separated while sharing prompts and assets.
            </p>
            <p className="mt-3 text-slate-700">Enterprise-oriented features such as SSO, compliance options, and content filters make Jasper safer for regulated industries and large orgs.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Jasper fits marketing teams that need on-brand copy with collaboration and approvals baked in.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Agencies delivering multi-client copy while keeping workspaces clean.",
                "In-house marketing teams drafting ads, pages, and nurture sequences with brand voice governance.",
                "Content teams producing blogs, scripts, and briefs with reusable prompt libraries.",
                "Growth marketers spinning up experiments and A/B variants quickly.",
                "Sales and success teams personalizing outreach while staying on-message.",
                "Enterprises needing SSO, permissions, and compliance to control AI usage.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">Jasper is built to ship approved, on-brand content quickly while keeping teams aligned.</p>
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
                  {toolName} uses seat-based pricing with feature unlocks for collaboration and governance. Creator is best for individuals, Pro adds multiple seats and brand voice, and Business layers in SSO, custom AI usage, and security controls.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Solo marketers choose Creator; small teams pick Pro; regulated or large orgs go Business.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Creator</td>
                    <td className="px-4 py-3">Solo marketers or founders</td>
                    <td className="px-4 py-3">1 seat, brand voice basics, standard templates</td>
                    <td className="px-4 py-3">~$39/month</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Small teams needing collaboration</td>
                    <td className="px-4 py-3">3+ seats, campaigns, collaboration, multiple brand voices</td>
                    <td className="px-4 py-3">From ~$59/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business</td>
                    <td className="px-4 py-3">Agencies and enterprise marketing orgs</td>
                    <td className="px-4 py-3">SSO, custom AI models, workspaces, approvals, security reviews</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Add-ons</td>
                    <td className="px-4 py-3">Specialists needing extra usage or integrations</td>
                    <td className="px-4 py-3">Higher limits, API options, translation, extra brand voices</td>
                    <td className="px-4 py-3">Varies</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Individuals can start with Creator to test Jasper’s workflows. Teams needing collaboration and brand voice consistency should choose Pro. Enterprise and agency teams that require SSO, workspaces, and security reviews should speak with sales about Business.
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
                  <li>Brand voice training and style guides keep output consistent.</li>
                  <li>Campaign workflows make it easy to produce ads, emails, and pages in one flow.</li>
                  <li>Workspaces, roles, and SSO support agencies and enterprises.</li>
                  <li>Strong long-form and multi-format support with templates and AI chat.</li>
                  <li>Integrations to CMS, Docs, Chrome, and Zapier reduce copy-paste friction.</li>
                  <li>Content filters and approvals reduce risk before publishing.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>No permanent free plan; trials are time-limited.</li>
                  <li>Pricing is higher than lightweight copy tools like Rytr.</li>
                  <li>Requires setup time to train brand voice and prompts.</li>
                  <li>Advanced governance and SSO sit behind custom-priced plans.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Jasper focuses on brand governance and team workflows. If you prioritize price, simplicity, or research-first AI, consider these alternatives marketers often evaluate side by side.
            </p>
            <p className="mt-2 text-slate-700">Each option offers AI-assisted writing; they differ on governance depth, templates, pricing, and integrations.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
                  </div>
                  <a className="text-sm font-semibold text-rose-600 hover:text-rose-500" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">Here’s how {toolName} compares to two common AI writing options.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Writesonic</h3>
                <a className="text-sm font-semibold text-rose-700 hover:text-rose-600" href="/tools/compare/writesonic-vs-jasper-vs-rytr">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Writesonic is budget-friendly with many templates and fast publishing options. Jasper costs more but offers deeper brand voice controls, collaboration, and governance suited for larger marketing teams.
              </p>
              <p className="mt-2 text-slate-700">Choose Writesonic for affordable copy experiments; choose Jasper when approvals, brand safety, and multi-seat workflows matter.</p>
              <p className="mt-2 text-slate-900">Teams that need on-brand assets across channels will benefit most from Jasper’s structure and controls.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs ProWritingAid</h3>
                <a className="text-sm font-semibold text-rose-700 hover:text-rose-600" href="/tools/compare/prowritingaid-vs-jasper-vs-writesonic">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ProWritingAid excels at editing depth, style reports, and grammar. Jasper is stronger for net-new marketing copy, campaign workflows, and brand voice. Many teams pair them: generate in Jasper, polish in ProWritingAid.
              </p>
              <p className="mt-2 text-slate-700">If you need governance, collaboration, and content velocity, Jasper leads. If you only need editing suggestions, ProWritingAid may suffice.</p>
              <p className="mt-2 text-slate-900">Choose Jasper when content creation and approvals dominate your workflow; keep ProWritingAid for final polish.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              For marketing teams that need to ship on-brand copy quickly, Jasper is worth the investment. Brand Voice, workflows, and collaboration reduce rewrites and approval cycles, saving time across campaigns.
            </p>
            <p className="mt-3 text-slate-700">
              If you only need occasional copy help or prefer the lowest price, lighter tools like Rytr or Writesonic may be enough. For enterprises and agencies with governance requirements, Jasper’s Business tier is compelling.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Jasper is a strong pick for marketers who value brand consistency, collaboration, and security alongside AI writing speed.
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
              Choose Jasper if you’re a marketer, agency, or enterprise team that needs brand-safe copy across ads, pages, and lifecycle campaigns. It speeds up production while keeping voice and approvals intact.
            </p>
            <p>
              Consider alternatives like Writesonic or Rytr if budget is the main concern, or ProWritingAid if you primarily want editing and grammar feedback. For data-grounded chatbots, CustomGPT AI is a better fit.
            </p>
            <p>Jasper fits neatly into modern marketing stacks, connecting to CMS tools, Docs, and automations so teams can publish faster with fewer copy-paste loops.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here: <a className="text-rose-700 hover:text-rose-500" href={officialUrl}>Visit {toolName}</a>.
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-rose-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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

export default JasperToolPage;
