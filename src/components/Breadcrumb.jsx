import { Link } from "react-router-dom";

const HOME = { label: "Home", path: "/" };

const BREADCRUMBS = {
  "/": [HOME],
  "/about": [HOME, { label: "About Us", path: "/about" }],
  "/academics": [HOME, { label: "Academics", path: "/academics" }],
  "/facilities": [HOME, { label: "Facilities", path: "/facilities" }],
  "/achievements": [HOME, { label: "Achievements", path: "/achievements" }],
  "/gallery": [HOME, { label: "Gallery", path: "/gallery" }],
  "/admissions": [HOME, { label: "Admissions", path: "/admissions" }],
  "/admissions/procedure": [
    HOME,
    { label: "Admissions", path: "/admissions" },
    { label: "Admission Procedure", path: "/admissions/procedure" },
  ],
  "/admissions/eligibility": [
    HOME,
    { label: "Admissions", path: "/admissions" },
    { label: "Eligibility", path: "/admissions/eligibility" },
  ],
  "/admissions/fee-structure": [
    HOME,
    { label: "Admissions", path: "/admissions" },
    { label: "Fee Structure", path: "/admissions/fee-structure" },
  ],
  "/admissions/documents-faq": [
    HOME,
    { label: "Admissions", path: "/admissions" },
    { label: "Documents & FAQs", path: "/admissions/documents-faq" },
  ],
  "/news": [HOME, { label: "News & Notices", path: "/news" }],
  "/contact": [HOME, { label: "Contact", path: "/contact" }],
};

export function Breadcrumb({ pathname }) {
  const items = BREADCRUMBS[pathname] || [HOME];
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
