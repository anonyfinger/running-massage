import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { createSocialMetadata } from "@/lib/seo-metadata";
import { homePageContent } from "@/lib/home-page-content";
import { homeBrandContent } from "@/lib/home-brand-content";
import { HomeStructuredData } from "@/components/HomeStructuredData";
import { HomeFAQSchema, FAQ_ITEMS } from "@/components/HomeFAQSchema";
import { CtaButtonsFromConfig } from "@/components/CtaButtons";

export const metadata = createSocialMetadata({
  title: siteConfig.metaTitle,
  description: siteConfig.metaDescription,
  path: "/",
  keywords: [
    "영등포출장마사지",
    "24시 영등포출장안마",
    "영등포출장홈타이",
    "영등포 출장마사지",
    "출장마사지",
    "영등포 방문 마사지",
    "여의도 출장마사지",
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
                출장달리기는 영등포 출장마사지 이용 정보를 정리하는 안내 페이지입니다. 여의도·영등포역·문래·당산·신길·대림 생활권 기준의 이용 흐름과 예약 정보를 모아 안내합니다.
              </p>
              <div className="hero__actions">
                <CtaButtonsFromConfig />
              </div>
            </div>
          </div>
        </section>

        <section id="brand" className="content-block" aria-labelledby="brand-heading">
          <h2 id="brand-heading" className="section-title">
            영등포 출장마사지가 잘 맞는 상황
          </h2>
          <div className="prose">
            {homeBrandContent.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <h3 className="prose__subtitle">{homeBrandContent.criteriaTitle}</h3>
            <p>{homeBrandContent.criteriaBody}</p>
          </div>
        </section>

        <section id="service" className="content-block" aria-labelledby="service-heading">
          <h2 id="service-heading" className="section-title">
            생활권별 이용 장면과 선택 기준
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

        <section className="content-block section section--white" aria-labelledby="choice-heading">
          <h2 id="choice-heading" className="section-title">
            이럴 때 영등포 출장마사지가 더 편합니다
          </h2>
          <div className="prose">
            <p>{homePageContent.quickChoiceIntro}</p>
            <ul className="faq-list" role="list">
              {homePageContent.situationGuides.map((item, i) => (
                <li key={i} className="faq-list__item">
                  <p className="faq-list__a">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="regions"
          className="content-block home-region-nav"
          aria-labelledby="home-region-heading"
        >
          <h2 id="home-region-heading" className="section-title">
            예약 전에 같이 보면 좋은 실전 가이드
          </h2>
          <p className="page-article__sub" style={{ marginBottom: "1rem" }}>
            {homePageContent.regionLead}
          </p>
          <ul className="home-representative-regions" role="list">
            {homeBrandContent.representativeRegionLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="prose__subtitle-link">
                  {label} 바로 보기
                </Link>
              </li>
            ))}
          </ul>
          <p style={{ marginTop: "1rem" }}>
            <Link href="/regions/yeongdeungpo/massage" className="prose__subtitle-link">
              영등포 출장마사지 바로 보기 →
            </Link>
          </p>
          <p style={{ marginTop: "0.5rem" }}>
            <Link href="/reserve" className="prose__subtitle-link">
              영등포 출장마사지 예약문의 바로 가기 →
            </Link>
          </p>
        </section>

        <section id="faq" className="content-block" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="section-title">
            예약 전에 바로 정리할 항목
          </h2>
          <p className="prose__lead">서비스를 고르기 전, 아래 세 가지를 먼저 정리하면 실제 예약 대화가 훨씬 빨라집니다.</p>
          <ul className="faq-list" role="list">
            {homePageContent.starterChecklist.map((item, i) => (
              <li key={i} className="faq-list__item">
                <p className="faq-list__a">{item}</p>
              </li>
            ))}
          </ul>
          <p className="prose__lead" style={{ marginTop: "1rem" }}>
            더 자세한 흐름은{" "}
            <Link href="/regions/common/reservation-guide" className="prose__subtitle-link">
              출장마사지 예약 가이드
            </Link>
            에서 확인하실 수 있습니다.
          </p>
          <ul className="faq-list" role="list" style={{ marginTop: "2rem" }}>
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
