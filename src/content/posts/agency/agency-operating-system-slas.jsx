/* @refresh reload */
// src/content/posts/agency/agency-operating-system-slas.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";

/* ========= META ========= */
export const meta = {
  title: "Agency OS: How to Hire, Run, and Scale a 360° Marketing Agency (SLAs Inside)",
  seoTitle: "Hire & Run a 360° Marketing Agency: Operating System, SLAs, Scorecards",
  metaDescription:
    "A practical operating system to hire, onboard, and manage a 360° marketing agency—SLAs, scopes, pricing models, scorecards, cadences, and escalation paths that protect outcomes and speed.",
  slug: "agency-operating-system-slas",
  date: "2025-11-08",
  updated: "2025-11-08",
  category: "agency",
  tags: ["agency os", "sow", "sla", "vendor management", "scorecards", "cadence"],
  cover: "/blogimages/agency-operating-system.png",
  readingTime: "12 min read",
  author: { name: "Raj Singh", url: "https://www.linkedin.com/in/raj24singh99/" },
  draft: false,
};

/* ========= TOC ========= */
const TOC = [
  { id: "intro", label: "Introduction: Outcomes > Hours" },
  {
    id: "choose",
    label: "Choosing the Right Agency",
    children: [
      { id: "models", label: "Pricing Models & Traps" },
      { id: "signals", label: "Proof & Red Flags" },
    ],
  },
  {
    id: "sow",
    label: "Scope of Work (SOW) That Prevents Scope Creep",
    children: [
      { id: "deliverables", label: "Deliverables & Exclusions" },
      { id: "assumptions", label: "Assumptions & Dependencies" },
    ],
  },
  {
    id: "sla",
    label: "SLAs, Scorecards & Governance",
    children: [
      { id: "slas", label: "Response, Turnaround, QA" },
      { id: "scorecard", label: "North-Star Scorecard" },
      { id: "cadence", label: "Weekly/Monthly Cadence" },
    ],
  },
  { id: "handoff", label: "Onboarding & Asset Handoff" },
  { id: "escalation", label: "Change Requests & Escalations" },
  { id: "renewal", label: "Renewal, Performance Fees & Exit" },
  { id: "faqs", label: "FAQ: Agency Ops" },
  { id: "conclusion", label: "Conclusion & Next Steps" },
];

