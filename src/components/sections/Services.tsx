"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20" /><path d="M3 20V8l9-6 9 6v12" /><path d="M9 20v-6h6v6" />
      </svg>
    ),
    title: "Stogo dengimas",
    desc: "Šlaitinių ir plokščių stogų dengimas visų tipų dangomis — plieno čerpės, bituminės čerpės, šiferis.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V2" /><path d="M17 7H7" /><path d="M19 12H5" /><path d="M17 17H7" /><rect x="8" y="2" width="8" height="4" rx="1" />
      </svg>
    ),
    title: "Kaminų skardinimas",
    desc: "Profesionalus kaminų skardinimas profiliuotais plieno lakštais su garantija ir kokybės patikra.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14h6v8H4z" /><path d="M14 10h6v12h-6z" /><path d="M2 22h20" /><path d="m7 4 5-2 5 2" /><path d="M12 2v6" />
      </svg>
    ),
    title: "Stogo renovacija",
    desc: "Seno stogo atnaujinimas, remontas ir priežiūra. Modernizuojame stogus pagal naujausius standartus.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V8" /><path d="m2 14 10-8 10 8" /><path d="M6 18h12" />
      </svg>
    ),
    title: "Karkasinių namų statyba",
    desc: "Karkasinių namų, malkinių, garažų ir pavėsinių statyba bei apdaila nuo pamatų iki stogo.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 21h10" /><path d="M12 21V3" /><path d="m4 15 8-12 8 12" /><path d="M2 21h20" />
      </svg>
    ),
    title: "Lietaus sistemos",
    desc: "Lietaus nuvedimo ir sniego laikiklių sistemų montavimas iš cinkuoto plieno arba plastiko.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v18" /><path d="M3 12h18" /><rect x="5" y="5" width="14" height="14" rx="2" /><path d="M9 9h6v6H9z" />
      </svg>
    ),
    title: "Šiltinimo darbai",
    desc: "Stogo ir sienų šiltinimas akmens vata. Energijos taupymas ir komfortas jūsų namuose.",
  },
];

export default function Services() {
  return (
    <section id="paslaugos" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Atliekami darbai"
          subtitle="Profesionalūs statybos ir stogo darbai visoje Dzūkijoje — nuo pamatų iki stogo viršaus."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.1}>
              <div className="group p-6 md:p-8 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-medium text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4} className="text-center mt-12">
          <p className="text-medium text-sm">
            Taip pat atliekame: skardos gaminių lankstymą, pakalimų apdailą, namo vidaus ir išorės apdailą, pamatų liejimą ir kt.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
