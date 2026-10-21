import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock, Building2, GraduationCap, BookOpen, Award, Send, AlertCircle, CheckCircle, Loader2, ArrowRight } from "lucide-react";
import { schoolData } from "../data/schoolData";
import { PageBanner } from "../components/PageBanner";
import { SectionTitle } from "../components/SectionTitle";
import { ScrollReveal, StaggerContainer } from "../components/ScrollReveal";
import { ContactForm } from "../components/ContactForm";

export function Contact() {
  return (
    <div className="min-h-screen">
      <PageBanner
        title="Contact Us"
        subtitle="Get in Touch"
      >
        We'd love to hear from you. Reach out for any inquiries about our school.
      </PageBanner>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal delay={0.1}>
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-heading-xl font-medium text-dark-900 mb-4">
                      Get in Touch with {schoolData.shortName}
                    </h2>
                    <p className="text-body-lg text-dark-600 leading-relaxed">
                      Whether you have questions about admissions, academics, or general inquiries,
                      our team is here to help. Use any of the contact methods below to reach us.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="p-6 rounded-card-lg bg-cream-100 border border-border-light card-hover">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-forest-100 flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-forest-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-dark-900 mb-1">School Address</h3>
                          <address className="text-dark-600 not-italic leading-relaxed">
                            {schoolData.location}
                          </address>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 rounded-card-lg bg-cream-100 border border-border-light card-hover">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-accent-100 flex items-center justify-center">
                          <Mail className="w-6 h-6 text-accent-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-dark-900 mb-1">Email Address</h3>
                          <a
                            href={`mailto:${schoolData.email}`}
                            className="text-dark-600 hover:text-forest-600 transition-colors"
                          >
                            {schoolData.email}
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 rounded-card-lg bg-cream-100 border border-border-light card-hover">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-sage-100 flex items-center justify-center">
                          <Phone className="w-6 h-6 text-sage-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-dark-900 mb-1">Phone Number</h3>
                          <p className="text-dark-600">
                            {schoolData.phoneVerified ? schoolData.phone : "Contact number verification pending"}
                          </p>
                          {!schoolData.phoneVerified && (
                            <p className="text-dark-500 text-sm mt-1">
                              The phone number has not been officially verified with the school.
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="p-6 rounded-card-lg bg-cream-100 border border-border-light card-hover">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-forest-100 flex items-center justify-center">
                          <Clock className="w-6 h-6 text-forest-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-dark-900 mb-1">Office Hours</h3>
                          <p className="text-dark-600">{schoolData.placeholderText}</p>
                          <p className="text-dark-500 text-sm mt-1">
                            School timings will be updated when officially confirmed.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:sticky lg:top-24">
                  <div className="p-6 lg:p-8 rounded-card-lg bg-white border border-border-light shadow-soft">
                    <h3 className="text-heading-md font-semibold text-dark-900 mb-6">Send Us a Message</h3>
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-cream-100">
        <div className="container-custom">
          <SectionTitle
            title="School Information"
            subtitle="Quick Facts"
          />
          <ScrollReveal delay={0.1}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Building2, title: "School Type", detail: schoolData.schoolType },
                { icon: GraduationCap, title: "Education Level", detail: schoolData.educationLevel },
                { icon: BookOpen, title: "Streams Offered", detail: schoolData.streams.join(", ") },
                { icon: Award, title: "School Code (BSEH)", detail: schoolData.schoolCode },
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
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="mt-12">
            <div className="max-w-3xl mx-auto">
              <div className="p-8 rounded-card-lg bg-white border border-border-light shadow-soft">
                <h3 className="text-heading-md font-semibold text-dark-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-forest-600" />
                  Location & Map
                </h3>
                <div className="aspect-video rounded-xl bg-forest-100 border border-border-light flex items-center justify-center">
                  <div className="text-center p-4">
                    <MapPin className="w-12 h-12 mx-auto mb-3 text-forest-300" />
                    <p className="text-dark-600 mb-2">Map Integration Not Available</p>
                    <p className="text-dark-500 text-sm">
                      {schoolData.placeholderText}. A map showing the exact school location
                      will be added when the precise coordinates are verified.
                    </p>
                    <p className="text-dark-500 text-sm mt-2">
                      Address: {schoolData.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="FAQ"
          />
          <ScrollReveal delay={0.1}>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  q: "What are the school hours?",
                  a: schoolData.placeholderText + " School timings will be published when officially confirmed."
                },
                {
                  q: "Which board is the school affiliated with?",
                  a: `The school is affiliated with the Board of School Education Haryana (BSEH). School Code: ${schoolData.schoolCode}.`
                },
                {
                  q: "What streams are offered in Classes 11 and 12?",
                  a: `The school offers three streams: ${schoolData.streams.join(", ")}.`
                },
                {
                  q: "Is the school co-educational?",
                  a: "Yes, S.B.S Sr.Sec. School Matour Kaithal is a co-educational institution."
                },
                {
                  q: "How can I apply for admission?",
                  a: `Please contact the school directly for admission procedures. Email: ${schoolData.email} or visit the school at ${schoolData.location}.`
                },
                {
                  q: "Are the contact details verified?",
                  a: "The email address is provided by the school. The phone number is currently marked as 'verification pending' until officially confirmed with the school administration."
                },
                {
                  q: "Where can I find examination results?",
                  a: schoolData.placeholderText + " Verified results will be published when available."
                },
              ].map((faq, index) => (
                <details key={index} className="group rounded-xl bg-cream-100 border border-border-light overflow-hidden">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <span className="font-medium text-dark-900 pr-8">{faq.q}</span>
                    <svg className="w-5 h-5 text-dark-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 text-dark-600 border-t border-border-light">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-forest-800">
        <div className="container-custom text-center">
          <ScrollReveal delay={0.1}>
            <h2 className="text-heading-xl sm:text-display-sm font-medium text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-forest-200 text-body-lg mb-8 max-w-2xl mx-auto">
              Don't hesitate to reach out. We're here to help with any inquiries
              about our school, admissions, academics, or other matters.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`mailto:${schoolData.email}`}
                className="btn-accent group"
              >
                Email Us Directly
                <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/admissions"
                className="border-2 border-white text-white hover:bg-white/10 px-7 py-3.5 rounded-btn font-medium transition-colors group inline-flex items-center gap-2"
              >
                Admission Inquiries
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}