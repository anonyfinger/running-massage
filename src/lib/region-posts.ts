/**
 * 지역별 출장마사지 게시글 데이터
 * — 출장마사지·출장안마·출장스웨디시 연관검색어 타겟
 * — 구글 E-E-A-T: 실용적·원본·도움되는 정보
 */
import { getKeywordLongContent } from "./keyword-long-content";

export type RegionSlug = "seoul" | "gangnam" | "gangdong" | "gangseo" | "incheon" | "suwon" | "bucheon" | "common";
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
  gangdong: {
    massage: "gangdong-massage",
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
  gangdong: [
    { slug: "massage", title: "강동구 출장마사지", description: "강동구 출장마사지 서비스 안내. 천호동·성내동·암사동·고덕동·명일동·길동·둔촌동 등 강동구 전역으로 테라피스트가 방문합니다. 전신·부분·두통·어깨 결림 맞춤 코스 제공, 24시간 예약 문의 가능." },
  ],
  seoul: [
    { slug: "massage", title: "서울 출장마사지", description: "서울 전역 출장마사지 서비스 안내. 집·호텔·오피스로 테라피스트가 방문해 전신·부분·두통·어깨 결림 맞춤 코스를 제공합니다. 강남·마포·종로·영등포 등 서울 25개 구 전역 출장 가능." },
    { slug: "anma", title: "서울 출장안마", description: "서울 출장안마 서비스 안내. 전통 안마 기법과 현대 마사지를 결합해 경락·근육을 함께 케어합니다. 목·어깨·등·다리 피로 해소에 강점이 있으며, 집·호텔·오피스로 방문해 드립니다." },
    { slug: "swedish", title: "서울 출장스웨디시", description: "서울 출장스웨디시 서비스 안내. 고객 지정 장소로 방문해 오일 마사지를 제공합니다. 혈액순환 개선·근육 이완에 초점을 두며, 전신 또는 상·하체 코스 60~120분. 서울 전역 출장 가능." },
  ],
  gangnam: [
    { slug: "massage", title: "강남 출장마사지", description: "강남 출장마사지 서비스 안내. 강남구·서초구·송파구 등 강남권으로 테라피스트가 방문합니다. 전신·부분·두통·어깨 결림 맞춤 코스, 집·호텔·오피스 방문, 24시간 예약 문의 가능." },
    { slug: "anma", title: "강남 출장안마", description: "강남 출장안마 서비스 안내. 경락·근육 케어 중심의 출장안마를 강남구·서초구·송파구 등 강남권으로 제공합니다. 목·어깨·등 긴장 완화, 다리 피로·부기 해소에 강점. 예약 문의 가능." },
    { slug: "swedish", title: "강남 출장스웨디시", description: "강남 출장스웨디시 서비스 안내. 강남권 집·호텔·오피스로 방문해 프리미엄 오일 마사지를 제공합니다. 혈액순환·근육 이완 집중, 전신 60~120분 코스. 강남구·서초구·송파구 출장 가능." },
  ],
  incheon: [
    { slug: "massage", title: "인천 출장마사지", description: "인천 출장마사지 서비스 안내. 인천 전역 집·호텔·오피스로 테라피스트가 방문합니다. 전신·부분·두통·어깨 결림 맞춤 코스 제공, 남동구·연수구·부평구 등 인천 전역 출장 가능." },
  ],
  suwon: [
    { slug: "massage", title: "수원 출장마사지", description: "수원 출장마사지 서비스 안내. 수원시 전역 집·호텔·오피스로 테라피스트가 방문합니다. 전신·부분·맞춤형 마사지 코스 제공, 영통구·팔달구·권선구·장안구 출장 가능, 24시간 예약 문의." },
  ],
  bucheon: [
    { slug: "massage", title: "부천 출장마사지", description: "부천 출장마사지 서비스 안내. 부천시 전역 집·호텔·오피스로 테라피스트가 방문합니다. 전신·부분·두통·어깨 결림 맞춤 코스 제공, 소사구·오정구·원미구 출장 가능, 24시간 예약 문의." },
  ],
  gangseo: [
    { slug: "massage", title: "강서구 출장마사지", description: "강서구 출장마사지 서비스 안내. 강서구 전역 집·호텔·오피스로 테라피스트가 방문합니다. 전신·부분·맞춤형 마사지 코스 제공, 화곡동·등촌동·마곡동·가양동 등 강서구 전역 출장 가능." },
  ],
};

