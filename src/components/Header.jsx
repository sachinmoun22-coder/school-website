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
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Information Strip */}
      <div className="hidden sm:block bg-forest-900 text-cream-100">
        <div className="container-custom">
          <div className="flex items-center justify-between gap-4 py-2 text-xs md:text-sm">
            <div className="flex min-w-0 items-center gap-4 md:gap-6">
              <span className="flex min-w-0 items-center gap-1.5">
                <MapPin className="w-4 h-4 shrink-0 text-accent-400" />
                <span className="truncate">{schoolData.location}</span>
              </span>
              <span className="hidden shrink-0 text-forest-300 md:inline">|</span>
              <a
                href={`mailto:${schoolData.email}`}
                className="hidden min-w-0 items-center gap-1.5 text-forest-300 transition-colors hover:text-accent-400 md:flex"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span className="truncate">{schoolData.email}</span>
              </a>
            </div>
            <span className="hidden shrink-0 items-center gap-1.5 whitespace-nowrap text-forest-300 lg:flex">
              <Phone className="w-4 h-4" />
              <span>{schoolData.phoneVerified ? schoolData.phone : "Contact number verification pending"}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-white/98 backdrop-blur-md shadow-nav border-b border-border-light"
            : "bg-white border-b border-border-light"
        }`}
      >
        <div className="container-custom">
          <div className="flex h-16 items-center justify-between gap-2 sm:h-[4.5rem] sm:gap-3">
            <Link to="/" className="flex shrink-0 items-center gap-2 sm:gap-3" aria-label="Go to homepage">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-forest-700 to-forest-900 shadow-soft sm:h-12 sm:w-12">
                <BookOpen className="h-6 w-6 text-white sm:h-7 sm:w-7" />
              </div>
              <div className="hidden shrink-0 sm:block">
                <h1 className="whitespace-nowrap text-base font-heading font-semibold leading-tight text-dark-900 sm:text-lg lg:text-xl">
                  {schoolData.shortName}
                </h1>
                <p className="whitespace-nowrap text-[10px] leading-normal text-dark-400 sm:text-xs">{schoolData.tagline}</p>
              </div>
            </Link>

            <div className="hidden min-w-0 flex-1 items-center justify-center gap-[clamp(0.25rem,0.5vw,0.75rem)] overflow-visible 2xl:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link whitespace-nowrap px-[clamp(0.125rem,0.2vw,0.375rem)] text-[clamp(0.7rem,0.8vw,0.8125rem)] ${location.pathname === link.path ? "nav-link-active" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden shrink-0 items-center 2xl:flex">
              <Link
                to="/admissions"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-btn bg-forest-800 px-3 py-2 text-xs font-medium text-white shadow-soft transition-colors hover:bg-forest-900"
              >
                Admission Enquiry
              </Link>
            </div>

            <button
              className="shrink-0 rounded-lg p-2 text-dark-600 transition-colors hover:bg-cream-100 2xl:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
              className="max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-t border-border-light bg-white sm:max-h-[calc(100dvh-6.5rem)] 2xl:hidden"
            >
              <div className="container-custom py-6 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-btn px-4 py-3 text-base font-medium transition-colors ${
                      location.pathname === link.path
                        ? "bg-forest-50 text-forest-700"
                        : "text-dark-600 hover:bg-cream-100 hover:text-forest-700"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-border-light">
                  <Link
                    to="/admissions"
                    onClick={() => setIsOpen(false)}
                    className="btn-primary w-full text-center"
                  >
                    Admission Enquiry
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
