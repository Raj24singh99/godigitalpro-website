// src/App.jsx
import React, { useEffect, Suspense, lazy } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

// Layout
import Header from "./components/Header";
import Footer from "./components/Footer";

/* -------------------------
   Lazy page imports (exact paths/casing)
-------------------------- */
const LandingPage                     = lazy(() => import("./pages/LandingPage.jsx"));
const OnboardingPage                  = lazy(() => import("./pages/OnboardingPage.jsx"));
// const SignInPage                   = lazy(() => import("./pages/SignInPage.jsx"));
const ThankYou                        = lazy(() => import("./pages/ThankYou.jsx"));
const AboutUs                         = lazy(() => import("./pages/AboutUs.jsx"));

const PrivacyPolicy                   = lazy(() => import("./pages/PrivacyPolicy.jsx"));

/** ✅ Blog hub + category + post (correct folder) */
const Blogs                           = lazy(() => import("./pages/blog/Blogs.jsx"));
const BlogCategory                    = lazy(() => import("./pages/blog/BlogCategory.jsx"));
const BlogSubCategory                 = lazy(() => import("./pages/blog/BlogSubCategory.jsx"));
const BlogPost                        = lazy(() => import("./pages/blog/BlogPost.jsx"));

/** Services */
const WebsiteDevelopmentPage          = lazy(() => import("./pages/services/WebsiteDevelopmentPage.jsx"));
const SocialMediaMarketingPage        = lazy(() => import("./pages/services/SocialMediaMarketingPage.jsx"));
const BrandBuildingPage               = lazy(() => import("./pages/services/BrandBuildingPage.jsx"));
const PaidMarketingPage               = lazy(() => import("./pages/services/PaidMarketingPage.jsx"));
const MarketplacesQuickCommercePage   = lazy(() => import("./pages/services/MarketplacesQuickCommercePage.jsx"));
const SeoContentPage                  = lazy(() => import("./pages/services/SeoContentPage.jsx"));

/** Industries */
const D2CEcommercePage                = lazy(() => import("./pages/industries/D2CEcommercePage.jsx"));
const SaaSStartupsPage                = lazy(() => import("./pages/industries/SaaSStartupsPage.jsx"));
const HealthcarePage                  = lazy(() => import("./pages/industries/HealthcarePage.jsx"));
const LocalServicesPage               = lazy(() => import("./pages/industries/LocalServicesPage.jsx"));
const EdTechPage                      = lazy(() => import("./pages/industries/EdTechPage.jsx"));
const B2BServicesPage                 = lazy(() => import("./pages/industries/B2BServicesPage.jsx"));

/* Smooth scroll to top on route change */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  return null;
}

/* Small fallback to avoid blank screen while chunks load */
function LoadingFallback() {
  return (
    <div style={{ padding: 16, textAlign: "center", color: "#475569" }}>
      Loading…
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <div>
        <Header />

        {/* Wrap only page routes in Suspense */}
        <Suspense fallback={<LoadingFallback />}>
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

            {/* ✅ Blog */}
            <Route path="/blog" element={<Blogs />} />
            <Route path="/blog/:category" element={<BlogCategory />} />
            <Route path="/blog/:category/sub/:subCategory" element={<BlogSubCategory />} />
            <Route path="/blog/:category/:slug" element={<BlogPost />} />
            {/* Backward-compat for old /blogs link */}
            <Route path="/blogs" element={<Navigate to="/blog" replace />} />

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
        </Suspense>

        <Footer />
      </div>
    </>
  );
}
