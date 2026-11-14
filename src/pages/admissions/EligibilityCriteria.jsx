import { Link } from "react-router-dom";
import { ArrowRight, CircleHelp } from "lucide-react";
import { AdmissionNotice, AdmissionsLayout } from "../../components/admissions/AdmissionsLayout";
import { useLocalizedData } from "../../i18n/useLocalizedData";

export function EligibilityCriteria() {
  const { t } = useLocalizedData();
  const e = t.admissions.eligibility;

  return (
    <AdmissionsLayout title={e.pageTitle} subtitle={e.pageSubtitle} description={e.pageDesc} activePath="/admissions/eligibility">
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="section-label">{e.beforeLabel}</span>
            <h2 className="mb-4 text-heading-xl font-medium text-dark-900 sm:text-display-sm">{e.generalTitle}</h2>
            <p className="text-body-lg leading-relaxed text-dark-600">{e.generalText}</p>
          </div>
          <AdmissionNotice title={e.ageNoticeTitle}>
            <p>{e.ageNoticeText}</p>
          </AdmissionNotice>
        </div>
      </section>

      <section className="section-padding bg-cream-100">
        <div className="container-custom">
          <div className="mb-8">
            <span className="section-label">{e.classLabel}</span>
            <h2 className="text-heading-xl font-medium text-dark-900 sm:text-display-sm">{e.classTitle}</h2>
            <p className="mt-3 max-w-3xl text-dark-600">{e.classDesc}</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border-light bg-white shadow-soft">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm sm:min-w-[760px]">
              <thead className="bg-forest-800 text-white">
                <tr>
                  {(e.tableHeaders || []).map((h, i) => <th key={i} scope="col" className="p-4 font-semibold">{h}</th>)}
                </tr>
              </thead>
              <tbody className="divide-y divide-border-light">
                {(e.rows || []).map((row, i) => (
                  <tr key={i} className="align-top even:bg-cream-50">
                    <th scope="row" className="p-4 font-semibold text-dark-900">{row[0]}</th>
                    <td className="p-4 leading-relaxed text-dark-600">{row[1]}</td>
                    <td className="p-4 leading-relaxed text-dark-600">{row[2]}</td>
                    <td className="p-4 font-medium text-forest-800">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-dark-500">{e.scrollHint}</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border-light bg-white p-6 shadow-soft sm:p-8">
            <CircleHelp className="mb-4 h-9 w-9 text-forest-700" aria-hidden="true" />
            <h2 className="mb-3 text-heading-lg font-semibold text-dark-900">{e.prevEduTitle}</h2>
            <p className="leading-relaxed text-dark-600">{e.prevEduText}</p>
          </div>
          <div className="rounded-2xl border border-border-light bg-white p-6 shadow-soft sm:p-8">
            <h2 className="mb-4 text-heading-lg font-semibold text-dark-900">{e.notesTitle}</h2>
            <ul className="list-disc space-y-3 pl-5 leading-relaxed text-dark-600">
              {(e.notes || []).map((n, i) => <li key={i}>{n}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-forest-800 py-14">
        <div className="container-custom flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <h2 className="mb-2 text-heading-lg font-semibold text-white">{e.ctaTitle}</h2>
            <p className="text-forest-100">{e.ctaText}</p>
          </div>
          <Link to="/contact" className="btn-accent">{e.ctaBtn} <ArrowRight className="ml-2 h-5 w-5" /></Link>
        </div>
      </section>
    </AdmissionsLayout>
  );
}
