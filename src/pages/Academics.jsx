import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Palette, Briefcase, Microscope, ArrowRight, GraduationCap, Target, CheckCircle } from "lucide-react";
import { schoolData, streamsData } from "../data/schoolData";
import { PageBanner } from "../components/PageBanner";
import { SectionTitle } from "../components/SectionTitle";
import { ScrollReveal, StaggerContainer } from "../components/ScrollReveal";

const streamIcons = {
  Palette,
  Briefcase,
  Microscope,
};

function getStreamIcon(iconName) {
  return streamIcons[iconName] || BookOpen;
}

export function Academics() {
  return (
    <div className="min-h-screen">
      <PageBanner
        title="Academic Programs"
        subtitle="Curriculum Overview"
      >
        Explore the academic programs offered at S.B.S Sr.Sec. School from Nursery to Class 12.
      </PageBanner>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal delay={0.1}>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <p className="text-body-lg text-dark-600 leading-relaxed mb-6">
                {schoolData.introduction}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="badge badge-forest">
                  <GraduationCap className="w-4 h-4 mr-1" />
                  {schoolData.educationLevel}
                </span>
                <span className="badge badge-sage">
                  <Target className="w-4 h-4 mr-1" />
                  BSEH Affiliated
                </span>
                <span className="badge badge-cream">
                  <BookOpen className="w-4 h-4 mr-1" />
                  {schoolData.schoolCode}
                </span>
              </div>
            </div>
          </ScrollReveal>

          <SectionTitle
            title="Senior Secondary Streams (Class 11-12)"
            subtitle="Choose Your Path"
          />

          <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-3 gap-6 mb-16">
            {streamsData.map((stream, index) => {
              const StreamIcon = getStreamIcon(stream.icon);
              return (
                <ScrollReveal key={stream.id} delay={0.1 * index} className="h-full">
                  <div className="card h-full overflow-hidden group">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={stream.image}
                        alt={`${stream.name} stream learning environment`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                        <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                          <StreamIcon className="w-7 h-7 text-white" />
                        </div>
                      </div>
                    </div>

                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="text-heading-sm font-semibold text-dark-900 mb-2">{stream.name}</h3>
                      <p className="text-dark-600 text-sm leading-relaxed flex-1 mb-4">{stream.description}</p>
                      <div className="flex items-center justify-between pt-3 border-t border-border-light">
                        <span className="text-sm font-medium text-forest-600 group-hover:text-forest-700 transition-colors">
                          Learn more
                        </span>
                        <motion.div
                          whileHover={{ x: 4 }}
                          className="p-2 rounded-lg bg-forest-100 text-forest-600 group-hover:bg-forest-200 transition-colors"
                        >
                          <ArrowRight className="w-5 h-5" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-padding bg-cream-100">
        <div className="container-custom">
          <StaggerContainer staggerDelay={0.15}>
            {streamsData.map((stream, index) => {
              const StreamIcon = getStreamIcon(stream.icon);
              return (
                <ScrollReveal key={stream.id} delay={0.1 * index} className="mb-16 last:mb-0">
                  <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
                    <div className="relative aspect-[4/3] rounded-card-lg overflow-hidden bg-forest-100">
                      <img
                        src={stream.image}
                        alt={`${stream.name} stream educational environment`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-forest-700/10 to-transparent" />
                    </div>
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-forest-100 flex items-center justify-center">
                          <StreamIcon className="w-6 h-6 text-forest-600" />
                        </div>
                        <div>
                          <h3 className="text-heading-lg font-semibold text-dark-900">{stream.name} Stream</h3>
                          <p className="text-forest-600 font-medium">For Classes 11 & 12</p>
                        </div>
                      </div>
                      <p className="text-dark-600 leading-relaxed text-body-lg">
                        {stream.description}
                      </p>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-dark-900">Potential Subject Areas:</h4>
                        <div className="p-4 rounded-lg bg-white border border-border-light">
                          <p className="text-dark-600 text-sm italic">
                            {schoolData.placeholderText}
                          </p>
                          <p className="text-dark-500 text-xs mt-2">
                            Detailed subject combinations and curriculum information will be published when available from the school.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-3 pt-4">
                        <span className="badge badge-forest">BSEH Curriculum</span>
                        <span className="badge badge-sage">Senior Secondary</span>
                        <span className="badge badge-cream">Class 11-12</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Academic Structure"
            subtitle="Nursery to Class 12"
          />
          <ScrollReveal delay={0.1}>
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="p-6 rounded-card-lg bg-cream-100 border border-border-light">
                <h3 className="text-heading-md font-semibold text-dark-900 mb-4 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-forest-600" />
                  Class Structure
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-dark-600">
                  <div className="p-4 bg-white rounded-lg border border-border-light">
                    <p className="font-medium text-dark-900">Pre-Primary</p>
                    <p>Nursery, LKG, UKG</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-border-light">
                    <p className="font-medium text-dark-900">Primary</p>
                    <p>Class 1 to 5</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-border-light">
                    <p className="font-medium text-dark-900">Middle</p>
                    <p>Class 6 to 8</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-border-light">
                    <p className="font-medium text-dark-900">Secondary</p>
                    <p>Class 9 to 10</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-border-light lg:col-span-2">
                    <p className="font-medium text-dark-900">Senior Secondary</p>
                    <p>Class 11-12 (Arts, Commerce, Science)</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-card-lg bg-gradient-to-br from-accent-50 to-accent-100 border border-accent-100">
                <h3 className="text-heading-md font-semibold text-dark-900 mb-4 flex items-center gap-2">
                  <Target className="w-6 h-6 text-accent-600" />
                  Important Notice
                </h3>
                <div className="space-y-3 text-dark-600">
                  <p className="font-medium text-accent-700">
                    {schoolData.placeholderText}
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Detailed subject lists for each class</li>
                    <li>Specific curriculum and syllabus details</li>
                    <li>Laboratory and practical facilities</li>
                    <li>Assessment and examination patterns</li>
                    <li>Teacher qualifications and student-teacher ratios</li>
                    <li>Special coaching or remedial classes</li>
                    <li>Career guidance and counseling services</li>
                  </ul>
                  <p className="text-sm text-dark-500">
                    This information will be updated when officially provided by the school administration.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-card-lg bg-white border border-border-light shadow-soft">
                <h3 className="text-heading-md font-semibold text-dark-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-forest-600" />
                  What We Can Confirm
                </h3>
                <ul className="space-y-3 text-dark-600">
                  {[
                    "School offers education from Nursery to Class 12",
                    "Senior Secondary (Class 11-12) streams: Arts, Commerce, Science",
                    "Affiliated with Board of School Education Haryana (BSEH)",
                    "School Code: 10244",
                    "Located in Matour village, Kaithal, Haryana",
                    "Co-educational institution",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-forest-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-forest-800">
        <div className="container-custom text-center">
          <ScrollReveal delay={0.1}>
            <h2 className="text-heading-xl sm:text-display-sm font-medium text-white mb-4">
              Ready to Explore Further?
            </h2>
            <p className="text-forest-200 text-body-lg mb-8 max-w-2xl mx-auto">
              For detailed curriculum information, subject choices, and admission procedures,
              please contact the school directly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-accent group">
                Contact School
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/admissions" className="border-2 border-white text-white hover:bg-white/10 px-7 py-3.5 rounded-btn font-medium transition-colors group inline-flex items-center gap-2">
                Admission Info
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}