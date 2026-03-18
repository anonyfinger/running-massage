import { siteConfig } from "@/lib/site-config";
import { toJsonLd } from "@/lib/structured-data";

/** 키워드별 랜딩 페이지용 구조화데이터 — Service, WebPage, BreadcrumbList */
export function KeywordPageStructuredData({
  keyword,
  description,
  path,
}: {
  keyword: string;
  description: string;
  path: string;
}) {
  const { siteUrl, siteName, nap, ogImagePath } = siteConfig;
  const pageUrl = `${siteUrl}${path}`;

  const service = {
    "@type": "Service" as const,
    "@id": `${pageUrl}#service`,
    name: keyword,
    description,
    serviceType: keyword,
    areaServed: "KR",
    provider: { "@type": "Organization" as const, name: siteName },
  };

  const webPage = {
    "@type": "WebPage" as const,
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: keyword,
    description,
    isPartOf: { "@type": "WebSite", url: siteUrl },
    inLanguage: "ko-KR" as const,
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
    "@graph": [service, webPage, breadcrumb],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(schema) }} />
  );
}
