import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, GraduationCap, Award, Users, Building2, Target } from "lucide-react";
import { schoolData, streamsData } from "../data/schoolData";
import { Hero } from "../components/Hero";
import { SectionTitle } from "../components/SectionTitle";
import { StreamCard } from "../components/StreamCard";
import { ScrollReveal, StaggerContainer } from "../components/ScrollReveal";

function WelcomeSection() {
  return (
    <section id="welcome" className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle
          title="Welcome to Shaheed Bhagat Singh Sr. Sec. School"
          subtitle="About Us"
        />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal delay={0.1} direction="left">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-navy-100">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80"
                alt="School building and campus"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex-1 p-6 bg-white rounded-xl shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-primary-100 text-primary-600">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-navy-900">Class 12</p>
                      <p className="text-sm text-navy-500">Senior Secondary</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex-1 p-6 bg-white rounded-xl shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-secondary-100 text-secondary-600">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-navy-900">3</p>
                      <p className="text-sm text-navy-500">Academic Streams</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} direction="right">
            <div className="space-y-6">
              <p className="text-lg text-navy-600 leading-relaxed">
                {schoolData.introduction}
              </p>
              <p className="text-navy-600 leading-relaxed">
                {schoolData.about}
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="badge badge-primary">
                  <GraduationCap className="w-4 h-4 mr-1" />
                  {schoolData.schoolType}
                </span>
                <span className="badge badge-secondary">
                  <Target className="w-4 h-4 mr-1" />
                  {schoolData.educationLevel}
                </span>
                <span className="badge badge-navy">
                  <Building2 className="w-4 h-4 mr-1" />
                  BSEH Code: {schoolData.schoolCode}
                </span>
              </div>
              <Link to="/about" className="btn-primary inline-flex mt-4 group">
                Learn More About Us
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function AcademicStreamsSection() {
  return (
    <section id="academics" className="section-padding bg-navy-50">
      <div className="container-custom">
        <SectionTitle
          title="Academic Streams Offered"
          subtitle="Our Curriculum"
        />
        <p className="text-center text-navy-600 max-w-2xl mx-auto mb-12">
          We offer three distinct academic streams for Classes 11 and 12, allowing students
          to pursue their interests and career aspirations.
        </p>
        <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-3 gap-6">
          {streamsData.map((stream, index) => (
            <StreamCard key={stream.id} stream={stream} index={index} />
          ))}
        </StaggerContainer>
        <div className="text-center mt-12">
          <Link to="/academics" className="btn-primary group inline-flex">
            View All Academic Programs
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function SchoolAtGlanceSection() {
  const stats = [
    { label: "School Type", value: schoolData.schoolType, icon: Building2 },
    { label: "Education Level", value: schoolData.educationLevel, icon: Target },
    { label: "School Code", value: schoolData.schoolCode, icon: Award },
    { label: "Academic Streams", value: "3", icon: BookOpen },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle
          title="School at a Glance"
          subtitle="Key Facts"
        />
        <StaggerContainer staggerDelay={0.1} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={0.1 * index} className="text-center p-6">
              <div className="relative inline-block mb-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-primary-600" />
                </div>
              </div>
              <p className="text-3xl sm:text-4xl font-bold text-navy-900 mb-1">
                {stat.value}
              </p>
              <p className="text-navy-600 text-sm">{stat.label}</p>
            </ScrollReveal>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function AboutPreviewSection() {
  return (
    <section className="section-padding bg-navy-50">
      <div className="container-custom">
        <SectionTitle
          title="About Our School"
          subtitle="Learn More"
        />
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal delay={0.1}>
            <p className="text-lg text-navy-600 leading-relaxed mb-8">
              {schoolData.about}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Link to="/about" className="btn-primary group inline-flex">
              Read Full About Page
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function AchievementsPreviewSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle
          title="Achievements & Recognition"
          subtitle="Our Pride"
        />
        <ScrollReveal delay={0.1}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="p-8 sm:p-12 rounded-2xl bg-navy-50 border border-navy-100">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-secondary-100 flex items-center justify-center">
                <Award className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-3">
                Information Will Be Updated Soon
              </h3>
              <p className="text-navy-600 leading-relaxed">
                Verified achievements, awards, examination results, and student accomplishments
                will be published here when the information becomes available from the school administration.
              </p>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.2} className="mt-8 text-center">
          <Link to="/achievements" className="btn-outline group inline-flex">
            Visit Achievements Page
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

function GalleryPreviewSection() {
  const previewImages = [
    { id: 1, src: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80", alt: "School campus view", caption: "Campus View" },
    { id: 2, src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80", alt: "Classroom environment", caption: "Classroom" },
    { id: 3, src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80", alt: "Library interior", caption: "Library" },
    { id: 4, src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80", alt: "Science laboratory", caption: "Science Lab" },
  ];

  return (
    <section className="section-padding bg-navy-50">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-10">
          <SectionTitle title="School Gallery" subtitle="Moments" />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-8">
          {previewImages.map((image, index) => (
            <ScrollReveal key={image.id} delay={0.1 * index}>
              <Link to="/gallery" className="relative aspect-square rounded-xl overflow-hidden group">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent flex items-end p-4">
                  <span className="text-white font-medium">{image.caption}</span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
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

function AdmissionPreviewSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle
          title="Admission Information"
          subtitle="Join Us"
        />
        <ScrollReveal delay={0.1}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-100">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary-100 flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-3">
                Admissions Open for All Streams
              </h3>
              <p className="text-navy-600 leading-relaxed mb-6">
                We welcome students seeking quality education in Arts, Commerce, and Science streams.
                For detailed admission procedures, dates, eligibility criteria, and fee structure,
                please contact the school directly.
              </p>
              <div className="p-4 rounded-lg bg-white border border-primary-200 text-sm text-navy-600">
                <p className="font-medium text-primary-700 mb-2">Information will be updated soon.</p>
                <p>Admission dates, fees, eligibility, and required documents will be published when confirmed by the school.</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.2} className="mt-8 text-center">
          <Link to="/admission" className="btn-primary group inline-flex">
            Admission Details
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ContactPreviewSection() {
  return (
    <section className="section-padding bg-navy-50">
      <div className="container-custom">
        <SectionTitle
          title="Get in Touch"
          subtitle="Contact"
        />
        <ScrollReveal delay={0.1}>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-2xl bg-white shadow-sm border border-navy-100 card-hover">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary-100 flex items-center justify-center">
                <BookOpen className="w-7 h-7 text-primary-600" />
              </div>
              <h4 className="font-semibold text-navy-900 mb-2">Email Us</h4>
              <a
                href={`mailto:${schoolData.email}`}
                className="text-navy-600 hover:text-primary-600 transition-colors"
              >
                {schoolData.email}
              </a>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white shadow-sm border border-navy-100 card-hover">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-secondary-100 flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-secondary-600" />
              </div>
              <h4 className="font-semibold text-navy-900 mb-2">Visit Us</h4>
              <address className="text-navy-600 not-italic leading-relaxed">
                {schoolData.location}
              </address>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white shadow-sm border border-navy-100 card-hover">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-navy-100 flex items-center justify-center">
                <span className="text-navy-600 font-medium">📞</span>
              </div>
              <h4 className="font-semibold text-navy-900 mb-2">Call Us</h4>
              <p className="text-navy-600">
                {schoolData.phoneVerified ? schoolData.phone : "Contact number verification pending"}
              </p>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.2} className="mt-8 text-center">
          <Link to="/contact" className="btn-primary group inline-flex">
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WelcomeSection />
      <AcademicStreamsSection />
      <SchoolAtGlanceSection />
      <AboutPreviewSection />
      <AchievementsPreviewSection />
      <GalleryPreviewSection />
      <AdmissionPreviewSection />
      <ContactPreviewSection />
    </div>
  );
}