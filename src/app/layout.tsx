import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700", "800"],
});

const siteUrl = "https://stogai-dzukijoje.lt";

export const viewport: Viewport = {
  themeColor: "#EC6536",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Stogų Dengimas Dzūkijoje | Profesionalūs stogo darbai nuo 2010 m.",
    template: "%s | Stogai Dzūkijoje",
  },
  description:
    "Stogų dengimas, renovacija, skardinimas Dzūkijoje. Profesionalūs stogo darbai Varėnoje, Alytuje, Druskininkuose, Lazdijuose, Trakų rajone. Sąžiningos kainos, kokybiškos medžiagos. Marius — Tel. +370 6299 9330",
  keywords: [
    "stogų dengimas Dzūkijoje",
    "stogo dengimas Alytus",
    "stogo dengimas Varėna",
    "stogo renovacija",
    "stogo skardinimas",
    "kaminų skardinimas",
    "stogo darbai",
    "stogdengiai Dzūkija",
    "lietaus sistemos montavimas",
    "stogo šiltinimas",
    "bituminės čerpės",
    "plieno čerpės",
    "stogo meistras Dzūkijoje",
  ],
  authors: [{ name: "Marius", url: siteUrl }],
  creator: "Stogai Dzūkijoje",
  publisher: "Stogai Dzūkijoje",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "lt-LT": siteUrl,
    },
  },
  openGraph: {
    type: "website",
    locale: "lt_LT",
    url: siteUrl,
    siteName: "Stogai Dzūkijoje",
    title: "Stogų Dengimas Dzūkijoje | Profesionalūs stogo darbai nuo 2010 m.",
    description:
      "Profesionalūs stogo darbai Dzūkijoje nuo 2010 m. Stogų dengimas, renovacija, skardinimas. Sąžiningos kainos, kokybiškos medžiagos. Dirbame Varėnoje, Alytuje, Druskininkuose. Marius — Tel. +370 6299 9330",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Stogai Dzūkijoje - Profesionalūs stogo darbai",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stogų Dengimas Dzūkijoje | Profesionalūs stogo darbai",
    description:
      "Stogų dengimas, renovacija, skardinimas Dzūkijoje nuo 2010 m. Sąžiningos kainos. Tel. +370 6299 9330",
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "Gz6LordrRAZ0is0RTFNbPUoOySC0aP-KgWZ9MWtH4Y0",
  },
  category: "construction",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

// Comprehensive JSON-LD structured data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id": `${siteUrl}/#organization`,
  name: "Stogai Dzūkijoje",
  alternateName: "Stogų dengimas Dzūkijoje",
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/logo.png`,
    width: 200,
    height: 200,
  },
  image: `${siteUrl}/og-image.png`,
  telephone: "+37062999330",
  email: "stogodarbaijums@gmail.com",
  foundingDate: "2010",
  description:
    "Profesionalūs stogų dengimo, renovacijos ir skardinimo darbai Dzūkijoje nuo 2010 metų. Sąžiningos kainos, kokybiškos medžiagos.",
  slogan: "Profesionalūs stogo darbai nuo 2010 m.",
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Cash, Bank Transfer",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Varėnos miestas",
    addressLocality: "Varėna",
    addressRegion: "Alytaus apskritis",
    postalCode: "65184",
    addressCountry: "LT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 54.2208,
    longitude: 24.5781,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Varėna",
    },
    {
      "@type": "City",
      name: "Alytus",
    },
    {
      "@type": "City",
      name: "Druskininkai",
    },
    {
      "@type": "City",
      name: "Lazdijai",
    },
    {
      "@type": "City",
      name: "Trakai",
    },
    {
      "@type": "AdministrativeArea",
      name: "Dzūkija",
    },
  ],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 54.2208,
      longitude: 24.5781,
    },
    geoRadius: "100000",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Stogo darbų paslaugos",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Stogų dengimas",
          description: "Šlaitinių ir plokščių stogų dengimas įvairiomis dangomis",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Stogų renovacija",
          description: "Senų stogų atnaujinimas ir remontas",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Kaminų skardinimas",
          description: "Profesionalus kaminų skardinimas ir hidroizoliacija",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Lietaus sistemų montavimas",
          description: "Latakų ir lietvamzdžių sistemų įrengimas",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Stogo šiltinimas",
          description: "Stogo šiltinimas akmens vata",
        },
      },
    ],
  },
  sameAs: ["https://www.facebook.com/Mariusstogodarbai"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+37062999330",
    contactType: "customer service",
    email: "stogodarbaijums@gmail.com",
    availableLanguage: ["Lithuanian"],
    areaServed: "LT",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "50",
    bestRating: "5",
    worstRating: "1",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Stogai Dzūkijoje",
  description: "Profesionalūs stogų dengimo darbai Dzūkijoje",
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
  inLanguage: "lt-LT",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Pagrindinis",
      item: siteUrl,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lt" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              organizationSchema,
              websiteSchema,
              breadcrumbSchema,
            ]),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
