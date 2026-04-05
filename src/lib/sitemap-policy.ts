/**
 * sitemap.xml 포함 정책 — 색인 후보를 코어·대표 지역·정보형 글 위주로 제한
 * (법률·소개·common 안내·지역 블로그 대량 등은 사이트맵에서 제외 — 크롤링은 내부 링크·robots allow로 유지)
 */

/** 대표 지역 허브만 사이트맵 제출 */
export const SITEMAP_REGION_HUB_SLUGS = [
  "seoul",
  "gangseo",
  "incheon",
  "suwon",
] as const;

/** 지역 × 서비스 중 사이트맵에 올릴 경로: massage만 (anma/swedish는 서비스 메인·허브로 흡수) */
export const SITEMAP_REGION_SERVICE_PATHS: { region: string; slug: "massage" }[] = [
  { region: "seoul", slug: "massage" },
  { region: "gangnam", slug: "massage" },
  { region: "gangdong", slug: "massage" },
  { region: "gangseo", slug: "massage" },
  { region: "incheon", slug: "massage" },
  { region: "suwon", slug: "massage" },
  { region: "bucheon", slug: "massage" },
];

/** 정보형 블로그 — 검색 의도 분명한 글만 */
export const SITEMAP_BLOG_SLUGS_INFO = [
  "chuljang-site-how-to-choose",
  "home-chuljang-massage-guide",
  "nearby-chuljang-massage-tips",
  "chuljang-massage-price-guide",
  "chuljang-massage-effect-duration",
  "late-night-chuljang-massage",
  "chuljang-massage-vs-massage-shop",
  "chuljang-massage-preparation-guide",
] as const;

/** 지역형 블로그 중 대표 샘플만 (나머지는 내부 링크·색인 자연 유입) */
export const SITEMAP_BLOG_SLUGS_REGIONAL_SAMPLE = [
  "gyeonggi-suwon-chuljang-local",
  "seoul-gangseo-chuljang-local",
  "gangdong-chuljang-massage",
] as const;
