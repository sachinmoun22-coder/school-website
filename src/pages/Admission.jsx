import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Target, FileText, Calendar, User, Mail, Phone, MapPin, AlertCircle, CheckCircle, Clock } from "lucide-react";
import { schoolData, admissionInfo } from "../data/schoolData";
import { PageBanner } from "../components/PageBanner";
import { SectionTitle } from "../components/SectionTitle";
import { ScrollReveal, StaggerContainer } from "../components/ScrollReveal";
import { ContactForm } from "../components/ContactForm";

export function Admission() {
  return (
    <div className="min-h-screen">
      <PageBanner
        title="Admission Information"
        subtitle="Join Our Community"
      >
        Learn about the admission process at Shaheed Bhagat Singh Sr. Sec. School, Matour.
      </PageBanner>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal delay={0.1}>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <GraduationCap className="w-10 h-10 text-primary-600" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
                Welcome to {schoolData.shortName}
              </h2>
              <p className="text-lg text-navy-600 leading-relaxed mb-6">
                {admissionInfo.introduction}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="badge badge-primary">
                  <GraduationCap className="w-4 h-4 mr-1" />
                  {schoolData.educationLevel}
                </span>
                <span className="badge badge-secondary">
                  <BookOpen className="w-4 h-4 mr-1" />
                  {schoolData.streams.join(", ")}
                </span>
                <span className="badge badge-navy">
                  <Target className="w-4 h-4 mr-1" />
                  BSEH Code: {schoolData.schoolCode}
                </span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-navy-50 to-navy-100 border border-navy-200 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-secondary-100 flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-secondary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-3">
                    Important Notice
                  </h3>
                  <p className="text-navy-600 leading-relaxed mb-4">
                    {schoolData.placeholderText}
                  </p>
                  <p className="text-navy-600 text-sm">
                    The following admission details are not currently available in our verified records.
                    Please contact the school directly for the most accurate and up-to-date information.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-navy-50">
        <div className="container-custom">
          <SectionTitle
            title="Information You May Need to Confirm"
            subtitle="Admission Checklist"
          />
          <ScrollReveal delay={0.1}>
            <div className="max-w-3xl mx-auto">
              <StaggerContainer staggerDelay={0.05}>
                {admissionInfo.checklist.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={{}}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white border border-navy-100 card-hover"
                  >
                    <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-primary-100 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-navy-700 font-medium">{item}</p>
                      <p className="text-navy-500 text-sm mt-1">
                        Contact school administration for current details
                      </p>
                    </div>
                  </motion.div>
                ))}
              </StaggerContainer>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="What We Can Confirm"
            subtitle="Verified Information"
          />
          <ScrollReveal delay={0.1}>
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: GraduationCap, title: "Education Level", detail: "Up to Class 12 (Senior Secondary)" },
                  { icon: BookOpen, title: "Academic Streams", detail: "Arts, Commerce, Science" },
                  { icon: Target, title: "Board Affiliation", detail: "Board of School Education Haryana (BSEH)" },
                  { icon: FileText, title: "School Code", detail: schoolData.schoolCode },
                ].map((item, index) => (
                  <div key={index} className="p-6 rounded-2xl bg-white border border-navy-100 card-hover text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary-100 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <h4 className="font-semibold text-navy-900 mb-2">{item.title}</h4>
                    <p className="text-navy-600 text-sm">{item.detail}</p>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-green-50 border border-green-100">
                <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  Verified Admission Facts
                </h3>
                <ul className="space-y-2 text-green-700">
                  {[
                    "School accepts students for Classes 11 & 12 in Arts, Commerce, and Science streams",
                    "Affiliated with Board of School Education Haryana (BSEH)",
                    "School Code: 10244 (BSEH)",
                    "Co-educational institution located in Matour, Kaithal, Haryana",
                    "Contact school directly for admission procedures, dates, and requirements",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-navy-50">
        <div className="container-custom">
          <SectionTitle
            title="Inquiry Form"
            subtitle="Get in Touch"
          />
          <ScrollReveal delay={0.1}>
            <div className="max-w-2xl mx-auto">
              <div className="p-6 rounded-2xl bg-white border border-navy-100 shadow-sm">
                <p className="text-navy-600 mb-6 leading-relaxed">
                  Use the form below to send an admission inquiry to the school. Please note that
                  this is an inquiry form only — backend email delivery is not configured. Your
                  message will be logged for demonstration purposes.
                </p>
                <ContactForm />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-primary-600">
        <div className="container-custom text-center">
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Take the Next Step?
            </h2>
            <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
              Contact the school directly for detailed admission information, procedures,
              and any specific questions you may have.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-lg font-medium transition-colors group inline-flex items-center gap-2">
                Contact School
                <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={`mailto:${schoolData.email}`}
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-colors group inline-flex items-center gap-2"
              >
                Email Inquiry
                <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Contact Information for Admissions"
            subtitle="Reach Out"
          />
          <ScrollReveal delay={0.1}>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center p-6 rounded-2xl bg-white border border-navy-100 card-hover">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary-100 flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-primary-600" />
                </div>
                <h4 className="font-semibold text-navy-900 mb-2">Visit Us</h4>
                <address className="text-navy-600 not-italic leading-relaxed">
                  {schoolData.location}
                </address>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white border border-navy-100 card-hover">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-secondary-100 flex items-center justify-center">
                  <Mail className="w-7 h-7 text-secondary-600" />
                </div>
                <h4 className="font-semibold text-navy-900 mb-2">Email Us</h4>
                <a
                  href={`mailto:${schoolData.email}`}
                  className="text-navy-600 hover:text-primary-600 transition-colors"
                >
                  {schoolData.email}
                </a>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white border border-navy-100 card-hover">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-navy-100 flex items-center justify-center">
                  <Phone className="w-7 h-7 text-navy-600" />
                </div>
                <h4 className="font-semibold text-navy-900 mb-2">Call Us</h4>
                <p className="text-navy-600">
                  {schoolData.phoneVerified ? schoolData.phone : "Contact number verification pending"}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}