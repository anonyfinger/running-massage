/**
 * /regions 허브 — 대표 URL은 /regions/{slug}/massage (앵커: 지역명 + 출장마사지)
 */
export const regionsHubIntro = {
  h2: "주요 지역 출장마사지 안내",
  paragraph:
    "출장달리기에서는 주요 생활권을 기준으로 대표 지역 출장마사지 안내 페이지를 정리하고 있습니다. 서울, 강서, 인천, 수원처럼 이용 수요가 높은 지역은 별도 상세 페이지에서 예약 전 체크포인트, 시간대별 이용 흐름, 준비사항과 안내 포인트를 함께 확인할 수 있습니다. 원하는 지역의 대표 페이지로 이동해 먼저 전체 흐름을 확인해보세요.",
} as const;

export const regionsFeaturedMassageSlugs = [
  "seoul",
  "gangseo",
  "incheon",
  "suwon",
] as const;

/** 카드 제목·CTA — SEO 앵커에 지역 + 출장마사지 포함 */
export const regionsFeaturedMassageLabels: Record<
  (typeof regionsFeaturedMassageSlugs)[number],
  { title: string; cta: string }
> = {
  seoul: { title: "서울 출장마사지", cta: "서울 출장마사지 보기" },
  gangseo: { title: "강서 출장마사지", cta: "강서 출장마사지 보기" },
  incheon: { title: "인천 출장마사지", cta: "인천 출장마사지 보기" },
  suwon: { title: "수원 출장마사지", cta: "수원 출장마사지 보기" },
};

export const regionsSecondaryMassageLinks = [
  { href: "/regions/gangnam/massage", label: "강남 출장마사지 안내" },
  { href: "/regions/gangdong/massage", label: "강동 출장마사지 안내" },
  { href: "/regions/bucheon/massage", label: "부천 출장마사지 안내" },
] as const;
