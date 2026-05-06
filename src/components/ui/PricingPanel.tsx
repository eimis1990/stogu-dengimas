"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pricingData } from "@/lib/pricing-data";

interface PricingPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PricingPanel({ isOpen, onClose }: PricingPanelProps) {
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full sm:w-[85vw] md:w-1/2 lg:max-w-2xl bg-white shadow-2xl flex flex-col overflow-x-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-100">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-dark">Visas kainoraštis</h2>
                <p className="text-xs sm:text-sm text-medium mt-0.5 sm:mt-1">
                  Kainos tik už darbo paslaugas
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Uždaryti"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Category tabs - scrollable */}
            <div className="border-b border-gray-100 px-3 sm:px-6 py-3 sm:py-4 overflow-x-auto">
              <div className="flex gap-1.5 sm:gap-2 min-w-max">
                {pricingData.map((cat, i) => (
                  <button
                    key={cat.title}
                    onClick={() => setActiveCategory(i)}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                      activeCategory === i
                        ? "bg-primary text-white shadow-lg shadow-primary/25"
                        : "bg-surface text-medium hover:bg-gray-200"
                    }`}
                  >
                    {cat.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Pricing content - scrollable */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                  <div className="p-3 sm:p-4 bg-primary/5 border-b border-gray-100">
                    <h3 className="text-base sm:text-lg font-bold text-dark">
                      {pricingData[activeCategory].title}
                    </h3>
                  </div>

                  <div className="divide-y divide-gray-50">
                    {pricingData[activeCategory].items.map((item, i) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.03 }}
                        className="flex items-center justify-between p-3 sm:p-4 hover:bg-surface/50 transition-colors"
                      >
                        <span className="text-dark text-xs sm:text-sm font-medium flex-1 pr-2 sm:pr-4">
                          {item.name}
                        </span>
                        <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                          <span className="font-bold text-primary text-xs sm:text-sm whitespace-nowrap">
                            {item.price}
                          </span>
                          <span className="text-medium text-[10px] sm:text-xs whitespace-nowrap">
                            / {item.unit}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* All categories below */}
                <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
                  <h4 className="text-base sm:text-lg font-bold text-dark">Visos kategorijos</h4>
                  {pricingData.map((category) => (
                    <div
                      key={category.title}
                      className="bg-white rounded-xl border border-gray-100 overflow-hidden"
                    >
                      <div className="px-3 sm:px-4 py-2 sm:py-3 bg-surface border-b border-gray-100">
                        <h5 className="font-bold text-dark text-xs sm:text-sm">{category.title}</h5>
                      </div>
                      <div className="divide-y divide-gray-50">
                        {category.items.map((item) => (
                          <div key={item.name} className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 hover:bg-surface/50 transition-colors">
                            <span className="text-xs sm:text-sm text-dark flex-1 pr-2">{item.name}</span>
                            <div className="flex items-center gap-1 flex-shrink-0">
                              <span className="text-xs sm:text-sm font-bold text-primary whitespace-nowrap">
                                {item.price}
                              </span>
                              <span className="text-[10px] sm:text-xs text-medium whitespace-nowrap">
                                / {item.unit}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Disclaimer */}
                <div className="mt-6 sm:mt-8 p-3 sm:p-4 rounded-xl bg-amber-50 border border-amber-200">
                  <h4 className="font-bold text-amber-800 mb-1.5 sm:mb-2 text-xs sm:text-sm">Svarbu žinoti:</h4>
                  <ul className="space-y-1 sm:space-y-1.5 text-[10px] sm:text-xs text-amber-700">
                    <li className="flex items-start gap-1.5 sm:gap-2">
                      <span className="text-amber-500 mt-0.5">•</span>
                      Kainos yra preliminarios ir priklauso nuo projekto.
                    </li>
                    <li className="flex items-start gap-1.5 sm:gap-2">
                      <span className="text-amber-500 mt-0.5">•</span>
                      Kainos tik už darbo paslaugas be medžiagų.
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Footer CTA */}
            <div className="p-4 sm:p-6 border-t border-gray-100 bg-surface">
              <p className="text-xs sm:text-sm text-medium mb-2 sm:mb-3 text-center">
                Norite sužinoti tikslią kainą?
              </p>
              <div className="flex gap-2 sm:gap-3">
                <a
                  href="tel:+37062999330"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-primary text-white py-2.5 sm:py-3 rounded-lg text-sm font-semibold hover:bg-primary-hover transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Skambinti
                </a>
                <a
                  href="/#kontaktai"
                  onClick={onClose}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 sm:gap-2 border-2 border-primary text-primary py-2.5 sm:py-3 rounded-lg text-sm font-semibold hover:bg-primary hover:text-white transition-colors"
                >
                  Parašyti
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
