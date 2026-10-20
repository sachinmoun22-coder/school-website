import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, BookOpen, GraduationCap } from "lucide-react";
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
      {/* Top Information Bar - always visible, separate from navbar */}
      <div className="bg-navy-950 text-navy-100 py-2 px-4 sm:px-6 lg:px-8 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-secondary-400" />
              <span>{schoolData.name}</span>
            </span>
            <span className="text-navy-300 hidden md:inline">|</span>
            <span className="flex items-center gap-1.5 text-navy-300">
              <BookOpen className="w-4 h-4" />
              <span>{schoolData.location}</span>
            </span>
            <span className="text-navy-300 hidden md:inline">|</span>
            <a
              href={`mailto:${schoolData.email}`}
              className="flex items-center gap-1.5 text-navy-300 hover:text-secondary-400 transition-colors"
            >
              {schoolData.email}
            </a>
          </div>
        </div>
      </div>

      {/* Sticky Navigation Header - always on top, separate from top bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-navy-950/95 backdrop-blur-sm shadow-md border-b border-navy-100"
            : "bg-navy-950/95 backdrop-blur-sm border-b border-navy-100"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 sm:h-18">
            <Link to="/" className="flex items-center gap-3" aria-label="Go to homepage">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center shadow-lg">
                <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl sm:text-2xl font-bold text-navy-900 leading-tight">
                  {schoolData.shortName}
                </h1>
                <p className="text-xs text-navy-500 leading-none">Matour, Kaithal, Haryana</p>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative py-2 text-sm font-medium transition-colors text-white ${
                    location.pathname === link.path
                      ? "text-primary-400"
                      : "text-navy-300 hover:text-primary-400"
                  }`}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-400 to-secondary-300 rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            <button
              className="md:hidden p-2 rounded-lg text-navy-300 hover:bg-navy-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}