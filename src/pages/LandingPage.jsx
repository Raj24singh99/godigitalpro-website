// app/frontend/src/pages/LandingPage.jsx
import React, { Suspense, lazy, useMemo } from "react";

import Hero from "../components/Hero";
const TrustPillars = lazy(() => import("../components/TrustPillars"));
const GrowthEngine = lazy(() => import("../components/GrowthEngine"));
const Services = lazy(() => import("../components/Services"));
const GrowthJourney = lazy(() => import("../components/GrowthJourney"));
const BusinessTypes = lazy(() => import("../components/BusinessTypes"));
const Plans = lazy(() => import("../components/PlansSection"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const FinalCTA = lazy(() => import("../components/FinalCTA"));
import SeoHelmet from "../components/SeoHelmet";
import {
  buildCanonical,
  organizationJsonLd,
  websiteJsonLd,
  serviceJsonLd,
  siteNavigationJsonLd,
} from "../utils/seo";

const META = {
  title: "GoDigitalPro — Full-Funnel Digital Marketing Agency for Modern Brands",
  description:
    "GoDigitalPro is a global digital marketing agency that unites strategy, SEO, paid media, creative, web, CRO, and analytics into one accountable growth pod for teams that need clarity and speed.",
  keywords:
    "digital marketing agency, global marketing agency, seo agency, google ads agency, performance marketing, cro, analytics, website development",
};

export default function LandingPage() {
  const canonical = buildCanonical("/");
  const schemaBlocks = useMemo(
    () => [
      organizationJsonLd(),
      websiteJsonLd(),
      serviceJsonLd({
        name: "Digital Marketing & Growth Services",
        description:
          "SEO, Google Ads, Meta Ads, Website Development, CRO, Analytics, and measurement systems that compound growth.",
        url: canonical,
      }),
      siteNavigationJsonLd([
        { name: "Services", url: `${canonical}#services` },
        { name: "SEO", url: buildCanonical("/services/seo-content") },
        { name: "Paid Advertising", url: buildCanonical("/services/paid-marketing") },
        { name: "Web Development", url: buildCanonical("/services/website-development") },
        { name: "Blog", url: buildCanonical("/blog") },
        { name: "Contact", url: buildCanonical("/onboarding") },
      ]),
    ].filter(Boolean),
    [canonical]
  );

  return (
    <>
      <SeoHelmet
        title={META.title}
        description={META.description}
        canonical={canonical}
        keywords={META.keywords}
        robots="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"
        schema={schemaBlocks}
      />

      <main>
        <Hero />
        <Suspense fallback={null}>
          <TrustPillars />
          <GrowthEngine />
          <Services />
          <GrowthJourney />
          <BusinessTypes />
          <Plans />
          <Testimonials />
          <FinalCTA />
        </Suspense>
      </main>
    </>
  );
}
