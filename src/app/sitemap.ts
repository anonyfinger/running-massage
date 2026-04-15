import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

/** 빌드 시 정적 생성 */
export const dynamic = "force-static";

/**
 * sitemap.xml — 영등포 핵심 랜딩만 우선 노출
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;
  const siteContentLastMod = new Date(`${siteConfig.contentLastModified}T12:00:00+09:00`);

  return [
    {
      url: base,
      lastModified: siteContentLastMod,
      changeFrequency: "weekly",
      priority: 0.92,
    },
    {
      url: `${base}/yeongdeungpo-chuljangmassage`,
      lastModified: siteContentLastMod,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/massage`,
      lastModified: siteContentLastMod,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${base}/reserve`,
      lastModified: siteContentLastMod,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/regions/common/reservation-guide`,
      lastModified: siteContentLastMod,
      changeFrequency: "weekly",
      priority: 0.84,
    },
    {
      url: `${base}/regions/common/allnight`,
      lastModified: siteContentLastMod,
      changeFrequency: "weekly",
      priority: 0.72,
    },
    {
      url: `${base}/guides`,
      lastModified: siteContentLastMod,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${base}/guides/yeongdeungpo-checklist`,
      lastModified: siteContentLastMod,
      changeFrequency: "weekly",
      priority: 0.68,
    },
    {
      url: `${base}/guides/yeouido-night-care`,
      lastModified: siteContentLastMod,
      changeFrequency: "weekly",
      priority: 0.66,
    },
    {
      url: `${base}/guides/yeongdeungpo-zone-visit`,
      lastModified: siteContentLastMod,
      changeFrequency: "weekly",
      priority: 0.66,
    },
    {
      url: `${base}/guides/hotel-officetel-checkpoints`,
      lastModified: siteContentLastMod,
      changeFrequency: "weekly",
      priority: 0.66,
    },
  ];
}
