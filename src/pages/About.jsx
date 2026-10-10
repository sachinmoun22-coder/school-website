import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Building2, Target, Award, Users, MapPin, Mail, Phone } from "lucide-react";
import { schoolData } from "../data/schoolData";
import { PageBanner } from "../components/PageBanner";
import { SectionTitle } from "../components/SectionTitle";
import { ScrollReveal, StaggerContainer } from "../components/ScrollReveal";

export function About() {
  return (
    <div className="min-h-screen">
      <PageBanner
        title="About Our School"
        subtitle="Shaheed Bhagat Singh Sr. Sec. School"
      >
        Learn more about our educational institution, values, and commitment to excellence.
      </PageBanner>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <ScrollReveal delay={0.1} direction="left">
                <h2 className="text-3xl font-bold text-navy-900 mb-4">Our School</h2>
                <p className="text-lg text-navy-600 leading-relaxed mb-4">
                  {schoolData.introduction}
                </p>
                <p className="text-navy-600 leading-relaxed">
                  {schoolData.about}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2} direction="left">
                <div className="p-6 rounded-2xl bg-navy-50 border border-navy-100">
                  <h3 className="text-xl font-semibold text-navy-900 mb-4 flex items-center gap-2">
                    <Building2 className="w-6 h-6 text-primary-600" />
                    Key Information
                  </h3>
                  <dl className="space-y-3 text-navy-600">
                    <div className="flex justify-between">
                      <dt className="font-medium">School Name</dt>
                      <dd className="text-navy-900">{schoolData.name}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="font-medium">Location</dt>
                      <dd className="text-navy-900">{schoolData.location}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="font-medium">School Type</dt>
                      <dd className="text-navy-900">{schoolData.schoolType}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="font-medium">Education Level</dt>
                      <dd className="text-navy-900">{schoolData.educationLevel}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="font-medium">School Code (BSEH)</dt>
                      <dd className="text-navy-900 font-mono">{schoolData.schoolCode}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="font-medium">Board</dt>
                      <dd className="text-navy-900">{schoolData.board}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="font-medium">Streams Offered</dt>
                      <dd className="text-navy-900">{schoolData.streams.join(", ")}</dd>
                    </div>
                  </dl>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3} direction="left">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-100">
                  <h3 className="text-xl font-semibold text-navy-900 mb-4 flex items-center gap-2">
                    <GraduationCap className="w-6 h-6 text-primary-600" />
                    Educational Scope
                  </h3>
                  <ul className="space-y-3 text-navy-600">
                    <li className="flex items-start gap-3">
                      <BookOpen className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span>Senior secondary education up to Class 12</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <BookOpen className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span>Three academic streams: Arts, Commerce, and Science</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <BookOpen className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span>Affiliated with Board of School Education Haryana (BSEH)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <BookOpen className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span>Co-educational institution serving the Matour, Kaithal community</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            <div className="space-y-6">
              <ScrollReveal delay={0.15} direction="right">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-navy-100">
                  <img
                    src="https://images.unsplash.com/photo-1580582902619-8d945a0ea5f9?w=800&q=80"
                    alt="School building exterior"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{schoolData.shortName}</h3>
                    <p className="text-navy-200">{schoolData.location}</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.25} direction="right">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-6 rounded-xl bg-white shadow-sm border border-navy-100 card-hover">
                    <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                      <MapPin className="w-6 h-6 text-primary-600" />
                    </div>
                    <h4 className="font-semibold text-navy-900 mb-2">Location</h4>
                    <p className="text-navy-600 text-sm">{schoolData.location}</p>
                  </div>
                  <div className="p-6 rounded-xl bg-white shadow-sm border border-navy-100 card-hover">
                    <div className="w-12 h-12 rounded-xl bg-secondary-100 flex items-center justify-center mb-4">
                      <Mail className="w-6 h-6 text-secondary-600" />
                    </div>
                    <h4 className="font-semibold text-navy-900 mb-2">Email</h4>
                    <a href={`mailto:${schoolData.email}`} className="text-navy-600 text-sm hover:text-primary-600 transition-colors">
                      {schoolData.email}
                    </a>
                  </div>
                  <div className="p-6 rounded-xl bg-white shadow-sm border border-navy-100 card-hover">
                    <div className="w-12 h-12 rounded-xl bg-navy-100 flex items-center justify-center mb-4">
                      <Phone className="w-6 h-6 text-navy-600" />
                    </div>
                    <h4 className="font-semibold text-navy-900 mb-2">Phone</h4>
                    <p className="text-navy-600 text-sm">
                      {schoolData.phoneVerified ? schoolData.phone : "Contact number verification pending"}
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-white shadow-sm border border-navy-100 card-hover">
                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                      <Award className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-navy-900 mb-2">School Code</h4>
                    <p className="text-navy-600 text-sm font-mono">{schoolData.schoolCode}</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-50">
        <div className="container-custom">
          <SectionTitle
            title="Information Placeholder"
            subtitle="Notice"
          />
          <ScrollReveal delay={0.1}>
            <div className="max-w-4xl mx-auto">
              <div className="p-8 rounded-2xl bg-white border border-navy-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-secondary-100 flex items-center justify-center">
                    <Award className="w-6 h-6 text-secondary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-3">
                      Additional Information Not Currently Available
                    </h3>
                    <div className="space-y-3 text-navy-600">
                      <p>
                        The following information about the school is not currently available in our verified records:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>School establishment year and history</li>
                        <li>Principal and management team details</li>
                        <li>School mission, vision, and motto</li>
                        <li>Facilities and infrastructure details</li>
                        <li>Transport services availability</li>
                        <li>School timings and academic calendar</li>
                        <li>Fee structure</li>
                        <li>Examination results and statistics</li>
                        <li>Staff and student count</li>
                        <li>Extracurricular activities and clubs</li>
                        <li>Notable alumni and achievements</li>
                      </ul>
                      <p className="mt-4 font-medium text-primary-700">
                        This information will be updated as soon as it is officially provided by the school administration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <SectionTitle
            title="Ready to Learn More?"
            subtitle="Connect"
          />
          <ScrollReveal delay={0.1}>
            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-lg text-navy-600 leading-relaxed">
                For detailed information about admissions, academics, or any other inquiries,
                please visit our contact page or reach out to us directly.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact" className="btn-primary group">
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/admission" className="btn-outline group">
                  Admission Info
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

import { ArrowRight } from "lucide-react";