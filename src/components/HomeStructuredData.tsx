import { siteConfig } from "@/lib/site-config";
import { toJsonLd } from "@/lib/structured-data";

/**
 * 출장마사지 · 출장안마 · 출장스웨디시 타겟 구조화데이터
 * Organization, LocalBusiness, Service, WebSite, WebPage, BreadcrumbList, FAQPage
 */
export function HomeStructuredData() {
  const { siteUrl, siteName, metaDescription, metaTitle, nap, ogImagePath } = siteConfig;

  const organization = {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: siteName,
    alternateName: ["출장마사지", "출장안마", "출장스웨디시", "출장 마사지", "출장 안마", "출장 스웨디시"],
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      "@id": `${siteUrl}/#logo`,
      url: ogImagePath ? `${siteUrl}${ogImagePath}` : `${siteUrl}/favicon.png`,
      contentUrl: ogImagePath ? `${siteUrl}${ogImagePath}` : `${siteUrl}/favicon.png`,
      caption: siteName,
    },
    image: { "@id": `${siteUrl}/#logo` },
    sameAs: [siteUrl],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: nap.telephone,
      contactType: "reservations",
      areaServed: "KR",
      availableLanguage: "Korean",
      description: "출장마사지, 출장안마, 출장스웨디시 전화·카카오톡 예약. 전신·부분·출장스웨디시 코스 안내, 방문 가능 지역·당일 예약 문의.",
      url: siteUrl,
    },
  };

  const localBusiness = {
    "@type": "HealthAndBeautyBusiness",
    "@id": `${siteUrl}/#localbusiness`,
    name: siteName,
    alternateName: ["출장마사지", "출장안마", "출장스웨디시"],
    description: metaDescription,
    url: siteUrl,
    telephone: nap.telephone,
    areaServed: {
      "@type": "Country",
      name: "대한민국",
    },
    priceRange: "$$",
    currenciesAccepted: "KRW",
    paymentAccepted: "현금, 카드",
    image: { "@id": `${siteUrl}/#logo` },
    sameAs: [siteUrl],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: nap.telephone,
      contactType: "reservations",
      areaServed: "KR",
      availableLanguage: "Korean",
      description: "출장마사지·출장안마·출장스웨디시 예약. 집·호텔·오피스 방문, 전신·부분·두통·어깨 결림 맞춤 코스, 60~120분 이용.",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      "@id": `${siteUrl}/#offercatalog`,
      name: "출장마사지·출장안마·출장스웨디시 서비스",
      description: "고객 지정 장소로 방문하는 출장마사지, 출장안마, 출장스웨디시. 전신·부분·맞춤형 코스, 60~120분 이용 가능.",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@id": `${siteUrl}/#service-chuljang-massage` },
        },
        {
          "@type": "Offer",
          itemOffered: { "@id": `${siteUrl}/#service-chuljang-anma` },
        },
        {
          "@type": "Offer",
          itemOffered: { "@id": `${siteUrl}/#service-chuljang-swedish` },
        },
      ],
    },
  };

  const serviceChuljangMassage = {
    "@type": "Service",
    "@id": `${siteUrl}/#service-chuljang-massage`,
    name: "출장마사지",
    description:
      "출장마사지는 고객이 지정한 집·호텔·오피스로 테라피스트가 방문해 마사지를 제공하는 서비스입니다. 전신 마사지(90~120분), 부분 마사지(어깨·허리·다리, 60분), 두통·어깨 결림 집중 관리 등 맞춤형 코스로 진행됩니다. 장시간 업무로 피로가 쌓인 직장인, 전신 이완이 필요한 분에게 적합합니다.",
    provider: { "@id": `${siteUrl}/#localbusiness` },
    areaServed: "KR",
    serviceType: "출장마사지",
  };

  const serviceChuljangAnma = {
    "@type": "Service",
    "@id": `${siteUrl}/#service-chuljang-anma`,
    name: "출장안마",
    description:
      "출장안마는 전통 안마 기법과 현대 마사지를 결합해 고객 지정 장소로 방문하는 서비스입니다. 경락과 근육을 함께 다루며, 목·어깨·등 긴장 완화, 다리 피로·부기 해소에 강점이 있습니다. 60~90분 코스, 오일 없이 진행 가능. 장시간 컴퓨터 작업·운전·서서 일하는 분에게 추천합니다.",
    provider: { "@id": `${siteUrl}/#localbusiness` },
    areaServed: "KR",
    serviceType: "출장안마",
  };

  const serviceChuljangSwedish = {
    "@type": "Service",
    "@id": `${siteUrl}/#service-chuljang-swedish`,
    name: "출장스웨디시",
    description:
      "출장스웨디시는 고객 지정 장소로 방문해 오일 마사지를 제공하는 출장 형태 서비스입니다. 혈액순환 개선·근육 이완·림프 흐름 촉진에 초점을 두며, 60~120분 전신 또는 상·하체 구분 코스로 진행됩니다. 출장마사지·출장안마와 함께 예약 가능합니다.",
    provider: { "@id": `${siteUrl}/#localbusiness` },
    areaServed: "KR",
    serviceType: "출장스웨디시",
  };

  const webSite = {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteName,
    alternateName: ["출장마사지", "출장안마", "출장스웨디시"],
    url: siteUrl,
    description: metaDescription,
    inLanguage: "ko-KR",
    publisher: { "@id": `${siteUrl}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const webPage = {
    "@type": "WebPage",
    "@id": `${siteUrl}/#webpage`,
    url: siteUrl,
    name: metaTitle,
    description: metaDescription,
    isPartOf: { "@id": `${siteUrl}/#website` },
    inLanguage: "ko-KR",
    datePublished: "2025-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".hero__title", ".hero__lead"],
    },
    about: [
      { "@id": `${siteUrl}/#service-chuljang-massage` },
      { "@id": `${siteUrl}/#service-chuljang-anma` },
      { "@id": `${siteUrl}/#service-chuljang-swedish` },
    ],
    primaryImageOfPage: { "@id": `${siteUrl}/#logo` },
  };

  const breadcrumbList = {
    "@type": "BreadcrumbList",
    "@id": `${siteUrl}/#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: siteName,
        item: siteUrl,
      },
    ],
  };

  const howTo = {
    "@type": "HowTo",
    "@id": `${siteUrl}/#howto`,
    name: "출장마사지·출장안마·출장스웨디시 예약 방법",
    description: "출장마사지, 출장안마, 출장스웨디시는 전화 또는 카카오톡으로 예약합니다. 희망 일시·장소·코스(전신·부분·출장스웨디시 등)를 안내하면 가능 여부와 준비 사항을 안내받을 수 있습니다. 테라피스트가 예약 시간에 방문해 60~120분 코스로 서비스를 제공합니다.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "예약·문의",
        text: "전화 또는 카카오톡으로 예약·문의합니다.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "이용 정보 안내",
        text: "희망 일시, 장소, 원하는 코스(전신·부분·출장스웨디시 등)를 안내합니다.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "예약 확정",
        text: "예약 확정 후 방문 일시와 준비 사항(수건, 편한 복장 등)을 안내받습니다.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "서비스 이용",
        text: "테라피스트가 예약 시간에 방문해 출장마사지·출장안마·출장스웨디시 서비스를 제공합니다.",
      },
    ],
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      localBusiness,
      serviceChuljangMassage,
      serviceChuljangAnma,
      serviceChuljangSwedish,
      webSite,
      webPage,
      breadcrumbList,
      howTo,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: toJsonLd(schema) }}
    />
  );
}
