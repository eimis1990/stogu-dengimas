"use client";

import { useState, FormEvent } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Užklausa nuo ${formData.name}`);
    const body = encodeURIComponent(
      `Vardas: ${formData.name}\n` +
      `Telefonas: ${formData.phone}\n` +
      `El. paštas: ${formData.email || "Nenurodytas"}\n\n` +
      `Žinutė:\n${formData.message}`
    );

    window.location.href = `mailto:stogodarbaijums@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="kontaktai" className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Susisiekite su mumis"
          subtitle="Nemokama konsultacija. Parašykite arba paskambinkite — atsakysime per 24 val."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <AnimatedSection direction="left">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-dark mb-4">
                  Užsakymų priėmimas ir konsultacijos
                </h3>
                <p className="text-medium text-sm leading-relaxed mb-6">
                  Dirbame savarankiškai pagal verslo liudijimą. Todėl mūsų statybos darbų kainos prieinamos kiekvienam klientui. Atskiriems darbams suteikiame garantiją.
                </p>
              </div>

              {/* Contact cards */}
              <a
                href="tel:+37062999330"
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-dark">Marius</div>
                  <div className="text-primary font-semibold">+370 6299 9330</div>
                </div>
              </a>

              <a
                href="mailto:stogodarbaijums@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-dark">El. paštas</div>
                  <div className="text-primary font-semibold">stogodarbaijums@gmail.com</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-dark">Adresas</div>
                  <div className="text-medium">Varėna, Dzūkija, Lietuva</div>
                </div>
              </div>

              <a
                href="https://www.facebook.com/Mariusstogodarbai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-dark">Facebook</div>
                  <div className="text-medium text-sm">Mariusstogodarbai</div>
                </div>
              </a>

              {/* Google Maps embed */}
              <div className="rounded-xl overflow-hidden border border-gray-100 h-[200px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36738.01889830893!2d24.35!3d54.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e721e5e5e5e5e5%3A0x5e5e5e5e5e5e5e5e!2sVar%C4%97na%2C%20Lithuania!5e0!3m2!1slt!2slt!4v1"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Varėna, Lietuva"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Contact form */}
          <AnimatedSection direction="right">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-dark mb-6">
                Parašykite mums
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-dark mb-1.5">
                    Vardas
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jūsų vardas"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors text-dark placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark mb-1.5">
                    Telefonas
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+370 ..."
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors text-dark placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark mb-1.5">
                    El. paštas
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jusu@email.lt"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors text-dark placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark mb-1.5">
                    Žinutė
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Aprašykite savo projektą: stogo tipas, plotas, vieta..."
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors text-dark placeholder:text-gray-400 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3.5 rounded-xl font-semibold hover:bg-primary-hover transition-colors shadow-lg shadow-primary/25 cursor-pointer text-lg"
                >
                  Siųsti užklausą
                </button>
                <p className="text-xs text-medium text-center">
                  Atsakysime per 24 valandas
                </p>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
