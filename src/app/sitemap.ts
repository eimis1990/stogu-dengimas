import { MetadataRoute } from "next";

const siteUrl = "https://stogai-dzukijoje.lt";

export default function sitemap(): MetadataRoute.Sitemap {
  // Use a fixed date for static generation consistency
  const lastModified = new Date("2026-05-06");

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/kainos`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
