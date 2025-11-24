import React from "react";
import LocationPageTemplate from "./LocationPageTemplate.jsx";

export default function DelhiDigitalMarketingAgency() {
  return (
    <LocationPageTemplate
      city="Delhi"
      region="NCR"
      phone="+91 99151 28354"
      neighborhoods={["Gurgaon", "Noida", "Dwarka", "Saket", "Connaught Place", "Ghaziabad"]}
    />
  );
}
