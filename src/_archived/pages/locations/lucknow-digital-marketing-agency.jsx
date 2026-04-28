import React from "react";
import LocationPageTemplate from "./LocationPageTemplate.jsx";

export default function LucknowDigitalMarketingAgency() {
  return (
    <LocationPageTemplate
      city="Lucknow"
      region="Uttar Pradesh"
      phone="+91 99151 28354"
      neighborhoods={["Gomti Nagar", "Hazratganj", "Alambagh", "Indira Nagar", "Rajajipuram", "Sushant Golf City"]}
    />
  );
}
