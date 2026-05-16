import type { Metadata } from "next";
import Link from "next/link";
import {
  siteUrl,
  services,
  business,
  breadcrumbSchema,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Paslaugos — stogo dengimas, renovacija, skardinimas",
  description:
    "Stogų dengimas, renovacija, kaminų skardinimas, lietaus sistemos, stogo šiltinimas ir karkasinių namų statyba Dzūkijoje. Profesionalūs stogdengiai su 15+ metų patirtimi.",
  alternates: {
    canonical: `${siteUrl}/paslaugos`,
  },
  openGraph: {
    title: "Paslaugos | Stogai Dzūkijoje",
    description:
      "Stogo dengimas, renovacija, skardinimas, šiltinimas, lietaus sistemos. Profesionalūs darbai Dzūkijoje.",
    url: `${siteUrl}/paslaugos`,
    type: "website",
  },
};

export default function PaslaugosIndexPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Pagrindinis", item: "/" },
    { name: "Paslaugos", item: "/paslaugos" },
  ]);

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Stogo darbų paslaugos Dzūkijoje",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${siteUrl}/paslaugos/${s.slug}`,
      name: s.name,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([itemList, breadcrumb]),
        }}
      />

      <section className="bg-surface pt-28 sm:pt-32 md:pt-36 pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-medium">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Pagrindinis
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-dark font-medium">Paslaugos</li>
            </ol>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-dark mb-4">
            Atliekamos paslaugos
          </h1>
          <p className="text-medium text-base sm:text-lg leading-relaxed mb-12 max-w-3xl">
            Profesionalūs stogo ir statybos darbai visoje Dzūkijoje. Dirbame
            su gyvenamaisiais namais, sodybomis, ūkiniais pastatais ir
            komerciniais objektais. Visiems atskiriems darbams suteikiama
            garantija.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/paslaugos/${s.slug}`}
                className="group block p-6 sm:p-8 rounded-2xl bg-white border border-gray-100 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all"
              >
                <h2 className="text-lg sm:text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                  {s.name}
                </h2>
                <p className="text-medium text-sm leading-relaxed mb-4">
                  {s.short}
                </p>
                <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm">
                  Plačiau
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white border border-gray-100">
            <h2 className="text-xl font-bold text-dark mb-2">
              Nemokama konsultacija
            </h2>
            <p className="text-medium mb-5">
              Skambinkite {business.contactName} —{" "}
              <a
                href={`tel:${business.phoneE164}`}
                className="text-primary font-semibold hover:underline"
              >
                {business.phone}
              </a>
              {" "}— atvyksime, įvertinsime objektą ir pateiksime sąmatą.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
