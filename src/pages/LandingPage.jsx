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
  title: "AI Marketing Agency | Performance Marketing, SEO, E-commerce & Growth | GoDigitalPro",
  description:
    "GoDigitalPro is an AI-powered marketing agency specializing in performance marketing, SEO, geo-targeted campaigns, e-commerce growth, social media, and creative production — built to scale businesses and deliver real revenue outcomes.",
  keywords:
    "ai marketing agency, performance marketing agency, seo agency, ecommerce marketing, digital marketing agency, geo targeted marketing, social media marketing, ai growth agency",
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
        name: "AI Marketing & Growth Services",
        description:
          "Performance marketing, SEO, geo-targeted campaigns, e-commerce marketing, social media, and creative production powered by AI — built to scale businesses and deliver measurable revenue outcomes.",
        url: canonical,
      }),
      siteNavigationJsonLd([
        { name: "Services", url: `${canonical}#services` },
        { name: "Agency Partner", url: buildCanonical("/agency-partner") },
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
