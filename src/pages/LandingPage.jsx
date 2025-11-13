// app/frontend/src/pages/LandingPage.jsx
import React, { useMemo } from "react";

import Hero from "../components/Hero";
import TrustPillars from "../components/TrustPillars";
import GrowthEngine from "../components/GrowthEngine";
import Services from "../components/Services";
import GrowthJourney from "../components/GrowthJourney";
import BusinessTypes from "../components/BusinessTypes";
import Plans from "../components/PlansSection";
import Testimonials from "../components/Testimonials";
import FinalCTA from "../components/FinalCTA";
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
