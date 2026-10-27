import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Building2, Target, Award, Users, MapPin, Mail, Phone, ArrowRight, Heart, Shield, Palette, User } from "lucide-react";
import { schoolData, hqImages } from "../data/schoolData";
import { PageBanner } from "../components/PageBanner";
import { SectionTitle } from "../components/SectionTitle";
import { ScrollReveal, StaggerContainer } from "../components/ScrollReveal";

export function About() {
  return (
    <div className="min-h-screen">
      <PageBanner
        title="About Our School"
        subtitle="S.B.S Sr.Sec. School"
      >
        Learn more about our educational institution, values, and commitment to excellence.
      </PageBanner>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="space-y-8">
              <ScrollReveal delay={0.1} direction="left">
                <h2 className="text-heading-xl font-medium text-dark-900 mb-4">Our School</h2>
                <p className="text-body-lg text-dark-600 leading-relaxed mb-4">
                  {schoolData.introduction}
                </p>
                <p className="text-dark-600 leading-relaxed">
                  {schoolData.about} Our dedicated faculty, well-structured curriculum, and supportive learning environment ensure that every student receives the attention and guidance they need to thrive academically and personally.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2} direction="left">
                <div className="p-6 rounded-card-lg bg-cream-100 border border-border-light">
                  <h3 className="text-heading-md font-semibold text-dark-900 mb-4 flex items-center gap-2">
                    <Building2 className="w-6 h-6 text-forest-600" />
                    Key Information
                  </h3>
                  <dl className="space-y-4 text-dark-600">
                    <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-border-light last:border-0">
                      <dt className="font-medium text-dark-700">School Name</dt>
                      <dd className="text-dark-900 mt-1 sm:mt-0">{schoolData.name}</dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-border-light">
                      <dt className="font-medium text-dark-700">Location</dt>
                      <dd className="text-dark-900 mt-1 sm:mt-0">{schoolData.location}</dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-border-light">
                      <dt className="font-medium text-dark-700">School Type</dt>
                      <dd className="text-dark-900 mt-1 sm:mt-0">{schoolData.schoolType}</dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-border-light">
                      <dt className="font-medium text-dark-700">Education Level</dt>
                      <dd className="text-dark-900 mt-1 sm:mt-0">{schoolData.educationLevel}</dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-border-light">
                      <dt className="font-medium text-dark-700">School Code (BSEH)</dt>
                      <dd className="text-dark-900 font-mono mt-1 sm:mt-0">{schoolData.schoolCode}</dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-border-light">
                      <dt className="font-medium text-dark-700">Board</dt>
                      <dd className="text-dark-900 mt-1 sm:mt-0">{schoolData.board}</dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-border-light">
                      <dt className="font-medium text-dark-700">Principal</dt>
                      <dd className="text-dark-900 mt-1 sm:mt-0">{schoolData.principalName}</dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between py-3">
                      <dt className="font-medium text-dark-700">Streams Offered (Class 11-12)</dt>
                      <dd className="text-dark-900 mt-1 sm:mt-0">{schoolData.streams.join(", ")}</dd>
                    </div>
                  </dl>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3} direction="left">
                <div className="p-6 rounded-card-lg bg-gradient-to-br from-forest-50 to-cream-100 border border-forest-100">
                  <h3 className="text-heading-md font-semibold text-dark-900 mb-4 flex items-center gap-2">
                    <GraduationCap className="w-6 h-6 text-forest-600" />
                    Educational Scope
                  </h3>
                  <ul className="space-y-3 text-dark-600">
                    <li className="flex items-start gap-3">
                      <BookOpen className="w-5 h-5 text-forest-600 flex-shrink-0 mt-0.5" />
                      <span>Complete schooling from Nursery to Class 12</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <BookOpen className="w-5 h-5 text-forest-600 flex-shrink-0 mt-0.5" />
                      <span>Three academic streams at senior secondary: Arts, Commerce, and Science</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <BookOpen className="w-5 h-5 text-forest-600 flex-shrink-0 mt-0.5" />
                      <span>Affiliated with Board of School Education Haryana (BSEH)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <BookOpen className="w-5 h-5 text-forest-600 flex-shrink-0 mt-0.5" />
                      <span>Co-educational institution serving Matour village and surrounding areas</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            <div className="space-y-6">
              <ScrollReveal delay={0.15} direction="right">
                <div className="relative aspect-[4/3] rounded-card-lg overflow-hidden bg-forest-100">
                  <img
                    src={hqImages.building}
                    alt="School building exterior"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-heading-md font-semibold mb-1">{schoolData.shortName}</h3>
                    <p className="text-forest-100">{schoolData.location}</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.25} direction="right">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl bg-white shadow-soft border border-border-light card-hover">
                    <div className="w-12 h-12 rounded-xl bg-forest-100 flex items-center justify-center mb-3">
                      <MapPin className="w-6 h-6 text-forest-600" />
                    </div>
                    <h4 className="font-semibold text-dark-900 mb-1">Location</h4>
                    <p className="text-dark-600 text-sm">{schoolData.location}</p>
                  </div>
                  <div className="p-5 rounded-xl bg-white shadow-soft border border-border-light card-hover">
                    <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center mb-3">
                      <Mail className="w-6 h-6 text-accent-600" />
                    </div>
                    <h4 className="font-semibold text-dark-900 mb-1">Email</h4>
                    <a href={`mailto:${schoolData.email}`} className="text-dark-600 text-sm hover:text-forest-600 transition-colors">
                      {schoolData.email}
                    </a>
                  </div>
                  <div className="p-5 rounded-xl bg-white shadow-soft border border-border-light card-hover">
                    <div className="w-12 h-12 rounded-xl bg-cream-200 flex items-center justify-center mb-3">
                      <Phone className="w-6 h-6 text-dark-600" />
                    </div>
                    <h4 className="font-semibold text-dark-900 mb-1">Phone</h4>
                    <p className="text-dark-600 text-sm">
                      {schoolData.phoneVerified ? schoolData.phone : "Contact number verification pending"}
                    </p>
                  </div>
                  <div className="p-5 rounded-xl bg-white shadow-soft border border-border-light card-hover">
                    <div className="w-12 h-12 rounded-xl bg-sage-100 flex items-center justify-center mb-3">
                      <Award className="w-6 h-6 text-sage-600" />
                    </div>
                    <h4 className="font-semibold text-dark-900 mb-1">School Code</h4>
                    <p className="text-dark-600 text-sm font-mono">{schoolData.schoolCode}</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream-100">
        <div className="container-custom">
          <SectionTitle
            title="Principal's Message"
            subtitle="Leadership"
          />
          <ScrollReveal delay={0.1}>
            <div className="max-w-4xl mx-auto">
              <div className="p-8 rounded-card-lg bg-white border border-border-light">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-48 flex-shrink-0">
                    <div className="w-48 h-48 rounded-xl bg-forest-100 flex items-center justify-center mx-auto md:mx-0">
                      <User className="w-16 h-16 text-forest-300" />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-xl bg-forest-100 text-forest-700">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-heading-lg font-semibold text-dark-900">{schoolData.principalName}</h3>
                        <p className="text-forest-600 font-medium">Principal</p>
                      </div>
                    </div>
                    <div className="p-6 rounded-lg bg-cream-50 border border-border-light">
                      <p className="text-dark-600 leading-relaxed italic">
                        "Message from the Principal will be updated soon."
                      </p>
                      <p className="text-dark-500 text-sm mt-3">
                        The Principal's message and vision for the school will be published here once received from the school administration.
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
        <div className="container-custom">
          <SectionTitle
            title="Our Educational Philosophy"
            subtitle="Values & Approach"
          />
          <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Heart, title: "Student-Centered Learning", desc: "Every student's unique potential is nurtured through personalized attention and adaptive teaching methods." },
              { icon: Shield, title: "Values & Discipline", desc: "Strong emphasis on character building, moral values, and responsible citizenship in a structured environment." },
              { icon: Palette, title: "Holistic Development", desc: "Balanced focus on academics, creativity, physical education, and life skills for well-rounded growth." },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={0.1 * index}>
                <div className="p-6 rounded-card-lg bg-white border border-border-light card-hover text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-forest-100 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-forest-600" />
                  </div>
                  <h3 className="text-heading-sm font-semibold text-dark-900 mb-2">{item.title}</h3>
                  <p className="text-dark-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Information Currently Unavailable"
            subtitle="Notice"
          />
          <ScrollReveal delay={0.1}>
            <div className="max-w-4xl mx-auto">
              <div className="p-8 rounded-card-lg bg-white border border-border-light">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-accent-100 flex items-center justify-center">
                    <Award className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <h3 className="text-heading-md font-semibold text-dark-900 mb-3">
                      Additional Information Not Currently Available
                    </h3>
                    <div className="space-y-3 text-dark-600">
                      <p>
                        The following information about the school is not currently available in our verified records:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4 grid sm:grid-cols-2 gap-2">
                        <li>School establishment year and history</li>
                        <li>School mission, vision, and motto</li>
                        <li>Detailed facilities and infrastructure specifications</li>
                        <li>School timings and academic calendar</li>
                        <li>Fee structure</li>
                        <li>Examination results and statistics</li>
                        <li>Staff and student count</li>
                        <li>Extracurricular activities and clubs</li>
                        <li>Notable alumni and achievements</li>
                      </ul>
                      <p className="mt-4 font-medium text-forest-700">
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

      <section className="section-padding bg-forest-50">
        <div className="container-custom text-center">
          <SectionTitle
            title="Ready to Learn More?"
            subtitle="Connect"
          />
          <ScrollReveal delay={0.1}>
            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-body-lg text-dark-600 leading-relaxed">
                For detailed information about admissions, academics, or any other inquiries,
                please visit our contact page or reach out to us directly.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact" className="btn-primary group">
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/admissions" className="btn-outline group">
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