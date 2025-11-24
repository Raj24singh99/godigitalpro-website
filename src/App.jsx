// src/App.jsx
import React, { useEffect, Suspense, lazy } from "react";
import { Routes, Route, useLocation, Navigate, useParams } from "react-router-dom";

// Layout
import Header from "./components/Header";
import Footer from "./components/Footer";
import { toolRoutes, comparisonRoutes } from "./pages/tools/generatedRoutes.jsx";

/* -------------------------
   Lazy page imports (exact paths/casing)
-------------------------- */
const LandingPage                     = lazy(() => import("./pages/LandingPage.jsx"));
const OnboardingPage                  = lazy(() => import("./pages/OnboardingPage.jsx"));
// const SignInPage                   = lazy(() => import("./pages/SignInPage.jsx"));
const ThankYou                        = lazy(() => import("./pages/ThankYou.jsx"));
const AboutUs                         = lazy(() => import("./pages/AboutUs.jsx"));
const ToolsHub                        = lazy(() => import("./pages/tools/ToolsHub.jsx"));
const ToolDetail                      = lazy(() => import("./pages/tools/ToolDetail.jsx"));
const ToolTag                         = lazy(() => import("./pages/tools/ToolTag.jsx"));
const ToolParamRouter                 = lazy(() => import("./pages/tools/ToolParamRouter.jsx"));
const ToolComparison                  = lazy(() => import("./pages/tools/ToolComparison.jsx"));

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

/** Locations */
const DelhiDigitalMarketingAgency     = lazy(() => import("./pages/locations/delhi-digital-marketing-agency.jsx"));
const MumbaiDigitalMarketingAgency    = lazy(() => import("./pages/locations/mumbai-digital-marketing-agency.jsx"));
const BangaloreDigitalMarketingAgency = lazy(() => import("./pages/locations/bangalore-digital-marketing-agency.jsx"));
const HyderabadDigitalMarketingAgency = lazy(() => import("./pages/locations/hyderabad-digital-marketing-agency.jsx"));
const ChennaiDigitalMarketingAgency   = lazy(() => import("./pages/locations/chennai-digital-marketing-agency.jsx"));
const KolkataDigitalMarketingAgency   = lazy(() => import("./pages/locations/kolkata-digital-marketing-agency.jsx"));
const PuneDigitalMarketingAgency      = lazy(() => import("./pages/locations/pune-digital-marketing-agency.jsx"));
const AhmedabadDigitalMarketingAgency = lazy(() => import("./pages/locations/ahmedabad-digital-marketing-agency.jsx"));
const JaipurDigitalMarketingAgency    = lazy(() => import("./pages/locations/jaipur-digital-marketing-agency.jsx"));
const SuratDigitalMarketingAgency     = lazy(() => import("./pages/locations/surat-digital-marketing-agency.jsx"));
const NoidaDigitalMarketingAgency     = lazy(() => import("./pages/locations/noida-digital-marketing-agency.jsx"));
const GurgaonDigitalMarketingAgency   = lazy(() => import("./pages/locations/gurgaon-digital-marketing-agency.jsx"));
const IndoreDigitalMarketingAgency    = lazy(() => import("./pages/locations/indore-digital-marketing-agency.jsx"));
const CoimbatoreDigitalMarketingAgency = lazy(() => import("./pages/locations/coimbatore-digital-marketing-agency.jsx"));
const KochiDigitalMarketingAgency     = lazy(() => import("./pages/locations/kochi-digital-marketing-agency.jsx"));
const LucknowDigitalMarketingAgency   = lazy(() => import("./pages/locations/lucknow-digital-marketing-agency.jsx"));
const ChandigarhDigitalMarketingAgency = lazy(() => import("./pages/locations/chandigarh-digital-marketing-agency.jsx"));
const NagpurDigitalMarketingAgency    = lazy(() => import("./pages/locations/nagpur-digital-marketing-agency.jsx"));
const BhopalDigitalMarketingAgency    = lazy(() => import("./pages/locations/bhopal-digital-marketing-agency.jsx"));
const VisakhapatnamDigitalMarketingAgency = lazy(() => import("./pages/locations/visakhapatnam-digital-marketing-agency.jsx"));
const VadodaraDigitalMarketingAgency  = lazy(() => import("./pages/locations/vadodara-digital-marketing-agency.jsx"));
const KanpurDigitalMarketingAgency    = lazy(() => import("./pages/locations/kanpur-digital-marketing-agency.jsx"));
const PatnaDigitalMarketingAgency     = lazy(() => import("./pages/locations/patna-digital-marketing-agency.jsx"));
const BhubaneswarDigitalMarketingAgency = lazy(() => import("./pages/locations/bhubaneswar-digital-marketing-agency.jsx"));
const GoaDigitalMarketingAgency       = lazy(() => import("./pages/locations/goa-digital-marketing-agency.jsx"));

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

