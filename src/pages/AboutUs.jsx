// src/pages/AboutUs.jsx
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import SeoHelmet from "../components/SeoHelmet";
import { buildCanonical, organizationJsonLd, personJsonLd } from "../utils/seo";

export default function AboutUs() {
  const linkedInUrl = "https://www.linkedin.com/in/raj24singh99/";

  // If your live route is /about_us keep as-is; if you use /about, update both places.
  const CANONICAL_URL = buildCanonical("/about_us");

  const pageSEO = {
    title: "About GoDigitalPro | EdTech Growth Marketing Partner",
    description:
      "GoDigitalPro is an EdTech growth marketing agency led by Raj Singh, an IIT Kanpur alumnus with 7 years of experience, 250 crore+ in EdTech ad spend managed, and 1000+ crore in revenue delivered.",
    url: CANONICAL_URL,
    image: buildCanonical("/apple-touch-icon.png"),
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
              Building{" "}
              <span className="bg-gradient-to-r from-amber-500 to-yellow-400 bg-clip-text text-transparent">
                EdTech growth systems
              </span>{" "}
              for teams that need measurable
              <br className="hidden sm:block" /> revenue impact
            </h1>
            <p className="mt-4 max-w-prose text-base text-gray-700">
              We’re an EdTech-focused growth partner for brands that want sharper positioning, cleaner analytics, stronger creative, and more accountable pipeline performance.
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
              (<span className="font-medium">IIT Kanpur alumnus</span>), we combine category depth, AI-led analysis, and founder-level execution to help education brands scale applications, enrollments, and revenue.
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
                title: "EdTech Category Depth",
                body: "We understand program discovery, parent trust, application friction, counselor workflows, and the difference between lead volume and lead quality.",
              },
              {
                title: "AI-Led Analysis",
                body: "We use AI to accelerate pattern spotting across media, landing pages, search demand, and CRM outcomes, then turn that into practical next steps.",
              },
              {
                title: "Creative × Performance",
                body: "Paid media, SEO, social, video, and website experiences are built to reinforce one story instead of competing for attention.",
              },
              {
                title: "Revenue-First Accountability",
                body: "We care about qualified inquiries, show-ups, applications, enrollments, and payback, not vanity metrics dressed up as growth.",
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
              title: "Paid Media for EdTech",
              body:
                "Google, Meta, and YouTube systems designed around qualified pipeline quality, geo strategy, and counselor-ready conversion tracking.",
            },
            {
              title: "SEO & Content Systems",
              body:
                "Program pages, city intent, topical authority, and answer-first editorial systems that compound student demand over time.",
            },
            {
              title: "Website & Funnel Design",
              body:
                "Landing pages, websites, and conversion architecture built to turn paid and organic demand into demos, applications, and counselor conversations.",
            },
            {
              title: "Social & Community",
              body:
                "Platform-native storytelling for students, parents, founders, and faculty with systems that keep social trust-building consistent.",
            },
            {
              title: "Video & Ad Production",
              body:
                "Creative systems for reels, ad variants, founder videos, proof assets, and performance edits that keep paid and organic channels fresh.",
            },
            {
              title: "Analytics & CRM Loops",
              body:
                "GA4, pixels, offline conversions, dashboards, and counselor feedback loops that help growth decisions get better every sprint.",
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
              <span className="font-medium">IIT Kanpur alumnus</span> with deep EdTech operating experience.
              Over <strong>7 years</strong>, he has helped education brands manage <strong>250 crore+ in ad spend</strong>, influence
              <strong> 1000+ crore in revenue</strong>, and build more accountable acquisition systems across paid media, SEO, analytics, and CRM.
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
              IIT Kanpur • 7 years • 250 Cr+ ad spend • 1000 Cr+ revenue
            </div>
          </article>

          <article className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold">Our Philosophy</h3>
            <p className="mt-2 text-sm text-gray-700">
              Growth is not a channel problem. It is a systems problem. We build operating rhythms where positioning, media, creative, analytics, and admissions feedback reinforce each other.
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-3 text-sm text-gray-700 sm:grid-cols-2">
              <li className="rounded-xl bg-gray-50 p-3">Category depth before channel tactics</li>
              <li className="rounded-xl bg-gray-50 p-3">Insight before spend</li>
              <li className="rounded-xl bg-gray-50 p-3">Creative and revenue feedback in one loop</li>
              <li className="rounded-xl bg-gray-50 p-3">Scale only what compounds</li>
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
                Let’s build your EdTech growth engine
              </h2>
              <p className="mt-2 max-w-prose text-sm text-gray-700">
                Tell us where the funnel is leaking. We’ll bring the diagnosis, priorities, and execution blueprint.
              </p>
            </div>
            <div className="sm:text-right">
              <Link
                to="/onboarding"
                className="inline-flex items-center justify-center rounded-2xl bg-amber-500 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-amber-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                aria-label="Go to onboarding to book an EdTech strategy call"
              >
                Book an EdTech Strategy Call
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
