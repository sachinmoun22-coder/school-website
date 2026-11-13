import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

export function PageBanner({ title, subtitle, children }) {
  return (
    <section className="relative isolate flex min-h-0 items-center overflow-hidden bg-forest-950 sm:min-h-[650px] lg:min-h-[690px]">
      <div
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        style={{ backgroundImage: "url('/images/school-building-matour-kaithal.webp')" }}
        role="presentation"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-950/90 via-forest-950/75 to-forest-900/45" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-950/45 via-transparent to-forest-950/10" />

      <div className="container-custom relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          <ScrollReveal delay={0.1} className="mb-4">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-gradient-to-r from-white/15 to-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-forest-50 backdrop-blur-md shadow-lg sm:text-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-accent-300 to-accent-500 shadow-[0_0_0_4px_rgba(212,168,75,0.16)]" />
              {subtitle}
            </motion.span>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="mb-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-heading text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-white sm:text-5xl md:text-6xl lg:text-7xl"
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
                className="mt-6 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg lg:text-xl"
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
