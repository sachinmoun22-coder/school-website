import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, GraduationCap, Award, Users, Building2, Target, Palette, Briefcase, Microscope, Heart, Shield, Bus, Home as HomeIcon, Bed, FlaskConical } from "lucide-react";
import { schoolData, streamsData, highlightsData, whyChooseData, facilitiesData, transportRoutes, hqImages } from "../data/schoolData";
import { Hero } from "../components/Hero";
import { SectionTitle } from "../components/SectionTitle";
import { ScrollReveal, StaggerContainer } from "../components/ScrollReveal";

function WelcomeSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle
          title="A Place to Learn, Grow and Excel"
          subtitle="About Our School"
        />
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal delay={0.1} direction="left">
            <div className="relative aspect-[4/3] rounded-card-lg overflow-hidden bg-forest-100">
              <img
                src={hqImages.campus}
                alt="S.B.S School Campus View"
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
                      <p className="text-lg font-heading font-semibold text-dark-900 sm:text-2xl">Nursery to 12th</p>
                      <p className="text-xs text-dark-500 sm:text-sm">Complete Schooling</p>
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
                {schoolData.about} Our dedicated faculty, well-structured curriculum, and supportive learning environment ensure that every student receives the attention and guidance they need to thrive academically and personally.
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
                  BSEH Code: {schoolData.schoolCode}
                </span>
              </div>
              <Link to="/about" className="btn-primary inline-flex mt-4 group">
                Read More About Us
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function HighlightsSection() {
  return (
    <section className="section-padding bg-cream-100">
      <div className="container-custom">
        <SectionTitle
          title="School Highlights"
          subtitle="Our Strengths"
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

function KeyNumbersSection() {
  return (
    <section className="section-padding bg-forest-800 relative overflow-hidden section-dark">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(33,77,59,0.3)_0%,_transparent_70%)]" />
      <div className="relative z-10 container-custom">
        <ScrollReveal delay={0.1} className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <span className="section-title-decoration w-10 h-0.5 bg-gradient-to-r from-accent-400 to-accent-300" />
            <span className="section-title-label text-xs font-medium uppercase tracking-widest text-accent-300">
              Key Numbers
            </span>
            <span className="section-title-decoration w-10 h-0.5 bg-gradient-to-r from-accent-300 to-accent-400" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title text-white"
          >
            Our Campus at a Glance
          </motion.h2>
        </ScrollReveal>
        <StaggerContainer staggerDelay={0.1} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: HomeIcon, title: "35 Classrooms", desc: "Spacious, well-ventilated rooms for Nursery to 12th" },
            { icon: FlaskConical, title: "1 Science Laboratory", desc: "Well-equipped for Physics, Chemistry & Biology" },
            { icon: Bus, title: "5 Buses + 1 Van", desc: "Covering 8+ villages including Ramgarh, Shimla, Kalasar" },
            { icon: Bed, title: "Hostel Facility", desc: "Residential accommodation available for students" },
          ].map((item, index) => (
            <ScrollReveal key={index} delay={0.1 * index}>
              <div className="p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-forest-700/60 border border-forest-500/60 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-accent-400" />
                </div>
                <h3 className="text-heading-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-cream-100/80 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function AcademicProgramsSection() {
  return (
    <section id="academics" className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle
          title="Learning at Every Stage"
          subtitle="Academics"
        />
        <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-3 gap-6 mb-12">
          {streamsData.map((stream, index) => (
            <ScrollReveal key={stream.id} delay={0.1 * index} className="h-full">
              <Link
                to="/academics"
                className="card h-full overflow-hidden group"
                aria-label={`Learn more about ${stream.name} stream`}
              >
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
                    <span className="text-sm font-medium text-forest-600 group-hover:text-forest-700 transition-colors">
                      Learn more
                    </span>
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="p-2 rounded-lg bg-forest-100 text-forest-600 group-hover:bg-forest-200 transition-colors"
                    >
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
            View All Programs
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  return (
    <section className="section-padding bg-forest-800 relative overflow-hidden section-dark">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(33,77,59,0.3)_0%,_transparent_70%)]" />
      <div className="absolute inset-0 bg-[url('/images/1000041461.jpg')] bg-cover bg-center opacity-[0.15]" />
      
      <div className="relative z-10 container-custom">
        <SectionTitle
          title="An Education That Goes Beyond the Classroom"
          subtitle="Why Choose Us"
        />
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

function FacilitiesPreviewSection() {
  return (
    <section id="facilities" className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-12">
          <SectionTitle
            title="Spaces That Inspire Learning"
            subtitle="Facilities"
          />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {facilitiesData.slice(0, 6).map((facility, index) => (
            <ScrollReveal key={facility.id} delay={0.1 * index}>
              <Link
                to="/facilities"
                className="card overflow-hidden group"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
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
            View All Facilities
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function AchievementsPreviewSection() {
  return (
    <section className="section-padding bg-cream-100">
      <div className="container-custom">
        <SectionTitle
          title="Celebrating Our Students"
          subtitle="Achievements"
        />
        <ScrollReveal delay={0.1}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="p-8 sm:p-12 rounded-card-lg bg-white border border-border-light">
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-forest-100 flex items-center justify-center">
                <Award className="w-8 h-8 text-forest-600" />
              </div>
              <h3 className="text-heading-md font-semibold text-dark-900 mb-3">
                Achievements & Recognition
              </h3>
              <p className="text-dark-600 leading-relaxed mb-6">
                We take pride in our students' accomplishments across academics, sports, and extracurricular activities.
                Verified achievements will be showcased here as they become available.
              </p>
              <p className="text-forest-600 text-sm font-medium">
                Details will be updated soon.
              </p>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.2} className="mt-8 text-center">
          <Link to="/achievements" className="btn-outline group inline-flex">
            View Achievements Page
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

function GalleryPreviewSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-10">
          <SectionTitle
            title="A Glimpse Into School Life"
            subtitle="Gallery"
          />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="group relative col-span-2 aspect-[16/10] overflow-hidden rounded-card-lg lg:col-span-2 lg:row-span-2 lg:aspect-[4/3]">
            <img
              src={hqImages.building}
              alt="School building exterior view"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="eager"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-forest-900/60 via-transparent to-transparent p-4 sm:p-6">
              <div className="min-w-0 text-white">
                <h4 className="text-heading-sm font-semibold sm:text-heading-md">School Campus</h4>
                <p className="text-sm text-forest-100">Main Building & Grounds</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-square rounded-card-lg overflow-hidden group">
            <img
              src={hqImages.classroom}
              alt="Classroom environment"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 via-transparent to-transparent flex items-end p-4">
              <h4 className="text-white font-semibold">Classroom Learning</h4>
            </div>
          </div>
          <div className="relative aspect-square rounded-card-lg overflow-hidden group">
            <img
              src={hqImages.campus}
              alt="School campus and grounds"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 via-transparent to-transparent flex items-end p-4">
              <h4 className="text-white font-semibold">Campus View</h4>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link to="/gallery" className="btn-primary group inline-flex">
            View Full Gallery
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function AdmissionCTASection() {
  return (
    <section className="section-padding bg-forest-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,_rgba(214,168,92,0.15)_0%,_transparent_50%)]" />
      <div className="relative z-10 container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-400/20 text-accent-300 text-xs font-medium uppercase tracking-wider mb-6">
              <Heart className="w-4 h-4" />
              Admissions Open
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="mb-6">
            <h2 className="text-display-sm sm:text-display-md font-medium text-white leading-tight mb-4">
              Take the First Step Towards a Bright Future
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.3} className="mb-8">
            <p className="text-body-lg text-forest-200 leading-relaxed">
              Give your child the gift of quality education at S.B.S Sr.Sec. School.
              Our admissions team is ready to guide you through the process for Nursery to Class 12
              in Arts, Commerce, and Science streams at senior secondary level.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/admissions" className="btn-accent group">
              Admission Enquiry
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-7 py-3.5 rounded-btn font-medium transition-all duration-300 inline-flex items-center gap-2">
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WelcomeSection />
      <HighlightsSection />
      <KeyNumbersSection />
      <AcademicProgramsSection />
      <WhyChooseSection />
      <FacilitiesPreviewSection />
      <AchievementsPreviewSection />
      <GalleryPreviewSection />
      <AdmissionCTASection />
    </div>
  );
}