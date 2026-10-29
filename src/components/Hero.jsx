import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Play, X } from "lucide-react";
import { hqImages, schoolData } from "../data/schoolData";
import { homepageStatistics, homepageVideoUrl } from "../data/homepageContent";

export function Hero() {
  const [isVideoDialogOpen, setIsVideoDialogOpen] = useState(false);

  useEffect(() => {
    if (!isVideoDialogOpen) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsVideoDialogOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isVideoDialogOpen]);

  return (
    <section className="relative pb-10 sm:pb-12">
      <div className="relative isolate flex min-h-[620px] items-center overflow-hidden bg-forest-950 sm:min-h-[650px] lg:min-h-[690px]">
        <img
          src={hqImages.building}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-950/90 via-forest-950/75 to-forest-900/45" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-950/45 via-transparent to-forest-950/10" />

        <div className="container-custom relative z-10 py-16 sm:py-20 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-3xl"
          >
            <p className="mb-5 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-forest-100 backdrop-blur-sm sm:text-sm">
              {schoolData.name}
            </p>
            <h1 className="font-heading text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Nurturing Minds.
              <br />
              Building Futures.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg lg:text-xl">
              Empowering students with quality education, knowledge, values, and the confidence to build a brighter future.
            </p>
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/admissions"
                  className="group inline-flex min-h-12 items-center justify-center rounded-btn bg-forest-100 px-6 py-3 font-semibold text-forest-900 shadow-soft transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Apply for Admission
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
              <motion.button
                type="button"
                onClick={() => setIsVideoDialogOpen(true)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                aria-haspopup="dialog"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-btn border border-white/80 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/80">
                  <Play className="ml-0.5 h-3.5 w-3.5 fill-current" aria-hidden="true" />
                </span>
                Watch School Video
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container-custom relative z-20 -mt-14 sm:-mt-[4.5rem]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          className="overflow-hidden rounded-2xl border border-forest-200 bg-white shadow-card sm:rounded-3xl"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {homepageStatistics.map((statistic, index) => (
              <motion.div
                key={statistic.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`relative flex min-h-32 flex-col items-center justify-center px-3 py-5 text-center sm:min-h-36 sm:px-5 sm:py-7 ${
                  index % 2 === 0 ? "border-r border-forest-100 lg:border-r-0" : ""
                } ${index < 2 ? "border-b border-forest-100 lg:border-b-0" : ""} ${
                  index > 0 ? "lg:border-l lg:border-forest-100" : ""
                }`}
                aria-label={`${statistic.value} ${statistic.label}; reference figure, school confirmation pending`}
              >
                <span className="font-heading text-3xl font-semibold leading-tight text-forest-800 sm:text-4xl lg:text-5xl">
                  {statistic.value}
                </span>
                <span className="mt-1 text-xs font-medium text-forest-700 sm:mt-2 sm:text-sm">
                  {statistic.label}
                </span>
                <span className="mt-1.5 text-[10px] font-medium uppercase tracking-wide text-dark-400 sm:text-[11px]">
                  Confirm with school
                </span>
              </motion.div>
            ))}
          </div>
          <p className="border-t border-forest-100 bg-sage-50 px-4 py-2.5 text-center text-xs leading-relaxed text-forest-800 sm:text-sm">
            Reference figures only — school confirmation pending.
          </p>
        </motion.div>
      </div>

      <AnimatePresence>
        {isVideoDialogOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-forest-950/80 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setIsVideoDialogOpen(false);
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="school-video-title"
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/15 bg-forest-950 shadow-card"
            >
              <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
                <h2 id="school-video-title" className="font-heading text-xl font-semibold text-white">
                  School Video
                </h2>
                <button
                  type="button"
                  onClick={() => setIsVideoDialogOpen(false)}
                  aria-label="Close school video dialog"
                  className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              {homepageVideoUrl ? (
                <video
                  className="aspect-video w-full bg-black"
                  controls
                  playsInline
                  src={homepageVideoUrl}
                >
                  Your browser does not support video playback.
                </video>
              ) : (
                <div className="px-6 py-12 text-center sm:px-12">
                  <Play className="mx-auto mb-4 h-10 w-10 text-forest-300" aria-hidden="true" />
                  <p className="text-lg font-semibold text-white">School video coming soon</p>
                  <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-forest-100">
                    No school video is configured yet. An administrator can add the verified video file URL in the homepage content settings.
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
