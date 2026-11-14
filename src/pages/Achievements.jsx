import { useLocation } from "react-router-dom";
import { Award, Trophy, Medal, Star, Target, BookOpen, Zap, GraduationCap, Mail } from "lucide-react";
import { getSEO } from "../data/seoConfig";
import { SEOHead } from "../components/SEOHead";
import { PageBanner } from "../components/PageBanner";
import { Breadcrumb } from "../components/Breadcrumb";
import { SectionTitle } from "../components/SectionTitle";
import { ScrollReveal, StaggerContainer } from "../components/ScrollReveal";
import { useLocalizedData } from "../i18n/useLocalizedData";

const categoryIcons = { awards: Award, academic: GraduationCap, student: Star, sports: Trophy };

export function Achievements() {
  const { pathname } = useLocation();
  const seo = getSEO(pathname);
  const { t, schoolData, achievementsCategories, language } = useLocalizedData();
  const a = t.achievements;

  const typeItems = language === "hi" ? [
    { icon: Trophy, title: "खेल चैंपियनशिप", desc: "जिला, राज्य और राष्ट्रीय स्तर की खेल उपलब्धियाँ" },
    { icon: Medal, title: "शैक्षणिक ओलंपियाड", desc: "विज्ञान, गणित, अंग्रेज़ी और अन्य विषय ओलंपियाड" },
    { icon: Star, title: "सांस्कृतिक प्रतियोगिताएँ", desc: "वाद-विवाद, क्विज़, संगीत, नृत्य और कलात्मक प्रतियोगिताएँ" },
    { icon: Award, title: "संस्थागत पुरस्कार", desc: "शिक्षा विभागों से विद्यालय-स्तरीय सम्मान" },
  ] : [
    { icon: Trophy, title: "Sports Championships", desc: "District, state, and national level sports achievements" },
    { icon: Medal, title: "Academic Olympiads", desc: "Science, Mathematics, English, and other subject olympiads" },
    { icon: Star, title: "Cultural Competitions", desc: "Debate, quiz, music, dance, and artistic competitions" },
    { icon: Award, title: "Institutional Awards", desc: "School-level recognitions from education departments" },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead {...seo} />
      <Breadcrumb pathname={pathname} />
      <PageBanner title={a.bannerTitle} subtitle={a.bannerSubtitle}>{a.bannerDesc}</PageBanner>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal delay={0.1}>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <p className="text-body-lg text-dark-600 leading-relaxed mb-6">{a.intro}</p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="badge badge-forest"><GraduationCap className="w-4 h-4 mr-1" />{schoolData.educationLevel}</span>
                <span className="badge badge-sage"><BookOpen className="w-4 h-4 mr-1" />{schoolData.streams.length}</span>
                <span className="badge badge-cream"><Target className="w-4 h-4 mr-1" />{t.common.schoolCodeBseh}: {schoolData.schoolCode}</span>
              </div>
            </div>
          </ScrollReveal>

          <SectionTitle title={a.categoriesTitle} subtitle={a.categoriesSubtitle} />

          <StaggerContainer staggerDelay={0.15}>
            {achievementsCategories.map((category, index) => {
              const CategoryIcon = categoryIcons[category.id];
              return (
                <ScrollReveal key={category.id} delay={0.1 * index} className="mb-10 last:mb-0">
                  <div className="card p-5 sm:p-6 lg:p-8 overflow-hidden">
                    <div className="flex flex-col items-start gap-4 sm:flex-row sm:gap-6">
                      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-forest-100 to-forest-200 sm:h-16 sm:w-16">
                        <CategoryIcon className="h-7 w-7 text-forest-600 sm:h-8 sm:w-8" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="mb-3 text-heading-md font-semibold text-dark-900 sm:text-heading-lg">{category.title}</h3>
                        <p className="mb-6 text-dark-600 leading-relaxed">{category.description}</p>
                        <div className="rounded-xl border border-border-light bg-cream-100 p-4 sm:p-6">
                          <div className="flex items-start gap-3">
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent-100">
                              <Award className="w-5 h-5 text-accent-600" />
                            </div>
                            <div className="min-w-0">
                              <h4 className="font-semibold text-dark-900">{a.comingSoon}</h4>
                              <p className="text-sm text-dark-500">{t.common.detailsSoon}</p>
                            </div>
                          </div>
                        </div>
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
          <SectionTitle title={a.typesTitle} subtitle={a.typesSubtitle} />
          <ScrollReveal delay={0.1}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {typeItems.map((item, index) => (
                <div key={index} className="p-6 rounded-card-lg bg-white border border-border-light card-hover text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-forest-100 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-forest-600" />
                  </div>
                  <h4 className="font-semibold text-dark-900 mb-2">{item.title}</h4>
                  <p className="text-dark-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="mt-12">
            <div className="p-8 rounded-card-lg bg-white border border-border-light shadow-soft max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-accent-100 flex items-center justify-center">
                <Zap className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-heading-md font-semibold text-dark-900 mb-3">{a.verificationTitle}</h3>
              <p className="text-dark-600 leading-relaxed mb-4">{t.common.detailsSoon}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <SectionTitle title={a.contributeTitle} subtitle={a.contributeSubtitle} />
          <ScrollReveal delay={0.1}>
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href={`mailto:${schoolData.email}`} className="btn-primary group">
                  {a.emailVerified} <Mail className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="/contact" className="btn-outline group">{t.common.contactForm}</a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}