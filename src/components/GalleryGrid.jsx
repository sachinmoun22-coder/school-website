import { motion } from "framer-motion";
import { Search, Maximize2 } from "lucide-react";
import { ScrollReveal, StaggerContainer } from "./ScrollReveal";

export function GalleryGrid({ images, onOpenLightbox }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <StaggerContainer staggerDelay={0.08}>
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            variants={{}}
            whileHover={{ y: -8 }}
            className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer bg-navy-100"
            onClick={() => onOpenLightbox(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onOpenLightbox(index)}
            aria-label={`View ${image.caption || image.alt} in full size`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div className="w-full flex items-center justify-between">
                <div className="text-white">
                  <h4 className="font-semibold text-lg">{image.caption || "School Image"}</h4>
                  <p className="text-sm text-navy-200/80">{image.alt}</p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white"
                >
                  <Maximize2 className="w-5 h-5" />
                </motion.div>
              </div>
            </div>
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                <Search className="w-5 h-5" />
              </div>
            </div>
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
              loading="lazy"
              onError={(e) => {
                e.target.src = `https://picsum.photos/seed/${image.id}/800/600.jpg`;
              }}
            />
          </motion.div>
        ))}
      </StaggerContainer>
    </div>
  );
}