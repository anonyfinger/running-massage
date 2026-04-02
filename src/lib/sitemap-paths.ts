/**
 * 사이트맵 전용 경로 — region-posts 단일 소스 (수동 목록 제거)
 * keyword-long-content는 게시글 본문에서만 로딩. Vercel 서버리스 500 방지.
 */
import { getAllRegionPaths, getAllArticlePaths } from "@/lib/region-posts";

export function getSitemapRegionPaths(): { region: string }[] {
  return getAllRegionPaths();
}

export function getSitemapArticlePaths(): { region: string; slug: string }[] {
  return getAllArticlePaths();
}
