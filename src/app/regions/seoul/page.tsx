import Image from "next/image";
import Link from "next/link";
import { createSocialMetadata } from "@/lib/seo-metadata";
import { siteConfig } from "@/lib/site-config";
import { toJsonLd } from "@/lib/structured-data";
import { getRegionLandingPath, getSeoulRegionLandings } from "@/lib/region-landings";
import { CtaButtonsFromConfig } from "@/components/CtaButtons";

export const metadata = createSocialMetadata({
  title: "서울 출장마사지 안내 | 서울 지역별 이용 가이드",
  description:
    "서울 출장마사지 이용 전 확인해야 할 지역 특성, 이동 동선, 예약 포인트, 생활권별 안내를 정리한 서울 대표 지역 가이드입니다.",
  path: "/regions/seoul",
  keywords: [
    "서울 출장마사지",
    "서울 출장마사지 안내",
    "서울 출장마사지 지역별 가이드",
    "서울 출장안마",
    "서울 출장스웨디시",
    "서울 홈타이",
    "서울 방문마사지",
    "서울 지역별 마사지 안내",
    "영등포 출장마사지",
    "강남 출장마사지",
    "강서 출장마사지",
    "송파 출장마사지",
    "마포 출장마사지",
  ],
});

const quickAnswers = [
  {
    question: "서울 출장마사지 페이지는 무엇을 정리하나요?",
    answer:
      "서울 전체 키워드로 들어온 사용자가 어느 생활권부터 봐야 하는지, 지역별 차이가 큰지, 현재 운영 중인 대표 지역이 어디인지를 먼저 이해할 수 있도록 정리합니다.",
  },
  {
    question: "서울 안에서도 지역 차이가 큰가요?",
    answer:
      "같은 서울이라도 업무권, 주거권, 숙소 밀집권에 따라 이동 동선과 예약 집중 시간, 심야 접근성이 크게 달라집니다. 그래서 서울 전체 문서와 상세 지역 문서를 분리하는 편이 더 정확합니다.",
  },
  {
    question: "현재 서울에서 먼저 봐야 할 지역은 어디인가요?",
    answer:
      "현재는 영등포·강남·강서 생활권을 서울 대표 지역으로 운영하고 있습니다. 영등포는 업무·주거·숙소 흐름이 함께 보이고, 강남은 업무·상업·숙소 수요가 강하며, 강서는 공항·광역 이동과 마곡·구도심 생활권이 섞여 서울 서북 의도를 받기 좋은 지역입니다.",
  },
  {
    question: "이 페이지 다음에는 어디로 이동하면 되나요?",
    answer:
      "서울 전체 흐름을 먼저 이해한 뒤, 실제 머무는 생활권이 분명하면 영등포·강남·강서 같은 상세 지역 페이지로 이동하고, 예약 준비는 예약 가이드와 예약문의 페이지로 이어지는 흐름이 가장 자연스럽습니다.",
  },
] as const;

const districtHighlights = [
  {
    title: "도심 업무권",
    description:
      "여의도·영등포·용산처럼 업무 수요와 이동 수요가 함께 큰 권역은 늦은 시간 예약, 오피스 밀집 지역 접근성, 간선도로 진입 편의성이 중요합니다.",
  },
  {
    title: "주거 밀집권",
    description:
      "송파·강동·노원처럼 주거 비중이 높은 생활권은 저녁 시간대 예약 집중이 많아 원하는 시간대를 확보하려면 미리 문의하는 것이 유리합니다.",
  },
  {
    title: "상업·유흥 밀집권",
    description:
      "강남·서초·마포처럼 유동 인구가 많은 지역은 심야 시간 응대 여부, 대기 시간, 상세 안내의 정확도가 체감 만족도에 직접 연결됩니다.",
  },
];

const usagePoints = [
  "이용 지역과 세부 생활권을 먼저 정확히 전달하기",
  "희망 시간대와 방문 가능 시간을 함께 확인하기",
  "건물 특성상 주차·출입 안내가 필요한지 미리 체크하기",
  "코스 구성, 진행 시간, 추가 비용 여부를 사전에 정리하기",
  "서울 내 이동 거리 특성상 너무 촉박한 예약은 피하기",
];

