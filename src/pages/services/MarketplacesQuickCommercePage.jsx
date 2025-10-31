import React from "react";
import ServiceTemplate from "../../components/ServiceTemplate";

export default function MarketplacesQuickCommercePage() {
  const service = {
    title: "Marketplaces & Quick Commerce",
    description: "Own the buy box. Win the shelf. Amazon, Flipkart, Blinkit, Zepto.",
    bullets: ["Catalog setup & compliance", "Listing SEO (A+ content)", "Ads & promotions", "Ratings & fulfilment"],
    ctaText: "Optimize My Listings",
    ctaHref: "/onboarding"
  };
  return <ServiceTemplate service={service} />;
}
