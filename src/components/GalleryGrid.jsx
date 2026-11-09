import { motion } from "framer-motion";
import { Search, Maximize2 } from "lucide-react";

export function GalleryGrid({ images, onOpenLightbox }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {images.map((image) => (
        <motion.div
          key={image.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -6 }}
          className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white border border-border-light shadow-soft transition-all duration-500 hover:shadow-card-hover hover:border-accent-400/60 aspect-[4/3]"
          onClick={() => onOpenLightbox(images.findIndex((img) => img.id === image.id))}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onOpenLightbox(images.findIndex((img) => img.id === image.id))}
          aria-label={`View ${image.caption || image.alt} in full size`}
        >
          <div className="absolute inset-0 z-0 flex items-center justify-center bg-cream-50">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover [image-orientation:from-image] transition-transform duration-800 group-hover:scale-105"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                const img = e.target;
                img.style.display = "none";
                const parent = img.parentElement;
                if (parent) {
                  parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-dark-200 text-sm">Image unavailable</div>`;
                }
              }}
            />
          </div>

          <div className="absolute inset-0 z-10 flex items-end bg-gradient-to-t from-forest-900/80 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="flex w-full min-w-0 items-center justify-between gap-3">
              <div className="min-w-0 text-white">
                <h4 className="font-semibold text-base sm:text-lg leading-tight">{image.caption || "School Image"}</h4>
                <p className="line-clamp-1 text-sm text-forest-100/90 mt-0.5">{image.alt}</p>
              </div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="shrink-0 rounded-full bg-white/15 p-3 text-white backdrop-blur-md border border-white/20"
              >
                <Maximize2 className="w-5 h-5" />
              </motion.div>
            </div>
          </div>

          <div className="absolute right-3 top-3 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="rounded-full bg-white/15 p-2 text-white backdrop-blur-md border border-white/20">
              <Search className="w-5 h-5" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
