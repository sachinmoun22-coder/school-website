import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MapPin, Phone, Mail, ChevronDown } from "lucide-react";
import { admissionPages } from "../data/admissions";
import { navLinks, schoolData } from "../data/schoolData";

const hiddenNavPaths = new Set(["/achievements", "/news"]);
const headerNavLinks = navLinks.filter((link) => !hiddenNavPaths.has(link.path));

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [menuState, setMenuState] = useState({
    mobileOpen: false,
    admissionsOpen: false,
    pathname: location.pathname,
  });
  const sameMenuPath = menuState.pathname === location.pathname;
  const isOpen = sameMenuPath && menuState.mobileOpen;
  const admissionsOpen = sameMenuPath && menuState.admissionsOpen;
  const updateMenuState = useCallback((key, nextValue) => {
    setMenuState((current) => {
      const isCurrentPath = current.pathname === location.pathname;
      const currentValue = isCurrentPath ? current[key] : false;
      return {
        pathname: location.pathname,
        mobileOpen: isCurrentPath ? current.mobileOpen : false,
        admissionsOpen: isCurrentPath ? current.admissionsOpen : false,
        [key]: typeof nextValue === "function" ? nextValue(currentValue) : nextValue,
      };
    });
  }, [location.pathname]);
  const setIsOpen = useCallback((nextValue) => updateMenuState("mobileOpen", nextValue), [updateMenuState]);
  const setAdmissionsOpen = useCallback((nextValue) => updateMenuState("admissionsOpen", nextValue), [updateMenuState]);
  const admissionsMenuRef = useRef(null);
  const mobileAdmissionsMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen && !admissionsOpen) return;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        setAdmissionsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, admissionsOpen, setIsOpen, setAdmissionsOpen]);

  useEffect(() => {
    if (!admissionsOpen) return;
    const handlePointerDown = (event) => {
      if (
        !admissionsMenuRef.current?.contains(event.target)
        && !mobileAdmissionsMenuRef.current?.contains(event.target)
      ) {
        setAdmissionsOpen(false);
      }
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [admissionsOpen, setAdmissionsOpen]);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", isOpen);
    return () => document.body.classList.remove("mobile-menu-open");
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

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
            <a
              href={`tel:+91${schoolData.phone}`}
              className="hidden shrink-0 items-center gap-1.5 whitespace-nowrap text-forest-300 transition-colors hover:text-accent-400 lg:flex"
              aria-label={`Call the school at +91 ${schoolData.phone}`}
            >
              <Phone className="w-4 h-4" />
              <span>+91 {schoolData.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <nav
        aria-label="Main navigation"
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-white/98 backdrop-blur-md shadow-nav border-b border-border-light"
            : "bg-white border-b border-border-light"
        }`}
      >
        <div className="container-custom">
          <div className="flex h-16 items-center justify-between gap-2 sm:h-[4.5rem] sm:gap-3">
            <Link to="/" className="flex shrink-0 items-center gap-2 sm:gap-3" aria-label="Go to homepage">
              <div className="h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-forest-900 shadow-soft sm:h-12 sm:w-12">
                <img
                  src="/images/website%20logo.png"
                  alt={schoolData.shortName}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="hidden shrink-0 sm:block">
                <h1 className="whitespace-nowrap text-base font-heading font-semibold leading-tight text-dark-900 sm:text-lg lg:text-xl">
                  {schoolData.shortName}
                </h1>
                <p className="whitespace-nowrap text-[10px] leading-normal text-dark-400 sm:text-xs">{schoolData.tagline}</p>
              </div>
            </Link>

            <div className="hidden min-w-0 flex-1 items-center justify-center gap-[clamp(0.25rem,0.5vw,0.75rem)] overflow-visible lg:flex">
              {headerNavLinks.map((link) => (
                link.path === "/admissions" ? (
                  <div
                    key={link.path}
                    ref={admissionsMenuRef}
                    className="relative"
                    onMouseEnter={() => setAdmissionsOpen(true)}
                    onMouseLeave={() => setAdmissionsOpen(false)}
                  >
                    <button
                      type="button"
                      aria-expanded={admissionsOpen}
                      aria-controls="desktop-admissions-menu"
                      onClick={() => setAdmissionsOpen((open) => !open)}
                      className={`nav-link inline-flex items-center gap-1 whitespace-nowrap px-[clamp(0.125rem,0.2vw,0.375rem)] text-[clamp(0.75rem,0.85vw,0.875rem)] ${location.pathname.startsWith("/admissions") ? "nav-link-active" : ""}`}
                    >
                      Admissions <ChevronDown className={`h-3.5 w-3.5 transition-transform ${admissionsOpen ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {admissionsOpen && (
                        <motion.div
                          id="desktop-admissions-menu"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          className="absolute left-0 top-full z-[60] w-72 rounded-xl border border-border-light bg-white p-2 shadow-card"
                        >
                          {admissionPages.map((page) => (
                            <Link
                              key={page.path}
                              to={page.path}
                              onClick={() => setAdmissionsOpen(false)}
                              aria-current={location.pathname === page.path ? "page" : undefined}
                              className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                                location.pathname === page.path
                                  ? "bg-forest-50 text-forest-800"
                                  : "text-dark-700 hover:bg-cream-100 hover:text-forest-800"
                              }`}
                            >
                              {page.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setAdmissionsOpen(false)}
                    aria-current={location.pathname === link.path ? "page" : undefined}
                    className={`nav-link whitespace-nowrap px-[clamp(0.125rem,0.2vw,0.375rem)] text-[clamp(0.75rem,0.85vw,0.875rem)] ${location.pathname === link.path ? "nav-link-active" : ""}`}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>

            <div className="hidden shrink-0 items-center lg:flex">
              <Link
                to="/admissions"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-btn bg-forest-800 px-3 py-2 text-sm font-medium text-white shadow-soft transition-colors hover:bg-forest-900"
              >
                Admission Enquiry
              </Link>
            </div>

            <button
              className="shrink-0 rounded-lg p-2 text-dark-600 transition-colors hover:bg-cream-100 lg:hidden"
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
              className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain border-t border-border-light bg-white sm:max-h-[calc(100dvh-7rem)] md:max-h-[calc(100dvh-7.25rem)] lg:hidden"
            >
              <div className="container-custom py-6 space-y-2">
                {headerNavLinks.map((link) => (
                  link.path === "/admissions" ? (
                    <div key={link.path} ref={mobileAdmissionsMenuRef}>
                      <button
                        type="button"
                        aria-expanded={admissionsOpen}
                        aria-controls="mobile-admissions-menu"
                        onClick={() => setAdmissionsOpen((open) => !open)}
                        className={`flex w-full items-center justify-between rounded-btn px-4 py-3 text-left text-base font-medium transition-colors ${
                          location.pathname.startsWith("/admissions")
                            ? "bg-forest-50 text-forest-700"
                            : "text-dark-600 hover:bg-cream-100 hover:text-forest-700"
                        }`}
                      >
                        Admissions
                        <ChevronDown className={`h-5 w-5 transition-transform ${admissionsOpen ? "rotate-180" : ""}`} />
                      </button>
                      {admissionsOpen && (
                        <div id="mobile-admissions-menu" className="mt-1 space-y-1 border-l-2 border-forest-200 pl-3">
                          {admissionPages.map((page) => (
                            <Link
                              key={page.path}
                              to={page.path}
                              onClick={() => {
                                setAdmissionsOpen(false);
                                setIsOpen(false);
                              }}
                              aria-current={location.pathname === page.path ? "page" : undefined}
                              className={`block rounded-lg px-4 py-3 text-base font-medium ${
                                location.pathname === page.path
                                  ? "bg-forest-50 text-forest-800"
                                  : "text-dark-600 hover:bg-cream-100 hover:text-forest-700"
                              }`}
                            >
                              {page.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      aria-current={location.pathname === link.path ? "page" : undefined}
                      className={`block rounded-btn px-4 py-3 text-base font-medium transition-colors ${
                        location.pathname === link.path
                          ? "bg-forest-50 text-forest-700"
                          : "text-dark-600 hover:bg-cream-100 hover:text-forest-700"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
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
