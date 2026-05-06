"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

const materials = [
  {
    name: "Plieno čerpės",
    price: "11,30 €/m²",
    weight: "3-5 kg/m²",
    angle: "nuo 15°",
    pros: ["Greitai montuojama", "Mechaniškai atspari", "Lengva", "Neskilinėja"],
    cons: ["Silpna garso izoliacija", "Didelis atliekų kiekis"],
    color: "bg-red-50 border-red-200",
    accent: "text-red-600",
  },
  {
    name: "Klasikiniai plieno lakštai",
    price: "12,50 €/m²",
    weight: "4-5 kg/m²",
    angle: "nuo 20°",
    pros: ["Atsparus temperatūrai", "Lankstus", "Lengvas", "Lygus vandens nutekėjimas"],
    cons: ["Neatspari smūgiams", "Reikia šiltinimo sluoksnio"],
    color: "bg-blue-50 border-blue-200",
    accent: "text-blue-600",
  },
  {
    name: "Profiliuoti plieno lakštai",
    price: "10,10 €/m²",
    weight: "—",
    angle: "—",
    pros: ["Greitas montavimas", "Atspari lankstymui", "Ilgaamžiška"],
    cons: ["Labai silpna garso izoliacija"],
    color: "bg-gray-50 border-gray-200",
    accent: "text-gray-600",
  },
  {
    name: "Beasbestinis šiferis",
    price: "8,79 €/m²",
    weight: "~0,2 KN/m²",
    angle: "—",
    pros: ["50+ metų tarnavimas", "Atsparus drėgmei", "Apsaugotas nuo korozijos", "Minimalus kondensatas"],
    cons: ["Sunkiai plaunami suodžiai", "Keičiasi karkaso konstrukcija"],
    color: "bg-green-50 border-green-200",
    accent: "text-green-600",
  },
  {
    name: "Keraminės čerpės",
    price: "nuo 1,60 €/vnt",
    weight: "nuo 2 kg/vnt",
    angle: "22°–60°",
    pros: ["Aukšta garso izoliacija", "Nedegi", "Nerūdija", "Iki 1000 šalčio ciklų"],
    cons: ["Didelis svoris", "Trapi medžiaga"],
    color: "bg-orange-50 border-orange-200",
    accent: "text-orange-600",
  },
  {
    name: "Bituminės čerpės",
    price: "8,30 €/m²",
    weight: "8-12 kg/m²",
    angle: "nuo 12°",
    pros: ["Nelūžta, neskilinėja", "Plastiška", "Gera garso izoliacija", "Mažai nuopjovų"],
    cons: ["Blunka nuo UV", "Sunkus montavimas žiemą"],
    color: "bg-purple-50 border-purple-200",
    accent: "text-purple-600",
  },
];

export default function Materials() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="medziagos" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Stogo dangos medžiagos"
          subtitle="Renkantis stogo dangą būtina žinoti visus privalumus ir trūkumus, kainos ir kokybės santykį."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((mat, i) => (
            <AnimatedSection key={mat.name} delay={i * 0.1}>
              <div
                className={`rounded-2xl border-2 ${mat.color} p-6 h-full cursor-pointer transition-all duration-300 hover:shadow-lg`}
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-dark">{mat.name}</h3>
                  <span className={`text-lg font-bold ${mat.accent}`}>
                    {mat.price}
                  </span>
                </div>

                <div className="flex gap-4 text-xs text-medium mb-4">
                  {mat.weight !== "—" && (
                    <span className="bg-white/80 px-2 py-1 rounded">
                      Svoris: {mat.weight}
                    </span>
                  )}
                  {mat.angle !== "—" && (
                    <span className="bg-white/80 px-2 py-1 rounded">
                      Nuolydis: {mat.angle}
                    </span>
                  )}
                </div>

                {/* Pros */}
                <div className="mb-3">
                  <div className="text-xs font-semibold text-green-700 uppercase tracking-wider mb-2">
                    Privalumai
                  </div>
                  <ul className="space-y-1">
                    {mat.pros.map((pro) => (
                      <li key={pro} className="flex items-center gap-2 text-sm text-dark">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cons - expandable */}
                <AnimatePresence>
                  {expanded === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="text-xs font-semibold text-red-700 uppercase tracking-wider mb-2 mt-3">
                        Trūkumai
                      </div>
                      <ul className="space-y-1">
                        {mat.cons.map((con) => (
                          <li key={con} className="flex items-center gap-2 text-sm text-dark">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2.5">
                              <line x1="18" y1="6" x2="6" y2="18" />
                              <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-4 text-xs text-medium text-center">
                  {expanded === i ? "Spustelėkite, kad sutrauktumėte" : "Spustelėkite daugiau informacijos"}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
