/**
 * 홈 — 브랜드 엔티티·대표 지역 내부링크 (/regions/{지역}/massage)
 */
export const homeBrandContent = {
  title: "출장달리기는 어떤 정보를 먼저 보면 좋은가요?",
  intro: [
    "출장달리기는 홈에서 같은 설명을 길게 반복하기보다, 영등포 출장마사지 이용 장면과 방문 마사지 선택 기준을 빠르게 찾을 수 있게 정보를 정리합니다. 우선 `영등포 출장마사지` 페이지에서 생활권별 이용 흐름을 보고, 이후 `출장마사지` 안내나 예약 가이드로 이어서 확인할 수 있게 구성했습니다.",
    "즉 홈은 브랜드 소개와 함께 영등포 출장마사지 핵심 정보를 바로 찾게 돕는 시작점입니다. 처음 이용하는 분도 영등포 생활권별 이용 흐름, 방문 마사지 선택 기준, 예약 전 체크포인트를 한 번에 파악한 뒤 필요한 안내로 자연스럽게 이동할 수 있습니다.",
  ],
  criteriaTitle: "출장달리기가 정리하는 기준",
  criteriaBody:
    "출장달리기는 같은 문장을 여러 페이지에 복제하기보다, 각 페이지가 한 가지 역할을 분명히 갖도록 정리합니다. 홈은 영등포 출장마사지 전체 흐름을 소개하고, `/massage`는 방문 마사지 선택 기준을 정리하며, 영등포 지역 페이지는 여의도·영등포역·문래·당산·신길·대림 생활권의 예약 맥락을 다룹니다. 브랜드명으로 검색했을 때도 홈에서 구조를 이해하고 바로 필요한 이용 정보로 이동할 수 있도록 하는 것이 핵심입니다.",
  representativeRegionsTitle: "영등포 출장마사지부터 보세요",
  /** 앵커: 지역명 + 출장마사지 — /regions/{slug}/massage */
  representativeRegionLinks: [
    { href: "/yeongdeungpo-chuljangmassage", label: "영등포 출장마사지" },
    { href: "/massage", label: "출장마사지 안내" },
    { href: "/regions/common/reservation-guide", label: "출장마사지 예약 가이드" },
    { href: "/regions/common/allnight", label: "24시간 출장마사지 안내" },
  ],
} as const;