const searchIntentSections = [
  {
    title: "서울 출장마사지",
    description:
      "서울 전역을 기준으로 넓게 정보를 찾는 사용자는 보통 이용 가능 지역, 이동 동선, 예약 응대 범위, 생활권별 차이를 먼저 확인합니다. 이 페이지는 서울 전체 흐름을 설명하고 상세 지역 문서로 연결하는 허브 역할에 맞춰 구성했습니다.",
  },
  {
    title: "서울 출장안마",
    description:
      "서울 출장안마 키워드는 빠른 이용 가능 여부와 방문 가능 지역에 대한 확인 수요가 강한 편입니다. 따라서 실제 이용 전 확인해야 할 시간대, 건물 출입, 주차, 생활권별 접근성 정보를 함께 제공하는 것이 중요합니다.",
  },
  {
    title: "서울 출장스웨디시",
    description:
      "서울 출장스웨디시는 보다 세부적인 코스 이해와 편안한 이용 환경에 대한 관심이 함께 나타나는 검색입니다. 단순 반복 문구보다 지역 특성과 예약 흐름, 응대 포인트를 명확히 설명하는 구조가 검색 의도와 더 잘 맞습니다.",
  },
  {
    title: "서울 홈타이",
    description:
      "서울 홈타이 관련 검색은 생활권 중심의 방문 편의성과 실제 이용 동선을 함께 보는 경향이 있습니다. 그래서 이 페이지에서는 서울 전체 설명뿐 아니라 대표 지역 페이지로 자연스럽게 이어지는 내부 링크 구조를 함께 제공합니다.",
  },
];

const pageSignals = [
  {
    label: "대상 범위",
    value: "서울 전체 이용 흐름과 생활권별 대표 지역 페이지 연결",
  },
  {
    label: "핵심 질문",
    value: "서울에서 어디를 먼저 보면 되는지, 지역별 차이가 큰지, 현재 운영 지역이 어디인지",
  },
  {
    label: "문서 역할",
    value: "서울 상위 문서이자 상세 지역 페이지로 연결하는 시작 문서",
  },
  {
    label: "대표 내부 링크",
    value: "영등포·강남·강서 대표 페이지, 예약 가이드, 예약문의 페이지",
  },
  {
    label: "답변 방식",
    value: "짧은 답변과 생활권 설명을 먼저 주고, 상세 지역 페이지로 이어지는 구조",
  },
];

const faqs = [
  {
    question: "서울 지역 페이지는 어떤 역할을 하나요?",
    answer:
      "이 페이지는 서울 전체를 한 번에 넓게 설명하는 허브이자, 각 생활권 대표 페이지로 연결되는 시작점입니다. 사용자는 서울이라는 큰 범위 안에서 먼저 지역 흐름을 이해하고, 이후 영등포처럼 실제 이용 가능성이 높은 상세 페이지로 자연스럽게 이동할 수 있습니다.",
  },
  {
    question: "서울 출장마사지 이용 시 지역별 차이가 큰가요?",
    answer:
      "서울은 같은 시내라도 생활권마다 이동 시간, 주차 환경, 심야 접근성, 예약 집중 시간이 크게 다릅니다. 그래서 단순히 서울 전체 키워드만 보는 것보다, 실제 머무는 지역 중심으로 안내를 확인하는 편이 훨씬 효율적입니다.",
  },
  {
    question: "현재 서울에서 먼저 보는 대표 페이지는 어디인가요?",
    answer:
      "현재는 영등포·강남·강서 생활권을 서울 대표 페이지로 운영하고 있습니다. 영등포는 생활권 혼합도가 높고, 강남은 업무·상업·숙소 수요가 강하며, 강서는 공항·간선 이동과 생활권 편차가 커서 대표 사례로 확장하기 좋은 구조를 가지고 있습니다.",
  },
  {
    question: "서울 페이지와 상세 지역 페이지를 왜 나눠서 운영하나요?",
    answer:
      "서울 전체 문서는 넓은 검색 의도에 대응하고, 상세 지역 페이지는 영등포·강남·강서처럼 구체적인 지역 의도에 대응하기 위해 분리합니다. 이렇게 문서 역할을 나누면 검색엔진이 각 페이지의 주제를 더 쉽게 이해하고, 내부 링크 구조도 훨씬 명확해집니다.",
  },
  {
    question: "이 페이지가 AEO 관점에서 유리한 이유는 무엇인가요?",
    answer:
      "이 문서는 서울이라는 주제에 대해 사용자가 실제로 궁금해하는 질문을 먼저 정리하고, 짧고 명확한 답변 형태로 풀어주며, 세부 지역으로 이어지는 구조를 갖추고 있습니다. 그래서 일반 검색뿐 아니라 AI 기반 답변 시스템이 문서 목적을 파악하는 데도 유리한 편입니다.",
  },
];

