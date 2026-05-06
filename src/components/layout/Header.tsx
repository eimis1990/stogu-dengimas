"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { href: "/#paslaugos", label: "Paslaugos" },
  { href: "/#procesas", label: "Procesas" },
  { href: "/#medziagos", label: "Medžiagos" },
  { href: "/#galerija", label: "Galerija" },
  { href: "/#kodel-mes", label: "Kodėl mes" },
  { href: "/#kainos", label: "Kainos" },
  { href: "/#kontaktai", label: "Kontaktai" },
];

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // On non-home pages, always show the solid header style
  const showSolidHeader = scrolled || !isHomePage;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          showSolidHeader
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        {/* Top bar - hidden on mobile */}
        <div className={`hidden sm:block border-b transition-colors duration-300 ${showSolidHeader ? "border-gray-100" : "border-white/10"}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-10 text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+37062999330" className={`flex items-center gap-1.5 transition-colors hover:text-primary ${showSolidHeader ? "text-medium" : "text-white/80"}`}>
                <PhoneIcon />
                +370 6299 9330
              </a>
              <a href="mailto:stogodarbaijums@gmail.com" className={`flex items-center gap-1.5 transition-colors hover:text-primary ${showSolidHeader ? "text-medium" : "text-white/80"}`}>
                <MailIcon />
                stogodarbaijums@gmail.com
              </a>
            </div>
            <a
              href="https://www.facebook.com/Mariusstogodarbai"
              target="_blank"
              rel="noopener noreferrer"
              className={`ml-auto transition-colors hover:text-primary ${showSolidHeader ? "text-medium" : "text-white/80"}`}
            >
              <FacebookIcon />
            </a>
          </div>
        </div>

        {/* Main nav */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 sm:h-16 md:h-20">
          <a href="/" className="flex items-center gap-2 sm:gap-3">
            <Image
              src="/logo.png"
              alt="Stogai Dzūkijoje"
              width={48}
              height={48}
              className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain transition-[filter] duration-300 ${
                showSolidHeader ? "" : "brightness-0 invert"
              }`}
            />
            <div className="flex flex-col">
              <span className={`font-bold text-sm sm:text-base md:text-lg leading-tight transition-colors ${showSolidHeader ? "text-dark" : "text-white"}`}>
                Stogai Dzūkijoje
              </span>
              <span className={`text-[10px] sm:text-xs leading-tight transition-colors ${showSolidHeader ? "text-medium" : "text-white/70"}`}>
                Nuo 2010 m.
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors hover:text-primary hover:bg-primary/5 ${
                  showSolidHeader ? "text-dark" : "text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+37062999330"
              className="ml-3 inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-hover transition-colors shadow-lg shadow-primary/25"
            >
              <PhoneIcon />
              Skambinti
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg"
            aria-label="Meniu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 rounded-full transition-all duration-300 ${showSolidHeader ? "bg-dark" : "bg-white"} ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 rounded-full transition-all duration-300 ${showSolidHeader ? "bg-dark" : "bg-white"} ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 rounded-full transition-all duration-300 ${showSolidHeader ? "bg-dark" : "bg-white"} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden animate-fade-in"
          onClick={() => setMenuOpen(false)}
        >
          <nav
            onClick={(e) => e.stopPropagation()}
            className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl flex flex-col animate-slide-left"
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <span className="font-bold text-lg text-dark">Meniu</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100"
                aria-label="Uždaryti"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 py-4 overflow-y-auto">
              {navLinks.map((link, i) => (
                <div
                  key={link.href}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-6 py-3 text-base font-medium text-dark hover:text-primary hover:bg-primary/5 transition-colors"
                  >
                    {link.label}
                  </a>
                </div>
              ))}
            </div>
            <div className="p-6 border-t border-gray-100 space-y-3">
              <a
                href="tel:+37062999330"
                className="flex items-center justify-center gap-2 w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-hover transition-colors"
              >
                <PhoneIcon />
                +370 6299 9330
              </a>
              <a
                href="mailto:stogodarbaijums@gmail.com"
                className="flex items-center justify-center gap-2 w-full border-2 border-primary text-primary py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                <MailIcon />
                Rašyti el. laišką
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}
