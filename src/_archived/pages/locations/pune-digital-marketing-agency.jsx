import React from "react";
import LocationPageTemplate from "./LocationPageTemplate.jsx";

export default function PuneDigitalMarketingAgency() {
  return (
    <LocationPageTemplate
      city="Pune"
      region="Maharashtra"
      phone="+91 99151 28354"
      neighborhoods={["Baner", "Hinjewadi", "Kharadi", "Koregaon Park", "Magarpatta", "Viman Nagar"]}
    />
  );
}
