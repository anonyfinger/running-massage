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
  title: "출장달리기 | 서울·경기 출장마사지 예약 안내",
  description:
    "출장달리기는 서울·경기 생활권 기준의 출장마사지 이용 정보, 예약 흐름, 지역별 안내 문서를 정리한 서비스 허브입니다.",
  path: "/",
  keywords: [
    "출장마사지",
    "출장 마사지 예약",
    "서울 출장마사지",
    "경기 출장마사지",
    "출장마사지 예약 가이드",
    "영등포 출장마사지",
    "여의도 출장마사지",
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
              src="/post_img/출장마사지-이용-시나리오-직장인.jpg"
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
                출장달리기는 서울·경기 생활권 기준의 출장마사지 이용 정보를 정리하는 안내 허브입니다. 영등포·여의도·문래·당산 같은 대표 생활권 문서와 예약 흐름, 24시간 이용 가이드를 함께 제공합니다.
              </p>
              <div className="hero__actions">
                <CtaButtonsFromConfig />
              </div>
            </div>
          </div>
        </section>

        <section id="brand" className="content-block" aria-labelledby="brand-heading">
          <h2 id="brand-heading" className="section-title">
            출장마사지가 잘 맞는 상황과 대표 생활권 안내
          </h2>
          <div className="prose">
            <p>
              출장달리기 홈은 특정 지역 키워드 하나만 밀어붙이는 페이지가 아니라, 서울·경기 생활권 전반의 이용 장면을 정리하고 대표 지역 문서로 연결하는 허브 역할을 합니다.
              그래서 홈에서는 브랜드와 예약 흐름을 먼저 설명하고, 각 지역별 대표 문서에서 더 구체적인 생활권 정보와 이용 기준을 확인하도록 구조를 나누는 편이 검색 신호에도 유리합니다.
            </p>
            <p>
              예를 들어 여의도처럼 장시간 좌식 업무가 많은 곳, 영등포역처럼 이동과 숙박 수요가 많은 곳, 문래처럼 작업 동선이 긴 곳은 이용 상황이 서로 다릅니다.
              홈에서는 이런 차이를 간단히 보여주고, 실제 키워드 경쟁은 각 지역 전용 페이지가 맡도록 분리하는 것이 더 자연스럽습니다.
            </p>
            <h3 className="prose__subtitle">대표 문서를 먼저 확인해야 하는 이유</h3>
            <p>
              검색 사용자는 단순히 서비스 이름만 찾지 않고, 내 위치에서 가능한지, 어떤 흐름으로 문의하면 되는지, 예약 전에 무엇을 준비해야 하는지를 함께 확인합니다.
              그래서 홈은 전체 구조를 소개하고, 영등포처럼 경쟁이 치열한 키워드는 별도 대표 페이지에서 더 깊게 설명하는 방식이 효율적입니다.
            </p>
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
            이럴 때 출장마사지가 더 편합니다
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
            <Link href="/yeongdeungpo-chuljangmassage" className="prose__subtitle-link">
              영등포 대표 안내 문서 바로 보기 →
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
          <p className="prose__lead" style={{ marginTop: "0.5rem" }}>
            바로 문의가 필요하면{" "}
            <Link href="/reserve" className="prose__subtitle-link">
              예약문의 페이지
            </Link>
            로 이동해 위치·장소·시간대를 먼저 전달해 주세요.
          </p>
          <p className="prose__lead" style={{ marginTop: "0.5rem" }}>
            세부 가이드는{" "}
            <Link href="/guides" className="prose__subtitle-link">
              영등포 출장마사지 보조 문서 모음
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
