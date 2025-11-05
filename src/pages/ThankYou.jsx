// src/pages/ThankYou.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const CALENDLY_SRC = "https://assets.calendly.com/assets/external/widget.js";
const CALENDLY_URL =
  "https://calendly.com/raj-godigitalpro/30min?text_color=000000&primary_color=ffd700";

export default function ThankYou() {
  const calRef = useRef(null);

  // ---- SEO constants (no UI changes) ----
  const seo = {
    title: "Thank You | GoDigitalPro — Book Your Discovery Call",
    desc:
      "Thanks for submitting your details. Book a free discovery call with GoDigitalPro, a full-funnel digital marketing agency helping brands scale with Paid Ads, SEO, and Web.",
    url: "https://www.godigitalpro.in/thank-you",
    image: "https://www.godigitalpro.in/public/assets/logo.jpg",
  };

  // Structured data: WebPage + potential ScheduleAction (Calendly)
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Thank You",
    url: seo.url,
    description: seo.desc,
    isPartOf: {
      "@type": "WebSite",
      name: "GoDigitalPro",
      url: "https://www.godigitalpro.in/",
    },
    potentialAction: {
      "@type": "ScheduleAction",
      target: CALENDLY_URL,
      name: "Book a Discovery Call",
    },
    publisher: {
      "@type": "Organization",
      name: "GoDigitalPro",
      url: "https://www.godigitalpro.in/",
      logo: {
        "@type": "ImageObject",
        url: seo.image,
      },
    },
  };

  // Load Calendly script once
  useEffect(() => {
    const already = document.querySelector(`script[src="${CALENDLY_SRC}"]`);
    if (!already) {
      const s = document.createElement("script");
      s.src = CALENDLY_SRC;
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <main className="relative bg-white">
      <Helmet>
        {/* Primary */}
        <title>{seo.title}</title>
        <meta name="description" content={seo.desc} />
        <link rel="canonical" href={seo.url} />

        {/* Thank-you pages shouldn't be indexed */}
        <meta name="robots" content="noindex, nofollow, max-image-preview:large" />

        {/* Open Graph */}
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.desc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seo.url} />
        <meta property="og:image" content={seo.image} />
        <meta property="og:site_name" content="GoDigitalPro" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.desc} />
        <meta name="twitter:image" content={seo.image} />

        {/* Perf hints for Calendly */}
        <link rel="preconnect" href="https://assets.calendly.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
        <link rel="preconnect" href="https://calendly.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://calendly.com" />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(webPageJsonLd)}</script>
      </Helmet>

      {/* Soft glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(250,255,200,.35), rgba(255,255,255,0))",
        }}
      />

      <section className="max-w-6xl mx-auto px-6 md:px-10 py-10 md:py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-dark">
            Thanks — you’re in! 🎉
          </h1>
          <p className="mt-3 text-slate-700">
            Pick a time for a quick discovery call. You’ll receive a calendar
            invite with a Google Meet/Zoom link.
          </p>
        </div>

        {/* Equal-height two-column layout */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 items-stretch">
          {/* LEFT: Description card */}
          <div className="rounded-3xl bg-white border border-slate-200 p-6 md:p-8 shadow-sm min-h-[780px] flex flex-col">
            <div className="inline-flex items-center gap-3">
              <span className="inline-grid place-items-center w-12 h-12 rounded-2xl bg-amber-400 text-slate-900 font-bold text-lg">
                +
              </span>
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-dark">
                  Exploration call
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  30 minutes · Google Meet / Zoom
                </p>
              </div>
            </div>

            {/* Credibility chips */}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800">
                🎓 IIT Kanpur alumnus
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-800">
                ⭐ 100+ brands served
              </span>
            </div>

            {/* Body */}
            <div className="mt-5 space-y-5 text-[15px] leading-relaxed text-slate-800 flex-1">
              <div>
                <p className="font-semibold mb-2">
                  🚀 Free Discovery Call with GoDigitalPro
                </p>
                <p>
                  GoDigitalPro offers 360-degree solutions for digital
                  marketing growth. We’ve helped <strong>100+ brands</strong>{" "}
                  achieve measurable scale and efficiency. Let’s discuss how we
                  can do the same for you.
                </p>
              </div>

              <div>
                <p className="font-semibold mb-2">In This Call, We Will:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Review Your Needs:</strong> Understand your current
                    goals and requirements.
                  </li>
                  <li>
                    <strong>Analyze Current Marketing:</strong> Briefly review
                    what your team is currently doing.
                  </li>
                  <li>
                    <strong>Initial Ideas &amp; Approach:</strong> How our 360°
                    strategy could help.
                  </li>
                  <li>
                    <strong>Define Next Steps:</strong> Clear path for a
                    potential collaboration.
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-sm hover:border-slate-300 hover:shadow"
              >
                ← Back to Home
              </Link>
            </div>
          </div>

          {/* RIGHT: Calendly card — same min height */}
          <div className="rounded-3xl bg-white border border-slate-200 p-2 md:p-4 shadow-sm min-h-[780px]">
            <div
              ref={calRef}
              className="calendly-inline-widget w-full h-full"
              data-url={CALENDLY_URL}
              style={{
                minWidth: "320px",
                height: "748px", // card (780) - padding/border approx
              }}
            />
          </div>
        </div>

        {/* Quick actions */}
        <div className="mt-8 flex flex-col items-center gap-3 md:flex-row md:justify-center">
          <a
            href="https://wa.me/919277338141?text=Hi%20GoDigitalPro!%20I%20just%20filled%20the%20form%20and%20want%20to%20chat%20on%20WhatsApp."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-primary px-4 py-2 text-sm font-medium text-slate-900 ring-1 ring-black/10 hover:opacity-90"
          >
            WhatsApp us
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline-block"
              aria-hidden
            >
              <path d="M22 2L11 13" />
              <path d="M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </a>

          <span className="text-slate-400 hidden md:inline">•</span>

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-sm hover:border-slate-300 hover:shadow"
          >
            Open Calendly in a new tab
          </a>
        </div>
      </section>
    </main>
  );
}
