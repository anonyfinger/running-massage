import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { SEOUL_REGIONS_PATH, getAllRegionLandings, getRegionLandingPath } from "@/lib/region-landings";

/** 빌드 시 정적 생성 */
export const dynamic = "force-static";

/**
 * sitemap.xml — 허브 / 대표 문서 / 전환 문서 / 보조 가이드 우선순위 분리
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;
  const siteContentLastMod = new Date(`${siteConfig.contentLastModified}T12:00:00+09:00`);
  const regionEntries = getAllRegionLandings().map((region) => ({
    url: `${base}${getRegionLandingPath(region.slug)}`,
    lastModified: siteContentLastMod,
    changeFrequency: "weekly" as const,
    priority: 1,
  }));

  return [
    {
      url: base,
      lastModified: siteContentLastMod,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${base}${SEOUL_REGIONS_PATH}`,
      lastModified: siteContentLastMod,
      changeFrequency: "weekly",
      priority: 0.82,
    },
    ...regionEntries,
    // 일반 서비스 문서
    {
      url: `${base}/massage`,
      lastModified: siteContentLastMod,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // 전환용 문의 페이지
    {
      url: `${base}/reserve`,
      lastModified: siteContentLastMod,
      changeFrequency: "weekly",
      priority: 0.64,
    },
    // 공통 예약 흐름 문서
    {
      url: `${base}/regions/common/reservation-guide`,
      lastModified: siteContentLastMod,
      changeFrequency: "weekly",
      priority: 0.76,
    },
    {
      url: `${base}/regions/common/allnight`,
      lastModified: siteContentLastMod,
      changeFrequency: "weekly",
      priority: 0.62,
    },
    // 보조 가이드 허브 및 세부 문서
    {
      url: `${base}/guides`,
      lastModified: siteContentLastMod,
      changeFrequency: "weekly",
      priority: 0.58,
    },
    {
      url: `${base}/guides/yeongdeungpo-checklist`,
      lastModified: siteContentLastMod,
      changeFrequency: "weekly",
      priority: 0.57,
    },
    {
      url: `${base}/guides/yeouido-night-care`,
      lastModified: siteContentLastMod,
      changeFrequency: "weekly",
      priority: 0.56,
    },
    {
      url: `${base}/guides/yeongdeungpo-zone-visit`,
      lastModified: siteContentLastMod,
      changeFrequency: "weekly",
      priority: 0.56,
    },
    {
      url: `${base}/guides/hotel-officetel-checkpoints`,
      lastModified: siteContentLastMod,
      changeFrequency: "weekly",
      priority: 0.56,
    },
  ];
}