/* ========= Hooks ========= */
function useActiveH2() {
  const ids = useMemo(() => TOC.map((s) => s.id), []);
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
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
        name: "What’s the best agency pricing model?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Hybrid works best: a base retainer for guaranteed capacity + performance fees tied to clear, auditable outcomes. Avoid pure hours-only billing for growth work.",
        },
      },
      {
        "@type": "Question",
        name: "How do I stop scope creep?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Use a crystal-clear SOW with numbered deliverables, explicit exclusions, and a Change Request process with impact on timeline and fees.",
        },
      },
      {
        "@type": "Question",
        name: "What should be in an SLA?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Response & acknowledgement times, turnaround windows by task severity, QA standards, uptime for data dashboards, and escalation paths.",
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
          GoDigitalPro Blog / Agency
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

          <h2 id="intro" className="scroll-mt-28">Introduction: Outcomes &gt; Hours</h2>
          <p>
            Great agency partnerships are operating systems, not ticket queues. Your OS should make outcomes predictable:
            clean scopes, measurable SLAs, weekly rituals, and a scorecard that clarifies what “good” looks like.
          </p>

          <h2 id="choose" className="scroll-mt-28">Choosing the Right Agency</h2>
          <h3 id="models" className="scroll-mt-28">Pricing Models &amp; Traps</h3>
          <ul>
            <li><strong>Retainer + Performance:</strong> base for guaranteed capacity + upside tied to profit or qualified pipeline.</li>
            <li><strong>Project-based:</strong> fixed scope, milestone billing; ideal for site builds and audits.</li>
            <li><strong>Traps:</strong> “unlimited requests”, pure hours, or opaque margin on media without performance guardrails.</li>
          </ul>
          <h3 id="signals" className="scroll-mt-28">Proof &amp; Red Flags</h3>
          <ul>
            <li>Named owner for each channel, clear resumes, and case studies with baselines → interventions → lift.</li>
            <li>Red flags: no access to ad accounts/GA4, vanity KPIs, heavy discounts without scope clarity.</li>
          </ul>

          <h2 id="sow" className="scroll-mt-28">Scope of Work (SOW) That Prevents Scope Creep</h2>
          <h3 id="deliverables" className="scroll-mt-28">Deliverables &amp; Exclusions</h3>
          <ul>
            <li>Numbered deliverables (D1…D12) with acceptance criteria (AC1…ACn) and artifacts.</li>
            <li>Explicit <em>exclusions</em> (e.g., video shoots, influencer fees) + rate card for add-ons.</li>
          </ul>
          <h3 id="assumptions" className="scroll-mt-28">Assumptions &amp; Dependencies</h3>
          <ul>
            <li>Access prerequisites (GA4, Tag Manager, pixels), brand kits, product feeds, legal timelines.</li>
            <li>Blocked days and blackout windows captured in the timeline.</li>
          </ul>

          <h2 id="sla" className="scroll-mt-28">SLAs, Scorecards &amp; Governance</h2>
          <h3 id="slas" className="scroll-mt-28">Response, Turnaround, QA</h3>
          <ul>
            <li>Acknowledgement: <strong>4 business hours</strong>. Urgent creative fix/pauses: <strong>same day</strong>.</li>
            <li>New ad set/creative: <strong>2–3 days</strong> with QA checklist (tracking, naming, UTMs).</li>
          </ul>
          <h3 id="scorecard" className="scroll-mt-28">North-Star Scorecard</h3>
          <ul>
            <li>Profit CAC/ROAS, LTV:CAC, time-to-first-profit.</li>
            <li>Creative fatigue %, testing velocity, promotion rate.</li>
            <li>Tracking health: match rates, EC/CAPI status.</li>
          </ul>
          <h3 id="cadence" className="scroll-mt-28">Weekly/Monthly Cadence</h3>
          <ul>
            <li><strong>Weekly:</strong> wins, losses, next tests, pacing actions; dashboard live review.</li>
            <li><strong>Monthly:</strong> strategy re-align, budget reallocation, roadmap updates.</li>
          </ul>

          <h2 id="handoff" className="scroll-mt-28">Onboarding &amp; Asset Handoff</h2>
          <p>Run a 7-day onboarding: access, brand guidelines, product priorities, historical learnings, dashboard links.</p>

          <h2 id="escalation" className="scroll-mt-28">Change Requests &amp; Escalations</h2>
          <p>All out-of-scope items flow through CRs with effort estimate, timeline impact, and fee delta. One-page RACI for who decides what.</p>

          <h2 id="renewal" className="scroll-mt-28">Renewal, Performance Fees &amp; Exit</h2>
          <ul>
            <li>Quarterly business review tied to scorecard trends.</li>
            <li>Exit plan: asset repos, ad account ownership, documents, credentials checklist.</li>
          </ul>

          <h2 id="faqs" className="scroll-mt-28">FAQ: Agency Ops</h2>
          <ol className="list-decimal pl-5 space-y-3">
            <li><strong>Who should own ad accounts?</strong> Always the client. Agencies get admin access.</li>
            <li><strong>Creative rights?</strong> Client owns final deliverables after payment.</li>
            <li><strong>How to align incentives?</strong> Performance fees with floors/ceilings and auditable data.</li>
          </ol>

          <h2 id="conclusion" className="scroll-mt-28">Conclusion &amp; Next Steps</h2>
          <p>Adopt an Agency OS: clean SOW, enforceable SLAs, scorecards, and steady cadences. That’s how partnerships produce compounding growth.</p>
          <p>
            Want a ready-to-use SOW/SLA pack?{" "}
            <a href="https://www.godigitalpro.in/onboarding" className="text-amber-600 underline">Book a free strategy call</a>.
          </p>
        </article>
      </section>
    </main>
  );
}
