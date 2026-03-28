import { siteConfig } from "@/lib/site-config";
import { toJsonLd } from "@/lib/structured-data";
import { regions } from "@/lib/region-posts";
import type { RegionMeta } from "@/lib/region-posts";
import { getOrganizationJsonLd } from "@/lib/jsonld-organization";

/** 지역 목록 페이지용 구조화데이터 — ItemList, BreadcrumbList, WebPage (regions 배열 자동 동기화) */
export function RegionsListStructuredData() {
  const { siteUrl, siteName } = siteConfig;

  const organization = getOrganizationJsonLd();

  const webPage = {
    "@type": "WebPage",
    "@id": `${siteUrl}/regions#webpage`,
    url: `${siteUrl}/regions`,
    name: "지역별 출장마사지 안내",
    description: "서울·강남·강서구·인천·수원·부천 등 지역별 출장마사지·출장안마·출장스웨디시 이용 안내",
    isPartOf: { "@id": `${siteUrl}/#website` },
    inLanguage: "ko-KR",
    about: regions
      .filter((r) => r.slug !== "common")
      .map((r) => ({ "@type": "Thing", name: `${r.name} 출장마사지` })),
  };

  const itemList = {
    "@type": "ItemList",
    "@id": `${siteUrl}/regions#itemlist`,
    name: "지역별 출장마사지 목록",
    itemListElement: regions.map((r, i) => ({
      "@type": "ListItem" as const,
      position: i + 1,
      name: r.slug === "common" ? r.name : `${r.name} 출장마사지`,
      item: `${siteUrl}/regions/${r.slug}`,
    })),
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": `${siteUrl}/regions#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: siteName, item: siteUrl },
      { "@type": "ListItem", position: 2, name: "지역별 안내", item: `${siteUrl}/regions` },
    ],
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [organization, webPage, itemList, breadcrumb],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(schema) }} />
  );
}

/** 지역 상세 페이지용 구조화데이터 — LocalBusiness, Service, BreadcrumbList, Organization */
export function RegionDetailStructuredData({ region }: { region: RegionMeta }) {
  const { siteUrl, siteName, nap, ogImagePath } = siteConfig;
  const dateModified = siteConfig.contentLastModified;
  const regionName = region.name;
  const regionUrl = `${siteUrl}/regions/${region.slug}`;

  const organization = getOrganizationJsonLd();

  const services = region.articles.map((a) => ({
    "@type": "Service" as const,
    "@id": `${regionUrl}#service-${a.slug}`,
    name: a.title,
    description: a.description,
    serviceType: a.title,
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: {
      "@type": "Place" as const,
      name: regionName,
      address: { "@type": "PostalAddress" as const, addressLocality: regionName, addressCountry: "KR" },
    },
  }));

  const localBusiness = {
    "@type": "HealthAndBeautyBusiness" as const,
    "@id": `${regionUrl}#localbusiness`,
    name: `${regionName} 출장마사지`,
    alternateName: region.articles.map((a) => a.title),
    description: region.description,
    url: regionUrl,
    telephone: nap.telephone,
    areaServed: {
      "@type": "Place" as const,
      name: regionName,
      address: { "@type": "PostalAddress" as const, addressLocality: regionName, addressCountry: "KR" },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog" as const,
      name: `${regionName} 출장마사지 서비스`,
      itemListElement: services.map((s) => ({
        "@type": "Offer" as const,
        itemOffered: { "@id": s["@id"] },
      })),
    },
    contactPoint: {
      "@type": "ContactPoint" as const,
      telephone: nap.telephone,
      contactType: "reservations" as const,
      areaServed: regionName,
      availableLanguage: "Korean" as const,
      description: `${regionName} 출장마사지·출장안마·출장스웨디시 예약`,
    },
    image: ogImagePath ? `${siteUrl}${ogImagePath}` : `${siteUrl}/favicon.png`,
  };

  const webPage = {
    "@type": "WebPage" as const,
    "@id": `${regionUrl}#webpage`,
    url: regionUrl,
    name: `${regionName} 출장마사지·출장안마·출장스웨디시 안내`,
    description: region.description,
    isPartOf: { "@id": `${siteUrl}/#website` },
    inLanguage: "ko-KR" as const,
    datePublished: "2025-01-01",
    dateModified,
    about: services.map((s) => ({ "@id": s["@id"] })),
  };

  const breadcrumb = {
    "@type": "BreadcrumbList" as const,
    "@id": `${regionUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem" as const, position: 1, name: siteName, item: siteUrl },
      { "@type": "ListItem" as const, position: 2, name: "지역별 안내", item: `${siteUrl}/regions` },
      { "@type": "ListItem" as const, position: 3, name: `${regionName} 출장마사지`, item: regionUrl },
    ],
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [organization, localBusiness, ...services, webPage, breadcrumb],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(schema) }} />
  );
}
