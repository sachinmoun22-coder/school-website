import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { AdmissionNotice, AdmissionsContactActions, AdmissionsLayout } from "../../components/admissions/AdmissionsLayout";

const steps = [
  ["Admission Enquiry", "Contact the school office to ask about admissions, class availability, the academic session, and current requirements."],
  ["Obtain the Application Form", "Obtain the official admission application form using the method currently approved by the school."],
  ["Complete the Application", "Provide the student's personal details, parent or guardian details, previous-school information where applicable, and other information requested on the official form."],
  ["Prepare Required Documents", "Gather the documents requested for the student's class and circumstances. See the document examples and FAQs for guidance.", "/admissions/documents-faq"],
  ["Submit the Application", "Submit the completed form and supporting documents through the school's approved process."],
  ["Verification and Interaction", "The school may verify documents or arrange an interaction or assessment where applicable. An entrance examination is not assumed for every student."],
  ["Admission Confirmation", "The school communicates its admission decision and explains any remaining formalities."],
  ["Complete Formalities", "Complete applicable fee payment, registration, and other formalities only as confirmed by the school."],
  ["Prepare for School", "Follow instructions from the school about the start date, timetable, uniform, books, and other arrangements, where applicable."],
];

const checklist = [
  "Ask about vacancies for the class and academic session.",
  "Request the current official application form and instructions.",
  "Confirm age criteria and class eligibility with the school.",
  "Check which supporting documents are required for your child.",
  "Keep copies and submit documents only through the approved process.",
  "Confirm the admission decision, fees, and next steps with the school office.",
];

export function AdmissionProcedure() {
  return (
    <AdmissionsLayout
      title="Admission Procedure"
      subtitle="A Step-by-Step Guide"
      description="Use this general guide to prepare for an admission enquiry. The school's current official process takes precedence."
      activePath="/admissions/procedure"
    >
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="section-label">The Process</span>
            <h2 className="mb-4 text-heading-xl font-medium text-dark-900 sm:text-display-sm">Your Admission Journey</h2>
            <p className="leading-relaxed text-dark-600">The sequence below explains common steps. Confirm the application method, timings, and any class-specific requirements with the school office.</p>
          </div>
          <ol className="mx-auto max-w-4xl space-y-4">
            {steps.map(([title, detail, href], index) => (
              <li key={title} className="relative flex gap-4 sm:gap-6">
                {index < steps.length - 1 && <span aria-hidden="true" className="absolute bottom-0 left-5 top-12 w-px bg-forest-200 sm:left-6" />}
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest-800 font-semibold text-white sm:h-12 sm:w-12">{index + 1}</span>
                <div className="mb-2 flex-1 rounded-xl border border-border-light bg-white p-5 shadow-soft">
                  <h3 className="mb-2 text-heading-sm font-semibold text-dark-900">{title}</h3>
                  <p className="leading-relaxed text-dark-600">{detail}</p>
                  {href && <Link to={href} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-forest-700 hover:text-forest-900">View document guidance <ArrowRight className="h-4 w-4" /></Link>}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-padding bg-cream-100">
        <div className="container-custom grid gap-10 lg:grid-cols-2">
          <div>
            <span className="section-label">Be Prepared</span>
            <h2 className="mb-6 text-heading-xl font-medium text-dark-900 sm:text-display-sm">Admission Checklist</h2>
            <ul className="space-y-3">
              {checklist.map((item) => (
                <li key={item} className="flex gap-3 rounded-xl border border-border-light bg-white p-4 text-dark-700">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-forest-700" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-5">
            <AdmissionNotice title="General admission guide">
              <p>This page describes a general process, not a confirmed official schedule. Please verify every step, current requirements, and availability with the school's administration.</p>
            </AdmissionNotice>
            <div className="rounded-2xl border border-border-light bg-white p-6">
              <h2 className="mb-3 text-heading-md font-semibold text-dark-900">Important Instructions for Parents</h2>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-dark-600">
                <li>Use the school's current official application form and follow its submission instructions.</li>
                <li>Provide complete, accurate information and ask the office if anything is unclear.</li>
                <li>Do not assume a seat, admission date, assessment, or fee until confirmed by the school.</li>
                <li>Keep the school's confirmation and any submitted-document records for your reference.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <h2 className="mb-2 text-heading-lg font-semibold text-dark-900">Check the requirements for your child</h2>
            <p className="text-dark-600">Review eligibility and the document examples before contacting the school.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link to="/admissions/documents-faq" className="btn-primary">Required Documents & FAQs</Link>
          </div>
        </div>
        <div className="container-custom mt-6">
          <AdmissionsContactActions includeOverview />
        </div>
      </section>
    </AdmissionsLayout>
  );
}
