import React from "react";
import LocationPageTemplate from "./LocationPageTemplate.jsx";

export default function NoidaDigitalMarketingAgency() {
  return (
    <LocationPageTemplate
      city="Noida"
      region="NCR"
      phone="+91 99151 28354"
      neighborhoods={["Sector 62", "Sector 18", "Sector 128", "Sector 150", "Film City", "Greater Noida"]}
    />
  );
}
