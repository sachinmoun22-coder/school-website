import { useLocation } from "react-router-dom";
import { GraduationCap, Building2, Target, Award, ArrowRight, FlaskConical, Home, Bus, Bed } from "lucide-react";
import { getSEO } from "../data/seoConfig";
import { SEOHead } from "../components/SEOHead";
import { PageBanner } from "../components/PageBanner";
import { Breadcrumb } from "../components/Breadcrumb";
import { SectionTitle } from "../components/SectionTitle";
import { ScrollReveal, StaggerContainer } from "../components/ScrollReveal";
import { useLocalizedData } from "../i18n/useLocalizedData";

const facilityIcons = {
  "Classrooms": Home,
  "Science Laboratory": FlaskConical,
  "Transport Facility": Bus,
  "Hostel Facility": Bed,
  "Playground": Dumbbell,
  "School Campus": Building2,
};

function getFacilityIcon(name) {
  return facilityIcons[name] || Building2;
}

export function Facilities() {
  const { pathname } = useLocation();
  const seo = getSEO(pathname);
  const { t, schoolData, facilitiesData, transportRoutes } = useLocalizedData();
  const f = t.facilities;

  return (
    <div className="min-h-screen">
      <SEOHead {...seo} />
      <Breadcrumb pathname={pathname} />
      <PageBanner title={f.bannerTitle} subtitle={f.bannerSubtitle}>
        {f.bannerDesc}
      </PageBanner>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal delay={0.1}>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <p className="text-body-lg text-dark-600 leading-relaxed mb-6">
                {f.intro}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="badge badge-forest">
                  <GraduationCap className="w-4 h-4 mr-1" />
                  {schoolData.educationLevel}
                </span>
                <span className="badge badge-sage">
                  <Building2 className="w-4 h-4 mr-1" />
                  {facilitiesData.length} {f.keyFacilities}
                </span>
                <span className="badge badge-cream">
                  <Target className="w-4 h-4 mr-1" />
                  {t.common.schoolCodeBseh}: {schoolData.schoolCode}
                </span>
              </div>
            </div>
          </ScrollReveal>

          <SectionTitle
            title={f.ourFacilities}
            subtitle={f.learningSpaces}
          />

          <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilitiesData.map((facility, index) => (
              <ScrollReveal key={facility.id} delay={0.1 * index}>
                <div className="card overflow-hidden group">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white font-semibold text-lg w-full bg-forest-900/80 backdrop-blur-sm px-4 py-2 rounded-lg text-center">
                        {facility.name}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-forest-100 flex items-center justify-center">
                        {(() => {
                          const Icon = facilityIcons[facility.name] || Building2;
                          return <Icon className="w-5 h-5 text-forest-600" />;
                        })()}
                      </div>
                      <h3 className="text-heading-sm font-semibold text-dark-900">{facility.name}</h3>
                    </div>
                    <p className="text-dark-600 text-sm leading-relaxed">{facility.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-padding bg-cream-100">
        <div className="container-custom">
          <SectionTitle
            title={f.transportTitle}
            subtitle={f.transportSubtitle}
          />
          <ScrollReveal delay={0.1}>
            <div className="max-w-4xl mx-auto">
              <div className="p-6 rounded-card-lg bg-white border border-border-light">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-forest-100 flex items-center justify-center">
                    <Bus className="w-6 h-6 text-forest-600" />
                  </div>
                  <div>
                    <h3 className="text-heading-md font-semibold text-dark-900">{f.transportHeading}</h3>
                    <p className="text-dark-600 text-sm">{f.transportDesc}</p>
                  </div>
                </div>
                <p className="text-dark-600 mb-6">
                  {f.transportText}
                </p>
                <div className="flex flex-wrap gap-2">
                  {transportRoutes.map((route, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full bg-forest-100 text-forest-700 text-sm font-medium border border-forest-200"
                    >
                      {route}
                    </span>
                  ))}
                </div>
                <p className="text-dark-500 text-sm mt-4">
                  {f.transportNote}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title={f.highlightsTitle}
            subtitle={f.highlightsSubtitle}
          />
          <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Home, title: t.home.keyNumberItems[0]?.title, desc: t.home.keyNumberItems[0]?.desc },
              { icon: FlaskConical, title: t.home.keyNumberItems[1]?.title, desc: t.home.keyNumberItems[1]?.desc },
              { icon: Bus, title: t.home.keyNumberItems[2]?.title, desc: t.home.keyNumberItems[2]?.desc },
              { icon: Bed, title: t.home.keyNumberItems[3]?.title, desc: t.home.keyNumberItems[3]?.desc },
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
            title={f.noticeTitle}
            subtitle={f.noticeSubtitle}
          />
          <ScrollReveal delay={0.1}>
            <div className="max-w-3xl mx-auto">
              <div className="p-8 rounded-card-lg bg-white border border-border-light">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-accent-100 flex items-center justify-center">
                    <Award className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <h3 className="text-heading-md font-semibold text-dark-900 mb-3">
                      {f.noticeHeading}
                    </h3>
                    <div className="space-y-3 text-dark-600">
                      <p>{f.noticeIntro}</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        {f.noticeItems.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                      <p className="mt-4 font-medium text-forest-700">{f.noticeFooter}</p>
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
            title={f.visitTitle}
            subtitle={f.visitSubtitle}
          />
          <ScrollReveal delay={0.1}>
            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-body-lg text-dark-600 leading-relaxed">
                {f.visitText}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href={`mailto:${schoolData.email}`} className="btn-primary group">
                  {f.emailUs}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="/contact" className="btn-outline group">
                  {f.contactPage}
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}