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
      {subtitle && (
        <motion.div
          className="mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className={`section-title-label text-xs font-medium uppercase tracking-widest text-forest-600 ${subtitleClassName}`}>
            {subtitle}
          </span>
        </motion.div>
      )}
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