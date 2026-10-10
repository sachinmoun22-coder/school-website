import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { schoolData, galleryImages } from "../data/schoolData";
import { PageBanner } from "../components/PageBanner";
import { SectionTitle } from "../components/SectionTitle";
import { GalleryGrid } from "../components/GalleryGrid";
import { Lightbox } from "../components/Lightbox";
import { ScrollReveal } from "../components/ScrollReveal";

export function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = useCallback((index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const navigate = useCallback((direction) => {
    setCurrentIndex((prev) => {
      if (direction === "prev") {
        return prev === 0 ? galleryImages.length - 1 : prev - 1;
      }
      return prev === galleryImages.length - 1 ? 0 : prev + 1;
    });
  }, []);

  return (
    <div className="min-h-screen">
      <PageBanner
        title="School Gallery"
        subtitle="Moments & Memories"
      >
        A visual journey through our campus, facilities, and school life.
      </PageBanner>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal delay={0.1}>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <p className="text-lg text-navy-600 leading-relaxed mb-6">
                Explore our school through photographs of the campus, classrooms, laboratories,
                library, and various facilities. These images represent the learning environment
                at Shaheed Bhagat Singh Sr. Sec. School, Matour.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="badge badge-primary">
                  <span className="w-4 h-4 mr-1 rounded-full bg-primary-500" />
                  {galleryImages.length} Images
                </span>
                <span className="badge badge-secondary">Campus & Facilities</span>
                <span className="badge badge-navy">Learning Spaces</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="p-6 rounded-2xl bg-navy-50 border border-navy-100 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-secondary-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900 mb-1">Image Disclaimer</h4>
                  <p className="text-navy-600 text-sm">
                    The images displayed in this gallery are illustrative and represent typical
                    educational environments. They are not actual photographs of Shaheed Bhagat Singh
                    Sr. Sec. School, Matour unless explicitly labeled. Authentic school photographs
                    will replace these placeholders when provided by the school administration.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <GalleryGrid images={galleryImages} onOpenLightbox={openLightbox} />
        </div>
      </section>

      <section className="section-padding bg-navy-50">
        <div className="container-custom">
          <SectionTitle
            title="Gallery Categories"
            subtitle="Browse By Type"
          />
          <ScrollReveal delay={0.1}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "🏫", title: "Campus & Buildings", count: "Exterior & interior views" },
                { icon: "📚", title: "Classrooms & Labs", count: "Learning environments" },
                { icon: "📖", title: "Library & Study", count: "Reading & research spaces" },
                { icon: "🏃", title: "Sports & Activities", count: "Playground & extracurricular" },
              ].map((cat, index) => (
                <div key={index} className="p-6 rounded-2xl bg-white border border-navy-100 card-hover text-center">
                  <div className="text-4xl mb-3">{cat.icon}</div>
                  <h4 className="font-semibold text-navy-900 mb-1">{cat.title}</h4>
                  <p className="text-navy-500 text-sm">{cat.count}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="mt-12 text-center">
            <p className="text-navy-600 mb-4">
              Have authentic school photographs you'd like to contribute?
            </p>
            <a
              href={`mailto:${schoolData.email}`}
              className="btn-primary inline-flex items-center gap-2"
            >
              Share Photos
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {lightboxOpen && (
        <Lightbox
          images={galleryImages}
          currentIndex={currentIndex}
          onClose={closeLightbox}
          onNavigate={navigate}
        />
      )}
    </div>
  );
}