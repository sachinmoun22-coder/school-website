import { Link } from "react-router-dom";
import { PageBanner } from "../PageBanner";
import { getSEO } from "../../data/seoConfig";
import { SEOHead } from "../SEOHead";
import { Breadcrumb } from "../Breadcrumb";
import { useLocalizedData } from "../../i18n/useLocalizedData";

export function AdmissionsSubNavigation({ activePath }) {
  const { t, admissionPages } = useLocalizedData();
  return (
    <nav aria-label={t.admissions.navLabel} className="border-b border-border-light bg-white">
      <div className="container-custom grid grid-cols-1 gap-2 py-4 sm:grid-cols-2 lg:grid-cols-5">
        {admissionPages.map((page) => (
          <Link
            key={page.path}
            to={page.path}
            aria-current={activePath === page.path ? "page" : undefined}
            className={`rounded-xl border px-3 py-3 text-center text-sm font-medium leading-snug transition-colors ${
              activePath === page.path
                ? "border-forest-700 bg-forest-800 text-white shadow-soft"
                : "border-border-light bg-white text-dark-700 hover:border-forest-300 hover:bg-forest-50 hover:text-forest-800"
            }`}
          >
            {page.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export function AdmissionsLayout({ title, subtitle, description, activePath, showBanner = true, children }) {
  const seo = getSEO(activePath);
  return (
    <div className="min-h-screen">
      <SEOHead {...seo} />
      <Breadcrumb pathname={activePath} />
      {showBanner && <PageBanner title={title} subtitle={subtitle}>{description}</PageBanner>}
      <AdmissionsSubNavigation activePath={activePath} />
      {children}
    </div>
  );
}

export function AdmissionNotice({ title, children }) {
  const { t } = useLocalizedData();
  return (
    <aside className="rounded-2xl border border-accent-200 bg-accent-50 p-5 sm:p-6" role="note">
      <h3 className="mb-2 flex items-start gap-2 font-semibold text-dark-900">
        <span aria-hidden="true" className="mt-0.5 text-accent-700">!</span>
        {title || t.admissions.confirmNotice}
      </h3>
      <div className="text-sm leading-relaxed text-dark-700">{children}</div>
    </aside>
  );
}

export function AdmissionsContactActions({ includeOverview = false }) {
  const { t } = useLocalizedData();
  return (
    <div className="flex flex-col flex-wrap gap-3 sm:flex-row">
      {includeOverview && (
        <Link to="/admissions" className="btn-secondary">{t.admissions.returnOverview}</Link>
      )}
      <Link to="/contact" className="btn-primary">{t.admissions.contactSchool}</Link>
    </div>
  );
}
