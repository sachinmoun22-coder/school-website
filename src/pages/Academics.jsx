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
        Explore the academic streams offered at Shaheed Bhagat Singh Sr. Sec. School for Classes 11 and 12.
      </PageBanner>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal delay={0.1}>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <p className="text-lg text-navy-600 leading-relaxed mb-6">
                {schoolData.introduction}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <span className="badge badge-primary">
                  <GraduationCap className="w-4 h-4 mr-1" />
                  {schoolData.educationLevel}
                </span>
                <span className="badge badge-secondary">
                  <Target className="w-4 h-4 mr-1" />
                  Classes 11 & 12
                </span>
                <span className="badge badge-navy">
                  <BookOpen className="w-4 h-4 mr-1" />
                  BSEH Affiliated
                </span>
              </div>
            </div>
          </ScrollReveal>

          <SectionTitle
            title="Available Streams"
            subtitle="Choose Your Path"
          />

          <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-3 gap-6 mb-16">
            {streamsData.map((stream, index) => {
              const StreamIcon = getStreamIcon(stream.icon);
              return (
                <ScrollReveal key={stream.id} delay={0.1 * index} className="h-full">
                  <div className="card h-full p-6 flex flex-col">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center mb-6">
                      <StreamIcon className="w-7 h-7 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 mb-3">{stream.name}</h3>
                    <p className="text-navy-600 leading-relaxed flex-1 mb-6">{stream.description}</p>
                    <div className="pt-4 border-t border-navy-100">
                      <Link to="/academics" className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors inline-flex items-center gap-1">
                        Learn more
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-padding bg-navy-50">
        <div className="container-custom">
          <StaggerContainer staggerDelay={0.15}>
            {streamsData.map((stream, index) => {
              const StreamIcon = getStreamIcon(stream.icon);
              return (
                <ScrollReveal key={stream.id} delay={0.1 * index} className="mb-16 last:mb-0">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-navy-100">
                      <img
                        src={`https://images.unsplash.com/photo-${stream.id === 'arts' ? '1503676260728-1c00da094a0b' : stream.id === 'commerce' ? '1554224155-6726b3ff408f' : '1581094794329-c8112a89af12'}?w=800&q=80`}
                        alt={`${stream.name} stream educational environment`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/10 to-transparent" />
                    </div>
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                          <StreamIcon className="w-6 h-6 text-primary-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-navy-900">{stream.name} Stream</h3>
                          <p className="text-primary-600 font-medium">For Classes 11 & 12</p>
                        </div>
                      </div>
                      <p className="text-navy-600 leading-relaxed text-lg">
                        {stream.description}
                      </p>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-navy-900">Potential Subject Areas:</h4>
                        <div className="p-4 rounded-lg bg-white border border-navy-200">
                          <p className="text-navy-600 text-sm italic">
                            {schoolData.placeholderText}
                          </p>
                          <p className="text-navy-500 text-xs mt-2">
                            Detailed subject combinations and curriculum information will be published when available from the school.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-3 pt-4">
                        <span className="badge badge-primary">BSEH Curriculum</span>
                        <span className="badge badge-secondary">Senior Secondary</span>
                        <span className="badge badge-navy">Class 11-12</span>
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
            title="Curriculum Information"
            subtitle="Details"
          />
          <ScrollReveal delay={0.1}>
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="p-6 rounded-2xl bg-navy-50 border border-navy-100">
                <h3 className="text-xl font-semibold text-navy-900 mb-4 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-primary-600" />
                  Board Affiliation & Curriculum
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 text-navy-600">
                  <div>
                    <p className="font-medium text-navy-900">Board</p>
                    <p>Board of School Education Haryana (BSEH)</p>
                  </div>
                  <div>
                    <p className="font-medium text-navy-900">School Code</p>
                    <p className="font-mono">{schoolData.schoolCode}</p>
                  </div>
                  <div>
                    <p className="font-medium text-navy-900">Classes</p>
                    <p>Up to Class 12 (Senior Secondary)</p>
                  </div>
                  <div>
                    <p className="font-medium text-navy-900">Streams</p>
                    <p>Arts, Commerce, Science</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-secondary-50 to-secondary-100 border border-secondary-100">
                <h3 className="text-xl font-semibold text-navy-900 mb-4 flex items-center gap-2">
                  <Target className="w-6 h-6 text-secondary-600" />
                  Important Notice
                </h3>
                <div className="space-y-3 text-navy-600">
                  <p className="font-medium text-secondary-700">
                    {schoolData.placeholderText}
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Detailed subject lists for each stream</li>
                    <li>Specific subject combinations offered</li>
                    <li>Curriculum syllabus details</li>
                    <li>Laboratory and practical facilities</li>
                    <li>Assessment and examination patterns</li>
                    <li>Teacher qualifications and student-teacher ratios</li>
                    <li>Special coaching or remedial classes</li>
                    <li>Career guidance and counseling services</li>
                  </ul>
                  <p className="text-sm text-navy-500">
                    This information will be updated when officially provided by the school administration.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-navy-200 shadow-sm">
                <h3 className="text-xl font-semibold text-navy-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  What We Can Confirm
                </h3>
                <ul className="space-y-3 text-navy-600">
                  {[
                    "School is a Senior Secondary School (up to Class 12)",
                    "Three streams offered: Arts, Commerce, Science",
                    "Affiliated with Board of School Education Haryana (BSEH)",
                    "School Code: 10244",
                    "Located in Matour, Kaithal, Haryana, India",
                    "Co-educational institution",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-primary-600">
        <div className="container-custom text-center">
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Explore Further?
            </h2>
            <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
              For detailed curriculum information, subject choices, and admission procedures,
              please contact the school directly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-lg font-medium transition-colors group inline-flex items-center gap-2">
                Contact School
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/admission" className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-colors group inline-flex items-center gap-2">
                Admission Info
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}