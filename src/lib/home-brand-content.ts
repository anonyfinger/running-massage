import { getRepresentativeRegionLinks } from "./region-landings";

/**
 * 홈 — 브랜드 엔티티·대표 지역 내부링크 (/regions/{지역}/massage)
 */
export const homeBrandContent = {
  title: "출장달리기는 어떤 정보를 먼저 보면 좋은가요?",
  intro: [
    "출장달리기는 홈에서 브랜드와 전체 구조를 안내하고, 실제 지역 검색 의도는 각 대표 지역 페이지에서 받도록 설계했습니다. 지금은 영등포·강남·강서 출장마사지 대표 페이지를 운영 중이며, 페이지마다 도입·본문 톤을 달리해 같은 문장을 복제하지 않도록 했습니다.",
    "즉 홈은 특정 지역 키워드를 직접 경쟁시키는 페이지가 아니라, 브랜드 소개와 서비스 흐름을 보여준 뒤 필요한 대표 지역 문서나 예약 문서로 자연스럽게 연결하는 시작점입니다.",
  ],
  criteriaTitle: "출장달리기가 정리하는 기준",
  criteriaBody:
    "출장달리기는 같은 문장을 여러 페이지에 복제하기보다, 각 페이지가 한 가지 역할을 분명히 갖도록 정리합니다. 홈은 브랜드 허브, `/massage`는 방문 마사지 선택 기준, `/regions/[region]`은 지역 대표 문서, `/reserve`는 전환 페이지 역할을 맡습니다. 브랜드명으로 검색했을 때도 홈에서 구조를 이해하고 바로 필요한 이용 정보로 이동할 수 있도록 하는 것이 핵심입니다.",
  representativeRegionsTitle: "대표 지역 페이지부터 보세요",
  /** 앵커: 지역명 + 출장마사지 — /regions/{slug}/massage */
  representativeRegionLinks: [
    ...getRepresentativeRegionLinks(),
    { href: "/massage", label: "출장마사지 안내" },
    { href: "/regions/common/reservation-guide", label: "출장마사지 예약 가이드" },
    { href: "/regions/common/allnight", label: "24시간 출장마사지 안내" },
  ],
} as const;
