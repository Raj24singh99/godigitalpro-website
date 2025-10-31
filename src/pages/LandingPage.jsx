// app/frontend/src/pages/LandingPage.jsx
import React from "react";
import Hero from "../components/Hero";
import TrustPillars from "../components/TrustPillars";
import GrowthEngine from "../components/GrowthEngine"; // <-- fixed
import Services from "../components/Services";
import GrowthJourney from "../components/GrowthJourney";
import BusinessTypes from "../components/BusinessTypes";
import Plans from "../components/PlansSection";
import Testimonials from "../components/Testimonials";
import FinalCTA from "../components/FinalCTA";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <TrustPillars />
      <GrowthEngine />
      <Services />
      <GrowthJourney />
      <BusinessTypes />
      <Plans />
      <Testimonials />
      {/* Single CTA block (remove the duplicate custom section) */}
      <FinalCTA />
    </>
  );
}
