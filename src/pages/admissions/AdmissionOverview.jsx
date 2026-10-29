import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, HeartHandshake, Lightbulb, ShieldCheck, Sparkles, UsersRound } from "lucide-react";
import { AdmissionEnquiryForm } from "../../components/admissions/AdmissionEnquiryForm";
import { AdmissionNotice, AdmissionsLayout } from "../../components/admissions/AdmissionsLayout";
import { ScrollReveal } from "../../components/ScrollReveal";
import { admissionPages } from "../../data/admissions";
import { hqImages, schoolData } from "../../data/schoolData";

const reasons = [
  { icon: BookOpen, title: "Academic Learning", text: "Build knowledge, curiosity, and sound learning habits through a considered school education." },
  { icon: UsersRound, title: "Student-Centred Education", text: "Recognise each learner's needs and encourage steady progress with guidance and care." },
  { icon: ShieldCheck, title: "Discipline and Values", text: "Support responsibility, respect, and positive relationships as part of everyday learning." },
  { icon: Sparkles, title: "Co-Curricular Activities", text: "Make room for interests and experiences beyond classroom lessons as opportunities allow." },
  { icon: Lightbulb, title: "Personal Development", text: "Help students grow in confidence, communication, independence, and a willingness to learn." },
  { icon: HeartHandshake, title: "Supportive Learning Environment", text: "Encourage a welcoming partnership between students, families, and the school community." },
];

const overviewSteps = [
  "Explore classes and confirm eligibility for the relevant academic session.",
  "Contact the school office to ask about current vacancies and requirements.",
  "Obtain and complete the official application form using the school's approved method.",
  "Submit the form and documents requested by the school.",
  "Complete any applicable verification and admission formalities.",
  "Confirm the admission and next steps with the school office.",
];

