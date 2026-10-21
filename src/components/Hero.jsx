import { motion } from "framer-motion";
import { ArrowRight, BookOpen, GraduationCap, Award } from "lucide-react";
import { schoolData } from "../data/schoolData";
import { ScrollReveal } from "./ScrollReveal";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-cream-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 rounded-2xl border border-forest-200 bg-gradient-to-br from-forest-100 to-cream-100"
          initial={false}
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
            rotate: [0, 2, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-20 w-24 h-24 rounded-2xl border border-accent-200 bg-gradient-to-br from-accent-50 to-cream-100"
          initial={false}
          animate={{
            y: [0, -12, 0],
            x: [0, -8, 0],
            rotate: [0, -2, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-20 h-20 rounded-2xl border border-forest-200 bg-gradient-to-br from-forest-50 to-cream-100"
          initial={false}
          animate={{
            y: [0, -10, 0],
            x: [0, 8, 0],
            rotate: [0, 1, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      <div className="relative z-10 container-custom py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <ScrollReveal delay={0.1} className="mb-4">
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-border-light text-forest-700 text-sm font-medium"
              >
                <BookOpen className="w-4 h-4 text-forest-600" />
                WELCOME TO S.B.S SCHOOL
              </motion.span>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="mb-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-display-sm sm:text-display-md lg:text-display-lg font-medium text-dark-900 leading-tight tracking-tight text-balance"
              >
                Nurturing Young Minds,
                <br />
                <span className="text-gradient-forest">Building Bright Futures</span>
              </motion.h1>
            </ScrollReveal>

            <ScrollReveal delay={0.3} className="mb-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-body-lg text-dark-600 leading-relaxed max-w-xl"
              >
                {schoolData.introduction}
              </motion.p>
            </ScrollReveal>

            <ScrollReveal delay={0.4} className="flex flex-col sm:flex-row items-start gap-4">
              <motion.a
                href="#about"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary group"
              >
                Explore Our School
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </motion.a>
              <motion.a
                href="/admissions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-secondary group"
              >
                Admission Enquiry
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </motion.a>
            </ScrollReveal>

            <ScrollReveal delay={0.6} className="pt-4 flex flex-wrap items-center gap-6 text-sm text-dark-500">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-forest-600" />
                <span>{schoolData.educationLevel}</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-forest-600" />
                <span>Arts, Commerce & Science (Class 11-12)</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-forest-600" />
                <span>BSEH Code: {schoolData.schoolCode}</span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column - Image */}
          <ScrollReveal delay={0.3} direction="right" className="relative">
            <div className="relative aspect-[4/3] rounded-card-lg overflow-hidden bg-forest-100">
              <img
                src="/images/School_Photos/School_Photo_1.jpg"
                alt="S.B.S Sr.Sec. School Matour Kaithal - School Building and Campus"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/30 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-white">
                  <div className="p-3 rounded-xl bg-forest-700/80">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold">{schoolData.shortName}</p>
                    <p className="text-sm text-cream-100">{schoolData.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl border-4 border-white/50 bg-gradient-to-br from-forest-600 to-forest-800 opacity-20" />
          </ScrollReveal>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-dark-400"
        >
          <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}