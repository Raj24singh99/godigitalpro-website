/* @refresh reload */
// src/content/posts/social/90-day-social-reels-paid-blueprint.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";

/* ========= META ========= */
export const meta = {
  title: "Social Growth Blueprint: 90 Days of Reels + UGC + Paid Boost (Organic→Revenue)",
  seoTitle: "90-Day Social Blueprint: Reels System, UGC Engine, Paid Boost & CRM Loop",
  metaDescription:
    "A 90-day blueprint to grow across Instagram & Facebook—hooks library, Reels system, UGC pipeline, community rituals, paid boosts, and CRM capture for revenue.",
  slug: "90-day-social-reels-paid-blueprint",
  date: "2025-11-08",
  updated: "2025-11-08",
  category: "social",
  tags: ["instagram reels", "ugc", "community", "paid social", "content ops"],
  cover: "/blogimages/social-90-day-blueprint.png",
  readingTime: "11 min read",
  author: { name: "Raj Singh", url: "https://www.linkedin.com/in/raj24singh99/" },
  draft: false,
};

/* ========= TOC ========= */
const TOC = [
  { id: "intro", label: "Introduction: Entertaining to Earn Attention" },
  { id: "framework", label: "Framework: HOOK → VALUE → CTA" },
  {
    id: "reels",
    label: "Reels System (Hooks Library)",
    children: [
      { id: "formats", label: "Top Formats" },
      { id: "cadence", label: "Posting Cadence & Naming" },
    ],
  },
  {
    id: "ugc",
    label: "UGC Pipeline & Community",
    children: [
      { id: "sourcing", label: "Sourcing & Rights" },
      { id: "rituals", label: "Community Rituals" },
    ],
  },
  {
    id: "paid",
    label: "Paid Boost & Retargeting",
    children: [
      { id: "boost", label: "Boost Framework" },
      { id: "rtg", label: "Retargeting Ladder" },
    ],
  },
  { id: "crm", label: "Lead Capture & CRM Loop" },
  { id: "metrics", label: "Scorecard & 90-Day Targets" },
  { id: "faqs", label: "FAQ: Social Growth" },
  { id: "conclusion", label: "Conclusion & Next Steps" },
];

/* ========= Hooks ========= */
function useActiveH2() {
  const ids = useMemo(() => TOC.map((s) => s.id), []);
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-35% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids]);
  return active;
}

