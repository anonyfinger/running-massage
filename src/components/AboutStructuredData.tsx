import { siteConfig } from "@/lib/site-config";
import { toJsonLd } from "@/lib/structured-data";
import { getOrganizationJsonLd } from "@/lib/jsonld-organization";

/** /about — AboutPage + BreadcrumbList (브랜드·운영 투명성 신호) */
export function AboutStructuredData() {
  const { siteUrl, siteName, companyName } = siteConfig;
  const title = "회사 소개 · 운영 안내";
  const description = `${companyName}는 집·호텔·오피스로 방문하는 출장 마사지·안마·스웨디시 예약 안내를 제공합니다.`;

  const aboutPage = {
    "@type": "AboutPage",
    "@id": `${siteUrl}/about#webpage`,
    url: `${siteUrl}/about`,
    name: title,
    description,
    inLanguage: "ko-KR",
    isPartOf: { "@id": `${siteUrl}/#website` },
    publisher: { "@id": `${siteUrl}/#organization` },
    mainEntity: { "@id": `${siteUrl}/#organization` },
  };

  const breadcrumbList = {
    "@type": "BreadcrumbList",
    "@id": `${siteUrl}/about#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: siteName, item: siteUrl },
      { "@type": "ListItem", position: 2, name: title, item: `${siteUrl}/about` },
    ],
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [getOrganizationJsonLd(), aboutPage, breadcrumbList],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: toJsonLd(schema) }}
    />
  );
}
