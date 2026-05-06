"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { roofTypes } from "@/lib/pricing-data";

export default function QuoteCalculator() {
  const [roofType, setRoofType] = useState(0);
  const [area, setArea] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const m2 = parseFloat(area);
    if (isNaN(m2) || m2 <= 0) return;
    setResult(m2 * roofTypes[roofType].pricePerM2);
  };

  return (
    <div className="bg-surface rounded-2xl p-6 md:p-8 border border-gray-100">
      <h3 className="text-xl font-bold text-dark mb-2">Kainos skaičiuoklė</h3>
      <p className="text-medium text-sm mb-6">
        Paskaičiuokite preliminarią stogo darbų kainą
      </p>

      {/* Roof type selection */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-dark mb-2">
          Stogo dangos tipas
        </label>
        <div className="grid grid-cols-1 gap-2">
          {roofTypes.map((type, i) => (
            <button
              key={type.label}
              onClick={() => { setRoofType(i); setResult(null); }}
              className={`text-left px-4 py-3 rounded-xl border-2 transition-all text-sm font-medium cursor-pointer ${
                roofType === i
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-gray-200 text-dark hover:border-gray-300"
              }`}
            >
              <div className="flex justify-between">
                <span>{type.label}</span>
                <span className="text-medium">{type.pricePerM2} €/m²</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Area input */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-dark mb-2">
          Stogo plotas (m²)
        </label>
        <input
          type="number"
          value={area}
          onChange={(e) => { setArea(e.target.value); setResult(null); }}
          placeholder="Įveskite plotą, pvz. 120"
          min="1"
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors text-dark placeholder:text-gray-400"
        />
      </div>

      {/* Calculate button */}
      <button
        onClick={calculate}
        className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary-hover transition-colors shadow-lg shadow-primary/25 cursor-pointer"
      >
        Skaičiuoti kainą
      </button>

      {/* Result */}
      <AnimatePresence>
        {result !== null && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-6 p-5 rounded-xl bg-primary/10 border border-primary/20"
          >
            <div className="text-sm text-medium mb-1">Preliminari kaina:</div>
            <div className="text-3xl font-extrabold text-primary">
              {result.toLocaleString("lt-LT")} €
            </div>
            <div className="text-xs text-medium mt-2">
              {roofTypes[roofType].label} • {area} m² • {roofTypes[roofType].pricePerM2} €/m²
            </div>
            <div className="mt-4 pt-4 border-t border-primary/20">
              <p className="text-xs text-medium mb-3">
                * Tai preliminari kaina tik už darbą be medžiagų. Tikslią kainą sužinosite susisiekę.
              </p>
              <a
                href="tel:+37062999330"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Gauti tikslią kainą: +370 6299 9330
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
