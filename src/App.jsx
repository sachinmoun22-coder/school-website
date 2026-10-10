import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Academics } from "./pages/Academics";
import { Achievements } from "./pages/Achievements";
import { Gallery } from "./pages/Gallery";
import { Admission } from "./pages/Admission";
import { Contact } from "./pages/Contact";
import { ScrollReveal } from "./components/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-navy-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center px-4"
      >
        <h1 className="text-9xl font-bold text-primary-200 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-navy-900 mb-4">Page Not Found</h2>
        <p className="text-navy-600 mb-8 max-w-md mx-auto">
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
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/admission" element={<Admission />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <ScrollReveal as="a" href="#" className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center shadow-lg hover:bg-primary-700 transition-colors opacity-0 pointer-events-none" style={{ display: 'none' }}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </ScrollReveal>
      </div>
    </BrowserRouter>
  );
}

export default App;