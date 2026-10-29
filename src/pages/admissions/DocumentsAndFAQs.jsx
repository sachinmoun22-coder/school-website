import { Link } from "react-router-dom";
import { AdmissionFAQ } from "../../components/admissions/AdmissionFAQ";
import { DocumentChecklist } from "../../components/admissions/DocumentChecklist";
import { AdmissionsLayout, AdmissionNotice } from "../../components/admissions/AdmissionsLayout";
import { schoolData } from "../../data/schoolData";

export function DocumentsAndFAQs() {
  return (
    <AdmissionsLayout
      title="Required Documents & FAQs"
      subtitle="Prepare with Confidence"
      description="Use this checklist as a planning aid. The school office will confirm the documents required for each student's application."
      activePath="/admissions/documents-faq"
    >
      <section className="section-padding bg-white">
        <div className="container-custom grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="section-label">Application Preparation</span>
            <h2 className="mb-4 text-heading-xl font-medium text-dark-900 sm:text-display-sm">Document Checklist</h2>
            <p className="mb-6 leading-relaxed text-dark-600">
              These are common examples that a school may request. They are not confirmed requirements for every class or student. Check the current official list with the school before preparing or submitting documents.
            </p>
            <AdmissionNotice title="Examples only—not an official document list">
              The required documents may vary by class, previous schooling, and the school's current process. The school office will confirm which items apply.
            </AdmissionNotice>
          </div>
          <DocumentChecklist />
        </div>
      </section>

      <section className="section-padding bg-cream-100">
        <div className="container-custom grid gap-8 md:grid-cols-2">
          <article className="rounded-2xl border border-border-light bg-white p-6 shadow-soft sm:p-8">
            <h2 className="mb-3 text-heading-lg font-semibold text-dark-900">Document Submission Instructions</h2>
            <p className="leading-relaxed text-dark-600">
              Ensure documents are accurate, legible, and submitted in the format requested by the school. Do not send original documents unless the school asks for them. Original-document verification may be required where applicable; confirm the process with the school office.
            </p>
          </article>
          <article className="rounded-2xl border border-border-light bg-white p-6 shadow-soft sm:p-8">
            <h2 className="mb-3 text-heading-lg font-semibold text-dark-900">Keep your information protected</h2>
            <p className="leading-relaxed text-dark-600">
              Submit personal documents only through the school's approved channel. The checklist selections remain in this page's temporary state and are not submitted or saved by this website.
            </p>
          </article>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto mb-9 max-w-3xl text-center">
            <span className="section-label">Helpful Answers</span>
            <h2 className="mb-3 text-heading-xl font-medium text-dark-900 sm:text-display-sm">Frequently Asked Questions</h2>
            <p className="text-dark-600">Answers that depend on the current school policy should always be confirmed with the school office.</p>
          </div>
          <div className="mx-auto max-w-4xl">
            <AdmissionFAQ />
          </div>
        </div>
      </section>

      <section className="bg-forest-800 py-14">
        <div className="container-custom">
          <div className="mb-6">
            <h2 className="mb-2 text-heading-xl font-semibold text-white">Need more information?</h2>
            <p className="text-forest-100">Contact {schoolData.name} for current admission guidance.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link to="/admissions" className="btn-accent">Return to Admissions</Link>
            <Link to="/admissions/procedure" className="inline-flex items-center justify-center rounded-btn border border-white px-6 py-3.5 font-medium text-white transition-colors hover:bg-white/10">Admission Procedure</Link>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-btn border border-white px-6 py-3.5 font-medium text-white transition-colors hover:bg-white/10">Contact School</Link>
          </div>
          <p className="mt-5 text-sm text-forest-100">
            Email listed on this website: <a className="underline underline-offset-4 hover:text-white" href={`mailto:${schoolData.email}`}>{schoolData.email}</a>
          </p>
          {!schoolData.phoneVerified && (
            <p className="mt-2 text-xs text-forest-200">The phone number is pending verification; please confirm it through the school before relying on it.</p>
          )}
        </div>
      </section>
    </AdmissionsLayout>
  );
}
