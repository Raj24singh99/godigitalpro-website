import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Video, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "HelpCrunch";
const slug = "helpcrunch";
const category = "Customer Support & Chat";
const shortPitch =
  "HelpCrunch is a customer communication platform offering live chat, shared inbox, email campaigns, and knowledge base so teams can support and convert users in one place.";
const pricingSummary = "Plans start around $15/user/month (annual) for Basic chat/inbox, with Pro adding email campaigns, popups, and advanced automation.";
const officialUrl = "https://helpcrunch.com";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/helpcrunch.com",
  gradient: "from-indigo-500 via-blue-500 to-teal-500",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.22)]",
};

const alternatives = [
  { name: "Tidio", slug: "tidio" },
  { name: "Intercom", slug: "intercom" },
  { name: "HelpScout", slug: "helpscout" },
  { name: "Crisp", slug: "crisp" },
  { name: "LiveChat", slug: "livechat" },
];

const faqs = [
  {
    q: "Is there a free plan for HelpCrunch?",
    a: "HelpCrunch does not have a permanent free plan. Paid tiers start with Basic for chat/inbox, and Pro adds email campaigns, popups, and advanced automation.",
  },
  {
    q: "What channels does HelpCrunch support?",
    a: "HelpCrunch provides live chat, shared inbox for email, and in-app messaging. You can also run email campaigns and popups on higher tiers.",
  },
  {
    q: "Does HelpCrunch include a knowledge base?",
    a: "Yes. You can publish and organize help articles, and surface them in chat to deflect common questions.",
  },
  {
    q: "Can I automate replies in HelpCrunch?",
    a: "Yes. Automated messages, routing, and chatbots are available to greet users, qualify leads, and reduce repetitive replies.",
  },
  {
    q: "Is HelpCrunch good for startups?",
    a: "HelpCrunch is popular with startups and SMBs because it combines chat, inbox, email campaigns, and KB at a lower cost than enterprise suites.",
  },
  {
    q: "How does HelpCrunch compare to Intercom?",
    a: "HelpCrunch is more affordable and simpler; Intercom offers deeper product tours, bots, and enterprise features. Pick based on automation depth and budget.",
  },
  {
    q: "Does HelpCrunch integrate with other tools?",
    a: "Yes. HelpCrunch connects with CRMs, Slack, Zapier, and ecommerce platforms to sync context and trigger workflows.",
  },
  {
    q: "Is HelpCrunch GDPR-compliant?",
    a: "Yes. HelpCrunch supports GDPR, data encryption, and allows you to manage consent and data retention settings.",
  },
];

