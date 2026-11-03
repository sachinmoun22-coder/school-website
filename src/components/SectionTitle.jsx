import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

export function SectionTitle({
  title,
  subtitle,
  className = "",
  titleClassName = "",
  subtitleClassName = "",
  showDecoration = true,
}) {
  return (
    <ScrollReveal delay={0.1} className={`text-center mb-12 ${className}`}>
      {subtitle && (
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className={`section-title-label ${subtitleClassName}`}>
            {subtitle}
          </span>
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`section-title text-gradient-forest leading-[1.08] pb-1 ${titleClassName}`}
      >
        {title}
      </motion.h2>
      {showDecoration && (
        <motion.div
          initial={{ opacity: 0, scaleX: 0.6 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="section-title-decoration"
        />
      )}
    </ScrollReveal>
  );
}