export function AdmissionOverview() {
  return (
    <div className="min-h-screen">
      <section className="relative isolate overflow-hidden bg-forest-950">
        <img
          src={hqImages.building}
          alt="S.B.S Sr.Sec. School campus"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-950/95 via-forest-900/85 to-forest-900/55" />
        <div className="container-custom grid min-h-[560px] items-center gap-10 py-16 sm:min-h-[620px] sm:py-20 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-3xl text-white">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent-300">
              S.B.S Sr.Sec. School Matour Kaithal
            </p>
            <h1 className="mb-5 text-4xl font-heading font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Admissions
            </h1>
            <h2 className="mb-5 max-w-2xl text-2xl font-heading font-medium leading-snug text-white sm:text-3xl">
              Give Your Child a Strong Foundation for a Bright Future
            </h2>
            <p className="mb-8 max-w-2xl text-base leading-relaxed text-cream-100 sm:text-lg">
              Explore an education focused on academic development, discipline, creativity, and the all-round growth of every student.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/admissions/procedure" className="btn-accent group">
                Explore Admission Process
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="#enquiry" className="inline-flex items-center justify-center rounded-btn border border-white/70 px-6 py-3.5 font-medium text-white transition-colors hover:bg-white/10">
                Admission Enquiry
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-white/20 bg-forest-950/70 p-6 text-white shadow-card backdrop-blur-sm sm:p-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent-300">A thoughtful start</p>
            <h2 className="mb-4 text-2xl font-heading font-semibold text-white">Plan your next steps with confidence</h2>
            <p className="mb-5 leading-relaxed text-cream-100">
              Admission availability, age criteria, documents, and fees can vary. Speak with the school office for current, class-specific guidance before applying.
            </p>
            <Link to="/admissions/documents-faq" className="inline-flex items-center gap-2 font-semibold text-white underline decoration-accent-300 underline-offset-4 hover:text-accent-200">
              Review documents and FAQs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <AdmissionsLayout
        title="Admission Overview"
        subtitle="Start Here"
        description="A clear starting point for families exploring admission at S.B.S Sr.Sec. School Matour Kaithal."
        activePath="/admissions"
        showBanner={false}
      >
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="mx-auto max-w-4xl text-center">
              <span className="section-label">Welcome</span>
              <h2 className="mb-5 text-heading-xl font-medium text-dark-900 sm:text-display-sm">
                Welcome to {schoolData.name}
              </h2>
              <p className="text-body-lg leading-relaxed text-dark-600">
                Choosing a school is an important decision for every family. At S.B.S Sr.Sec. School Matour Kaithal, learning is approached as a foundation for academic progress, curiosity, and responsible growth. A supportive learning environment, opportunities to take part in activities, and guidance through each stage of school life can help students develop both in and beyond the classroom. Families are encouraged to speak with the school about the current class options and how the school supports students.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-cream-100">
          <div className="container-custom">
            <div className="mb-10 text-center">
              <span className="section-label">Our Approach</span>
              <h2 className="text-heading-xl font-medium text-dark-900 sm:text-display-sm">Why Choose Our School?</h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {reasons.map(({ icon: Icon, title, text }) => (
                <ScrollReveal key={title}>
                  <article className="h-full rounded-card-lg border border-border-light bg-white p-6 shadow-soft transition-transform hover:-translate-y-1">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-forest-100 text-forest-700">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="mb-2 text-heading-sm font-semibold text-dark-900">{title}</h3>
                    <p className="leading-relaxed text-dark-600">{text}</p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom grid gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <span className="section-label">What to Expect</span>
              <h2 className="mb-6 text-heading-xl font-medium text-dark-900 sm:text-display-sm">Admission Information</h2>
              <ol className="space-y-4">
                {overviewSteps.map((step, index) => (
                  <li key={step} className="flex gap-4 rounded-xl border border-border-light bg-white p-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest-800 font-semibold text-white">{index + 1}</span>
                    <p className="pt-1 text-dark-700">{step}</p>
                  </li>
                ))}
              </ol>
              <Link to="/admissions/procedure" className="btn-primary mt-6 inline-flex">
                See the full admission procedure <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="space-y-5 lg:pt-12">
              <AdmissionNotice title="Important Admission Notice">
                <p>Contact the school office to confirm current admission dates, vacancies, required documents, and applicable fees.</p>
                <p className="mt-2">The steps on this website are a general guide. Actual procedures and availability must be confirmed by the school administration.</p>
              </AdmissionNotice>
              <div className="rounded-2xl bg-forest-800 p-6 text-white">
                <h3 className="mb-2 text-heading-md font-semibold text-white">School-specific details need confirmation</h3>
                <p className="leading-relaxed text-forest-100">
                  The school website lists education from Nursery to Class 12. Current class vacancies, age requirements, and admission conditions are confirmed by the school office.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="enquiry" className="scroll-mt-32 section-padding bg-cream-100">
          <div className="container-custom">
            <div className="mx-auto mb-8 max-w-2xl text-center">
              <span className="section-label">Get in Touch</span>
              <h2 className="mb-3 text-heading-xl font-medium text-dark-900 sm:text-display-sm">Admission Enquiry</h2>
              <p className="text-dark-600">Share the class you are interested in and your question. Current availability must be confirmed with the school.</p>
            </div>
            <div className="mx-auto max-w-3xl rounded-card-lg border border-border-light bg-white p-5 shadow-soft sm:p-8">
              <AdmissionEnquiryForm />
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="mb-9 text-center">
              <span className="section-label">Explore Further</span>
              <h2 className="text-heading-xl font-medium text-dark-900 sm:text-display-sm">Admissions Quick Navigation</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {admissionPages.map((page) => (
                <Link key={page.path} to={page.path} className="group rounded-xl border border-border-light bg-white p-5 shadow-soft transition-all hover:-translate-y-1 hover:border-forest-300 hover:shadow-card">
                  <span className="mb-3 block text-sm font-semibold text-forest-700">Admissions</span>
                  <span className="flex items-start justify-between gap-2 font-semibold text-dark-900">
                    {page.label}
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </AdmissionsLayout>
    </div>
  );
}
