import { Link } from "react-router-dom";
import { AdmissionFAQ } from "../../components/admissions/AdmissionFAQ";
import { DocumentChecklist } from "../../components/admissions/DocumentChecklist";
import { AdmissionsLayout, AdmissionNotice } from "../../components/admissions/AdmissionsLayout";
import { useLocalizedData } from "../../i18n/useLocalizedData";

export function DocumentsAndFAQs() {
  const { t, schoolData } = useLocalizedData();
  const d = t.admissions.docsPage;

  return (
    <AdmissionsLayout title={d.pageTitle} subtitle={d.pageSubtitle} description={d.pageDesc} activePath="/admissions/documents-faq">
      <section className="section-padding bg-white">
        <div className="container-custom grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="section-label">{d.prepLabel}</span>
            <h2 className="mb-4 text-heading-xl font-medium text-dark-900 sm:text-display-sm">{d.checklistTitle}</h2>
            <p className="mb-6 leading-relaxed text-dark-600">{d.checklistText}</p>
            <AdmissionNotice title={d.examplesNoticeTitle}>{d.examplesNoticeText}</AdmissionNotice>
          </div>
          <DocumentChecklist />
        </div>
      </section>

      <section className="section-padding bg-cream-100">
        <div className="container-custom grid gap-8 md:grid-cols-2">
          <article className="rounded-2xl border border-border-light bg-white p-6 shadow-soft sm:p-8">
            <h2 className="mb-3 text-heading-lg font-semibold text-dark-900">{d.submitTitle}</h2>
            <p className="leading-relaxed text-dark-600">{d.submitText}</p>
          </article>
          <article className="rounded-2xl border border-border-light bg-white p-6 shadow-soft sm:p-8">
            <h2 className="mb-3 text-heading-lg font-semibold text-dark-900">{d.protectTitle}</h2>
            <p className="leading-relaxed text-dark-600">{d.protectText}</p>
          </article>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto mb-9 max-w-3xl text-center">
            <span className="section-label">{d.faqLabel}</span>
            <h2 className="mb-3 text-heading-xl font-medium text-dark-900 sm:text-display-sm">{d.faqTitle}</h2>
            <p className="text-dark-600">{d.faqText}</p>
          </div>
          <div className="mx-auto max-w-4xl">
            <AdmissionFAQ />
          </div>
        </div>
      </section>

      <section className="bg-forest-800 py-14">
        <div className="container-custom">
          <div className="mb-6">
            <h2 className="mb-2 text-heading-xl font-semibold text-white">{d.needTitle}</h2>
            <p className="text-forest-100">{d.needText.replace("{school}", schoolData.name)}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link to="/admissions" className="btn-accent">{d.returnAdmissions}</Link>
            <Link to="/admissions/procedure" className="inline-flex items-center justify-center rounded-btn border border-white px-6 py-3.5 font-medium text-white transition-colors hover:bg-white/10">{d.procedureLink}</Link>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-btn border border-white px-6 py-3.5 font-medium text-white transition-colors hover:bg-white/10">{t.admissions.contactSchool}</Link>
          </div>
          <p className="mt-5 text-sm text-forest-100">
            {d.emailListed} <a className="underline underline-offset-4 hover:text-white" href={`mailto:${schoolData.email}`}>{schoolData.email}</a>
          </p>
        </div>
      </section>
    </AdmissionsLayout>
  );
}
