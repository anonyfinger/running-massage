import Image from "next/image";
import Link from "next/link";
import { CtaButtonsFromConfig } from "@/components/CtaButtons";
import type { KeywordSection } from "@/lib/keyword-landing-sections";

export type { KeywordSection };

type RelatedService = { label: string; href: string };
type RelatedRegion = { label: string; href: string };
type RelatedArticle = { label: string; href: string };

type KeywordLandingPageProps = {
  keyword: string;
  heroTitle?: string;
  lead: string;
  sub: string;
  sections: readonly KeywordSection[];
  heroImage?: string;
  relatedServices?: RelatedService[];
  relatedRegions?: RelatedRegion[];
  serviceSectionTitle?: string;
  relatedServicesTitle?: string;
  /** 지역 블록 상단 리드 (기본: 허브 안내 문구) */
  regionSectionLead?: string;
  /** 주제 보강용 블로그·정보 글 → 서비스 허브로 신호 집중 */
  relatedArticles?: RelatedArticle[];
  relatedArticlesTitle?: string;
  regionsSectionTitle?: string;
};

const DEFAULT_REGIONS: RelatedRegion[] = [
  { label: "영등포 출장마사지", href: "/regions/yeongdeungpo/massage" },
  { label: "출장마사지 예약 가이드", href: "/regions/common/reservation-guide" },
  { label: "24시간 출장마사지 안내", href: "/regions/common/allnight" },
];

export function KeywordLandingPage({
  keyword,
  heroTitle,
  lead,
  sub,
  sections,
  heroImage = "/hero/출장마사지-1.webp",
  relatedServices,
  relatedRegions = DEFAULT_REGIONS,
  serviceSectionTitle,
  relatedServicesTitle,
  regionSectionLead,
  relatedArticles,
  relatedArticlesTitle,
  regionsSectionTitle,
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
          <p className="hero__eyebrow">서비스 안내</p>
          <div className="hero__content">
            <h1 id="hero-heading" className="hero__title">
              {heroTitle ?? keyword}
            </h1>
            <p className="hero__lead">{lead}</p>
            <p className="hero__sub">{sub}</p>
            <div className="hero__actions">
              <CtaButtonsFromConfig />
            </div>
          </div>
        </div>
      </section>

      <section id="service" className="content-block" aria-labelledby="service-heading">
        <h2 id="service-heading" className="section-title">
          {serviceSectionTitle ?? `${keyword} 선택 기준`}
        </h2>
        <div className="prose">
          {sections.map((section, i) => (
            <section key={i} className="page-article__section" aria-labelledby={`keyword-section-${i}`}>
              <h3 id={`keyword-section-${i}`} className="prose__subtitle">{section.title}</h3>
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
            </section>
          ))}
        </div>
      </section>

      {relatedServices && relatedServices.length > 0 && (
        <section className="content-block section section--white" aria-labelledby="related-services-heading">
          <h2 id="related-services-heading" className="section-title">
            {relatedServicesTitle ?? `${keyword}와 함께 보면 좋은 안내`}
          </h2>
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

      {relatedArticles && relatedArticles.length > 0 && (
        <section className="content-block section section--alt" aria-labelledby="related-articles-heading">
          <h2 id="related-articles-heading" className="section-title">
            {relatedArticlesTitle ?? `${keyword} 예약 전 확인 문서`}
          </h2>
          <p className="prose__lead">
            이 사이트에서는 관련 안내와 예약 가이드를 중심으로 실사용 정보를 이어서 확인할 수 있습니다.
          </p>
          <nav aria-label="관련 블로그 링크">
            <ul className="related-links" role="list">
              {relatedArticles.map(({ label, href }) => (
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
        <h2 id="regions-heading" className="section-title">
          {regionsSectionTitle ?? `영등포 ${keyword} 지역 안내`}
        </h2>
        <p className="prose__lead">
          {regionSectionLead ??
            "지금은 영등포 생활권 기준의 이용 정보와 예약 가이드를 우선 확인하실 수 있습니다."}
        </p>
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
              <Link href="/regions/yeongdeungpo/massage" className="related-links__item">
                영등포 출장마사지 안내 →
              </Link>
            </li>
            <li>
              <Link href="/regions/common/reservation-guide" className="related-links__item">
                출장마사지 예약 가이드 →
              </Link>
            </li>
            <li>
              <Link href="/" className="related-links__item">
                홈에서 전체 구조 보기 →
              </Link>
            </li>
          </ul>
        </nav>
      </section>

      <section className="content-block section section--alt" aria-labelledby="back-home-heading">
        <h2 id="back-home-heading" className="section-title sr-only">전체 서비스 안내</h2>
        <p className="prose__lead">
          <Link href="/" className="prose__subtitle-link">
            ← 영등포 출장마사지 전체 안내 보기
          </Link>
        </p>
      </section>
    </article>
  );
}
