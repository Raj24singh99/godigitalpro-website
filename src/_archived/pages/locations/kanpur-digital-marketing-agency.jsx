import React from "react";
import LocationPageTemplate from "./LocationPageTemplate.jsx";

export default function KanpurDigitalMarketingAgency() {
  return (
    <LocationPageTemplate
      city="Kanpur"
      region="Uttar Pradesh"
      phone="+91 99151 28354"
      neighborhoods={["Swaroop Nagar", "Kakadeo", "Arya Nagar", "Panki", "Kidwai Nagar", "Shyam Nagar"]}
    />
  );
}
