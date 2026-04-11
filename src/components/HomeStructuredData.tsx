import { siteConfig } from "@/lib/site-config";
import { toJsonLd } from "@/lib/structured-data";
import { getOrganizationJsonLd } from "@/lib/jsonld-organization";

export function HomeStructuredData() {
  const { siteUrl, siteName, metaDescription, metaTitle, nap } = siteConfig;
  const dateModified = siteConfig.contentLastModified;

  const organization = getOrganizationJsonLd();

  const localBusiness = {
    "@type": "HealthAndBeautyBusiness",
    "@id": `${siteUrl}/#localbusiness`,
    name: siteName,
    description: metaDescription,
    url: siteUrl,
    telephone: nap.telephone,
    areaServed: [
      { "@type": "AdministrativeArea", name: "서울특별시 영등포구" },
      { "@type": "Place", name: "여의도" },
      { "@type": "Place", name: "영등포역" },
      { "@type": "Place", name: "문래" },
      { "@type": "Place", name: "당산" },
      { "@type": "Place", name: "신길" },
      { "@type": "Place", name: "대림" },
    ],
    priceRange: "$$",
    currenciesAccepted: "KRW",
    paymentAccepted: "현금, 카드",
    image: { "@id": `${siteUrl}/#logo` },
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: nap.telephone,
      contactType: "reservations",
      areaServed: "서울특별시 영등포구",
      availableLanguage: "Korean",
      description:
        "영등포 출장마사지 예약. 여의도·영등포역·문래·당산·신길·대림 생활권의 집·호텔 방문 흐름을 안내.",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      "@id": `${siteUrl}/#offercatalog`,
      name: "영등포 출장마사지 이용 안내",
      description:
        "영등포 출장마사지 이용 정보와 출장마사지 안내, 예약 가이드를 중심으로 정리한 핵심 안내.",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@id": `${siteUrl}/#service-chuljang-massage` },
        },
      ],
    },
  };

  const serviceChuljangMassage = {
    "@type": "Service",
    "@id": `${siteUrl}/#service-chuljang-massage`,
    name: "영등포 출장마사지",
    description:
      "영등포 출장마사지는 여의도·영등포역·문래·당산·신길·대림 생활권에서 집·호텔 중심 방문 마사지 흐름을 정리한 이용 안내입니다.",
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: "서울특별시 영등포구",
    serviceType: "영등포 출장마사지",
    url: `${siteUrl}/regions/yeongdeungpo/massage`,
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
    about: { "@id": `${siteUrl}/#organization` },
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
    about: [{ "@id": `${siteUrl}/#service-chuljang-massage` }],
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
    name: "영등포 출장마사지 예약 절차",
    description:
      "전화 또는 카카오톡으로 영등포 출장마사지 예약을 문의합니다. 여의도·영등포역·문래·당산·신길·대림 생활권의 희망 시간과 장소를 알려주시면 안내받을 수 있습니다.",
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
        text: "희망 일시, 영등포 생활권 위치, 집·호텔 여부, 원하는 흐름을 안내합니다.",
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