function HelpCrunchToolPage() {
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
        "HelpCrunch combines live chat, shared inbox, email campaigns, popups, and a knowledge base so startups and SMBs can support and convert users in one platform. It’s more affordable than enterprise suites while covering core engagement channels.",
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
      icon: <Sparkles className="h-5 w-5 text-indigo-500" />,
      title: "Live chat and in-app messaging",
      body: "Engage visitors and users with proactive chat, targeted messages, and popups tailored to behavior.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-emerald-500" />,
      title: "Shared inbox for email",
      body: "Manage support emails alongside chat with assignments, tags, saved replies, and internal notes.",
    },
    {
      icon: <Video className="h-5 w-5 text-blue-500" />,
      title: "Knowledge base",
      body: "Publish and organize help articles; surface them in chat to deflect tickets and speed resolutions.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Email campaigns and automation",
      body: "Send targeted emails, nurture leads, and automate follow-ups without a separate ESP on Pro tiers.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Chatbots and routing",
      body: "Use bots to pre-qualify leads, collect info, and route conversations while reducing repetitive back-and-forth.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Multi-platform integrations",
      body: "Connect with CRMs, Slack, and ecommerce to sync customer data and trigger workflows automatically.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="HelpCrunch review for startups and support teams: pricing, features, pros & cons, alternatives, and whether HelpCrunch fits your 2025 support stack."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-indigo-200/30 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-teal-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-indigo-500" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-teal-200 blur-3xl" />
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
                  HelpCrunch blends chat, inbox, email, and knowledge base in one platform, giving lean teams the channels they need without enterprise pricing.
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
              {toolName} is a {category.toLowerCase()} platform designed for startups and SMBs. It unifies live chat, shared inbox, email campaigns, and a knowledge base so you can support and market to customers from one tool.
            </p>
            <p className="mt-3 text-slate-700">
              Proactive chat, popups, and email nurture help convert visitors. Automation and bots reduce repetitive work. A clean inbox keeps teams organized without the complexity of enterprise suites.
            </p>
            <p className="mt-3 text-slate-700">HelpCrunch balances affordability with a solid feature set, making it attractive for teams outgrowing basic chat tools.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">HelpCrunch fits teams that want chat + inbox + email in one affordable platform.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Startups needing live chat plus shared inbox without enterprise cost.",
                "Ecommerce brands engaging shoppers with proactive chat and popups.",
                "SaaS teams combining support, onboarding messages, and email nurture.",
                "Support teams wanting knowledge base + chat for deflection.",
                "Agencies managing support for multiple clients with a lean stack.",
                "Product teams gathering feedback via chat while sending targeted follow-ups.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-indigo-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">HelpCrunch focuses on unified channels to improve support and conversion.</p>
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
                  HelpCrunch pricing is per user. Basic covers chat/inbox with core features. Pro adds email campaigns, popups, advanced automation, and more customization. Scale options are available for larger teams with higher limits.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on Pro to access campaigns and automation; drop to Basic if you only need chat/inbox.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Basic</td>
                    <td className="px-4 py-3">Lean teams needing chat + inbox</td>
                    <td className="px-4 py-3">Core chat, inbox, basic automation</td>
                    <td className="px-4 py-3">~$15/user/month (annual)</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Teams needing campaigns</td>
                    <td className="px-4 py-3">Email campaigns, popups, advanced automation, more customization</td>
                    <td className="px-4 py-3">~$25–$39/user/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise/Scale</td>
                    <td className="px-4 py-3">Larger teams</td>
                    <td className="px-4 py-3">Higher limits, dedicated support, custom terms</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Add-ons</td>
                    <td className="px-4 py-3">Teams needing more seats or emails</td>
                    <td className="px-4 py-3">Extra seats, higher email volume</td>
                    <td className="px-4 py-3">Usage-based</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Compare Basic vs Pro based on whether you need email campaigns and advanced automation. Email volume and seat counts will influence total cost as you grow.
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
                  <li>Combines chat, inbox, email, popups, and KB in one tool.</li>
                  <li>Affordable compared to enterprise suites.</li>
                  <li>Proactive messaging and popups improve conversions.</li>
                  <li>Chatbots and automation reduce repetitive questions.</li>
                  <li>Knowledge base and in-chat article suggestions deflect tickets.</li>
                  <li>Integrations with CRM, ecommerce, and collaboration tools.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>No advanced product tours or deep data targeting like Intercom.</li>
                  <li>Email limits and seat counts can raise costs as you scale.</li>
                  <li>Feature depth is lighter than enterprise support suites.</li>
                  <li>Requires configuration to balance messaging vs. support load.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              HelpCrunch blends chat, inbox, email, and KB at a friendly price. If you need deeper automation, enterprise routing, or just lean chat, consider these alternatives.
            </p>
            <p className="mt-2 text-slate-700">All handle support/chat; they differ on automation depth, pricing, and product-led features.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
                  </div>
                  <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">Here’s how {toolName} compares to two similar support/chat platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Tidio</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/compare/helpcrunch-vs-tidio-vs-crisp">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Tidio is chatbot-forward and very affordable. HelpCrunch offers stronger inbox + email campaigns and a knowledge base. Choose Tidio for fast bots on a budget; choose HelpCrunch for combined inbox, KB, and campaigns.
              </p>
              <p className="mt-2 text-slate-900">If you need multi-channel engagement with email, HelpCrunch is the broader pick.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Crisp</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/compare/helpcrunch-vs-tidio-vs-crisp">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Crisp is strong for chat, bots, and multi-channel inbox at a low cost. HelpCrunch layers in email campaigns and popups. Choose Crisp for robust chat capabilities; choose HelpCrunch if you need built-in campaigns + KB with chat.
              </p>
              <p className="mt-2 text-slate-900">Both are affordable alternatives to Intercom; pick based on whether campaigns or deeper chat/bot features matter most.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              For startups and SMBs that need chat, inbox, email campaigns, and a knowledge base without enterprise pricing, HelpCrunch is worth it. It consolidates tools and speeds up support and conversion.
            </p>
            <p className="mt-3 text-slate-700">
              If you need product tours, advanced data targeting, or enterprise security, Intercom or Zendesk may be better. For the lowest cost chatbots, Tidio or Crisp can suffice.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> HelpCrunch is a compelling all-in-one communication platform for lean teams seeking affordability and breadth in one tool.
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
              Choose {toolName} if you want live chat, inbox, email campaigns, and a knowledge base in one affordable platform. It’s ideal for startups, SMBs, and ecommerce teams looking to support and convert users without juggling tools.
            </p>
            <p>
              Consider Intercom for advanced automation and tours, or Crisp/Tidio for chatbot-first approaches. HelpCrunch remains a balanced middle ground with campaigns, chat, and KB together.
            </p>
            <p>HelpCrunch integrates with CRMs and ecommerce tools, keeping customer context visible for faster, more relevant responses.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here: <a className="text-indigo-700 hover:text-indigo-600" href={officialUrl}>Visit {toolName}</a>.
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-indigo-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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

export default HelpCrunchToolPage;
