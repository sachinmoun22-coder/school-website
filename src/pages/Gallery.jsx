import { useState, useCallback, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { schoolData, galleryImages } from "../data/schoolData";
import { getSEO } from "../data/seoConfig";
import { SEOHead } from "../components/SEOHead";
import { PageBanner } from "../components/PageBanner";
import { Breadcrumb } from "../components/Breadcrumb";
import { SectionTitle } from "../components/SectionTitle";
import { GalleryGrid } from "../components/GalleryGrid";
import { Lightbox } from "../components/Lightbox";
import { ScrollReveal } from "../components/ScrollReveal";

const FILTERS = [
  { value: "all", label: "16 Images" },
  { value: "campus", label: "Campus & Facilities" },
  { value: "learning", label: "Learning Spaces" },
];

export function Gallery() {
  const { pathname } = useLocation();
  const seo = getSEO(pathname);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredImages = useMemo(() => {
    if (activeFilter === "all") return galleryImages;
    return galleryImages.filter((img) => img.category === activeFilter);
  }, [activeFilter]);

  const openLightbox = useCallback(
    (index) => {
      setCurrentIndex(index);
      setLightboxOpen(true);
    },
    [filteredImages]
  );

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const navigate = useCallback((direction) => {
    setCurrentIndex((prev) => {
      if (direction === "prev") {
        return prev === 0 ? filteredImages.length - 1 : prev - 1;
      }
      return prev === filteredImages.length - 1 ? 0 : prev + 1;
    });
  }, [filteredImages]);

  return (
    <div className="min-h-screen">
      <SEOHead {...seo} />
      <Breadcrumb pathname={pathname} />
      <PageBanner
        title="School Function & Achievement Gallery"
        subtitle="Celebrating Excellence"
      >
        Celebrating Excellence, Achievements and Memorable Moments of Our Students.
      </PageBanner>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal delay={0.1}>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <p className="text-body-lg text-dark-600 leading-relaxed mb-8">
                A collection of photographs from school functions, celebrations,
                award ceremonies, and student achievements at S.B.S Sr.Sec. School Matour Kaithal.
                Relive the memorable moments of our students across academics, sports,
                and co-curricular events.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {FILTERS.map((filter) => (
                  <button
                    key={filter.value}
                    onClick={() => setActiveFilter(filter.value)}
                    className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                      activeFilter === filter.value
                        ? "bg-forest-800 border-forest-800 text-white shadow-soft"
                        : "border-border-light bg-white text-dark-600 hover:border-forest-200 hover:bg-cream-50"
                    }`}
                    aria-pressed={activeFilter === filter.value}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="p-6 rounded-card-lg bg-cream-100 border border-border-light mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-accent-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-dark-900 mb-1">Image Disclaimer</h4>
                  <p className="text-dark-600 text-sm">
                    The images displayed in this gallery are from the school's actual campus where available.
                    Some images may be illustrative and represent typical educational environments.
                    Authentic school photographs are used when provided by the school administration.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <GalleryGrid
            images={filteredImages}
            onOpenLightbox={openLightbox}
          />
        </div>
      </section>

      <section className="section-padding bg-cream-100">
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
                <div key={index} className="p-6 rounded-card-lg bg-white border border-border-light card-hover text-center">
                  <div className="text-4xl mb-3">{cat.icon}</div>
                  <h4 className="font-semibold text-dark-900 mb-1">{cat.title}</h4>
                  <p className="text-dark-500 text-sm">{cat.count}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="mt-12 text-center">
            <p className="text-dark-600 mb-4">
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
          images={filteredImages}
          currentIndex={currentIndex}
          onClose={closeLightbox}
          onNavigate={navigate}
        />
      )}
    </div>
  );
}
