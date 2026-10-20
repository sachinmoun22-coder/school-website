import { motion } from "framer-motion";
import { ArrowRight, BookOpen, GraduationCap } from "lucide-react";
import { schoolData } from "../data/schoolData";
import { ScrollReveal } from "./ScrollReveal";

export function Hero() {
  const floatingShapes = [
    { x: "10%", y: "20%", size: "w-24 h-24", delay: 0 },
    { x: "85%", y: "15%", size: "w-16 h-16", delay: 1 },
    { x: "5%", y: "70%", size: "w-20 h-20", delay: 2 },
    { x: "90%", y: "75%", size: "w-12 h-12", delay: 0.5 },
    { x: "50%", y: "5%", size: "w-16 h-16", delay: 1.5 },
    { x: "50%", y: "90%", size: "w-20 h-20", delay: 2.5 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-hero-pattern" />

      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-[var(--hero-overlay)]"
          role="img"
          aria-label="School campus background image"
        />
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1580582902619-8d945a0ea5f9?w=1920&q=80')] bg-cover bg-center opacity-15"
          role="presentation"
        />
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {floatingShapes.map((shape, index) => (
          <motion.div
            key={index}
            className={`absolute ${shape.size} rounded-2xl border border-white/10 bg-gradient-to-br from-primary-500/10 to-secondary-400/10 backdrop-blur-sm`}
            style={{ left: shape.x, top: shape.y }}
            initial={false}
            animate={{
              y: [0, -20, 0],
              x: [0, 15, 0],
              rotate: [0, 3, 0],
            }}
            transition={{
              duration: 8 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: shape.delay,
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-primary-400/30" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative z-20 container-custom px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal delay={0.1} className="mb-6">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium"
            >
              <BookOpen className="w-4 h-4 text-secondary-400" />
              Senior Secondary School • BSEH Code: {schoolData.schoolCode}
            </motion.span>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="mb-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight"
            >
              {schoolData.name}
            </motion.h1>
          </ScrollReveal>

          <ScrollReveal delay={0.3} className="mb-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl sm:text-2xl lg:text-3xl text-secondary-300 font-medium leading-relaxed max-w-3xl mx-auto"
            >
              {schoolData.heroHeadline}
            </motion.p>
          </ScrollReveal>

          <ScrollReveal delay={0.4} className="mb-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl text-navy-100/90 leading-relaxed max-w-3xl mx-auto"
            >
              {schoolData.introduction}
            </motion.p>
          </ScrollReveal>

          <ScrollReveal delay={0.5} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#academics"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary group"
            >
              Explore Our School
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              href="/academics"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-6 py-3 rounded-lg font-medium transition-all duration-200"
            >
              Explore Academics
            </motion.a>
          </ScrollReveal>

          <ScrollReveal delay={0.7} className="mt-16 flex items-center justify-center gap-12 text-sm text-navy-200">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-secondary-400" />
              <span>Education up to Class 12</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-secondary-400" />
              <span>Arts, Commerce & Science</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-secondary-400">Code: {schoolData.schoolCode}</span>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-navy-200/70"
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