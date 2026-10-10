import { motion } from "framer-motion";
import { Award, Trophy, Medal, Star, Target, BookOpen, Users, Zap, GraduationCap, Mail } from "lucide-react";
import { schoolData, achievementsCategories } from "../data/schoolData";
import { PageBanner } from "../components/PageBanner";
import { SectionTitle } from "../components/SectionTitle";
import { ScrollReveal, StaggerContainer } from "../components/ScrollReveal";

const categoryIcons = {
  awards: Award,
  academic: GraduationCap,
  student: Star,
  sports: Trophy,
};

const categoryDescriptions = {
  awards: "Official awards, recognitions, and honors received by the school from educational authorities and organizations.",
  academic: "Academic excellence achievements including board examination results, merit positions, and scholarly accomplishments.",
  student: "Individual and group achievements by students in academics, competitions, olympiads, and other areas.",
  sports: "Sports championships, athletic achievements, and extracurricular competition victories.",
};

export function Achievements() {
  return (
    <div className="min-h-screen">
      <PageBanner
        title="Achievements & Recognition"
        subtitle="Our Pride"
      >
        Celebrating the accomplishments of our students, faculty, and institution.
      </PageBanner>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal delay={0.1}>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <p className="text-lg text-navy-600 leading-relaxed mb-6">
                Shaheed Bhagat Singh Sr. Sec. School, Matour is committed to excellence in education
                and holistic development of students. This section showcases our verified achievements
                and recognitions.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="badge badge-primary">
                  <GraduationCap className="w-4 h-4 mr-1" />
                  {schoolData.educationLevel}
                </span>
                <span className="badge badge-secondary">
                  <BookOpen className="w-4 h-4 mr-1" />
                  {schoolData.streams.length} Streams
                </span>
                <span className="badge badge-navy">
                  <Target className="w-4 h-4 mr-1" />
                  BSEH Code: {schoolData.schoolCode}
                </span>
              </div>
            </div>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.15}>
            {achievementsCategories.map((category, index) => {
              const CategoryIcon = categoryIcons[category.id];
              return (
                <ScrollReveal key={category.id} delay={0.1 * index} className="mb-12 last:mb-0">
                  <div className="card p-8 overflow-hidden">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 flex-shrink-0 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                        <CategoryIcon className="w-8 h-8 text-primary-600" />
                      </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-navy-900 mb-3">{category.title}</h3>
                      <p className="text-navy-600 leading-relaxed mb-6">
                        {categoryDescriptions[category.id]}
                      </p>
                      {category.items.length === 0 ? (
                        <div className="p-6 rounded-xl bg-navy-50 border border-navy-100">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-secondary-100 flex items-center justify-center">
                              <Award className="w-5 h-5 text-secondary-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-navy-900">
                                {schoolData.placeholderText}
                              </h4>
                              <p className="text-sm text-navy-500">
                                Verified {category.title.toLowerCase()} will be published here when information
                                becomes available from the school administration.
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <ul className="space-y-3" role="list">
                          {category.items.map((item, i) => (
                            <li key={i} className="flex items-center gap-3 p-3 rounded-lg bg-navy-50">
                              <Medal className="w-5 h-5 text-secondary-500 flex-shrink-0" />
                              <span className="text-navy-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
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
          <SectionTitle
            title="Types of Achievements We Track"
            subtitle="Categories"
          />
          <ScrollReveal delay={0.1}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Trophy, title: "Sports Championships", desc: "District, state, and national level sports achievements" },
                { icon: Medal, title: "Academic Olympiads", desc: "Science, Mathematics, English, and other subject olympiads" },
                { icon: Star, title: "Cultural Competitions", desc: "Debate, quiz, music, dance, and artistic competitions" },
                { icon: Award, title: "Institutional Awards", desc: "School-level recognitions from education departments" },
              ].map((item, index) => (
                <div key={index} className="p-6 rounded-2xl bg-white border border-navy-100 card-hover">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h4 className="font-semibold text-navy-900 mb-2">{item.title}</h4>
                  <p className="text-navy-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="mt-12">
            <div className="p-8 rounded-2xl bg-white border border-navy-200 shadow-sm max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-secondary-100 flex items-center justify-center">
                <Zap className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-3">
                Information Verification Process
              </h3>
              <p className="text-navy-600 leading-relaxed mb-4">
                All achievements listed on this page are verified through official school records
                and authorized sources. We do not publish unverified claims, self-reported statistics,
                or anecdotal accomplishments.
              </p>
              <p className="text-navy-500 text-sm">
                If you are a school representative and would like to provide verified achievement data,
                please contact us through the contact page.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <SectionTitle
            title="Have Verified Information?"
            subtitle="Contribute"
          />
          <ScrollReveal delay={0.1}>
            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-lg text-navy-600 leading-relaxed">
                Are you a school administrator, teacher, or authorized representative?
                Help us keep this information accurate and up-to-date.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`mailto:${schoolData.email}`}
                  className="btn-primary group"
                >
                  Email Verified Data
                  <Mail className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/contact"
                  className="btn-outline group"
                >
                  Contact Form
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}