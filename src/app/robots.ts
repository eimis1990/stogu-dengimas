import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

/**
 * robots.txt for stogai-dzukijoje.lt
 *
 * Explicit rules for AI / answer-engine crawlers in addition to the
 * default "User-agent: *". GPTBot is allowed by default — owner may
 * flip to Disallow if they prefer to keep content out of ChatGPT
 * training corpora (this does NOT affect ChatGPT Search visibility,
 * which uses OAI-SearchBot + ChatGPT-User).
 */
export default function robots(): MetadataRoute.Robots {
  const aiBots = [
    "OAI-SearchBot",
    "ChatGPT-User",
    "GPTBot",
    "PerplexityBot",
    "ClaudeBot",
    "Claude-Web",
    "anthropic-ai",
    "Google-Extended",
    "Applebot-Extended",
    "Bingbot",
    "CCBot",
    "FacebookBot",
    "Amazonbot",
    "DuckAssistBot",
    "YouBot",
  ];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      ...aiBots.map((userAgent) => ({
        userAgent,
        allow: "/",
      })),
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
