import type { Metadata } from "next";
import Link from "next/link";
import {
  siteUrl,
  breadcrumbSchema,
  faqPageSchema,
  business,
} from "@/lib/seo";
import { faqItems } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: "Dažniausiai užduodami klausimai (DUK)",
  description:
    "Atsakymai į dažniausiai užduodamus klausimus apie stogo dengimą, kainas, garantiją, terminus ir darbo procesą Dzūkijoje.",
  alternates: {
    canonical: `${siteUrl}/duk`,
  },
  openGraph: {
    title: "DUK — stogo darbai Dzūkijoje",
    description:
      "Klausimai ir atsakymai apie stogo dengimą, renovaciją, kainas ir garantijas.",
    url: `${siteUrl}/duk`,
    type: "website",
  },
};

export default function FaqPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Pagrindinis", item: "/" },
    { name: "DUK", item: "/duk" },
  ]);
  const faq = faqPageSchema(faqItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([faq, breadcrumb]),
        }}
      />

      <section className="bg-surface pt-28 sm:pt-32 md:pt-36 pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-medium">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Pagrindinis
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-dark font-medium">DUK</li>
            </ol>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-dark mb-4">
            Dažniausiai užduodami klausimai
          </h1>
          <p className="text-medium text-base sm:text-lg leading-relaxed mb-12">
            Atsakymai į klausimus, kuriuos klientai užduoda dažniausiai —
            apie stogo darbų kainas, garantiją, terminus, aptarnaujamą
            teritoriją ir užsakymo procesą. Nerandate atsakymo?
            Paskambinkite {business.contactName} —{" "}
            <a
              href={`tel:${business.phoneE164}`}
              className="text-primary font-semibold hover:underline"
            >
              {business.phone}
            </a>
            .
          </p>

          <div className="space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl bg-white border border-gray-100 p-6 open:shadow-md transition-shadow"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                  <h2 className="text-base sm:text-lg font-bold text-dark pr-2">
                    {item.question}
                  </h2>
                  <span
                    aria-hidden="true"
                    className="w-8 h-8 flex-shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center transition-transform group-open:rotate-45"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-medium text-sm sm:text-base leading-relaxed">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-primary text-white">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">
              Likote klausimą be atsakymo?
            </h2>
            <p className="text-white/90 mb-5">
              Susisiekite telefonu arba el. paštu — atsakysime per 24 valandas.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${business.phoneE164}`}
                className="inline-flex items-center justify-center gap-2 bg-white text-primary font-semibold px-5 py-3 rounded-lg hover:bg-white/90 transition-colors"
              >
                {business.phone}
              </a>
              <a
                href={`mailto:${business.email}`}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold px-5 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                {business.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
