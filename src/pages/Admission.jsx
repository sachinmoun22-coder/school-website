import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Target, FileText, Calendar, User, Mail, Phone, MapPin, AlertCircle, CheckCircle, Clock, ArrowRight, Shield, Heart, Home, Bed, Bus, FlaskConical } from "lucide-react";
import { schoolData, admissionInfo } from "../data/schoolData";
import { PageBanner } from "../components/PageBanner";
import { SectionTitle } from "../components/SectionTitle";
import { ScrollReveal, StaggerContainer } from "../components/ScrollReveal";
import { AdmissionForm } from "../components/AdmissionForm";

export function Admission() {
  return (
    <div className="min-h-screen">
      <PageBanner
        title="Admissions"
        subtitle="Join Our Community"
      >
        Learn about the admission process at S.B.S Sr.Sec. School Matour Kaithal for Nursery to Class 12.
      </PageBanner>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal delay={0.1}>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="w-20 h-20 mx-auto mb-6 rounded-xl bg-gradient-to-br from-forest-100 to-forest-200 flex items-center justify-center">
                <GraduationCap className="w-10 h-10 text-forest-600" />
              </div>
              <h2 className="text-heading-xl sm:text-display-sm font-medium text-dark-900 mb-4">
                Welcome to {schoolData.shortName}
              </h2>
              <p className="text-body-lg text-dark-600 leading-relaxed mb-6">
                {admissionInfo.introduction}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="badge badge-forest">
                  <GraduationCap className="w-4 h-4 mr-1" />
                  {schoolData.educationLevel}
                </span>
                <span className="badge badge-sage">
                  <BookOpen className="w-4 h-4 mr-1" />
                  {schoolData.streams.join(", ") + " (Class 11-12)"}
                </span>
                <span className="badge badge-cream">
                  <Target className="w-4 h-4 mr-1" />
                  BSEH Code: {schoolData.schoolCode}
                </span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="p-6 lg:p-8 rounded-card-lg bg-gradient-to-br from-forest-50 to-cream-100 border border-forest-100 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-accent-100 flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-accent-600" />
                </div>
                <div>
                  <h3 className="text-heading-md font-semibold text-dark-900 mb-3">
                    Important Notice
                  </h3>
                  <p className="text-dark-600 leading-relaxed mb-4">
                    {schoolData.placeholderText}
                  </p>
                  <p className="text-dark-600 text-sm">
                    The following admission details are not currently available in our verified records.
                    Please contact the school directly for the most accurate and up-to-date information.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-cream-100">
        <div className="container-custom">
          <SectionTitle
            title="Information You May Need to Confirm"
            subtitle="Admission Checklist"
          />
          <ScrollReveal delay={0.1}>
            <div className="max-w-3xl mx-auto">
              <StaggerContainer staggerDelay={0.05} className="space-y-3">
                {admissionInfo.checklist.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={{}}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white border border-border-light card-hover"
                  >
                    <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-forest-100 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-forest-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-dark-700 font-medium">{item}</p>
                      <p className="text-dark-500 text-sm mt-1">
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
                  { icon: GraduationCap, title: "Education Level", detail: "Nursery to Class 12" },
                  { icon: Home, title: "Pre-Primary", detail: "Nursery, LKG, UKG" },
                  { icon: BookOpen, title: "Senior Secondary Streams", detail: "Arts, Commerce, Science (Class 11-12)" },
                  { icon: FileText, title: "School Code", detail: schoolData.schoolCode },
                ].map((item, index) => (
                  <div key={index} className="p-6 rounded-card-lg bg-white border border-border-light card-hover text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-forest-100 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-forest-600" />
                    </div>
                    <h4 className="font-semibold text-dark-900 mb-2">{item.title}</h4>
                    <p className="text-dark-600 text-sm">{item.detail}</p>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-card-lg bg-forest-50 border border-forest-100">
                <h3 className="text-heading-md font-semibold text-forest-800 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-forest-600" />
                  Verified Admission Facts
                </h3>
                <ul className="space-y-2 text-forest-700">
                  {[
                    "School accepts students from Nursery to Class 12",
                    "Senior Secondary (Class 11-12) streams: Arts, Commerce, Science",
                    "Affiliated with Board of School Education Haryana (BSEH)",
                    "School Code: 10244 (BSEH)",
                    "Co-educational institution located in Matour village, Kaithal, Haryana",
                    "Transport facility available (5 buses + 1 van covering nearby villages)",
                    "Hostel facility available for residential students",
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

      <section className="section-padding bg-cream-100">
        <div className="container-custom">
          <SectionTitle
            title="Admission Enquiry Form"
            subtitle="Get in Touch"
          />
          <ScrollReveal delay={0.1}>
            <div className="max-w-2xl mx-auto">
              <div className="p-6 lg:p-8 rounded-card-lg bg-white border border-border-light shadow-soft">
                <p className="text-dark-600 mb-6 leading-relaxed">
                  Use the form below to send an admission inquiry to the school. Please note that
                  this is an inquiry form — backend integration is required for actual email delivery.
                  Your message will be logged for demonstration purposes.
                </p>
                <AdmissionForm />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-forest-800">
        <div className="container-custom text-center">
          <ScrollReveal delay={0.1}>
            <h2 className="text-heading-xl sm:text-display-sm font-medium text-white mb-4">
              Ready to Take the Next Step?
            </h2>
            <p className="text-forest-200 text-body-lg mb-8 max-w-2xl mx-auto">
              Contact the school directly for detailed admission information, procedures,
              and any specific questions you may have.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-accent group">
                Contact School
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={`mailto:${schoolData.email}`}
                className="border-2 border-white text-white hover:bg-white/10 px-7 py-3.5 rounded-btn font-medium transition-colors group inline-flex items-center gap-2"
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
              <div className="text-center p-6 rounded-card-lg bg-white border border-border-light card-hover">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-forest-100 flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-forest-600" />
                </div>
                <h4 className="font-semibold text-dark-900 mb-2">Visit Us</h4>
                <address className="text-dark-600 not-italic leading-relaxed">
                  {schoolData.location}
                </address>
              </div>
              <div className="text-center p-6 rounded-card-lg bg-white border border-border-light card-hover">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-accent-100 flex items-center justify-center">
                  <Mail className="w-7 h-7 text-accent-600" />
                </div>
                <h4 className="font-semibold text-dark-900 mb-2">Email Us</h4>
                <a
                  href={`mailto:${schoolData.email}`}
                  className="text-dark-600 hover:text-forest-600 transition-colors"
                >
                  {schoolData.email}
                </a>
              </div>
              <div className="text-center p-6 rounded-card-lg bg-white border border-border-light card-hover">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-cream-200 flex items-center justify-center">
                  <Phone className="w-7 h-7 text-dark-600" />
                </div>
                <h4 className="font-semibold text-dark-900 mb-2">Call Us</h4>
                <p className="text-dark-600">
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