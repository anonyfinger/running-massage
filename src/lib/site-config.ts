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
  name: "출장마사지",
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
  { label: "블로그", href: "/blog" },
] as const;

/** 업체명 — 헤더·푸터·구조화데이터 등에 사용 */
export const companyName = "출장마사지" as const;

/** 검색엔진 검증 (선택) — .env에 설정 시 layout에 meta 추가 */
const googleSiteVerification =
  typeof process !== "undefined" ? process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION : undefined;
const naverSiteVerification =
  typeof process !== "undefined" ? process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION : undefined;

export const siteConfig = {
  siteUrl,
  siteName: companyName,
  companyName,

  /** 허브 페이지 — 세부 키워드는 /massage, /anma, /swedish가 대표 URL */
  metaTitle: "프리미엄 출장 홈케어 마사지 | 예약·이용 안내",
  metaDescription:
    "집·호텔·오피스로 방문하는 출장 마사지 서비스 안내. 출장마사지·출장안마·출장스웨디시별 상세 페이지와 지역별 안내에서 코스·예약 정보를 확인하세요. 24시간 문의 가능.",
  /** 구조화 데이터 dateModified 등에 사용 — 콘텐츠 대규모 수정 시 갱신 */
  contentLastModified: "2026-03-28",


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

