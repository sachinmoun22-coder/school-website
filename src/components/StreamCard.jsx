import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Palette, Briefcase, Microscope } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const streamIcons = {
  Palette,
  Briefcase,
  Microscope,
};

export function StreamCard({ stream, index = 0 }) {
  const Icon = streamIcons[stream.icon] || BookOpen;

  return (
    <ScrollReveal delay={0.1 * (index + 1)} direction="up" className="h-full">
      <Link
        to="/academics"
        className="card h-full flex flex-col group"
        aria-label={`Learn more about ${stream.name} stream`}
      >
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-navy-100 to-navy-200">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80')] bg-cover bg-center opacity-20 group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <Icon className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>

        <div className="flex-1 p-6 flex flex-col">
          <h3 className="text-xl font-bold text-navy-900 mb-2">{stream.name}</h3>
          <p className="text-navy-600 text-sm leading-relaxed flex-1 mb-4">{stream.description}</p>
          <div className="flex items-center justify-between pt-4 border-t border-navy-100">
            <span className="text-sm font-medium text-primary-600 group-hover:text-primary-700 transition-colors">
              Learn more
            </span>
            <motion.div
              whileHover={{ x: 4 }}
              className="p-2 rounded-lg bg-primary-100 text-primary-600 group-hover:bg-primary-200 transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </div>
        </div>
      </Link>
    </ScrollReveal>
  );
}

import { BookOpen } from "lucide-react";