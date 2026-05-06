"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

const galleryImages = [
  "logo3.jpg",
  "logo5.jpg",
  "logo7.jpg",
  "logo.jpg",
  "logo1.jpg",
  "logo2.jpg",
  "logo4.jpg",
  "fotonew1.jpg",
  "logo6.jpg",
  "logo12.jpg",
  "logo13.jpg",
  "logo14.jpg",
  "logo15.jpg",
  "logo16.jpg",
  "logo17.jpg",
  "logo18.jpg",
  "logo19.jpg",
  "logo20.jpg",
  "logo21.jpg",
  "logo22.jpg",
  "logo23.jpg",
  "foto5.jpg",
  "DSC03811.JPG",
  "DSC03829.JPG",
  "DSC03831.JPG",
  "DSC03840.JPG",
  "DSC03873.JPG",
  "ft1.jpg",
  "ft2.jpg",
  "ft8.jpg",
  "ft10.jpg",
  "ft18.jpg",
  "ft19.jpg",
  "ft21.jpg",
  "ft22.jpg",
  "ft23.jpg",
  "ft24.jpg",
  "ft25.jpg",
  "ft26.jpg",
  "ft27.jpg",
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);
  const visibleImages = expanded ? galleryImages : galleryImages.slice(0, 8);
  const selectedImage = selected === null ? null : galleryImages[selected];

  const showPrevious = () => {
    setSelected((current) =>
      current === null ? current : (current - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const showNext = () => {
    setSelected((current) =>
      current === null ? current : (current + 1) % galleryImages.length
    );
  };

  return (
    <section id="galerija" className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Darbų galerija"
          subtitle="Mūsų atliktų projektų pavyzdžiai visoje Dzūkijoje."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {visibleImages.map((image, i) => (
            <AnimatedSection key={image} delay={(i % 8) * 0.04}>
              <button
                type="button"
                className="group relative block aspect-[4/3] w-full overflow-hidden rounded-lg bg-dark/5 text-left shadow-sm"
                onClick={() => setSelected(i)}
                aria-label={`Atidaryti galerijos nuotrauką ${i + 1}`}
              >
                <Image
                  src={`/gallery/${image}`}
                  alt={`Atliktų stogo darbų nuotrauka ${i + 1}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-all duration-300 flex items-end">
                  <div className="p-3 md:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-xs md:text-sm font-medium">
                      Darbų galerija
                    </p>
                  </div>
                </div>

                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.35-4.35" />
                      <line x1="11" y1="8" x2="11" y2="14" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                  </div>
                </div>
              </button>
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((current) => !current)}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-colors hover:bg-primary-hover"
          >
            {expanded ? "Rodyti mažiau" : "Žiūrėti visą galeriją"}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={`transition-transform ${expanded ? "rotate-180" : ""}`}
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>

        <AnimatePresence>
          {selected !== null && selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative h-[80vh] w-full max-w-6xl overflow-hidden rounded-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={`/gallery/${selectedImage}`}
                  alt={`Atliktų stogo darbų nuotrauka ${selected + 1}`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white text-lg font-medium">
                    Darbų galerija {selected + 1} / {galleryImages.length}
                  </p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center transition-colors"
                  aria-label="Uždaryti galeriją"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); showPrevious(); }}
                  className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-colors hover:bg-white/40"
                  aria-label="Ankstesnė nuotrauka"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); showNext(); }}
                  className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-colors hover:bg-white/40"
                  aria-label="Kita nuotrauka"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
