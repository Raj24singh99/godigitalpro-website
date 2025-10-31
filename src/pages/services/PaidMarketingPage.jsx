import React from "react";
import ServiceTemplate from "../../components/ServiceTemplate";

export default function PaidMarketingPage() {
  const service = {
    title: "Paid Marketing",
    description: "ROI-first campaigns across Google, Meta, YouTube & Programmatic.",
    bullets: ["Full-funnel campaign design", "Creative testing framework", "Budget & bid strategy", "Offline conversions tracking"],
    ctaText: "Optimize My Listings",
    ctaHref: "/onboarding"
  };
  return <ServiceTemplate service={service} />;
}
