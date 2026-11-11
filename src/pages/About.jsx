import { Link } from "react-router-dom";
import { BookOpen, GraduationCap, Building2, Award, MapPin, Mail, Phone, ArrowRight, Heart, Shield, Palette, Quote, CheckCircle } from "lucide-react";
import { schoolData, hqImages } from "../data/schoolData";
import { PageBanner } from "../components/PageBanner";
import { SectionTitle } from "../components/SectionTitle";
import { ScrollReveal, StaggerContainer } from "../components/ScrollReveal";

export function About() {
  return (
    <div className="min-h-screen">
      <PageBanner
        title="About Our School"
        subtitle="S.B.S Sr.Sec. School"
      >
        Learn more about our educational institution, values, and commitment to excellence.
      </PageBanner>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="about-grid grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="about-left space-y-8">
              <ScrollReveal delay={0.1} direction="left">
                <h2 className="text-heading-xl font-medium text-dark-900 mb-4">Our School</h2>
                <p className="text-body-lg text-dark-600 leading-relaxed mb-4">
                  {schoolData.introduction}
                </p>
                <p className="text-dark-600 leading-relaxed">
                  {schoolData.about} Our dedicated faculty, well-structured curriculum, and supportive learning environment ensure that every student receives the attention and guidance they need to thrive academically and personally.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2} direction="left">
                <div className="p-6 rounded-card-lg bg-cream-100 border border-border-light">
                  <h3 className="text-heading-md font-semibold text-dark-900 mb-4 flex items-center gap-2">
                    <Building2 className="w-6 h-6 text-forest-600" />
                    Key Information
                  </h3>
                  <dl className="space-y-4 text-dark-600">
                    <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-border-light last:border-0">
                      <dt className="font-medium text-dark-700">School Name</dt>
                      <dd className="text-dark-900 mt-1 sm:mt-0">{schoolData.name}</dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-border-light">
                      <dt className="font-medium text-dark-700">Location</dt>
                      <dd className="text-dark-900 mt-1 sm:mt-0">{schoolData.location}</dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-border-light">
                      <dt className="font-medium text-dark-700">School Type</dt>
                      <dd className="text-dark-900 mt-1 sm:mt-0">{schoolData.schoolType}</dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-border-light">
                      <dt className="font-medium text-dark-700">Education Level</dt>
                      <dd className="text-dark-900 mt-1 sm:mt-0">{schoolData.educationLevel}</dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-border-light">
                      <dt className="font-medium text-dark-700">School Code (BSEH)</dt>
                      <dd className="text-dark-900 font-mono mt-1 sm:mt-0">{schoolData.schoolCode}</dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-border-light">
                      <dt className="font-medium text-dark-700">Board</dt>
                      <dd className="text-dark-900 mt-1 sm:mt-0">{schoolData.board}</dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-border-light">
                      <dt className="font-medium text-dark-700">Principal</dt>
                      <dd className="text-dark-900 mt-1 sm:mt-0">{schoolData.principalName}</dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between py-3">
                      <dt className="font-medium text-dark-700">Streams Offered (Class 11-12)</dt>
                      <dd className="text-dark-900 mt-1 sm:mt-0">{schoolData.streams.join(", ")}</dd>
                    </div>
                  </dl>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3} direction="left">
                <div className="p-6 rounded-card-lg bg-gradient-to-br from-forest-50 to-cream-100 border border-forest-100">
                  <h3 className="text-heading-md font-semibold text-dark-900 mb-4 flex items-center gap-2">
                    <GraduationCap className="w-6 h-6 text-forest-600" />
                    Educational Scope
                  </h3>
                  <ul className="space-y-3 text-dark-600">
                    <li className="flex items-start gap-3">
                      <BookOpen className="w-5 h-5 text-forest-600 flex-shrink-0 mt-0.5" />
                      <span>Complete schooling from Nursery to Class 12</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <BookOpen className="w-5 h-5 text-forest-600 flex-shrink-0 mt-0.5" />
                      <span>Three academic streams at senior secondary: Arts, Commerce, and Science</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <BookOpen className="w-5 h-5 text-forest-600 flex-shrink-0 mt-0.5" />
                      <span>Affiliated with Board of School Education Haryana (BSEH)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <BookOpen className="w-5 h-5 text-forest-600 flex-shrink-0 mt-0.5" />
                      <span>Co-educational institution serving Matour village and surrounding areas</span>
                    </li>
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
                    <h4 className="font-semibold text-dark-900 mb-1">Location</h4>
                    <p className="text-dark-600 text-sm">{schoolData.location}</p>
                  </div>
                  <div className="p-5 rounded-xl bg-white shadow-soft border border-border-light card-hover">
                    <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center mb-3">
                      <Mail className="w-6 h-6 text-accent-600" />
                    </div>
                    <h4 className="font-semibold text-dark-900 mb-1">Email</h4>
                    <a href={`mailto:${schoolData.email}`} className="text-dark-600 text-sm hover:text-forest-600 transition-colors">
                      {schoolData.email}
                    </a>
                  </div>
                  <div className="p-5 rounded-xl bg-white shadow-soft border border-border-light card-hover">
                    <div className="w-12 h-12 rounded-xl bg-cream-200 flex items-center justify-center mb-3">
                      <Phone className="w-6 h-6 text-dark-600" />
                    </div>
                    <h4 className="font-semibold text-dark-900 mb-1">Phone</h4>
                    <p className="text-dark-600 text-sm">
                      {schoolData.phone}
                    </p>
                  </div>
                  <div className="p-5 rounded-xl bg-white shadow-soft border border-border-light card-hover">
                    <div className="w-12 h-12 rounded-xl bg-sage-100 flex items-center justify-center mb-3">
                      <Award className="w-6 h-6 text-sage-600" />
                    </div>
                    <h4 className="font-semibold text-dark-900 mb-1">School Code</h4>
                    <p className="text-dark-600 text-sm font-mono">{schoolData.schoolCode}</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.35} direction="right">
                <div className="about-card p-6 rounded-xl bg-white border border-border-light shadow-soft">
                  <h3 className="text-heading-md font-semibold text-dark-900 mb-4 flex items-center gap-2">
                    <Building2 className="w-6 h-6 text-forest-600" />
                    Why Choose Us
                  </h3>
                  <ul className="space-y-3 text-dark-600">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-forest-600 flex-shrink-0 mt-0.5" />
                      <span>Classes from Nursery to Class 12</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-forest-600 flex-shrink-0 mt-0.5" />
                      <span>Arts, Commerce and Science streams</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-forest-600 flex-shrink-0 mt-0.5" />
                      <span>Dedicated and experienced faculty</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-forest-600 flex-shrink-0 mt-0.5" />
                      <span>Supportive learning environment</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4} direction="right">
                <div className="about-card p-6 rounded-xl bg-white border border-border-light shadow-soft">
                  <h3 className="text-heading-md font-semibold text-dark-900 mb-4 flex items-center gap-2">
                    <Award className="w-6 h-6 text-forest-600" />
                    Quick Facts
                  </h3>
                  <div className="stats-grid grid grid-cols-2 gap-4">
                    <div className="text-center p-3 rounded-lg bg-cream-50">
                      <p className="text-xl font-bold text-forest-700">Nursery - 12th</p>
                      <p className="text-xs text-dark-500 mt-1">Classes</p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-cream-50">
                      <p className="text-xl font-bold text-forest-700">3</p>
                      <p className="text-xs text-dark-500 mt-1">Streams</p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-cream-50">
                      <p className="text-xl font-bold text-forest-700">BSEH</p>
                      <p className="text-xs text-dark-500 mt-1">Board</p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-cream-50">
                      <p className="text-xl font-bold text-forest-700">10244</p>
                      <p className="text-xs text-dark-500 mt-1">School Code</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.45} direction="right">
                <div className="cta-card p-6 rounded-xl text-white" style={{ background: "#1f4d36" }}>
                  <h3 className="text-heading-md font-semibold mb-2">Admissions Open</h3>
                  <p className="text-sm mb-5 opacity-90">
                    Visit us or contact the school office for admission details.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to="/admissions"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all hover:opacity-90"
                      style={{ background: "#d6a85c", color: "#1a221d" }}
                    >
                      Admission Enquiry
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
          <SectionTitle
            title="MESSAGE FROM THE PRINCIPAL"
            subtitle="Leadership"
            showDecoration={true}
          />
          <ScrollReveal delay={0.1}>
            <div className="max-w-5xl mx-auto">
              <div className="relative rounded-3xl bg-navy-900 overflow-hidden shadow-card border border-navy-700/50">
                <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950" />
                <div className="absolute inset-0 [mask-image:radial-gradient(circle_at_center,black_60%,transparent_100%)] [mask-composite:intersect] opacity-20" />
                <div className="relative p-8 md:p-12">
                  <div className="message-grid grid gap-12 items-stretch">
                    <div className="principal-card border border-white/20 shadow-card">
                      <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/20 to-transparent" />
                      <img
                        src="/images/principal.png"
                        alt={schoolData.principalName}
                        className="w-full h-full object-cover block"
                        style={{ objectPosition: "center top" }}
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="principal-caption">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur flex items-center justify-center flex-shrink-0">
                            <GraduationCap className="w-5 h-5 text-gold-400" />
                          </div>
                          <div className="flex flex-col">
                            <span className="principal-name">{schoolData.principalName}</span>
                            <span className="principal-role">Principal</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="principal-text flex flex-col justify-center z-10 relative">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
                          <Quote className="w-5 h-5" />
                        </div>
                        <span className="text-gold-300 text-xs font-semibold uppercase tracking-wider">Message</span>
                      </div>
                      <p className="text-white/90 text-lg leading-relaxed mb-8 font-light">
                        At S.B.S Sr. Sec. School Matour Kaithal, we believe that education is not merely about acquiring knowledge, but about shaping character, building values, and empowering young minds to become responsible citizens of tomorrow. Our commitment is to provide a nurturing environment where every student can discover their potential, pursue excellence, and grow with confidence.
                        <br /><br />
                        With the support of our dedicated faculty, involved parents, and hardworking students, we continue to strive for academic excellence and holistic development. Together, we will build a brighter future for our children and our community.
                      </p>
                      <div className="principal-signature flex items-end gap-2 pt-6 border-t border-white/10">
                        <span className="text-gold-400 text-[12px] font-semibold tracking-wider italic">—</span>
                        <div className="flex flex-col">
                          <span className="text-white font-semibold text-sm">{schoolData.principalName}</span>
                          <span className="text-gold-400 text-[11px] uppercase tracking-wider">Principal</span>
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

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Our Educational Philosophy"
            subtitle="Values & Approach"
          />
          <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Heart, title: "Student-Centered Learning", desc: "Every student's unique potential is nurtured through personalized attention and adaptive teaching methods." },
              { icon: Shield, title: "Values & Discipline", desc: "Strong emphasis on character building, moral values, and responsible citizenship in a structured environment." },
              { icon: Palette, title: "Holistic Development", desc: "Balanced focus on academics, creativity, physical education, and life skills for well-rounded growth." },
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

      <section className="section-padding bg-forest-50">
        <div className="container-custom text-center">
          <SectionTitle
            title="Ready to Learn More?"
            subtitle="Connect"
          />
          <ScrollReveal delay={0.1}>
            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-body-lg text-dark-600 leading-relaxed">
                For detailed information about admissions, academics, or any other inquiries,
                please visit our contact page or reach out to us directly.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact" className="btn-primary group">
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/admissions" className="btn-outline group">
                  Admission Info
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}