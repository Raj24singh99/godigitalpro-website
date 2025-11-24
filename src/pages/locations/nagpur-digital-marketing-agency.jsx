import React from "react";
import LocationPageTemplate from "./LocationPageTemplate.jsx";

export default function NagpurDigitalMarketingAgency() {
  return (
    <LocationPageTemplate
      city="Nagpur"
      region="Maharashtra"
      phone="+91 99151 28354"
      neighborhoods={["Wardha Road", "Civil Lines", "Manish Nagar", "Dharampeth", "Ram Nagar", "Trimurti Nagar"]}
    />
  );
}
