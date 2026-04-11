import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getRegion,
  getArticle,
  getArticleContent,
  getAllArticlePaths,
  getRegionSupportingLinks,
} from "@/lib/region-posts";
import { createSocialMetadata } from "@/lib/seo-metadata";
import { CtaButtonsFromConfig } from "@/components/CtaButtons";
import { ArticleStructuredData } from "@/components/ArticleStructuredData";

type Props = { params: Promise<{ region: string; slug: string }> };
type ArticleSection = { title: string; paragraphs: string[] };

function parseFaqParagraphs(paragraphs: string[]) {
  return paragraphs
    .map((paragraph) => {
      const match = paragraph.match(/^Q\.\s*(.*?)\s*A\.\s*(.*)$/);
      if (!match) return null;
      return { question: match[1].trim(), answer: match[2].trim() };
    })
    .filter((item): item is { question: string; answer: string } => Boolean(item));
}

export async function generateStaticParams() {
  return getAllArticlePaths();
}

export async function generateMetadata({ params }: Props) {
  const { region, slug } = await params;
  const regionData = getRegion(region);
  const article = getArticle(region, slug);
  if (!regionData || !article)
    return {
      title: "게시글을 찾을 수 없습니다",
      robots: { index: false, follow: false },
    };
  const keywordsBySlug: Record<string, string[]> = {
    massage: [article.title, `${regionData.name} 방문 마사지`, `${regionData.name} 홈케어 마사지`, `${regionData.name} 출장마사지 예약`],
    allnight: [article.title, "심야 출장마사지", "24시간 출장마사지", "출장마사지 야간 예약"],
    "reservation-guide": [article.title, "출장마사지 예약", "방문 마사지 예약 방법", "출장마사지 준비 사항"],
  };

  const metadata = createSocialMetadata({
    title: `${article.title} | ${regionData.name}`,
    description: article.description,
    path: `/regions/${region}/${slug}`,
    keywords: keywordsBySlug[slug] ?? [article.title, `${regionData.name} 출장마사지`],
  });

  if (region === "common") {
    return {
      ...metadata,
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  return metadata;
}

export default async function ArticlePage({ params }: Props) {
  const { region, slug } = await params;
  const regionData = getRegion(region);
  const article = getArticle(region, slug);
  if (!regionData || !article) notFound();

  const sections: ArticleSection[] = getArticleContent(region, slug);
  const massageRepresentative =
    slug !== "massage" ? regionData.articles.find((item) => item.slug === "massage") : undefined;
  const siblingArticles = regionData.articles.filter((item) => item.slug !== slug && item.slug !== "massage");
  const supportingLinks = getRegionSupportingLinks(region);
  const commonLinks = [
    { label: "영등포 출장마사지 안내", href: "/regions/yeongdeungpo/massage" },
    { label: "출장마사지 예약 가이드", href: "/regions/common/reservation-guide" },
  ];
  const isYeongdeungpoPrimary = region === "yeongdeungpo" && slug === "massage";
  const articleHubHref = "/regions/yeongdeungpo/massage";
  const articleHubLabel = "영등포 출장마사지";

  if (isYeongdeungpoPrimary) {
    const overviewSections = sections.slice(0, 2);
    const serviceSections = sections.slice(2, 4);
    const prepSections = sections.slice(4, 7);
    const practicalSections = sections.slice(7, -1);
    const faqSection = sections.at(-1);
    const faqIntroParagraphs = (faqSection?.paragraphs ?? []).filter(
      (paragraph) => !paragraph.startsWith("Q. "),
    );
    const faqItems = parseFaqParagraphs(faqSection?.paragraphs ?? []);
    const summaryCards = [
      {
        title: "주요 이용 장면",
        body: "여의도 외근 후 호텔, 영등포역·당산·문래 퇴근 후 집, 신길·대림 주거권처럼 이동을 줄이고 바로 쉬고 싶은 날에 특히 잘 맞습니다.",
      },
      {
        title: "자주 선택하는 장소",
        body: "집이 가장 기본적이고, 여의도·영등포역권은 호텔 이용 비중이 높습니다. 오피스는 단독 공간이 확보될 때만 현실적입니다.",
      },
      {
        title: "코스 고르는 기준",
        body: "오늘 가장 불편한 부위가 뚜렷하면 부분 집중, 몸 전체가 무겁고 충분히 쉴 수 있으면 전신 쪽이 더 자연스럽습니다.",
      },
      {
        title: "예약 전에 필요한 것",
        body: "생활권, 장소 유형, 희망 시간대, 불편한 부위, 진입 정보까지 다섯 가지만 정리해도 실제 안내가 훨씬 빨라집니다.",
      },
    ] as const;
    const bookingSteps = [
      {
        title: "현재 위치와 장소를 정합니다",
        body: "여의도·당산·문래·신길처럼 생활권을 먼저 정하고, 집·호텔·오피스 중 어디에서 받을지 함께 생각합니다.",
      },
      {
        title: "오늘 몸 상태를 짧게 정리합니다",
        body: "목·어깨, 허리, 하체, 전신처럼 가장 불편한 부위와 전신/부분 여부만 정해도 코스 판단이 쉬워집니다.",
      },
      {
        title: "시간대와 진입 정보를 확인합니다",
        body: "평일 저녁인지 심야인지, 공동현관·주차·로비 동선·카드키 여부 같은 현장 정보를 함께 보면 시행착오가 줄어듭니다.",
      },
      {
        title: "받은 뒤 쉬는 흐름까지 생각합니다",
        body: "샤워 후 바로 잘지, 다시 외출할지까지 같이 보면 집이 나은지 호텔이 나은지, 전신이 나은지 부분이 나은지가 더 또렷해집니다.",
      },
    ] as const;

    return (
      <>
        <ArticleStructuredData region={regionData} article={article} sections={sections} />
        <article>
          <section id="intro" className="hero" aria-labelledby="hero-heading">
            <div className="hero__bg-slide hero__bg-slide--1 hero__bg-slide--img" aria-hidden="true">
              <Image
                src="/post_img/고품격-출장마사지-스웨디시-서비스.jpg"
                alt="영등포 출장마사지 대표 랜딩 배경 이미지"
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
                  영등포 출장마사지
                </h1>
                <p className="hero__lead">
                  여의도·영등포역·문래·당산·신길·대림 생활권을 한 번에 읽는 대표 랜딩
                </p>
                <p className="hero__sub">
                  한 페이지 안에서 영등포 출장마사지 검색자가 생활권 차이, 장소 선택, 예약 흐름을 한 번에 이해할 수 있게
                  바로 이해할 수 있게 정리했습니다.
                </p>
                <div className="hero__actions">
                  <CtaButtonsFromConfig />
                </div>
              </div>
            </div>
          </section>

          <section className="content-block section section--white" aria-labelledby="snapshot-heading">
            <h2 id="snapshot-heading" className="section-title">
              한눈에 보는 영등포 출장마사지 이용 정보
            </h2>
            <ul className="faq-list" role="list">
              {summaryCards.map((item) => (
                <li key={item.title} className="faq-list__item">
                  <h3 className="faq-list__q">{item.title}</h3>
                  <p className="faq-list__a">{item.body}</p>
                </li>
              ))}
            </ul>
          </section>

          <section id="brand" className="content-block" aria-labelledby="brand-heading">
            <nav className="breadcrumb-nav" aria-label="breadcrumb">
              <Link href="/">홈</Link>
              <span className="breadcrumb-nav__sep">/</span>
              <Link href="/regions/yeongdeungpo/massage">영등포 출장마사지</Link>
              <span className="breadcrumb-nav__sep">/</span>
              <span aria-current="page">{article.title}</span>
            </nav>
            <h2 id="brand-heading" className="section-title">
              영등포 출장마사지가 잘 맞는 상황과 생활권 차이
            </h2>
            <div className="prose">
              {overviewSections.map((section, sectionIndex) => (
                <section
                  key={section.title}
                  className="page-article__section"
                  aria-labelledby={`overview-section-${sectionIndex}`}
                >
                  {sectionIndex > 0 ? (
                    <h3 id={`overview-section-${sectionIndex}`} className="prose__subtitle">
                      {section.title}
                    </h3>
                  ) : (
                    <span id={`overview-section-${sectionIndex}`} className="sr-only">
                      {section.title}
                    </span>
                  )}
                  {section.paragraphs.map((paragraph, index) => (
                    <p key={`${section.title}-${index}`}>{paragraph}</p>
                  ))}
                </section>
              ))}
            </div>
          </section>

          <section className="content-block section section--alt" aria-labelledby="process-heading">
            <h2 id="process-heading" className="section-title">
              영등포 출장마사지 이용 절차
            </h2>
            <div className="prose">
              <p>
                아래 순서대로 생각하면 처음 이용하는 분도 훨씬 덜 막막합니다. 복잡한 설명보다 현재 상황을 짧게 정리하는 것이 핵심입니다.
              </p>
            </div>
            <ol className="faq-list" role="list">
              {bookingSteps.map((step, index) => (
                <li key={step.title} className="faq-list__item">
                  <h3 className="faq-list__q">{index + 1}. {step.title}</h3>
                  <p className="faq-list__a">{step.body}</p>
                </li>
              ))}
            </ol>
          </section>

          <section id="service" className="content-block" aria-labelledby="service-heading">
            <h2 id="service-heading" className="section-title">
              장소 선택과 코스 판단
            </h2>
            <div className="prose">
              {serviceSections.map((section, index) => (
                <section
                  key={section.title}
                  className="page-article__section"
                  aria-labelledby={`service-section-${index}`}
                >
                  <h3 id={`service-section-${index}`} className="prose__subtitle">
                    {section.title}
                  </h3>
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p key={`${section.title}-${paragraphIndex}`}>{paragraph}</p>
                  ))}
                </section>
              ))}
            </div>
          </section>

          <section className="content-block section section--white" aria-labelledby="choice-heading">
            <h2 id="choice-heading" className="section-title">
              예약 전 판단 기준과 시간대별 팁
            </h2>
            <div className="prose">
              {prepSections.map((section, index) => (
                <section
                  key={section.title}
                  className="page-article__section"
                  aria-labelledby={`prep-section-${index}`}
                >
                  <h3 id={`prep-section-${index}`} className="prose__subtitle">
                    {section.title}
                  </h3>
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p key={`${section.title}-${paragraphIndex}`}>{paragraph}</p>
                  ))}
                </section>
              ))}
            </div>
          </section>

          <section id="regions" className="content-block home-region-nav" aria-labelledby="home-region-heading">
            <h2 id="home-region-heading" className="section-title">
              집·호텔 이용 팁과 받은 뒤 관리
            </h2>
            <div className="prose" style={{ marginBottom: "1rem" }}>
              {practicalSections.map((section, index) => (
                <section
                  key={section.title}
                  className="page-article__section"
                  aria-labelledby={`practical-section-${index}`}
                >
                  <h3 id={`practical-section-${index}`} className="prose__subtitle">
                    {section.title}
                  </h3>
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p key={`${section.title}-${paragraphIndex}`}>{paragraph}</p>
                  ))}
                </section>
              ))}
            </div>
            <ul className="home-representative-regions" role="list">
              <li>
                <Link href="/massage" className="prose__subtitle-link">
                  출장마사지 안내 보기
                </Link>
              </li>
              <li>
                <Link href="/regions/yeongdeungpo/massage" className="prose__subtitle-link">
                  영등포 출장마사지 안내 보기
                </Link>
              </li>
              <li>
                <Link href="/regions/common/reservation-guide" className="prose__subtitle-link">
                  출장마사지 예약 가이드 안내 보기
                </Link>
              </li>
              <li>
                <Link href="/regions/common/allnight" className="prose__subtitle-link">
                  24시간 출장마사지 안내 보기
                </Link>
              </li>
            </ul>
          </section>

          <section id="faq" className="content-block" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="section-title">
              영등포 출장마사지 자주 묻는 질문
            </h2>
            {faqSection && faqIntroParagraphs.length > 0 ? (
              <div className="prose">
                <h3 className="prose__subtitle">{faqSection.title}</h3>
                {faqIntroParagraphs.map((paragraph, index) => (
                  <p key={`faq-section-${index}`}>{paragraph}</p>
                ))}
              </div>
            ) : null}
            {faqItems.length > 0 ? (
              <ul className="faq-list" role="list" style={{ marginTop: "2rem" }}>
                {faqItems.map((item) => (
                  <li key={item.question} className="faq-list__item">
                    <h3 className="faq-list__q">{item.question}</h3>
                    <p className="faq-list__a">{item.answer}</p>
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        </article>
      </>
    );
  }

  return (
    <>
      <ArticleStructuredData region={regionData} article={article} sections={sections} />
      <article className="page-article article-detail-page">
        <div className="content-block">
          <nav className="breadcrumb-nav" aria-label="breadcrumb">
            <Link href="/">홈</Link>
            <span className="breadcrumb-nav__sep">/</span>
            <Link href="/regions/yeongdeungpo/massage">영등포 출장마사지</Link>
            <span className="breadcrumb-nav__sep">/</span>
            <span aria-current="page">{article.title}</span>
          </nav>

          <h1 className="page-article__title">{article.title}</h1>
          <p className="page-article__lead">{article.description}</p>

          <div className="article-detail__body">
            {sections.map((section, i) => (
              <section
                key={i}
                className="page-article__section"
                aria-labelledby={`section-${i}`}
              >
                <h2 id={`section-${i}`} className="page-article__section-title">
                  {section.title}
                </h2>
                <div className="page-article__prose">
                  {section.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <section className="content-block" aria-labelledby="related-docs-heading">
            <h2 id="related-docs-heading" className="section-title">
              {regionData.name} 출장마사지와 함께 보면 좋은 문서
            </h2>
            <div className="prose">
              <p>
                이 문서는 {regionData.name} 지역 맥락을 설명하는 문서입니다. 같은 권역의 다른 지역이나 공통 예약 흐름은 아래
                문서를 함께 보면 판단이 더 빨라집니다.
              </p>
            </div>
            <ul className="regions-hub__secondary" role="list">
              {massageRepresentative ? (
                <li key={massageRepresentative.slug}>
                  <Link href={`/regions/${region}/${massageRepresentative.slug}`} className="prose__subtitle-link">
                    {massageRepresentative.title} 안내
                  </Link>
                </li>
              ) : null}
              {siblingArticles.map((item) => (
                <li key={item.slug}>
                  <Link href={`/regions/${region}/${item.slug}`} className="prose__subtitle-link">
                    {item.title}
                  </Link>
                </li>
              ))}
              {commonLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="prose__subtitle-link">
                    {item.label}
                  </Link>
                </li>
              ))}
              {supportingLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="prose__subtitle-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <div className="article-detail__cta">
            <CtaButtonsFromConfig />
          </div>

          <nav className="article-detail__back" aria-label="이전 페이지">
            <Link href={articleHubHref} className="page-article__back">
              ← {articleHubLabel}로 돌아가기
            </Link>
          </nav>
        </div>
      </article>
    </>
  );
}
