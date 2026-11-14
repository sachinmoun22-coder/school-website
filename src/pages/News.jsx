import { useLocation } from "react-router-dom";
import { newsData } from "../data/schoolData";
import { getSEO } from "../data/seoConfig";
import { SEOHead } from "../components/SEOHead";
import { PageBanner } from "../components/PageBanner";
import { Breadcrumb } from "../components/Breadcrumb";
import { SectionTitle } from "../components/SectionTitle";
import { ScrollReveal, StaggerContainer } from "../components/ScrollReveal";
import { AlertCircle, FileText, Calendar, Mail, ArrowRight, Bell, GraduationCap } from "lucide-react";
import { useLocalizedData } from "../i18n/useLocalizedData";

export function News() {
  const { pathname } = useLocation();
  const seo = getSEO(pathname);
  const { t, schoolData, language } = useLocalizedData();
  const n = t.news;
  const icons = [Calendar, FileText, Bell, GraduationCap];

  return (
    <div className="min-h-screen">
      <SEOHead {...seo} />
      <Breadcrumb pathname={pathname} />
      <PageBanner title={n.bannerTitle} subtitle={n.bannerSubtitle}>{n.bannerDesc}</PageBanner>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal delay={0.1}>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <p className="text-body-lg text-dark-600 leading-relaxed mb-6">{n.intro}</p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="badge badge-forest"><Bell className="w-4 h-4 mr-1" />{n.bannerTitle}</span>
                <span className="badge badge-sage">{n.bannerSubtitle}</span>
                <span className="badge badge-cream">{t.nav.news}</span>
              </div>
            </div>
          </ScrollReveal>

          {newsData.length > 0 ? (
            <>
              <SectionTitle title={n.bannerTitle} subtitle={n.bannerSubtitle} />
              <StaggerContainer staggerDelay={0.1} className="space-y-6">
                {newsData.map((notice, index) => (
                  <ScrollReveal key={notice.id} delay={0.1 * index}>
                    <div className="p-6 rounded-card-lg bg-white border border-border-light card-hover">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-forest-100 flex items-center justify-center">
                          <FileText className="w-6 h-6 text-forest-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 text-sm text-dark-500 mb-2">
                            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{notice.date}</span>
                            {notice.category && <span className="badge badge-forest text-xs">{notice.category}</span>}
                          </div>
                          <h3 className="text-heading-sm font-semibold text-dark-900 mb-2">{notice.title}</h3>
                          <p className="text-dark-600 leading-relaxed mb-4">{notice.summary}</p>
                          {notice.link && (
                            <a href={notice.link} className="text-sm font-medium text-forest-600 hover:text-forest-700 transition-colors inline-flex items-center gap-1">
                              {t.common.readMore} <ArrowRight className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </StaggerContainer>
            </>
          ) : (
            <ScrollReveal delay={0.1}>
              <div className="p-8 sm:p-12 rounded-card-lg bg-white border border-border-light text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-cream-100 flex items-center justify-center">
                  <Bell className="w-8 h-8 text-cream-400" />
                </div>
                <h3 className="text-heading-md font-semibold text-dark-900 mb-3">{n.noNotices}</h3>
                <p className="text-dark-600 leading-relaxed mb-6 max-w-xl mx-auto">{n.noNoticesText}</p>
                <div className="p-4 rounded-lg bg-cream-100 border border-border-light text-sm text-dark-600">
                  <p className="flex items-center justify-center gap-2">
                    <AlertCircle className="w-5 h-5 text-accent-500" />
                    <span>{n.noNoticesText}</span>
                  </p>
                </div>
              </div>
            </ScrollReveal>
          )}

          <ScrollReveal delay={0.2} className="mt-12">
            <div className="p-6 rounded-card-lg bg-cream-100 border border-border-light">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-accent-100 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-900 mb-2">{n.stayUpdated}</h4>
                  <a href={`mailto:${schoolData.email}`} className="text-sm font-medium text-forest-600 hover:text-forest-700 transition-colors inline-flex items-center gap-1">
                    {t.common.emailUs} <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-cream-100">
        <div className="container-custom">
          <SectionTitle title={n.typesTitle} subtitle={n.typesSubtitle} />
          <ScrollReveal delay={0.1}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {n.types.map((item, index) => {
                const Icon = icons[index];
                return (
                  <div key={index} className="p-6 rounded-card-lg bg-white border border-border-light card-hover text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-forest-100 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-forest-600" />
                    </div>
                    <h4 className="font-semibold text-dark-900 mb-2">{item.title}</h4>
                    <p className="text-dark-600 text-sm">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <SectionTitle title={n.haveNotice} subtitle={n.haveNoticeSubtitle} />
          <ScrollReveal delay={0.1}>
            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-body-lg text-dark-600 leading-relaxed">{n.haveNoticeText || n.intro}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href={`mailto:${schoolData.email}`} className="btn-primary group">
                  {n.submitNotice} <Mail className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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