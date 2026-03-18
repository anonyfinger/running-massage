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

/** 헤더 네비게이션 — 드롭다운 그룹 (메뉴 분류) */
export const navGroups = [
  {
    type: "link" as const,
    label: "소개",
    id: "intro",
  },
  {
    type: "dropdown" as const,
    label: "서비스",
    items: [
      { id: "service", label: "서비스" },
      { id: "compare", label: "서비스비교" },
      { id: "benefits", label: "장점" },
      { id: "who", label: "적합대상" },
    ],
  },
  {
    type: "dropdown" as const,
    label: "이용안내",
    items: [
      { id: "scenario", label: "이용시나리오" },
      { id: "howto", label: "이용방법" },
      { id: "tips", label: "준비·주의" },
      { id: "effects", label: "효과·주의" },
    ],
  },
  {
    type: "link" as const,
    label: "FAQ",
    id: "faq",
  },
  {
    type: "route" as const,
    label: "지역",
    href: "/regions",
  },
  {
    type: "link" as const,
    label: "예약문의",
    id: "contact",
  },
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

  metaTitle: "출장마사지 출장안마 출장스웨디시 | 프리미엄 홈케어 마사지",
  metaDescription:
    "출장마사지·출장안마·출장스웨디시 전문. 집·호텔·오피스로 방문해 전신·부분 마사지 제공. 24시간 예약 가능, 숙련된 테라피스트, 맞춤형 코스.",


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
