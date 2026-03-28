/**
 * 사이트맵 전용 경로 데이터 — keyword-long-content 미로딩
 * region-posts와 동기화 유지. Vercel 서버리스에서 500 방지.
 */
const SITEMAP_REGIONS = [
  { region: "seoul", articles: ["massage", "anma", "swedish"] },
  { region: "gangnam", articles: ["massage", "anma", "swedish"] },
  { region: "gangdong", articles: ["massage"] },
  { region: "gangseo", articles: ["massage"] },
  { region: "incheon", articles: ["massage"] },
  { region: "suwon", articles: ["massage"] },
  { region: "bucheon", articles: ["massage"] },
  { region: "common", articles: ["allnight", "reservation-guide"] },
] as const;

export function getSitemapRegionPaths(): { region: string }[] {
  return SITEMAP_REGIONS.map((r) => ({ region: r.region }));
}

export function getSitemapArticlePaths(): { region: string; slug: string }[] {
  const paths: { region: string; slug: string }[] = [];
  for (const r of SITEMAP_REGIONS) {
    for (const slug of r.articles) {
      paths.push({ region: r.region, slug });
    }
  }
  return paths;
}
