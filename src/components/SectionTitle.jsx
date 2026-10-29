import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

export function SectionTitle({
  title,
  subtitle,
  className = "",
  titleClassName = "",
  subtitleClassName = "",
}) {
  return (
    <ScrollReveal delay={0.1} className={`text-center mb-12 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-3 mb-4"
      >
        <span className="section-title-decoration w-10 h-0.5 bg-gradient-to-r from-forest-500 to-forest-300" />
        <span className="section-title-label text-xs font-medium uppercase tracking-widest text-forest-600">
          {subtitle || "Overview"}
        </span>
        <span className="section-title-decoration w-10 h-0.5 bg-gradient-to-r from-forest-500 to-forest-300" />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`section-title text-gradient-forest ${titleClassName}`}
      >
        {title}
      </motion.h2>
    </ScrollReveal>
  );
}