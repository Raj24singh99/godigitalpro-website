// src/pages/AboutUs.jsx
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import SeoHelmet from "../components/SeoHelmet";
import { buildCanonical, organizationJsonLd, personJsonLd } from "../utils/seo";

export default function AboutUs() {
  const linkedInUrl = "https://www.linkedin.com/in/raj24singh99/";

  // If your live route is /about_us keep as-is; if you use /about, update both places.
  const CANONICAL_URL = buildCanonical("/about_us/");

  const pageSEO = {
    title: "About Us | GoDigitalPro — Growth Marketing Partner",
    description:
      "GoDigitalPro is a growth-focused marketing agency led by Raj Singh (IIT Kanpur alumnus). 7+ years, 50+ brands. Full-funnel strategy across Paid Ads, SEO, CRO, and Analytics.",
    url: CANONICAL_URL,
    image: "https://www.godigitalpro.in/public/assets/logo.jpg",
  };

  const schemaBlocks = useMemo(
    () =>
      [
        organizationJsonLd({ url: pageSEO.url }),
        personJsonLd({
          name: "Raj Singh",
          jobTitle: "Founder & CEO",
          url: linkedInUrl,
          sameAs: [linkedInUrl],
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "Indian Institute of Technology Kanpur",
            url: "https://iitk.ac.in/",
          },
        }),
      ].filter(Boolean),
    [linkedInUrl, pageSEO.url]
  );

  return (
    <main className="relative isolate bg-white text-gray-900">
      <SeoHelmet
        title={pageSEO.title}
        description={pageSEO.description}
        canonical={pageSEO.url}
        image={pageSEO.image}
        schema={schemaBlocks}
        breadcrumbs={[
          { name: "Home", url: buildCanonical("/") },
          { name: "About Us", url: pageSEO.url },
        ]}
      />

      {/* Soft gradient top glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(250,255,200,.35), rgba(255,255,255,0))",
        }}
      />

      {/* Hero */}
      <section
        className="mx-auto max-w-6xl px-4 pt-16 pb-8 sm:pt-24 sm:pb-12"
        aria-labelledby="about-hero-heading"
      >
        <div className="grid gap-8 sm:grid-cols-2 sm:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold tracking-widest text-amber-600 uppercase">
              About GoDigitalPro
            </p>
            <h1 id="about-hero-heading" className="text-3xl font-extrabold leading-tight sm:text-4xl">
              Turning{" "}
              <span className="bg-gradient-to-r from-amber-500 to-yellow-400 bg-clip-text text-transparent">
                ambition
              </span>{" "}
              into
              <br className="hidden sm:block" /> measurable growth
            </h1>
            <p className="mt-4 max-w-prose text-base text-gray-700">
              We’re a growth partner for brands ready to scale with clarity, creativity, and confidence.
              Founded by{" "}
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="underline decoration-amber-400 underline-offset-4 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded"
                aria-label="Open Raj Singh LinkedIn profile (opens in a new tab)"
              >
                Raj Singh
              </a>{" "}
              (<span className="font-medium">IIT Kanpur alumnus</span>), we blend performance and storytelling to drive predictable ROI.
            </p>
          </div>

          {/* spacer to keep previous layout balance */}
          <div className="hidden sm:block" />
        </div>
      </section>

      {/* Differentiators */}
      <section
        className="mx-auto max-w-6xl px-4 py-8 sm:py-12"
        aria-labelledby="diff-heading"
      >
        <div className="rounded-3xl border border-gray-100 bg-white/70 p-6 shadow-sm sm:p-10">
          <h2 id="diff-heading" className="text-xl font-bold sm:text-2xl">
            What Makes Us Different
          </h2>
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
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-md focus-within:shadow-md"
              >
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section
        className="mx-auto max-w-6xl px-4 py-8 sm:py-12"
        aria-labelledby="expertise-heading"
      >
        <h2 id="expertise-heading" className="sr-only">
          Expertise
        </h2>
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
            <article
              key={item.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Founder */}
      <section
        className="mx-auto max-w-6xl px-4 py-8 sm:py-12"
        aria-labelledby="founder-heading"
      >
        <div className="grid gap-6 sm:grid-cols-[1fr_1.3fr] sm:items-center">
          <article className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 id="founder-heading" className="text-xl font-bold sm:text-2xl">
              Meet the Founder
            </h2>
            <p className="mt-3 text-sm leading-6 text-gray-700">
              <span className="font-semibold">Raj Singh</span> — Founder & CEO of GoDigitalPro — is a performance marketing strategist and{" "}
              <span className="font-medium">IIT Kanpur alumnus</span> who has contributed to growth across eCommerce, SaaS, education, and healthcare.
              Over <strong>7+ years</strong>, he has worked with <strong>50+ brands</strong>, helping them scale revenue, optimize ad spend, and
              build sustainable digital engines.
            </p>

            <a
              href={linkedInUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-4 inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm hover:border-gray-300 hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              aria-label="Connect with Raj Singh on LinkedIn (opens in a new tab)"
            >
              Connect on LinkedIn
              <svg
                className="ml-2 h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>

            <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200">
              🎓 IIT Kanpur • 7+ yrs
            </div>
          </article>

          <article className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
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
          </article>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative mx-auto max-w-6xl px-4 pb-16 sm:pb-24"
        aria-labelledby="cta-heading"
      >
        <div className="overflow-hidden rounded-3xl border border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50 p-6 shadow sm:p-10">
          <div className="grid gap-6 sm:grid-cols-[1.3fr_1fr] sm:items-center">
            <div>
              <h2 id="cta-heading" className="text-xl font-extrabold sm:text-2xl">
                Let’s build your growth engine
              </h2>
              <p className="mt-2 max-w-prose text-sm text-gray-700">
                Tell us your goals. We’ll bring the blueprint — full funnel strategy, creative, and performance execution.
              </p>
            </div>
            <div className="sm:text-right">
              <Link
                to="/onboarding"
                className="inline-flex items-center justify-center rounded-2xl bg-amber-500 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-amber-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                aria-label="Go to onboarding to get a free growth plan"
              >
                Get a Free Growth Plan
                <svg
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
