import { siteConfig } from "@/lib/site-config";
import { getAllRegionLandings } from "@/lib/region-landings";

/** 동일 @id로 모든 페이지 그래프에 포함 — provider·publisher 참조 끊김 방지 */
export function getOrganizationJsonLd() {
  const { siteUrl, siteName, nap, ogImagePath } = siteConfig;
  const logoUrl = ogImagePath ? `${siteUrl}${ogImagePath}` : `${siteUrl}/favicon.png`;
  const representativeAreas = getAllRegionLandings().flatMap((region) => [
    region.name,
    ...region.areaServed,
  ]);
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
      "홈케어 방문 마사지",
      "지역별 출장마사지 대표 페이지",
      ...representativeAreas,
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
        "출장달리기 — 지역별 대표 페이지, 전화·문자 예약 안내, 집·호텔 방문 흐름 안내.",
      url: siteUrl,
    },
  };
}
