/**
 * 지역별 출장마사지 게시글 데이터
 * — 출장마사지·출장안마·출장스웨디시 연관검색어 타겟
 * — 구글 E-E-A-T: 실용적·원본·도움되는 정보
 */
import { getKeywordLongContent } from "./keyword-long-content";

export type RegionSlug = "seoul" | "gangnam" | "gangseo" | "incheon" | "suwon" | "bucheon" | "common";
export type ArticleSlug =
  | "massage"
  | "anma"
  | "swedish"
  | "allnight"
  | "reservation-guide";

/** 지역별·게시글별 → keyword-long-content slug 매핑 */
const regionToContentSlug: Record<string, Record<string, string>> = {
  seoul: {
    massage: "seoul-massage",
    anma: "seoul-anma",
    swedish: "seoul-swedish",
  },
  gangnam: {
    massage: "gangnam-massage",
    anma: "gangnam-anma",
    swedish: "gangnam-swedish",
  },
  gangseo: {
    massage: "gangseo-massage",
  },
  incheon: {
    massage: "incheon-massage",
  },
  suwon: {
    massage: "suwon-massage",
  },
  bucheon: {
    massage: "bucheon-massage",
  },
  common: {
    allnight: "allnight-massage",
    "reservation-guide": "reservation-guide",
  },
};

export interface RegionMeta {
  slug: RegionSlug;
  name: string;
  description: string;
  articles: ArticleMeta[];
}

export interface ArticleMeta {
  slug: ArticleSlug;
  title: string;
  description: string;
}

const regionArticles: Record<Exclude<RegionSlug, "common">, ArticleMeta[]> = {
  seoul: [
    { slug: "massage", title: "서울 출장마사지", description: "서울 전역 출장마사지 이용 안내" },
    { slug: "anma", title: "서울 출장안마", description: "서울 출장안마, 경락 기반 피로 해소" },
    { slug: "swedish", title: "서울 출장스웨디시", description: "서울 출장스웨디시, 오일 마사지" },
  ],
  gangnam: [
    { slug: "massage", title: "강남 출장마사지", description: "강남 출장마사지 이용 안내" },
    { slug: "anma", title: "강남 출장안마", description: "강남 출장안마, 경락·근육 케어" },
    { slug: "swedish", title: "강남 출장스웨디시", description: "강남 출장스웨디시, 프리미엄 오일 마사지" },
  ],
  incheon: [
    { slug: "massage", title: "인천 출장마사지", description: "인천 전역 출장마사지 이용 안내" },
  ],
  suwon: [
    { slug: "massage", title: "수원 출장마사지", description: "수원 출장마사지 이용 안내" },
  ],
  bucheon: [
    { slug: "massage", title: "부천 출장마사지", description: "부천 출장마사지 이용 안내" },
  ],
  gangseo: [
    { slug: "massage", title: "강서구 출장마사지", description: "강서구 전역 출장마사지 이용 안내" },
  ],
};

const commonArticles: ArticleMeta[] = [
  { slug: "allnight", title: "24시간 출장마사지", description: "24시간 예약 가능한 출장마사지" },
  { slug: "reservation-guide", title: "출장마사지 예약 가이드", description: "예약 방법과 준비 사항" },
];

export const regions: RegionMeta[] = [
  {
    slug: "seoul",
    name: "서울",
    description: "서울 전역 출장마사지·출장안마·출장스웨디시 이용 안내",
    articles: regionArticles.seoul,
  },
  {
    slug: "gangnam",
    name: "강남",
    description: "강남권 출장마사지·출장안마·출장스웨디시 이용 안내",
    articles: regionArticles.gangnam,
  },
  {
    slug: "gangseo",
    name: "강서구",
    description: "강서구 전역 출장마사지·출장안마·출장스웨디시 이용 안내",
    articles: regionArticles.gangseo,
  },
  {
    slug: "incheon",
    name: "인천",
    description: "인천 출장마사지·출장안마·출장스웨디시 이용 안내",
    articles: regionArticles.incheon,
  },
  {
    slug: "suwon",
    name: "수원",
    description: "수원 출장마사지·출장안마·출장스웨디시 이용 안내",
    articles: regionArticles.suwon,
  },
  {
    slug: "bucheon",
    name: "부천",
    description: "부천 출장마사지·출장안마·출장스웨디시 이용 안내",
    articles: regionArticles.bucheon,
  },
  {
    slug: "common",
    name: "이용 안내",
    description: "출장마사지·출장안마·출장스웨디시 24시간 출장, 예약 방법 등 공통 안내",
    articles: commonArticles,
  },
];

export function getRegion(slug: string): RegionMeta | undefined {
  return regions.find((r) => r.slug === slug);
}

export function getArticle(regionSlug: string, articleSlug: string): ArticleMeta | undefined {
  const region = getRegion(regionSlug);
  if (!region) return undefined;
  return region.articles.find((a) => a.slug === articleSlug);
}

export function getArticleContent(regionSlug: string, articleSlug: string) {
  const mapping = regionToContentSlug[regionSlug];
  if (!mapping) return [];
  const contentSlug = mapping[articleSlug];
  if (!contentSlug) return [];
  return getKeywordLongContent(contentSlug);
}

export function getAllRegionPaths(): { region: string }[] {
  return regions.map((r) => ({ region: r.slug }));
}

export function getAllArticlePaths(): { region: string; slug: string }[] {
  const paths: { region: string; slug: string }[] = [];
  for (const region of regions) {
    for (const article of region.articles) {
      paths.push({ region: region.slug, slug: article.slug });
    }
  }
  return paths;
}
