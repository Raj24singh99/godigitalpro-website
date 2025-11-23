import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown, Video, Link2, Scissors, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Loom";
const slug = "loom";
const category = "Async video messaging";
const shortPitch =
  "Loom lets teams record, edit, and share quick screen and camera videos for updates, walkthroughs, and feedback—reducing meetings and speeding handoffs.";
const pricingSummary =
  "Free plan with limits; paid plans start around $12.50/user/month for HD recordings, longer limits, CTA buttons, transcripts, and team libraries.";
const officialUrl = "https://www.loom.com";
const ratingValue = 4.6;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/loom.com",
  gradient: "from-purple-600 via-indigo-600 to-slate-800",
  glow: "shadow-[0_20px_80px_rgba(124,58,237,0.20)]",
};

const alternatives = [
  { name: "Wistia", slug: "wistia" },
  { name: "Vimeo", slug: "vimeo" },
  { name: "Descript", slug: "descript" },
  { name: "Riverside", slug: "riverside" },
  { name: "Zoom", slug: "zoom" },
];

const faqs = [
  {
    q: "What is Loom best for?",
    a: "Loom is great for async updates, design reviews, bug walkthroughs, onboarding, and quick customer videos. It cuts meetings and speeds feedback loops.",
  },
  {
    q: "Does Loom have editing tools?",
    a: "Yes. You can trim, remove filler words, combine clips, add chapters, and insert CTAs on paid plans. AI transcripts help with quick edits.",
  },
  {
    q: "How secure is Loom?",
    a: "Loom supports SSO, workspace permissions, password-protected/share links, and visibility controls. Enterprise plans add SCIM and advanced admin features.",
  },
  {
    q: "Can I embed Loom videos?",
    a: "Yes. You can embed videos in docs, wikis, and CMS tools. Loom links unfurl nicely in Slack, Notion, and other collaboration tools.",
  },
  {
    q: "Does Loom offer transcriptions?",
    a: "Paid plans include transcripts and captions, plus search across transcripts in team libraries for faster discovery.",
  },
  {
    q: "Is there a time limit on recordings?",
    a: "Free plans have shorter limits; paid plans unlock longer or unlimited recordings with HD quality and team libraries.",
  },
  {
    q: "Can Loom replace meetings?",
    a: "Often. Teams use Loom to replace status meetings, walkthroughs, and code/design handoffs with async videos that can be watched on demand.",
  },
  {
    q: "Does Loom work on mobile?",
    a: "Loom has desktop, browser, and mobile apps so you can record and view on the go. Most users record on desktop for screen capture.",
  },
];

