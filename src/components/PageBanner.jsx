import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

export function PageBanner({ title, subtitle, children }) {
  return (
    <section className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562774053-701939374585?w=1920&q=80')] bg-cover bg-center opacity-10"
        role="presentation"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.15)_0%,_transparent_70%)]" />

      <div className="relative z-10 container-custom px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal delay={0.1} className="mb-4">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/20 text-primary-300 text-sm font-medium border border-primary-500/30"
            >
              {subtitle}
            </motion.span>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="mb-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight"
            >
              {title}
            </motion.h1>
          </ScrollReveal>

          {children && (
            <ScrollReveal delay={0.3}>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-lg text-navy-200 leading-relaxed"
              >
                {children}
              </motion.p>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>
  );
}