const commonArticles: ArticleMeta[] = [
  { slug: "allnight", title: "24시간 출장마사지", description: "24시간 예약 가능한 출장마사지 서비스 안내. 심야·새벽·주말에도 전화 및 카카오톡으로 예약 문의를 받습니다. 퇴근 후 늦은 시간이나 급하게 필요한 경우에도 가능 여부를 확인해 드립니다." },
  { slug: "reservation-guide", title: "출장마사지 예약 가이드", description: "출장마사지·출장안마·출장스웨디시 예약 방법과 준비 사항 안내. 전화 또는 카카오톡으로 희망 일시·장소·코스를 안내하면 예약이 완료됩니다. 첫 이용자도 쉽게 따라할 수 있는 단계별 예약 가이드." },
];

export const regions: RegionMeta[] = [
  {
    slug: "seoul",
    name: "서울",
    description: "서울 출장마사지·출장안마·출장스웨디시 이용 안내. 강남·마포·종로·영등포·송파 등 서울 25개 구 전역으로 테라피스트가 방문합니다. 집·호텔·오피스에서 전신·부분·오일 마사지 코스를 편리하게 이용하세요.",
    articles: regionArticles.seoul,
  },
  {
    slug: "gangnam",
    name: "강남",
    description: "강남 출장마사지·출장안마·출장스웨디시 이용 안내. 강남구·서초구·송파구·강동구 등 강남권 전역으로 테라피스트가 방문합니다. 비즈니스 호텔, 오피스, 아파트 등 고객 지정 장소에서 편리하게 이용하세요.",
    articles: regionArticles.gangnam,
  },
  {
    slug: "gangdong",
    name: "강동구",
    description: "강동구 출장마사지·출장안마·출장스웨디시 이용 안내. 천호동·성내동·암사동·고덕동·명일동·길동·둔촌동·강일동 등 강동구 전역으로 테라피스트가 방문합니다. 집·호텔·오피스에서 전신·부분 맞춤형 마사지 코스를 편리하게 이용하세요.",
    articles: regionArticles.gangdong,
  },
  {
    slug: "gangseo",
    name: "강서구",
    description: "강서구 출장마사지·출장안마·출장스웨디시 이용 안내. 화곡동·등촌동·마곡동·가양동 등 강서구 전역으로 테라피스트가 방문합니다. 집·호텔·오피스에서 전신·부분 맞춤형 마사지 코스를 편리하게 이용하세요.",
    articles: regionArticles.gangseo,
  },
  {
    slug: "incheon",
    name: "인천",
    description: "인천 출장마사지·출장안마·출장스웨디시 이용 안내. 남동구·연수구·부평구·계양구 등 인천 전역으로 테라피스트가 방문합니다. 집·호텔·오피스에서 전신·부분 맞춤형 마사지 코스를 편리하게 이용하세요.",
    articles: regionArticles.incheon,
  },
  {
    slug: "suwon",
    name: "수원",
    description: "수원 출장마사지·출장안마·출장스웨디시 이용 안내. 영통구·팔달구·권선구·장안구 등 수원시 전역으로 테라피스트가 방문합니다. 집·호텔·오피스에서 전신·부분 맞춤형 마사지 코스를 편리하게 이용하세요.",
    articles: regionArticles.suwon,
  },
  {
    slug: "bucheon",
    name: "부천",
    description: "부천 출장마사지·출장안마·출장스웨디시 이용 안내. 소사구·오정구·원미구 등 부천시 전역으로 테라피스트가 방문합니다. 집·호텔·오피스에서 전신·부분 맞춤형 마사지 코스를 편리하게 이용하세요.",
    articles: regionArticles.bucheon,
  },
  {
    slug: "common",
    name: "이용 안내",
    description: "출장마사지·출장안마·출장스웨디시 24시간 예약, 이용 방법, 준비 사항 안내. 심야·새벽에도 예약 가능하며, 첫 이용자도 쉽게 따라할 수 있는 단계별 가이드를 제공합니다.",
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
