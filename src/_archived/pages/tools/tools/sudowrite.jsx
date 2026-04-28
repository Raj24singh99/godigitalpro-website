import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Sudowrite";
const slug = "sudowrite";
const category = "AI Writing & Creativity";
const shortPitch =
  "Sudowrite is an AI writing assistant for fiction and creative writing, offering brainstorming, plot help, rewrites, and descriptive expansions for authors.";
const pricingSummary =
  "Subscription plans with credit/word limits. Higher tiers add more generation capacity, collaboration, and advanced features; costs scale with monthly usage.";
const officialUrl = "https://www.sudowrite.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/sudowrite.com",
  gradient: "from-emerald-500 via-teal-500 to-blue-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.24)]",
};

const alternatives = [
  { name: "Jasper AI", slug: "jasper-ai" },
  { name: "Claude", slug: "claude" },
  { name: "ChatGPT", slug: "chatgpt" },
  { name: "NovelAI", slug: "novel-ai" },
  { name: "Writesonic", slug: "writesonic" },
];

const faqs = [
  {
    q: "What is Sudowrite?",
    a: "Sudowrite is an AI writing tool focused on fiction and creative writing. It helps with brainstorming, plot/character ideas, rewrites, and descriptive expansions.",
  },
  {
    q: "Who is it for?",
    a: "Authors, screenwriters, and creative writers who want AI assistance for ideas, overcoming writer’s block, and drafting passages.",
  },
  {
    q: "How is pricing structured?",
    a: "Subscription plans with monthly generation/word limits. Higher tiers include more capacity and features.",
  },
  {
    q: "Does it replace human editing?",
    a: "No. It accelerates drafting and ideas, but writers must edit for style, coherence, and originality.",
  },
  {
    q: "Is it good for long-form?",
    a: "It can help with chapters/scenes and expansions; you still need to manage continuity and consistency across drafts.",
  },
  {
    q: "Does it handle genres?",
    a: "Yes. You can guide tone/genre; results vary—prompt and edit for voice and pacing.",
  },
  {
    q: "What about originality?",
    a: "Outputs are AI-generated; always ensure originality, avoid plagiarism, and align with your own voice.",
  },
  {
    q: "Can I collaborate?",
    a: "Higher tiers may include collaboration options; sharing/exporting drafts is supported.",
  },
];

function SudowriteToolPage() {
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
        "Sudowrite is an AI companion for creative writing. It’s useful for brainstorming, expanding scenes, and rewriting, but human editing is essential for voice and coherence.",
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
      title: "Brainstorming & ideas",
      body: "Generate plot hooks, character concepts, and scene ideas to break writer’s block.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Describe & expand",
      body: "Expand brief lines into richer descriptions, dialogue, and sensory details.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Rewrite & edit",
      body: "Rewrite paragraphs for tone, pacing, or concision while keeping your direction.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Voice guidance",
      body: "Guide style/genre; final voice control requires human edits and consistency checks.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Long-form support",
      body: "Work on scenes/chapters; manage continuity manually across drafts.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Exports & collaboration",
      body: "Export drafts; higher tiers may allow collaboration or sharing with beta readers.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Sudowrite review: pricing, features, pros & cons, and alternatives so you can decide if it fits your creative writing workflow."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-sky-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-emerald-600" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-emerald-100 blur-3xl" />
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
                  {toolName} helps generate ideas and passages—keep humans in the loop for voice, continuity, and originality.
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
              {toolName} is an AI writing assistant focused on creative work. It generates ideas, expands scenes, rewrites paragraphs, and offers descriptive details to help writers move faster.
            </p>
            <p className="mt-3 text-slate-700">
              It’s not a replacement for authorship; treat it as a collaborator. You must edit for style, continuity, and originality, especially for long-form projects.
            </p>
            <p className="mt-3 text-slate-700">
              Use alongside your writing tools and version control to keep drafts organized and to compare AI suggestions with your revisions.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for fiction and creative writers who want AI to speed up brainstorming and drafting.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Fiction authors and novelists looking for scene expansions and ideas.",
                "Screenwriters brainstorming plot points or dialogue variants.",
                "Content writers adding descriptive flair or rewrites to drafts.",
                "Writers facing blocks who want prompts and alternative phrasing.",
                "Teams collaborating on long-form drafts needing quick variations.",
                "Creators testing AI-generated ideas before manual refinement.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
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
              {toolName} centers on creative drafting aids: ideas, descriptions, rewrites, and long-form support.
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
                  {toolName} uses subscription plans with generation/word limits. Higher tiers increase capacity and collaboration. Track usage—costs rise with heavy drafting and long-form work.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on a lower plan to test voice fit; upgrade once you rely on it for chapters/scenes and need more credits.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter</td>
                    <td className="px-4 py-3">Testing/light drafting</td>
                    <td className="px-4 py-3">Core features, lower word limits</td>
                    <td className="px-4 py-3">Evaluate quality and tone fit</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Standard</td>
                    <td className="px-4 py-3">Active writers</td>
                    <td className="px-4 py-3">More credits, long-form support</td>
                    <td className="px-4 py-3">Common for regular drafting</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro/Team</td>
                    <td className="px-4 py-3">Heavy or collaborative use</td>
                    <td className="px-4 py-3">Highest limits, collaboration options</td>
                    <td className="px-4 py-3">Use if drafting volume is high</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Plan for editing time; AI text needs polishing. Avoid over-relying on AI for originality; maintain backups and version control.
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
                  <li>Strong for brainstorming and descriptive expansions.</li>
                  <li>Helps overcome writer’s block with ideas and rewrites.</li>
                  <li>Supports long-form scenes/chapters with guidance.</li>
                  <li>Multiple tiers to match drafting volume.</li>
                  <li>Creative-focused compared to general AI chat tools.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Still needs heavy human editing for voice and continuity.</li>
                  <li>Word limits can be constraining; costs rise with usage.</li>
                  <li>Risk of derivative or off-tone outputs; requires guidance.</li>
                  <li>Not a replacement for plot consistency and worldbuilding work.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other AI writing tools if you need broader workflows or higher-level reasoning.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} compares to other writing assistants.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Jasper</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/jasper-ai">
                  View Jasper AI
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Jasper targets marketing copy and brand voice; {toolName} focuses on creative writing. Use Jasper for marketing teams, {toolName} for fiction and narrative work.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Claude</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/claude">
                  View Claude
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Claude can handle long contexts and reasoning; {toolName} has creative-focused UX. Choose Claude for broad tasks and long-context reasoning, {toolName} for fiction-specific workflows.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you’re a writer who wants AI help with ideas and drafting and you’re ready to edit for voice, originality, and coherence.
            </p>
            <p className="mt-3 text-slate-700">
              Test fit on a lower tier, monitor word limits, and keep human oversight. Use backups/versioning to compare AI output vs. your revisions.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A creative drafting ally—best when paired with disciplined editing and clear story direction.
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
              Choose {toolName} if you want an AI collaborator for fiction/creative writing and will invest in editing to keep your voice and originality.
            </p>
            <p>
              Consider Jasper for marketing copy or Claude for broader reasoning and long context. {toolName} excels when you need creative prompts, expansions, and rewrites for stories.
            </p>
            <p>{toolName} speeds up creative drafting—keep human control to ensure quality and consistency.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-emerald-700 hover:text-emerald-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-emerald-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default SudowriteToolPage;
