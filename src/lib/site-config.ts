/**
 * 브랜드 허브 및 대표 지역 랜딩 설정
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

/** 센션(앵커) 네비게이션 — 원페이지 내 이동용 (홈 본문 구조와 일치) */
export const sectionAnchors = [
  { id: "intro", label: "소개" },
  { id: "brand", label: "브랜드" },
  { id: "service", label: "서비스" },
  { id: "regions", label: "지역안내" },
  { id: "faq", label: "FAQ" },
] as const;

/** 헤더 네비게이션 */
export const serviceMenuLinks = [
  { label: "출장마사지", href: "/massage" },
  { label: "예약문의", href: "/reserve" },
  { label: "예약 가이드", href: "/regions/common/reservation-guide" },
  { label: "24시간 안내", href: "/regions/common/allnight" },
] as const;

export const navGroups = [
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

  /** 메인 <title>·og — 홈 H1과 분리(히어로는 브랜드 중심) */
  metaTitle: "출장달리기 | 서울·경기 출장마사지 안내 허브",
  metaDescription:
    "출장달리기는 서울·경기 생활권 기준의 출장마사지 이용 정보, 예약 흐름, 지역별 대표 문서를 정리하는 안내 허브입니다. 홈은 구조를 안내하고 지역 키워드는 각 대표 페이지에서 분리해 운영합니다.",
  /** 홈 히어로 가시 H1 — 홈 대표 키워드 우선 */
  homeHeroH1: "출장달리기",
  /** 홈 히어로 리드( H1 바로 아래 ) */
  homeHeroLead: "서울·경기 생활권 기준의 출장마사지 안내 허브",
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