/* ========= Component ========= */
export default function Post() {
  const activeH2 = useActiveH2();

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How often should we post Reels?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Start with 4–5 Reels/week and 2–3 Stories/day. Maintain quality by re-using formats and hooks from a shared library.",
        },
      },
      {
        "@type": "Question",
        name: "Do we need paid to grow?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Paid isn’t mandatory but accelerates distribution for proven creatives. Boost only posts with strong 3-second view rate and saves.",
        },
      },
      {
        "@type": "Question",
        name: "How do we convert followers into revenue?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Use lead magnets in Link in Bio, DM automation for keywords, and retargeting ladders to push trials, samples, or calls.",
        },
      },
    ],
  };

  return (
    <main className="bg-white text-slate-900">
      <Helmet>
        <title>{meta.seoTitle}</title>
        <meta name="description" content={meta.metaDescription} />
        <link rel="canonical" href={`https://www.godigitalpro.in/blog/${meta.category}/${meta.slug}`} />
        <meta property="og:title" content={meta.seoTitle} />
        <meta property="og:description" content={meta.metaDescription} />
        <meta property="og:image" content={meta.cover} />
        <meta property="og:type" content="article" />
        <meta property="article:author" content={meta.author.name} />
        <meta property="article:section" content={meta.category} />
        <meta property="article:published_time" content={meta.date} />
        <meta property="article:modified_time" content={meta.updated} />
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
      </Helmet>

      {/* Header */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 pt-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-amber-600 mb-2">
          GoDigitalPro Blog / Social
        </p>
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">{meta.title}</h1>
        <p className="mt-4 text-slate-600 max-w-3xl">{meta.metaDescription}</p>
        <div className="mt-3 text-xs text-slate-500">
          {meta.date} · {meta.readingTime} · By{" "}
          <a href={meta.author.url} target="_blank" rel="noopener noreferrer" className="underline">
            {meta.author.name}
          </a>
        </div>
      </section>

      {/* Body + TOC */}
      <section className="relative max-w-7xl mx-auto flex flex-col md:flex-row gap-10 px-6 md:px-10 py-12">
        {/* TOC */}
        <aside className="hidden md:block md:w-1/4 lg:w-1/5">
          <div className="sticky top-24">
            <p className="text-sm font-semibold mb-3 text-slate-700">On this page</p>
            <ul className="space-y-2 text-[14px]">
              {TOC.map((h2) => {
                const isActive = activeH2 === h2.id;
                return (
                  <li key={h2.id}>
                    <a
                      href={`#${h2.id}`}
                      className={`block transition-colors ${isActive ? "text-amber-600 font-medium" : "text-slate-600 hover:text-slate-900"}`}
                    >
                      {h2.label}
                    </a>
                    {isActive && h2.children?.length ? (
                      <ul className="mt-1 ml-3 border-l pl-3 space-y-1">
                        {h2.children.map((h3) => (
                          <li key={h3.id}>
                            <a href={`#${h3.id}`} className="block text-[13px] text-slate-500 hover:text-slate-800">
                              {h3.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        {/* Article */}
        <article className="blog-article md:w-3/4 lg:w-4/5">
          <img src={meta.cover} alt={meta.title} className="rounded-xl w-full mb-8 shadow-sm" loading="lazy" />

          <h2 id="intro" className="scroll-mt-28">Introduction: Entertaining to Earn Attention</h2>
          <p>Social works when it entertains first, educates second, and sells last. This blueprint turns creators into a growth engine.</p>

          <h2 id="framework" className="scroll-mt-28">Framework: HOOK → VALUE → CTA</h2>
          <ul>
            <li><strong>Hook:</strong> first 1–2 seconds: pattern break, bold claim, or curiosity gap.</li>
            <li><strong>Value:</strong> 1–3 crisp points (demo, tip, reaction).</li>
            <li><strong>CTA:</strong> save/share/comment/DM keyword or click Link in Bio.</li>
          </ul>

          <h2 id="reels" className="scroll-mt-28">Reels System (Hooks Library)</h2>
          <h3 id="formats" className="scroll-mt-28">Top Formats</h3>
          <ul>
            <li>“3 mistakes” or “Do this instead” with quick overlays.</li>
            <li>Duet/React to trending clip with brand POV.</li>
            <li>Micro-demo with on-screen steps + captions.</li>
          </ul>
          <h3 id="cadence" className="scroll-mt-28">Posting Cadence &amp; Naming</h3>
          <ul>
            <li>4–5 Reels/week, 2–3 Stories/day; name assets like <code>R_[Hook]_[Angle]_v01</code>.</li>
            <li>Keep a Notion library of hooks, angles, sound references.</li>
          </ul>

          <h2 id="ugc" className="scroll-mt-28">UGC Pipeline &amp; Community</h2>
          <h3 id="sourcing" className="scroll-mt-28">Sourcing &amp; Rights</h3>
          <ul>
            <li>Ambassador form + seeding program; secure usage rights in writing.</li>
            <li>Ask for raw vertical footage; provide shot lists & examples.</li>
          </ul>
          <h3 id="rituals" className="scroll-mt-28">Community Rituals</h3>
          <ul>
            <li>Weekly live/Q&A; monthly challenge; reply to DMs with short videos.</li>
            <li>Pin comment templates to spark discussion.</li>
          </ul>

          <h2 id="paid" className="scroll-mt-28">Paid Boost &amp; Retargeting</h2>
          <h3 id="boost" className="scroll-mt-28">Boost Framework</h3>
          <ul>
            <li>Boost only posts with high 3-sec view rate, saves, and watches &gt;40%.</li>
            <li>Stack audiences: engaged, site visitors, LALs; small daily budgets first.</li>
          </ul>
          <h3 id="rtg" className="scroll-mt-28">Retargeting Ladder</h3>
          <ul>
            <li>Viewed 50%+ → show product demo; engaged twice → offer/lead magnet.</li>
          </ul>

          <h2 id="crm" className="scroll-mt-28">Lead Capture &amp; CRM Loop</h2>
          <p>DM keyword automation, Link-in-Bio to quiz/lead magnet, and email/SMS welcome flows turn attention into revenue.</p>

          <h2 id="metrics" className="scroll-mt-28">Scorecard &amp; 90-Day Targets</h2>
          <ul>
            <li>Content: posting consistency, saves/share ratio, 3-second view rate.</li>
            <li>Growth: follower velocity, engaged reach, profile click-through.</li>
            <li>Revenue: lead adds, trials, assisted conversions.</li>
          </ul>

          <h2 id="faqs" className="scroll-mt-28">FAQ: Social Growth</h2>
          <ol className="list-decimal pl-5 space-y-3">
            <li><strong>Length?</strong> 6–20s is the sweet spot for Reels.</li>
            <li><strong>Captions?</strong> Yes—30–60 word mini-scripts help retention.</li>
            <li><strong>Music?</strong> Use trending sounds where brand-safe.</li>
          </ol>

          <h2 id="conclusion" className="scroll-mt-28">Conclusion &amp; Next Steps</h2>
          <p>Run the 90-day loop: hooks library → consistent Reels → UGC pipeline → paid boosts → CRM loop. Repeat and compound.</p>
          <p>
            Want a hooks library tailored to your niche?{" "}
            <a href="https://www.godigitalpro.in/onboarding" className="text-amber-600 underline">Book a free strategy call</a>.
          </p>
        </article>
      </section>
    </main>
  );
}
