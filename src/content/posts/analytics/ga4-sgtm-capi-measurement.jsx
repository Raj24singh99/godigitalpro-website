/* @refresh reload */
// src/content/posts/analytics/ga4-sgtm-capi-measurement.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";

/* ========= META ========= */
export const meta = {
  title:
    "Analytics That Scale: GA4 + Server-Side GTM + CAPI for Rock-Solid Measurement",
  seoTitle:
    "GA4 + Server-Side Tagging (sGTM) + Meta CAPI: A Practical Measurement Playbook",
  metaDescription:
    "Set up trustworthy analytics: GA4 event model, server-side GTM, Meta CAPI, Enhanced Conversions, consent mode v2, UTM discipline, offline conversions, LTV mapping, and QA workflows.",
  slug: "ga4-sgtm-capi-measurement",
  date: "2025-11-08",
  updated: "2025-11-08",
  category: "analytics",
  tags: [
    "GA4",
    "server-side tagging",
    "GTM",
    "CAPI",
    "enhanced conversions",
    "consent mode v2",
    "offline conversions",
    "LTV",
    "measurement",
  ],
  cover: "/blogimages/analytics-ga4-sgtm-capi.png",
  readingTime: "15 min read",
  author: {
    name: "Raj Singh",
    url: "https://www.linkedin.com/in/raj24singh99/",
  },
  draft: false,
};

/* ========= TOC ========= */
const TOC = [
  { id: "intro", label: "Introduction: Trust Your Numbers First" },
  {
    id: "ga4-model",
    label: "GA4 Event Model & Governance",
    children: [
      { id: "schema", label: "Event Schema & Naming" },
      { id: "consent", label: "Consent Mode v2 & Privacy" },
    ],
  },
  {
    id: "sgtm",
    label: "Server-Side GTM (sGTM) Architecture",
    children: [
      { id: "containers", label: "Containers, Clients & Routes" },
      { id: "ec", label: "Enhanced Conversions (Google)" },
      { id: "capi", label: "Meta Conversions API (CAPI)" },
    ],
  },
  {
    id: "utm",
    label: "UTM Discipline & Source of Truth",
    children: [{ id: "qa", label: "QA, Debug & Monitoring" }],
  },
  {
    id: "offline",
    label: "Offline Conversions & LTV Feedback",
    children: [{ id: "crm", label: "GCLID/FBCLID → CRM Mapping" }],
  },
  {
    id: "dashboard",
    label: "North-Star Metrics & Reporting",
    children: [{ id: "checks", label: "Daily/Weekly Health Checks" }],
  },
  { id: "faqs", label: "FAQ: Top 6 Analytics Questions" },
  { id: "conclusion", label: "Conclusion & Next Steps" },
];

