"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  const [formData, setFormData] = useState({
    vardas: "",
    pavarde: "",
    telefonas: "",
    elpastas: "",
    adresas: "",
    data: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitStatus("success");
    setIsSubmitting(false);

    // Reset form after success
    setTimeout(() => {
      setFormData({ vardas: "", pavarde: "", telefonas: "", elpastas: "", adresas: "", data: "" });
      setSubmitStatus("idle");
    }, 3000);
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-dark">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/roof-hero.png"
          alt="Stogų dengimas"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Dark overlay for text readability - stronger on mobile */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-dark/50 md:from-dark/80 md:via-dark/60 md:to-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-transparent to-dark/80 md:from-dark/30 md:to-dark/70" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 pt-28 sm:pt-32 md:pt-40 pb-10 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Text - Left aligned */}
          <div className="max-w-3xl">
            <div
              className="hero-glass-pill inline-flex items-center gap-2 border border-white/[0.15] text-white/[0.85] px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm mb-4 sm:mb-8 backdrop-blur-md animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary animate-pulse" />
              Patikimi stogo meistrai nuo 2010 m.
            </div>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.15] mb-4 sm:mb-6 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              Kokybiškas stogų dengimas{" "}
              <span className="text-primary">Dzūkijoje.</span>
            </h1>

            <p
              className="text-base sm:text-lg md:text-xl text-white/80 max-w-xl mb-6 sm:mb-10 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              Profesionali statybininkų brigada atlieka stogų dengimą, renovaciją ir skardinimą visoje Dzūkijoje.
            </p>

            <div
              className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              <Button href="#kontaktai" size="lg" className="w-full sm:w-auto justify-center">
                Sužinoti daugiau
              </Button>
              <Button href="tel:+37062999330" variant="outline" size="lg" className="w-full sm:w-auto justify-center border-white/30 text-white hover:bg-white hover:text-dark hover:border-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +370 6299 9330
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="relative z-10 pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="grid lg:grid-cols-2 rounded-t-2xl overflow-hidden shadow-2xl animate-fade-in-up"
            style={{ animationDelay: "1s" }}
          >
            {/* Left side - CTA with accent background */}
            <div className="bg-primary p-5 sm:p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
              {/* Decorative elements - hidden on mobile for cleaner look */}
              <div className="hidden sm:block absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="hidden sm:block absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4 leading-tight">
                  Užsakykite nemokamą sąmatą
                </h2>
                <p className="text-white/90 text-sm sm:text-base md:text-lg mb-3 sm:mb-6">
                  Užpildykite formą ir mes su jumis susisieksime per 24 valandas.
                </p>
                <div className="hidden sm:block w-16 h-1 bg-white/50 rounded-full" />

                {/* Stats - compact row on mobile */}
                <div className="mt-4 sm:mt-8 flex gap-6 sm:grid sm:grid-cols-2 sm:gap-6">
                  {[
                    { value: "15+", label: "Metų patirties" },
                    { value: "500+", label: "Atliktų projektų" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="text-lg sm:text-2xl md:text-3xl font-extrabold text-white">
                        {stat.value}
                      </div>
                      <div className="text-[11px] sm:text-sm text-white/70">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="bg-white p-4 sm:p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-4 md:space-y-5">
                {/* Stack fields on mobile, 2 cols on larger */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4 md:gap-5">
                  <input
                    type="text"
                    placeholder="Vardas*"
                    required
                    value={formData.vardas}
                    onChange={(e) => setFormData({ ...formData, vardas: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 bg-gray-100 border-0 rounded-lg text-dark text-sm placeholder:text-medium focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  />
                  <input
                    type="text"
                    placeholder="Pavardė*"
                    required
                    value={formData.pavarde}
                    onChange={(e) => setFormData({ ...formData, pavarde: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 bg-gray-100 border-0 rounded-lg text-dark text-sm placeholder:text-medium focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  />
                </div>

                <input
                  type="tel"
                  placeholder="Telefonas*"
                  required
                  value={formData.telefonas}
                  onChange={(e) => setFormData({ ...formData, telefonas: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 bg-gray-100 border-0 rounded-lg text-dark text-sm placeholder:text-medium focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                />

                <input
                  type="email"
                  placeholder="El. paštas*"
                  required
                  value={formData.elpastas}
                  onChange={(e) => setFormData({ ...formData, elpastas: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 bg-gray-100 border-0 rounded-lg text-dark text-sm placeholder:text-medium focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                />

                <input
                  type="text"
                  placeholder="Adresas*"
                  required
                  value={formData.adresas}
                  onChange={(e) => setFormData({ ...formData, adresas: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 bg-gray-100 border-0 rounded-lg text-dark text-sm placeholder:text-medium focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                />

                <input
                  type="text"
                  placeholder="Pageidaujama data (neprivaloma)"
                  value={formData.data}
                  onChange={(e) => setFormData({ ...formData, data: e.target.value })}
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => {
                    if (!e.target.value) e.target.type = "text";
                  }}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 bg-gray-100 border-0 rounded-lg text-dark text-sm placeholder:text-medium focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-lg hover:bg-primary-hover transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Siunčiama...
                    </span>
                  ) : submitStatus === "success" ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Išsiųsta!
                    </span>
                  ) : (
                    "Siųsti užklausą"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
