// app/frontend/src/pages/LandingPage.jsx
import React, { Suspense, lazy, useMemo } from "react";
import { Link } from "react-router-dom";

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
  localBusinessJsonLd,
  webpageJsonLd,
  organizationJsonLd,
  websiteJsonLd,
  serviceJsonLd,
  siteNavigationJsonLd,
} from "../utils/seo";

const META = {
  title: "Best Digital Marketing Agency for SEO, Google Ads & Startup Growth | GoDigitalPro",
  description:
    "GoDigitalPro is a performance-focused digital marketing agency for startups, local businesses, and growth teams. Get SEO, Google Ads, social media, and conversion strategy under one accountable team.",
  keywords:
    "digital marketing agency near me, best digital marketing agency, best google ads agency, best digital marketing agency for startups, seo agency, performance marketing agency, paid ads agency",
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
          <section className="bg-white border-y border-black/5">
            <div className="mx-auto max-w-6xl px-6 md:px-10 py-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
                Looking for the best digital marketing agency near you?
              </h2>
              <p className="mt-3 max-w-4xl text-slate-700">
                We help brands searching for a reliable digital marketing agency near me with
                practical growth systems across SEO, Google Ads, paid social, and conversion
                optimization. Explore the exact service and business-model pages below.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  { to: "/best-digital-marketing-agency", label: "Best Digital Marketing Agency" },
                  { to: "/best-google-ads-agency", label: "Best Google Ads Agency" },
                  {
                    to: "/best-digital-marketing-agency-for-startups",
                    label: "Best Agency for Startups",
                  },
                  { to: "/digital-marketing-agency-near-me", label: "Digital Marketing Agency Near Me" },
                ].map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-800 ring-1 ring-black/10 hover:bg-slate-200"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>
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
