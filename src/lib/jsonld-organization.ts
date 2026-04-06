import { siteConfig } from "@/lib/site-config";

/** 동일 @id로 모든 페이지 그래프에 포함 — provider·publisher 참조 끊김 방지 */
export function getOrganizationJsonLd() {
  const { siteUrl, siteName, nap, ogImagePath } = siteConfig;
  const logoUrl = ogImagePath ? `${siteUrl}${ogImagePath}` : `${siteUrl}/favicon.png`;
  return {
    "@type": "Organization" as const,
    "@id": `${siteUrl}/#organization`,
    name: siteName,
    url: siteUrl,
    brand: {
      "@type": "Brand" as const,
      "@id": `${siteUrl}/#brand`,
      name: siteName,
      logo: { "@id": `${siteUrl}/#logo` },
    },
    knowsAbout: [
      "출장마사지",
      "출장안마",
      "출장스웨디시",
      "홈케어 방문 마사지",
      "집 호텔 오피스 방문 마사지",
    ],
    logo: {
      "@type": "ImageObject" as const,
      "@id": `${siteUrl}/#logo`,
      url: logoUrl,
      contentUrl: logoUrl,
      caption: siteName,
    },
    image: { "@id": `${siteUrl}/#logo` },
    sameAs: [] as string[],
    contactPoint: {
      "@type": "ContactPoint" as const,
      telephone: nap.telephone,
      contactType: "reservations" as const,
      areaServed: "KR",
      availableLanguage: "Korean",
      description:
        "출장달리기 — 출장마사지·출장안마·출장스웨디시 전화·카카오톡 예약, 전신·부분 코스 안내, 방문 지역·당일 문의.",
      url: siteUrl,
    },
  };
}
