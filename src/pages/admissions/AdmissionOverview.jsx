import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, HeartHandshake, Lightbulb, ShieldCheck, Sparkles, UsersRound } from "lucide-react";
import { AdmissionEnquiryForm } from "../../components/admissions/AdmissionEnquiryForm";
import { AdmissionNotice, AdmissionsLayout } from "../../components/admissions/AdmissionsLayout";
import { ScrollReveal } from "../../components/ScrollReveal";
import { hqImages } from "../../data/schoolData";
import { useLocalizedData } from "../../i18n/useLocalizedData";

const icons = [BookOpen, UsersRound, ShieldCheck, Sparkles, Lightbulb, HeartHandshake];

export function AdmissionOverview() {
  const { t, schoolData, admissionPages } = useLocalizedData();
  const a = t.admissions;

  return (
    <div className="min-h-screen">
      <section className="relative isolate overflow-hidden bg-forest-950">
        <img src={hqImages.building} alt={schoolData.name} className="absolute inset-0 -z-20 h-full w-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-950/95 via-forest-900/85 to-forest-900/55" />
        <div className="container-custom grid min-h-0 items-center gap-8 py-14 sm:min-h-[620px] sm:gap-10 sm:py-20 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-3xl text-white">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent-300">{a.overviewBadge}</p>
            <h1 className="mb-5 text-4xl font-heading font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">{a.heroTitle}</h1>
            <h2 className="mb-5 max-w-2xl text-2xl font-heading font-medium leading-snug text-white sm:text-3xl">{a.heroSubtitle}</h2>
            <p className="mb-8 max-w-2xl text-base leading-relaxed text-cream-100 sm:text-lg">{a.heroText}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/admissions/procedure" className="btn-accent group">
                {a.exploreProcess}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="#enquiry" className="inline-flex items-center justify-center rounded-btn border border-white/70 px-6 py-3.5 font-medium text-white transition-colors hover:bg-white/10">
                {a.enquiryCta}
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-white/20 bg-forest-950/70 p-6 text-white shadow-card backdrop-blur-sm sm:p-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent-300">{a.thoughtfulHeading}</p>
            <h2 className="mb-4 text-2xl font-heading font-semibold text-white">{a.thoughtfulTitle}</h2>
            <p className="mb-5 leading-relaxed text-cream-100">{a.thoughtfulText}</p>
            <Link to="/admissions/documents-faq" className="inline-flex items-center gap-2 font-semibold text-white underline decoration-accent-300 underline-offset-4 hover:text-accent-200">
              {a.reviewDocs} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <AdmissionsLayout title={a.pageTitle} subtitle={a.pageSubtitle} description={a.pageDesc} activePath="/admissions" showBanner={false}>
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="mx-auto max-w-4xl text-center">
              <span className="section-label">{a.welcomeLabel}</span>
              <h2 className="mb-5 text-heading-xl font-medium text-dark-900 sm:text-display-sm">{a.welcomeTitle} {schoolData.name}</h2>
              <p className="text-body-lg leading-relaxed text-dark-600">{a.welcomeText}</p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-cream-100">
          <div className="container-custom">
            <div className="mb-10 text-center">
              <span className="section-label">{a.whyLabel}</span>
              <h2 className="text-heading-xl font-medium text-dark-900 sm:text-display-sm">{a.whyTitle}</h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {(a.reasons || []).map((r, i) => {
                const Icon = icons[i] || BookOpen;
                return (
                  <ScrollReveal key={i}>
                    <article className="h-full rounded-card-lg border border-border-light bg-white p-6 shadow-soft transition-transform hover:-translate-y-1">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-forest-100 text-forest-700">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <h3 className="mb-2 text-heading-sm font-semibold text-dark-900">{r.title}</h3>
                      <p className="leading-relaxed text-dark-600">{r.text}</p>
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom grid gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <span className="section-label">{a.whatToExpect}</span>
              <h2 className="mb-6 text-heading-xl font-medium text-dark-900 sm:text-display-sm">{a.admissionInfoTitle}</h2>
              <ol className="space-y-4">
                {(a.overviewSteps || []).map((step, index) => (
                  <li key={index} className="flex gap-4 rounded-xl border border-border-light bg-white p-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest-800 font-semibold text-white">{index + 1}</span>
                    <p className="pt-1 text-dark-700">{step}</p>
                  </li>
                ))}
              </ol>
              <Link to="/admissions/procedure" className="btn-primary mt-6 inline-flex">
                {a.fullProcedure} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="space-y-5 lg:pt-12">
              <AdmissionNotice title={a.importantNotice}>
                <p>{a.noticeP1}</p>
                <p className="mt-2">{a.noticeP2}</p>
              </AdmissionNotice>
              <div className="rounded-2xl bg-forest-800 p-6 text-white">
                <h3 className="mb-2 text-heading-md font-semibold text-white">{a.specificTitle}</h3>
                <p className="leading-relaxed text-forest-100">{a.specificText}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="enquiry" className="scroll-mt-32 section-padding bg-cream-100">
          <div className="container-custom">
            <div className="mx-auto mb-8 max-w-2xl text-center">
              <span className="section-label">{a.enquiryLabel}</span>
              <h2 className="mb-3 text-heading-xl font-medium text-dark-900 sm:text-display-sm">{a.enquiryTitle}</h2>
              <p className="text-dark-600">{a.enquiryText}</p>
            </div>
            <div className="mx-auto max-w-3xl rounded-card-lg border border-border-light bg-white p-5 shadow-soft sm:p-8">
              <AdmissionEnquiryForm />
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="mb-9 text-center">
              <span className="section-label">{a.exploreLabel}</span>
              <h2 className="text-heading-xl font-medium text-dark-900 sm:text-display-sm">{a.quickNav}</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {admissionPages.map((page) => (
                <Link key={page.path} to={page.path} className="group rounded-xl border border-border-light bg-white p-5 shadow-soft transition-all hover:-translate-y-1 hover:border-forest-300 hover:shadow-card">
                  <span className="mb-3 block text-sm font-semibold text-forest-700">{a.badge}</span>
                  <span className="flex items-start justify-between gap-2 font-semibold text-dark-900">
                    {page.label}
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </AdmissionsLayout>
    </div>
  );
}
