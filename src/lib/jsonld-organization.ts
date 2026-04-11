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
      "영등포 출장마사지",
      "출장마사지",
      "홈케어 방문 마사지",
      "여의도 영등포역 문래 당산 신길 대림 방문 마사지",
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
        "출장달리기 — 영등포 출장마사지 전화·카카오톡 예약, 집·호텔 방문 흐름, 여의도·영등포역·문래·당산·신길·대림 안내.",
      url: siteUrl,
    },
  };
}
