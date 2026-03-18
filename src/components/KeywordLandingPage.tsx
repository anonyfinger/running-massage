import Image from "next/image";
import Link from "next/link";
import { CtaButtonsFromConfig } from "@/components/CtaButtons";

export type KeywordSection = {
  title: string;
  paragraphs: string[];
  image?: { src: string; alt: string };
};

type KeywordLandingPageProps = {
  keyword: string;
  lead: string;
  sub: string;
  sections: readonly KeywordSection[];
  heroImage?: string;
};

export function KeywordLandingPage({
  keyword,
  lead,
  sub,
  sections,
  heroImage = "/hero/출장마사지-1.webp",
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
                    width={800}
                    height={533}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 800px"
                    quality={65}
                    loading="lazy"
                    decoding="async"
                    className="page-article__img"
                  />
                </figure>
              )}
            </div>
          ))}
        </div>
        <p className="prose__lead" style={{ marginTop: "1.5rem" }}>
          <Link href="/" className="prose__subtitle-link" style={{ color: "inherit", textDecoration: "underline" }}>
            ← 출장마사지·출장안마·출장스웨디시 전체 보기
          </Link>
        </p>
      </section>
    </article>
  );
}
