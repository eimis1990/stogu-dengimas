/**
 * Centralised SEO constants and JSON-LD builders.
 *
 * Use `siteUrl` everywhere instead of hard-coding the domain. Reads
 * `NEXT_PUBLIC_SITE_URL` at build time; falls back to the production
 * hostname so local dev still produces valid absolute URLs in metadata.
 */

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://stogai-dzukijoje.lt"
).replace(/\/$/, "");

export const siteName = "Stogai Dzūkijoje";
export const siteShortName = "Stogai Dzūkijoje";

/** Business contact details. Single source of truth. */
export const business = {
  legalName: "Stogai Dzūkijoje",
  contactName: "Marius",
  phone: "+370 6299 9330",
  phoneE164: "+37062999330",
  email: "stogodarbaijums@gmail.com",
  facebook: "https://www.facebook.com/Mariusstogodarbai",
  foundingYear: "2010",

  // TODO: owner — provide exact street + house number. Current value is the
  // city only and is the best public information available in the repo.
  streetAddress: "Varėnos miestas",
  addressLocality: "Varėna",
  addressRegion: "Alytaus apskritis",
  postalCode: "65184",
  addressCountry: "LT",

  // TODO: owner — verify geo coordinates point at the correct office/depot.
  latitude: 54.2208,
  longitude: 24.5781,

  // TODO: owner — confirm working hours. Default below is a sensible
  // assumption for a roofing crew operating Monday–Friday.
  openingHours: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
} as const;

export const serviceAreaCities = [
  "Varėna",
  "Alytus",
  "Druskininkai",
  "Lazdijai",
  "Trakai",
] as const;

/**
 * sameAs profiles. Only include verified public profiles.
 * TODO: owner — add Google Business Profile URL once claimed.
 * TODO: owner — add Instagram URL if/when account exists.
 */
export const sameAsProfiles: string[] = [business.facebook];

/** Canonical service catalogue used by JSON-LD and the /paslaugos pages. */
export interface ServiceEntry {
  slug: string;
  name: string;
  short: string;
  description: string;
  details: string[];
}

export const services: ServiceEntry[] = [
  {
    slug: "stogu-dengimas",
    name: "Stogų dengimas",
    short: "Šlaitinių ir plokščių stogų dengimas įvairiomis dangomis.",
    description:
      "Dengiame naujus ir keičiame senus stogus visoje Dzūkijoje. Dirbame su plieno čerpėmis, bituminėmis čerpėmis, šiferiu ir profiliuota skarda.",
    details: [
      "Šlaitinių ir plokščių stogų dengimas",
      "Plieno čerpės, bituminės čerpės, šiferis, profiliuota skarda",
      "Stogo konstrukcijos paruošimas ir hidroizoliacija",
      "Garantija atskiriems darbams",
    ],
  },
  {
    slug: "stogo-renovacija",
    name: "Stogo renovacija",
    short: "Senų stogų atnaujinimas, remontas ir modernizavimas.",
    description:
      "Atnaujiname senus stogus — keičiame dangą, sustipriname konstrukciją, patikriname hidroizoliaciją ir šiltinimą. Renovuojame pagal naujausius standartus.",
    details: [
      "Senos dangos demontavimas ir utilizavimas",
      "Konstrukcijos patikra ir remontas",
      "Naujos hidroizoliacijos klojimas",
      "Naujos dangos montavimas",
    ],
  },
  {
    slug: "kaminu-skardinimas",
    name: "Kaminų skardinimas",
    short: "Profesionalus kaminų skardinimas ir hidroizoliacija.",
    description:
      "Skardiname kaminus profiliuotais plieno lakštais. Užtikriname sandarumą prie stogo dangos ir ilgalaikę apsaugą nuo kritulių.",
    details: [
      "Kamino apdailos skardinimas",
      "Sandūrų prie stogo hidroizoliacija",
      "Kaminų dangčių montavimas",
      "Garantija atskiriems darbams",
    ],
  },
  {
    slug: "lietaus-sistemos",
    name: "Lietaus sistemų montavimas",
    short: "Latakai, lietvamzdžiai ir sniego laikikliai.",
    description:
      "Montuojame lietaus nuvedimo sistemas iš cinkuoto plieno arba plastiko. Įrengiame ir sniego laikiklius, kad žiemą stogas išliktų saugus.",
    details: [
      "Latakų ir lietvamzdžių montavimas",
      "Cinkuoto plieno ir plastiko sistemos",
      "Sniego laikiklių įrengimas",
      "Esamos sistemos remontas",
    ],
  },
  {
    slug: "stogo-siltinimas",
    name: "Stogo šiltinimas",
    short: "Stogo ir palėpės šiltinimas akmens vata.",
    description:
      "Šiltiname stogus ir palėpes akmens vata. Padidiname namo energinį efektyvumą, sumažiname šildymo sąnaudas ir užtikriname komfortą ištisus metus.",
    details: [
      "Akmens vatos klojimas tarp gegnių",
      "Garų izoliacijos plėvelės montavimas",
      "Vėdinimo tarpų užtikrinimas",
      "Vidaus apdailos paruošimas",
    ],
  },
  {
    slug: "karkasiniu-namu-statyba",
    name: "Karkasinių namų statyba",
    short: "Karkasiniai namai, malkinės, garažai ir pavėsinės.",
    description:
      "Statome karkasinius namus, malkines, garažus ir pavėsines nuo pamatų iki stogo. Atliekame ir apdailos darbus.",
    details: [
      "Pamatų liejimas",
      "Karkaso surinkimas ir apkalimas",
      "Stogo įrengimas",
      "Vidaus ir išorės apdaila",
    ],
  },
];

