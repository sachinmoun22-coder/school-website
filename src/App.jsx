import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Academics } from "./pages/Academics";
import { Facilities } from "./pages/Facilities";
import { Achievements } from "./pages/Achievements";
import { Gallery } from "./pages/Gallery";
import { AdmissionOverview } from "./pages/admissions/AdmissionOverview";
import { AdmissionProcedure } from "./pages/admissions/AdmissionProcedure";
import { EligibilityCriteria } from "./pages/admissions/EligibilityCriteria";
import { FeeStructure } from "./pages/admissions/FeeStructure";
import { DocumentsAndFAQs } from "./pages/admissions/DocumentsAndFAQs";
import { News } from "./pages/News";
import { Contact } from "./pages/Contact";
import { Chatbot } from "./components/Chatbot";
import { motion, AnimatePresence } from "framer-motion";

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

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream-100">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center px-4"
      >
        <h1 className="text-9xl font-heading font-bold text-forest-200 mb-4">404</h1>
        <h2 className="text-3xl font-heading font-semibold text-dark-900 mb-4">Page Not Found</h2>
        <p className="text-dark-600 mb-8 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <a href="/" className="btn-primary inline-flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </a>
      </motion.div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-cream-100">
        <a
          href="#main-content"
          className="sr-only fixed left-4 top-4 z-[100] rounded-lg bg-white px-4 py-3 font-semibold text-forest-900 shadow-card focus:not-sr-only focus:outline-none focus:ring-2 focus:ring-forest-600"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" tabIndex="-1" className="flex-1 pb-16 pt-[65px] sm:pt-[105px] md:pt-[109px]">
          <AnimatePresence mode="wait">
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
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </BrowserRouter>
  );
}

export default App;