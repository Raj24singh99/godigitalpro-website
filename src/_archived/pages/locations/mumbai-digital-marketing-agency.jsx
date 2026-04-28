import React from "react";
import LocationPageTemplate from "./LocationPageTemplate.jsx";

export default function MumbaiDigitalMarketingAgency() {
  return (
    <LocationPageTemplate
      city="Mumbai"
      region="MMR"
      phone="+91 99151 28354"
      neighborhoods={["Bandra", "Andheri", "Powai", "Navi Mumbai", "Worli", "Lower Parel"]}
    />
  );
}
