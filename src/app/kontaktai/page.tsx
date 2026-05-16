import type { Metadata } from "next";
import Link from "next/link";
import {
  siteUrl,
  business,
  serviceAreaCities,
  breadcrumbSchema,
  roofingContractorSchema,
  ogImages,
  twitterImages,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Kontaktai — stogo meistras Dzūkijoje",
  description: `Susisiekite — ${business.contactName}, tel. ${business.phone}, el. paštas ${business.email}. Stogo darbai Varėnoje, Alytuje, Druskininkuose, Lazdijuose ir Trakų rajone.`,
  alternates: {
    canonical: `${siteUrl}/kontaktai`,
  },
  openGraph: {
    title: "Kontaktai | Stogai Dzūkijoje",
    description: `Skambinkite ${business.contactName} — ${business.phone}. Stogo darbai visoje Dzūkijoje.`,
    url: `${siteUrl}/kontaktai`,
    type: "website",
    images: ogImages,
  },
  twitter: {
    card: "summary_large_image",
    images: twitterImages,
  },
};

const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${business.addressLocality}, ${business.addressCountry}`,
)}`;

export default function KontaktaiPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Pagrindinis", item: "/" },
    { name: "Kontaktai", item: "/kontaktai" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([roofingContractorSchema(), breadcrumb]),
        }}
      />

      <section className="bg-surface pt-28 sm:pt-32 md:pt-36 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-medium">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Pagrindinis
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-dark font-medium">Kontaktai</li>
            </ol>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-dark mb-4">
            Kontaktai
          </h1>
          <p className="text-medium text-base sm:text-lg leading-relaxed mb-10">
            Atliekame stogo dengimo, renovacijos ir skardinimo darbus visoje
            Dzūkijoje. Skambinkite arba rašykite — pateiksime nemokamą sąmatą.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white border border-gray-100 p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-dark mb-4">
                Tiesioginis kontaktas
              </h2>
              <dl className="space-y-4 text-sm sm:text-base">
                <div>
                  <dt className="font-semibold text-dark">Kontaktinis asmuo</dt>
                  <dd className="text-medium">{business.contactName}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-dark">Telefonas</dt>
                  <dd>
                    <a
                      href={`tel:${business.phoneE164}`}
                      className="text-primary font-semibold hover:underline"
                    >
                      {business.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-dark">El. paštas</dt>
                  <dd>
                    <a
                      href={`mailto:${business.email}`}
                      className="text-primary font-semibold hover:underline break-all"
                    >
                      {business.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-dark">Facebook</dt>
                  <dd>
                    <a
                      href={business.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-semibold hover:underline"
                    >
                      Mariusstogodarbai
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl bg-white border border-gray-100 p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-dark mb-4">
                Veiklos informacija
              </h2>
              <dl className="space-y-4 text-sm sm:text-base">
                <div>
                  <dt className="font-semibold text-dark">Įmonė</dt>
                  <dd className="text-medium">
                    {business.legalName} — dirbame pagal verslo liudijimą
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-dark">Adresas</dt>
                  <dd className="text-medium">
                    {business.streetAddress}, {business.addressLocality}{" "}
                    {business.postalCode}, {business.addressRegion}, Lietuva
                    <br />
                    <a
                      href={mapsHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm"
                    >
                      Žiūrėti žemėlapyje →
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-dark">Darbo laikas</dt>
                  <dd className="text-medium">
                    Pirmadienis–penktadienis: 08:00–17:00
                    <br />
                    Šeštadienis–sekmadienis: pagal susitarimą
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-dark">Aptarnaujame</dt>
                  <dd className="text-medium">
                    {serviceAreaCities.join(", ")} ir visa Dzūkija
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-primary text-white">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">
              Reikia nemokamos sąmatos?
            </h2>
            <p className="text-white/90 mb-5">
              Skambinkite — atvyksime apžiūrėti objekto ir pateiksime tikslią
              kainą.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${business.phoneE164}`}
                className="inline-flex items-center justify-center gap-2 bg-white text-primary font-semibold px-5 py-3 rounded-lg hover:bg-white/90 transition-colors"
              >
                {business.phone}
              </a>
              <Link
                href="/#kontaktai"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold px-5 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                Rašyti per formą
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