/* ========= Hooks ========= */
function useActiveH2() {
  const h2Ids = useMemo(() => TOC.map((s) => s.id), []);
  const [active, setActive] = useState(h2Ids[0]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    h2Ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [h2Ids]);

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
        name: "Why server-side GTM?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "It improves data quality and control: better match rates, less ad-blocker loss, first-party cookies, and centralized governance for all pixels.",
        },
      },
      {
        "@type": "Question",
        name: "Do I still need browser tags?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes for some signals (e.g., pageview, consent). Use browser → sGTM as the primary path; keep duplication rules to avoid double-counting.",
        },
      },
      {
        "@type": "Question",
        name: "How do I pass value for Enhanced Conversions/CAPI?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Send normalized currency and value from your checkout/lead form. Hash PII where required, and prefer server-verified order totals.",
        },
      },
      {
        "@type": "Question",
        name: "What is the minimum GA4 event set?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "page_view, view_item, add_to_cart, begin_checkout, purchase for eCom; page_view, generate_lead, form_submit, and qualified lead stages for lead gen.",
        },
      },
      {
        "@type": "Question",
        name: "How do I connect CRM revenue back?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Store GCLID/FBCLID with each lead/order; on outcome, upload conversions via the platform APIs or Google’s Offline Conversions with the ID and timestamp.",
        },
      },
      {
        "@type": "Question",
        name: "What breaks attribution most often?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Missing consent signals, inconsistent UTMs, and lost click IDs. Fix consent mode, enforce UTM schema, and capture click IDs server-side.",
        },
      },
    ],
  };

  return (
    <main className="bg-white text-slate-900">
      <Helmet>
        <title>{meta.seoTitle}</title>
        <meta name="description" content={meta.metaDescription} />
        <link
          rel="canonical"
          href={`https://www.godigitalpro.in/blog/${meta.category}/${meta.slug}`}
        />
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
          GoDigitalPro Blog / Analytics
        </p>
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          {meta.title}
        </h1>
        <p className="mt-4 text-slate-600 max-w-3xl">{meta.metaDescription}</p>
        <div className="mt-3 text-xs text-slate-500">
          {meta.date} · {meta.readingTime} · By{" "}
          <a
            href={meta.author.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {meta.author.name}
          </a>
        </div>
      </section>

      {/* Body + TOC */}
      <section className="relative max-w-7xl mx-auto flex flex-col md:flex-row gap-10 px-6 md:px-10 py-12">
        {/* TOC */}
        <aside className="hidden md:block md:w-1/4 lg:w-1/5">
          <div className="sticky top-24">
            <p className="text-sm font-semibold mb-3 text-slate-700">
              On this page
            </p>
            <ul className="space-y-2 text-[14px]">
              {TOC.map((h2) => {
                const isActive = activeH2 === h2.id;
                return (
                  <li key={h2.id}>
                    <a
                      href={`#${h2.id}`}
                      className={`block transition-colors ${
                        isActive
                          ? "text-amber-600 font-medium"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      {h2.label}
                    </a>
                    {isActive && h2.children?.length ? (
                      <ul className="mt-1 ml-3 border-l pl-3 space-y-1">
                        {h2.children.map((h3) => (
                          <li key={h3.id}>
                            <a
                              href={`#${h3.id}`}
                              className="block text-[13px] text-slate-500 hover:text-slate-800"
                            >
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
          <img
            src={meta.cover}
            alt={meta.title}
            className="rounded-xl w-full mb-8 shadow-sm"
            loading="lazy"
          />

          {/* INTRO */}
          <h2 id="intro" className="scroll-mt-28">
            Introduction: Trust Your Numbers First
          </h2>
          <p>
            Creative and bidding improvements mean little if measurement is
            wrong. This blueprint shows how to standardize GA4 events, move
            pixels to server-side GTM, implement Meta CAPI and Google Enhanced
            Conversions, respect consent laws, and loop CRM revenue back for
            decisions that scale profit—not vanity metrics.
          </p>

          {/* GA4 MODEL */}
          <h2 id="ga4-model" className="scroll-mt-28">
            GA4 Event Model &amp; Governance
          </h2>
          <h3 id="schema" className="scroll-mt-28">
            Event Schema &amp; Naming
          </h3>
          <ul>
            <li>
              Adopt a minimal but complete set:{" "}
              <code>page_view</code>, <code>view_item</code>,{" "}
              <code>add_to_cart</code>, <code>begin_checkout</code>,{" "}
              <code>purchase</code> (eCom) or{" "}
              <code>generate_lead</code>, <code>form_submit</code>, stage
              events (lead gen).
            </li>
            <li>
              Standardize parameters: <code>item_id</code>, <code>item_name</code>,{" "}
              <code>value</code>, <code>currency</code>, <code>coupon</code>,{" "}
              <code>affiliation</code>. Use consistent casing and units.
            </li>
            <li>
              Keep a versioned tracking plan. Any new event requires a spec, a
              PR, and QA steps.
            </li>
          </ul>

          <h3 id="consent" className="scroll-mt-28">
            Consent Mode v2 &amp; Privacy
          </h3>
          <ul>
            <li>
              Render a CMP before non-essential tags; propagate consent signals
              to all tags (ad_storage, analytics_storage, functionality_storage).
            </li>
            <li>
              Use region-specific defaults; store proof of consent and update
              logs.
            </li>
          </ul>

          {/* SGTM */}
          <h2 id="sgtm" className="scroll-mt-28">
            Server-Side GTM (sGTM) Architecture
          </h2>
          <p>
            Move pixel firing from the browser to your server container to
            reduce ad-blocker loss, gain first-party cookies, and centralize
            governance.
          </p>

          <h3 id="containers" className="scroll-mt-28">
            Containers, Clients &amp; Routes
          </h3>
          <ul>
            <li>
              Deploy the sGTM container (e.g., on App Engine/Cloud Run/Edge).
            </li>
            <li>
              Use GA4/HTTP clients; route browser payloads via a custom endpoint
              like <code>/collect</code> on your subdomain.
            </li>
            <li>
              Attach request IDs, IP hashing (when required), and user_agent for
              better dedupe/match.
            </li>
          </ul>

          <h3 id="ec" className="scroll-mt-28">
            Enhanced Conversions (Google)
          </h3>
          <ul>
            <li>
              Hash emails/phone/address with SHA-256 client-side; verify order
              totals server-side before forwarding to Google.
            </li>
            <li>
              Ensure <code>value</code> and <code>currency</code> are always
              present and normalized.
            </li>
          </ul>

          <h3 id="capi" className="scroll-mt-28">
            Meta Conversions API (CAPI)
          </h3>
          <ul>
            <li>
              Use sGTM’s CAPI template or a secure server function; send{" "}
              <code>event_name</code>, <code>event_time</code>, click IDs, and
              user data with proper hashing and consent flags.
            </li>
            <li>
              Deduplicate with <code>event_id</code> shared between browser and
              server events.
            </li>
          </ul>

          {/* UTM */}
          <h2 id="utm" className="scroll-mt-28">
            UTM Discipline &amp; Source of Truth
          </h2>
          <ul>
            <li>
              Enforce a schema:{" "}
              <code>utm_source</code>, <code>utm_medium</code>,{" "}
              <code>utm_campaign</code>, <code>utm_term</code>,{" "}
              <code>utm_content</code>.
            </li>
            <li>
              Encode hook/angle/offer in <code>utm_content</code> for creative
              read-outs.
            </li>
          </ul>

          <h3 id="qa" className="scroll-mt-28">
            QA, Debug &amp; Monitoring
          </h3>
          <ul>
            <li>
              Use GA4 DebugView, sGTM preview, and network logs; set alerts on
              0 events, sudden spikes, and missing parameters.
            </li>
            <li>
              Track match rate, consent rate, CAPI error rate, and EC success
              rate weekly.
            </li>
          </ul>

          {/* OFFLINE */}
          <h2 id="offline" className="scroll-mt-28">
            Offline Conversions &amp; LTV Feedback
          </h2>
          <p>
            Close the loop so bidding learns from business outcomes—not just
            clicks or raw leads.
          </p>
          <h3 id="crm" className="scroll-mt-28">
            GCLID/FBCLID → CRM Mapping
          </h3>
          <ul>
            <li>
              Store click IDs with the lead/order. On outcome (MQL/SQL/Won or
              Fulfilled), upload using Google Offline Conversions or Meta CAPI
              using the same ID and timestamp.
            </li>
            <li>
              Maintain LTV cohorts by month/campaign for ROAS/CAC truth.
            </li>
          </ul>

          {/* DASHBOARD */}
          <h2 id="dashboard" className="scroll-mt-28">
            North-Star Metrics &amp; Reporting
          </h2>
          <ul>
            <li>Match rate (EC/CAPI), consent rate, and attributed revenue.</li>
            <li>
              Lead pipelines: MQL→SQL→Won conversion and payback period by
              campaign.
            </li>
            <li>Creative performance tagged via <code>utm_content</code>.</li>
          </ul>

          <h3 id="checks" className="scroll-mt-28">
            Daily/Weekly Health Checks
          </h3>
          <ul>
            <li>Data freshness and event volume anomalies.</li>
            <li>Top pages’ CWV and tag latency.</li>
            <li>Upload jobs success; error budget for tracking.</li>
          </ul>

          {/* FAQ */}
          <h2 id="faqs" className="scroll-mt-28">
            FAQ: Top 6 Analytics Questions
          </h2>
          <ol className="list-decimal pl-5 space-y-3">
            <li>
              <strong>Consent without drop-offs?</strong> Use geo-specific
              defaults, simple UI, and remember preferences.
            </li>
            <li>
              <strong>Which ID for dedupe?</strong> A stable{" "}
              <code>event_id</code> shared by web and server events.
            </li>
            <li>
              <strong>Attribution model?</strong> Use GA4 data-driven for trend
              views; rely on platform reporting for bidding while validating
              against CRM.
            </li>
            <li>
              <strong>Handling refunds?</strong> Send negative adjustments to
              keep ROAS honest.
            </li>
            <li>
              <strong>Phone/WhatsApp leads?</strong> Use call tracking and
              server events on completed calls or booked appointments.
            </li>
            <li>
              <strong>Data residency?</strong> Keep sGTM in compliant regions
              and minimize PII; hash where required.
            </li>
          </ol>

          {/* CONCLUSION */}
          <h2 id="conclusion" className="scroll-mt-28">
            Conclusion &amp; Next Steps
          </h2>
          <p>
            With GA4 standardized, sGTM centralizing pixels, CAPI/EC improving
            match rates, and CRM feedback closing the loop, your analytics
            becomes actionable and resilient. Lock this foundation before heavy
            creative/bidding tests—and scale with confidence.
          </p>
          <p>
            Need a measurement audit and rollout?{" "}
            <a
              href="https://www.godigitalpro.in/onboarding"
              className="text-amber-600 underline"
            >
              Book a free strategy call
            </a>
            .
          </p>
        </article>
      </section>
    </main>
  );
}
