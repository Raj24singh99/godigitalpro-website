/* @refresh reload */
// src/content/posts/webdev/nextjs-cwv-security-hardening.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";

/* ========= META ========= */
export const meta = {
  title:
    "Next.js at Scale: Core Web Vitals, Security & Reliability Hardening (Production Playbook)",
  seoTitle:
    "Next.js CWV & Security Hardening: A Production Playbook for Speed, Stability & Safety",
  metaDescription:
    "Ship a fast, resilient, and secure Next.js app: CWV (LCP, INP, CLS), image/fonts strategy, caching & ISR, headers & CSP, auth/session hygiene, rate limiting, observability, and incident playbooks.",
  slug: "nextjs-cwv-security-hardening",
  date: "2025-11-08",
  updated: "2025-11-08",
  category: "webdev",
  tags: [
    "next.js",
    "core web vitals",
    "performance",
    "security headers",
    "csp",
    "isr",
    "edge caching",
    "observability",
    "rate limiting",
  ],
  cover: "/blogimages/webdev-nextjs-cwv-security.png",
  readingTime: "14 min read",
  author: {
    name: "Raj Singh",
    url: "https://www.linkedin.com/in/raj24singh99/",
  },
  draft: false,
};

/* ========= TOC (H2 with optional H3 children) ========= */
const TOC = [
  { id: "intro", label: "Introduction: Make Next.js Truly Production-Ready" },
  {
    id: "cwv",
    label: "Core Web Vitals (LCP, INP, CLS)",
    children: [
      { id: "images", label: "Images, Fonts & Third-Parties" },
      { id: "bundle", label: "Bundle, Code-Splitting & RUM" },
    ],
  },
  {
    id: "caching",
    label: "Caching, ISR & Edge Strategy",
    children: [
      { id: "isr", label: "ISR/SSG/SSR: Picking the Right Mode" },
      { id: "headers", label: "Long-TTL Static Assets & Revalidation" },
    ],
  },
  {
    id: "security",
    label: "Security Hardening Checklist",
    children: [
      { id: "csp", label: "Strict Content Security Policy (CSP)" },
      { id: "auth", label: "Auth, Cookies & Session Hygiene" },
      { id: "rl", label: "Rate Limiting & Abuse Controls" },
    ],
  },
  {
    id: "reliability",
    label: "Observability & Reliability",
    children: [
      { id: "logs", label: "Logs, Traces, Metrics" },
      { id: "incidents", label: "Error Budgets & Incident Playbook" },
    ],
  },
  { id: "faqs", label: "FAQ: Top 6 Next.js Ops Questions" },
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
        name: "What’s the fastest path to better LCP in Next.js?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Preload the hero image and critical fonts, serve responsive images via next/image, cache HTML at the edge when possible, and keep server TTFB low with ISR/SSG.",
        },
      },
      {
        "@type": "Question",
        name: "Do I really need a strict CSP?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. A nonce/sha-based CSP blocks XSS and mitigates supply-chain risk. Start in report-only, fix violations, then enforce.",
        },
      },
      {
        "@type": "Question",
        name: "How should I choose between SSG/SSR/ISR?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Prefer SSG/ISR for most pages to push HTML to the edge. Use SSR only where per-request personalization is mandatory.",
        },
      },
      {
        "@type": "Question",
        name: "What’s the minimum set of security headers?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "CSP, Strict-Transport-Security, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, Cross-Origin-Opener-Policy.",
        },
      },
      {
        "@type": "Question",
        name: "How do I prevent API abuse?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Token bucket rate limiting at the edge, input validation, authz checks, idempotency keys for writes, and per-IP/user quotas.",
        },
      },
      {
        "@type": "Question",
        name: "What observability do I need on day 1?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Structured JSON logs, error tracking with source maps, RUM for CWV, uptime checks, and OpenTelemetry traces for slow endpoints.",
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
          GoDigitalPro Blog / Web Dev
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
            Introduction: Make Next.js Truly Production-Ready
          </h2>
          <p>
            Next.js gives you the right primitives, but production success needs
            deliberate choices: fast HTML at the edge, bullet-proof security
            headers, disciplined caching, and robust observability. This
            playbook prioritizes changes that move Core Web Vitals, reduce
            incidents, and harden your app against common attacks.
          </p>

          {/* CWV */}
          <h2 id="cwv" className="scroll-mt-28">
            Core Web Vitals (LCP, INP, CLS)
          </h2>
          <ul>
            <li>
              <strong>LCP:</strong> Preload the hero image and the critical web
              font; serve responsive images with <code>next/image</code> and a
              CDN. Avoid server waterfalls by fetching above-the-fold data
              early.
            </li>
            <li>
              <strong>INP:</strong> Keep main-thread tasks small; defer
              non-critical hydration; move analytics and 3P scripts to
              <code>lazyOnload</code>.
            </li>
            <li>
              <strong>CLS:</strong> Reserve dimensions for media/ads; keep
              sticky headers at fixed heights; use <code>font-display: swap</code>.
            </li>
          </ul>

          <h3 id="images" className="scroll-mt-28">
            Images, Fonts &amp; Third-Parties
          </h3>
          <ul>
            <li>
              Use <code>&lt;Image priority&gt;</code> for hero; preload
              <code>as=image</code>.
            </li>
            <li>
              Self-host fonts; subset and preload only what’s used
              above-the-fold.
            </li>
            <li>Audit tags in Tag Manager; remove or defer non-essentials.</li>
          </ul>

          <h3 id="bundle" className="scroll-mt-28">
            Bundle, Code-Splitting &amp; RUM
          </h3>
          <ul>
            <li>
              Dynamic import heavy components; split routes; avoid shipping
              admin libraries to public pages.
            </li>
            <li>
              Collect Real-User-Monitoring for CWV; don’t optimize solely on
              lab data.
            </li>
          </ul>

          {/* CACHING */}
          <h2 id="caching" className="scroll-mt-28">
            Caching, ISR &amp; Edge Strategy
          </h2>
          <p>
            Push HTML as close to users as possible, and revalidate on your
            terms—not on every request.
          </p>

          <h3 id="isr" className="scroll-mt-28">
            ISR/SSG/SSR: Picking the Right Mode
          </h3>
          <ul>
            <li>
              <strong>SSG/ISR:</strong> default for product/blog/marketing
              pages; revalidate on content changes or with timed windows.
            </li>
            <li>
              <strong>SSR:</strong> only when request-specific personalization
              is essential and can’t be shifted to the client.
            </li>
          </ul>

          <h3 id="headers" className="scroll-mt-28">
            Long-TTL Static Assets &amp; Revalidation
          </h3>
          <ul>
            <li>Cache static assets with immutable long TTLs.</li>
            <li>
              Invalidate HTML via <code>revalidateTag()</code> or webhooks after
              CMS updates.
            </li>
          </ul>

          {/* SECURITY */}
          <h2 id="security" className="scroll-mt-28">
            Security Hardening Checklist
          </h2>
          <ul>
            <li>
              Serve strictly over HTTPS with HSTS; include subdomains and a
              preload directive.
            </li>
            <li>
              Enforce <code>X-Frame-Options: DENY</code>,{" "}
              <code>X-Content-Type-Options: nosniff</code>,{" "}
              <code>Referrer-Policy: strict-origin-when-cross-origin</code>.
            </li>
            <li>
              Adopt <code>Permissions-Policy</code> to restrict camera, geo,
              and autoplay where not needed.
            </li>
          </ul>

          <h3 id="csp" className="scroll-mt-28">
            Strict Content Security Policy (CSP)
          </h3>
          <ul>
            <li>
              Use nonce/sha for inline scripts; avoid <code>'unsafe-inline'</code>.
            </li>
            <li>
              Start in <em>report-only</em>, fix violations, then enforce.
            </li>
          </ul>

          <h3 id="auth" className="scroll-mt-28">
            Auth, Cookies &amp; Session Hygiene
          </h3>
          <ul>
            <li>
              HttpOnly, Secure, SameSite=Lax/Strict; short-lived access tokens,
              rotating refresh tokens.
            </li>
            <li>Validate JWT audience/issuer; pin token algorithms.</li>
          </ul>

          <h3 id="rl" className="scroll-mt-28">
            Rate Limiting &amp; Abuse Controls
          </h3>
          <ul>
            <li>
              Token bucket per IP/user at the edge; stricter for auth and write
              endpoints.
            </li>
            <li>Idempotency keys on POST/PUT; input validation everywhere.</li>
          </ul>

          {/* RELIABILITY */}
          <h2 id="reliability" className="scroll-mt-28">
            Observability &amp; Reliability
          </h2>
          <ul>
            <li>
              Structured JSON logs with request IDs; forward to a central sink.
            </li>
            <li>Error tracking with source maps; slow-query and 5xx alerts.</li>
            <li>OpenTelemetry traces for backend calls and DB spans.</li>
          </ul>

          <h3 id="logs" className="scroll-mt-28">
            Logs, Traces, Metrics
          </h3>
          <ul>
            <li>Correlate frontend RUM with backend traces.</li>
            <li>
              Track cache hit-rate, TTFB, edge revalidation times, and CWV
              percentiles.
            </li>
          </ul>

          <h3 id="incidents" className="scroll-mt-28">
            Error Budgets &amp; Incident Playbook
          </h3>
          <ul>
            <li>
              Define SLOs (e.g., p95 TTFB &lt; 800ms, 99.9% uptime). Track error
              budgets to govern release velocity.
            </li>
            <li>
              Incident steps: detect → page → mitigate (feature flags, traffic
              shed) → root-cause → post-mortem with action items.
            </li>
          </ul>

          {/* FAQ */}
          <h2 id="faqs" className="scroll-mt-28">
            FAQ: Top 6 Next.js Ops Questions
          </h2>
          <ol className="list-decimal pl-5 space-y-3">
            <li>
              <strong>Edge vs Node runtimes?</strong> Prefer Edge for
              read-mostly, low-latency pages; Node for heavy libraries or
              long-lived connections.
            </li>
            <li>
              <strong>Where do I store secrets?</strong> Provider-managed secret
              stores; never in client bundles or public env vars.
            </li>
            <li>
              <strong>How to version CSP?</strong> Keep a hash manifest;
              regenerate on build; alert on violations.
            </li>
            <li>
              <strong>What breaks ISR?</strong> Unstable data dependencies and
              per-request personalization. Move variability to the client or
              APIs with cache tags.
            </li>
            <li>
              <strong>How to detect regressions?</strong> Lighthouse budgets in
              CI, CWV RUM alerts, and contract tests on headers.
            </li>
            <li>
              <strong>Safest image policy?</strong> Allowlisted domains only,
              strict sizes, and always set width/height to avoid CLS.
            </li>
          </ol>

          {/* CONCLUSION */}
          <h2 id="conclusion" className="scroll-mt-28">
            Conclusion &amp; Next Steps
          </h2>
          <p>
            Production-grade Next.js is a system: fast HTML at the edge,
            disciplined caching, strict security headers, clean auth, and clear
            observability. Land these, and your CWV improves, incidents drop,
            and shipping stays fast.
          </p>
          <p>
            Want a hardening audit and rollout plan?{" "}
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
