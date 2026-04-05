/**
 * 출장마사지 · 출장안마 · 출장스웨디시 원페이지 랜딩 설정
 *
 * og:image 등 공유 시 절대 URL에 사용. VERCEL_URL(프리뷰) 대신
 * NEXT_PUBLIC_SITE_URL 또는 고정 프로덕션 URL 사용 — 프리뷰 배포에서도
 * 공유 이미지가 msg-trip.com 기준으로 동작하도록.
 */
const PRODUCTION_URL = "https://msg-trip.com";
const envSiteUrl =
  typeof process !== "undefined" ? process.env.NEXT_PUBLIC_SITE_URL : undefined;
/** og:url·og:image·canonical — 프로덕션 URL 고정. 프리뷰 배포에서도 카카오 등 공유 시 msg-trip.com 노출 */
const siteUrl = envSiteUrl?.trim()
  ? envSiteUrl.trim().replace(/\/$/, "")
  : PRODUCTION_URL;

const defaultAddress = {
  streetAddress: "",
  addressLocality: "",
  addressRegion: "",
  postalCode: "",
};

const sharedContact = {
  kakaoId: "ggzx77",
  telegram: "" as string,
  address: { ...defaultAddress },
  openingHours: "" as string,
} as const;

export const nap = {
  ...sharedContact,
  telephone: "050369823800",
  /** NAP 일치용 상호 — 브랜드명(일반 키워드와 구분) */
  name: "출장달리기",
} as const;

export const profile = {
  name: "담당실장",
  imagePath: "",
} as const;

/** 센션(앵커) 네비게이션 — 원페이지 내 이동용 */
export const sectionAnchors = [
  { id: "intro", label: "소개" },
  { id: "service", label: "서비스" },
  { id: "compare", label: "서비스비교" },
  { id: "benefits", label: "장점" },
  { id: "who", label: "적합대상" },
  { id: "scenario", label: "이용시나리오" },
  { id: "effects", label: "효과·주의" },
  { id: "howto", label: "이용방법" },
  { id: "tips", label: "준비·주의" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "예약문의" },
] as const;

/** 헤더 네비게이션 */
export const navGroups = [
  { label: "출장마사지", href: "/massage" },
  { label: "출장안마", href: "/anma" },
  { label: "출장스웨디시", href: "/swedish" },
  { label: "지역별 안내", href: "/regions" },
  { label: "지역 심층 가이드", href: "/regions/guide" },
  { label: "블로그", href: "/blog" },
  { label: "소개", href: "/about" },
] as const;

/** 브랜드(상호) — 헤더·푸터·Organization·메타 publisher 등. 검색 키워드와 혼동되지 않게 고정 */
export const companyName = "출장달리기" as const;

/** 검색엔진 검증 (선택) — .env에 설정 시 layout에 meta 추가 */
const googleSiteVerification =
  typeof process !== "undefined" ? process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION : undefined;
const naverSiteVerification =
  typeof process !== "undefined" ? process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION : undefined;

export const siteConfig = {
  siteUrl,
  siteName: companyName,
  companyName,

  /** 메인(/) title·h1·WebPage schema — 브랜드가 스니펫·검색 일치에 쓰이도록 선두 배치 */
  metaTitle: "출장달리기 | 프리미엄 출장 홈케어 마사지 · 예약·이용 안내",
  metaDescription:
    "출장달리기는 집·호텔·오피스로 방문하는 출장 마사지(출장마사지·출장안마·출장스웨디시) 예약 브랜드입니다. 코스·FAQ·지역 안내는 사이트 내 상세 페이지에서 확인하세요. 서울·경기·인천 등 방문 가능, 24시간 문의.",
  /** 구조화 데이터 dateModified 등에 사용 — 콘텐츠 대규모 수정 시 갱신 */
  contentLastModified: "2026-04-05",


  nap,
  profile,
  ogImagePath: "/shareImg.jpg",

  /** SEO·검증 */
  verification: {
    google: googleSiteVerification?.trim() || undefined,
    naver: naverSiteVerification?.trim() || undefined,
  },
} as const;

export type SiteConfig = typeof siteConfig;

