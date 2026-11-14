import { Link } from "react-router-dom";
import { ArrowRight, CircleCheck } from "lucide-react";
import { AdmissionsLayout } from "../../components/admissions/AdmissionsLayout";
import { useLocalizedData } from "../../i18n/useLocalizedData";

function SectionEyebrow({ children }) {
  return (
    <div className="mb-4 flex items-center justify-center gap-3">
      <span aria-hidden="true" className="h-px w-8 bg-forest-300 sm:w-12" />
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-forest-700">{children}</p>
      <span aria-hidden="true" className="h-px w-8 bg-forest-300 sm:w-12" />
    </div>
  );
}

export function FeeStructure() {
  const { t } = useLocalizedData();
  const f = t.admissions.fee;

  return (
    <AdmissionsLayout title={f.pageTitle} subtitle={f.pageSubtitle} description={f.pageDesc} activePath="/admissions/fee-structure">
      <section className="section-padding bg-sage-50">
        <div className="container-custom">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <SectionEyebrow>{f.infoEyebrow}</SectionEyebrow>
            <h2 className="font-heading text-3xl font-semibold leading-tight text-forest-900 sm:text-4xl lg:text-5xl">{f.mainTitle}</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-dark-600">{f.mainText}</p>
          </div>

          <div className="grid items-start gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
            <section aria-labelledby="fee-table-heading" className="rounded-2xl border border-sage-200 bg-white p-4 shadow-soft sm:p-7">
              <SectionEyebrow>{f.feeEyebrow}</SectionEyebrow>
              <h3 id="fee-table-heading" className="mb-6 text-center font-heading text-2xl font-semibold text-forest-900 sm:text-3xl">{f.feeTitle}</h3>
              <div className="overflow-hidden rounded-xl border border-sage-200">
                <table className="w-full table-fixed border-collapse text-left">
                  <caption className="sr-only">{f.feeCaption}</caption>
                  <colgroup>
                    <col className="w-[44%]" />
                    <col className="w-[28%]" />
                    <col className="w-[28%]" />
                  </colgroup>
                  <thead className="bg-sage-100 text-forest-900">
                    <tr>
                      {(f.headers || []).map((h, i) => (
                        <th key={i} scope="col" className={i === 0 ? "px-2 py-3 text-xs font-semibold sm:px-4 sm:py-4 sm:text-sm" : "px-1.5 py-3 text-center text-xs font-semibold sm:px-3 sm:py-4 sm:text-sm"}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-sage-200">
                    {(f.stages || []).map((row, i) => (
                      <tr key={i} className="align-middle">
                        <th scope="row" className="break-words px-2 py-4 text-xs font-medium leading-snug text-dark-700 sm:px-4 sm:py-5 sm:text-sm">{row.stage}</th>
                        <td className="whitespace-nowrap px-1.5 py-4 text-center text-xs font-semibold text-forest-900 sm:px-3 sm:py-5 sm:text-sm">{row.admission}</td>
                        <td className="whitespace-nowrap px-1.5 py-4 text-center text-xs font-semibold text-forest-900 sm:px-3 sm:py-5 sm:text-sm">{row.quarterly}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm font-medium leading-relaxed text-forest-800">{f.feeNote}</p>
              <p className="mt-2 text-xs leading-relaxed text-dark-500">{f.feeWarn}</p>
            </section>

            <section aria-labelledby="required-documents-heading" className="rounded-2xl border border-sage-200 bg-white p-5 shadow-soft sm:p-7">
              <SectionEyebrow>{f.docsEyebrow}</SectionEyebrow>
              <h3 id="required-documents-heading" className="mb-6 text-center font-heading text-2xl font-semibold text-forest-900 sm:text-3xl">{f.docsTitle}</h3>
              <ul className="space-y-4">
                {(f.docs || []).map((document, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-dark-700 sm:text-base">
                    <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-forest-700 sm:h-[1.375rem] sm:w-[1.375rem]" aria-hidden="true" />
                    <span>{document}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-sage-200 pt-4 text-sm leading-relaxed text-dark-500">{f.docsGuide}</p>
            </section>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-sage-200 bg-white p-5 shadow-soft sm:flex-row sm:p-6">
            <p className="max-w-2xl text-sm leading-relaxed text-dark-600">{f.contactText}</p>
            <Link to="/contact" className="btn-primary shrink-0">{t.admissions.contactSchool} <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </div>
        </div>
      </section>
    </AdmissionsLayout>
  );
}
