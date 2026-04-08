import React, { Suspense, lazy, useMemo } from "react";

import Hero from "../components/Hero";
const TrustPillars = lazy(() => import("../components/TrustPillars"));
const GrowthEngine = lazy(() => import("../components/GrowthEngine"));
const Services = lazy(() => import("../components/Services"));
const GrowthJourney = lazy(() => import("../components/GrowthJourney"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const FinalCTA = lazy(() => import("../components/FinalCTA"));
import SeoHelmet from "../components/SeoHelmet";
import {
  buildCanonical,
  localBusinessJsonLd,
  webpageJsonLd,
  organizationJsonLd,
  websiteJsonLd,
  serviceJsonLd,
  siteNavigationJsonLd,
} from "../utils/seo";

const META = {
  title: "EdTech Marketing Agency for Paid Media, SEO & AI-Led Growth | GoDigitalPro",
  description:
    "GoDigitalPro is an EdTech marketing agency using AI-led analysis, paid media, SEO, social media, and analytics to help education brands scale qualified leads, admissions pipeline, and revenue.",
  keywords:
    "edtech marketing agency, education marketing agency, edtech paid media agency, edtech seo agency, student enrollment marketing, ai marketing analysis",
};

export default function LandingPage() {
  const canonical = buildCanonical("/");
  const schemaBlocks = useMemo(
    () => [
      organizationJsonLd(),
      localBusinessJsonLd(),
      websiteJsonLd(),
      webpageJsonLd({
        title: META.title,
        description: META.description,
        url: canonical,
        type: "WebPage",
      }),
      serviceJsonLd({
        name: "EdTech Marketing & Growth Services",
        description:
          "Paid media, SEO, social media, analytics, and AI-led growth systems designed for EdTech brands that need stronger admissions and revenue outcomes.",
        url: canonical,
      }),
      siteNavigationJsonLd([
        { name: "Services", url: `${canonical}#services` },
        { name: "EdTech", url: buildCanonical("/industries/edtech") },
        { name: "SEO", url: buildCanonical("/services/seo-content") },
        { name: "Paid Advertising", url: buildCanonical("/services/paid-marketing") },
        { name: "Video & Ad Production", url: buildCanonical("/services/video-ad-production") },
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
          <Testimonials />
          <FinalCTA />
        </Suspense>
      </main>
    </>
  );
}
