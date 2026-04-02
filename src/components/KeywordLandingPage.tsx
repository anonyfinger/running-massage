import Image from "next/image";
import Link from "next/link";
import { CtaButtonsFromConfig } from "@/components/CtaButtons";

export type KeywordSection = {
  title: string;
  paragraphs: string[];
  image?: { src: string; alt: string };
};

type RelatedService = { label: string; href: string };
type RelatedRegion = { label: string; href: string };

type KeywordLandingPageProps = {
  keyword: string;
  lead: string;
  sub: string;
  sections: readonly KeywordSection[];
  heroImage?: string;
  relatedServices?: RelatedService[];
  relatedRegions?: RelatedRegion[];
};

const DEFAULT_REGIONS: RelatedRegion[] = [
  { label: "서울 지역 안내", href: "/regions/seoul" },
  { label: "강남 지역 안내", href: "/regions/gangnam" },
  { label: "강서구 지역 안내", href: "/regions/gangseo" },
  { label: "인천 지역 안내", href: "/regions/incheon" },
  { label: "수원 지역 안내", href: "/regions/suwon" },
  { label: "부천 지역 안내", href: "/regions/bucheon" },
];

export function KeywordLandingPage({
  keyword,
  lead,
  sub,
  sections,
  heroImage = "/hero/출장마사지-1.webp",
  relatedServices,
  relatedRegions = DEFAULT_REGIONS,
}: KeywordLandingPageProps) {
  return (
    <article>
      <section id="intro" className="hero" aria-labelledby="hero-heading">
        <div className="hero__bg-slide hero__bg-slide--1 hero__bg-slide--img" aria-hidden="true">
          <Image
            src={heroImage}
            alt={`${keyword} | 방문마사지·홈케어·24시간예약 서울경기인천 출장`}
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
          <p className="hero__eyebrow">출장마사지 · 출장안마 · 출장스웨디시</p>
          <div className="hero__content">
            <h1 id="hero-heading" className="hero__title">
              {keyword}
            </h1>
            <p className="hero__lead">{lead}</p>
            <p className="hero__sub">{sub}</p>
            <ul className="hero__chips" role="list" aria-label="핵심 안내">
              <li>24시간 예약 가능</li>
              <li>숙련된 테라피스트</li>
              <li>맞춤형 코스</li>
            </ul>
            <div className="hero__actions">
              <CtaButtonsFromConfig />
            </div>
            <p className="hero__promo">
              예약·문의는 전화 또는 카카오로 연락 주시면 안내해 드립니다.
            </p>
          </div>
        </div>
      </section>

      <section id="service" className="content-block" aria-labelledby="service-heading">
        <h2 id="service-heading" className="section-title">
          {keyword} 서비스
        </h2>
        <div className="prose">
          {sections.map((section, i) => (
            <div key={i} className="page-article__section">
              <h3 className="prose__subtitle">{section.title}</h3>
              {section.paragraphs.map((paragraph, j) => (
                <p key={j}>{paragraph}</p>
              ))}
              {section.image && (
                <figure className="page-article__figure">
                  <Image
                    src={section.image.src}
                    alt={section.image.alt}
                    width={640}
                    height={427}
                    sizes="(max-width: 640px) 100vw, 640px"
                    quality={55}
                    loading="lazy"
                    decoding="async"
                    className="page-article__img"
                  />
                </figure>
              )}
            </div>
          ))}
        </div>
      </section>

      {relatedServices && relatedServices.length > 0 && (
        <section className="content-block section section--white" aria-labelledby="related-services-heading">
          <h2 id="related-services-heading" className="section-title">관련 서비스</h2>
          <nav aria-label="관련 서비스 링크">
            <ul className="related-links" role="list">
              {relatedServices.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="related-links__item">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>
      )}

      <section className="content-block" aria-labelledby="regions-heading">
        <h2 id="regions-heading" className="section-title">지역별 {keyword} 안내</h2>
        <p className="prose__lead">서울·강남·강서구·인천·수원·부천 등 방문 가능 지역별 상세 안내를 확인하세요.</p>
        <nav aria-label="지역별 안내 링크">
          <ul className="related-links" role="list">
            {relatedRegions.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className="related-links__item">
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/regions" className="related-links__item">
                전체 지역 보기 →
              </Link>
            </li>
            <li>
              <Link href="/regions/guide" className="related-links__item">
                지역별 심층 가이드 (예약·FAQ) →
              </Link>
            </li>
          </ul>
        </nav>
      </section>

      <section className="content-block section section--alt" aria-labelledby="back-home-heading">
        <h2 id="back-home-heading" className="section-title sr-only">전체 서비스 안내</h2>
        <p className="prose__lead">
          <Link href="/" className="prose__subtitle-link">
            ← 출장 홈케어 마사지 서비스 전체 안내 보기
          </Link>
        </p>
      </section>
    </article>
  );
}
