import React, { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

// Layout
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import LandingPage from "./pages/LandingPage";
import OnboardingPage from "./pages/OnboardingPage";
// import SignInPage from "./pages/SignInPage";
import ThankYou from "./pages/ThankYou";
import AboutUs from "./pages/AboutUs";

// NEW pages
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Blogs from "./pages/Blogs";

// Services
import WebsiteDevelopmentPage from "./pages/services/WebsiteDevelopmentPage";
import SocialMediaMarketingPage from "./pages/services/SocialMediaMarketingPage";
import BrandBuildingPage from "./pages/services/BrandBuildingPage";
import PaidMarketingPage from "./pages/services/PaidMarketingPage";
import MarketplacesQuickCommercePage from "./pages/services/MarketplacesQuickCommercePage";
import SeoContentPage from "./pages/services/SeoContentPage";

// Industries
import D2CEcommercePage from "./pages/industries/D2CEcommercePage";
import SaaSStartupsPage from "./pages/industries/SaaSStartupsPage";
import HealthcarePage from "./pages/industries/HealthcarePage";
import LocalServicesPage from "./pages/industries/LocalServicesPage";
import EdTechPage from "./pages/industries/EdTechPage";
import B2BServicesPage from "./pages/industries/B2BServicesPage";

/* Smooth scroll to top on route change */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <div>
        <Header />

        <Routes>
          {/* Public */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
          {/* <Route path="/signin" element={<SignInPage />} /> */}
          <Route path="/thank-you" element={<ThankYou />} />

          {/* About */}
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/about" element={<Navigate to="/about_us" replace />} />

          {/* Company */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/blogs" element={<Blogs />} />

          {/* Services */}
          <Route path="/services/website-development" element={<WebsiteDevelopmentPage />} />
          <Route path="/services/social-media-marketing" element={<SocialMediaMarketingPage />} />
          <Route path="/services/brand-building" element={<BrandBuildingPage />} />
          <Route path="/services/paid-marketing" element={<PaidMarketingPage />} />
          <Route path="/services/marketplaces" element={<MarketplacesQuickCommercePage />} />
          <Route path="/services/seo-content" element={<SeoContentPage />} />

          {/* Industries */}
          <Route path="/industries/d2c-ecommerce" element={<D2CEcommercePage />} />
          <Route path="/industries/saas-startups" element={<SaaSStartupsPage />} />
          <Route path="/industries/healthcare" element={<HealthcarePage />} />
          <Route path="/industries/local-services" element={<LocalServicesPage />} />
          <Route path="/industries/edtech" element={<EdTechPage />} />
          <Route path="/industries/b2b-services" element={<B2BServicesPage />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}
