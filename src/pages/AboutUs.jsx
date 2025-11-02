import React from "react";
import { Helmet } from "react-helmet-async";

/**
 * AboutUs.jsx — GoDigitalPro
 * Highlights trimmed: no hero chip, no right-side trust pill.
 * Only two mentions: hero paragraph + founder chip (IIT Kanpur • 7+ yrs).
 */

export default function AboutUs() {
  const linkedInUrl = "https://www.linkedin.com/in/raj24singh99/";

  const pageSEO = {
    title: "About Us | GoDigitalPro — Growth Marketing Partner",
    description:
      "GoDigitalPro is a growth-focused marketing agency led by Raj Singh (IIT Kanpur alumnus). 7+ years, 50+ brands. Full-funnel strategy across Paid Ads, SEO, CRO, and Analytics.",
    url: "https://www.godigitalpro.in/about_us/",
    image: "https://www.godigitalpro.in/public/assets/logo.jpg",
  };

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GoDigitalPro",
    url: pageSEO.url,
    logo: pageSEO.image,
    sameAs: [linkedInUrl],
    description: pageSEO.description,
    foundingDate: "2018",
  };

  const founderJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Raj Singh",
    jobTitle: "Founder & CEO",
    sameAs: [linkedInUrl],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Indian Institute of Technology Kanpur",
      url: "https://iitk.ac.in/",
    },
    worksFor: {
      "@type": "Organization",
      name: "GoDigitalPro",
    },
  };

  return (
    <main className="relative isolate bg-white text-gray-900">
      <Helmet>
        <title>{pageSEO.title}</title>
        <meta name="description" content={pageSEO.description} />
        <link rel="canonical" href={pageSEO.url} />
        <meta property="og:title" content={pageSEO.title} />
        <meta property="og:description" content={pageSEO.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageSEO.url} />
        <meta property="og:image" content={pageSEO.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageSEO.title} />
        <meta name="twitter:description" content={pageSEO.description} />
        <meta name="twitter:image" content={pageSEO.image} />
        <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(founderJsonLd)}</script>
      </Helmet>

      {/* Soft gradient top glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(250,255,200,.35), rgba(255,255,255,0))",
        }}
      />

      {/* Hero (chip & right trust pill removed) */}
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-8 sm:pt-24 sm:pb-12">
        <div className="grid gap-8 sm:grid-cols-2 sm:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold tracking-widest text-amber-600 uppercase">
              About GoDigitalPro
            </p>
            <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl">
              Turning{" "}
              <span className="bg-gradient-to-r from-amber-500 to-yellow-400 bg-clip-text text-transparent">
                Ambition
              </span>{" "}
              into
              <br className="hidden sm:block" /> Measurable Growth
            </h1>
            <p className="mt-4 max-w-prose text-base text-gray-700">
              We’re a growth partner for brands ready to scale with clarity, creativity, and confidence.
              Founded by{" "}
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-amber-400 underline-offset-4 hover:text-gray-900"
              >
                Raj Singh
              </a>{" "}
              (<span className="font-medium">IIT Kanpur alumnus</span>), we blend performance and storytelling to drive predictable ROI.
            </p>
          </div>

          {/* removed right-side trust card */}
          <div className="hidden sm:block" />
        </div>
      </section>

      {/* Differentiators */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:py-12">
        <div className="rounded-3xl border border-gray-100 bg-white/70 p-6 shadow-sm sm:p-10">
          <h2 className="text-xl font-bold sm:text-2xl">What Makes Us Different</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Full-Funnel Focus",
                body: "From awareness to retention, we design journeys that convert, not just campaigns that click.",
              },
              {
                title: "Creative × Performance",
                body: "Emotion-led storytelling meets data-led optimization for compounding returns.",
              },
              {
                title: "Agile & Accountable",
                body: "Founder-led reviews, fast iteration cycles, and clear metrics you can trust.",
              },
              {
                title: "ROI Obsession",
                body: "We prioritize revenue impact over vanity metrics. Every rupee works harder.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Performance Marketing",
              body:
                "Google, Meta, YouTube, Programmatic—precision targeting, controlled CAC, and scale with confidence.",
            },
            {
              title: "SEO & Content",
              body:
                "Search intent mapping, topical authority, and content engines that drive compounding organic growth.",
            },
            {
              title: "Web & CRO",
              body:
                "High-velocity landing pages, UX audits, and A/B tests that turn clicks into customers.",
            },
            {
              title: "Social & Brand",
              body:
                "Platform-native storytelling, calendar systems, and community building that create demand.",
            },
            {
              title: "Analytics & Automation",
              body:
                "GA4, Tag Manager, Pixels, offline conversions, and scripts that keep performance transparent.",
            },
            {
              title: "Ad Ops & Governance",
              body:
                "Budgets, naming conventions, checklists, and QA so scale never breaks your systems.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founder (only chip with IIT Kanpur • 7+ yrs) */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:py-12">
        <div className="grid gap-6 sm:grid-cols-[1fr_1.3fr] sm:items-center">
          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold sm:text-2xl">Meet the Founder</h2>
            <p className="mt-3 text-sm leading-6 text-gray-700">
              <span className="font-semibold">Raj Singh</span> — Founder & CEO of GoDigitalPro — is a performance marketing strategist and{" "}
              <span className="font-medium">IIT Kanpur alumnus</span> who has contributed to growth across eCommerce, SaaS, education, and healthcare.
              Over <strong>7+ years</strong>, he has worked with <strong>50+ brands</strong>, helping them scale revenue, optimize ad spend, and
              build sustainable digital engines.
            </p>

            <a
              href={linkedInUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm hover:border-gray-300 hover:shadow"
            >
              Connect on LinkedIn
              <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>

            {/* Single compact chip (the only extra visual badge) */}
            <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200">
              🎓 IIT Kanpur • 7+ yrs
            </div>
          </div>

          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold">Our Philosophy</h3>
            <p className="mt-2 text-sm text-gray-700">
              Marketing isn’t a trend-chase — it’s momentum. We architect systems where data, psychology, and storytelling work together
              to grow revenue, not just reach.
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-3 text-sm text-gray-700 sm:grid-cols-2">
              <li className="rounded-xl bg-gray-50 p-3">Clarity over complexity</li>
              <li className="rounded-xl bg-gray-50 p-3">Speed with rigor</li>
              <li className="rounded-xl bg-gray-50 p-3">Insight before spend</li>
              <li className="rounded-xl bg-gray-50 p-3">Compounding growth loops</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-6xl px-4 pb-16 sm:pb-24">
        <div className="overflow-hidden rounded-3xl border border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50 p-6 shadow sm:p-10">
          <div className="grid gap-6 sm:grid-cols-[1.3fr_1fr] sm:items-center">
            <div>
              <h2 className="text-xl font-extrabold sm:text-2xl">Let’s build your growth engine</h2>
              <p className="mt-2 max-w-prose text-sm text-gray-700">
                Tell us your goals. We’ll bring the blueprint — full funnel strategy, creative, and performance execution.
              </p>
            </div>
            <div className="sm:text-right">
              <a
                href="/onboarding"
                className="inline-flex items-center justify-center rounded-2xl bg-amber-500 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-amber-600"
              >
                Get a Free Growth Plan
                <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
