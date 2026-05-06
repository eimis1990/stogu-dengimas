"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

const trustPoints = [
  {
    number: "01",
    title: "Patirtis nuo 2010 m.",
    desc: "Daugiau nei 15 metų profesionalios patirties stogo ir statybos darbuose.",
  },
  {
    number: "02",
    title: "Sąžiningos kainos",
    desc: "Dirbame pagal verslo liudijimą — jokių tarpininkų, todėl kainos prieinamos kiekvienam.",
  },
  {
    number: "03",
    title: "Kokybiškos medžiagos",
    desc: "Padedame išsirinkti geriausią kainos ir kokybės santykį atitinkančias medžiagas.",
  },
  {
    number: "04",
    title: "Visa Dzūkija",
    desc: "Dirbame Varėnoje, Alytuje, Druskininkuose, Lazdijuose ir Trakų rajone.",
  },
];

function ReasonCard({
  point,
  index,
}: {
  point: (typeof trustPoints)[number];
  index: number;
}) {
  const isRaised = index % 2 === 1;

  return (
    <AnimatedSection delay={index * 0.08}>
      <div className="relative min-h-[252px] sm:min-h-[276px] lg:min-h-[300px]">
        <div
          className={`absolute left-4 right-4 h-36 rounded-lg bg-white/[0.06] shadow-2xl shadow-black/15 ring-1 ring-white/5 sm:h-40 lg:left-6 lg:right-6 ${
            isRaised ? "bottom-0" : "top-0"
          }`}
        >
          <span className="absolute inset-0 flex items-center justify-center font-heading text-5xl font-extrabold text-primary/55 sm:text-6xl">
            {point.number}
          </span>
        </div>

        <div
          className={`absolute left-0 right-0 z-10 rounded-lg bg-white p-5 text-dark shadow-xl shadow-black/20 sm:p-6 lg:-left-3 lg:-right-3 ${
            isRaised ? "top-0" : "bottom-0"
          }`}
        >
          <div
            className={`absolute h-5 w-12 bg-white ${
              isRaised
                ? "-bottom-3 left-1/2 -translate-x-1/2 [clip-path:polygon(0_0,100%_0,50%_100%)]"
                : "-top-3 left-1/2 -translate-x-1/2 [clip-path:polygon(50%_0,0_100%,100%_100%)]"
            }`}
          />
          <div className="relative flex items-start justify-between gap-4">
            <div>
              <h3 className="mb-3 text-base font-bold sm:text-lg">{point.title}</h3>
              <p className="text-sm leading-relaxed text-medium">{point.desc}</p>
            </div>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/25">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function WhyUs() {
  return (
    <section id="kodel-mes" className="py-20 md:py-28 bg-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Kodėl verta rinktis mus?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Konsultacija nemokama. Konkretaus projekto darbų kainas galite sužinoti paskambinę arba parašę el. laišką.
          </p>
          <div className="mt-4 h-1 w-16 rounded-full bg-primary mx-auto" />
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {trustPoints.map((point, i) => (
            <ReasonCard key={point.title} point={point} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
