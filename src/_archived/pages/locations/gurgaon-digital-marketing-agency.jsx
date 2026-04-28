import React from "react";
import LocationPageTemplate from "./LocationPageTemplate.jsx";

export default function GurgaonDigitalMarketingAgency() {
  return (
    <LocationPageTemplate
      city="Gurgaon"
      region="NCR"
      phone="+91 99151 28354"
      neighborhoods={["Cyber City", "Golf Course Road", "MG Road", "Sohna Road", "DLF Phase 1-5", "Udyog Vihar"]}
    />
  );
}
