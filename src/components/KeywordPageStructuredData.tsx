import { siteConfig } from "@/lib/site-config";
import { toJsonLd } from "@/lib/structured-data";
import { getOrganizationJsonLd } from "@/lib/jsonld-organization";

/** 키워드 랜딩 페이지용 구조화데이터 — Service, WebPage, BreadcrumbList, Organization */
export function KeywordPageStructuredData({
  keyword,
  description,
  path,
}: {
  keyword: string;
  description: string;
  path: string;
}) {
  const { siteUrl, siteName, ogImagePath } = siteConfig;
  const dateModified = siteConfig.contentLastModified;
  const pageUrl = `${siteUrl}${path}`;

  const organization = getOrganizationJsonLd();

  const service = {
    "@type": "Service" as const,
    "@id": `${pageUrl}#service`,
    name: keyword,
    description,
    serviceType: keyword,
    areaServed: "KR",
    provider: { "@id": `${siteUrl}/#organization` },
  };

  const webPage = {
    "@type": "WebPage" as const,
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: keyword,
    description,
    isPartOf: { "@id": `${siteUrl}/#website` },
    inLanguage: "ko-KR" as const,
    datePublished: "2025-01-01",
    dateModified,
    primaryImageOfPage: ogImagePath ? `${siteUrl}${ogImagePath}` : `${siteUrl}/favicon.png`,
    mainEntity: { "@id": `${pageUrl}#service` },
    about: { "@id": `${pageUrl}#service` },
  };

  const breadcrumb = {
    "@type": "BreadcrumbList" as const,
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem" as const, position: 1, name: siteName, item: siteUrl },
      { "@type": "ListItem" as const, position: 2, name: keyword, item: pageUrl },
    ],
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [organization, service, webPage, breadcrumb],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(schema) }} />
  );
}
