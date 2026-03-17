import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { getAllRegionPaths, getAllArticlePaths } from "@/lib/region-posts";

/**
 * sitemap.xml — 검색엔진 인덱싱용 URL 목록 (SEO 100점)
 * lastModified ISO 8601, changeFrequency, priority 명시.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;
  const lastModified = new Date();

  const regionUrls = getAllRegionPaths().map(({ region }) => ({
    url: `${base}/regions/${region}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const articleUrls = getAllArticlePaths().map(({ region, slug }) => ({
    url: `${base}/regions/${region}/${slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: base,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${base}/regions`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    ...regionUrls,
    ...articleUrls,
  ];
}
