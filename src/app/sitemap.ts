import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

/**
 * sitemap.xml — 검색엔진 인덱싱용 URL 목록 (SEO 100점)
 * lastModified ISO 8601, changeFrequency, priority 명시.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;
  const lastModified = new Date();

  return [
    {
      url: base,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
  ];
}
