import React from "react";
import LocationPageTemplate from "./LocationPageTemplate.jsx";

export default function GoaDigitalMarketingAgency() {
  return (
    <LocationPageTemplate
      city="Goa"
      region="West Coast"
      phone="+91 99151 28354"
      neighborhoods={["Panaji", "Calangute", "Baga", "Candolim", "Margao", "Vasco da Gama"]}
    />
  );
}
