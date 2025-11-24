import React from "react";
import LocationPageTemplate from "./LocationPageTemplate.jsx";

export default function CoimbatoreDigitalMarketingAgency() {
  return (
    <LocationPageTemplate
      city="Coimbatore"
      region="Tamil Nadu"
      phone="+91 99151 28354"
      neighborhoods={["Saravanampatti", "Peelamedu", "RS Puram", "Gandhipuram", "Vadavalli", "Race Course"]}
    />
  );
}
