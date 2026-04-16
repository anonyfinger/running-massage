import { siteConfig } from "@/lib/site-config";
import { toJsonLd } from "@/lib/structured-data";
import { getOrganizationJsonLd } from "@/lib/jsonld-organization";
import { SEOUL_REGIONS_PATH, getAllRegionLandings, getRegionLandingPath } from "@/lib/region-landings";

export function HomeStructuredData() {
  const { siteUrl, siteName, metaDescription, metaTitle, nap } = siteConfig;
  const dateModified = siteConfig.contentLastModified;
  const representativeRegions = getAllRegionLandings();
  const representativeDocs = [
    {
      name: "출장마사지 안내",
      url: `${siteUrl}/massage`,
      description: "전신·부분·집중 기준을 정리한 방문 마사지 이용 가이드",
    },
    {
      name: "출장마사지 예약 가이드",
      url: `${siteUrl}/regions/common/reservation-guide`,
      description: "예약 전에 준비할 정보와 문의 순서를 정리한 가이드 문서",
    },
    {
      name: "24시간 출장마사지 안내",
      url: `${siteUrl}/regions/common/allnight`,
      description: "심야·새벽 시간대 예약 흐름과 확인 포인트를 정리한 문서",
    },
    {
      name: "예약문의 페이지",
      url: `${siteUrl}/reserve`,
      description: "위치·장소·시간대를 먼저 전달하는 예약문의 페이지",
    },
    {
      name: "이용 가이드 모음",
      url: `${siteUrl}/guides`,
      description: "체크리스트와 지역 보조 가이드를 모아 둔 문서",
    },
    {
      name: "서울 페이지",
      url: `${siteUrl}${SEOUL_REGIONS_PATH}`,
      description: "서울 전체 흐름과 대표 지역 연결을 담당하는 상위 지역 문서",
    },
    ...representativeRegions.map((region) => ({
      name: region.name,
      url: `${siteUrl}${getRegionLandingPath(region.slug)}`,
      description: region.metadata.description,
    })),
  ];

  const organization = getOrganizationJsonLd();
  const topicEntities = [
    {
      "@type": "DefinedTerm",
      "@id": `${siteUrl}/#topic-chuljang-massage`,
      name: "출장마사지",
      description: "집·호텔·오피스 등 원하는 장소에서 이용 흐름과 예약 기준을 확인하는 상위 서비스 개념",
    },
    {
      "@type": "DefinedTerm",
      "@id": `${siteUrl}/#topic-anma`,
      name: "출장안마",
      description: "빠른 이용 가능 여부와 문의 흐름을 함께 찾는 방문 마사지 계열 검색 주제",
    },
    {
      "@type": "DefinedTerm",
      "@id": `${siteUrl}/#topic-swedish`,
      name: "출장스웨디시",
      description: "보다 편안한 이용 환경과 세부적인 이용 경험 설명을 찾는 방문 케어 검색 주제",
    },
    {
      "@type": "DefinedTerm",
      "@id": `${siteUrl}/#topic-hometai`,
      name: "홈타이",
      description: "현재 머무는 공간에서 편하게 진행 가능한 이용 흐름을 찾는 검색 주제",
    },
    {
      "@type": "DefinedTerm",
      "@id": `${siteUrl}/#topic-visit-massage`,
      name: "방문마사지",
      description: "방문 형태의 마사지 이용 방식과 예약 흐름을 설명하는 상위 개념",
    },
  ] as const;

  const localBusiness = {
    "@type": "HealthAndBeautyBusiness",
    "@id": `${siteUrl}/#localbusiness`,
    name: siteName,
    description: metaDescription,
    url: siteUrl,
    telephone: nap.telephone,
    areaServed: representativeRegions.flatMap((region) => [
      { "@type": "AdministrativeArea", name: `${region.cityLabel} ${region.district}` },
      ...region.areaServed.map((area) => ({ "@type": "Place", name: area })),
    ]),
    priceRange: "$$",
    currenciesAccepted: "KRW",
    paymentAccepted: "현금, 카드",
    image: { "@id": `${siteUrl}/#logo` },
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: nap.telephone,
      contactType: "reservations",
      areaServed: "대한민국",
      availableLanguage: "Korean",
      description:
        "출장달리기 예약 안내. 대표 지역 페이지와 예약 가이드를 통해 생활권별 방문 흐름을 안내합니다.",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      "@id": `${siteUrl}/#offercatalog`,
      name: "출장달리기 지역별 이용 안내",
      description:
        "지역 대표 페이지, 출장마사지 안내, 예약 가이드를 중심으로 정리한 핵심 안내.",
      itemListElement: [
        ...representativeRegions.map((region) => ({
          "@type": "Offer",
          itemOffered: { "@id": `${siteUrl}${getRegionLandingPath(region.slug)}#service` },
        })),
      ],
    },
  };

  const serviceChuljangMassage = {
    "@type": "Service",
    "@id": `${siteUrl}/#service-chuljang-massage`,
    name: "출장달리기 지역별 출장마사지 안내",
    description:
      "출장달리기는 홈에서 브랜드 구조를 안내하고, 대표 지역 페이지에서 생활권별 방문 마사지 흐름을 분리해 설명합니다.",
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: "대한민국",
    serviceType: "지역별 출장마사지 안내",
    url: `${siteUrl}${SEOUL_REGIONS_PATH}`,
  };
  const serviceHub = {
    "@type": "Service",
    "@id": `${siteUrl}/#service-hub`,
    name: "출장마사지 상위 허브",
    description:
      "출장마사지, 출장안마, 출장스웨디시, 홈타이, 방문마사지 관련 이용 흐름을 정리하고 대표 지역 페이지와 예약 가이드로 연결하는 상위 허브 문서",
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: "대한민국",
    serviceType: "출장마사지·출장안마·출장스웨디시 이용 안내",
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: siteUrl,
      availableLanguage: "Korean",
    },
  };
  const coreDocumentList = {
    "@type": "ItemList",
    "@id": `${siteUrl}/#core-documents`,
    name: "출장달리기 핵심 문서",
    itemListElement: representativeDocs.map((doc, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: doc.name,
      item: doc.url,
    })),
  };

  const webSite = {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteName,
    url: siteUrl,
    description: metaDescription,
    inLanguage: "ko-KR",
    publisher: { "@id": `${siteUrl}/#organization` },
    copyrightHolder: { "@id": `${siteUrl}/#organization` },
    about: [
      { "@id": `${siteUrl}/#organization` },
      { "@id": `${siteUrl}/#service-hub` },
      ...topicEntities.map((item) => ({ "@id": item["@id"] })),
    ],
    mentions: representativeDocs.map((doc) => ({
      "@type": "WebPage",
      name: doc.name,
      url: doc.url,
      description: doc.description,
    })),
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
    dateModified,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".hero__title", ".hero__lead"],
    },
    about: [
      { "@id": `${siteUrl}/#organization` },
      { "@id": `${siteUrl}/#service-hub` },
      ...topicEntities.map((item) => ({ "@id": item["@id"] })),
    ],
    mentions: representativeDocs.map((doc) => ({
      "@type": "WebPage",
      name: doc.name,
      url: doc.url,
      description: doc.description,
    })),
    mainEntity: { "@id": `${siteUrl}/#service-hub` },
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
    name: "출장마사지 예약 절차",
    description:
      "전화 또는 카카오톡으로 예약을 문의합니다. 대표 지역 페이지를 확인한 뒤 희망 시간과 장소를 알려주시면 안내받을 수 있습니다.",
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
        text: "희망 일시, 생활권 위치, 집·호텔 여부, 원하는 흐름을 안내합니다.",
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
        text: "테라피스트가 예약 시간에 방문해 서비스를 제공합니다.",
      },
    ],
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      localBusiness,
      serviceChuljangMassage,
      serviceHub,
      ...topicEntities,
      coreDocumentList,
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
