import React from "react";
import ServiceTemplate from "../../components/ServiceTemplate";

export default function WebsiteDevelopmentPage() {
  const service = {
    title: "Website Development",
    description: "Lightning-fast, SEO-ready sites and landing pages that convert.",
    bullets: ["Performance-first React/Vite builds", "CRO-focused landing pages", "Schema/SEO built-in", "Analytics & pixels wired"],
    ctaText: "Optimize My Listings",
    ctaHref: "/onboarding"
  };
  return <ServiceTemplate service={service} />;
}
