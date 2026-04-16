import { SEOUL_REGIONS_PATH, getRegionLandingPath } from "./region-landings";

/**
 * /massage — 대표 지역(/regions/.../massage)·예약 안내 내부링크
 */
export const massagePageRegionLinks = [
  { label: "서울 페이지", href: SEOUL_REGIONS_PATH },
  { label: "영등포 출장마사지", href: getRegionLandingPath("yeongdeungpo") },
  { label: "출장마사지 예약 가이드", href: "/regions/common/reservation-guide" },
  { label: "24시간 출장마사지 안내", href: "/regions/common/allnight" },
  { label: "출장마사지 안내", href: "/massage" },
] as const;

export const massagePageRelatedArticles = [
  { label: "서울 페이지", href: SEOUL_REGIONS_PATH },
  { label: "영등포 출장마사지", href: getRegionLandingPath("yeongdeungpo") },
  { label: "출장마사지 예약 가이드", href: "/regions/common/reservation-guide" },
  { label: "영등포 출장마사지 예약문의", href: "/reserve" },
  { label: "24시간 출장마사지 안내", href: "/regions/common/allnight" },
  { label: "출장마사지 안내", href: "/massage" },
] as const;
