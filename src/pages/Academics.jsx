import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Palette, Briefcase, Microscope, ArrowRight, GraduationCap, Target, CheckCircle } from "lucide-react";
import { getSEO } from "../data/seoConfig";
import { SEOHead } from "../components/SEOHead";
import { PageBanner } from "../components/PageBanner";
import { Breadcrumb } from "../components/Breadcrumb";
import { SectionTitle } from "../components/SectionTitle";
import { ScrollReveal, StaggerContainer } from "../components/ScrollReveal";
import { useLocalizedData } from "../i18n/useLocalizedData";

const streamIcons = { Palette, Briefcase, Microscope };
const streamSubjects = {
  arts: ["Hindi","English","History","Political Science","Geography","Economics","Sociology","Physical Education","Home Science","Drawing / Fine Arts","Sanskrit"],
  commerce: ["Hindi","English","Accountancy","Business Studies","Economics","Mathematics","Physical Education","Computer Science / Informatics Practices"],
  science: ["Hindi","English","Physics","Chemistry","Biology","Mathematics","Physical Education","Computer Science / Informatics Practices"],
};
const streamSubjectsHi = {
  arts: ["हिंदी","अंग्रेज़ी","इतिहास","राजनीति विज्ञान","भूगोल","अर्थशास्त्र","समाजशास्त्र","शारीरिक शिक्षा","गृह विज्ञान","चित्रकला / ललित कला","संस्कृत"],
  commerce: ["हिंदी","अंग्रेज़ी","लेखाशास्त्र","व्यवसाय अध्ययन","अर्थशास्त्र","गणित","शारीरिक शिक्षा","कंप्यूटर विज्ञान / सूचना प्रौद्योगिकी"],
  science: ["हिंदी","अंग्रेज़ी","भौतिकी","रसायन विज्ञान","जीव विज्ञान","गणित","शारीरिक शिक्षा","कंप्यूटर विज्ञान / सूचना प्रौद्योगिकी"],
};
function getStreamIcon(iconName) { return streamIcons[iconName] || BookOpen; }

export function Academics() {
  const { pathname } = useLocation();
  const seo = getSEO(pathname);
  const { t, schoolData, streamsData, language } = useLocalizedData();
  const a = t.academics;
  const subjectsFor = (id) => (language === "hi" ? streamSubjectsHi : streamSubjects)[id] || [];
  const streamNotes = language === "hi" ? {
    arts: "विद्यार्थी अपनी रुचि के अनुसार इन विषयों में से चयन कर सकते हैं। हिंदी और अंग्रेज़ी सभी के लिए अनिवार्य हैं।",
    commerce: "विद्यार्थी अपनी रुचि और करियर लक्ष्य के अनुसार इन विषयों में से चयन कर सकते हैं। हिंदी और अंग्रेज़ी सभी के लिए अनिवार्य हैं।",
    science: "विद्यार्थी अपने करियर लक्ष्य (मेडिकल या नॉन-मेडिकल) के अनुसार इन विषयों में से चयन कर सकते हैं। हिंदी और अंग्रेज़ी सभी के लिए अनिवार्य हैं।",
  } : {
    arts: "Students may choose subjects based on their interests. Hindi and English are compulsory for all.",
    commerce: "Students may choose subjects based on their interests and career goals. Hindi and English are compulsory for all.",
    science: "Students may choose subjects based on their career goals (Medical or Non-Medical). Hindi and English are compulsory for all.",
  };

  return (
    <div className="min-h-screen">
      <SEOHead {...seo} />
      <Breadcrumb pathname={pathname} />
      <PageBanner title={a.bannerTitle} subtitle={a.bannerSubtitle}>{a.bannerDesc}</PageBanner>

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
                  {a.bsehAffiliated}
                </span>
                <span className="badge badge-cream">
                  <BookOpen className="w-4 h-4 mr-1" />
                  {schoolData.schoolCode}
                </span>
              </div>
            </div>
          </ScrollReveal>

          <SectionTitle
            title={a.streamsTitle}
            subtitle={a.streamsSubtitle}
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
                          {t.home.learnMoreStream}
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
              const subjectDetails = streamSubjectDetails[stream.id];
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
                          <h3 className="text-heading-lg font-semibold text-dark-900">{stream.name}</h3>
                          <p className="text-forest-600 font-medium">{a.forClasses}</p>
                        </div>
                      </div>
                      <p className="text-dark-600 leading-relaxed text-body-lg">
                        {stream.description}
                      </p>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-dark-900">{a.potentialSubjects}</h4>
                        <div className="p-4 rounded-lg bg-white border border-border-light">
                          <div className="flex flex-wrap gap-2">
                            {subjectsFor(stream.id).map((subject) => (
                              <span key={subject} className="badge badge-forest">{subject}</span>
                            ))}
                          </div>
                          <p className="text-dark-600 text-sm mt-3">{streamNotes[stream.id]}</p>
                          <p className="text-dark-500 text-xs mt-2">
                            {a.contactForSubjects}{" "}
                            <a className="text-forest-600 hover:text-forest-700" href="tel:+917015056542">+91 7015056542</a>
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-3 pt-4">
                        <span className="badge badge-forest">{a.bsehCurriculum}</span>
                        <span className="badge badge-sage">{a.seniorSecondary}</span>
                        <span className="badge badge-cream">{a.class1112}</span>
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
            title={a.structureTitle}
            subtitle={a.structureSubtitle}
          />
          <ScrollReveal delay={0.1}>
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="p-6 rounded-card-lg bg-cream-100 border border-border-light">
                <h3 className="text-heading-md font-semibold text-dark-900 mb-4 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-forest-600" />
                  {a.classStructure}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-dark-600">
                  {a.levels.map((lvl, i) => (
                    <div key={i} className={`p-4 bg-white rounded-lg border border-border-light ${i === a.levels.length - 1 ? "lg:col-span-2" : ""}`}>
                      <p className="font-medium text-dark-900">{lvl.title}</p>
                      <p>{lvl.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-card-lg bg-gradient-to-br from-accent-50 to-accent-100 border border-accent-100">
                <h3 className="text-heading-md font-semibold text-dark-900 mb-4 flex items-center gap-2">
                  <Target className="w-6 h-6 text-accent-600" />
                  {a.notice}
                </h3>
                <div className="space-y-3 text-dark-600">
                  <p className="font-medium text-accent-700">{t.common.detailsSoon}</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    {a.noticeItems.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                  <p className="text-sm text-dark-500">{a.noticeFooter}</p>
                </div>
              </div>

              <div className="p-6 rounded-card-lg bg-white border border-border-light shadow-soft">
                <h3 className="text-heading-md font-semibold text-dark-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-forest-600" />
                  {a.confirmTitle}
                </h3>
                <ul className="space-y-3 text-dark-600">
                  {a.confirmItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-forest-500 flex-shrink-0 mt-0.5" />
                      <span>{item.replace("{code}", schoolData.schoolCode)}</span>
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
              {a.ctaTitle}
            </h2>
            <p className="text-forest-200 text-body-lg mb-8 max-w-2xl mx-auto">
              {a.ctaText}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-accent group">
                {a.contactSchool}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/admissions" className="border-2 border-white text-white hover:bg-white/10 px-7 py-3.5 rounded-btn font-medium transition-colors group inline-flex items-center gap-2">
                {a.admissionInfo}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}