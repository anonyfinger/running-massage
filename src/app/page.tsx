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
  const { homeHeroH1, homeHeroLead } = siteConfig;

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
            <div className="hero__content">
              <h1 id="hero-heading" className="hero__title">
                {homeHeroH1}
              </h1>
              <p className="hero__lead">{homeHeroLead}</p>
              <p className="hero__sub">
                지정 장소로 방문합니다. 코스·비용·준비는 상세 페이지와 FAQ를 참고해 주세요.
              </p>
              <div className="hero__actions">
                <CtaButtonsFromConfig />
              </div>
            </div>
          </div>
        </section>

        <section id="service" className="content-block" aria-labelledby="service-heading">
          <h2 id="service-heading" className="section-title">
            서비스 요약
          </h2>
          <div className="prose">
            {homePageContent.intro.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
            {homePageContent.serviceTeasers.map(({ href, title, line }) => (
              <div key={href} className="home-service-teaser">
                <h3 className="prose__subtitle">
                  <Link href={href} className="prose__subtitle-link">
                    {title}
                  </Link>
                </h3>
                <p>{line}</p>
                <p>
                  <Link href={href} className="prose__subtitle-link">
                    상세 보기 →
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
            <p className="prose__lead" style={{ marginBottom: "1rem" }}>
              {homePageContent.compareLead}
            </p>
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
