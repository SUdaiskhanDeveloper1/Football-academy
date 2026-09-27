import type { MetadataRoute } from "next";
import { programmes } from "@/data/programmes";
import { articles } from "@/data/news";
import { absoluteUrl } from "@/lib/seo";

const staticRoutes = ["/", "/about", "/programmes", "/player-development", "/coaches", "/gallery", "/testimonials", "/news", "/faq", "/contact", "/safeguarding", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...staticRoutes.map((route) => ({ url: absoluteUrl(route), lastModified: now, changeFrequency: "monthly" as const, priority: route === "/" ? 1 : 0.7 })),
    ...programmes.map((programme) => ({ url: absoluteUrl(`/programmes/${programme.slug}`), lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 })),
    ...articles.map((article) => ({ url: absoluteUrl(`/news/${article.slug}`), lastModified: new Date(article.isoDate), changeFrequency: "yearly" as const, priority: 0.5 }))
  ];
}
