import React from "react";
import ServiceTemplate from "../../components/ServiceTemplate";

export default function SeoContentPage() {
  const service = {
    title: "SEO & Content",
    description: "Technical + content + authority for compounding organic traffic.",
    bullets: ["Technical audits & fixes", "Topic clusters & briefs", "Link earning", "Analytics & GSC workflows"],
    ctaText: "Optimize My Listings",
    ctaHref: "/onboarding"
  };
  return <ServiceTemplate service={service} />;
}
