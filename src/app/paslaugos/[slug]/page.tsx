import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  siteUrl,
  services,
  business,
  serviceAreaCities,
  breadcrumbSchema,
  serviceSchema,
  ogImages,
  twitterImages,
} from "@/lib/seo";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) {
    return { title: "Paslauga nerasta" };
  }
  const canonical = `${siteUrl}/paslaugos/${service.slug}`;
  return {
    title: `${service.name} Dzūkijoje`,
    description: service.description,
    alternates: { canonical },
    openGraph: {
      title: `${service.name} | Stogai Dzūkijoje`,
      description: service.description,
      url: canonical,
      type: "article",
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      images: twitterImages,
    },
  };
}

export default function ServicePage({ params }: PageProps) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) {
    notFound();
  }

  const breadcrumb = breadcrumbSchema([
    { name: "Pagrindinis", item: "/" },
    { name: "Paslaugos", item: "/paslaugos" },
    { name: service.name, item: `/paslaugos/${service.slug}` },
  ]);
  const svc = serviceSchema(service);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([svc, breadcrumb]),
        }}
      />

      <article className="bg-surface pt-28 sm:pt-32 md:pt-36 pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-medium">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Pagrindinis
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/paslaugos"
                  className="hover:text-primary transition-colors"
                >
                  Paslaugos
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-dark font-medium">{service.name}</li>
            </ol>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-dark mb-4">
            {service.name} Dzūkijoje
          </h1>
          <p className="text-medium text-base sm:text-lg leading-relaxed mb-8">
            {service.description}
          </p>

          <div className="rounded-2xl bg-white border border-gray-100 p-6 sm:p-8 mb-8">
            <h2 className="text-xl font-bold text-dark mb-4">
              Ką apima ši paslauga
            </h2>
            <ul className="space-y-3">
              {service.details.map((d) => (
                <li key={d} className="flex items-start gap-3 text-medium">
                  <span
                    aria-hidden="true"
                    className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center"
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="text-sm sm:text-base">{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="rounded-2xl bg-white border border-gray-100 p-5">
              <h3 className="font-bold text-dark mb-1">Aptarnaujama teritorija</h3>
              <p className="text-medium text-sm">
                {serviceAreaCities.join(", ")} ir aplinkinės vietovės visoje
                Dzūkijoje.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-gray-100 p-5">
              <h3 className="font-bold text-dark mb-1">Garantija</h3>
              <p className="text-medium text-sm">
                Atskiriems atliktiems darbams suteikiama garantija. Sąlygos
                aptariamos užsakyme.
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-primary text-white">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">
              Reikia {service.name.toLowerCase()} darbų?
            </h2>
            <p className="text-white/90 mb-5">
              Skambinkite {business.contactName} —{" "}
              <span className="font-semibold">{business.phone}</span> — ir
              suderinsime nemokamą apžiūrą. Konkrečios kainos pateikiamos
              įvertinus objektą.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${business.phoneE164}`}
                className="inline-flex items-center justify-center gap-2 bg-white text-primary font-semibold px-5 py-3 rounded-lg hover:bg-white/90 transition-colors"
              >
                Skambinti
              </a>
              <Link
                href="/kontaktai"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold px-5 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                Visi kontaktai
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
