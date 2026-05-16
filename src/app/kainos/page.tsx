import type { Metadata } from "next";
import ClientKainos from "@/components/ClientKainos";
import {
  siteUrl,
  breadcrumbSchema,
  faqPageSchema,
} from "@/lib/seo";

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
        url: `${siteUrl}/og-image.png`,
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

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "PriceSpecification",
  priceCurrency: "EUR",
  description: "Stogo darbų kainos Dzūkijoje",
};

const breadcrumb = breadcrumbSchema([
  { name: "Pagrindinis", item: "/" },
  { name: "Kainos", item: "/kainos" },
]);

const faq = faqPageSchema([
  {
    question: "Kiek kainuoja stogo dengimas Dzūkijoje?",
    answer:
      "Kompleksinių stogo darbų kainos prasideda nuo 25€/m² už plieno čerpių stogą, 30€/m² už šiferio stogą ir 40€/m² už bituminių čerpių stogą. Kainos priklauso nuo projekto sudėtingumo ir pasirinktos dangos.",
  },
  {
    question: "Ar kainos nurodytos su medžiagomis?",
    answer:
      "Ne, kainos nurodytos tik už darbo paslaugas be statybinių medžiagų. Padėsime išsirinkti kainos ir kokybės santykį atitinkančias statybines medžiagas.",
  },
  {
    question: "Kiek kainuoja kamino skardinimas?",
    answer:
      "Kamino skardinimo darbų kaina prasideda nuo 280€ už vienetą. Tikslesnę kainą galime pasakyti įvertinę kamino dydį ir sudėtingumą.",
  },
  {
    question: "Ar suteikiate garantiją darbams?",
    answer:
      "Taip, atskiriems darbams suteikiame garantiją. Dirbame pagal verslo liudijimą nuo 2010 metų.",
  },
]);

export default function KainosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([pricingSchema, breadcrumb, faq]),
        }}
      />
      <ClientKainos />
    </>
  );
}
