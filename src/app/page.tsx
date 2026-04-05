import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { createSocialMetadata } from "@/lib/seo-metadata";
import { longFormContent } from "@/lib/long-form-content";
import { homePageContent } from "@/lib/home-page-content";
import { HomeStructuredData } from "@/components/HomeStructuredData";
import { HomeFAQSchema, FAQ_ITEMS } from "@/components/HomeFAQSchema";
import { CtaButtonsFromConfig } from "@/components/CtaButtons";

export const metadata = createSocialMetadata({
  title: siteConfig.metaTitle,
  description: siteConfig.metaDescription,
  path: "/",
  keywords: [
    "출장 홈케어",
    "방문 마사지",
    "집에서 마사지",
    "호텔 마사지",
    "출장 마사지 예약",
  ],
});

export default function Home() {
  const { metaTitle } = siteConfig;

  return (
    <>
      <HomeStructuredData />
      <HomeFAQSchema />
      <article>
        <section id="intro" className="hero" aria-labelledby="hero-heading">
          <div className="hero__bg-slide hero__bg-slide--1 hero__bg-slide--img" aria-hidden="true">
            <Image
              src="/post_img/프리미엄-출장스웨디시-마사지-관리-장면.jpg"
              alt="테라피스트가 고객 숙소에서 마사지 서비스를 제공하는 장면"
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
            <p className="hero__eyebrow">출장 홈케어 · 방문 마사지</p>
            <div className="hero__content">
              <h1 id="hero-heading" className="hero__title">
                {metaTitle}
              </h1>
              <p className="hero__lead">
                고객이 계신 곳으로 찾아가는 프리미엄 마사지 서비스
              </p>
              <p className="hero__sub">
                집·호텔·오피스 등 지정 장소로 방문합니다. 세부 코스는 서비스별 페이지에서 안내합니다.
              </p>
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
            방문 마사지 서비스
          </h2>
          <div className="prose">
            {homePageContent.intro.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
            <figure className="page-article__figure">
              <Image
                src="/post_img/출장마사지-집에서-편안한-프리미엄-서비스.jpg"
                alt="집에서 방문 마사지를 받는 장면"
                width={640}
                height={427}
                sizes="(max-width: 640px) 100vw, 640px"
                quality={55}
                loading="lazy"
                decoding="async"
                className="page-article__img"
              />
            </figure>
            {homePageContent.serviceTeasers.map(({ href, title, lines }) => (
              <div key={href} className="home-service-teaser">
                <h3 className="prose__subtitle">
                  <Link href={href} className="prose__subtitle-link">
                    {title}
                  </Link>
                </h3>
                {lines.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
                <p>
                  <Link href={href} className="prose__subtitle-link">
                    {title} 자세히 보기 →
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="compare" className="section section--white" aria-labelledby="compare-heading">
          <div className="content-block">
            <h2 id="compare-heading" className="section-title">
              서비스 비교
            </h2>
            <div className="prose">
              <p>{homePageContent.compareLead}</p>
            </div>
            <figure className="page-article__figure">
              <Image
                src="/post_img/출장마사지-출장안마-스웨디시-비교.jpg"
                alt="출장마사지·출장안마·출장스웨디시 비교 개요"
                width={640}
                height={427}
                sizes="(max-width: 640px) 100vw, 640px"
                quality={55}
                loading="lazy"
                decoding="async"
                className="page-article__img"
              />
            </figure>
            <div className="comparison-table-wrapper" role="region" aria-label="코스별 비교표">
              <table className="comparison-table">
                <thead>
                  <tr>
                    {longFormContent.courseComparison.headers.map((h, i) => (
                      <th key={i}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {longFormContent.courseComparison.rows.map((row, i) => (
                    <tr key={i}>
                      {row.map((cell, j) => (
                        <td key={j}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section
          id="regions"
          className="content-block home-region-nav"
          aria-labelledby="home-region-heading"
        >
          <h2 id="home-region-heading" className="section-title">
            지역 안내
          </h2>
          <p className="page-article__sub" style={{ marginBottom: "1rem" }}>
            {homePageContent.regionLead}
          </p>
          <p>
            <Link href="/regions" className="prose__subtitle-link">
              지역별 상세 페이지로 이동 →
            </Link>
          </p>
        </section>

        <section
          className="section section--alt content-block home-mid-cta"
          aria-labelledby="home-mid-cta-heading"
        >
          <h2 id="home-mid-cta-heading" className="section-title">
            예약·문의
          </h2>
          <p className="prose__lead">
            코스나 일정이 정해지지 않았어도 가능 여부부터 편하게 문의해 주세요.
          </p>
          <div className="hero__actions">
            <CtaButtonsFromConfig />
          </div>
        </section>

        <section id="faq" className="content-block" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="section-title">
            자주 묻는 질문
          </h2>
          <p className="prose__lead">이용 전에 자주 묻는 내용을 모았습니다.</p>
          <ul className="faq-list" role="list">
            {FAQ_ITEMS.map((item, i) => (
              <li key={i} className="faq-list__item">
                <h3 className="faq-list__q">{item.question}</h3>
                <p className="faq-list__a">{item.answer}</p>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </>
  );
}
