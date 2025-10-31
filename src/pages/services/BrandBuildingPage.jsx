import React from "react";
import ServiceTemplate from "../../components/ServiceTemplate";

export default function BrandBuildingPage() {
  const service = {
    title: "Brand Building",
    description: "Identity, story and assets that make your brand memorable.",
    bullets: ["Brand strategy & voice", "Logo & visual system", "Messaging guide", "Brand site & assets"],
    ctaText: "Optimize My Listings",
    ctaHref: "/onboarding"
  };
  return <ServiceTemplate service={service} />;
}
