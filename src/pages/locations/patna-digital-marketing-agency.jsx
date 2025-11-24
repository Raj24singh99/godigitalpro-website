import React from "react";
import LocationPageTemplate from "./LocationPageTemplate.jsx";

export default function PatnaDigitalMarketingAgency() {
  return (
    <LocationPageTemplate
      city="Patna"
      region="Bihar"
      phone="+91 99151 28354"
      neighborhoods={["Kankarbagh", "Boring Road", "Bailey Road", "Patliputra", "Danapur", "Rajendra Nagar"]}
    />
  );
}
