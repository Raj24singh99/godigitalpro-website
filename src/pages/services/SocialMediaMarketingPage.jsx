import React from "react";
import ServiceTemplate from "../../components/ServiceTemplate";

export default function SocialMediaMarketingPage() {
  const service = {
    title: "Social Media Marketing",
    description: "Consistent content engine + community to grow reach & trust.",
    bullets: ["Content calendars & hooks", "UGC/reels playbook", "Creator collabs", "Community management"],
    ctaText: "Optimize My Listings",
    ctaHref: "/onboarding"
  };
  return <ServiceTemplate service={service} />;
}
