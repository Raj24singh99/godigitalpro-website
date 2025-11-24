import React from "react";
import LocationPageTemplate from "./LocationPageTemplate.jsx";

export default function KolkataDigitalMarketingAgency() {
  return (
    <LocationPageTemplate
      city="Kolkata"
      region="West Bengal"
      phone="+91 99151 28354"
      neighborhoods={["Salt Lake", "New Town", "Park Street", "Ballygunge", "Jadavpur", "Behala"]}
    />
  );
}
