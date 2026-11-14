import { BrowserRouter, Routes, Route, useLocation, Navigate, Link } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useLocalizedData } from "./i18n/useLocalizedData";

const Home = lazy(() => import("./pages/Home").then((m) => ({ default: m.Home })));
const About = lazy(() => import("./pages/About").then((m) => ({ default: m.About })));
const Academics = lazy(() => import("./pages/Academics").then((m) => ({ default: m.Academics })));
const Facilities = lazy(() => import("./pages/Facilities").then((m) => ({ default: m.Facilities })));
const Achievements = lazy(() => import("./pages/Achievements").then((m) => ({ default: m.Achievements })));
const Gallery = lazy(() => import("./pages/Gallery").then((m) => ({ default: m.Gallery })));
const AdmissionOverview = lazy(() => import("./pages/admissions/AdmissionOverview").then((m) => ({ default: m.AdmissionOverview })));
const AdmissionProcedure = lazy(() => import("./pages/admissions/AdmissionProcedure").then((m) => ({ default: m.AdmissionProcedure })));
const EligibilityCriteria = lazy(() => import("./pages/admissions/EligibilityCriteria").then((m) => ({ default: m.EligibilityCriteria })));
const FeeStructure = lazy(() => import("./pages/admissions/FeeStructure").then((m) => ({ default: m.FeeStructure })));
const DocumentsAndFAQs = lazy(() => import("./pages/admissions/DocumentsAndFAQs").then((m) => ({ default: m.DocumentsAndFAQs })));
const News = lazy(() => import("./pages/News").then((m) => ({ default: m.News })));
const Contact = lazy(() => import("./pages/Contact").then((m) => ({ default: m.Contact })));
const Chatbot = lazy(() => import("./components/Chatbot").then((m) => ({ default: m.Chatbot })));
const FloatingContactBar = lazy(() => import("./components/FloatingContactBar").then((m) => ({ default: m.FloatingContactBar })));

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (hash) {
        const target = document.getElementById(decodeURIComponent(hash.slice(1)));
        if (target) {
          target.scrollIntoView({ behavior: reducedMotion ? "instant" : "smooth", block: "start" });
          return;
        }
      }

      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}

function RouteFallback() {
  const { t } = useLocalizedData();
  return (
    <div className="flex min-h-[40vh] items-center justify-center px-4 py-16" aria-live="polite">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-forest-200 border-t-forest-700" aria-label={t.common.loading} />
    </div>
  );
}

function NotFound() {
  const { t } = useLocalizedData();
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream-100">
      <div className="text-center px-4">
        <h1 className="text-9xl font-heading font-bold text-forest-200 mb-4">404</h1>
        <h2 className="text-3xl font-heading font-semibold text-dark-900 mb-4">{t.common.notFoundTitle}</h2>
        <p className="text-dark-600 mb-8 max-w-md mx-auto">{t.common.notFoundText}</p>
        <Link to="/" className="btn-primary inline-flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {t.common.backHome}
        </Link>
      </div>
    </div>
  );
}

function AppShell() {
  const { t } = useLocalizedData();
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-cream-50 via-white to-cream-50">
        <a
          href="#main-content"
          className="sr-only fixed left-4 top-4 z-[100] rounded-lg bg-white px-4 py-3 font-semibold text-forest-900 shadow-card focus:not-sr-only focus:outline-none focus:ring-2 focus:ring-forest-600"
        >
          {t.common.skipToMain}
        </a>
        <Header />
        <main id="main-content" tabIndex="-1" className="flex-1 pb-16 pt-[65px] sm:pt-[105px] md:pt-[109px]">
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/admissions" element={<AdmissionOverview />} />
              <Route path="/admissions/procedure" element={<AdmissionProcedure />} />
              <Route path="/admissions/eligibility" element={<EligibilityCriteria />} />
              <Route path="/admissions/fee-structure" element={<FeeStructure />} />
              <Route path="/admissions/documents-faq" element={<DocumentsAndFAQs />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admission" element={<Navigate to="/admissions" replace />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <Suspense fallback={null}>
          <Chatbot />
          <FloatingContactBar />
        </Suspense>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

export default App;