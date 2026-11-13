import React from "react";
import { motion } from "framer-motion";

function useLightweightReveal() {
  const [lightweight, setLightweight] = React.useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 767px), (prefers-reduced-motion: reduce)").matches;
  });

  React.useEffect(() => {
    if (typeof window === "undefined") return undefined;
    const media = window.matchMedia("(max-width: 767px), (prefers-reduced-motion: reduce)");
    const update = () => setLightweight(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return lightweight;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  direction = "up",
  ...props
}) {
  const lightweight = useLightweightReveal();

  if (lightweight) {
    const { variants, initial, whileInView, viewport, transition, ...rest } = props;
    return (
      <div className={className} {...rest}>
        {children}
      </div>
    );
  }

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      scale: direction === "scale" ? 0.95 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
  ...props
}) {
  const lightweight = useLightweightReveal();

  if (lightweight) {
    const { variants, initial, whileInView, viewport, transition, ...rest } = props;
    return (
      <div className={className} {...rest}>
        {children}
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className={className}
      {...props}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? React.cloneElement(child, { variants: itemVariants }) : child
      )}
    </motion.div>
  );
}