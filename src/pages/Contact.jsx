import { useState, useCallback } from "react";
import { MapPin, Mail, Phone, Clock, Building2, GraduationCap, BookOpen, Award, Send, CheckCircle, Navigation2, ExternalLink, Copy } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { getSEO } from "../data/seoConfig";
import { SEOHead } from "../components/SEOHead";
import { PageBanner } from "../components/PageBanner";
import { Breadcrumb } from "../components/Breadcrumb";
import { SectionTitle } from "../components/SectionTitle";
import { ScrollReveal } from "../components/ScrollReveal";
import { ContactForm } from "../components/ContactForm";
import { useLocalizedData } from "../i18n/useLocalizedData";

// Google Maps search URL for the school
const GOOGLE_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Shaheed+Bhagat+Singh+Senior+Secondary+School+Matour+Kaithal+Haryana";
// Keyless embed URL using the same search query (works without an API key)
const GOOGLE_MAPS_EMBED_URL = "https://maps.google.com/maps?q=Shaheed%20Bhagat%20Singh%20Senior%20Secondary%20School%20Matour%20Kaithal%20Haryana&t=&z=15&ie=UTF8&iwloc=&output=embed";

export function Contact() {
  const { pathname } = useLocation();
  const seo = getSEO(pathname);
  const { t, schoolData } = useLocalizedData();
  const c = t.contact;
  const officeHours = [
    { label: c.monSat, time: c.monSatTime },
    { label: c.sunday, time: c.closed },
  ];

  const [toast, setToast] = useState({ message: "", type: "" });

  const showToast = useCallback((message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast({ message: "", type: "" }), 3000);
  }, []);

  const mailtoLink = `mailto:${schoolData.email}?subject=${encodeURIComponent("Inquiry about S.B.S Sr.Sec. School")}`;
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${schoolData.email}&su=${encodeURIComponent("Inquiry about School")}`;

  const handleEmailClick = (e) => {
    e.preventDefault();
    try {
      window.location.href = mailtoLink;
      setTimeout(() => {
        if (document.visibilityState === "visible") {
          window.open(gmailLink, "_blank");
        }
      }, 1500);
    } catch {
      window.open(gmailLink, "_blank");
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(schoolData.email);
      showToast(`${t.common.email}: ${schoolData.email}`, "success");
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = schoolData.email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      showToast(`${t.common.email}: ${schoolData.email}`, "success");
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead {...seo} />
      <Breadcrumb pathname={pathname} />
      <PageBanner title={c.bannerTitle} subtitle={c.bannerSubtitle}>{c.bannerDesc}</PageBanner>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal delay={0.1}>
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-heading-xl font-medium text-dark-900 mb-4">
                      {c.getInTouch} {schoolData.shortName}
                    </h2>
                    <p className="text-body-lg text-dark-600 leading-relaxed">
                      {c.getInTouchText}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="p-6 rounded-card-lg bg-cream-100 border border-border-light card-hover">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-forest-100 flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-forest-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-dark-900 mb-1">{c.schoolAddress}</h3>
                          <address className="text-dark-600 not-italic leading-relaxed">
                            {schoolData.location}
                          </address>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 rounded-card-lg bg-cream-100 border border-border-light card-hover">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-accent-100 flex items-center justify-center">
                          <Mail className="w-6 h-6 text-accent-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-dark-900 mb-1">{c.emailAddress}</h3>
                          <a
                            href={`mailto:${schoolData.email}`}
                            className="text-dark-600 hover:text-forest-600 transition-colors"
                          >
                            {schoolData.email}
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 rounded-card-lg bg-cream-100 border border-border-light card-hover">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-sage-100 flex items-center justify-center">
                          <Phone className="w-6 h-6 text-sage-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-dark-900 mb-1">{c.phoneNumber}</h3>
                          <p className="text-dark-600">
                            {schoolData.phone}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 rounded-card-lg bg-cream-100 border border-border-light card-hover">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-forest-100 flex items-center justify-center">
                          <Clock className="w-6 h-6 text-forest-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-dark-900 mb-1">{c.officeHours}</h3>
                          <div className="space-y-1">
                            {officeHours.map(({ label, time }) => (
                              <p key={label} className="text-dark-600">
                                <span className="font-medium text-dark-900">{label}:</span> {time}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:sticky lg:top-28">
                  <div className="p-6 lg:p-8 rounded-card-lg bg-white border border-border-light shadow-soft">
                    <h3 className="text-heading-md font-semibold text-dark-900 mb-6">{c.sendUs}</h3>
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-cream-100">
        <div className="container-custom">
          <SectionTitle
            title={c.schoolInfo}
            subtitle={c.quickFacts}
          />
          <ScrollReveal delay={0.1}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Building2, title: c.schoolType, detail: schoolData.schoolType },
                { icon: GraduationCap, title: c.educationLevel, detail: schoolData.educationLevel },
                { icon: BookOpen, title: c.streamsOffered, detail: schoolData.streams.join(", ") },
                { icon: Award, title: t.common.schoolCodeBseh, detail: schoolData.schoolCode },
              ].map((item, index) => (
                <div key={index} className="p-6 rounded-card-lg bg-white border border-border-light card-hover text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-forest-100 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-forest-600" />
                  </div>
                  <h4 className="font-semibold text-dark-900 mb-2">{item.title}</h4>
                  <p className="text-dark-600 text-sm">{item.detail}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="mt-12">
            <div className="max-w-3xl mx-auto">
              <div className="p-8 rounded-card-lg bg-white border border-border-light shadow-soft">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-6 h-6 text-forest-600" />
                  <h3 className="text-heading-md font-semibold text-dark-900">{c.locationDirections}</h3>
                </div>
                
                {/* Google Maps Embed */}
                <div className="aspect-[4/3] overflow-hidden rounded-xl border border-border-light bg-forest-100 sm:aspect-video">
                  <iframe
                    title="S.B.S Sr.Sec. School Matour Kaithal location on Google Maps"
                    src={GOOGLE_MAPS_EMBED_URL}
                    className="h-full w-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
{/*
                  Map fallback and Get Directions button
                */}
                <div className="mt-4 directions-wrapper">
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="get-directions-btn group inline-flex items-center"
                  >
                    <Navigation2 className="w-5 h-5" />
                    <span>{t.common.getDirections}</span>
                    <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <p className="text-sm text-dark-500 text-center sm:text-left">
                    {c.opensMaps}
                  </p>
                </div>
                <div className="mt-6 p-4 rounded-lg bg-cream-100 border border-border-light">
                  <p className="text-dark-600 text-sm leading-relaxed">
                    <strong>{c.addressLabel}:</strong> {schoolData.location}<br />
                    <strong>{c.noteLabel}:</strong> {c.mapNote}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title={c.faq}
            subtitle="FAQ"
          />
          <ScrollReveal delay={0.1}>
            <div className="max-w-3xl mx-auto space-y-4">
              {(t.contact.faqs || []).map((faq, index) => (
                <details key={index} className="group rounded-xl bg-cream-100 border border-border-light overflow-hidden">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <span className="font-medium text-dark-900 pr-8">{faq.q}</span>
                    <svg className="w-5 h-5 text-dark-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 text-dark-600 border-t border-border-light">
                    {faq.a.replace("{code}", schoolData.schoolCode).replace("{streams}", schoolData.streams.join(", ")).replace("{email}", schoolData.email).replace("{phone}", schoolData.phone).replace("{location}", schoolData.location)}
                  </div>
                </details>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-forest-800 relative z-20">
        <div className="container-custom text-center relative">
          <ScrollReveal delay={0.1}>
            <h2 className="text-heading-xl sm:text-display-sm font-medium text-white mb-4">
              {c.stillQuestions}
            </h2>
            <p className="text-forest-200 text-body-lg mb-8 max-w-2xl mx-auto">
              {c.stillQuestionsText}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="relative inline-flex items-center gap-2">
                <a
                  href={mailtoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent group"
                  style={{ backgroundColor: "#b8923a", color: "#1a221d" }}
                  onClick={handleEmailClick}
                >
                  {c.emailDirect}
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <button
                  onClick={copyEmail}
                  className="p-2 rounded-btn bg-white/10 text-white hover:bg-white/20 transition-colors"
                  aria-label={t.common.email}
                  title={t.common.email}
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
              <Link
                to="/admissions"
                className="border-2 border-white text-white hover:bg-white/10 px-7 py-3.5 rounded-btn font-medium transition-colors group inline-flex items-center gap-2"
              >
                {c.admissionInquiries}
              </Link>
            </div>

            {toast.message && (
              <div
                className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-forest-900 text-white text-sm shadow-lg border border-forest-600 animate-fade-in"
              >
                <CheckCircle className="w-4 h-4" />
                <span>{toast.message}</span>
              </div>
            )}
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}