"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import QuoteCalculator from "@/components/ui/QuoteCalculator";

const highlights = [
  { label: "Plieno čerpių stogas", price: "nuo 25 €/m²", tag: "Populiariausias" },
  { label: "Beasbestinio šiferio stogas", price: "nuo 30 €/m²", tag: "" },
  { label: "Bituminių čerpių stogas", price: "nuo 40 €/m²", tag: "Premium" },
  { label: "Kaminų skardinimas", price: "nuo 280 €/vnt.", tag: "" },
  { label: "Latakų montavimas", price: "nuo 16 €/m", tag: "" },
  { label: "Stogo šiltinimas", price: "nuo 7 €/m²", tag: "" },
];

interface QuickPricingProps {
  onOpenFullPricing?: () => void;
}

export default function QuickPricing({ onOpenFullPricing }: QuickPricingProps) {
  return (
    <section id="kainos" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Darbų kainos"
          subtitle="Kainos nurodytos tik už darbo paslaugas be statybinių medžiagų. Tikslią kainą sužinosite susisiekę."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Price highlights */}
          <AnimatedSection>
            <div className="space-y-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between p-4 rounded-xl bg-surface hover:bg-primary-light/50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-dark font-medium text-sm md:text-base">
                      {item.label}
                    </span>
                    {item.tag && (
                      <span className="hidden sm:inline text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <span className="font-bold text-dark text-sm md:text-base whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={onOpenFullPricing}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                Visas kainoraštis
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </AnimatedSection>

          {/* Quote calculator */}
          <AnimatedSection delay={0.2}>
            <QuoteCalculator />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
