import React from "react";
import LocationPageTemplate from "./LocationPageTemplate.jsx";

export default function HyderabadDigitalMarketingAgency() {
  return (
    <LocationPageTemplate
      city="Hyderabad"
      region="Telangana"
      phone="+91 99151 28354"
      neighborhoods={["Hitech City", "Gachibowli", "Kondapur", "Jubilee Hills", "Banjara Hills", "Madhapur"]}
    />
  );
}
