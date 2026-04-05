/**
 * @deprecated 사이트맵 URL은 `sitemap-policy.ts` + `app/sitemap.ts`에서 단일 관리.
 * (과거: region-posts 전체 경로 자동 포함 — 정책 변경으로 미사용)
 */
import { getAllRegionPaths, getAllArticlePaths } from "@/lib/region-posts";

export function getSitemapRegionPaths(): { region: string }[] {
  return getAllRegionPaths();
}

export function getSitemapArticlePaths(): { region: string; slug: string }[] {
  return getAllArticlePaths();
}
