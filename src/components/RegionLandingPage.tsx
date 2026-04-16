import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { toJsonLd } from "@/lib/structured-data";
import type { RegionLandingImage, RegionLandingMeta } from "@/lib/region-landings";
import { SEOUL_REGIONS_PATH, getRegionLandingPath } from "@/lib/region-landings";
import { CtaButtonsFromConfig } from "@/components/CtaButtons";

type Props = {
  region: RegionLandingMeta;
};

export function RegionLandingPage({ region }: Props) {
  const { siteUrl, siteName, contentLastModified } = siteConfig;
  const url = `${siteUrl}${getRegionLandingPath(region.slug)}`;
  const regionListUrl = `${siteUrl}${SEOUL_REGIONS_PATH}`;
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: region.faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: siteUrl },
      { "@type": "ListItem", position: 2, name: region.cityLabel, item: `${siteUrl}${SEOUL_REGIONS_PATH}` },
      { "@type": "ListItem", position: 3, name: region.name, item: url },
    ],
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: region.name,
    url,
    serviceType: "방문 케어 예약 안내",
    provider: { "@type": "Organization", name: siteName, url: siteUrl },
    areaServed: region.areaServed,
    description: region.metadata.description,
  };
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: region.metadata.title,
    url,
    description: region.metadata.description,
    inLanguage: "ko-KR",
    isPartOf: {
      "@type": "WebSite",
      name: siteName,
      url: siteUrl,
    },
    about: [
      {
        "@type": "Place",
        name: `${region.cityLabel} ${region.district}`,
      },
      {
        "@type": "Service",
        name: region.name,
      },
    ],
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".page-article__title", ".page-article__lead"],
    },
  };
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `${region.name} 예약 전 확인 순서`,
    description: `${region.name} 이용 전에 확인하면 좋은 기본 순서를 정리한 안내입니다.`,
    step: region.bookingSteps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.body,
    })),
  };
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${region.name} 주요 생활권`,
    itemListElement: region.areaServed.map((area, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: area,
      item: url,
    })),
  };

  function renderVisual(visual?: RegionLandingImage, priority = false) {
    if (!visual) return null;

    return (
      <figure className="page-article__figure" style={{ marginTop: "1.5rem" }}>
        <Image
          src={visual.src}
          alt={visual.alt}
          width={1200}
          height={800}
          sizes="(max-width: 768px) 100vw, 960px"
          quality={65}
          priority={priority}
          className="page-article__img"
        />
      </figure>
    );
  }

  return (
    <article className="page-article">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(itemListSchema) }} />
      <section id="intro" className="hero" aria-labelledby="hero-heading">
        <div className="hero__bg-slide hero__bg-slide--1 hero__bg-slide--img" aria-hidden="true">
          <Image
            src={region.heroImage.src}
            alt={region.heroImage.alt}
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
          <p className="hero__eyebrow">{region.heroEyebrow ?? `${region.cityLabel} 대표 지역`}</p>
          <div className="hero__content">
            <h1 id="hero-heading" className="hero__title">
              {region.heroTitle}
            </h1>
            <p className="hero__lead">{region.lead}</p>
            <p className="hero__sub">{region.heroSub}</p>
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
          <Link href={SEOUL_REGIONS_PATH}>{region.cityLabel}</Link>
          <span className="breadcrumb-nav__sep">/</span>
          <span aria-current="page">{region.name}</span>
        </nav>
        {region.introParagraphs.map((paragraph, index) => (
          <p
            key={`${region.slug}-intro-${index}`}
            className="page-article__lead"
            style={{ marginTop: index === 0 ? "0.75rem" : "0.5rem" }}
          >
            {paragraph}
          </p>
        ))}
        {renderVisual(region.visuals?.afterIntro, true)}

        <nav aria-label={`${region.district} 대표페이지 바로가기`} style={{ marginTop: "1.25rem" }}>
          <ul className="home-representative-regions" role="list">
            <li>
              <a href="#quick-answers" className="prose__subtitle-link">
                빠른 답변
              </a>
            </li>
            <li>
              <a href="#local-signals" className="prose__subtitle-link">
                생활권 요약
              </a>
            </li>
            {region.sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="prose__subtitle-link">
                  {section.title}
                </a>
              </li>
            ))}
            <li>
              <a href="#faq" className="prose__subtitle-link">
                자주 묻는 질문
              </a>
            </li>
          </ul>
        </nav>

        <section className="page-article__section" id="quick-answers" aria-labelledby="quick-answers-heading">
          <h2 id="quick-answers-heading" className="page-article__section-title">
            {region.name} 빠른 답변
          </h2>
          <ul className="faq-list" role="list">
            {region.quickAnswers.map((item) => (
              <li key={item.question} className="faq-list__item">
                <h3 className="faq-list__q">{item.question}</h3>
                <p className="faq-list__a">{item.answer}</p>
              </li>
            ))}
          </ul>
        </section>
        {renderVisual(region.visuals?.afterQuickAnswers)}

        <section className="page-article__section" aria-labelledby="snapshot-heading">
          <h2 id="snapshot-heading" className="page-article__section-title">
            한눈에 보는 {region.name} 이용 정보
          </h2>
          <ul className="faq-list" role="list">
            {region.summaryCards.map((item) => (
              <li key={item.title} className="faq-list__item">
                <h3 className="faq-list__q">{item.title}</h3>
                <p className="faq-list__a">{item.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="page-article__section" aria-labelledby="process-heading">
          <h2 id="process-heading" className="page-article__section-title">
            {region.name} 이용 절차
          </h2>
          <ol className="faq-list" role="list">
            {region.bookingSteps.map((step, index) => (
              <li key={step.title} className="faq-list__item">
                <h3 className="faq-list__q">
                  {index + 1}. {step.title}
                </h3>
                <p className="faq-list__a">{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="page-article__section" id="local-signals" aria-labelledby="local-signals-heading">
          <h2 id="local-signals-heading" className="page-article__section-title">
            {region.name} 생활권 요약
          </h2>
          <p className="page-article__lead">
            이 페이지는 지역명만 반복하지 않고, 실제로 검색자와 답변 시스템이 함께 확인하는 생활권, 장소, 시간대, 예약 흐름을 기준으로 구성했습니다.
          </p>
          <ul className="faq-list" role="list">
            {region.localSignals.map((item) => (
              <li key={item.title} className="faq-list__item">
                <h3 className="faq-list__q">{item.title}</h3>
                <p className="faq-list__a">{item.body}</p>
              </li>
            ))}
          </ul>
          <p className="page-article__lead" style={{ marginTop: "1rem" }}>
            주요 생활권:
            {" "}
            {region.areaServed.join(", ")}
          </p>
        </section>
        {renderVisual(region.visuals?.afterLocalSignals)}

        {region.sections.map((section) => (
          <section key={section.id} id={section.id} className="page-article__section">
            <h2 className="page-article__section-title">{section.title}</h2>
            <div className="page-article__prose">
              {section.paragraphs.map((paragraph, index) => (
                <p key={`${section.id}-${index}`}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}

        <section className="page-article__section" id="faq">
          <h2 className="page-article__section-title">{region.name} 자주 묻는 질문</h2>
          <ul className="faq-list" role="list">
            {region.faqItems.map((item) => (
              <li key={item.q} className="faq-list__item">
                <h3 className="faq-list__q">{item.q}</h3>
                <p className="faq-list__a">{item.a}</p>
              </li>
            ))}
          </ul>
        </section>
        {renderVisual(region.visuals?.beforeRelatedDocs)}

        <section className="page-article__section" id="related-docs">
          <h2 className="page-article__section-title">{region.name}와 함께 보면 좋은 문서</h2>
          <p className="page-article__lead">
            지역 대표 페이지는 검색 의도를 받는 중심 문서이고, 아래 문서는 예약 준비와 세부 상황을 보강하는 연결 문서입니다.
          </p>
          <ul className="page-article__list">
            {region.relatedDocs.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="prose__subtitle-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <p className="page-article__lead" style={{ marginTop: "1.25rem" }}>
          서울 전체 흐름이 먼저 필요하면 <Link href={regionListUrl.replace(siteUrl, "")} className="prose__subtitle-link">서울 페이지</Link>에서 보고, 실제 생활권 판단은 이 페이지에서 이어서 확인하시면 됩니다.
        </p>
        <p className="page-article__lead" style={{ marginTop: "1.25rem" }}>
          마지막 수정일: {new Date(contentLastModified).toLocaleDateString("ko-KR")}
        </p>
      </div>
    </article>
  );
}
