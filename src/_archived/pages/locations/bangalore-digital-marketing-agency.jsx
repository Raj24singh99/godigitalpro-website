import React from "react";
import LocationPageTemplate from "./LocationPageTemplate.jsx";

export default function BangaloreDigitalMarketingAgency() {
  return (
    <LocationPageTemplate
      city="Bangalore"
      region="Karnataka"
      phone="+91 99151 28354"
      neighborhoods={["Koramangala", "Indiranagar", "Whitefield", "HSR", "Marathahalli", "Electronic City"]}
    />
  );
}
