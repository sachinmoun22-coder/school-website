import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useSiteText } from "../i18n/useSiteText";

export function Breadcrumb({ pathname }) {
  const t = useSiteText();
  const items = useMemo(() => {
    const b = t.breadcrumb;
    const home = { label: b.home, path: "/" };
    const map = {
      "/": [home],
      "/about": [home, { label: b.about, path: "/about" }],
      "/academics": [home, { label: b.academics, path: "/academics" }],
      "/facilities": [home, { label: b.facilities, path: "/facilities" }],
      "/achievements": [home, { label: b.achievements, path: "/achievements" }],
      "/gallery": [home, { label: b.gallery, path: "/gallery" }],
      "/admissions": [home, { label: b.admissions, path: "/admissions" }],
      "/admissions/procedure": [home, { label: b.admissions, path: "/admissions" }, { label: b.admissionProcedure, path: "/admissions/procedure" }],
      "/admissions/eligibility": [home, { label: b.admissions, path: "/admissions" }, { label: b.eligibility, path: "/admissions/eligibility" }],
      "/admissions/fee-structure": [home, { label: b.admissions, path: "/admissions" }, { label: b.feeStructure, path: "/admissions/fee-structure" }],
      "/admissions/documents-faq": [home, { label: b.admissions, path: "/admissions" }, { label: b.documentsFaq, path: "/admissions/documents-faq" }],
      "/news": [home, { label: b.news, path: "/news" }],
      "/contact": [home, { label: b.contact, path: "/contact" }],
    };
    return map[pathname] || [home];
  }, [pathname, t]);

  return (
    <nav
      aria-label="Breadcrumb"
      className="px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto mb-2 sm:mb-4"
    >
      <ol className="flex flex-wrap items-center gap-1 text-xs sm:text-sm text-dark-500" role="list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1 sm:gap-2">
              <Link
                to={item.path}
                aria-current={isLast ? "page" : undefined}
                className={`transition-colors ${
                  isLast
                    ? "text-dark-900 font-medium"
                    : "text-dark-400 hover:text-forest-600"
                }`}
              >
                {item.label}
              </Link>
              {!isLast && (
                <span className="text-dark-300 mx-0.5 sm:mx-1" aria-hidden="true">
                  &rsaquo;
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
