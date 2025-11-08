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
  ogImage: "https://godigitalpro.in/og-home.jpg", // 1200x630 recommended
};

const META = {
  title:
    "GoDigitalPro — Websites, SEO, Google & Meta Ads that Drive Revenue",
  description:
    "GoDigitalPro is a digital marketing agency that plans, builds, and scales growth systems—SEO, high-intent ads, conversion-focused websites, and analytics. Clear plans, transparent reporting, accountable execution.",
  keywords:
    "digital marketing agency, seo agency, google ads, meta ads, performance marketing, website development, india, cro, analytics",
};

export default function LandingPage() {
  return (
    <>
      <Helmet>
        {/* Core */}
        <title>{META.title}</title>
        <meta name="description" content={META.description} />
        <meta name="keywords" content={META.keywords} />
        <meta
          name="robots"
          content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"
        />
        <link rel="canonical" href={SITE.url} />

        {/* Helpful extras */}
        <meta name="application-name" content={SITE.name} />
        <meta name="theme-color" content="#111827" />
        <meta httpEquiv="content-language" content="en-IN" />
        <meta name="author" content="GoDigitalPro" />
        <meta name="publisher" content="GoDigitalPro" />

        {/* Open Graph */}
        <meta property="og:site_name" content={SITE.name} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:url" content={SITE.url} />
        <meta property="og:title" content={META.title} />
        <meta property="og:description" content={META.description} />
        <meta property="og:image" content={SITE.ogImage} />
        <meta property="og:image:alt" content="GoDigitalPro — growth marketing agency" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={SITE.twitter} />
        <meta name="twitter:title" content={META.title} />
        <meta name="twitter:description" content={META.description} />
        <meta name="twitter:image" content={SITE.ogImage} />

        {/* JSON-LD: Organization */}
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
            description: META.description,
          })}
        </script>

        {/* JSON-LD: WebSite + SearchAction */}
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

        {/* JSON-LD: Service (Digital Marketing Agency) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Digital Marketing & Growth Services",
            serviceType:
              "SEO, Google Ads, Meta Ads, Website Development, CRO, Analytics",
            provider: {
              "@type": "Organization",
              name: SITE.name,
              url: SITE.url,
              logo: SITE.logo,
            },
            areaServed: "IN",
            offers: {
              "@type": "Offer",
              category: "MarketingService",
              availability: "https://schema.org/InStock",
              url: SITE.url,
            },
            description:
              "Full-funnel digital marketing services: SEO, high-intent ads, CRO, analytics, and conversion-focused websites.",
          })}
        </script>

        {/* JSON-LD: Site Navigation (helps sitelinks/AI overviews) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: [
              { "@type": "SiteNavigationElement", name: "Services", url: "https://godigitalpro.in/services" },
              { "@type": "SiteNavigationElement", name: "SEO", url: "https://godigitalpro.in/services/seo" },
              { "@type": "SiteNavigationElement", name: "Paid Advertising", url: "https://godigitalpro.in/services/ads" },
              { "@type": "SiteNavigationElement", name: "Web Development", url: "https://godigitalpro.in/services/web-development" },
              { "@type": "SiteNavigationElement", name: "Blog", url: "https://godigitalpro.in/blog" },
              { "@type": "SiteNavigationElement", name: "Contact", url: "https://godigitalpro.in/onboarding" },
            ],
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
