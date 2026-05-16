import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  siteUrl,
  siteName,
  business,
  organizationSchema,
  roofingContractorSchema,
  websiteSchema,
  breadcrumbSchema,
} from "@/lib/seo";

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
    template: `%s | ${siteName}`,
  },
  description: `Stogų dengimas, renovacija, skardinimas Dzūkijoje. Profesionalūs stogo darbai Varėnoje, Alytuje, Druskininkuose, Lazdijuose, Trakų rajone. Sąžiningos kainos, kokybiškos medžiagos. ${business.contactName} — Tel. ${business.phone}`,
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
  authors: [{ name: business.contactName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
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
    siteName,
    title: "Stogų Dengimas Dzūkijoje | Profesionalūs stogo darbai nuo 2010 m.",
    description: `Profesionalūs stogo darbai Dzūkijoje nuo 2010 m. Stogų dengimas, renovacija, skardinimas. Sąžiningos kainos, kokybiškos medžiagos. Dirbame Varėnoje, Alytuje, Druskininkuose. ${business.contactName} — Tel. ${business.phone}`,
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
    description: `Stogų dengimas, renovacija, skardinimas Dzūkijoje nuo 2010 m. Sąžiningos kainos. Tel. ${business.phone}`,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const homeBreadcrumb = breadcrumbSchema([
    { name: "Pagrindinis", item: "/" },
  ]);

  return (
    <html lang="lt" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0QT9VS7W6B"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0QT9VS7W6B');
          `}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              roofingContractorSchema(),
              organizationSchema(),
              websiteSchema(),
              homeBreadcrumb,
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
