import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { AdmissionNotice, AdmissionsContactActions, AdmissionsLayout } from "../../components/admissions/AdmissionsLayout";
import { useLocalizedData } from "../../i18n/useLocalizedData";

export function AdmissionProcedure() {
  const { t } = useLocalizedData();
  const p = t.admissions.procedure;

  return (
    <AdmissionsLayout title={p.pageTitle} subtitle={p.pageSubtitle} description={p.pageDesc} activePath="/admissions/procedure">
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="section-label">{p.processLabel}</span>
            <h2 className="mb-4 text-heading-xl font-medium text-dark-900 sm:text-display-sm">{p.journeyTitle}</h2>
            <p className="leading-relaxed text-dark-600">{p.journeyText}</p>
          </div>
          <ol className="mx-auto max-w-4xl space-y-4">
            {(p.steps || []).map((step, index) => (
              <li key={index} className="relative flex gap-4 sm:gap-6">
                {index < p.steps.length - 1 && <span aria-hidden="true" className="absolute bottom-0 left-5 top-12 w-px bg-forest-200 sm:left-6" />}
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest-800 font-semibold text-white sm:h-12 sm:w-12">{index + 1}</span>
                <div className="mb-2 flex-1 rounded-xl border border-border-light bg-white p-5 shadow-soft">
                  <h3 className="mb-2 text-heading-sm font-semibold text-dark-900">{step.title}</h3>
                  <p className="leading-relaxed text-dark-600">{step.text}</p>
                  {step.href && <Link to={step.href} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-forest-700 hover:text-forest-900">{step.link} <ArrowRight className="h-4 w-4" /></Link>}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-padding bg-cream-100">
        <div className="container-custom grid gap-10 lg:grid-cols-2">
          <div>
            <span className="section-label">{p.preparedLabel}</span>
            <h2 className="mb-6 text-heading-xl font-medium text-dark-900 sm:text-display-sm">{p.checklistTitle}</h2>
            <ul className="space-y-3">
              {(p.checklist || []).map((item, i) => (
                <li key={i} className="flex gap-3 rounded-xl border border-border-light bg-white p-4 text-dark-700">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-forest-700" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-5">
            <AdmissionNotice title={p.noticeTitle}>
              <p>{p.noticeText}</p>
            </AdmissionNotice>
            <div className="rounded-2xl border border-border-light bg-white p-6">
              <h2 className="mb-3 text-heading-md font-semibold text-dark-900">{p.instructionsTitle}</h2>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-dark-600">
                {(p.instructions || []).map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <h2 className="mb-2 text-heading-lg font-semibold text-dark-900">{p.checkReqTitle}</h2>
            <p className="text-dark-600">{p.checkReqText}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link to="/admissions/documents-faq" className="btn-primary">{p.docsFaqCta}</Link>
          </div>
        </div>
        <div className="container-custom mt-6">
          <AdmissionsContactActions includeOverview />
        </div>
      </section>
    </AdmissionsLayout>
  );
}
