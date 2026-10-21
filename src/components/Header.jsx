import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MapPin, Phone, Mail, BookOpen } from "lucide-react";
import { navLinks, schoolData } from "../data/schoolData";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      {/* Top Information Strip */}
      <div className="bg-forest-900 text-cream-100 py-2 px-6 sm:px-8 lg:px-10 xl:px-12 hidden sm:block">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-accent-400" />
              <span>{schoolData.location}</span>
            </span>
            <span className="text-forest-300 hidden md:inline">|</span>
            <span className="flex items-center gap-1.5 text-forest-300">
              <Phone className="w-4 h-4" />
              <span>{schoolData.phoneVerified ? schoolData.phone : "Contact number verification pending"}</span>
            </span>
            <span className="text-forest-300 hidden md:inline">|</span>
            <a
              href={`mailto:${schoolData.email}`}
              className="flex items-center gap-1.5 text-forest-300 hover:text-accent-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
              {schoolData.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/98 backdrop-blur-md shadow-nav border-b border-border-light"
            : "bg-white border-b border-border-light"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 sm:h-18">
            <Link to="/" className="flex items-center gap-3" aria-label="Go to homepage">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-forest-700 to-forest-900 flex items-center justify-center shadow-soft">
                <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl sm:text-2xl font-heading font-semibold text-dark-900 leading-tight">
                  {schoolData.shortName}
                </h1>
                <p className="text-xs text-dark-400 leading-none">{schoolData.tagline}</p>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link ${location.pathname === link.path ? "nav-link-active" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <Link to="/admissions" className="btn-primary">
                Admission Enquiry
              </Link>
            </div>

            <button
              className="lg:hidden p-2 rounded-lg text-dark-600 hover:bg-cream-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden bg-white border-t border-border-light"
            >
              <div className="container-custom py-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-3 rounded-btn text-base font-medium transition-colors ${
                      location.pathname === link.path
                        ? "bg-forest-50 text-forest-700"
                        : "text-dark-600 hover:bg-cream-100 hover:text-forest-700"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-border-light">
                  <Link to="/admissions" className="btn-primary w-full text-center">
                    Admission Enquiry
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}