import React from "react";
import LocationPageTemplate from "./LocationPageTemplate.jsx";

export default function AhmedabadDigitalMarketingAgency() {
  return (
    <LocationPageTemplate
      city="Ahmedabad"
      region="Gujarat"
      phone="+91 99151 28354"
      neighborhoods={["SG Highway", "Prahlad Nagar", "Bodakdev", "Satellite", "Bopal", "Navrangpura"]}
    />
  );
}
