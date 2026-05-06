"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { pricingData } from "@/lib/pricing-data";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function KainosContent() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="pt-40 md:pt-44 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <AnimatedSection className="text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-dark mb-4">
            Statybos darbų kainos
          </h1>
          <p className="text-medium text-lg max-w-2xl mx-auto mb-6">
            Visos kainos nurodytos tik už darbo paslaugas be statybinių medžiagų.
            Tikslią kainą sužinosite susisiekę.
          </p>
          <div className="h-1 w-16 rounded-full bg-primary mx-auto" />
        </AnimatedSection>
      </div>

      {/* Category tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {pricingData.map((cat, i) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(i)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
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

      {/* Pricing table */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
        >
          <div className="p-6 bg-primary/5 border-b border-gray-100">
            <h2 className="text-xl font-bold text-dark">
              {pricingData[activeCategory].title}
            </h2>
          </div>

          <div className="divide-y divide-gray-50">
            {pricingData[activeCategory].items.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center justify-between p-4 md:p-5 hover:bg-surface/50 transition-colors"
              >
                <span className="text-dark text-sm md:text-base font-medium flex-1 pr-4">
                  {item.name}
                </span>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="font-bold text-primary text-sm md:text-base whitespace-nowrap">
                    {item.price}
                  </span>
                  <span className="text-medium text-xs md:text-sm whitespace-nowrap">
                    / {item.unit}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All categories list (for completeness / SEO) */}
        <div className="mt-16 space-y-8">
          <AnimatedSection className="text-center">
            <h2 className="text-2xl font-bold text-dark mb-2">Visas kainoraštis</h2>
            <p className="text-medium text-sm">Visos kategorijos vienoje vietoje</p>
          </AnimatedSection>

          {pricingData.map((category, catIdx) => (
            <AnimatedSection key={category.title} delay={catIdx * 0.05}>
              <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <div className="px-5 py-4 bg-surface border-b border-gray-100">
                  <h3 className="font-bold text-dark">{category.title}</h3>
                </div>
                <table className="w-full">
                  <thead>
                    <tr className="text-xs text-medium uppercase tracking-wider">
                      <th className="text-left px-5 py-3 font-medium">Darbas</th>
                      <th className="text-right px-5 py-3 font-medium">Kaina nuo</th>
                      <th className="text-right px-5 py-3 font-medium">Vnt.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {category.items.map((item) => (
                      <tr key={item.name} className="hover:bg-surface/50 transition-colors">
                        <td className="px-5 py-3 text-sm text-dark">{item.name}</td>
                        <td className="px-5 py-3 text-sm text-right font-bold text-primary whitespace-nowrap">
                          {item.price}
                        </td>
                        <td className="px-5 py-3 text-sm text-right text-medium whitespace-nowrap">
                          {item.unit}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Disclaimers */}
        <AnimatedSection className="mt-12 p-6 rounded-2xl bg-amber-50 border border-amber-200">
          <h4 className="font-bold text-amber-800 mb-3">Svarbu žinoti:</h4>
          <ul className="space-y-2 text-sm text-amber-700">
            <li className="flex items-start gap-2">
              <span className="text-amber-500 mt-0.5">•</span>
              Visos pateiktos kainos yra preliminarios ir priklauso nuo projekto ir darbo ypatybių.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 mt-0.5">•</span>
              Kompleksinių stogo darbų kainos tikslinamos žvelgiant į projekto niuansus.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 mt-0.5">•</span>
              Kainos nurodytos tik už darbo paslaugas be statybinių medžiagų.
            </li>
          </ul>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="mt-12 text-center">
          <p className="text-medium mb-4">
            Norite sužinoti tikslią kainą jūsų projektui?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="tel:+37062999330" size="lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Skambinti Mariui
            </Button>
            <Button href="/#kontaktai" variant="outline" size="lg">
              Parašyti žinutę
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
