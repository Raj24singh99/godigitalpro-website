import React from "react";
import LocationPageTemplate from "./LocationPageTemplate.jsx";

export default function BhopalDigitalMarketingAgency() {
  return (
    <LocationPageTemplate
      city="Bhopal"
      region="Madhya Pradesh"
      phone="+91 99151 28354"
      neighborhoods={["Arera Colony", "Kolar Road", "MP Nagar", "Hoshangabad Road", "Shyamla Hills", "BHEL"]}
    />
  );
}
