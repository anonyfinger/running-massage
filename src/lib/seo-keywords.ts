/**
 * 출장마사지 연관검색어 — SEO 키워드
 * — 구글 검색 의도에 맞는 자연스러운 키워드
 */
export const seoKeywords = {
  /** 메인 — 출장마사지·출장안마·출장스웨디시 */
  main: {
    primary: ["출장마사지", "출장안마", "출장스웨디시"] as const,
    secondary: [
      "출장 마사지",
      "방문 마사지",
      "홈케어 마사지",
      "24시간 출장마사지",
      "출장마사지 예약",
      "출장마사지 가격",
      "전신 마사지",
      "부분 마사지",
    ] as const,
  },
  /** 지역별 — 서울·강남·인천·수원·부천 */
  regional: {
    seoul: ["서울 출장마사지", "서울 출장안마", "서울 출장스웨디시"] as const,
    gangnam: ["강남 출장마사지", "강남 출장안마", "강남 출장스웨디시"] as const,
    incheon: ["인천 출장마사지"] as const,
    suwon: ["수원 출장마사지"] as const,
    bucheon: ["부천 출장마사지"] as const,
  },
  /** 서비스 유형 */
  service: {
    massage: ["출장마사지", "전신 마사지", "어깨 마사지", "허리 마사지"] as const,
    anma: ["출장안마", "경락 안마", "목 어깨 안마"] as const,
    swedish: ["출장스웨디시", "스웨덴식 마사지", "오일 마사지"] as const,
  },
} as const;
