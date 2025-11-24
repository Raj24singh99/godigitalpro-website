import React from "react";
import LocationPageTemplate from "./LocationPageTemplate.jsx";

export default function KochiDigitalMarketingAgency() {
  return (
    <LocationPageTemplate
      city="Kochi"
      region="Kerala"
      phone="+91 99151 28354"
      neighborhoods={["Kakkanad", "Marine Drive", "Edappally", "Vyttila", "Infopark", "Panampilly Nagar"]}
    />
  );
}
