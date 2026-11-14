import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, GraduationCap, Award, Users, Building2, Target, Palette, Briefcase, Microscope, Heart, Shield, Bus, Home as HomeIcon, Bed, FlaskConical } from "lucide-react";
import { hqImages } from "../data/schoolData";
import { getSEO } from "../data/seoConfig";
import { SEOHead } from "../components/SEOHead";
import { Hero } from "../components/Hero";
import { Breadcrumb } from "../components/Breadcrumb";
import { SectionTitle } from "../components/SectionTitle";
import { ScrollReveal, StaggerContainer } from "../components/ScrollReveal";
import { useLocalizedData } from "../i18n/useLocalizedData";

function WelcomeSection({ t, schoolData }) {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle
          title={t.home.welcomeTitle}
          subtitle={t.home.welcomeSubtitle}
        />
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal delay={0.1} direction="left">
            <div className="relative aspect-[4/3] rounded-card-lg overflow-hidden bg-forest-100">
              <img
                src={hqImages.campus}
                alt={schoolData.name}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-forest-700/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-xl border border-border-light bg-white/95 p-3 shadow-card backdrop-blur-sm sm:p-5"
                >
                  <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
                    <div className="shrink-0 rounded-xl bg-forest-100 p-2.5 text-forest-700 sm:p-3">
                      <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-lg font-heading font-semibold text-dark-900 sm:text-2xl">{t.home.nurseryTo12}</p>
                      <p className="text-xs text-dark-500 sm:text-sm">{t.home.completeSchooling}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} direction="right">
            <div className="space-y-6">
              <p className="text-body-lg text-dark-600 leading-relaxed">
                {schoolData.introduction}
              </p>
              <p className="text-dark-600 leading-relaxed">
                {schoolData.about} {t.home.welcomeExtra}
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="badge badge-forest">
                  <GraduationCap className="w-4 h-4 mr-1" />
                  {schoolData.schoolType}
                </span>
                <span className="badge badge-sage">
                  <Target className="w-4 h-4 mr-1" />
                  {schoolData.educationLevel}
                </span>
                <span className="badge badge-cream">
                  <Building2 className="w-4 h-4 mr-1" />
                  {t.common.schoolCodeBseh}: {schoolData.schoolCode}
                </span>
              </div>
              <Link to="/about" className="btn-primary inline-flex mt-4 group">
                {t.home.readMoreAbout}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function HighlightsSection({ t, highlightsData }) {
  return (
    <section className="section-padding bg-cream-100">
      <div className="container-custom">
        <SectionTitle
          title={t.home.highlightsTitle}
          subtitle={t.home.highlightsSubtitle}
        />
        <StaggerContainer staggerDelay={0.1} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlightsData.map((highlight, index) => (
            <ScrollReveal key={highlight.id} delay={0.1 * index} className="h-full">
              <div className="card h-full p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-forest-100 to-forest-200 flex items-center justify-center">
                  {(() => {
                    switch (highlight.icon) {
                      case "GraduationCap": return <GraduationCap className="w-7 h-7 text-forest-600" />;
                      case "Users": return <Users className="w-7 h-7 text-forest-600" />;
                      case "Palette": return <Palette className="w-7 h-7 text-forest-600" />;
                      case "Target": return <Target className="w-7 h-7 text-forest-600" />;
                      default: return <BookOpen className="w-7 h-7 text-forest-600" />;
                    }
                  })()}
                </div>
                <h3 className="text-heading-sm font-semibold text-dark-900 mb-2">{highlight.title}</h3>
                <p className="text-dark-600 text-sm leading-relaxed">{highlight.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function KeyNumbersSection({ t }) {
  const icons = [HomeIcon, FlaskConical, Bus, Bed];
  return (
    <section className="section-padding bg-forest-800 relative overflow-hidden section-dark">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(33,77,59,0.3)_0%,_transparent_70%)]" />
      <div className="relative z-10 container-custom">
        <ScrollReveal delay={0.1} className="text-center mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-4">
            <span className="section-title-label">{t.home.keyNumbers}</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="section-title text-white !bg-none !-webkit-text-fill-color-white leading-[1.08] pb-1">
            {t.home.campusGlance}
          </motion.h2>
          <motion.div initial={{ opacity: 0, scaleX: 0.6 }} whileInView={{ opacity: 1, scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-accent-400 via-accent-300 to-accent-400" />
        </ScrollReveal>
        <StaggerContainer staggerDelay={0.1} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.home.keyNumberItems.map((item, index) => {
            const Icon = icons[index] || HomeIcon;
            return (
              <ScrollReveal key={index} delay={0.1 * index}>
                <div className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-forest-700/60 border border-forest-500/60 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-accent-400" />
                  </div>
                  <h3 className="text-heading-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-cream-100/80 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

function AcademicProgramsSection({ t, streamsData }) {
  return (
    <section id="academics" className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle title={t.home.academicsTitle} subtitle={t.home.academicsSubtitle} />
        <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-3 gap-6 mb-12">
          {streamsData.map((stream, index) => (
            <ScrollReveal key={stream.id} delay={0.1 * index} className="h-full">
              <Link to="/academics" className="card h-full overflow-hidden group" aria-label={`${stream.name}`}>
                <div className="relative h-48 overflow-hidden">
                  <img src={stream.image} alt={stream.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                      {(() => {
                        switch (stream.icon) {
                          case "Palette": return <Palette className="w-7 h-7 text-white" />;
                          case "Briefcase": return <Briefcase className="w-7 h-7 text-white" />;
                          case "Microscope": return <Microscope className="w-7 h-7 text-white" />;
                          default: return <BookOpen className="w-7 h-7 text-white" />;
                        }
                      })()}
                    </div>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-heading-sm font-semibold text-dark-900 mb-2">{stream.name}</h3>
                  <p className="text-dark-600 text-sm leading-relaxed flex-1 mb-4">{stream.description}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-border-light">
                    <span className="text-sm font-medium text-forest-600 group-hover:text-forest-700 transition-colors">{t.home.learnMoreStream}</span>
                    <motion.div whileHover={{ x: 4 }} className="p-2 rounded-lg bg-forest-100 text-forest-600 group-hover:bg-forest-200 transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </StaggerContainer>
        <div className="text-center">
          <Link to="/academics" className="btn-primary group inline-flex">
            {t.home.viewAllPrograms}
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection({ t, whyChooseData }) {
  return (
    <section className="section-padding bg-forest-800 relative overflow-hidden section-dark">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(33,77,59,0.3)_0%,_transparent_70%)]" />
      <div className="absolute inset-0 bg-[url('/images/school-entrance-matour-kaithal.webp')] bg-cover bg-center opacity-[0.15]" />
      <div className="relative z-10 container-custom">
        <SectionTitle title={t.home.whyTitle} subtitle={t.home.whySubtitle} />
        <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseData.map((item, index) => (
            <ScrollReveal key={item.id} delay={0.1 * index}>
              <div className="p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-forest-700/60 border border-forest-500/60 flex items-center justify-center">
                  {(() => {
                    switch (item.icon) {
                      case "GraduationCap": return <GraduationCap className="w-7 h-7 text-accent-400" />;
                      case "Users": return <Users className="w-7 h-7 text-accent-400" />;
                      case "Palette": return <Palette className="w-7 h-7 text-accent-400" />;
                      case "Target": return <Target className="w-7 h-7 text-accent-400" />;
                      default: return <BookOpen className="w-7 h-7 text-accent-400" />;
                    }
                  })()}
                </div>
                <h3 className="text-heading-sm font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-cream-100/80 text-sm leading-relaxed">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function FacilitiesPreviewSection({ t, facilitiesData }) {
  return (
    <section id="facilities" className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-12">
          <SectionTitle title={t.home.facilitiesTitle} subtitle={t.home.facilitiesSubtitle} titleClassName="leading-tight pb-1" subtitleClassName="relative -top-1" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {facilitiesData.slice(0, 6).map((facility, index) => (
            <ScrollReveal key={facility.id} delay={0.1 * index}>
              <Link to="/facilities" className="card overflow-hidden group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={facility.image} alt={facility.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5">
                  <h3 className="text-heading-sm font-semibold text-dark-900 mb-1">{facility.name}</h3>
                  <p className="text-dark-600 text-sm leading-relaxed">{facility.description}</p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        <div className="text-center">
          <Link to="/facilities" className="btn-secondary group inline-flex">
            {t.home.viewAllFacilities}
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function AchievementsPreviewSection({ t }) {
  return (
    <section className="section-padding bg-cream-100">
      <div className="container-custom">
        <SectionTitle title={t.home.achievementsTitle} titleClassName="leading-tight pb-1" />
        <ScrollReveal delay={0.1}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="p-8 sm:p-12 rounded-card-lg bg-white border border-border-light">
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-forest-100 flex items-center justify-center">
                <Award className="w-8 h-8 text-forest-600" />
              </div>
              <h3 className="text-heading-md font-semibold text-dark-900 mb-3">{t.home.achievementsCardTitle}</h3>
              <p className="text-dark-600 leading-relaxed mb-6">{t.home.achievementsText}</p>
              <p className="text-forest-600 text-sm font-medium">{t.home.achievementsSoon}</p>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.2} className="mt-8 text-center">
          <Link to="/achievements" className="btn-outline group inline-flex">
            {t.home.viewAchievements}
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

function GalleryPreviewSection({ t }) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-10">
          <SectionTitle title={t.home.galleryTitle} titleClassName="leading-tight pb-1" />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="group relative col-span-2 aspect-[16/10] overflow-hidden rounded-card-lg lg:col-span-2 lg:row-span-2 lg:aspect-[4/3]">
            <img src={hqImages.building} alt={t.home.galleryCampus} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="eager" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[40%] bg-[linear-gradient(to_top,rgba(0,0,0,0.65),transparent)]" aria-hidden="true" />
            <div className="pointer-events-none absolute inset-0 z-10 flex items-end p-4 sm:p-6">
              <div className="min-w-0 text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.6)]">
                <h3 className="text-heading-sm font-semibold text-white sm:text-heading-md">{t.home.galleryCampus}</h3>
                <p className="text-sm text-white">{t.home.galleryCampusSub}</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-square rounded-card-lg overflow-hidden group">
            <img src={hqImages.classroom} alt={t.home.galleryClassroom} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[40%] bg-[linear-gradient(to_top,rgba(0,0,0,0.65),transparent)]" aria-hidden="true" />
            <div className="pointer-events-none absolute inset-0 z-10 flex items-end p-4">
              <h3 className="font-semibold text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.6)]">{t.home.galleryClassroom}</h3>
            </div>
          </div>
          <div className="relative aspect-square rounded-card-lg overflow-hidden group">
            <img src={hqImages.campus} alt={t.home.galleryCampusView} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[40%] bg-[linear-gradient(to_top,rgba(0,0,0,0.65),transparent)]" aria-hidden="true" />
            <div className="pointer-events-none absolute inset-0 z-10 flex items-end p-4">
              <h3 className="font-semibold text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.6)]">{t.home.galleryCampusView}</h3>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link to="/gallery" className="btn-primary group inline-flex">
            {t.home.viewFullGallery}
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function AdmissionCTASection({ t }) {
  return (
    <section className="section-padding bg-forest-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,_rgba(214,168,92,0.15)_0%,_transparent_50%)]" />
      <div className="relative z-10 container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-400/20 text-accent-300 text-xs font-medium uppercase tracking-wider mb-6">
              <Heart className="w-4 h-4" />
              {t.home.admissionCtaBadge}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="mb-6">
            <h2 className="text-display-sm sm:text-display-md font-medium text-white leading-tight mb-4">{t.home.admissionCtaTitle}</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.3} className="mb-8">
            <p className="text-body-lg text-forest-200 leading-relaxed">{t.home.admissionCtaText}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.4} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/admissions" className="btn-accent group">
              {t.nav.admissionEnquiry}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-7 py-3.5 rounded-btn font-medium transition-all duration-300 inline-flex items-center gap-2">
              {t.common.contactUs}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export function Home() {
  const { pathname } = useLocation();
  const seo = getSEO(pathname);
  const { t, schoolData, streamsData, highlightsData, whyChooseData, facilitiesData } = useLocalizedData();

  return (
    <div className="min-h-screen">
      <SEOHead {...seo} />
      <Breadcrumb pathname={pathname} />
      <Hero />
      <WelcomeSection t={t} schoolData={schoolData} />
      <HighlightsSection t={t} highlightsData={highlightsData} />
      <KeyNumbersSection t={t} />
      <AcademicProgramsSection t={t} streamsData={streamsData} />
      <WhyChooseSection t={t} whyChooseData={whyChooseData} />
      <FacilitiesPreviewSection t={t} facilitiesData={facilitiesData} />
      <AchievementsPreviewSection t={t} />
      <GalleryPreviewSection t={t} />
      <AdmissionCTASection t={t} />
    </div>
  );
}