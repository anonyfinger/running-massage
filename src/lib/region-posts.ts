/**
 * 지역별 출장마사지 게시글 데이터
 * — 현재는 `영등포` 단일 지역 + 공통 가이드만 운영
 */
import { getKeywordLongContent } from "./keyword-long-content";
import { getRegionLandingPath } from "./region-landings";

export type RegionSlug = "common";
export type ArticleSlug = "allnight" | "reservation-guide";

const regionToContentSlug: Record<string, Record<string, string>> = {
  common: {
    allnight: "allnight-massage",
    "reservation-guide": "reservation-guide",
  },
};

export interface RegionMeta {
  slug: RegionSlug;
  name: string;
  groupKey: "seoul" | "common";
  groupLabel: string;
  description: string;
  articles: ArticleMeta[];
}

export interface ArticleMeta {
  slug: ArticleSlug;
  title: string;
  description: string;
}

export interface RegionSupportLink {
  label: string;
  href: string;
}

const commonArticles: ArticleMeta[] = [
  {
    slug: "allnight",
    title: "24시간 출장마사지",
    description:
      "24시간 예약 가능한 출장마사지 서비스 안내. 심야·새벽·주말에도 전화 및 카카오톡으로 예약 문의를 받습니다. 퇴근 후 늦은 시간이나 급하게 필요한 경우에도 가능 여부를 확인할 수 있습니다.",
  },
  {
    slug: "reservation-guide",
    title: "출장마사지 예약 가이드",
    description:
      "출장마사지 예약 방법과 준비 사항 안내. 전화 또는 카카오톡으로 희망 일시·장소·코스를 안내하면 예약이 진행되며, 첫 이용자도 쉽게 따라할 수 있는 단계별 흐름을 정리했습니다.",
  },
];

export const regions: RegionMeta[] = [
  {
    slug: "common",
    name: "이용 안내",
    groupKey: "common",
    groupLabel: "공통 안내",
    description:
      "지역 공통 가이드를 모아 둔 안내 영역입니다. 24시간 출장마사지, 예약 가이드처럼 지역보다 예약 의도가 먼저인 정보를 한곳에서 확인할 수 있습니다.",
    articles: commonArticles,
  },
];

export function getRegion(slug: string): RegionMeta | undefined {
  return regions.find((region) => region.slug === slug);
}

export function getArticle(regionSlug: string, articleSlug: string): ArticleMeta | undefined {
  const region = getRegion(regionSlug);
  if (!region) return undefined;
  return region.articles.find((article) => article.slug === articleSlug);
}

export function getArticleContent(regionSlug: string, articleSlug: string) {
  const mapping = regionToContentSlug[regionSlug];
  const mappedSlug = mapping?.[articleSlug];

  if (mappedSlug) {
    return getKeywordLongContent(mappedSlug);
  }

  return [];
}

export function getAllArticlePaths(): { region: string; slug: string }[] {
  return regions.flatMap((region) =>
    region.articles.map((article) => ({ region: region.slug, slug: article.slug })),
  );
}

export function getRegionSupportingLinks(regionSlug: string): RegionSupportLink[] {
  if (regionSlug === "common") {
    return [{ label: "영등포 출장마사지", href: getRegionLandingPath("yeongdeungpo") }];
  }

  return [
    { label: "영등포 출장마사지", href: getRegionLandingPath("yeongdeungpo") },
    { label: "영등포 출장마사지 예약문의", href: "/reserve" },
    { label: "출장마사지 예약 가이드", href: "/regions/common/reservation-guide" },
    { label: "출장마사지 안내", href: "/massage" },
  ];
}
