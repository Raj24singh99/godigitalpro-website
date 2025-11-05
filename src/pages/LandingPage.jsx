// app/frontend/src/pages/LandingPage.jsx
import React from "react";
import { Helmet } from "react-helmet-async";

import Hero from "../components/Hero";
import TrustPillars from "../components/TrustPillars";
import GrowthEngine from "../components/GrowthEngine";
import Services from "../components/Services";
import GrowthJourney from "../components/GrowthJourney";
import BusinessTypes from "../components/BusinessTypes";
import Plans from "../components/PlansSection";
import Testimonials from "../components/Testimonials";
import FinalCTA from "../components/FinalCTA";

const SITE = {
  name: "GoDigitalPro",
  url: "https://godigitalpro.in/",
  twitter: "@GoDigitalProIn",
  logo: "https://godigitalpro.in/apple-touch-icon.png",
  ogImage: "https://godigitalpro.in/og-home.jpg", // 1200x630 recommended; add this file
};

const META = {
  title: "GoDigitalPro — Websites, SEO, Google & Meta Ads that Drive Revenue",
  description:
    "We plan, build, and scale growth systems—product-led content, SEO, high-intent ads, and conversion-focused websites. Clear plans, transparent reporting, accountable execution.",
  keywords:
    "digital marketing agency, seo agency, google ads, meta ads, performance marketing, website development, india",
};

export default function LandingPage() {
  return (
    <>
      <Helmet>
        {/* Core */}
        <title>{META.title}</title>
        <meta name="description" content={META.description} />
        <meta name="keywords" content={META.keywords} />
        <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
        <link rel="canonical" href={SITE.url} />

        {/* Open Graph */}
        <meta property="og:site_name" content={SITE.name} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE.url} />
        <meta property="og:title" content={META.title} />
        <meta property="og:description" content={META.description} />
        <meta property="og:image" content={SITE.ogImage} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={SITE.twitter} />
        <meta name="twitter:title" content={META.title} />
        <meta name="twitter:description" content={META.description} />
        <meta name="twitter:image" content={SITE.ogImage} />

        {/* Helpful for audit tools */}
        <meta name="author" content="GoDigitalPro" />
        <meta name="publisher" content="GoDigitalPro" />

        {/* JSON-LD: Organization + WebSite */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: SITE.name,
            url: SITE.url,
            logo: SITE.logo,
            sameAs: [
              "https://www.linkedin.com/company/godigitalpro",
              "https://www.instagram.com/godigitalpro.in/",
              "https://www.youtube.com/@GoDigitalPro",
              "https://www.facebook.com/profile.php?id=61573650177453",
            ],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: SITE.name,
            url: SITE.url,
            potentialAction: {
              "@type": "SearchAction",
              target: "https://godigitalpro.in/search?q={query}",
              "query-input": "required name=query",
            },
          })}
        </script>
      </Helmet>

      <main>
        <Hero />
        <TrustPillars />
        <GrowthEngine />
        <Services />
        <GrowthJourney />
        <BusinessTypes />
        <Plans />
        <Testimonials />
        <FinalCTA />
      </main>
    </>
  );
}
