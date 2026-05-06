export interface PricingItem {
  name: string;
  price: string;
  unit: string;
}

export interface PricingCategory {
  title: string;
  items: PricingItem[];
}

export const pricingData: PricingCategory[] = [
  {
    title: "Pamatai",
    items: [
      { name: "Namo pamatų liejimas", price: "45 €", unit: "m" },
      { name: "Medinių grindų įrengimas", price: "17 €", unit: "m²" },
      { name: "Grindjuosčių įrengimas", price: "7 €", unit: "m" },
    ],
  },
  {
    title: "Sienos",
    items: [
      { name: "Namo sienų medinio karkaso montavimas", price: "14 €", unit: "m²" },
      { name: "Pertvarų karkaso montavimas (medinio/metalinio profilio)", price: "12 €", unit: "m²" },
      { name: "Lubų karkaso montavimas", price: "14 €", unit: "m²" },
      { name: "Gipso kartono montavimas ant sienų", price: "8 €", unit: "m²" },
      { name: "OSB plokštės montavimas", price: "7 €", unit: "m²" },
      { name: "Langų montavimas", price: "35 €", unit: "m²" },
      { name: "Durų montavimas", price: "75 €", unit: "vnt." },
      { name: "Išorės palangių montavimas", price: "28 €", unit: "m" },
    ],
  },
  {
    title: "Kompleksiniai stogo darbai",
    items: [
      { name: "Beasbestinio šiferio stogas (kompleksinis)", price: "30 €", unit: "m²" },
      { name: "Plieno čerpių stogas (kompleksinis)", price: "25 €", unit: "m²" },
      { name: "Bituminių čerpių stogas (kompleksinis)", price: "40 €", unit: "m²" },
    ],
  },
  {
    title: "Stogo dangos montavimas",
    items: [
      { name: "Beasbestinio šiferio montavimas", price: "15 €", unit: "m²" },
      { name: "Plieno čerpių montavimas", price: "9 €", unit: "m²" },
      { name: "Bituminių čerpių montavimas", price: "17 €", unit: "m²" },
      { name: "Ruloninės stogo dangos montavimas", price: "40 €", unit: "m²" },
    ],
  },
  {
    title: "Stogo konstrukcijų darbai",
    items: [
      { name: "Murlotų montavimas", price: "15 €", unit: "m" },
      { name: "Gegnių montavimas", price: "12 €", unit: "m²" },
      { name: "Hidroizoliacijos montavimas (difuzinė plėvelė)", price: "1,70–2,70 €", unit: "m²" },
      { name: "Grebėstų montavimas", price: "9 €", unit: "m²" },
    ],
  },
  {
    title: "Papildomi stogo darbai",
    items: [
      { name: "Kaminų skardinimas", price: "280 €", unit: "vnt." },
      { name: "Latakų montavimas su laštakiu", price: "16 €", unit: "m" },
      { name: "Lietvamzdžių montavimas", price: "8 €", unit: "m" },
      { name: "Skardinių vėjalenčių montavimas", price: "6 €", unit: "m" },
      { name: "Sniego gaudytuvų montavimas", price: "6 €", unit: "m" },
      { name: "Parapeto skardinimas", price: "10 €", unit: "m" },
      { name: "Medinio pakalimo montavimas", price: "17 €", unit: "m" },
      { name: "Plastikinio pakalimo montavimas", price: "17 €", unit: "m" },
      { name: "Skardinio pakalimo montavimas", price: "14 €", unit: "m" },
    ],
  },
  {
    title: "Šiltinimo darbai",
    items: [
      { name: "Vidaus sienų šiltinimas vata", price: "7 €", unit: "m²" },
      { name: "Šlaitinio stogo šiltinimas vata (tarp gegnių)", price: "10 €", unit: "m²" },
      { name: "Medinės perdangos šiltinimas vata (tarp gegnių)", price: "8 €", unit: "m²" },
      { name: "Plokščio stogo šiltinimas (dviem sluoksniais)", price: "12 €", unit: "m²" },
    ],
  },
  {
    title: "Apdailos darbai",
    items: [
      { name: "Fasado skardinimas", price: "10 €", unit: "m²" },
      { name: "Plastikinių dailylenčių montavimas", price: "18 €", unit: "m²" },
      { name: "Medinių dailylenčių montavimas", price: "18 €", unit: "m²" },
      { name: "Sieninės skardos montavimas", price: "16 €", unit: "m²" },
    ],
  },
];

export const roofTypes = [
  { label: "Plieno čerpės", pricePerM2: 25 },
  { label: "Beasbestinis šiferis", pricePerM2: 30 },
  { label: "Bituminės čerpės", pricePerM2: 40 },
] as const;
