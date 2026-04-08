// src/App.jsx
import React, { useEffect, Suspense, lazy } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

// Layout
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

/* -------------------------
   Lazy page imports (exact paths/casing)
-------------------------- */
const LandingPage                     = lazy(() => import("./pages/LandingPage.jsx"));
const OnboardingPage                  = lazy(() => import("./pages/OnboardingPage.jsx"));
const ThankYou                        = lazy(() => import("./pages/ThankYou.jsx"));
const AboutUs                         = lazy(() => import("./pages/AboutUs.jsx"));
const PrivacyPolicy                   = lazy(() => import("./pages/PrivacyPolicy.jsx"));
const InstagramCallback               = lazy(() => import("./pages/app/automatedsocialmediamanager/InstagramCallback.jsx"));
const Login                           = lazy(() => import("./pages/app/Login.jsx"));
const Signup                          = lazy(() => import("./pages/app/Signup.jsx"));
const ForgotPassword                  = lazy(() => import("./pages/app/ForgotPassword.jsx"));
const Dashboard                       = lazy(() => import("./pages/app/Dashboard.jsx"));
const BudgetAutomation                = lazy(() => import("./pages/app/budgetautomation/BudgetAutomation.jsx"));
const SavedDatasets                   = lazy(() => import("./pages/app/budgetautomation/SavedDatasets.jsx"));
const AutomatedSocialMediaManager     = lazy(() => import("./pages/app/automatedsocialmediamanager/AutomatedSocialMediaManager.jsx"));

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
const VideoAdProductionPage           = lazy(() => import("./pages/services/VideoAdProductionPage.jsx"));
const SeoContentPage                  = lazy(() => import("./pages/services/SeoContentPage.jsx"));

/** Industries */
const EdTechPage                      = lazy(() => import("./pages/industries/EdTechPage.jsx"));

const ADSENSE_SRC =
  "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4476024557138765";

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

function AdSenseLoader() {
  const { pathname } = useLocation();

  useEffect(() => {
    const shouldLoad = pathname.startsWith("/blog");
    const existing = document.querySelector('script[data-adsense="true"]');

    if (shouldLoad) {
      if (!existing) {
        const script = document.createElement("script");
        script.async = true;
        script.src = ADSENSE_SRC;
        script.crossOrigin = "anonymous";
        script.dataset.adsense = "true";
        document.head.appendChild(script);
      }
    } else if (existing) {
      existing.remove();
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
  const location = useLocation();
  const isAppRoute =
    location.pathname.startsWith("/dashboard") ||
    location.pathname.startsWith("/app/") ||
    ["/login", "/signup", "/forgot-password"].includes(location.pathname);

  return (
    <>
      <ScrollToTop />
      <AdSenseLoader />
      <div>
        {!isAppRoute && <Header />}

        {/* Wrap only page routes in Suspense */}
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            {/* Public */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/onboarding" element={<OnboardingPage />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/learn/*" element={<Navigate to="/" replace />} />
            <Route path="/digital-products/*" element={<Navigate to="/" replace />} />
            <Route path="/tools/*" element={<Navigate to="/" replace />} />

            {/* About */}
            <Route path="/about_us" element={<AboutUs />} />
            <Route path="/about" element={<Navigate to="/about_us" replace />} />

            {/* Company */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

            {/* App */}
            <Route path="/app" element={<Navigate to="/" replace />} />
            <Route path="/app/instagram/callback" element={<InstagramCallback />} />
            <Route path="/app/budget-automation" element={<Navigate to="/dashboard/budget-automation" replace />} />
            <Route path="/app/datasets" element={<Navigate to="/dashboard/datasets" replace />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/budget-automation"
              element={
                <ProtectedRoute>
                  <BudgetAutomation />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/automated-social-media-manager"
              element={
                <ProtectedRoute>
                  <AutomatedSocialMediaManager />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/datasets"
              element={
                <ProtectedRoute>
                  <SavedDatasets />
                </ProtectedRoute>
              }
            />

            {/* ✅ Blog */}
            <Route path="/blog" element={<Blogs />} />
            <Route path="/blog/category/:category" element={<BlogCategory />} />
            <Route path="/blog/category/:category/sub/:subCategory" element={<BlogSubCategory />} />
            <Route path="/blog/:category/sub/:subCategory" element={<BlogSubCategory />} />
            <Route path="/blog/:category/:slug" element={<BlogPost />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            {/* Backward-compat for old /blogs link */}
            <Route path="/blogs" element={<Navigate to="/blog" replace />} />

            {/* Services */}
            <Route path="/services/website-development" element={<WebsiteDevelopmentPage />} />
            <Route path="/services/social-media-marketing" element={<SocialMediaMarketingPage />} />
            <Route path="/services/brand-building" element={<BrandBuildingPage />} />
            <Route path="/services/paid-marketing" element={<PaidMarketingPage />} />
            <Route path="/services/video-ad-production" element={<VideoAdProductionPage />} />
            <Route path="/services/marketplaces" element={<Navigate to="/services/video-ad-production" replace />} />
            <Route path="/services/seo-content" element={<SeoContentPage />} />

            {/* Industries */}
            <Route path="/industries/edtech" element={<EdTechPage />} />
            <Route path="/industries/:industry" element={<Navigate to="/" replace />} />

            {/* Redirected legacy routes */}
            <Route path="/digital-marketing-agency-near-me" element={<Navigate to="/" replace />} />
            <Route path="/best-digital-marketing-agency" element={<Navigate to="/" replace />} />
            <Route path="/best-google-ads-agency" element={<Navigate to="/" replace />} />
            <Route path="/best-digital-marketing-agency-for-startups" element={<Navigate to="/" replace />} />
            <Route path="/locations/:slug" element={<Navigate to="/" replace />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>

        {!isAppRoute && <Footer />}
      </div>
    </>
  );
}
