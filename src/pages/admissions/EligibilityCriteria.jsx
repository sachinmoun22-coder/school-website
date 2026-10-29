import { Link } from "react-router-dom";
import { ArrowRight, CircleHelp } from "lucide-react";
import { AdmissionNotice, AdmissionsLayout } from "../../components/admissions/AdmissionsLayout";

const gradeGroups = [
  ["Nursery, LKG & UKG", "Eligibility and age criteria are set by the school for the relevant session.", "Ask which date-of-birth proof and other records are required.", "Confirm with the school office"],
  ["Classes 1–5", "Class placement depends on the class applied for and the school's current policy.", "Previous-school details and records may be requested where applicable.", "Confirm with the school office"],
  ["Classes 6–8", "Eligibility depends on the student's previous education and current school policy.", "Previous class records or transfer documentation may be requested.", "Confirm with the school office"],
  ["Classes 9–10", "Class placement and continuation requirements must be checked with the school.", "Previous-school records and other documents may be applicable.", "Confirm with the school office"],
  ["Classes 11–12", "Subject/stream availability and entry requirements are determined by current school policy.", "Previous class results and transfer documents may be requested where applicable.", "Confirm with the school office"],
];

export function EligibilityCriteria() {
  return (
    <AdmissionsLayout
      title="Eligibility & Age Criteria"
      subtitle="Class Placement"
      description="Understand the factors that may affect eligibility, then confirm the current criteria directly with the school."
      activePath="/admissions/eligibility"
    >
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="section-label">Before You Apply</span>
            <h2 className="mb-4 text-heading-xl font-medium text-dark-900 sm:text-display-sm">General Eligibility</h2>
            <p className="text-body-lg leading-relaxed text-dark-600">
              Eligibility depends on the class applied for, the student's previous educational record where applicable, available seats, and the school's current admission policy. The school currently lists education from Nursery to Class 12; class-wise vacancies and requirements must still be confirmed.
            </p>
          </div>
          <AdmissionNotice title="Age criteria must be confirmed">
            <p>Age requirements may differ by class and academic session. We do not publish unverified minimum ages, cutoff dates, or class-wise age limits here. Please obtain the current official age criteria from the school office before applying.</p>
          </AdmissionNotice>
        </div>
      </section>

      <section className="section-padding bg-cream-100">
        <div className="container-custom">
          <div className="mb-8">
            <span className="section-label">Class Selection</span>
            <h2 className="text-heading-xl font-medium text-dark-900 sm:text-display-sm">General Class Guidance</h2>
            <p className="mt-3 max-w-3xl text-dark-600">Grade ranges below reflect the school's listed education span, not a guarantee of current vacancies or admission. Confirm the applicable requirements for the exact class.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border-light bg-white shadow-soft">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead className="bg-forest-800 text-white">
                <tr>
                  <th scope="col" className="p-4 font-semibold">Class or Grade</th>
                  <th scope="col" className="p-4 font-semibold">General Eligibility Information</th>
                  <th scope="col" className="p-4 font-semibold">Documents or Previous-School Requirements</th>
                  <th scope="col" className="p-4 font-semibold">Confirmation Required</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-light">
                {gradeGroups.map(([grade, eligibility, documents, confirmation]) => (
                  <tr key={grade} className="align-top even:bg-cream-50">
                    <th scope="row" className="p-4 font-semibold text-dark-900">{grade}</th>
                    <td className="p-4 leading-relaxed text-dark-600">{eligibility}</td>
                    <td className="p-4 leading-relaxed text-dark-600">{documents}</td>
                    <td className="p-4 font-medium text-forest-800">{confirmation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-dark-500">On narrow screens, scroll horizontally to read all table columns.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border-light bg-white p-6 shadow-soft sm:p-8">
            <CircleHelp className="mb-4 h-9 w-9 text-forest-700" aria-hidden="true" />
            <h2 className="mb-3 text-heading-lg font-semibold text-dark-900">Previous Education</h2>
            <p className="leading-relaxed text-dark-600">Students applying to higher classes may need previous-class records, transfer documentation, or other information as applicable. Ask the school which records to provide and whether originals need to be presented for verification.</p>
          </div>
          <div className="rounded-2xl border border-border-light bg-white p-6 shadow-soft sm:p-8">
            <h2 className="mb-4 text-heading-lg font-semibold text-dark-900">Important Eligibility Notes</h2>
            <ul className="list-disc space-y-3 pl-5 leading-relaxed text-dark-600">
              <li>Admission depends on current school policy and available seats.</li>
              <li>All documents and information must be accurate and verifiable.</li>
              <li>An entrance assessment or interaction applies only if required by the school.</li>
              <li>Final eligibility must be confirmed by the school administration.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-forest-800 py-14">
        <div className="container-custom flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <h2 className="mb-2 text-heading-lg font-semibold text-white">Need confirmation for a particular class?</h2>
            <p className="text-forest-100">Contact the school office for current age criteria, eligibility, and vacancies.</p>
          </div>
          <Link to="/contact" className="btn-accent">Contact School for Eligibility Confirmation <ArrowRight className="ml-2 h-5 w-5" /></Link>
        </div>
      </section>
    </AdmissionsLayout>
  );
}
