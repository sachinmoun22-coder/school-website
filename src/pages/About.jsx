import { Link, useLocation } from "react-router-dom";
import { BookOpen, GraduationCap, Building2, Award, MapPin, Mail, Phone, ArrowRight, CheckCircle } from "lucide-react";
import { hqImages } from "../data/schoolData";
import { PageBanner } from "../components/PageBanner";
import { Breadcrumb } from "../components/Breadcrumb";
import { SectionTitle } from "../components/SectionTitle";
import { ScrollReveal } from "../components/ScrollReveal";
import { SEOHead } from "../components/SEOHead";
import { getSEO } from "../data/seoConfig";
import { useLocalizedData } from "../i18n/useLocalizedData";

export function About() {
  const { pathname } = useLocation();
  const seo = getSEO(pathname);
  const { t, schoolData } = useLocalizedData();
  const a = t.about;
  return (
    <div className="min-h-screen">
      <SEOHead {...seo} />
      <Breadcrumb pathname={pathname} />
      <PageBanner
        title={a.bannerTitle}
        subtitle={a.bannerSubtitle}
      >
        {a.bannerDesc}
      </PageBanner>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="about-grid grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="about-left space-y-8">
              <ScrollReveal delay={0.1} direction="left">
                <h2 className="text-heading-xl font-medium text-dark-900 mb-4">{a.ourSchool}</h2>
                <p className="text-body-lg text-dark-600 leading-relaxed mb-4">
                  {schoolData.introduction}
                </p>
                <p className="text-dark-600 leading-relaxed">
                  {schoolData.about}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2} direction="left">
                <div className="p-6 rounded-card-lg bg-cream-100 border border-border-light">
                  <h3 className="text-heading-md font-semibold text-dark-900 mb-4 flex items-center gap-2">
                    <Building2 className="w-6 h-6 text-forest-600" />
                    {a.keyInfo}
                  </h3>
                  <dl className="space-y-4 text-dark-600">
                    <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-border-light last:border-0">
                      <dt className="font-medium text-dark-700">{a.schoolName}</dt>
                      <dd className="text-dark-900 mt-1 sm:mt-0">{schoolData.name}</dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-border-light">
                      <dt className="font-medium text-dark-700">{t.common.location}</dt>
                      <dd className="text-dark-900 mt-1 sm:mt-0">{schoolData.location}</dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-border-light">
                      <dt className="font-medium text-dark-700">{a.schoolType}</dt>
                      <dd className="text-dark-900 mt-1 sm:mt-0">{schoolData.schoolType}</dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-border-light">
                      <dt className="font-medium text-dark-700">{a.educationLevel}</dt>
                      <dd className="text-dark-900 mt-1 sm:mt-0">{schoolData.educationLevel}</dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-border-light">
                      <dt className="font-medium text-dark-700">{t.common.schoolCodeBseh}</dt>
                      <dd className="text-dark-900 font-mono mt-1 sm:mt-0">{schoolData.schoolCode}</dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-border-light">
                      <dt className="font-medium text-dark-700">{t.common.board}</dt>
                      <dd className="text-dark-900 mt-1 sm:mt-0">{schoolData.board}</dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-border-light">
                      <dt className="font-medium text-dark-700">{t.common.principal}</dt>
                      <dd className="text-dark-900 mt-1 sm:mt-0">{schoolData.principalName}</dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between py-3">
                      <dt className="font-medium text-dark-700">{a.streamsOffered}</dt>
                      <dd className="text-dark-900 mt-1 sm:mt-0">{schoolData.streams.join(", ")}</dd>
                    </div>
                  </dl>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3} direction="left">
                <div className="p-6 rounded-card-lg bg-gradient-to-br from-forest-50 to-cream-100 border border-forest-100">
                  <h3 className="text-heading-md font-semibold text-dark-900 mb-4 flex items-center gap-2">
                    <GraduationCap className="w-6 h-6 text-forest-600" />
                    {a.eduScope}
                  </h3>
                  <ul className="space-y-3 text-dark-600">
                    {a.eduScopeItems.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <BookOpen className="w-5 h-5 text-forest-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            <div className="about-right flex flex-col gap-6">
              <ScrollReveal delay={0.15} direction="right">
                <div className="school-image-wrapper relative aspect-[4/3] rounded-card-lg overflow-hidden bg-forest-100 flex items-center justify-center p-12">
                  <img
                    src="/images/website logo.png"
                    alt="S.B.S Sr.Sec. School Logo"
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.25} direction="right">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl bg-white shadow-soft border border-border-light card-hover">
                    <div className="w-12 h-12 rounded-xl bg-forest-100 flex items-center justify-center mb-3">
                      <MapPin className="w-6 h-6 text-forest-600" />
                    </div>
                    <h4 className="font-semibold text-dark-900 mb-1">{t.common.location}</h4>
                    <p className="text-dark-600 text-sm">{schoolData.location}</p>
                  </div>
                  <div className="p-5 rounded-xl bg-white shadow-soft border border-border-light card-hover">
                    <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center mb-3">
                      <Mail className="w-6 h-6 text-accent-600" />
                    </div>
                    <h4 className="font-semibold text-dark-900 mb-1">{t.common.email}</h4>
                    <a href={`mailto:${schoolData.email}`} className="text-dark-600 text-sm hover:text-forest-600 transition-colors">
                      {schoolData.email}
                    </a>
                  </div>
                  <div className="p-5 rounded-xl bg-white shadow-soft border border-border-light card-hover">
                    <div className="w-12 h-12 rounded-xl bg-cream-200 flex items-center justify-center mb-3">
                      <Phone className="w-6 h-6 text-dark-600" />
                    </div>
                    <h4 className="font-semibold text-dark-900 mb-1">{t.common.phone}</h4>
                    <p className="text-dark-600 text-sm">
                      {schoolData.phone}
                    </p>
                  </div>
                  <div className="p-5 rounded-xl bg-white shadow-soft border border-border-light card-hover">
                    <div className="w-12 h-12 rounded-xl bg-sage-100 flex items-center justify-center mb-3">
                      <Award className="w-6 h-6 text-sage-600" />
                    </div>
                    <h4 className="font-semibold text-dark-900 mb-1">{t.common.schoolCode}</h4>
                    <p className="text-dark-600 text-sm font-mono">{schoolData.schoolCode}</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.35} direction="right">
                <div className="about-card p-6 rounded-xl bg-white border border-border-light shadow-soft">
                  <h3 className="text-heading-md font-semibold text-dark-900 mb-4 flex items-center gap-2">
                    <Building2 className="w-6 h-6 text-forest-600" />
                    {a.whyChoose}
                  </h3>
                  <ul className="space-y-3 text-dark-600">
                    {a.whyItems.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-forest-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4} direction="right">
                <div className="about-card p-6 rounded-xl bg-white border border-border-light shadow-soft">
                  <h3 className="text-heading-md font-semibold text-dark-900 mb-4 flex items-center gap-2">
                    <Award className="w-6 h-6 text-forest-600" />
                    {a.quickFacts}
                  </h3>
                  <div className="stats-grid grid grid-cols-2 gap-4">
                    <div className="text-center p-3 rounded-lg bg-cream-50">
                      <p className="text-xl font-bold text-forest-700">{schoolData.educationLevel}</p>
                      <p className="text-xs text-dark-500 mt-1">{a.classesLabel}</p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-cream-50">
                      <p className="text-xl font-bold text-forest-700">{schoolData.streams.length}</p>
                      <p className="text-xs text-dark-500 mt-1">{a.streamsLabel}</p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-cream-50">
                      <p className="text-xl font-bold text-forest-700">{schoolData.board}</p>
                      <p className="text-xs text-dark-500 mt-1">{a.boardLabel}</p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-cream-50">
                      <p className="text-xl font-bold text-forest-700">{schoolData.schoolCode}</p>
                      <p className="text-xs text-dark-500 mt-1">{a.codeLabel}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.45} direction="right">
                <div className="cta-card p-6 rounded-xl text-white" style={{ background: "#1f4d36" }}>
                  <h3 className="text-heading-md font-semibold mb-2">{a.admissionsOpen}</h3>
                  <p className="text-sm mb-5 opacity-90">
                    {a.admissionsOpenText}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to="/admissions"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all hover:opacity-90"
                      style={{ background: "#d6a85c", color: "#1a221d" }}
                    >
                      {a.admissionEnquiry}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                      href={`tel:+91${schoolData.phone}`}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all"
                      style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)" }}
                    >
                      <Phone className="w-4 h-4" />
                      Call {schoolData.phone}
                    </a>
                  </div>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white principal-section">
        <div className="container-custom">
          <SectionTitle title={a.principalTitle} subtitle={a.principalSubtitle} showDecoration={true} />
          <ScrollReveal delay={0.1}>
            <div className="max-w-5xl mx-auto">
              <div className="relative rounded-3xl bg-navy-900 overflow-hidden shadow-card border border-navy-700/50">
                <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950" />
                <div className="relative p-5 sm:p-8 md:p-12">
                  <div className="grid gap-8 md:gap-12 items-stretch">
                    <div className="flex flex-col justify-center z-10 relative">
                      <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 md:mb-8 font-light">
                        {a.principalMsg1}
                        <br /><br />
                        {a.principalMsg2}
                      </p>
                      <div className="flex items-end gap-2 pt-5 md:pt-6 border-t border-white/10">
                        <span className="text-gold-400 text-[12px] font-semibold tracking-wider italic">—</span>
                        <div className="flex flex-col">
                          <span className="text-white font-semibold text-sm">{schoolData.principalName}</span>
                          <span className="text-gold-400 text-[11px] uppercase tracking-wider">{a.principalRole}</span>
                        </div>
                      </div>
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
          <SectionTitle title={a.connectTitle} subtitle={a.connectSubtitle} />
          <ScrollReveal delay={0.1}>
            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-body-lg text-dark-600 leading-relaxed">{a.connectText}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact" className="btn-primary group">
                  {t.common.contactUs}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/admissions" className="btn-outline group">
                  {a.admissionEnquiry}
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}