function TagLegacyRedirect() {
  const { tag } = useParams();
  const target = `/tools/${encodeURIComponent(tag || "")}`;
  return <Navigate to={target} replace />;
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
            <Route path="/tools" element={<ToolsHub />} />
            <Route path="/tools/tag/:tag" element={<TagLegacyRedirect />} />
            <Route path="/tools/compare/:slug" element={<ToolComparison />} />
            <Route path="/tools/:param" element={<ToolParamRouter />} />
            {toolRoutes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
            {comparisonRoutes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}

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

            {/* Locations */}
            <Route path="/locations/delhi-digital-marketing-agency" element={<DelhiDigitalMarketingAgency />} />
            <Route path="/locations/mumbai-digital-marketing-agency" element={<MumbaiDigitalMarketingAgency />} />
            <Route path="/locations/bangalore-digital-marketing-agency" element={<BangaloreDigitalMarketingAgency />} />
            <Route path="/locations/hyderabad-digital-marketing-agency" element={<HyderabadDigitalMarketingAgency />} />
            <Route path="/locations/chennai-digital-marketing-agency" element={<ChennaiDigitalMarketingAgency />} />
            <Route path="/locations/kolkata-digital-marketing-agency" element={<KolkataDigitalMarketingAgency />} />
            <Route path="/locations/pune-digital-marketing-agency" element={<PuneDigitalMarketingAgency />} />
            <Route path="/locations/ahmedabad-digital-marketing-agency" element={<AhmedabadDigitalMarketingAgency />} />
            <Route path="/locations/jaipur-digital-marketing-agency" element={<JaipurDigitalMarketingAgency />} />
            <Route path="/locations/surat-digital-marketing-agency" element={<SuratDigitalMarketingAgency />} />
            <Route path="/locations/noida-digital-marketing-agency" element={<NoidaDigitalMarketingAgency />} />
            <Route path="/locations/gurgaon-digital-marketing-agency" element={<GurgaonDigitalMarketingAgency />} />
            <Route path="/locations/indore-digital-marketing-agency" element={<IndoreDigitalMarketingAgency />} />
            <Route path="/locations/coimbatore-digital-marketing-agency" element={<CoimbatoreDigitalMarketingAgency />} />
            <Route path="/locations/kochi-digital-marketing-agency" element={<KochiDigitalMarketingAgency />} />
            <Route path="/locations/lucknow-digital-marketing-agency" element={<LucknowDigitalMarketingAgency />} />
            <Route path="/locations/chandigarh-digital-marketing-agency" element={<ChandigarhDigitalMarketingAgency />} />
            <Route path="/locations/nagpur-digital-marketing-agency" element={<NagpurDigitalMarketingAgency />} />
            <Route path="/locations/bhopal-digital-marketing-agency" element={<BhopalDigitalMarketingAgency />} />
            <Route path="/locations/visakhapatnam-digital-marketing-agency" element={<VisakhapatnamDigitalMarketingAgency />} />
            <Route path="/locations/vadodara-digital-marketing-agency" element={<VadodaraDigitalMarketingAgency />} />
            <Route path="/locations/kanpur-digital-marketing-agency" element={<KanpurDigitalMarketingAgency />} />
            <Route path="/locations/patna-digital-marketing-agency" element={<PatnaDigitalMarketingAgency />} />
            <Route path="/locations/bhubaneswar-digital-marketing-agency" element={<BhubaneswarDigitalMarketingAgency />} />
            <Route path="/locations/goa-digital-marketing-agency" element={<GoaDigitalMarketingAgency />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>

        <Footer />
      </div>
    </>
  );
}
