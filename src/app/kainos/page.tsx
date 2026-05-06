import type { Metadata } from "next";
import ClientKainos from "@/components/ClientKainos";

const siteUrl = "https://stogai-dzukijoje.lt";

export const metadata: Metadata = {
  title: "Statybos darbų kainos",
  description:
    "Stogo dengimo, renovacijos, skardinimo, šiltinimo ir apdailos darbų kainos Dzūkijoje. Kompleksinių stogo darbų kainos nuo 25€/m². Sąžiningos kainos be tarpininkų. Nemokama konsultacija.",
  keywords: [
    "stogo dengimo kainos",
    "stogo darbų kainos Alytus",
    "stogo kaina Varėna",
    "stogo renovacijos kaina",
    "kaminų skardinimo kaina",
    "stogo šiltinimo kaina",
    "bituminių čerpių kaina",
    "plieno čerpių montavimo kaina",
    "lietaus sistemos kaina",
  ],
  alternates: {
    canonical: `${siteUrl}/kainos`,
  },
  openGraph: {
    title: "Statybos darbų kainos | Stogai Dzūkijoje",
    description:
      "Išsami stogo darbų kainoraštis. Kompleksiniai stogo darbai nuo 25€/m². Sąžiningos kainos, nemokama konsultacija.",
    url: `${siteUrl}/kainos`,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Stogų dengimo kainos Dzūkijoje",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Statybos darbų kainos | Stogai Dzūkijoje",
    description:
      "Stogo darbų kainoraštis. Kompleksiniai darbai nuo 25€/m². Sąžiningos kainos.",
  },
};

// Pricing page JSON-LD structured data
const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "PriceSpecification",
  priceCurrency: "EUR",
  description: "Stogo darbų kainos Dzūkijoje",
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
    {
      "@type": "ListItem",
      position: 2,
      name: "Kainos",
      item: `${siteUrl}/kainos`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Kiek kainuoja stogo dengimas Dzūkijoje?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kompleksinių stogo darbų kainos prasideda nuo 25€/m² už plieno čerpių stogą, 30€/m² už šiferio stogą ir 40€/m² už bituminių čerpių stogą. Kainos priklauso nuo projekto sudėtingumo ir pasirinktos dangos.",
      },
    },
    {
      "@type": "Question",
      name: "Ar kainos nurodytos su medžiagomis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ne, kainos nurodytos tik už darbo paslaugas be statybinių medžiagų. Padėsime išsirinkti kainos ir kokybės santykį atitinkančias statybines medžiagas.",
      },
    },
    {
      "@type": "Question",
      name: "Kiek kainuoja kamino skardinimas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kamino skardinimo darbų kaina prasideda nuo 280€ už vienetą. Tikslesnę kainą galime pasakyti įvertinę kamino dydį ir sudėtingumą.",
      },
    },
    {
      "@type": "Question",
      name: "Ar suteikiate garantiją darbams?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Taip, atskiriems darbams suteikiame garantiją. Dirbame pagal verslo liudijimą nuo 2010 metų.",
      },
    },
  ],
};

export default function KainosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([pricingSchema, breadcrumbSchema, faqSchema]),
        }}
      />
      <ClientKainos />
    </>
  );
}