function LoomToolPage() {
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
        "Loom makes it easy to record and share async videos for updates and reviews. HD recording, transcripts, and simple editing help teams ship feedback without meetings.",
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
      icon: <Video className="h-5 w-5 text-purple-500" />,
      title: "Fast recording anywhere",
      body: "Record screen, camera, or both from desktop, browser, or mobile. Share links instantly without heavy video pipelines.",
    },
    {
      icon: <Scissors className="h-5 w-5 text-indigo-500" />,
      title: "Lightweight editing",
      body: "Trim, stitch, remove filler words, add chapters, and place CTAs so viewers know next steps.",
    },
    {
      icon: <Link2 className="h-5 w-5 text-emerald-600" />,
      title: "Easy sharing & embeds",
      body: "Links unfurl with previews in Slack, Notion, Jira, and email. Embed in docs and wikis without extra hosting steps.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-amber-500" />,
      title: "Transcripts & search",
      body: "Paid plans include transcripts and captions so teams can search and skim content quickly.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-500" />,
      title: "Security & admin",
      body: "Set visibility, passwords, expiring links, and SSO. Enterprise adds SCIM and advanced controls for larger orgs.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-rose-500" />,
      title: "Viewer insights",
      body: "See who watched, how long, and where drop-off happens. Use reactions and comments to collect feedback asynchronously.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Honest Loom review covering pricing, features, pros & cons, alternatives, and how it compares to Wistia, Vimeo, Descript, and Riverside."
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
                  Loom removes friction from async communication with quick recording, clean editing, and easy sharing so teams can skip meetings and move work forward faster.
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
              Loom is an {category.toLowerCase()} tool that makes it simple to capture and send videos for updates, feedback, onboarding, and training. It aims to cut synchronous meetings and give teams a searchable video
              library for common workflows.
            </p>
            <p className="mt-3 text-slate-700">
              The product focuses on speed: start recording quickly, trim and share instantly, and let viewers react or comment so conversations stay async.
            </p>
            <p className="mt-3 text-slate-700">
              Unlike heavier video hosting platforms, Loom is optimized for everyday communication rather than polished marketing distribution.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Loom is made for teams that want fewer meetings and faster feedback.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Product and design teams recording reviews and walkthroughs.",
                "Engineering teams sharing bug repros and code walkthroughs.",
                "Customer success onboarding new users with tailored videos.",
                "Sales reps sending follow-ups and personalized walkthroughs.",
                "Marketing teams aligning async on assets and campaigns.",
                "Leaders sharing updates without scheduling all-hands.",
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
            <p className="mt-3 text-slate-700">Loom centers on speed, ease, and discoverability for async video.</p>
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
                  Loom has a free plan with limits on recording length and library size. Business plans start around $12.50/user/month and unlock longer recordings, transcripts, CTAs, and team libraries. Enterprise adds SSO,
                  SCIM, and advanced admin controls.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start free; upgrade to Business for transcripts, editing, and longer limits; pick Enterprise if you need SSO/SCIM and admin controls.</p>
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
                    <td className="px-4 py-3">Testing and occasional recordings</td>
                    <td className="px-4 py-3">Shorter recordings, limited videos</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business</td>
                    <td className="px-4 py-3">Teams using async video daily</td>
                    <td className="px-4 py-3">Longer/HD recordings, transcripts, CTA buttons</td>
                    <td className="px-4 py-3">~$12.50/user/month (annual)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Large orgs with compliance needs</td>
                    <td className="px-4 py-3">SSO, SCIM, advanced admin & security</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Seat-based pricing scales with usage. If you store many long recordings, monitor limits and retention. For marketing-grade hosting or lead capture, compare Wistia/Vimeo; for editing depth, see Descript.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-purple-50 p-5 shadow-sm ring-1 ring-purple-100">
                <div className="flex items-center gap-2 text-purple-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Very fast recording and sharing for async comms.</li>
                  <li>Light editing, filler word removal, and transcripts on paid plans.</li>
                  <li>Embeds and link unfurls across collaboration tools.</li>
                  <li>Viewer insights, reactions, and comments for feedback.</li>
                  <li>Security controls with SSO/SCIM on Enterprise.</li>
                  <li>Reduces meetings for updates, reviews, and onboarding.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Free plan limits recording length and storage.</li>
                  <li>Not a full marketing hosting solution (limited CTAs/analytics vs Wistia).</li>
                  <li>Editing is lighter than Descript or full video editors.</li>
                  <li>Storage management matters for heavy creators.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              If you need deeper editing, podcast-grade recording, or marketing CTAs, consider these alternatives. Each links to a full review page.
            </p>
            <p className="mt-2 text-slate-700">They differ on production quality, collaboration, and analytics depth.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Video tool in a similar space.</p>
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
            <p className="text-slate-700">Here’s how Loom compares with popular video platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Wistia vs Vimeo</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/wistia-vs-vimeo-vs-loom">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Wistia and Vimeo focus on marketing hosting, CTAs, and analytics. Loom prioritizes speed and async collaboration. Use Loom for internal/explainer videos; pick Wistia/Vimeo for campaigns and lead capture.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Riverside vs Descript</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/riverside-vs-loom-vs-descript">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Riverside excels at high-quality recording for podcasts and webinars. Descript is stronger for editing and overdubs. Loom is fastest for quick captures and async sharing.
              </p>
              <p className="mt-2 text-slate-700">
                Choose Loom for everyday updates and walkthroughs; choose Descript for editing-heavy work; choose Riverside for studio-quality interviews and webinars.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              Loom is worth it if you want to cut meetings and share clear context fast. It shines for async updates, feedback, and onboarding where speed beats polish.
            </p>
            <p className="mt-3 text-slate-700">
              If you need advanced editing or marketing hosting/lead capture, pair Loom with Descript or Wistia. For studio-quality recording, Riverside wins. For everyday team communication, Loom is tough to beat.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Loom is a top pick for fast, async video messaging that keeps teams aligned without more meetings.
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
              Choose Loom if you want to record, edit lightly, and share videos instantly to reduce meetings and speed feedback. It’s great for product, design, engineering, sales, and success teams.
            </p>
            <p>
              Consider Wistia/Vimeo for marketing hosting and CTAs, Descript for deeper editing, or Riverside when production quality is the priority. Many teams pair Loom with those tools for different jobs.
            </p>
            <p>Loom fits easily alongside collaboration tools and knowledge bases, making async communication clearer and faster.</p>
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

export default LoomToolPage;
