import { motion } from "framer-motion";
import { Search, Maximize2 } from "lucide-react";
import { StaggerContainer } from "./ScrollReveal";

export function GalleryGrid({ images, onOpenLightbox }) {
  return (
    <StaggerContainer
      staggerDelay={0.08}
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          variants={{}}
          whileHover={{ y: -8 }}
          className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl bg-forest-100"
          onClick={() => onOpenLightbox(index)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onOpenLightbox(index)}
          aria-label={`View ${image.caption || image.alt} in full size`}
        >
          <div className="absolute inset-0 z-10 flex items-end bg-gradient-to-t from-forest-900/70 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="flex w-full min-w-0 items-center justify-between gap-3">
              <div className="min-w-0 text-white">
                <h4 className="truncate font-semibold text-base sm:text-lg">{image.caption || "School Image"}</h4>
                <p className="line-clamp-2 text-sm text-forest-100/80">{image.alt}</p>
              </div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="shrink-0 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm"
              >
                <Maximize2 className="w-5 h-5" />
              </motion.div>
            </div>
          </div>
          <div className="absolute right-3 top-3 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="rounded-full bg-white/20 p-2 text-white backdrop-blur-sm">
              <Search className="w-5 h-5" />
            </div>
          </div>
          <img
            src={image.src}
            alt={image.alt}
            className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
            loading="lazy"
            onError={(e) => {
              e.target.src = `https://picsum.photos/seed/${image.id}/800/600.jpg`;
            }}
          />
        </motion.div>
      ))}
    </StaggerContainer>
  );
}