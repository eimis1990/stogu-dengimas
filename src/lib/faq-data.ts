import type { FaqItem } from "@/lib/seo";

/**
 * Visible /duk Q&A. The same array drives both the rendered HTML and the
 * FAQPage JSON-LD, so they cannot drift apart (Google requires an exact
 * match between schema and on-page text).
 */
export const faqItems: FaqItem[] = [
  {
    question: "Kokioje teritorijoje atliekate stogo darbus?",
    answer:
      "Dirbame visoje Dzūkijoje — Varėnos, Alytaus, Druskininkų, Lazdijų rajonuose ir Trakų rajone. Esant didesnės apimties projektams vykstame ir toliau, iki maždaug 100 km spinduliu nuo Varėnos.",
  },
  {
    question: "Kiek kainuoja stogo dengimas?",
    answer:
      "Kompleksinių stogo darbų kainos prasideda nuo 25 €/m² už plieno čerpių stogą, 30 €/m² už šiferio stogą ir 40 €/m² už bituminių čerpių stogą. Galutinė kaina priklauso nuo ploto, sudėtingumo ir pasirinktų medžiagų. Tikslią kainą pateikiame apžiūrėję objektą.",
  },
  {
    question: "Ar į kainą įeina medžiagos?",
    answer:
      "Ne, mūsų pateikiamos kainos yra tik už darbus. Medžiagas galite užsakyti patys arba per mus — padėsime išsirinkti optimalų kainos ir kokybės santykį.",
  },
  {
    question: "Ar suteikiate garantiją?",
    answer:
      "Taip, atskiriems atliktiems darbams suteikiame garantiją. Konkretūs garantijos terminai ir sąlygos fiksuojami užsakyme.",
  },
  {
    question: "Per kiek laiko atliekami stogo darbai?",
    answer:
      "Vidutinio dydžio gyvenamojo namo stogo dengimas trunka maždaug 1–2 savaites. Tikslus terminas priklauso nuo dangos tipo, ploto, konstrukcijos sudėtingumo ir orų sąlygų.",
  },
  {
    question: "Ar dirbate žiemą?",
    answer:
      "Dalis darbų (kaminų skardinimas, lietaus sistemų montavimas, vidaus apdaila) atliekami ir žiemą. Stogo dengimas priklauso nuo oro temperatūros ir kritulių — terminus suderiname individualiai.",
  },
  {
    question: "Ar reikia statybos leidimo stogui dengti?",
    answer:
      "Dažniausiai stogo dangos keitimas leidimo nereikalauja, tačiau jei keičiama stogo konstrukcija arba namo geometrija — leidimo gali prireikti. Padėsime išsiaiškinti, kokie dokumentai reikalingi jūsų atveju.",
  },
  {
    question: "Kaip užsisakyti darbus ir gauti sąmatą?",
    answer:
      "Skambinkite +370 6299 9330 arba parašykite el. paštu stogodarbaijums@gmail.com. Sutarsime nemokamą apžiūrą objekte, atliksime matavimus ir pateiksime sąmatą.",
  },
  {
    question: "Ar dirbate pagal įmonę, ar pagal verslo liudijimą?",
    answer:
      "Dirbame pagal verslo liudijimą — todėl darbų kainos prieinamos kiekvienam klientui. Atskirus darbus patvirtiname garantija.",
  },
];
