import React from "react";
import LocationPageTemplate from "./LocationPageTemplate.jsx";

export default function ChandigarhDigitalMarketingAgency() {
  return (
    <LocationPageTemplate
      city="Chandigarh"
      region="Tricity"
      phone="+91 99151 28354"
      neighborhoods={["Sector 17", "Sector 35", "IT Park", "Mohali", "Panchkula", "Zirakpur"]}
    />
  );
}
