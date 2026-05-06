"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    num: "01",
    title: "Murlotų montavimas",
    desc: "Murlotai dedami ant hidroizoliacijos sluoksnio ir ankeruojami metaliniais strypais į sienų korpusą per visą ilgį, kas 90 cm. Tai apsaugo medieną nuo pūvimo.",
  },
  {
    num: "02",
    title: "Gegnių montavimas",
    desc: "Gegnės tvirtinamos kampiniais elementais ir surišamos prie murlotų. Atstumas tarp gegnių priklauso nuo stogo dangos tipo: 60 cm čerpėms, 90 cm skardai.",
  },
  {
    num: "03",
    title: "Difuzinė plėvelė ir grebėstai",
    desc: "Difuzinė plėvelė atlieka hidroizoliacinę funkciją — nepraleidžia vandens ir kondensato. Ant jos tvirtinami grebėstai pagal dangos tipą.",
  },
  {
    num: "04",
    title: "OSB plokštės (bitumui)",
    desc: "Papildomas OSB sluoksnis reikalingas tik bituminių čerpių stogui. Tarp plokščių paliekamas 0,5 cm tarpas dėl medinės konstrukcijos judėjimo.",
  },
  {
    num: "05",
    title: "Stogo dangos montavimas",
    desc: "Stogo danga parenkama pagal kliento poreikius: keraminės, bituminės, betoninės čerpės, plieno skarda arba beasbestis šiferis.",
  },
];

export default function Process() {
  return (
    <section id="procesas" className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Stogo dengimo procesas"
          subtitle="Šlaitinio stogo dengimo etapai — kiekvienas žingsnis atliekamas profesionaliai ir kokybiškai."
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gray-200" />

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.15} direction="left">
                <div className="relative flex gap-5 md:gap-8">
                  {/* Number circle */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm md:text-base shadow-lg shadow-primary/25">
                    {step.num}
                  </div>

                  {/* Content */}
                  <div className="pb-8 pt-1">
                    <h3 className="text-lg md:text-xl font-bold text-dark mb-2">
                      {step.title}
                    </h3>
                    <p className="text-medium text-sm md:text-base leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