/** Build a fully-qualified URL from a relative path. */
export function url(path = "/"): string {
  if (path.startsWith("http")) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

/* ----------------------------------------------------------------------- */
/* JSON-LD builders                                                         */
/* ----------------------------------------------------------------------- */

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization-root`,
    name: business.legalName,
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: url("/logo.png"),
      width: 200,
      height: 200,
    },
    sameAs: sameAsProfiles,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: business.phoneE164,
      contactType: "customer service",
      email: business.email,
      availableLanguage: ["Lithuanian"],
      areaServed: "LT",
    },
  };
}

export function roofingContractorSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": `${siteUrl}/#organization`,
    name: business.legalName,
    alternateName: "Stogų dengimas Dzūkijoje",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: url("/logo.png"),
      width: 200,
      height: 200,
    },
    image: url("/og-image.png"),
    telephone: business.phoneE164,
    email: business.email,
    foundingDate: business.foundingYear,
    description:
      "Profesionalūs stogų dengimo, renovacijos ir skardinimo darbai Dzūkijoje nuo 2010 metų. Sąžiningos kainos, kokybiškos medžiagos.",
    slogan: "Profesionalūs stogo darbai nuo 2010 m.",
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Bank Transfer",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.streetAddress,
      addressLocality: business.addressLocality,
      addressRegion: business.addressRegion,
      postalCode: business.postalCode,
      addressCountry: business.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.latitude,
      longitude: business.longitude,
    },
    areaServed: [
      ...serviceAreaCities.map((name) => ({ "@type": "City", name })),
      { "@type": "AdministrativeArea", name: "Dzūkija" },
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: business.latitude,
        longitude: business.longitude,
      },
      geoRadius: "100000",
    },
    openingHoursSpecification: business.openingHours,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Stogo darbų paslaugos",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.short,
          url: url(`/paslaugos/${s.slug}`),
        },
      })),
    },
    sameAs: sameAsProfiles,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: business.phoneE164,
      contactType: "customer service",
      email: business.email,
      availableLanguage: ["Lithuanian"],
      areaServed: "LT",
    },
    // NOTE: aggregateRating intentionally omitted — adding fabricated review
    // data violates Google's structured-data guidelines. Owner can add a
    // real AggregateRating block once a verified review source is in place.
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: siteName,
    description: "Profesionalūs stogų dengimo darbai Dzūkijoje",
    publisher: { "@id": `${siteUrl}/#organization` },
    inLanguage: "lt-LT",
  };
}

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.item.startsWith("http") ? it.item : url(it.item),
    })),
  };
}

export function serviceSchema(service: ServiceEntry) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url(`/paslaugos/${service.slug}`)}#service`,
    serviceType: service.name,
    name: service.name,
    description: service.description,
    url: url(`/paslaugos/${service.slug}`),
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: [
      ...serviceAreaCities.map((name) => ({ "@type": "City", name })),
      { "@type": "AdministrativeArea", name: "Dzūkija" },
    ],
    inLanguage: "lt-LT",
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export function faqPageSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  };
}