const seoulVisuals = {
  afterIntro: {
    src: "/post_img/출장마사지-집에서-편안한-프리미엄-서비스.jpg",
    alt: "서울 출장마사지 전체 흐름을 상징하는 방문 홈케어 마사지 장면",
  },
  afterDistricts: {
    src: "/post_img/출장마사지-이용-시나리오-직장인.jpg",
    alt: "서울 도심 업무권과 생활권 이용 흐름을 보여주는 출장마사지 장면",
  },
  afterSearchIntent: {
    src: "/post_img/grok-image-99025988-1457-472e-9f57-89f62a81ca58.png",
    alt: "서울 숙소와 호텔 이용 흐름을 연상시키는 출장안마 이미지",
  },
  beforeRepresentativeRegion: {
    src: "/post_img/출장마사지-준비-및-예약-안내.jpg",
    alt: "서울 대표 지역 페이지로 이동하기 전 예약 준비 흐름을 보여주는 이미지",
  },
} as const;

export default function SeoulRegionsPage() {
  const { siteUrl } = siteConfig;
  const regions = getSeoulRegionLandings();
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "서울", item: `${siteUrl}/regions/seoul` },
    ],
  };
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "서울 출장마사지 지역별 이용 가이드",
    url: `${siteUrl}/regions/seoul`,
    description:
      "서울 출장마사지 전체 흐름을 설명하고, 생활권별 대표 지역 페이지로 연결하는 상위 문서입니다.",
    hasPart: regions.map((region, index) => ({
      "@type": "WebPage",
      position: index + 1,
      name: region.name,
      url: `${siteUrl}${getRegionLandingPath(region.slug)}`,
    })),
  };
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "서울 대표 지역 페이지",
    itemListElement: regions.map((region, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: region.name,
      item: `${siteUrl}${getRegionLandingPath(region.slug)}`,
    })),
  };

  return (
    <article className="page-article">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(itemListSchema) }} />
      <section id="intro" className="hero" aria-labelledby="hero-heading">
        <div className="hero__bg-slide hero__bg-slide--1 hero__bg-slide--img" aria-hidden="true">
          <Image
            src="/post_img/출장마사지-집에서-편안한-프리미엄-서비스.jpg"
            alt="서울 출장마사지 전체 흐름을 상징하는 방문 홈케어 마사지 장면"
            fill
            priority
            fetchPriority="high"
            quality={60}
            sizes="(max-width: 768px) 430px, (max-width: 1200px) 100vw, 1200px"
            className="hero__bg-img"
          />
        </div>
        <div className="hero__bg-slide hero__bg-slide--2" aria-hidden="true" />
        <div className="hero__bg-slide hero__bg-slide--3" aria-hidden="true" />
        <div className="hero__bg-slide hero__bg-slide--4" aria-hidden="true" />
        <div className="hero__bg-slide hero__bg-slide--5" aria-hidden="true" />
        <div className="hero__overlay" aria-hidden="true" />
        <div className="hero__inner">
          <p className="hero__eyebrow">서울 대표 문서</p>
          <div className="hero__content">
            <h1 id="hero-heading" className="hero__title">
              서울 출장마사지 지역별 이용 가이드
            </h1>
            <p className="hero__lead">
              서울 전체 흐름을 먼저 설명하고 생활권별 대표 지역 페이지로 연결하는 상위 문서입니다.
            </p>
            <p className="hero__sub">
              서울 출장마사지, 서울 출장안마, 서울 출장스웨디시, 서울 홈타이처럼 넓은 검색 의도를 먼저 정리하고,
              실제 이용 판단은 영등포·강남·강서 같은 상세 지역 페이지에서 이어서 볼 수 있도록 설계했습니다.
            </p>
            <div className="hero__actions">
              <CtaButtonsFromConfig />
            </div>
          </div>
        </div>
      </section>
      <div className="content-block">
        <nav className="breadcrumb-nav" aria-label="breadcrumb">
          <Link href="/">홈</Link>
          <span className="breadcrumb-nav__sep">/</span>
          <span aria-current="page">서울</span>
        </nav>
        <figure className="page-article__figure" style={{ marginTop: "1.5rem" }}>
          <Image
            src={seoulVisuals.afterIntro.src}
            alt={seoulVisuals.afterIntro.alt}
            width={1200}
            height={800}
            sizes="(max-width: 768px) 100vw, 960px"
            quality={65}
            priority
            className="page-article__img"
          />
        </figure>

        <section className="page-article__section" id="quick-answers">
          <h2 className="page-article__section-title">서울 출장마사지 빠른 답변</h2>
          <ul className="faq-list" role="list">
            {quickAnswers.map((item) => (
              <li key={item.question} className="faq-list__item">
                <h3 className="faq-list__q">{item.question}</h3>
                <p className="faq-list__a">{item.answer}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="page-article__section">
          <h2 className="page-article__section-title">서울 페이지에서 먼저 확인할 기준</h2>
          <p className="page-article__section-body">
            서울은 단순히 하나의 지역처럼 보이지만 실제 이용 기준에서는 이동 동선, 생활권 밀도, 상권 성격, 심야 접근성 같은 요소가 핵심입니다.
            예를 들어 여의도·영등포처럼 업무와 상업이 함께 발달한 곳은 시간대별 수요 편차가 크고, 강남·서초처럼 유동 인구가 많은 지역은 심야 응대와 대기 시간 확인이 중요합니다.
            반대로 송파·노원 같은 주거 비중이 높은 생활권은 저녁 시간대 예약 집중이 상대적으로 강하게 나타날 수 있어, 같은 서울이라도 안내 문맥이 달라져야 검색 의도에 더 정확히 대응할 수 있습니다.
          </p>
        </section>

        <section className="page-article__section">
          <h2 className="page-article__section-title">서울 생활권별 특징</h2>
          <ul className="faq-list" role="list">
            {districtHighlights.map((item) => (
              <li key={item.title} className="faq-list__item">
                <h3 className="faq-list__q">{item.title}</h3>
                <p className="faq-list__a">{item.description}</p>
              </li>
            ))}
          </ul>
        </section>
        <figure className="page-article__figure" style={{ marginTop: "1.5rem" }}>
          <Image
            src={seoulVisuals.afterDistricts.src}
            alt={seoulVisuals.afterDistricts.alt}
            width={1200}
            height={800}
            sizes="(max-width: 768px) 100vw, 960px"
            quality={65}
            className="page-article__img"
          />
        </figure>

        <section className="page-article__section">
          <h2 className="page-article__section-title">서울 주요 검색어별 해석</h2>
          <ul className="faq-list" role="list">
            {searchIntentSections.map((item) => (
              <li key={item.title} className="faq-list__item">
                <h3 className="faq-list__q">{item.title}</h3>
                <p className="faq-list__a">{item.description}</p>
              </li>
            ))}
          </ul>
        </section>
        <figure className="page-article__figure" style={{ marginTop: "1.5rem" }}>
          <Image
            src={seoulVisuals.afterSearchIntent.src}
            alt={seoulVisuals.afterSearchIntent.alt}
            width={1200}
            height={800}
            sizes="(max-width: 768px) 100vw, 960px"
            quality={65}
            className="page-article__img"
          />
        </figure>

        <section className="page-article__section">
          <h2 className="page-article__section-title">서울 지역 이용 전 체크 포인트</h2>
          <ul className="faq-list" role="list">
            {usagePoints.map((point) => (
              <li key={point} className="faq-list__item">
                <p className="faq-list__a">{point}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="page-article__section">
          <h2 className="page-article__section-title">서울 문서를 이해하기 쉬운 핵심 신호</h2>
          <ul className="faq-list" role="list">
            {pageSignals.map((item) => (
              <li key={item.label} className="faq-list__item">
                <h3 className="faq-list__q">{item.label}</h3>
                <p className="faq-list__a">{item.value}</p>
              </li>
            ))}
          </ul>
        </section>
        <figure className="page-article__figure" style={{ marginTop: "1.5rem" }}>
          <Image
            src={seoulVisuals.beforeRepresentativeRegion.src}
            alt={seoulVisuals.beforeRepresentativeRegion.alt}
            width={1200}
            height={800}
            sizes="(max-width: 768px) 100vw, 960px"
            quality={65}
            className="page-article__img"
          />
        </figure>

        <section className="page-article__section">
          <h2 className="page-article__section-title">서울 대표 지역 페이지</h2>
          <p className="page-article__section-body">
            현재는 영등포·강남·강서 생활권을 서울 대표 지역으로 운영하고 있습니다. 영등포는 서울 서남권에서 업무·주거·숙소 흐름이 함께 보이는 지역이고,
            강남은 업무·상업·숙소 수요가 강한 대표 권역이며, 강서는 공항·광역 이동과 마곡·구도심 생활권이 섞여 서울 서북 검색 의도를 받기에 적합합니다. 이후에는 송파, 마포, 용산처럼 생활권별 검색 의도가 뚜렷한 지역을 같은 구조로 확장할 수 있습니다.
          </p>
          <ul className="faq-list" role="list">
            {regions.map((region) => (
              <li key={region.slug} className="faq-list__item">
                <h3 className="faq-list__q">
                  <Link href={getRegionLandingPath(region.slug)} className="prose__subtitle-link">
                    {region.name}
                  </Link>
                </h3>
                <p className="faq-list__a">{region.metadata.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="page-article__section">
          <h2 className="page-article__section-title">서울 출장마사지 FAQ</h2>
          <ul className="faq-list" role="list">
            {faqs.map((faq) => (
              <li key={faq.question} className="faq-list__item">
                <h3 className="faq-list__q">{faq.question}</h3>
                <p className="faq-list__a">{faq.answer}</p>
              </li>
            ))}
          </ul>
        </section>
        <section className="page-article__section">
          <h2 className="page-article__section-title">서울 출장마사지, 이 안내를 어떻게 쓰면 좋을까요</h2>
          <p className="page-article__section-body">
            서울에서 출장마사지(방문 마사지)를 찾을 때는 &apos;서울 어디든 동일&apos;이라기보다, 실제로는 생활권·시간대·건물 출입·주차 같은 조건에 따라 이용 가능 여부와 체감 만족도가 달라집니다.
            여의도·강남처럼 업무·상업 수요가 몰리는 곳, 송파·노원처럼 저녁 주거 수요가 두드러지는 곳, 김포공항·마곡 일대처럼 공항·광역 이동이 겹치는 곳까지 같은 서울이라도 몸을 쓰는 리듬과 이동 동선이 크게 갈립니다.
          </p>
          <p className="page-article__section-body">
            이 문서는 그런 서울 전체 맥락에서 출장마사지를 이해할 때 먼저 짚을 기준—이용 전 확인 포인트, 생활권별로 달라지는 예약 흐름—을 정리한 글입니다.
            동네·역·공항 인근처럼 검색 의도가 좁혀지면 영등포·강남·강서 대표 지역 페이지에서 해당 생활권에 맞춘 설명을 이어가고, 실제 문의 준비는 예약 가이드와 예약문의 페이지로 연결하는 흐름이 가장 자연스럽습니다.
          </p>
        </section>
      </div>
    </article>
  );
}
